<template>
  <div class="grid-webinar-page">
    <!-- Hero Section with Countdown -->
    <HeroSection>
      <template #title>
        Master <span class="highlight">Grid Trading</span> - The Strategy That Profits in Any Market
      </template>
      <template #subtitle>
        Join our exclusive live webinar and learn the automated grid trading strategy that makes money whether the market goes up, down, or sideways.
      </template>
      <template #buttons>
        <div class="countdown-container">
          <h3>Webinar Starts In:</h3>
          <div class="countdown">
            <div class="countdown-item">
              <span class="countdown-number">{{ timeLeft.days }}</span>
              <span class="countdown-label">Days</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-number">{{ timeLeft.hours }}</span>
              <span class="countdown-label">Hours</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-number">{{ timeLeft.minutes }}</span>
              <span class="countdown-label">Minutes</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-number">{{ timeLeft.seconds }}</span>
              <span class="countdown-label">Seconds</span>
            </div>
          </div>
        </div>
        
        <div class="signup-form">
          <form @submit.prevent="handleSignup">
            <input 
              v-model="email" 
              type="email" 
              placeholder="Enter your email address"
              required
              class="email-input"
            />
            <button type="submit" class="btn btn-primary btn-large">
              Reserve My Seat - FREE
            </button>
          </form>
        </div>
      </template>
      <template #social-proof>
        <p>🎯 September 29, 2025 - Australian Eastern Standard Time</p>
      </template>
    </HeroSection>

    <!-- What You'll Learn Section -->
    <section class="learning-section">
      <div class="container">
        <h2 class="section-title">What You'll Master in This Live Webinar</h2>
        <div class="features-grid">
          <FeatureCard 
            icon="📊"
            title="Grid Trading Fundamentals"
            description="Understand the core mechanics of grid trading and how it captures profits from market volatility."
          />
          <FeatureCard 
            icon="💰"
            title="When Grid Trading Makes Money"
            description="Learn the exact market conditions where grid trading generates consistent profits and why it's so effective."
          />
          <FeatureCard 
            icon="⚠️"
            title="Risk Management Strategies"
            description="Discover how to protect your capital and minimize losses with proper risk management techniques."
          />
          <FeatureCard 
            icon="📉"
            title="Handling Market Downturns"
            description="Master the art of managing grid strategies when markets move against you and how to recover."
          />
          <FeatureCard 
            icon="🤖"
            title="Automation Techniques"
            description="See live demonstrations of automated grid trading bots and how to set them up yourself."
          />
          <FeatureCard 
            icon="📈"
            title="Advanced Grid Strategies"
            description="Explore sophisticated grid variations for different market conditions and asset classes."
          />
        </div>
      </div>
    </section>

    <!-- Exclusive Bonuses Section -->
    <section class="bonuses-section">
      <div class="container">
        <h2 class="section-title">Exclusive Bonuses for Attendees</h2>
        <div class="bonus-grid">
          <div class="bonus-card main-bonus">
            <div class="bonus-icon">🎁</div>
            <h3>Stay Until the End & Get:</h3>
            <div class="bonus-list">
              <div class="bonus-item">
                <span class="bonus-emoji">🤖</span>
                <span>Complete Grid Trading Bot (Ready to Deploy)</span>
              </div>
              <div class="bonus-item">
                <span class="bonus-emoji">💎</span>
                <span>Mystery Crypto Gift (More than Ethereum, Less than Bitcoin)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Final CTA -->
    <section class="final-cta">
      <div class="container">
        <h2>Don't Miss This Opportunity</h2>
        <p>Grid trading is one of the most reliable automated strategies. Learn it from an expert, get free tools, and transform your trading forever.</p>
        
        <div class="signup-form">
          <form @submit.prevent="handleSignup">
            <input 
              v-model="email" 
              type="email" 
              placeholder="Enter your email address"
              required
              class="email-input"
            />
            <button type="submit" class="btn btn-primary btn-large">
              Secure My Free Seat Now
            </button>
          </form>
        </div>
        
        <div class="urgency">
          <p>⏰ Webinar starts in {{ timeLeft.days }} days, {{ timeLeft.hours }} hours</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import FeatureCard from '../components/FeatureCard.vue'

const liteSkoolLink = "https://www.skool.com/coder-trader-lite-4652/about?ref=8fb2c06825bb4b70be660556279e3a9a"
const email = ref('')

// Countdown timer
const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

let countdownInterval: number

const calculateTimeLeft = () => {
  // September 29, 2025 AEST (UTC+10)
  const targetDate = new Date('2025-09-29T10:00:00+10:00') // 10 AM AEST
  const now = new Date()
  const difference = targetDate.getTime() - now.getTime()

  if (difference > 0) {
    timeLeft.value = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  } else {
    // Webinar has started or ended
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
}

const handleSignup = () => {
  if (email.value) {
    alert(`Thanks for registering! We'll send webinar details to ${email.value}`)
    // Here you would typically send the email to your backend
    email.value = ''
  }
}

onMounted(() => {
  calculateTimeLeft()
  countdownInterval = setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})
</script>

<style scoped>
.grid-webinar-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

.highlight {
  color: #f39c12;
  text-decoration: underline;
}

/* Countdown Styles */
.countdown-container {
  text-align: center;
  margin-bottom: 40px;
}

.countdown-container h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: white;
}

.countdown {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.countdown-item {
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  min-width: 80px;
}

.countdown-number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.countdown-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

/* Email Signup Styles */
.signup-form {
  max-width: 500px;
  margin: 0 auto;
}

.email-input {
  width: 100%;
  padding: 15px 20px;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  margin-bottom: 15px;
  box-sizing: border-box;
}

.email-input:focus {
  outline: 3px solid #f39c12;
}

/* Learning Section */
.learning-section {
  padding: 100px 20px;
  background: #f8f9fa;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

/* Bonuses Section */
.bonuses-section {
  padding: 100px 20px;
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
}

.bonuses-section .section-title {
  color: white;
}

.bonus-grid {
  display: flex;
  justify-content: center;
}

.bonus-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  max-width: 600px;
}

.bonus-card.main-bonus {
  border: 3px solid #f39c12;
}

.bonus-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.bonus-list {
  margin-top: 30px;
}

.bonus-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.bonus-emoji {
  margin-right: 15px;
  font-size: 1.5rem;
}


/* Final CTA */
.final-cta {
  padding: 100px 20px;
  background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
  color: white;
  text-align: center;
}

.final-cta h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.final-cta p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
}

.urgency {
  margin-top: 30px;
}

.urgency p {
  font-size: 1.1rem;
  color: #f39c12;
  font-weight: bold;
}

/* Responsive Design */
@media (max-width: 768px) {
  .countdown {
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .countdown-item {
    min-width: 70px;
    padding: 15px;
  }
  
  .countdown-number {
    font-size: 1.5rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
}
</style>