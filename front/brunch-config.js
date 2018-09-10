exports.config = {
  files: {
    stylesheets: {
      joinTo: 'css/app.css',
      order: {
        before: 'app/styles/style.css',
      },
    },
    javascripts: {
      joinTo: 'js/app.js',
    },
  },
  plugins: {
    postcss: {
      processors: [require('autoprefixer')],
    },
  },
};
