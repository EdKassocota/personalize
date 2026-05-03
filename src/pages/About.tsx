import { FadeIn } from "@/components/ui/FadeIn";

export function About() {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
      <FadeIn className="flex-1 w-full order-2 md:order-1">
        <div className="aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-2xl">
          <img 
            src="https://images.unsplash.com/photo-1549637642-90187f64f420?q=80&w=800&auto=format&fit=crop" 
            alt="Interior elegante" 
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </FadeIn>
      
      <div className="flex-1 space-y-6 order-1 md:order-2">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800">
            Sobre a Personalize
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <div className="space-y-4 text-slate-600">
            <p>
              Acreditamos que uma parede vazia é uma tela à espera das suas melhores memórias. Na Personalize, a nossa missão em Angola é dar vida aos seus espaços através de quadros feitos à medida.
            </p>
            <p>
              Prestamos particular atenção aos detalhes de acabamento, utilizando materiais leves, elegantes e de durabilidade garantida.
            </p>
            <p>
              O nosso processo de criação foca na personalização individual com um design sofisticado e alinhado com as tendências contemporâneas de decoração de interiores.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
