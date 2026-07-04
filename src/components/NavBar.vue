<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGsap } from '../composables/useGsap'
import logoUrl from '../assets/Logo vectors.svg'

const { gsap } = useGsap()
const scrolled = ref(false)

onMounted(() => {
  gsap.fromTo('.navbar',
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
  )

  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
})
</script>

<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="container navbar__inner">
      <a href="/" class="navbar__brand">
        <img :src="logoUrl" alt="Dovtalab" class="navbar__logo" />
        <span class="navbar__name">Dovtalab</span>
      </a>

      <div class="navbar__links">
        <a href="#features" class="navbar__link">Возможности</a>
        <a href="#daily-quiz" class="navbar__link">Викторина дня</a>
        <a href="https://t.me/dovtalab_io" class="navbar__link" target="_blank" rel="noopener">Telegram</a>
      </div>

      <a href="https://dovtalab.app" class="btn btn--primary navbar__cta">
        Войти
      </a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 16px 0;
  transition: all var(--transition);
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  padding: 12px 0;
  box-shadow: var(--shadow-sm);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.navbar__logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.navbar__name {
  font-size: 20px;
  font-weight: 800;
  color: var(--text-heading);
  letter-spacing: -0.5px;
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.navbar__link {
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
  text-decoration: none;
  transition: color var(--transition);
}

.navbar__link:hover {
  color: var(--text-heading);
}

.navbar__cta {
  padding: 10px 24px;
  font-size: 14px;
}

@media (max-width: 768px) {
  .navbar__links {
    display: none;
  }

  .navbar__logo {
    width: 34px;
    height: 34px;
  }

  .navbar__name {
    font-size: 18px;
  }

  .navbar__cta {
    padding: 8px 18px;
    font-size: 13px;
  }
}
</style>
