import React from "react";

const heroSlides = [
  {
    title: "Headphones for Every Audiophile",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1920&q=80",
    tag: "Flat 50% Off",
    deal: "Black Friday Deals",
  },
  {
    title: "Headphones for True Music Lovers",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1920&q=80",
    tag: "Flat 50% Off",
    deal: "Black Friday Deals",
  },
  {
    title: "Earbuds for Lifestyles",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1920&q=80",
    tag: "Flat 50% Off",
    deal: "Black Friday Deals",
  },
  {
    title: "Comfort Meets Innovation",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=1920&q=80",
    tag: "Flat 50% Off",
    deal: "Black Friday Deals",
  },
  {
    title: "Home Music Systems",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=1920&q=80",
    tag: "Flat 50% Off",
    deal: "Black Friday Deals",
  },
  {
    title: "Lives Through Technology",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1920&q=80",
    tag: "Flat 50% Off",
    deal: "Black Friday Deals",
  },
];
const Hero = () => {
  return (
    <div className="">
      <div className="md:block hidden">
        <div className="grid grid-cols-2 gap-1">
          {/* Large hero images */}
          <div className="relative group overflow-hidden ">
            <img src={heroSlides[0].image} alt={heroSlides[0].title} className="w-full h-[350px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8">
              <h2 className="text-white text-3xl font-bold mb-4">{heroSlides[0].title}</h2>
              <button className="bg-white text-black px-6 py-2 rounded-full w-fit hover:bg-gray-100 transition">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="relative group overflow-hidden ">
            <img src={heroSlides[1].image} alt={heroSlides[1].title} className="w-full h-[350px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8">
              <h2 className="text-white text-3xl font-bold mb-4">{heroSlides[1].title}</h2>
              <button className="bg-white text-black px-6 py-2 rounded-full w-fit hover:bg-gray-100 transition">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-4 gap-1 mt-1">
          {heroSlides.slice(2).map((slide, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img src={slide.image} alt={slide.title} className="w-full h-[200px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-bold mb-2">{slide.title}</h3>
                <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full w-fit text-sm hover:bg-white/30 transition">
                  SHOP NOW
                </button>
              </div>
              <div className="absolute top-4 left-4 right-4 flex justify-between">
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">{slide.tag}</span>
                <span className="bg-black text-white px-2 py-1 rounded text-xs">{slide.deal}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        {/* Product grid */}
        <div className="flex overflow-scroll gap-1 mt-1">
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative group overflow-hidden shrink-0">
              <img src={slide.image} alt={slide.title} className="w-[300px] h-[200px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-bold mb-2">{slide.title}</h3>
                <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full w-fit text-sm hover:bg-white/30 transition">
                  SHOP NOW
                </button>
              </div>
              <div className="absolute top-4 left-4 right-4 flex justify-between">
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">{slide.tag}</span>
                <span className="bg-black text-white px-2 py-1 rounded text-xs">{slide.deal}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
