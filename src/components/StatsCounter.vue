<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGsap } from '../composables/useGsap'
import { fetchLandingStats } from '../composables/useApi'

const { animateCounter } = useGsap()

const usersEl = ref<HTMLElement | null>(null)
const quizzesEl = ref<HTMLElement | null>(null)
const attemptsEl = ref<HTMLElement | null>(null)

/*
const stats = [
  { ref: usersEl, label: 'Пользователей', fallback: 1200 },
  { ref: quizzesEl, label: 'Квизов создано', fallback: 350 },
  { ref: attemptsEl, label: 'Попыток пройдено', fallback: 28000 },
]
 */

onMounted(async () => {
  const data = await fetchLandingStats()

  const values = {
    users: data?.users_count ?? 1200,
    quizzes: data?.quizzes_count ?? 350,
    attempts: data?.attempts_count ?? 28000,
  }

  if (usersEl.value) animateCounter(usersEl.value, values.users, 2.5)
  if (quizzesEl.value) animateCounter(quizzesEl.value, values.quizzes, 2)
  if (attemptsEl.value) animateCounter(attemptsEl.value, values.attempts, 3)
})
</script>

<template>
  <section class="section section--alt stats-section">
    <div class="container">
      <div class="section__header">
        <span class="section__badge">📈 Растём</span>
        <h2 class="section__title">Нас уже много</h2>
        <p class="section__subtitle">И каждый день становится больше</p>
      </div>

      <div class="stats__grid">
        <div class="stat-card">
          <div class="stat-card__value" ref="usersEl">0</div>
          <div class="stat-card__label">👥 Пользователей</div>
        </div>

        <div class="stat-card">
          <div class="stat-card__value" ref="quizzesEl">0</div>
          <div class="stat-card__label">📝 Квизов создано</div>
        </div>

        <div class="stat-card">
          <div class="stat-card__value" ref="attemptsEl">0</div>
          <div class="stat-card__label">✅ Попыток пройдено</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
}

.stat-card {
  text-align: center;
  padding: 40px 24px;
  border-radius: var(--radius);
  background: var(--bg-card);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
}

.stat-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.stat-card__value {
  font-size: clamp(36px, 5vw, 52px);
  font-weight: 800;
  color: var(--accent);
  letter-spacing: -1px;
  margin-bottom: 8px;
}

.stat-card__label {
  font-size: 15px;
  color: var(--text);
  font-weight: 500;
}

@media (max-width: 640px) {
  .stats__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .stat-card {
    padding: 28px 20px;
  }
}
</style>
