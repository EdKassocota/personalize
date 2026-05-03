import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-16 pt-8 md:pt-16">
        <div className="flex-1 pt-8 md:pt-0 text-center md:text-left">
          <FadeIn>
            <span className="text-brand-green uppercase font-bold text-xs tracking-widest mb-4 inline-block">Arte para o seu espaço</span>
            <h1 className="font-serif text-[40px] md:text-[56px] leading-[1.1] mb-6 font-normal">
              Seu momento,<br /><span className="italic">emoldurado</span> com elegância.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
              Loja especializada em quadros personalizados em Luanda. Transformamos suas memórias em peças de design exclusivas.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex gap-4 justify-center md:justify-start items-center">
              <Link
                to="/contacto"
                className="bg-brand-green text-white px-8 py-[14px] rounded-[2px] text-[14px] font-semibold tracking-[1px] uppercase transition-colors hover:bg-[#86c89a]"
              >
                Encomendar Agora
              </Link>
              <Link
                to="/galeria"
                className="text-xs font-bold uppercase tracking-widest border-b-2 border-brand-yellow pb-1 text-[#2D3436] hover:text-brand-green transition-colors pt-2"
              >
                Ver Galeria
              </Link>
            </div>
            
            <div className="mt-16 flex gap-4 md:gap-8 justify-center md:justify-start items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-pink"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-blue"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-green"></div>
              </div>
              <span className="text-xs text-gray-400 font-medium tracking-wide">+500 quadros entregues em Luanda e Benguela</span>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.3} className="flex-1 w-full relative flex items-center justify-center pt-10 md:pt-0">
          <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
            
            <div className="absolute w-[220px] h-[280px] md:w-64 md:h-80 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] rotate-[-6deg] z-10 border border-gray-100 flex flex-col">
              <div className="w-full h-full bg-gray-100 overflow-hidden relative">
                 <img 
                   src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=600&auto=format&fit=crop" 
                   alt="Série Pastel" 
                   loading="lazy"
                   className="object-cover w-full h-full"
                 />
              </div>
              <div className="mt-4 text-[10px] uppercase tracking-widest font-bold opacity-30 text-[#2D3436]">Série Pastel - 01</div>
            </div>

            <div className="absolute w-[240px] h-[320px] md:w-72 md:h-96 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] rotate-[4deg] z-20 border border-gray-100 flex flex-col">
              <div className="w-full h-full bg-[#E5E7EB] overflow-hidden relative">
                 <img 
                   src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?q=80&w=600&auto=format&fit=crop" 
                   alt="Retrato" 
                   loading="lazy"
                   className="object-cover w-full h-full"
                 />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#2D3436]">Retrato de Família</span>
                <span className="text-[10px] font-bold text-brand-green">NEW</span>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-4 w-40 h-40 bg-brand-yellow opacity-20 rounded-full blur-3xl"></div>
          </div>
        </FadeIn>
      </section>

      {/* Featured Products */}
      <section className="flex flex-col gap-10">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-center text-[#2D3436] mb-4">
            Destaques
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { id: 1, title: "Moldura Minimalista", price: "25.000 Kz", img: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?q=80&w=600&auto=format&fit=crop" },
            { id: 2, title: "Composição Botânica", price: "40.000 Kz", img: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=600&auto=format&fit=crop" },
            { id: 3, title: "Abstrato Suave", price: "35.000 Kz", img: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?q=80&w=600&auto=format&fit=crop" },
          ].map((item, index) => (
            <FadeIn key={item.id} delay={0.1 * (index + 1)} className="group cursor-pointer">
              <div className="flex flex-col gap-3">
                <div className="aspect-[3/4] w-full overflow-hidden rounded-[2px] bg-slate-100 transition-transform duration-300 md:group-hover:scale-[1.02] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center px-1 mt-2">
                  <h3 className="text-[10px] uppercase tracking-widest font-bold text-[#2D3436]">{item.title}</h3>
                  <span className="text-[12px] font-bold text-brand-green">{item.price}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.4} className="flex justify-center mt-4">
          <Link
            to="/galeria"
            className="text-xs font-bold uppercase tracking-widest border-b-2 border-brand-yellow pb-1 text-[#2D3436] hover:text-brand-green transition-colors"
          >
            Explorar todas as peças &rarr;
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
