import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { allBlogPosts } from '@/data/blogPosts';

type RelatedPostProps = {
  currentSlug: string;
  category?: string;
};

const MAX_RELATED_POSTS = 3;

const RelatedPosts = ({ currentSlug, category }: RelatedPostProps) => {
  const relatedPosts = useMemo(() => {
    // Filter out the current post
    const otherPosts = allBlogPosts.filter(post => post.slug !== currentSlug);

    if (otherPosts.length === 0) return [];

    // Split into same-category and different-category posts
    const sameCategoryPosts = category
      ? otherPosts.filter(post => post.category === category)
      : [];
    const differentCategoryPosts = category
      ? otherPosts.filter(post => post.category !== category)
      : otherPosts;

    // Prioritize same-category posts, then fill with others
    return [...sameCategoryPosts, ...differentCategoryPosts].slice(0, MAX_RELATED_POSTS);
  }, [currentSlug, category]);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-white/10">
      <h3 className="text-xl font-bold text-flick-white mb-6">Related Articles</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {relatedPosts.map(post => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="glass-card p-6 transition-all hover:shadow-lg"
          >
            <span className="inline-block bg-flick-yellow/20 text-flick-yellow px-2 py-0.5 rounded-full text-xs font-medium mb-2">
              {post.category}
            </span>
            <h4 className="text-lg font-semibold text-flick-white mb-2">{post.title}</h4>
            <p className="text-white/70">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
