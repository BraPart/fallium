:root{--coffee:#3b2416;--disp:'Fraunces',Georgia,serif;--body:'Jost',system-ui,sans-serif;
--black:#faf5ec;--esp:#f0e6d4;--cream:#2b1b11;--beige:#6b5643;--gold:#a67c2e;--gold2:#8a6221;--line:rgba(59,36,22,.16);--glass:rgba(255,255,255,.72);--glass2:rgba(59,36,22,.07);--navbg:rgba(250,245,236,.88);--menubg:rgba(250,245,236,.98);--ph1:#e8d8bd;--ph2:#d6bf9b;--ghost:rgba(43,27,17,.45);--mapf:none;color-scheme:light}
html[data-theme=dark],.hero,.order,.site-foot,.cap,.nav:not(.solid){--black:#0d0907;--esp:#17100b;--cream:#f3e9d9;--beige:#cdb99b;--gold:#c9a35c;--gold2:#e3c488;--line:rgba(255,255,255,.12);--glass:rgba(255,255,255,.06);--glass2:rgba(255,255,255,.08);--navbg:rgba(13,9,7,.6);--menubg:rgba(23,16,11,.96);--ph1:#4a2c19;--ph2:#1c120c;--ghost:rgba(243,233,217,.5);--mapf:invert(.92) hue-rotate(180deg) saturate(.6) sepia(.25) contrast(.95);color-scheme:dark}
.hero,.order,.site-foot,.cap,.nav:not(.solid){color:var(--cream)}
html[lang=ar]{--disp:'Tajawal',system-ui,sans-serif;--body:'Tajawal',system-ui,sans-serif}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth;scroll-padding-top:80px}
body{font:400 1rem/1.7 var(--body);background:var(--black);color:var(--cream);-webkit-font-smoothing:antialiased;transition:background .3s,color .3s}
a{color:inherit;text-decoration:none}
:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
h1,h2,h3{font-family:var(--disp);font-weight:600;line-height:1.1;letter-spacing:-.01em}
h2{font-size:clamp(2rem,6.5vw,3.2rem);margin-bottom:1rem}
h3{font-size:1.25rem}
.wrap{max-width:1180px;margin:auto;padding:0 1.25rem}
.sec{padding:4.5rem 0}.deep{background:var(--esp)}
.lead{color:var(--beige);margin:-.2rem 0 0}
.note{color:var(--beige);font-size:.8rem;margin-top:1.5rem}
.two{display:grid;gap:2.5rem;align-items:center}
.grid{display:grid;gap:1rem;margin-top:2.5rem}
.glass{background:var(--glass);border:1px solid var(--line);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-radius:22px}

/* picture slots: photo fades in over a warm gradient; emoji shows until a photo loads */
.pic{position:relative;overflow:hidden;background:linear-gradient(150deg,var(--ph1),var(--ph2) 70%)}
.pic::before{content:"";position:absolute;inset:0;z-index:1;background-image:var(--img,none);background-size:cover;background-position:center;background-repeat:no-repeat;opacity:0;transition:opacity .8s,transform .8s}
.pic.ok::before{opacity:1}
.pic::after{content:attr(data-e);position:absolute;inset:0;display:grid;place-items:center;font-size:2.6rem;opacity:.45}
.pic.ok::after{display:none}

/* nav */
.nav{position:fixed;top:.7rem;left:.7rem;right:.7rem;z-index:50;display:flex;align-items:center;gap:.8rem;padding:.55rem .7rem;padding-inline-start:1.2rem;border-radius:99px;transition:background .3s,backdrop-filter .3s,box-shadow .3s}
.nav.solid{background:var(--navbg);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);box-shadow:0 10px 30px -12px rgba(0,0,0,.8)}
.logo{font:600 1.35rem var(--disp);letter-spacing:.14em;margin-inline-end:auto}
.logo span{font:700 1rem 'Tajawal',sans-serif;letter-spacing:0;color:var(--gold2);margin-inline-start:.6rem}
.nav-cta{display:none}
.burger,.ctl{font-family:var(--body);background:var(--glass2);border:0;color:inherit;width:42px;height:42px;border-radius:50%;font-size:1.1rem;cursor:pointer}
#menu{position:fixed;inset:4.6rem .7rem auto;background:var(--menubg);border:1px solid var(--line);border-radius:24px;display:flex;flex-direction:column;padding:1rem 1.4rem;transform:translateY(-140%);transition:transform .35s;z-index:-1}
#menu.open{transform:none}
#menu a{font:600 1.25rem var(--disp);padding:.7rem 0;border-bottom:1px solid var(--line)}

