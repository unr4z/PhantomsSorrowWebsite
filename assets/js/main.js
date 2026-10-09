/* =========================================================
   PHANTOM'S SORROW — content + interactions
   Edit everything in the `data` object below.
   ========================================================= */
const data = {
  lore: [
    "Long ago, during the early reign of Avalon, a swordsman struck fear into the hearts of criminals across the land. Clad in the purest green, he wielded a wide, curved sword of unusual design, capable of ripping through flesh and crushing bone. Having faced countless fierce warriors and ruthless criminals, he earned a fearsome reputation and would later become known as the {Blade of the Heavens}.",
    "~Though this would not last long.",
    "When the lord of a nearby town requested his assistance in dismantling an underground crime circle, things took a much darker turn. The swordsman was deceived and led into a small alley, where he was ambushed. Unable to draw his blade, he was knocked to the ground and beaten to the brink of death before being thrown into a pre-dug, unmarked grave. The lord broke the man's sword, tossing what remained over his body as a final insult.",
    "As the light faded, the swordsman sensed the presence of something… or rather, someone. As he prepared himself to die, a pair of glowing golden eyes stared back at him. A voice echoed through his mind.",
    "~\"Do you believe this to be the end?\"",
    "~It continued.",
    "~\"Let me rephrase… Do you wish for this to be your end?\"",
    "~\"No…\" he whimpered with his final breath.",
    "~As he reached into the abyss…",
    "~…the abyss reached back.",
    "~His heart stopped.",
    "~His body did not.",
    "As those responsible returned to their families, a deep fog engulfed the village. The lord awoke to screams echoing through the village streets. As he ran past the houses, he saw piles… piles of corpses. Men, women, children, cattle—no one had been spared. Atop one of the largest piles sat a lone figure. As the lord stared at it, a pair of glowing golden eyes stared back.",
    "~The lord froze before finally gathering the courage to ask,",
    "~\"D-Did you do this…?\"",
    "~\"No,\" the figure replied calmly.",
    "~\"You did.\"",
    "A spine-like tail extended from the figure, pointing toward the graveyard where the swordsman had been buried. The lord immediately understood what had happened and fled the town in terror, running past the graveyard. He did not get far. Segments of a ghostly green blade, connected by what appeared to be the souls of the town's people, shot past him before curving back around his body. They wrapped around his neck and dragged him screaming back into the fog.",
    "Days later, a group of wandering traders reported a horrifying discovery. A town consumed by the stench of death. Piles of bodies scattered throughout its streets. And at its center… A tree, constructed from the limbs of the townsfolk. Hanging above an empty grave by the neck was a man wearing the robes and emblem of a lord.",
  ],

  notes: [
    "Blade wreathed in spectral green flame that never quite settles.",
    "Whip-style moveset — the sword arcs and coils mid-swing.",
  ],

  owner: [
    { name: "Sammy", handle: "@Dreadrite", role: "Owner", avatar: "assets/img/sammy.png", profile: "https://www.roblox.com/users/75729695/profile" },
  ],
  // set awaiting:true for the gold "Awaiting" pill. avatar "" shows a lettered placeholder.
  contributors: [
    { name: "Deth",    handle: "@Detheseus",     role: "Co-Owner", avatar: "assets/img/deth.png",    profile: "https://www.roblox.com/users/769847524/profile" },
    { name: "Saffron", handle: "@8holu",         role: "Ideas",    avatar: "assets/img/saffron.png", profile: "https://www.roblox.com/users/1166778655/profile" },
    { name: "Divine",  handle: "@DivineGaming15", role: "VFX + Website", avatar: "assets/img/divine.png", profile: "https://www.roblox.com/users/2523725933/profile" },
    { name: "Hyper",   handle: "@hyperacy",       role: "SFX",      avatar: "assets/img/hyper.png",   profile: "https://www.roblox.com/users/2498431058/profile" },
  ],
  tempHolders: [
    { name: "displayname", handle: "@username", role: "reason", avatar: "" },
    { name: "displayname", handle: "@username", role: "reason", avatar: "" },
    { name: "displayname", handle: "@username", role: "reason", avatar: "" },
    { name: "displayname", handle: "@username", role: "reason", avatar: "" },
  ],
  blacklist: [
    { name: "vko", handle: "@iive1ko", role: "Big Nerd", avatar: "assets/img/vko.png", profile: "https://www.roblox.com/users/5247801134/profile" },
  ],

  progress: [
    { label: "Model",      pct: 100 },
    { label: "Animations", pct: 55 },
    { label: "VFX",        pct: 70 },
    { label: "Balancing",  pct: 30 },
  ],

  timeline: [
    { ver: "v0.1", year: "2023", notes: ["Initial concept artwork created.", "First model completed.", "Concept artwork redesigned."] },
    { ver: "v0.2", year: "2025", notes: ["Final model completed.", "Initial animation production began and completed."] },
    { ver: "v0.3", year: "2026", notes: ["VFX production began and completed.", "Temporary SFX began and completed."] },
  ],
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const emph = (s) => esc(s).replace(/\{([^}]+)\}/g, '<span class="em">$1</span>');

