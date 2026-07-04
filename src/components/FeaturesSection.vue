<script setup lang="ts">
import { onMounted } from 'vue'
import { useGsap } from '../composables/useGsap'

const { animateStagger } = useGsap()

const features = [
  {
    icon: '🧠',
    title: '4 типа вопросов',
    description: 'Одиночный и множественный выбор, сопоставление, ввод текста — разнообразие не даст заскучать.',
  },
  {
    icon: '🏆',
    title: 'Рейтинг и лидерборд',
    description: 'Соревнуйся с друзьями и тысячами игроков за первое место — за неделю, месяц и всё время.',
  },
  {
    icon: '🔥',
    title: 'Streak система',
    description: 'Заходи каждый день и не теряй серию. Чем длиннее streak — тем круче твой профиль.',
  },
  {
    icon: '📊',
    title: 'Детальная статистика',
    description: 'Узнай свои слабые места, отслеживай прогресс и смотри историю всех попыток.',
  },
  {
    icon: '⚡',
    title: 'Exam Mode',
    description: 'Быстрый тест с рандомными вопросами и лимитом — проверь себя за 5 минут.',
  },
  {
    icon: '🎯',
    title: 'Контексты',
    description: 'Проходи квизы по темам — фильтрация вопросов по контекстам для точечной подготовки.',
  },
]

onMounted(() => {
  animateStagger('.feature-card', 0.12)
})
</script>

<template>
  <section class="section features" id="features">
    <div class="container">
      <div class="section__header">
        <span class="section__badge">✨ Возможности</span>
        <h2 class="section__title">Всё для эффективной учёбы</h2>
        <p class="section__subtitle">
          Геймификация, статистика и соревнования — учиться ещё никогда не было так увлекательно
        </p>
      </div>

      <div class="features__grid">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="card feature-card"
        >
          <div class="feature-card__icon">{{ feature.icon }}</div>
          <h3 class="feature-card__title">{{ feature.title }}</h3>
          <p class="feature-card__desc">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  text-align: left;
  padding: 32px;
}

.feature-card__icon {
  font-size: 36px;
  margin-bottom: 16px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background: var(--accent-bg);
}

.feature-card__title {
  font-size: 18px;
  margin-bottom: 8px;
  color: var(--text-heading);
}

.feature-card__desc {
  font-size: 15px;
  color: var(--text);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .features__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .features__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
