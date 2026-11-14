/* Keshya — Ayurvedic Herbal Hair Oils | Scripts */
let io;
/* ================= ICONS ================= */
const I = {
  leaf:'<path d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15"/><path d="M5 19l9-9"/>',
  flame:'<path d="M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-5 1-8.5z"/>',
  drop:'<path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z"/><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5"/>',
  massage:'<path d="M4 12a8 8 0 0 1 13.7-5.6"/><path d="M18 3v4h-4"/><path d="M20 12a8 8 0 0 1-13.7 5.6"/><path d="M6 21v-4h4"/><circle cx="12" cy="12" r="2"/>',
  moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/><path d="M17 3v3M15.5 4.5h3"/>',
  fall:'<path d="M5 12c0-5 4-9 10-9 0 6-4 10-10 10"/><path d="M5 13l6-6"/><path d="M16 14v7M13.5 18.5 16 21l2.5-2.5"/>',
  snow:'<path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/><path d="M9.5 4.5 12 6l2.5-1.5M9.5 19.5 12 18l2.5 1.5"/>',
  sprout:'<path d="M12 21v-9"/><path d="M12 12C12 8 9 6 5 6c0 4 3 6 7 6z"/><path d="M12 10c0-3 2.5-5 6.5-5 0 3.5-2.5 5-6.5 5z"/><path d="M8 21h8"/>',
  frizz:'<path d="M7 21c0-6-3-8-3-13"/><path d="M12 21c0-7 2-9 0-15"/><path d="M17 21c0-6 3-8 2-13"/><path d="M4 5 3 3M12 3.5V2M19.5 5 21 3"/>',
  straight:'<path d="M7 3v18M12 3v18M17 3v18"/>',
  wavy:'<path d="M7 3c-2 3 2 6 0 9s2 6 0 9"/><path d="M12 3c-2 3 2 6 0 9s2 6 0 9"/><path d="M17 3c-2 3 2 6 0 9s2 6 0 9"/>',
  curly:'<path d="M8 3c3 0 3 3 0 3s-3 3 0 3 3 3 0 3-3 3 0 3 3 3 0 3"/><path d="M16 3c3 0 3 3 0 3s-3 3 0 3 3 3 0 3-3 3 0 3 3 3 0 3"/>',
  treated:'<path d="M10 4s-5 6-5 10a5 5 0 0 0 10 0c0-4-5-10-5-10z"/><path d="M18 3v4M16 5h4M19 11v2M18 12h2"/>',
  hourglass:'<path d="M6 3h12M6 21h12M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9"/>',
  calendar:'<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/><path d="M8 14h3v3H8z"/>',
  repeat:'<path d="M17 2l3 3-3 3"/><path d="M4 11V9a4 4 0 0 1 4-4h12"/><path d="M7 22l-3-3 3-3"/><path d="M20 13v2a4 4 0 0 1-4 4H4"/>',
  check:'<path d="m5 12 5 5 9-10"/>',
  bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
  heart:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 4.8 1c0 1.7-2.3 2-2.3 3.5M12 17h.01"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  bag:'<path d="M5 7h14l-1.2 12.1a2 2 0 0 1-2 1.9H8.2a2 2 0 0 1-2-1.9z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>'
};
const icon = (k, cls='') => `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[k]||''}</svg>`;
/* ================= DATA ================= */
const PRODUCTS = [
  {id:'bhringraj', kw:'hair fall hairfall thinning shedding bhringraj amla roots greying grey', name:'Bhringraj Root Revival', concern:'hairfall', label:'Hair fall', oil:'#B8862F', tint:'#E2B566', tag:'Bestseller', rating:4.9, reviews:3842,
   sizes:[{s:'100ml',p:649,m:799},{s:'200ml',p:1099,m:1399}]},
  {id:'hibiscus', kw:'dry frizzy frizz shine dull hibiscus amla split ends soft smooth', name:'Hibiscus & Amla Shine', concern:'shine', label:'Dry & frizzy', oil:'#9E3B2F', tint:'#E59A84', tag:'New', rating:4.8, reviews:1290,
   sizes:[{s:'100ml',p:599,m:699},{s:'200ml',p:999,m:1199}]},
  {id:'neem', kw:'dandruff itchy itch flakes flaky scalp neem tulsi clean', name:'Neem & Tulsi Scalp Clarifier', concern:'dandruff', label:'Dandruff', oil:'#6E7B3A', tint:'#B9C98A', tag:'', rating:4.7, reviews:2104,
   sizes:[{s:'100ml',p:549,m:649},{s:'200ml',p:949,m:1099}]},
  {id:'rosemary', kw:'growth grow thick thicker long length rosemary onion volume', name:'Rosemary & Onion Growth', concern:'growth', label:'Growth', oil:'#C9A24A', tint:'#D9CF9A', tag:'Trending', rating:4.8, reviews:2766,
   sizes:[{s:'100ml',p:699,m:849},{s:'200ml',p:1199,m:1499}]},
];
const HERBS = [
  {n:'Bhringraj', s:'Eclipta alba · "King of Hair"', c:'#5E7A4C', d:'Revered in Ayurveda as the king of herbs for hair. It nourishes follicles, helps reduce hair fall and is traditionally used to delay premature greying.', b:['Reduces hair fall','Strengthens roots','Delays greying']},
  {n:'Amla', s:'Phyllanthus emblica · Indian gooseberry', c:'#9DB35A', d:'One of nature\'s richest sources of Vitamin C and antioxidants. Amla conditions the scalp and adds a natural, glassy shine to every strand.', b:['Vitamin C rich','Natural shine','Conditions scalp']},
  {n:'Hibiscus', s:'Hibiscus rosa-sinensis · Japa', c:'#C8513A', d:'Petals and leaves full of amino acids that nourish hair, prevent split ends and leave hair soft, bouncy and frizz-free.', b:['Softens hair','Prevents split ends','Adds volume']},
  {n:'Brahmi', s:'Bacopa monnieri · Calm-giver', c:'#7A9E7E', d:'A cooling herb that soothes the scalp and calms the mind. Perfect for a de-stressing night-time champi.', b:['Cooling','Soothes itchiness','Relaxing aroma']},
  {n:'Neem', s:'Azadirachta indica · The purifier', c:'#4F6B3A', d:'Naturally antifungal and antibacterial, neem keeps the scalp clean and helps fight flakes and dandruff at the root.', b:['Fights dandruff','Antifungal','Balances scalp']},
  {n:'Rosemary', s:'Salvia rosmarinus · The stimulator', c:'#6F8F72', d:'A globally loved herb that stimulates scalp circulation, helping create the right conditions for thicker-looking growth.', b:['Boosts circulation','Thicker-looking hair','Fresh aroma']},
];
const TESTIS = [
  {q:'My hair fall reduced noticeably within six weeks. The smell of this oil takes me straight back to my grandmother\'s house.', n:'Ananya R.', w:'Bengaluru · Bhringraj Root Revival', c:'#5E7A4C'},
  {q:'Finally an Ayurvedic oil that doesn\'t feel heavy or sticky. It washes off with one shampoo and my hair has never looked shinier.', n:'Meera K.', w:'Mumbai · Hibiscus & Amla Shine', c:'#B5562F'},
  {q:'I struggled with dandruff for years. Three weeks with the neem oil and my scalp feels calm and clean. A total game changer.', n:'Rohit S.', w:'Pune · Neem & Tulsi Clarifier', c:'#C8923A'},
];
const FAQS = [
  ['How often should I oil my hair?','For most hair types, 2–3 times a week works beautifully. If you have a dry scalp, you can oil more often; for oily scalps, once or twice a week is ideal.'],
  ['Can I leave the oil on overnight?','Yes! Overnight oiling gives the herbs more time to work. Just cover your pillow with an old towel, and rinse in the morning with a mild shampoo.'],
  ['Is it suitable for colour-treated hair?','Absolutely. Our oils are free from mineral oil, silicones, parabens and synthetic fragrance, so they are gentle on colour-treated and chemically processed hair.'],
  ['When will I see results?','Most people notice softer, shinier hair after the first wash. For concerns like hair fall or growth, give it a consistent 8–12 weeks.'],
  ['Do you ship across India?','Yes, we ship to 26,000+ pin codes. Orders above ₹999 ship free, and most orders arrive within 3–5 working days.'],
];

