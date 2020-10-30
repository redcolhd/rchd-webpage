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
        minSize: [ 200, 200 ],
        aspectRatio: [ 1, 1 ]
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
      label: '¿Algún link a redes sociales o académicas',
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
          label: 'Esta es una prueba mas larga',
          value: 'Esta es una prueba mas larga'
        },
        {
          label: 'Prueba2',
          value: 'prueba2'
        },
        {
          label: 'Prueba3',
          value: 'prueba3'
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
          label: 'Esta es una prueba mas larga',
          value: 'Esta es una prueba mas larga'
        },
        {
          label: 'Prueba2',
          value: 'prueba2'
        },
        {
          label: 'Prueba3',
          value: 'prueba3'
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
          label: 'Prueba',
          value: 'prueba'
        },
        {
          label: 'Prueba2',
          value: 'prueba2'
        },
        {
          label: 'Prueba3',
          value: 'prueba3'
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
      fields: [ 'name', 'slug', 'email', 'userId', 'phone', 'photo', 'education', 'socialMedia', 'institutionalMembership' ]
    },
    {
      name: 'interests',
      label: 'Intereses',
      fields: ['fieldsOfInterest', 'fieldsOfKnowledge', 'lookingFor', 'collaborateIn'] 
    },
    {
      name: 'project',
      label: 'Proyecto',
      fields: [ '_projects' ]
    },
    {
      name: 'admin',
      label: 'Administrativo',
      fields: ['published', 'centralCommittee', 'tags' ]
    }
  ],
  construct: function(self, options) {
    self.beforeSave = function(req, piece, options, callback) {
      piece.title = piece.name;
      /* piece.slug = slugify(piece.name); */
      return callback();
    }
  }
};