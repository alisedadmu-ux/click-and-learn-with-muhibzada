<template>
  <div class="relative overflow-hidden">
    <!-- ===================== HERO ===================== -->
    <section
      id="home"
      ref="heroRef"
      class="relative min-h-screen flex items-center px-5 sm:px-6 lg:px-8 pt-28 pb-16"
      @mousemove="onHeroMove"
    >
      <div ref="glowRef" class="mouse-glow" :style="{ left: glow.x + 'px', top: glow.y + 'px', opacity: glowVisible ? 1 : 0 }" />

      <div class="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <!-- Left: content -->
        <div class="reveal space-y-8">
          <div class="pill">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span class="text-sm text-surface-300 font-medium">Available for new opportunities</span>
          </div>

          <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight text-balance">
            Eng. Sikandar<br />
            <span class="gradient-text">Muhibzada</span>
          </h1>

<p class="text-lg sm:text-xl text-surface-400 max-w-xl leading-relaxed text-balance">
            I help people master technology — from essential workplace skills to the
            tools that power their day. As Eng. Sikandar Muhibzada, I bring over 15 years of IT expertise and free, friendly education to learners everywhere.
          </p>

          <div class="flex flex-wrap gap-4">
            <MagneticButton to="/about" variant="primary" size="lg">
              Discover More
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </MagneticButton>
            <MagneticButton to="https://youtube.com/@clickandlearnwithmuhibzada" external variant="secondary" size="lg">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              Watch Tutorials
            </MagneticButton>
          </div>

          <div class="flex items-center gap-5 pt-2">
            <a v-for="social in socialLinks" :key="social.label" :href="social.url" target="_blank" rel="noopener noreferrer" :aria-label="social.label" class="group flex items-center justify-center w-11 h-11 rounded-xl glass glass-hover text-surface-400 hover:text-white transition-all duration-300">
              <span class="text-xl">{{ social.icon }}</span>
            </a>
          </div>
        </div>

        <!-- Right: profile visual with floating chips -->
        <div class="reveal relative order-first lg:order-none">
          <div class="relative mx-auto w-full max-w-md">
            <div class="absolute inset-0 bg-gradient-to-tr from-accent/30 via-purple-500/20 to-blue-500/20 rounded-[2rem] blur-3xl animate-pulse-glow" />
            <div class="gradient-border-animated relative rounded-[2rem]">
              <div class="relative rounded-[2rem] glass-strong p-3 shadow-glass">
                <div class="relative aspect-square rounded-3xl overflow-hidden bg-surface-900">
                  <img src="/images/sikandar.jpeg" alt="Eng. Sikandar Muhibzada" class="w-full h-full object-cover" loading="eager" />
                  <div class="absolute inset-0 bg-gradient-to-t from-surface-950/70 via-transparent to-transparent" />
                  <div class="absolute bottom-0 left-0 right-0 p-6">
                    <p class="font-display text-xl font-semibold text-white">Sikandar Muhibzada</p>
                    <p class="text-accent-200 text-sm font-medium">IT Professional & Educator</p>
                    <p class="mt-2 flex items-center gap-1.5 text-xs text-surface-300">
                      <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243A8 8 0 1117.657 16.657z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating chips -->
            <div class="absolute -top-5 -left-5 px-4 py-2.5 rounded-2xl glass-strong border border-glass-border shadow-glass animate-float">
              <div class="flex items-center gap-2">
                <span class="text-yellow-400 text-lg">⭐</span>
                <div>
                  <p class="text-white text-sm font-semibold leading-none">15+ Years</p>
                  <p class="text-surface-400 text-[11px] mt-0.5">Experience</p>
                </div>
              </div>
            </div>
            <div class="absolute -top-6 right-2 px-4 py-2.5 rounded-2xl glass-strong border border-glass-border shadow-glass animate-float-fast" style="animation-delay:-1.5s">
              <div class="flex items-center gap-2">
                <span class="text-accent text-lg">🎓</span>
                <p class="text-white text-sm font-semibold leading-none">Oracle &amp; MS<br /><span class="text-surface-400 text-[11px] font-normal">Certified</span></p>
              </div>
            </div>
            <div class="absolute -bottom-5 -right-4 px-4 py-2.5 rounded-2xl glass-strong border border-glass-border shadow-glass animate-float-slow" style="animation-delay:-3s">
              <div class="flex items-center gap-2">
                <span class="text-emerald-400 text-lg">📺</span>
                <p class="text-white text-sm font-semibold leading-none">100+<br /><span class="text-surface-400 text-[11px] font-normal">Tutorials</span></p>
              </div>
            </div>
            <div class="absolute -bottom-6 -left-3 px-3.5 py-2.5 rounded-2xl glass-strong border border-glass-border shadow-glass animate-float" style="animation-delay:-2s">
              <div class="flex items-center gap-2">
                <span class="text-violet-400 text-lg">🎓</span>
                <p class="text-white text-xs font-semibold leading-none">Teaching<br /><span class="text-surface-400 text-[11px] font-normal">in public</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll cue -->
      <a href="#stats" class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-surface-500 hover:text-accent transition-colors duration-300" aria-label="Scroll to statistics">
        <span class="text-[11px] font-mono uppercase tracking-widest">Scroll</span>
        <span class="w-6 h-10 rounded-full border border-glass-border flex items-start justify-center p-1.5">
          <span class="w-1 h-2 rounded-full bg-accent animate-scroll-cue" />
        </span>
      </a>
    </section>

    <!-- ===================== STATISTICS ===================== -->
    <section id="stats" class="relative py-24 sm:py-28">
      <div class="section-container">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          <StatCard v-for="stat in stats" :key="stat.label" :target="stat.target" :suffix="stat.suffix" :label="stat.label" :icon="stat.icon" />
        </div>
      </div>
    </section>

    <!-- ===================== PROJECTS ===================== -->
    <section id="projects" class="relative py-24 sm:py-32">
      <div class="section-container">
        <div class="text-center mb-16 reveal">
          <span class="section-label justify-center">Selected Work</span>
          <h2 class="font-display text-display-sm sm:text-display-md text-balance">Products I've <span class="gradient-text">launched</span></h2>
          <p class="text-surface-400 mt-4 max-w-2xl mx-auto">A handful of projects built with care — each one a small product, not just a repository.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            :title="project.title"
            :description="project.description"
            :glyph="project.glyph"
            :gradient="project.gradient"
            :tech-stack="project.tech"
            :demo-url="project.demoUrl"
            :github-url="project.githubUrl"
            :status="project.status"
            :featured="project.featured"
          />
        </div>
      </div>
    </section>

    <!-- ===================== SKILLS ===================== -->
    <section id="skills" class="relative py-24 sm:py-32">
      <div class="section-container">
        <div class="text-center mb-16 reveal">
          <span class="section-label justify-center">Toolkit</span>
          <h2 class="font-display text-display-sm sm:text-display-md text-balance">Skills &amp; <span class="gradient-text">craft</span></h2>
          <p class="text-surface-400 mt-4 max-w-2xl mx-auto">The technologies I reach for to turn ideas into reliable, beautiful products.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            v-for="category in skillCategories"
            :key="category.title"
            :title="category.title"
            :icon="category.icon"
            :skills="category.skills"
          />
        </div>
      </div>
    </section>

    <!-- ===================== TIMELINE ===================== -->
    <section id="journey" class="relative py-24 sm:py-32">
      <div class="section-container max-w-4xl">
        <div class="text-center mb-16 reveal">
          <span class="section-label justify-center">My Journey</span>
          <h2 class="font-display text-display-sm sm:text-display-md text-balance">The road <span class="gradient-text">so far</span></h2>
        </div>

        <div class="relative pl-12 sm:pl-16">
          <div class="absolute left-[22px] sm:left-[30px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />
          <div class="space-y-10">
            <TimelineItem
              v-for="item in timeline"
              :key="item.title"
              :title="item.title"
              :description="item.description"
              :date="item.date"
              :icon="item.icon"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== ABOUT ===================== -->
    <section id="about" class="relative py-24 sm:py-32">
      <div class="section-container">
        <div class="text-center mb-16 reveal">
          <span class="section-label justify-center">About</span>
          <h2 class="font-display text-display-sm sm:text-display-md text-balance">Engineer, educator, <span class="gradient-text">builder</span></h2>
        </div>

        <div class="grid lg:grid-cols-5 gap-8 items-stretch mb-8">
          <div class="lg:col-span-2 reveal">
            <div class="card-surface h-full flex flex-col">
              <div class="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-900 mb-6">
                <img src="/images/sikandar.jpeg" alt="Eng. Sikandar Muhibzada" class="w-full h-full object-cover" loading="lazy" />
              </div>
              <div class="flex flex-wrap gap-2 mt-auto">
                <span v-for="badge in badges" :key="badge" class="chip">{{ badge }}</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-3 space-y-6">
            <div class="reveal card-surface">
              <h3 class="font-display text-2xl font-semibold text-white mb-3">انجنیر سکندر محب‌زادہ</h3>
              <p class="text-surface-300 leading-relaxed">Eng. Sikandar Muhibzada is an accomplished IT professional with over 15 years of experience across various domains of information technology. He holds certifications from both Oracle and Microsoft, demonstrating his strong technical expertise and commitment to professional excellence. Eng. Muhibzada earned his Bachelor&#039;s degree in Computer Science, further solidifying his foundation in software, systems, and network technologies.</p>
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

        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="p in philosophies" :key="p.title" class="reveal card-surface hover:border-accent/30">
            <div class="text-2xl mb-4">{{ p.icon }}</div>
            <h3 class="font-display text-lg font-semibold text-white mb-2">{{ p.title }}</h3>
            <p class="text-surface-400 text-sm leading-relaxed">{{ p.description }}</p>
          </div>
        </div>

        <div class="reveal mt-8 card-surface flex flex-col sm:flex-row items-center justify-between gap-6 !p-8 sm:!p-10">
          <div class="text-center sm:text-left">
            <div class="text-4xl mb-3">📺</div>
            <h3 class="font-display text-xl font-semibold text-white">Click &amp; Learn with Muhibzada</h3>
            <p class="text-surface-400 text-sm mt-1 max-w-md">Free tutorials on Word, Excel, Windows and more. Learn at your own pace.</p>
          </div>
          <MagneticButton to="https://youtube.com/@clickandlearnwithmuhibzada" external variant="primary">
            Visit YouTube Channel
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </MagneticButton>
        </div>
      </div>
    </section>

    <!-- ===================== CONTACT CTA ===================== -->
    <section id="contact" class="relative py-24 sm:py-32">
      <div class="section-container">
        <div class="reveal relative overflow-hidden rounded-4xl glass-strong border border-glass-border px-6 py-16 sm:px-16 sm:py-20 text-center">
          <div class="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
          <div class="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl" />
          <div class="relative">
            <span class="section-label justify-center">Let's Talk</span>
            <h2 class="font-display text-display-sm sm:text-display-md text-balance max-w-2xl mx-auto">Have a project in mind? <span class="gradient-text">Let's build it.</span></h2>
            <p class="text-surface-400 mt-4 max-w-xl mx-auto">I'm available for freelance, consulting, and collaboration. Reach out and I'll get back within 24 hours.</p>
            <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton to="#contact" variant="primary" size="lg">
                Get in Touch
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </MagneticButton>
              <a href="mailto:alisedadmu@gmail.com" class="text-surface-300 hover:text-white text-sm font-medium transition-colors duration-300">alisedadmu@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'Sikandar Muhibzada — Portfolio',
  meta: [
    { name: 'description', content: 'Portfolio of Eng. Sikandar Muhibzada — over 15 years of professional IT expertise, Oracle &amp; Microsoft certified, and a Computer Science graduate dedicated to sharing knowledge through free education.' }
  ]
})

