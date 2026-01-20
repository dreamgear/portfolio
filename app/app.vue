<template>
  <div class="container animate-in">
    <header style="text-align: center; margin-bottom: 4rem;">
      <h1>Portfolio</h1>
      <p style="margin: 0 auto;">A showcase of modern web technologies.</p>
    </header>

    <main>
      <section class="section-card delay-1">
        <h2 class="heading-alpha">Alpha</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </section>

      <section class="section-card delay-2">
        <h2 class="heading-beta">Beta</h2>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </section>

      <section class="section-card delay-3">
        <h2 class="heading-gamma">Gamma</h2>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </section>

      <section class="section-card delay-3" style="margin-top: 4rem;">
        <h2 style="text-align: center; margin-bottom: 2rem;">Technologies</h2>
        <ul class="link-list">
          <li class="link-item">
            <a href="#" target="_blank">
              <span class="link-title">Antigravity</span>
              <span class="link-desc">Advanced AI Agentic Coding Assistant</span>
            </a>
          </li>
          <li class="link-item">
            <a href="https://nuxt.com" target="_blank">
              <span class="link-title">Nuxt 3</span>
              <span class="link-desc">The Intuitive Vue Framework</span>
            </a>
          </li>
          <li class="link-item">
            <a href="https://www.docker.com" target="_blank">
              <span class="link-title">Docker</span>
              <span class="link-desc">Accelerate how you build, share, and run applications</span>
            </a>
          </li>
          <li class="link-item">
            <a href="https://traefik.io" target="_blank">
              <span class="link-title">Traefik</span>
              <span class="link-desc">The Cloud Native Application Proxy</span>
            </a>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'My Portfolio',
  meta: [
    { name: 'description', content: 'A professional and personal portfolio built with Nuxt 3.' }
  ]
})
</script>
