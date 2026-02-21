<script setup>
const route = useRoute()
const router = useRouter()

const page = computed(() => {
  const p = parseInt(route.query.page) || 1
  return Math.max(1, p)
})

const perPage = 10

const { data: allPosts } = await useAsyncData('all-blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

const totalPages = computed(() => {
  if (!allPosts.value) return 1
  return Math.ceil(allPosts.value.length / perPage)
})

const paginatedPosts = computed(() => {
  if (!allPosts.value) return []
  const start = (page.value - 1) * perPage
  return allPosts.value.slice(start, start + perPage)
})

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

function goToPage(p) {
  router.push({ query: { page: p } })
}
</script>

<template>
  <div class="container animate-in">
    <header style="margin-bottom: 3rem;">
      <div class="blog-page-header">
        <NuxtLink to="/" class="blog-back-link">← Back to Portfolio</NuxtLink>
        <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem; background: none; -webkit-text-fill-color: initial; color: var(--text-main);">Blog</h1>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-muted);">Thoughts on software engineering, tools, and technology.</p>
      </div>
    </header>

    <main>
      <div v-if="paginatedPosts.length === 0" class="section-card" style="text-align: center;">
        <p>No blog posts yet.</p>
      </div>

      <div v-for="post in paginatedPosts" :key="post.stem" class="blog-entry">
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

      <!-- Pagination -->
      <nav v-if="totalPages > 1" class="pagination">
        <button
          class="pagination-btn"
          :disabled="page <= 1"
          @click="goToPage(page - 1)"
        >
          ← Newer
        </button>
        <span class="pagination-info">Page {{ page }} of {{ totalPages }}</span>
        <button
          class="pagination-btn"
          :disabled="page >= totalPages"
          @click="goToPage(page + 1)"
        >
          Older →
        </button>
      </nav>
    </main>
  </div>
</template>
