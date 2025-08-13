import React from 'react'
import Image from 'next/image'
import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "About Us - MARS LINK Electronics Store",
  description:
    "Discover MARS LINK - your premier destination for cutting-edge electronics. Learn about our commitment to innovation, quality, and sustainable technology solutions.",
}

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Hero Section */}
      <div className="mb-8">
      <span className="font-['Biduan'] text-9xl">MARS LINK</span>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          We are here to make your digital 
          life a true reflection of your 
          personal innovation.
        </h1>
        <p className="text-md text-gray-600 max-w-2xl leading-relaxed">
          At the heart of our brand is a deep commitment to innovation. We 
          understand that technology isn't just about gadgets; it's where you 
          connect, create, and explore possibilities. That's why we source only 
          the finest electronics and cutting-edge devices, ensuring that every 
          product we offer is built to last.
        </p>
      </div>

      {/* Quality and Materials Section */}
      <div className="mb-16">
        <p className="text-md text-gray-600 max-w-2xl leading-relaxed">
          From premium materials and advanced processors to high-performance components, 
          each device is carefully selected for its reliability and performance. Our 
          attention to detail extends to every circuit and connection, guaranteeing that 
          your technology will not only look stunning but will also withstand the test of 
          time and daily use.
        </p>
      </div>

      {/* Main Content with Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Image */}
        <div className="relative">
          <div className="aspect-[4/5] relative overflow-hidden rounded-lg bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1745590591981-bb6d5274de9f?q=80&w=3108&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern electronic devices setup with headphones and laptop"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <p className="text-md text-gray-600 leading-relaxed mb-6">
              Our design philosophy revolves around creating devices that are both 
              powerful and intuitive. Inspired by minimalist aesthetics, modern 
              innovation, and timeless functionality, our collections are curated to suit a wide 
              variety of lifestyles and preferences.
            </p>
            <p className="text-md text-gray-600 leading-relaxed">
              We understand that every user is different, so we offer a diverse range of devices, features, and accessories to help 
              you find the perfect fit. Whether you prefer cutting-edge gaming setups or sleek, 
              portable solutions, we have something to suit every need and 
              personality.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              We believe that great technology should be 
              environmentally conscious, which is why we 
              strive to minimize our environmental footprint 
              through responsible sourcing and sustainable 
              practices.
            </h2>
            <p className="text-md text-gray-600 leading-relaxed">
              Our commitment to sustainability ensures that our products are not only powerful 
              but also kind to the planet. We partner with manufacturers who share our 
              vision of responsible innovation and eco-friendly production methods.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">High Performance</h3>
          <p className="text-gray-600">Cutting-edge technology designed for speed, efficiency, and reliability in every device.</p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Built to Last</h3>
          <p className="text-gray-600">Premium materials and rigorous testing ensure your devices withstand daily use and time.</p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
          <p className="text-gray-600">Sustainable practices and responsible sourcing for a better tomorrow.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience Innovation?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Discover our carefully curated collection of premium electronics and find the perfect devices for your lifestyle.
        </p>
        <LocalizedClientLink
          href="/store"
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium"
        >
          Shop Our Collection
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default AboutPage