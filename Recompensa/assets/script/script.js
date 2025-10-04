(function(){
  const PAGE = document.body.dataset.page || "";
  const USER_KEY = "swiftUser";
  const user = JSON.parse(localStorage.getItem(USER_KEY) || "null");

  
  document.querySelectorAll("[data-nav]").forEach(a=>{
    const href = a.getAttribute("href");
    const file = location.pathname.split("/").pop() || "index.html";
    if (href === file) { a.classList.add("active"); a.setAttribute("aria-current","page"); }
  });

  
  document.querySelectorAll("[data-logout]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      localStorage.removeItem(USER_KEY);
      location.href = "login.html";
    });
  });

  
  if (PAGE && PAGE !== "login" && !user) {
    location.replace("login.html");
    return;
  }

  
  if (user && PAGE && PAGE !== "login") {
    const target = document.querySelector("[data-welcome-name]");
    if (target) target.textContent = user.name || "Usuário";
  }

  
  if (PAGE === "login") {
    const form = document.getElementById("loginForm");
    const msg  = document.getElementById("loginMsg");
    const btn  = document.getElementById("loginBtn");

    form?.addEventListener("submit", (ev)=>{
      ev.preventDefault();
      msg.textContent = "";
      const email = (document.getElementById("email")?.value || "").trim();
      const senha = (document.getElementById("senha")?.value || "").trim();

      if (!email || !senha) {
        msg.textContent = "Preencha e-mail e senha.";
        msg.classList.remove("hidden");
        return;
      }

      
      const name = email.split("@")[0] || "Usuário";
      localStorage.setItem(USER_KEY, JSON.stringify({ email, name }));

      btn.disabled = true; btn.innerText = "Entrando…";
      setTimeout(()=> location.href = "inicio.html", 400); 
    });
  }
})();
