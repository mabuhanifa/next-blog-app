import { InfiniteSlider } from "./motion-primitives/infinite-slider";

const images = [
  {
    src: "https://i.ibb.co.com/cKhqk7Mv/455966023-7715052431937571-6104719255436588749-n.jpg",
    alt: "Dean blunt - Black Metal 2",
  },
  {
    src: "https://i.ibb.co.com/xKKSztJC/455450613-7715052418604239-5080913386502490905-n.jpg",
    alt: "Jungle Jack - JUNGLE DES ILLUSIONS VOL 2",
  },
  {
    src: "https://i.ibb.co.com/SDwHPhgX/455652633-7715052415270906-1765604974210347520-n.jpg",
    alt: "Yung Lean - Stardust",
  },
  {
    src: "https://i.ibb.co.com/p6F0TCvD/455339514-7715052408604240-5993483011540042354-n.jpg",
    alt: "Lana Del Rey - Ultraviolence",
  },
  {
    src: "https://i.ibb.co.com/1Gdr8pbn/455454882-7715052421937572-7172212212990736264-n.jpg",
    alt: "A$AP Rocky - Tailor Swif",
  },
  {
    src: "https://i.ibb.co.com/KzDq3wz6/441933992-7208680482574771-5610643522303107349-n.jpg",
    alt: "Midnight Miami (feat Konvy) - Nino Paid, Konvy",
  },
  {
    src: "https://i.ibb.co.com/nNtY5WFP/456028418-7715052435270904-636397686811287996-n.jpg",
    alt: "Dean blunt - Black Metal 2",
  },
  {
    src: "https://i.ibb.co.com/SXCq4vzF/455647371-7715052411937573-933737781091821384-n.jpg",
    alt: "Jungle Jack - JUNGLE DES ILLUSIONS VOL 2",
  },
  {
    src: "https://i.ibb.co.com/KcskJYdw/455728464-7715052428604238-2981984941372238047-n.jpg",
    alt: "Yung Lean - Stardust",
  },
  {
    src: "https://i.ibb.co.com/KzDq3wz6/441933992-7208680482574771-5610643522303107349-n.jpg",
    alt: "Lana Del Rey - Ultraviolence",
  },
  {
    src: "https://i.ibb.co.com/xKKSztJC/455450613-7715052418604239-5080913386502490905-n.jpg",
    alt: "A$AP Rocky - Tailor Swift",
  },
  {
    src: "https://i.ibb.co.com/SXCq4vzF/455647371-7715052411937573-933737781091821384-n.jpg",
    alt: "Midnight Miami (feat Konvy) - Nino Paid, Konvy",
  },
  {
    src: "https://i.ibb.co.com/0yJywvhk/1744372583721.jpg",
    alt: "cat",
  },
  {
    src: "https://i.ibb.co.com/rK4pN3Xz/1744372578418.jpg",
    alt: "cat",
  },
  {
    src: "https://i.ibb.co.com/Q3MfcJSZ/1744372586218.jpg",
    alt: "cat",
  },
  {
    src: "https://i.ibb.co.com/3my8dmTF/1744372565986-1.jpg",
    alt: "cat",
  },
  {
    src: "https://i.ibb.co.com/yBNrjBnJ/1744372580830.jpg",
    alt: "cat",
  },
  {
    src: "https://i.ibb.co.com/CKn3ZvSt/1744372573483.jpg",
    alt: "cat",
  },
  {
    src: "https://i.ibb.co.com/BKrQhsSZ/1744372565986.jpg",
    alt: "cat",
  },
  {
    src: "https://i.ibb.co.com/39sry0RG/1744372575576.jpg",
    alt: "cat",
  },
];

export function InfiniteSliderHoverSpeed() {
  return (
    <InfiniteSlider speedOnHover={50} gap={24} className="p-7">
      {images.map((image, index) => (
        <div className="border p-3 rounded-xl shadow-2xl" key={index}>
          <img
            src={image.src}
            alt={image.alt}
            className=" object-cover w-[220px] rounded-xl"
          />
        </div>
      ))}
    </InfiniteSlider>
  );
}
