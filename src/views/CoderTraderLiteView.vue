<template>
  <div class="coder-trader-lite-page">
    <!-- Hero Section -->
    <HeroSection>
      <template #title>
        Ready to <span class="highlight">Start Small</span> and Build Your Trading Skills?
      </template>
      <template #subtitle>
        Perfect for beginners who want to learn algorithmic trading without the big commitment. Get essential tools and knowledge to start your coding journey in trading.
      </template>
      <template #buttons>
        <a :href="liteSkoolLink" class="btn btn-primary btn-large" target="_blank">
          Join Coder Trader Lite - $19/month
        </a>
        <router-link to="/" class="btn btn-secondary">
          See Full Program
        </router-link>
      </template>
      <template #social-proof>
        <p>💡 Join 100+ beginners already learning algorithmic trading</p>
      </template>
    </HeroSection>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">What's Included in Coder Trader Lite</h2>
        <div class="features-grid">
          <FeatureCard 
            v-for="feature in liteFeatures" 
            :key="feature.title"
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
          />
        </div>
        
        <div class="cta-section">
          <h3>Simple, Affordable Pricing</h3>
          <div class="pricing-options">
            <PricingCard 
              title="Monthly"
              price="$19"
              period="/month"
            >
              <template #button>
                <a :href="liteSkoolLink" class="btn btn-primary" target="_blank">Start Monthly</a>
              </template>
            </PricingCard>
            
            <PricingCard 
              title="Annual"
              price="$139"
              period="/year"
              savings="Save $89!"
              badge="BEST VALUE"
              :featured="true"
            >
              <template #button>
                <a :href="liteSkoolLink" class="btn btn-primary" target="_blank">Get Annual Deal</a>
              </template>
            </PricingCard>
          </div>
        </div>
      </div>
    </section>

    <!-- Upgrade Section -->
    <section class="upgrade">
      <div class="container">
        <h2>Ready for More Advanced Features?</h2>
        <p>When you're ready to take your trading to the next level, upgrade to the full Coder Trader program.</p>
        <div class="upgrade-benefits">
          <div class="benefit">
            <div class="benefit-icon">🚀</div>
            <h4>Advanced Trading Systems</h4>
            <p>Learn institutional-grade algorithmic strategies</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">💰</div>
            <h4>Funded Trading Account</h4>
            <p>Trade with real money and get personalized feedback</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">👨‍🏫</div>
            <h4>Direct Mentorship</h4>
            <p>Weekly calls and live sessions with expert guidance</p>
          </div>
        </div>
        <router-link to="/" class="btn btn-primary btn-large">
          Upgrade to Full Program
        </router-link>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="waitlist-cta">
      <div class="container">
        <h2>Ready to Start Your Coding Journey in Trading?</h2>
        <p>Join Coder Trader Lite today and begin building your algorithmic trading skills.</p>
        <a :href="liteSkoolLink" class="btn btn-primary btn-large" target="_blank">
          Join Coder Trader Lite Now
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import FeatureCard from '../components/FeatureCard.vue'
import PricingCard from '../components/PricingCard.vue'

const liteSkoolLink = "https://www.skool.com/coder-trader-lite-4652/about?ref=8fb2c06825bb4b70be660556279e3a9a"

const liteFeatures = [
  {
    icon: "📚",
    title: "Basic Trading Concepts",
    description: "Learn fundamental algorithmic trading principles and market mechanics."
  },
  {
    icon: "🐍",
    title: "Python Basics for Trading",
    description: "Get started with Python programming specifically for financial markets."
  },
  {
    icon: "📊",
    title: "Simple Data Analysis",
    description: "Learn to analyze market data and create basic visualizations."
  },
  {
    icon: "🔧",
    title: "Basic Trading Tools",
    description: "Access to essential tools and libraries for building simple strategies."
  },
  {
    icon: "💬",
    title: "Community Access",
    description: "Connect with other beginner traders in our lite community."
  },
  {
    icon: "📖",
    title: "Educational Resources",
    description: "Curated learning materials and documentation to get you started."
  }
]
</script>

<style scoped>
.coder-trader-lite-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

.highlight {
  color: #28a745;
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

/* Upgrade Section */
.upgrade {
  padding: 80px 20px;
  background: white;
  text-align: center;
}

.upgrade h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.upgrade-benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin: 60px 0;
}

.benefit {
  text-align: center;
}

.benefit-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.benefit h4 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #333;
}

.benefit p {
  color: #666;
}

/* Waitlist CTA */
.waitlist-cta {
  padding: 100px 20px;
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  color: white;
  text-align: center;
}

.waitlist-cta h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.waitlist-cta p {
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
  
  .upgrade-benefits {
    grid-template-columns: 1fr;
  }
}
</style>