import { FadeIn } from "@/components/ui/FadeIn";

const galleryImages = [
  { id: 1, title: "Arte 1", src: "/imgs/img1.jpg" },
  { id: 2, title: "Arte 2", src: "/imgs/img2.jpg" },
  { id: 3, title: "Arte 3", src: "/imgs/img3.jpg" },
  { id: 4, title: "Arte 4", src: "/imgs/img4.jpg" },
  { id: 5, title: "Arte 5", src: "/imgs/img5.jpg" },
  { id: 6, title: "Arte 6", src: "/imgs/img6.jpg" },
  { id: 7, title: "Arte 7", src: "/imgs/img7.jpg" },
  { id: 8, title: "Arte 8", src: "/imgs/img8.jpg" },
  { id: 9, title: "Arte 9", src: "/imgs/img9.jpg" }
];

export function Gallery() {
  return (
    <div className="flex flex-col gap-12">
      <FadeIn>
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800">
            A Nossa Galeria
          </h1>
          <p className="text-[#2D3436]/80">
            Inspire-se com algumas das nossas composições mais populares e descubra o estilo ideal para as suas paredes.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {galleryImages.map((img, i) => (
          <FadeIn key={img.id} delay={0.05 * (i % 6)}>
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-slate-100 flex items-center justify-center">
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
