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
            <input type="text" id="name" required placeholder="John Doe" />
          </div>

          <div class="form-group">
            <label for="email">Your Email</label>
            <input type="email" id="email" required placeholder="john@example.com" />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" rows="5" required placeholder="Type your message here..."></textarea>
          </div>

          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>

    </div>
  </section>
</template>

<script setup>
const handleSubmit = () => {
  alert('Thank you for reaching out! This form is ready to be connected to your message handler.')
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
</style>