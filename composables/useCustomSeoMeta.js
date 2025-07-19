import { useHead } from '#imports'

/**
 * useSeoMeta
 * @param {Object} options
 * @param {String} options.title - Page title
 * @param {String} options.description - Meta description
 * @param {String} options.url - Canonical URL
 * @param {String} options.image - Image URL for social sharing
 * @param {String} options.type - OpenGraph type (website, article, etc.)
 * @param {Object} options.jsonLd - Schema.org JSON-LD (optional)
 */
export function useSeoMeta({
  title = 'Light in the Darkness - A Visual Exploration of Horror Cinema',
  description = 'Light in the Darkness explores the thin line between good and evil through 10 unique posters inspired by horror cinema.',
  url = 'https://yourwebsite.com',
  image = 'https://yourwebsite.com/img/share-image.jpg',
  type = 'website',
  jsonLd = null
} = {}) {
  useHead({
    title,
    meta: [
      // SEO standard
      { name: 'description', content: description },
      { name: 'keywords', content: 'horror cinema, posters, visual design, Studio K95, graphic design, film history' },
      { name: 'author', content: 'Studio K95' },

      // AI & semantic hints
      { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow' },

      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:locale', content: 'en_US' },

      // Twitter Cards
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:creator', content: '@studioK95' }
    ],
    link: [
      { rel: 'canonical', href: url }
    ],
    script: jsonLd
      ? [
          {
            type: 'application/ld+json',
            children: JSON.stringify(jsonLd)
          }
        ]
      : []
  })
}