/* ================= BOTTLE SVG ================= */
let bid = 0;
function bottleSVG(oil='#C8923A', title='KESHYA', sub='Herbal Hair Oil', level=200){
  const id = 'b'+(bid++);
  return `<svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;overflow:visible">
  <defs>
    <clipPath id="${id}c"><path d="M50 172Q50 132 100 132Q150 132 150 172L150 360Q150 386 124 386L76 386Q50 386 50 360Z"/></clipPath>
    <linearGradient id="${id}g" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".25"/><stop offset=".35" stop-color="#fff" stop-opacity=".0"/><stop offset=".8" stop-color="#000" stop-opacity=".05"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></linearGradient>
    <linearGradient id="${id}cap" x1="0" x2="1"><stop offset="0" stop-color="#8a6420"/><stop offset=".4" stop-color="#E2B566"/><stop offset="1" stop-color="#8a6420"/></linearGradient>
  </defs>
  <path d="M84 70Q80 18 100 12Q120 18 116 70Z" fill="#1A1A16"/>
  <ellipse cx="94" cy="32" rx="4" ry="12" fill="#fff" opacity=".18"/>
  <rect x="76" y="68" width="48" height="36" rx="5" fill="url(#${id}cap)"/>
  <rect x="76" y="78" width="48" height="2" fill="#000" opacity=".15"/><rect x="76" y="90" width="48" height="2" fill="#000" opacity=".15"/>
  <rect x="84" y="104" width="32" height="30" fill="${oil}" opacity=".55"/>
  <path d="M50 172Q50 132 100 132Q150 132 150 172L150 360Q150 386 124 386L76 386Q50 386 50 360Z" fill="${oil}" opacity=".35"/>
  <g clip-path="url(#${id}c)">
    <g transform="translate(0 ${level})">
      <path class="wave w2" fill="${oil}" d="M0 10 Q25 0 50 10 T100 10 T150 10 T200 10 T250 10 T300 10 T350 10 T400 10 V300 H0Z"/>
      <path class="wave" fill="${oil}" d="M0 8 Q25 18 50 8 T100 8 T150 8 T200 8 T250 8 T300 8 T350 8 T400 8 V300 H0Z"/>
    </g>
    <circle class="bubble" cx="70" cy="370" r="3" fill="#fff"/>
    <circle class="bubble" cx="128" cy="375" r="2" fill="#fff" style="animation-delay:-1.5s"/>
    <circle class="bubble" cx="100" cy="372" r="2.5" fill="#fff" style="animation-delay:-2.8s"/>
    <rect x="0" y="0" width="200" height="400" fill="url(#${id}g)"/>
  </g>
  <rect x="60" y="160" width="8" height="190" rx="4" fill="#fff" opacity=".35"/>
  <rect x="58" y="236" width="84" height="104" rx="6" fill="#F6F0E4"/>
  <rect x="62" y="240" width="76" height="96" rx="4" fill="none" stroke="#C8923A" stroke-width=".8"/>
  <path d="M100 252S93 261 93 266a7 7 0 0 0 14 0C107 261 100 252 100 252z" fill="${oil}"/>
  <text x="100" y="292" text-anchor="middle" font-family="Cormorant Garamond,serif" font-size="15" font-weight="600" letter-spacing="3" fill="#1E3A2B">${title}</text>
  <text x="100" y="308" text-anchor="middle" font-family="Manrope,sans-serif" font-size="6.5" letter-spacing="1.2" fill="#6B6A5E">${sub.toUpperCase()}</text>
  <text x="100" y="326" text-anchor="middle" font-family="Manrope,sans-serif" font-size="5.5" letter-spacing="1" fill="#C8923A">AYURVEDIC · 100ML</text>
</svg>`;
}
const leafIcon = c => `<svg viewBox="0 0 30 30"><path d="M5 25C5 13 15 4 26 4 26 16 17 25 5 25z" fill="${c}"/><path d="M5 25 21 9" stroke="#fff" stroke-width="1.2" opacity=".7"/></svg>`;

