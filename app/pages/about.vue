<template>
  <section class="about-section">
    <div class="about-container">
      
      <div class="about-image">
        <img :src="'/images/sikandar.jpg'" alt="Eng. Sekandar Mohibzada" />
      </div>

      <div class="about-content">
        <h1>انجنیر سکندر محب‌زاده</h1>
        <h2>Eng. Sekandar Mohibzada</h2>
        <p class="subtitle">Accomplished IT Professional & Tech Leader</p>
        
        <hr class="divider" />

        <p class="bio-text">
          Eng. Sekandar Mohibzada is an accomplished IT professional with over 15 years 
          of experience across various domains of information technology. He holds 
          certifications from both Oracle and Microsoft, demonstrating his strong 
          technical expertise and commitment to professional excellence. Eng. Mohibzada 
          earned his Bachelor’s degree in Computer Science, further solidifying his 
          foundation in software, systems, and network technologies.
        </p>

        <div class="badges">
          <span class="badge">🎓 BSc Computer Science</span>
          <span class="badge">💻 15+ Years IT Experience</span>
          <span class="badge">🛠️ Oracle & Microsoft Certified</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-section {
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  font-family: system-ui, -apple-system, sans-serif;
}
.about-container {
  display: flex;
  gap: 4rem;
  align-items: center;
  flex-wrap: wrap;
}
.about-image {
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
}
.about-image img {
  width: 100%;
  max-width: 340px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  object-fit: cover;
}
.about-content {
  flex: 1.5;
  min-width: 320px;
}
.about-content h1 {
  font-size: 2.4rem;
  margin: 0 0 0.5rem 0;
  color: #111;
}
.about-content h2 {
  font-size: 1.75rem;
  color: #333;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}
.subtitle {
  color: #666;
  font-size: 1.15rem;
  margin: 0 0 1rem 0;
}
.divider {
  border: 0;
  border-top: 1px solid #eaeaea;
  margin: 1.5rem 0;
}
.bio-text {
  line-height: 1.75;
  font-size: 1.1rem;
  margin: 0 0 2.5rem 0;
  color: #444;
}
.badges {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
}
.badge {
  background: #f8fafc;
  color: #334155;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #e2e8f0;
}
</style>