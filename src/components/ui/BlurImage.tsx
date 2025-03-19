
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

const BlurImage: React.FC<BlurImageProps> = ({
  src,
  alt,
  className,
  containerClassName,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn('overflow-hidden relative', containerClassName)}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <img
        src={src}
        alt={alt || 'Image'}
        className={cn(
          'transition-all duration-500 ease-in-out',
          isLoading ? 'scale-105 blur-md' : 'scale-100 blur-0',
          className
        )}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
};

export default BlurImage;
