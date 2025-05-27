import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroMobile = () => {
  const { t } = useLanguage();
  return (
    <section className="relative w-full flex flex-col justify-start bg-black text-white overflow-hidden pt-16 pb-0">
      {/* Onda decorativa superior */}
      <img 
        src="/lovable-uploads/Onda Amarillo Lima 1.png" 
        alt="Onda amarilla" 
        className="absolute top-[230px] left-0 w-full h-24 object-cover z-10 pointer-events-none select-none"
        style={{maxHeight: '110px'}}
      />
      {/* Zona superior: bloques uno debajo del otro, centrados */}
      <div className="relative z-20 pl-4 pt-6 flex flex-col w-full gap-4 items-center">
        {/* Bloque Programa de */}
        <div className="flex flex-col items-center">
          <span className="text-xs font-bold leading-tight mb-1">PROGRAMA DE:</span>
          <div className="flex gap-3 items-center">
            <img src="/lovable-uploads/logo 22 network azul fondo blanco.png" alt="22@Network Barcelona" className="h-6 object-contain" />
            <img src="/lovable-uploads/logo cambra comerc barcelona.png" alt="Cambra de Comerç Barcelona" className="h-6 object-contain" />
          </div>
        </div>
        {/* Bloque Finançat per */}
        <div className="flex flex-col items-center mt-2">
          <span className="text-xs font-bold leading-tight mb-1">FINANÇAT PER:</span>
          <div className="flex gap-3 items-center">
            <img src="/lovable-uploads/cofinanciado por la union europea.png" alt="UE" className="h-6 object-contain" />
            <img src="/lovable-uploads/logo generaliltat catalunya blanco.png" alt="Generalitat" className="h-6 object-contain" />
          </div>
          <span className="block text-[9px] text-center leading-tight mt-2 max-w-[240px]">Finançat pel Departament d'Empresa i Treball de la Generalitat de Catalunya i cofinançat pel Fons Social Europeu Plus</span>
        </div>
      </div>
      {/* Zona central: contenido principal y robot alineados */}
      <style>{`
        .hero-mobile-title {
          font-size: 1.6rem;
          line-height: 1.1;
          letter-spacing: 0.01em;
        }
        .hero-mobile-subtitle {
          font-size: 1rem;
          line-height: 1.2;
        }
      `}</style>
      <div className="relative z-20 flex flex-row items-center justify-center w-full pl-4 mb-2 mt-6 gap-4 min-h-[400px]">
        <div className="flex flex-col items-center max-w-[260px] w-full my-20">
          <h1 className="hero-mobile-title font-tt-lakes font-bold text-future-tech-accent text-center mb-2">{t('hero.title')}</h1>
          <p className="hero-mobile-subtitle font-montreal text-center mb-4">{t('hero.subtitle')}</p>
          <div className="w-full flex flex-col items-center gap-3">
            <div className="rounded-full border-2 border-white px-4 py-2 text-center text-sm font-montreal font-semibold text-white bg-black/60 tracking-wide" style={{letterSpacing:'0.02em'}}>{t('hero.cta')}</div>
            <div className="text-sm font-montreal font-bold text-white text-center w-full" style={{letterSpacing:'0.02em'}}>{t('hero.start')}</div>
          </div>
        </div>
        <img 
          src="/lovable-uploads/robot future tech mobile.png" 
          alt="Robot Future Tech" 
          className="h-[380px] max-h-[80vh] w-auto z-10 ml-2"
          style={{objectFit: 'contain'}}
        />
      </div>
    </section>
  );
};

export default HeroMobile; 