<template>
  <div class="email-signup">
    <div class="ml-embedded" data-form="7mtMpw" @submit="goToVipPage"></div>

  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, nextTick } from 'vue'
const router = useRouter()

const goToVipPage = () => {
  router.push('/grid/vip')
  window.scrollTo(0, 0)
}

// Wait for MailerLite to load and render
onMounted(async () => {
  // Wait for DOM to be ready
  await nextTick()
  
  // Check if MailerLite form has rendered by looking for content in ml-embedded
  const waitForMailerLite = () => {
    return new Promise<void>((resolve) => {
      const checkFormRendered = () => {
        const mlElement = document.querySelector('.ml-embedded')
        if (mlElement && mlElement.children.length > 0) {
          // Form has rendered with content
          resolve()
        } else {
          // Check again in 1000ms
          setTimeout(checkFormRendered, 1000)
        }
      }
      checkFormRendered()
    })
  }
  
  await waitForMailerLite()
  console.log('MailerLite form should be rendered now')
})
</script>

<style scoped>
.email-signup {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.email-form {
  width: 100%;
}

.input-group {
  display: flex;
  gap: 10px;
  align-items: stretch;
}

.email-input {
  flex: 1;
  padding: 15px 20px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease;
}

.email-input:focus {
  border-color: #667eea;
}

.email-input::placeholder {
  color: #999;
}

.btn {
  padding: 15px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #5a6fd8;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .input-group {
    flex-direction: column;
  }
  
  .email-input {
    margin-bottom: 10px;
  }
}
</style>