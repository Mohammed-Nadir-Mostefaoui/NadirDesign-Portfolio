/* ============================================================
   THE GLOSSARY: plain words for the jargon in the case studies
   Case-study pages only.

   The case studies are written for people who hire designers,
   and many of them are not designers. This file finds the
   technical terms in the text (ERP, design tokens, mid-fidelity,
   WCAG...) and marks the first one of each kind in every section
   with a dotted underline. Hovering it puts a one-line, plain
   definition in the cursor tag (js/cursor.js reads it through
   window.__glossary).

   How it works
   - Runs on every `langchange` (i18n.js fires one on load and on
     every switch, after it has rewritten the text), so the terms
     always match the language on screen.
   - Only reading text is touched: paragraphs, list items and
     captions. Headings, labels, chips, links and buttons are
     left alone.
   - One mark per term per section, so a paragraph never turns
     into a row of underlines.
   - Fine pointers only: on a touch screen there is no cursor tag
     to show the definition, so nothing is underlined either
     (css/style.css).

   Adding a term: one entry below. `m` holds what to look for in
   each language (a regular expression source; Latin terms get
   word boundaries automatically), then the term and its plain
   definition per language. Arabic is written, not translated.
   No em dashes or semicolons in the definitions.
   ============================================================ */
(function () {
  'use strict';

  if (!document.querySelector('.cs-hero')) return;

  /* Isolates around Latin snippets inside Arabic definitions, so
     "4.5:1" or "#26A4DA" never reorder. */
  var L = function (s) { return '⁦' + s + '⁩'; };

  var G = [
    { id: 'erp', m: { en: 'ERP', fr: 'ERP', ar: 'ERP' },
      en: { t: 'ERP', d: 'Enterprise resource planning. One business software that runs sales, stock, purchasing and accounting on the same data.' },
      fr: { t: 'ERP', d: 'Progiciel de gestion intégré. Un seul logiciel qui fait tourner ventes, stock, achats et comptabilité sur les mêmes données.' },
      ar: { t: 'ERP', d: 'نظام لتخطيط موارد المؤسسة: برنامج واحد تُدار منه المبيعات والمخزون والمشتريات والمحاسبة على البيانات نفسها.' } },

    { id: 'b2b', m: { en: 'B2B', fr: 'B2B', ar: 'B2B' },
      en: { t: 'B2B', d: 'Business to business. Selling to other companies rather than to the general public.' },
      fr: { t: 'B2B', d: "Business to business. Vendre à d'autres entreprises plutôt qu'au grand public." },
      ar: { t: 'B2B', d: 'من شركة إلى شركة: بيعٌ موجّه إلى شركات أخرى، لا إلى عامة الناس.' } },

    { id: 'ba', m: { en: '[Bb]usiness analysts?|BA', fr: '[Bb]usiness analysts?', ar: 'محلّل الأعمال|محلّل أعمال' },
      en: { t: 'Business analyst', d: 'The person who collects the business rules and needs, and writes them into the documents the team builds from.' },
      fr: { t: 'Business analyst', d: "La personne qui recueille les règles métier et les besoins, puis les rédige dans les documents à partir desquels l'équipe construit." },
      ar: { t: 'محلّل الأعمال', d: 'الشخص الذي يجمع قواعد العمل واحتياجات الشركة، ثم يدوّنها في وثائق يبني عليها الفريق.' } },

    { id: 'frontend', m: { en: '[Ff]ront-end', fr: '[Ff]ront-end', ar: 'front-end' },
      en: { t: 'Front-end', d: 'The part of the software people see and click.' },
      fr: { t: 'Front-end', d: 'La partie du logiciel que les gens voient et sur laquelle ils cliquent.' },
      ar: { t: 'الواجهة الأمامية (Front-end)', d: 'جزء البرنامج الذي يراه الناس وينقرون عليه.' } },

    { id: 'backend', m: { en: '[Bb]ack-end', fr: '[Bb]ack-end', ar: 'back-end' },
      en: { t: 'Back-end', d: 'The servers, data and logic working behind the screens.' },
      fr: { t: 'Back-end', d: 'Les serveurs, les données et la logique qui travaillent derrière les écrans.' },
      ar: { t: 'الواجهة الخلفية (Back-end)', d: 'الخوادم والبيانات والمنطق الذي يعمل خلف الشاشات.' } },

    { id: 'wireframe', m: { en: '[Ww]ireframes?', fr: '[Ww]ireframes?', ar: '[Ww]ireframes?' },
      en: { t: 'Wireframe', d: 'A bare sketch of a screen, boxes and labels only, used to agree on the structure before any visual design.' },
      fr: { t: 'Wireframe', d: "Un croquis d'écran réduit à l'essentiel, des blocs et des libellés, pour s'accorder sur la structure avant tout design visuel." },
      ar: { t: 'Wireframe', d: 'مخطّط أوّلي للشاشة، مربعات وتسميات فقط، نتّفق عليه حول البنية قبل أي تصميم بصري.' } },

    { id: 'lofi', m: { en: '[Ll]o-fi', fr: '[Ll]o-fi', ar: 'منخفضة الدقة' },
      en: { t: 'Lo-fi', d: 'Low fidelity. Rough, grey and quick to change, so ideas get tested before anyone spends time on polish.' },
      fr: { t: 'Lo-fi', d: 'Basse fidélité. Brut, en gris et rapide à modifier, pour tester les idées avant de passer du temps sur la finition.' },
      ar: { t: 'منخفضة الدقة (Lo-fi)', d: 'نسخة أولية رمادية وسريعة التعديل، تُختبر فيها الأفكار قبل أن يُصرف الوقت على الصقل.' } },

    { id: 'midfi', m: { en: '[Mm]id-fi(?:delity)?', fr: '[Mm]id-fi(?:delity)?', ar: 'mid-fi(?:delity)?' },
      en: { t: 'Mid-fidelity', d: 'Real layout and real content, but no final colours or styling yet. The structure gets agreed here, before anything looks finished.' },
      fr: { t: 'Mid-fidelity', d: "La vraie mise en page et le vrai contenu, sans couleurs ni finition définitives. La structure se valide ici, avant que quoi que ce soit ait l'air fini." },
      ar: { t: 'Mid-fidelity', d: 'تخطيط حقيقي ومحتوى حقيقي، من دون ألوان أو صقل نهائي بعد. هنا تُعتمد البنية قبل أن يبدو أي شيء مكتملًا.' } },

    { id: 'hifi', m: { en: '[Hh]i-fi|high-fidelity', fr: '[Hh]i-fi|haute fidélité', ar: 'hi-fi' },
      en: { t: 'Hi-fi', d: 'High fidelity. The finished look, with final colours, type and details, close to what users will actually see.' },
      fr: { t: 'Hi-fi', d: "Haute fidélité. L'aspect fini, avec les couleurs, la typographie et les détails définitifs, proche de ce que verront les utilisateurs." },
      ar: { t: 'Hi-fi', d: 'الدقة العالية: الشكل النهائي بألوانه وخطوطه وتفاصيله، قريبًا ممّا سيراه المستخدمون فعلًا.' } },

    { id: 'usability', m: { en: '[Uu]sability tests?', fr: "[Tt]ests? d['’]utilisabilité", ar: 'اختبارات قابلية الاستخدام' },
      en: { t: 'Usability test', d: 'Watching real users try real tasks with the design, to see where they hesitate, get lost or slow down.' },
      fr: { t: "Test d'utilisabilité", d: 'Observer de vrais utilisateurs accomplir de vraies tâches avec le design, pour voir où ils hésitent, se perdent ou ralentissent.' },
      ar: { t: 'اختبار قابلية الاستخدام', d: 'مراقبة مستخدمين حقيقيين وهم ينجزون مهامّ حقيقية على التصميم، لمعرفة أين يتردّدون أو يضيعون أو يتباطؤون.' } },

    { id: 'designsystem', m: { en: '[Dd]esign [Ss]ystem', fr: '[Dd]esign [Ss]ystem', ar: 'نظام (?:ال)?تصميم' },
      en: { t: 'Design system', d: 'A shared set of rules and ready-made parts (colours, type, buttons, forms) so every screen is built the same way.' },
      fr: { t: 'Design system', d: "Un ensemble partagé de règles et de pièces prêtes à l'emploi (couleurs, typographie, boutons, formulaires) pour que chaque écran soit construit de la même façon." },
      ar: { t: 'نظام التصميم', d: 'مجموعة مشتركة من القواعد والقطع الجاهزة (ألوان وخطوط وأزرار ونماذج) تُبنى بها كل شاشة بالطريقة نفسها.' } },

    { id: 'complib', m: { en: '[Cc]omponent library', fr: 'bibliothèque de composants', ar: 'مكتبة (?:ال)?مكوّنات' },
      en: { t: 'Component library', d: 'The collection of interface parts, like buttons, fields and cards, designed once and reused on every screen.' },
      fr: { t: 'Bibliothèque de composants', d: "L'ensemble des éléments d'interface, comme les boutons, les champs et les cartes, conçus une fois et réutilisés sur chaque écran." },
      ar: { t: 'مكتبة المكوّنات', d: 'مجموعة عناصر الواجهة، كالأزرار والحقول والبطاقات، تُصمَّم مرة واحدة ويُعاد استخدامها في كل شاشة.' } },

    { id: 'breakpoint', m: { en: '[Bb]reakpoints?', fr: '[Bb]reakpoints?', ar: '[Bb]reakpoints?' },
      en: { t: 'Breakpoint', d: 'A screen width where the layout changes, for example from phone to tablet to desktop.' },
      fr: { t: 'Breakpoint', d: "Une largeur d'écran à partir de laquelle la mise en page change, par exemple du téléphone à la tablette puis à l'ordinateur." },
      ar: { t: 'Breakpoint', d: 'عرضُ شاشة يتغيّر عنده التخطيط، كالانتقال من الهاتف إلى الجهاز اللوحي ثم إلى الحاسوب.' } },

    { id: 'token', m: { en: '(?:[Dd]esign )?[Tt]okens?', fr: '(?:[Dd]esign )?[Tt]okens?', ar: '(?:design )?tokens?' },
      en: { t: 'Design token', d: 'A named value, like ' + L('brand/primary') + ' for a colour, shared by design and code. Change it once and every screen follows.' },
      fr: { t: 'Design token', d: 'Une valeur nommée, comme ' + L('brand/primary') + ' pour une couleur, partagée par le design et le code. On la change une fois, et tous les écrans suivent.' },
      ar: { t: 'Design token', d: 'قيمة لها اسم، مثل ' + L('brand/primary') + ' للون، يتشاركها التصميم والكود. تغيّرها مرة واحدة فتتبعها كل الشاشات.' } },

    { id: 'primitives', m: { en: '[Pp]rimitives', fr: '[Pp]rimitives', ar: 'primitives' },
      en: { t: 'Primitives', d: 'The raw values of a system, like an exact colour code or 4px, named by what they are rather than what they are for.' },
      fr: { t: 'Primitives', d: "Les valeurs brutes d'un système, comme un code couleur exact ou 4px, nommées d'après ce qu'elles sont et non d'après leur usage." },
      ar: { t: 'Primitives', d: 'القيم الخام في النظام، ككود لون محدّد أو ' + L('4px') + '، مُسمّاة بما هي عليه لا بما تُستخدم له.' } },

    { id: 'semantic', m: { en: '[Ss]emantic tokens?|[Ss]emantics', fr: '[Tt]okens? sémantiques?', ar: 'tokens (?:ال)?سيمانتيكي(?:ة|ًا)?|semantics' },
      en: { t: 'Semantic tokens', d: 'Values named by purpose, like “danger” or “primary text”. The meaning stays fixed even when the colour behind it changes.' },
      fr: { t: 'Tokens sémantiques', d: 'Des valeurs nommées d’après leur rôle, comme « danger » ou « texte principal ». Le sens reste fixe même quand la couleur derrière change.' },
      ar: { t: 'Tokens سيمانتيكية', d: 'قيم مُسمّاة بحسب وظيفتها، مثل «خطر» أو «النص الأساسي». يبقى المعنى ثابتًا حتى لو تغيّر اللون الذي خلفه.' } },

    { id: 'wcag', m: { en: 'WCAG(?: 2\\.1)?(?: AA)?', fr: 'WCAG(?: 2\\.1)?(?: AA)?', ar: 'WCAG(?: 2\\.1)?(?: AA)?' },
      en: { t: 'WCAG 2.1 AA', d: 'The international guidelines for making websites and apps usable by people with disabilities. AA is the level most organisations aim for.' },
      fr: { t: 'WCAG 2.1 AA', d: 'Les règles internationales pour rendre sites et applications utilisables par les personnes en situation de handicap. AA est le niveau visé par la plupart des organisations.' },
      ar: { t: 'WCAG 2.1 AA', d: 'الإرشادات الدولية لجعل المواقع والتطبيقات قابلة للاستخدام من قِبل ذوي الإعاقة. والمستوى AA هو ما تستهدفه معظم المؤسسات.' } },

    { id: 'rtl', m: { en: 'RTL', fr: 'RTL', ar: 'RTL' },
      en: { t: 'RTL', d: 'Right to left, the reading direction of Arabic. The whole layout mirrors, not just the text.' },
      fr: { t: 'RTL', d: "De droite à gauche, le sens de lecture de l'arabe. Toute la mise en page se reflète, pas seulement le texte." },
      ar: { t: 'RTL', d: 'من اليمين إلى اليسار، اتجاه القراءة في العربية. ينعكس التخطيط كله، لا النص وحده.' } },

    { id: 'ltr', m: { en: 'LTR', fr: 'LTR', ar: 'LTR' },
      en: { t: 'LTR', d: 'Left to right, the reading direction of English and French.' },
      fr: { t: 'LTR', d: "De gauche à droite, le sens de lecture du français et de l'anglais." },
      ar: { t: 'LTR', d: 'من اليسار إلى اليمين، اتجاه القراءة في الفرنسية والإنجليزية.' } },

    { id: 'logical', m: { en: '[Ll]ogical properties', fr: 'propriétés logiques', ar: 'الخصائص المنطقية' },
      en: { t: 'Logical properties', d: 'Layout rules written as “start” and “end” instead of “left” and “right”, so one design flips correctly for Arabic.' },
      fr: { t: 'Propriétés logiques', d: 'Des règles de mise en page écrites en « début » et « fin » plutôt qu’en « gauche » et « droite », pour qu’un même design s’inverse correctement en arabe.' },
      ar: { t: 'الخصائص المنطقية', d: 'قواعد تخطيط تُكتب بـ«البداية» و«النهاية» بدل «اليسار» و«اليمين»، فينقلب التصميم نفسه بشكل صحيح في العربية.' } },

    { id: 'spec', m: { en: '[Ss]pecs?', fr: '[Ss]pecs?|spécification', ar: 'مواصفات|المواصفة' },
      en: { t: 'Spec', d: 'Short for specification. The detailed design notes developers build from: sizes, states, behaviour and edge cases.' },
      fr: { t: 'Spec', d: 'Abréviation de spécification. Les notes de design détaillées dont les développeurs partent pour construire : tailles, états, comportements et cas limites.' },
      ar: { t: 'المواصفات', d: 'ملاحظات التصميم التفصيلية التي يبني منها المطوّرون: الأحجام والحالات والسلوك والحالات الحدّية.' } },

    { id: 'handoff', m: { en: 'handoff', fr: 'handoff' },
      en: { t: 'Handoff', d: 'The moment a finished design is passed from designers to developers.' },
      fr: { t: 'Handoff', d: 'Le moment où un design terminé passe des designers aux développeurs.' } },

    { id: 'variants', m: { en: '(?<=\\d )variants', fr: '(?<=\\d )variantes', ar: '(?<=\\d )نسخة' },
      en: { t: 'Variants', d: 'Versions of one component, one for each size, state or icon position, so nothing has to be improvised later.' },
      fr: { t: 'Variantes', d: "Les versions d'un même composant, une par taille, état ou position d'icône, pour que rien ne soit improvisé ensuite." },
      ar: { t: 'النُّسخ (Variants)', d: 'صيغ مختلفة للمكوّن نفسه، واحدة لكل حجم أو حالة أو موضع أيقونة، فلا يُرتجَل شيء لاحقًا.' } },

    { id: 'bottomsheet', m: { en: '[Bb]ottom [Ss]heets?', fr: '[Bb]ottom [Ss]heets?', ar: '[Bb]ottom [Ss]heets?' },
      en: { t: 'Bottom sheet', d: 'A panel that slides up from the bottom of a phone screen, within reach of one thumb.' },
      fr: { t: 'Bottom sheet', d: "Un panneau qui glisse depuis le bas de l'écran du téléphone, à portée de pouce." },
      ar: { t: 'Bottom sheet', d: 'لوحة تنزلق من أسفل شاشة الهاتف، في متناول إبهام واحد.' } },

    { id: 'stepper', m: { en: 'stepper', fr: 'stepper', ar: 'stepper' },
      en: { t: 'Stepper', d: 'A row of steps that shows where you are in a process and lets you jump between stages.' },
      fr: { t: 'Stepper', d: "Une rangée d'étapes qui montre où l'on en est dans un processus et permet de passer d'une étape à l'autre." },
      ar: { t: 'Stepper', d: 'شريط مراحل يُظهر أين أنت في العملية ويتيح لك القفز بين مراحلها.' } },

    { id: 'nda', m: { en: 'NDA', fr: 'NDA', ar: 'اتفاقية سرية' },
      en: { t: 'NDA', d: 'Non-disclosure agreement. A contract that keeps the client’s product and data private, so only safe parts are shown here.' },
      fr: { t: 'NDA', d: "Accord de confidentialité. Un contrat qui garde privés le produit et les données du client, d'où la sélection montrée ici." },
      ar: { t: 'اتفاقية السرية (NDA)', d: 'عقد يُبقي منتج العميل وبياناته خاصّة، ولذلك لا يُعرض هنا إلا ما يمكن مشاركته بأمان.' } },

    { id: 'sprint', m: { en: 'sprints?', fr: 'sprints?', ar: 'sprints?' },
      en: { t: 'Sprint', d: 'A fixed work cycle, often two weeks, that many software teams use to plan and ship.' },
      fr: { t: 'Sprint', d: "Un cycle de travail fixe, souvent de deux semaines, que beaucoup d'équipes logicielles utilisent pour planifier et livrer." },
      ar: { t: 'Sprint', d: 'دورة عمل محدّدة المدة، غالبًا أسبوعان، تخطّط بها فرق برمجية كثيرة وتُطلق عملها.' } },

    { id: 'governance', m: { en: '[Gg]overnance', fr: '[Gg]ouvernance', ar: 'الحَوكمة|الحوكمة' },
      en: { t: 'Governance', d: 'The rules for who can change a design system, how changes are proposed, and how it stays consistent as it grows.' },
      fr: { t: 'Gouvernance', d: 'Les règles qui fixent qui peut modifier un design system, comment proposer un changement, et comment il reste cohérent en grandissant.' },
      ar: { t: 'الحوكمة', d: 'القواعد التي تحدّد من يحقّ له تعديل نظام التصميم، وكيف تُقترح التعديلات، وكيف يبقى متماسكًا وهو يكبر.' } },

    { id: 'waterfall', m: { en: 'waterfall', fr: 'cascade', ar: 'waterfall' },
      en: { t: 'Waterfall', d: 'A way of working where each phase must finish before the next one starts, with no going back.' },
      fr: { t: 'Cascade', d: 'Une façon de travailler où chaque phase doit être terminée avant que la suivante commence, sans retour en arrière.' },
      ar: { t: 'Waterfall', d: 'طريقة عمل تُستكمل فيها كل مرحلة قبل أن تبدأ التالية، دون رجوع إلى الوراء.' } },

    { id: 'hex', m: { en: '[Hh]ex', fr: '[Hh]ex(?:adécimaux)?', ar: 'hex' },
      en: { t: 'Hex code', d: 'The six-character code a screen uses to show an exact colour, like #26A4DA.' },
      fr: { t: 'Code hex', d: "Le code à six caractères qu'un écran utilise pour afficher une couleur exacte, comme #26A4DA." },
      ar: { t: 'كود hex', d: 'الرمز المكوّن من ستة محارف الذي تعرض به الشاشة لونًا محدّدًا، مثل ' + L('#26A4DA') + '.' } },

    { id: 'contrast', m: { en: '\\d(?:[.,]\\d)?:1', fr: '\\d(?:[.,]\\d)?:1', ar: '\\d(?:[.,]\\d)?:1' },
      en: { t: 'Contrast ratio', d: 'How much lighter one colour is than the other. 4.5:1 is the minimum for body text to stay readable for most people.' },
      fr: { t: 'Ratio de contraste', d: "L'écart de luminosité entre deux couleurs. 4,5:1 est le minimum pour qu'un texte courant reste lisible par la plupart des gens." },
      ar: { t: 'نسبة التباين', d: 'مقدار الفرق في الإضاءة بين لونين. ونسبة ' + L('4.5:1') + ' هي الحدّ الأدنى ليبقى نص المتن مقروءًا لمعظم الناس.' } },

    { id: 'touch', m: { en: '[Tt]ouch[- ]target', fr: 'zone tactile', ar: 'ل?هدف (?:ال)?لمسي' },
      en: { t: 'Touch target', d: 'The tappable area around a control. 44 by 44 points is a size a fingertip can hit reliably.' },
      fr: { t: 'Zone tactile', d: "La surface que l'on peut toucher autour d'un contrôle. 44 sur 44 points, c'est une taille qu'un doigt atteint sans rater." },
      ar: { t: 'الهدف اللمسي', d: 'المساحة القابلة للّمس حول العنصر. و' + L('44×44') + ' نقطة حجمٌ يصيبه طرف الإصبع دون خطأ.' } },

    { id: 'focus', m: { en: 'focus ring', fr: 'anneau de focus', ar: 'حلقة تركيز' },
      en: { t: 'Focus ring', d: 'The outline that shows which element is active when someone moves through the page with a keyboard.' },
      fr: { t: 'Anneau de focus', d: 'Le contour qui montre quel élément est actif quand on parcourt la page au clavier.' },
      ar: { t: 'حلقة التركيز', d: 'الإطار الذي يُظهر العنصر النشط حين يتنقّل أحدهم في الصفحة بلوحة المفاتيح.' } },

    { id: 'assistive', m: { en: 'assistive technology', fr: "technologies d['’]assistance", ar: 'التقنيات المساعِدة' },
      en: { t: 'Assistive technology', d: 'Tools like screen readers that read a page aloud or let people use it without a mouse or a screen.' },
      fr: { t: "Technologies d'assistance", d: "Des outils comme les lecteurs d'écran, qui lisent la page à voix haute ou permettent de l'utiliser sans souris ni écran." },
      ar: { t: 'التقنيات المساعِدة', d: 'أدوات مثل قارئات الشاشة، تقرأ الصفحة بصوت مسموع أو تتيح استخدامها دون فأرة أو شاشة.' } },

    { id: 'figma', m: { en: 'Figma', fr: 'Figma', ar: 'Figma' },
      en: { t: 'Figma', d: 'The design tool where the screens, components and specs live, shared live with the whole team.' },
      fr: { t: 'Figma', d: "L'outil de design où vivent les écrans, les composants et les specs, partagés en direct avec toute l'équipe." },
      ar: { t: 'Figma', d: 'أداة التصميم التي تعيش فيها الشاشات والمكوّنات والمواصفات، ويتشاركها الفريق كله مباشرة.' } },

    { id: 'antd', m: { en: 'Ant Design', fr: 'Ant Design', ar: 'Ant Design' },
      en: { t: 'Ant Design', d: 'A widely used library of ready-made components for building web interfaces.' },
      fr: { t: 'Ant Design', d: "Une bibliothèque très répandue de composants prêts à l'emploi pour construire des interfaces web." },
      ar: { t: 'Ant Design', d: 'مكتبة واسعة الانتشار من المكوّنات الجاهزة لبناء واجهات الويب.' } },

    { id: 'shadcn', m: { en: 'Shadcn', fr: 'Shadcn', ar: 'Shadcn' },
      en: { t: 'Shadcn', d: 'A newer set of web components that teams copy into their own code and adapt, rather than install as is.' },
      fr: { t: 'Shadcn', d: 'Un ensemble plus récent de composants web que les équipes copient dans leur propre code et adaptent, au lieu de les installer tels quels.' },
      ar: { t: 'Shadcn', d: 'مجموعة أحدث من مكوّنات الويب ينسخها الفريق إلى كوده ويعدّلها، بدل تثبيتها كما هي.' } },

    { id: 'flutter', m: { en: 'Flutter', fr: 'Flutter', ar: 'Flutter' },
      en: { t: 'Flutter', d: 'Google’s toolkit for building iOS and Android apps from a single codebase.' },
      fr: { t: 'Flutter', d: "La boîte à outils de Google pour créer des applications iOS et Android à partir d'un seul code." },
      ar: { t: 'Flutter', d: 'أداة من Google لبناء تطبيقات iOS وAndroid انطلاقًا من كود واحد.' } },

    { id: 'material', m: { en: 'Material', fr: 'Material', ar: 'Material' },
      en: { t: 'Material Design', d: 'Google’s public design system. Its type scale was the starting point here.' },
      fr: { t: 'Material Design', d: 'Le design system public de Google. Son échelle typographique a servi de point de départ ici.' },
      ar: { t: 'Material Design', d: 'نظام التصميم العام لدى Google، وسلّمه التايبوغرافي كان نقطة الانطلاق هنا.' } },

    { id: 'datahier', m: { en: '[Dd]ata hierarch(?:y|ies)', fr: '[Hh]iérarchies? de(?:s)? données', ar: 'تسلسلات? البيانات' },
      en: { t: 'Data hierarchy', d: 'Deciding what a person needs to read first, second, and not at all, then making the screen show it in that order.' },
      fr: { t: 'Hiérarchie des données', d: "Décider ce qu'une personne doit lire en premier, en second, et pas du tout, puis faire en sorte que l'écran le montre dans cet ordre." },
      ar: { t: 'تسلسل البيانات', d: 'تحديد ما يحتاج الشخص إلى قراءته أولًا، ثم ثانيًا، وما لا يحتاجه إطلاقًا، ثم جعل الشاشة تعرضه بهذا الترتيب.' } },

    { id: 'pagination', m: { en: 'pagination', fr: 'pagination', ar: 'ترقيم صفحات' },
      en: { t: 'Pagination', d: 'Splitting a long list into pages, so thousands of rows stay quick to load and to browse.' },
      fr: { t: 'Pagination', d: 'Découper une longue liste en pages, pour que des milliers de lignes restent rapides à charger et à parcourir.' },
      ar: { t: 'ترقيم الصفحات', d: 'تقسيم قائمة طويلة إلى صفحات، لتبقى آلاف الصفوف سريعة التحميل والتصفّح.' } },

    { id: 'edgecase', m: { en: '[Ee]dge[- ]cases?', fr: 'cas limites?', ar: '(?:ال)?حالات? (?:ال)?حدّية' },
      en: { t: 'Edge case', d: 'A rare but possible situation, like an empty list or a missing field, that the design still has to handle.' },
      fr: { t: 'Cas limite', d: 'Une situation rare mais possible, comme une liste vide ou un champ manquant, que le design doit quand même gérer.' },
      ar: { t: 'الحالة الحدّية', d: 'موقف نادر لكنه ممكن، كقائمة فارغة أو حقل ناقص، على التصميم أن يتعامل معه رغم ذلك.' } },

    { id: 'elevation', m: { en: 'elevation', fr: 'élévation', ar: 'elevation' },
      en: { t: 'Elevation', d: 'How raised a surface looks, shown with shadow, so menus and dialogs sit visibly above the page.' },
      fr: { t: 'Élévation', d: "À quel point une surface semble surélevée, rendue par l'ombre, pour que menus et fenêtres se détachent de la page." },
      ar: { t: 'Elevation', d: 'مدى ارتفاع السطح ظاهريًا، يُعبَّر عنه بالظل، لتبدو القوائم والنوافذ فوق الصفحة بوضوح.' } }
  ];

  var BY_ID = {};
  G.forEach(function (g) { BY_ID[g.id] = g; });

  var lang = function () { return (window.i18n && window.i18n.current && window.i18n.current()) || 'en'; };

  /* Latin terms get word boundaries (Latin letters, accents,
     digits). Arabic terms do not: Arabic glues prefixes such as
     و and الـ onto the word, and only the term itself is marked. */
  var ARABIC = /[؀-ۿ]/;
  var W = 'A-Za-zÀ-ÖØ-öø-ÿ0-9';
  var compiled = {};
  var build = function (lg) {
    if (compiled[lg]) return compiled[lg];
    var list = [];
    G.forEach(function (g) {
      var src = g.m[lg];
      if (!src) return;
      if (!ARABIC.test(src)) src = '(?<![' + W + '])(?:' + src + ')(?![' + W + '])';
      try { list.push({ id: g.id, re: new RegExp(src, 'u') }); } catch (e) { /* older engine: skip this term */ }
    });
    return (compiled[lg] = list);
  };

  var SCOPE  = '.cs-hero, .cs-section:not(.cs-closing):not(.cs-more)';
  var BLOCKS = 'p:not(.cs-gallery-label):not(.cs-eyebrow), li, figcaption, .cs-meta-v';
  var SKIP   = 'a, button, h1, h2, h3, h4, .cs-code, .cs-chip, .gl-term';

  var unwrap = function () {
    document.querySelectorAll('.gl-term').forEach(function (s) {
      var p = s.parentNode;
      p.replaceChild(document.createTextNode(s.textContent), s);
      p.normalize();
    });
  };

  /* Mark the earliest unused term in this text node (the longest
     one when two start at the same place, so "semantic tokens"
     wins over "tokens"), then keep scanning what follows it. */
  var mark = function (node, terms, used) {
    while (node) {
      var text = node.nodeValue, best = null;
      for (var i = 0; i < terms.length; i++) {
        var x = terms[i];
        if (used[x.id]) continue;
        var m = x.re.exec(text);
        if (m && (!best || m.index < best.at || (m.index === best.at && m[0].length > best.len))) {
          best = { at: m.index, len: m[0].length, id: x.id };
        }
      }
      if (!best) return;
      used[best.id] = true;
      var hit  = node.splitText(best.at);
      var rest = hit.splitText(best.len);
      var span = document.createElement('span');
      span.className = 'gl-term';
      span.setAttribute('data-gl', best.id);
      hit.parentNode.replaceChild(span, hit);
      span.appendChild(hit);
      node = rest;
    }
  };

  var run = function () {
    unwrap();
    var terms = build(lang());
    document.querySelectorAll(SCOPE).forEach(function (section) {
      var used = {};
      section.querySelectorAll(BLOCKS).forEach(function (block) {
        if (block.closest(SKIP)) return;
        var walk = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
        var nodes = [];
        while (walk.nextNode()) nodes.push(walk.currentNode);
        nodes.forEach(function (n) {
          var el = n.parentElement;
          if (!el || el.closest(BLOCKS) !== block || el.closest(SKIP)) return;
          mark(n, terms, used);
        });
      });
    });
  };

  /* Read by js/cursor.js: the term and its definition, in the
     language on screen. */
  window.__glossary = function (id) {
    var g = BY_ID[id];
    if (!g) return null;
    return g[lang()] || g.en;
  };

  document.addEventListener('langchange', run);
})();
