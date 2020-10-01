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
      name: 'projectAuthors',
      label: 'Autores',
      type: 'string',
      required: true
    },
    {
      name: 'projectUrl',
      label: 'Link contacto',
      type: 'string',
      required: false
    },
    {
      name: 'projectImage',
      label: 'Imagen del proyecto',
      type: 'attachment',
      group: 'images',
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
      fields: [ 'projectName', 'projectAuthors', 'projectUrl', 'projectImage', 'projectDescription' ]
    },
    {
      name: 'admin',
      label: 'Administrativo',
      fields: [ 'slug', 'published', 'tags' ]
    }
  ],
  construct: function(self, options) {
    self.beforeSave = function(req, piece, options, callback) {
      piece.title = piece.name;
      return callback();
    }
  }
};