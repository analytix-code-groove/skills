const { seg, eo, lerp, TextFx } = kit;
const RW = 520, RH = 1350, SPAN = 1330;
function hash(a, b) { let x = (a * 374761393 + b * 668265263) | 0; x = Math.imul(x ^ (x >>> 13), 1274126177); return ((x ^ (x >>> 16)) >>> 0) / 4294967296; }
const cl = (x) => Math.max(0, Math.min(1, x));
kit.scene('anuncio', {
  init(kit) {
    let chev = '';
    for (let r = 0; r < 7; r++) for (let c = 0; c < 4; c++) {
      const x = 10 + c * 120 + (r % 2) * 60, y = 40 + r * 120;
      const o = (1 - c / 4.2) * (0.55 + 0.45 * hash(r, c));
      chev += '<g style="opacity:' + o.toFixed(2) + '" transform="translate(' + x + ' ' + y + ') scale(0.9)"><path d="M4 50 H60"/><path d="M30 12 L68 50 L30 88"/></g>';
    }
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="panel-l"><svg class="chev anuncio-chev" viewBox="0 0 560 1350" style="width:560px;height:1350px">' + chev + '</svg>' +
      '<div class="words anuncio-words" style="left:45px;top:330px;width:470px;gap:18px;align-items:center;text-align:center"><p class="kicker anuncio-kicker">Analytix es ahora</p>' +
      '<h1 class="line anuncio-title" style="font-size:56px">Databricks Consulting &amp; SI Partner</h1></div>' +
      '<img class="logo anuncio-badge" alt="Databricks Brickbuilder Partner Network" src="' + kit.assets.url('badge-partner.png') + '" style="left:135px;top:870px;width:290px;height:290px"></div>' +
      '<div class="panel-r"><div class="tex anuncio-tex" style="background-image:url(' + kit.assets.url('fondo.jpg') + ')"></div><div class="tint"></div>' +
      '<canvas class="net anuncio-net" width="' + RW + '" height="' + RH + '" style="width:' + RW + 'px;height:' + RH + 'px"></canvas>' +
      '<img class="logo anuncio-logo" alt="Analytix Code Groove" src="' + kit.assets.url('logo-tight.png') + '" style="left:135px;top:1218px;width:250px;height:70px"></div>' +
      '<div class="seam"></div><div class="anuncio-glint" style="position:absolute;left:557px;top:0;width:4px;height:220px;background:linear-gradient(180deg, transparent, var(--main), transparent)"></div></div>'));
    const q = (s) => kit.stage.querySelector('.anuncio-' + s);
    this.chev = q('chev').style; this.words = q('words').style; this.title = q('title'); this.kicker = q('kicker');
    this.badge = q('badge').style; this.tex = q('tex').style; this.glint = q('glint').style;
    this.ctx = q('net').getContext('2d');
    const rnd = kit.rng(11);
    this.pts = [];
    for (let i = 0; i < 60; i++) this.pts.push({ x: 20 + rnd() * (RW - 40), y: rnd() * SPAN, v: 18 + rnd() * 26, ax: 25 + rnd() * 40, ay: 14 + rnd() * 24, fx: 0.45 + rnd() * 0.6, fy: 0.35 + rnd() * 0.5, p: rnd() * 6.28, big: rnd() > 0.8 });
  },
  render(t) {
    TextFx.fadeFromRight(this.kicker, t, -1.6, { stagger: 0.08, dur: 0.5, dx: 26 });
    TextFx.fadeFromRight(this.title, t, -1.3, { stagger: 0.08, dur: 0.5, dx: 26 });
    this.words.transform = 'translateY(' + (-1.6 * t) + 'px)';
    this.chev.transform = 'translate(' + (-1.2 * t) + 'px,' + (-3 * t) + 'px)';
    this.badge.transform = 'scale(' + (1 + 0.014 * Math.sin(2 * Math.PI * t / 3.4)) + ')';
    this.tex.transform = 'scale(' + lerp(1.0, 1.07, t / 10) + ') translateY(' + (-2.5 * t) + 'px)';
    this.glint.transform = 'translateY(' + (((t / 5) % 1) * 1700 - 260) + 'px)';
    const c = this.ctx;
    c.clearRect(0, 0, RW, RH);
    const off = t * 70;
    for (let col = 0; col < 37; col++) {
      const x = 8 + col * 14;
      const k0 = Math.floor((0 - off) / 18) - 1, k1 = Math.floor((1150 - off) / 18) + 1;
      for (let k = k0; k <= k1; k++) {
        const a = hash(col + 7, k + 1000);
        if (a < 0.62) continue;
        const y = k * 18 + off;
        const fade = cl(y / 120) * cl((1150 - y) / 160);
        if (fade <= 0) continue;
        c.fillStyle = 'rgba(205,240,232,' + ((a - 0.62) * 0.9 * fade).toFixed(3) + ')';
        c.fillRect(x, y, 2, 2);
      }
    }
    const P = this.pts.map((p) => {
      const yy = (((p.y - p.v * t) % SPAN) + SPAN) % SPAN - 90 + p.ay * Math.sin(t * p.fy + p.p * 1.7);
      return { x: p.x + p.ax * Math.sin(t * p.fx + p.p), y: yy, big: p.big, p: p.p, f: cl((yy + 40) / 140) * cl((1120 - yy) / 160) };
    });
    c.lineWidth = 1.3;
    for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) {
      const A = P[i], Bp = P[j];
      const dx = A.x - Bp.x, dy = A.y - Bp.y, d = Math.sqrt(dx * dx + dy * dy);
      if (d > 150) continue;
      const al = 0.6 * (1 - d / 150) * Math.min(A.f, Bp.f);
      if (al <= 0.01) continue;
      c.strokeStyle = 'rgba(4,214,169,' + al.toFixed(3) + ')';
      c.beginPath(); c.moveTo(A.x, A.y); c.lineTo(Bp.x, Bp.y); c.stroke();
      if (hash(i, j) < 0.35) {
        const s = (t * (0.6 + 0.6 * hash(j, i)) + hash(j + 3, i)) % 1;
        c.fillStyle = 'rgba(233,255,249,' + Math.min(1, al * 1.8).toFixed(3) + ')';
        c.beginPath(); c.arc(lerp(A.x, Bp.x, s), lerp(A.y, Bp.y, s), 2.2, 0, 6.2832); c.fill();
      }
    }
    for (const p of P) {
      if (p.f <= 0) continue;
      if (p.big) {
        const tw = Math.sin(t * 3 + p.p * 2);
        c.fillStyle = 'rgba(4,214,169,' + (0.16 * p.f * (1.2 + 0.6 * tw)).toFixed(3) + ')';
        c.beginPath(); c.arc(p.x, p.y, 11 + 5 * tw, 0, 6.2832); c.fill();
        c.fillStyle = 'rgba(233,255,249,' + p.f.toFixed(3) + ')';
        c.beginPath(); c.arc(p.x, p.y, 4.2 + 1.2 * tw, 0, 6.2832); c.fill();
      } else {
        c.fillStyle = 'rgba(180,245,228,' + (0.9 * p.f).toFixed(3) + ')';
        c.beginPath(); c.arc(p.x, p.y, 2.6, 0, 6.2832); c.fill();
      }
    }
  },
});