import React from 'react'

interface SEOOptimizerProps {
  title: string
  description: string
  keywords: string[]
  canonicalUrl: string
  ogImage?: string
  articlePublishedTime?: string
  articleModifiedTime?: string
  articleAuthor?: string
  articleSection?: string
  articleTags?: string[]
  noindex?: boolean
  nofollow?: boolean
}

export default function SEOOptimizer({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/logo.png",
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor,
  articleSection,
  articleTags,
  noindex = false,
  nofollow = false
}: SEOOptimizerProps) {
  const robots = noindex 
    ? (nofollow ? "noindex, nofollow" : "noindex")
    : (nofollow ? "index, nofollow" : "index, follow")

  return (
    <>
      {/* Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="robots" content={robots} />
      <meta name="author" content="Rechner Tools" />
      <meta name="language" content="de" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={articlePublishedTime ? "article" : "website"} />
      <meta property="og:site_name" content="Rechner Tools" />
      <meta property="og:locale" content="de_DE" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Article specific meta tags */}
      {articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {articleAuthor && (
        <meta property="article:author" content={articleAuthor} />
      )}
      {articleSection && (
        <meta property="article:section" content={articleSection} />
      )}
      {articleTags && articleTags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Rechner Tools" />
      
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": articlePublishedTime ? "Article" : "WebPage",
            headline: title,
            description: description,
            url: canonicalUrl,
            image: ogImage,
            author: {
              "@type": "Organization",
              name: "Rechner Tools",
              url: "https://www.rechnerjetzt.de"
            },
            publisher: {
              "@type": "Organization",
              name: "Rechner Tools",
              url: "https://www.rechnerjetzt.de",
              logo: {
                "@type": "ImageObject",
                url: "https://www.rechnerjetzt.de/logo.png"
              }
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonicalUrl
            },
            ...(articlePublishedTime && {
              datePublished: articlePublishedTime,
              dateModified: articleModifiedTime || articlePublishedTime,
              articleSection: articleSection,
              keywords: keywords.join(", ")
            })
          })
        }}
      />
    </>
  )
}
