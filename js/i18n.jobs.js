/* ============================================================
   JOBS SITE — every string that differs from nadirdesign.com
   ------------------------------------------------------------
   This file is the whole wording difference between the two sites.
   It is loaded BEFORE js/i18n.js, which merges it over the shared
   strings (see the "JOBS SITE override hook" in that file).

   Rules for anything written here:
   - Facts mirror the Master CV. If the CV changes, change this file.
   - Title is always "Product Designer". Leadership is shown as a fact
     about a project, never as a title.
   - Never claim a team, never claim assistive-technology testing,
     never credit Nawat with work delivered before January 2026.
   - No long dashes, no semicolons, in any language.
   - Arabic and French are written fresh, not translated from English.
   - A string that carries markup needs data-i18n-html on its element.
   ============================================================ */
window.__JOBS_I18N__ = {

  /* ───────────────────────── ENGLISH ───────────────────────── */
  en: {
    meta: {
      home: {
        title: 'Nadir Mostefaoui · Product Designer for B2B SaaS, ERP and Design Systems',
        desc:  'Product designer for B2B software: ERP modules, dashboards, internal tools and the design systems under them. Remote from Algeria (UTC+1). Arabic, French, English.',
        og:    'Three case studies from a live ERP platform: a task app tested with real staff, a sales module, and a design system of 1,033 variables and 24 components.'
      }
    },
    nav: {
      projects:      'Work',
      how:           'How I work',
      contact:       'Get in touch',
      all_projects:  'All case studies',
      dropdown_aria: 'Show case studies menu'
    },
    hero: {
      bio:           'I design B2B software with the people who build it: ERP modules, dashboards, internal tools, and the design systems underneath. Since 2024 I have been the only designer on a live ERP platform, working daily with business analysts, tech leads and developers.<span class="hero-bio-sig hero-open"><span class="hero-open-dot" aria-hidden="true"></span>Open to a remote product design role. Based in Tlemcen, Algeria (UTC+1).</span>',
      cta_primary:   'See my work',
      cta_cv:        'View CV',
      stat2_num:     '2+',
      stat2_label:   'Years in\nproduct design',
      stat3_num:     '05',
      stat3_label:   'ERP modules\ndesigned'
    },
    glance: {
      aria: 'At a glance',
      k1: 'Looking for',  v1: 'A remote product design role', s1: 'Full-time or contract',
      k2: 'Based in',     v2: 'Tlemcen, Algeria · UTC+1',     s2: 'The full European working day, and US East Coast mornings',
      k3: 'Languages',    v3: 'Arabic, French, English',      s3: 'I design in right-to-left and left-to-right',
      k4: 'Remote since', v4: '2024',                         s4: 'With teams in France and the UAE'
    },
    work: {
      subtitle: 'Three projects from one ERP platform, plus one in e-learning. Each shows my part and what changed.',
      cs2: { role: 'Sole designer, with a business analyst, a tech lead and the developers' },
      cs5: { role: 'Led the project, with a second designer' },
      cs3: { role: 'Product designer, with a business analyst, a tech lead and developers' },
      cs4: { role: 'UI/UX designer at Five Angles (agency)' }
    },
    how: {
      label:    'HOW I WORK',
      title:    'Inside a team',
      subtitle: 'What working with me looks like, taken from the projects above.',
      c1_title:   'With product and business',
      c1_promise: 'Business rules first, screens second.',
      c1_b1: 'Functional documents turned into flows',
      c1_b2: 'Structure agreed before any polish',
      c1_b3: 'One task model for six workflows',
      c1_b4: 'Tested with the people who do the job',
      c1_link: 'See it in Task Master',
      c2_title:   'With engineers',
      c2_promise: 'A spec is a conversation, not a handoff.',
      c2_b1: 'Every state designed, edge cases included',
      c2_b2: 'Business rules visible in the interface',
      c2_b3: 'Short review loops, straight back into Figma',
      c2_b4: 'Nine revisions of one module, one dev team',
      c2_link: 'See it in B2B Sales ERP',
      c3_title:   'With other designers',
      c3_promise: 'A system someone else can pick up and use.',
      c3_b1: 'Led and reviewed a second designer on Iksir',
      c3_b2: 'Docs written for designers and developers',
      c3_b3: 'A documentation site non-designers use',
      c3_b4: 'Governance rules as the system grows',
      c3_link: 'See it in Iksir Design System',
      remote_label: 'Remote',
      remote_title: 'Remote since 2024',
      remote_body:  'I have worked from Algeria with teams in France and the UAE. The routine is simple: versioned Figma files, written specs and short review calls.',
      ai_label: 'Tools',
      ai_title: 'AI in my daily work',
      ai_body:  'I use Claude with the Figma MCP and Figma Make every day to explore options and prototype faster. The design decisions stay mine.'
    },
    experience: {
      subtitle: 'The same history as my CV, with more detail on each role.',
      nawat: {
        role:   'Product Designer',
        hint:   '3 highlights',
        desc_0: '- Founded an independent product design studio for B2B and enterprise software. Datamaster Analytics is its first client.',
        desc_1: '- Led the Iksir design system for Datamaster\'s web and mobile products, working with a second designer whose work I reviewed.',
        desc_2: '- Three-layer tokens and support for Arabic (RTL), English and French. V1 shipped with 1,033 variables, 24 components and a documentation site that non-designers use.'
      },
      dma: {
        role_head: 'Product Designer (Contract)',
        role_a:    'Product Designer',
        hint:      '2 roles · 6 bullets',
        desc_a0:   'Only designer on a growing ERP platform, working daily with business analysts, tech leads and developers.',
        desc_a1:   '- Designed five core ERP modules: B2B Sales, Purchase, POS, Finance and Accounting. The B2B Sales module is now on its 9th major revision with the dev team.',
        desc_a2:   '- Designed Task Master, a task app for supermarket staff on mobile, tablet and desktop, over two iterations. It is in production, and usability tests with real staff showed inventory tasks taking about half the time.',
        desc_a3:   '- Leading an information architecture restructure of the whole platform ahead of a full redesign.',
        desc_a4:   '- Since February 2026 the design system work (Iksir) runs through Nawat Studio, listed above. My direct work on the ERP modules continues.',
        desc_b0:   'Started on the company\'s mobile product, then moved to Product Designer after three months.',
        desc_b1:   '- Designed the first iteration of the task app for retail store teams, shipped to production.'
      }
    },
    skills: {
      subtitle: 'Grouped the way a hiring team usually asks about them.',
      systems: {
        title: 'Design Systems',
        t1: 'Design Tokens',
        t2: 'Component Libraries',
        t3: 'Documentation',
        t4: 'Accessibility (WCAG 2.1 AA)',
        t5: 'RTL & LTR'
      },
      lead: {
        title: 'Leading & Reviewing',
        t1: 'Design Direction',
        t2: 'Mentoring a Designer',
        t3: 'Design Reviews'
      },
      languages: {
        t1: 'Arabic · Native',
        t2: 'French · Professional',
        t3: 'English · Intermediate'
      }
    },
    footer: {
      badge:     'Open to the right team',
      heading:   "Let's talk about the role",
      subtitle:  'If your team builds B2B or data-heavy software and needs a product designer, write to me here or use any of the contacts below.',
      form_hint: 'What does your team build, and what would I work on?',
      freelance: 'Looking for freelance or studio work instead? <a href="https://nadirdesign.com" target="_blank" rel="noopener">nadirdesign.com</a>'
    },
    cs: {
      hero:    { eyebrow: 'Case Study 02 · Design System', cta: 'Get in touch' },
      closing: {
        eyebrow: 'Next step',
        title:   'Need this kind of thinking on your team?',
        lead:    'I am open to a remote product design role. Ask me about the token architecture, the right-to-left foundation, or leading a second designer.'
      },
      pager: { contact: 'Get in touch' },
      form:  { ptype_label: 'What is it about?', pt_full: 'A full-time role', pt_contract: 'A contract role', pt_other: 'Something else' }
    },
    cs2: {
      hero:    { eyebrow: 'Case Study 01 · Retail Operations App', cta: 'Get in touch' },
      closing: {
        eyebrow: 'Next step',
        title:   'Is your team untangling an operation like this?',
        lead:    'I am open to a remote product design role. Ask me about the research with store staff, the task model, or how the redesign was measured.'
      }
    },
    cs3: {
      hero:    { cta: 'Get in touch' },
      closing: {
        eyebrow: 'Next step',
        title:   'Does your product live in dense screens?',
        lead:    'I am open to a remote product design role. Ask me how nine versions with one dev team shaped this module, and what I would change today.'
      }
    }
  },

  /* ───────────────────────── FRENCH ──────────────────────────
     The space before : ? ! and inside 1 033 is a narrow no-break space
     (U+202F), as in the rest of the site. Keep it when editing. */
  fr: {
    meta: {
      home: {
        title: 'Nadir Mostefaoui · Designer Produit, SaaS B2B, ERP et Design Systems',
        desc:  'Designer produit pour les logiciels B2B : modules ERP, tableaux de bord, outils internes et les design systems qui les soutiennent. À distance depuis l\'Algérie (UTC+1). Arabe, français, anglais.',
        og:    'Trois études de cas issues d\'une plateforme ERP en production : une application de tâches testée avec de vrais employés, un module de ventes, et un design system de 1 033 variables et 24 composants.'
      }
    },
    nav: {
      projects:      'Travaux',
      how:           'Ma façon de travailler',
      contact:       'Me contacter',
      all_projects:  'Toutes les études de cas',
      dropdown_aria: 'Afficher le menu des études de cas'
    },
    hero: {
      bio:           'Je conçois des logiciels B2B avec celles et ceux qui les construisent : modules ERP, tableaux de bord, outils internes, et les design systems qui les soutiennent. Depuis 2024, je suis le seul designer d\'une plateforme ERP en production, au quotidien avec des business analysts, des tech leads et des développeurs.<span class="hero-bio-sig hero-open"><span class="hero-open-dot" aria-hidden="true"></span>Ouvert à un poste de designer produit à distance. Basé à Tlemcen, Algérie (UTC+1).</span>',
      cta_primary:   'Voir mon travail',
      cta_cv:        'Voir le CV',
      stat2_num:     '2+',
      stat2_label:   'Ans en\ndesign produit',
      stat3_num:     '05',
      stat3_label:   'Modules ERP\nconçus'
    },
    glance: {
      aria: 'En bref',
      k1: 'Je recherche',       v1: 'Un poste de designer produit à distance', s1: 'Temps plein ou contrat',
      k2: 'Basé à',             v2: 'Tlemcen, Algérie · UTC+1',                s2: 'Toute la journée de travail européenne, et les matinées de la côte Est américaine',
      k3: 'Langues',            v3: 'Arabe, français, anglais',                s3: 'Je conçois en RTL comme en LTR',
      k4: 'À distance depuis',  v4: '2024',                                    s4: 'Avec des équipes en France et aux Émirats'
    },
    work: {
      subtitle: 'Trois projets issus d\'une même plateforme ERP, et un en e-learning. Pour chacun : mon rôle et ce qui a changé.',
      cs2: { role: 'Seul designer, avec un business analyst, un tech lead et les développeurs' },
      cs5: { role: 'Pilotage du projet, avec un second designer' },
      cs3: { role: 'Designer produit, avec un business analyst, un tech lead et des développeurs' },
      cs4: { role: 'Designer UI/UX chez Five Angles (agence)' }
    },
    how: {
      label:    'MA FAÇON DE TRAVAILLER',
      title:    'Au sein d\'une équipe',
      subtitle: 'Ce que donne le travail avec moi, tiré des projets ci-dessus.',
      c1_title:   'Avec le produit et le métier',
      c1_promise: 'Les règles métier d\'abord, les écrans ensuite.',
      c1_b1: 'Documents fonctionnels traduits en flux',
      c1_b2: 'Structure validée avant toute finition',
      c1_b3: 'Un seul modèle de tâches pour six workflows',
      c1_b4: 'Testé avec celles et ceux qui font le travail',
      c1_link: 'À voir dans Task Master',
      c2_title:   'Avec les ingénieurs',
      c2_promise: 'Une spec est une conversation, pas un handoff.',
      c2_b1: 'Chaque état conçu, cas limites compris',
      c2_b2: 'Règles métier visibles dans l\'interface',
      c2_b3: 'Revues courtes, retour direct dans Figma',
      c2_b4: 'Neuf révisions d\'un module, une même équipe',
      c2_link: 'À voir dans le module ERP Ventes B2B',
      c3_title:   'Avec d\'autres designers',
      c3_promise: 'Un système que d\'autres peuvent reprendre.',
      c3_b1: 'Un second designer encadré et relu sur Iksir',
      c3_b2: 'Une doc écrite pour designers et développeurs',
      c3_b3: 'Un site de documentation pour non-designers',
      c3_b4: 'Une gouvernance qui garde le système cohérent',
      c3_link: 'À voir dans le design system Iksir',
      remote_label: 'À distance',
      remote_title: 'À distance depuis 2024',
      remote_body:  'J\'ai travaillé depuis l\'Algérie avec des équipes en France et aux Émirats. La routine est simple : fichiers Figma versionnés, specs écrites et courts appels de revue.',
      ai_label: 'Outils',
      ai_title: 'L\'IA dans mon travail quotidien',
      ai_body:  'J\'utilise chaque jour Claude avec le MCP Figma et Figma Make pour explorer des pistes et prototyper plus vite. Les décisions de design restent les miennes.'
    },
    experience: {
      subtitle: 'Les mêmes expériences que sur mon CV, avec plus de détails pour chaque poste.',
      nawat: {
        role:   'Designer Produit',
        hint:   '3 points clés',
        desc_0: '- Création d\'un studio indépendant de design produit pour les logiciels B2B et d\'entreprise. Datamaster Analytics en est le premier client.',
        desc_1: '- Pilotage du design system Iksir pour les produits web et mobiles de Datamaster, avec un second designer dont je relisais le travail.',
        desc_2: '- Tokens à trois niveaux et prise en charge de l\'arabe (RTL), de l\'anglais et du français. La V1 est sortie avec 1 033 variables, 24 composants et un site de documentation utilisé par des non-designers.'
      },
      dma: {
        role_head: 'Designer Produit (contrat)',
        role_a:    'Designer Produit',
        hint:      '2 rôles · 6 points',
        desc_a0:   'Seul designer d\'une plateforme ERP en croissance, au quotidien avec des business analysts, des tech leads et des développeurs.',
        desc_a1:   '- Conception de cinq modules ERP principaux : Ventes B2B, Achats, PDV, Finance et Comptabilité. Le module Ventes B2B en est à sa 9e révision majeure avec l\'équipe de développement.',
        desc_a2:   '- Conception de Task Master, une application de tâches pour le personnel de supermarché sur mobile, tablette et desktop, en deux itérations. Elle est en production, et des tests d\'utilisabilité avec de vrais employés ont montré des tâches d\'inventaire réalisées en moitié moins de temps environ.',
        desc_a3:   '- Pilotage d\'une restructuration de l\'architecture de l\'information de toute la plateforme, avant une refonte complète.',
        desc_a4:   '- Depuis février 2026, le travail sur le design system (Iksir) passe par Nawat Studio, cité plus haut. Mon travail direct sur les modules ERP continue.',
        desc_b0:   'Début sur le produit mobile de l\'entreprise, puis passage au poste de Designer Produit après trois mois.',
        desc_b1:   '- Conception de la première itération de l\'application de tâches pour les équipes en magasin, mise en production.'
      }
    },
    skills: {
      subtitle: 'Regroupées comme une équipe de recrutement les demande en général.',
      systems: {
        title: 'Design Systems',
        t1: 'Design Tokens',
        t2: 'Bibliothèques de composants',
        t3: 'Documentation',
        t4: 'Accessibilité (WCAG 2.1 AA)',
        t5: 'RTL et LTR'
      },
      lead: {
        title: 'Encadrement et revue',
        t1: 'Direction du design',
        t2: 'Encadrement d\'un designer',
        t3: 'Revues de design'
      },
      languages: {
        t1: 'Arabe · Langue maternelle',
        t2: 'Français · Professionnel',
        t3: 'Anglais · Intermédiaire'
      }
    },
    footer: {
      badge:     'Ouvert à la bonne équipe',
      heading:   'Parlons du poste',
      subtitle:  'Si votre équipe construit un logiciel B2B ou un produit riche en données et cherche un designer produit, écrivez-moi ici ou par l\'un des contacts ci-dessous.',
      form_hint: 'Que construit votre équipe, et sur quoi travaillerais-je ?',
      freelance: 'Vous cherchez plutôt un freelance ou un studio ? <a href="https://nadirdesign.com" target="_blank" rel="noopener">nadirdesign.com</a>'
    },
    cs: {
      hero:    { eyebrow: 'Étude de cas 02 · Design System', cta: 'Me contacter' },
      closing: {
        eyebrow: 'La suite',
        title:   'Besoin de cette façon de penser dans votre équipe ?',
        lead:    'Je suis ouvert à un poste de designer produit à distance. Demandez-moi comment est née l\'architecture de tokens, la base RTL, ou comment j\'ai encadré un second designer.'
      },
      pager: { contact: 'Me contacter' },
      form:  { ptype_label: 'De quoi s\'agit-il ?', pt_full: 'Un poste à temps plein', pt_contract: 'Un poste en contrat', pt_other: 'Autre chose' }
    },
    cs2: {
      hero:    { eyebrow: 'Étude de cas 01 · Application d\'opérations retail', cta: 'Me contacter' },
      closing: {
        eyebrow: 'La suite',
        title:   'Votre équipe démêle une opération comme celle-ci ?',
        lead:    'Je suis ouvert à un poste de designer produit à distance. Demandez-moi comment s\'est passée la recherche avec le personnel en magasin, d\'où vient le modèle de tâches, ou comment la refonte a été mesurée.'
      }
    },
    cs3: {
      hero:    { cta: 'Me contacter' },
      closing: {
        eyebrow: 'La suite',
        title:   'Votre produit vit dans des écrans denses ?',
        lead:    'Je suis ouvert à un poste de designer produit à distance. Demandez-moi comment neuf versions avec une même équipe de dev ont façonné ce module, et ce que je changerais aujourd\'hui.'
      }
    }
  },

  /* ───────────────────────── ARABIC ──────────────────────────
     Written for a Gulf reader, in Modern Standard Arabic. Follows the
     site's terminology policy: مصمم منتجات (always plural), الجوال,
     إمكانية الوصول, and established English design terms kept in Latin. */
  ar: {
    meta: {
      home: {
        title: 'نذير مصطفاوي · مصمم منتجات لبرمجيات B2B وأنظمة ERP وأنظمة التصميم',
        desc:  'مصمم منتجات لبرمجيات الأعمال: وحدات ERP ولوحات المعلومات والأدوات الداخلية وأنظمة التصميم التي تقوم عليها. أعمل عن بُعد من الجزائر (UTC+1). العربية والفرنسية والإنجليزية.',
        og:    'ثلاث دراسات حالة من منصة ERP قيد التشغيل: تطبيق مهام اختُبر مع موظفين حقيقيين، ووحدة مبيعات، ونظام تصميم من 1,033 متغيّر تصميم و24 مكوّنًا.'
      }
    },
    nav: {
      projects:      'الأعمال',
      how:           'كيف أعمل',
      contact:       'تواصل معي',
      all_projects:  'جميع دراسات الحالة',
      dropdown_aria: 'إظهار قائمة دراسات الحالة'
    },
    hero: {
      bio:           'أصمّم برمجيات B2B مع من يبنونها: وحدات ERP ولوحات معلومات وأدوات داخلية، وأنظمة التصميم التي تقوم عليها. منذ 2024 وأنا المصمم الوحيد على منصة ERP قيد التشغيل، أعمل يوميًا مع محللي الأعمال والقادة التقنيين والمطورين.<span class="hero-bio-sig hero-open"><span class="hero-open-dot" aria-hidden="true"></span>منفتح على وظيفة تصميم منتجات عن بُعد. أقيم في تلمسان، الجزائر (UTC+1).</span>',
      cta_primary:   'شاهد أعمالي',
      cta_cv:        'عرض السيرة الذاتية',
      stat2_num:     '+2',
      stat2_label:   'سنوات في\nتصميم المنتجات',
      stat3_num:     '05',
      stat3_label:   'وحدات ERP\nصمّمتها'
    },
    glance: {
      aria: 'لمحة سريعة',
      k1: 'أبحث عن',            v1: 'وظيفة تصميم منتجات عن بُعد',     s1: 'بدوام كامل أو بعقد',
      k2: 'مقرّي',              v2: 'تلمسان، الجزائر · UTC+1',         s2: 'يوم العمل الأوروبي كاملًا، وصباح الساحل الشرقي الأمريكي',
      k3: 'اللغات',             v3: 'العربية والفرنسية والإنجليزية',   s3: 'أصمّم من اليمين إلى اليسار ومن اليسار إلى اليمين',
      k4: 'أعمل عن بُعد منذ',   v4: '2024',                            s4: 'مع فرق في فرنسا والإمارات'
    },
    work: {
      subtitle: 'ثلاثة مشاريع من منصة ERP واحدة، ومشروع في التعليم الإلكتروني. في كل منها: دوري، وما الذي تغيّر.',
      cs2: { role: 'المصمم الوحيد، مع محلل أعمال وقائد تقني والمطورين' },
      cs5: { role: 'قدتُ المشروع، مع مصمم ثانٍ' },
      cs3: { role: 'مصمم منتجات، مع محلل أعمال وقائد تقني ومطورين' },
      cs4: { role: 'مصمم UI/UX لدى وكالة Five Angles' }
    },
    how: {
      label:    'كيف أعمل',
      title:    'داخل الفريق',
      subtitle: 'هكذا يبدو العمل معي، من واقع المشاريع أعلاه.',
      c1_title:   'مع المنتج والأعمال',
      c1_promise: 'قواعد العمل أولًا، ثم الشاشات.',
      c1_b1: 'تحويل الوثائق الوظيفية إلى مسارات',
      c1_b2: 'الاتفاق على البنية قبل أي صقل بصري',
      c1_b3: 'نموذج مهام واحد لستة مسارات عمل',
      c1_b4: 'اختبار مع من يؤدّون العمل فعلًا',
      c1_link: 'شاهدها في Task Master',
      c2_title:   'مع المهندسين',
      c2_promise: 'المواصفة حوارٌ لا تسليم.',
      c2_b1: 'كل حالة مصمَّمة، ومنها الاستثنائية',
      c2_b2: 'قواعد العمل ظاهرة في الواجهة',
      c2_b3: 'مراجعات قصيرة تعود مباشرة إلى Figma',
      c2_b4: 'تسع مراجعات لوحدة واحدة مع الفريق نفسه',
      c2_link: 'شاهدها في وحدة ERP لمبيعات B2B',
      c3_title:   'مع المصممين',
      c3_promise: 'نظام يستطيع غيري أن يستلمه ويعمل به.',
      c3_b1: 'قيادة مصمم ثانٍ في Iksir ومراجعة عمله',
      c3_b2: 'توثيق مكتوب للمصممين والمطورين معًا',
      c3_b3: 'موقع توثيق يستخدمه غير المصممين',
      c3_b4: 'قواعد حَوكمة تُبقي النظام متماسكًا',
      c3_link: 'شاهدها في نظام تصميم Iksir',
      remote_label: 'عن بُعد',
      remote_title: 'أعمل عن بُعد منذ 2024',
      remote_body:  'عملتُ من الجزائر مع فرق في فرنسا والإمارات. الروتين بسيط: ملفات Figma بإصدارات واضحة، ومواصفات مكتوبة، ومكالمات مراجعة قصيرة.',
      ai_label: 'الأدوات',
      ai_title: 'الذكاء الاصطناعي في عملي اليومي',
      ai_body:  'أستخدم Claude مع Figma MCP و Figma Make يوميًا لاستكشاف الخيارات وبناء النماذج الأولية أسرع. أما قرارات التصميم فتبقى قراراتي.'
    },
    experience: {
      subtitle: 'الخبرات نفسها الموجودة في سيرتي الذاتية، بتفصيل أكثر لكل دور.',
      nawat: {
        role:   'مصمم منتجات',
        hint:   '3 نقاط بارزة',
        desc_0: '- أسّستُ استوديو مستقلًا لتصميم المنتجات لبرمجيات B2B والمؤسسات. Datamaster Analytics هي أول عميل له.',
        desc_1: '- قدتُ نظام التصميم Iksir لمنتجات Datamaster على الويب والجوال، مع مصمم ثانٍ كنتُ أراجع عمله.',
        desc_2: '- tokens بثلاث طبقات ودعم للعربية (RTL) والإنجليزية والفرنسية. صدرت النسخة V1 بـ1,033 متغيّر تصميم و24 مكوّنًا وموقع توثيق يستخدمه غير المصممين.'
      },
      dma: {
        role_head: 'مصمم منتجات (عقد)',
        role_a:    'مصمم منتجات',
        hint:      'دوران · 6 نقاط',
        desc_a0:   'المصمم الوحيد على منصة ERP في نمو مستمر، أعمل يوميًا مع محللي الأعمال والقادة التقنيين والمطورين.',
        desc_a1:   '- صمّمتُ خمس وحدات ERP أساسية: المبيعات B2B والمشتريات ونقاط البيع والمالية والمحاسبة. وحدة المبيعات B2B في مراجعتها الرئيسية التاسعة مع فريق التطوير.',
        desc_a2:   '- صمّمتُ Task Master، تطبيق مهام لموظفي السوبرماركت على الجوال والجهاز اللوحي وسطح المكتب، عبر إصدارين. التطبيق في الإنتاج، وأظهرت اختبارات الاستخدام مع موظفين حقيقيين أن مهام الجرد صارت تأخذ نحو نصف الوقت.',
        desc_a3:   '- أقود إعادة هيكلة معمارية المعلومات للمنصة كلها، قبل إعادة تصميم شاملة.',
        desc_a4:   '- منذ فبراير 2026 يجري العمل على نظام التصميم (Iksir) عبر استوديو نواة، المذكور أعلاه. وعملي المباشر على وحدات ERP مستمر.',
        desc_b0:   'بدأتُ على منتج الشركة للجوال، ثم انتقلتُ إلى دور مصمم منتجات بعد ثلاثة أشهر.',
        desc_b1:   '- صمّمتُ الإصدار الأول من تطبيق المهام لفرق متاجر التجزئة، ووُضع في الإنتاج.'
      }
    },
    skills: {
      subtitle: 'مرتّبة بالطريقة التي يسأل بها فريق التوظيف عادةً.',
      systems: {
        title: 'أنظمة التصميم',
        t1: 'Design Tokens',
        t2: 'مكتبات المكوّنات',
        t3: 'التوثيق',
        t4: 'إمكانية الوصول (WCAG 2.1 AA)',
        t5: 'RTL و LTR'
      },
      lead: {
        title: 'القيادة والمراجعة',
        t1: 'التوجيه التصميمي',
        t2: 'الإشراف على مصمم',
        t3: 'مراجعات التصميم'
      },
      languages: {
        t1: 'العربية · اللغة الأم',
        t2: 'الفرنسية · احترافية',
        t3: 'الإنجليزية · متوسطة'
      }
    },
    footer: {
      badge:     'منفتح على الفريق المناسب',
      heading:   'لنتحدّث عن الوظيفة',
      subtitle:  'إذا كان فريقك يبني برمجيات B2B أو منتجات كثيفة البيانات ويحتاج إلى مصمم منتجات، فراسلني من هنا أو عبر أي وسيلة أدناه.',
      form_hint: 'ماذا يبني فريقك، وعلى ماذا سأعمل؟',
      freelance: 'تبحث عن عمل حر أو عبر الاستوديو؟ <a href="https://nadirdesign.com" target="_blank" rel="noopener" dir="ltr">nadirdesign.com</a>'
    },
    cs: {
      hero:    { eyebrow: 'دراسة حالة 02 · Design System', cta: 'تواصل معي' },
      closing: {
        eyebrow: 'الخطوة التالية',
        title:   'تحتاج إلى هذا النوع من التفكير في فريقك؟',
        lead:    'أنا منفتح على وظيفة تصميم منتجات عن بُعد. اسألني عن معمارية الـtokens، أو أساس RTL، أو قيادة مصمم ثانٍ.'
      },
      pager: { contact: 'تواصل معي' },
      form:  { ptype_label: 'ما موضوع الرسالة؟', pt_full: 'وظيفة بدوام كامل', pt_contract: 'وظيفة بعقد', pt_other: 'شيء آخر' }
    },
    cs2: {
      hero:    { eyebrow: 'دراسة حالة 01 · تطبيق عمليات التجزئة', cta: 'تواصل معي' },
      closing: {
        eyebrow: 'الخطوة التالية',
        title:   'هل يعمل فريقك على تفكيك عملية كهذه؟',
        lead:    'أنا منفتح على وظيفة تصميم منتجات عن بُعد. اسألني عن البحث مع موظفي المتاجر، أو نموذج المهام، أو كيف قيس أثر إعادة التصميم.'
      }
    },
    cs3: {
      hero:    { cta: 'تواصل معي' },
      closing: {
        eyebrow: 'الخطوة التالية',
        title:   'هل يعيش منتجك في شاشات كثيفة البيانات؟',
        lead:    'أنا منفتح على وظيفة تصميم منتجات عن بُعد. اسألني كيف شكّلت تسع نسخ مع فريق تطوير واحد هذه الوحدة، وما الذي كنت سأغيّره اليوم.'
      }
    }
  }
};

