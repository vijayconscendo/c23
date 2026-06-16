import Head from 'next/head';
import { useEffect } from 'react';

const foundationStyles = `
  :root{
    --ink:#1C1611; --ink2:#241B14; --panel:#26201A; --gold:#E6A93C; --gold2:#f0b751;
    --cream:#F4ECDD; --muted:#B0A28A; --line:rgba(244,236,221,.13); --maxw:1120px;
  }
  .f23 *{box-sizing:border-box;margin:0;padding:0}
  .f23{background:var(--ink);color:var(--cream);font-family:"Inter",system-ui,sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden;min-height:100vh}
  .f23 h1,.f23 h2,.f23 h3,.f23 .serif{font-family:"Fraunces",Georgia,serif;font-weight:600}
  .f23 .wrap{max-width:var(--maxw);margin:0 auto;padding:0 28px}
  .f23 .eyebrow{font-size:.72rem;letter-spacing:.26em;text-transform:uppercase;color:var(--gold);font-weight:600}
  .f23 .gold{color:var(--gold)} .f23 .muted{color:var(--muted)}
  .f23 a{color:inherit}
  .f23 .btn{display:inline-flex;align-items:center;gap:.5em;font-family:"Inter",sans-serif;font-weight:600;font-size:.98rem;padding:14px 26px;border-radius:3px;text-decoration:none;transition:.18s ease;border:1px solid transparent;cursor:pointer}
  .f23 .btn-primary{background:var(--gold);color:#1A130C}
  .f23 .btn-primary:hover{background:var(--gold2);transform:translateY(-1px)}
  .f23 .btn-ghost{border-color:var(--line);color:var(--cream)}
  .f23 .btn-ghost:hover{border-color:var(--gold);color:var(--gold)}
  .f23 a:focus-visible,.f23 .btn:focus-visible{outline:2px solid var(--gold);outline-offset:3px;border-radius:3px}

  .f23 header.nav{position:fixed;top:0;left:0;right:0;z-index:50;transition:background .3s,border-color .3s;border-bottom:1px solid transparent}
  .f23 header.nav.scrolled{background:rgba(20,15,10,.86);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
  .f23 .nav .row{display:flex;align-items:center;justify-content:space-between;height:68px}
  .f23 .brand{font-family:"Inter",sans-serif;font-weight:600;letter-spacing:.04em;font-size:1.02rem;text-decoration:none;color:var(--cream)}
  .f23 .brand b{color:var(--gold)}
  .f23 .nav-links{display:flex;gap:30px}
  .f23 .nav-links a{text-decoration:none;color:var(--muted);font-size:.92rem;font-weight:500;transition:.18s}
  .f23 .nav-links a:hover{color:var(--cream)}
  @media (max-width:760px){ .f23 .nav-links{display:none} }

  .f23 .hero{position:relative;min-height:100vh;display:flex;align-items:center;padding:120px 0 90px;overflow:hidden;
        background:linear-gradient(160deg,#14100B 0%,#2a1c10 55%,#3a2614 100%)}
  .f23 .hero .sky{position:absolute;inset:0;z-index:0}
  .f23 .hero .sky svg{width:100%;height:100%;object-fit:cover;display:block}
  .f23 .hero .scrim{position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(18,12,8,.92) 0%,rgba(18,12,8,.74) 40%,rgba(18,12,8,.28) 74%,rgba(18,12,8,.5) 100%)}
  .f23 .hero .wrap{position:relative;z-index:2}
  .f23 .hero .rule{width:62px;height:3px;background:var(--gold);margin:18px 0 0}
  .f23 .hero h1{font-size:clamp(3.1rem,9vw,6.6rem);line-height:.96;letter-spacing:-.015em;margin:28px 0 0;max-width:13ch;color:var(--cream)}
  .f23 .hero .lede{font-family:"Fraunces",serif;font-size:clamp(1.1rem,2.3vw,1.45rem);color:var(--cream);opacity:.92;max-width:34ch;margin:26px 0 0;line-height:1.45}
  .f23 .pledge{display:inline-flex;align-items:baseline;gap:.6em;margin-top:30px;padding:14px 22px;border:1px solid var(--line);border-radius:4px;background:rgba(38,32,26,.5)}
  .f23 .pledge .n{font-family:"Fraunces",serif;font-weight:700;color:var(--gold);font-size:1.7rem;line-height:1}
  .f23 .pledge .t{color:var(--cream);font-size:.96rem}
  .f23 .hero .cta{display:flex;gap:14px;flex-wrap:wrap;margin-top:32px}

  .f23 section{padding:104px 0;border-top:1px solid var(--line);position:relative}
  .f23 .sec-eyebrow{margin-bottom:26px}
  .f23 h2{font-size:clamp(2rem,5vw,3.1rem);line-height:1.05;letter-spacing:-.01em}
  .f23 .lead-p{color:var(--muted);max-width:56ch;margin-top:20px;font-size:1.08rem}

  .f23 .need-grid{display:grid;grid-template-columns:1.4fr .9fr;gap:48px;align-items:center}
  .f23 .figures{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--line);border:1px solid var(--line);margin-top:8px}
  .f23 .fig{background:var(--ink);padding:30px 26px}
  .f23 .fig .num{font-family:"Fraunces",serif;font-weight:700;color:var(--gold);font-size:clamp(2.3rem,5vw,3.1rem);line-height:1}
  .f23 .fig .desc{margin-top:10px;font-size:.98rem}
  .f23 .fig .src{margin-top:12px;font-size:.74rem;color:var(--muted);letter-spacing:.02em}
  .f23 .need-art{display:flex;justify-content:center}
  .f23 .need-art svg{width:min(78%,300px);height:auto}
  .f23 .need-foot{font-family:"Fraunces",serif;font-size:clamp(1.15rem,2.6vw,1.55rem);margin-top:36px;max-width:30ch;line-height:1.3}

  .f23 .goal{background:var(--ink2);text-align:center}
  .f23 .goal .big{font-family:"Fraunces",serif;font-weight:700;color:var(--gold);font-size:clamp(5rem,18vw,11rem);line-height:.9;letter-spacing:-.02em}
  .f23 .goal .sub{font-family:"Fraunces",serif;font-size:clamp(1.3rem,3.4vw,2rem);margin-top:6px;max-width:20ch;margin-left:auto;margin-right:auto;line-height:1.25}
  .f23 .goal .desc{color:var(--muted);max-width:46ch;margin:24px auto 0;font-size:1.06rem}
  .f23 .grid-kids{display:grid;grid-template-columns:repeat(20,1fr);gap:6px;max-width:760px;margin:46px auto 0}
  .f23 .grid-kids .cell{opacity:0;transform:scale(.4);transition:opacity .4s,transform .4s}
  .f23 .grid-kids .cell.in{opacity:1;transform:none}
  .f23 .grid-kids svg{width:100%;height:auto;display:block}
  .f23 .grid-cap{margin-top:22px;color:var(--muted);font-size:.86rem;letter-spacing:.04em}
  @media (max-width:680px){ .f23 .grid-kids{grid-template-columns:repeat(10,1fr)} }

  .f23 h2.plan-h{max-width:14ch}
  .f23 .timeline{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:54px;position:relative}
  .f23 .timeline::before{content:"";position:absolute;top:26px;left:8%;right:8%;height:2px;background:var(--line)}
  .f23 .tl{position:relative;text-align:center;padding-top:0}
  .f23 .tl .dot{width:54px;height:54px;margin:0 auto;border-radius:50%;background:var(--panel);border:1px solid var(--line);display:flex;align-items:center;justify-content:center;position:relative;z-index:1}
  .f23 .tl .dot svg{width:28px;height:28px}
  .f23 .tl .date{margin-top:16px;color:var(--gold);font-weight:600;font-size:.84rem;letter-spacing:.03em}
  .f23 .tl h3{font-size:1.12rem;margin-top:6px}
  .f23 .tl p{color:var(--muted);font-size:.92rem;margin-top:8px}
  @media (max-width:760px){
    .f23 .timeline{grid-template-columns:1fr;gap:34px} .f23 .timeline::before{display:none}
    .f23 .tl{display:grid;grid-template-columns:54px 1fr;gap:18px;text-align:left;align-items:start}
    .f23 .tl .dot{margin:0} .f23 .tl .date{margin-top:2px}
  }
  .f23 .pillars{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:64px}
  .f23 .pillar{background:var(--panel);border:1px solid var(--line);border-radius:5px;padding:34px 30px;display:flex;gap:22px;align-items:center}
  .f23 .pillar .art{flex:0 0 110px}
  .f23 .pillar .art svg{width:110px;height:auto;display:block}
  .f23 .pillar .tag{font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;font-weight:600}
  .f23 .pillar.now .tag{color:var(--gold)} .f23 .pillar.next .tag{color:var(--muted)}
  .f23 .pillar h3{font-size:1.4rem;margin:10px 0 8px}
  .f23 .pillar p{color:var(--muted);font-size:.96rem}
  @media (max-width:620px){ .f23 .pillars{grid-template-columns:1fr} .f23 .pillar{flex-direction:column;text-align:center} }

  .f23 .why{background:var(--ink2)}
  .f23 .why p{font-family:"Fraunces",serif;font-size:clamp(1.35rem,3.4vw,2rem);line-height:1.32;max-width:24ch}
  .f23 .why .small{font-family:"Inter",sans-serif;font-size:1rem;color:var(--muted);max-width:50ch;margin-top:22px;line-height:1.6}

  .f23 .involve h2{max-width:18ch;font-size:clamp(2rem,5vw,3.1rem);line-height:1.05;letter-spacing:-.01em}
  .f23 .involve .ways{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:48px}
  .f23 .way{border:1px solid var(--line);border-radius:5px;padding:30px 26px;transition:.18s}
  .f23 .way:hover{border-color:var(--gold)}
  .f23 .way h3{font-size:1.25rem;margin-bottom:8px}
  .f23 .way p{color:var(--muted);font-size:.95rem;margin-bottom:18px;min-height:46px}
  .f23 .way a{color:var(--gold);font-weight:600;text-decoration:none;font-size:.92rem}
  .f23 .way a:hover{text-decoration:underline}
  .f23 .involve .big-cta{margin-top:46px;display:flex;gap:20px;align-items:center;flex-wrap:wrap}
  .f23 .trio{display:flex;gap:6px;margin-top:60px;justify-content:center}
  .f23 .trio svg{width:clamp(90px,18vw,150px);height:auto}
  @media (max-width:620px){ .f23 .involve .ways{grid-template-columns:1fr} }

  .f23 footer{padding:60px 0 70px;border-top:1px solid var(--line)}
  .f23 .foot{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;align-items:flex-end}
  .f23 .foot .wm{font-weight:600;letter-spacing:.06em;font-size:1rem}
  .f23 .foot .wm b{color:var(--gold)}
  .f23 .foot a.mail{color:var(--gold);text-decoration:none;font-weight:500;display:inline-block;margin-top:8px}
  .f23 .foot a.mail:hover{text-decoration:underline}
  .f23 .foot .meta{color:var(--muted);font-size:.82rem;text-align:right;line-height:1.7}
  .f23 .foot .tag{font-family:"Fraunces",serif;color:var(--cream);opacity:.7}

  .f23 .reveal{opacity:0;transform:translateY(20px);transition:opacity .7s ease,transform .7s ease}
  .f23 .reveal.in{opacity:1;transform:none}
  @media (prefers-reduced-motion:reduce){
    .f23 *{scroll-behavior:auto!important}
    .f23 .reveal,.f23 .grid-kids .cell{opacity:1!important;transform:none!important;transition:none!important}
    .f23 .btn-primary:hover{transform:none}
  }
`;

