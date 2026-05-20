/*! FluentBot chat-widget v2.11.2-dev.feaa458 */

!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fcc0f4f2-c575-5fb6-83c1-fa5e66625f28")}catch(e){}}();
function e(e){const a=["true","false","null"],n={scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:a},contains:[{className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0},e.QUOTE_STRING_MODE,n,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}export{e as default};

//# debugId=fcc0f4f2-c575-5fb6-83c1-fa5e66625f28
