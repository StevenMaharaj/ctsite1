<template>
  <div class="pricing-card" :class="{ featured }">
    <div v-if="badge" class="badge">{{ badge }}</div>
    <h4>{{ title }}</h4>
    <div class="price">{{ price }}<span v-if="period">{{ period }}</span></div>
    <div v-if="savings" class="savings">{{ savings }}</div>
    <slot name="button"></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  price: string;
  period?: string;
  savings?: string;
  badge?: string;
  featured?: boolean;
}>()
</script>

<style scoped>
.pricing-card {
  background: white;
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  position: relative;
  min-width: 250px;
  text-align: center;
}

.pricing-card.featured {
  border: 3px solid #ff6b6b;
  transform: scale(1.05);
}

.badge {
  background: #ff6b6b;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
}

.pricing-card h4 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

.price {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin: 20px 0;
}

.price span {
  font-size: 1rem;
  color: #666;
}

.savings {
  color: #28a745;
  font-weight: 600;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .pricing-card.featured {
    transform: none;
  }
}
</style>