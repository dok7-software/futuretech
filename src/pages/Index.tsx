import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, Users, Target, Lightbulb, Network, Shield, Eye, ArrowRight, Clock, Globe, MapPin } from "lucide-react";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-future-tech-primary text-white font-montreal">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-future-tech-primary via-purple-900/20 to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in">
              <div>
                <Badge className="mb-4 bg-future-tech-accent text-future-tech-primary font-montreal font-semibold px-4 py-2">
                  {t('hero.badge')}
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-tt-lakes font-bold mb-6">
                  <span className="text-white">{t('hero.title1')}</span>
                  <br />
                  <span className="text-future-tech-accent">{t('hero.title2')}</span>
                </h1>
                <p className="text-xl lg:text-2xl text-future-tech-secondary mb-8 leading-relaxed font-montreal">
                  {t('hero.subtitle')}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-future-tech-accent text-future-tech-primary hover:bg-future-tech-accent/90 font-tt-lakes font-semibold px-8 py-4 text-lg"
                  onClick={() => window.open('https://forms.gle/9BWufxkJmet4Rt9C9', '_blank')}
                >
                  {t('header.apply')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-future-tech-secondary text-future-tech-secondary hover:bg-future-tech-secondary hover:text-future-tech-primary px-8 py-4 text-lg font-montreal"
                >
                  {t('header.more-info')}
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-fade-in">
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
      <section id="about" className="py-20 bg-gradient-to-b from-future-tech-primary to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-tt-lakes font-bold mb-8">
              {t('about.title').replace('Future Tech', `<span className="text-future-tech-accent">Future Tech</span>`)}
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

      {/* Target Audience Section */}
      <section id="target" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-tt-lakes font-bold mb-8">
              {t('target.title').replace('dirigido', `<span className="text-future-tech-accent">dirigido</span>`)}
            </h2>
            <p className="text-xl text-future-tech-secondary max-w-3xl mx-auto font-montreal">
              {t('target.subtitle')}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-tt-lakes font-semibold text-future-tech-accent mb-6">{t('target.technologies')}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Lightbulb, title: t('target.ai') },
                  { icon: Network, title: t('target.iot') },
                  { icon: Shield, title: t('target.blockchain') },
                  { icon: Eye, title: t('target.ar-vr') }
                ].map((tech, index) => (
                  <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-future-tech-accent transition-colors">
                    <CardContent className="p-4 flex items-center space-x-3">
                      <tech.icon className="h-6 w-6 text-future-tech-accent" />
                      <span className="text-white font-montreal font-medium">{tech.title}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-tt-lakes font-semibold text-future-tech-accent mb-6">{t('target.sectors')}</h3>
              <div className="space-y-3">
                {[t('target.health'), t('target.industry'), t('target.logistics'), t('target.energy'), t('target.tourism')].map((sector, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-future-tech-accent rounded-full"></div>
                    <span className="text-future-tech-secondary text-lg font-montreal">{sector}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-future-tech-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-tt-lakes font-bold mb-8">
              <span className="text-future-tech-accent">{t('benefits.title').split(' ')[0]}</span> {t('benefits.title').split(' ').slice(1).join(' ')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, number: "115", text: t('benefits.hours-training') },
              { icon: Users, number: "80", text: t('benefits.hours-mentoring') },
              { icon: Target, number: "100%", text: t('benefits.mvp-validation') },
              { icon: Network, number: "∞", text: t('benefits.investor-connection') }
            ].map((benefit, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:border-future-tech-accent transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <benefit.icon className="h-12 w-12 text-future-tech-accent mx-auto mb-4" />
                  <div className="text-3xl font-tt-lakes font-bold text-future-tech-accent mb-2">{benefit.number}</div>
                  <p className="text-future-tech-secondary font-montreal">{benefit.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="bg-gray-800/30 border-gray-700 max-w-md mx-auto">
              <CardContent className="p-6">
                <Network className="h-12 w-12 text-future-tech-accent mx-auto mb-4" />
                <h3 className="text-xl font-tt-lakes font-semibold text-white mb-2">{t('benefits.match-play')}</h3>
                <p className="text-future-tech-secondary font-montreal">{t('benefits.match-play-desc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalunya Hub Section */}
      <section id="catalunya" className="py-20 bg-gradient-to-b from-gray-900 to-future-tech-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-tt-lakes font-bold mb-8">
              Catalunya: <span className="text-future-tech-accent">{t('catalunya.title').split(': ')[1]}</span>
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
      <section id="dates" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-tt-lakes font-bold mb-8">
              <span className="text-future-tech-accent">{t('dates.title').split(' ')[0]} {t('dates.title').split(' ')[1]}</span> {t('dates.title').split(' ').slice(2).join(' ')}
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 text-future-tech-accent mx-auto mb-4" />
                  <h3 className="text-xl font-tt-lakes font-semibold text-white mb-2">{t('dates.duration')}</h3>
                  <p className="text-future-tech-secondary font-montreal">{t('dates.duration-value')}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-future-tech-accent mx-auto mb-4" />
                  <h3 className="text-xl font-tt-lakes font-semibold text-white mb-2">{t('dates.modality')}</h3>
                  <p className="text-future-tech-secondary font-montreal">{t('dates.modality-value')}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-gray-700 border-future-tech-accent">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-future-tech-accent mx-auto mb-4" />
                  <h3 className="text-xl font-tt-lakes font-semibold text-future-tech-accent mb-2">{t('dates.deadline')}</h3>
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
      <section id="contact" className="py-20 bg-future-tech-primary">
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
