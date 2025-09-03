<template>
  <div class="countdown-timer">
    <h3 class="countdown-title">{{ title }}</h3>
    <div class="countdown-display">
      <div class="time-block">
        <span class="time-number">{{ days }}</span>
        <span class="time-label">Days</span>
      </div>
      <div class="time-separator">:</div>
      <div class="time-block">
        <span class="time-number">{{ hours }}</span>
        <span class="time-label">Hours</span>
      </div>
      <div class="time-separator">:</div>
      <div class="time-block">
        <span class="time-number">{{ minutes }}</span>
        <span class="time-label">Minutes</span>
      </div>
      <div class="time-separator">:</div>
      <div class="time-block">
        <span class="time-number">{{ seconds }}</span>
        <span class="time-label">Seconds</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  targetDate: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Event Starts In:'
})

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let intervalId: number | null = null

const updateCountdown = () => {
  const now = new Date().getTime()
  const target = new Date(props.targetDate).getTime()
  const difference = target - now

  if (difference > 0) {
    days.value = Math.floor(difference / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes.value = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    seconds.value = Math.floor((difference % (1000 * 60)) / 1000)
  } else {
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
  }
}

onMounted(() => {
  updateCountdown()
  intervalId = window.setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.countdown-timer {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, rgba(243, 156, 18, 0.3) 0%, rgba(230, 126, 34, 0.3) 100%);
  color: white;
  border-radius: 15px;
  margin: 40px 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.countdown-title {
  font-size: 1.8rem;
  margin-bottom: 30px;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.countdown-display {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.time-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px 15px;
  border-radius: 10px;
  min-width: 80px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.time-number {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.time-label {
  font-size: 0.9rem;
  margin-top: 5px;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

.time-separator {
  font-size: 2rem;
  font-weight: 700;
  opacity: 0.7;
  animation: blink 2s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0.3; }
}

/* Responsive Design */
@media (max-width: 768px) {
  .countdown-title {
    font-size: 1.5rem;
  }
  
  .countdown-display {
    gap: 10px;
  }
  
  .time-block {
    min-width: 70px;
    padding: 15px 10px;
  }
  
  .time-number {
    font-size: 2rem;
  }
  
  .time-separator {
    display: none;
  }
}

@media (max-width: 480px) {
  .countdown-display {
    justify-content: space-between;
  }
  
  .time-block {
    flex: 1;
    min-width: 60px;
    margin: 0 2px;
  }
  
  .time-number {
    font-size: 1.8rem;
  }
  
  .time-label {
    font-size: 0.8rem;
  }
}
</style>