const browserSync = require('browser-sync').create();

browserSync.init({
  proxy: "https://vpnmodel.onrender.com", // Your app URL
  port: 4999, // BrowserSync port
});
