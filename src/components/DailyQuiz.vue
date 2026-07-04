<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useGsap } from '../composables/useGsap'
import { fetchDailyQuestion, submitDailyAnswer, type DailyQuestion, type DailyAnswerResult } from '../composables/useApi'

const { animateFadeIn } = useGsap()

const question = ref<DailyQuestion | null>(null)
const selectedOption = ref<number | null>(null)
const result = ref<DailyAnswerResult | null>(null)
const isSubmitting = ref(false)
const hasAnswered = ref(false)

const options = computed(() => question.value?.payload?.options ?? [])

async function loadQuestion() {
  question.value = await fetchDailyQuestion()
}

async function selectAnswer(optionId: number) {
  if (hasAnswered.value || isSubmitting.value) return
  selectedOption.value = optionId
  isSubmitting.value = true

  const res = await submitDailyAnswer(question.value!.id, optionId)
  result.value = res
  hasAnswered.value = true
  isSubmitting.value = false
}

function getOptionClass(optionId: number) {
  if (!hasAnswered.value) {
    return selectedOption.value === optionId ? 'option--selected' : ''
  }
  if (result.value?.correct && optionId === selectedOption.value) {
    return 'option--correct'
  }
  if (!result.value?.correct) {
    if (optionId === selectedOption.value) return 'option--wrong'
    if (optionId === result.value?.correct_answer) return 'option--correct'
  }
  return ''
}

onMounted(async () => {
  await loadQuestion()
  animateFadeIn('.daily-quiz')
})
</script>

<template>
  <section class="section section--alt daily-quiz" id="daily-quiz">
    <div class="container">
      <div class="section__header">
        <span class="section__badge">🎯 Каждый день</span>
        <h2 class="section__title">Викторина дня</h2>
        <p class="section__subtitle">
          Ответь на вопрос прямо здесь — проверь свои знания за 10 секунд
        </p>
      </div>

      <div class="daily-quiz__card card" v-if="question">
        <div class="daily-quiz__meta">
          <span class="daily-quiz__from">Из квиза: {{ question.quiz_title }}</span>
        </div>

        <h3 class="daily-quiz__question">{{ question.text }}</h3>

        <div class="daily-quiz__options">
          <button
            v-for="option in options"
            :key="option.id"
            class="option"
            :class="getOptionClass(option.id)"
            :disabled="hasAnswered"
            @click="selectAnswer(option.id)"
          >
            <span class="option__marker">{{ String.fromCharCode(65 + option.id) }}</span>
            <span class="option__text">{{ option.text }}</span>
            <span v-if="hasAnswered && getOptionClass(option.id) === 'option--correct'" class="option__icon">✓</span>
            <span v-if="hasAnswered && getOptionClass(option.id) === 'option--wrong'" class="option__icon">✗</span>
          </button>
        </div>

        <div v-if="hasAnswered" class="daily-quiz__result">
          <div v-if="result?.correct" class="result result--correct">
            <span class="result__icon">🎉</span>
            <span>Правильно! Отличная работа</span>
          </div>
          <div v-else class="result result--wrong">
            <span class="result__icon">😅</span>
            <span>Не угадал. Попробуй завтра!</span>
          </div>
          <a href="https://dovtalab.app" class="btn btn--primary daily-quiz__cta">
            Хочу больше квизов
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Fallback if API is unavailable -->
      <div class="daily-quiz__card card" v-else>
        <div class="daily-quiz__placeholder">
          <span class="daily-quiz__placeholder-icon">🧠</span>
          <p>Вопрос дня загружается...</p>
          <a href="https://dovtalab.app" class="btn btn--secondary">Перейти на платформу</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.daily-quiz__card {
  max-width: 680px;
  margin: 0 auto;
  padding: 40px;
}

.daily-quiz__meta {
  margin-bottom: 20px;
}

.daily-quiz__from {
  font-size: 13px;
  color: var(--text-muted);
  background: var(--accent-bg);
  padding: 4px 12px;
  border-radius: 100px;
}

.daily-quiz__question {
  font-size: clamp(18px, 2vw, 24px);
  margin-bottom: 28px;
  line-height: 1.4;
}

.daily-quiz__options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.option {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-radius: var(--radius-sm);
  border: 2px solid rgba(0, 0, 0, 0.06);
  background: var(--bg);
  cursor: pointer;
  transition: all var(--transition);
  font-size: 16px;
  text-align: left;
  width: 100%;
}

.option:hover:not(:disabled) {
  border-color: var(--accent-border);
  background: var(--accent-bg);
}

.option:disabled {
  cursor: default;
}

.option__marker {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--bg-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: var(--text-muted);
  flex-shrink: 0;
}

.option__text {
  flex: 1;
  color: var(--text-heading);
}

.option__icon {
  font-size: 18px;
  font-weight: 700;
}

.option--selected {
  border-color: var(--accent);
  background: var(--accent-bg);
}

.option--correct {
  border-color: #22c55e;
  background: rgba(34, 197, 94, 0.08);
}

.option--correct .option__marker {
  background: #22c55e;
  color: white;
}

.option--wrong {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.08);
}

.option--wrong .option__marker {
  background: #ef4444;
  color: white;
}

.daily-quiz__result {
  margin-top: 28px;
  text-align: center;
}

.result {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  margin-bottom: 20px;
}

.result--correct {
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
}

.result--wrong {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
}

.result__icon {
  font-size: 20px;
}

.daily-quiz__cta {
  display: inline-flex;
  margin-top: 8px;
}

.daily-quiz__placeholder {
  text-align: center;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.daily-quiz__placeholder-icon {
  font-size: 48px;
}

@media (max-width: 768px) {
  .daily-quiz__card {
    padding: 24px;
  }
}
</style>
