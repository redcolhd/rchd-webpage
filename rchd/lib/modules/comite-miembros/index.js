module.exports = {
  name: 'comite-miembro',
  extend: 'apostrophe-pieces',
  label: 'Comité Base',
  pluralLabel: 'Comite Miembros',
  addFields: [
  {
    name: 'title',
    label: 'Full Name',
    type: 'string',
    required: true,
    contextual: true
  },
  {
    name: 'slug',
    label: 'Slug',
    type: 'string',
    contextual: true
  },
  {
    name: 'name',
    label: 'Nombre y apellidos',
    type: 'string',
    required: true
  },
  {
    name: '_miembro',
    label: 'Miembro',
    type: 'joinByOne',
    withType: 'miembro'
  }
],
arrangeFields: [
  {
    name: 'info',
    label: 'Información',
    fields: [ 'name', '_miembro', 'published', 'tags' ]
  }
],
construct: function(self, options) {
  self.beforeSave = function(req, piece, options, callback) {
    piece.title = piece.name;
    return callback();
  }
}
};