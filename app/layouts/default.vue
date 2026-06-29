<template>
  <div>
    <header class="main-header">
      <div class="header-container">
        <div class="logo">
          <NuxtLink to="/">S. Muhibzada</NuxtLink>
        </div>
        
        <nav class="nav-tabs">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Get In Touch</NuxtLink>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.main-header {
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between; /* This pushes logo left and nav tabs right */
  align-items: center;
}

.logo a {
  font-weight: 700;
  font-size: 1.25rem;
  color: #111111;
  text-decoration: none;
}

.nav-tabs {
  display: flex;
  gap: 2rem; /* Spacing between your tabs */
}

.nav-link {
  text-decoration: none;
  color: #555555;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s ease;
  padding: 0.5rem 0;
}

.nav-link:hover,
.router-link-active {
  color: #0070f3; /* Professional blue accent tint */
}
</style>