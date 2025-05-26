
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'ca';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Traducciones
const translations = {
  es: {
    // Header
    'nav.inicio': 'Inicio',
    'nav.que-es': '¿Qué es?',
    'nav.dirigido': 'Dirigido',
    'nav.beneficios': 'Beneficios',
    'nav.catalunya': 'Catalunya Hub',
    'nav.fechas': 'Fechas',
    'nav.contacto': 'Contacto',
    'header.apply': 'Aplica Ahora',
    'header.more-info': 'Más Información',
    
    // Hero Section
    'hero.badge': '22@Network x Cambra de Comerç Barcelona',
    'hero.title1': 'Future Tech',
    'hero.title2': 'Aceleramos el Futuro',
    'hero.subtitle': 'Un programa de preaceleración para startups con tecnologías disruptivas',
    
    // About Section
    'about.title': '¿Qué es Future Tech?',
    'about.description': 'Future Tech es un programa de preaceleración diseñado para startups tecnológicas en fase inicial. Ofrecemos formación especializada, mentoría personalizada y validación real de productos para acelerar el crecimiento de empresas con tecnologías disruptivas.',
    'about.22network': 'Ecosistema de innovación líder en Europa',
    'about.cambra': 'Impulsando el tejido empresarial catalán',
    
    // Target Section
    'target.title': '¿A quién va dirigido?',
    'target.subtitle': 'Startups que trabajan con tecnologías emergentes y buscan acelerar su crecimiento',
    'target.technologies': 'Tecnologías Objetivo:',
    'target.sectors': 'Sectores Clave:',
    'target.ai': 'Inteligencia Artificial',
    'target.iot': 'Internet de las Cosas',
    'target.blockchain': 'Blockchain',
    'target.ar-vr': 'Realidad Aumentada/Virtual',
    'target.health': 'Salud',
    'target.industry': 'Industria',
    'target.logistics': 'Logística',
    'target.energy': 'Energía',
    'target.tourism': 'Turismo',
    
    // Benefits Section
    'benefits.title': 'Beneficios del Programa',
    'benefits.hours-training': 'horas de formación',
    'benefits.hours-mentoring': 'horas de mentoría personalizada',
    'benefits.mvp-validation': 'validación de MVPs',
    'benefits.investor-connection': 'conexión con inversores',
    'benefits.match-play': 'Acceso a Match & Play',
    'benefits.match-play-desc': 'Conecta con el ecosistema de innovación',
    
    // Catalunya Section
    'catalunya.title': 'Catalunya: Hub Tecnológico Europeo',
    'catalunya.description': 'El distrito 22@ se ha consolidado como uno de los principales nodos de innovación en Europa. Con más de 10,000 empresas tecnológicas y un ecosistema vibrante de startups, inversores y centros de investigación, Catalunya ofrece el entorno perfecto para acelerar el crecimiento de tu startup tecnológica.',
    
    // Dates Section
    'dates.title': 'Fechas Clave y Convocatoria',
    'dates.duration': 'Duración',
    'dates.duration-value': 'Septiembre - Diciembre 2025',
    'dates.modality': 'Modalidad',
    'dates.modality-value': 'Híbrido: Presencial + Online',
    'dates.deadline': 'Fecha Límite',
    'dates.deadline-value': '4 de Julio 2025',
    'dates.apply': 'Aplicar al Programa',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.secretary': 'Secretaría Técnica',
    
    // Footer
    'footer.copyright': '© 2025 Future Tech - 22@Network x Cambra de Comerç de Barcelona'
  },
  ca: {
    // Header
    'nav.inicio': 'Inici',
    'nav.que-es': 'Què és?',
    'nav.dirigido': 'Dirigit',
    'nav.beneficios': 'Beneficis',
    'nav.catalunya': 'Catalunya Hub',
    'nav.fechas': 'Dates',
    'nav.contacto': 'Contacte',
    'header.apply': 'Aplica Ara',
    'header.more-info': 'Més Informació',
    
    // Hero Section
    'hero.badge': '22@Network x Cambra de Comerç Barcelona',
    'hero.title1': 'Future Tech',
    'hero.title2': 'Accelerem el Futur',
    'hero.subtitle': 'Un programa de preacceleració per a startups amb tecnologies disruptives',
    
    // About Section
    'about.title': 'Què és Future Tech?',
    'about.description': 'Future Tech és un programa de preacceleració dissenyat per a startups tecnològiques en fase inicial. Oferim formació especialitzada, mentoria personalitzada i validació real de productes per accelerar el creixement d\'empreses amb tecnologies disruptives.',
    'about.22network': 'Ecosistema d\'innovació líder a Europa',
    'about.cambra': 'Impulsant el teixit empresarial català',
    
    // Target Section
    'target.title': 'A qui va dirigit?',
    'target.subtitle': 'Startups que treballen amb tecnologies emergents i busquen accelerar el seu creixement',
    'target.technologies': 'Tecnologies Objectiu:',
    'target.sectors': 'Sectors Clau:',
    'target.ai': 'Intel·ligència Artificial',
    'target.iot': 'Internet de les Coses',
    'target.blockchain': 'Blockchain',
    'target.ar-vr': 'Realitat Augmentada/Virtual',
    'target.health': 'Salut',
    'target.industry': 'Indústria',
    'target.logistics': 'Logística',
    'target.energy': 'Energia',
    'target.tourism': 'Turisme',
    
    // Benefits Section
    'benefits.title': 'Beneficis del Programa',
    'benefits.hours-training': 'hores de formació',
    'benefits.hours-mentoring': 'hores de mentoria personalitzada',
    'benefits.mvp-validation': 'validació de MVPs',
    'benefits.investor-connection': 'connexió amb inversors',
    'benefits.match-play': 'Accés a Match & Play',
    'benefits.match-play-desc': 'Connecta amb l\'ecosistema d\'innovació',
    
    // Catalunya Section
    'catalunya.title': 'Catalunya: Hub Tecnològic Europeu',
    'catalunya.description': 'El districte 22@ s\'ha consolidat com un dels principals nodes d\'innovació a Europa. Amb més de 10.000 empreses tecnològiques i un ecosistema vibrant de startups, inversors i centres de recerca, Catalunya ofereix l\'entorn perfecte per accelerar el creixement de la teva startup tecnològica.',
    
    // Dates Section
    'dates.title': 'Dates Clau i Convocatòria',
    'dates.duration': 'Durada',
    'dates.duration-value': 'Setembre - Desembre 2025',
    'dates.modality': 'Modalitat',
    'dates.modality-value': 'Híbrid: Presencial + Online',
    'dates.deadline': 'Data Límit',
    'dates.deadline-value': '4 de Juliol 2025',
    'dates.apply': 'Aplicar al Programa',
    
    // Contact Section
    'contact.title': 'Contacte',
    'contact.secretary': 'Secretaria Tècnica',
    
    // Footer
    'footer.copyright': '© 2025 Future Tech - 22@Network x Cambra de Comerç de Barcelona'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
