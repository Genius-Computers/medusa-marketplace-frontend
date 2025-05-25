import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"

const heroSlides = [
  {
    title: "Smartphones",
    image:
      "https://www.apple.com/in/iphone/home/images/overview/welcome/switch/welcome__n6xy87ib1gyu_large_2x.jpg",
    link: "/categories/smart-phone",
  },
  {
    title: "Network Infrastructure",
    image: "/banners/router.png",
    link: "/categories/network-infrastructure",
  },
  {
    title: "Surveillance Equipment",
    image: "/banners/camera.png",
    link: "/categories/security-&-surveillance-equipment",
  },
  {
    title: "Biomedical Equipment",
    image: "/banners/meds.png",
    link: "/categories/biomedical-equipment",
  },
  {
    title: "LED Screens",
    image:
      "https://global.hisense.com/dam/jcr:be447336-0e23-4735-aeca-0cb4611dd9e4/tv03.u7-mini-led-tv.jpg",
    link: "/categories/led-screens",
  },
  {
    title: "Lives Through Technology",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1920&q=80",
    link: "/categories/accessories",
  },
]
const Hero = () => {
  return (
    <div className="">
      <div className="md:block hidden">
        <div className="grid grid-cols-2 gap-1">
          {/* Large hero images */}
          <div className="relative group overflow-hidden ">
            <img
              src={heroSlides[0].image}
              alt={heroSlides[0].title}
              className="w-full h-[350px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8">
              <h2 className="text-white text-3xl font-bold mb-4">
                {heroSlides[0].title}
              </h2>
              <LocalizedClientLink href={heroSlides[0].link}>
                <button className="bg-white text-black px-6 py-2 rounded-full w-fit hover:bg-gray-100 transition">
                  SHOP NOW
                </button>
              </LocalizedClientLink>
            </div>
          </div>
          <div className="relative group overflow-hidden ">
            <img
              src={heroSlides[1].image}
              alt={heroSlides[1].title}
              className="w-full h-[350px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8">
              <h2 className="text-white text-3xl font-bold mb-4">
                {heroSlides[1].title}
              </h2>
              <LocalizedClientLink href={heroSlides[1].link}>
                <button className="bg-white text-black px-6 py-2 rounded-full w-fit hover:bg-gray-100 transition">
                  SHOP NOW
                </button>
              </LocalizedClientLink>
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-4 gap-1 mt-1">
          {heroSlides.slice(2).map((slide, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-bold mb-2">
                  {slide.title}
                </h3>
                <LocalizedClientLink href={slide.link}>
                  <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full w-fit text-sm hover:bg-white/30 transition">
                    SHOP NOW
                  </button>
                </LocalizedClientLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        {/* Product grid */}
        <div className="flex overflow-scroll gap-1 mt-1">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="relative group overflow-hidden shrink-0"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-[300px] h-[200px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-bold mb-2">
                  {slide.title}
                </h3>
                <LocalizedClientLink href={slide.link}>
                  <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full w-fit text-sm hover:bg-white/30 transition">
                    SHOP NOW
                  </button>
                </LocalizedClientLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
