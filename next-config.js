module.exports = {
  exportTrailingSlash: true,
  exportPath: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
  }
}
