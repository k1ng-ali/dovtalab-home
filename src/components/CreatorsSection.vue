<script setup lang="ts">
import { onMounted } from 'vue'
import { useGsap } from '../composables/useGsap'

const { animateFadeIn } = useGsap()

onMounted(() => {
  animateFadeIn('.creators')
})
</script>

<template>
  <section class="section creators">
    <div class="container">
      <div class="creators__wrapper">
        <div class="creators__content">
          <span class="section__badge">🎨 Для авторов</span>
          <h2 class="creators__title">Создавай квизы в Studio</h2>
          <p class="creators__desc">
            У тебя есть знания, которыми хочешь поделиться? Создавай квизы, набирай аудиторию
            и помогай другим учиться. Удобный редактор, 4 типа вопросов, медиа-контент.
          </p>

          <ul class="creators__perks">
            <li class="perk">
              <span class="perk__icon">✏️</span>
              <span>Удобный визуальный редактор</span>
            </li>
            <li class="perk">
              <span class="perk__icon">📈</span>
              <span>Статистика прохождений твоих квизов</span>
            </li>
            <li class="perk">
              <span class="perk__icon">🌍</span>
              <span>Тысячи пользователей увидят твой контент</span>
            </li>
          </ul>

          <a href="https://dovtalab.studio" class="btn btn--primary">
            Открыть Studio
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>

        <div class="creators__visual">
          <div class="mock-editor">
            <div class="mock-editor__header">
              <div class="mock-editor__dots">
                <span></span><span></span><span></span>
              </div>
              <span class="mock-editor__title">Dovtalab Studio</span>
            </div>
            <div class="mock-editor__body">
              <div class="mock-editor__field">
                <span class="field-label">Вопрос</span>
                <div class="field-input">Столица Франции?</div>
              </div>
              <div class="mock-editor__options">
                <div class="mock-option mock-option--correct">Париж ✓</div>
                <div class="mock-option">Лондон</div>
                <div class="mock-option">Берлин</div>
                <div class="mock-option">Мадрид</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.creators__wrapper {
  display: flex;
  align-items: center;
  gap: 64px;
}

.creators__content {
  flex: 1;
}

.creators__title {
  margin: 16px 0;
}

.creators__desc {
  color: var(--text);
  margin-bottom: 24px;
  line-height: 1.7;
  max-width: 480px;
}

.creators__perks {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
}

.perk {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: var(--text-heading);
}

.perk__icon {
  font-size: 18px;
}

.creators__visual {
  flex: 1;
  display: flex;
  justify-content: center;
}

.mock-editor {
  width: 100%;
  max-width: 380px;
  border-radius: var(--radius);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  background: var(--bg-card);
}

.mock-editor__header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  background: var(--bg-alt);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.mock-editor__dots {
  display: flex;
  gap: 6px;
}

.mock-editor__dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.12);
}

.mock-editor__dots span:first-child { background: #ef4444; }
.mock-editor__dots span:nth-child(2) { background: #f59e0b; }
.mock-editor__dots span:last-child { background: #22c55e; }

.mock-editor__title {
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 500;
}

.mock-editor__body {
  padding: 24px;
}

.mock-editor__field {
  margin-bottom: 20px;
}

.field-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
  margin-bottom: 8px;
}

.field-input {
  padding: 12px 14px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--radius-xs);
  font-size: 15px;
  color: var(--text-heading);
}

.mock-editor__options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mock-option {
  padding: 10px 14px;
  border-radius: var(--radius-xs);
  font-size: 14px;
  background: var(--bg-alt);
  color: var(--text);
  border: 1px solid transparent;
}

.mock-option--correct {
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
  border-color: rgba(34, 197, 94, 0.3);
  font-weight: 600;
}

@media (max-width: 768px) {
  .creators__wrapper {
    flex-direction: column;
    gap: 40px;
  }

  .creators__content {
    text-align: center;
  }

  .creators__desc {
    max-width: 100%;
  }

  .creators__perks {
    align-items: center;
  }
}
</style>
