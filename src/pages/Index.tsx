import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, Users, Target, Lightbulb, Network, Shield, Eye, ArrowRight, Clock, Globe, MapPin, Wallet } from "lucide-react";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import StepForm from '../components/StepForm';
import { useState } from 'react';
import HeroDesktop from "@/components/HeroDesktop";
import HeroMobile from "@/components/HeroMobile";
import { useIsMobile } from "../hooks/useIsMobile";

const Index = () => {
  const { t, language } = useLanguage();
  const [showForm, setShowForm] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-to-b from-future-tech-primary via-gray-900 to-black text-white font-montreal">
      <Header onApplyClick={() => setShowForm(true)} />
      {isMobile ? (
        <HeroMobile />
      ) : (
        <HeroDesktop onApplyClick={() => setShowForm(true)} />
      )}
      
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
              <div className="col-span-2">
                <p className="text-white font-tt-lakes text-center mb-6">{t('logos.programa')}</p>
              </div>
              {/* 22@Network */}
              <Card className="bg-white/80 border-gray-200 hover:border-future-tech-accent transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mx-auto mb-4">
                    <img src="/lovable-uploads/Logo color 22Network.png" alt="22@Network Barcelona" className="h-10 object-contain" />
                  </div>
                  <p className="text-black font-montreal">{t('about.22network')}</p>
                </CardContent>
              </Card>
              {/* Cambra de Comerç Barcelona */}
              <Card className="bg-white/80 border-gray-200 hover:border-future-tech-accent transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mx-auto mb-4">
                    <img src="/lovable-uploads/Logo color Cambra de comercio barcelona.png" alt="Cambra de Comerç Barcelona" className="h-10 object-contain" />
                  </div>
                  <p className="text-black font-montreal">{t('about.cambra.slogan')}</p>
                </CardContent>
              </Card>
              <div className="col-span-2">
                <p className="text-white font-tt-lakes text-center mb-6">{t('logos.financat')}</p>
              </div>
              {/* Unión Europea */}
              <Card className="bg-white/80 border-gray-200 hover:border-future-tech-accent transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mx-auto mb-4">
                    <img src="/lovable-uploads/Logo Color Union europea.png" alt="Unión Europea" className="h-10 object-contain" />
                  </div>
                  <p className="text-black font-montreal">{t('about.eu-support')}</p>
                </CardContent>
              </Card>
              {/* Generalitat de Catalunya */}
              <Card className="bg-white/80 border-gray-200 hover:border-future-tech-accent transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mx-auto mb-4">
                    <img src="/lovable-uploads/Logo Color Generalitat de Catalunya.png" alt="Generalitat de Catalunya" className="h-10 object-contain" />
                  </div>
                  <p className="text-black font-montreal">{t('about.gencat-support')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Section */}
      <section id="target" className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-tt-lakes font-bold mb-8">
              <span dangerouslySetInnerHTML={{ __html: t('target.title').replace('¿A quién va dirigido?', '<span class="text-future-tech-accent">¿A quién va dirigido?</span>') }} />
            </h2>
            <p className="text-xl text-future-tech-secondary leading-relaxed mb-8 font-montreal">
              {t('target.subtitle')}
            </p>
            <p className="text-xl text-future-tech-accent font-tt-lakes font-semibold mb-12">
              {t('target.location')}
            </p>
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
            <p className="text-xl text-future-tech-secondary leading-relaxed font-montreal max-w-3xl mx-auto">
              {t('technologies.claim')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Card */}
            <Card className="bg-gray-800/30 border-gray-700 hover:border-future-tech-accent transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="h-8 w-8 text-future-tech-accent group-hover:text-future-tech-accent transition-colors" />
                  <h3 className="text-xl font-tt-lakes font-semibold text-white group-hover:text-future-tech-accent transition-colors">{t('technologies.ai.title')}</h3>
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
            <Card className="bg-gray-800/30 border-gray-700 hover:border-future-tech-accent transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Network className="h-8 w-8 text-future-tech-accent group-hover:text-future-tech-accent transition-colors" />
                  <h3 className="text-xl font-tt-lakes font-semibold text-white group-hover:text-future-tech-accent transition-colors">{t('technologies.iot.title')}</h3>
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
            <Card className="bg-gray-800/30 border-gray-700 hover:border-future-tech-accent transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-8 w-8 text-future-tech-accent group-hover:text-future-tech-accent transition-colors" />
                  <h3 className="text-xl font-tt-lakes font-semibold text-white group-hover:text-future-tech-accent transition-colors">{t('technologies.blockchain.title')}</h3>
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
            <Card className="bg-gray-800/30 border-gray-700 hover:border-future-tech-accent transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-8 w-8 text-future-tech-accent group-hover:text-future-tech-accent transition-colors" />
                  <h3 className="text-xl font-tt-lakes font-semibold text-white group-hover:text-future-tech-accent transition-colors">{t('technologies.ar-vr.title')}</h3>
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
              { icon: Target, number: "\u00A0", text: t('benefits.mvp-validation').charAt(0).toUpperCase() + t('benefits.mvp-validation').slice(1) },
              { icon: Wallet, number: "∞", text: t('benefits.investor-connection').charAt(0).toUpperCase() + t('benefits.investor-connection').slice(1) }
            ].map((benefit, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:border-future-tech-accent transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                  <benefit.icon className="h-12 w-12 text-future-tech-accent mx-auto mb-4 group-hover:text-future-tech-accent transition-colors" />
                  {benefit.number && <div className="text-3xl font-tt-lakes font-bold text-future-tech-accent mb-2">{benefit.number}</div>}
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
                className="bg-future-tech-accent text-future-tech-primary hover:bg-future-tech-accent/90 font-tt-lakes font-semibold px-8 py-4 text-lg min-w-[120px]"
                onClick={() => setShowForm(true)}
              >
                {t('header.apply')} <ArrowRight className="ml-2 h-5 w-5" />
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
            <Card className="bg-gray-800/30 border-gray-700 hover:border-future-tech-accent transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-future-tech-accent mx-auto mb-6 group-hover:text-future-tech-accent transition-colors" />
                <h3 className="text-xl font-tt-lakes font-semibold text-white mb-4 group-hover:text-future-tech-accent transition-colors">{t('contact.title')}</h3>
                <a 
                  href="mailto:info@futuretech.cat" 
                  className="text-future-tech-accent hover:text-future-tech-accent/80 text-lg font-montreal font-medium transition-colors"
                >
                  info@futuretech.cat
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

      {/* Modal Formulario */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-xl mx-auto bg-white/10 rounded-2xl shadow-2xl p-0 md:p-0">
            <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-white text-2xl font-bold z-10 hover:text-future-tech-accent transition">&times;</button>
            <div className="p-4 md:p-8">
              <StepForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