export default function Foundation() {
  useEffect(() => {
    (function(){
      "use strict";
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      var SKIN=['#9A6A44','#B4845F','#70492F','#C49A74','#5E3D28'];
      var HAIRD='#281C14';
      var ACCENT=['#C6783A','#788060','#96402E','#D6C4A8','#C9A24B'];
      var SHIRT=['#C47836','#78805C','#D68C46','#B4523A','#D6C4A8','#9A6A44'];

      function face(skin,look){
        var eyes = look==='open'
          ? '<circle cx="84" cy="100" r="6.5" fill="#241a12"/><circle cx="136" cy="100" r="6.5" fill="#241a12"/>'
          : '<path d="M74 102 Q84 92 94 102" stroke="#241a12" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M126 102 Q136 92 146 102" stroke="#241a12" stroke-width="6" fill="none" stroke-linecap="round"/>';
        var cheeks='<circle cx="78" cy="120" r="10" fill="#d98a63" opacity="0.5"/><circle cx="142" cy="120" r="10" fill="#d98a63" opacity="0.5"/>';
        var smile='<path d="M86 122 Q110 146 134 122" stroke="#241a12" stroke-width="6.5" fill="none" stroke-linecap="round"/>';
        return eyes+cheeks+smile;
      }
      function hair(style,hc,skin){
        if(style==='afro') return '<ellipse cx="110" cy="92" rx="76" ry="74" fill="'+hc+'"/><circle cx="110" cy="112" r="60" fill="'+skin+'"/>';
        if(style==='puffs') return '<ellipse cx="62" cy="58" rx="30" ry="30" fill="'+hc+'"/><ellipse cx="158" cy="58" rx="30" ry="30" fill="'+hc+'"/><ellipse cx="110" cy="86" rx="64" ry="40" fill="'+hc+'"/><circle cx="110" cy="110" r="60" fill="'+skin+'"/>';
        if(style==='scarf') return '<ellipse cx="110" cy="94" rx="70" ry="72" fill="'+hc+'"/><circle cx="110" cy="118" r="56" fill="'+skin+'"/><circle cx="168" cy="118" r="16" fill="'+hc+'"/>';
        if(style==='cap') return '<ellipse cx="110" cy="78" rx="66" ry="50" fill="'+hc+'"/><rect x="108" y="74" width="64" height="16" rx="8" fill="'+hc+'"/><circle cx="110" cy="108" r="60" fill="'+skin+'"/>';
        return '<ellipse cx="110" cy="86" rx="66" ry="58" fill="'+hc+'"/><circle cx="110" cy="110" r="60" fill="'+skin+'"/>';
      }
      function bowl(){
        return '<g><path d="M40 196 Q40 184 50 184 L170 184 Q180 184 178 196 Z" fill="#9A6A44"/>'
          +'<path d="M52 196 Q110 250 168 196 Z" fill="#C9925A"/>'
          +'<ellipse cx="110" cy="196" rx="60" ry="14" fill="#caa069"/>'
          +'<path d="M110 184 Q100 168 110 152" stroke="#cdbfa8" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7"/>'
          +'<path d="M86 184 Q78 170 86 156" stroke="#cdbfa8" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6"/>'
          +'<path d="M134 184 Q142 170 134 156" stroke="#cdbfa8" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6"/></g>';
      }
      function book(){
        return '<g><path d="M40 170 L108 182 L108 232 L40 222 Z" fill="#96402E"/>'
          +'<path d="M180 170 L112 182 L112 232 L180 222 Z" fill="#96402E"/>'
          +'<path d="M48 174 L106 185 L106 226 L48 217 Z" fill="#F4ECDD"/>'
          +'<path d="M172 174 L114 185 L114 226 L172 217 Z" fill="#F4ECDD"/>'
          +'<line x1="56" y1="190" x2="100" y2="198" stroke="#b9ad97" stroke-width="3"/>'
          +'<line x1="56" y1="202" x2="100" y2="210" stroke="#b9ad97" stroke-width="3"/>'
          +'<line x1="120" y1="198" x2="164" y2="190" stroke="#b9ad97" stroke-width="3"/>'
          +'<line x1="120" y1="210" x2="164" y2="202" stroke="#b9ad97" stroke-width="3"/></g>';
      }
      function kid(o){
        o=o||{};
        var skin=o.skin||SKIN[0], hc=o.hairCol||HAIRD, shirt=o.shirt||SHIRT[0],
            style=o.hair||'afro', look=o.look||'smile', prop=o.prop||null, arms=o.arms||'down';
        var armsSvg='';
        if(arms==='up') armsSvg='<path d="M70 168 Q40 120 44 96" stroke="'+skin+'" stroke-width="26" fill="none" stroke-linecap="round"/><path d="M150 168 Q180 120 176 96" stroke="'+skin+'" stroke-width="26" fill="none" stroke-linecap="round"/>';
        var propArms='', propSvg='';
        if(prop){ propArms='<path d="M58 176 Q70 200 96 206" stroke="'+skin+'" stroke-width="22" fill="none" stroke-linecap="round"/><path d="M162 176 Q150 200 124 206" stroke="'+skin+'" stroke-width="22" fill="none" stroke-linecap="round"/>';
          propSvg = prop==='bowl'?bowl():book(); }
        return '<svg viewBox="0 0 220 270" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">'
          +armsSvg
          +'<rect x="30" y="150" width="160" height="130" rx="74" fill="'+shirt+'"/>'
          +'<rect x="92" y="148" width="36" height="20" fill="'+skin+'"/>'
          +'<circle cx="46" cy="104" r="15" fill="'+skin+'"/><circle cx="174" cy="104" r="15" fill="'+skin+'"/>'
          +'<circle cx="110" cy="104" r="60" fill="'+skin+'"/>'
          +hair(style,hc,skin)+face(skin,look)+propArms+propSvg+'</svg>';
      }
      function headIcon(skin,hc,shirt){
        return '<svg viewBox="0 0 40 46" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="6" y="28" width="28" height="20" rx="14" fill="'+shirt+'"/><circle cx="20" cy="18" r="13" fill="'+skin+'"/><ellipse cx="20" cy="13" rx="13" ry="9" fill="'+hc+'"/><circle cx="20" cy="20" r="11" fill="'+skin+'"/></svg>';
      }

      var G='#E6A93C';
      var icSun='<svg viewBox="0 0 32 32" fill="none" stroke="'+G+'" stroke-width="2" stroke-linecap="round"><circle cx="16" cy="16" r="6"/><path d="M16 3v3M16 26v3M3 16h3M26 16h3M7 7l2 2M23 23l-2-2M25 7l-2 2M9 23l-2 2"/></svg>';
      var icBowl='<svg viewBox="0 0 32 32" fill="none" stroke="'+G+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 15h22a11 11 0 0 1-22 0Z"/><path d="M13 9c0-2 2-2 2-4M19 9c0-2 2-2 2-4"/></svg>';
      var icHeart='<svg viewBox="0 0 32 32" fill="none" stroke="'+G+'" stroke-width="2" stroke-linejoin="round"><path d="M16 27S5 20 5 12.5A5.5 5.5 0 0 1 16 9a5.5 5.5 0 0 1 11 3.5C27 20 16 27 16 27Z"/></svg>';
      var icRise='<svg viewBox="0 0 32 32" fill="none" stroke="'+G+'" stroke-width="2" stroke-linecap="round"><path d="M3 24h26"/><path d="M9 24a7 7 0 0 1 14 0"/><path d="M16 9v3M7 13l2 2M25 13l-2 2"/></svg>';

      function skyline(){
        var W=1600,H=900, s='';
        s+='<svg viewBox="0 0 '+W+' '+H+'" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">';
        s+='<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">'
          +'<stop offset="0" stop-color="#14100B"/><stop offset="0.55" stop-color="#3a2412"/><stop offset="0.7" stop-color="#6b3f1c"/></linearGradient>'
          +'<radialGradient id="sun" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffcf73" stop-opacity="0.9"/><stop offset="0.4" stop-color="#e89a3c" stop-opacity="0.5"/><stop offset="1" stop-color="#e89a3c" stop-opacity="0"/></radialGradient></defs>';
        s+='<rect width="'+W+'" height="'+H+'" fill="url(#sky)"/>';
        var sx=1010, sy=560;
        s+='<circle cx="'+sx+'" cy="'+sy+'" r="320" fill="url(#sun)"><animate attributeName="r" values="300;330;300" dur="6s" repeatCount="indefinite"/></circle>';
        s+='<circle cx="'+sx+'" cy="'+sy+'" r="74" fill="#fcce68"/>';
        s+='<rect x="0" y="560" width="'+W+'" height="340" fill="#2a1a0d"/>';
        function roofs(baseY,h,color,seed,gap){
          var x=-40, rnd=seed;
          function r(){ rnd=(rnd*9301+49297)%233280; return rnd/233280; }
          var out='';
          while(x<W+40){
            var bw=Math.floor(120+r()*90), bh=Math.floor(h*0.55+r()*h*0.45), top=baseY-bh;
            out+='<rect x="'+x+'" y="'+top+'" width="'+bw+'" height="'+(baseY-top)+'" fill="'+color+'"/>';
            out+='<path d="M'+(x-6)+' '+top+' L'+(x+bw+6)+' '+top+' L'+(x+bw/2)+' '+(top-bh*0.28)+' Z" fill="'+color+'"/>';
            if(r()<0.5) out+='<rect x="'+(x+bw*0.4)+'" y="'+(top+bh*0.4)+'" width="12" height="12" fill="#e8a23f"/>';
            x+=bw+gap+Math.floor(r()*16);
          }
          return out;
        }
        s+=roofs(600,120,'#4a3018',7,10);
        s+=roofs(680,150,'#33200f',13,8);
        s+=roofs(800,200,'#1a1108',23,6);
        s+='<g fill="#1a1108"><rect x="250" y="470" width="6" height="120"/><rect x="300" y="470" width="6" height="120"/><ellipse cx="278" cy="466" rx="52" ry="22"/></g>';
        s+='<g fill="#140d07"><path d="M1185 880 L1178 800" stroke="#140d07" stroke-width="22" stroke-linecap="round"/>'
          +'<path d="M1215 880 L1222 800" stroke="#140d07" stroke-width="22" stroke-linecap="round"/>'
          +'<path d="M1200 815 L1200 720" stroke="#140d07" stroke-width="40" stroke-linecap="round"/>'
          +'<path d="M1200 735 Q1245 700 1255 660" stroke="#140d07" stroke-width="18" fill="none" stroke-linecap="round"/>'
          +'<path d="M1200 745 Q1165 730 1150 760" stroke="#140d07" stroke-width="16" fill="none" stroke-linecap="round"/>'
          +'<circle cx="1200" cy="690" r="30"/></g>';
        s+='</svg>';
        return s;
      }

      function set(id,html){ var el=document.getElementById(id); if(el) el.innerHTML=html; }
      try{
        set('sky', skyline());
        set('needArt', kid({hair:'afro',skin:SKIN[2],shirt:SHIRT[0],look:'open'}));
        set('pillarBowl', kid({hair:'puffs',skin:SKIN[1],shirt:SHIRT[1],look:'open',prop:'bowl'}));
        set('pillarBook', kid({hair:'scarf',skin:SKIN[3],hairCol:ACCENT[2],shirt:SHIRT[4],look:'smile',prop:'book'}));
        set('ic1',icSun); set('ic2',icBowl); set('ic3',icHeart); set('ic4',icRise);
        var trio = kid({hair:'afro',skin:SKIN[0],shirt:SHIRT[0],look:'smile'})
                 + kid({hair:'puffs',skin:SKIN[1],shirt:SHIRT[1],look:'open'})
                 + kid({hair:'scarf',skin:SKIN[2],hairCol:ACCENT[2],shirt:SHIRT[4],look:'smile'});
        set('trio', trio);
        var g=document.getElementById('grid');
        if(g){ var frag='';
          for(var i=0;i<100;i++){ frag+='<div class="cell">'+headIcon(SKIN[i%5],ACCENT[(i*3)%5],SHIRT[(i*7)%6])+'</div>'; }
          g.innerHTML=frag;
        }
      }catch(e){}

      var nav=document.getElementById('nav');
      function onScroll(){ if(window.scrollY>40) nav.classList.add('scrolled'); else nav.classList.remove('scrolled'); }
      onScroll(); window.addEventListener('scroll',onScroll,{passive:true});

      function countUp(el,target){
        if(!el) return;
        if(reduce){ el.textContent=target.toLocaleString('en-US'); return; }
        var start=null, dur=1500;
        function step(ts){ if(!start)start=ts; var p=Math.min((ts-start)/dur,1);
          var val=Math.floor((1-Math.pow(1-p,3))*target);
          el.textContent=val.toLocaleString('en-US'); if(p<1) requestAnimationFrame(step); }
        requestAnimationFrame(step);
      }

      var revealEls=[].slice.call(document.querySelectorAll('.reveal'));
      var goalDone=false;
      function fireGrid(){
        var cells=[].slice.call(document.querySelectorAll('.grid-kids .cell'));
        cells.forEach(function(c,i){ if(reduce){c.classList.add('in');return;} setTimeout(function(){c.classList.add('in');}, i*14); });
      }
      if('IntersectionObserver' in window){
        var io=new IntersectionObserver(function(es){
          es.forEach(function(e){
            if(e.isIntersecting){
              e.target.classList.add('in');
              if(e.target.id==='goalNum' && !goalDone){ goalDone=true; countUp(e.target,10000); fireGrid(); }
              io.unobserve(e.target);
            }
          });
        },{threshold:0.15});
        revealEls.forEach(function(el){ io.observe(el); });
        var gn=document.getElementById('goalNum'); if(gn) io.observe(gn);
        countUp(document.getElementById('pledgeNum'),10000);
      } else {
        revealEls.forEach(function(el){ el.classList.add('in'); });
        countUp(document.getElementById('pledgeNum'),10000);
        countUp(document.getElementById('goalNum'),10000); fireGrid();
      }
    })();
  }, []);

  return (
    <div className="f23">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cloud23 Foundation — No child learns hungry</title>
        <meta name="description" content="The Cloud23 Foundation's goal for its first 100 days: feed 10,000 children in and around Johannesburg. Launched Youth Day 2026. Food first, because no child should learn hungry." />
        <meta property="og:title" content="Cloud23 Foundation — No child learns hungry" />
        <meta property="og:description" content="Our goal for the first 100 days: feed 10,000 children. Launched Youth Day 2026." />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: foundationStyles }} />
      </Head>

      <header className="nav" id="nav">
        <div className="wrap row">
          <a href="#top" className="brand">Cloud23 <b>Foundation</b></a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#need">The need</a>
            <a href="#goal">Our goal</a>
            <a href="#plan">The plan</a>
            <a href="#involve">Get involved</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-label="Introduction">
          <div className="sky" id="sky" aria-hidden="true"></div>
          <div className="scrim"></div>
          <div className="wrap">
            <div className="eyebrow">Launched Youth Day 2026 · 50 years after Soweto</div>
            <div className="rule"></div>
            <h1>No child learns <span className="gold">hungry.</span></h1>
            <p className="lede">Nearly one in four South African children lives in food poverty. In Johannesburg — the wealthiest city on the continent, and our home — kids still go to school hungry. We start with the one thing they need before they can learn: a meal.</p>
            <div className="pledge">
              <span className="n" id="pledgeNum">10,000</span>
              <span className="t">children fed in our first 100 days.</span>
            </div>
            <div className="cta">
              <a className="btn btn-primary" href="mailto:hi@cloud23.io?subject=Getting%20involved%20with%20Cloud23%20Foundation">Get involved</a>
              <a className="btn btn-ghost" href="#plan">See the plan</a>
            </div>
          </div>
        </section>

        <section id="need" aria-labelledby="need-h">
          <div className="wrap">
            <div className="eyebrow sec-eyebrow reveal">The reality</div>
            <div className="need-grid">
              <div>
                <h2 id="need-h" className="reveal">A hungry child<br />can&apos;t learn.</h2>
                <div className="figures reveal">
                  <div className="fig"><div className="num">1 in 4</div><div className="desc">children live in severe food poverty.</div><div className="src">UNICEF</div></div>
                  <div className="fig"><div className="num">18 million</div><div className="desc">South Africans go hungry every day.</div><div className="src">FoodForward SA, 2026</div></div>
                  <div className="fig"><div className="num">70%</div><div className="desc">of surveyed households are food insecure.</div><div className="src">FoodForward SA, 2026</div></div>
                  <div className="fig"><div className="num">~10 million</div><div className="desc">children rely on a school meal — often their only full one.</div><div className="src">National School Nutrition Programme</div></div>
                </div>
                <p className="need-foot reveal">And when the school holidays come, that one meal <span className="gold">disappears.</span></p>
              </div>
              <div className="need-art reveal" id="needArt" aria-hidden="true"></div>
            </div>
          </div>
        </section>

        <section id="goal" className="goal" aria-labelledby="goal-h">
          <div className="wrap">
            <div className="eyebrow sec-eyebrow reveal">Our first 100 days</div>
            <div className="big reveal" id="goalNum">10,000</div>
            <div className="sub reveal" id="goal-h">children fed by Heritage Day, 24 September 2026.</div>
            <p className="desc reveal">This is our starting promise — not a slogan. Ten thousand meals for children in and around Johannesburg: served, counted, and reported back on, in one hundred days.</p>
            <div className="grid-kids reveal" id="grid" aria-hidden="true"></div>
            <div className="grid-cap reveal">Each figure represents 100 children.</div>
          </div>
        </section>

        <section id="plan" aria-labelledby="plan-h">
          <div className="wrap">
            <div className="eyebrow sec-eyebrow reveal">How we&apos;ll get there</div>
            <h2 id="plan-h" className="plan-h reveal">Food first.<br />Not food <span className="gold">only.</span></h2>
            <div className="timeline reveal">
              <div className="tl">
                <div className="dot" id="ic1"></div>
                <div><div className="date">16 June</div><h3>Launch</h3><p>We make the promise public on Youth Day.</p></div>
              </div>
              <div className="tl">
                <div className="dot" id="ic2"></div>
                <div><div className="date">27 Jun &ndash; 20 Jul</div><h3>Winter holidays</h3><p>We feed where the gap is sharpest — the weeks the school meal stops.</p></div>
              </div>
              <div className="tl">
                <div className="dot" id="ic3"></div>
                <div><div className="date">18 July</div><h3>Mandela Day</h3><p>A feeding drive on the day the country gives.</p></div>
              </div>
              <div className="tl">
                <div className="dot" id="ic4"></div>
                <div><div className="date">24 September</div><h3>Heritage Day</h3><p>We report back — with real numbers.</p></div>
              </div>
            </div>
            <div className="pillars">
              <div className="pillar now reveal">
                <div className="art" id="pillarBowl" aria-hidden="true"></div>
                <div><div className="tag">Active now</div><h3>Nourish the body</h3><p>Getting real meals to children who need them, starting in our own backyard.</p></div>
              </div>
              <div className="pillar next reveal">
                <div className="art" id="pillarBook" aria-hidden="true"></div>
                <div><div className="tag">Coming next</div><h3>Nourish the future</h3><p>Cloud23 was built on skills and opportunity. Once children are fed, we bring those forward too.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="why" aria-label="About">
          <div className="wrap">
            <p className="reveal">We start where it matters most — making sure children are fed enough to one day use everything else we could teach them.</p>
            <p className="small reveal">The Cloud23 Foundation is the giving-forward arm of Cloud23, a software company built in Johannesburg. Same city, same children, same future we all share.</p>
          </div>
        </section>

        <section id="involve" className="involve" aria-labelledby="inv-h">
          <div className="wrap">
            <div className="eyebrow sec-eyebrow reveal">Be part of it</div>
            <h2 id="inv-h" className="reveal">Build the next generation a future worth running toward.</h2>
            <p className="lead-p reveal">We&apos;re keeping this simple — no forms, just people. Whether you want to fund meals, supply food, or give your time, email us and we&apos;ll take it from there.</p>
            <div className="ways">
              <div className="way reveal"><h3>Partner &amp; fund</h3><p>Organisations who want to fund or co-build the programme.</p><a href="mailto:hi@cloud23.io?subject=Partnering%20with%20Cloud23%20Foundation">hi@cloud23.io &rarr;</a></div>
              <div className="way reveal"><h3>Supply food</h3><p>Producers, retailers and kitchens who can help us feed more, faster.</p><a href="mailto:hi@cloud23.io?subject=Supplying%20food%20%E2%80%94%20Cloud23%20Foundation">hi@cloud23.io &rarr;</a></div>
              <div className="way reveal"><h3>Volunteer</h3><p>Give your time on the ground, especially around Mandela Day.</p><a href="mailto:hi@cloud23.io?subject=Volunteering%20with%20Cloud23%20Foundation">hi@cloud23.io &rarr;</a></div>
            </div>
            <div className="big-cta reveal">
              <a className="btn btn-primary" href="mailto:hi@cloud23.io?subject=Cloud23%20Foundation">Email hi@cloud23.io</a>
              <span className="muted">The simplest way in.</span>
            </div>
            <div className="trio reveal" id="trio" aria-hidden="true"></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <div>
            <div className="wm">Cloud23 <b>Foundation</b></div>
            <a className="mail" href="mailto:hi@cloud23.io">hi@cloud23.io</a>
          </div>
          <div className="meta">
            <div className="tag">No child learns hungry.</div>
            An initiative of Cloud23<br />
            Launched Youth Day, 16 June 2026 · Johannesburg, South Africa
          </div>
        </div>
      </footer>
    </div>
  );
}
