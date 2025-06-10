import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutMobile = () => {
  const { t } = useLanguage();
  return (
    <section className="w-full flex flex-col items-center bg-transparent py-10">
      <div className="w-full max-w-xs mx-auto flex flex-col gap-8">
        {/* Programa de */}
        <div className="flex flex-col items-center w-full">
          <span className="text-sm font-bold leading-tight mb-2 text-white text-center">{t('logos.programa')}</span>
          <div className="flex flex-row gap-4 w-full justify-center">
            <div className="bg-white/80 rounded-xl flex items-center justify-center w-40 h-24">
              <img src="/lovable-uploads/Logo color 22Network.png" alt="22@Network Barcelona" className="object-contain max-h-[70%] max-w-[80%]" />
            </div>
            <div className="bg-white/80 rounded-xl flex items-center justify-center w-40 h-24">
              <img src="/lovable-uploads/Logo color Cambra de comercio barcelona.png" alt="Cambra de Comerç Barcelona" className="object-contain max-h-[70%] max-w-[80%]" />
            </div>
          </div>
        </div>
        {/* Financiado por */}
        <div className="flex flex-col items-center w-full">
          <span className="text-sm font-bold leading-tight mb-2 text-white text-center">{t('logos.financat')}</span>
          <div className="flex flex-row gap-4 w-full justify-center">
            <div className="bg-white/80 rounded-xl flex items-center justify-center w-40 h-24">
              <img src="/lovable-uploads/Logo Color Union europea.png" alt="Unión Europea" className="object-contain max-h-[70%] max-w-[80%]" />
            </div>
            <div className="bg-white/80 rounded-xl flex items-center justify-center w-40 h-24">
              <img src="/lovable-uploads/Logo Color Generalitat de Catalunya.png" alt="Generalitat de Catalunya" className="object-contain max-h-[60%] max-w-[80%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMobile; 