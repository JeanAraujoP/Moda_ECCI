/* ════════════════════════════════════════════
   TEORÍA DEL COLOR Y EL SIGNIFICADO — ECCI  |  script.js
   ════════════════════════════════════════════ */
'use strict';

/* ─── Diccionario i18n ─── */
const i18n = {
  es: {
    /* Nav */
    nav_inicio:      'Inicio',
    nav_conferencia: 'Conferencias',
    nav_temas:       'Temas',
    nav_galeria:     'Galería',
    nav_glosario:    'Glosario',
    nav_conclusion:  'Conclusión',

    /* Hero */
    hero_kicker:  'EVENTO DE MODA · MAYO 2026',
    hero_h1a:     'Teoría',
    hero_h1b:     'del Color',
    hero_h1c:     'y el Significado',
    hero_sub:     'Evento de Moda — Color, Significado y Diseño de Productos — Universidad ECCI, Mayo 2026.',
    btn_conf:     'Ver conferencias →',
    btn_temas:    'Explorar temas',
    stat1_num:    '2',
    stat1_lbl:    'Conferencias',
    stat2_num:    '30',
    stat2_lbl:    'Términos',
    stat3_num:    '5',
    stat3_lbl:    'Pilares éticos',
    hero_img_tag: 'ECCI Mayo 2026',

    /* About */
    about_kicker: 'Acerca del evento',
    about_title:  '¿Qué es Teoría del Color y el Significado?',
    about_sub:    'Un evento de moda en la Universidad ECCI donde diseñadores, estudiantes y profesionales exploran cómo el color, el significado simbólico y la imagen construyen experiencias de marca y producto en la industria de la moda.',
    ac1_title:    '2 Conferencias',
    ac1_desc:     'Color y Significado, y Puestos de Moda del evento',
    ac2_title:    '30 Términos',
    ac2_desc:     'Glosario técnico de diseño bilingüe',
    ac3_title:    'Experiencias',
    ac3_desc:     'Talleres, pasarela y puestos de moda en vivo',
    ac4_title:    'Universidad ECCI',
    ac4_desc:     'Bogotá, Colombia — Mayo 2026',

    /* Temas */
    temas_kicker: 'Ejes temáticos',
    temas_title:  'Temas Principales',
    temas_sub:    'Los pilares que guían la exploración del color, el significado y los puestos de moda en el contexto del evento de la Universidad ECCI.',
    t1_title:     'Teoría del Color y el Significado',
    t1_desc:      'Cómo la psicología del color y su significado influyen en la comunicación visual, la percepción de las personas y la efectividad del mensaje en diseño gráfico, publicidad y marketing.',
    t2_title:     'Puestos de Moda del Evento',
    t2_desc:      'Aplicación de la teoría del color en prendas y colecciones: combinaciones cromáticas, imagen personal, armonía visual y tendencias de la industria de la moda.',
    t3_title:     'Glosario de Diseño',
    t3_desc:      '30 términos técnicos en inglés con traducción y definición aplicada al color, el significado y la producción de moda.',
    t4_title:     'Ética & Diseño Responsable',
    t4_desc:      'Reflexión sobre accesibilidad, diversidad cromática y responsabilidad del diseñador frente a audiencias diversas.',
    tag_color:    'Color',
    tag_ux:       'Significado',
    tag_acc:      'Simbolismo',
    tag_foto:     'Puestos',
    tag_moda:     'Moda',
    tag_visual:   'Diseño Visual',
    tag_terminos: '30 términos',
    tag_bilingue: 'Bilingüe',
    tag_etica:    'Ética',
    tag_datos:    'Datos',
    tag_soc:      'Sociedad',

    /* Conferencias */
    conf_kicker: 'Programa académico',
    conf_title:  'Conferencias',
    conf_sub:    'Ponencias seleccionadas del evento Teoría del Color y el Significado — Universidad ECCI, Mayo 2026.',

    /* ── Conferencia 01 ── */
    c1_num:     '01',
    c1_title:   'Teoría del Color: Significado e Impacto en la Comunicación Visual',
    c1_speaker: 'Conferencia · Universidad ECCI · Mayo 2026',
    c1_main:    'Exploración del significado simbólico y psicológico del color aplicado al diseño de marca, moda y experiencias visuales.',
    c1_tab_es:  '🇨🇴 Español',
    c1_tab_en:  '🇺🇸 English',
    c1_res_lbl: 'Resumen',
    c1_ref_lbl: 'Reflexión',
    c1_kw_lbl:  'Palabras Clave / Keywords',
    c1_mm_lbl:  'Contenido Multimedia',

    /* Resumen ES */
    c1_res_es:  'En mayo de 2026, en la Universidad ECCI, se realizó una conferencia sobre la teoría del color y su significado, enfocada en la importancia de los colores dentro de la comunicación visual. Durante el evento se explicó cómo los colores pueden transmitir emociones, influir en la percepción de las personas y fortalecer la efectividad de un mensaje en diferentes contextos.',
    c1_res_es2: 'Asimismo, se abordaron los significados asociados a diversos colores y su aplicación en áreas como el diseño gráfico, la publicidad y el marketing. Los asistentes comprendieron cómo la correcta selección de colores contribuye a crear identidades visuales sólidas y a generar una conexión más efectiva con el público objetivo.',
    c1_ref_es:  'La conferencia permitió reconocer que los colores son una herramienta fundamental para comunicar ideas y emociones. Comprender la teoría del color ayuda a desarrollar proyectos visuales más estratégicos, creativos y capaces de transmitir mensajes claros e impactantes.',

    /* Resumen EN */
    c1_res_en:  'In May 2026, at Universidad ECCI, a conference was held on color theory and its meaning, focused on the importance of color within visual communication. During the event, attendees learned how colors can convey emotions, influence people\'s perception and strengthen the effectiveness of a message in different contexts.',
    c1_res_en2: 'The talk also covered the meanings associated with different colors and their application in fields such as graphic design, advertising and marketing. Attendees understood how the correct selection of colors helps build strong visual identities and create a more effective connection with the target audience.',
    c1_ref_en:  'The conference made it clear that colors are a fundamental tool for communicating ideas and emotions. Understanding color theory helps develop visual projects that are more strategic, creative and capable of conveying clear, impactful messages.',

    /* ── Conferencia 02 ── */
    c2_num:     '02',
    c2_title:   'Puestos de Moda: Aplicación de la Teoría del Color en la Vestimenta',
    c2_speaker: 'Conferencia y Exposición · Universidad ECCI · Mayo 2026',
    c2_main:    'Aplicación de los principios de la teoría del color en prendas y colecciones de moda: combinaciones cromáticas, imagen personal, armonía visual y tendencias de la industria.',

    /* Resumen ES */
    c2_res_es:  'Durante la conferencia y exposición de puestos de moda, los asistentes tuvieron la oportunidad de observar diferentes prendas y colecciones que aplicaban los principios de la teoría del color. A través de diversas combinaciones cromáticas, se mostró cómo los colores pueden influir en la imagen personal, transmitir estilos específicos y generar diferentes percepciones en quienes observan una prenda.',
    c2_res_es2: 'Además, se explicó la importancia de seleccionar colores adecuados en el diseño de moda para resaltar características, expresar personalidad y crear armonía visual. Los expositores demostraron cómo la teoría del color se utiliza en la industria de la moda para diseñar colecciones atractivas, innovadoras y acordes con las tendencias actuales.',
    c2_ref_es:  'Esta experiencia permitió comprender que la teoría del color no solo se aplica al diseño gráfico o la publicidad, sino también a la moda. Los colores tienen un papel fundamental en la forma en que las personas expresan su identidad y comunican emociones a través de la vestimenta, convirtiéndose en una herramienta clave para el diseño y la creatividad.',

    /* Resumen EN */
    c2_res_en:  'During the conference and fashion stall exhibition, attendees had the opportunity to observe different garments and collections that applied the principles of color theory. Through various chromatic combinations, it was shown how colors can influence personal image, convey specific styles and generate different perceptions in those who observe a garment.',
    c2_res_en2: 'The importance of selecting appropriate colors in fashion design was also explained, to highlight characteristics, express personality and create visual harmony. The exhibitors demonstrated how color theory is used in the fashion industry to design attractive, innovative collections that align with current trends.',
    c2_ref_en:  'This experience made it clear that color theory applies not only to graphic design or advertising, but also to fashion. Colors play a fundamental role in how people express their identity and communicate emotions through clothing, making them a key tool for design and creativity.',

    /* Galería */
    gal_kicker: 'Momentos del evento',
    gal_title:  'Galería',
    gal_sub:    'Imágenes de la pasarela, talleres, conferencias y puestos de moda del evento Teoría del Color y el Significado — Universidad ECCI, Mayo 2026.',
    g1:  'Armonía de Color',
    g2:  'Círculo Cromático',
    g3:  'Taller de Color',
    g4:  'Color Creativo',
    g5:  'Experiencia ECCI',
    g6:  'Lenguaje del Color',
    g7:  'Moda ECCI',
    g8:  'No hay Significado',
    g9:  'Color y Sensación',
    g10: 'Película y Color',
    g11: 'Psicología del Color',
    g12: 'Puesto de Moda',
    g13: '¿Qué Quiero Decir?',
    g14: 'Significado del Color',
    g15: 'Técnica de Color',
    g16: 'Tinte',
    g17: 'Todo Funciona',
    g18: 'Tono',
    g19: 'Contraste',
    g20: 'Combinación',

    /* Glosario */
    glos_kicker:  'Vocabulario técnico',
    glos_title:   'Glosario',
    glos_search:  'Buscar término...',
    glos_col_en:  'English',
    glos_col_es:  'Español',
    glos_col_def: 'Definición',

    /* Definiciones */
    d_hue:        'Tono o matiz puro de un color, su posición en la rueda cromática sin considerar la luminosidad ni la saturación.',
    d_saturation: 'Intensidad o pureza de un color. A mayor saturación, el color es más vivo; a menor, se acerca al gris.',
    d_value:      'Luminosidad de un color: la cantidad de luz que refleja o emite, desde el negro (0) hasta el blanco (100).',
    d_contrast:   'Diferencia perceptual entre dos colores adyacentes. Clave en accesibilidad para garantizar legibilidad según estándares WCAG.',
    d_palette:    'Conjunto seleccionado de colores que trabajan juntos con coherencia visual y semántica dentro de un sistema de diseño.',
    d_colorwheel: 'Representación circular de los colores del espectro visible ordenados según sus relaciones cromáticas.',
    d_primary:    'Colores que no pueden obtenerse mezclando otros: rojo, azul y amarillo en el modelo pigmento; rojo, verde y azul (RGB) en el modelo luz.',
    d_secondary:  'Colores resultantes de la mezcla de dos primarios: naranja, verde y violeta.',
    d_analogous:  'Combinación de colores adyacentes en la rueda cromática. Produce armonías visuales suaves y naturales.',
    d_complement: 'Par de colores opuestos en la rueda cromática. Su combinación genera el máximo contraste visual.',
    d_triadic:    'Esquema de tres colores equidistantes en la rueda cromática. Ofrece alto contraste manteniendo equilibrio visual.',
    d_tint:       'Color más claro obtenido al añadir blanco a un matiz puro. Reduce la saturación y aumenta la luminosidad.',
    d_shade:      'Color más oscuro obtenido al añadir negro a un matiz puro. Aumenta la profundidad y el peso visual.',
    d_tone:       'Variación de un color obtenida añadiendo gris. Produce colores desaturados, neutros y sofisticados.',
    d_warm:       'Colores del rojo, naranja y amarillo. Evocan calor, energía y cercanía; tienden a avanzar visualmente.',
    d_cool:       'Colores del azul, verde y violeta. Transmiten calma, distancia y profesionalismo; tienden a retroceder visualmente.',
    d_neutral:    'Colores sin saturación dominante (blanco, negro, grises) usados como base o soporte en composiciones cromáticas.',
    d_gradient:   'Transición gradual entre dos o más colores. Técnica fundamental en UI moderna para crear profundidad y dinamismo.',
    d_opacity:    'Nivel de transparencia de un color o elemento visual, que permite ver lo que hay detrás de él.',
    d_hex:        'Código hexadecimal de 6 caracteres (#RRGGBB) que identifica un color exacto en sistemas digitales.',
    d_rgb:        'Modelo de color aditivo (Rojo, Verde, Azul) usado en pantallas. Los tres canales combinados producen cualquier color visible.',
    d_cmyk:       'Modelo de color sustractivo (Cian, Magenta, Amarillo, Negro) usado en impresión física.',
    d_hsl:        'Modelo de color que expresa Tono (Hue), Saturación (Saturation) y Luminosidad (Lightness), más intuitivo para diseñadores.',
    d_meaning:    'Asociación cultural, emocional y simbólica que un color comunica al observador, más allá de su valor estético.',
    d_tokencolor: 'Variable de diseño que almacena un valor de color con un nombre semántico (--color-primario) para sistemas de diseño escalables.',
    d_moodboard:  'Tablero de referencia visual que agrupa imágenes, colores y tipografías para comunicar la dirección estética de un proyecto.',
    d_colorstory: 'Narrativa cromática de una colección o campaña: cómo los colores elegidos comunican emociones y valores de marca.',
    d_pantone:    'Sistema internacional estandarizado de identificación de colores para impresión, textiles y plásticos.',
    d_colorblind: 'Condición que afecta la percepción de ciertos colores. El diseño accesible garantiza usabilidad para personas daltónicas.',
    d_stall:      'Espacio de exhibición y venta donde una marca o colección presenta sus prendas al público durante un evento de moda.',
    d_brand:      'Conjunto de elementos visuales —incluido el color— que distinguen y comunican los valores y el significado de una marca.',

    /* Conclusión */
    concl_kicker: 'Reflexión final',
    concl_title:  'Conclusión',
    concl_q:      '¿Cómo el color construye experiencias y significados responsables?',
    concl_main:   'El evento Teoría del Color y el Significado en la Universidad ECCI dejó una verdad que va más allá de las paletas y los códigos hexadecimales: el color es el primer idioma de toda experiencia de marca, y como todo lenguaje, puede incluir o excluir. Diseñar con color es diseñar con responsabilidad.',
    concl_p1:     'La conferencia sobre Color y Significado reveló que detrás de cada elección cromática en una marca de moda existe una asociación simbólica y emocional: confianza, lujo, energía o calma. El buen diseño no elige el color que "se ve bonito"; elige el color que comunica el mensaje correcto a la audiencia correcta.',
    concl_p2:     'La ponencia sobre los Puestos de Moda demostró que la teoría del color no solo aplica al diseño gráfico o la publicidad, sino también a la vestimenta y la moda. Los colores son clave en cómo las personas expresan su identidad y comunican emociones a través de la ropa.',
    e1_title:     'Accesibilidad Cromática',
    e1_desc:      'Diseñar con contrastes que cumplen WCAG no es restricción: es garantizar que la experiencia llega a todos los usuarios, incluidos los 300 millones de personas con daltonismo en el mundo.',
    e2_title:     'Significado y Honestidad de Marca',
    e2_desc:      'El color comunica promesas. Usar un significado cromático que no corresponde con los valores reales de una marca es una forma de engaño visual.',
    e3_title:     'Color & Diversidad',
    e3_desc:      'Los sistemas de color deben reflejar la diversidad humana. Una paleta de tonos de piel que solo contempla tres variantes excluye a la mayoría del mundo.',
    e4_title:     'Sostenibilidad Visual',
    e4_desc:      'El color en pantalla consume energía: los modos oscuros en pantallas OLED son un 30–60% más eficientes. El diseñador responsable considera el impacto ambiental de sus decisiones cromáticas.',
    e5_title:     'Identidad Cultural',
    e5_desc:      'El color tiene significados culturales radicalmente distintos. Diseñar para audiencias globales exige investigación cultural, no solo estética.',
    quote_es:     '"Teoría del Color y el Significado no fue una clase de historia del arte. Fue la comprensión de que cada color que elegimos para una marca, una prenda o un puesto de moda lleva un mensaje hacia quien lo va a ver. Esa responsabilidad es el fundamento de todo buen diseño."',
    quote_en:     '"Color Theory and Meaning was not an art history class. It was the understanding that every color we choose for a brand, a garment or a fashion stall carries a message toward whoever will see it. That responsibility is the foundation of all good design."',

    /* Footer */
    footer_copy: '© 2026 Teoría del Color y el Significado · Universidad ECCI · Evento de Moda · Bogotá, Colombia · Jean Carlos Alejandro Araujo Pacheco',
  },

  en: {
    nav_inicio:      'Home',
    nav_conferencia: 'Conferences',
    nav_temas:       'Topics',
    nav_galeria:     'Gallery',
    nav_glosario:    'Glossary',
    nav_conclusion:  'Conclusion',

    hero_kicker:  'FASHION EVENT · MAY 2026',
    hero_h1a:     'Color',
    hero_h1b:     'Theory',
    hero_h1c:     'and Meaning',
    hero_sub:     'Fashion Event — Color, Meaning and Product Design — Universidad ECCI, May 2026.',
    btn_conf:     'See conferences →',
    btn_temas:    'Explore topics',
    stat1_num:    '2',
    stat1_lbl:    'Conferences',
    stat2_num:    '30',
    stat2_lbl:    'Terms',
    stat3_num:    '5',
    stat3_lbl:    'Ethical pillars',
    hero_img_tag: 'Runway · ECCI May 2026',

    about_kicker: 'About the event',
    about_title:  'What is Color Theory and Meaning?',
    about_sub:    'A fashion event at Universidad ECCI where designers, students and professionals explore how color, symbolic meaning and imagery build brand and product experiences in the fashion industry.',
    ac1_title:    '2 Conferences',
    ac1_desc:     'Color and Meaning, and the event\'s Fashion Stalls',
    ac2_title:    '30 Terms',
    ac2_desc:     'Bilingual technical design glossary',
    ac3_title:    'Experiences',
    ac3_desc:     'Workshops, runway show and live fashion stalls',
    ac4_title:    'Universidad ECCI',
    ac4_desc:     'Bogotá, Colombia — May 2026',

    temas_kicker: 'Thematic axes',
    temas_title:  'Main Topics',
    temas_sub:    'The pillars guiding the exploration of color, meaning and fashion stalls in the context of the Universidad ECCI event.',
    t1_title:     'Color Theory and Meaning',
    t1_desc:      'How color psychology and meaning associations influence visual communication, audience perception and message effectiveness in graphic design, advertising and marketing.',
    t2_title:     'Fashion Stalls of the Event',
    t2_desc:      'Application of color theory in garments and collections: chromatic combinations, personal image, visual harmony and industry trends in fashion.',
    t3_title:     'Design Glossary',
    t3_desc:      '30 technical terms in English with translation and definition applied to color, meaning and fashion production.',
    t4_title:     'Ethics & Responsible Design',
    t4_desc:      'Reflection on accessibility, chromatic diversity and the designer\'s responsibility toward diverse audiences.',
    tag_color:    'Color',
    tag_ux:       'Meaning',
    tag_acc:      'Symbolism',
    tag_foto:     'Stalls',
    tag_moda:     'Fashion',
    tag_visual:   'Visual Design',
    tag_terminos: '30 terms',
    tag_bilingue: 'Bilingual',
    tag_etica:    'Ethics',
    tag_datos:    'Data',
    tag_soc:      'Society',

    conf_kicker: 'Academic program',
    conf_title:  'Conferences',
    conf_sub:    'Selected talks from the Color Theory and Meaning event — Universidad ECCI, May 2026.',

    /* ── Conference 01 ── */
    c1_num:     '01',
    c1_title:   'Color Theory: Meaning and Impact on Visual Communication',
    c1_speaker: 'Conference · Universidad ECCI · May 2026',
    c1_main:    'Exploration of the symbolic and psychological meaning of color applied to brand design, fashion and visual experiences.',
    c1_tab_es:  '🇨🇴 Español',
    c1_tab_en:  '🇺🇸 English',
    c1_res_lbl: 'Summary',
    c1_ref_lbl: 'Reflection',
    c1_kw_lbl:  'Keywords / Palabras Clave',
    c1_mm_lbl:  'Multimedia Content',

    c1_res_es:  'En mayo de 2026, en la Universidad ECCI, se realizó una conferencia sobre la teoría del color y su significado, enfocada en la importancia de los colores dentro de la comunicación visual.',
    c1_res_es2: 'Se abordaron los significados asociados a diversos colores y su aplicación en áreas como el diseño gráfico, la publicidad y el marketing.',
    c1_ref_es:  'La conferencia permitió reconocer que los colores son una herramienta fundamental para comunicar ideas y emociones.',
    c1_res_en:  'In May 2026, at Universidad ECCI, a conference was held on color theory and its meaning, focused on the importance of color within visual communication. During the event, attendees learned how colors can convey emotions, influence people\'s perception and strengthen the effectiveness of a message in different contexts.',
    c1_res_en2: 'The talk also covered the meanings associated with different colors and their application in fields such as graphic design, advertising and marketing. Attendees understood how the correct selection of colors helps build strong visual identities and create a more effective connection with the target audience.',
    c1_ref_en:  'The conference made it clear that colors are a fundamental tool for communicating ideas and emotions. Understanding color theory helps develop visual projects that are more strategic, creative and capable of conveying clear, impactful messages.',

    /* ── Conference 02 ── */
    c2_num:     '02',
    c2_title:   'Fashion Stalls: Applying Color Theory to Clothing',
    c2_speaker: 'Conference and Exhibition · Universidad ECCI · May 2026',
    c2_main:    'Application of color theory principles in fashion garments and collections: chromatic combinations, personal image, visual harmony and industry trends.',

    c2_res_es:  'Durante la conferencia y exposición de puestos de moda, los asistentes tuvieron la oportunidad de observar diferentes prendas y colecciones que aplicaban los principios de la teoría del color.',
    c2_res_es2: 'Además, se explicó la importancia de seleccionar colores adecuados en el diseño de moda para resaltar características, expresar personalidad y crear armonía visual.',
    c2_ref_es:  'Esta experiencia permitió comprender que la teoría del color no solo se aplica al diseño gráfico o la publicidad, sino también a la moda.',
    c2_res_en:  'During the conference and fashion stall exhibition, attendees had the opportunity to observe different garments and collections that applied the principles of color theory. Through various chromatic combinations, it was shown how colors can influence personal image, convey specific styles and generate different perceptions in those who observe a garment.',
    c2_res_en2: 'The importance of selecting appropriate colors in fashion design was also explained, to highlight characteristics, express personality and create visual harmony. The exhibitors demonstrated how color theory is used in the fashion industry to design attractive, innovative collections that align with current trends.',
    c2_ref_en:  'This experience made it clear that color theory applies not only to graphic design or advertising, but also to fashion. Colors play a fundamental role in how people express their identity and communicate emotions through clothing, making them a key tool for design and creativity.',

    /* Gallery */
    gal_kicker: 'Event moments',
    gal_title:  'Gallery',
    gal_sub:    'Images from the runway, workshops, talks and fashion stalls at Color Theory and Meaning — Universidad ECCI, May 2026.',
    g1:  'Color Harmony',
    g2:  'Color Wheel',
    g3:  'Color Workshop',
    g4:  'Creative Color',
    g5:  'ECCI Experience',
    g6:  'Language of Color',
    g7:  'ECCI Fashion',
    g8:  'No Meaning',
    g9:  'Color & Sensation',
    g10: 'Film & Color',
    g11: 'Color Psychology',
    g12: 'Fashion Stall',
    g13: 'What I Want to Say',
    g14: 'Meaning of Color',
    g15: 'Color Technique',
    g16: 'Dye',
    g17: 'Everything Works',
    g18: 'Tone',
    g19: 'Contrast',
    g20: 'Combination',

    glos_kicker:  'Technical vocabulary',
    glos_title:   'Glossary',
    glos_search:  'Search term...',
    glos_col_en:  'English',
    glos_col_es:  'Spanish',
    glos_col_def: 'Definition',

    d_hue:        'The pure tone or hue of a color, its position on the color wheel without considering brightness or saturation.',
    d_saturation: 'The intensity or purity of a color. Higher saturation means more vivid; lower saturation approaches gray.',
    d_value:      'The lightness of a color: the amount of light it reflects or emits, from black (0) to white (100).',
    d_contrast:   'The perceptual difference between two adjacent colors. Critical in accessibility to ensure legibility per WCAG standards.',
    d_palette:    'A selected set of colors that work together with visual and semantic coherence within a design system.',
    d_colorwheel: 'A circular representation of visible spectrum colors ordered according to their chromatic relationships.',
    d_primary:    'Colors that cannot be obtained by mixing others: red, blue and yellow in pigment; red, green and blue (RGB) in light.',
    d_secondary:  'Colors resulting from mixing two primaries: orange, green and violet.',
    d_analogous:  'A combination of colors adjacent on the color wheel. Produces soft, natural visual harmonies.',
    d_complement: 'A pair of colors opposite each other on the color wheel. Their combination generates maximum visual contrast.',
    d_triadic:    'A scheme of three equidistant colors on the color wheel. Offers high contrast while maintaining visual balance.',
    d_tint:       'A lighter color obtained by adding white to a pure hue. Reduces saturation and increases lightness.',
    d_shade:      'A darker color obtained by adding black to a pure hue. Increases depth and visual weight.',
    d_tone:       'A color variation obtained by adding gray. Produces desaturated, neutral and sophisticated colors.',
    d_warm:       'Colors of red, orange and yellow. Evoke warmth, energy and closeness; tend to advance visually.',
    d_cool:       'Colors of blue, green and violet. Convey calm, distance and professionalism; tend to recede visually.',
    d_neutral:    'Colors without dominant saturation (white, black, grays) used as base or support in chromatic compositions.',
    d_gradient:   'A gradual transition between two or more colors. A fundamental technique in modern UI for depth and dynamism.',
    d_opacity:    'The level of transparency of a color or visual element, allowing what is behind it to show through.',
    d_hex:        'A 6-character hexadecimal code (#RRGGBB) that identifies an exact color in digital systems.',
    d_rgb:        'Additive color model (Red, Green, Blue) used in screens. The three channels combined produce any visible color.',
    d_cmyk:       'Subtractive color model (Cyan, Magenta, Yellow, Key/Black) used in physical printing.',
    d_hsl:        'Color model expressing Hue, Saturation and Lightness — more intuitive for designers than RGB.',
    d_meaning:    'The cultural, emotional and symbolic association a color communicates to the viewer, beyond its aesthetic value.',
    d_tokencolor: 'A design variable storing a color value with a semantic name (--color-primary) for scalable design systems.',
    d_moodboard:  'A visual reference board grouping images, colors and typefaces to communicate the aesthetic direction of a project.',
    d_colorstory: 'The chromatic narrative of a collection or campaign: how chosen colors communicate emotions and brand values.',
    d_pantone:    'An internationally standardized color identification system for print, textiles and plastics.',
    d_colorblind: 'A condition affecting the perception of certain colors. Accessible design ensures usability for color-blind users.',
    d_stall:      'An exhibition and sales space where a brand or collection presents its garments to the public during a fashion event.',
    d_brand:      'The set of visual elements — including color — that distinguish and communicate a brand\'s values and meaning.',

    concl_kicker:  'Final reflection',
    concl_title:   'Conclusion',
    concl_q:       'How does color build responsible experiences and meaning?',
    concl_main:    'The Color Theory and Meaning event at Universidad ECCI left a truth beyond palettes and hex codes: color is the first language of every brand experience, and like all languages, it can include or exclude. Designing with color means designing with responsibility.',
    concl_p1:      'The Color and Meaning conference revealed that behind every chromatic choice in a fashion brand lies a symbolic and emotional association: trust, luxury, energy or calm. Good design does not choose the color that "looks pretty"; it chooses the color that communicates the right message to the right audience.',
    concl_p2:      'The Fashion Stalls talk demonstrated that color theory applies not only to graphic design or advertising, but also to clothing and fashion. Colors are key to how people express their identity and communicate emotions through their garments.',
    e1_title:      'Chromatic Accessibility',
    e1_desc:       'Designing with WCAG-compliant contrast is not a restriction: it guarantees the experience reaches all users, including the 300 million people worldwide with color blindness.',
    e2_title:      'Meaning and Brand Honesty',
    e2_desc:       'Color communicates promises. Using a chromatic meaning that doesn\'t match a brand\'s real values is a form of visual deception.',
    e3_title:      'Color & Diversity',
    e3_desc:       'Color systems must reflect human diversity. A skin tone palette that only includes three variants excludes the majority of the world.',
    e4_title:      'Visual Sustainability',
    e4_desc:       'On-screen color consumes energy: dark modes on OLED screens are 30–60% more efficient. Responsible designers consider the environmental impact of their chromatic choices.',
    e5_title:      'Cultural Identity',
    e5_desc:       'Color carries radically different cultural meanings. Designing for global audiences demands cultural research, not just aesthetics.',
    quote_es:      '"Teoría del Color y el Significado no fue una clase de historia del arte. Fue la comprensión de que cada color que elegimos para una marca, una prenda o un puesto de moda lleva un mensaje hacia quien lo va a ver. Esa responsabilidad es el fundamento de todo buen diseño."',
    quote_en:      '"Color Theory and Meaning was not an art history class. It was the understanding that every color we choose for a brand, a garment or a fashion stall carries a message toward whoever will see it. That responsibility is the foundation of all good design."',

    footer_copy: '© 2026 Color Theory and Meaning · Universidad ECCI · Fashion Event · Bogotá, Colombia · Jean Carlos Alejandro Araujo Pacheco',
  }
};

