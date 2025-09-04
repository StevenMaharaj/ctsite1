<template>
  <div class="grid-vip-page">
    <!-- Hero Section - Video -->
    <HeroSection>
      <template #title>
        Get <span class="highlight">VIP Access</span> to the Grid Trading Webinar
      </template>
      <template #subtitle>
        Watch this exclusive preview and discover why VIP members get the best results from our grid trading strategies.
      </template>
      <template #buttons>
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/lzqVmhow4IA?si=nT4xA8WQ46pMn_K-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <button @click="handleVipUpgrade" class="btn btn-primary btn-large vip-join-btn">
          🏆 Join Skool - Get VIP Seat for $19
        </button>
      </template>
      <template #social-proof>
        <p>🎯 Webinar date: {{ webinarDateFormatted }}</p>
      </template>
    </HeroSection>

    <!-- VIP Upgrade Section -->
    <section id="vip-upgrade" class="vip-section">
      <div class="container">
        <div class="vip-header">
          <h2 class="section-title">Upgrade to VIP Access - Limited Time Only</h2>
          <div class="vip-price">
            <span class="price-tag">Only $19</span>
            <span class="price-note">Monthly Skool membership</span>
          </div>
        </div>

        <div class="vip-content">
          <div class="vip-benefits">
            <h3>What You Get as a VIP Member:</h3>
            <div class="benefits-grid">
              <FeatureCard 
                icon="❓"
                title="Direct Q&A Access"
                description="Ask me your specific questions during the webinar. VIP members get priority for live Q&A sessions."
              />
              <FeatureCard 
                icon="📊"
                title="Exclusive Research Notebook"
                description="Get my personal research notebook that identifies the best parameters for grid trading across different market conditions."
              />
              <FeatureCard 
                icon="🎥"
                title="10+ Hours of Premium Content"
                description="Access exclusive recordings of me using the grid trading bot live, explaining profitable strategies and real-world applications."
              />
            </div>
          </div>

          <div class="vip-cta">
            <h3>This VIP Upgrade is Only Available Right Now</h3>
            <p>After you leave this page, this offer disappears forever. Don't miss your chance to maximize your grid trading education.</p>
            
            <div class="upgrade-button-container">
              <button @click="handleVipUpgrade" class="btn btn-primary btn-large vip-btn">
                🏆 Join Skool - Get VIP Seat for $19
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- What You're Getting Section -->
    <section class="value-section">
      <div class="container">
        <h2 class="section-title">Here's What $19 Gets You (Worth Over $297)</h2>
        <div class="value-breakdown">
          <div class="value-item">
            <div class="value-icon">🎯</div>
            <div class="value-content">
              <h4>Priority Q&A Access</h4>
              <p class="value-description">Get your burning questions answered live during the webinar</p>
              <p class="value-price">Value: $97</p>
            </div>
          </div>
          <div class="value-item">
            <div class="value-icon">📋</div>
            <div class="value-content">
              <h4>Research Notebook</h4>
              <p class="value-description">My personal parameter optimization research and findings</p>
              <p class="value-price">Value: $67</p>
            </div>
          </div>
          <div class="value-item">
            <div class="value-icon">📺</div>
            <div class="value-content">
              <h4>10+ Hours Live Bot Sessions</h4>
              <p class="value-description">Watch me trade live and explain profitable grid strategies</p>
              <p class="value-price">Value: $197</p>
            </div>
          </div>
        </div>
        <div class="total-value">
          <p><strong>Total Value: $361</strong></p>
          <p class="your-price">Your VIP Price: <span class="highlight">Just $19</span></p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="final-cta">
      <div class="container">
        <h2>Don't Let This Opportunity Slip Away</h2>
        <p>This VIP upgrade is only available to webinar registrants and only on this page. Once you leave, it's gone forever.</p>
        
        <div class="final-cta-buttons">
          <button @click="handleVipUpgrade" class="btn btn-primary btn-large vip-btn">
            🏆 Join Skool - Get VIP Seat for $19
          </button>
        </div>
        
        
        <div class="regular-seat-option">
          <h3>No Thanks, I Want a Regular Seat</h3>
          <p>Get basic webinar access with calendar reminder and join link.</p>
          <WebinarActions 
            :webinar-date="webinarDate"
            webinar-title="Grid Trading Webinar"
            :webinar-link="'https://www.youtube.com/watch?v=dIfknPar8bw'"
            webinar-description="Master Grid Trading - The Strategy That Profits in Any Market"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import FeatureCard from '../components/FeatureCard.vue'
import WebinarActions from '../components/WebinarActions.vue'

const webinarDate = '2025-09-12T10:20:00+10:00'

const webinarDateFormatted = 'September 12, 2025'
// const webinarTimeZone = 'Australian Eastern Standard Time'

// VIP upgrade handler
const handleVipUpgrade = () => {
  window.location.href = "https://www.skool.com/coder-trader-lite-4652/about?ref=8fb2c06825bb4b70be660556279e3a9a"
}
</script>

<style scoped>
.grid-vip-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

.highlight {
  color: #f39c12;
  text-decoration: underline;
}

/* VIP Section */
.vip-section {
  padding: 100px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.vip-header {
  text-align: center;
  margin-bottom: 60px;
}

.vip-header .section-title {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.vip-price {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.price-tag {
  font-size: 3rem;
  font-weight: 700;
  color: #f39c12;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.price-note {
  font-size: 1.1rem;
  opacity: 0.9;
}

.vip-content {
  max-width: 1000px;
  margin: 0 auto;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.vip-cta {
  text-align: center;
  margin-top: 80px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

.vip-cta h3 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #f39c12;
}

.upgrade-button-container {
  margin: 40px 0;
}

.vip-btn {
  font-size: 1.3rem;
  padding: 20px 40px;
  background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  border: none;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(243, 156, 18, 0.4);
}

.vip-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(243, 156, 18, 0.6);
}

.guarantee {
  margin-top: 30px;
  padding: 20px;
  background: rgba(40, 167, 69, 0.2);
  border-radius: 10px;
  border: 1px solid rgba(40, 167, 69, 0.3);
}

/* Value Section */
.value-section {
  padding: 100px 20px;
  background: #f8f9fa;
}

.value-breakdown {
  max-width: 800px;
  margin: 0 auto;
}

.value-item {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.value-icon {
  font-size: 3rem;
  min-width: 80px;
  text-align: center;
}

.value-content h4 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.value-description {
  color: #666;
  margin-bottom: 10px;
}

.value-price {
  font-weight: 600;
  color: #f39c12;
  font-size: 1.1rem;
}

.total-value {
  text-align: center;
  margin-top: 60px;
  padding: 40px;
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  color: white;
  border-radius: 15px;
  font-size: 1.3rem;
}

.your-price {
  margin-top: 10px;
  font-size: 1.5rem;
}

.your-price .highlight {
  color: #f39c12;
  font-size: 2rem;
  font-weight: 700;
}

/* Final CTA */
.final-cta {
  padding: 100px 20px;
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
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

.final-cta-buttons {
  margin: 40px 0;
}

.urgency-note {
  margin-top: 30px;
}

.urgency-note p {
  color: #f39c12;
  font-weight: 600;
  font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .vip-header .section-title {
    font-size: 2rem;
  }
  
  .price-tag {
    font-size: 2.5rem;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .value-item {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  
  .vip-btn {
    font-size: 1.1rem;
    padding: 15px 30px;
  }
}
</style>