module.exports = {
  name: 'project',
  extend: 'apostrophe-pieces',
  label: 'Proyecto',
  pluralLabel: 'Proyectos',
  addFields: [
    {
      name: 'title',
      label: 'Full Name',
      type: 'string',
      required: true,
      contextual: true
    },
    {
      name: 'projectName',
      label: 'Nombre del proyecto',
      type: 'string',
      required: false
    },
    {
      name: '_miembros',
      label: 'Autores',
      type: 'joinByArray',
      withType: 'miembro'
    },
    {
      name: 'projectUrl',
      label: 'Link contacto',
      type: 'string',
      required: false
    },
    {
      /* name: 'projectImage',
      label: 'Imagen del proyecto',
      type: 'attachment',
      group: 'images',
      required: true */
      name: 'projectImage',
      label: 'Imagen del proyecto',
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
      name: 'projectDescription',
      label: 'Descripción',
      type: 'string',
      required: true
    }
  ],
  arrangeFields: [
    {
      name: 'project',
      label: 'Proyecto',
      fields: [ 'projectName', 'slug', '_miembros', 'projectUrl', 'projectImage', 'projectDescription' ]
    },
    {
      name: 'admin',
      label: 'Administrativo',
      fields: ['published', 'tags' ]
    }
  ],
  construct: function(self, options) {
    self.beforeSave = function(req, piece, options, callback) {
      piece.title = piece.projectName;
      return callback();
    }
  }
};