/* ─── Estado actual de idioma ─── */
let lang = 'es';

function setLang(l) {
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('activo', b.dataset.lang === l));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (i18n[l][k] !== undefined) el.textContent = i18n[l][k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.getAttribute('data-i18n-ph');
    if (i18n[l][k] !== undefined) el.placeholder = i18n[l][k];
  });
  localStorage.setItem('ecci-lang', l);
}

/* ─── Tabs bilingüe dentro de conferencias ─── */
function initTabs() {
  document.querySelectorAll('.content-tabs').forEach(group => {
    group.querySelectorAll('.content-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.target;
        group.querySelectorAll('.content-tab').forEach(t => t.classList.remove('activo'));
        tab.classList.add('activo');
        const scope = tab.closest('.conf-body') || tab.closest('.conclusion-tabs-scope') || tab.closest('section');
        scope.querySelectorAll('.lang-content').forEach(c => {
          c.classList.toggle('activo', c.dataset.lang === target);
        });
      });
    });
  });
}

/* ─── Menú hamburguesa ─── */
function toggleMenu() {
  const d = document.getElementById('navDrawer');
  const h = document.getElementById('hamburger');
  d.classList.toggle('abierto');
  h.classList.toggle('open');
}
function cerrarMenu() {
  document.getElementById('navDrawer').classList.remove('abierto');
  document.getElementById('hamburger').classList.remove('open');
}

