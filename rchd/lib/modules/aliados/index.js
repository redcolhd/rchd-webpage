module.exports = {
  name: 'aliado',
  extend: 'apostrophe-pieces',
  label: 'Aliado',
  pluralLabel: 'Aliados',
  addFields: [
    {
      name: 'title',
      label: 'Nombre del aliado',
      type: 'string',
      required: true
    },
    {
      name: 'photo',
      label: 'Imagen del aliado',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        limit: 1,
        minSize: [ 200, 200 ],
        aspectRatio: [ 1, 1 ]
      },
      required: true
    }
  ]
};