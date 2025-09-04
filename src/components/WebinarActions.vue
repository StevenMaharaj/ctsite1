<template>
  <div class="webinar-actions">
    <div class="action-buttons">
      <button @click="addToCalendar" class="btn btn-secondary calendar-btn">
        📅 Add to Calendar
      </button>
      <a :href="webinarLink" target="_blank" class="btn btn-primary webinar-btn">
        🎥 Join Webinar
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  webinarDate?: string
  webinarTitle?: string
  webinarLink?: string
  webinarDescription?: string
}

const props = withDefaults(defineProps<Props>(), {
  webinarDate: '2025-09-12T10:20:00+10:00',
  webinarTitle: 'Grid Trading Webinar',
  webinarLink: 'https://www.youtube.com/watch?v=dIfknPar8bw',
  webinarDescription: 'Master Grid Trading - The Strategy That Profits in Any Market'
})

const addToCalendar = () => {
  const startDate = new Date(props.webinarDate)
  const endDate = new Date(startDate.getTime() + 90 * 60 * 1000) // 90 minutes later (1.5 hours)
  
  // Format dates for Google Calendar (YYYYMMDDTHHMMSS without Z for local time)
  const formatDate = (date: Date) => {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const seconds = '00'
    return `${year}${month}${day}T${hours}${minutes}${seconds}`
  }
  
  const startFormatted = formatDate(startDate)
  const endFormatted = formatDate(endDate)
  
  // Create the description with webinar link
  const description = `Stay until the end to unlock a free trading bot + mystery crypto gift. Join ${props.webinarLink}`
  
  // Create Google Calendar URL matching your format
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Live Trading Webinar + Free Bot')}&dates=${startFormatted}/${endFormatted}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(props.webinarLink)}&ctz=Australia/Melbourne`
  
  // Open Google Calendar
  window.open(googleCalendarUrl, '_blank')
}
</script>

<style scoped>
.webinar-actions {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.action-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 15px 25px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #5a6fd8;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background: #5a6268;
  transform: translateY(-2px);
}

.calendar-btn {
  background: #28a745;
}

.calendar-btn:hover {
  background: #218838;
}

.webinar-btn {
  background: #dc3545;
}

.webinar-btn:hover {
  background: #c82333;
}

/* Responsive Design */
@media (max-width: 768px) {
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 280px;
  }
}
</style>