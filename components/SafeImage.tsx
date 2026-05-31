"use client";

import React, { useState } from "react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
}

const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackTitle,
  className,
  ...props
}) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-900 text-white p-6 text-center ${className}`}
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      >
        <div className="space-y-2">
          <p className="text-sm font-bold uppercase tracking-widest text-primary-purple opacity-80">
            KODWA TECH
          </p>
          <p className="text-lg font-bold leading-tight">
            {fallbackTitle || alt}
          </p>
          <p className="text-xs text-gray-500 italic">
            (Aset Gambar Segera Hadir)
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
};

export default SafeImage;
