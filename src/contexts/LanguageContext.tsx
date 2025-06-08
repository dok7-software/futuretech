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
    'nav.technologies': 'Tecnologías',
    'nav.beneficios': 'Beneficios',
    'nav.catalunya': 'Catalunya Hub',
    'nav.fechas': 'Fechas',
    'nav.contacto': 'Contacto',
    'header.apply': 'Aplica Ahora',
    'header.more-info': 'Más Información',
    
    // Hero Section
    'hero.title': 'FUTURE TECH',
    'hero.subtitle': 'Preaceleración real para startups reales',
    'hero.cta': 'PLAZAS ABIERTAS HASTA EL 4 DE JULIO',
    'hero.start': 'INICIO DEL PROGRAMA EL 15 DE SEPTIEMBRE',
    
    // About Section
    'about.title': '¿Qué es Future Tech?',
    'about.description': 'El programa conecta startups con formación especializada, mentorías y entornos de validación real, favoreciendo alianzas estratégicas y crecimiento.',
    'about.22network': 'Ecosistema de innovación líder en Europa',
    'about.cambra': 'Impulsando el tejido empresarial catalán',
    'about.cambra.slogan': 'Capacitamos, acompañamos y conectamos empresas',
    'about.eu-support': 'Financia el programa junto a la Generalitat',
    'about.gencat-support': 'Financia el programa junto a la Unión Europea',
    
    // Target Section
    'target.title': '¿A quién va dirigido?',
    'target.subtitle': 'El programa de preaceleración Future Tech está dirigido a startups en fase inicial que desarrollan soluciones con tecnologías como la IA, IoT, blockchain y AR/VR. Está pensado para equipos que quieran validar su MVP en entornos reales, acceder a mentorías expertas y conectar con el ecosistema empresarial e inversor.',
    'target.location': 'Programa enfocado a proyectos de Cataluña',
    'target.technologies': 'Tecnologías Clave',
    'target.sectors': 'Sectores de Impacto',
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
    'benefits.title': 'Ejes del Programa',
    'benefits.hours-training': 'horas de formación en tecnología, innovación y gestión empresarial',
    'benefits.hours-mentoring': 'horas de mentorías personalizadas y seguimiento experto',
    'benefits.mvp-validation': 'validación de MVPs en entornos reales',
    'benefits.investor-connection': 'conexión con inversores y actores clave',
    'benefits.match-play': 'Acceso a Match & Play',
    'benefits.match-play-desc': 'Acceso a la segunda fase Match & Play de 22@Network',
    
    // Catalunya Section
    'catalunya.title': 'Hub Tecnológico Europeo',
    'catalunya.description': 'El programa se desarrolla en un ecosistema vibrante, con hubs como el 22@, donde se crean sinergias entre startups y empresas. Potencia la innovación en sectores estratégicos, atrae talento e inversiones, y contribuye a una economía más diversa y sostenible.',
    
    // Dates Section
    'dates.title': 'Convocatoria Abierta',
    'dates.duration': 'Duración',
    'dates.duration-value': 'Septiembre - Diciembre 2025',
    'dates.modality': 'Modalidad',
    'dates.modality-value': 'Formato híbrido online y presencial',
    'dates.deadline': 'Fecha Límite',
    'dates.deadline-value': '4 de Julio 2025',
    'dates.apply': 'Aplicar al Programa',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.secretary': 'info@futuretech.cat',
    
    // Footer
    'footer.copyright': '© 2025 Future Tech - 22@Network x Cambra de Comerç de Barcelona',

    // Logos Bar
    'logos.financat': 'FINANCIADO POR:',
    'logos.programa': 'PROGRAMA DE:',
    'logos.leyenda': "Financiado por el Departamento de Empresa y Trabajo de la Generalitat de Cataluña y cofinanciado por el Fondo Social Europeo Plus",
    
    // Technologies Section
    'technologies.title': 'Tecnologías Clave e Impacto Sectorial',
    'technologies.claim': '¿Eres una startup en fase early stage, pre-seed o seed? Presenta tu proyecto en alguna de las siguientes verticales.',
    'technologies.ai.title': 'Inteligencia Artificial (IA)',
    'technologies.ai.health.title': 'Salud',
    'technologies.ai.health.desc': 'Diagnóstico clínico, tratamientos personalizados',
    'technologies.ai.manufacturing.title': 'Manufactura',
    'technologies.ai.manufacturing.desc': 'Automatización y mantenimiento predictivo',
    'technologies.ai.logistics.title': 'Logística',
    'technologies.ai.logistics.desc': 'Optimización de cadenas y rutas',
    
    'technologies.iot.title': 'Internet of Things (IoT)',
    'technologies.iot.industry.title': 'Industria 4.0',
    'technologies.iot.industry.desc': 'Monitoraje y optimización de procesos',
    'technologies.iot.smartcities.title': 'Ciudades inteligentes',
    'technologies.iot.smartcities.desc': 'Gestión de energía y movilidad',
    'technologies.iot.agriculture.title': 'Agricultura',
    'technologies.iot.agriculture.desc': 'Sostenibilidad y control inteligente',
    
    'technologies.blockchain.title': 'Blockchain',
    'technologies.blockchain.logistics.title': 'Logística',
    'technologies.blockchain.logistics.desc': 'Trazabilidad en tiempo real',
    'technologies.blockchain.commerce.title': 'Comercio',
    'technologies.blockchain.commerce.desc': 'Sistemas de pago seguros y descentralizados',
    'technologies.blockchain.energy.title': 'Energía',
    'technologies.blockchain.energy.desc': 'Gestión de redes y energía renovable',
    
    'technologies.ar-vr.title': 'Realidad Aumentada / Virtual (AR/VR)',
    'technologies.ar-vr.tourism.title': 'Turismo',
    'technologies.ar-vr.tourism.desc': 'Visitas inmersivas y patrimoniales',
    'technologies.ar-vr.education.title': 'Educación',
    'technologies.ar-vr.education.desc': 'Simulaciones para formación técnica',
    'technologies.ar-vr.manufacturing.title': 'Manufactura',
    'technologies.ar-vr.manufacturing.desc': 'Prototipado y validación virtual',

    // Formulario multipaso Future Tech
    'form.intro.title': 'Programa Future Tech',
    'form.intro.text': 'Future Tech és un programa innovador creat per 22@Network Barcelona, en col·laboració amb Cambra de Comerç de Barcelona, per accelerar l\'adopció de tecnologies exponencials i disruptives a Catalunya. El programa connecta startups amb formació especialitzada, mentories i entorns de validació real, afavorint aliances estratègiques i creixement.',
    'form.intro.start': 'Comenzar',
    'form.email': 'Correo electrónico',
    'form.name': 'Nombre y apellido',
    'form.phone': 'Teléfono',
    'form.project': 'Nombre del proyecto',
    'form.phase': 'Fase en la que estáis',
    'form.phase.preseed': 'Pre-seed',
    'form.phase.seed': 'Seed',
    'form.phase.early': 'Early Stage',
    'form.phase.growth': 'Growth',
    'form.description': 'Descripción del proyecto',
    'form.vertical': '¿En qué vertical os identificáis?',
    'form.vertical.ia': 'IA',
    'form.vertical.iot': 'IoT',
    'form.vertical.blockchain': 'Blockchain',
    'form.vertical.arvr': 'AR/VR',
    'form.location': 'Ubicación',
    'form.company': '¿Estáis constituidos como empresa?',
    'form.company.yes': 'Sí',
    'form.company.no': 'No',
    'form.deck': 'Presentación / Deck',
    'form.file.hint': 'PDF o PPT, máx. 10MB',
    'form.file.placeholder': 'Arrastra y suelta tu archivo aquí o haz clic para seleccionar',
    'form.next': 'Siguiente',
    'form.prev': 'Anterior',
    'form.submit': 'Enviar formulario',
    'form.summary.title': 'Resumen de tus respuestas',
    'form.summary.noanswer': 'No proporcionado',
    'form.success': '¡Formulario enviado correctamente!',
    'form.required': 'Este campo es obligatorio',
    'form.email.invalid': 'Por favor ingresa un email válido',
    'form.phone.invalid': 'Por favor ingresa un teléfono válido',
    'form.file.invalid': 'Només es permeten arxius PDF o PPT.',
    'form.file.size': 'L\'arxiu supera la mida màxima de 10MB.',
    'form.file.required': 'Si us plau, puja un arxiu'
  },
  ca: {
    // Header
    'nav.inicio': 'Inici',
    'nav.que-es': 'Què és?',
    'nav.dirigido': 'Dirigit',
    'nav.technologies': 'Tecnologies',
    'nav.beneficios': 'Beneficis',
    'nav.catalunya': 'Catalunya Hub',
    'nav.fechas': 'Dates',
    'nav.contacto': 'Contacte',
    'header.apply': 'Aplica Ara',
    'header.more-info': 'Més Informació',
    
    // Hero Section
    'hero.title': 'FUTURE TECH',
    'hero.subtitle': 'Preacceleració real per startups reals',
    'hero.cta': 'PLACES OBERTES FINS EL 4 DE JULIOL',
    'hero.start': 'INICI DEL PROGRAMA EL 15 DE SETEMBRE',
    
    // About Section
    'about.title': 'Què és Future Tech?',
    'about.description': 'El programa connecta startups amb formació especialitzada, mentories i entorns de validació real, afavorint aliances estratègiques i creixement.',
    'about.22network': 'Ecosistema d\'innovació líder a Europa',
    'about.cambra': 'Impulsant el teixit empresarial català',
    'about.cambra.slogan': 'Capacitem, acompanyem i connectem empreses',
    'about.eu-support': 'Finança el programa juntament amb la Generalitat',
    'about.gencat-support': 'Finança el programa juntament amb la Unió Europea',
    
    // Target Section
    'target.title': 'A qui va dirigit?',
    'target.subtitle': 'El programa de preacceleració Future Tech està dirigit a startups en fase inicial que desenvolupen solucions amb tecnologies com la IA, IoT, blockchain i AR/VR. Està pensat per equips que vulguin validar el seu MVP en entorns reals, accedir a mentories expertes i connectar amb l\'ecosistema empresarial i inversor.',
    'target.location': 'Programa enfocat a projectes de Catalunya',
    'target.technologies': 'Tecnologies Clau',
    'target.sectors': 'Sectors d\'Impacte',
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
    'benefits.title': 'Eixos del Programa',
    'benefits.hours-training': 'hores de formació en tecnologia, innovació i gestió empresarial',
    'benefits.hours-mentoring': 'hores de mentories personalitzades i seguiment expert',
    'benefits.mvp-validation': 'validació de MVPs en entorns reals',
    'benefits.investor-connection': 'connexió amb inversors i actors clau',
    'benefits.match-play': 'Accés a Match & Play',
    'benefits.match-play-desc': 'Accés a la segona fase Match & Play de 22@Network',
    
    // Catalunya Section
    'catalunya.title': 'Hub Tecnològic Europeu',
    'catalunya.description': 'El programa es desenvolupa en un ecosistema vibrant, amb hubs com el 22@, on es creen sinergies entre startups i empreses. Potencia la innovació en sectors estratègics, atrau talent i inversions, i contribueix a una economia més diversa i sostenible.',
    
    // Dates Section
    'dates.title': 'Convocatòria Oberta',
    'dates.duration': 'Durada',
    'dates.duration-value': 'Setembre - Desembre 2025',
    'dates.modality': 'Modalitat',
    'dates.modality-value': 'Format híbrid online i presencial',
    'dates.deadline': 'Data Límit',
    'dates.deadline-value': '4 de Juliol 2025',
    'dates.apply': 'Aplicar al Programa',
    
    // Contact Section
    'contact.title': 'Contacte',
    'contact.secretary': 'info@futuretech.cat',
    
    // Footer
    'footer.copyright': '© 2025 Future Tech - 22@Network x Cambra de Comerç de Barcelona',

    // Logos Bar
    'logos.financat': 'FINANÇAT PER:',
    'logos.programa': 'PROGRAMA DE:',
    'logos.leyenda': "Finançat pel Departament d'Empresa i Treball de la Generalitat de Catalunya i cofinançat pel Fons Social Europeu Plus",
    
    // Technologies Section
    'technologies.title': 'Tecnologies Clau i Impacte Sectorial',
    'technologies.claim': 'Ets una startup en fase early stage, pre-seed o seed? Presenta el teu projecte en alguna de les següents verticals.',
    'technologies.ai.title': 'Intel·ligència Artificial (IA)',
    'technologies.ai.health.title': 'Salut',
    'technologies.ai.health.desc': 'Diagnòstic clínic, tractaments personalitzats',
    'technologies.ai.manufacturing.title': 'Manufactura',
    'technologies.ai.manufacturing.desc': 'Automatització i manteniment predictiu',
    'technologies.ai.logistics.title': 'Logística',
    'technologies.ai.logistics.desc': 'Optimització de cadenes i rutes',
    
    'technologies.iot.title': 'Internet of Things (IoT)',
    'technologies.iot.industry.title': 'Indústria 4.0',
    'technologies.iot.industry.desc': 'Monitoratge i optimització de processos',
    'technologies.iot.smartcities.title': 'Ciutats intel·ligents',
    'technologies.iot.smartcities.desc': 'Gestió d\'energia i mobilitat',
    'technologies.iot.agriculture.title': 'Agricultura',
    'technologies.iot.agriculture.desc': 'Sostenibilitat i control intel·ligent',
    
    'technologies.blockchain.title': 'Blockchain',
    'technologies.blockchain.logistics.title': 'Logística',
    'technologies.blockchain.logistics.desc': 'Traçabilitat en temps real',
    'technologies.blockchain.commerce.title': 'Comerç',
    'technologies.blockchain.commerce.desc': 'Sistemes de pagament segurs i descentralitzats',
    'technologies.blockchain.energy.title': 'Energia',
    'technologies.blockchain.energy.desc': 'Gestió de xarxes i energia renovable',
    
    'technologies.ar-vr.title': 'Realitat Augmentada / Virtual (AR/VR)',
    'technologies.ar-vr.tourism.title': 'Turisme',
    'technologies.ar-vr.tourism.desc': 'Visites immersives i patrimonials',
    'technologies.ar-vr.education.title': 'Educació',
    'technologies.ar-vr.education.desc': 'Simulacions per formació tècnica',
    'technologies.ar-vr.manufacturing.title': 'Manufactura',
    'technologies.ar-vr.manufacturing.desc': 'Prototipat i validació virtual',

    // Formulario multipaso Future Tech
    'form.intro.title': 'Programa Future Tech',
    'form.intro.text': 'Future Tech és un programa innovador creat per 22@Network Barcelona, en col·laboració amb Cambra de Comerç de Barcelona, per accelerar l\'adopció de tecnologies exponencials i disruptives a Catalunya. El programa connecta startups amb formació especialitzada, mentories i entorns de validació real, afavorint aliances estratègiques i creixement.',
    'form.intro.start': 'Començar',
    'form.email': 'Correu electrònic',
    'form.name': 'Nom i cognom',
    'form.phone': 'Telèfon',
    'form.project': 'Nom del projecte',
    'form.phase': 'Fase en la que esteu',
    'form.phase.preseed': 'Pre-seed',
    'form.phase.seed': 'Seed',
    'form.phase.early': 'Early Stage',
    'form.phase.growth': 'Growth',
    'form.description': 'Descripció del projecte',
    'form.vertical': 'En quina vertical us identifiqueu?',
    'form.vertical.ia': 'IA',
    'form.vertical.iot': 'IoT',
    'form.vertical.blockchain': 'Blockchain',
    'form.vertical.arvr': 'AR/VR',
    'form.location': 'Ubicació',
    'form.company': 'Esteu constituïts com empresa?',
    'form.company.yes': 'Sí',
    'form.company.no': 'No',
    'form.deck': 'Presentació / Deck',
    'form.file.hint': 'PDF o PPT, màx. 10MB',
    'form.file.placeholder': 'Arrossega i deixa anar el teu arxiu aquí o fes clic per seleccionar',
    'form.next': 'Següent',
    'form.prev': 'Anterior',
    'form.submit': 'Enviar formulari',
    'form.summary.title': 'Resum de les teves respostes',
    'form.summary.noanswer': 'No proporcionat',
    'form.success': 'Formulari enviat correctament!',
    'form.required': 'Aquest camp és obligatori',
    'form.email.invalid': 'Si us plau, introdueix un correu electrònic vàlid',
    'form.phone.invalid': 'Si us plau, introdueix un telèfon vàlid',
    'form.file.invalid': 'Només es permeten arxius PDF o PPT.',
    'form.file.size': 'L\'arxiu supera la mida màxima de 10MB.',
    'form.file.required': 'Si us plau, puja un arxiu'
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
