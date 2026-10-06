const images = Array.from({length:54},(_,i)=>`img/galeria_${String(i+1).padStart(3,'0')}.jpg`);
const gallery=document.getElementById('gallery');
images.forEach((src,i)=>{const item=document.createElement('figure');item.className='gallery-item';item.innerHTML=`<img src="${src}" loading="lazy" alt="Pieza de la colección filatélica de Yerko Canales Rojas — imagen ${i+1}">`;item.onclick=()=>openLightbox(i);gallery.appendChild(item)});
const lb=document.getElementById('lightbox'), lbImg=document.getElementById('lightbox-img'), cap=document.getElementById('lightbox-caption');let current=0;
function openLightbox(i){current=i;lbImg.src=images[i];lbImg.alt=`Pieza de la colección — imagen ${i+1}`;cap.textContent=`COLECCIÓN FILATÉLICA · ${i+1} / ${images.length}`;lb.classList.add('open');lb.setAttribute('aria-hidden','false')}
function closeLightbox(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');lbImg.src=''}
function move(n){current=(current+n+images.length)%images.length;openLightbox(current)}
document.querySelector('.close').onclick=closeLightbox;document.querySelector('.prev').onclick=()=>move(-1);document.querySelector('.next').onclick=()=>move(1);lb.onclick=e=>{if(e.target===lb)closeLightbox()};document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')closeLightbox();if(e.key==='ArrowLeft')move(-1);if(e.key==='ArrowRight')move(1)});
document.querySelector('.menu-toggle').onclick=()=>document.querySelector('.nav-links').classList.toggle('open');
