<template>
  <div class="phone-addiction-page">
    <HeroSection>
      <template #title>
        Is Your Phone Controlling Your Life Instead of You Controlling It?
      </template>
      <template #subtitle>
        <VideoEmbed
          src="https://www.youtube.com/embed/pNTRZVCbP1M?si=kN1aH4SqRyadx15O"
          title="Phone Addiction Course Overview"
        />
      </template>
      <template #buttons>
        <a href="https://www.skool.com/codertrader/about?ref=8fb2c06825bb4b70be660556279e3a9a"
           target="_blank"
           class="btn btn-primary">
          Start Your Digital Detox Journey
        </a>
      </template>
      <template #social-proof>
        📱 Join thousands who've reclaimed 3+ hours daily from phone addiction
      </template>
    </HeroSection>

    <section class="features-section">
      <div class="container">
        <h2 class="section-title">What You'll Master</h2>
        <div class="features-grid">
          <FeatureCard
            icon="🧠"
            title="Understand Your Triggers"
            description="Identify the psychological patterns that keep you reaching for your phone without thinking"
          />
          <FeatureCard
            icon="⏰"
            title="Time Awareness Training"
            description="Learn exactly where your time goes and how to reclaim hours lost to mindless scrolling"
          />
          <FeatureCard
            icon="🎯"
            title="Focus Restoration"
            description="Rebuild your attention span and deep work capacity through proven techniques"
          />
          <FeatureCard
            icon="🛡️"
            title="Boundary Setting"
            description="Create healthy digital boundaries without feeling disconnected from what matters"
          />
          <FeatureCard
            icon="🔄"
            title="Habit Replacement"
            description="Replace compulsive phone checking with productive and fulfilling alternatives"
          />
          <FeatureCard
            icon="📊"
            title="Progress Tracking"
            description="Monitor your journey with data-driven insights and celebrate your wins"
          />
        </div>
      </div>
    </section>

    <section class="pricing-section">
      <div class="container">
        <h2 class="section-title">Choose Your Path to Freedom</h2>
        <div class="pricing-grid">
          <PricingCard
            title="Monthly"
            price="$97"
            period="/month"
          >
            <template #button>
              <a href="https://www.skool.com/codertrader/about?ref=8fb2c06825bb4b70be660556279e3a9a"
                 target="_blank"
                 class="btn btn-primary">
                Get Started Monthly
              </a>
            </template>
          </PricingCard>

          <PricingCard
            title="Annual"
            price="$697"
            period="/year"
            :featured="true"
            badge="BEST VALUE"
            savings="Save 40%!"
          >
            <template #button>
              <a href="https://www.skool.com/codertrader/about?ref=8fb2c06825bb4b70be660556279e3a9a"
                 target="_blank"
                 class="btn btn-primary">
                Get Started Annually
              </a>
            </template>
          </PricingCard>
        </div>
      </div>
    </section>

    <section class="benefits-section">
      <div class="container">
        <h2 class="section-title">What You'll Gain</h2>
        <div class="benefits-list">
          <div class="benefit-item">
            <span class="benefit-icon">✅</span>
            <div class="benefit-content">
              <h3>Reclaim 15-20+ Hours Per Week</h3>
              <p>Time you can invest in relationships, hobbies, or career growth</p>
            </div>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">✅</span>
            <div class="benefit-content">
              <h3>Dramatically Improved Focus</h3>
              <p>Complete deep work sessions without constant interruptions</p>
            </div>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">✅</span>
            <div class="benefit-content">
              <h3>Better Sleep Quality</h3>
              <p>Fall asleep faster and wake up more refreshed</p>
            </div>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">✅</span>
            <div class="benefit-content">
              <h3>Reduced Anxiety & FOMO</h3>
              <p>Break free from the constant need to check notifications</p>
            </div>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">✅</span>
            <div class="benefit-content">
              <h3>Stronger Real-World Connections</h3>
              <p>Be truly present with family and friends</p>
            </div>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">✅</span>
            <div class="benefit-content">
              <h3>Lifetime Access to Community</h3>
              <p>Ongoing support from others on the same journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-box">
          <h2>Ready to Take Back Control?</h2>
          <p>Your future self will thank you for starting today</p>
          <a href="https://www.skool.com/codertrader/about?ref=8fb2c06825bb4b70be660556279e3a9a"
             target="_blank"
             class="btn btn-primary btn-large">
            Join the Phone Freedom Course
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import FeatureCard from '../components/FeatureCard.vue'
import PricingCard from '../components/PricingCard.vue'
import VideoEmbed from '../components/VideoEmbed.vue'
</script>

<style scoped>
.phone-addiction-page {
  min-height: 100vh;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.features-section,
.pricing-section,
.benefits-section,
.cta-section {
  padding: 4rem 0;
}

.features-section {
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.pricing-section {
  background: #0f3460;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.benefits-section {
  background: linear-gradient(180deg, #16213e 0%, #1a1a2e 100%);
}

.benefits-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.benefit-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.benefit-item:hover {
  transform: translateX(8px);
  border-color: rgba(102, 126, 234, 0.5);
}

.benefit-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.benefit-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
}

.benefit-content p {
  color: #b8c1ec;
  line-height: 1.6;
}

.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 5rem 0;
}

.cta-box {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-box h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
}

.cta-box p {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.btn-large {
  font-size: 1.25rem;
  padding: 1rem 2.5rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .features-grid,
  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .benefit-item {
    flex-direction: column;
    text-align: center;
  }

  .benefit-item:hover {
    transform: translateY(-4px);
  }

  .cta-box h2 {
    font-size: 1.75rem;
  }

  .cta-box p {
    font-size: 1rem;
  }
}
</style>
