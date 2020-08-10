var path = require("path");

var apos = require("apostrophe")({
  shortName: "rchd",

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
    "apostrophe-forms": {
      // Best practice: set to first or last so that inputs are nested in labels
      // and easier to style
      optionLabelPosition: "last",
    },
    "apostrophe-forms-widgets": {},
    // Enable only the field widgets that your application needs to make it
    // easier for application/website managers.
    "apostrophe-forms-text-field-widgets": {},
    "apostrophe-forms-textarea-field-widgets": {},
    "apostrophe-forms-file-field-widgets": {},
    "apostrophe-forms-select-field-widgets": {},
    "apostrophe-forms-radio-field-widgets": {},
    "apostrophe-forms-checkboxes-field-widgets": {},
    "apostrophe-forms-boolean-field-widgets": {},
    "apostrophe-forms-conditional-widgets": {},
    // END of field widgets
    "apostrophe-email": {
      // See the email tutorial for required configuration.
      // https://docs.apostrophecms.org/apostrophe/tutorials/howtos/email
    },
    "apostrophe-permissions": {
      construct: function (self, options) {
        // Required if you want file fields to work on public pages.
        self.addPublic(["edit-attachment"]);
      },
    },
    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.

    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    "apostrophe-templates": {
      viewsFolderFallback: path.join(__dirname, "views"),
    },
    "header-widgets": {},
    "red-social-widgets": {},
    "boton-widgets": {},
    "footerPagina-widgets": {},
  },
});
