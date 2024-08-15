const browserSync = require('browser-sync').create();

browserSync.init({
  proxy: "http://localhost:3000", // Your app URL
  port: 4999, // BrowserSync port
});
