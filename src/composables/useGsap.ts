import { onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsap() {
  onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })

  function animateFadeIn(selector: string, options?: gsap.TweenVars) {
    gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          ...options,
        }
      )
    })
  }

  function animateStagger(selector: string, stagger = 0.15) {
    const elements = gsap.utils.toArray<HTMLElement>(selector)
    if (!elements.length) return

    gsap.fromTo(elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elements[0].parentElement,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }

  function animateCounter(el: HTMLElement, target: number, duration = 2) {
    const obj = { val: 0 }
    gsap.to(obj, {
      val: target,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = Math.floor(obj.val).toLocaleString()
      },
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    })
  }

  function textReveal(selector: string) {
    const el = document.querySelector(selector) as HTMLElement
    if (!el) return

    gsap.fromTo(el,
      { opacity: 0, y: 60, clipPath: 'inset(100% 0 0 0)' },
      {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.2,
        ease: 'power4.out',
      }
    )
  }

  return {
    gsap,
    ScrollTrigger,
    animateFadeIn,
    animateStagger,
    animateCounter,
    textReveal,
  }
}
