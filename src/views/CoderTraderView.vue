<template>
  <div class="coder-trader-page">
    <!-- Hero Section -->
    <HeroSection>
      <template #title>
        Stop Feeling Dumb. Start Feeling Dangerous
      </template>
      <template #subtitle>
        <VideoEmbed
          src="https://www.youtube.com/embed/pNTRZVCbP1M?si=kN1aH4SqRyadx15O"
          title="Coder Trader Overview Video"
        />
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
        <p>🚀 Transform your focus. Become world-class.</p>
      </template>
    </HeroSection>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="container">
        <h2 class="section-title">What You'll Get</h2>
        <div class="features-grid">
          <FeatureCard v-for="feature in features" :key="feature.title" :icon="feature.icon" :title="feature.title"
            :description="feature.description" />
        </div>
        <div class="cta-section">
          <h3>Ready to Transform and Succeed?</h3>
          <div class="pricing-options">
            <PricingCard title="Standard" price="$0" period="/month" :benefits="[
              'Expert Coder Starter',
              'Code Class Starter',
              'Community Knowledge Base'
            ]">
              <template #button>
                <a :href="skoolLink" class="btn btn-primary" target="_blank">Start Monthly</a>
              </template>
            </PricingCard>
            <PricingCard title="Premium" price="$97" period="/month" badge="BEST VALUE" :featured="true" :benefits="[
              'Access to all Standard features',
              'Weekly live Q&A sessions',
              'Code Class Full Access',
              'Premium Live Stream Archive',
              'Mindset Course',
              'Expert Coder Full Access',
              'Phone Smasher Bootcamp'
            ]">
              <template #button>
                <a :href="skoolLink" class="btn btn-primary" target="_blank">Start Monthly</a>
              </template>
            </PricingCard>

            <PricingCard title="VIP" price="$1997" period="/month" :benefits="[
              'All Premium features',
              'Personal mentorship calls',
              'Personalized Curriculum',
              'Daily Accountability',
            ]">
            </PricingCard>
          </div>
          <div class="pricing-cta">
            <a :href="skoolLink" class="btn btn-primary btn-large" target="_blank">Join Coder Trader Now</a>
          </div>
        </div>
      </div>
      
    </section>


    <!-- Final CTA -->
    <section class="final-cta">
      <div class="container">
        <h2>Don't Let Another Day Pass Watching Others Succeed</h2>
        <p>Take the leap and join a community of like-minded coders who are committed to success.</p>
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
import VideoEmbed from '../components/VideoEmbed.vue'

const skoolLink = "https://www.skool.com/coder-trader/about"

const features = [
  {
    icon: "🧠",
    title: "Mindset Course",
    description: "Master the coder's mindset. No  technical challenge is too big when you think like a pro."
  },
  {
    icon: "🎥",
    title: "Premium Live Stream Archive",
    description: "Access hundreds of hours of recorded live streams."
  },
  {
    icon: "💬",
    title: "Weekly Q&A Sessions",
    description: "Get your questions answered directly. Join weekly calls for personalized guidance on coding."
  },
  {
    icon: "💡",
    title: "Code Class",
    description: "Hands-on coding and mindset sessions. Learn by doing and see immediate results."
  },
  {
    icon: "🤖",
    title: "AI First Learning",
    description: "Leverage AI tools to supercharge your coding. Stay ahead of the curve with cutting-edge technology."
  },
  {
    icon: "📚",
    title: "Expert Coder",
    description: "All technical skills you need to be world-class coder."
  },

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

.pricing-cta {
  margin-top: 40px;
  text-align: center;
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