/* ================= HELPERS ================= */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const inr = n => '₹' + n.toLocaleString('en-IN');
let toastT;
function toast(msg, ic='check'){const t=$('#toast');t.innerHTML=icon(ic)+'<span>'+msg+'</span>';t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),2400)}

/* ================= PRELOADER + HERO ================= */
$('#heroBottle').innerHTML = bottleSVG('#C8923A','KESHYA','Bhringraj Oil',190);
$('#orbitCenter').innerHTML = bottleSVG('#B8862F','KESHYA','21 Herbs',200);
(function splitTitle(){
  const h = $('#heroTitle'); const html = h.innerHTML;
  const tmp = document.createElement('div'); tmp.innerHTML = html; let out = ''; let i = 0;
  tmp.childNodes.forEach(node=>{
    const isEm = node.nodeName==='EM'; const words = node.textContent.split(' ').filter(Boolean);
    words.forEach(w=>{ const inner = isEm?`<em>${w}</em>`:w; out += `<span class="w"><span style="transition-delay:${.15+i*.08}s">${inner}</span></span> `; i++; });
  });
  h.innerHTML = out;
})();
window.addEventListener('load', ()=>setTimeout(()=>{ $('#loader').classList.add('done'); document.body.classList.add('loaded'); }, 1500));
setTimeout(()=>{ $('#loader').classList.add('done'); document.body.classList.add('loaded'); }, 3500); // fallback

/* marquee */
const mItems = ['Cold-pressed','21 Ayurvedic herbs','No mineral oil','7-day slow brew','Cruelty-free','Small batch','Made in Kerala'];
const mHTML = '<span>'+mItems.map(x=>`${x} <i>✦</i>`).join(' ')+'</span>';
$('#marquee').innerHTML = mHTML + mHTML;

/* nav scroll */
const nav = $('#nav');
addEventListener('scroll', ()=>{ nav.classList.toggle('scrolled', scrollY>60); updateSteps(); }, {passive:true});

/* parallax leaves */
const hv = $('#heroVisual');
addEventListener('mousemove', e=>{
  const x = (e.clientX/innerWidth - .5), y = (e.clientY/innerHeight - .5);
  $$('.leaf').forEach(l=>{ const d = +l.dataset.depth; l.style.transform = `translate(${x*d}px,${y*d}px)`; });
  $('#heroBottle').style.translate = `${x*-12}px ${y*-12}px`;
});

/* custom cursor */
const cur = $('#cursor'); let cx=0,cy=0,tx=0,ty=0;
addEventListener('mousemove', e=>{tx=e.clientX;ty=e.clientY});
(function loop(){cx+=(tx-cx)*.2;cy+=(ty-cy)*.2;cur.style.left=cx+'px';cur.style.top=cy+'px';requestAnimationFrame(loop)})();
document.addEventListener('mouseover', e=>{ cur.classList.toggle('big', !!e.target.closest('a,button,.card')) });

/* magnetic buttons */
$$('.magnetic').forEach(b=>{
  b.addEventListener('mousemove', e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});
  b.addEventListener('mouseleave', ()=>b.style.transform='');
});

/* mobile menu */
$('#burger').onclick = ()=>{$('#mmenu').classList.add('show');document.body.classList.add('lock')};
const closeM = ()=>{$('#mmenu').classList.remove('show');document.body.classList.remove('lock')};
$('#mclose').onclick = closeM; $$('#mmenu a').forEach(a=>a.onclick=closeM);

