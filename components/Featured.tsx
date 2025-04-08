import React from 'react';
import { Heart, Phone, SmilePlus, ThumbsUp, Plus } from 'lucide-react';

interface FeaturedItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
}

const featuredItems: FeaturedItem[] = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Smart Headphone",
    description: "Perfect for work, travel, and everything in between.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Gadgets Galore",
    description: "Your one-stop destination for all things tech!"
  },
  {
    icon: <SmilePlus className="w-6 h-6" />,
    title: "Brighten Your Home",
    description: "Must-Have Lamps for Less"
  },
  {
    icon: <ThumbsUp className="w-6 h-6" />,
    title: "Sound Symphony",
    description: "Where every sound tells a story."
  }
];

const Featured = () => {
  return (
    <div className="bg-black text-white md:py-16 py-4">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80"
              alt="Featured"
              className="w-full h-[600px] object-cover"
            />
          </div>

          {/* Featured Items */}
          <div className="space-y-6 py-8 text-black overflow-hidden">
            {featuredItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-100 hover:scale-105 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <button className="bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;