// tandai menu aktif otomatis
(function(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".menu a").forEach(a=>{
    const href = (a.getAttribute("href")||"").toLowerCase();
    if(href === path) a.classList.add("active");
  });

  // tombol scroll ke section (kalau ada)
  document.querySelectorAll("[data-scroll]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const id = btn.getAttribute("data-scroll");
      const el = document.querySelector(id);
      if(el) el.scrollIntoView({behavior:"smooth", block:"start"});
    });
  });
})();
