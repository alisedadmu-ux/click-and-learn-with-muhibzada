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

    <main class="page-content">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
/* Global Styles to reset margins and fix typography */
body {
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, sans-serif;
  background-color: #ffffff;
}

.main-header {
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between; /* This forces the navigation tabs to the top right */
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
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #555555;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s ease;
}

.nav-link:hover,
.router-link-active {
  color: #0070f3;
}

.page-content {
  min-height: 80vh;
}
</style>