module.exports = {
    extend: 'apostrophe-pieces-widgets',
    filters: {
      projection: {
        title: 1,
        photo: 1,
        // Not a real database property, but including it in the projection
        // fetches everything needed to populate it
        _url: 1,
      }
    }
  }