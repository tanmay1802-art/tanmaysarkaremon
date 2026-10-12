/* Google AdSense switch.
   Leave ADSENSE_CLIENT empty and NO ads load (the page looks exactly the same).
   After Google approves the site, paste your publisher ID here, e.g. "ca-pub-1234567890123456".
   Optional: paste ad unit IDs (from AdSense > Ads > By ad unit) for fixed positions.
   If you only use Auto ads, leave the slot IDs empty. */
(function () {
  var ADSENSE_CLIENT = "";
  var SLOTS = { middle: "", bottom: "" };

  if (!ADSENSE_CLIENT) return;
  var meta = document.createElement("meta");
  meta.name = "google-adsense-account"; meta.content = ADSENSE_CLIENT;
  document.head.appendChild(meta);
  var s = document.createElement("script");
  s.async = true; s.crossOrigin = "anonymous";
  s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(ADSENSE_CLIENT);
  document.head.appendChild(s);
  document.querySelectorAll(".ad-slot").forEach(function (box) {
    var id = SLOTS[box.getAttribute("data-ad-position")];
    if (!id) return;
    var ins = document.createElement("ins");
    ins.className = "adsbygoogle"; ins.style.display = "block";
    ins.setAttribute("data-ad-client", ADSENSE_CLIENT);
    ins.setAttribute("data-ad-slot", id);
    ins.setAttribute("data-ad-format", "auto");
    ins.setAttribute("data-full-width-responsive", "true");
    box.appendChild(ins); box.classList.add("is-live");
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
  });
})();