/* ---------- render ---------- */
function render() {
  const lore = $("#lore-text");
  if (lore) lore.innerHTML = data.lore.map((p) =>
    p[0] === "~" ? `<p class="lore-beat">${emph(p.slice(1).trim())}</p>` : `<p>${emph(p)}</p>`
  ).join("");

  const notes = $("#design-notes");
  if (notes) notes.innerHTML = data.notes.map((n) => `<li>${esc(n)}</li>`).join("");

  const initial = (n) => (n && n.toLowerCase() !== "displayname" ? n[0].toUpperCase() : "?");
  const personCard = (p, black) => {
    const av = p.avatar ? `<img src="${esc(p.avatar)}" alt="${esc(p.name)}" loading="lazy"/>` : `<span class="ph">${esc(initial(p.name))}</span>`;
    const awaiting = p.awaiting ? `<span class="awaiting">Awaiting</span>` : "";
    const handle = p.handle ? `<p class="person-handle">${esc(p.handle)}</p>` : "";
    const role = p.role ? `<p class="person-role">${esc(p.role)}</p>` : "";
    const link = p.profile ? `<a class="person-link" href="${esc(p.profile)}" target="_blank" rel="noopener">Roblox Profile ↗</a>` : "";
    return `<article class="person${black ? " is-black" : ""}">
      <div class="person-avatar">${av}</div>
      <h4 class="person-name">${esc(p.name)} ${awaiting}</h4>
      ${handle}${role}${link}
    </article>`;
  };
  const fill = (id, list, black) => { const el = $(id); if (el) el.innerHTML = list.map((p) => personCard(p, black)).join(""); };

  // owner is a single stretched card with a quote
  const ownerEl = $("#owner");
  if (ownerEl) ownerEl.innerHTML = data.owner.map((p) => {
    const av = p.avatar ? `<img src="${esc(p.avatar)}" alt="${esc(p.name)}" loading="lazy"/>` : `<span class="ph">${esc(initial(p.name))}</span>`;
    const handle = p.handle ? `<p class="person-handle">${esc(p.handle)}</p>` : "";
    const role = p.role ? `<p class="person-role">${esc(p.role)}</p>` : "";
    const link = p.profile ? `<a class="person-link" href="${esc(p.profile)}" target="_blank" rel="noopener">Roblox Profile ↗</a>` : "";
    return `<article class="person owner-card">
      <canvas class="owner-fire" aria-hidden="true"></canvas>
      <div class="owner-main">
        <div class="person-avatar">${av}</div>
        <div class="owner-info"><h4 class="person-name">${esc(p.name)}</h4>${handle}${role}${link}</div>
      </div>
      <figure class="owner-quote"><img src="assets/img/quote.png" alt="The blade remembers. The will remains. — The Phantom Covenant" loading="lazy"/></figure>
    </article>`;
  }).join("");

  fill("#contributors", data.contributors);
  fill("#temp-holders", data.tempHolders);
  fill("#blacklist", data.blacklist, true);

  const bars = $("#progress-bars");
  if (bars) bars.innerHTML = data.progress.map((b) =>
    `<div class="bar"><div class="bar-top"><span>${esc(b.label)}</span><span class="pct">${b.pct}%</span></div>
     <div class="bar-track"><div class="bar-fill" data-pct="${b.pct}"></div></div></div>`).join("");

  const tl = $("#timeline");
  if (tl) tl.innerHTML = data.timeline.map((t) =>
    `<li class="tl-item"><div class="tl-head"><span class="tl-ver">${esc(t.ver)}</span><span class="tl-year">${esc(t.year)}</span></div>
     <p class="tl-note">${t.notes.map((n) => `<span>— ${esc(n)}</span>`).join("")}</p></li>`).join("");
}

function animateBars() {
  $$("#progress-bars .bar-fill").forEach((f) => { f.style.width = "0%"; });
  requestAnimationFrame(() => setTimeout(() => {
    $$("#progress-bars .bar-fill").forEach((f) => { f.style.width = f.dataset.pct + "%"; });
  }, 120));
}

