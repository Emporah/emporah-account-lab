// One drawing per meaning; repeated links to the same feature keep that meaning.
const siteIconDrawings={
 overview:'<path d="m3 11 9-8 9 8v10H3zM9 21v-7h6v7"/>',
 topics:'<path d="M12 5C9 3 5 3 2 4v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-3-1-7-1-10 1v15M5 8h4M5 12h4M15 8h4M15 12h4"/>',
 practice:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V3h8v4M3 12h18M10 11v3h4v-3"/>',
 roadmap:'<path d="m2 5 6-2 8 3 6-2v16l-6 2-8-3-6 2zm6-2v16m8-13v16M11 10l2 2-2 2"/>',
 progress:'<path d="M3 3v18h18M6 16l5-5 4 2 6-8M17 5h4v4"/>',
 dashboard:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="11" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="18" width="7" height="3" rx="1"/>',
 accounts:'<path d="M6 3h14v18H6a3 3 0 0 1 0-6h14M6 3a3 3 0 0 0-3 3v12M9 7h7M9 11h7M6 18h14"/>',
 statements:'<path d="M5 2h10l5 5v15H5zM15 2v5h5M9 17v-3M12 17v-6M15 17v-4M8 20h9"/>',
 guided:'<rect x="5" y="4" width="15" height="18" rx="2"/><rect x="9" y="2" width="7" height="4" rx="1"/><path d="m8 11 1 1 2-2m-3 7 1 1 2-2M14 11h3M14 17h3"/>',
 settings:'<path d="M4 5h16M4 12h16M4 19h16"/><circle cx="8" cy="5" r="2" fill="var(--paper,#fff)"/><circle cx="16" cy="12" r="2" fill="var(--paper,#fff)"/><circle cx="10" cy="19" r="2" fill="var(--paper,#fff)"/>',
 goal:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
 achievement:'<path d="M7 3h10v7a5 5 0 0 1-10 0zM7 5H3v3a4 4 0 0 0 4 4M17 5h4v3a4 4 0 0 1-4 4M12 15v6M8 21h8"/>',
 capital:'<path d="m3 8 9-5 9 5-9 5zM3 8v10l9 5 9-5V8M12 13v10M7 5l10 6"/>',
 principles:'<path d="M12 3v17M6 21h12M4 7h16M4 7l-3 7h6zm16 0-3 7h6zM9 4h6"/>',
 depreciation:'<path d="M3 3v18h18M6 6l5 4 4 4 6 3M17 17h4v-4"/>',
 disposal:'<rect x="3" y="9" width="10" height="12" rx="1"/><path d="M3 13h10M8 9V5h13m-4-4 4 4-4 4"/>',
 irrecoverable:'<path d="M5 2h10l4 4v16H5zM15 2v5h4m-10 5 6 6m0-6-6 6"/>',
 bank:'<path d="m2 8 10-5 10 5H2M4 8v10m5-10v10m6-10v10m5-10v10M2 21h20M2 18h20"/>',
 control:'<rect x="3" y="3" width="12" height="18" rx="1"/><path d="M6 7h6M6 11h4M6 15h3m11 2 3 4"/><circle cx="16" cy="13" r="4"/>',
 allowance:'<path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6zM9 9h6M12 9v7m-3-3h6"/>',
 accruals:'<rect x="2" y="4" width="17" height="16" rx="2"/><path d="M6 2v4m9-4v4M2 9h17"/><circle cx="17" cy="17" r="5" fill="var(--paper,#fff)"/><path d="M17 14v3l2 1"/>',
 suspense:'<path d="M3 3h7v3a2 2 0 1 0 4 0V3h7v7h-3a2 2 0 1 0 0 4h3v7h-7v-3a2 2 0 1 0-4 0v3H3v-7h3a2 2 0 1 0 0-4H3z"/>',
 inventory:'<path d="M3 10h18v11H3zM8 10V3h8v7M3 15h18M8 15v6m8-6v6M11 3v3h2V3M11 10v3h2v-3"/>',
 etb:'<rect x="2" y="3" width="20" height="18" rx="1"/><path d="M2 8h20M2 13h20M2 17h20M8 3v18m5-18v18m5-18v18"/>',
 incomplete:'<path d="M5 2h10l4 4v4M5 2v20h14v-6M15 2v5h4M8 10h4M8 14h3"/><circle cx="17" cy="13" r="1"/><path d="M17 17v1"/>',
 ratios:'<path d="M12 3a9 9 0 1 0 9 9h-9zM16 2v6h6a6 6 0 0 0-6-6"/>',
 sole:'<circle cx="9" cy="6" r="3"/><path d="M3 21v-4a6 6 0 0 1 12 0v4"/><rect x="16" y="10" width="6" height="11" rx="1"/><path d="M18 14h2M18 17h2"/>',
 partnership:'<circle cx="7" cy="6" r="3"/><circle cx="17" cy="6" r="3"/><path d="M2 21v-4a5 5 0 0 1 10 0v4m0-4a5 5 0 0 1 10 0v4M9 14l3 3 3-3"/>',
 double:'<path d="M3 4h7v16H3zM14 4h7v16h-7M5 8h3M16 16h3M8 11h9m-3-3 3 3-3 3M16 17H7m3-3-3 3 3 3"/>'
};
function siteIcon(name){if(!siteIconDrawings[name])throw Error('Unknown site icon: '+name);return `<svg class="site-icon" data-icon-name="${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${siteIconDrawings[name]}</svg>`}
function applySiteIcons(){document.querySelectorAll('[data-site-icon]').forEach(node=>node.innerHTML=siteIcon(node.dataset.siteIcon))}
