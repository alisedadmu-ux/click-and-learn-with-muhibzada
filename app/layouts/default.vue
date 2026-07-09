<template>
  <div class="relative min-h-screen bg-surface-950 text-white">
    <FloatingOrbs />
    <AnimatedGrid />
    <div class="noise-bg" />
    
    <AppHeader />
    
    <main class="relative z-10 pt-20">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: "%s | Sekandar Mohibzada",
  defaultTitle: "Sekandar Mohibzada \u2014 IT Professional",
  meta: [
    { name: "description", content: "Portfolio of Eng. Sekandar Mohibzada \u2014 over 15 years of professional IT experience, Oracle & Microsoft Certified, with a Bachelor's in Computer Science." },
    { name: "keywords", content: "Sekandar Mohibzada, portfolio, IT professional, Oracle, Microsoft, computer science, full-stack" },
    { property: "og:title", content: "Sekandar Mohibzada \u2014 IT Professional" },
    { property: "og:description", content: "Portfolio of Eng. Sekandar Mohibzada \u2014 over 15 years of professional IT experience, Oracle & Microsoft Certified, with a Bachelor's in Computer Science." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" }
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
  ]
})

useScrollReveal()
</script>
