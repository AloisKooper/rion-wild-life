import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, ChevronRight, Share2 } from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { blogPosts } from "@/data/blogData";
import { BlogPost as BlogPostType } from "@/types/blog";
import { cn } from "@/lib/utils";

// Demo images for carousel
const DEMO_IMAGES = [
  "https://images.unsplash.com/photo-1516426122078-c23e76319801",
  "https://images.unsplash.com/photo-1562512048-4fa74e5573f4",
  "https://images.unsplash.com/photo-1448831102670-9fdd5779c5ce",
  "https://images.unsplash.com/photo-1519659528534-7fd733a832a0",
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mainImageLoaded, setMainImageLoaded] = useState(false);
  const [relatedImagesLoaded, setRelatedImagesLoaded] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Find the post with the matching slug
    const foundPost = blogPosts.find(p => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Find related posts with similar categories (excluding the current post)
      const related = blogPosts
        .filter(p => p.id !== foundPost.id)
        .filter(p => p.categories.some(category => 
          foundPost.categories.includes(category)
        ))
        .slice(0, 3);
        
      setRelatedPosts(related);
      
      // Simulate loading delay for demo purposes
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800);
      
      return () => clearTimeout(timer);
    } else {
      // Handle case where post is not found
      navigate("/blog", { replace: true });
    }
  }, [slug, navigate]);

  const handleRelatedImageLoad = (id: string) => {
    setRelatedImagesLoaded(prev => ({
      ...prev,
      [id]: true
    }));
  };

  const copyShareLink = () => {
    const url = `${window.location.origin}/blog/${slug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoading || !post) {
    return (
      <div className="flex flex-col min-h-screen bg-stone-50">
        <div className="relative bg-amber-800 bg-cover bg-center h-[40vh] min-h-[400px] flex flex-col">
          <div className="absolute inset-0 bg-black/60"></div>
          <Navbar />
          <div className="relative flex-1 flex items-center justify-center z-10">
            <div className="container mx-auto px-4 text-center">
              <div className="h-10 w-2/3 max-w-xl bg-white/20 rounded-full mb-4 mx-auto"></div>
              <div className="h-6 w-1/2 max-w-md bg-white/20 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="h-10 w-40 bg-gray-200 rounded-full"></div>
            </div>
            <div className="h-96 w-full bg-gray-200 rounded-lg mb-8"></div>
            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-6 bg-gray-200 rounded-full w-full"></div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Hero section with post title */}
      <div className="relative bg-amber-900 bg-cover bg-center h-[40vh] min-h-[400px] flex flex-col">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-75" 
          style={{ backgroundImage: `url(${post.imageUrl})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        <Navbar />
        
        <div className="relative flex-1 flex items-center justify-center z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex flex-wrap justify-center items-center text-amber-300 mb-4 text-sm font-medium">
                {post.categories.map((category, idx) => (
                  <React.Fragment key={category}>
                    {idx > 0 && <span className="inline-block w-1 h-1 rounded-full bg-amber-300 mx-2"></span>}
                    <span>{category}</span>
                  </React.Fragment>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap justify-center items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back to blog button */}
          <div className="mb-8">
            <Button
              variant="ghost"
              className="text-amber-700 hover:text-amber-800 hover:bg-amber-50 -ml-3"
              asChild
            >
              <Link to="/blog" className="inline-flex items-center">
                <ArrowLeft size={16} className="mr-2" /> Back to all articles
              </Link>
            </Button>
          </div>
          
          {/* Share button */}
          <div className="flex justify-end mb-6">
            <button 
              onClick={copyShareLink}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm transition-all duration-300",
                copied 
                  ? "bg-green-100 text-green-700" 
                  : "bg-amber-100 text-amber-700 hover:bg-amber-200"
              )}
            >
              {copied ? "Link copied!" : "Share article"} 
              <Share2 size={14} />
            </button>
          </div>
          
          {/* Image Carousel */}
          <div className="mb-10">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {/* Using the main image and demo images to showcase carousel */}
                <CarouselItem>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                      onError={(e) => {
                        // Fallback to a default image on error
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=1000";
                      }}
                    />
                  </div>
                </CarouselItem>
                {DEMO_IMAGES.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img 
                        src={img} 
                        alt={`Safari scene ${index + 1}`}
                        className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                        onError={(e) => {
                          // Fallback to a default image on error
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=1000";
                        }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end space-x-2 mt-4">
                <CarouselPrevious className="static h-9 w-9 translate-y-0 rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50 hover:text-amber-800" />
                <CarouselNext className="static h-9 w-9 translate-y-0 rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50 hover:text-amber-800" />
              </div>
            </Carousel>
          </div>

          {/* Article content */}
          <article className="prose prose-amber prose-lg max-w-none mb-16 prose-headings:font-playfair prose-headings:text-amber-900 prose-headings:mt-10 prose-headings:mb-6 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:text-amber-900 prose-li:text-gray-700 prose-li:my-2">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Tags */}
          <div className="mb-16 pt-6 border-t border-amber-100">
            <h3 className="font-playfair font-bold text-amber-900 mb-4">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <span 
                  key={category}
                  className="px-3 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-playfair font-bold text-amber-900 mb-8 flex items-center">
                <span className="w-6 h-1 bg-amber-500 mr-3 rounded-full"></span>
                Related Stories
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <Card className="overflow-hidden border-amber-100 h-full flex flex-col hover:shadow-md transition-all duration-300 hover:-translate-y-2">
                      <div className="aspect-video relative overflow-hidden">
                        {!relatedImagesLoaded[relatedPost.id] && (
                          <div className="absolute inset-0 bg-amber-100 animate-pulse flex items-center justify-center">
                            <div className="w-10 h-10 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-60 transition-opacity duration-500 group-hover:opacity-75"></div>
                        <img
                          src={relatedPost.imageUrl}
                          alt={relatedPost.title}
                          className={cn(
                            "w-full h-full object-cover transition-all duration-500 group-hover:scale-110",
                            relatedImagesLoaded[relatedPost.id] ? "opacity-100" : "opacity-0"
                          )}
                          onLoad={() => handleRelatedImageLoad(relatedPost.id)}
                          onError={(e) => {
                            // Fallback to a default image on error
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=1000";
                            handleRelatedImageLoad(relatedPost.id);
                          }}
                        />
                        <div className="absolute bottom-3 left-3 z-20 flex items-center text-xs text-white/90">
                          <Calendar size={12} className="mr-1" />
                          <span>{relatedPost.date}</span>
                        </div>
                      </div>
                      <div className="p-4 flex-grow flex flex-col">
                        <h3 className="font-playfair font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                          {relatedPost.excerpt}
                        </p>
                        <div className="text-amber-700 text-sm font-medium mt-auto flex items-center group-hover:translate-x-1 transition-transform duration-300">
                          Read story <ChevronRight size={14} className="ml-1" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost; 