import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroMobile = () => {
  const { t } = useLanguage();
  return (
    <section className="relative w-full flex flex-col justify-start bg-via-blue-900/20 text-white overflow-hidden pt-16 pb-0">
      {/* Onda decorativa superior */}
      <img 
        src="/lovable-uploads/Onda Amarillo Lima 1.png" 
        alt="Onda amarilla" 
        className="absolute top-[200px] left-0 w-full object-contain z-10 pointer-events-none select-none bg-via-blue-900/10"
        style={{height: 'auto'}}
      />
      {/* Zona superior: bloques uno debajo del otro, centrados */}
      <div className="relative z-20 px-4 pt-6 flex flex-col w-full gap-4 items-center">
        {/* Bloque Programa de */}
        <div className="flex flex-col items-center">
          <span className="text-xs font-bold leading-tight mb-1">{t('logos.programa')}</span>
          <div className="flex gap-3 items-center">
            <img src="/lovable-uploads/Logo 22Network.png" alt="22@Network Barcelona" className="h-10 object-contain" style={{maxWidth: '120px'}} />
            <img src="/lovable-uploads/Logo Cambra de Comercio de Barcelona.png" alt="Cambra de Comerç Barcelona" className="h-10 object-contain" style={{maxWidth: '120px'}} />
          </div>
        </div>
        {/* Bloque Finançat per */}
        <div className="flex flex-col items-center mt-2">
          <span className="text-xs font-bold leading-tight mb-1">{t('logos.financat')}</span>
          <div className="flex gap-3 items-center">
            <img src="/lovable-uploads/Logo Union europea.png" alt="UE" className="h-10 object-contain" style={{maxWidth: '120px'}} />
            <img src="/lovable-uploads/Logo Generalitat de Catalunya.png" alt="Generalitat" className="h-8 object-contain" style={{maxWidth: '100px'}} />
          </div>
          <span className="block text-[10px] text-center leading-tight mt-2 max-w-[280px] font-montreal">
          </span>
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
            <div className="rounded-full border-2 border-future-tech-accent px-4 py-2 text-center text-sm font-montreal font-semibold text-white bg-black/60 tracking-wide" style={{letterSpacing:'0.02em'}}>{t('hero.cta')}</div>
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