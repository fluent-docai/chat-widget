/*! FluentBot chat-widget v2.18.0-dev.9a08621 */

!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="39eec4b6-d274-57fc-8769-a9c7b36a6d3c")}catch(e){}}();
function e(e){const a=["true","false","null"],n={scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:a},contains:[{className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0},e.QUOTE_STRING_MODE,n,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}export{e as default};

//# debugId=39eec4b6-d274-57fc-8769-a9c7b36a6d3c
