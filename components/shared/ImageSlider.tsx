// components/ImageSlider.tsx
import Image from "next/image";
import { useState, useEffect, FunctionComponent } from "react";

interface ImageSliderProps {
  images: { src: string; alt: string }[];
}

const ImageSlider: FunctionComponent<ImageSliderProps> = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const slideCount = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current < slideCount ? current + 1 : 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-full">
        <div className="overflow-hidden relative">
          <div
            className="whitespace-nowrap transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(activeSlide - 1) * 100.5}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="inline-block w-full max-h-[360px]">
                <Image
                width="2000" 
                height="2000" 
                src={image.src} 
                alt={image.alt} 
                className="object-cover w-full" />
              </div>
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-between px-2">
            <button
              onClick={() =>
                setActiveSlide((current) =>
                  current > 1 ? current - 1 : slideCount
                )
              }
              className="w-[30px] h-[30px] flex items-center bg-black/30 text-white p-2 rounded-full"
            >
              &#8592;
            </button>
            <button
              onClick={() =>
                setActiveSlide((current) =>
                  current < slideCount ? current + 1 : 1
                )
              }
              className="w-[30px] h-[30px] flex items-center bg-black/30 text-white p-2 rounded-full"
            >
              &#8594;
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
            {Array.from({ length: slideCount }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx + 1)}
                className={`h-2 w-2 rounded-full ${
                  activeSlide === idx + 1 ? "bg-orange-500" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