/* ---------- page switching ---------- */
let reReveal = () => {}, heroReset = () => {};
function initPages() {
  const pages = $$(".page"), links = $$(".navlink"), nav = $(".topnav"), toggle = $("#navToggle");
  function show(name) {
    pages.forEach((p) => { const on = p.id === `page-${name}`; p.classList.toggle("is-active", on); p.hidden = !on; });
    links.forEach((l) => l.classList.toggle("is-active", l.dataset.page === name));
    window.scrollTo({ top: 0 });
    nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false");
    if (history.replaceState) history.replaceState(null, "", `#${name}`);
    reReveal(name); heroReset();
    if (name === "changelog") animateBars();
  }
  $$("[data-page]").forEach((el) => el.addEventListener("click", () => show(el.dataset.page)));
  toggle.addEventListener("click", () => { const o = nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", String(o)); });
  const start = (location.hash || "").replace("#", "");
  if (["home", "lore", "concept", "holders", "title", "changelog"].includes(start)) show(start);
}

/* ---------- sticky bar ---------- */
function initBar() {
  const bar = $("#topbar");
  const on = () => bar.classList.toggle("is-scrolled", window.scrollY > 20);
  on(); window.addEventListener("scroll", on, { passive: true });
}

/* ---------- hero parallax ---------- */
function initParallax() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let ticking = false;
  function update() {
    ticking = false;
    const page = $(".page.is-active"); if (!page) return;
    const target = page.querySelector(".hero-inner"); if (!target) return;
    const hero = page.querySelector(".hero"); const h = hero.offsetHeight || 1;
    const y = Math.min(window.scrollY, h);
    target.style.transform = `translateY(${y * 0.5}px)`;
    target.style.opacity = String(Math.max(0.3, 1 - window.scrollY / (h * 1.5)));
  }
  window.addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
  heroReset = () => requestAnimationFrame(update); update();
}

/* ---------- reveal ---------- */
function initReveal() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const sel = ".portal, .person, .earn, .title-crest, .progress-card, .timeline .tl-item, .notes li, .showcase, .prose p";
  const els = $$(sel);
  els.forEach((el) => {
    el.classList.add("reveal");
    const sibs = Array.from(el.parentNode.children).filter((c) => c.matches(sel));
    el.style.setProperty("--d", Math.min(sibs.indexOf(el), 7) * 0.06 + "s");
  });
  const io = new IntersectionObserver((ents) => ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  els.forEach((el) => io.observe(el));
  reReveal = (page) => $$(`#page-${page} .reveal`).forEach((el) => { el.classList.remove("in"); io.observe(el); });
}

/* ---------- lightbox ---------- */
function initLightbox() {
  const lb = $("#lightbox"), img = $("#lbImg"), close = $("#lbClose");
  $$(".zoom").forEach((b) => b.addEventListener("click", () => { img.src = b.dataset.src; lb.hidden = false; }));
  const hide = () => { lb.hidden = true; img.src = ""; };
  close.addEventListener("click", hide);
  lb.addEventListener("click", (e) => { if (e.target === lb) hide(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lb.hidden) hide(); });
}

/* ---------- UI click sfx (subtle) ---------- */
const SFX = (() => {
  let ctx, master;
  function ensure() { if (!ctx) { const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null; ctx = new AC(); master = ctx.createGain(); master.gain.value = 0.5; master.connect(ctx.destination); } if (ctx.state === "suspended") ctx.resume(); return ctx; }
  // a short band-passed noise burst — an airy, breathy "whisper" (no clean tone)
  function whisper(freq, q, d, v) {
    const c = ensure(); if (!c) return; const n = c.currentTime;
    const len = Math.ceil(c.sampleRate * d), buf = c.createBuffer(1, len, c.sampleRate), ch = buf.getChannelData(0);
    for (let i = 0; i < len; i++) ch[i] = (Math.random() * 2 - 1);
    const src = c.createBufferSource(); src.buffer = buf;
    const bp = c.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.setValueAtTime(freq, n); bp.frequency.exponentialRampToValueAtTime(freq * 0.55, n + d); bp.Q.value = q;
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, n); g.gain.exponentialRampToValueAtTime(v, n + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, n + d);
    src.connect(bp).connect(g).connect(master); src.start(n); src.stop(n + d + 0.02);
  }
  // a hollow, slow-swelling ghost tone — two detuned sines under a lowpass sweep
  function swell(freq, d, v) {
    const c = ensure(); if (!c) return; const n = c.currentTime;
    const lp = c.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.setValueAtTime(freq * 1.2, n); lp.frequency.exponentialRampToValueAtTime(freq * 4, n + d * 0.5); lp.Q.value = 6;
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, n); g.gain.exponentialRampToValueAtTime(v, n + d * 0.45); g.gain.exponentialRampToValueAtTime(0.0001, n + d);
    lp.connect(g).connect(master);
    [freq, freq * 1.009].forEach((f, i) => { const o = c.createOscillator(); o.type = "sine"; o.frequency.setValueAtTime(f, n); o.connect(lp); o.start(n); o.stop(n + d + 0.02); });
  }
  // a soft downward wail — a ghostly, ghastly moan (two detuned sines gliding down, veiled)
  function moan(f0, f1, d, v) {
    const c = ensure(); if (!c) return; const n = c.currentTime;
    const lp = c.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 820; lp.Q.value = 2;
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, n); g.gain.exponentialRampToValueAtTime(v, n + d * 0.3); g.gain.exponentialRampToValueAtTime(0.0001, n + d);
    g.connect(lp).connect(master);
    [1, 1.006].forEach((m) => { const o = c.createOscillator(); o.type = "sine"; o.frequency.setValueAtTime(f0 * m, n); o.frequency.exponentialRampToValueAtTime(Math.max(40, f1) * m, n + d); o.connect(g); o.start(n); o.stop(n + d + 0.03); });
  }
  // spectral UI — breathy whispers + a ghostly wail, nothing like the Aether plucks
  return {
    tap() { whisper(1500, 8, 0.07, 0.09); moan(300, 170, 0.28, 0.05); },
    confirm() { whisper(1250, 6, 0.07, 0.08); moan(250, 120, 0.5, 0.07); swell(140, 0.5, 0.05); },
  };
})();
function initSfx() {
  document.addEventListener("click", (e) => {
    const el = e.target.closest("button, a"); if (!el) return;
    if (el.closest(".portal, .navlink, .brand, .btn")) SFX.confirm(); else SFX.tap();
  }, true);
}

/* ---------- shared helper: a soft glow sprite per colour (replaces costly per-particle shadowBlur) ---------- */
function glowSprites(colorList, size = 26) {
  return colorList.map((c) => {
    const s = document.createElement("canvas"); s.width = s.height = size;
    const g = s.getContext("2d");
    const rad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    rad.addColorStop(0, `rgba(${c},1)`); rad.addColorStop(0.35, `rgba(${c},0.55)`); rad.addColorStop(1, `rgba(${c},0)`);
    g.fillStyle = rad; g.fillRect(0, 0, size, size);
    return s;
  });
}
const LOW_FX = matchMedia("(pointer: coarse)").matches || innerWidth < 820;

