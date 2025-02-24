export default {
  global: {
    // eslint-disable-next-line prettier/prettier
    Name: 'Buenas prácticas agrícolas y competitividad productiva del cultivo del plátano',
    // eslint-disable-next-line prettier/prettier
    Description: 'A nivel internacional el comercio del plátano es muy amplio puesto que existen muchos países que compran este producto en grandes cantidades, por lo tanto, para todos los productores de plátano del país es una gran oportunidad de negocio acceder a los mercados internacionales en donde se obtienen buenos márgenes de utilidad que le permitirán la expansión, crecimiento y desarrollo a nivel empresarial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-contenidos.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Manejo del cultivo.',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Control de malezas.',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Plagas y enfermedades.',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cosecha y poscosecha.',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Cosecha.',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Poscosecha.',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Prácticas culturales en el cultivo del plátano.',
      referencia: 'Ecosistema recursos SENA.',
      tipo: 'Video en YouTube. ',
      link: 'https://www.youtube.com/watch?v=GAYtPgfl5vs',
    },
  ],
  glosario: [
    {
      termino: 'Agentes desinfectantes:',
      significado:
        'son los compuestos químicos que se utilizan para eliminar patógenos; por ejemplo, el cloro.',
    },
    {
      termino: 'Agentes limpiadores:',
      significado:
        'son los compuestos como jabones y detergentes que se utilizan para arrasar la suciedad.',
    },
    {
      termino: 'Contaminación',
      significado:
        'la contaminación se puede dar por agentes físicos, químicos y biológicos que son introducidos a un medio de manera natural o en algunos casos son ocasionados por el hombre.',
    },
    {
      termino: 'Contaminante',
      significado:
        'puede ser cualquier sustancia o agente que se añade a un producto y le causa pérdidas de inocuidad.',
    },
    {
      termino: 'Desinfección',
      significado:
        'eliminación de todos los patógenos por medio de agentes químicos y métodos físicos.',
    },
    {
      termino: 'Higiene de los alimentos',
      significado:
        'mecanismos que garantizan la inocuidad en toda la cadena productiva.',
    },
    {
      termino: 'Inocuidad de los alimentos',
      significado:
        'es la garantía de que un alimento se encuentra libre de agentes contaminantes que pueden causar daño a la salud de los consumidores.',
    },
    {
      termino: 'Instalaciones',
      significado:
        'son las locaciones o infraestructuras en la cuales se manipulan materias primas o productos terminados.',
    },
    {
      termino: 'Limpieza',
      significado:
        'eliminación de suciedad, tierra, grasas, desechos de alimentos, entre otros.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alarcón Restrepo, J. J., & Jiménez Neira, Y. (2012). Manejo fitosanitario del cultivo del plátano (Musa spp.): Medidas para la temporada invernal. Instituto Colombiano Agropecuario (ICA). ',
      link:
        'https://www.fao.org/fileadmin/templates/banana/documents/Docs_Resources_2015/TR4/cartilla-platano-ICA-final-BAJA.pdf',
    },
    {
      referencia:
        'Buenas Prácticas Agrícolas para frutas, hierbas aromáticas culinarias y hortalizas frescas (NTC 5400). (2005, 27 de julio). Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC), 2005, 02 de agosto.',
      link: '',
    },
    {
      referencia:
        'Decreto 475. (1998, 10 de marzo). Diario Oficial, 43259, 1998, 16 de marzo.',
      link: '',
    },
    {
      referencia:
        'FAO. (2008). Buenas Prácticas Agrícolas en la Producción de Tomate bajo condiciones protegidas. ',
      link:
        'BUENAS PRÁCTICAS AGRÍCOLAS –BPA EN LA PRODUCCIÓN DE TOMATE BAJO CONDICIONES PROTEGIDAS (fao.org)',
    },
    {
      referencia: 'Freepik.es. (2024). ',
      link:
        'Flor púrpura de la margarita del osteospermum | Foto Gratis (freepik.es)',
    },
    {
      referencia: 'Freepik.es. (2024). ',
      link:
        'Pareja adulta en un jardín de verano. Tema de Coromavirus. Personas con máscara médica. Senior guapo con una camisa blanca. | Foto Gratis (freepik.es)',
    },
    {
      referencia: 'Freepik.es (2024). ',
      link:
        'Dos granjeros con máscara de protección con tableta en el campo Tecnología agrícola modernaAgricultura inteligente | Foto Premium (freepik.es)',
    },
    {
      referencia:
        'Gobernación del Tolima, Universidad de Ibagué, Universidad del Tolima, & Sena Regional Tolima. (2017). Buenas prácticas poscosecha de plátano (Musa paradisiaca L.). ISBN digital: 978-958-754-248-6. ',
      link:
        'https://es.studenta.com/content/135651667/protocolo-poscosecha-platano',
    },
    {
      referencia:
        'Moreno, J., Candanoza, J. y Olarte, F. (2009). Buenas Prácticas Agrícolas en el de cultivo de plátano exportación en la región de Urabá. Medellín, Colombia: Comunicaciones Augura.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
