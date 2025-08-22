<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">
        <slot name="title"></slot>
      </h1>
      <p class="hero-subtitle">
        <slot name="subtitle"></slot>
      </p>
      <div class="hero-buttons">
        <slot name="buttons"></slot>
      </div>
      <div class="social-proof">
        <slot name="social-proof"></slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  backgroundColor?: string;
}>()
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 20px;
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 40px;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.social-proof {
  opacity: 0.8;
  font-size: 1rem;
}

.highlight {
  color: #ff6b6b;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>