<script setup>
const { data: sections } = await useAsyncData('portfolio-sections', () =>
  queryCollection('content').order('order', 'ASC').all()
)
</script>

<template>
  <div class="container animate-in">
    <header style="margin-bottom: 3rem;">
      <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem; background: none; -webkit-text-fill-color: initial; color: var(--text-main);">Jeff Dickens</h1>
      <p style="margin: 0; font-size: 0.95rem;">dreamgear@gmail.com</p>
    </header>

    <main>
      <template v-for="(section, index) in sections" :key="section._path">
        <!-- Technologies section gets special grid treatment -->
        <section
          v-if="section.category === 'technologies'"
          class="section-card"
          :class="`delay-${Math.min(index + 1, 3)}`"
          style="margin-top: 4rem;"
        >
          <h2 style="text-align: center; margin-bottom: 2rem;">{{ section.title }}</h2>
          <ul class="link-list">
            <li v-for="tech in section.technologies" :key="tech.title" class="link-item">
              <a :href="tech.url" target="_blank">
                <span class="link-title">{{ tech.title }}</span>
                <span class="link-desc">{{ tech.description }}</span>
              </a>
            </li>
          </ul>
        </section>

        <!-- All other sections -->
        <section
          v-else
          class="section-card"
          :class="`delay-${Math.min(index + 1, 3)}`"
        >
          <h2 :class="section.headingClass || 'heading-gamma'">{{ section.title }}</h2>
          <div class="prose prose-invert max-w-none">
            <ContentRenderer :value="section" />
          </div>
        </section>
      </template>
    </main>
  </div>
</template>
