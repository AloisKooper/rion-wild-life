import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, Search, Tag, MapPin } from "lucide-react";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/data/blogData";
import { BlogPost } from "@/types/blog";
import { cn } from "@/lib/utils";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Get featured post (most recent)
  const featuredPost = blogPosts[0];
  
  // Get remaining posts
  const remainingPosts = blogPosts.slice(1);

  // Filter posts based on search query and category
  const filteredPosts = remainingPosts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || 
      post.categories.includes(activeCategory);
    
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    // Simulate loading delay for demo purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const categories = ["All", "Wildlife", "Conservation", "Safari Tips", "Cultural", "Photography"];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Image Background - similar to WildlifeViewing.tsx */}
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1505204644541-35b355883577?q=80&w=2070&auto=format&fit=crop)`, 
            height: "500px" // Same height as in WildlifeViewing.tsx
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative">
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white max-w-4xl leading-tight font-['Athelas',_serif]">Safari Journal</h1>
            <div className="mt-8">
              <Button className="bg-[#C05B2A] hover:bg-[#A04B1A] text-white px-8 py-6 rounded-md text-lg font-medium">EXPLORE ARTICLES</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Safari Journal Content Section - This is the section that was previously in hero position */}
      <div className="bg-amber-50 border-b border-amber-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
                  Safari Journal
                </h2>
                
                <div className="h-1 w-24 bg-amber-500 mb-6"></div>
                
                <p className="text-lg text-gray-700 mb-8">
                  Learn about wildlife conservation, safari experiences, and expert insights from Professor Rion Haraeb's 20+ years of guiding tours across Namibia, Botswana, and Victoria Falls.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <div className="relative flex-grow">
                    <Input
                      type="search"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 h-12 bg-white border border-amber-200 rounded-lg text-gray-900 placeholder:text-gray-500 w-full"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-amber-700" />
                  </div>
                  
                  <Button className="h-12 px-6 bg-amber-700 hover:bg-amber-800 text-white border-0">
                    Search
                  </Button>
                </div>
                
                <div className="flex items-center gap-3 text-gray-600">
                  <Tag className="h-5 w-5 text-amber-700" />
                  <span className="font-medium">Popular topics:</span>
                  <div className="flex flex-wrap gap-2">
                    <Link to="#" className="text-amber-700 hover:underline">Big Five</Link>
                    <span>•</span>
                    <Link to="#" className="text-amber-700 hover:underline">Etosha</Link>
                    <span>•</span>
                    <Link to="#" className="text-amber-700 hover:underline">Namibia</Link>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-7 relative">
                <div className="relative rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1520303032339-99ffe7535f4e?q=80&w=2070&auto=format&fit=crop" 
                    alt="Safari Journal" 
                    className="w-full h-80 md:h-[400px] object-cover"
                    onError={(e) => {
                      // Fallback to a default image on error
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=1000";
                    }}
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-3 py-1 bg-amber-700 text-white text-xs font-bold uppercase rounded-md">
                        Featured
                      </div>
                      <div className="px-3 py-1 bg-black/30 backdrop-blur-sm text-white text-xs font-medium rounded-md">
                        {featuredPost.categories[0]}
                      </div>
                    </div>
                    
                    <h2 className="text-white text-xl sm:text-2xl font-display font-bold mb-2">
                      {featuredPost.title}
                    </h2>
                    
                    <div className="flex items-center text-white/80 text-sm mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{featuredPost.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{featuredPost.readTime} min read</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-amber-700 text-white font-medium rounded-md hover:bg-amber-800"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Category Filter */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto py-4">
            <div className="flex flex-wrap items-center gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md",
                    activeCategory === category 
                      ? "bg-amber-700 text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display font-bold text-gray-900">Latest Articles</h2>
                {searchQuery && (
                  <p className="text-gray-600">
                    Showing results for: <span className="font-medium">"{searchQuery}"</span>
                  </p>
                )}
              </div>
              
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <div className="h-48 bg-gray-200"></div>
                      <div className="p-5">
                        <div className="h-4 w-1/3 bg-gray-200 rounded mb-3"></div>
                        <div className="h-6 bg-gray-200 rounded mb-3"></div>
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 w-2/3 bg-gray-200 rounded mb-4"></div>
                        <div className="h-8 w-1/3 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredPosts.map((post) => (
                        <article 
                          key={post.id} 
                          className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col h-full"
                        >
                          <Link to={`/blog/${post.slug}`} className="block h-48 overflow-hidden bg-amber-100">
                            <img 
                              src={post.imageUrl} 
                              alt={post.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                // Fallback to a default image on error
                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=1000";
                              }}
                            />
                          </Link>
                          
                          <div className="p-5 flex-grow flex flex-col">
                            <div className="flex flex-wrap gap-2 mb-3">
                              {post.categories.slice(0, 2).map(category => (
                                <span
                                  key={`${post.id}-${category}`}
                                  className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded"
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                            
                            <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                              <Link to={`/blog/${post.slug}`} className="hover:text-amber-700">
                                {post.title}
                              </Link>
                            </h3>
                            
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center text-gray-500 text-xs mt-auto mb-4">
                              <div className="flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                <span>{post.date}</span>
                              </div>
                              <span className="mx-2">•</span>
                              <div className="flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                <span>{post.readTime} min read</span>
                              </div>
                            </div>
                            
                            <Link 
                              to={`/blog/${post.slug}`}
                              className="inline-flex items-center gap-1 text-amber-700 hover:text-amber-800 font-medium text-sm mt-auto"
                            >
                              Read More
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16 bg-white border border-gray-200 rounded-lg">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                        <Search className="h-8 w-8 text-amber-700" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                        No articles found
                      </h3>
                      <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        We couldn't find any articles matching your search criteria. Try adjusting your search terms or browse all topics.
                      </p>
                      <Button 
                        onClick={() => {
                          setSearchQuery("");
                          setActiveCategory("All");
                        }}
                        className="bg-amber-700 hover:bg-amber-800 text-white"
                      >
                        View All Articles
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
            
            {/* Safari Experience Section */}
            <section className="bg-amber-50 rounded-xl p-8 mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    Premium Safari Experiences
                  </h2>
                  <div className="h-1 w-16 bg-amber-500 mb-6"></div>
                  <p className="text-gray-700 mb-6">
                    Professor Rion Haraeb brings over 20 years of experience leading premium safari tours across Namibia, Botswana, and Victoria Falls. Our bilingual tours (English and German) feature carefully selected accommodations and expert wildlife viewing.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-3 h-3" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Namibia Highlights Safari</h3>
                        <p className="text-sm text-gray-600">14 days • €3,600 per person</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-3 h-3" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Big Five Safari (Nambovic)</h3>
                        <p className="text-sm text-gray-600">19 days • €4,800 per person</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-3 h-3" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Namibia, Botswana, Victoria Falls</h3>
                        <p className="text-sm text-gray-600">18 days • €4,500 per person</p>
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    to="/tours"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-700 text-white font-medium rounded-md hover:bg-amber-800"
                  >
                    Explore Our Tours
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="md:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1547970519-4a93475be241?q=80&w=2069&auto=format&fit=crop" 
                      alt="Safari experience" 
                      className="w-full h-40 object-cover rounded-lg"
                      onError={(e) => {
                        // Fallback to a default image on error
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=1000";
                      }}
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop" 
                      alt="Safari guide" 
                      className="w-full h-40 object-cover rounded-lg"
                      onError={(e) => {
                        // Fallback to a default image on error
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=1000";
                      }}
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070&auto=format&fit=crop" 
                      alt="Wildlife viewing" 
                      className="w-full h-40 object-cover rounded-lg"
                      onError={(e) => {
                        // Fallback to a default image on error
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=1000";
                      }}
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop" 
                      alt="Namibia landscape" 
                      className="w-full h-40 object-cover rounded-lg"
                      onError={(e) => {
                        // Fallback to a default image on error
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=1000";
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>
            
            {/* Subscription Box */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Stay Updated with Safari Insights
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Join our mailing list to receive the latest wildlife sightings, conservation news, and exclusive safari offers directly in your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="border-gray-300 focus:border-amber-500 focus:ring-amber-500 h-12"
                />
                <Button className="h-12 bg-amber-700 hover:bg-amber-800 text-white whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog; 