useScrollReveal()

const heroRef = ref<HTMLElement | null>(null)
const glowRef = ref<HTMLElement | null>(null)
const glow = ref({ x: 0, y: 0 })
const glowVisible = ref(false)

function onHeroMove(e: MouseEvent) {
  glow.value = { x: e.clientX, y: e.clientY }
  glowVisible.value = true
}

const socialLinks = [
  { label: 'YouTube', url: 'https://youtube.com/@clickandlearnwithmuhibzada', icon: '▶️' },
  { label: 'Email', url: 'mailto:alisedadmu@gmail.com', icon: '✉️' },
]

const stats = [
  { icon: '🌟', target: 15, suffix: '+', label: 'Years Experience' },
  { icon: '📺', target: 100, suffix: '+', label: 'Tutorials Published' },
  { icon: '🎓', target: 24, label: 'Courses & Projects' },
  { icon: '👥', target: 10, suffix: 'K+', label: 'Students Reached' },
]

const projects = [
  {
    title: 'Click & Learn Platform',
    description: 'A friendly home for free tutorials — courses, notes, and step-by-step guidance for every learner.',
    glyph: '🎓',
    gradient: 'linear-gradient(135deg, #e11d48 0%, #f97316 100%)',
    tech: ['Courses', 'Video', 'Guides', 'Community'],
    status: 'live' as const,
    featured: true,
    demoUrl: 'https://youtube.com/@clickandlearnwithmuhibzada',
  },
  {
    title: 'Word Mastery Series',
    description: 'A complete, beginner-friendly video course taking you from your first document to confident power user.',
    glyph: '📝',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
    tech: ['Microsoft Word', 'Documents', 'Formatting'],
    status: 'live' as const,
    featured: false,
    demoUrl: 'https://youtube.com/@clickandlearnwithmuhibzada',
  },
  {
    title: 'Excel Analytics Toolkit',
    description: 'Reusable spreadsheet templates and formulas that make data analysis feel effortless.',
    glyph: '📈',
    gradient: 'linear-gradient(135deg, #059669 0%, #14b8a6 100%)',
    tech: ['Microsoft Excel', 'Templates', 'Charts'],
    status: 'live' as const,
    featured: false,
    demoUrl: 'https://youtube.com/@clickandlearnwithmuhibzada',
  },
  {
    title: 'Windows Productivity Guide',
    description: 'Practical tutorials that help anyone get the most out of their Windows PC, confidently.',
    glyph: '🖥️',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    tech: ['Windows', 'Troubleshooting', 'Tips'],
    status: 'live' as const,
    featured: false,
    demoUrl: 'https://youtube.com/@clickandlearnwithmuhibzada',
  },
  {
    title: 'IT Career Roadmap',
    description: 'A clear, encouraging guide that helps newcomers plan and grow a career in technology.',
    glyph: '🧭',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    tech: ['Career', 'Mentoring', 'Planning'],
    status: 'development' as const,
    featured: false,
  },
]

