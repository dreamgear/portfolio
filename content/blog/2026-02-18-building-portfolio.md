---
title: "Building My Portfolio with Nuxt 3 and Nuxt Content"
date: 2026-02-18
excerpt: "A walkthrough of how I built this portfolio site using Nuxt 3, Nuxt Content, and a glassmorphism design system."
---

When I set out to rebuild my portfolio, I wanted something that was fast, easy to maintain, and looked modern without relying on heavy UI libraries.

## Why Nuxt 3?

Nuxt 3 provides an excellent developer experience with its file-based routing, auto-imports, and server-side rendering capabilities. Combined with Nuxt Content, I can write my resume sections and blog posts in Markdown and have them rendered beautifully.

## The Design System

I went with a dark glassmorphism aesthetic — subtle gradients, frosted-glass cards, and smooth animations. The entire design is built with vanilla CSS custom properties, making it trivial to tweak colors and effects.

## Content Management

Each section of the portfolio is a separate Markdown file with frontmatter metadata. Nuxt Content's `queryCollection` API makes it simple to fetch, filter, and order content exactly how I need it.
