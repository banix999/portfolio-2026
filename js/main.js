const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
const PH=(l,w,h,i)=>{const a=(i*47)%360;return"data:image/svg+xml,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${a},8%,16%)"/><stop offset="1" stop-color="hsl(${a},10%,6%)"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><text x="50%" y="50%" fill="#777" font-family="sans-serif" font-size="${Math.round(w/16)}" text-anchor="middle">${l}</text></svg>`)};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const SECS=[["home","Home"],["about","About"],["skills","Skills"],["experience","Experience"],["services","Services"],["portfolio","Portfolio"],["tools","Tools"],["collaborations","Collaborations"],["contact","Contact"]];
$("#lk").innerHTML=SECS.map(([id,t])=>`<a href="#${id}">${t}</a>`).join("");
$("#fn").innerHTML=SECS.map(([id,t])=>`<a href="#${id}">${t}</a>`).join("");
const IC={Instagram:"<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><rect x='3' y='3' width='18' height='18' rx='5'/><circle cx='12' cy='12' r='4'/><circle cx='17.5' cy='6.5' r='.6' fill='currentColor'/></svg>",
YouTube:"<svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'><path fill-rule='evenodd' d='M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.7 2 12 2 12s0 3.3.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.5.4-4.8.4-4.8s0-3.3-.4-4.8zM10 15V9l5.2 3z'/></svg>",
LinkedIn:"<svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'><rect x='3' y='9' width='4' height='12'/><circle cx='5' cy='5' r='2'/><path d='M10 9h4v2c1-1.5 2.5-2.3 4-2.3 3 0 3.5 2 3.5 5V21h-4v-6c0-1.5-.5-2.5-2-2.5S14 13.5 14 15v6h-4z'/></svg>",
TikTok:"<svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'><path d='M12.5.02c1.3-.02 2.6-.01 3.9-.02.1 1.5.6 3.1 1.8 4.2 1.1 1.1 2.7 1.6 4.2 1.8v4c-1.4 0-2.9-.3-4.2-1-.6-.3-1.1-.6-1.6-.9 0 2.9 0 5.8 0 8.7-.1 1.4-.5 2.8-1.4 3.9-1.300 1.900-3.600 3.200-5.900 3.200-1.400.1-2.900-.3-4.100-1-2-1.200-3.400-3.400-3.700-5.700 0-.5 0-1 0-1.500.2-1.900 1.100-3.700 2.600-5 1.700-1.400 4-2.100 6.200-1.700 0 1.500 0 3-.1 4.400-1-.3-2.100-.2-3 .4-.6.4-1.100 1-1.400 1.700-.2.500-.1 1.100-.1 1.600.2 1.600 1.800 3 3.500 2.900 1.100 0 2.200-.7 2.800-1.600.2-.3.4-.7.4-1.100.1-1.800.1-3.600.1-5.400 0-4 0-8 0-12.100z'/></svg>",
Facebook:"<svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'><path d='M9.1 23.7v-8H6.600v-3.700h2.500v-1.600c0-4.100 1.800-6 5.900-6 .4 0 1 0 1.500.1.4 0 .8.1 1.100.2v3.300c-.2 0-.4-.1-.7-.1h-.7c-.7 0-1.300.1-1.700.3-.3.100-.5.300-.7.600-.3.400-.4 1-.4 1.800v1.300h3.900l-.4 2.100-.3 1.600h-3.200v8.200C19.400 23.200 24 18.200 24 12c0-6.600-5.400-12-12-12S0 5.400 0 12c0 5.600 3.900 10.400 9.100 11.700z'/></svg>"};
const soc=CFG.socials.map(([n,u])=>`<a class='si' href='${u}' target='_blank' rel='noopener' aria-label='${n}' title='${n}'>${IC[n]||n}</a>`);
const sh=`<span class='soc'>${soc.join("")}</span>`;$("#soc").innerHTML=sh;$("#fs").innerHTML=sh;
["em","fe"].forEach(i=>{const e=$("#"+i);e.href="mailto:"+CFG.email;e.textContent=CFG.email});
$("#yr").textContent=new Date().getFullYear();
/* nav */
const nav=$("#nav"),bg=$("#bg"),lk=$("#lk");
addEventListener("scroll",()=>nav.classList.toggle("s",scrollY>40),{passive:true});
const tog=o=>{lk.classList.toggle("open",o);bg.setAttribute("aria-expanded",o);document.body.style.overflow=o?"hidden":""};
bg.onclick=()=>tog(!lk.classList.contains("open"));
$$("a",lk).forEach(a=>a.addEventListener("click",()=>tog(false)));
addEventListener("keydown",e=>{if(e.key==="Escape")tog(false)});
const links=$$("a",lk);links.forEach((a,i)=>a.style.setProperty("--i",i));
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"}).observe&&(()=>{const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});SECS.forEach(([id])=>o.observe($("#"+id)));["video","photo","grading"].forEach(id=>{})})();
/* content */
$("#sk1").innerHTML=["Video Editing","Cinematography","Videography","Photography","Color Grading","Photo Editing","Photo Retouching","Graphic Design","Visual Storytelling","Content Creation"].map(t=>`<span>${t}</span>`).join("");
$("#sk2").innerHTML=["Technical Analysis","SMC","ICT Concepts","Volume Profile","Market Structure","Price Action","Risk Management","Trading Psychology"].map(t=>`<span>${t}</span>`).join("");
$("#me").src=MEDIA.portrait||PH("Your photograph",800,1000,3);
const certs=MEDIA.certs.map((c,i)=>({src:c.src||PH("Certificate placeholder",800,600,i+9),t:c.t,c:c.o}));
$("#certs").innerHTML=certs.map((c,i)=>`<button class="cert rv" data-lb="certs" data-i="${i}"><span class="ci"><img loading="lazy" src="${c.src}" alt="${esc(c.t)}">${MEDIA.certs[i].src?"":"<em>Placeholder</em>"}<i class="zoom" aria-hidden="true">⤢</i></span><span class="cm"><b>${esc(c.t)}</b><small>${esc(c.c)}</small></span></button>`).join("");
const JOBS=[["Video Editor",["Video editing for digital content","Cinematic storytelling","Color correction and grading","Promotional and commercial video production"]],["Photo Editor",["Professional photo editing","Portrait retouching","Image enhancement","Color correction and manipulation"]],["Graphic Designer",["Social media graphics","Promotional materials","Digital design","Branding and visual content"]],["Trader",["Forex and cryptocurrency market analysis","Technical analysis","Market structure and price action","Risk management and trading discipline"]]];
const XP=[["Forex & CFD Trader — Live Account","CPT Markets, VT Markets, Vantage","2021–Present","Analyze forex, commodities, and indices using SMC, VP, and ICT concepts. Apply technical analysis, risk controls, and disciplined decision-making across market conditions."],["Independent Trading Mentor","Buy N Xells Community Inc.","Nov 2025–Present","Mentored 45 students through structured coaching, technical-analysis lessons, risk management, trade reviews, and personalized development plans for trading and prop-firm preparation."],["Prop Firm Trader","FundingPips, Equity Edge, FTMO, Apex Funding Trader, The5%ers","2024–Present","Traded funded and proprietary accounts, including reported $50K, $100K, and $150K accounts. Followed account rules and drawdown limits while applying price-action and intraday strategies."],["Photo & Video Editor / Colorist","Freelance, remote, independent project-based","2020–Present","Edited photo and video projects with retouching, background removal, color correction, grading, cuts, transitions, and audio synchronization to meet client briefs and maintain visual consistency."],["Ads Manager / Digital Marketing","Saime Thai Beauty Products, JDM Scents of Dreams","2024–2026","Managed paid social campaigns, audience targeting, budget allocation, ad creative testing, and performance reviews to improve brand awareness, engagement, and conversion outcomes."],["E-commerce Operations Specialist / Founder","FantaziaLab (Etsy, Gumroad)","2025–Present","Manage e-commerce operations and digital product listings across Etsy and Gumroad, including product setup, descriptions, pricing, and store organization."]];
$("#tl").innerHTML=XP.map(([t,o,d,p])=>`<article class="xc rv"><span class="dt">${esc(d)}</span><h3>${esc(t)}</h3><div class="co">${esc(o)}</div><p>${esc(p)}</p></article>`).join("");
$$(".xc").forEach(c=>c.addEventListener("pointermove",e=>{const r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")}));
const SV=[["Cinematography","Professional cinematic visual storytelling, camera operation, creative shot composition, lighting, and visual direction."],["Videography","Event coverage, commercial videos, promotional content, lifestyle videos, and professional video production."],["Photography","Portrait, product, event, lifestyle, landscape, and commercial photography."],["Video Editing","Professional video editing, cinematic storytelling, transitions, visual effects, promotional videos, and social media content."],["Color Grading","Cinematic color grading, S-Log3 color correction, film-inspired color looks, color matching, and professional visual enhancement."],["Graphic Design","Social media graphics, retouched design, promotional materials, branding, marketing designs, creative layouts, and digital assets."]];
$("#svc").innerHTML=SV.map(([t,d],i)=>`<button class="sp${i?"":" open"}" aria-expanded="${!i}"><span class="n">0${i+1}</span><span class="t">${esc(t)}</span><span class="d">${esc(d)}</span></button>`).join("");
$$(".sp").forEach(p=>{const a=()=>$$(".sp").forEach(x=>{x.classList.toggle("open",x===p);x.setAttribute("aria-expanded",x===p)});p.addEventListener("click",a);p.addEventListener("focus",a);p.addEventListener("mouseenter",()=>{if(matchMedia("(hover:hover) and (min-width:861px)").matches)a()})});
const prev=$("#prev");
$$(".svc").forEach(s=>{const b=$("button",s);b.onclick=()=>{const o=!s.classList.contains("open");$$(".svc").forEach(x=>{x.classList.remove("open");$("button",x).setAttribute("aria-expanded",false)});if(o){s.classList.add("open");b.setAttribute("aria-expanded",true)}};
 s.addEventListener("mouseenter",()=>{prev.src=PH("Preview: "+SV[s.dataset.i][0],480,360,+s.dataset.i+1);prev.classList.add("on")});
 s.addEventListener("mouseleave",()=>prev.classList.remove("on"))});
addEventListener("mousemove",e=>{prev.style.left=e.clientX+30+"px";prev.style.top=e.clientY-90+"px"});
/* portfolio */
const CATS=["Video Editing","Cinematography","Photography","Landscape","Graphic Design","Color Grading"];
let PF=MEDIA.portfolio.length?MEDIA.portfolio:Array.from({length:12},(_,i)=>({t:"Project title "+(i+1),c:CATS[i%CATS.length],src:PH("Project "+(i+1),800,[1000,600,800][i%3],i+1)}));
let cur="All Projects",shown=[];
$("#fl").innerHTML=["All Projects",...CATS].map(c=>`<button class="${c===cur?"on":""}" aria-pressed="${c===cur}">${c}</button>`).join("");
const isV=s=>/\.(mp4|webm|mov|m4v)$/i.test(s||"");
function drawPF(){shown=PF.filter(p=>cur==="All Projects"||p.c===cur);$("#pg").innerHTML=shown.length?shown.map((p,i)=>`<button class="pi" data-lb="pf" data-i="${i}">${isV(p.src)?`<video src="${p.src}" poster="${p.poster||""}" style="width:100%;display:block;background:#111;min-height:160px" muted loop playsinline autoplay preload="metadata"></video>`:`<img loading="lazy" src="${p.src}" alt="${esc(p.t)}">`}<span class="ov"><b>${esc(p.t)}</b><small>${esc(p.c)}</small></span></button>`).join(""):`<p class="sub">No projects in this category yet.</p>`}
$("#fl").onclick=e=>{const b=e.target.closest("button");if(!b)return;cur=b.textContent;$$("button",$("#fl")).forEach(x=>{x.classList.toggle("on",x===b);x.setAttribute("aria-pressed",x===b)});drawPF()};drawPF();
/* videos with IntersectionObserver */
function vids(el,list,w,h){el.innerHTML=list.map((v,i)=>{const p=v.poster||PH(v.t,w,h,i+20);return `<div class="vid">${v.src?`<video src="${v.src}" poster="${p}" style="opacity:1" muted loop playsinline preload="metadata"></video><button class="mute pp" style="right:56px" aria-label="Pause video">\u23F8</button><button class="mute" aria-label="Toggle sound">\u{1F507}</button>`:`<img src="${p}" alt="${esc(v.t)} placeholder">`}<span class="cap">${esc(v.t)}</span></div>`}).join("")}
vids($("#vp"),MEDIA.videosP,450,800);vids($("#vl"),MEDIA.videosL,800,450);
$$(".vid").forEach(d=>{const v=$("video",d),m=$(".mute:not(.pp)",d),pp=$(".pp",d);if(!v)return;pp.onclick=()=>{if(v.paused){v.dataset.manual="";v.play()}else{v.dataset.manual="1";v.pause()}};v.addEventListener("play",()=>{pp.textContent="\u23F8";pp.setAttribute("aria-label","Pause video")});v.addEventListener("pause",()=>{pp.textContent="\u25B6";pp.setAttribute("aria-label","Play video")});m.onclick=()=>{v.muted=!v.muted;m.textContent=v.muted?"\u{1F507}":"\u{1F50A}"};v.addEventListener("error",()=>{$(".cap",d).textContent="Video can\u2019t load: check the path and format (.mp4, H.264)"})});
const vio=new IntersectionObserver(es=>es.forEach(e=>{const v=$("video",e.target);if(!v)return;if(e.isIntersecting){if(!v.dataset.manual)v.play().catch(()=>{v.controls=true})}else v.pause()}),{threshold:.35});
$$(".vid").forEach(d=>vio.observe(d));
/* galleries + lightbox */
const photos=Array.from({length:16},(_,i)=>({t:"Photo edit / design "+(i+1),src:MEDIA.photos[i]||PH("Edit "+(i+1),800,1000,i+30)}));
$("#ph").innerHTML=photos.map((p,i)=>`<button class="gi rv" data-lb="ph" data-i="${i}"><img loading="lazy" src="${p.src}" alt="${p.t}"></button>`).join("");
const gr=Array.from({length:12},(_,i)=>{const g=MEDIA.grading[i]||{};return{t:"Color grade "+(i+1),b:g.before||PH("Before "+(i+1),800,450,i+60),a:g.after||PH("After "+(i+1),800,450,i+66)}});
$("#cg").innerHTML=gr.map((g,i)=>`<div class="gi ba rv" tabindex="0" data-lb="cg" data-i="${i}" aria-label="${g.t} before and after slider. Arrow keys move, Enter enlarges"><img loading="lazy" src="${g.a}" alt="${g.t} after" style="object-fit:cover;background:#111"><div class="a"><img loading="lazy" src="${g.b}" alt="${g.t} before" style="object-fit:cover;background:#111"></div><span class="h"></span><span class="t">Before</span><span class="t r">After</span></div>`).join("");
$$(".ba img").forEach(im=>im.addEventListener("error",()=>{const s=im.getAttribute("src")||"";if(s.startsWith("data:"))return;const o=im.dataset.o||(im.dataset.o=s),x=["jpg","jpeg","png","webp","JPG","JPEG","PNG","WEBP"],n=+(im.dataset.t||0);if(n<x.length){im.dataset.t=n+1;im.src=o.replace(/\.[^./]+$/,"")+"."+x[n];return}im.src=PH("Missing: "+decodeURIComponent(o.split("/").pop()),800,450,9)}));
$$(".ba").forEach(b=>{const set=p=>{p=Math.max(0,Math.min(100,p));$(".a",b).style.clipPath=`inset(0 ${100-p}% 0 0)`;$(".h",b).style.left=p+"%";b._p=p};b._p=50;
 b.addEventListener("pointermove",e=>{const r=b.getBoundingClientRect();set((e.clientX-r.left)/r.width*100)});
 b.addEventListener("keydown",e=>{if(e.key==="ArrowLeft"){set(b._p-5);e.preventDefault()}if(e.key==="ArrowRight"){set(b._p+5);e.preventDefault()}})});
const SETS={certs:()=>certs,pf:()=>shown,ph:()=>photos,cg:()=>gr.map(g=>({t:g.t+" (after)",src:g.a}))};
let ls="",li=0;const lb=$("#lb");
function openLB(s,i){ls=s;li=i;const a=SETS[s]()[i];const lv=$("#lbv");if(lv){lv.pause();lv.remove()}if(isV(a.src)){$("#lbi").style.display="none";const v=document.createElement("video");v.id="lbv";v.src=a.src;v.controls=true;v.autoplay=true;v.loop=true;v.playsInline=true;v.style.cssText="max-width:100%;max-height:78vh";$("#lbi").after(v)}else{$("#lbi").style.display="";$("#lbi").src=a.src;$("#lbi").alt=a.t}$("#lbc").textContent=a.t+(a.c?" · "+a.c:"");lb.classList.add("on");document.body.style.overflow="hidden";$("#lbx").focus()}
const stepLB=d=>{const n=SETS[ls]().length;openLB(ls,(li+d+n)%n)};
const closeLB=()=>{const lv=$("#lbv");if(lv){lv.pause();lv.remove()}lb.classList.remove("on");document.body.style.overflow=""};
document.addEventListener("click",e=>{const t=e.target.closest("[data-lb]");if(t)openLB(t.dataset.lb,+t.dataset.i)});
document.addEventListener("keydown",e=>{const t=e.target.closest&&e.target.closest("[data-lb]");if(e.key==="Enter"&&t&&t.classList.contains("ba"))openLB(t.dataset.lb,+t.dataset.i);if(!lb.classList.contains("on"))return;if(e.key==="Escape")closeLB();if(e.key==="ArrowLeft")stepLB(-1);if(e.key==="ArrowRight")stepLB(1)});
let tx=0;lb.addEventListener("touchstart",e=>{tx=e.touches[0].clientX},{passive:true});lb.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)stepLB(d<0?1:-1)});
$("#lbx").onclick=closeLB;$("#lbp").onclick=()=>stepLB(-1);$("#lbn").onclick=()=>stepLB(1);lb.onclick=e=>{if(e.target===lb)closeLB()};
/* tools */
const TL=[["Adobe Premiere Pro","Pr","#9999ff"],["Adobe Photoshop","Ps","#31a8ff"],["Adobe Lightroom","Lr","#4aa3df"],["DaVinci Resolve","Dv","#e8553a"],["Adobe After Effects","Ae","#9999ff"],["CapCut","Cc","#fff"],["MetaTrader 5","MT","#2f80ed"],["TradingView","TV","#2962ff"]];
function hrows(el,items,n,fn){const c=Array.from({length:n},()=>[]);items.forEach((x,i)=>c[i%n].push(fn(x)));el.innerHTML=c.map((r,i)=>`<div class="hrow" data-d="${i%2?1:-1}"><div class="htr">${Array(4).fill(r.join("")).join("")}</div></div>`).join("")}
const LG=MEDIA.toolLogos||{};
hrows($("#toolrow"),TL,2,([n,s,c])=>`<div class="tool"><i class="${LG[n]?"lg":""}" style="${LG[n]?"":"background:"+c+";color:"+(c==="#fff"?"#000":"#fff")}" aria-hidden="true">${LG[n]?`<img src="${LG[n]}" alt="">`:s}</i>${n}</div>`);
const BR=["Brand One","Brand Two","Brand Three","Brand Four","Brand Five","Brand Six"];
const CB=MEDIA.collabs&&MEDIA.collabs.length?MEDIA.collabs:BR.map(n=>({name:n}));
hrows($("#vc"),CB,2,b=>`<div class="tool"><i class="${b.logo?"lg":""}" style="${b.logo?"":"background:#2a2a2a"}" aria-hidden="true">${b.logo?`<img src="${b.logo}" alt="">`:b.name.split(" ").map(w=>w[0]).join("")}</i>${esc(b.name)}</div>`);
/* horizontal ticker: drifts on its own and speeds up while scrolling */
(function(){const rows=$$(".hrow"),vis=new Set(),pos=new Map();
 const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?vis.add(e.target):vis.delete(e.target)));rows.forEach(r=>io.observe(r));
 (function tick(){requestAnimationFrame(tick);
  rows.forEach(r=>{if(!vis.has(r))return;const t=r.firstChild,half=t.scrollWidth/2,d=+r.dataset.d;let p=pos.has(r)?pos.get(r):(d>0?-half:0);
   p+=d*.8;if(p<=-half)p+=half;if(p>0)p-=half;pos.set(r,p);t.style.transform=`translate3d(${p}px,0,0)`})})()})();

