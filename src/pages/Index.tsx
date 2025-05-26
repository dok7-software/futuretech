
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, Users, Target, Lightbulb, Network, Shield, Eye, ArrowRight, Clock, Globe, MapPin, Zap, Brain, Rocket, Star, TrendingUp, Code, Cpu, Smartphone } from "lucide-react";
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
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-future-tech-accent/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        </div>
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
              {/* Tech icons row */}
              <div className="flex space-x-6 items-center mb-8">
                <div className="flex items-center space-x-2 text-future-tech-accent">
                  <Brain className="h-6 w-6" />
                  <span className="text-sm font-montreal">AI</span>
                </div>
                <div className="flex items-center space-x-2 text-future-tech-accent">
                  <Network className="h-6 w-6" />
                  <span className="text-sm font-montreal">IoT</span>
                </div>
                <div className="flex items-center space-x-2 text-future-tech-accent">
                  <Shield className="h-6 w-6" />
                  <span className="text-sm font-montreal">Blockchain</span>
                </div>
                <div className="flex items-center space-x-2 text-future-tech-accent">
                  <Eye className="h-6 w-6" />
                  <span className="text-sm font-montreal">AR/VR</span>
                </div>
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
                <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="h-12 w-12 bg-future-tech-accent rounded-lg flex items-center justify-center">
                      <Cpu className="h-6 w-6 text-future-tech-primary" />
                    </div>
                    <div className="h-12 w-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div className="h-12 w-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <img 
                    src="/lovable-uploads/4dd7373d-7353-4998-b31b-1748fc864a8d.png" 
                    alt="Future Tech AI" 
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="h-2 w-8 bg-future-tech-accent rounded-full"></div>
                    <div className="h-2 w-4 bg-gray-600 rounded-full"></div>
                    <div className="h-2 w-4 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
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
              {t('about.title').replace('Future Tech', `<span class="text-future-tech-accent">Future Tech</span>`)}
            </h2>
            <p className="text-xl text-future-tech-secondary leading-relaxed mb-8 font-montreal">
              {t('about.description')}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-future-tech-accent transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-future-tech-accent to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Network className="h-8 w-8 text-future-tech-primary" />
                  </div>
                  <h3 className="text-xl font-tt-lakes font-semibold mb-2 text-white">22@Network</h3>
                  <p className="text-future-tech-secondary font-montreal">{t('about.22network')}</p>
                  <div className="mt-4 flex justify-center space-x-1">
                    <Star className="h-4 w-4 fill-future-tech-accent text-future-tech-accent" />
                    <Star className="h-4 w-4 fill-future-tech-accent text-future-tech-accent" />
                    <Star className="h-4 w-4 fill-future-tech-accent text-future-tech-accent" />
                    <Star className="h-4 w-4 fill-future-tech-accent text-future-tech-accent" />
                    <Star className="h-4 w-4 fill-future-tech-accent text-future-tech-accent" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 hover:border-future-tech-accent transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-tt-lakes font-semibold mb-2 text-white">Cambra de Comerç Barcelona</h3>
                  <p className="text-future-tech-secondary font-montreal">{t('about.cambra')}</p>
                  <div className="mt-4 flex justify-center">
                    <TrendingUp className="h-6 w-6 text-green-400" />
                  </div>
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
              <span className="text-white">{t('target.title').split('dirigido')[0]}</span>
              <span className="text-future-tech-accent">dirigido</span>
            </h2>
            <p className="text-xl text-future-tech-secondary max-w-3xl mx-auto font-montreal">
              {t('target.subtitle')}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-tt-lakes font-semibold text-future-tech-accent mb-6 flex items-center">
                <Zap className="h-6 w-6 mr-3" />
                {t('target.technologies')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Brain, title: t('target.ai'), color: "from-purple-500 to-pink-500" },
                  { icon: Network, title: t('target.iot'), color: "from-blue-500 to-cyan-500" },
                  { icon: Shield, title: t('target.blockchain'), color: "from-green-500 to-emerald-500" },
                  { icon: Eye, title: t('target.ar-vr'), color: "from-orange-500 to-red-500" }
                ].map((tech, index) => (
                  <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-future-tech-accent transition-all duration-300 hover:scale-105">
                    <CardContent className="p-4 flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center`}>
                        <tech.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white font-montreal font-medium">{tech.title}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-tt-lakes font-semibold text-future-tech-accent mb-6 flex items-center">
                <Target className="h-6 w-6 mr-3" />
                {t('target.sectors')}
              </h3>
              <div className="space-y-4">
                {[
                  { sector: t('target.health'), icon: Lightbulb },
                  { sector: t('target.industry'), icon: Cpu },
                  { sector: t('target.logistics'), icon: Network },
                  { sector: t('target.energy'), icon: Zap },
                  { sector: t('target.tourism'), icon: Globe }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors">
                    <div className="w-8 h-8 bg-future-tech-accent rounded-full flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-future-tech-primary" />
                    </div>
                    <span className="text-future-tech-secondary text-lg font-montreal">{item.sector}</span>
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
              { icon: Clock, number: "115", text: t('benefits.hours-training'), color: "from-blue-500 to-blue-600" },
              { icon: Users, number: "80", text: t('benefits.hours-mentoring'), color: "from-green-500 to-green-600" },
              { icon: Target, number: "100%", text: t('benefits.mvp-validation'), color: "from-purple-500 to-purple-600" },
              { icon: Network, number: "∞", text: t('benefits.investor-connection'), color: "from-orange-500 to-orange-600" }
            ].map((benefit, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:border-future-tech-accent transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-tt-lakes font-bold text-future-tech-accent mb-2">{benefit.number}</div>
                  <p className="text-future-tech-secondary font-montreal">{benefit.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="bg-gray-800/30 border-gray-700 max-w-md mx-auto hover:border-future-tech-accent transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-future-tech-accent to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-future-tech-primary" />
                </div>
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
              <div className="relative">
                <div className="absolute inset-0 bg-future-tech-accent/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
              </div>
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
              <Card className="bg-gray-800/50 border-gray-700 hover:border-future-tech-accent transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-tt-lakes font-semibold text-white mb-2">{t('dates.duration')}</h3>
                  <p className="text-future-tech-secondary font-montreal">{t('dates.duration-value')}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-gray-700 hover:border-future-tech-accent transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-tt-lakes font-semibold text-white mb-2">{t('dates.modality')}</h3>
                  <p className="text-future-tech-secondary font-montreal">{t('dates.modality-value')}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-gray-700 border-future-tech-accent">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-future-tech-accent to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Clock className="h-8 w-8 text-future-tech-primary" />
                  </div>
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
            <Card className="bg-gray-800/30 border-gray-700 hover:border-future-tech-accent transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-future-tech-accent to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-future-tech-primary" />
                </div>
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
