import { FadeIn } from "@/components/ui/FadeIn";

const galleryImages = [
  { id: 1, title: "Arte 1", src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600&auto=format&fit=crop" },
  { id: 2, title: "Arte 2", src: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=600&auto=format&fit=crop" },
  { id: 3, title: "Arte 3", src: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=600&auto=format&fit=crop" },
  { id: 4, title: "Arte 4", src: "https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=600&auto=format&fit=crop" },
  { id: 5, title: "Arte 5", src: "https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=600&auto=format&fit=crop" },
  { id: 6, title: "Arte 6", src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop" }
];

export function Gallery() {
  return (
    <div className="flex flex-col gap-12">
      <FadeIn>
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800">
            A Nossa Galeria
          </h1>
          <p className="text-slate-500">
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
