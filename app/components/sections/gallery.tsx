'use client';

const images = [
  {
    id: 1,
    src: '/images/h1.png',
  },
  {
    id: 2,
    src: '/images/h2.png',
  },
  {
    id: 3,
    src: '/images/h4.png',
  },
  {
    id: 4,
    src: '/images/h3.png',
  },
  {
    id: 5,
    src: '/images/h5.png',
  },
  {
    id: 6,
    src: '/images/h6.png',
  },
];

export default function PremiumGallery() {
  return (
    <section id="gallery" className="w-full bg-[#f8f6f2] py-0 py-10 ">
      <div className="mx-auto max-w-full">
        {/* TOP LEFT GALLERY HEADING */}
        <div className="w-full flex p-10">
<p
            className="
              font-clean
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-black/60
            "
          >
           Our  Gallery
          </p>        </div>
        <div className="grid grid-cols-3 w-full p-5">
          {images.map((img) => (
            <div
              key={img.id}
              className="group relative overflow-hidden bg-black aspect-square cursor-pointer"
            >
              <img
                src={img.src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.05]"
              />
              
              <div className="absolute inset-0 bg-black/5 transition-all duration-700 group-hover:bg-black/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}