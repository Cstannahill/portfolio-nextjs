"use client";

import Image from 'next/image';

export function ClientImage({ src, alt, width, height, ...props }: any) {
  return (
    <div className="my-6 rounded-md overflow-hidden" style={{ position: 'relative', width: '100%', height: width && height ? undefined : '400px' }}>
      <Image 
        src={src} 
        alt={alt || "Image"} 
        fill={!(width && height)}
        width={width}
        height={height}
        style={{ objectFit: 'cover' }}
        className="rounded-md"
        {...props}
      />
    </div>
  );
}