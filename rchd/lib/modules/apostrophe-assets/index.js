// This configures the apostrophe-assets module to push a 'site.less'
// stylesheet by default, and to use jQuery 3.x

module.exports = {
  jQuery: 3,
  stylesheets: [
    {
      name: "site",
    },
  ],
  scripts: [
    { name: "site" },
    { name: "modules/nav" },
    { name: "modules/miembro" },
    { name: "modules/busqueda" },
    { name: "p5Gif/p5" },
    { name: "p5Gif/sketch" },
  ],
};
