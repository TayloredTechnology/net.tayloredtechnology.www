// JS Goes here - ES6 supported
const lazyLoad = require("vanilla-lazyload");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("/sw.js").then(function(registration) {
      // Registration was successful
      console.log("ServiceWorker registration successful with scope: ", registration.scope);
    }, function(err) {
      // registration failed :(
      console.error("ServiceWorker registration failed: ", err);
    });
  });
}

const myLazyLoad = new lazyLoad();

function toggleDetails(event) {
  const el = (event.target.tagName === "svg") ? event.target : event.target.parentElement;
  const target = el.dataset.target;
  document.getElementById(target).classList.toggle("open");
}
