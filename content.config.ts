import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        portfolio: defineCollection({
            type: 'page',
            source: '*.md',
            schema: z.object({
                title: z.string(),
                description: z.string().optional(),
                order: z.number().optional(),
                category: z.string().optional(),
                headingClass: z.string().optional(),
            })
        }),
        technologies: defineCollection({
            type: 'data',
            source: 'technologies/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                url: z.string(),
                order: z.number().optional()
            })
        }),
        blog: defineCollection({
            type: 'page',
            source: 'blog/*.md',
            schema: z.object({
                title: z.string(),
                date: z.string(),
                excerpt: z.string()
            })
        })
    }
})