/* reveals */
const rio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");rio.unobserve(e.target)}}),{threshold:.12});
$$(".rv,[data-rv]").forEach(e=>rio.observe(e));
/* contact form */
const F=$("#f"),st=$("#st");
function chk(i){const v=i.value.trim();let m="";if(!v)m="This field is required.";else if(i.type==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))m="Enter a valid email address, like name@example.com.";i.parentNode.querySelector(".err").textContent=m;i.setAttribute("aria-invalid",!!m);return!m}
$$("input,textarea",F).forEach(i=>i.addEventListener("blur",()=>chk(i)));
F.addEventListener("submit",async e=>{e.preventDefault();st.className="";st.textContent="";
 const ok=$$("input,textarea",F).map(chk).every(Boolean);if(!ok){st.className="bad";st.textContent="Fix the highlighted fields and try again.";return}
 const c=CFG.emailjs;
 if(!c.service||!c.template||!c.publicKey){st.className="bad";st.innerHTML=`Message not sent: the contact service isn’t configured yet. Email me directly at <a href="mailto:${CFG.email}?subject=${encodeURIComponent($("#s").value)}&body=${encodeURIComponent($("#m").value)}" style="border-bottom:1px solid">${CFG.email}</a>.`;return}
 const b=$("#sb");b.disabled=true;b.textContent="Sending…";
 try{const r=await fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service_id:c.service,template_id:c.template,user_id:c.publicKey,template_params:{from_name:$("#n").value,reply_to:$("#e").value,subject:$("#s").value,message:$("#m").value}})});
  if(!r.ok)throw new Error(await r.text());st.className="ok";st.textContent="Message sent. I’ll reply soon.";F.reset()}
 catch(err){st.className="bad";st.innerHTML=`Message not sent. Try again, or email <a href="mailto:${CFG.email}" style="border-bottom:1px solid">${CFG.email}</a>.`}
 b.disabled=false;b.textContent="Send Message"});
