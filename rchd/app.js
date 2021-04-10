var path = require("path");

var apos = require("apostrophe")({
  shortName: "rchd",

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {

    'apostrophe-db': {
      // uri: 'mongodb://localhost:27017/rchd'
      // There is legacy support for host, port, name, user and password options,
      // but this is not necessary. They can all go in the uri option like this:
      uri: 'mongodb://rchd:R3d3$Hum4n4$@localhost:27017/rchd'
    }, 
    
    "apostrophe-forms": {
      optionLabelPosition: "last",
      classPrefix: "my-form",
    },
    "apostrophe-forms-widgets": {
      disableBaseStyles: true,
    },
    "apostrophe-forms-text-field-widgets": {},
    "apostrophe-forms-textarea-field-widgets": {},
    "apostrophe-forms-file-field-widgets": {},
    "apostrophe-forms-select-field-widgets": {},
    "apostrophe-forms-radio-field-widgets": {},
    "apostrophe-forms-checkboxes-field-widgets": {},
    "apostrophe-forms-boolean-field-widgets": {},
    "apostrophe-forms-conditional-widgets": {},
    "apostrophe-email": {},
    "apostrophe-permissions": {
      construct: function (self, options) {
        self.addPublic(["edit-attachment"]);
      },
    },

    "apostrophe-templates": {
      viewsFolderFallback: path.join(__dirname, "views"),
    },
    "header-widgets": {},
    "link-widgets": {},
    "red-social-widgets": {},
    "boton-widgets": {},
    "footerPagina-widgets": {},
    "two-column-widgets": {},
    convocatorias: {},
    "convocatorias-widgets": {
      extend: "apostrophe-pieces-widgets",
    },
    "twitter-widgets": {},
    miembros: {},
    "miembros-pages": {
      extend: "apostrophe-pieces-pages",
    },
    "comite-miembros": {},
    "comite-miembros-widgets": {
      extend: "apostrophe-pieces-widgets"
    },
    actualizacions: {},
    "actualizacions-widgets": {
      extend: "apostrophe-pieces-widgets",
    },
    "menuHome-widgets": {},
    "aliados": {},
    "aliados-widgets": {
      extend: 'apostrophe-pieces-widgets'
    },
    "projects": {},
    'projects-pages': {
      extend: 'apostrophe-pieces-pages'
    }
  },
  "apostrophe-pages": {
    filters: {
      // Grab our ancestor pages, with two levels of subpages
      ancestors: {
        children: {
          depth: 2,
        },
      },
      // We usually want children of the current page, too
      children: true,
    },
    // other apostrophe-pages options like `types` ...
  }
});
 