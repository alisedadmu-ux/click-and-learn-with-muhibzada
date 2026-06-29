<template>
  <section class="contact-section">
    <div class="contact-container">
      
      <div class="contact-info">
        <h1>Get in Touch</h1>
        <p>Whether you have a technical question or want to discuss a project, feel free to drop a message.</p>
        
        <div class="info-details">
          <div class="info-item">
            <span class="info-label">📧 Email:</span>
            <p class="info-text">alisedadmu@gmail.com</p>
          </div>
          <div class="info-item">
            <span class="info-label">📍 Location:</span>
            <p class="info-text">Kabul, Afghanistan</p>
          </div>
        </div>
      </div>

      <div class="contact-form-wrapper">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input v-model="name" type="text" id="name" required placeholder="John Doe" />
          </div>

          <div class="form-group">
            <label for="email">Your Email</label>
            <input v-model="email" type="email" id="email" required placeholder="john@example.com" />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea v-model="message" id="message" rows="5" required placeholder="Type your message here..."></textarea>
          </div>

          <button :disabled="loading" type="submit" class="submit-btn">
            {{ loading ? 'Sending...' : 'Send Message' }}
          </button>

          <div v-if="statusMessage" :class="['status-message', statusType]">
            {{ statusMessage }}
          </div>
        </form>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const loading = ref(false)
const statusMessage = ref('')
const statusType = ref('success')

const handleSubmit = async () => {
  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    statusType.value = 'error'
    statusMessage.value = 'Please fill in all fields before sending your message.'
    return
  }

  loading.value = true
  statusMessage.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: name.value.trim(),
        email: email.value.trim(),
        message: message.value.trim()
      }
    })

    statusType.value = 'success'
    statusMessage.value = 'Your message was sent successfully. Thank you!'
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (err) {
    statusType.value = 'error'
    const messageText = err?.data?.message || err?.message || 'There was a problem sending your message. Please try again.'
    statusMessage.value = messageText
    console.error('Contact form error:', err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact-section {
  padding: 3rem 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
  font-family: sans-serif;
}
.contact-container {
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
}
.contact-info {
  flex: 1;
  min-width: 300px;
}
.contact-info h1 {
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  color: #111;
}
.contact-info p {
  color: #555;
  line-height: 1.6;
  font-size: 1.05rem;
}
.info-details {
  margin-top: 2.5rem;
}
.info-item {
  margin-bottom: 1.5rem;
}
.info-label {
  font-weight: 600;
  display: block;
  margin-bottom: 0.25rem;
  color: #222;
}
.info-text {
  margin: 0;
  color: #444;
  font-size: 1rem;
}
.contact-form-wrapper {
  flex: 1.5;
  min-width: 300px;
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
}
.form-group {
  margin-bottom: 1.5rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
  background-color: #f8fafc;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #0070f3;
  background-color: #fff;
}
.submit-btn {
  background: #0070f3;
  color: white;
  padding: 0.8rem 1.8rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}
.submit-btn:hover {
  background: #0051a8;
}
.submit-btn:active {
  transform: scale(0.98);
}
.status-message {
  margin-top: 1rem;
  padding: 0.9rem 1rem;
  border-radius: 8px;
  font-weight: 500;
}
.status-message.success {
  background: #e6fffa;
  color: #065f46;
  border: 1px solid #9ae6b4;
}
.status-message.error {
  background: #ffe6e6;
  color: #9b2c2c;
  border: 1px solid #fca5a5;
}
</style>