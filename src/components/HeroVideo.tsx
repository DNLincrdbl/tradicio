"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    const play = () => {
      video.muted = true;
      void video.play().catch(() => undefined);
    };

    play();
    video.addEventListener("canplay", play);
    video.addEventListener("loadeddata", play);
    document.addEventListener("click", play, { once: true });
    document.addEventListener("touchstart", play, { once: true });

    return () => {
      video.removeEventListener("canplay", play);
      video.removeEventListener("loadeddata", play);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full bg-black object-cover brightness-[.62] contrast-[1.05]"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      src="/video/herovideo.mp4"
      fetchPriority="high"
    />
  );
}
