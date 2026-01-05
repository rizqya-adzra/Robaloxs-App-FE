import { ref, onMounted, onUnmounted, computed, nextTick, type Ref } from 'vue'
import gsap from 'gsap'

interface CarouselOptions {
  totalItems: number 
  duration?: number
}

export function useCarousel(
  slider: Ref<HTMLElement | null>,
  options: CarouselOptions
) {
  const { duration = 0.5, totalItems } = options
  const currentIndex = ref(1) 
  const isAnimating = ref(false)
  const moveSlider = (idx: number, animate: boolean = true) => {
    if (!slider.value || !slider.value.parentElement) return
    const cards = slider.value.children
    if (cards.length === 0) return
    const cardEl = cards[0] as HTMLElement
    const container = slider.value.parentElement
    const cardWidth = cardEl.offsetWidth 
    const containerWidth = container.offsetWidth
    const style = window.getComputedStyle(slider.value)
    const gapVal = parseFloat(style.getPropertyValue('gap')) || 0
    const centerOffset = (containerWidth - cardWidth) / 2
    const currentStep = cardWidth + gapVal
    const xPos = -(idx * currentStep) + centerOffset

    if (animate) {
      isAnimating.value = true
      gsap.to(slider.value, {
        x: xPos,
        duration: duration,
        ease: 'power2.inOut',
        onComplete: () => {
          isAnimating.value = false
          checkReset()
        }
      })
    } else {
      gsap.set(slider.value, { x: xPos })
    }
  }

  const checkReset = () => {
    if (currentIndex.value === totalItems + 1) {
      currentIndex.value = 1 
      moveSlider(1, false) 
    }
    else if (currentIndex.value === 0) {
      currentIndex.value = totalItems 
      moveSlider(totalItems, false) 
    }
  }

  const next = () => {
    if (isAnimating.value) return
    currentIndex.value++
    moveSlider(currentIndex.value)
  }

  const prev = () => {
    if (isAnimating.value) return
    currentIndex.value--
    moveSlider(currentIndex.value)
  }

  const activeOriginalIndex = computed(() => {
    if (currentIndex.value === 0) return totalItems - 1
    if (currentIndex.value === totalItems + 1) return 0
    return currentIndex.value - 1
  })

  const handleResize = () => {
    moveSlider(currentIndex.value, false)
  }

  onMounted(async () => {
    window.addEventListener('resize', handleResize)
    await nextTick()
    setTimeout(() => {
        moveSlider(currentIndex.value, false)
    }, 150)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return { currentIndex, activeOriginalIndex, next, prev }
}