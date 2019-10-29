const hljs=require('./highlight-formatted')
exports.default=hljs
hljs.registerLanguage('javascript', function (e) {
    var r = '[A-Za-z$_][0-9A-Za-z$_]*', t = {
            keyword: 'in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as',
            literal: 'true false null undefined NaN Infinity',
            built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise'
        }, a = {
            cN: 'number',
            v: [
                { b: '\\b(0[bB][01]+)' },
                { b: '\\b(0[oO][0-7]+)' },
                { b: e.CNR }
            ],
            r: 0
        }, s = {
            cN: 'subst',
            b: '\\$\\{',
            e: '\\}',
            k: t,
            c: []
        }, c = {
            b: 'html`',
            e: '',
            starts: {
                e: '`',
                rE: !1,
                c: [
                    e.BE,
                    s
                ],
                sL: 'xml'
            }
        }, n = {
            b: 'css`',
            e: '',
            starts: {
                e: '`',
                rE: !1,
                c: [
                    e.BE,
                    s
                ],
                sL: 'css'
            }
        }, o = {
            cN: 'string',
            b: '`',
            e: '`',
            c: [
                e.BE,
                s
            ]
        };
    s.c = [
        e.ASM,
        e.QSM,
        c,
        n,
        o,
        a,
        e.RM
    ];
    var i = s.c.concat([
        e.CBCM,
        e.CLCM
    ]);
    return {
        aliases: [
            'js',
            'jsx'
        ],
        k: t,
        c: [
            {
                cN: 'meta',
                r: 10,
                b: /^\s*['"]use (strict|asm)['"]/
            },
            {
                cN: 'meta',
                b: /^#!/,
                e: /$/
            },
            e.ASM,
            e.QSM,
            c,
            n,
            o,
            e.CLCM,
            e.CBCM,
            a,
            {
                b: /[{,]\s*/,
                r: 0,
                c: [{
                        b: r + '\\s*:',
                        rB: !0,
                        r: 0,
                        c: [{
                                cN: 'attr',
                                b: r,
                                r: 0
                            }]
                    }]
            },
            {
                b: '(' + e.RSR + '|\\b(case|return|throw)\\b)\\s*',
                k: 'return throw case',
                c: [
                    e.CLCM,
                    e.CBCM,
                    e.RM,
                    {
                        cN: 'function',
                        b: '(\\(.*?\\)|' + r + ')\\s*=>',
                        rB: !0,
                        e: '\\s*=>',
                        c: [{
                                cN: 'params',
                                v: [
                                    { b: r },
                                    { b: /\(\s*\)/ },
                                    {
                                        b: /\(/,
                                        e: /\)/,
                                        eB: !0,
                                        eE: !0,
                                        k: t,
                                        c: i
                                    }
                                ]
                            }]
                    },
                    {
                        cN: '',
                        b: /\s/,
                        e: /\s*/,
                        skip: !0
                    },
                    {
                        b: /</,
                        e: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
                        sL: 'xml',
                        c: [
                            {
                                b: /<[A-Za-z0-9\\._:-]+\s*\/>/,
                                skip: !0
                            },
                            {
                                b: /<[A-Za-z0-9\\._:-]+/,
                                e: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
                                skip: !0,
                                c: [
                                    {
                                        b: /<[A-Za-z0-9\\._:-]+\s*\/>/,
                                        skip: !0
                                    },
                                    'self'
                                ]
                            }
                        ]
                    }
                ],
                r: 0
            },
            {
                cN: 'function',
                bK: 'function',
                e: /\{/,
                eE: !0,
                c: [
                    e.inherit(e.TM, { b: r }),
                    {
                        cN: 'params',
                        b: /\(/,
                        e: /\)/,
                        eB: !0,
                        eE: !0,
                        c: i
                    }
                ],
                i: /\[|%/
            },
            { b: /\$[(.]/ },
            e.METHOD_GUARD,
            {
                cN: 'class',
                bK: 'class',
                e: /[{;=]/,
                eE: !0,
                i: /[:"\[\]]/,
                c: [
                    { bK: 'extends' },
                    e.UTM
                ]
            },
            {
                bK: 'constructor get set',
                e: /\{/,
                eE: !0
            }
        ],
        i: /#(?!!)/
    };
});
hljs.registerLanguage('css', function (e) {
    var c = {
        b: /(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,
        rB: !0,
        e: ';',
        eW: !0,
        c: [{
                cN: 'attribute',
                b: /\S/,
                e: ':',
                eE: !0,
                starts: {
                    eW: !0,
                    eE: !0,
                    c: [
                        {
                            b: /[\w-]+\(/,
                            rB: !0,
                            c: [
                                {
                                    cN: 'built_in',
                                    b: /[\w-]+/
                                },
                                {
                                    b: /\(/,
                                    e: /\)/,
                                    c: [
                                        e.ASM,
                                        e.QSM
                                    ]
                                }
                            ]
                        },
                        e.CSSNM,
                        e.QSM,
                        e.ASM,
                        e.CBCM,
                        {
                            cN: 'number',
                            b: '#[0-9A-Fa-f]+'
                        },
                        {
                            cN: 'meta',
                            b: '!important'
                        }
                    ]
                }
            }]
    };
    return {
        cI: !0,
        i: /[=\/|'\$]/,
        c: [
            e.CBCM,
            {
                cN: 'selector-id',
                b: /#[A-Za-z0-9_-]+/
            },
            {
                cN: 'selector-class',
                b: /\.[A-Za-z0-9_-]+/
            },
            {
                cN: 'selector-attr',
                b: /\[/,
                e: /\]/,
                i: '$'
            },
            {
                cN: 'selector-pseudo',
                b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
            },
            {
                b: '@(font-face|page)',
                l: '[a-z-]+',
                k: 'font-face page'
            },
            {
                b: '@',
                e: '[{;]',
                i: /:/,
                c: [
                    {
                        cN: 'keyword',
                        b: /\w+/
                    },
                    {
                        b: /\s/,
                        eW: !0,
                        eE: !0,
                        r: 0,
                        c: [
                            e.ASM,
                            e.QSM,
                            e.CSSNM
                        ]
                    }
                ]
            },
            {
                cN: 'selector-tag',
                b: '[a-zA-Z-][a-zA-Z0-9_-]*',
                r: 0
            },
            {
                b: '{',
                e: '}',
                i: /\S/,
                c: [
                    e.CBCM,
                    c
                ]
            }
        ]
    };
});

hljs.registerLanguage('typescript', function (e) {
    var r = '[A-Za-z$_][0-9A-Za-z$_]*', t = {
            keyword: 'in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await',
            literal: 'true false null undefined NaN Infinity',
            built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise'
        }, n = {
            cN: 'meta',
            b: '@' + r
        }, a = {
            b: '\\(',
            e: /\)/,
            k: t,
            c: [
                'self',
                e.QSM,
                e.ASM,
                e.NM
            ]
        }, s = {
            cN: 'params',
            b: /\(/,
            e: /\)/,
            eB: !0,
            eE: !0,
            k: t,
            c: [
                e.CLCM,
                e.CBCM,
                n,
                a
            ]
        }, c = {
            cN: 'number',
            v: [
                { b: '\\b(0[bB][01]+)' },
                { b: '\\b(0[oO][0-7]+)' },
                { b: e.CNR }
            ],
            r: 0
        }, o = {
            cN: 'subst',
            b: '\\$\\{',
            e: '\\}',
            k: t,
            c: []
        }, i = {
            b: 'html`',
            e: '',
            starts: {
                e: '`',
                rE: !1,
                c: [
                    e.BE,
                    o
                ],
                sL: 'xml'
            }
        }, l = {
            b: 'css`',
            e: '',
            starts: {
                e: '`',
                rE: !1,
                c: [
                    e.BE,
                    o
                ],
                sL: 'css'
            }
        }, b = {
            cN: 'string',
            b: '`',
            e: '`',
            c: [
                e.BE,
                o
            ]
        };
    return o.c = [
        e.ASM,
        e.QSM,
        i,
        l,
        b,
        c,
        e.RM
    ], {
        aliases: ['ts'],
        k: t,
        c: [
            {
                cN: 'meta',
                b: /^\s*['"]use strict['"]/
            },
            e.ASM,
            e.QSM,
            i,
            l,
            b,
            e.CLCM,
            e.CBCM,
            c,
            {
                b: '(' + e.RSR + '|\\b(case|return|throw)\\b)\\s*',
                k: 'return throw case',
                c: [
                    e.CLCM,
                    e.CBCM,
                    e.RM,
                    {
                        cN: 'function',
                        b: '(\\(.*?\\)|' + e.IR + ')\\s*=>',
                        rB: !0,
                        e: '\\s*=>',
                        c: [{
                                cN: 'params',
                                v: [
                                    { b: e.IR },
                                    { b: /\(\s*\)/ },
                                    {
                                        b: /\(/,
                                        e: /\)/,
                                        eB: !0,
                                        eE: !0,
                                        k: t,
                                        c: [
                                            'self',
                                            e.CLCM,
                                            e.CBCM
                                        ]
                                    }
                                ]
                            }]
                    }
                ],
                r: 0
            },
            {
                cN: 'function',
                b: 'function',
                e: /[\{;]/,
                eE: !0,
                k: t,
                c: [
                    'self',
                    e.inherit(e.TM, { b: r }),
                    s
                ],
                i: /%/,
                r: 0
            },
            {
                bK: 'constructor',
                e: /\{/,
                eE: !0,
                c: [
                    'self',
                    s
                ]
            },
            {
                b: /module\./,
                k: { built_in: 'module' },
                r: 0
            },
            {
                bK: 'module',
                e: /\{/,
                eE: !0
            },
            {
                bK: 'interface',
                e: /\{/,
                eE: !0,
                k: 'interface extends'
            },
            { b: /\$[(.]/ },
            {
                b: '\\.' + e.IR,
                r: 0
            },
            n,
            a
        ]
    };
});

hljs.registerLanguage('xml', function (s) {
    var e = {
        eW: !0,
        i: /</,
        r: 0,
        c: [
            {
                cN: 'attr',
                b: '[A-Za-z0-9\\._:-]+',
                r: 0
            },
            {
                b: /=\s*/,
                r: 0,
                c: [{
                        cN: 'string',
                        endsParent: !0,
                        v: [
                            {
                                b: /"/,
                                e: /"/
                            },
                            {
                                b: /'/,
                                e: /'/
                            },
                            { b: /[^\s"'=<>`]+/ }
                        ]
                    }]
            }
        ]
    };
    return {
        aliases: [
            'html',
            'xhtml',
            'rss',
            'atom',
            'xjb',
            'xsd',
            'xsl',
            'plist',
            'wsf'
        ],
        cI: !0,
        c: [
            {
                cN: 'meta',
                b: '<!DOCTYPE',
                e: '>',
                r: 10,
                c: [{
                        b: '\\[',
                        e: '\\]'
                    }]
            },
            s.C('<!--', '-->', { r: 10 }),
            {
                b: '<\\!\\[CDATA\\[',
                e: '\\]\\]>',
                r: 10
            },
            {
                cN: 'meta',
                b: /<\?xml/,
                e: /\?>/,
                r: 10
            },
            {
                b: /<\?(php)?/,
                e: /\?>/,
                sL: 'php',
                c: [
                    {
                        b: '/\\*',
                        e: '\\*/',
                        skip: !0
                    },
                    {
                        b: 'b"',
                        e: '"',
                        skip: !0
                    },
                    {
                        b: 'b\'',
                        e: '\'',
                        skip: !0
                    },
                    s.inherit(s.ASM, {
                        i: null,
                        cN: null,
                        c: null,
                        skip: !0
                    }),
                    s.inherit(s.QSM, {
                        i: null,
                        cN: null,
                        c: null,
                        skip: !0
                    })
                ]
            },
            {
                cN: 'tag',
                b: '<style(?=\\s|>|$)',
                e: '>',
                k: { name: 'style' },
                c: [e],
                starts: {
                    e: '</style>',
                    rE: !0,
                    sL: [
                        'css',
                        'xml'
                    ]
                }
            },
            {
                cN: 'tag',
                b: '<script(?=\\s|>|$)',
                e: '>',
                k: { name: 'script' },
                c: [e],
                starts: {
                    e: '</script>',
                    rE: !0,
                    sL: [
                        'actionscript',
                        'javascript',
                        'handlebars',
                        'xml',
                        'vbscript'
                    ]
                }
            },
            {
                cN: 'tag',
                b: '</?',
                e: '/?>',
                c: [
                    {
                        cN: 'name',
                        b: /[^\/><\s]+/,
                        r: 0
                    },
                    e
                ]
            }
        ]
    };
});