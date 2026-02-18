import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'page',
            source: '**/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string().optional(),
                order: z.number().optional(),
                category: z.string().optional(),
                headingClass: z.string().optional(),
                technologies: z.array(z.object({
                    title: z.string(),
                    description: z.string(),
                    url: z.string()
                })).optional()
            })
        })
    }
})
