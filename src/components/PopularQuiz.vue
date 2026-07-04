<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGsap } from '../composables/useGsap'
import { fetchPopularQuiz, type PopularQuiz as PopularQuizType } from '../composables/useApi'

const { animateFadeIn } = useGsap()
const quiz = ref<PopularQuizType | null>(null)

onMounted(async () => {
  quiz.value = await fetchPopularQuiz()
  animateFadeIn('.popular-quiz__card')
})
</script>

<template>
  <section class="section popular-quiz">
    <div class="container">
      <div class="section__header">
        <span class="section__badge">🔥 Хит</span>
        <h2 class="section__title">Популярный квиз</h2>
        <p class="section__subtitle">
          Самый проходимый квиз на платформе — присоединяйся!
        </p>
      </div>

      <div class="popular-quiz__card card" v-if="quiz">
        <div class="popular-quiz__body">
          <div class="popular-quiz__info">
            <h3 class="popular-quiz__title">{{ quiz.title }}</h3>
            <p class="popular-quiz__desc">{{ quiz.description }}</p>

            <div class="popular-quiz__stats">
              <div class="stat">
                <span class="stat__value">{{ quiz.attempts_count.toLocaleString() }}</span>
                <span class="stat__label">прохождений</span>
              </div>
              <div class="stat">
                <span class="stat__value">{{ quiz.questions_count }}</span>
                <span class="stat__label">вопросов</span>
              </div>
            </div>

            <a :href="`https://dovtalab.app/quiz/${quiz.id}`" class="btn btn--primary">
              Пройти квиз
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div class="popular-quiz__visual">
            <div class="popular-quiz__decoration">
              <div class="decoration__ring"></div>
              <div class="decoration__ring decoration__ring--2"></div>
              <span class="decoration__icon">🏆</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Fallback -->
      <div class="popular-quiz__card card" v-else>
        <div class="popular-quiz__body">
          <div class="popular-quiz__info">
            <h3 class="popular-quiz__title">Тысячи квизов ждут тебя</h3>
            <p class="popular-quiz__desc">Присоединяйся к платформе и начни проходить квизы уже сегодня</p>
            <a href="https://dovtalab.app" class="btn btn--primary">
              Перейти на платформу
            </a>
          </div>
          <div class="popular-quiz__visual">
            <div class="popular-quiz__decoration">
              <div class="decoration__ring"></div>
              <div class="decoration__ring decoration__ring--2"></div>
              <span class="decoration__icon">🏆</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.popular-quiz__card {
  max-width: 800px;
  margin: 0 auto;
  padding: 48px;
  overflow: hidden;
}

.popular-quiz__body {
  display: flex;
  align-items: center;
  gap: 48px;
}

.popular-quiz__info {
  flex: 1;
}

.popular-quiz__title {
  font-size: 28px;
  margin-bottom: 12px;
}

.popular-quiz__desc {
  color: var(--text);
  margin-bottom: 24px;
  line-height: 1.6;
}

.popular-quiz__stats {
  display: flex;
  gap: 32px;
  margin-bottom: 28px;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat__value {
  font-size: 28px;
  font-weight: 700;
  color: var(--accent);
}

.stat__label {
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 2px;
}

.popular-quiz__visual {
  flex-shrink: 0;
}

.popular-quiz__decoration {
  position: relative;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.decoration__ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid var(--accent-border);
  animation: spin 20s linear infinite;
}

.decoration__ring--2 {
  inset: 16px;
  border-color: rgba(254, 192, 45, 0.15);
  animation-direction: reverse;
  animation-duration: 15s;
}

.decoration__icon {
  font-size: 48px;
  position: relative;
  z-index: 1;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .popular-quiz__card {
    padding: 28px;
  }

  .popular-quiz__body {
    flex-direction: column-reverse;
    gap: 24px;
    text-align: center;
  }

  .popular-quiz__stats {
    justify-content: center;
  }

  .popular-quiz__decoration {
    width: 120px;
    height: 120px;
  }

  .decoration__icon {
    font-size: 36px;
  }
}
</style>
