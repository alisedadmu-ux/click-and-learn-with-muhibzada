<template>
  <div class="section-padding min-h-screen flex items-center">
    <div class="section-container w-full">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14 reveal">
          <span class="section-label justify-center">Contact</span>
          <h1 class="font-display text-display-sm sm:text-display-md md:text-display-lg text-balance">Get in <span class="gradient-text">touch</span></h1>
          <p class="text-surface-400 mt-4 max-w-xl mx-auto">Have a question, project idea, or just want to say hello? I'd love to hear from you.</p>
        </div>

        <div class="grid md:grid-cols-5 gap-8">
          <!-- Info -->
          <div class="md:col-span-2 space-y-4">
            <div class="reveal pill w-fit">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span class="text-sm text-surface-300 font-medium">Available for opportunities</span>
            </div>

            <div v-for="info in contactInfo" :key="info.label" class="reveal card-surface hover:border-accent/30 !p-5">
              <div class="flex items-start gap-4">
                <div class="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-lg flex-shrink-0">{{ info.icon }}</div>
                <div>
                  <h3 class="font-medium text-white mb-0.5">{{ info.label }}</h3>
                  <p class="text-surface-400 text-sm">{{ info.value }}</p>
                  <p v-if="info.sub" class="text-surface-500 text-xs mt-1">{{ info.sub }}</p>
                </div>
              </div>
            </div>

            <div class="reveal card-surface !p-5">
              <h3 class="font-medium text-white mb-3 text-sm">Follow Me</h3>
              <div class="flex flex-wrap gap-2">
                <a v-for="social in socialLinks" :key="social.label" :href="social.url" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 text-surface-400 hover:text-white hover:bg-accent/20 transition-all duration-300 text-sm">
                  <span>{{ social.icon }}</span> {{ social.label }}
                </a>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div class="md:col-span-3">
            <div class="reveal relative overflow-hidden rounded-3xl glass-strong border border-glass-border p-8 sm:p-10">
              <div class="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

              <Transition mode="out-in">
                <div v-if="!submitted" key="form">
                  <h2 class="font-display text-2xl font-semibold text-white mb-6">Send a Message</h2>
                  <form @submit.prevent="handleSubmit" class="space-y-5">
                    <div>
                      <label for="name" class="block text-sm font-medium text-surface-300 mb-2">Your Name</label>
                      <input v-model="form.name" type="text" id="name" required placeholder="John Doe" class="w-full px-4 py-3 rounded-xl bg-white/5 border border-glass-border text-white placeholder-surface-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-300" />
                    </div>
                    <div>
                      <label for="email" class="block text-sm font-medium text-surface-300 mb-2">Email Address</label>
                      <input v-model="form.email" type="email" id="email" required placeholder="john@example.com" class="w-full px-4 py-3 rounded-xl bg-white/5 border border-glass-border text-white placeholder-surface-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-300" />
                    </div>
                    <div>
                      <label for="message" class="block text-sm font-medium text-surface-300 mb-2">Your Message</label>
                      <textarea v-model="form.message" id="message" rows="5" required placeholder="Type your message here..." class="w-full px-4 py-3 rounded-xl bg-white/5 border border-glass-border text-white placeholder-surface-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-300 resize-none" />
                    </div>
                    <button type="submit" :disabled="loading" class="btn-primary group w-full disabled:opacity-60">
                      <span class="btn-primary-inner opacity-0 group-hover:opacity-100" />
                      <span class="relative z-10 flex items-center justify-center gap-2">
                        <template v-if="!loading">
                          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                          Send Message
                        </template>
                        <template v-else>
                          <svg class="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                          Sending...
                        </template>
                      </span>
                    </button>
                  </form>
                </div>

                <div v-else key="success" class="text-center py-10">
                  <div class="mx-auto w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-5 animate-scale-in">
                    <svg class="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h2 class="font-display text-2xl font-semibold text-white mb-2">Message Sent!</h2>
                  <p class="text-surface-400 max-w-sm mx-auto">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  <button @click="reset" class="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass glass-hover text-white text-sm font-medium transition-all duration-300">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h11M3 10l4-4M3 10l4 4"/></svg>
                    Send another
                  </button>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'Contact',
  meta: [{ name: 'description', content: 'Get in touch with Eng. Sikandar Muhibzada for technical questions, project discussions, or collaboration.' }]
})

useScrollReveal()

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'alisedadmu@gmail.com', sub: 'Response within 24 hours' },
  { icon: '📍', label: 'Location', value: 'Pakistan', sub: 'Available for remote work' },
  { icon: '⏰', label: 'Availability', value: 'Open to opportunities', sub: 'Teaching / Training / Collaborations' },
]
const socialLinks = [
  { label: 'YouTube', url: 'https://youtube.com/@clickandlearnwithmuhibzada', icon: '▶️' },
  { label: 'Email', url: 'mailto:alisedadmu@gmail.com', icon: '✉️' },
]

const form = ref({ name: '', email: '', message: '' })
const loading = ref(false)
const submitted = ref(false)

async function handleSubmit() {
  if (!form.value.name.trim() || !form.value.email.trim() || !form.value.message.trim()) return
  loading.value = true
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: { name: form.value.name.trim(), email: form.value.email.trim(), message: form.value.message.trim() },
    })
    submitted.value = true
    form.value = { name: '', email: '', message: '' }
  } catch (err) {
    console.error('Contact form error:', err)
  } finally {
    loading.value = false
  }
}

function reset() {
  submitted.value = false
}
</script>
