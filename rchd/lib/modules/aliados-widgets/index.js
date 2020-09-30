module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Aliados',
  contextualOnly: true,
  addFields: [
    {
      name: 'areaLeft',
      type: 'area',
      label: 'Left Area',
    },
    {
      name: 'areaRight',
      type: 'area',
      label: 'Right Area',
    }
  ]
};