.btns{display:flex;gap:.7rem;flex-wrap:wrap;margin-top:1.8rem}.btns.c{justify-content:center}
.btn{display:inline-block;padding:.9rem 1.7rem;border-radius:99px;font-weight:600;border:1.5px solid transparent;transition:transform .25s,background .25s,color .25s,box-shadow .25s}
.btn:hover{transform:translateY(-3px)}
.gold{background:linear-gradient(135deg,#e3c488,#c9a35c);color:#1a0f08}.gold:hover{box-shadow:0 12px 28px -10px rgba(201,163,92,.7)}
.ghost{border-color:var(--ghost);color:var(--cream)}.ghost:hover{background:var(--cream);color:var(--black)}
.small{padding:.6rem 1.2rem;font-size:.9rem}

/* hero */
.hero{position:relative;min-height:92svh;display:grid;align-items:end;padding:7rem 1.25rem 3.5rem;isolation:isolate}
.hero-bg{position:absolute;inset:0;z-index:-2;background:radial-gradient(ellipse at 78% 22%,rgba(227,196,136,.5),transparent 45%),radial-gradient(ellipse at 15% 90%,rgba(201,163,92,.18),transparent 50%),linear-gradient(160deg,#3b2416,#0d0907 75%)}
.hero-bg::after{display:none}
.hero::before{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(13,9,7,.35),rgba(13,9,7,.85))}
.hero-in{max-width:760px;margin:0;margin-inline-end:auto;animation:rise 1s .1s both}
@media(min-width:1180px){.hero-in{margin-inline-start:max(0px,calc((100% - 1180px)/2))}}
.hero h1{font-size:clamp(2.4rem,9vw,4.8rem);margin:1.1rem 0}
.sub{font-size:1.05rem;color:var(--beige);max-width:44ch}
.pill{display:inline-block;padding:.45rem 1.1rem;border-radius:99px;font-size:.85rem;color:var(--gold2)}

/* about */
.about-pic{aspect-ratio:4/5;border-radius:28px}
.about p{color:var(--beige);margin-top:1rem}
.chips{list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1.4rem}
.chips li{border:1px solid var(--line);border-radius:99px;padding:.3rem .95rem;font-size:.85rem;color:var(--gold2)}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:.7rem;margin-top:1.8rem}
.stats div{padding:1rem .6rem;text-align:center}
.stats b{display:block;font:600 1.7rem var(--disp);color:var(--gold2)}
.stats span{font-size:.75rem;color:var(--beige)}

/* menu */
.item{position:relative;border-radius:24px;overflow:hidden;aspect-ratio:4/5;border:1px solid var(--line);transition:transform .45s,border-color .45s,box-shadow .45s}
.item .pic{position:absolute;inset:0}
.item:hover .pic::before{transform:scale(1.08)}
.item:hover{transform:translateY(-6px);border-color:var(--gold);box-shadow:0 24px 50px -28px rgba(201,163,92,.6)}
.cap{position:absolute;left:.6rem;right:.6rem;bottom:.6rem;z-index:2;padding:1rem 1.1rem;border-radius:18px;background:rgba(13,9,7,.55);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid var(--line)}
.cap p{font-size:.85rem;color:var(--beige);max-height:0;opacity:0;overflow:hidden;transition:max-height .4s,opacity .4s,margin .4s}
.item:hover .cap p,.item:focus-within .cap p{max-height:5rem;opacity:1;margin-top:.4rem}
@media(hover:none){.cap p{max-height:none;opacity:1;margin-top:.4rem}}

/* features */
.feat{padding:1.6rem;transition:transform .35s,border-color .35s,background .35s}
.feat:hover{transform:translateY(-6px);border-color:var(--gold);background:var(--glass2)}
.feat i{display:grid;place-items:center;width:54px;height:54px;border-radius:50%;background:rgba(201,163,92,.16);border:1px solid rgba(201,163,92,.4);font-style:normal;font-size:1.5rem;margin-bottom:1rem}
.feat p{color:var(--beige);font-size:.95rem}

/* reviews */
.rev{display:flex;align-items:stretch;overflow:hidden}
.stars{color:var(--gold2);letter-spacing:.15em;margin-bottom:.7rem}
.rev p{font:400 1.05rem/1.6 var(--disp)}
.rev cite{display:block;margin-top:1.1rem;font-size:.8rem;color:var(--beige);font-style:normal}

/* masonry gallery */
.masonry{columns:2;column-gap:.7rem;margin-top:2.5rem}
.masonry .pic{break-inside:avoid;margin-bottom:.7rem;border-radius:20px;cursor:pointer}
.m1{aspect-ratio:3/4}.m2{aspect-ratio:1}.m3{aspect-ratio:4/5}
.masonry .pic:hover::before{transform:scale(1.07)}
.masonry .pic .cap-g{display:none}
.masonry .pic[data-cap]{--c:attr(data-cap)}
.masonry .pic:hover{box-shadow:0 20px 40px -24px rgba(201,163,92,.7)}

/* contact */
.info{padding:1.3rem 1.5rem;margin-top:1.2rem}
.info p{padding:.7rem 0;border-bottom:1px solid var(--line);color:var(--cream)}.info p:last-child{border:0}
.info b{display:block;font-size:.8rem;color:var(--gold2);font-weight:500}
.map{border-radius:26px;overflow:hidden;min-height:340px;border:1px solid var(--line)}
.map iframe{width:100%;height:100%;min-height:340px;border:0;display:block;filter:var(--mapf)}

/* order */
.order{padding:3rem 1.25rem;background:linear-gradient(rgba(13,9,7,.72),rgba(13,9,7,.9)),radial-gradient(ellipse at 50% 0,#6b4423,#0d0907 70%)}
.order-in{max-width:880px;margin:auto;padding:3rem 1.5rem;text-align:center}
.order-in h2{font-size:clamp(1.9rem,6vw,3.2rem)}

.site-foot{background:#080504;padding-top:3.5rem;color:var(--beige)}
.foot{display:grid;gap:1.8rem}
.foot p{margin-top:.6rem;font-size:.93rem}
.social{display:flex;flex-wrap:wrap;gap:.6rem;align-content:flex-start}
.social a{border:1px solid var(--line);border-radius:99px;padding:.4rem 1.1rem;font-size:.85rem;transition:.25s}
.social a:hover{background:var(--gold);color:#1a0f08;border-color:var(--gold)}
.copy{text-align:center;font-size:.8rem;opacity:.6;padding:2.5rem 1rem 5rem}
.site-foot .logo{color:var(--cream)}

.wa{position:fixed;inset-inline-start:1rem;bottom:1rem;width:56px;height:56px;border-radius:50%;background:#25d366;display:grid;place-items:center;z-index:60;box-shadow:0 10px 24px rgba(0,0,0,.5);transition:transform .25s}
.wa:hover{transform:scale(1.1)}
.float-order{position:fixed;inset-inline-end:1rem;bottom:1rem;z-index:60;background:linear-gradient(135deg,#e3c488,#c9a35c);color:#1a0f08;font-weight:600;padding:.95rem 1.6rem;border-radius:99px;box-shadow:0 10px 24px rgba(0,0,0,.5);transform:translateY(120px);transition:transform .4s}
.float-order.show{transform:none}

.reveal{opacity:0;transform:translateY(26px);transition:opacity .8s var(--d,0s),transform .8s var(--d,0s)}
.reveal.in{opacity:1;transform:none}
@keyframes rise{from{opacity:0;transform:translateY(30px)}}

@media(min-width:700px){
 .grid.menu{grid-template-columns:repeat(2,1fr)}.grid.feats,.revs{grid-template-columns:repeat(2,1fr)}
 .masonry{columns:3}.foot{grid-template-columns:1.2fr 1fr 1fr}
}
@media(min-width:980px){
 .nav{left:50%;right:auto;transform:translateX(-50%);width:min(1120px,calc(100% - 3rem));padding-inline-start:1.6rem}
 .burger{display:none}.nav-cta{display:inline-block}
 #menu{position:static;flex-direction:row;background:none;border:0;padding:0;transform:none;gap:1.6rem;z-index:auto;order:0;margin:0 auto}
 #menu a{font:500 .95rem var(--body);border:0;padding:0;color:var(--beige);transition:color .2s}#menu a:hover{color:var(--gold2)}
 .logo{margin-inline-end:0}
 .two{grid-template-columns:1fr 1fr;gap:5rem}
 .grid.menu{grid-template-columns:repeat(4,1fr)}.grid.feats{grid-template-columns:repeat(3,1fr)}.revs{grid-template-columns:repeat(3,1fr)}
 .masonry{columns:4}.sec{padding:7rem 0}.hero{padding-bottom:5rem}.order{padding:6rem 1.5rem}.order-in{padding:4.5rem 2rem}
}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;scroll-behavior:auto}.reveal{opacity:1;transform:none}}

.ctl{border:0;color:inherit;width:42px;height:42px;border-radius:50%;font-size:.9rem;font-weight:600;cursor:pointer;transition:background .25s}
.ctl:hover,.burger:hover{background:var(--line)}
html[lang=ar] h1,html[lang=ar] h2,html[lang=ar] h3{line-height:1.35;letter-spacing:0}
html[lang=ar] .sub,html[lang=ar] .rev p{line-height:1.8}
a[href^=tel]{direction:ltr;unicode-bidi:isolate;display:inline-block}
.stats b{direction:ltr}
.rev-body{flex:1;min-width:0;padding:1.7rem}
.rev-pic{flex:0 0 38%;border-radius:0}
html[dir=rtl] .rev{flex-direction:row-reverse}
@media(max-width:480px){.rev-pic{flex-basis:34%}.rev-body{padding:1.3rem}}

/* brand always in Fraunces, even in Arabic */
.logo{font-family:'Fraunces',Georgia,serif;white-space:nowrap}
.ctl,.burger{flex:0 0 auto}
/* phones: keep logo + 3 round buttons on one row */
@media(max-width:979px){
 .nav{gap:.4rem;padding:.45rem .5rem;padding-inline-start:.95rem}
 .logo{font-size:1.1rem;letter-spacing:.08em}
 .logo span{font-size:.9rem;margin-inline-start:.4rem}
 .ctl,.burger{width:38px;height:38px}
}
@media(max-width:360px){.logo{font-size:.98rem;letter-spacing:.05em}.logo span{display:none}}
