
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Categories from '@/components/home/Categories';
import Newsletter from '@/components/home/Newsletter';
import { getFeaturedProducts } from '@/lib/data';

const Index: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <MainLayout>
      <Hero />
      <FeaturedProducts products={featuredProducts} />
      <Categories />
      <Newsletter />
    </MainLayout>
  );
};

export default Index;
