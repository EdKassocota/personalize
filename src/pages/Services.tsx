import { FadeIn } from "@/components/ui/FadeIn";

const services = [
  {
    title: "Molduras à Medida",
    description: "Criamos a moldura perfeita para a sua foto, diploma ou arte. Escolha entre dezenas de perfis, cores e acabamentos adaptados ao seu espaço."
  },
  {
    title: "Impressão Fine Art",
    description: "Imprimimos as suas memórias com a qualidade e durabilidade que elas merecem, utilizando papéis selecionados que realçam detalhes e cores."
  },
  {
    title: "Composições de Parede",
    description: "Ajudamos a planear a disposição perfeita (gallery walls) para que o conjunto dos seus quadros fique harmónico e elegante."
  },
  {
    title: "Restauro Digital",
    description: "Recuperamos o brilho de fotos antigas com pequenos reparos digitais antes da impressão em alta resolução."
  }
];

export function Services() {
  return (
    <div className="flex flex-col gap-12 max-w-4xl mx-auto">
      <FadeIn>
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800">
            Os Nossos Serviços
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            Mais do que vender quadros, oferecemos soluções completas para eternizar os seus momentos na parede.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <FadeIn key={index} delay={0.1 * index} className="h-full">
            <div className="h-full border border-gray-100 bg-brand-surface p-8 rounded-2xl flex flex-col gap-3 shadow-none hover:shadow-sm transition-shadow">
              <h3 className="text-xl font-medium text-slate-800 border-l-4 border-brand-yellow pl-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
