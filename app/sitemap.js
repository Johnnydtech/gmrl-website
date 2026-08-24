import { getAllPosts } from '../lib/blog'

export default function sitemap() {
  const baseUrl = 'https://gmrl.app'
  const lastModified = new Date()

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/support`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/help`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const postRoutes = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00Z`),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...postRoutes]
}
