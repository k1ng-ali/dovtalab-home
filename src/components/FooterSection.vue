<script setup lang="ts">
import { onMounted } from 'vue'
import { useGsap } from '../composables/useGsap'
import logoUrl from '../assets/Logo vectors.svg'

const { gsap } = useGsap()

onMounted(() => {
  gsap.fromTo('.footer-cta__title',
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.footer-cta',
        start: 'top 80%',
      },
    }
  )
})
</script>

<template>
  <section class="section footer-cta">
    <div class="container">
      <div class="footer-cta__inner">
        <h2 class="footer-cta__title">
          Готов начать?<br>
          <span class="gradient-text">Присоединяйся сейчас.</span>
        </h2>
        <p class="footer-cta__desc">
          Бесплатная регистрация через Telegram. Без спама, без рекламы.
        </p>

        <div class="footer-cta__buttons">
          <a href="https://dovtalab.app" class="btn btn--primary btn--large">
            Открыть веб-платформу
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.dovtalab.app" class="btn btn--secondary btn--large" target="_blank" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z"/>
            </svg>
            Google Play
          </a>
        </div>

        <div class="footer-cta__socials">
          <span class="footer-cta__socials-label">Мы в соцсетях:</span>
          <a href="https://t.me/dovtalab_io" class="social-pill" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Telegram
          </a>
          <a href="https://instagram.com/dovtalab_io" class="social-pill" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <div class="footer__brand-row">
          <img :src="logoUrl" alt="Dovtalab" class="footer__logo-img" />
          <span class="footer__logo">Dovtalab</span>
        </div>
        <p class="footer__copy">© 2026 Dovtalab. Все права защищены.</p>
      </div>

      <div class="footer__center">
        <div class="footer__links">
          <a href="https://dovtalab.app" class="footer__link">Платформа</a>
          <a href="https://dovtalab.studio" class="footer__link">Studio</a>
          <a href="https://play.google.com/store/apps/details?id=com.dovtalab.app" class="footer__link">Android App</a>
        </div>

        <div class="footer__socials">
          <a href="https://t.me/dovtalab_io" class="footer__social" aria-label="Telegram" target="_blank" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
          <a href="https://instagram.com/dovtalab_io" class="footer__social" aria-label="Instagram" target="_blank" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.dovtalab.app" class="footer__social" aria-label="Google Play" target="_blank" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-cta {
  padding: 100px 0;
}

.footer-cta__inner {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.footer-cta__title {
  margin-bottom: 16px;
}

.footer-cta__desc {
  font-size: 18px;
  color: var(--text);
  margin-bottom: 32px;
}

.footer-cta__buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.footer-cta__socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.footer-cta__socials-label {
  font-size: 14px;
  color: var(--text-muted);
}

.social-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 100px;
  background: var(--bg-alt);
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-heading);
  text-decoration: none;
  transition: all var(--transition);
}

.social-pill:hover {
  background: var(--accent-bg);
  border-color: var(--accent-border);
  color: var(--text-heading);
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

.btn--large {
  padding: 18px 40px;
  font-size: 18px;
}

.footer {
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  padding: 32px 0;
}

.footer__inner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.footer__brand-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer__logo-img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.footer__logo {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-heading);
}

.footer__copy {
  font-size: 13px;
  color: var(--text-muted);
}

.footer__center {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
}

.footer__links {
  display: flex;
  gap: 24px;
}

.footer__link {
  font-size: 14px;
  color: var(--text);
  transition: color var(--transition);
}

.footer__link:hover {
  color: var(--accent);
}

.footer__socials {
  display: flex;
  gap: 12px;
}

.footer__social {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--bg-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  transition: all var(--transition);
}

.footer__social:hover {
  background: var(--accent-bg);
  color: var(--accent);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .footer__inner {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    text-align: center;
  }

  .footer__center {
    align-items: center;
  }
}
</style>
