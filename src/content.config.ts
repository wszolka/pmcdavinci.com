import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const postCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/content/blog" }),
	schema: ({ image }) => z.object({
                title: z.string(),
                excerpt: z.string().optional(),
                feature_image: image().optional(),
                feature_video: z.string().optional(),
                post_header_type: z.enum(["Wide", "Wide Centered", "Narrow", "Narrow Centered", "Background Media", "Background Media Centered"]).optional(),
                post_template: z.enum(['Right Aligned', 'Default']).optional(),
                draft: z.boolean().optional(),
                pub_date: z
                        .string()
                        .or(z.date())
                        .transform((val) => new Date(val)),
                updated_date: z
                        .string()
                        .optional()
                        .transform((str) => (str ? new Date(str) : undefined)),
                featured: z.boolean().optional(),
                add_to_homepage_slider: z.boolean().optional(),
                tags: z.array(z.string()).optional(),
                authors: z.array(z.string()).optional()
	}),
});

const pageCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/content/pages" }),
	schema: ({ image }) => z.object({
                title: z.string(),
                excerpt: z.string().optional(),
                feature_image: image().optional(),
                feature_video: z.string().optional(),
                page_header_type: z.enum(["Wide", "Wide Centered", "Narrow", "Narrow Centered", "Background Media", "Background Media Centered"]).optional(),
                page_template: z.enum(['Right Aligned', 'Default']).optional(),
                draft: z.boolean().optional()
	}),
});


export const collections = {
	blog: postCollection,
        page: pageCollection
};