/* ================= INGREDIENT ORBIT ================= */
const orbit = $('#orbit');
HERBS.forEach((h,i)=>{
  const a = (i/HERBS.length)*Math.PI*2 - Math.PI/2;
  const b = document.createElement('button'); b.className='herb-btn'+(i===0?' active':'');
  b.style.left = (50+46*Math.cos(a))+'%'; b.style.top = (50+46*Math.sin(a))+'%';
  b.innerHTML = `<span class="in">${leafIcon(h.c)}${h.n}</span>`;
  b.onclick = ()=>showHerb(i);
  orbit.querySelector('.orbit-track').appendChild(b);
});
function showHerb(i){
  $$('.herb-btn').forEach((b,j)=>b.classList.toggle('active',i===j));
  const s = $('#herbSwap'); const h = HERBS[i];
  s.classList.add('out');
  setTimeout(()=>{
    s.innerHTML = `<div class="sanskrit">${h.s}</div><h3>${h.n}</h3><p>${h.d}</p><ul>${h.b.map(x=>`<li>${icon('check')} ${x}</li>`).join('')}</ul>`;
    s.classList.remove('out');
  }, 300);
}
showHerb(0);
let herbAuto = 0; setInterval(()=>{ if(!orbit.matches(':hover') && isVisible(orbit)){ herbAuto=(herbAuto+1)%HERBS.length; showHerb(herbAuto);} }, 5000);
function isVisible(el){const r=el.getBoundingClientRect();return r.top<innerHeight&&r.bottom>0}

/* ================= PRODUCTS ================= */
const sel = {}; const wish = new Set();
function renderProducts(){
  $('#products').innerHTML = PRODUCTS.map((p,i)=>{
    sel[p.id] = sel[p.id]||0; const sz = p.sizes[sel[p.id]];
    return `<article class="card reveal" data-c="${p.concern}" style="--tint:${p.tint};transition-delay:${i*.1}s">
      ${p.tag?`<span class="tag">${p.tag}</span>`:''}
      <button class="wish ${wish.has(p.id)?'on':''}" data-w="${p.id}" aria-label="Wishlist"><svg viewBox="0 0 24 24" fill="none" stroke="#1E3A2B" stroke-width="1.8"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg></button>
      <div class="card-media"><div class="b">${bottleSVG(p.oil,'KESHYA',p.name.split(' ')[0]+' Oil',200)}</div></div>
      <div class="card-body">
        <span class="concern">For ${p.label}</span>
        <h3>${p.name}</h3>
        <div class="stars">★★★★★<small>${p.rating} (${p.reviews.toLocaleString('en-IN')})</small></div>
        <div class="sizes">${p.sizes.map((s,j)=>`<button class="size ${j===sel[p.id]?'active':''}" data-p="${p.id}" data-s="${j}">${s.s}</button>`).join('')}</div>
        <div class="card-foot">
          <div class="price" id="price-${p.id}">${inr(sz.p)}<s>${inr(sz.m)}</s></div>
          <button class="add" data-add="${p.id}" aria-label="Add to cart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg></button>
        </div>
      </div></article>`;
  }).join('');
  observeReveals();
}
renderProducts();
$('#products').addEventListener('click', e=>{
  const s = e.target.closest('.size'), a = e.target.closest('.add'), w = e.target.closest('.wish');
  if(s){ const p=PRODUCTS.find(x=>x.id===s.dataset.p); sel[p.id]=+s.dataset.s;
    s.parentElement.querySelectorAll('.size').forEach(b=>b.classList.toggle('active',b===s));
    const pr=$('#price-'+p.id); pr.style.opacity=0; setTimeout(()=>{const z=p.sizes[sel[p.id]];pr.innerHTML=`${inr(z.p)}<s>${inr(z.m)}</s>`;pr.style.opacity=1},180); }
  if(a){ addToCart(a.dataset.add, sel[a.dataset.add], a); }
  if(w){ const id=w.dataset.w; wish.has(id)?wish.delete(id):wish.add(id); w.classList.toggle('on'); toast(wish.has(id)?'Added to wishlist':'Removed from wishlist','heart'); }
});
$('#filters').addEventListener('click', e=>{
  const c = e.target.closest('.chip'); if(!c) return;
  $$('.chip').forEach(x=>x.classList.toggle('active',x===c));
  const f = c.dataset.f;
  $$('.card').forEach(card=>{
    const show = f==='all'||card.dataset.c===f;
    if(show){card.classList.remove('hide');card.animate([{opacity:0,transform:'translateY(30px) scale(.96)'},{opacity:1,transform:'none'}],{duration:600,easing:'cubic-bezier(.22,.8,.24,1)'})}
    else card.classList.add('hide');
  });
});

