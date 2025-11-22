export type Language = 'EN' | 'FR' | 'SV';

export interface Translations {
  navbar: {
    services: string;
    projects: string;
    about: string;
    insights: string;
    careers: string;
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
  solutions: {
    hero: string;
    intro: string;
    sustainable: {
      title: string;
      description: string;
      insights: Array<{
        title: string;
        description: string;
      }>;
    };
    structural: {
      title: string;
      description: string;
      insights: Array<{
        title: string;
        description: string;
      }>;
    };
    bim: {
      title: string;
      description: string;
      insights: Array<{
        title: string;
        description: string;
      }>;
    };
    it: {
      title: string;
      description: string;
      insights: Array<{
        title: string;
        description: string;
      }>;
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
      insights: 'Insights',
      careers: 'Careers',
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
      title: 'Shaping the future',
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
          insights: ['Advanced analysis', 'Concrete & Steel design', 'Design Audit'],
        },
        bim: {
          title: 'BIM-Based Workflow',
          description: 'Leveraging Building Information Modeling, we streamline collaboration across disciplines, reduce errors, and optimize project outcomes from concept through construction and beyond.',
          insights: ['Digital Twins', 'Clash Detection', 'Lifecycle Mgmt'],
        },
        climate: {
          title: 'IT solutions',
          description: 'We help clients prepare for a changing climate through infrastructure resilience, flood mitigation, heat island reduction, and nature-based solutions that protect communities.',
          insights: ['Flood Resilience', 'Heat Mitigation', 'Green Infrastructure'],
        },
      },
    },
    solutions: {
      hero: 'Our Solutions',
      intro: 'We combine future-focused thinking and technical excellence to deliver comprehensive solutions that drive sustainable development and create lasting impact.',
      sustainable: {
        title: 'Sustainable Architecture',
        description: 'We design buildings that harmonize with their environment, integrating passive strategies, renewable energy, and biophilic principles to create spaces that nurture well-being while minimizing ecological impact.',
        insights: [
          {
            title: 'LEED & BREEAM',
            description: 'Our team specializes in achieving top-tier certifications for green buildings. We guide projects through rigorous environmental assessment criteria, ensuring measurable performance in energy efficiency, water conservation, indoor environmental quality, and sustainable materials selection.',
          },
          {
            title: 'Net-Zero Design',
            description: 'We pioneer buildings that produce as much energy as they consume through integrated renewable energy systems, ultra-efficient building envelopes, and advanced energy modeling. Our holistic approach balances operational efficiency with embodied carbon reduction.',
          },
          {
            title: 'Circular Economy',
            description: 'From design to demolition, we embrace circular principles that minimize waste and maximize resource value. We specify materials for disassembly, incorporate recycled content, and create adaptive spaces that evolve with changing needs over time.',
          },
        ],
      },
      structural: {
        title: 'Structural Engineering',
        description: 'Our engineering teams deliver innovative structural solutions that balance safety, efficiency, and sustainability. From seismic resilience to lightweight materials, we push the boundaries of what is possible.',
        insights: [
          {
            title: 'Advanced analysis',
            description: 'Using cutting-edge finite element analysis and computational modeling, we optimize structural performance while minimizing material use. Our advanced simulation capabilities allow us to predict behavior under complex loading scenarios and refine designs for maximum efficiency.',
          },
          {
            title: 'Concrete & Steel design',
            description: 'We deliver robust structural systems using concrete and steel that meet the highest standards of safety and durability. Our designs incorporate seismic-resistant detailing, innovative connection systems, and optimized member sizing to create resilient infrastructure.',
          },
          {
            title: 'Design Audit',
            description: 'Our independent design reviews provide critical assurance that structural systems meet code requirements and performance objectives. We perform comprehensive checks on calculations, detailing, and constructability to identify risks and optimize solutions before construction begins.',
          },
        ],
      },
      bim: {
        title: 'BIM-Based Workflow',
        description: 'Leveraging Building Information Modeling, we streamline collaboration across disciplines, reduce errors, and optimize project outcomes from concept through construction and beyond.',
        insights: [
          {
            title: 'Digital Twins',
            description: 'We create virtual replicas of physical assets that bridge design, construction, and operations. Our digital twins enable real-time monitoring, predictive maintenance, and scenario planning throughout the entire building lifecycle.',
          },
          {
            title: 'Clash Detection',
            description: 'Through coordinated 3D modeling, we identify and resolve conflicts between building systems before construction begins. This proactive approach eliminates costly on-site changes and ensures seamless integration of architectural, structural, and MEP components.',
          },
          {
            title: 'Lifecycle Mgmt',
            description: 'Our BIM models extend beyond construction to support facility management and future renovations. We embed critical asset data, maintenance schedules, and performance metrics that inform decision-making throughout the building\'s operational life.',
          },
        ],
      },
      it: {
        title: 'IT Solutions',
        description: 'Comprehensive IT solutions to support your engineering projects, from infrastructure to software development.',
        insights: [
          {
            title: 'Cloud Solutions',
            description: 'We design and implement scalable cloud infrastructures that enable seamless collaboration across global teams. Our solutions leverage leading platforms to provide secure, high-performance computing resources for design, simulation, and project management.',
          },
          {
            title: 'Cybersecurity',
            description: 'Protecting sensitive project data and intellectual property is paramount. We implement multi-layered security protocols, conduct vulnerability assessments, and ensure compliance with industry standards to safeguard digital assets throughout the project lifecycle.',
          },
          {
            title: 'Custom Development',
            description: 'Our software development team creates tailored applications and automation tools that streamline workflows and enhance productivity. From design optimization plugins to project management dashboards, we build solutions that address your unique engineering challenges.',
          },
        ],
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
          title: 'Kinshasa Urban Development',
          location: 'Democratic Republic of Congo',
          category: 'Urban Infrastructure',
          description: 'Transforming urban infrastructure with sustainable design principles, integrating modern transit systems and green spaces for a rapidly growing metropolis.',
        },
        stockholm: {
          title: 'Stockholm Transit Hub',
          location: 'Sweden',
          category: 'Transport Infrastructure',
          description: 'Advancing urban mobility through integrated transport solutions, combining heritage preservation with modern efficiency and sustainable energy systems.',
        },
        greenValley: {
          title: 'Cape Town Coastal District',
          location: 'South Africa',
          category: 'Mixed-Use Development',
          description: 'Creating resilient coastal communities through sustainable design, integrating residential and commercial spaces with climate-adaptive infrastructure and renewable energy.',
        },
      },
    },
    cta: {
      title: 'Lead and',
      titleBold: 'grow',
      subtitle: 'What if you could build a career that\'s as unique as you? With us you can.',
      searchApply: 'Search and apply',
      lifeAt: 'Life at LBYA',
      stats: {
        employees: 'Employees worldwide',
        countries: 'Countries',
        projects: 'Active projects',
      },
    },
    footer: {
      tagline: 'Together, we engineer a liveable future',
      copyright: '2025 LBYA AB. All rights reserved.',
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
        climate: 'IT solutions',
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
      insights: 'Insights',
      careers: 'Carrières',
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
          description: 'Nos équipes d\'ingénierie fournissent des solutions structurelles innovantes qui équilibrent sécurité, efficacité et durabilité. De la résilience sismique aux matériaux légers, nous repoussons les limites du possible.',
          insights: ['Analyse avancée', 'Conception Béton et Acier', 'Audit de conception'],
        },
        bim: {
          title: 'Flux de Travail BIM',
          description: 'En exploitant la modélisation des informations du bâtiment, nous rationalisons la collaboration entre les disciplines, réduisons les erreurs et optimisons les résultats des projets de la conception à la construction et au-delà.',
          insights: ['Jumeaux Numériques', 'Détection de Conflits', 'Gestion du Cycle de Vie'],
        },
        climate: {
          title: 'Solutions IT',
          description: 'Nous aidons les clients à se préparer à un climat changeant grâce à la résilience des infrastructures, l\'atténuation des inondations, la réduction des îlots de chaleur et des solutions basées sur la nature qui protègent les communautés.',
          insights: ['Résilience aux Inondations', 'Atténuation de la Chaleur', 'Infrastructure Verte'],
        },
      },
    },
    solutions: {
      hero: 'Nos Solutions',
      intro: 'Nous combinons une réflexion tournée vers l\'avenir et une excellence technique pour offrir des solutions complètes qui favorisent le développement durable et créent un impact durable.',
      sustainable: {
        title: 'Architecture Durable',
        description: 'Nous concevons des bâtiments qui s\'harmonisent avec leur environnement, en intégrant des stratégies passives, des énergies renouvelables et des principes biophiliques pour créer des espaces qui favorisent le bien-être tout en minimisant l\'impact écologique.',
        insights: [
          {
            title: 'LEED & BREEAM',
            description: 'Notre équipe se spécialise dans l\'obtention de certifications de haut niveau pour les bâtiments verts. Nous guidons les projets à travers des critères d\'évaluation environnementale rigoureux, garantissant des performances mesurables en efficacité énergétique, conservation de l\'eau, qualité de l\'environnement intérieur et sélection de matériaux durables.',
          },
          {
            title: 'Conception Net-Zéro',
            description: 'Nous sommes pionniers dans la conception de bâtiments qui produisent autant d\'énergie qu\'ils en consomment grâce à des systèmes d\'énergie renouvelable intégrés, des enveloppes de bâtiment ultra-efficaces et une modélisation énergétique avancée. Notre approche holistique équilibre l\'efficacité opérationnelle avec la réduction du carbone incorporé.',
          },
          {
            title: 'Économie Circulaire',
            description: 'De la conception à la démolition, nous adoptons des principes circulaires qui minimisent les déchets et maximisent la valeur des ressources. Nous spécifions des matériaux pour le désassemblage, incorporons du contenu recyclé et créons des espaces adaptatifs qui évoluent avec les besoins changeants au fil du temps.',
          },
        ],
      },
      structural: {
        title: 'Ingénierie Structurelle',
        description: 'Nos équipes d\'ingénierie fournissent des solutions structurelles innovantes qui équilibrent sécurité, efficacité et durabilité. De la résilience sismique aux matériaux légers, nous repoussons les limites du possible.',
        insights: [
          {
            title: 'Analyse avancée',
            description: 'En utilisant l\'analyse par éléments finis de pointe et la modélisation informatique, nous optimisons les performances structurelles tout en minimisant l\'utilisation des matériaux. Nos capacités de simulation avancées nous permettent de prédire le comportement sous des scénarios de charge complexes et d\'affiner les conceptions pour une efficacité maximale.',
          },
          {
            title: 'Conception Béton et Acier',
            description: 'Nous fournissons des systèmes structurels robustes utilisant le béton et l\'acier qui répondent aux normes les plus élevées de sécurité et de durabilité. Nos conceptions intègrent des détails résistants aux séismes, des systèmes de connexion innovants et un dimensionnement optimisé des éléments pour créer une infrastructure résiliente.',
          },
          {
            title: 'Audit de conception',
            description: 'Nos examens de conception indépendants fournissent une assurance critique que les systèmes structurels répondent aux exigences du code et aux objectifs de performance. Nous effectuons des vérifications complètes des calculs, des détails et de la constructibilité pour identifier les risques et optimiser les solutions avant le début de la construction.',
          },
        ],
      },
      bim: {
        title: 'Flux de Travail BIM',
        description: 'En exploitant la modélisation des informations du bâtiment, nous rationalisons la collaboration entre les disciplines, réduisons les erreurs et optimisons les résultats des projets de la conception à la construction et au-delà.',
        insights: [
          {
            title: 'Jumeaux Numériques',
            description: 'Nous créons des répliques virtuelles d\'actifs physiques qui relient la conception, la construction et les opérations. Nos jumeaux numériques permettent une surveillance en temps réel, une maintenance prédictive et une planification de scénarios tout au long du cycle de vie du bâtiment.',
          },
          {
            title: 'Détection de Conflits',
            description: 'Grâce à une modélisation 3D coordonnée, nous identifions et résolvons les conflits entre les systèmes du bâtiment avant le début de la construction. Cette approche proactive élimine les changements coûteux sur site et garantit une intégration transparente des composants architecturaux, structurels et MEP.',
          },
          {
            title: 'Gestion du Cycle de Vie',
            description: 'Nos modèles BIM s\'étendent au-delà de la construction pour soutenir la gestion des installations et les rénovations futures. Nous intégrons des données d\'actifs critiques, des calendriers de maintenance et des indicateurs de performance qui informent la prise de décision tout au long de la vie opérationnelle du bâtiment.',
          },
        ],
      },
      it: {
        title: 'Solutions IT',
        description: 'Solutions informatiques complètes pour soutenir vos projets d\'ingénierie, de l\'infrastructure au développement logiciel.',
        insights: [
          {
            title: 'Solutions Cloud',
            description: 'Nous concevons et mettons en œuvre des infrastructures cloud évolutives qui permettent une collaboration transparente entre les équipes mondiales. Nos solutions exploitent les principales plateformes pour fournir des ressources informatiques sécurisées et performantes pour la conception, la simulation et la gestion de projet.',
          },
          {
            title: 'Cybersécurité',
            description: 'La protection des données sensibles du projet et de la propriété intellectuelle est primordiale. Nous mettons en œuvre des protocoles de sécurité multicouches, effectuons des évaluations de vulnérabilité et assurons la conformité aux normes de l\'industrie pour protéger les actifs numériques tout au long du cycle de vie du projet.',
          },
          {
            title: 'Développement personnalisé',
            description: 'Notre équipe de développement logiciel crée des applications sur mesure et des outils d\'automatisation qui rationalisent les flux de travail et améliorent la productivité. Des plugins d\'optimisation de conception aux tableaux de bord de gestion de projet, nous construisons des solutions qui répondent à vos défis d\'ingénierie uniques.',
          },
        ],
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
      copyright: '2025 LBYA AB. Tous droits réservés.',
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
      insights: 'Insikter',
      careers: 'Karriärer',
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
          description: 'Våra ingenjörsteam levererar innovativa strukturella lösningar som balanserar säkerhet, effektivitet och hållbarhet. Från seismisk motståndskraft till lätta material, vi utmanar gränserna för vad som är möjligt.',
          insights: ['Avancerad analys', 'Betong och Stål design', 'Design Revision'],
        },
        bim: {
          title: 'BIM-baserat Arbetsflöde',
          description: 'Genom att utnyttja Building Information Modeling effektiviserar vi samarbete mellan discipliner, minskar fel och optimerar projektresultat från koncept genom konstruktion och därefter.',
          insights: ['Digitala Tvillingar', 'Konfliktdetektering', 'Livscykelhantering'],
        },
        climate: {
          title: 'IT-lösningar',
          description: 'Vi hjälper kunder att förbereda sig för ett förändrat klimat genom infrastrukturresiliens, översvämningsbekämpning, värmeö-reducering och naturbaserade lösningar som skyddar samhällen.',
          insights: ['Översvämningsresiliens', 'Värmereducering', 'Grön Infrastruktur'],
        },
      },
    },
    solutions: {
      hero: 'Våra Lösningar',
      intro: 'Vi kombinerar framtidsfokuserat tänkande och teknisk excellens för att leverera omfattande lösningar som driver hållbar utveckling och skapar bestående påverkan.',
      sustainable: {
        title: 'Hållbar Arkitektur',
        description: 'Vi designar byggnader som harmoniserar med sin miljö, integrerar passiva strategier, förnybar energi och biofiliska principer för att skapa utrymmen som främjar välbefinnande samtidigt som ekologisk påverkan minimeras.',
        insights: [
          {
            title: 'LEED & BREEAM',
            description: 'Vårt team specialiserar sig på att uppnå toppcertifieringar för gröna byggnader. Vi vägleder projekt genom rigorösa miljöbedömningskriterier, säkerställer mätbara prestanda i energieffektivitet, vattenbevarande, inomhusmiljökvalitet och hållbart materialval.',
          },
          {
            title: 'Netto-Noll Design',
            description: 'Vi är banbrytande med byggnader som producerar lika mycket energi som de konsumerar genom integrerade förnybara energisystem, ultraeffektiva byggnadsskal och avancerad energimodellering. Vår holistiska strategi balanserar operativ effektivitet med reducering av inbyggd koldioxid.',
          },
          {
            title: 'Cirkulär Ekonomi',
            description: 'Från design till rivning omfamnar vi cirkulära principer som minimerar avfall och maximerar resursvärde. Vi specificerar material för demontering, inkorporerar återvunnet innehåll och skapar adaptiva utrymmen som utvecklas med förändrade behov över tid.',
          },
        ],
      },
      structural: {
        title: 'Konstruktionsteknik',
        description: 'Våra ingenjörsteam levererar innovativa strukturella lösningar som balanserar säkerhet, effektivitet och hållbarhet. Från seismisk motståndskraft till lätta material, vi utmanar gränserna för vad som är möjligt.',
        insights: [
          {
            title: 'Avancerad analys',
            description: 'Med hjälp av avancerad finita elementanalys och beräkningsmodellering optimerar vi strukturell prestanda samtidigt som materialanvändningen minimeras. Våra avancerade simuleringsfunktioner gör det möjligt för oss att förutsäga beteende under komplexa lastscenarier och förfina designer för maximal effektivitet.',
          },
          {
            title: 'Betong och Stål design',
            description: 'Vi levererar robusta strukturella system med betong och stål som uppfyller de högsta standarderna för säkerhet och hållbarhet. Våra designer inkorporerar seismiskt motståndskraftiga detaljer, innovativa anslutnersystem och optimerad dimensionering av element för att skapa motståndskraftig infrastruktur.',
          },
          {
            title: 'Design Revision',
            description: 'Våra oberoende designgranskningar ger kritisk försäkran om att strukturella system uppfyller kodkrav och prestationsmål. Vi utför omfattande kontroller av beräkningar, detaljer och byggbarhet för att identifiera risker och optimera lösningar innan konstruktionen börjar.',
          },
        ],
      },
      bim: {
        title: 'BIM-baserat Arbetsflöde',
        description: 'Genom att utnyttja Building Information Modeling effektiviserar vi samarbete mellan discipliner, minskar fel och optimerar projektresultat från koncept genom konstruktion och därefter.',
        insights: [
          {
            title: 'Digitala Tvillingar',
            description: 'Vi skapar virtuella repliker av fysiska tillgångar som kopplar samman design, konstruktion och drift. Våra digitala tvillingar möjliggör realtidsövervakning, prediktivt underhåll och scenarioplanering genom hela byggnadens livscykel.',
          },
          {
            title: 'Konfliktdetektering',
            description: 'Genom koordinerad 3D-modellering identifierar och löser vi konflikter mellan byggnadssystem innan konstruktionen börjar. Detta proaktiva tillvägagångssätt eliminerar kostsamma ändringar på plats och säkerställer sömlös integration av arkitektoniska, strukturella och MEP-komponenter.',
          },
          {
            title: 'Livscykelhantering',
            description: 'Våra BIM-modeller sträcker sig bortom konstruktion för att stödja fastighetsförvaltning och framtida renoveringar. Vi bäddar in kritisk tillgångsdata, underhållsscheman och prestationsmått som informerar beslutsfattande genom hela byggnadens operativa liv.',
          },
        ],
      },
      it: {
        title: 'IT-lösningar',
        description: 'Omfattande IT-lösningar för att stödja dina ingenjörsprojekt, från infrastruktur till mjukvaruutveckling.',
        insights: [
          {
            title: 'Molnlösningar',
            description: 'Vi designar och implementerar skalbara molninfrastrukturer som möjliggör sömlöst samarbete mellan globala team. Våra lösningar utnyttjar ledande plattformar för att tillhandahålla säkra, högpresterande datorresurser för design, simulering och projektledning.',
          },
          {
            title: 'Cybersäkerhet',
            description: 'Att skydda känslig projektdata och intellektuell egendom är av största vikt. Vi implementerar flerskiktade säkerhetsprotokoll, utför sårbarhetsbedömningar och säkerställer efterlevnad av branschstandarder för att skydda digitala tillgångar genom hela projektets livscykel.',
          },
          {
            title: 'Anpassad Utveckling',
            description: 'Vårt mjukvaruutvecklingsteam skapar skräddarsydda applikationer och automatiseringsverktyg som effektiviserar arbetsflöden och förbättrar produktiviteten. Från designoptimeringsplugins till projektledningsdashboards bygger vi lösningar som adresserar dina unika ingenjörsutmaningar.',
          },
        ],
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
      copyright: '2025 LBYA AB. Alla rättigheter förbehållna.',
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