/* ---------- FIRE background (green fire particles across the whole screen) ---------- */
function initFire() {
  const canvas = $("#fire");
  if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  let w, h, parts, wisps, shadows;
  const colors = ["38,227,154", "120,240,180", "228,198,122", "90,230,170", "160,255,205"]; // greens + gold
  const sprites = glowSprites(colors);

  function resize() {
    w = canvas.width = innerWidth; h = canvas.height = innerHeight;
    // far fewer particles on phones/tablets; no shadowBlur anywhere
    const div = LOW_FX ? 44000 : 13000, cap = LOW_FX ? 36 : 110;
    parts = Array.from({ length: Math.min(cap, Math.floor(w * h / div)) }, () => spawn(true));
    wisps = Array.from({ length: LOW_FX ? 2 : Math.max(3, Math.round(w / 560)) }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 160 + 120,
      vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.14,
      a: Math.random() * 0.05 + 0.025, t: Math.random() * Math.PI * 2, tw: Math.random() * 0.01 + 0.004,
    }));
    // dark drifting shadow masses — looming presences
    shadows = Array.from({ length: LOW_FX ? 2 : Math.max(3, Math.round(w / 620)) }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 260 + 200,
      vx: (Math.random() - 0.5) * 0.16, vy: (Math.random() - 0.5) * 0.1,
      a: Math.random() * 0.22 + 0.14, t: Math.random() * Math.PI * 2, tw: Math.random() * 0.006 + 0.002,
    }));
  }

  // spread fire particles across the ENTIRE screen; they drift up & flicker like embers
  function spawn(anywhere) {
    return {
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : h + Math.random() * 30,
      r: Math.random() * 2.2 + 0.5,
      vy: -(Math.random() * 0.6 + 0.15),            // gentle upward drift
      vx: (Math.random() - 0.5) * 0.5,
      a: Math.random() * 0.5 + 0.25,
      ci: (Math.random() * colors.length) | 0,
      sway: Math.random() * 0.04 + 0.015,
      amp: Math.random() * 0.8 + 0.3,
      t: Math.random() * Math.PI * 2,
      life: Math.random() * 0.6 + 0.4,
      fade: Math.random() * 0.004 + 0.0015,
    };
  }

  let last = 0;
  function frame(ts) {
    requestAnimationFrame(frame);
    if (LOW_FX && ts - last < 32) return;    // cap to ~30fps on mobile
    last = ts;
    ctx.clearRect(0, 0, w, h);

    // dark shadow masses first (they darken the background)
    ctx.globalCompositeOperation = "source-over";
    for (const s of shadows) {
      s.t += s.tw; s.x += s.vx; s.y += s.vy;
      if (s.x < -s.r) s.x = w + s.r; if (s.x > w + s.r) s.x = -s.r;
      if (s.y < -s.r) s.y = h + s.r; if (s.y > h + s.r) s.y = -s.r;
      const a = s.a * (0.6 + 0.4 * Math.sin(s.t));
      const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r);
      g.addColorStop(0, `rgba(1,4,3,${a})`); g.addColorStop(1, "rgba(1,4,3,0)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
    }

    ctx.globalCompositeOperation = "lighter";

    // slow spectral wisps (ghostly fog)
    for (const wsp of wisps) {
      wsp.t += wsp.tw; wsp.x += wsp.vx; wsp.y += wsp.vy;
      if (wsp.x < -wsp.r) wsp.x = w + wsp.r; if (wsp.x > w + wsp.r) wsp.x = -wsp.r;
      if (wsp.y < -wsp.r) wsp.y = h + wsp.r; if (wsp.y > h + wsp.r) wsp.y = -wsp.r;
      const a = wsp.a * (0.6 + 0.4 * Math.sin(wsp.t));
      const g = ctx.createRadialGradient(wsp.x, wsp.y, 0, wsp.x, wsp.y, wsp.r);
      g.addColorStop(0, `rgba(38,227,154,${a})`);
      g.addColorStop(1, "rgba(38,227,154,0)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(wsp.x, wsp.y, wsp.r, 0, Math.PI * 2); ctx.fill();
    }

    for (const p of parts) {
      p.t += p.sway;
      p.y += p.vy;
      p.x += p.vx + Math.sin(p.t) * p.amp;          // drifting sideways waver
      p.life -= p.fade;
      if (p.y < -10 || p.life <= 0) Object.assign(p, spawn(false)); // respawn at bottom, rise again
      const flick = 0.35 + Math.abs(Math.sin(p.t * 2.2)) * 0.65;    // flame-like flicker
      const alpha = p.a * flick * Math.max(0, Math.min(1, p.life * 1.4));
      const size = p.r * 7;                          // sprite carries the glow (no shadowBlur)
      ctx.globalAlpha = alpha;
      ctx.drawImage(sprites[p.ci], p.x - size / 2, p.y - size / 2, size, size);
    }
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over";
  }
  resize(); addEventListener("resize", resize); requestAnimationFrame(frame);
}

