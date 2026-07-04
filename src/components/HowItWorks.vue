<script setup lang="ts">
import { onMounted } from 'vue'
import { useGsap } from '../composables/useGsap'

const { gsap } = useGsap()

const steps = [
  {
    number: '01',
    title: 'Зарегистрируйся',
    description: 'Вход через Telegram за 2 секунды — без паролей и долгих форм.',
    icon: '🚀',
  },
  {
    number: '02',
    title: 'Выбери квиз',
    description: 'Сотни квизов на разные темы — от науки до поп-культуры.',
    icon: '📚',
  },
  {
    number: '03',
    title: 'Соревнуйся',
    description: 'Набирай баллы, поднимайся в рейтинге и обгоняй друзей.',
    icon: '🏆',
  },
]

onMounted(() => {
  const cards = gsap.utils.toArray<HTMLElement>('.step-card')

  cards.forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      }
    )
  })

  // Animate the connecting line
  gsap.fromTo('.steps__line',
    { scaleY: 0 },
    {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.steps',
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: 1,
      },
    }
  )
})
</script>

<template>
  <section class="section section--alt how-it-works">
    <div class="container">
      <div class="section__header">
        <span class="section__badge">🎮 Просто</span>
        <h2 class="section__title">Как это работает</h2>
        <p class="section__subtitle">3 простых шага — и ты уже в игре</p>
      </div>

      <div class="steps">
        <div class="steps__line"></div>

        <div
          v-for="step in steps"
          :key="step.number"
          class="step-card"
        >
          <div class="step-card__number">{{ step.number }}</div>
          <div class="step-card__icon">{{ step.icon }}</div>
          <div class="step-card__content">
            <h3 class="step-card__title">{{ step.title }}</h3>
            <p class="step-card__desc">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.steps {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.steps__line {
  position: absolute;
  left: 39px;
  top: 40px;
  bottom: 40px;
  width: 2px;
  background: var(--accent-gradient);
  transform-origin: top;
  opacity: 0.3;
}

.step-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 28px 32px;
  background: var(--bg-card);
  border-radius: var(--radius);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: var(--shadow-sm);
  position: relative;
  transition: all var(--transition);
}

.step-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateX(8px);
}

.step-card__number {
  font-size: 13px;
  font-weight: 700;
  color: var(--accent);
  background: var(--accent-bg);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step-card__icon {
  font-size: 28px;
  flex-shrink: 0;
}

.step-card__content {
  flex: 1;
}

.step-card__title {
  font-size: 18px;
  margin-bottom: 4px;
  color: var(--text-heading);
}

.step-card__desc {
  font-size: 15px;
  color: var(--text);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .step-card {
    padding: 20px;
    gap: 14px;
  }

  .steps__line {
    left: 33px;
  }

  .step-card__icon {
    font-size: 24px;
  }
}
</style>
