import { useLanguage } from '@/contexts/LanguageContext';

const HeroDesktop = () => {
  const { t } = useLanguage();
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-br from-future-tech-primary via-purple-900/20 to-black"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-0">
          {/* Columna izquierda: textos y logos */}
          <div className="flex flex-col items-start max-w-2xl gap-8 animate-slide-in flex-1">
            <h1 className="text-5xl lg:text-7xl font-tt-lakes font-bold text-future-tech-accent">{t('hero.title')}</h1>
            <p className="text-2xl lg:text-3xl italic text-future-tech-secondary font-montreal text-center w-full">{t('hero.subtitle')}</p>
            <div className="w-full flex flex-col gap-4">
              <div className="w-full">
                <div className="border-2 border-white rounded-full px-8 py-4 text-center text-lg lg:text-2xl font-montreal font-semibold text-white tracking-wide w-full" style={{letterSpacing:'0.02em'}}>
                  {t('hero.cta')}
                </div>
              </div>
              <div className="w-full">
                <div className="text-lg lg:text-2xl font-montreal font-bold text-white mt-2 text-center w-full" style={{letterSpacing:'0.02em'}}>
                  {t('hero.start')}
                </div>
              </div>
            </div>
            {/* Logos Bar alineada a la izquierda dentro del banner */}
            <div className="mt-10">
              <div className="flex flex-col items-start gap-2">
                <div className="flex gap-12 items-end">
                  {/* Columna 1: Finançat per */}
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-xs md:text-sm font-semibold text-white mb-1">{t('logos.financat')}</span>
                    <div className="flex gap-4 items-end">
                      <img src="/lovable-uploads/cofinanciado%20por%20la%20union%20europea.png" alt="Cofinanciado por la Unión Europea" className="h-10 md:h-12 object-contain" style={{maxWidth:'140px'}} />
                      <img src="/lovable-uploads/logo%20generaliltat%20catalunya%20blanco.png" alt="Generalitat de Catalunya" className="h-8 md:h-10 object-contain" style={{maxWidth:'180px'}} />
                    </div>
                  </div>
                  {/* Columna 2: Programa de */}
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-xs md:text-sm font-semibold text-white mb-1">{t('logos.programa')}</span>
                    <div className="flex gap-4 items-end">
                      <img src="/lovable-uploads/logo%2022%20network%20azul%20fondo%20blanco.png" alt="22@Network Barcelona" className="h-8 md:h-10 object-contain" style={{maxWidth:'100px'}} />
                      <img src="/lovable-uploads/logo%20cambra%20comerc%20barcelona.png" alt="Cambra de Comerç Barcelona" className="h-8 md:h-10 object-contain" style={{maxWidth:'100px'}} />
                    </div>
                  </div>
                </div>
                <span className="text-xs md:text-sm text-white mt-3 font-montreal" style={{maxWidth:'600px'}}>
                  {t('logos.leyenda')}
                </span>
              </div>
            </div>
          </div>
          {/* Columna derecha: imagen decorativa */}
          <div className="flex justify-center lg:justify-end w-full lg:w-auto flex-1 animate-fade-in mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-future-tech-accent/20 rounded-full blur-3xl animate-pulse"></div>
              <img 
                src="/lovable-uploads/4dd7373d-7353-4998-b31b-1748fc864a8d.png" 
                alt="Future Tech AI" 
                className="relative z-10 max-w-md lg:max-w-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDesktop; 