/* ---------- eerie ambient + lights-out drone (synthesized) ---------- */
const Ambience = (() => {
  let ctx, master, scare, gate, started = false, scareNodes = [], gateNodes = [];
  let muted = false;
  try { muted = localStorage.getItem("ps-muted") === "1"; } catch (e) {}

  function ensure() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = muted ? 0 : 1; master.connect(ctx.destination);
    scare = ctx.createGain(); scare.gain.value = 0; scare.connect(master);   // lights-out swell
    gate = ctx.createGain(); gate.gain.value = 0; gate.connect(master);       // the gate's deep dread
    return ctx;
  }
  function noiseBuffer(sec) {
    const b = ctx.createBuffer(1, ctx.sampleRate * sec, ctx.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }

  // arm audio on first gesture (no idle music plays)
  function start() {
    if (started) return; if (!ensure()) return;
    if (ctx.state === "suspended") ctx.resume();
    started = true;
  }
  function setMuted(m) {
    muted = m; try { localStorage.setItem("ps-muted", m ? "1" : "0"); } catch (e) {}
    if (master) master.gain.setTargetAtTime(m ? 0 : 1, ctx.currentTime, 0.05);
  }
  function isMuted() { return muted; }

  function enterScare() {
    if (!ctx) return; const t = ctx.currentTime;
    // deep dissonant swell
    [39, 41.5, 220, 233].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = i < 2 ? "sine" : "sawtooth"; o.frequency.value = f;
      const g = ctx.createGain(); g.gain.value = i < 2 ? 0.5 : 0.05;
      const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = i < 2 ? 200 : 900;
      o.connect(g).connect(lp).connect(scare); o.start(t); scareNodes.push(o);
    });
    // low impact thud
    const o = ctx.createOscillator(); o.type = "sine"; o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(32, t + 0.5);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);
    o.connect(g).connect(scare); o.start(t); o.stop(t + 1.2);
    scare.gain.cancelScheduledValues(t); scare.gain.setValueAtTime(scare.gain.value, t); scare.gain.setTargetAtTime(0.14, t, 1.4);
  }
  function exitScare() {
    if (!ctx) return; const t = ctx.currentTime;
    scare.gain.setTargetAtTime(0, t, 1.2);
    scareNodes.forEach((o) => { try { o.stop(t + 2); } catch (e) {} });
    scareNodes = [];
  }

  // the gate's deep dread — an even eerier sustained drone
  function gateStart() {
    if (!ctx) return; const t = ctx.currentTime;
    scare.gain.setTargetAtTime(0, t, 0.6);   // silence the lights-out swell under it
    // dissonant, beating cluster + a thin high whine + sub rumble
    [41, 43.3, 58, 61.5, 174, 184, 466].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = i < 4 ? "sine" : "triangle"; o.frequency.value = f;
      const g = ctx.createGain(); g.gain.value = f > 400 ? 0.016 : (f < 70 ? 0.34 : 0.07);
      const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = f > 400 ? 2200 : 520;
      const d = ctx.createOscillator(); d.frequency.value = 0.05 + i * 0.013;
      const dg = ctx.createGain(); dg.gain.value = f * 0.004;
      d.connect(dg).connect(o.frequency); d.start(t);
      o.connect(g).connect(lp).connect(gate); o.start(t); gateNodes.push(o, d);
    });
    const src = ctx.createBufferSource(); src.buffer = noiseBuffer(6); src.loop = true;
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 1900; bp.Q.value = 0.6;
    const ng = ctx.createGain(); ng.gain.value = 0.013;
    src.connect(bp).connect(ng).connect(gate); src.start(t); gateNodes.push(src);
    gate.gain.cancelScheduledValues(t); gate.gain.setValueAtTime(0.0001, t); gate.gain.setTargetAtTime(0.17, t, 1.6);
  }
  function gateStop() {
    if (!ctx) return; const t = ctx.currentTime;
    gate.gain.setTargetAtTime(0, t, 0.7);
    gateNodes.forEach((n) => { try { n.stop(t + 1.1); } catch (e) {} });
    gateNodes = [];
  }

  // shockwave sound for "close the door"
  function shockwave() {
    if (!ctx || muted) return; const t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = "sine";
    o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(38, t + 0.55);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.55, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.75);
    o.connect(g).connect(master); o.start(t); o.stop(t + 0.8);
    const src = ctx.createBufferSource(); src.buffer = noiseBuffer(1);
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.setValueAtTime(1400, t); bp.frequency.exponentialRampToValueAtTime(180, t + 0.6); bp.Q.value = 0.7;
    const ng = ctx.createGain(); ng.gain.setValueAtTime(0.0001, t); ng.gain.exponentialRampToValueAtTime(0.3, t + 0.02); ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
    src.connect(bp).connect(ng).connect(master); src.start(t); src.stop(t + 0.8);
  }
  // short "sans"-style blip for the typewriter text
  function typeBlip() {
    if (!ctx || muted) return; const t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = "square";
    o.frequency.value = 148 + Math.random() * 26;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.08, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
    o.connect(g).connect(master); o.start(t); o.stop(t + 0.09);
  }
  // owner hover theme — a fully synthesized eerie ambient (no copyrighted audio):
  // a dark minor drone with a slow filter sweep, airy wind, and sparse haunting notes.
  let hGain, hActive = false, hNodes = [], hMel = null, hStopTimer = null;
  const MEL = [0, 3, 5, 7, 10, 12, 15];   // minor-pentatonic flavoured offsets
  const MEL_BASE = 174.6;                  // F3 — low and mournful
  function hoverEnsure() {
    if (hGain) return; if (!ensure()) return;
    hGain = ctx.createGain(); hGain.gain.value = 0; hGain.connect(master);
  }
  function startDrone() {
    const t = ctx.currentTime;
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 480; lp.Q.value = 5; lp.connect(hGain);
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.05;
    const lg = ctx.createGain(); lg.gain.value = 220;
    lfo.connect(lg).connect(lp.frequency); lfo.start(t); hNodes.push(lfo);
    [43.65, 44.0, 65.4, 87.3].forEach((f, i) => {   // F1-ish cluster + fifth
      const o = ctx.createOscillator(); o.type = i < 2 ? "sine" : "triangle"; o.frequency.value = f;
      const g = ctx.createGain(); g.gain.value = i < 2 ? 0.5 : 0.14;
      o.connect(g).connect(lp); o.start(t); hNodes.push(o);
    });
    const src = ctx.createBufferSource(); src.buffer = noiseBuffer(5); src.loop = true;
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 1100; bp.Q.value = 0.5;
    const ng = ctx.createGain(); ng.gain.value = 0.02;
    src.connect(bp).connect(ng).connect(hGain); src.start(t); hNodes.push(src);
  }
  function pluck() {
    if (!ctx) return; const t = ctx.currentTime;
    const semi = MEL[(Math.random() * MEL.length) | 0];
    const f = MEL_BASE * Math.pow(2, semi / 12);
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 2400; lp.connect(hGain);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.10, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 2.4); g.connect(lp);
    [[f, "triangle", 1], [f * 2, "sine", 0.4]].forEach(([fr, ty, amt]) => {
      const o = ctx.createOscillator(); o.type = ty; o.frequency.value = fr;
      const og = ctx.createGain(); og.gain.value = amt; o.connect(og).connect(g);
      o.start(t); o.stop(t + 2.5);
    });
  }
  function hoverIn() {
    if (!ensure()) return; hoverEnsure();
    if (ctx.state === "suspended") ctx.resume();
    clearTimeout(hStopTimer);
    if (!hActive) { hActive = true; startDrone(); hMel = setInterval(() => { if (Math.random() < 0.72) pluck(); }, 1500); }
    const t = ctx.currentTime;
    hGain.gain.cancelScheduledValues(t); hGain.gain.setValueAtTime(hGain.gain.value, t);
    hGain.gain.linearRampToValueAtTime(0.32, t + 1.3);
  }
  function hoverOut() {
    if (!hGain) return; const t = ctx.currentTime;
    hGain.gain.cancelScheduledValues(t); hGain.gain.setValueAtTime(hGain.gain.value, t);
    hGain.gain.linearRampToValueAtTime(0, t + 1.1);
    hStopTimer = setTimeout(() => {
      hActive = false; clearInterval(hMel); hMel = null;
      hNodes.forEach((n) => { try { n.stop(); } catch (e) {} }); hNodes = [];
    }, 1300);
  }

  return { start, setMuted, isMuted, enterScare, exitScare, typeBlip, gateStart, gateStop, shockwave, hoverIn, hoverOut };
})();

