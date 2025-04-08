import Component from "@/components/Carousel";
import { InfiniteSliderHoverSpeed } from "@/components/InfiniteSliderHoverSpeed";
import { InfiniteSliderVertical } from "@/components/InfiniteSliderVertical";

export default function Home() {
  return (
    <>
      <div className="flex justify-center bg-gray-100">
        <Component />
      </div>
      <div className="my-10 mx-5 lg:mx-20 2xl:mx-80">
        <InfiniteSliderHoverSpeed />
      </div>
      <div className="my-10 mx-5 lg:mx-20 2xl:mx-80 flex justify-center">
        <InfiniteSliderVertical />
      </div>
    </>
  );
}
