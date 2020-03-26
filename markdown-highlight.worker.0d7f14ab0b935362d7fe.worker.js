!(function (e) {
    var n = {};
    function a(t) {
        if (n[t]) return n[t].exports;
        var r = (n[t] = { i: t, l: !1, exports: {} });
        return e[t].call(r.exports, r, r.exports, a), (r.l = !0), r.exports;
    }
    (a.m = e),
        (a.c = n),
        (a.d = function (e, n, t) {
            a.o(e, n) ||
                Object.defineProperty(e, n, { enumerable: !0, get: t });
        }),
        (a.r = function (e) {
            "undefined" !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (a.t = function (e, n) {
            if ((1 & n && (e = a(e)), 8 & n)) return e;
            if (4 & n && "object" === typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if (
                (a.r(t),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e,
                }),
                2 & n && "string" != typeof e)
            )
                for (var r in e)
                    a.d(
                        t,
                        r,
                        function (n) {
                            return e[n];
                        }.bind(null, r)
                    );
            return t;
        }),
        (a.n = function (e) {
            var n =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return a.d(n, "a", n), n;
        }),
        (a.o = function (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n);
        }),
        (a.p =
            "https://cdn.jsdelivr.net/gh/masx200/my-vue-router-project@2.2.12/"),
        a((a.s = 6));
})([
    function (e, n, a) {
        var t;
        !(function (a) {
            var r =
                ("object" === typeof window && window) ||
                ("object" === typeof self && self);
            n.nodeType
                ? r &&
                  ((r.hljs = a({})),
                  void 0 ===
                      (t = function () {
                          return r.hljs;
                      }.apply(n, [])) || (e.exports = t))
                : a(n);
        })(function (e) {
            var n,
                a = [],
                t = Object.keys,
                r = {},
                s = {},
                i = /^(no-?highlight|plain|text)$/i,
                o = /\blang(?:uage)?-([\w-]+)\b/i,
                l = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
                c = "</span>",
                u = {
                    classPrefix: "hljs-",
                    tabReplace: null,
                    useBR: !1,
                    languages: void 0,
                };
            function g(e) {
                return e
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;");
            }
            function d(e) {
                return e.nodeName.toLowerCase();
            }
            function E(e, n) {
                var a = e && e.exec(n);
                return a && 0 === a.index;
            }
            function b(e) {
                return i.test(e);
            }
            function f(e) {
                var n,
                    a = {},
                    t = Array.prototype.slice.call(arguments, 1);
                for (n in e) a[n] = e[n];
                return (
                    t.forEach(function (e) {
                        for (n in e) a[n] = e[n];
                    }),
                    a
                );
            }
            function _(e) {
                var n = [];
                return (
                    (function e(a, t) {
                        for (var r = a.firstChild; r; r = r.nextSibling)
                            3 === r.nodeType
                                ? (t += r.nodeValue.length)
                                : 1 === r.nodeType &&
                                  (n.push({
                                      event: "start",
                                      offset: t,
                                      node: r,
                                  }),
                                  (t = e(r, t)),
                                  d(r).match(/br|hr|img|input/) ||
                                      n.push({
                                          event: "stop",
                                          offset: t,
                                          node: r,
                                      }));
                        return t;
                    })(e, 0),
                    n
                );
            }
            function m(e) {
                if (n && !e.langApiRestored) {
                    for (var a in ((e.langApiRestored = !0), n))
                        e[a] && (e[n[a]] = e[a]);
                    (e.contains || []).concat(e.variants || []).forEach(m);
                }
            }
            function p(e) {
                function n(e) {
                    return (e && e.source) || e;
                }
                function a(a, t) {
                    return new RegExp(
                        n(a),
                        "m" + (e.case_insensitive ? "i" : "") + (t ? "g" : "")
                    );
                }
                !(function r(s, i) {
                    if (!s.compiled) {
                        if (
                            ((s.compiled = !0),
                            (s.keywords = s.keywords || s.beginKeywords),
                            s.keywords)
                        ) {
                            var o = {},
                                l = function (n, a) {
                                    e.case_insensitive && (a = a.toLowerCase()),
                                        a.split(" ").forEach(function (e) {
                                            var a = e.split("|");
                                            o[a[0]] = [
                                                n,
                                                a[1] ? Number(a[1]) : 1,
                                            ];
                                        });
                                };
                            "string" === typeof s.keywords
                                ? l("keyword", s.keywords)
                                : t(s.keywords).forEach(function (e) {
                                      l(e, s.keywords[e]);
                                  }),
                                (s.keywords = o);
                        }
                        (s.lexemesRe = a(s.lexemes || /\w+/, !0)),
                            i &&
                                (s.beginKeywords &&
                                    (s.begin =
                                        "\\b(" +
                                        s.beginKeywords.split(" ").join("|") +
                                        ")\\b"),
                                s.begin || (s.begin = /\B|\b/),
                                (s.beginRe = a(s.begin)),
                                s.endSameAsBegin && (s.end = s.begin),
                                s.end || s.endsWithParent || (s.end = /\B|\b/),
                                s.end && (s.endRe = a(s.end)),
                                (s.terminator_end = n(s.end) || ""),
                                s.endsWithParent &&
                                    i.terminator_end &&
                                    (s.terminator_end +=
                                        (s.end ? "|" : "") + i.terminator_end)),
                            s.illegal && (s.illegalRe = a(s.illegal)),
                            null == s.relevance && (s.relevance = 1),
                            s.contains || (s.contains = []),
                            (s.contains = Array.prototype.concat.apply(
                                [],
                                s.contains.map(function (e) {
                                    return (function (e) {
                                        return (
                                            e.variants &&
                                                !e.cached_variants &&
                                                (e.cached_variants = e.variants.map(
                                                    function (n) {
                                                        return f(
                                                            e,
                                                            { variants: null },
                                                            n
                                                        );
                                                    }
                                                )),
                                            e.cached_variants ||
                                                (e.endsWithParent && [
                                                    f(e),
                                                ]) || [e]
                                        );
                                    })("self" === e ? s : e);
                                })
                            )),
                            s.contains.forEach(function (e) {
                                r(e, s);
                            }),
                            s.starts && r(s.starts, i);
                        var c = s.contains
                            .map(function (e) {
                                return e.beginKeywords
                                    ? "\\.?(?:" + e.begin + ")\\.?"
                                    : e.begin;
                            })
                            .concat([s.terminator_end, s.illegal])
                            .map(n)
                            .filter(Boolean);
                        s.terminators = c.length
                            ? a(
                                  (function (e, a) {
                                      for (
                                          var t = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,
                                              r = 0,
                                              s = "",
                                              i = 0;
                                          i < e.length;
                                          i++
                                      ) {
                                          var o = r,
                                              l = n(e[i]);
                                          for (
                                              i > 0 && (s += a);
                                              l.length > 0;

                                          ) {
                                              var c = t.exec(l);
                                              if (null == c) {
                                                  s += l;
                                                  break;
                                              }
                                              (s += l.substring(0, c.index)),
                                                  (l = l.substring(
                                                      c.index + c[0].length
                                                  )),
                                                  "\\" == c[0][0] && c[1]
                                                      ? (s +=
                                                            "\\" +
                                                            String(
                                                                Number(c[1]) + o
                                                            ))
                                                      : ((s += c[0]),
                                                        "(" == c[0] && r++);
                                          }
                                      }
                                      return s;
                                  })(c, "|"),
                                  !0
                              )
                            : {
                                  exec: function () {
                                      return null;
                                  },
                              };
                    }
                })(e);
            }
            function N(e, n, a, t) {
                function s(e) {
                    return new RegExp(
                        e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
                        "m"
                    );
                }
                function i(e, n) {
                    var a = f.case_insensitive ? n[0].toLowerCase() : n[0];
                    return e.keywords.hasOwnProperty(a) && e.keywords[a];
                }
                function o(e, n, a, t) {
                    var r = '<span class="' + (t ? "" : u.classPrefix);
                    return e ? (r += e + '">') + n + (a ? "" : c) : n;
                }
                function l() {
                    (M +=
                        null != m.subLanguage
                            ? (function () {
                                  var e = "string" === typeof m.subLanguage;
                                  if (e && !r[m.subLanguage]) return g(R);
                                  var n = e
                                      ? N(
                                            m.subLanguage,
                                            R,
                                            !0,
                                            O[m.subLanguage]
                                        )
                                      : v(
                                            R,
                                            m.subLanguage.length
                                                ? m.subLanguage
                                                : void 0
                                        );
                                  return (
                                      m.relevance > 0 && (y += n.relevance),
                                      e && (O[m.subLanguage] = n.top),
                                      o(n.language, n.value, !1, !0)
                                  );
                              })()
                            : (function () {
                                  var e, n, a, t;
                                  if (!m.keywords) return g(R);
                                  for (
                                      t = "",
                                          n = 0,
                                          m.lexemesRe.lastIndex = 0,
                                          a = m.lexemesRe.exec(R);
                                      a;

                                  )
                                      (t += g(R.substring(n, a.index))),
                                          (e = i(m, a))
                                              ? ((y += e[1]),
                                                (t += o(e[0], g(a[0]))))
                                              : (t += g(a[0])),
                                          (n = m.lexemesRe.lastIndex),
                                          (a = m.lexemesRe.exec(R));
                                  return t + g(R.substr(n));
                              })()),
                        (R = "");
                }
                function d(e) {
                    (M += e.className ? o(e.className, "", !0) : ""),
                        (m = Object.create(e, { parent: { value: m } }));
                }
                function b(e, n) {
                    if (((R += e), null == n)) return l(), 0;
                    var t = (function (e, n) {
                        var a, t;
                        for (a = 0, t = n.contains.length; a < t; a++)
                            if (E(n.contains[a].beginRe, e))
                                return (
                                    n.contains[a].endSameAsBegin &&
                                        (n.contains[a].endRe = s(
                                            n.contains[a].beginRe.exec(e)[0]
                                        )),
                                    n.contains[a]
                                );
                    })(n, m);
                    if (t)
                        return (
                            t.skip
                                ? (R += n)
                                : (t.excludeBegin && (R += n),
                                  l(),
                                  t.returnBegin || t.excludeBegin || (R = n)),
                            d(t),
                            t.returnBegin ? 0 : n.length
                        );
                    var r = (function e(n, a) {
                        if (E(n.endRe, a)) {
                            for (; n.endsParent && n.parent; ) n = n.parent;
                            return n;
                        }
                        if (n.endsWithParent) return e(n.parent, a);
                    })(m, n);
                    if (r) {
                        var i = m;
                        i.skip
                            ? (R += n)
                            : (i.returnEnd || i.excludeEnd || (R += n),
                              l(),
                              i.excludeEnd && (R = n));
                        do {
                            m.className && (M += c),
                                m.skip || m.subLanguage || (y += m.relevance),
                                (m = m.parent);
                        } while (m !== r.parent);
                        return (
                            r.starts &&
                                (r.endSameAsBegin && (r.starts.endRe = r.endRe),
                                d(r.starts)),
                            i.returnEnd ? 0 : n.length
                        );
                    }
                    if (
                        (function (e, n) {
                            return !a && E(n.illegalRe, e);
                        })(n, m)
                    )
                        throw new Error(
                            'Illegal lexeme "' +
                                n +
                                '" for mode "' +
                                (m.className || "<unnamed>") +
                                '"'
                        );
                    return (R += n), n.length || 1;
                }
                var f = h(e);
                if (!f) throw new Error('Unknown language: "' + e + '"');
                p(f);
                var _,
                    m = t || f,
                    O = {},
                    M = "";
                for (_ = m; _ !== f; _ = _.parent)
                    _.className && (M = o(_.className, "", !0) + M);
                var R = "",
                    y = 0;
                try {
                    for (
                        var A, S, C = 0;
                        (m.terminators.lastIndex = C),
                            (A = m.terminators.exec(n));

                    )
                        (S = b(n.substring(C, A.index), A[0])),
                            (C = A.index + S);
                    for (b(n.substr(C)), _ = m; _.parent; _ = _.parent)
                        _.className && (M += c);
                    return { relevance: y, value: M, language: e, top: m };
                } catch (w) {
                    if (w.message && -1 !== w.message.indexOf("Illegal"))
                        return { relevance: 0, value: g(n) };
                    throw w;
                }
            }
            function v(e, n) {
                n = n || u.languages || t(r);
                var a = { relevance: 0, value: g(e) },
                    s = a;
                return (
                    n
                        .filter(h)
                        .filter(y)
                        .forEach(function (n) {
                            var t = N(n, e, !1);
                            (t.language = n),
                                t.relevance > s.relevance && (s = t),
                                t.relevance > a.relevance && ((s = a), (a = t));
                        }),
                    s.language && (a.second_best = s),
                    a
                );
            }
            function O(e) {
                return u.tabReplace || u.useBR
                    ? e.replace(l, function (e, n) {
                          return u.useBR && "\n" === e
                              ? "<br>"
                              : u.tabReplace
                              ? n.replace(/\t/g, u.tabReplace)
                              : "";
                      })
                    : e;
            }
            function M(e) {
                var n,
                    t,
                    r,
                    i,
                    l,
                    c = (function (e) {
                        var n,
                            a,
                            t,
                            r,
                            s = e.className + " ";
                        if (
                            ((s += e.parentNode ? e.parentNode.className : ""),
                            (a = o.exec(s)))
                        )
                            return h(a[1]) ? a[1] : "no-highlight";
                        for (n = 0, t = (s = s.split(/\s+/)).length; n < t; n++)
                            if (b((r = s[n])) || h(r)) return r;
                    })(e);
                b(c) ||
                    (u.useBR
                        ? ((n = document.createElementNS(
                              "http://www.w3.org/1999/xhtml",
                              "div"
                          )).innerHTML = e.innerHTML
                              .replace(/\n/g, "")
                              .replace(/<br[ \/]*>/g, "\n"))
                        : (n = e),
                    (l = n.textContent),
                    (r = c ? N(c, l, !0) : v(l)),
                    (t = _(n)).length &&
                        (((i = document.createElementNS(
                            "http://www.w3.org/1999/xhtml",
                            "div"
                        )).innerHTML = r.value),
                        (r.value = (function (e, n, t) {
                            var r = 0,
                                s = "",
                                i = [];
                            function o() {
                                return e.length && n.length
                                    ? e[0].offset !== n[0].offset
                                        ? e[0].offset < n[0].offset
                                            ? e
                                            : n
                                        : "start" === n[0].event
                                        ? e
                                        : n
                                    : e.length
                                    ? e
                                    : n;
                            }
                            function l(e) {
                                s +=
                                    "<" +
                                    d(e) +
                                    a.map
                                        .call(e.attributes, function (e) {
                                            return (
                                                " " +
                                                e.nodeName +
                                                '="' +
                                                g(e.value).replace(
                                                    '"',
                                                    "&quot;"
                                                ) +
                                                '"'
                                            );
                                        })
                                        .join("") +
                                    ">";
                            }
                            function c(e) {
                                s += "</" + d(e) + ">";
                            }
                            function u(e) {
                                ("start" === e.event ? l : c)(e.node);
                            }
                            for (; e.length || n.length; ) {
                                var E = o();
                                if (
                                    ((s += g(t.substring(r, E[0].offset))),
                                    (r = E[0].offset),
                                    E === e)
                                ) {
                                    i.reverse().forEach(c);
                                    do {
                                        u(E.splice(0, 1)[0]), (E = o());
                                    } while (
                                        E === e &&
                                        E.length &&
                                        E[0].offset === r
                                    );
                                    i.reverse().forEach(l);
                                } else
                                    "start" === E[0].event
                                        ? i.push(E[0].node)
                                        : i.pop(),
                                        u(E.splice(0, 1)[0]);
                            }
                            return s + g(t.substr(r));
                        })(t, _(i), l))),
                    (r.value = O(r.value)),
                    (e.innerHTML = r.value),
                    (e.className = (function (e, n, a) {
                        var t = n ? s[n] : a,
                            r = [e.trim()];
                        return (
                            e.match(/\bhljs\b/) || r.push("hljs"),
                            -1 === e.indexOf(t) && r.push(t),
                            r.join(" ").trim()
                        );
                    })(e.className, c, r.language)),
                    (e.result = { language: r.language, re: r.relevance }),
                    r.second_best &&
                        (e.second_best = {
                            language: r.second_best.language,
                            re: r.second_best.relevance,
                        }));
            }
            function R() {
                if (!R.called) {
                    R.called = !0;
                    var e = document.querySelectorAll("pre code");
                    a.forEach.call(e, M);
                }
            }
            function h(e) {
                return (e = (e || "").toLowerCase()), r[e] || r[s[e]];
            }
            function y(e) {
                var n = h(e);
                return n && !n.disableAutodetect;
            }
            return (
                (e.highlight = N),
                (e.highlightAuto = v),
                (e.fixMarkup = O),
                (e.highlightBlock = M),
                (e.configure = function (e) {
                    u = f(u, e);
                }),
                (e.initHighlighting = R),
                (e.initHighlightingOnLoad = function () {
                    addEventListener("DOMContentLoaded", R, !1),
                        addEventListener("load", R, !1);
                }),
                (e.registerLanguage = function (n, a) {
                    var t = (r[n] = a(e));
                    m(t),
                        t.aliases &&
                            t.aliases.forEach(function (e) {
                                s[e] = n;
                            });
                }),
                (e.listLanguages = function () {
                    return t(r);
                }),
                (e.getLanguage = h),
                (e.autoDetection = y),
                (e.inherit = f),
                (e.IDENT_RE = "[a-zA-Z]\\w*"),
                (e.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*"),
                (e.NUMBER_RE = "\\b\\d+(\\.\\d+)?"),
                (e.C_NUMBER_RE =
                    "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"),
                (e.BINARY_NUMBER_RE = "\\b(0b[01]+)"),
                (e.RE_STARTERS_RE =
                    "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"),
                (e.BACKSLASH_ESCAPE = { begin: "\\\\[\\s\\S]", relevance: 0 }),
                (e.APOS_STRING_MODE = {
                    className: "string",
                    begin: "'",
                    end: "'",
                    illegal: "\\n",
                    contains: [e.BACKSLASH_ESCAPE],
                }),
                (e.QUOTE_STRING_MODE = {
                    className: "string",
                    begin: '"',
                    end: '"',
                    illegal: "\\n",
                    contains: [e.BACKSLASH_ESCAPE],
                }),
                (e.PHRASAL_WORDS_MODE = {
                    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
                }),
                (e.COMMENT = function (n, a, t) {
                    var r = e.inherit(
                        {
                            className: "comment",
                            begin: n,
                            end: a,
                            contains: [],
                        },
                        t || {}
                    );
                    return (
                        r.contains.push(e.PHRASAL_WORDS_MODE),
                        r.contains.push({
                            className: "doctag",
                            begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
                            relevance: 0,
                        }),
                        r
                    );
                }),
                (e.C_LINE_COMMENT_MODE = e.COMMENT("//", "$")),
                (e.C_BLOCK_COMMENT_MODE = e.COMMENT("/\\*", "\\*/")),
                (e.HASH_COMMENT_MODE = e.COMMENT("#", "$")),
                (e.NUMBER_MODE = {
                    className: "number",
                    begin: e.NUMBER_RE,
                    relevance: 0,
                }),
                (e.C_NUMBER_MODE = {
                    className: "number",
                    begin: e.C_NUMBER_RE,
                    relevance: 0,
                }),
                (e.BINARY_NUMBER_MODE = {
                    className: "number",
                    begin: e.BINARY_NUMBER_RE,
                    relevance: 0,
                }),
                (e.CSS_NUMBER_MODE = {
                    className: "number",
                    begin:
                        e.NUMBER_RE +
                        "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                    relevance: 0,
                }),
                (e.REGEXP_MODE = {
                    className: "regexp",
                    begin: /\//,
                    end: /\/[gimuy]*/,
                    illegal: /\n/,
                    contains: [
                        e.BACKSLASH_ESCAPE,
                        {
                            begin: /\[/,
                            end: /\]/,
                            relevance: 0,
                            contains: [e.BACKSLASH_ESCAPE],
                        },
                    ],
                }),
                (e.TITLE_MODE = {
                    className: "title",
                    begin: e.IDENT_RE,
                    relevance: 0,
                }),
                (e.UNDERSCORE_TITLE_MODE = {
                    className: "title",
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0,
                }),
                (e.METHOD_GUARD = {
                    begin: "\\.\\s*" + e.UNDERSCORE_IDENT_RE,
                    relevance: 0,
                }),
                e
            );
        });
    },
    function (e, n) {
        e.exports = function (e) {
            var n = "[A-Za-z$_][0-9A-Za-z$_]*",
                a = {
                    keyword:
                        "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
                    literal: "true false null undefined NaN Infinity",
                    built_in:
                        "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise",
                },
                t = {
                    className: "number",
                    variants: [
                        { begin: "\\b(0[bB][01]+)" },
                        { begin: "\\b(0[oO][0-7]+)" },
                        { begin: e.C_NUMBER_RE },
                    ],
                    relevance: 0,
                },
                r = {
                    className: "subst",
                    begin: "\\$\\{",
                    end: "\\}",
                    keywords: a,
                    contains: [],
                },
                s = {
                    begin: "html`",
                    end: "",
                    starts: {
                        end: "`",
                        returnEnd: !1,
                        contains: [e.BACKSLASH_ESCAPE, r],
                        subLanguage: "xml",
                    },
                },
                i = {
                    begin: "css`",
                    end: "",
                    starts: {
                        end: "`",
                        returnEnd: !1,
                        contains: [e.BACKSLASH_ESCAPE, r],
                        subLanguage: "css",
                    },
                },
                o = {
                    className: "string",
                    begin: "`",
                    end: "`",
                    contains: [e.BACKSLASH_ESCAPE, r],
                };
            r.contains = [
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE,
                s,
                i,
                o,
                t,
                e.REGEXP_MODE,
            ];
            var l = r.contains.concat([
                e.C_BLOCK_COMMENT_MODE,
                e.C_LINE_COMMENT_MODE,
            ]);
            return {
                aliases: ["js", "jsx"],
                keywords: a,
                contains: [
                    {
                        className: "meta",
                        relevance: 10,
                        begin: /^\s*['"]use (strict|asm)['"]/,
                    },
                    { className: "meta", begin: /^#!/, end: /$/ },
                    e.APOS_STRING_MODE,
                    e.QUOTE_STRING_MODE,
                    s,
                    i,
                    o,
                    e.C_LINE_COMMENT_MODE,
                    e.C_BLOCK_COMMENT_MODE,
                    t,
                    {
                        begin: /[{,]\s*/,
                        relevance: 0,
                        contains: [
                            {
                                begin: n + "\\s*:",
                                returnBegin: !0,
                                relevance: 0,
                                contains: [
                                    {
                                        className: "attr",
                                        begin: n,
                                        relevance: 0,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        begin:
                            "(" +
                            e.RE_STARTERS_RE +
                            "|\\b(case|return|throw)\\b)\\s*",
                        keywords: "return throw case",
                        contains: [
                            e.C_LINE_COMMENT_MODE,
                            e.C_BLOCK_COMMENT_MODE,
                            e.REGEXP_MODE,
                            {
                                className: "function",
                                begin: "(\\(.*?\\)|" + n + ")\\s*=>",
                                returnBegin: !0,
                                end: "\\s*=>",
                                contains: [
                                    {
                                        className: "params",
                                        variants: [
                                            { begin: n },
                                            { begin: /\(\s*\)/ },
                                            {
                                                begin: /\(/,
                                                end: /\)/,
                                                excludeBegin: !0,
                                                excludeEnd: !0,
                                                keywords: a,
                                                contains: l,
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                className: "",
                                begin: /\s/,
                                end: /\s*/,
                                skip: !0,
                            },
                            {
                                begin: /</,
                                end: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
                                subLanguage: "xml",
                                contains: [
                                    {
                                        begin: /<[A-Za-z0-9\\._:-]+\s*\/>/,
                                        skip: !0,
                                    },
                                    {
                                        begin: /<[A-Za-z0-9\\._:-]+/,
                                        end: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
                                        skip: !0,
                                        contains: [
                                            {
                                                begin: /<[A-Za-z0-9\\._:-]+\s*\/>/,
                                                skip: !0,
                                            },
                                            "self",
                                        ],
                                    },
                                ],
                            },
                        ],
                        relevance: 0,
                    },
                    {
                        className: "function",
                        beginKeywords: "function",
                        end: /\{/,
                        excludeEnd: !0,
                        contains: [
                            e.inherit(e.TITLE_MODE, { begin: n }),
                            {
                                className: "params",
                                begin: /\(/,
                                end: /\)/,
                                excludeBegin: !0,
                                excludeEnd: !0,
                                contains: l,
                            },
                        ],
                        illegal: /\[|%/,
                    },
                    { begin: /\$[(.]/ },
                    e.METHOD_GUARD,
                    {
                        className: "class",
                        beginKeywords: "class",
                        end: /[{;=]/,
                        excludeEnd: !0,
                        illegal: /[:"\[\]]/,
                        contains: [
                            { beginKeywords: "extends" },
                            e.UNDERSCORE_TITLE_MODE,
                        ],
                    },
                    {
                        beginKeywords: "constructor get set",
                        end: /\{/,
                        excludeEnd: !0,
                    },
                ],
                illegal: /#(?!!)/,
            };
        };
    },
    function (e, n) {
        e.exports = function (e) {
            var n = {
                    keyword:
                        "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await",
                    literal: "true false null undefined NaN Infinity",
                    built_in:
                        "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise",
                },
                a = { className: "meta", begin: "@[A-Za-z$_][0-9A-Za-z$_]*" },
                t = {
                    begin: "\\(",
                    end: /\)/,
                    keywords: n,
                    contains: [
                        "self",
                        e.QUOTE_STRING_MODE,
                        e.APOS_STRING_MODE,
                        e.NUMBER_MODE,
                    ],
                },
                r = {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: n,
                    contains: [
                        e.C_LINE_COMMENT_MODE,
                        e.C_BLOCK_COMMENT_MODE,
                        a,
                        t,
                    ],
                },
                s = {
                    className: "number",
                    variants: [
                        { begin: "\\b(0[bB][01]+)" },
                        { begin: "\\b(0[oO][0-7]+)" },
                        { begin: e.C_NUMBER_RE },
                    ],
                    relevance: 0,
                },
                i = {
                    className: "subst",
                    begin: "\\$\\{",
                    end: "\\}",
                    keywords: n,
                    contains: [],
                },
                o = {
                    begin: "html`",
                    end: "",
                    starts: {
                        end: "`",
                        returnEnd: !1,
                        contains: [e.BACKSLASH_ESCAPE, i],
                        subLanguage: "xml",
                    },
                },
                l = {
                    begin: "css`",
                    end: "",
                    starts: {
                        end: "`",
                        returnEnd: !1,
                        contains: [e.BACKSLASH_ESCAPE, i],
                        subLanguage: "css",
                    },
                },
                c = {
                    className: "string",
                    begin: "`",
                    end: "`",
                    contains: [e.BACKSLASH_ESCAPE, i],
                };
            return (
                (i.contains = [
                    e.APOS_STRING_MODE,
                    e.QUOTE_STRING_MODE,
                    o,
                    l,
                    c,
                    s,
                    e.REGEXP_MODE,
                ]),
                {
                    aliases: ["ts"],
                    keywords: n,
                    contains: [
                        { className: "meta", begin: /^\s*['"]use strict['"]/ },
                        e.APOS_STRING_MODE,
                        e.QUOTE_STRING_MODE,
                        o,
                        l,
                        c,
                        e.C_LINE_COMMENT_MODE,
                        e.C_BLOCK_COMMENT_MODE,
                        s,
                        {
                            begin:
                                "(" +
                                e.RE_STARTERS_RE +
                                "|\\b(case|return|throw)\\b)\\s*",
                            keywords: "return throw case",
                            contains: [
                                e.C_LINE_COMMENT_MODE,
                                e.C_BLOCK_COMMENT_MODE,
                                e.REGEXP_MODE,
                                {
                                    className: "function",
                                    begin:
                                        "(\\(.*?\\)|" + e.IDENT_RE + ")\\s*=>",
                                    returnBegin: !0,
                                    end: "\\s*=>",
                                    contains: [
                                        {
                                            className: "params",
                                            variants: [
                                                { begin: e.IDENT_RE },
                                                { begin: /\(\s*\)/ },
                                                {
                                                    begin: /\(/,
                                                    end: /\)/,
                                                    excludeBegin: !0,
                                                    excludeEnd: !0,
                                                    keywords: n,
                                                    contains: [
                                                        "self",
                                                        e.C_LINE_COMMENT_MODE,
                                                        e.C_BLOCK_COMMENT_MODE,
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                            relevance: 0,
                        },
                        {
                            className: "function",
                            begin: "function",
                            end: /[\{;]/,
                            excludeEnd: !0,
                            keywords: n,
                            contains: [
                                "self",
                                e.inherit(e.TITLE_MODE, {
                                    begin: "[A-Za-z$_][0-9A-Za-z$_]*",
                                }),
                                r,
                            ],
                            illegal: /%/,
                            relevance: 0,
                        },
                        {
                            beginKeywords: "constructor",
                            end: /\{/,
                            excludeEnd: !0,
                            contains: ["self", r],
                        },
                        {
                            begin: /module\./,
                            keywords: { built_in: "module" },
                            relevance: 0,
                        },
                        { beginKeywords: "module", end: /\{/, excludeEnd: !0 },
                        {
                            beginKeywords: "interface",
                            end: /\{/,
                            excludeEnd: !0,
                            keywords: "interface extends",
                        },
                        { begin: /\$[(.]/ },
                        { begin: "\\." + e.IDENT_RE, relevance: 0 },
                        a,
                        t,
                    ],
                }
            );
        };
    },
    function (e, n) {
        e.exports = function (e) {
            var n = { literal: "true false null" },
                a = [e.QUOTE_STRING_MODE, e.C_NUMBER_MODE],
                t = {
                    end: ",",
                    endsWithParent: !0,
                    excludeEnd: !0,
                    contains: a,
                    keywords: n,
                },
                r = {
                    begin: "{",
                    end: "}",
                    contains: [
                        {
                            className: "attr",
                            begin: /"/,
                            end: /"/,
                            contains: [e.BACKSLASH_ESCAPE],
                            illegal: "\\n",
                        },
                        e.inherit(t, { begin: /:/ }),
                    ],
                    illegal: "\\S",
                },
                s = {
                    begin: "\\[",
                    end: "\\]",
                    contains: [e.inherit(t)],
                    illegal: "\\S",
                };
            return (
                a.splice(a.length, 0, r, s),
                { contains: a, keywords: n, illegal: "\\S" }
            );
        };
    },
    function (e, n) {
        e.exports = function (e) {
            var n = {
                endsWithParent: !0,
                illegal: /</,
                relevance: 0,
                contains: [
                    {
                        className: "attr",
                        begin: "[A-Za-z0-9\\._:-]+",
                        relevance: 0,
                    },
                    {
                        begin: /=\s*/,
                        relevance: 0,
                        contains: [
                            {
                                className: "string",
                                endsParent: !0,
                                variants: [
                                    { begin: /"/, end: /"/ },
                                    { begin: /'/, end: /'/ },
                                    { begin: /[^\s"'=<>`]+/ },
                                ],
                            },
                        ],
                    },
                ],
            };
            return {
                aliases: [
                    "html",
                    "xhtml",
                    "rss",
                    "atom",
                    "xjb",
                    "xsd",
                    "xsl",
                    "plist",
                    "wsf",
                ],
                case_insensitive: !0,
                contains: [
                    {
                        className: "meta",
                        begin: "<!DOCTYPE",
                        end: ">",
                        relevance: 10,
                        contains: [{ begin: "\\[", end: "\\]" }],
                    },
                    e.COMMENT("\x3c!--", "--\x3e", { relevance: 10 }),
                    { begin: "<\\!\\[CDATA\\[", end: "\\]\\]>", relevance: 10 },
                    {
                        className: "meta",
                        begin: /<\?xml/,
                        end: /\?>/,
                        relevance: 10,
                    },
                    {
                        begin: /<\?(php)?/,
                        end: /\?>/,
                        subLanguage: "php",
                        contains: [
                            { begin: "/\\*", end: "\\*/", skip: !0 },
                            { begin: 'b"', end: '"', skip: !0 },
                            { begin: "b'", end: "'", skip: !0 },
                            e.inherit(e.APOS_STRING_MODE, {
                                illegal: null,
                                className: null,
                                contains: null,
                                skip: !0,
                            }),
                            e.inherit(e.QUOTE_STRING_MODE, {
                                illegal: null,
                                className: null,
                                contains: null,
                                skip: !0,
                            }),
                        ],
                    },
                    {
                        className: "tag",
                        begin: "<style(?=\\s|>|$)",
                        end: ">",
                        keywords: { name: "style" },
                        contains: [n],
                        starts: {
                            end: "</style>",
                            returnEnd: !0,
                            subLanguage: ["css", "xml"],
                        },
                    },
                    {
                        className: "tag",
                        begin: "<script(?=\\s|>|$)",
                        end: ">",
                        keywords: { name: "script" },
                        contains: [n],
                        starts: {
                            end: "</script>",
                            returnEnd: !0,
                            subLanguage: [
                                "actionscript",
                                "javascript",
                                "handlebars",
                                "xml",
                                "vbscript",
                            ],
                        },
                    },
                    {
                        className: "tag",
                        begin: "</?",
                        end: "/?>",
                        contains: [
                            {
                                className: "name",
                                begin: /[^\/><\s]+/,
                                relevance: 0,
                            },
                            n,
                        ],
                    },
                ],
            };
        };
    },
    function (e, n) {
        e.exports = function (e) {
            var n = {
                begin: /(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,
                returnBegin: !0,
                end: ";",
                endsWithParent: !0,
                contains: [
                    {
                        className: "attribute",
                        begin: /\S/,
                        end: ":",
                        excludeEnd: !0,
                        starts: {
                            endsWithParent: !0,
                            excludeEnd: !0,
                            contains: [
                                {
                                    begin: /[\w-]+\(/,
                                    returnBegin: !0,
                                    contains: [
                                        {
                                            className: "built_in",
                                            begin: /[\w-]+/,
                                        },
                                        {
                                            begin: /\(/,
                                            end: /\)/,
                                            contains: [
                                                e.APOS_STRING_MODE,
                                                e.QUOTE_STRING_MODE,
                                            ],
                                        },
                                    ],
                                },
                                e.CSS_NUMBER_MODE,
                                e.QUOTE_STRING_MODE,
                                e.APOS_STRING_MODE,
                                e.C_BLOCK_COMMENT_MODE,
                                { className: "number", begin: "#[0-9A-Fa-f]+" },
                                { className: "meta", begin: "!important" },
                            ],
                        },
                    },
                ],
            };
            return {
                case_insensitive: !0,
                illegal: /[=\/|'\$]/,
                contains: [
                    e.C_BLOCK_COMMENT_MODE,
                    { className: "selector-id", begin: /#[A-Za-z0-9_-]+/ },
                    { className: "selector-class", begin: /\.[A-Za-z0-9_-]+/ },
                    {
                        className: "selector-attr",
                        begin: /\[/,
                        end: /\]/,
                        illegal: "$",
                    },
                    {
                        className: "selector-pseudo",
                        begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/,
                    },
                    {
                        begin: "@(font-face|page)",
                        lexemes: "[a-z-]+",
                        keywords: "font-face page",
                    },
                    {
                        begin: "@",
                        end: "[{;]",
                        illegal: /:/,
                        contains: [
                            { className: "keyword", begin: /\w+/ },
                            {
                                begin: /\s/,
                                endsWithParent: !0,
                                excludeEnd: !0,
                                relevance: 0,
                                contains: [
                                    e.APOS_STRING_MODE,
                                    e.QUOTE_STRING_MODE,
                                    e.CSS_NUMBER_MODE,
                                ],
                            },
                        ],
                    },
                    {
                        className: "selector-tag",
                        begin: "[a-zA-Z-][a-zA-Z0-9_-]*",
                        relevance: 0,
                    },
                    {
                        begin: "{",
                        end: "}",
                        illegal: /\S/,
                        contains: [e.C_BLOCK_COMMENT_MODE, n],
                    },
                ],
            };
        };
    },
    function (e, n, a) {
        "use strict";
        a.r(n);
        var t = a(0),
            r = a.n(t),
            s = a(1),
            i = a.n(s),
            o = a(2),
            l = a.n(o),
            c = a(3),
            u = a.n(c),
            g = a(4),
            d = a.n(g),
            E = a(5),
            b = a.n(E),
            f = r.a;
        r.a.registerLanguage("javascript", i.a),
            r.a.registerLanguage("typescript", l.a),
            r.a.registerLanguage("json", u.a),
            r.a.registerLanguage("xml", d.a),
            r.a.registerLanguage("css", b.a);
        var _ = f;
        self.onmessage = function (e) {
            var n,
                a = e.data,
                t = ((n = a), m + _.highlightAuto(n).value + p);
            self.postMessage(t);
        };
        var m = '<pre><code class="language-javascript"> ',
            p = "</code></pre>";
    },
]);
