<template>
  <div class="container animate-in">
    <header style="margin-bottom: 3rem;">
      <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem; background: none; -webkit-text-fill-color: initial; color: var(--text-main);">Jeff Dickens</h1>
      <p style="margin: 0; font-size: 0.95rem;">dreamgear@gmail.com</p>
    </header>

    <main>
      <section class="section-card delay-1">
        <h2 class="heading-alpha">Senior Software Engineer & NetSuite Architect</h2>
        <p>
          Versatile Engineer with over 20 years of experience evolving enterprise systems from legacy infrastructure to modern cloud architectures. Expert in the NetSuite ecosystem, including complex backend customizations and modern frontend integrations. Proven track record of guiding organizations through major technological transformations, combining deep foundational knowledge of Unix/Linux systems with current best practices in DevOps and full-stack development.
        </p>
      </section>

      <section class="section-card delay-2">
        <h2 class="heading-beta">2021 - 2025: Seaman Paper Company | Senior Software Engineer (NetSuite Focus)</h2>
        <ul>
          <li>Architected and deployed full-stack web applications for shop-floor operations, utilizing NetSuite RESTlets to expose real-time ERP data.</li>
          <li>Modernized frontend architecture by migrating legacy jQuery interfaces to Vue.js, significantly improving application performance, maintainability, and user experience for manufacturing teams.</li>
          <li>Revamped integration infrastructure by replacing legacy custom proxy servers with Informatica Cloud Application Integration (CAI), enhancing security and scalability.</li>
          <li>Engineered complex backend solutions using SuiteScript (Suitelets, User Events, Map/Reduce) to automate core business logic and streamline workflows.</li>
        </ul>
      </section>

      <section class="section-card delay-3">
        <h2 class="heading-gamma">2006 – 2021: Seaman Paper Company | IT Manager / Lead Developer</h2>
        <ul>
          <li>Designed and developed custom middleware (V4) using Node.js and Express.js, utilizing ES6 Async/Await patterns to orchestrate complex data flows between manufacturing systems and the ERP.</li>
          <li>Implemented DevOps best practices by containerizing server-side components with Docker on Ubuntu Linux hosts, ensuring consistent and portable deployment environments.</li>
          <li>Spearheaded critical enterprise modernization, co-leading the full-lifecycle migration from legacy green-screen systems to a cloud-based NetSuite ERP (2011).</li>
          <li>Scaled IT operations from a single-office support model to a multi-site network architecture, managing all hardware, software, and vendor relationships.</li>
        </ul>
      </section>

      <section class="section-card delay-3">
        <h2 class="heading-gamma">1999 - 2001 ERS International | [Location] Software Tools Engineer</h2>
        <ul>
          <li>Designed and developed custom middleware (V4) using Node.js and Express.js, utilizing ES6 Async/Await patterns to orchestrate complex data flows between manufacturing systems and the ERP.</li>
          <li>Implemented DevOps best practices by containerizing server-side components with Docker on Ubuntu Linux hosts, ensuring consistent and portable deployment environments.</li>
          <li>Spearheaded critical enterprise modernization, co-leading the full-lifecycle migration from legacy green-screen systems to a cloud-based NetSuite ERP (2011).</li>
          <li>Scaled IT operations from a single-office support model to a multi-site network architecture, managing all hardware, software, and vendor relationships.</li>
        </ul>
      </section>

      <section class="section-card delay-3">
        <h2 class="heading-gamma">1990 - 1998
      Digital Equipment Corporation | [Location] Software Engineer | 1988 – 1998 (Previously Operations Analyst, 1982–1988 | Computer Operator, 1980–1982)</h2>
        <ul>
          <li>Supported early internet infrastructure by providing engineering support for Altavista Internet Software, contributing to one of the web's foundational search and index technologies.</li>
          <li>Implemented distributed computing environments by deploying DECAthena on DEC MIPS workstations, enabling advanced networked computing capabilities for enterprise clients.</li>
          <li>Rose through the ranks from an entry-level Computer Operator to Software Engineer, consistently expanding technical scope and mastering emerging technologies over an 18-year tenure.</li>
        </ul>
      </section>

      <section class="section-card delay-3">
        <h2 class="heading-gamma">Education</h2>
        <div>
          <dl>
            <dt>Fitchburg State University | Fitchburg, MA</dt>
            <dd>Bachelor of Science in Computer Science | 2012, Summa Cum Laude</dd>
            <dt>Minuteman Regional Vocational Technical School | Lexington, MA</dt>
            <dd>Vocational Certificate in Data Processing | 1980</dd>
          </dl>
        </div>
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
