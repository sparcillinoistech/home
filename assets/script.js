const t=document.querySelector('.menu-toggle'),n=document.querySelector('.nav-links');if(t&&n){t.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',String(o))});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');t.setAttribute('aria-expanded','false')}))}
document.querySelectorAll('.dropdown-toggle').forEach(b=>b.addEventListener('click',()=>{const li=b.closest('.nav-dropdown');const open=li.classList.toggle('open');b.setAttribute('aria-expanded',String(open));}));

// Homepage FAQ expand/collapse controls
const expandFaq=document.getElementById('expand-all-faq');
const collapseFaq=document.getElementById('collapse-all-faq');
if(expandFaq) expandFaq.addEventListener('click',()=>document.querySelectorAll('#faq details').forEach(item=>item.open=true));
if(collapseFaq) collapseFaq.addEventListener('click',()=>document.querySelectorAll('#faq details').forEach(item=>item.open=false));
