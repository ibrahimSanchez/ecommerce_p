import Image from "next/image";
import { useState } from "react";

interface CustomImageProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
  fallback?: boolean; // Activar fallback a <img> si falla
  className?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
  className,
  src,
  alt = "",
  width,
  height,
  fallback = false,
}) => {
  const [useFallback, setUseFallback] = useState(fallback);

  return useFallback ? (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={() => setUseFallback(true)}
    />
  ) : (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={() => setUseFallback(true)}
    />
  );
};

export default CustomImage;