/* ---------- owner hover theme — official YouTube embed (starts at 0:20, loops, fades) ----------
   Uses YouTube's own player (nothing is downloaded or re-hosted), so the track plays legitimately.
   If the video can't be embedded, we fall back to the synthesized ambient theme above.          */
const HoverTune = (() => {
  const VIDEO = "N2p_JFF4lR0", START = 20, TARGET = 26;   // volume 0..100 (kept gentle)
  let player = null, ready = false, failed = false, loading = false, hovering = false, fadeTimer = null, vol = 0;
  let muted = false; try { muted = localStorage.getItem("ps-muted") === "1"; } catch (e) {}

  function load() {
    if (loading) return; loading = true;
    if (window.YT && window.YT.Player) { create(); return; }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { if (prev) { try { prev(); } catch (e) {} } create(); };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.onerror = () => { failed = true; };
    document.head.appendChild(tag);
  }
  function create() {
    const host = document.createElement("div"); host.id = "ytHost";
    host.style.cssText = "position:fixed;width:1px;height:1px;left:-9999px;top:-9999px;opacity:0;pointer-events:none;";
    document.body.appendChild(host);
    try {
      player = new YT.Player(host, {
        videoId: VIDEO,
        playerVars: { autoplay: 0, controls: 0, disablekb: 1, fs: 0, modestbranding: 1, playsinline: 1, rel: 0, start: START },
        events: {
          onReady: () => { ready = true; try { player.setVolume(0); muted ? player.mute() : player.unMute(); } catch (e) {} if (hovering) begin(); },
          onError: () => { failed = true; },
          onStateChange: (e) => { if (e.data === YT.PlayerState.ENDED) { try { player.seekTo(START, true); player.playVideo(); } catch (err) {} } },
        },
      });
    } catch (e) { failed = true; }
  }
  function fadeTo(target, ms, ease) {
    clearInterval(fadeTimer);
    const step = 50, n = Math.max(1, Math.round(ms / step)), start = vol; let i = 0;
    fadeTimer = setInterval(() => {
      i++; const p = i / n;
      const k = ease === "out" ? 1 - (1 - p) * (1 - p) : p;   // ease-out: rises quickly, then settles
      vol = Math.max(0, Math.min(100, start + (target - start) * k));
      if (player && ready) { try { player.setVolume(muted ? 0 : Math.round(vol)); } catch (e) {} }
      if (i >= n) { clearInterval(fadeTimer); vol = target; if (target === 0 && player && ready) { try { player.pauseVideo(); } catch (e) {} } }
    }, step);
  }
  function begin() {
    if (!player || !ready) return;
    try { muted ? player.mute() : player.unMute(); player.setVolume(0); player.playVideo(); } catch (e) {}
    vol = 0; fadeTo(TARGET, 900, "out");   // quick, gentle ease-out so it's steady by the time audio buffers
  }
  return {
    // returns false only once we KNOW the embed failed, so the caller can use the synth instead
    enter() { hovering = true; if (failed) return false; if (!player) load(); else if (ready) begin(); return true; },
    leave() { hovering = false; if (player && ready) fadeTo(0, 1100); },
    setMuted(m) { muted = m; if (player && ready) { try { m ? player.mute() : (player.unMute(), player.setVolume(Math.round(vol))); } catch (e) {} } },
  };
})();

