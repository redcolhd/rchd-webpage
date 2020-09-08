var path = require("path");

var apos = require("apostrophe")({
  shortName: "rchd",

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
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
      extend: "apostrophe-pieces-pages"
    },
    actualizacions: {},
    "actualizacions-widgets": {
      extend: "apostrophe-pieces-widgets"
    }
  },
});