/* ── Case-study lines reworded for a hiring reader (added 2026-10-06) ──
   On nadirdesign.com these lines speak as a freelancer or studio ("client
   work", "my design partner", the label "Client"). Here they speak as a
   designer inside a product team. Facts are unchanged. Each entry is the
   FULL string for that key, so if the same line is edited on the main
   site, edit it here too. The Iksir line that pointed to nawat.studio
   (cs.role.partner_note) is removed from this site's Iksir page itself. */
(function (J) {
  function put(lang, path, value) {
    var parts = path.split('.'), o = J[lang];
    for (var i = 0; i < parts.length - 1; i++) { o[parts[i]] = o[parts[i]] || {}; o = o[parts[i]]; }
    o[parts[parts.length - 1]] = value;
  }
  put('en', 'cs2.hero.client_k', "Company");
  put('fr', 'cs2.hero.client_k', "Entreprise");
  put('ar', 'cs2.hero.client_k', "الشركة");
  put('en', 'cs3.hero.client_k', "Company");
  put('fr', 'cs3.hero.client_k', "Entreprise");
  put('ar', 'cs3.hero.client_k', "الشركة");
  put('en', 'cs2.ba.note', "<b>A note on what's shown:</b> this is ongoing product work under NDA. Every screen here uses placeholder content (the repeated IDs and “999 articles” are intentional dummy data), and some flows are simplified. The real product and its data stay private.");
  put('fr', 'cs2.ba.note', "<b>Note sur ce qui est montré :</b> il s'agit d'un travail produit en cours sous NDA. Chaque écran utilise un contenu fictif (les identifiants répétés et les « 999 articles » sont des données factices volontaires), et certains flux sont simplifiés. Le vrai produit et ses données restent privés.");
  put('ar', 'cs2.ba.note', "<b>ملاحظة على المعروض:</b> هذا عمل جارٍ على منتج حقيقي تحت اتفاقية سرية. كل شاشة هنا تستخدم محتوى وهميًا (المعرّفات المتكررة و«999 صنفًا» بيانات تجريبية مقصودة)، وبعض التدفقات مبسّطة. المنتج الحقيقي وبياناته يبقيان خاصّين.");
  put('en', 'cs3.pipe.nda', "<b>A note on what's shown:</b> this is ongoing product work under NDA. Every screen uses placeholder content (the repeated clients, dates, and amounts are intentional dummy data), and some flows are simplified. The real product and its data stay private.");
  put('fr', 'cs3.pipe.nda', "<b>Note sur ce qui est montré :</b> il s'agit d'un travail produit en cours sous NDA. Chaque écran utilise un contenu fictif (les clients, dates et montants répétés sont des données factices volontaires), et certains flux sont simplifiés. Le vrai produit et ses données restent privés.");
  put('ar', 'cs3.pipe.nda', "<b>ملاحظة على المعروض:</b> هذا عمل جارٍ على منتج حقيقي تحت اتفاقية سرية. كل شاشة تستخدم محتوى وهميًا (العملاء والتواريخ والمبالغ المتكررة بيانات تجريبية مقصودة)، وبعض التدفقات مبسّطة. المنتج الحقيقي وبياناته يبقيان خاصّين.");
  put('en', 'cs.lib.note', "<b>A note on what's shown:</b> Iksir is ongoing product work under NDA, so I'm showing only a selection of the design system (a sample of its tokens, components, and patterns, not the full library), and none of Datamaster's production screens or real data. What you see here is a curated slice that's safe to share. The complete system and the products it powers stay private.");
  put('fr', 'cs.lib.note', "<b>Une note sur ce qui est montré :</b> Iksir est un travail produit en cours sous NDA, je ne montre donc qu'une sélection du design system (un échantillon de ses tokens, composants et patterns, pas la bibliothèque complète), et aucun écran de production de Datamaster ni aucune donnée réelle. Ce que vous voyez ici est un extrait choisi, sûr à partager. Le système complet et les produits qu'il alimente restent privés.");
  put('ar', 'cs.lib.note', "<b>ملاحظة حول ما يُعرَض:</b> Iksir عمل جارٍ على منتج حقيقي تحت اتفاقية سرية (NDA)، لذا أعرض جزءًا مختارًا فقط من نظام التصميم (عيّنة من الـtokens والمكوّنات والأنماط، لا المكتبة الكاملة)، ولا أي شاشات إنتاج لدى Datamaster أو بيانات حقيقية. ما ترونه هنا نموذج منتقى آمن للمشاركة. أما النظام الكامل والمنتجات التي يشغّلها فتبقى خاصة.");
  put('en', 'cs.role.lead', "We were two product designers. I led the project end to end: the strategy, the stakeholder relationship, and every foundational decision the system is built on. This case study is my side of that work.");
  put('fr', 'cs.role.lead', "Nous étions deux designers produit. J'ai piloté le projet de bout en bout : la stratégie, la relation avec les parties prenantes et chaque décision fondatrice sur laquelle le système repose. Cette étude de cas présente ma part de ce travail.");
  put('ar', 'cs.role.lead', "كنّا مصمّمَي منتج. قدتُ المشروع من البداية إلى النهاية: الاستراتيجية، والعلاقة مع الأطراف المعنية، وكل قرار تأسيسي يقوم عليه النظام. تعرض هذه الدراسة الجزء الخاص بي من هذا العمل.");
  put('en', 'cs.role.mine1', "Strategy, discovery, and the relationship with Datamaster's stakeholders");
  put('fr', 'cs.role.mine1', "Stratégie, découverte et relation avec les parties prenantes de Datamaster");
  put('ar', 'cs.role.mine1', "الاستراتيجية والاستكشاف والعلاقة مع الأطراف المعنية لدى Datamaster");
  put('en', 'cs.role.partner_h', "The second designer");
  put('fr', 'cs.role.partner_h', "Le second designer");
  put('ar', 'cs.role.partner_h', "المصمم الثاني");
  put('en', 'cs.process.loop', "<b>Not a straight line:</b> the mobile layer is the clearest example. What Phase 1 flagged as a hard-coded, disconnected task app became, by Phase 3, the system's mobile component library, through several passes, not one. I designed the layer, the second designer reviewed each round and pushed it further, every loop tightened the components until they held up as a system.");
  put('fr', 'cs.process.loop', "<b>Pas une ligne droite :</b> la couche mobile en est l'exemple le plus clair. Ce que la phase 1 a signalé comme une application de tâches autonome et codée en dur est devenu, en phase 3, la bibliothèque de composants mobiles du système, au fil de plusieurs itérations, pas d'une seule. J'ai conçu la couche, le second designer a revu chaque passage et l'a poussé plus loin, et chaque boucle a affiné les composants jusqu'à ce qu'ils tiennent en tant que système.");
  put('ar', 'cs.process.loop', "<b>ليس خطًّا مستقيمًا:</b> الطبقة المخصّصة للجوال هي المثال الأوضح. ما رصدته المرحلة 1 كتطبيق مهام منفصل ومكتوب يدويًا أصبح في المرحلة 3 مكتبة مكوّنات الجوال في النظام، عبر عدّة تكرارات، لا مرّة واحدة. صمّمتُ الطبقة، وراجعها المصمم الثاني في كل جولة ودفعها أبعد، وكل دورة شدّت المكوّنات حتى صمدت كنظام.");
  put('en', 'cs.status.s2_p', "The library is in use and the team now designs and builds against it. The second designer led a polished public version of the site on top of the shared V1.");
  put('fr', 'cs.status.s2_p', "La bibliothèque est utilisée et l'équipe conçoit et développe désormais en s'appuyant dessus. Le second designer a piloté une version publique soignée du site par-dessus la V1 partagée.");
  put('ar', 'cs.status.s2_p', "المكتبة قيد الاستخدام، وصار الفريق يصمّم ويبني استنادًا إليها. قاد المصمم الثاني نسخة عامة مصقولة من الموقع فوق V1 المشتركة.");
})(window.__JOBS_I18N__);
