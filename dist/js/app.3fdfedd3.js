(function () {
    "use strict";
    var t = {
        592: function (t, e, n) {
            var r = n(6848), o = n(9143), a = n.n(o), i = function () {
                    var t = this, e = t._self._c;
                    return e("div", {attrs: {id: "app"}}, [e("TextName")], 1)
                }, u = [], l = function () {
                    var t = this, e = t._self._c;
                    return e("div", {staticClass: "text"}, [e("div", [e("el-transfer", {
                        attrs: {data: t.source},
                        model: {
                            value: t.target, callback: function (e) {
                                t.target = e
                            }, expression: "target"
                        }
                    }), t.flag ? e("el-card", {staticClass: "box-card"}, [e("div", {
                        staticClass: "clearfix",
                        attrs: {slot: "header"},
                        slot: "header"
                    }, [e("span", [t._v("文本")])]), e("div", [t._v("🌟本周食谱播报员们上线啦，请大家根据当天食谱进行播报，可以利用绘画的方式帮助小朋友进行播报⭐")]), e("div", [t._v("上午 下午")]), t._l(t.days, (function (n, r) {
                        return e("div", {key: r}, [e("span", [t._v(t._s(n))]), t._v(" "), e("span", [t._v(t._s(t.target[2 * r]))]), t._v(" "), e("span", [t._v(t._s(t.target[2 * r + 1]))])])
                    })), e("div", [t._v("ps：大家好，我是今天的食谱播报员xxx，我来自小二班，今天是2024年x月x日星期x，今天的午餐\\晚餐是：xxxxx，我的播报完毕，祝大家用餐愉快，谢谢大家（大家也可以根据自己的发挥进行自由改编）")])], 2) : t._e(), e("el-button", {
                        attrs: {type: "primary"},
                        on: {click: t.generateText}
                    }, [t._v("生成")])], 1)])
                }, s = [], c = (n(4114), {
                    name: "TextName", data() {
                        return {
                            names: ["蔡依蓓", "杜晞瑜", "雷皓洋", "李文泰", "梁洛凡", "徐千雅", "左庭燎", "胡义林", "海楠", "刘言声", "谯楚新", "张惟源", "孙梦婉", "唐沚舟", "何睿希", "冯含章", "冯于初", "陈熙然", "令狐昊哲", "张康成", "吴雨梵", "杨昕妍", "陈德煊", "赵翊舟", "邓琰", "刘书萁", "苟尚锦", "肖圣译"],
                            source: [],
                            target: [],
                            text: null,
                            days: ["周一", "周二", "周三", "周四", "周五"],
                            flag: !1
                        }
                    }, created() {
                        this.getSource()
                    }, methods: {
                        getSource() {
                            this.names.forEach((t => {
                                this.source.push({key: t, lable: t})
                            }))
                        }, generateText() {
                            console.log(this.target), this.flag = !0
                        }
                    }
                }), f = c, d = n(1656), v = (0, d.A)(f, l, s, !1, null, null, null), p = v.exports,
                h = {name: "App", components: {TextName: p}}, x = h, g = (0, d.A)(x, i, u, !1, null, null, null),
                _ = g.exports;
            r["default"].use(a()), new r["default"]({render: t => t(_)}).$mount("#app")
        }
    }, e = {};

    function n(r) {
        var o = e[r];
        if (void 0 !== o) return o.exports;
        var a = e[r] = {id: r, loaded: !1, exports: {}};
        return t[r].call(a.exports, a, a.exports, n), a.loaded = !0, a.exports
    }

    n.m = t, function () {
        n.amdO = {}
    }(), function () {
        var t = [];
        n.O = function (e, r, o, a) {
            if (!r) {
                var i = 1 / 0;
                for (c = 0; c < t.length; c++) {
                    r = t[c][0], o = t[c][1], a = t[c][2];
                    for (var u = !0, l = 0; l < r.length; l++) (!1 & a || i >= a) && Object.keys(n.O).every((function (t) {
                        return n.O[t](r[l])
                    })) ? r.splice(l--, 1) : (u = !1, a < i && (i = a));
                    if (u) {
                        t.splice(c--, 1);
                        var s = o();
                        void 0 !== s && (e = s)
                    }
                }
                return e
            }
            a = a || 0;
            for (var c = t.length; c > 0 && t[c - 1][2] > a; c--) t[c] = t[c - 1];
            t[c] = [r, o, a]
        }
    }(), function () {
        n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t["default"]
            } : function () {
                return t
            };
            return n.d(e, {a: e}), e
        }
    }(), function () {
        n.d = function (t, e) {
            for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {enumerable: !0, get: e[r]})
        }
    }(), function () {
        n.g = function () {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" === typeof window) return window
            }
        }()
    }(), function () {
        n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
    }(), function () {
        n.r = function (t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }
    }(), function () {
        n.nmd = function (t) {
            return t.paths = [], t.children || (t.children = []), t
        }
    }(), function () {
        var t = {524: 0};
        n.O.j = function (e) {
            return 0 === t[e]
        };
        var e = function (e, r) {
            var o, a, i = r[0], u = r[1], l = r[2], s = 0;
            if (i.some((function (e) {
                return 0 !== t[e]
            }))) {
                for (o in u) n.o(u, o) && (n.m[o] = u[o]);
                if (l) var c = l(n)
            }
            for (e && e(r); s < i.length; s++) a = i[s], n.o(t, a) && t[a] && t[a][0](), t[a] = 0;
            return n.O(c)
        }, r = self["webpackChunktext"] = self["webpackChunktext"] || [];
        r.forEach(e.bind(null, 0)), r.push = e.bind(null, r.push.bind(r))
    }();
    var r = n.O(void 0, [504], (function () {
        return n(592)
    }));
    r = n.O(r)
})();
//# sourceMappingURL=app.3fdfedd3.js.map