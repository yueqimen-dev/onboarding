(() => {
  const pages = [
    "1.5_Goal_Selection_V2.html",
    "1.6_LoadingPage.html",
    "2.4_Quick_Check.html",
    "3.0_Subscription_Plans.html"
  ];

  const style = document.createElement("style");
  style.textContent = `
  .wf-nav{position:sticky;top:0;z-index:999;background:#0f172a;color:#e2e8f0;border-bottom:1px solid #0b1220}
  .wf-nav-inner{max-width:1200px;margin:0 auto;display:flex;gap:12px;align-items:center;padding:10px 16px}
  .wf-nav a{color:#e2e8f0;text-decoration:none;padding:6px 10px;border-radius:6px;border:1px solid transparent}
  .wf-nav a:hover{border-color:#334155}
  .wf-nav .spacer{flex:1}
  .wf-badge{font-size:12px;color:#94a3b8;margin-left:8px}
  `;
  document.head.appendChild(style);

  const current = location.pathname.split("/").pop() || "index.html";
  const idx = pages.indexOf(current);
  const prev = idx > 0 ? pages[idx - 1] : null;
  const next = idx >= 0 && idx < pages.length - 1 ? pages[idx + 1] : null;

  const bar = document.createElement("div");
  bar.className = "wf-nav";
  bar.innerHTML = `
    <div class="wf-nav-inner">
      <a href="index.html">导览</a>
      ${prev ? `<a href="${prev}">上一页</a>` : ""}
      ${next ? `<a href="${next}">下一页</a>` : ""}
      <span class="spacer"></span>
      <span class="wf-badge">${current}</span>
    </div>
  `;
  document.body.prepend(bar);
})();
