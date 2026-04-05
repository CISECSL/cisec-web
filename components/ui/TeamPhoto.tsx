"use client";

interface TeamPhotoProps {
  src: string;
  alt: string;
  initials: string;
}

export function TeamPhoto({ src, alt, initials }: TeamPhotoProps) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <div
        className="absolute inset-0 items-center justify-center bg-muted text-4xl font-bold text-primary hidden"
      >
        {initials}
      </div>
    </div>
  );
}
