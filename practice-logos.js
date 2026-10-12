const practiceLogos=[
 {id:'initials',name:'Initials',art:null},
 {id:'oak',name:'Oak',art:'<path d="M12 21v-7M8 21h8"/><path d="M6 14a4 4 0 0 1-1-7 5 5 0 0 1 10-2 4 4 0 0 1 3 7 4 4 0 0 1-5 3l-1-1-1 1a4 4 0 0 1-5-1Z"/>'},
 {id:'pillar',name:'Pillar',art:'<path d="m3 7 9-4 9 4H3ZM4 21h16M6 10v8M10 10v8M14 10v8M18 10v8M5 18h14"/>'},
 {id:'compass',name:'Compass',art:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z"/>'},
 {id:'summit',name:'Summit',art:'<path d="m2 20 8-15 5 9 3-5 4 11H2ZM7 11l3 2 3-2M10 5V2l5 2-5 2"/>'},
 {id:'ledger',name:'Ledger',art:'<rect x="5" y="3" width="15" height="18" rx="2"/><path d="M9 3v18M12 8h5M12 12h5M12 16h3M3 7h3M3 12h3M3 17h3"/>'},
 {id:'bridge',name:'Bridge',art:'<path d="M2 17h20M4 17V6M20 17V6M4 8c5 8 11 8 16 0M8 13v4M12 14v3M16 13v4M2 21h20"/>'},
 {id:'spark',name:'Spark',art:'<path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3Z"/>'},
 {id:'shield',name:'Shield',art:'<path d="m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>'}
];
function practiceInitials(name){let words=String(name||'Your Practice').match(/[\p{L}\p{N}]+/gu)||['P'];return words.slice(0,2).map(w=>Array.from(w)[0]).join('').toUpperCase()}
function practiceMark(id=state.practiceLogo||'initials',name=state.firm,className='practice-mark'){let logo=practiceLogos.find(l=>l.id===id)||practiceLogos[0];return `<span class="${className}" aria-hidden="true">${logo.art?`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">${logo.art}</svg>`:esc(practiceInitials(name))}</span>`}
function practiceLogoPicker(){let selected=practiceLogos.some(l=>l.id===state.practiceLogo)?state.practiceLogo:'initials';return `<fieldset class="logo-fieldset"><legend>Practice logo</legend><p>Choose an emblem for your practice. You can change it any time.</p><div class="logo-options">${practiceLogos.map(l=>`<label class="logo-option"><input type="radio" name="practice-logo" value="${l.id}" ${selected===l.id?'checked':''}>${practiceMark(l.id,state.firm,'practice-mark option-mark')}<span>${l.name}</span></label>`).join('')}</div></fieldset><div class="logo-preview" id="practice-logo-preview" aria-live="polite"></div>`}
function updatePracticeLogoPreview(){let selected=document.querySelector('input[name="practice-logo"]:checked')?.value||'initials',name=$('#firm-name').value.trim()||'Your practice';$('#practice-logo-preview').innerHTML=practiceMark(selected,name)+`<div><span class="eyebrow">PREVIEW</span><strong>${esc(name)}</strong></div>`;let initials=document.querySelector('.logo-option .option-mark');if(initials)initials.textContent=practiceInitials(name)}
