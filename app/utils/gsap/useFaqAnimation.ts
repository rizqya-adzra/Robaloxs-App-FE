import { ref, computed, nextTick, onMounted, type Ref } from 'vue'
import gsap from 'gsap'

interface FaqItem {
  id: number | string
  question: string
  answer: string
}

export function useFaqAnimation(
  containerRef: Ref<HTMLElement | null>, 
  faqList: FaqItem[],                    
  defaultIndex: number = 0             
) {

  const activeIndex = ref(defaultIndex)

  const activeAnswer = computed(() => {
    return faqList[activeIndex.value]?.answer ?? ''
  })

  const animateIn = () => {
    if (containerRef.value) {
      gsap.fromTo(containerRef.value, 
        { opacity: 0, y: 10 }, 
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      )
    }
  }

  const animateOut = async () => {
    if (containerRef.value) {
      await gsap.to(containerRef.value, { 
        opacity: 0, 
        y: -10, 
        duration: 0.2 
      })
    }
  }

  const selectFaq = async (index: number) => {
    if (activeIndex.value === index) return
    
    await animateOut()

    activeIndex.value = index

    await nextTick()

    animateIn()
  }

  onMounted(() => {
    animateIn() 
  })

  return {
    activeIndex,
    activeAnswer,
    selectFaq
  }
}