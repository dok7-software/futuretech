import { useLanguage } from '@/contexts/LanguageContext';

const HeroMobile = () => {
  const { t } = useLanguage();
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-br from-future-tech-primary via-purple-900/20 to-black"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        <h1 className="text-4xl xs:text-5xl md:text-6xl font-tt-lakes font-bold text-future-tech-accent text-center leading-tight mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-lg xs:text-xl md:text-2xl italic text-future-tech-secondary font-montreal text-center w-full mb-4">
          {t('hero.subtitle')}
        </p>
        <div className="w-full flex flex-col gap-4 mb-4">
          <div className="w-full">
            <div className="border-2 border-white rounded-full px-4 xs:px-6 py-3 xs:py-4 text-center text-base xs:text-lg md:text-2xl font-montreal font-semibold text-white tracking-wide w-full bg-black/40" style={{letterSpacing:'0.02em'}}>
              {t('hero.cta')}
            </div>
          </div>
          <div className="w-full">
            <div className="text-base xs:text-lg md:text-2xl font-montreal font-bold text-white mt-2 text-center w-full bg-black/30" style={{letterSpacing:'0.02em'}}>
              {t('hero.start')}
            </div>
          </div>
        </div>
        {/* Logos Bar apilada y centrada */}
        <div className="mt-4 w-full flex flex-col items-center">
          <div className="flex flex-col items-center gap-2 w-full">
            <div className="flex flex-col gap-4 items-center w-full justify-center">
              {/* Columna 1: Finançat per */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs md:text-sm font-semibold text-white mb-1 uppercase tracking-wide text-center">{t('logos.financat')}</span>
                <div className="flex gap-2 items-end justify-center">
                  <img src="/lovable-uploads/cofinanciado%20por%20la%20union%20europea.png" alt="Cofinanciado por la Unión Europea" className="h-8 xs:h-10 md:h-12 object-contain" style={{maxWidth:'120px'}} />
                  <img src="/lovable-uploads/logo%20generaliltat%20catalunya%20blanco.png" alt="Generalitat de Catalunya" className="h-7 xs:h-8 md:h-10 object-contain" style={{maxWidth:'120px'}} />
                </div>
              </div>
              {/* Columna 2: Programa de */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs md:text-sm font-semibold text-white mb-1 uppercase tracking-wide text-center">{t('logos.programa')}</span>
                <div className="flex gap-2 items-end justify-center">
                  <img src="/lovable-uploads/logo%2022%20network%20azul%20fondo%20blanco.png" alt="22@Network Barcelona" className="h-7 xs:h-8 md:h-10 object-contain" style={{maxWidth:'90px'}} />
                  <img src="/lovable-uploads/logo%20cambra%20comerc%20barcelona.png" alt="Cambra de Comerç Barcelona" className="h-7 xs:h-8 md:h-10 object-contain" style={{maxWidth:'90px'}} />
                </div>
              </div>
            </div>
            <span className="text-xs md:text-sm text-white mt-3 font-montreal text-center max-w-xs xs:max-w-md md:max-w-lg lg:max-w-xl" style={{letterSpacing:'0.01em'}}>
              {t('logos.leyenda')}
            </span>
          </div>
        </div>
        {/* Imagen decorativa abajo */}
        <div className="w-full flex justify-center mt-8">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <div className="absolute inset-0 bg-future-tech-accent/20 rounded-full blur-3xl animate-pulse"></div>
            <img 
              src="/lovable-uploads/4dd7373d-7353-4998-b31b-1748fc864a8d.png" 
              alt="Future Tech AI" 
              className="relative z-10 w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMobile; 