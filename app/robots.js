export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/auth/',
      },
    ],
    sitemap: 'https://gmrl.app/sitemap.xml',
  }
}