function initAmbience() {
  const btn = $("#soundToggle");
  const paint = () => {
    const m = Ambience.isMuted();
    $(".ic-sound-on", btn).hidden = m; $(".ic-sound-off", btn).hidden = !m;
    btn.setAttribute("aria-pressed", String(!m));
  };
  paint();
  // start on first interaction (browsers block audio before a gesture)
  const kick = () => { Ambience.start(); removeEventListener("pointerdown", kick); removeEventListener("keydown", kick); };
  addEventListener("pointerdown", kick); addEventListener("keydown", kick);
  if (btn) btn.addEventListener("click", (e) => {
    e.stopPropagation(); Ambience.start();
    const m = !Ambience.isMuted(); Ambience.setMuted(m); HoverTune.setMuted(m); paint();
  });

  // owner card hover plays the chosen theme via YouTube's embed; synth is the fallback
  const card = $(".owner-card");
  if (card) {
    card.addEventListener("mouseenter", () => { Ambience.start(); if (!HoverTune.enter()) Ambience.hoverIn(); });
    card.addEventListener("mouseleave", () => { HoverTune.leave(); Ambience.hoverOut(); });
  }
}

/* ---------- fire around the whole owner card on hover ---------- */
function initOwnerFire() {
  const card = $(".owner-card"); if (!card) return;
  const canvas = $(".owner-fire", card);
  if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (matchMedia("(pointer: coarse)").matches) return;  // hover-only effect — skip on touch to save mobile
  const ctx = canvas.getContext("2d");
  let w, h, parts = [], hovering = false, raf = null, alpha = 0;
  const cols = ["255,170,60", "255,120,40", "255,210,130", "120,240,160"];
  const sprites = glowSprites(cols, 20);

  function resize() {
    const r = card.getBoundingClientRect();
    w = canvas.width = Math.max(1, Math.round(r.width));
    h = canvas.height = Math.max(1, Math.round(r.height));
  }
  // spawn along the card's perimeter (slightly inside the border)
  function spawn() {
    const m = 3, X = m, Y = m, W = w - 2 * m, H = h - 2 * m, per = 2 * (W + H);
    let d = Math.random() * per, x, y;
    if (d < W) { x = X + d; y = Y; }
    else if (d < W + H) { x = X + W; y = Y + (d - W); }
    else if (d < 2 * W + H) { x = X + W - (d - W - H); y = Y + H; }
    else { x = X; y = Y + H - (d - 2 * W - H); }
    return { x, y, r: Math.random() * 2.6 + 0.8, vy: -(Math.random() * 0.8 + 0.25), vx: (Math.random() - 0.5) * 0.7, life: 1, fd: Math.random() * 0.02 + 0.012, ci: (Math.random() * cols.length) | 0, t: Math.random() * 6, tw: Math.random() * 0.1 + 0.05 };
  }
  let acc = 0;
  function frame() {
    ctx.clearRect(0, 0, w, h);
    alpha += ((hovering ? 1 : 0) - alpha) * 0.08;
    // emit ~4 per frame along the perimeter, capped so the list can't balloon
    if (hovering && parts.length < 150) { acc += 4; while (acc >= 1) { parts.push(spawn()); acc -= 1; } }
    ctx.globalCompositeOperation = "lighter";
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i]; p.t += p.tw; p.x += p.vx + Math.sin(p.t) * 0.3; p.y += p.vy; p.life -= p.fd;
      if (p.life <= 0) { parts.splice(i, 1); continue; }
      const a = p.life * (0.4 + Math.abs(Math.sin(p.t * 2)) * 0.6) * alpha;
      const size = p.r * 6;
      ctx.globalAlpha = a;
      ctx.drawImage(sprites[p.ci], p.x - size / 2, p.y - size / 2, size, size);
    }
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over";
    if (alpha > 0.01 || parts.length) raf = requestAnimationFrame(frame); else raf = null;
  }
  function kick() { if (!raf) { resize(); raf = requestAnimationFrame(frame); } }
  const main = document.querySelector("main");
  card.addEventListener("mouseenter", () => { hovering = true; kick(); if (main) main.classList.add("web-shake"); });
  card.addEventListener("mouseleave", () => { hovering = false; if (main) main.classList.remove("web-shake"); });
  addEventListener("resize", () => { if (raf) resize(); });
}

