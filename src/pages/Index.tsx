import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, Users, Target, Lightbulb, Network, Shield, Eye, ArrowRight, Clock, Globe, MapPin } from "lucide-react";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-future-tech-primary via-gray-900 to-black text-white font-montreal">
      <Header />
      
      {/* Hero Section */}
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

      {/* What is Future Tech Section */}
      <section id="about" className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-tt-lakes font-bold mb-8">
              <span dangerouslySetInnerHTML={{ __html: t('about.title').replace('Future Tech', '<span class="text-future-tech-accent">Future Tech</span>') }} />
            </h2>
            <p className="text-xl text-future-tech-secondary leading-relaxed mb-8 font-montreal">
              {t('about.description')}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-future-tech-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Network className="h-8 w-8 text-future-tech-primary" />
                  </div>
                  <h3 className="text-xl font-tt-lakes font-semibold mb-2 text-white">22@Network</h3>
                  <p className="text-future-tech-secondary font-montreal">{t('about.22network')}</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-future-tech-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-future-tech-primary" />
                  </div>
                  <h3 className="text-xl font-tt-lakes font-semibold mb-2 text-white">Cambra de Comerç Barcelona</h3>
                  <p className="text-future-tech-secondary font-montreal">{t('about.cambra')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Detail Section */}
      <section id="technologies" className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-tt-lakes font-bold mb-8">
              <span
                dangerouslySetInnerHTML={{
                  __html: t('technologies.title').replace(
                    language === 'ca' ? 'Tecnologies' : 'Tecnologías',
                    `<span class="text-future-tech-accent">${language === 'ca' ? 'Tecnologies' : 'Tecnologías'}</span>`
                  )
                }}
              />
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Card */}
            <Card className="bg-gray-800/30 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="h-8 w-8 text-future-tech-accent" />
                  <h3 className="text-xl font-tt-lakes font-semibold text-white">{t('technologies.ai.title')}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-future-tech-accent font-semibold mb-2">{t('technologies.ai.health.title')}</h4>
                    <p className="text-future-tech-secondary">{t('technologies.ai.health.desc')}</p>
                  </div>
                  <div>
                    <h4 className="text-future-tech-accent font-semibold mb-2">{t('technologies.ai.manufacturing.title')}</h4>
                    <p className="text-future-tech-secondary">{t('technologies.ai.manufacturing.desc')}</p>
                  </div>
                  <div>
                    <h4 className="text-future-tech-accent font-semibold mb-2">{t('technologies.ai.logistics.title')}</h4>
                    <p className="text-future-tech-secondary">{t('technologies.ai.logistics.desc')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* IoT Card */}
            <Card className="bg-gray-800/30 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Network className="h-8 w-8 text-future-tech-accent" />
                  <h3 className="text-xl font-tt-lakes font-semibold text-white">{t('technologies.iot.title')}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-future-tech-accent font-semibold mb-2">{t('technologies.iot.industry.title')}</h4>
                    <p className="text-future-tech-secondary">{t('technologies.iot.industry.desc')}</p>
                  </div>
                  <div>
                    <h4 className="text-future-tech-accent font-semibold mb-2">{t('technologies.iot.smartcities.title')}</h4>
                    <p className="text-future-tech-secondary">{t('technologies.iot.smartcities.desc')}</p>
                  </div>
                  <div>
                    <h4 className="text-future-tech-accent font-semibold mb-2">{t('technologies.iot.agriculture.title')}</h4>
                    <p className="text-future-tech-secondary">{t('technologies.iot.agriculture.desc')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Blockchain Card */}
            <Card className="bg-gray-800/30 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-8 w-8 text-future-tech-accent" />
                  <h3 className="text-xl font-tt-lakes font-semibold text-white">{t('technologies.blockchain.title')}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-future-tech-accent font-semibold mb-2">{t('technologies.blockchain.logistics.title')}</h4>
                    <p className="text-future-tech-secondary">{t('technologies.blockchain.logistics.desc')}</p>
                  </div>
                  <div>
                    <h4 className="text-future-tech-accent font-semibold mb-2">{t('technologies.blockchain.commerce.title')}</h4>
                    <p className="text-future-tech-secondary">{t('technologies.blockchain.commerce.desc')}</p>
                  </div>
                  <div>
                    <h4 className="text-future-tech-accent font-semibold mb-2">{t('technologies.blockchain.energy.title')}</h4>
                    <p className="text-future-tech-secondary">{t('technologies.blockchain.energy.desc')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AR/VR Card */}
            <Card className="bg-gray-800/30 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-8 w-8 text-future-tech-accent" />
                  <h3 className="text-xl font-tt-lakes font-semibold text-white">{t('technologies.ar-vr.title')}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-future-tech-accent font-semibold mb-2">{t('technologies.ar-vr.tourism.title')}</h4>
                    <p className="text-future-tech-secondary">{t('technologies.ar-vr.tourism.desc')}</p>
                  </div>
                  <div>
                    <h4 className="text-future-tech-accent font-semibold mb-2">{t('technologies.ar-vr.education.title')}</h4>
                    <p className="text-future-tech-secondary">{t('technologies.ar-vr.education.desc')}</p>
                  </div>
                  <div>
                    <h4 className="text-future-tech-accent font-semibold mb-2">{t('technologies.ar-vr.manufacturing.title')}</h4>
                    <p className="text-future-tech-secondary">{t('technologies.ar-vr.manufacturing.desc')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-tt-lakes font-bold mb-8">
              <span
                dangerouslySetInnerHTML={{
                  __html: t('benefits.title').replace(
                    language === 'ca' ? 'Eixos' : 'Ejes',
                    `<span class="text-future-tech-accent">${language === 'ca' ? 'Eixos' : 'Ejes'}</span>`
                  )
                }}
              />
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, number: "115", text: t('benefits.hours-training').charAt(0).toUpperCase() + t('benefits.hours-training').slice(1) },
              { icon: Users, number: "80", text: t('benefits.hours-mentoring').charAt(0).toUpperCase() + t('benefits.hours-mentoring').slice(1) },
              { icon: Target, number: "100%", text: t('benefits.mvp-validation').charAt(0).toUpperCase() + t('benefits.mvp-validation').slice(1) },
              { icon: Network, number: "∞", text: t('benefits.investor-connection').charAt(0).toUpperCase() + t('benefits.investor-connection').slice(1) }
            ].map((benefit, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:border-future-tech-accent transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-8 text-center">
                  <benefit.icon className="h-12 w-12 text-future-tech-accent mx-auto mb-4 group-hover:text-future-tech-accent transition-colors" />
                  <div className="text-3xl font-tt-lakes font-bold text-future-tech-accent mb-2">{benefit.number}</div>
                  <p className="text-future-tech-secondary font-montreal">{benefit.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="bg-gray-800/30 border-gray-700 hover:border-future-tech-accent transition-all duration-300 hover:scale-105 group max-w-md mx-auto">
              <CardContent className="p-6 text-center">
                <Network className="h-12 w-12 text-future-tech-accent mx-auto mb-4 group-hover:text-future-tech-accent transition-colors" />
                <h3 className="text-xl font-tt-lakes font-semibold text-white mb-2 group-hover:text-future-tech-accent transition-colors">{t('benefits.match-play')}</h3>
                <p className="text-future-tech-secondary font-montreal">{t('benefits.match-play-desc').charAt(0).toUpperCase() + t('benefits.match-play-desc').slice(1)}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalunya Hub Section */}
      <section id="catalunya" className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-tt-lakes font-bold mb-8">
              Catalunya: <span
                dangerouslySetInnerHTML={{
                  __html: t('catalunya.title').replace(
                    'Hub',
                    `<span class="text-future-tech-accent">Hub</span>`
                  )
                }}
              />
            </h2>
            <p className="text-xl text-future-tech-secondary leading-relaxed font-montreal">
              {t('catalunya.description')}
            </p>
            <div className="flex justify-center mt-8">
              <MapPin className="h-8 w-8 text-future-tech-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Dates Section */}
      <section id="dates" className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-tt-lakes font-bold mb-8">
              <span
                dangerouslySetInnerHTML={{
                  __html: t('dates.title').replace(
                    language === 'ca' ? 'Convocatòria' : 'Convocatoria',
                    `<span class="text-future-tech-accent">${language === 'ca' ? 'Convocatòria' : 'Convocatoria'}</span>`
                  )
                }}
              />
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className={`bg-gray-800/50 border-gray-700 hover:border-future-tech-accent transition-colors group`}> 
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 text-future-tech-accent mx-auto mb-4 group-hover:text-future-tech-accent transition-colors" />
                  <h3 className="text-xl font-tt-lakes font-semibold text-white mb-2 group-hover:text-future-tech-accent transition-colors">{t('dates.duration')}</h3>
                  <p className="text-future-tech-secondary font-montreal">{t('dates.duration-value')}</p>
                </CardContent>
              </Card>
              <Card className={`bg-gray-800/50 border-gray-700 hover:border-future-tech-accent transition-colors group`}>
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-future-tech-accent mx-auto mb-4 group-hover:text-future-tech-accent transition-colors" />
                  <h3 className="text-xl font-tt-lakes font-semibold text-white mb-2 group-hover:text-future-tech-accent transition-colors">{t('dates.modality')}</h3>
                  <p className="text-future-tech-secondary font-montreal">{t('dates.modality-value')}</p>
                </CardContent>
              </Card>
              <Card className={`bg-gray-800/50 border-gray-700 hover:border-future-tech-accent transition-colors group`}>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-future-tech-accent mx-auto mb-4 group-hover:text-future-tech-accent transition-colors" />
                  <h3 className="text-xl font-tt-lakes font-semibold text-future-tech-accent mb-2 group-hover:text-future-tech-accent transition-colors">{t('dates.deadline')}</h3>
                  <p className="text-white font-montreal font-semibold">{t('dates.deadline-value')}</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-future-tech-accent text-future-tech-primary hover:bg-future-tech-accent/90 font-tt-lakes font-semibold px-12 py-4 text-xl"
                onClick={() => window.open('https://forms.gle/9BWufxkJmet4Rt9C9', '_blank')}
              >
                {t('dates.apply')} <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-tt-lakes font-bold mb-8">
              <span className="text-future-tech-accent">{t('contact.title')}</span>
            </h2>
            <Card className="bg-gray-800/30 border-gray-700">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-future-tech-accent mx-auto mb-6" />
                <h3 className="text-xl font-tt-lakes font-semibold text-white mb-4">{t('contact.secretary')}</h3>
                <a 
                  href="mailto:secretariatecnica@22network.net" 
                  className="text-future-tech-accent hover:text-future-tech-accent/80 text-lg font-montreal font-medium transition-colors"
                >
                  secretariatecnica@22network.net
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-center">
        <div className="container mx-auto px-6">
          <p className="text-future-tech-secondary text-lg font-montreal">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
