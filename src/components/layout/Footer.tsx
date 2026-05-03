export function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-100 py-6 mb-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-4">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-[#2D3436]/50 mb-1">WhatsApp</span>
            <span className="text-sm text-[#2D3436]">+244 923 000 000</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-[#2D3436]/50 mb-1">Localização</span>
            <span className="text-sm text-[#2D3436]">Luanda, Angola</span>
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-widest text-[#2D3436]/50">
          &copy; {new Date().getFullYear()} Personalize. Performance Otimizada.
        </div>
      </div>
    </footer>
  );
}
