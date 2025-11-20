<template>
  <div class="coder-trader-page">
    <!-- Hero Section -->
    <HeroSection>
      <template #title>
      Stop Feeling Dumb. Start Feeling Dangerous
      </template>
      <template #subtitle>
        Stop losing money on "get rich quick" schemes. Join the only community that teaches you to code your way to consistent trading profits with real systems, live mentorship, and funded accounts.
      </template>
      <template #buttons>
        <a :href="skoolLink" class="btn btn-primary" target="_blank">
          Join Coder Trader
        </a>
        <button @click="scrollToFeatures" class="btn btn-secondary">
          See What's Inside
        </button>
      </template>
      <template #social-proof>
        <p>🚀 Transform your trading with proven algorithmic strategies</p>
      </template>
    </HeroSection>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="container">
        <h2 class="section-title">Everything You Need to Trade Like a Pro Coder</h2>
        <div class="features-grid">
          <FeatureCard 
            v-for="feature in features" 
            :key="feature.title"
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
          />
        </div>
        
        <div class="cta-section">
          <h3>Ready to Transform Your Trading?</h3>
          <div class="pricing-options">
            <PricingCard 
              title="Monthly"
              price="$697"
              period="/month"
            >
              <template #button>
                <a :href="skoolLink" class="btn btn-primary" target="_blank">Start Monthly</a>
              </template>
            </PricingCard>
            
            <PricingCard 
              title="Annual"
              price="$1,997"
              period="/year"
              savings="Save 76%!"
              badge="BEST VALUE"
              :featured="true"
            >
              <template #button>
                <a :href="skoolLink" class="btn btn-primary" target="_blank">Get Annual Deal</a>
              </template>
            </PricingCard>
          </div>
        </div>
      </div>
    </section>

    <!-- Alternative Option Section -->
    <section class="alternative">
      <div class="container">
        <h2>Not Ready for the Full Program?</h2>
        <p>Start with our lighter version and upgrade when you're ready.</p>
        <div class="lite-option">
          <h3>Coder Trader Lite</h3>
          <div class="lite-pricing">
            <span class="lite-price">$19/month</span> or <span class="lite-price">$139/year</span>
          </div>
          <p>Perfect for beginners who want to dip their toes into algorithmic trading.</p>
          <router-link to="/lite" class="btn btn-outline">Learn More About Lite</router-link>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="final-cta">
      <div class="container">
        <h2>Don't Let Another Day Pass Watching Others Succeed</h2>
        <p>The market rewards those who take action. Join Coder Trader today and start your journey to consistent trading profits.</p>
        <a :href="skoolLink" class="btn btn-primary btn-large" target="_blank">
          Join Coder Trader Community Now
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import FeatureCard from '../components/FeatureCard.vue'
import PricingCard from '../components/PricingCard.vue'

const skoolLink = "https://www.skool.com/codertrader/about?ref=8fb2c06825bb4b70be660556279e3a9a"

const features = [
  {
    icon: "📈",
    title: "Complete Trading Systems Course",
    description: "Learn to build algorithmic trading systems from scratch. No more guessing - let data and code guide your trades."
  },
  {
    icon: "🗄️",
    title: "SQL & Grafana Mastery",
    description: "Master data analysis and visualization. Turn raw market data into actionable insights with professional-grade tools."
  },
  {
    icon: "🐍",
    title: "Python for Trading Course",
    description: "Code your way to consistent profits. Learn the exact Python techniques used by quantitative hedge funds."
  },
  {
    icon: "🎥",
    title: "Premium Live Stream Archive",
    description: "Access hundreds of hours of recorded premium content. Watch me build, test, and deploy trading systems in real-time."
  },
  {
    icon: "💬",
    title: "Weekly Q&A & Live Lessons",
    description: "Get your questions answered directly. Join weekly calls for personalized guidance on coding and trading."
  },
  {
    icon: "💰",
    title: "Funded Sub-Account",
    description: "Trade with real money while I monitor your progress. Get personalized feedback to accelerate your growth."
  },
  {
    icon: "🤖",
    title: "Free Trading Bot (Instant Access)",
    description: "Start trading immediately with a proven bot. Earn while you learn the strategies behind the code."
  }
]

const scrollToFeatures = () => {
  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.coder-trader-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

.highlight {
  color: #ff6b6b;
  text-decoration: underline;
}

/* Features Section */
.features {
  padding: 100px 20px;
  background: #f8f9fa;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

/* CTA Section */
.cta-section {
  text-align: center;
  margin-top: 80px;
}

.cta-section h3 {
  font-size: 2rem;
  margin-bottom: 40px;
}

.pricing-options {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Alternative Section */
.alternative {
  padding: 80px 20px;
  background: white;
  text-align: center;
}

.alternative h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.lite-option {
  background: #f8f9fa;
  padding: 40px;
  border-radius: 10px;
  max-width: 500px;
  margin: 40px auto;
}

.lite-pricing {
  font-size: 1.5rem;
  font-weight: 600;
  color: #667eea;
  margin: 20px 0;
}

/* Final CTA */
.final-cta {
  padding: 100px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

/* Responsive Design */
@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .pricing-options {
    flex-direction: column;
    align-items: center;
  }
}
</style>