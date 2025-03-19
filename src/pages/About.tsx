
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Separator } from '@/components/ui/separator';

const About: React.FC = () => {
  return (
    <MainLayout>
      <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-secondary/30">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-4">About Us</h1>
            <p className="text-muted-foreground">
              Crafting exceptional products with a focus on design, quality, and sustainability.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2023, Medusa emerged from a passion for exceptional design and a belief that everyday objects should bring joy through their beauty and functionality.
            </p>
            <p className="text-muted-foreground">
              Our team of designers and craftspeople are dedicated to creating products that stand the test of time in both durability and aesthetic relevance, countering the prevailing culture of disposability.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000" 
              alt="Our team" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <Separator className="my-16" />
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">Our Values</h2>
          <p className="text-muted-foreground">
            The principles that guide our decisions and define our approach to business and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Thoughtful Design",
              description: "We believe in the power of design to solve problems, create joy, and make life better. Every product begins with a purpose and evolves through meticulous attention to detail."
            },
            {
              title: "Exceptional Quality",
              description: "We select the finest materials and partner with skilled craftspeople who share our commitment to excellence, ensuring every product meets our exacting standards."
            },
            {
              title: "Sustainability",
              description: "Our responsibility to the planet informs everything we do. We design for longevity, minimize waste, and continually work to reduce our environmental impact."
            }
          ].map((value, i) => (
            <div key={i} className="p-6 bg-secondary/30 rounded-lg">
              <h3 className="text-xl font-medium mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
        
        <Separator className="my-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1000" 
              alt="Our approach" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">Our Approach</h2>
            <p className="text-muted-foreground mb-4">
              At Medusa, we believe in the power of simplicity. Our design ethos is rooted in the principle that true elegance comes from removing the unnecessary until only the essential remains.
            </p>
            <p className="text-muted-foreground">
              We work with a carefully selected network of manufacturers and artisans who share our values and commitment to quality. Each product undergoes rigorous testing and refinement before it earns its place in our collection.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
