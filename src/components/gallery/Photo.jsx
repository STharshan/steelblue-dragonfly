// src/components/Gallery.jsx
export default function Photo() {
  const images = [
    "/cup.webp",
    "/bus.webp",
    "/car.webp",
    "/tanel.webp",
    "/chair.webp",
    "/van.webp",
    "/tyre.webp",
    "/service.webp",
    "/up.webp",
    "/men.webp",
  ];

  return (
    <section className="px-4 py-10 max-w-screen-xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Workshop Gallery</h2>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Workshop ${index + 1}`}
            className="w-full rounded-lg shadow-sm hover:opacity-90 transition-opacity duration-300"
          />
        ))}
      </div>
    </section>
  );
}