/* ─── Lightbox ─── */
const lb = { imgs: [], idx: 0 };

function buildLightbox() {
  lb.imgs = [];
  document.querySelectorAll('[data-lb-src]').forEach((el, i) => {
    lb.imgs.push({ src: el.dataset.lbSrc, cap: el.dataset.lbCap || '' });
    el._lbIdx = i;
  });
}

function abrirLb(idx) {
  lb.idx = idx;
  document.getElementById('lightbox').classList.add('abierto');
  document.body.style.overflow = 'hidden';
  renderLb();
}
function renderLb() {
  const d = lb.imgs[lb.idx];
  if (!d) return;
  document.getElementById('lb-img').src = d.src;
  document.getElementById('lb-cap').textContent = d.cap;
}
function cerrarLb() {
  document.getElementById('lightbox').classList.remove('abierto');
  document.body.style.overflow = '';
}
function lbNext() { lb.idx = (lb.idx + 1) % lb.imgs.length; renderLb(); }
function lbPrev() { lb.idx = (lb.idx - 1 + lb.imgs.length) % lb.imgs.length; renderLb(); }

document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('abierto')) return;
  if (e.key === 'Escape') cerrarLb();
  if (e.key === 'ArrowRight') lbNext();
  if (e.key === 'ArrowLeft')  lbPrev();
});

