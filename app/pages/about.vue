<template>
  <div class="section-padding">
    <div class="section-container">
      <!-- Intro -->
      <div class="text-center mb-16 reveal">
        <span class="section-label justify-center">About</span>
        <h1 class="font-display text-display-sm sm:text-display-md md:text-display-lg text-balance max-w-4xl mx-auto">Engineer, educator, <span class="gradient-text">builder</span></h1>
        <p class="text-surface-400 mt-5 max-w-2xl mx-auto">I help people and businesses turn ideas into reliable, beautiful software — and I share what I learn along the way.</p>
      </div>

      <div class="grid lg:grid-cols-5 gap-8 items-stretch mb-10">
        <div class="lg:col-span-2 reveal">
          <div class="gradient-border-animated relative rounded-3xl h-full">
            <div class="relative rounded-3xl glass-strong overflow-hidden h-full">
              <div class="aspect-[4/5] h-full">
                <img src="/images/sikandar.jpeg" alt="Eng. Sekandar Mohibzada" class="w-full h-full object-cover" loading="lazy" />
                <div class="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3 space-y-6">
          <div class="reveal card-surface">
            <h2 class="font-display text-2xl font-semibold text-white mb-3">انجنیر سکندر محب‌زادہ</h2>
            <h3 class="text-accent font-medium mb-5">Eng. Sekandar Mohibzada</h3>
            <p class="text-surface-300 leading-relaxed mb-6">Eng. Sekandar Mohibzada is an accomplished IT professional with over 15 years of experience across various domains of information technology. He holds certifications from both Oracle and Microsoft, demonstrating his strong technical expertise and commitment to professional excellence. Eng. Mohibzada earned his Bachelor&#039;s degree in Computer Science, further solidifying his foundation in software, systems, and network technologies.</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="badge in badges" :key="badge" class="chip">{{ badge }}</span>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div v-for="h in highlights" :key="h.label" class="reveal card-surface text-center !p-5">
              <div class="text-2xl mb-2">{{ h.icon }}</div>
              <div class="font-display text-2xl font-bold text-white">{{ h.value }}</div>
              <div class="text-surface-400 text-xs mt-1">{{ h.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Philosophy -->
      <div class="mb-10">
        <div class="text-center mb-12 reveal">
          <span class="section-label justify-center">Philosophy</span>
          <h2 class="font-display text-display-sm sm:text-display-md text-balance">Building with <span class="gradient-text">purpose</span></h2>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="p in philosophies" :key="p.title" class="reveal card-surface hover:border-accent/30">
            <div class="text-2xl mb-4">{{ p.icon }}</div>
            <h3 class="font-display text-lg font-semibold text-white mb-2">{{ p.title }}</h3>
            <p class="text-surface-400 text-sm leading-relaxed">{{ p.description }}</p>
          </div>
        </div>
      </div>

      <!-- Content CTA -->
      <div class="reveal card-surface flex flex-col sm:flex-row items-center justify-between gap-6 !p-8 sm:!p-10">
        <div class="text-center sm:text-left">
          <div class="text-4xl mb-3">📺</div>
          <h3 class="font-display text-xl font-semibold text-white">Click &amp; Learn with Muhibzada</h3>
          <p class="text-surface-400 text-sm mt-1 max-w-md">Master Word, Excel, Windows and more with free, high-quality video tutorials.</p>
        </div>
        <a href="https://youtube.com/@clickandlearnwithmuhibzada" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-red-500/10 text-red-300 border border-red-500/20 hover:bg-red-500/20 transition-all duration-300 font-medium text-sm">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          Visit YouTube Channel
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About',
  meta: [{ name: 'description', content: 'Learn about Eng. Sekandar Mohibzada — over 15 years of experience across information technology, Oracle & Microsoft certified, and driven by a deep belief that technology should be approachable for everyone.' }]
})

useScrollReveal()

const badges = ['🎓 BSc Computer Science', '💻 15+ Years', '🛠️ Oracle Certified', '📘 Microsoft Certified']
const highlights = [
  { icon: '🌍', value: '15+', label: 'Years Experience' },
  { icon: '📜', value: '2', label: 'Certifications' },
  { icon: '📺', value: '100+', label: 'Tutorials' },
]
const philosophies = [
  { icon: '🎯', title: 'Purpose-Driven', description: 'Every project starts with a clear purpose. I build technology that solves real problems and improves lives.' },
  { icon: '📚', title: 'Knowledge Sharing', description: 'Through free educational content, I empower others with the skills they need to succeed in the digital world.' },
  { icon: '🔧', title: 'Continuous Learning', description: 'Technology evolves fast. I stay sharp by constantly learning and adapting to new tools and ideas.' },
]
</script>
