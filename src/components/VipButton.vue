<template>
  <div class="vip-button-container">
    <button @click="goToVipPage" class="btn btn-vip">
      {{ props.buttonText }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

interface Props {
  buttonText?: string
}

const props = withDefaults(defineProps<Props>(), {
  buttonText: '🚀 Upgrade to VIP'
})

const router = useRouter()

const goToVipPage = () => {
  router.push('/grid/vip')
  window.scrollTo(0, 0)
}
</script>

<style scoped>
.vip-button-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.btn {
  display: inline-block;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  width: 100%;
  max-width: 300px;
}

.btn-vip {
  background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(243, 156, 18, 0.4);
}

.btn-vip:hover {
  background: linear-gradient(135deg, #e67e22 0%, #d35400 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(243, 156, 18, 0.6);
}

/* Responsive Design */
@media (max-width: 768px) {
  .btn {
    font-size: 1rem;
    padding: 12px 25px;
  }
}
</style>