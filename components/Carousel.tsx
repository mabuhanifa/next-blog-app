/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4JJUqJeM5DT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Component() {
  return (
    <Carousel className="w-full max-w-2xl max-h-4xl">
      <CarouselContent>
        <CarouselItem>
          <div className="flex items-center justify-center p-1">
            <Image
              src="https://i.ibb.co.com/mFzJc5gb/455450613-7715052418604239-5080913386502490905-n.jpg"
              alt="Image"
              width={600}
              height={800}
              className=" object-cover rounded-md"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex items-center justify-center p-1">
            <Image
              src="https://i.ibb.co.com/KpyqGq6m/455647371-7715052411937573-933737781091821384-n.jpg"
              alt="Image"
              width={600}
              height={800}
              className=" object-cover rounded-md"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex items-center justify-center p-1">
            <Image
              src="https://i.ibb.co.com/gLH6g6tf/455728464-7715052428604238-2981984941372238047-n.jpg"
              alt="Image"
              width={600}
              height={800}
              className=" object-cover rounded-md"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex items-center justify-center p-1">
            <Image
              src="https://i.ibb.co.com/ZzRHKMCz/441933992-7208680482574771-5610643522303107349-n.jpg"
              alt="Image"
              width={600}
              height={800}
              className=" object-cover rounded-md"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