/* ─── Filtro glosario ─── */
function filtrarGlos() {
  const q = document.getElementById('glossSearch').value.toLowerCase().trim();
  document.querySelectorAll('.gloss-row').forEach(r => {
    r.style.display = r.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
}

/* ─── Scroll observer ─── */
function initObserver() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('visible');
      e.target.querySelectorAll('.topic-card,.about-card,.ethics-card,.g-item')
        .forEach((c, i) => { c.style.transitionDelay = `${i * 0.06}s`; c.classList.add('visible'); });
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.observe').forEach(el => obs.observe(el));
}

/* ─── Header scroll ─── */
function initHeader() {
  const h = document.querySelector('.site-header');
  window.addEventListener('scroll', () => h.classList.toggle('scrolled', scrollY > 40), { passive: true });
}

/* ─── Barra de progreso ─── */
function initProgress() {
  const bar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const s = document.documentElement.scrollTop;
    const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    bar.style.width = `${(s / h) * 100}%`;
  }, { passive: true });
}

/* ─── Botón volver arriba ─── */
function initBackTop() {
  const btn = document.getElementById('back-top');
  window.addEventListener('scroll', () => btn.classList.toggle('visible', scrollY > 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─── Nav activo al scrollear ─── */
function initActiveNav() {
  const secs = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a, .nav-drawer a');
  window.addEventListener('scroll', () => {
    let cur = '';
    secs.forEach(s => { if (scrollY >= s.offsetTop - 120) cur = s.id; });
    links.forEach(a => a.classList.toggle('activo', a.getAttribute('href') === `#${cur}`));
  }, { passive: true });
}

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('ecci-lang');
  setLang(saved || 'es');
  initTabs();
  initObserver();
  initHeader();
  initProgress();
  initBackTop();
  initActiveNav();
  buildLightbox();

  document.querySelectorAll('[data-lb-src]').forEach(el => {
    if (!el.hasAttribute('onclick')) {
      el.addEventListener('click', () => abrirLb(el._lbIdx));
    }
  });

  document.querySelectorAll('.nav-drawer a').forEach(a => a.addEventListener('click', cerrarMenu));
  document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target === e.currentTarget) cerrarLb();
  });
});