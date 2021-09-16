module.exports = {
  name: 'miembro',
  extend: 'apostrophe-pieces',
  label: 'Miembro',
  pluralLabel: 'Miembros',
  addFields: [
    {
      name: 'title',
      label: 'Full Name',
      type: 'string',
      required: true,
      contextual: true
    },
    {
      name: 'name',
      label: 'Nombre y apellidos',
      type: 'string',
      required: true
    },
    {
      name: 'email',
      label: 'Correo electrónico',
      type: 'string',
      required: true
    },
    {
      name: 'userId',
      label: 'Documento de identidad',
      type: 'string',
      required: true
    },
    {
      name: 'phone',
      label: 'Teléfono',
      type: 'string',
      required: false
    },
    {
      name: 'photo',
      label: 'Foto',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        limit: 1,
        minSize: [200, 200],
        aspectRatio: [1, 1]
      },
      required: true
    },
    {
      name: 'education',
      label: 'Titulo profesional o grado académico',
      type: 'string',
      required: true
    },
    {
      name: 'socialMedia',
      label: '¿Algún link a redes sociales o académicas?',
      type: 'string',
      required: false
    },
    {
      name: 'institutionalMembership',
      label: 'Afiliación',
      type: 'string',
      required: true
    },
    {
      name: 'fieldsOfInterest',
      label: 'Campos de interés en las Humanidades Digitales',
      required: true,
      type: 'checkboxes',
      choices: [
        {
          label: 'Teoría e Historia de las Humanidades Digitales',
          value: 'Teoría e Historia de las Humanidades Digitales'
        },
        {
          label: 'Metodologías digitales para estudios literarios, lingüísticos, análisis de texto, entre otros',
          value: 'Metodologías digitales para estudios literarios, lingüísticos, análisis de texto, entre otros'
        },
        {
          label: 'Metodologías digitales para estudios arqueológicos o arquitectónicos',
          value: 'Metodologías digitales para estudios arqueológicos o arquitectónicos'
        },
        {
          label: 'Historia digital del arte',
          value: 'Historia digital del arte'
        },
        {
          label: 'Historia Digital',
          value: 'Historia Digital'
        },
        {
          label: 'Sistemas de información geográfica',
          value: 'Sistemas de información geográfica'
        },
        {
          label: 'Aproximaciones digitales al arte, literatura, cine, música, entre otros',
          value: 'Aproximaciones digitales al arte, literatura, cine, música, entre otros'
        },
        {
          label: 'Videojuegos',
          value: 'Videojuegos'
        },
        {
          label: 'Cultura Hacker',
          value: 'Cultura Hacker'
        },
        {
          label: 'Patrimonio Cultural Digital',
          value: 'Patrimonio Cultural Digital'
        },
        {
          label: 'Bibliotecas, museo y archivos digitales',
          value: 'Bibliotecas, museo y archivos digitales'
        },
        {
          label: 'Edición, publicación y diseño digital o colaborativo',
          value: 'Edición, publicación y diseño digital o colaborativo'
        },
        {
          label: 'Big Data e inteligencia artificial',
          value: 'Big Data e inteligencia artificial'
        },
        {
          label: 'Estudios de medios y periodismo digital',
          value: 'Estudios de medios y periodismo digital'
        },
        {
          label: 'Activismo Digital',
          value: 'Activismo Digital'
        },
        {
          label: 'Narrativas Digitales',
          value: 'Narrativas Digitales'
        },
        {
          label: 'Realidad virtual y aumentada',
          value: 'Realidad virtual y aumentada'
        }
      ]
    },
    {
      name: 'fieldsOfKnowledge',
      label: 'Campos de práctica en las Humanidades Digitales',
      required: true,
      type: 'checkboxes',
      choices: [
        {
          label: 'Teoría e Historia de las Humanidades Digitales',
          value: 'Teoría e Historia de las Humanidades Digitales'
        },
        {
          label: 'Metodologías digitales para estudios literarios, lingüísticos, análisis de texto, entre otros',
          value: 'Metodologías digitales para estudios literarios, lingüísticos, análisis de texto, entre otros'
        },
        {
          label: 'Metodologías digitales para estudios arqueológicos o arquitectónicos',
          value: 'Metodologías digitales para estudios arqueológicos o arquitectónicos'
        },
        {
          label: 'Historia digital del arte',
          value: 'Historia digital del arte'
        },
        {
          label: 'Historia Digital',
          value: 'Historia Digital'
        },
        {
          label: 'Sistemas de información geográfica',
          value: 'Sistemas de información geográfica'
        },
        {
          label: 'Aproximaciones digitales al arte, literatura, cine, música, entre otros',
          value: 'Aproximaciones digitales al arte, literatura, cine, música, entre otros'
        },
        {
          label: 'Videojuegos',
          value: 'Videojuegos'
        },
        {
          label: 'Cultura Hacker',
          value: 'Cultura Hacker'
        },
        {
          label: 'Patrimonio Cultural Digital',
          value: 'Patrimonio Cultural Digital'
        },
        {
          label: 'Bibliotecas, museo y archivos digitales',
          value: 'Bibliotecas, museo y archivos digitales'
        },
        {
          label: 'Edición, publicación y diseño digital o colaborativo',
          value: 'Edición, publicación y diseño digital o colaborativo'
        },
        {
          label: 'Big Data e inteligencia artificial',
          value: 'Big Data e inteligencia artificial'
        },
        {
          label: 'Estudios de medios y periodismo digital',
          value: 'Estudios de medios y periodismo digital'
        },
        {
          label: 'Activismo Digital',
          value: 'Activismo Digital'
        },
        {
          label: 'Narrativas Digitales',
          value: 'Narrativas Digitales'
        },
        {
          label: 'Realidad virtual y aumentada',
          value: 'Realidad virtual y aumentada'
        }
      ]
    },
    {
      name: 'lookingFor',
      label: '¿Qué buscas en la RCHD?',
      type: 'string',
      required: true
    },
    {
      name: 'collaborateIn',
      label: '¿En qué podrías colaborar?',
      required: true,
      type: 'checkboxes',
      choices: [
        {
          label: 'Diseño web',
          value: 'Diseño web'
        },
        {
          label: 'Mantenimiento web',
          value: 'Mantenimiento web'
        },
        {
          label: 'Blog',
          value: 'Blog'
        },
        {
          label: 'Evaluación de pares',
          value: 'Evaluación de pares'
        },
        {
          label: 'Contenidos en Redes Sociales',
          value: 'Contenidos en Redes Sociales'
        }
      ]
    },
    {
      name: '_projects',
      label: 'Proyectos',
      type: 'joinByArray',
      withType: 'project'
    }
  ],
  arrangeFields: [
    {
      name: 'contact',
      label: 'Contacto',
      fields: ['name', 'slug', 'email', 'userId', 'phone', 'photo', 'education', 'socialMedia', 'institutionalMembership']
    },
    {
      name: 'interests',
      label: 'Intereses',
      fields: ['fieldsOfInterest', 'fieldsOfKnowledge', 'lookingFor', 'collaborateIn']
    },
    {
      name: 'project',
      label: 'Proyecto',
      fields: ['_projects']
    },
    {
      name: 'admin',
      label: 'Administrativo',
      fields: ['published', 'centralCommittee', 'tags']
    }
  ],
  construct: function (self, options) {
    self.beforeSave = function (req, piece, options, callback) {
      piece.title = piece.name;
      /* piece.slug = slugify(piece.name); */
      return callback();
    }
  }
};