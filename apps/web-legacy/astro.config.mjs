import { defineConfig } from 'astro/config';
import rehypeToc from 'rehype-toc';
import rehypeSlug from 'rehype-slug';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    extendPlugins: 'astroDefaults',
    rehypePlugins: [rehypeSlug, [rehypeToc, {
      headings: ['h2', 'h3'],
      cssClasses: {
        toc: 'course-toc'
      }
    }]]
  },
  integrations: [mdx()]
});