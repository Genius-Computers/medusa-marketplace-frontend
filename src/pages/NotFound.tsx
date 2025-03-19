
import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layout/MainLayout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="container-content flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
        <h1 className="text-9xl font-light text-muted-foreground/20">404</h1>
        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-6 mb-4">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/shop">Browse Products</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