/* ================= CART ================= */
let cart = [];
try{ cart = JSON.parse(localStorage.getItem('keshya-cart')||'[]') }catch(e){ cart=[] }
const save = ()=>{ try{ localStorage.setItem('keshya-cart', JSON.stringify(cart)) }catch(e){} };
function addToCart(id, sIdx, btn){
  const ex = cart.find(c=>c.id===id && c.s===sIdx);
  ex ? ex.q++ : cart.push({id, s:sIdx, q:1});
  save(); renderCart();
  if(btn){
    btn.classList.add('added'); btn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m5 12 5 5 9-10"/></svg>';
    setTimeout(()=>{btn.classList.remove('added');btn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>'},1400);
    flyToCart(btn);
  }
  const p = PRODUCTS.find(x=>x.id===id); toast(`${p.name} added to your ritual`,'bag');
}
function flyToCart(from){
  const a = from.getBoundingClientRect(), b = $('#cartBtn').getBoundingClientRect();
  const d = document.createElement('div'); d.className='fly'; d.style.left=a.left+a.width/2-13+'px'; d.style.top=a.top+a.height/2-13+'px';
  document.body.appendChild(d);
  requestAnimationFrame(()=>{ d.style.transform=`translate(${b.left-a.left}px,${b.top-a.top}px) scale(.4)`; d.style.opacity='.4'; });
  setTimeout(()=>{ d.remove(); const c=$('#cartCount'); c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump'); }, 800);
}
function renderCart(){
  const count = cart.reduce((a,c)=>a+c.q,0);
  const cc = $('#cartCount'); cc.textContent = count; cc.classList.toggle('show', count>0);
  let total = 0;
  $('#items').innerHTML = cart.length ? cart.map((c,i)=>{
    const p = PRODUCTS.find(x=>x.id===c.id), z = p.sizes[c.s]; total += z.p*c.q;
    return `<div class="item"><div class="thumb" style="background:${p.tint}55">${bottleSVG(p.oil,'K','',200)}</div>
      <div><h4>${p.name}</h4><small>${z.s} · ${inr(z.p)}</small>
        <div class="qty"><button data-dec="${i}">−</button><span>${c.q}</span><button data-inc="${i}">+</button></div>
        <button class="rm" data-rm="${i}">Remove</button></div>
      <div class="ip">${inr(z.p*c.q)}</div></div>`;
  }).join('') : `<div class="empty"><div class="em">${icon('leaf')}</div><p>Your ritual is empty.<br>Let's find your perfect oil.</p><br><a href="#shop" class="btn btn-ghost" onclick="closeCart()">Browse oils</a></div>`;
  $('#subtotal').textContent = inr(total);
  const left = Math.max(0, 999-total);
  $('#ship').innerHTML = (left ? `You're <b>${inr(left)}</b> away from free shipping` : `You've unlocked <b>free shipping!</b>`) + `<div class="ship-bar"><span style="width:${Math.min(100,total/999*100)}%"></span></div>`;
}
$('#items').addEventListener('click', e=>{
  const t = e.target, i = +(t.dataset.inc??t.dataset.dec??t.dataset.rm);
  if(t.dataset.inc!==undefined) cart[i].q++;
  else if(t.dataset.dec!==undefined){ cart[i].q--; if(cart[i].q<1) cart.splice(i,1); }
  else if(t.dataset.rm!==undefined) cart.splice(i,1);
  else return;
  save(); renderCart();
});
const openCart = ()=>{ $('#drawer').classList.add('show'); $('#overlay').classList.add('show'); document.body.classList.add('lock'); };
function closeCart(){ $('#drawer').classList.remove('show'); $('#overlay').classList.remove('show'); document.body.classList.remove('lock'); }
$('#cartBtn').onclick = openCart; $('#closeCart').onclick = closeCart; $('#overlay').onclick = closeCart;
addEventListener('keydown', e=>{ if(e.key==='Escape'){ closeCart(); closeM(); } });
$('#checkout').onclick = ()=>{ if(!cart.length) return toast('Your cart is empty','info'); toast('Checkout is a demo in this concept','info'); };
renderCart();

/* ================= QUIZ ================= */
const QUIZ = [
  {q:'What\'s your biggest hair concern?', h:'Pick the one that bothers you most.', o:[
    ['fall','Hair fall','Strands on my pillow & comb','hairfall'],['snow','Dandruff','Flakes or an itchy scalp','dandruff'],
    ['sprout','Slow growth','I want longer, thicker hair','growth'],['frizz','Dry & frizzy','Dull, rough or tangly','shine']]},
  {q:'How would you describe your hair?', h:'This helps us tune how you use it.', o:[
    ['straight','Straight','Sleek, gets oily fast','straight'],['wavy','Wavy','Loose S-shaped waves','wavy'],
    ['curly','Curly','Defined curls & coils','curly'],['treated','Coloured / treated','Chemically processed','treated']]},
  {q:'How often do you oil your hair?', h:'No judgement. We\'ve all skipped a champi.', o:[
    ['hourglass','Rarely','Once a month, if that','rare'],['calendar','Weekly','Once a week','weekly'],
    ['repeat','Often','2–3 times a week','often'],['moon','Overnight lover','I sleep in it','night']]},
];
const TIPS = {
  straight:'Since straight hair gets oily quickly, focus on the scalp only and wash it out within 1–2 hours.',
  wavy:'Apply to the scalp and scrunch a few drops into the lengths to boost wave definition.',
  curly:'Curls love oil. Work it from root to tip and leave it overnight for a deep treatment.',
  treated:'Coloured hair needs extra moisture. Pay special attention to the ends and use it 3× a week.',
};
const FREQ = {rare:'Start with 2 nights a week and build up. Consistency beats quantity.',weekly:'Bump it up to twice a week for visible results in 8 weeks.',often:'Perfect rhythm. Keep going, and your roots will thank you.',night:'Overnight is ideal. Cover your pillow and rinse with a mild shampoo.'};
let qStep = 0, answers = [];
function renderQuiz(){
  const body = $('#quizBody');
  $('#qProg').style.width = (qStep/QUIZ.length*100)+'%';
  if(qStep < QUIZ.length){
    const s = QUIZ[qStep];
    body.innerHTML = `<div class="q-step active"><div class="eyebrow">Question ${qStep+1} of ${QUIZ.length}</div><h3>${s.q}</h3><p class="hint">${s.h}</p>
      <div class="options">${s.o.map(o=>`<button class="opt" data-v="${o[3]}"><span class="em">${icon(o[0])}</span><span>${o[1]}<small>${o[2]}</small></span></button>`).join('')}</div></div>`;
  } else {
    const p = PRODUCTS.find(x=>x.concern===answers[0]);
    body.innerHTML = `<div class="q-step active"><div class="result">
      <div class="b">${bottleSVG(p.oil,'KESHYA',p.name.split(' ')[0]+' Oil',200)}</div>
      <div><div class="eyebrow">Your perfect match</div><h3 style="color:var(--forest);margin:.4rem 0">${p.name}</h3>
        <p style="color:var(--muted)">Specially brewed for <b>${p.label.toLowerCase()}</b>. ${TIPS[answers[1]]}</p>
        <div class="tip">${icon('bulb')}<span><b>Ritual tip:</b> ${FREQ[answers[2]]}</span></div>
        <button class="btn btn-primary" id="quizAdd">Add to ritual · ${inr(p.sizes[0].p)} <span class="arrow">→</span></button>
        <button class="restart" id="quizRestart">Retake quiz</button>
      </div></div></div>`;
    $('#quizAdd').onclick = e=>addToCart(p.id,0,e.currentTarget);
    $('#quizRestart').onclick = ()=>{qStep=0;answers=[];renderQuiz()};
  }
}
$('#quizBody').addEventListener('click', e=>{ const o=e.target.closest('.opt'); if(!o) return; answers[qStep]=o.dataset.v; qStep++; setTimeout(renderQuiz,150); });
renderQuiz();

/* ================= TESTIMONIALS ================= */
$('#testis').innerHTML = TESTIS.map((t,i)=>`<div class="testi ${i===0?'active':''}"><blockquote>${t.q}</blockquote>
  <div class="who"><span class="avatar" style="background:${t.c}">${t.n[0]}</span><div><b>${t.n}</b><small>${t.w}</small></div></div></div>`).join('');
$('#dots').innerHTML = TESTIS.map((_,i)=>`<button class="${i===0?'active':''}" data-i="${i}" aria-label="Review ${i+1}"></button>`).join('');
let tI = 0;
function showT(i){ tI=i; $$('.testi').forEach((t,j)=>t.classList.toggle('active',i===j)); $$('#dots button').forEach((d,j)=>d.classList.toggle('active',i===j)); }
$('#dots').onclick = e=>{ if(e.target.dataset.i) showT(+e.target.dataset.i) };
setInterval(()=>showT((tI+1)%TESTIS.length), 6000);

/* ================= FAQ ================= */
$('#faqList').innerHTML = FAQS.map(([q,a],i)=>`<div class="acc ${i===0?'open':''}"><button class="acc-q">${q}<span class="pm"></span></button><div class="acc-a"><div><p>${a}</p></div></div></div>`).join('');
$('#faqList').onclick = e=>{ const q=e.target.closest('.acc-q'); if(!q) return; const acc=q.parentElement; const was=acc.classList.contains('open'); $$('.acc').forEach(a=>a.classList.remove('open')); if(!was) acc.classList.add('open'); };

/* newsletter */
/* ================= STATIC ICONS ================= */
$$('[data-icon]').forEach(el=>{
  if(el.classList.contains('step-art')) el.innerHTML = `<span class="art-ic">${icon(el.dataset.icon)}</span><span class="art-label">${el.dataset.label||''}</span>`;
  else el.innerHTML = icon(el.dataset.icon);
});

/* ================= NEWSLETTER ================= */
/* To collect real emails, paste a form endpoint here (e.g. Formspree, Mailchimp, Google Apps Script).
   Leave empty to keep subscribers in this browser only (demo mode). */
const NEWSLETTER_ENDPOINT = '';
const COUPON = 'ROOTS15';
const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
function getSubs(){ try{ return JSON.parse(localStorage.getItem('keshya-subs')||'[]') }catch(e){ return [] } }
function newsError(msg){
  const f=$('#newsForm'); $('#newsMsg').textContent=msg;
  f.classList.remove('err'); void f.offsetWidth; f.classList.add('err');
  $('#newsEmail').focus();
}
$('#newsWrap').addEventListener('input', ()=>{ $('#newsMsg').textContent=''; $('#newsForm').classList.remove('err'); });
$('#newsWrap').addEventListener('submit', async e=>{
  e.preventDefault();
  const email = $('#newsEmail').value.trim().toLowerCase();
  if(!email) return newsError('Please enter your email address.');
  if(!emailOk(email)) return newsError('That doesn\'t look like a valid email. Try name@example.com');
  const subs = getSubs(); const already = subs.includes(email);
  const btn = $('#newsBtn'); btn.disabled = true; btn.innerHTML = '<span class="spin"></span>Joining';
  try{
    if(NEWSLETTER_ENDPOINT && !already){
      const r = await fetch(NEWSLETTER_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({email, source:'keshya-website'})});
      if(!r.ok) throw new Error('bad status');
    } else {
      await new Promise(r=>setTimeout(r,900));
    }
    if(!already){ subs.push(email); try{ localStorage.setItem('keshya-subs', JSON.stringify(subs)) }catch(e){} }
    showNewsSuccess(email, already);
  }catch(err){
    btn.disabled=false; btn.textContent='Subscribe';
    newsError('Something went wrong on our side. Please try again in a moment.');
  }
});
function showNewsSuccess(email, already){
  $('#newsWrap').innerHTML = `<div class="news-ok" role="status">
    <div class="row"><span class="tick">${icon('check')}</span><h4>${already?'You\'re already in the circle':'Welcome to the circle'}</h4></div>
    <p>${already?'Good to see you again! Here\'s your code once more.':'We\'ve added <b>'+email.replace(/</g,'&lt;')+'</b>. Here\'s 15% off your first ritual.'}</p>
    <div class="code"><span id="codeTxt">${COUPON}</span><button id="copyCode">Copy code</button></div>
    <button class="again" id="newsAgain">Use a different email</button></div>`;
  $('#copyCode').onclick = async ()=>{
    try{ await navigator.clipboard.writeText(COUPON); }
    catch(e){ const r=document.createRange(); r.selectNodeContents($('#codeTxt')); const s=getSelection(); s.removeAllRanges(); s.addRange(r); }
    $('#copyCode').textContent='Copied!'; toast(`Code ${COUPON} copied. Use it at checkout`);
    setTimeout(()=>{ const b=$('#copyCode'); if(b) b.textContent='Copy code'; },2000);
  };
  $('#newsAgain').onclick = resetNews;
}
function resetNews(){
  $('#newsWrap').innerHTML = `<form class="news-form" id="newsForm" novalidate><input type="email" id="newsEmail" placeholder="Your email address" autocomplete="email" aria-label="Email address"><button type="submit" id="newsBtn">Subscribe</button></form><div class="news-msg" id="newsMsg" role="status"></div>`;
  setTimeout(()=>$('#newsEmail').focus(),50);
}

/* ================= SEARCH ================= */
const sEl=$('#search'), sIn=$('#sInput'), sRes=$('#sResults');
let sSel=-1;
function openSearch(){ sEl.classList.add('show'); sEl.setAttribute('aria-hidden','false'); document.body.classList.add('lock'); setTimeout(()=>sIn.focus(),250); runSearch(); }
function closeSearch(){ sEl.classList.remove('show'); sEl.setAttribute('aria-hidden','true'); if(!$('#drawer').classList.contains('show')) document.body.classList.remove('lock'); }
$('#searchBtn').onclick=openSearch; $('#sClose').onclick=closeSearch; $('#searchBg').onclick=closeSearch;
$('#sSuggest').onclick=e=>{ if(e.target.tagName==='BUTTON'){ sIn.value=e.target.textContent; runSearch(); sIn.focus(); } };
addEventListener('keydown', e=>{
  const typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
  if((e.key==='k' && (e.ctrlKey||e.metaKey)) || (e.key==='/' && !typing)){ e.preventDefault(); openSearch(); }
  if(!sEl.classList.contains('show')) return;
  const items=$$('.s-item');
  if(e.key==='Escape') closeSearch();
  else if(e.key==='ArrowDown'||e.key==='ArrowUp'){ e.preventDefault(); if(!items.length) return;
    sSel = (sSel + (e.key==='ArrowDown'?1:-1) + items.length) % items.length;
    items.forEach((it,i)=>it.classList.toggle('sel',i===sSel)); items[sSel].scrollIntoView({block:'nearest'}); }
  else if(e.key==='Enter' && document.activeElement===sIn){ e.preventDefault(); (items[sSel]||items[0])?.click(); }
});
const esc = t => t.replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function hl(text, toks){
  let out = esc(text);
  toks.forEach(t=>{ if(t.length<2) return; out = out.replace(new RegExp('('+t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig'),'<mark>$1</mark>'); });
  return out;
}
const stem = w => w.replace(/(ing|es|s|y)$/,'');
function matches(hay, toks){ hay=hay.toLowerCase(); return toks.every(t=>hay.includes(t)||hay.includes(stem(t))); }
function score(hay, title, toks){ let s=0; toks.forEach(t=>{ if(title.toLowerCase().includes(t)) s+=3; if(hay.toLowerCase().includes(t)) s+=1; }); return s; }
sIn.addEventListener('input', runSearch);
function runSearch(){
  const q = sIn.value.trim().toLowerCase(); sSel=-1;
  $('#sSuggest').style.display = q ? 'none' : 'flex';
  const toks = q.split(/\s+/).filter(Boolean);
  if(!toks.length){
    sRes.innerHTML = `<div class="s-group"><h5>Bestsellers</h5>${PRODUCTS.map(p=>prodRow(p,[])).join('')}</div>`; return;
  }
  const prods = PRODUCTS.map(p=>({p, hay:`${p.name} ${p.label} ${p.concern} ${p.kw}`})).filter(x=>matches(x.hay,toks))
    .sort((a,b)=>score(b.hay,b.p.name,toks)-score(a.hay,a.p.name,toks));
  const herbs = HERBS.map((h,i)=>({h,i,hay:`${h.n} ${h.s} ${h.d} ${h.b.join(' ')}`})).filter(x=>matches(x.hay,toks)).slice(0,3);
  const faqs = FAQS.map(([q2,a],i)=>({q:q2,a,i,hay:q2+' '+a})).filter(x=>matches(x.hay,toks)).slice(0,3);
  if(!prods.length && !herbs.length && !faqs.length){
    sRes.innerHTML = `<div class="s-empty">No results for <b>“${esc(sIn.value)}”</b>.<br>Try searching for a concern like <b>dandruff</b> or a herb like <b>rosemary</b>.</div>`; return;
  }
  let html='';
  if(prods.length) html += `<div class="s-group"><h5>Oils · ${prods.length}</h5>${prods.map(x=>prodRow(x.p,toks)).join('')}</div>`;
  if(herbs.length) html += `<div class="s-group"><h5>Ingredients</h5>${herbs.map(x=>`<button class="s-item" data-herb="${x.i}"><span class="th ic" style="color:${x.h.c}">${icon('leaf')}</span><span class="tx"><b>${hl(x.h.n,toks)}</b><small>${hl(x.h.b.join(' · '),toks)}</small></span><span class="go">${icon('arrow')}</span></button>`).join('')}</div>`;
  if(faqs.length) html += `<div class="s-group"><h5>Help</h5>${faqs.map(x=>`<button class="s-item" data-faq="${x.i}"><span class="th ic">${icon('help')}</span><span class="tx"><b>${hl(x.q,toks)}</b><small>${hl(x.a,toks)}</small></span><span class="go">${icon('arrow')}</span></button>`).join('')}</div>`;
  sRes.innerHTML = html;
}
function prodRow(p,toks){
  return `<div class="s-item" role="button" tabindex="0" data-prod="${p.id}"><span class="th" style="background:${p.tint}55">${bottleSVG(p.oil,'K','',200)}</span>
    <span class="tx"><b>${hl(p.name,toks)}</b><small>For ${hl(p.label.toLowerCase(),toks)} · ★ ${p.rating}</small></span>
    <span class="pr">${inr(p.sizes[0].p)}</span><button class="go" data-quickadd="${p.id}" aria-label="Add ${p.name} to cart">${icon('plus')}</button></div>`;
}
sRes.addEventListener('click', e=>{
  const qa = e.target.closest('[data-quickadd]');
  if(qa){ e.stopPropagation(); addToCart(qa.dataset.quickadd, 0, null); renderCart(); return; }
  const it = e.target.closest('.s-item'); if(!it) return;
  closeSearch();
  if(it.dataset.prod){
    $$('.chip').forEach(c=>c.classList.toggle('active',c.dataset.f==='all')); $$('.card').forEach(c=>c.classList.remove('hide'));
    const card = $(`.card [data-add="${it.dataset.prod}"]`).closest('.card');
    setTimeout(()=>{ card.scrollIntoView({behavior:'smooth',block:'center'}); card.classList.remove('flash'); void card.offsetWidth; card.classList.add('flash'); }, 350);
  } else if(it.dataset.herb){
    setTimeout(()=>{ $('#ingredients').scrollIntoView({behavior:'smooth'}); herbAuto=+it.dataset.herb; showHerb(herbAuto); }, 350);
  } else if(it.dataset.faq){
    const accs=$$('.acc'); accs.forEach(a=>a.classList.remove('open')); accs[+it.dataset.faq].classList.add('open');
    setTimeout(()=>accs[+it.dataset.faq].scrollIntoView({behavior:'smooth',block:'center'}), 350);
  }
});
sRes.addEventListener('keydown', e=>{ if(e.key==='Enter' && e.target.classList.contains('s-item')) e.target.click(); });

/* ================= SCROLL REVEAL / COUNTERS / STEPS ================= */
function observeReveals(){
  io = io || new IntersectionObserver(es=>es.forEach(en=>{
    if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);
      const n = en.target.querySelector('[data-count]'); if(n) countUp(n); }
  }), {threshold:.15});
  $$('.reveal:not(.in), .step:not(.in)').forEach(el=>io.observe(el));
}
observeReveals();
function countUp(el){
  const end = +el.dataset.count, suf = el.dataset.suffix||''; const t0 = performance.now();
  (function tick(t){ const p = Math.min(1,(t-t0)/1800); const v = Math.round(end*(1-Math.pow(1-p,3))); el.textContent = v+suf; if(p<1) requestAnimationFrame(tick); })(t0);
}
function updateSteps(){
  const s = $('#steps'); const r = s.getBoundingClientRect();
  const p = Math.min(1, Math.max(0, (innerHeight*.6 - r.top)/r.height));
  $('#stepsLine').style.transform = `scaleY(${p})`;
}
updateSteps();