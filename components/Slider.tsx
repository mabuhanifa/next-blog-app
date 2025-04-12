"use client";
import { useEffect, useState } from "react";
import { InfiniteSlider } from "./motion-primitives/infinite-slider";
import { ProgressiveBlur } from "./motion-primitives/progressive-blur";

type ImageData = {
  images: {
    main: string;
    thumbnail: string;
  };
  _id: string;
};

export function Slider() {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const allImages = await fetch("http://localhost:3001/movie/images");
      const data = await allImages.json();
      setImages(data);
      console.log(data);
    };
    fetchImages();
  }, []);

  return (
    <div className="relative">
      <InfiniteSlider speedOnHover={50} gap={24} className="p-7">
        {images.map((image, index) => (
          <div
            className="relative border p-3 rounded-xl shadow-2xl"
            key={index}
          >
            <img
              src={image.images.thumbnail}
              alt={"image thumbnail"}
              className="object-cover w-[200px] h-full rounded-xl"
            />
          </div>
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        className="pointer-events-none absolute top-0 left-0 h-full w-[200px] z-10"
        direction="left"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="pointer-events-none absolute top-0 right-0 h-full w-[200px] z-10"
        direction="right"
        blurIntensity={1}
      />
    </div>
  );
}
