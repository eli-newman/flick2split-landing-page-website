import { useState, useEffect } from 'react';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import SeoHead from '@/components/SeoHead';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { allBlogPosts, blogCategories } from '@/data/blogPosts';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(allBlogPosts);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Filter posts based on search query and selected category
    const filtered = allBlogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredPosts(filtered);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-flick-blue">
      <SeoHead
        title="Blog | FLICK2SPLIT - Tips & Stories About Bill Splitting"
        description="Read the latest articles, tips, and stories about bill splitting, expense sharing, and managing group finances with friends."
        canonicalUrl="https://flick2split.com/blog"
        keywords={['bill splitting tips', 'expense sharing advice', 'group dining etiquette', 'money and friendships']}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://flick2split.com/' },
          { name: 'Blog', url: 'https://flick2split.com/blog' },
        ]}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "FLICK2SPLIT Blog",
            "description": "Read the latest articles, tips, and stories about bill splitting, expense sharing, and managing group finances with friends.",
            "url": "https://flick2split.com/blog",
            "hasPart": allBlogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "image": post.imageUrl,
              "url": `https://flick2split.com/blog/${post.slug}`,
            })),
          })}
        </script>
      </Helmet>

      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-4 hero-gradient">
        <div className="container mx-auto">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <span className="inline-block bg-flick-yellow/20 text-flick-yellow px-3 py-1 rounded-full text-sm font-medium mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-flick-white mb-6">
              Latest Articles & Insights
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Stay up to date with the latest tips, stories, and updates from FLICK2SPLIT.
            </p>
          </div>
        </div>
      </section>
      
      {/* Search and Filter */}
      <section className="py-8 px-4 bg-flick-blue-dark sticky top-0 z-30 shadow-md">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="w-full md:w-1/2 relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-flick-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-flick-yellow/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 w-full md:w-auto">
              <Filter size={18} className="text-white/60 flex-shrink-0" />
              {blogCategories.map((category, index) => (
                <button
                  key={index}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm transition-all ${
                    selectedCategory === category 
                      ? 'bg-flick-yellow text-flick-blue-dark font-medium' 
                      : 'bg-white/5 text-white/80 hover:bg-white/10'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16 px-4 bg-flick-blue-dark">
        <div className="container mx-auto">
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <div 
                    key={index} 
                    className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    style={{ transitionDelay: `${100 + index * 50}ms` }}
                  >
                    <BlogCard 
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      imageUrl={post.imageUrl}
                      category={post.category}
                      slug={post.slug}
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <button className="btn-secondary flex items-center gap-2">
                  Load More Articles
                  <ArrowRight size={16} />
                </button>
              </div>
            </>
          ) : (
            <div className="glass-card p-8 text-center">
              <h3 className="text-xl font-semibold text-flick-white mb-3">No articles found</h3>
              <p className="text-white/80 mb-4">
                We couldn't find any articles matching your search criteria. Try adjusting your filters or search term.
              </p>
              <button 
                className="inline-flex items-center text-flick-yellow hover:text-white transition-colors font-medium"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
