module.exports = {
    // The standard list copied from the module, plus sup and sub
    sanitizeHtml: {
      // allowedTags: [...],
      allowedAttributes: {
        'div': ['class'],
        'li': ['class'],
        // Include the default setting as well, or else links will break
        'a': [ 'href', 'name', 'target' ]
      },
      // ...,
    }
  };