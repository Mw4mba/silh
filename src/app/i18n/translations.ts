export type Language = 'EN' | 'FR' | 'SV';

export interface Translations {
  navbar: {
    services: string;
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    titleBold: string;
    subtitle: string;
    ctaWhatWeDo: string;
    ctaProjects: string;
  };
  services: {
    title: string;
    titleBold: string;
    subtitle: string;
    learnMore: string;
    items: {
      sustainable: {
        title: string;
        description: string;
        insights: string[];
      };
      structural: {
        title: string;
        description: string;
        insights: string[];
      };
      bim: {
        title: string;
        description: string;
        insights: string[];
      };
      climate: {
        title: string;
        description: string;
        insights: string[];
      };
    };
  };
  insights: {
    title: string;
    titleBold: string;
    subtitle: string;
    readArticle: string;
    readAll: string;
    items: {
      climate: {
        title: string;
        category: string;
        excerpt: string;
        date: string;
      };
      materials: {
        title: string;
        category: string;
        excerpt: string;
        date: string;
      };
      digitalTwin: {
        title: string;
        category: string;
        excerpt: string;
        date: string;
      };
    };
  };
  projects: {
    title: string;
    titleBold: string;
    subtitle: string;
    viewProject: string;
    viewAll: string;
    items: {
      copenhagen: {
        title: string;
        location: string;
        category: string;
        description: string;
      };
      stockholm: {
        title: string;
        location: string;
        category: string;
        description: string;
      };
      greenValley: {
        title: string;
        location: string;
        category: string;
        description: string;
      };
    };
  };
  cta: {
    title: string;
    titleBold: string;
    subtitle: string;
    searchApply: string;
    lifeAt: string;
    stats: {
      employees: string;
      countries: string;
      projects: string;
    };
  };
  footer: {
    tagline: string;
    copyright: string;
    company: {
      title: string;
      about: string;
      careers: string;
      news: string;
      contact: string;
    };
    services: {
      title: string;
      sustainable: string;
      structural: string;
      bim: string;
      climate: string;
    };
    resources: {
      title: string;
      insights: string;
      projects: string;
      publications: string;
      events: string;
    };
    legal: {
      title: string;
      privacy: string;
      terms: string;
      cookies: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  EN: {
    navbar: {
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Rooted in Nature,',
      titleBold: 'Built for the Future',
      subtitle: 'Combining future-focused thinking and technical excellence to create sustainable infrastructure that shapes communities for generations.',
      ctaWhatWeDo: 'What we do',
      ctaProjects: 'Our projects',
    },
    services: {
      title: 'Shaping the',
      titleBold: 'future',
      subtitle: 'We combine future-focused thinking and technical know-how to power local impact.',
      learnMore: 'Learn more',
      items: {
        sustainable: {
          title: 'Sustainable Architecture',
          description: 'We design buildings that harmonize with their environment, integrating passive strategies, renewable energy, and biophilic principles to create spaces that nurture well-being while minimizing ecological impact.',
          insights: ['LEED & BREEAM', 'Net-Zero Design', 'Circular Economy'],
        },
        structural: {
          title: 'Structural Engineering',
          description: 'Our engineering teams deliver innovative structural solutions that balance safety, efficiency, and sustainability. From seismic resilience to lightweight materials, we push the boundaries of what is possible.',
          insights: ['Advanced Analysis', 'Seismic Design', 'Innovation'],
        },
        bim: {
          title: 'BIM-Based Workflow',
          description: 'Leveraging Building Information Modeling, we streamline collaboration across disciplines, reduce errors, and optimize project outcomes from concept through construction and beyond.',
          insights: ['Digital Twins', 'Clash Detection', 'Lifecycle Mgmt'],
        },
        climate: {
          title: 'Climate Adaptation',
          description: 'We help clients prepare for a changing climate through infrastructure resilience, flood mitigation, heat island reduction, and nature-based solutions that protect communities.',
          insights: ['Flood Resilience', 'Heat Mitigation', 'Green Infrastructure'],
        },
      },
    },
    insights: {
      title: 'Innovative',
      titleBold: 'thinking',
      subtitle: 'Insights and perspectives from our experts shaping the future of sustainable infrastructure.',
      readArticle: 'Read article',
      readAll: 'Read all insights',
      items: {
        climate: {
          title: 'Designing for Climate Resilience in Urban Environments',
          category: 'Climate',
          excerpt: 'How nature-based solutions and green infrastructure are transforming city resilience strategies.',
          date: 'October 2025',
        },
        materials: {
          title: 'The Future of Structural Engineering: Carbon-Negative Materials',
          category: 'Innovation',
          excerpt: 'Exploring bio-based composites and engineered timber that sequester more carbon than they emit.',
          date: 'September 2025',
        },
        digitalTwin: {
          title: 'BIM to Digital Twin: Bridging Design and Operations',
          category: 'Technology',
          excerpt: 'Leveraging digital twins for predictive maintenance and lifecycle optimization of built assets.',
          date: 'August 2025',
        },
      },
    },
    projects: {
      title: 'Pioneering',
      titleBold: 'projects',
      subtitle: 'Across the globe, we work with clients to dream big, challenge conventions and transform our world for the better.',
      viewProject: 'View project',
      viewAll: 'View all projects',
      items: {
        copenhagen: {
          title: 'Copenhagen Waterfront District',
          location: 'Denmark',
          category: 'Mixed-Use Development',
          description: 'A climate-adaptive waterfront district integrating green roofs, tidal parks, and carbon-neutral buildings that set new standards for urban resilience.',
        },
        stockholm: {
          title: 'Stockholm Central Station Expansion',
          location: 'Sweden',
          category: 'Transport Infrastructure',
          description: 'Modernizing a heritage structure with seismic retrofitting and energy-efficient systems while preserving its architectural character.',
        },
        greenValley: {
          title: 'Green Valley Business Park',
          location: 'France',
          category: 'Commercial',
          description: 'A net-zero office campus featuring biomimetic facades, rainwater harvesting, and integrated biodiversity corridors.',
        },
      },
    },
    cta: {
      title: 'Lead and',
      titleBold: 'grow',
      subtitle: 'What if you could build a career that\'s as unique as you? With us you can.',
      searchApply: 'Search and apply',
      lifeAt: 'Life at Silh',
      stats: {
        employees: 'Employees worldwide',
        countries: 'Countries',
        projects: 'Active projects',
      },
    },
    footer: {
      tagline: 'Together, we engineer a liveable future',
      copyright: '2025 Silh Engineering. All rights reserved.',
      company: {
        title: 'Company',
        about: 'About Us',
        careers: 'Careers',
        news: 'News',
        contact: 'Contact',
      },
      services: {
        title: 'Services',
        sustainable: 'Sustainable Architecture',
        structural: 'Structural Engineering',
        bim: 'BIM Workflow',
        climate: 'Climate Adaptation',
      },
      resources: {
        title: 'Resources',
        insights: 'Insights',
        projects: 'Projects',
        publications: 'Publications',
        events: 'Events',
      },
      legal: {
        title: 'Legal',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        cookies: 'Cookie Policy',
      },
    },
  },
  FR: {
    navbar: {
      services: 'Services',
      projects: 'Projets',
      about: 'À propos',
      contact: 'Contact',
    },
    hero: {
      title: 'Ensemble, nous concevons',
      titleBold: 'un avenir viable',
      subtitle: 'Combinant une réflexion tournée vers l\'avenir et l\'excellence technique pour créer des infrastructures durables qui façonnent les communautés pour les générations futures.',
      ctaWhatWeDo: 'Ce que nous faisons',
      ctaProjects: 'Nos projets',
    },
    services: {
      title: 'Façonner',
      titleBold: 'l\'avenir',
      subtitle: 'Nous combinons une réflexion tournée vers l\'avenir et un savoir-faire technique pour générer un impact local.',
      learnMore: 'En savoir plus',
      items: {
        sustainable: {
          title: 'Architecture Durable',
          description: 'Nous concevons des bâtiments qui s\'harmonisent avec leur environnement, intégrant des stratégies passives, des énergies renouvelables et des principes biophiliques pour créer des espaces qui favorisent le bien-être tout en minimisant l\'impact écologique.',
          insights: ['LEED & BREEAM', 'Conception Net-Zéro', 'Économie Circulaire'],
        },
        structural: {
          title: 'Ingénierie Structurelle',
          description: 'Nos équipes d\'ingénierie livrent des solutions structurelles innovantes qui équilibrent sécurité, efficacité et durabilité. De la résilience sismique aux matériaux légers, nous repoussons les limites du possible.',
          insights: ['Analyse Avancée', 'Conception Sismique', 'Innovation'],
        },
        bim: {
          title: 'Flux de Travail BIM',
          description: 'En exploitant la modélisation des informations du bâtiment, nous rationalisons la collaboration entre les disciplines, réduisons les erreurs et optimisons les résultats des projets de la conception à la construction et au-delà.',
          insights: ['Jumeaux Numériques', 'Détection de Conflits', 'Gestion du Cycle de Vie'],
        },
        climate: {
          title: 'Adaptation Climatique',
          description: 'Nous aidons les clients à se préparer à un climat changeant grâce à la résilience des infrastructures, l\'atténuation des inondations, la réduction des îlots de chaleur et des solutions basées sur la nature qui protègent les communautés.',
          insights: ['Résilience aux Inondations', 'Atténuation de la Chaleur', 'Infrastructure Verte'],
        },
      },
    },
    insights: {
      title: 'Pensée',
      titleBold: 'innovante',
      subtitle: 'Perspectives et points de vue de nos experts qui façonnent l\'avenir des infrastructures durables.',
      readArticle: 'Lire l\'article',
      readAll: 'Tous les insights',
      items: {
        climate: {
          title: 'Concevoir pour la Résilience Climatique en Milieu Urbain',
          category: 'Climat',
          excerpt: 'Comment les solutions basées sur la nature et les infrastructures vertes transforment les stratégies de résilience urbaine.',
          date: 'Octobre 2025',
        },
        materials: {
          title: 'L\'Avenir de l\'Ingénierie Structurelle : Matériaux à Carbone Négatif',
          category: 'Innovation',
          excerpt: 'Explorer les composites biosourcés et le bois d\'ingénierie qui séquestrent plus de carbone qu\'ils n\'en émettent.',
          date: 'Septembre 2025',
        },
        digitalTwin: {
          title: 'Du BIM au Jumeau Numérique : Relier Conception et Exploitation',
          category: 'Technologie',
          excerpt: 'Exploiter les jumeaux numériques pour la maintenance prédictive et l\'optimisation du cycle de vie des actifs construits.',
          date: 'Août 2025',
        },
      },
    },
    projects: {
      title: 'Projets',
      titleBold: 'pionniers',
      subtitle: 'Partout dans le monde, nous travaillons avec nos clients pour rêver grand, défier les conventions et transformer notre monde pour le mieux.',
      viewProject: 'Voir le projet',
      viewAll: 'Tous les projets',
      items: {
        copenhagen: {
          title: 'Quartier du Front de Mer de Copenhague',
          location: 'Danemark',
          category: 'Développement Mixte',
          description: 'Un quartier de front de mer adapté au climat intégrant des toits verts, des parcs de marée et des bâtiments neutres en carbone qui établissent de nouvelles normes en matière de résilience urbaine.',
        },
        stockholm: {
          title: 'Extension de la Gare Centrale de Stockholm',
          location: 'Suède',
          category: 'Infrastructure de Transport',
          description: 'Modernisation d\'une structure patrimoniale avec rénovation antisismique et systèmes économes en énergie tout en préservant son caractère architectural.',
        },
        greenValley: {
          title: 'Parc d\'Affaires Green Valley',
          location: 'France',
          category: 'Commercial',
          description: 'Un campus de bureaux à consommation nette zéro avec des façades biomimétiques, la collecte des eaux de pluie et des corridors de biodiversité intégrés.',
        },
      },
    },
    cta: {
      title: 'Diriger et',
      titleBold: 'grandir',
      subtitle: 'Et si vous pouviez construire une carrière aussi unique que vous ? Avec nous, c\'est possible.',
      searchApply: 'Rechercher et postuler',
      lifeAt: 'La vie chez Silh',
      stats: {
        employees: 'Employés dans le monde',
        countries: 'Pays',
        projects: 'Projets actifs',
      },
    },
    footer: {
      tagline: 'Ensemble, nous concevons un avenir viable',
      copyright: '2025 Silh Engineering. Tous droits réservés.',
      company: {
        title: 'Entreprise',
        about: 'À Propos',
        careers: 'Carrières',
        news: 'Actualités',
        contact: 'Contact',
      },
      services: {
        title: 'Services',
        sustainable: 'Architecture Durable',
        structural: 'Ingénierie Structurelle',
        bim: 'Flux de Travail BIM',
        climate: 'Adaptation Climatique',
      },
      resources: {
        title: 'Ressources',
        insights: 'Insights',
        projects: 'Projets',
        publications: 'Publications',
        events: 'Événements',
      },
      legal: {
        title: 'Légal',
        privacy: 'Politique de Confidentialité',
        terms: 'Conditions d\'Utilisation',
        cookies: 'Politique des Cookies',
      },
    },
  },
  SV: {
    navbar: {
      services: 'Tjänster',
      projects: 'Projekt',
      about: 'Om oss',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Tillsammans skapar vi',
      titleBold: 'en hållbar framtid',
      subtitle: 'Vi kombinerar framtidsfokuserat tänkande och teknisk excellens för att skapa hållbar infrastruktur som formar samhällen för kommande generationer.',
      ctaWhatWeDo: 'Vad vi gör',
      ctaProjects: 'Våra projekt',
    },
    services: {
      title: 'Forma',
      titleBold: 'framtiden',
      subtitle: 'Vi kombinerar framtidsfokuserat tänkande och teknisk kompetens för att skapa lokal påverkan.',
      learnMore: 'Läs mer',
      items: {
        sustainable: {
          title: 'Hållbar Arkitektur',
          description: 'Vi designar byggnader som harmoniserar med sin miljö, integrerar passiva strategier, förnybar energi och biofiliska principer för att skapa utrymmen som främjar välbefinnande samtidigt som ekologisk påverkan minimeras.',
          insights: ['LEED & BREEAM', 'Netto-Noll Design', 'Cirkulär Ekonomi'],
        },
        structural: {
          title: 'Konstruktionsteknik',
          description: 'Våra ingenjörsteam levererar innovativa strukturella lösningar som balanserar säkerhet, effektivitet och hållbarhet. Från seismisk motståndskraft till lätta material, vi driver gränserna för vad som är möjligt.',
          insights: ['Avancerad Analys', 'Seismisk Design', 'Innovation'],
        },
        bim: {
          title: 'BIM-baserat Arbetsflöde',
          description: 'Genom att utnyttja Building Information Modeling effektiviserar vi samarbete mellan discipliner, minskar fel och optimerar projektresultat från koncept genom konstruktion och därefter.',
          insights: ['Digitala Tvillingar', 'Konfliktdetektering', 'Livscykelhantering'],
        },
        climate: {
          title: 'Klimatanpassning',
          description: 'Vi hjälper kunder att förbereda sig för ett förändrat klimat genom infrastrukturresiliens, översvämningsbekämpning, värmeö-reducering och naturbaserade lösningar som skyddar samhällen.',
          insights: ['Översvämningsresiliens', 'Värmereducering', 'Grön Infrastruktur'],
        },
      },
    },
    insights: {
      title: 'Innovativt',
      titleBold: 'tänkande',
      subtitle: 'Insikter och perspektiv från våra experter som formar framtiden för hållbar infrastruktur.',
      readArticle: 'Läs artikel',
      readAll: 'Alla insikter',
      items: {
        climate: {
          title: 'Design för Klimatresiliens i Urbana Miljöer',
          category: 'Klimat',
          excerpt: 'Hur naturbaserade lösningar och grön infrastruktur omvandlar stadens resiliensstrategier.',
          date: 'Oktober 2025',
        },
        materials: {
          title: 'Framtiden för Konstruktionsteknik: Koldioxidnegativa Material',
          category: 'Innovation',
          excerpt: 'Utforskar biobaserade kompositer och engineered timber som binder mer kol än de släpper ut.',
          date: 'September 2025',
        },
        digitalTwin: {
          title: 'BIM till Digital Tvilling: Överbrygga Design och Drift',
          category: 'Teknologi',
          excerpt: 'Utnyttja digitala tvillingar för prediktivt underhåll och livscykeloptimering av byggda tillgångar.',
          date: 'Augusti 2025',
        },
      },
    },
    projects: {
      title: 'Banbrytande',
      titleBold: 'projekt',
      subtitle: 'Över hela världen arbetar vi med kunder för att drömma stort, utmana konventioner och förvandla vår värld till det bättre.',
      viewProject: 'Visa projekt',
      viewAll: 'Alla projekt',
      items: {
        copenhagen: {
          title: 'Köpenhamns Vattenfrontsdistrikt',
          location: 'Danmark',
          category: 'Blandat Utveckling',
          description: 'Ett klimatanpassat vattenfrontsdistrikt som integrerar gröna tak, tidvattensparker och koldioxidneutrala byggnader som sätter nya standarder för urban resiliens.',
        },
        stockholm: {
          title: 'Stockholms Centralstation Utbyggnad',
          location: 'Sverige',
          category: 'Transportinfrastruktur',
          description: 'Modernisering av en kulturarvsstruktur med seismisk upprustning och energieffektiva system samtidigt som dess arkitektoniska karaktär bevaras.',
        },
        greenValley: {
          title: 'Green Valley Affärspark',
          location: 'Frankrike',
          category: 'Kommersiell',
          description: 'Ett netto-noll kontorskomplex med biomimetiska fasader, regnvatteninsamling och integrerade biodiversitetskorridorer.',
        },
      },
    },
    cta: {
      title: 'Leda och',
      titleBold: 'växa',
      subtitle: 'Tänk om du kunde bygga en karriär som är lika unik som du? Med oss kan du.',
      searchApply: 'Sök och ansök',
      lifeAt: 'Livet på Silh',
      stats: {
        employees: 'Anställda världsvid',
        countries: 'Länder',
        projects: 'Aktiva projekt',
      },
    },
    footer: {
      tagline: 'Tillsammans skapar vi en hållbar framtid',
      copyright: '2025 Silh Engineering. Alla rättigheter förbehållna.',
      company: {
        title: 'Företag',
        about: 'Om Oss',
        careers: 'Karriärer',
        news: 'Nyheter',
        contact: 'Kontakt',
      },
      services: {
        title: 'Tjänster',
        sustainable: 'Hållbar Arkitektur',
        structural: 'Konstruktionsteknik',
        bim: 'BIM Arbetsflöde',
        climate: 'Klimatanpassning',
      },
      resources: {
        title: 'Resurser',
        insights: 'Insikter',
        projects: 'Projekt',
        publications: 'Publikationer',
        events: 'Evenemang',
      },
      legal: {
        title: 'Juridiskt',
        privacy: 'Integritetspolicy',
        terms: 'Användarvillkor',
        cookies: 'Cookie Policy',
      },
    },
  },
};
