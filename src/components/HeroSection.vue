<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGsap } from '../composables/useGsap'
import { fetchLandingStats } from '../composables/useApi'

const { gsap, animateCounter, textReveal } = useGsap()
const usersCount = ref(0)
const counterEl = ref<HTMLElement | null>(null)

onMounted(async () => {
  // Text reveal animations
  textReveal('.hero__title')

  gsap.fromTo('.hero__subtitle',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power3.out' }
  )

  gsap.fromTo('.hero__actions',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: 'power3.out' }
  )

  gsap.fromTo('.hero__counter',
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 0.8, delay: 1, ease: 'back.out(1.5)' }
  )

  // Floating blobs
  gsap.to('.blob--1', {
    x: 30, y: -20, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut',
  })
  gsap.to('.blob--2', {
    x: -25, y: 30, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut',
  })
  gsap.to('.blob--3', {
    x: 20, y: 25, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut',
  })

  // Fetch live stats
  const stats = await fetchLandingStats()
  if (stats && counterEl.value) {
    usersCount.value = stats.users_count
    animateCounter(counterEl.value, stats.users_count, 2.5)
  }
})
</script>

<template>
  <section class="hero">
    <!-- Background blobs -->
    <div class="hero__blobs">
      <div class="blob blob--1"></div>
      <div class="blob blob--2"></div>
      <div class="blob blob--3"></div>
    </div>

    <div class="container hero__content">
      <h1 class="hero__title">
        Проверь знания.<br>
        <span class="gradient-text">Стань лучшим.</span>
      </h1>

      <p class="hero__subtitle">
        Квизы, рейтинг, соревнования — всё в одном месте.<br>
        Учись играючи и поднимайся в топ.
      </p>

      <div class="hero__actions">
        <a href="https://dovtalab.app" class="btn btn--primary">
          Начать бесплатно
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="#features" class="btn btn--secondary">Узнать больше</a>
      </div>

      <div class="hero__counter">
        <div class="counter-badge">
          <span class="counter-badge__dot"></span>
          <span>Уже с нами: </span>
          <strong ref="counterEl">0</strong>
          <span> пользователей</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 120px 0 80px;
}

.hero__blobs {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
}

.blob--1 {
  width: 500px;
  height: 500px;
  background: rgba(254, 192, 45, 0.15);
  top: -10%;
  right: -5%;
}

.blob--2 {
  width: 400px;
  height: 400px;
  background: rgba(254, 192, 45, 0.12);
  bottom: -5%;
  left: -5%;
}

.blob--3 {
  width: 300px;
  height: 300px;
  background: rgba(254, 192, 45, 0.1);
  top: 40%;
  left: 50%;
}

.hero__content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero__title {
  margin-bottom: 24px;
}

.hero__subtitle {
  font-size: clamp(18px, 1.5vw, 22px);
  color: var(--text);
  max-width: 560px;
  margin: 0 auto 40px;
}

.hero__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.hero__counter {
  margin-top: 48px;
}

.counter-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 100px;
  background: var(--bg-alt);
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-size: 15px;
  color: var(--text);
}

.counter-badge strong {
  color: var(--accent);
  font-weight: 700;
}

.counter-badge__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.3); }
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
  }

  .hero__subtitle {
    font-size: 16px;
  }

  .blob--1 { width: 300px; height: 300px; }
  .blob--2 { width: 250px; height: 250px; }
  .blob--3 { width: 200px; height: 200px; }
}
</style>
