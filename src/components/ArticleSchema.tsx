import { Helmet } from 'react-helmet-async';

interface ArticleSchemaProps {
  headline: string;
  description: string;
  authorName: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
  keywords?: string[];
  wordCount?: number;
}

export default function ArticleSchema({
  headline,
  description,
  authorName,
  datePublished,
  dateModified,
  image,
  url,
  keywords,
  wordCount,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": headline,
    "description": description,
    "image": image,
    "author": {
      "@type": "Person",
      "name": authorName,
    },
    "publisher": {
      "@type": "Organization",
      "name": "FLICK2SPLIT",
      "logo": {
        "@type": "ImageObject",
        "url": "https://flick2split.com/logo.png",
      },
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
    ...(wordCount ? { "wordCount": wordCount } : {}),
    ...(keywords && keywords.length > 0 ? { "keywords": keywords.join(", ") } : {}),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
