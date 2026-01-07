import { onMounted, onUnmounted, type Ref } from 'vue'
import gsap from 'gsap'

interface MarqueeOptions {
  duration?: number        // Kecepatan (makin besar = makin lambat)
  pauseOnHover?: boolean   // Apakah berhenti saat mouse di atasnya?
  direction?: 'left' | 'right' // Arah gerak
}

export function useMarquee(
  targetRef: Ref<HTMLElement | null>, 
  options: MarqueeOptions = {}
) {
  // Default Values
  const { 
    duration = 20, 
    pauseOnHover = true, 
    direction = 'left' 
  } = options

  let tween: gsap.core.Tween | null = null

  // Handler Event Listener (disimpan biar bisa di-remove)
  const handleMouseEnter = () => tween?.pause()
  const handleMouseLeave = () => tween?.play()

  onMounted(() => {
    const el = targetRef.value
    if (!el) return

    // Tentukan arah gerak
    // Jika 'left', kita geser ke -50%
    // Jika 'right', logic-nya: mulai dari -50% lalu geser ke 0% (biar mulus)
    const targetX = direction === 'left' ? -50 : 0
    const startX = direction === 'right' ? -50 : 0

    // Set posisi awal jika arahnya ke kanan
    if (direction === 'right') {
      gsap.set(el, { xPercent: -50 })
    }

    // Buat Tween
    tween = gsap.to(el, {
      xPercent: targetX,
      duration: duration,
      repeat: -1,
      ease: 'none',
    })

    // Pasang Event Listener Pause
    if (pauseOnHover) {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    }
  })

  onUnmounted(() => {
    // Bersihkan Memori & Event Listener
    tween?.kill()
    if (targetRef.value && pauseOnHover) {
      targetRef.value.removeEventListener('mouseenter', handleMouseEnter)
      targetRef.value.removeEventListener('mouseleave', handleMouseLeave)
    }
  })

  // Return tween in case butuh kontrol manual di component
  return { tween }
}