const skillCategories = [
  { icon: '🎓', title: 'Teaching', skills: ['Curriculum Design', 'Screencasting', 'Public Speaking', 'Mentoring', 'Lesson Planning'] },
  { icon: '🛠️', title: 'Software & Tools', skills: ['Microsoft Office', 'Windows', 'Google Workspace', 'Figma', 'Canva'] },
  { icon: '💻', title: 'IT & Systems', skills: ['Networking', 'Hardware', 'Troubleshooting', 'Cyber Security', 'Cloud Basics'] },
  { icon: '🎬', title: 'Content Creation', skills: ['Video Editing', 'Scriptwriting', 'SEO', 'Thumbnails', 'Storytelling'] },
  { icon: '🗣️', title: 'Languages', skills: ['Dari', 'English', 'French'] },
  { icon: '🤝', title: 'Soft Skills', skills: ['Communication', 'Leadership', 'Problem Solving', 'Time Management'] },
]

const timeline = [
  { date: '2008', icon: '🌱', title: 'Discovering Technology', description: 'Discovered a passion for computers and technology, beginning my studies in Computer Science and IT.' },
  { date: '2010', icon: '🚀', title: 'First Projects', description: 'Delivered my earliest training sessions and IT support work, learning to solve real problems for real people.' },
  { date: '2024', icon: '💡', title: 'Portfolio & Personal Brand', description: 'Launched this portfolio and began sharing knowledge publicly as Click & Learn with Muhibzada.' },
  { date: '2025', icon: '🗺️', title: 'Atlas Report', description: 'Launched Atlas Report — a flagship platform that turns learning activity into clear, helpful progress reports.' },
  { date: 'Future', icon: '🌟', title: "What's Next", description: 'More free education, deeper community impact, and new ways to help the next generation learn technology.' },
]

const badges = ['🎓 BSc Computer Science', '🛠️ Oracle Certified', '📘 Microsoft Certified', '⏱️ 15+ Years']
const highlights = [
  { icon: '🌍', value: '15+', label: 'Years Experience' },
  { icon: '📜', value: '2', label: 'Certifications' },
  { icon: '📺', value: '100+', label: 'Tutorials' },
]
const philosophies = [
  { icon: '🎯', title: 'Purpose-Driven', description: 'Every project starts with a real problem. Technology should make a tangible difference in people’s lives.' },
  { icon: '📚', title: 'Knowledge Sharing', description: 'Through free educational content, I help others build the skills they need to succeed.' },
  { icon: '🔧', title: 'Continuous Learning', description: 'The field moves fast. I stay sharp by constantly learning new tools, frameworks, and ideas.' },
]
</script>