/* ---------- the gate behind the skull (in-page, so no popup blocking) ---------- */
function initVoidgate() {
  const vg = $("#voidgate"); if (!vg) return;
  const close = $("#vgClose"), line = $(".vg-line"), sub = $(".vg-sub");
  const LINE = "You shouldn't have clicked that.";
  const SUB = "It knows your name now.";
  let timers = [], started = false, cancelled = false, typeTimer = null;

  // typewriter, Undertale-style, with a blip per character
  function typeText(el, text, cps, onDone) {
    el.classList.add("show"); el.textContent = ""; let i = 0;
    const speed = 1000 / cps;
    (function step() {
      if (cancelled) return;
      if (i < text.length) {
        const ch = text[i++];
        el.textContent += ch;
        if (ch.trim()) Ambience.typeBlip();
        typeTimer = setTimeout(step, ch === "," || ch === "." ? speed * 6 : speed);
      } else if (onDone) onDone();
    })();
  }

  function startFire() {
    if (started || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    started = true;
    const c = $("#vgfire"), x = c.getContext("2d"); let w, h, p;
    const sp = () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 2 + .4, vy: -(Math.random() * .5 + .12), vx: (Math.random() - .5) * .4, a: Math.random() * .5 + .25, t: Math.random() * 6, tw: Math.random() * .04 + .01, life: Math.random() * .6 + .4, fd: Math.random() * .004 + .0015 });
    const rs = () => { w = c.width = innerWidth; h = c.height = innerHeight; p = Array.from({ length: Math.min(90, (w * h / 14000) | 0) }, sp); };
    function fr() {
      x.clearRect(0, 0, w, h); x.globalCompositeOperation = "lighter";
      for (const q of p) {
        q.t += q.tw; q.y += q.vy; q.x += q.vx + Math.sin(q.t) * .5; q.life -= q.fd;
        if (q.y < -10 || q.life <= 0) Object.assign(q, sp(), { y: h + 8 });
        const fl = .35 + Math.abs(Math.sin(q.t * 2.2)) * .65, al = q.a * fl * Math.max(0, Math.min(1, q.life * 1.4));
        x.beginPath(); x.arc(q.x, q.y, q.r, 0, 7); x.fillStyle = "rgba(255,50,56," + al + ")";
        x.shadowBlur = 12; x.shadowColor = "rgba(255,40,46,.9)"; x.fill();
      }
      x.globalCompositeOperation = "source-over"; x.shadowBlur = 0; requestAnimationFrame(fr);
    }
    rs(); addEventListener("resize", rs); fr();
  }

  window.openVoidgate = () => {
    vg.hidden = false; vg.classList.remove("closing"); startFire(); cancelled = false;
    Ambience.gateStart();
    line.textContent = ""; sub.textContent = ""; close.classList.remove("show");
    timers.push(setTimeout(() => {
      typeText(line, LINE, 20, () => {
        timers.push(setTimeout(() => {
          typeText(sub, SUB, 18, () => {
            timers.push(setTimeout(() => close.classList.add("show"), 600));
          });
        }, 800));
      });
    }, 2100));
  };
  close.addEventListener("click", () => {
    cancelled = true; clearTimeout(typeTimer); timers.forEach(clearTimeout); timers = [];
    Ambience.shockwave(); Ambience.gateStop();

    // expanding shockwave ring from the button
    const r = close.getBoundingClientRect();
    const ring = document.createElement("div"); ring.className = "shockwave";
    ring.style.left = (r.left + r.width / 2) + "px"; ring.style.top = (r.top + r.height / 2) + "px";
    document.body.appendChild(ring);
    requestAnimationFrame(() => ring.classList.add("go"));
    setTimeout(() => ring.remove(), 950);

    // smooth fade away
    vg.classList.add("closing");
    setTimeout(() => {
      vg.hidden = true; vg.classList.remove("closing");
      [line, sub, close].forEach((e) => e.classList.remove("show"));
    }, 850);
  });
}

/* ---------- lights-out scare (every ~3 min) ---------- */
function initBlackout() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const body = document.body;

  // the blackout light follows the mouse like a flashlight
  const root = document.documentElement;
  addEventListener("mousemove", (e) => {
    root.style.setProperty("--mx", e.clientX + "px");
    root.style.setProperty("--my", e.clientY + "px");
  }, { passive: true });

  // clicking the home skull during the lights-out opens the gate
  const skull = $("#homeSkull");
  if (skull) skull.addEventListener("click", () => {
    if (body.classList.contains("blackout") && window.openVoidgate) window.openVoidgate();
  });
  function run() {
    if (body.classList.contains("blackout")) return;
    body.classList.add("blackout");
    Ambience.enterScare();
    // hold the darkness, then let the lights crawl back
    setTimeout(() => body.classList.add("blackout-deep"), 1400);
    setTimeout(() => {
      body.classList.remove("blackout-deep");
      Ambience.exitScare();
      setTimeout(() => body.classList.remove("blackout"), 1600);
    }, 7000);
  }
  setInterval(run, 180000); // ~3 minutes
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  render(); initReveal(); initPages(); initBar(); initParallax();
  initLightbox(); initSfx(); initFire(); initVoidgate(); initAmbience(); initOwnerFire(); initBlackout();
  if ($(".page.is-active")?.id === "page-changelog") animateBars();
});
