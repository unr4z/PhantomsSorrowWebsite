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
    { ver: "v0.2", year: "2025", notes: ["Final model completed.", "Animation production began and completed."] },
    { ver: "v0.3", year: "2026", notes: ["VFX production began and completed."] },
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
  function blip(f, d, v, t = "sine") { const c = ensure(); if (!c) return; const n = c.currentTime, o = c.createOscillator(), g = c.createGain(); o.type = t; o.frequency.setValueAtTime(f, n); o.frequency.exponentialRampToValueAtTime(Math.max(60, f * 0.72), n + d); g.gain.setValueAtTime(0.0001, n); g.gain.exponentialRampToValueAtTime(v, n + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, n + d); o.connect(g).connect(master); o.start(n); o.stop(n + d + 0.02); }
  // spectral clicks — low & descending, distinct from the Aether site
  return {
    tap() { blip(280, 0.1, 0.08, "sine"); },
    confirm() { blip(470, 0.12, 0.1, "sine"); setTimeout(() => blip(300, 0.16, 0.07, "triangle"), 60); },
  };
})();
function initSfx() {
  document.addEventListener("click", (e) => {
    const el = e.target.closest("button, a"); if (!el) return;
    if (el.closest(".portal, .navlink, .brand, .btn")) SFX.confirm(); else SFX.tap();
  }, true);
}

/* ---------- FIRE background (green fire particles across the whole screen) ---------- */
function initFire() {
  const canvas = $("#fire");
  if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  let w, h, parts;
  const colors = ["38,227,154", "120,240,180", "228,198,122", "90,230,170", "160,255,205"]; // greens + gold

  let wisps, shadows;
  function resize() {
    w = canvas.width = innerWidth; h = canvas.height = innerHeight;
    parts = Array.from({ length: Math.min(150, Math.floor(w * h / 11000)) }, () => spawn(true));
    wisps = Array.from({ length: Math.max(3, Math.round(w / 520)) }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 160 + 120,
      vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.14,
      a: Math.random() * 0.05 + 0.025, t: Math.random() * Math.PI * 2, tw: Math.random() * 0.01 + 0.004,
    }));
    // dark drifting shadow masses — looming presences
    shadows = Array.from({ length: Math.max(3, Math.round(w / 620)) }, () => ({
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
      c: colors[(Math.random() * colors.length) | 0],
      sway: Math.random() * 0.04 + 0.015,
      amp: Math.random() * 0.8 + 0.3,
      t: Math.random() * Math.PI * 2,
      life: Math.random() * 0.6 + 0.4,
      fade: Math.random() * 0.004 + 0.0015,
    };
  }

  function frame() {
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
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c}, ${alpha})`;
      ctx.shadowBlur = 12;
      ctx.shadowColor = `rgba(${p.c}, 0.9)`;
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over"; ctx.shadowBlur = 0;
    requestAnimationFrame(frame);
  }
  resize(); addEventListener("resize", resize); frame();
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
  // hover music — Faceless Beast, begins at 1:01, loops, fades in/out, remembers its position
  let hA, hGain, hStarted = false, hPauseTimer = null, hBound = false;
  const H_START = 61;
  function hoverEnsure() {
    if (hA) return; if (!ensure()) return;
    hA = new Audio("assets/audio/faceless-beast.mp3"); hA.preload = "auto";
    hGain = ctx.createGain(); hGain.gain.value = 0; hGain.connect(master);
    try { ctx.createMediaElementSource(hA).connect(hGain); hBound = true; } catch (e) { hBound = false; }
    hA.addEventListener("timeupdate", () => {
      if (hA.duration && hA.currentTime >= hA.duration - 0.3) hA.currentTime = H_START;
    });
  }
  function hoverIn() {
    if (!ensure()) return; hoverEnsure();
    if (ctx.state === "suspended") ctx.resume();
    clearTimeout(hPauseTimer);
    if (!hStarted) { try { hA.currentTime = H_START; } catch (e) {} hStarted = true; }
    if (!hBound) hA.volume = muted ? 0 : 1;
    hA.play().catch(() => {});
    const t = ctx.currentTime;
    hGain.gain.cancelScheduledValues(t); hGain.gain.setValueAtTime(hGain.gain.value, t);
    hGain.gain.linearRampToValueAtTime(0.17, t + 1.3);
  }
  function hoverOut() {
    if (!hGain) return; const t = ctx.currentTime;
    hGain.gain.cancelScheduledValues(t); hGain.gain.setValueAtTime(hGain.gain.value, t);
    hGain.gain.linearRampToValueAtTime(0, t + 1.1);
    hPauseTimer = setTimeout(() => { try { hA.pause(); } catch (e) {} }, 1200); // pause keeps position
  }

  return { start, setMuted, isMuted, enterScare, exitScare, typeBlip, gateStart, gateStop, shockwave, hoverIn, hoverOut };
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
  if (btn) btn.addEventListener("click", (e) => { e.stopPropagation(); Ambience.start(); Ambience.setMuted(!Ambience.isMuted()); paint(); });

  // owner card hover plays the Faceless Beast theme
  const card = $(".owner-card");
  if (card) {
    card.addEventListener("mouseenter", () => Ambience.hoverIn());
    card.addEventListener("mouseleave", () => Ambience.hoverOut());
  }
}

/* ---------- fire around the whole owner card on hover ---------- */
function initOwnerFire() {
  const card = $(".owner-card"); if (!card) return;
  const canvas = $(".owner-fire", card);
  if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  let w, h, parts = [], hovering = false, raf = null, alpha = 0;
  const cols = ["255,170,60", "255,120,40", "255,210,130", "120,240,160"];

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
    return { x, y, r: Math.random() * 2.6 + 0.8, vy: -(Math.random() * 0.8 + 0.25), vx: (Math.random() - 0.5) * 0.7, life: 1, fd: Math.random() * 0.02 + 0.012, c: cols[(Math.random() * cols.length) | 0], t: Math.random() * 6, tw: Math.random() * 0.1 + 0.05 };
  }
  function frame() {
    ctx.clearRect(0, 0, w, h);
    alpha += ((hovering ? 1 : 0) - alpha) * 0.08;
    if (hovering) for (let i = 0; i < 9; i++) parts.push(spawn());   // more, since the perimeter is larger
    ctx.globalCompositeOperation = "lighter";
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i]; p.t += p.tw; p.x += p.vx + Math.sin(p.t) * 0.3; p.y += p.vy; p.life -= p.fd;
      if (p.life <= 0) { parts.splice(i, 1); continue; }
      const a = p.life * (0.4 + Math.abs(Math.sin(p.t * 2)) * 0.6) * alpha;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c},${a})`; ctx.shadowBlur = 10; ctx.shadowColor = `rgba(${p.c},0.9)`; ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over"; ctx.shadowBlur = 0;
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
