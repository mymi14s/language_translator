// dom ready
document.addEventListener("DOMContentLoaded", (event)=>{
  // navbar and anchor element
  let navbar = document.querySelector("ul.navbar-nav");
  let anc = document.createElement('li');
  anc.id="ytWidget";
  anc.className="nav-link";
  navbar.append(anc);
  // script tag
  let scrtag = document.createElement('script');
  scrtag.src = "https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=dark&autoMode=true"
  scrtag.type = "text/javascript";
  // append script tage to page
  document.head.appendChild(scrtag);

})
