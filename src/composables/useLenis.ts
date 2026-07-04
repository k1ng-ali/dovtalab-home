import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useLenis() {
  let lenis: Lenis | null = null

  onMounted(() => {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis?.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  })

  onUnmounted(() => {
    if (lenis) {
      lenis.destroy()
      lenis = null
    }
  })

  return { lenis }
}
