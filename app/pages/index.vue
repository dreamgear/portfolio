<script setup>
const { data: sections } = await useAsyncData('portfolio-sections', () =>
  queryCollection('portfolio').order('order', 'ASC').all()
)

const { data: technologies } = await useAsyncData('technologies', () =>
  queryCollection('technologies').order('order', 'ASC').all()
)

const { data: recentPosts } = await useAsyncData('recent-blog', () =>
  queryCollection('blog').order('date', 'DESC').limit(3).all()
)

const expandedPosts = ref({})

function togglePost(path) {
  expandedPosts.value[path] = !expandedPosts.value[path]
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="container animate-in">
    <header style="margin-bottom: 3rem; display: flex; align-items: center; gap: 2rem;">
      <img src="~/assets/images/headshot_2602.png" alt="Jeff Dickens" style="width: 150px; height: auto; border-radius: 8px;" />
      <div>
        <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem; background: none; -webkit-text-fill-color: initial; color: var(--text-main);">Jeff Dickens</h1>
        <p style="margin: 0; font-size: 0.95rem;">dreamgear@gmail.com</p>
      </div>
    </header>

    <main>
      <!-- Portfolio sections (resume) -->
      <template v-for="(section, index) in sections" :key="section._path">
        <section
          class="section-card"
          :class="`delay-${Math.min(index + 1, 3)}`"
        >
          <h2 :class="section.headingClass || 'heading-gamma'">{{ section.title }}</h2>
          <div class="prose prose-invert max-w-none">
            <ContentRenderer :value="section" />
          </div>
        </section>
      </template>

      <!-- Technologies section -->
      <section class="section-card" style="margin-top: 4rem;" v-if="technologies && technologies.length">
        <h2 style="text-align: center; margin-bottom: 2rem;">Technologies</h2>
        <ul class="link-list">
          <li v-for="tech in technologies" :key="tech.title" class="link-item">
            <a :href="tech.url" target="_blank">
              <span class="link-title">{{ tech.title }}</span>
              <span class="link-desc">{{ tech.description }}</span>
            </a>
          </li>
        </ul>
      </section>

      <!-- Recent Blog Posts preview -->
      <section class="section-card" style="margin-top: 4rem;" v-if="recentPosts && recentPosts.length">
        <div class="blog-section-header">
          <h2 style="text-align: center; margin-bottom: 0.5rem;">Recent Blog Posts</h2>
          <p style="text-align: center; max-width: none; margin-bottom: 2rem;">
            <NuxtLink to="/blog" class="blog-view-all">View all posts →</NuxtLink>
          </p>
        </div>

        <div v-for="post in recentPosts" :key="post.stem" class="blog-entry">
          <div class="blog-header" @click="togglePost(post.stem)">
            <div>
              <h3 class="blog-title">{{ post.title }}</h3>
              <span class="blog-date">{{ formatDate(post.date) }}</span>
            </div>
            <span class="blog-chevron" :class="{ 'blog-chevron--open': expandedPosts[post.stem] }">▸</span>
          </div>
          <p class="blog-excerpt" v-if="!expandedPosts[post.stem]">{{ post.excerpt }}</p>
          <div class="blog-body" v-if="expandedPosts[post.stem]">
            <div class="prose prose-invert max-w-none">
              <ContentRenderer :value="post" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
