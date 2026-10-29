(function () {
  var el = document.getElementById("visit-count");
  var wrap = document.querySelector(".visit-count");
  if (!el || !wrap) return;

  fetch("https://hitscounter.dev/api/hit?url=https://wangdelp.github.io&output=json")
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var n = data && data.total_hits;
      if (typeof n === "number") {
        el.textContent = n.toLocaleString();
        wrap.hidden = false;
      }
    })
    .catch(function () {});
})();
