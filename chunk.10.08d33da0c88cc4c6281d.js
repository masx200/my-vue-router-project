(Function("return this")().webpackJsonp =
    Function("return this")().webpackJsonp || []).push([
    [10],
    {
        33: function (t, e, n) {
            "use strict";
            n.r(e);
            var s = n(5);
            Object(s.c)({
                globaltestname:
                    "helloworld-\u4f7f\u7528\u5168\u5c40\u72b6\u6001\u7ba1\u7406",
            });
            var a = {
                    methods: {
                        changevalue: function () {
                            this.testname =
                                Math.random() > 0.5
                                    ? this.testname + "te--"
                                    : "--st" + this.testname;
                        },
                    },
                    data: function () {
                        return {
                            testname:
                                "helloworld-test\u4f7f\u7528\u5168\u5c40\u72b6\u6001\u7ba1\u7406",
                        };
                    },
                },
                l = Object(s.a)({ globaltestname: "testname" }, a),
                o = n(19),
                r = Object(o.a)(
                    l,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", [
                            n("p", [
                                t._v("\n    testname:\n    "),
                                n("input", {
                                    directives: [
                                        {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.testname,
                                            expression: "testname",
                                        },
                                    ],
                                    staticClass: "form-control",
                                    domProps: { value: t.testname },
                                    on: {
                                        input: function (e) {
                                            e.target.composing ||
                                                (t.testname = e.target.value);
                                        },
                                    },
                                }),
                            ]),
                            t._v(" "),
                            n(
                                "button",
                                {
                                    staticClass:
                                        "btn btn-outline-success btn-lg",
                                    on: {
                                        click: function (e) {
                                            return t.changevalue();
                                        },
                                    },
                                },
                                [t._v("\u4fee\u6539testname")]
                            ),
                        ]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                ).exports,
                u = n(0);
            Object(s.c)({ globaltestnumber: 1e12 * Math.random() });
            var i = u.a.extend({
                    data: function () {
                        return { testnumber: "2241777582" };
                    },
                    methods: {
                        changevalue: function () {
                            this.testnumber =
                                this.testnumber + "" + 10 * Math.random();
                        },
                    },
                }),
                m = Object(s.a)({ globaltestnumber: "testnumber" }, i),
                c = {
                    mounted: function () {
                        document.title =
                            "\u9002\u7528\u4e8eVue\u7684\u6781\u7b80\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u5e93";
                    },
                    name: "vue-simple-global-state-store-manager",
                    components: {
                        bindglobalstoretestname: r,
                        bindglobalstoretestnumber: Object(o.a)(
                            m,
                            function () {
                                var t = this,
                                    e = t.$createElement,
                                    n = t._self._c || e;
                                return n("div", [
                                    n("p", [
                                        t._v("\n    testnumber:\n    "),
                                        n("input", {
                                            directives: [
                                                {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.testnumber,
                                                    expression: "testnumber",
                                                },
                                            ],
                                            staticClass: "form-control",
                                            domProps: { value: t.testnumber },
                                            on: {
                                                input: function (e) {
                                                    e.target.composing ||
                                                        (t.testnumber =
                                                            e.target.value);
                                                },
                                            },
                                        }),
                                    ]),
                                    t._v(" "),
                                    n(
                                        "button",
                                        {
                                            staticClass:
                                                "btn btn-outline-success btn-lg",
                                            on: {
                                                click: function (e) {
                                                    return t.changevalue();
                                                },
                                            },
                                        },
                                        [t._v("\u4fee\u6539testnumber")]
                                    ),
                                ]);
                            },
                            [],
                            !1,
                            null,
                            null,
                            null
                        ).exports,
                    },
                },
                b = u.a.extend(c),
                v = Object(o.a)(
                    b,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", [
                            t._m(0),
                            t._v(" "),
                            n("hr"),
                            t._v(" "),
                            n("div", { staticClass: "row" }, [
                                n(
                                    "div",
                                    {
                                        staticClass:
                                            "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12",
                                    },
                                    [
                                        n(
                                            "div",
                                            [
                                                n("h1", [t._v("test-hello-")]),
                                                t._v(" "),
                                                n("bindglobalstoretestname"),
                                                t._v(" "),
                                                n("bindglobalstoretestnumber"),
                                            ],
                                            1
                                        ),
                                    ]
                                ),
                                t._v(" "),
                                n(
                                    "div",
                                    {
                                        staticClass:
                                            "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12",
                                    },
                                    [
                                        n(
                                            "div",
                                            [
                                                n("h1", [t._v("test-world-")]),
                                                t._v(" "),
                                                n("bindglobalstoretestname"),
                                                t._v(" "),
                                                n("bindglobalstoretestnumber"),
                                            ],
                                            1
                                        ),
                                    ]
                                ),
                            ]),
                        ]);
                    },
                    [
                        function () {
                            var t = this.$createElement,
                                e = this._self._c || t;
                            return e("h2", [
                                e(
                                    "a",
                                    {
                                        attrs: {
                                            href:
                                                "https://github.com/masx200/vue-simple-global-state-store-manager",
                                        },
                                    },
                                    [
                                        this._v(
                                            "\u9002\u7528\u4e8eVue\u7684\u6781\u7b80\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u5e93"
                                        ),
                                    ]
                                ),
                                this._v(" "),
                                e("p", [
                                    e(
                                        "a",
                                        {
                                            attrs: {
                                                href:
                                                    "  https://github.com/masx200/vue-simple-global-state-store-manager",
                                            },
                                        },
                                        [
                                            this._v(
                                                "https://github.com/masx200/vue-simple-global-state-store-manager"
                                            ),
                                        ]
                                    ),
                                ]),
                            ]);
                        },
                    ],
                    !1,
                    null,
                    null,
                    null
                );
            e.default = v.exports;
        },
    },
]);
