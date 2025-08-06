import Image from 'next/image';
import { useState } from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

const Avatar = ({ src, alt, size = 80, className = '' }: AvatarProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div 
      className={`relative overflow-hidden rounded-full border-2 border-red-700 ${className} ${
        isLoading ? 'bg-gray-800 animate-pulse' : ''
      }`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={`object-cover w-full h-full transition-opacity duration-200 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        priority
        quality={75}
        onLoadingComplete={() => setIsLoading(false)}
        onError={(e) => {
          console.error('Failed to load avatar image:', e);
          setIsLoading(false);
        }}
      />
    </div>
  );
};

export default Avatar;