$("#top").onclick=()=>scrollTo({top:0,behavior:RM?"auto":"smooth"});
/* magnetic buttons + cursor */
if(matchMedia("(hover:hover) and (pointer:fine)").matches&&!RM){
 $$(".mag").forEach(b=>{b.addEventListener("mousemove",e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});b.addEventListener("mouseleave",()=>b.style.transform="")});
 const cu=$("#cur");addEventListener("mousemove",e=>{cu.style.opacity=1;cu.style.left=e.clientX+"px";cu.style.top=e.clientY+"px";cu.classList.toggle("h",!!e.target.closest("a,button,.ba,.svc"))})}
/* 3D hero */
(function(){if(RM||!window.THREE)return;const cv=$("#c3"),h=$("#home");
 const r=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true});r.setPixelRatio(Math.min(devicePixelRatio,innerWidth<700?1.25:1.75));
 const s=new THREE.Scene(),cam=new THREE.PerspectiveCamera(45,1,.1,100);cam.position.z=9;
 s.add(new THREE.AmbientLight(0xffffff,.35));const l=new THREE.PointLight(0xffffff,1.4);l.position.set(5,5,6);s.add(l);
 const g=new THREE.Group();s.add(g);
 const M=new THREE.MeshStandardMaterial({color:0xcfcfcf,metalness:.9,roughness:.25});
 const W=new THREE.MeshBasicMaterial({color:0x666666,wireframe:true});
 const core=new THREE.Mesh(new THREE.IcosahedronGeometry(1.7,1),M);const wire=new THREE.Mesh(new THREE.IcosahedronGeometry(2.4,1),W);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(3.2,.025,8,120),M);ring.rotation.x=1.2;g.add(core,wire,ring);
 const sm=[];for(let i=0;i<7;i++){const m=new THREE.Mesh(i%2?new THREE.OctahedronGeometry(.28):new THREE.TorusGeometry(.25,.07,10,24),M);m.userData={a:i*.9,r:3.6+Math.random()*1.2,y:Math.random()*3-1.5,s:.2+Math.random()*.3};g.add(m);sm.push(m)}
 let mx=0,my=0,vis=true;addEventListener("pointermove",e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
 new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(h);
 function rs(){const w=h.clientWidth,hh=h.clientHeight;r.setSize(w,hh,false);cam.aspect=w/hh;cam.updateProjectionMatrix();g.position.x=w>860?3.4:0;g.position.y=w>860?0:2.2;g.scale.setScalar(w>860?1:.6)}rs();addEventListener("resize",rs);
 (function loop(t){requestAnimationFrame(loop);if(!vis)return;t*=.001;core.rotation.y=t*.3;core.rotation.x=t*.15;wire.rotation.y=-t*.12;ring.rotation.z=t*.2;
  sm.forEach(m=>{const u=m.userData;u.a+=.004*u.s*3;m.position.set(Math.cos(u.a)*u.r,u.y+Math.sin(t+u.a)*.3,Math.sin(u.a)*u.r*.5);m.rotation.x+=.01;m.rotation.y+=.012});
  g.rotation.y+=(mx*.9-g.rotation.y)*.04;g.rotation.x+=(my*.6-g.rotation.x)*.04;r.render(s,cam)})(0)})();