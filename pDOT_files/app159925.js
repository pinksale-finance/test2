!function (e) {
    function t(t) {
        for (var a, r, o = t[0], l = t[1], p = t[2], d = 0, y = []; d < o.length; d++) r = o[d], Object.prototype.hasOwnProperty.call(i, r) && i[r] && y.push(i[r][0]), i[r] = 0;
        for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        for (u && u(t); y.length;) y.shift()();
        return s.push.apply(s, p || []), n()
    }

    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], a = !0, o = 1; o < n.length; o++) {
                var l = n[o];
                0 !== i[l] && (a = !1)
            }
            a && (s.splice(t--, 1), e = r(r.s = n[0]))
        }
        return e
    }

    var a = {}, i = {app: 0}, s = [];

    function r(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }

    r.e = function (e) {
        var t = [], n = i[e];
        if (0 !== n) if (n) t.push(n[2]); else {
            var a = new Promise((function (t, a) {
                n = i[e] = [t, a]
            }));
            t.push(n[2] = a);
            var s, o = document.createElement("script");
            o.charset = "utf-8", o.timeout = 120, r.nc && o.setAttribute("nonce", r.nc), o.src = function (e) {
                return r.p + "js/" + ({}[e] || e) + "159925.js"
            }(e);
            var l = new Error;
            s = function (t) {
                o.onerror = o.onload = null, clearTimeout(p);
                var n = i[e];
                if (0 !== n) {
                    if (n) {
                        var a = t && ("load" === t.type ? "missing" : t.type), s = t && t.target && t.target.src;
                        l.message = "Loading chunk " + e + " failed.\n(" + a + ": " + s + ")", l.name = "ChunkLoadError", l.type = a, l.request = s, n[1](l)
                    }
                    i[e] = void 0
                }
            };
            var p = setTimeout((function () {
                s({type: "timeout", target: o})
            }), 12e4);
            o.onerror = o.onload = s, document.head.appendChild(o)
        }
        return Promise.all(t)
    }, r.m = e, r.c = a, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) r.d(n, a, function (t) {
            return e[t]
        }.bind(null, a));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r.oe = function (e) {
        throw e
    };
    var o = window.webpackJsonp = window.webpackJsonp || [], l = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var p = 0; p < o.length; p++) t(o[p]);
    var u = l;
    s.push([0, "chunk-vendors"]), n()
}({
    0: function (e, t, n) {
        e.exports = n("56d7")
    }, "0265": function (e, t, n) {
        var a = n("3cc5");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("3cf1dffb", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, "043a": function (e, t, n) {
        var a = n("264b");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("e49076d8", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, "0554": function (e, t, n) {
        var a = n("96a4");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("17611838", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, "0aaa": function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ComptrollerInterface","name":"comptroller_","type":"address"},{"internalType":"contract InterestRateModel","name":"interestRateModel_","type":"address"},{"internalType":"uint256","name":"initialExchangeRateMantissa_","type":"uint256"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address payable","name":"admin_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"cashPrior","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"interestAccumulated","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"borrowAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"error","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"info","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"detail","type":"uint256"}],"name":"Failure","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"liquidator","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"cTokenCollateral","type":"address"},{"indexed":false,"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"LiquidateBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract ComptrollerInterface","name":"oldComptroller","type":"address"},{"indexed":false,"internalType":"contract ComptrollerInterface","name":"newComptroller","type":"address"}],"name":"NewComptroller","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract InterestRateModel","name":"oldInterestRateModel","type":"address"},{"indexed":false,"internalType":"contract InterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"NewMarketInterestRateModel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldReserveFactorMantissa","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"NewReserveFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"redeemer","type":"address"},{"indexed":false,"internalType":"uint256","name":"redeemAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"RepayBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"benefactor","type":"address"},{"indexed":false,"internalType":"uint256","name":"addAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"uint256","name":"reduceAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesReduced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reduceAmount","type":"uint256"}],"name":"_reduceReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract ComptrollerInterface","name":"newComptroller","type":"address"}],"name":"_setComptroller","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract InterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"_setInterestRateModel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"_setReserveFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"accrualBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"comptroller","outputs":[{"internalType":"contract ComptrollerInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRateStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountSnapshot","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCash","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract ComptrollerInterface","name":"comptroller_","type":"address"},{"internalType":"contract InterestRateModel","name":"interestRateModel_","type":"address"},{"internalType":"uint256","name":"initialExchangeRateMantissa_","type":"uint256"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"interestRateModel","outputs":[{"internalType":"contract InterestRateModel","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"contract CToken","name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"mint","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"repayBorrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"}],"name":"repayBorrowBehalf","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"reserveFactorMantissa","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"seize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"supplyRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"totalBorrowsCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
    }, 1: function (e, t) {
    }, 10: function (e, t) {
    }, "10b8": function (e, t, n) {
        var a = n("739f");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("120ff1a8", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, "10d9": function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".lang_wraper[data-v-23f54180]{z-index:10000;position:absolute;text-align:left;width:100%;top:110%;left:0;border-radius:5px;transform-origin:center top;color:var(--black);background-color:var(--white);cursor:pointer;overflow-y:auto;height:0;transition:height .2s linear}.fix_lang[data-v-23f54180]{position:absolute;top:0}.select_lang_up[data-v-23f54180]{position:absolute;bottom:100%;left:0;width:100%;text-align:left;border-radius:.5rem;transform-origin:center top;color:var(--black);background-color:var(--white);cursor:pointer;max-width:130px;overflow-y:auto;height:0;transition:height .2s linear}.lang_wraper_effect[data-v-23f54180]{height:160px;box-shadow:0 0 1px 1px var(--light-grey)}li[data-v-23f54180]{font-weight:600}li[data-v-23f54180]:hover{font-weight:700;color:var(--grey)}.lang_wraper[data-v-23f54180]::-webkit-scrollbar,.select_lang_up[data-v-23f54180]::-webkit-scrollbar{width:0;height:0;margin:0 auto}.lang_wraper[data-v-23f54180]::-webkit-scrollbar-thumb,.lang_wraper[data-v-23f54180]::-webkit-scrollbar-track,.select_lang_up[data-v-23f54180]::-webkit-scrollbar-thumb,.select_lang_up[data-v-23f54180]::-webkit-scrollbar-track{background-color:var(--grey-dark);box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.lang_wraper[data-v-23f54180]::-webkit-scrollbar-button,.select_lang_up[data-v-23f54180]::-webkit-scrollbar-button{height:0;background-color:var(--grey-dark)}.lang_wraper[data-v-23f54180]::-o-scrollbar,.select_lang_up[data-v-23f54180]::-o-scrollbar{width:0;height:0;margin:0 auto}.lang_wraper[data-v-23f54180]::-o-scrollbar-thumb,.select_lang_up[data-v-23f54180]::-o-scrollbar-thumb{background-color:#1b5485;box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.lang_wraper[data-v-23f54180]::-o-scrollbar-track,.select_lang_up[data-v-23f54180]::-o-scrollbar-track{box-shadow:inset 0 0 5px rgba(0,0,0,.2);background-color:var(--grey-dark)}.lang_wraper[data-v-23f54180]::-o-scrollbar-button,.select_lang_up[data-v-23f54180]::-o-scrollbar-button{height:0;background-color:var(--grey-dark)}.lang_wraper[data-v-23f54180]::-moz-scrollbar,.select_lang_up[data-v-23f54180]::-moz-scrollbar{width:0;height:0;margin:0 auto}.lang_wraper[data-v-23f54180]::-moz-scrollbar-thumb,.select_lang_up[data-v-23f54180]::-moz-scrollbar-thumb{background-color:#1b5485;box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.lang_wraper[data-v-23f54180]::-moz-scrollbar-track,.select_lang_up[data-v-23f54180]::-moz-scrollbar-track{box-shadow:inset 0 0 5px rgba(0,0,0,.2);background-color:var(--grey-dark)}.lang_wraper[data-v-23f54180]::-moz-scrollbar-button,.select_lang_up[data-v-23f54180]::-moz-scrollbar-button{height:0;background-color:var(--grey-dark)}.lang_wraper[data-v-23f54180]::-ms-scrollbar,.select_lang_up[data-v-23f54180]::-ms-scrollbar{width:0;height:0;margin:0 auto;border-radius:10px}.lang_wraper[data-v-23f54180]::-ms-scrollbar-thumb,.select_lang_up[data-v-23f54180]::-ms-scrollbar-thumb{background-color:#1b5485;box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.lang_wraper[data-v-23f54180]::-ms-scrollbar-track,.select_lang_up[data-v-23f54180]::-ms-scrollbar-track{box-shadow:inset 0 0 5px rgba(0,0,0,.2);background-color:var(--grey-dark)}.lang_wraper[data-v-23f54180]::-ms-scrollbar-button,.select_lang_up[data-v-23f54180]::-ms-scrollbar-button{height:0;background-color:var(--grey-dark)}", ""]), e.exports = t
    }, 11: function (e, t) {
    }, 12: function (e, t) {
    }, "12cb": function (e, t, n) {
        "use strict";
        var a = n("2b0e"), i = n("a925");
        a.default.use(i.a), t.a = new i.a({
            locale: sessionStorage.locale || "English", messages: {
                English: {
                    $P: "$P",
                    welcomeV2: "Yield Farming 2.0",
                    welcomeText: "Lowering risk through diversified farming strategies",
                    launchApp: "Claim & Swap",
                    whitePaper: "White Paper",
                    audit: "Audit by Dpanquan.com",
                    copyright: "2021 Copyright $P.",
                    reserved: "All rights reserved!",
                    dashboard: "Dashboard",
                    vaults: "Vaults",
                    earn: "Earn",
                    lending: "Lending",
                    statistics: "Statistics",
                    governance: "Governance",
                    wiki: "Wiki",
                    faqs: "FAQs",
                    settings: "Settings",
                    nft: "NFT",
                    brige: "Bridge",
                    connectWallet: "Connect wallet",
                    disconnect: "Disconnect wallet",
                    search: "Search...",
                    earnings: "Your Earnings",
                    pendingHarvest: "Pending harvest",
                    harvest: "Harvest",
                    tvlText: "Total Value Locked",
                    browserview: "Browser view",
                    availableVaults: "Available Vaults",
                    sortBy: "Sort by",
                    hideBalances: "Hide zero balances",
                    pairAssets: "Pair Asset",
                    get: "Get",
                    back: "Back",
                    totalSupply: "Total supply",
                    rewards: "Rewards",
                    yfoPrice: "$P current price",
                    totalBorrowed: "Total borrowed",
                    circulation: "Circulation",
                    marketCap: "Market cap",
                    provideLiquidity: "Provide Liquidity",
                    select: "Select",
                    collateral: "Collateral",
                    pledge: "Pledge",
                    exitPledge: "Exit pledge",
                    redeem: "Redeem All",
                    retrieve: "Retrieve",
                    repay: "Repay",
                    repayAll: "RepayAll",
                    supply: "Supply",
                    balance: "Balance",
                    borrow: "Borrow",
                    limit: "Limit",
                    trading: "Trading",
                    approve: "Approve",
                    claim: "Claim",
                    unable: "Unable",
                    withdraw: "Withdraw",
                    withdrawAll: "Withdraw All",
                    exit: "Exit",
                    stake: "Stake",
                    deposit: "Deposit",
                    depositAll: "Deposit All",
                    deposited: "Deposited",
                    borrowed: "Borrowed",
                    available: "Available",
                    approveFirst: "Please approve before deposit",
                    loading: "Loading...",
                    netTip: "Ethereum mainnet, please switch in your wallet",
                    netDelayTip: "Ethereum mainnet is not yet open",
                    feeTip: "Withdrawal will charge a 0.3% handling fee of the profit, no damage to the principal",
                    note: "Note",
                    assets: "Assets",
                    apyCalculations: "APY Calculations",
                    farmApr: "Farm APR",
                    lpContract: "LP contract",
                    farmContract: "Farm contract",
                    vaultContract: "Vault contract",
                    myAddress: "My address",
                    totalDepositIn: "Total deposited",
                    currentEarning: "Currently earning",
                    all: "All",
                    stablecoins: "Stablecoins",
                    others: "Others",
                    market: "Market",
                    depositMarket: "Deposit Market",
                    depositApy: "Deposit APY",
                    borrowMarket: "Borrow Market",
                    borrowApy: "Borrow APY",
                    leftBorrow: "Remaining loanable",
                    borrowAvailiable: "Borrow availiable",
                    priceSource: "Price source",
                    yourDeposit: "Your deposit",
                    yourLoan: "Your loan",
                    usedRatio: "Used ratio",
                    enterSupplyAmount: "Enter the deposit amount",
                    enterRedeemAmount: "Enter the amount (principal)",
                    enterRepayAmount: "Enter the repayment amount (principal)",
                    enterBorrowAmount: "Enter the loan amount(max 80%)",
                    poolVolume: "Pool Balance",
                    marketDetails: "Market details",
                    depositAmount: "Deposit amount",
                    borrowAmount: "Borrow amount",
                    depositLimit: "Deposit limit",
                    borrowLimit: "Borrow limit",
                    reserveRatio: "Reserve ratio",
                    exchangeRate: "Exchange rate",
                    liquidationFine: "Liquidation fine",
                    maxPledgeRate: "Maximum pledge rate",
                    fundUtilization: "Fund utilization",
                    marketLoanable: "Market surplus loanable",
                    totalBorrow: "Total borrow",
                    totalDeposit: "Total deposit",
                    operation: "Operation",
                    staked: "Staked",
                    transaction: "Transaction",
                    pending: "Pending...",
                    confirm: "Confirm",
                    confirming: "Confirming",
                    confirmed: "Confirmed",
                    cancel: "Cancel",
                    canceled: "Canceled",
                    success: "Transaction succeeded",
                    failed: "Transaction failed",
                    txFailed: "Trasancton Failed",
                    copied: "Copied",
                    computePower: "Real-time computing power and Token data parameters",
                    aboutWiki: "YFO Information Introduction",
                    aboutDex: "The $P vision is to build several decentralized financial applications (Defi - Apps) and then develop these products into full fledged projects thereby  increasing the value of The $P ecosystem. With the uproar of several decentralized financial (Defi) products not having real use cases and simple methods of use, product usage has been difficult for Defi users especially because it requires vast understanding of the Ethereum blockchain. Another common problem is the false value which many Defi projects propose by building simple swap websites and then halting further development. This makes it seem as though the Defi swap is all there is to offer but this is not so. The $P project and its decentralized team from different countries, promises to create a sustainable ecosystem by developing and building several Defi products around its platform and guarantees the ultimate true value of what a Defi project should be. $P is a community-driven blockchain project which aims to build severally Defi-applications on top of its platform with creative and disruptive blockchain Defi ideas, hence becoming the first cutting-edge Defi project worth emulating.\n  ",
                    aboutApp: "The $P envisions an ecosystem of several Defi applications (Defi DApps) built on Ethereum for usage by both The $P team of The $P project and the decentralized community of $P product users. With that said, $P Finance is a community driven Defi-project, orchestrated to build decentralized products, with the aim of producing real Defi values to improve The $P ecosystem for the community and its users.",
                    aboutBasis: "$P is dedicated to systematically produce new Defi products with the team acting as an ad-hoc enabled squad who will help develop, market and launch these Defi products to help grow its biosphere while simultaneously delivering desirable gains to the community, project and users.",
                    aboutMechanism: "$P can also be described as a decentralized venture capital (DVC) which empowers a decentralized interest free financial ecosystem by building Defi products invested in by its community with the aim of distributing revenue as profit shares (rewards) to stakeholders.",
                    aboutCommunity: "The $P Ecosystem will be a home to a variety of unique decentralized finance products. The $P products will be linked to its token, the YFONE Token, in the quest to re-create the true meaning of decentralized finance.",
                    aboutDefi: "$P products will be linked to its token, the YFONE Token, in the quest to re-create the true meaning of decentralized finance.\nThe YFONE tokenвЂ™s major use case will be as the only governance token for each product which will give holders a claim over the revenue generated by those products.\nIt will be a platform for staking YFONE tokens while The $P team builds the marketplace and subsequently, the holders benefit immensely just from holding the token. Imagine more than 1000 decentralized applications linked to one ecosystem by forking with partners and by Building from scratch itвЂ™s all integrated with YFO Token. This ecosystem will be extremely large and continually grow It is a completely decentralized system, and it is constantly growing, that is the true meaning of Defi.\n  ",
                    aboutVaults: "The machine gun pool determines the most profitable coin based on the hash rate, mining difficulty, and the current price of the trading platform. It is different from ordinary mining pools that can only mine one coin. After one coin has been mined for a long time, the difficulty will increase, and the mining pool will switch to another coin. The YFO platform will add mining pools in real time according to the mining pools that appear in the market, so as to obtain the highest profit. And it is mainly through the automatic function of the contract to reinvest every half hour to obtain the highest profit.",
                    aboutLending: "In the DeFi world, the decentralized lending system is an extremely important track and the cornerstone system of the entire DeFi system. It can simulate the financial system in the real world, understand the financial needs of different users, and provide users with mutual financing. The platform; it can support the lending of all encrypted assets that meet the homogenization token standard without marginal cost, and can automatically calculate and adjust the marketвЂ™s lending rate according to market supply and demand. Therefore, the YFO ecosystem is also doing important functions in the V2 version. The platform self-care tokens in lending are the current YFO and OBS.",
                    aboutText: "The $P vision is to build several decentralized financial applications (Defi - Apps) and then develop these products into full fledged projects thereby increasing the value of The $P ecosystem. With the uproar of several decentralized financial (Defi) products not having real use cases and simple methods of use, product usage has been difficult for Defi users especially because it requires vast understanding of the Ethereum blockchain. Another common problem is the false value which many Defi projects propose by building simple swap websites and then halting further development. This makes it seem as though the Defi swap is all there is to offer but this is not so. The $P project and its decentralized team from different countries, promises to create a sustainable ecosystem by developing and building several Defi products around its platform and guarantees the ultimate true value of what a Defi project should be. $P is a community-driven blockchain project which aims to build severally Defi-applications on top of its platform with creative and disruptive blockchain Defi ideas, hence becoming the first cutting-edge Defi project worth emulating",
                    aboutECO: "The $P envisions an ecosystem of several Defi applications (Defi DApps) built on Ethereum for usage by both The $P team of The $P project and the decentralized community of $P product users. With that said, $P Finance is a community driven Defi-project, orchestrated to build decentralized products, with the aim of producing real Defi values to improve The $P ecosystem for the community and its users. $P is dedicated to systematically produce new Defi products with the team acting as an ad-hoc enabled squad who will help develop, market and launch these Defi products to help grow its biosphere while simultaneously delivering desirable gains to the community, project and users. $P can also be described as a decentralized venture capital (DVC) which empowers a decentralized interest free financial ecosystem by building Defi product",
                    overview: "Overview",
                    w1: "What are Vaults? ",
                    w2: "YFO decentralized lending? ",
                    w3: "What kind of skills do I need to join your team to contribute to this great project? ",
                    w4: "What type of cryptocurrency does $P currently accept? ",
                    w5: "How can I invest in $P and make a profit? ",
                    w6: "Why the V2 version can only use the Binance ecological chain? ",
                    w7: "What does $P stand for? ",
                    r1: 'Machine gun pool is the process of mining different currencies with the same algorithm, according to the level of real-time mining revenue, automatically switching the computing power to a higher-profit currency for mining, and its value is created for users Higher returns than single currency mining. The reason why it has the name of "machine gun pool" is that this kind of operation is like firing a machine gun, constantly switching. ',
                    r11: "According to the characteristics of the machine gun pool, the operation of the machine gun pool is to concentrate the computing power in a mining pool. It does not specify which coin to mine, but directly searches for several projects in the same mining algorithm. Which project the computing power is switched to for mining, if the income of this project drops, it will be switched to another project to obtain the best income in the end. ",
                    r12: "The advantage of the machine gun pool maximizes the user's income: income is the focus of every investor's attention. The reason why most people choose to invest in DeFi projects is that their yields are relatively high, and the DeFi machine gun pool can help us maximize the mining revenue. This is because the characteristic of the DeFi machine gun pool is to switch funds to higher-yield DeFi projects for liquid mining based on the level of real-time mining income, providing our investors with higher mining income.",
                    r13: "The DeFi machine gun pool of the YFO platform can not only increase our income through real-time switching, but also introduce a half-hour compound interest rule to effectively use funds to maximize our income. (Hourly compound interest is calculated at half an hour. Our investment principal and interest for every half hour will be included in the investment principal of the next hour, and we can enjoy the compound interest every half hour.)",
                    r14: "Selected projects: There are a dazzling array of liquid mining projects available in the market, and the most difficult part for our users is to choose the project. It takes a lot of time and energy to choose a safe, reliable, and highly profitable project. In addition, due to the rapid changes in the market, it is easy to happen that when we have studied a new project and are ready to start, the funds have been transferred to the next new project with higher returns, which will cause a certain lag. ",
                    r15: "The advantage of the machine gun pool is that it can provide a function of asset screening and configuration. Each project will evaluate its safety and benefits to a certain extent. The YFO platform has professionals to conduct research on various projects, select high-yield DeFi projects, and adjust positions in real time to strive for the maximum profit possible for us. ",
                    r16: "Because of the constant calling of the contract, the platform will charge a fee of 0.3% of the revenue. The purpose is that each step in the DeFi mining requires 1-2 contract calls, and the fee is now a few dollars to dozens The dollar varies, and the entire contract is called once every half an hour. In addition to the GAS fee, the balance will be used to repurchase YFO and OBS Token from time to time. ",
                    r2: "By providing deposit certificate tokens, the same asset is shuttled and reused in different DeFi protocols, thereby improving the efficiency of the use of funds in the financial market several times; it can also be flexible with other DeFi protocols Combination to realize the automated operation of multi-layer, multi-level, complex, and nested financial transactions. ",
                    r21: "At present, all kinds of lending platforms in DeFi are basically in the mode of mortgage loans, and they are more inclined to the pawnshop model, turning various digital currencies into fixed-value goods, and goods with a mortgage value of 100 get a price of 75 Liquid currency, the act of obtaining currency through currency collateral seems very stupid, but the high mortgage interest rate and the huge return rate in the early stage of the DeFi market attract higher market funds. ",
                    r22: "DeFi currently resolves mortgages through swap and exchanges, and resolves leverage through the margin system, and finally achieves an operation similar to credit derivatives. Take Bitcoin and Ethereum as examples, on the Binance Chain. For example, if you want to pledge Bitcoin in exchange for Ethereum, you can: Lock Bitcoin in a specific address. At this time, a BTC representing this Bitcoin token will be generated on Binance Chain, and then you can use it on Binance Chain The smart contract mortgages this BTC and generates the corresponding Token; then buys a certain amount of ETH with the Token, and then releases the collateral BTC corresponding to these ETH, and the transaction ends. The whole process is done by smart contracts without human participation. And if you donвЂ™t pay it back after maturity, then your collateralized Bitcoin will be gone. The smart contract will be executed when it expires, and the bitcoin that I have pledged will be subject to default processing. This can achieve equal mortgages, but the charm of Defi lies in growth, so over-mortgage is required. In other words, I hope to be able to mortgage 1 Bitcoin, temporarily borrow 2 or even 10 Bitcoins for speculation. ",
                    r3: "$P is a global team, everyone can join The $P community, in the community we hope more\n  People join The $P family. When you hold a YFO Token, even if you join our team, of course\n  We need more people to join, so we can serve as community operators, marketing personnel, technical feedback personnel, etc.\n  Role, if you have a certain ability, please contact our community manager. ",
                    r4: "Currently accepting mainstream currencies ETH, BNB, USDT, etc. and YFO, OBS Tokens",
                    r5: "The platform provides machine gun pools (vaults), lending, single currency pools and other methods, requiring users to follow the Token required on the website by themselves\n  Kind will get a certain profit. ",
                    r6: "The machine gun pool is reinvested every 30 minutes, and the gas fee is too high. If the pledge deposit is not enough, the user's funds will be lost. Therefore, we only launched the BSC ecological chain in the first phase. The Ethereum version requires the BSC version of the YFO-V2 version of the TVL version to be greater than 5 million U.S. dollars before the Ethereum version will be opened. When the reinvestment at a fixed time, when the amount reaches a certain amount, the user can be guaranteed to be on the platform The amount of reinvestment will get the most profit. Therefore, in the first phase, we only open the product area of the Binance ecological chain (of course, it has been developed and is always waiting for updates. The code of Ethereum has been updated on Github).",
                    r7: "$PвЂ™s vision is to build several decentralized financial applications (Defi-Apps) and then develop and transform these products into\n  Mature projects increase the value of The $P ecosystem. . The $P project and its decentralized team come from different\n  Countries, committed to creating a sustainable Defi ecosystem product through the development and construction of multiple\n  And guarantee the ultimate true value of what the Defi project should be. $P is a community-driven blockchain project designed to\n  Build multiple Defi applications on the basis of the creative and disruptive blockchain Defi platform idea, thus becoming\n  It is the first frontier Defi project. ",
                    countactUs: "Countact us",
                    cTitle: "$P Group is a leading company in the digital economy. Committed to the core technology breakthroughs in the blockchain field and the integration of blockchain technology and industry, focusing on the upstream and downstream of the blockchain DEFI industry, development includes industrial blockchain, digital asset transactions, digital asset secure wallets, digital economic research, and decentralization Huahua and other businesses form a global digital economy industrial ecosystem.\n\n$P adheres to the practice of decentralized community services, providing safe and reliable value network services for tens of millions of users in hundreds of countries and regions.",
                    officialListing: "Official Listing",
                    myWallet: "My wallet",
                    security: "Security",
                    securityPolicy: "Security Policy",
                    policy1: "View how to securely report security vulnerabilities for this repository",
                    securityAdvisories: "Security advisories",
                    policy2: "View security advisories for this repository",
                    scope: "Scope",
                    policy3: "The scope of the Bug Bounty program spans smart contracts\n  utilized in the YFO ecosystem вЂ“ the Solidity or\n  smart contracts in the contracts folder of the\n  master branch of the YFO-protocol repo, including\n  historical deployments that still see active use on\n  Ethereum Mainnet associated with YFI, and excluding any\n  contracts used in a test-only capacity (including\n  test-only deployments).",
                    policy4: "Note: Other contracts, outside of the ones mentioned\n  above, might be considered on a case by case basis,\n  please, reach out to the YFO development team for\n  clarification.",
                    stepVerification: "2-Step Verification",
                    authentication: "Enable 2-factor authentication via Google Authenticator, Authy or any 2FA App Scan QR code or enter authenticator key",
                    authenticaorKey: "Authenticaor Key",
                    generate: "GENERATE",
                    buy: "Buy",
                    indicator: "indicator",
                    tvl: "TVL",
                    apy: "APY",
                    unlocked: "Unlocked",
                    lock: "Lock for",
                    days: "Days",
                    more: "More",
                    daily: "Daily Yield",
                    monthly: "Month Yield",
                    yearly: "Yearly Yield",
                    shareV3: "Sahre V3 link",
                    validNumber: "Invalid Number",
                    insufficient: "Insufficient Balance",
                    stakeAmount: "Staked Amount",
                    max: "Max",
                    swap: "Swap",
                    price: "Price",
                    legalDisclaimer: "Legal Disclaimer",
                    legalText: 'The information provided in this material does not constitute investment advice, financial advice, trading advice, or any other sort of advice. You should not treat any of the materialвЂ™s content as such. This material is for informational purposes only and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy, (ii) intended to provide accounting, legal, or tax advice, or investment recommendations, or (iii) an official statement of YFO Token. No representation or warranty is made, expressed or implied, with respect to the accuracy or completeness of the information or to the future performance of any digital asset, financial instrument, or other market or economic measure. \n  \nThe YFO Token team does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your due diligence and consult your financial advisor before making any investment decisions. \n  \nBy purchasing YFO, you agree that you are not purchasing a security or investment, and you agree to hold the team harmless and not liable for any losses or taxes you may incur. You also agree that the team is presenting the token "as is" and is not required to provide any support or services. You should have no expectation of any form from YFO Token and its team. \n  \nAlthough YFO is a community-driven decentralized finance (DeFi) token for social networking and not a registered digital currency, the team strongly recommends that citizens in areas with government bans on cryptocurrencies do not purchase it because the team cannot ensure compliance with established regulations within certain territories. Always make sure that you comply with your local laws and regulations before you make any purchase.\n  \nThe $P team are decentralized individuals from different parts of the world building decentralized applications that can benefit the world and also improve its ecosystem.\n  \nWith so many Direct messages from individuals, companies and able bodies asking The $P Team on what to invest on and on what they shouldn\'t invest on, we are open and transparent and advice our community on the high risk of Defi assets  but the YFO projects will build quality platform.\n  \nDue to More people asking about financial advices from the team, the YFO team does not provide financial guidance or advice to any individual, and by investing in DeFi asset you can risk losing your investments. \n  \nAlways do your own research when investing.'
                }, "дё­ж–‡": {
                    yfione: "$P",
                    welcomeV2: "YFOе†њењє 2.0",
                    welcomeText: "дЅЋйЈЋй™©гЂЃе¤љж ·еЊ–зљ„жЊ–зџїз­–з•Ґ",
                    launchApp: "Claim & Swap",
                    whitePaper: "з™Ѕзљ®д№¦",
                    audit: "Dpanquan.com е®Ўи®Ў",
                    copyright: "2021 з‰€жќѓж‰Ђжњ‰ $P.",
                    reserved: "дїќз•™з‰€жќѓпјЃ",
                    dashboard: "йќўжќї",
                    vaults: "жњєжћЄж± ",
                    earn: "жЊ–зџї",
                    lending: "еЂџиґ·",
                    statistics: "з»џи®Ў",
                    governance: "жІ»зђ†",
                    wiki: "з»ґеџє",
                    faqs: "еёёи§Ѓй—®йў",
                    settings: "и®ѕзЅ®",
                    connectWallet: "иїћжЋҐй’±еЊ…",
                    disconnect: "ж–­ејЂиїћжЋҐ",
                    search: "жђњзґў...",
                    earnings: "дЅ зљ„ж”¶з›Љ",
                    pendingHarvest: "еѕ…иЋ·еЏ–ж”¶з›Љ",
                    harvest: "ж”¶е‰І",
                    tvlText: "жЂ»й”Ѓд»“",
                    yfoPrice: "еЅ“е‰ЌYFOд»·ж ј",
                    totalBorrowed: "жЂ»еЂџж¬ѕ",
                    circulation: "жµЃйЂљй‡Џ",
                    marketCap: "её‚еЂј",
                    provideLiquidity: "жЏђдѕ›жµЃеЉЁжЂ§",
                    browserview: "жџҐзњ‹",
                    availableVaults: "еЏЇз”ЁжњєжћЄж± ",
                    sortBy: "жЋ’еєЏ",
                    hideBalances: "йљђи—Џ0дЅ™йўќйЎ№",
                    pairAssets: "дє¤ж“еЇ№",
                    get: "иЋ·еЏ–",
                    back: "иї”е›ћ",
                    select: "йЂ‰ж‹©",
                    collateral: "жЉµжЉјз‰©",
                    pledge: "жЉµжЉј",
                    exitPledge: "йЂЂе‡єжЉµжЉј",
                    redeem: "иµЋе›ћ(жњ¬й‡‘+е€©жЃЇ)",
                    retrieve: "еЏ–е›ћжњ¬й‡‘",
                    repay: "еЃїиї",
                    repayAll: "еЃїиїе…ЁйѓЁ",
                    supply: "е­ж¬ѕ",
                    borrow: "еЂџж¬ѕ",
                    limit: "й™ђе€¶",
                    balance: "дЅ™йўќ",
                    rewards: "еҐ–еЉ±",
                    totalSupply: "жЂ»дѕ›еє”жЂ»й‡Џ",
                    trading: "дє¤ж“",
                    approve: "жЋ€жќѓ",
                    claim: "жЏђеЏ–еҐ–еЉ±",
                    unable: "е·ІеЃњж­ў",
                    exit: "йЂЂе‡є",
                    withdraw: "жЏђзЋ°",
                    withdrawAll: "жЏђзЋ°е…ЁйѓЁ",
                    stake: "иґЁжЉј",
                    deposit: "е­е…Ґ",
                    depositAll: "е­е…Ґе…ЁйѓЁ",
                    deposited: "е·Іе­е…Ґ",
                    borrowed: "е·ІеЂџж¬ѕ",
                    available: "еЏЇз”Ё",
                    approveFirst: "жЏђз¤єпјље­е…Ґд№‹е‰ЌиЇ·е…€жЋ€жќѓ",
                    loading: "еЉ иЅЅдё­...",
                    netTip: "д»Ґе¤ЄеќЉдё»зЅ‘иЇ·е€°дЅ зљ„й’±еЊ…дё­е€‡жЌў",
                    netDelayTip: "д»Ґе¤ЄеќЉдё»зЅ‘жљ‚жњЄејЂж”ѕ",
                    feeTip: "жЏђзЋ°е°†ж”¶еЏ–е€©ж¶¦зљ„ 0.3%ж‰‹з»­иґ№з”ЁпјЊеЇ№жњ¬й‡‘ж— жЌџдј¤",
                    note: "жЏђз¤є",
                    assets: "иµ„дє§",
                    apyCalculations: "е№ґе€©зЋ‡и®Ўз®—",
                    farmApr: "е†њиЂ•ж”¶з›ЉзЋ‡",
                    lpContract: "LP еђ€зє¦",
                    all: "е…ЁйѓЁ",
                    stablecoins: "зЁіе®љеёЃ",
                    others: "е…¶д»–",
                    market: "её‚ењє",
                    depositMarket: "е­ж¬ѕеё‚ењє",
                    depositApy: "е­ж¬ѕе№ґе€©зЋ‡",
                    borrowMarket: "еЂџж¬ѕеё‚ењє",
                    leftBorrow: "е‰©дЅ™еЏЇеЂџй‡Џ",
                    borrowApy: "еЂџж¬ѕе№ґе€©зЋ‡",
                    borrowAvailiable: "е‰©дЅ™еЏЇеЂџ",
                    priceSource: "д»·ж јжќҐжєђ",
                    yourDeposit: "ж‚Ёзљ„е­ж¬ѕ",
                    yourLoan: "ж‚Ёзљ„еЂџж¬ѕ",
                    usedRatio: "е·Із”ЁжЇ”дѕ‹",
                    enterSupplyAmount: "иЇ·иѕ“е…Ґе­ж¬ѕж•°й‡Џ",
                    enterRedeemAmount: "иЇ·иѕ“е…ҐеЏ–е›ћж•°й‡Џ(жњ¬й‡‘)",
                    enterRepayAmount: "иЇ·иѕ“е…ҐеЃїиїж•°й‡Џ(жњ¬й‡‘)",
                    enterBorrowAmount: "иЇ·иѕ“е…ҐеЂџж¬ѕж•°й‡Џ(жњЂе¤§дёєж± й‡Џ80%)",
                    marketDetails: "её‚ењєиЇ¦жѓ…",
                    poolVolume: "ж± й‡Џ",
                    depositAmount: "е­ж¬ѕж•°й‡Џ",
                    borrowAmount: "еЂџж¬ѕж•°й‡Џ",
                    depositLimit: "е­ж¬ѕдёЉй™ђ",
                    borrowLimit: "еЂџж¬ѕдёЉй™ђ",
                    reserveRatio: "е‡†е¤‡й‡‘зЋ‡",
                    exchangeRate: "е…‘жЌўзЋ‡",
                    liquidationFine: "жё…з®—зЅљж¬ѕ",
                    maxPledgeRate: "жњЂе¤§иґЁжЉјзЋ‡",
                    fundUtilization: "иµ„й‡‘е€©з”ЁзЋ‡",
                    marketLoanable: "её‚ењєе‰©дЅ™еЏЇиґ·",
                    totalBorrow: "жЂ»еЂџж¬ѕ",
                    totalDeposit: "жЂ»е­ж¬ѕ",
                    operation: "ж“ЌдЅњ",
                    farmContract: "е†њењєеђ€зє¦",
                    vaultContract: "жњєжћЄж± еђ€зє¦",
                    myAddress: "ж€‘зљ„ењ°еќЂ",
                    totalDepositIn: "жЂ»е­е…Ґ",
                    currentEarning: "еЅ“е‰Ќз›€е€©",
                    staked: "е·ІиґЁжЉј",
                    transaction: "дє¤ж“",
                    pending: "дє¤ж“жЋ’йџж‰“еЊ…дё­...",
                    confirm: "зЎ®и®¤",
                    confirming: "з­‰еѕ…й“ѕдёЉдє¤ж“зЎ®и®¤",
                    confirmed: "е·ІзЎ®и®¤",
                    cancel: "еЏ–ж¶€",
                    canceled: "е·ІеЏ–ж¶€",
                    success: "дє¤ж“ж€ђеЉџ",
                    failed: "дє¤ж“ж‰§иЎЊе¤±иґҐ",
                    txFailed: "дє¤ж“ж‰§иЎЊе¤±иґҐ",
                    copied: "е¤Ќе€¶ж€ђеЉџ",
                    computePower: "е®ћж—¶и®Ўз®—иѓЅеЉ›е’ЊTokenж•°жЌ®еЏ‚ж•°",
                    aboutWiki: "YFOдїЎжЃЇд»‹з»Ќ",
                    aboutDex: "$P зљ„ж„їж™ЇжЇжћ„е»єе¤љдёЄеЋ»дё­еїѓеЊ–й‡‘ићЌеє”з”ЁзЁ‹еєЏпј€Defi - Appsпј‰пјЊз„¶еђЋе°†иї™дє›дє§е“ЃејЂеЏ‘ж€ђж€ђз†џзљ„йЎ№з›®пјЊд»ЋиЂЊеўћеЉ  $P з”џжЂЃзі»з»џзљ„д»·еЂјгЂ‚з”±дєЋдёЂдє›еЋ»дё­еїѓеЊ–й‡‘ићЌпј€Defiпј‰дє§е“ЃжІЎжњ‰е®ћй™…з”Ёдѕ‹е’Њз®ЂеЌ•зљ„дЅїз”Ёж–№жі•пјЊдє§е“Ѓзљ„дЅїз”ЁеЇ№Defiз”Ёж€·жќҐиЇґдёЂз›ґеѕ€е›°йљѕпјЊе°¤е…¶жЇе› дёєе®ѓйњЂи¦ЃеЇ№д»Ґе¤ЄеќЉеЊєеќ—й“ѕжњ‰е№їжі›зљ„дє†и§ЈгЂ‚еЏ¦дёЂдёЄеёёи§Ѓй—®йўжЇи®ёе¤љ Defi йЎ№з›®йЂљиї‡жћ„е»єз®ЂеЌ•зљ„дє¤жЌўзЅ‘з«™з„¶еђЋеЃњж­ўиї›дёЂж­ҐејЂеЏ‘иЂЊжЏђе‡єзљ„й”™иЇЇеЂјгЂ‚иї™дЅїеѕ—дјјд№ЋеЏЇд»ҐжЏђдѕ› Defi дє¤жЌўпјЊдЅ†дє‹е®ће№¶йќће¦‚ж­¤гЂ‚ $P йЎ№з›®еЏЉе…¶жќҐи‡ЄдёЌеђЊе›Ѕе®¶зљ„еЋ»дё­еїѓеЊ–е›ўйџж‰їиЇєйЂљиї‡е›ґз»•е…¶е№іеЏ°ејЂеЏ‘е’Њжћ„е»єе¤љдёЄ Defi дє§е“ЃжќҐе€›е»єдёЂдёЄеЏЇжЊЃз»­зљ„з”џжЂЃзі»з»џпјЊе№¶дїќиЇЃдёЂдёЄ Defi йЎ№з›®еє”иЇҐе…·жњ‰зљ„жњЂз»€зњџе®ћд»·еЂјгЂ‚ $P жЇдёЂдёЄз¤ѕеЊєй©±еЉЁзљ„еЊєеќ—й“ѕйЎ№з›®пјЊж—ЁењЁењЁе…¶еџєзЎЂдёЉжћ„е»єе¤љдёЄ Defi еє”з”ЁзЁ‹еєЏе…·жњ‰е€›йЂ жЂ§е’Њйў и¦†жЂ§зљ„еЊєеќ—й“ѕDefiзђ†еїµзљ„е№іеЏ°пјЊе› ж­¤ж€ђдёєз¬¬дёЂдёЄеЂјеѕ—ж•€д»їзљ„е‰ЌжІїDefiйЎ№з›®гЂ‚\n  ",
                    aboutApp: "$P и®ѕжѓідє†дёЂдёЄз”±е¤љдёЄжћ„е»єењЁд»Ґе¤ЄеќЉдёЉзљ„ Defi еє”з”ЁзЁ‹еєЏпј€Defi DAppпј‰з»„ж€ђзљ„з”џжЂЃзі»з»џпјЊдѕ› $P йЎ№з›®зљ„ $P е›ўйџе’Њ $P дє§е“Ѓз”Ёж€·зљ„еЋ»дё­еїѓеЊ–з¤ѕеЊєдЅїз”ЁгЂ‚ иЇќи™Ѕе¦‚ж­¤пјЊ$P Finance жЇдёЂдёЄз¤ѕеЊєй©±еЉЁзљ„ Defi йЎ№з›®пјЊж—ЁењЁжћ„е»єеЋ»дё­еїѓеЊ–дє§е“ЃпјЊж—ЁењЁдє§з”џзњџж­Јзљ„ Defi д»·еЂјпјЊд»Ґж”№е–„з¤ѕеЊєеЏЉе…¶з”Ёж€·зљ„ $P з”џжЂЃзі»з»џгЂ‚",
                    aboutBasis: "$P и‡ґеЉ›дєЋзі»з»џењ°з”џдє§ж–°зљ„ Defi дє§е“ЃпјЊиЇҐе›ўйџдЅњдёєдёЂдёЄдёґж—¶еђЇз”Ёзљ„е›ўйџпјЊе°†её®еЉ©ејЂеЏ‘гЂЃиђҐй”Ђе’ЊжЋЁе‡єиї™дє› Defi дє§е“ЃпјЊд»Ґеё®еЉ©еЏ‘е±•е…¶з”џз‰©ењ€пјЊеђЊж—¶дёєз¤ѕеЊєгЂЃйЎ№з›®е’Њз”Ёж€·жЏђдѕ›зђ†жѓізљ„ж”¶з›ЉгЂ‚",
                    aboutMechanism: "$P д№џеЏЇд»Ґиў«жЏЏиї°дёєдёЂдёЄеЋ»дё­еїѓеЊ–зљ„йЈЋй™©жЉ•иµ„пј€DVCпј‰пјЊе®ѓйЂљиї‡жћ„е»єе…¶з¤ѕеЊєжЉ•иµ„зљ„ Defi дє§е“ЃжќҐиµ‹иѓЅеЋ»дё­еїѓеЊ–зљ„ж— жЃЇй‡‘ићЌз”џжЂЃзі»з»џпјЊз›®зљ„жЇе°†ж”¶е…ҐдЅњдёєе€©ж¶¦д»Ѕйўќпј€еҐ–еЉ±пј‰е€†й…Ќз»™е€©з›Љз›ёе…іиЂ…гЂ‚",
                    aboutCommunity: "$P з”џжЂЃзі»з»џе°†ж€ђдёєеђ„з§Ќз‹¬з‰№зљ„еЋ»дё­еїѓеЊ–й‡‘ићЌдє§е“Ѓзљ„е®¶е›­гЂ‚ $P дє§е“Ѓе°†дёЋе…¶д»ЈеёЃ YFONE д»ЈеёЃжЊ‚й’©пјЊд»ҐеЇ»ж±‚й‡Ќж–°е€›йЂ еЋ»дё­еїѓеЊ–й‡‘ићЌзљ„зњџж­Јеђ«д№‰гЂ‚",
                    aboutDefi: "$P дє§е“Ѓе°†дёЋе…¶д»ЈеёЃ YFONE Token жЊ‚й’©пјЊд»ҐеЇ»ж±‚й‡Ќж–°е€›йЂ еЋ»дё­еїѓеЊ–й‡‘ићЌзљ„зњџж­Јеђ«д№‰гЂ‚\nYFONE д»ЈеёЃзљ„дё»и¦Ѓз”Ёдѕ‹е°†жЇжЇЏдёЄдє§е“Ѓзљ„е”ЇдёЂжІ»зђ†д»ЈеёЃпјЊиї™е°†дЅїжЊЃжњ‰иЂ…еЇ№иї™дє›дє§е“Ѓдє§з”џзљ„ж”¶е…ҐжЏђе‡єзґўиµ”гЂ‚\n$P е›ўйџе»єз«‹её‚ењєзљ„еђЊж—¶пјЊе®ѓе°†ж€ђдёєдёЂдёЄжЉµжЉј YFONE д»ЈеёЃзљ„е№іеЏ°пјЊйљЏеђЋпјЊжЊЃжњ‰иЂ…д»…йЂљиї‡жЊЃжњ‰д»ЈеёЃе°±иѓЅиЋ·еѕ—е·Ёе¤§зљ„ж”¶з›ЉгЂ‚ жѓіи±ЎдёЂдё‹пјЊйЂљиї‡дёЋеђ€дЅњдј™дјґе€†еЏ‰е№¶д»Ће¤ґејЂе§‹жћ„е»єпјЊе°† 1000 е¤љдёЄе€†ж•ЈејЏеє”з”ЁзЁ‹еєЏй“ѕжЋҐе€°дёЂдёЄз”џжЂЃзі»з»џпјЊж‰Ђжњ‰иї™дє›еє”з”ЁзЁ‹еєЏйѓЅдёЋ YFO д»¤з‰Њй›†ж€ђгЂ‚ иї™дёЄз”џжЂЃзі»з»џдјљйќћеёёеєће¤§пјЊе№¶дё”дјљдёЌж–­еўћй•їпјЊжЇдёЂдёЄе®Ње…ЁеЋ»дё­еїѓеЊ–зљ„зі»з»џпјЊиЂЊдё”иїењЁдёЌж–­еўћй•їпјЊиї™е°±жЇDefiзљ„зњџж­Јеђ«д№‰гЂ‚\n  ",
                    aboutVaults: "жњєжћЄж± ж №жЌ®е“€еёЊзЋ‡гЂЃжЊ–зџїйљѕеє¦д»ҐеЏЉдє¤ж“е№іеЏ°зЋ°иЎЊд»·ж јзЎ®е®љиЋ·е€©жњЂй«зљ„еёЃгЂ‚и·џд»…иѓЅжЊ–дёЂдёЄеёЃзљ„ж™®йЂљзџїж± дёЌеђЊгЂ‚ дёЂдёЄеёЃжЊ–зџїзљ„ж—¶й—ґй•їдє†д»ҐеђЋпјЊйљѕеє¦дјљеўћеЉ пјЊзџїж± е°±дјљиЅ¬еђ‘еЏ¦дёЂдёЄеёЃгЂ‚YFOе№іеЏ°дјљж №жЌ®её‚ењєе‡єзЋ°зљ„зџїж± пјЊе®ћж—¶иї›иЎЊзџїж± зљ„ж·»еЉ пјЊд»ЋиЂЊиЋ·еѕ—жњЂй«зљ„ж”¶з›ЉгЂ‚дё”дё»и¦ЃжЇйЂљиї‡еђ€зє¦и‡ЄеЉЁзљ„еЉџиѓЅиї›иЎЊжЇЏеЌЉе°Џж—¶зљ„е¤ЌжЉ•иЋ·еѕ—жњЂй«зљ„ж”¶з›ЉгЂ‚",
                    aboutLending: "ењЁDeFiдё–з•ЊпјЊеЋ»дё­еїѓеЊ–еЂџиґ·зі»з»џжЇдёЂдёЄжћЃе…¶й‡Ќи¦Ѓзљ„иµ›йЃ“пјЊд№џжЇж•ґдёЄDeFiдЅ“зі»й‡Њйќўзљ„еџєзџізі»з»џпјЊе®ѓиѓЅе¤џжЁЎж‹џзЋ°е®ћдё–з•Њй‡Њзљ„й‡‘ићЌзі»з»џпјЊдє†и§ЈдёЌеђЊз”Ёж€·зљ„иµ„й‡‘йњЂж±‚пјЊе№¶жЏђдѕ›з”Ёж€·й—ґз›ёдє’иµ„й‡‘ићЌйЂљзљ„е№іеЏ°;е®ѓиѓЅе¤џж— иѕ№й™…ж€ђжњ¬зљ„ж”ЇжЊЃз¬¦еђ€еђЊиґЁеЊ–д»ЈеёЃж ‡е‡†зљ„ж‰Ђжњ‰еЉ еЇ†иµ„дє§д№‹й—ґзљ„еЂџиґ·пјЊе№¶иѓЅе¤џж №жЌ®её‚ењєдѕ›йњЂпјЊи‡ЄеЉЁеЊ–зљ„и®Ўз®—дёЋи°ѓж•ґеё‚ењєзљ„еЂџиґ·е€©зЋ‡гЂ‚ж‰Ђд»ҐYFOз”џжЂЃд№џењЁV2з‰€жњ¬дё­еЃљй‡Ќи¦Ѓзљ„еЉџиѓЅпјЊеЂџиґ·дё­зљ„е№іеЏ°и‡Єзђ†TokenжЇз›®е‰Ќзљ„YFOе’ЊOBSгЂ‚",
                    aboutText: "$P зљ„ж„їж™ЇжЇжћ„е»єе¤љдёЄеЋ»дё­еїѓеЊ–й‡‘ићЌеє”з”ЁзЁ‹еєЏпј€Defi - Appsпј‰пјЊз„¶еђЋе°†иї™дє›дє§е“ЃејЂеЏ‘ж€ђж€ђз†џзљ„йЎ№з›®пјЊд»ЋиЂЊеўћеЉ  $P з”џжЂЃзі»з»џзљ„д»·еЂјгЂ‚з”±дєЋдёЂдє›еЋ»дё­еїѓеЊ–й‡‘ићЌпј€Defiпј‰дє§е“ЃжІЎжњ‰е®ћй™…з”Ёдѕ‹е’Њз®ЂеЌ•зљ„дЅїз”Ёж–№жі•пјЊдє§е“Ѓзљ„дЅїз”ЁеЇ№Defiз”Ёж€·жќҐиЇґдёЂз›ґеѕ€е›°йљѕпјЊе°¤е…¶жЇе› дёєе®ѓйњЂи¦ЃеЇ№д»Ґе¤ЄеќЉеЊєеќ—й“ѕжњ‰е№їжі›зљ„дє†и§ЈгЂ‚еЏ¦дёЂдёЄеёёи§Ѓй—®йўжЇи®ёе¤љ Defi йЎ№з›®йЂљиї‡жћ„е»єз®ЂеЌ•зљ„дє¤жЌўзЅ‘з«™з„¶еђЋеЃњж­ўиї›дёЂж­ҐејЂеЏ‘иЂЊжЏђе‡єзљ„й”™иЇЇеЂјгЂ‚иї™дЅїеѕ—дјјд№ЋеЏЇд»ҐжЏђдѕ› Defi дє¤жЌўпјЊдЅ†дє‹е®ће№¶йќће¦‚ж­¤гЂ‚ $P йЎ№з›®еЏЉе…¶жќҐи‡ЄдёЌеђЊе›Ѕе®¶зљ„еЋ»дё­еїѓеЊ–е›ўйџж‰їиЇєйЂљиї‡е›ґз»•е…¶е№іеЏ°ејЂеЏ‘е’Њжћ„е»єе¤љдёЄ Defi дє§е“ЃжќҐе€›е»єдёЂдёЄеЏЇжЊЃз»­зљ„з”џжЂЃзі»з»џпјЊе№¶дїќиЇЃдёЂдёЄ Defi йЎ№з›®еє”иЇҐе…·жњ‰зљ„жњЂз»€зњџе®ћд»·еЂјгЂ‚ $PжЇдёЂдёЄз¤ѕеЊєй©±еЉЁзљ„еЊєеќ—й“ѕйЎ№з›®пјЊж—ЁењЁд»Ґе€›ж–°е’Њйў и¦†жЂ§зљ„еЊєеќ—й“ѕDefiзђ†еїµењЁе…¶е№іеЏ°д№‹дёЉжћ„е»єе¤љдёЄDefiеє”з”ЁпјЊд»ЋиЂЊж€ђдёєз¬¬дёЂдёЄеЂјеѕ—ж•€д»їзљ„е‰ЌжІїDefiйЎ№з›®",
                    aboutECO: "$P и®ѕжѓідє†дёЂдёЄз”±е¤љдёЄжћ„е»єењЁд»Ґе¤ЄеќЉдёЉзљ„ Defi еє”з”ЁзЁ‹еєЏпј€Defi DAppпј‰з»„ж€ђзљ„з”џжЂЃзі»з»џпјЊдѕ› $P йЎ№з›®зљ„ $P е›ўйџе’Њ $P дє§е“Ѓз”Ёж€·зљ„еЋ»дё­еїѓеЊ–з¤ѕеЊєдЅїз”ЁгЂ‚ иЇќи™Ѕе¦‚ж­¤пјЊ$P Finance жЇдёЂдёЄз¤ѕеЊєй©±еЉЁзљ„ Defi йЎ№з›®пјЊж—ЁењЁжћ„е»єеЋ»дё­еїѓеЊ–дє§е“ЃпјЊж—ЁењЁдє§з”џзњџж­Јзљ„ Defi д»·еЂјпјЊд»Ґж”№е–„з¤ѕеЊєеЏЉе…¶з”Ёж€·зљ„ $P з”џжЂЃзі»з»џгЂ‚ $P и‡ґеЉ›дєЋзі»з»џењ°з”џдє§ж–°зљ„ Defi дє§е“ЃпјЊиЇҐе›ўйџдЅњдёєдёЂдёЄдёґж—¶еђЇз”Ёзљ„е›ўйџпјЊе°†её®еЉ©ејЂеЏ‘гЂЃиђҐй”Ђе’ЊжЋЁе‡єиї™дє› Defi дє§е“ЃпјЊд»Ґеё®еЉ©еЏ‘е±•е…¶з”џз‰©ењ€пјЊеђЊж—¶дёєз¤ѕеЊєгЂЃйЎ№з›®е’Њз”Ёж€·жЏђдѕ›зђ†жѓізљ„ж”¶з›ЉгЂ‚ $Pд№џеЏЇд»ҐиЇґжЇеЋ»дё­еїѓеЊ–йЈЋй™©жЉ•иµ„пј€DVCпј‰пјЊйЂљиї‡жћ„е»єDefiдє§е“Ѓиµ‹иѓЅеЋ»дё­еїѓеЊ–е…ЌжЃЇй‡‘ићЌз”џжЂЃ",
                    overview: "ж¦‚и§€",
                    w1: "Vaults жЇд»Ђд№€пјџ",
                    w2: "YFOеЋ»дё­еїѓеЊ–еЂџиґ·пјџ",
                    w3: "ж€‘йњЂи¦Ѓд»Ђд№€ж ·зљ„жЉЂиѓЅж‰ЌиѓЅеЉ е…ҐдЅ д»¬зљ„е›ўйџпјЊж‰ЌиѓЅењЁиї™дёЄдјџе¤§зљ„йЎ№з›®дё­еЃље‡єиґЎзЊ®пјџ",
                    w4: "$P з›®е‰ЌжЋҐеЏ—д»Ђд№€з±»ећ‹зљ„еЉ еЇ†иґ§еёЃпјџ",
                    w5: "ж€‘е¦‚дЅ•еђ‘ $P жЉ•иµ„е№¶иЋ·е€©пјџ",
                    w6: "дёєд»Ђд№€ V2 з‰€жњ¬еЏЄиѓЅдЅїз”ЁеёЃе®‰ binance з”џжЂЃй“ѕпјџ",
                    w7: "$P д»ЈиЎЁд»Ђд№€пјџ",
                    r1: "жњєжћЄж± пјЊе°±жЇеЇ№еђЊз®—жі•зљ„дёЌеђЊеёЃз§ЌпјЊж №жЌ®е®ћж—¶жЊ–зџїж”¶з›Љзљ„й«дЅЋпјЊд»Ґи‡ЄеЉЁеЊ–зљ„ж–№ејЏе°†з®—еЉ›е€‡жЌўи‡іж›ґй«ж”¶з›Љзљ„еёЃз§Ќиї›иЎЊжЊ–зџїзљ„иї‡зЁ‹пјЊе…¶д»·еЂјжЇдёєз”Ёж€·е€›йЂ жЇ”еЌ•дёЂеёЃз§ЌжЊ–зџїж›ґй«зљ„ж”¶з›ЉгЂ‚д№‹ж‰Ђд»Ґдјљжњ‰вЂњжњєжћЄж± вЂќд№‹з§°пјЊеѕ—з›ЉдєЋиї™з§Ќж“ЌдЅње°±еѓЏжЇж‰“жњєжћЄдёЂж ·пјЊдёЌж–­иї›иЎЊе€‡жЌўгЂ‚",
                    r11: "ж №жЌ®жњєжћЄж± зљ„з‰№з‚№пјЊжњєжћЄж± зљ„ж“ЌдЅње°±жЇжЉЉз®—еЉ›й›†дё­е€°дёЂдёЄзџїж± й‡ЊпјЊдёЌжЊ‡е®љжЊ–е“ЄдёЄеёЃпјЊиЂЊжЇз›ґжЋҐеЇ»ж‰ѕз›ёеђЊжЊ–зџїз®—жі•дё­зљ„е‡ дёЄйЎ№з›®пјЊе“ЄдёЄйЎ№з›®ж”¶з›Љй«е°±жЉЉз®—еЉ›е€‡жЌўе€°е“ЄдёЄйЎ№з›®дёЉеЋ»жЊ–пјЊиї™дёЄйЎ№з›®дёЉзљ„ж”¶з›Љдё‹й™Ќдє†е°±жЌўе€°еЏ¦е¤–дёЂдёЄйЎ№з›®дёЉеЋ»пјЊжњЂз»€иЋ·еЏ–жњЂдЅіж”¶з›ЉгЂ‚",
                    r12: "жњєжћЄж± зљ„дјеЉїи®©з”Ёж€·зљ„ж”¶з›ЉжњЂе¤§еЊ–пјљж”¶з›ЉжЇжЇЏдёЄжЉ•иµ„иЂ…йѓЅе…іжіЁзљ„й‡Ќз‚№гЂ‚е¤§йѓЁе€†дєєд№‹ж‰Ђд»ҐдјљйЂ‰ж‹©жЉ•иµ„DeFiйЎ№з›®е°±жЇзњ‹ењЁе…¶ж”¶з›ЉзЋ‡жЇ”иѕѓй«пјЊиЂЊDeFiжњєжћЄж± е€™иѓЅе¤џеё®еЉ©ж€‘д»¬е°†жЊ–зџїж”¶з›ЉжњЂе¤§еЊ–гЂ‚иї™жЇе› дёєDeFiжњєжћЄж± зљ„з‰№з‚№е°±жЇж №жЌ®е®ћж—¶жЊ–зџїж”¶з›Љзљ„й«дЅЋпјЊе°†иµ„й‡‘е€‡жЌўи‡іж›ґй«ж”¶з›Љзљ„DeFiйЎ№з›®дё­иї›иЎЊжµЃеЉЁжЂ§жЊ–зџїпјЊдёєж€‘д»¬жЉ•иµ„иЂ…жЏђдѕ›ж›ґй«зљ„жЊ–зџїж”¶з›ЉгЂ‚",
                    r13: "YFOе№іеЏ°зљ„DeFiжњєжћЄж± дёЌд»…д»…иѓЅе¤џйЂљиї‡е®ћж—¶е€‡жЌўеўће¤§ж€‘д»¬зљ„ж”¶з›ЉпјЊиїжЋЁе‡єдє†жЇЏеЌЉе°Џж—¶е¤Ќе€©зљ„и§„е€™пјЊжњ‰ж•€зљ„е€©з”Ёиµ„й‡‘пјЊдїѓиї›ж€‘д»¬зљ„ж”¶з›ЉжњЂе¤§еЊ–гЂ‚(жЇЏе°Џж—¶е¤Ќе€©еЌіжЊ‰еЌЉе°Џж—¶и®ЎжЃЇпјЊж€‘д»¬жЇЏеЌЉе°Џж—¶зљ„жЉ•иµ„жњ¬жЃЇйѓЅе°†и®Ўе…Ґдё‹дёЂдёЄе°Џж—¶зљ„жЉ•иµ„жњ¬й‡‘пјЊдє«еЏ—жЇЏеЌЉе°Џж—¶е¤Ќе€©ж”¶з›ЉгЂ‚)",
                    r14: "зІѕйЂ‰йЎ№з›®пјљеё‚ењєдёЉеЏЇиї›иЎЊжµЃеЉЁжЂ§жЊ–зџїйЎ№з›®зђізђ…ж»Ўз›®пјЊеЇ№ж€‘д»¬з”Ёж€·жќҐиЇґжњЂйљѕзљ„иїжЇйЂ‰ж‹©йЎ№з›®иї™дёЂзЋЇиЉ‚гЂ‚жѓіи¦ЃйЂ‰ж‹©е‡єеҐЅдёЂдёЄе®‰е…ЁгЂЃеЏЇйќ гЂЃж”¶з›Љй«зљ„йЎ№з›®пјЊйњЂи¦ЃжЉ•е…Ґе¤§й‡Џзљ„ж—¶й—ґе’ЊзІѕеЉ›гЂ‚й™¤ж­¤д№‹е¤–пјЊз”±дєЋеё‚ењєзћ¬жЃЇдё‡еЏпјЊеѕ€е®№ж“е‡єзЋ°еЅ“ж€‘д»¬з ”з©¶еҐЅдёЂдёЄж–°йЎ№з›®е‡†е¤‡е…Ґж‰‹зљ„ж—¶еЂ™пјЊиµ„й‡‘е·Із»ЏиЅ¬з§»е€°дё‹дёЂдёЄж”¶з›Љж›ґй«зљ„ж–°йЎ№з›®зљ„жѓ…е†µпјЊд»ЋиЂЊйЂ ж€ђдёЂе®љзљ„ж»ћеђЋжЂ§гЂ‚",
                    r15: "жњєжћЄж± зљ„еҐЅе¤„жЇиѓЅе¤џжЏђдѕ›дёЂз§Ќиµ„дє§з­›йЂ‰е’Њй…ЌзЅ®зљ„еЉџиѓЅпјЊжЇЏдёЉдёЂдёЄйЎ№з›®дјљдёЂе®љзЁ‹еє¦иЇ„дј°е…¶е®‰е…ЁжЂ§е’Њж”¶з›ЉгЂ‚YFOе№іеЏ°е°±жњ‰дё“дёљдєєеЈ«еЇ№еђ„з§ЌйЎ№з›®иї›иЎЊи°ѓз ”пјЊзІѕйЂ‰й«ж”¶з›ЉDeFiйЎ№з›®пјЊе№¶е®ћж—¶и°ѓж•ґе¤ґеЇёпјЊдёєж€‘д»¬дє‰еЏ–жњЂе¤§ж”¶з›ЉеЏЇиѓЅгЂ‚",
                    r16: "е› и¦ЃдёЌж–­зљ„и°ѓз”Ёеђ€зє¦пјЊж‰Ђд»Ґе№іеЏ°дјљж”¶еЏ–0.3%ж”¶з›Љзљ„ж‰‹з»­иґ№пјЊе…¶з›®зљ„жЇDeFi жЊ–зџїдё­зљ„еђ„дёЄж­ҐйЄ¤йѓЅйњЂи¦Ѓ1-2ж¬Ўзљ„еђ€зє¦и°ѓз”ЁпјЊжЇЏж¬Ўиґ№з”ЁзЋ°ењЁе‡ зѕЋе…ѓе€°е‡ еЌЃзѕЋй‡‘дёЌз­‰пјЊжЇЏеЌЉе°Џж—¶е°±и¦Ѓж•ґдёЄеђ€зє¦и°ѓз”ЁдёЂж¬ЎгЂ‚й™¤еЋ»GASиґ№з”Ёд№‹е¤–пјЊиїжњ‰дЅ™йўќдјљдёЌе®љж—¶зљ„з”ЁжќҐе›ћиґ­YFOгЂЃOBS TokenгЂ‚",
                    r2: "д»ҐжЏђдѕ›е­ж¬ѕе‡­иЇЃд»ЈеёЃзљ„ж–№ејЏпјЊе°†еђЊдёЂиµ„дє§з©їжў­гЂЃй‡Ќе¤ЌдЅїз”ЁдєЋдёЌеђЊзљ„DeFiеЌЏи®®д№‹дё­пјЊд»ЋиЂЊж•°еЂЌењ°жЏђеЌ‡иµ„й‡‘ењЁй‡‘ићЌеё‚ењєдёЉзљ„дЅїз”Ёж•€зЋ‡;е®ѓиїеЏЇд»ҐдёЋе…¶е®ѓDeFiеЌЏи®®иї›иЎЊзЃµжґ»з»„еђ€пјЊд»ЋиЂЊе®ћзЋ°е¤ље±‚гЂЃе¤љзє§гЂЃе¤Ќжќ‚гЂЃеµЊеҐ—й‡‘ићЌдє¤ж“зљ„и‡ЄеЉЁеЊ–иїђиЎЊгЂ‚",
                    r21: "з›®е‰ЌDeFiдё­зљ„еђ„з±»еЂџиґ·е№іеЏ°д»ЋжЁЎејЏдёЉи®Іеџєжњ¬йѓЅе¤„дєЋжЉµжЉјиґ·ж¬ѕж–№ејЏпјЊж•ґдЅ“ж›ґеЉ еЂѕеђ‘дєЋеЅ“й“єжЁЎејЏпјЊжЉЉеђ„з§Ќж•°е­—иґ§еёЃеЏдёєе›єе®љд»·еЂјзљ„иґ§з‰©пјЊжЉµжЉјд»·еЂј100зљ„иґ§з‰©иЋ·еѕ—75д»·ж јзљ„еЏЇжµЃеЉЁиґ§еёЃпјЊйЂљиї‡иґ§еёЃжЉµжЉјиЋ·еѕ—иґ§еёЃзљ„иЎЊдёєзњ‹дјјйќћеёёж„љи ўпјЊдЅ†йЂљиї‡й«йўќзљ„жЉµжЉје€©зЋ‡д»ҐеЏЉDeFiеё‚ењєе‰Ќжњџе·Ёйўќзљ„ж”¶з›ЉзЋ‡еђёеј•дє†иѕѓй«зљ„её‚ењєиµ„й‡‘гЂ‚",
                    r22: "DeFiз›®е‰ЌжЇйЂљиї‡swapе’Њдє¤ж“ж‰ЂжќҐи§Је†іжЉµжЉјпјЊйЂљиї‡дїќиЇЃй‡‘е€¶еє¦жќҐи§Је†іжќ жќ†пјЊжњЂз»€е®ћзЋ°дє†з±»дјјдєЋдїЎз”ЁиЎЌз”џдёЂж ·зљ„ж“ЌдЅњгЂ‚ж‹їжЇ”з‰№еёЃе’Њд»Ґе¤ЄеќЉдЅњдёєдѕ‹е­ђпјЊењЁеёЃе®‰й“ѕдёЉгЂ‚ жЇ”е¦‚дЅ жѓіжЉµжЉјжЇ”з‰№еёЃжЌўеЏ–д»Ґе¤ЄеќЉпјЊдЅ е°±еЏЇд»Ґпјљ жЉЉжЇ”з‰№еёЃй”Ѓе®љењЁдёЂдёЄз‰№е®љзљ„ењ°еќЂпјЊж­¤ж—¶дјљењЁеёЃе®‰й“ѕдёЉз”џж€ђдёЂдёЄд»ЈиЎЁиї™дёЄжЇ”з‰№еёЃйЂљиЇЃBTCпјЊ з„¶еђЋдЅ ењЁеёЃе®‰й“ѕдёЉз”Ёж™єиѓЅеђ€зє¦жЉµжЉјиї™дёЄBTCпјЊз”џж€ђдє†з›ёеє”зљ„Tokenпј› з„¶еђЋж‹їзќЂTokenиґ­д№°дє†дёЂе®љж•°й‡Џзљ„ETHпјЊ з„¶еђЋжЉЉиї™дє›ETHж‰ЂеЇ№еє”зљ„жЉµжЉјз‰©BTCй‡Љж”ѕе‡єжќҐпјЊдє¤ж“з»“жќџгЂ‚ ж•ґдёЄиї‡зЁ‹йѓЅжЇж™єиѓЅеђ€зє¦жќҐе®Њж€ђзљ„пјЊжІЎжњ‰дєєзљ„еЏ‚дёЋгЂ‚иЂЊе¦‚жћњдЅ е€°жњџдёЌиїпјЊй‚Јд№€дЅ жЉµжЉјзљ„жЇ”з‰№еёЃе°±жІЎжњ‰дє†гЂ‚ж™єиѓЅеђ€зє¦е€°жњџж‰§иЎЊж‰§иЎЊпјЊжЉЉж€‘жЉµжЉјзљ„иї™дёЄжЇ”з‰№еёЃиї›иЎЊиїќзє¦е¤„зђ†гЂ‚ иї™ж ·иѓЅе®ћзЋ°дє†з­‰йўќжЉµжЉјпјЊдЅ†жЇDefiзљ„й­…еЉ›ењЁдєЋз”џй•їпјЊж‰Ђд»ҐйњЂи¦Ѓи¶…йўќжЉµжЉјгЂ‚д№џе°±жЇеёЊжњ›иѓЅе¤џжЉµжЉј1дёЄжЇ”з‰№еёЃпјЊдёґж—¶зљ„еЂџ2дёЄпјЊд№ѓи‡ідєЋ10дёЄжЇ”з‰№еёЃжќҐиї›иЎЊжЉ•жњєгЂ‚",
                    r3: "$P жЇдёЂдёЄе…Ёзђѓзљ„е›ўйџпјЊжЇЏдёЄдєєйѓЅеЏЇд»ҐеЉ е…Ґ $P зљ„з¤ѕзѕ¤й‡ЊпјЊењЁз¤ѕзѕ¤й‡Њж€‘д»¬еёЊжњ›ж›ґе¤љ\n  дєєзљ„еЉ е…Ґ $P зљ„е¤§е®¶еє­пјЊеЅ“дЅ жЊЃжњ‰дёЂжћљ YFO Token зљ„ж—¶еЂ™е°±з®—еЉ е…Ґдє†ж€‘д»¬е›ўйџпјЊеЅ“з„¶\n  ж€‘д»¬йњЂи¦Ѓж›ґе¤љзљ„дєєеЉ е…ҐпјЊж‰Ђд»ҐеЏЇд»ҐдЅњдёєз¤ѕзѕ¤иїђиђҐдєєе‘пјЊеё‚ењєе®Јдј дєєе‘пјЊжЉЂжњЇеЏЌй¦€дєєе‘з­‰з­‰зљ„\n  и§’и‰ІпјЊењЁдЅ дёЄдєєе…·е¤‡дёЂе®љиѓЅеЉ›иЇ·иЃ”зі»ж€‘д»¬зљ„з¤ѕзѕ¤з®Ўзђ†е‘гЂ‚",
                    r4: "з›®е‰ЌжЋҐеЏ—дё»жµЃеёЃ ETHгЂЃBNBгЂЃUSDT з­‰е’Њ YFOгЂЃOBS Tokens",
                    r5: "е№іеЏ°жЏђдѕ›жњєжћЄж± пј€vaultsпј‰гЂЃеЂџиґ·гЂЃеЌ•еёЃж± з­‰е¤љз§Ќж–№ејЏпјЊйњЂи¦Ѓз”Ёж€·и‡ЄиЎЊжЊ‰зЅ‘з«™дёЉи¦Ѓж±‚зљ„ Token\n  з§Ќз±»е°±дјљиЋ·еѕ—дёЂе®љзљ„е€©ж¶¦гЂ‚",
                    r6: "жњєжћЄж± дёєжЇЏ30е€†й’џе†…е¤ЌжЉ•дёЂж¬ЎпјЊжІ№иґ№GASиї‡й«пјЊи‹ҐиґЁжЉјй‡‘йўќдёЌе¤џдјљеЇји‡ґз”Ёж€·зљ„иµ„й‡‘е‡єзЋ°дєЏжЌџгЂ‚ж‰Ђд»Ґж€‘д»¬й¦–жњџеЏЄжЋЁе‡єBSCз”џжЂЃй“ѕзљ„гЂ‚д»Ґе¤ЄеќЉзљ„з‰€жњ¬йњЂи¦ЃBSCз‰€жњ¬зљ„YFO-V2з‰€жњ¬ TVL й‡‘йўќе¤§дєЋ 500дё‡зѕЋе…ѓзљ„ж—¶еЂ™пјЊж‰ЌдјљејЂж”ѕд»Ґе¤ЄеќЉзљ„з‰€жњ¬пјЊењЁе›єе®љж—¶й—ґе¤ЌжЉ•зљ„ж—¶еЂ™пјЊеЅ“й‡‘йўќиѕѕе€°дёЂе®љзљ„й‡Џж—¶еЂ™пјЊж‰ЌиѓЅдїќиЇЃз”Ёж€·ењЁе№іеЏ°иї›иЎЊе¤ЌжЉ•зљ„й‡‘йўќеѕ—е€°жњЂе¤§зљ„е€©ж¶¦гЂ‚ж‰Ђд»Ґй¦–жњџж€‘д»¬еЏЄејЂж”ѕеёЃе®‰binanceз”џжЂЃй“ѕзљ„дє§е“ЃеЊєеџџпјЊпј€еЅ“з„¶е·Із»ЏејЂеЏ‘е®ЊжЇ•пјЊж—¶е€»з­‰еѕ…зќЂж›ґж–°пјЊд»Ґе¤ЄеќЉзљ„д»Јз Ѓе·ІењЁGithubдёЉж›ґж–°пј‰гЂ‚",
                    r7: "$P зљ„ж„їж™ЇжЇе»єз«‹е‡ дёЄеЋ»дё­еїѓеЊ–зљ„й‡‘ићЌеє”з”Ёпј€Defi - Appsпј‰з„¶еђЋејЂеЏ‘е№¶е°†иї™дє›дє§е“ЃиЅ¬еЊ–дёє\n  ж€ђз†џзљ„йЎ№з›®пјЊеўћеЉ  $P з”џжЂЃзі»з»џзљ„д»·еЂјгЂ‚гЂ‚$P йЎ№з›®еЏЉе…¶еЋ»дё­еїѓеЊ–е›ўйџжќҐи‡ЄдёЌеђЊ\n  зљ„е›Ѕе®¶пјЊж‰їиЇєе€›йЂ дёЂдёЄеЏЇжЊЃз»­зљ„йЂљиї‡ејЂеЏ‘е’Њжћ„е»єе¤љдёЄ зљ„ Defi з”џжЂЃзі»з»џдє§е“ЃпјЊе›ґз»•е…¶е№іеЏ°\n  е№¶дїќиЇЃ Defi йЎ№з›®еє”иЇҐжЇд»Ђд№€зљ„жњЂз»€зњџж­Јд»·еЂјгЂ‚$P жЇдёЂдёЄз¤ѕеЊєй©±еЉЁзљ„еЊєеќ—й“ѕйЎ№з›®ж—ЁењЁ\n  ењЁе…¶еџєзЎЂдёЉжћ„е»єе¤љдёЄ Defi еє”з”ЁзЁ‹еєЏе…·жњ‰е€›йЂ жЂ§е’Њйў и¦†жЂ§еЊєеќ—й“ѕ Defi зљ„е№іеЏ°жѓіжі•пјЊд»ЋиЂЊж€ђ\n  дёєз¬¬дёЂдёЄе‰ЌжІїзљ„ Defi йЎ№з›®гЂ‚",
                    countactUs: "иЃ”зі»ж€‘д»¬",
                    cTitle: "$Pй›†е›ўж•°е­—з»ЏжµЋйў†е†›дјЃдёљгЂ‚и‡ґеЉ›дєЋеЊєеќ—й“ѕйў†еџџзљ„ж ёеїѓжЉЂжњЇзЄЃз ґд»ҐеЏЉеЊєеќ—й“ѕжЉЂжњЇе’Њдє§дёљићЌеђ€пјЊе›ґз»•еЊєеќ—й“ѕDEFIдє§дёљдёЉдё‹жёёпјЊеЏ‘е±•еЊ…ж‹¬дє§дёљеЊєеќ—й“ѕгЂЃж•°е­—иµ„дє§дє¤ж“гЂЃж•°е­—иµ„дє§е®‰е…Ёй’±еЊ…гЂЃж•°е­—з»ЏжµЋз ”з©¶гЂЃеЋ»дё­еїѓеЊ–иЇќз­‰дёљеЉЎпјЊеЅўж€ђе…Ёзђѓж•°е­—з»ЏжµЋдє§дёљз”џжЂЃдЅ“зі»гЂ‚\n\n$PеќљжЊЃи·µиЎЊеЋ»дё­еїѓеЊ–еЊ–з¤ѕеЊєжњЌеЉЎпјЊдёєдёЉз™ѕдёЄе›Ѕе®¶е’Њењ°еЊєзљ„еЌѓдё‡зє§з”Ёж€·жЏђдѕ›е®‰е…ЁгЂЃеЏЇдїЎиµ–зљ„д»·еЂјзЅ‘з»њжњЌеЉЎгЂ‚",
                    officialListing: "е®ж–№еђ€дЅњжњєжћ„",
                    myWallet: "ж€‘зљ„й’±еЊ…",
                    security: "е®‰е…Ё",
                    securityPolicy: "е®‰е…Ёз­–з•Ґ",
                    policy1: "жџҐзњ‹е¦‚дЅ•е®‰е…Ёењ°жЉҐе‘Љж­¤е­е‚Ёеє“зљ„е®‰е…ЁжјЏжґћ",
                    securityAdvisories: "е®‰е…Ёе»єи®®",
                    policy2: "жџҐзњ‹ж­¤е­е‚Ёеє“зљ„е®‰е…Ёе»єи®®",
                    scope: "иЊѓе›ґ",
                    policy3: "жјЏжґћиµЏй‡‘и®Ўе€’зљ„иЊѓе›ґж¶µз›–ж™єиѓЅеђ€зє¦\n  ењЁYFO з”џжЂЃзі»з»џдё­дЅїз”ЁвЂ”вЂ”Solidity ж€–\n  еђ€зє¦ж–‡д»¶е¤№дё­зљ„ж™єиѓЅеђ€зє¦\n  жёґжњ›еЌЏи®®е›ћиґ­зљ„дё»е€†ж”ЇпјЊеЊ…ж‹¬\n  д»Ќз„¶зњ‹е€°жґ»и·ѓдЅїз”Ёзљ„еЋ†еЏІйѓЁзЅІ\n  дёЋ YFI з›ёе…ізљ„д»Ґе¤ЄеќЉдё»зЅ‘пјЊдёЌеЊ…ж‹¬д»»дЅ•\n  д»…з”ЁдєЋжµ‹иЇ•иѓЅеЉ›зљ„еђ€еђЊпј€еЊ…ж‹¬\n  д»…жµ‹иЇ•йѓЁзЅІпј‰гЂ‚",
                    policy4: "жіЁпјљй™¤дёЉиї°еђ€еђЊе¤–зљ„е…¶д»–еђ€еђЊ\n  д»ҐдёЉпјЊеЏЇд»Ґж №жЌ®е…·дЅ“жѓ…е†µиЂѓи™‘пјЊ\n  иЇ·иЃ”зі» YFO ејЂеЏ‘е›ўйџд»ҐиЋ·еЏ–\n  жѕ„жё…гЂ‚",
                    stepVerification: "дё¤ж­ҐйЄЊиЇЃ",
                    authentication: "йЂљиї‡ Google AuthenticatorгЂЃAuthy ж€–д»»дЅ• 2FA еє”з”ЁзЁ‹еєЏеђЇз”Ё 2 е› зґ иє«д»ЅйЄЊиЇЃ ж‰«жЏЏдєЊз»ґз Ѓж€–иѕ“е…Ґиє«д»ЅйЄЊиЇЃе™ЁеЇ†й’Ґ",
                    authenticaorKey: "йЄЊиЇЃе™Ёkey",
                    generate: "з‚№е‡»з”џж€ђ",
                    buy: "иґ­д№°",
                    indicator: "жЊ‡ж ‡",
                    tvl: "жЂ»й”Ѓд»“",
                    apy: "е№ґе€©зЋ‡",
                    lock: "й”Ѓд»“",
                    days: "е¤©",
                    more: "ж›ґе¤љ",
                    daily: "ж—ҐеЊ–е€©зЋ‡",
                    monthly: "жњ€еЊ–е€©зЋ‡",
                    yearly: "е№ґеЊ–е€©зЋ‡",
                    validNumber: "ж— ж•€ж•°е­—",
                    insufficient: "дЅ™йўќдёЌи¶і",
                    stakeAmount: "иґЁжЉјй‡‘йўќ",
                    max: "е…ЁйѓЁ",
                    swap: "е…‘жЌў",
                    price: "д»·ж ј",
                    legalDisclaimer: "е…ЌиґЈеЈ°жЋ",
                    legalText: "жњ¬жќђж–™дё­жЏђдѕ›зљ„дїЎжЃЇдёЌжћ„ж€ђжЉ•иµ„е»єи®®гЂЃиґўеЉЎе»єи®®гЂЃдє¤ж“е»єи®®ж€–д»»дЅ•е…¶д»–з±»ећ‹зљ„е»єи®®гЂ‚жњ¬жќђж–™д»…дѕ›еЏ‚иЂѓпјЊе№¶йќћ (i) жЉ•иµ„ж€–д№°еЌ–д»»дЅ•жќѓз›Љж€–и‚Ўд»Ѕж€–еЏ‚дёЋд»»дЅ•жЉ•иµ„ж€–дє¤ж“з­–з•Ґзљ„и¦Ѓзє¦ж€–и¦Ѓзє¦й‚ЂиЇ·пјЊ(ii)ж—ЁењЁжЏђдѕ›дјљи®ЎгЂЃжі•еѕ‹ж€–зЁЋеЉЎе»єи®®пјЊж€–жЉ•иµ„е»єи®®пјЊж€– (iii) YFO д»ЈеёЃзљ„е®ж–№еЈ°жЋгЂ‚еЇ№дєЋдїЎжЃЇзљ„е‡†зЎ®жЂ§ж€–е®Њж•ґжЂ§ж€–д»»дЅ•ж•°е­—иµ„дє§гЂЃй‡‘ићЌе·Ґе…·ж€–е…¶д»–её‚ењєж€–з»ЏжµЋжЊ‡ж ‡зљ„жњЄжќҐиЎЁзЋ°пјЊдёЌдЅњд»»дЅ•жЋз¤єж€–жљ—з¤єзљ„й™€иї°ж€–дїќиЇЃгЂ‚\n  \nYFO Token е›ўйџдёЌе»єи®®ж‚Ёиґ­д№°гЂЃе‡єе”®ж€–жЊЃжњ‰д»»дЅ•еЉ еЇ†иґ§еёЃгЂ‚ењЁеЃље‡єд»»дЅ•жЉ•иµ„е†іе®љд№‹е‰ЌпјЊиЇ·еЉЎеї…иї›иЎЊе°ЅиЃЊи°ѓжџҐе№¶е’ЁиЇўж‚Ёзљ„иґўеЉЎйЎѕй—®гЂ‚\n  \nиґ­д№° YFOпјЊеЌіиЎЁз¤єж‚ЁеђЊж„Џж‚Ёиґ­д№°зљ„дёЌжЇиЇЃе€ёж€–жЉ•иµ„пјЊе№¶дё”ж‚ЁеђЊж„ЏдЅїе›ўйџе…ЌеЏ—дј¤е®іпјЊе№¶дё”дёЌеЇ№ж‚ЁеЏЇиѓЅж‹›и‡ґзљ„д»»дЅ•жЌџе¤±ж€–зЁЋж¬ѕиґџиґЈгЂ‚ж‚ЁиїеђЊж„Џе›ўйџвЂњжЊ‰еЋџж ·вЂќжЏђдѕ›д»¤з‰ЊпјЊдёЌйњЂи¦ЃжЏђдѕ›д»»дЅ•ж”ЇжЊЃж€–жњЌеЉЎгЂ‚ж‚ЁдёЌеє”жњџжњ› YFO Token еЏЉе…¶е›ўйџжњ‰д»»дЅ•еЅўејЏгЂ‚\n  \nе°Ѕз®Ў YFO жЇз”ЁдєЋз¤ѕдє¤зЅ‘з»њзљ„з¤ѕеЊєй©±еЉЁзљ„еЋ»дё­еїѓеЊ–й‡‘ићЌ (DeFi) д»ЈеёЃпјЊиЂЊдёЌжЇжіЁе†Њж•°е­—иґ§еёЃпјЊдЅ†иЇҐе›ўйџејєзѓ€е»єи®®ж”їеєњз¦Ѓж­ўеЉ еЇ†иґ§еёЃењ°еЊєзљ„е…¬ж°‘дёЌи¦Ѓиґ­д№°е®ѓпјЊе› дёєиЇҐе›ўйџж— жі•зЎ®дїќйЃµе®€ж—ўе®љжі•и§„гЂ‚жџђдє›йў†ењџгЂ‚ењЁиї›иЎЊд»»дЅ•иґ­д№°д№‹е‰ЌпјЊиЇ·еЉЎеї…зЎ®дїќйЃµе®€еЅ“ењ°зљ„жі•еѕ‹е’Њжі•и§„гЂ‚\n  \n$P е›ўйџжЇжќҐи‡Єдё–з•ЊдёЌеђЊењ°еЊєзљ„еЋ»дё­еїѓеЊ–дёЄдєєпјЊд»–д»¬жћ„е»єзљ„еЋ»дё­еїѓеЊ–еє”з”ЁзЁ‹еєЏеЏЇд»ҐйЂ з¦Џдё–з•Ње№¶ж”№е–„е…¶з”џжЂЃзі»з»џгЂ‚\n  \nжњ‰иї™д№€е¤љжќҐи‡ЄдёЄдєєгЂЃе…¬еЏёе’Њжњ‰иѓЅеЉ›зљ„жњєжћ„зљ„з›ґжЋҐж¶€жЃЇпјЊиЇўй—® $P е›ўйџеє”иЇҐжЉ•иµ„д»Ђд№€д»ҐеЏЉдёЌеє”иЇҐжЉ•иµ„д»Ђд№€пјЊж€‘д»¬е…¬ејЂйЂЏжЋпјЊе№¶е°± Defi иµ„дє§зљ„й«йЈЋй™©еђ‘ж€‘д»¬зљ„з¤ѕеЊєжЏђдѕ›е»єи®®пјЊдЅ† YFOйЎ№з›®е°†жђ­е»єдјиґЁе№іеЏ°гЂ‚\n  \nз”±дєЋи¶ЉжќҐи¶Ље¤љзљ„дєєеђ‘е›ўйџиЇўй—®иґўеЉЎе»єи®®пјЊYFO е›ўйџдёЌеђ‘д»»дЅ•дёЄдєєжЏђдѕ›иґўеЉЎжЊ‡еЇјж€–е»єи®®пјЊжЉ•иµ„ DeFi иµ„дє§еЏЇиѓЅдјљеЇји‡ґж‚Ёе¤±еЋ»жЉ•иµ„гЂ‚\n  \nжЉ•иµ„ж—¶е§‹з»€еЃљи‡Єе·±зљ„з ”з©¶гЂ‚"
                }, Franch: {
                    yfione: "$P",
                    welcomeV2: "Yield Farming 2.0",
                    welcomeText: "RГ©duire les risques grГўce Г  des stratГ©gies agricoles diversifiГ©es",
                    launchApp: "Claim & Swap",
                    whitePaper: "papier blanc",
                    audit: "Audit par Dpanquan.com",
                    copyright: "2021 Copyright $P.",
                    reserved: "Tous droits rГ©servГ©s !",
                    dashboard: "Tableau de bord",
                    vaults: "Vaults",
                    earn: "Gagner",
                    lending: "PrГЄt",
                    statistics: "Statistiques",
                    governance: "Gouvernance",
                    wiki: "Wiki",
                    faqs: "FAQ",
                    settings: "ParamГЁtres",
                    nft: "NFT",
                    brige: "Pont",
                    connectWallet: "Connecter le portefeuille",
                    disconnect: "DГ©connecter le portefeuille",
                    search: "Chercher...",
                    earnings: "Vos revenus",
                    pendingHarvest: "En attente de rГ©colte",
                    harvest: "RГ©colte",
                    tvlText: "Valeur totale verrouillГ©e",
                    browserview: "Vue du navigateur",
                    availableVaults: "Coffres disponibles",
                    sortBy: "Trier par",
                    hideBalances: "Masquer les soldes nuls",
                    pairAssets: "Pair Asset",
                    get: "obtenir",
                    back: "retour",
                    totalSupply: "Approvisionnement total",
                    rewards: "RГ©compenses",
                    yfoPrice: "prix actuel $P",
                    totalBorrowed: "Total empruntГ©",
                    circulation: "Circulation",
                    marketCap: "Market cap",
                    provideLiquidity: "Fournir de la liquiditГ©",
                    select: "SГ©lectionner",
                    "collatГ©ral": "CollatГ©ral",
                    pledge: "Engagement",
                    exitPledge: "Exit Pledge",
                    redeem: "Tout Г©changer",
                    retrieve: "RГ©cupГ©rer",
                    repay: "Rembourser",
                    repayAll: "RepayAll",
                    supply: "Approvisionnement",
                    balance: "Equilibre",
                    borrow: "Emprunter",
                    limit: "Limite",
                    trading: "Trading",
                    approve: "approuver",
                    claim: "RГ©clamer",
                    unable: "Impossible",
                    withdraw: "Retirer",
                    withdrawAll: "Retirer tout",
                    exit: "Quitter",
                    stake: "mise",
                    deposit: "DГ©pГґt",
                    depositAll: "DГ©pГґt tout",
                    deposited: "DГ©posГ©",
                    borrowed: "EmpruntГ©",
                    available: "disponible",
                    approveFirst: "Veuillez approuver avant le dГ©pГґt",
                    loading: "Chargement...",
                    netTip: "Ethereum mainnet, veuillez basculer dans votre portefeuille",
                    netDelayTip: "Le rГ©seau principal Ethereum n'est pas encore ouvert",
                    feeTip: "Le retrait facturera des frais de gestion de 0,3В % du bГ©nГ©fice, aucun dommage pour le mandant",
                    note: "Remarque",
                    assets: "Actifs",
                    apyCalculations: "Calculs APY",
                    farmApr: "Farm APR",
                    lpContract: "contrat LP",
                    farmContract: "Contrat agricole",
                    vaultContract: "Contrat Vault",
                    myAddress: "Mon adresse",
                    totalDepositIn: "Total dГ©posГ©",
                    currentEarning: "Gagner actuellement",
                    all: "tous",
                    stablecoins: "Stablecoins",
                    others: "Autres",
                    market: "MarchГ©",
                    depositMarket: "MarchГ© des dГ©pГґts",
                    depositApy: "DГ©pГґt APY",
                    borrowMarket: "marchГ© des emprunts",
                    borrowApy: "Emprunter APY",
                    leftBorrow: "Restant prГЄtable",
                    borrowAvailiable: "Emprunter disponible",
                    priceSource: "Source du prix",
                    yourDeposit: "Votre acompte",
                    yourLoan: "Votre prГЄt",
                    usedRatio: "Ratio utilisГ©",
                    enterSupplyAmount: "Entrez le montant du dГ©pГґt",
                    enterRedeemAmount: "Entrez le montant (principal)",
                    enterRepayAmount: "Entrez le montant du remboursement (principal)",
                    enterBorrowAmount: "Entrez le montant du prГЄt (max 80%)",
                    poolVolume: "Balance de la piscine",
                    marketDetails: "DГ©tails du marchГ©",
                    depositAmount: "Montant du dГ©pГґt",
                    borrowAmount: "Montant de l'emprunt",
                    depositLimit: "Limite de dГ©pГґt",
                    borrowLimit: "Limite d'emprunt",
                    reserveRatio: "Ratio de rГ©serve",
                    exchangeRate: "Taux de change",
                    liquidationAmende: "Amende de liquidation",
                    maxPledgeRate: "Taux d'engagement maximum",
                    liquidationFine: "Utilisation des fonds",
                    marketLoanable: "ExcГ©dent de marchГ© prГЄtable",
                    totalBorrow: "total de l'emprunt",
                    totalDeposit: "DГ©pГґt total",
                    operation: "OpГ©ration",
                    staked: "JalonnГ©",
                    transaction: "OpГ©ration",
                    pending: "En attente...",
                    confirm: "Confirmer",
                    confirming: "Confirmation",
                    confirmed: "ConfirmГ©",
                    cancel: "Annuler",
                    canceled: "AnnulГ©",
                    success: "Transaction rГ©ussie",
                    failed: "La transaction a Г©chouГ©",
                    txFailed: "Trasancton a Г©chouГ©",
                    copied: "CopiГ©",
                    computePower: "Puissance de calcul en temps rГ©el et paramГЁtres de donnГ©es Token",
                    aboutWiki: "PrГ©sentation de l'information YFO",
                    aboutDex: "La vision d'$P est de crГ©er plusieurs applications financiГЁres dГ©centralisГ©es (Defi - Apps), puis de dГ©velopper ces produits en projets Г  part entiГЁre, augmentant ainsi la valeur de l'Г©cosystГЁme $P. Avec le tollГ© de plusieurs produits financiers dГ©centralisГ©s (Defi) n'ayant pas de cas d'utilisation rГ©els et de mГ©thodes d'utilisation simples, l'utilisation du produit a Г©tГ© difficile pour les utilisateurs de Defi, en particulier parce qu'elle nГ©cessite une vaste comprГ©hension de la blockchain Ethereum. Un autre problГЁme courant est la fausse valeur que de nombreux projets Defi proposent en crГ©ant de simples sites Web d'Г©change, puis en arrГЄtant le dГ©veloppement ultГ©rieur. Cela donne l'impression que l'Г©change Defi est tout ce qu'il y a Г  offrir, mais ce n'est pas le cas. Le projet $P et son Г©quipe dГ©centralisГ©e de diffГ©rents pays, promet de crГ©er un Г©cosystГЁme durable en dГ©veloppant et en construisant plusieurs produits Defi autour de sa plateforme et garantit la vГ©ritable valeur ultime de ce que devrait ГЄtre un projet Defi. $P est un projet de blockchain axГ© sur la communautГ© qui vise Г  crГ©er plusieurs applications Defi en plus de ses plate-forme avec des idГ©es Defi blockchain crГ©atives et perturbatrices, devenant ainsi le premier projet Defi de pointe Г  imiter.\n  ",
                    aboutApp: "$P envisage un Г©cosystГЁme de plusieurs applications Defi (Defi DApps) construits sur Ethereum pour une utilisation Г  la fois par l'Г©quipe $P du projet $P et par la communautГ© dГ©centralisГ©e des utilisateurs de produits $P. Cela dit, $P Finance est un projet Defi pilotГ© par la communautГ©, orchestrГ© pour crГ©er des produits dГ©centralisГ©s, dans le but de produire de vГ©ritables valeurs Defi pour amГ©liorer l'Г©cosystГЁme $P pour la communautГ© et ses utilisateurs.",
                    aboutBasis: "$P se consacre Г  produire systГ©matiquement de nouveaux produits Defi avec l'Г©quipe agissant comme une Г©quipe ad hoc qui aidera Г  dГ©velopper, commercialiser et lancer ces produits Defi pour aider Г  dГ©velopper sa biosphГЁre tout en offrant simultanГ©ment des gains souhaitables Г  la communautГ©, au projet et aux utilisateurs.",
                    aboutMechanism: "$P peut Г©galement ГЄtre dГ©crit comme un capital-risque dГ©centralisГ© (DVC) qui renforce un Г©cosystГЁme financier dГ©centralisГ© sans intГ©rГЄt en crГ©ant des produits Defi dans lesquels sa communautГ© a investi dans le but de distribuer les revenus sous forme de parts de bГ©nГ©fices (rГ©compenses) aux parties prenantes.",
                    aboutCommunity: "L'Г©cosystГЁme $P abritera une variГ©tГ© de produits financiers dГ©centralisГ©s uniques. Les produits $P seront liГ©s Г  son jeton, le jeton YFONE, dans le but de recrГ©er le vrai sens de la finance dГ©centralisГ©e.",
                    aboutDefi: "Les produits $P seront liГ©s Г  son jeton, le jeton YFONE, dans le but de recrГ©er le vrai sens de la finance dГ©centralisГ©e.\nLe cas d'utilisation principal du jeton YFONE sera le seul jeton de gouvernance pour chaque produit qui donnera aux dГ©tenteurs un droit sur les revenus gГ©nГ©rГ©s par ces produits.\nCe sera une plate-forme pour le jalonnement des jetons YFONE pendant que l'Г©quipe $P construira le marchГ© et, par la suite, les dГ©tenteurs bГ©nГ©ficieront Г©normГ©ment du simple fait de dГ©tenir le jeton. Imaginez plus de 1000 applications dГ©centralisГ©es liГ©es Г  un Г©cosystГЁme en forgeant avec des partenaires et en construisant Г  partir de zГ©ro, tout est intГ©grГ© Г  YFO Token. Cet Г©cosystГЁme sera extrГЄmement vaste et ne cessera de croГ®tre. C'est un systГЁme complГЁtement dГ©centralisГ©, et il ne cesse de croГ®tre, c'est le vrai sens de Defi.\n  ",
                    aboutVaults: "Le pool de mitrailleuses dГ©termine la piГЁce la plus rentable en fonction du taux de hachage, de la difficultГ© de minage et du prix actuel de la plateforme de trading. C'est diffГ©rent des pools miniers ordinaires qui ne peuvent extraire qu'une seule piГЁce. AprГЁs qu'une piГЁce ait Г©tГ© extraite pendant une longue pГ©riode, la difficultГ© augmentera et le pool de minage passera Г  une autre piГЁce. La plateforme YFO ajoutera des pools de minage en temps rГ©el en fonction des pools de minage qui apparaissent sur le marchГ©, afin d'obtenir le profit le plus Г©levГ©. Et c'est principalement grГўce Г  la fonction automatique du contrat de rГ©investir toutes les demi-heures pour obtenir le profit le plus Г©levГ©.",
                    aboutLending: "Dans le monde DeFi, le systГЁme de prГЄt dГ©centralisГ© est une piste extrГЄmement importante et le systГЁme de pierre angulaire de l'ensemble du systГЁme DeFi. Il peut simuler le systГЁme financier dans le monde rГ©el, comprendre les besoins financiers des diffГ©rents utilisateurs et fournir aux utilisateurs un financement mutuel. La plateforme; il peut prendre en charge le prГЄt de tous les actifs cryptГ©s qui rГ©pondent Г  la norme de jeton d'homogГ©nГ©isation sans coГ»t marginal, et peut automatiquement calculer et ajuster le taux de prГЄt du marchГ© en fonction de l'offre et de la demande du marchГ©. Par consГ©quent, l'Г©cosystГЁme YFO remplit Г©galement des fonctions importantes dans la version V2. Les jetons d'auto-soins de la plate-forme dans les prГЄts sont les actuels YFO et OBS.",
                    aboutText: "La vision d'$P est de crГ©er plusieurs applications financiГЁres dГ©centralisГ©es (Defi - Apps), puis de dГ©velopper ces produits en projets Г  part entiГЁre, augmentant ainsi la valeur de l'Г©cosystГЁme $P. Avec le tollГ© de plusieurs produits financiers dГ©centralisГ©s (Defi) n'ayant pas de cas d'utilisation rГ©els et de mГ©thodes d'utilisation simples, l'utilisation du produit a Г©tГ© difficile pour les utilisateurs de Defi, en particulier parce qu'elle nГ©cessite une vaste comprГ©hension de la blockchain Ethereum. Un autre problГЁme courant est la fausse valeur que de nombreux projets Defi proposent en crГ©ant de simples sites Web d'Г©change, puis en arrГЄtant le dГ©veloppement ultГ©rieur. Cela donne l'impression que l'Г©change Defi est tout ce qu'il y a Г  offrir, mais ce n'est pas le cas. Le projet $P et son Г©quipe dГ©centralisГ©e de diffГ©rents pays, promet de crГ©er un Г©cosystГЁme durable en dГ©veloppant et en construisant plusieurs produits Defi autour de sa plateforme et garantit la vГ©ritable valeur ultime de ce que devrait ГЄtre un projet Defi. $P est un projet de blockchain axГ© sur la communautГ© qui vise Г  crГ©er plusieurs applications Defi au-dessus de sa plate-forme avec des idГ©es Defi de blockchain crГ©atives et perturbatrices, devenant ainsi le premier projet Defi de pointe Г  imiter.",
                    aboutECO: "$P envisage un Г©cosystГЁme de plusieurs applications Defi (Defi DApps) construits sur Ethereum pour une utilisation Г  la fois par l'Г©quipe $P du projet $P et par la communautГ© dГ©centralisГ©e des utilisateurs de produits $P. Cela dit, $P Finance est un projet Defi pilotГ© par la communautГ©, orchestrГ© pour crГ©er des produits dГ©centralisГ©s, dans le but de produire de vГ©ritables valeurs Defi pour amГ©liorer l'Г©cosystГЁme $P pour la communautГ© et ses utilisateurs. $P se consacre Г  produire systГ©matiquement de nouveaux produits Defi avec l'Г©quipe agissant comme une Г©quipe ad hoc qui aidera Г  dГ©velopper, commercialiser et lancer ces produits Defi pour aider Г  dГ©velopper sa biosphГЁre tout en offrant simultanГ©ment des gains souhaitables Г  la communautГ©, au projet et aux utilisateurs. $P peut Г©galement ГЄtre dГ©crit comme un capital-risque dГ©centralisГ© (DVC) qui renforce un Г©cosystГЁme financier dГ©centralisГ© sans intГ©rГЄt en crГ©ant le produit Defi",
                    overview: "AperГ§u",
                    w1: "Que sont les coffres-forts ?",
                    w2: "PrГЄts dГ©centralisГ©s YFO ?",
                    w3: "De quelles compГ©tences ai-je besoin pour rejoindre votre Г©quipe pour contribuer Г  ce grand projet ?",
                    w4: "Quel type de crypto-monnaie $P accepte-t-il actuellement ?",
                    w5: "Comment puis-je investir dans $P et en tirer profit ?",
                    w6: "Pourquoi la version V2 ne peut utiliser que la chaГ®ne Г©cologique Binance ?",
                    w7: "Que signifie $P ?",
                    r1: "Le pool de mitrailleuses consiste Г  extraire diffГ©rentes devises avec le mГЄme algorithme, en fonction du niveau de revenus miniers en temps rГ©el, en basculant automatiquement la puissance de calcul vers une devise Г  plus haut profit pour l'exploitation miniГЁre, et sa valeur est crГ©Г©e pour les utilisateurs Des rendements plus Г©levГ©s que extraction de monnaie unique. La raison pour laquelle il porte le nom de \"pool de mitrailleuses\" est que ce genre d'opГ©ration est comme tirer avec une mitrailleuse, en changeant constamment.",
                    r11: "Selon les caractГ©ristiques du pool de mitrailleuses, le fonctionnement du pool de mitrailleuses consiste Г  concentrer la puissance de calcul dans un pool minier. Il ne prГ©cise pas quelle piГЁce miner, mais recherche directement plusieurs projets dans le mГЄme algorithme de minage. Sur quel projet la puissance de calcul est basculГ©e pour le minage, si les revenus de ce projet baissent, il sera basculГ© sur un autre projet pour obtenir le meilleur revenu au final.",
                    r12: "L'avantage du pool de mitrailleuses maximise le revenu de l'utilisateur : le revenu est au centre de l'attention de chaque investisseur. La raison pour laquelle la plupart des gens choisissent d'investir dans des projets DeFi est que leurs rendements sont relativement Г©levГ©s et que le pool de mitrailleuses DeFi peut nous aider Г  maximiser les revenus miniers. En effet, la caractГ©ristique du pool de mitrailleuses DeFi est de transfГ©rer des fonds vers des projets DeFi Г  plus haut rendement pour l'extraction de liquide en fonction du niveau de revenu minier en temps rГ©el, offrant Г  nos investisseurs des revenus miniers plus Г©levГ©s.",
                    r13: "Le pool de mitrailleuses DeFi de la plate-forme YFO peut non seulement augmenter nos revenus grГўce Г  la commutation en temps rГ©el, mais Г©galement introduire une rГЁgle d'intГ©rГЄt composГ© d'une demi-heure pour utiliser efficacement les fonds afin de maximiser nos revenus. (Les intГ©rГЄts composГ©s horaires sont calculГ©s Г  une demi-heure. Notre capital d'investissement et les intГ©rГЄts pour chaque demi-heure seront inclus dans le capital d'investissement de l'heure suivante, et nous pouvons profiter de l'intГ©rГЄt composГ© toutes les demi-heures.)",
                    r14: "Projets sГ©lectionnГ©s : Il existe une gamme Г©blouissante de projets d'extraction de liquide disponibles sur le marchГ©, et la partie la plus difficile pour nos utilisateurs est de choisir le projet. Il faut beaucoup de temps et d'Г©nergie pour choisir un projet sГ»r, fiable et trГЁs rentable. De plus, en raison de l'Г©volution rapide du marchГ©, il est facile d'arriver que lorsque nous avons Г©tudiГ© un nouveau projet et que nous sommes prГЄts Г  dГ©marrer, les fonds ont Г©tГ© transfГ©rГ©s au prochain nouveau projet avec des rendements plus Г©levГ©s, ce qui entraГ®nera un certain dГ©calage.",
                    r15: "L'avantage du pool de mitrailleuses est qu'il peut fournir une fonction de filtrage et de configuration des actifs. Chaque projet Г©valuera sa sГ©curitГ© et ses avantages dans une certaine mesure. La plate-forme YFO a des professionnels pour mener des recherches sur divers projets, sГ©lectionner des projets DeFi Г  haut rendement et ajuster les positions en temps rГ©el pour nous efforcer de tirer le maximum de profit possible pour nous.",
                    r16: "En raison de l'appel constant du contrat, la plate-forme facturera des frais de 0,3% du chiffre d'affaires. Le but est que chaque Г©tape de l'exploitation miniГЁre DeFi nГ©cessite 1-2 appels de contrat, et les frais sont maintenant de quelques dollars Г  des dizaines. Le dollar varie et l'ensemble du contrat est appelГ© une fois toutes les demi-heures. En plus des frais de GAS, le solde sera utilisГ© pour racheter des jetons YFO et OBS de temps Г  autre.",
                    r2: "En fournissant des jetons de certificat de dГ©pГґt, le mГЄme actif est transfГ©rГ© et rГ©utilisГ© dans diffГ©rents protocoles DeFi, amГ©liorant ainsi plusieurs fois l'efficacitГ© de l'utilisation des fonds sur le marchГ© financierВ ; il peut Г©galement ГЄtre flexible avec d'autres combinaisons de protocoles DeFi pour rГ©aliser le fonctionnement automatisГ© de transactions financiГЁres multicouches, multiniveaux, complexes et imbriquГ©es.",
                    r21: "ГЂ l'heure actuelle, toutes sortes de plates-formes de prГЄt dans DeFi sont essentiellement sur le mode des prГЄts hypothГ©caires, et elles sont plus enclines au modГЁle de prГЄteur sur gages, transformant diverses monnaies numГ©riques en biens Г  valeur fixe, et les biens d'une valeur hypothГ©caire de 100 obtiennent un prix de 75 Monnaie liquide, l'acte d'obtenir des devises grГўce Г  une garantie en devises semble trГЁs stupide, mais le taux d'intГ©rГЄt hypothГ©caire Г©levГ© et le taux de retour Г©norme au dГ©but du marchГ© DeFi attirent des fonds de marchГ© plus Г©levГ©s.",
                    r22: "DeFi rГ©sout actuellement les hypothГЁques via des swaps et des Г©changes, et rГ©sout l'effet de levier via le systГЁme de marge, et rГ©alise enfin une opГ©ration similaire aux dГ©rivГ©s de crГ©dit. Prenez Bitcoin et Ethereum comme exemples, sur la chaГ®ne Binance. Par exemple, si vous souhaitez mettre en gage Bitcoin en Г©change d'Ethereum, vous pouvez : Verrouiller Bitcoin Г  une adresse spГ©cifique. ГЂ ce stade, un BTC reprГ©sentant ce jeton Bitcoin sera gГ©nГ©rГ© sur Binance Chain, puis vous pourrez l'utiliser sur Binance Chain Le contrat intelligent hypothГЁque ce BTC et gГ©nГЁre le jeton correspondant ; achГЁte ensuite une certaine quantitГ© d'ETH avec le Token, puis libГЁre le collatГ©ral BTC correspondant Г  ces ETH, et la transaction se termine. L'ensemble du processus est effectuГ© par des contrats intelligents sans participation humaine. Et si vous ne le remboursez pas aprГЁs l'Г©chГ©ance, votre Bitcoin garanti disparaГ®tra. Le contrat intelligent sera exГ©cutГ© Г  son expiration et le bitcoin que j'ai promis sera soumis Г  un traitement par dГ©faut. Cela peut permettre d'obtenir des hypothГЁques Г©gales, mais le charme de Defi rГ©side dans la croissance, une sur-hypothГЁque est donc nГ©cessaire. Autrement dit, j'espГЁre pouvoir hypothГ©quer 1 Bitcoin, emprunter temporairement 2 voire 10 Bitcoins pour la spГ©culation.",
                    r3: "$P est une Г©quipe mondiale, tout le monde peut rejoindre la communautГ© $P, dans la communautГ© nous espГ©rons plus\n  Les gens rejoignent la famille $P. Lorsque vous dГ©tenez un Token YFO, mГЄme si vous rejoignez notre Г©quipe, bien sГ»r\n  Nous avons besoin de plus de personnes pour nous rejoindre, afin que nous puissions servir d'opГ©rateurs communautaires, de personnel marketing, de personnel de retour technique, etc.\n  RГґle, si vous avez une certaine capacitГ©, merci de contacter notre community manager.",
                    r4: "Accepte actuellement les devises principales ETH, BNB, USDT, etc. et YFO, les jetons OBS",
                    r5: "La plate-forme fournit des pools de mitrailleuses (coffres), des prГЄts, des pools de devises uniques et d'autres mГ©thodes, obligeant les utilisateurs Г  suivre eux-mГЄmes le jeton requis sur le site Web.\n  Kind obtiendra un certain profit.",
                    r6: "Le parc de mitrailleuses est rГ©investi toutes les 30 minutes, et la taxe sur l'essence est trop Г©levГ©e. Si le dГ©pГґt de garantie n'est pas suffisant, les fonds de l'utilisateur seront perdus. Par consГ©quent, nous n'avons lancГ© la chaГ®ne Г©cologique BSC que dans une premiГЁre phase. La version Ethereum nГ©cessite que la version BSC de la version YFO-V2 de la version TVL soit supГ©rieure Г  5 millions de dollars amГ©ricains avant l'ouverture de la version Ethereum. Lorsque le rГ©investissement Г  une heure fixe, lorsque le montant atteint un certain montant, l'utilisateur peut ГЄtre assurГ© d'ГЄtre sur la plate-forme. Le montant du rГ©investissement obtiendra le plus de profit. Par consГ©quent, dans la premiГЁre phase, nous ouvrons uniquement la zone de produits de la chaГ®ne Г©cologique Binance (bien sГ»r, elle a Г©tГ© dГ©veloppГ©e et attend toujours des mises Г  jour. Le code d'Ethereum a Г©tГ© mis Г  jour sur Github).",
                    r7: "La vision d'$P est de crГ©er plusieurs applications financiГЁres dГ©centralisГ©es (Defi-Apps), puis de dГ©velopper et de transformer ces produits en\n  Les projets matures augmentent la valeur de l'Г©cosystГЁme $P. . Le projet $P et son Г©quipe dГ©centralisГ©e sont issus de diffГ©rents\n  Pays, engagГ©s Г  crГ©er un produit Г©cosystГ©mique Defi durable grГўce au dГ©veloppement et Г  la construction de plusieurs\n  Et garantir la vГ©ritable valeur ultime de ce que devrait ГЄtre le projet Defi. $P est un projet de blockchain communautaire conГ§u pour\n  Construisez plusieurs applications Defi sur la base de l'idГ©e crГ©ative et perturbatrice de la plate-forme Defi blockchain, devenant ainsi\n  C'est le premier projet frontalier DГ©fi.",
                    countactUs: "Nous contacter",
                    cTitle: "Le Groupe $P est une entreprise leader dans l'Г©conomie numГ©rique. EngagГ© dans les avancГ©es technologiques de base dans le domaine de la blockchain et l'intГ©gration de la technologie et de l'industrie de la blockchain, en se concentrant sur l'amont et l'aval de l'industrie de la blockchain DEFI, le dГ©veloppement comprend la blockchain industrielle, les transactions d'actifs numГ©riques, les portefeuilles sГ©curisГ©s d'actifs numГ©riques, la recherche Г©conomique numГ©rique et dГ©centralisation Huahua et d'autres entreprises forment un Г©cosystГЁme industriel mondial de l'Г©conomie numГ©rique.\n\n$P adhГЁre Г  la pratique des services communautaires dГ©centralisГ©s, fournissant des services rГ©seau sГ»rs et fiables Г  des dizaines de millions d'utilisateurs dans des centaines de pays et de rГ©gions.",
                    officialListing: "Liste officielle",
                    myWallet: "Mon portefeuille",
                    security: "SГ©curitГ©",
                    securityPolicy: "Politique de sГ©curitГ©",
                    policy1: "DГ©couvrez comment signaler en toute sГ©curitГ© les vulnГ©rabilitГ©s de sГ©curitГ© pour ce rГ©fГ©rentiel",
                    securityAdvisories: "Avis de sГ©curitГ©",
                    policy2: "Afficher les avis de sГ©curitГ© pour ce rГ©fГ©rentiel",
                    scope: "PortГ©",
                    policy3: "La portГ©e du programme Bug Bounty s'Г©tend aux contrats intelligents\n  utilisГ© dans l'Г©cosystГЁme YFO - la SoliditГ© ou\n  contrats intelligents dans le dossier des contrats du\n  branche principale du repo du protocole YFO, y compris\n  dГ©ploiements historiques qui voient toujours une utilisation active sur\n  Ethereum Mainnet associГ© Г  YFI, et Г  l'exclusion de tout\n  contrats utilisГ©s Г  des fins de test uniquement (y compris\n  dГ©ploiements de test uniquement).",
                    policy4: "Remarque : Autres contrats, en dehors de ceux mentionnГ©s\n  ci-dessus, pourraient ГЄtre examinГ©s au cas par cas,\n  s'il vous plaГ®t, contactez l'Г©quipe de dГ©veloppement YFO pour\n  clarification.",
                    stepVerification: "VГ©rification en 2 Г©tapes",
                    authentication: "Activez l'authentification Г  2 facteurs via Google Authenticator, Authy ou n'importe quelle application 2FA Scannez le code QR ou entrez la clГ© d'authentification",
                    authenticaorKey: "ClГ© d'authentification",
                    generate: "PRODUIRE",
                    buy: "Acheter",
                    indicator: "indicateur",
                    tvl: "TVL",
                    apy: "APY",
                    unlocked: "DГ©bloquГ©",
                    lock: "Serrure pour",
                    days: "JournГ©es",
                    more: "Suite",
                    daily: "Rendement journalier",
                    monthly: "Rendement mensuel",
                    yearly: "Rendement annuel",
                    validNumber: "NumГ©ro invalide",
                    insufficient: "Solde insuffisant",
                    stakeAmount: "Montant misГ©",
                    max: "Max",
                    swap: "Г‰changer",
                    price: "Prix",
                    legalDisclaimer: "Avertissement lГ©gal",
                    legalText: '\nThe information provided in this material does not constitute investment advice, financial advice, trading advice, or any other sort of advice. You should not treat any of the materialвЂ™s content as such. This material is for informational purposes only and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy, (ii) intended to provide accounting, legal, or tax advice, or investment recommendations, or (iii) an official statement of YFO Token. No representation or warranty is made, expressed or implied, with respect to the accuracy or completeness of the information or to the future performance of any digital asset, financial instrument, or other market or economic measure. \n  \nThe YFO Token team does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your due diligence and consult your financial advisor before making any investment decisions. \n  \nBy purchasing YFO, you agree that you are not purchasing a security or investment, and you agree to hold the team harmless and not liable for any losses or taxes you may incur. You also agree that the team is presenting the token "as is" and is not required to provide any support or services. You should have no expectation of any form from YFO Token and its team. \n  \nAlthough YFO is a community-driven decentralized finance (DeFi) token for social networking and not a registered digital currency, the team strongly recommends that citizens in areas with government bans on cryptocurrencies do not purchase it because the team cannot ensure compliance with established regulations within certain territories. Always make sure that you comply with your local laws and regulations before you make any purchase.\n  \nThe $P team are decentralized individuals from different parts of the world building decentralized applications that can benefit the world and also improve its ecosystem.\n  \nWith so many Direct messages from individuals, companies and able bodies asking The $P Team on what to invest on and on what they shouldn\'t invest on, we are open and transparent and advice our community on the high risk of Defi assets  but the YFO projects will build quality platform.\n  \nDue to More people asking about financial advices from the team, the YFO team does not provide financial guidance or advice to any individual, and by investing in DeFi asset you can risk losing your investments. \n  \nAlways do your own research when investing.'
                }, "ж—Ґжњ¬иЄћ": {
                    $P: "$P",
                    welcomeV2: "YFOгѓ•г‚Ўгѓјгѓ 2.0",
                    welcomeText: "дЅЋгѓЄг‚№г‚ЇгЃ§е¤љж§гЃЄгѓћг‚¤гѓ‹гѓіг‚°ж€¦з•Ґ",
                    launchApp: "Claim & Swap",
                    whitePaper: "з™Ѕж›ё",
                    audit: "Dpanquan.comз›Јжџ»",
                    copyright: "2021 Copyright $PгЂ‚",
                    reserved: "и‘—дЅњжЁ©дє€зґ„жё€гЃїпјЃ",
                    dashboard: "гѓ‘гѓЌгѓ«",
                    vaults: "ж©џй–ўйЉѓгѓ—гѓјгѓ«",
                    earn: "гѓћг‚¤гѓ‹гѓіг‚°",
                    lending: "иІёгЃ—е‡єгЃ—",
                    statistics: "зµ±иЁ€",
                    governance: "г‚¬гѓђгѓЉгѓіг‚№",
                    wiki: "г‚¦г‚Јг‚­",
                    faqs: "г‚€гЃЏгЃ‚г‚‹иіЄе•Џ",
                    settings: "иЁ­е®љ",
                    connectWallet: "г‚¦г‚©гѓ¬гѓѓгѓ€гЃ®жЋҐз¶љ",
                    disconnect: "е€‡ж–­",
                    search: "ж¤њзґў...",
                    earnings: "гЃ‚гЃЄгЃџгЃ®еЏЋз›Љ",
                    pendingHarvest: "дїќз•™дё­гЃ®е€©з›Љ",
                    harvest: "еЏЋз©«",
                    tvlText: "еђ€иЁ€",
                    yfoPrice: "зЏѕењЁгЃ®YFOдѕЎж ј",
                    totalBorrowed: "Total Borrowed",
                    circulation: "еѕЄз’°й‡Џ",
                    marketCap: "ж™‚дѕЎз·ЏйЎЌ",
                    provideLiquidity: "жµЃе‹•жЂ§гЃ®жЏђдѕ›",
                    browserview: "иЎЁз¤є",
                    availableVaults: "AvailableMachine Gun Pool",
                    sortBy: "sort",
                    hideBalances: "0еЂ‹гЃ®ж®‹й«г‚ўг‚¤гѓ†гѓ г‚’йќћиЎЁз¤єгЃ«гЃ™г‚‹",
                    pairAssets: "гѓ€гѓ¬гѓјгѓ‡г‚Јгѓіг‚°гѓљг‚ў",
                    get: "Get",
                    back: "ж€»г‚‹",
                    select: "йЃёжЉћ",
                    collateral: "ж‹…дїќ",
                    pledge: "иЄ“зґ„",
                    exitPledge: "Exit Pledge",
                    redeem: "е„џй‚„пј€е…ѓжњ¬+е€©жЃЇпј‰",
                    retrieve: "гѓ—гѓЄгѓіг‚·гѓ‘гѓ«г‚’еЏ–еѕ—",
                    repay: "иї”жё€",
                    repayAll: "гЃ™гЃ№гЃ¦иї”жё€",
                    supply: "й ђй‡‘",
                    borrow: "еЂџг‚Љг‚‹",
                    limit: "е€¶й™ђ",
                    balance: "гѓђгѓ©гѓіг‚№",
                    totalSupply: "з·Џдѕ›зµ¦й‡Џ",
                    rewards: "г‚ўгѓЇгѓјгѓ‰",
                    trading: "еЏ–еј•",
                    approve: "ж‰їиЄЌ",
                    claim: "ж’¤йЂЂе ±й…¬",
                    unable: "еЃњж­ў",
                    exit: "зµ‚дє†",
                    withdraw: "ж’¤е›ћ",
                    withdrawAll: "гЃ™гЃ№гЃ¦ж’¤е›ћ",
                    stake: "иЄ“зґ„",
                    deposit: "й ђй‡‘",
                    depositAll: "гЃ™гЃ№гЃ¦гѓ‡гѓќг‚ёгѓѓгѓ€",
                    deposited: "еЇ„иЁ—",
                    borrowed: "еЂџз”Ё",
                    available: "е€©з”ЁеЏЇиѓЅ",
                    approveFirst: "гѓЄгѓћг‚¤гѓігѓЂгѓј: е…Ґй‡‘гЃ™г‚‹е‰ЌгЃ«ж‰їиЄЌгЃ—гЃ¦гЃЏгЃ гЃ•гЃ„",
                    loading: "иЄ­гЃїиѕјгЃїдё­...",
                    netTip: "г‚¤гѓјг‚µгѓЄг‚ўгѓ гѓЎг‚¤гѓігѓЌгѓѓгѓ€,г‚¦г‚©гѓ¬гѓѓгѓ€гЃ«е€‡г‚Љж›їгЃ€гЃ¦гЃЏгЃ гЃ•гЃ„",
                    netDelayTip: "г‚¤гѓјг‚µгѓЄг‚ўгѓ гѓЎг‚¤гѓігѓЌгѓѓгѓ€гЃЇгЃѕгЃ й–‹гЃ„гЃ¦гЃ„гЃѕгЃ›г‚“",
                    feeTip: "еј•гЃЌе‡єгЃ—гЃЇе€©з›ЉгЃ®0.3пј…гЃ®ж‰‹ж•°ж–™г‚’и«‹ж±‚гЃ—,е…ѓжњ¬гЃ«жђЌе®іг‚’дёЋгЃ€г‚‹гЃ“гЃЁгЃЇгЃ‚г‚ЉгЃѕгЃ›г‚“",
                    note: "гѓ—гѓ­гѓігѓ—гѓ€",
                    assets: "иі‡з”Ј",
                    apyCalculations: "е№ґе€©иЁ€з®—",
                    farmApr: "иѕІжҐ­еЏЋй‡Џ",
                    lpContract: "LPеҐ‘зґ„",
                    all: "гЃ™гЃ№гЃ¦",
                    stablecoins: "г‚№гѓ†гѓјгѓ–гѓ«г‚іг‚¤гѓі",
                    others: "гЃќгЃ®д»–",
                    market: "её‚е ґ",
                    depositMarket: "й ђй‡‘её‚е ґ",
                    depositApy: "е№ґй–“й ђй‡‘й‡‘е€©",
                    borrowMarket: "её‚е ґг‚’еЂџг‚Љг‚‹",
                    leftBorrow: "ж®‹г‚ЉгЃ®еЂџе…ҐеЏЇиѓЅйЎЌ",
                    borrowApy: "е№ґе€©г‚’еЂџг‚Љг‚‹",
                    borrowAvailiable: "дЅ™е‰°е€†гЃЇеЂџг‚Љг‚‹гЃ“гЃЁгЃЊгЃ§гЃЌгЃѕгЃ™",
                    priceSource: "дѕЎж јг‚Ѕгѓјг‚№",
                    yourDeposit: "гЃ‚гЃЄгЃџгЃ®й ђй‡‘",
                    yourLoan: "гЃ‚гЃЄгЃџгЃ®гѓ­гѓјгѓі",
                    usedRatio: "дЅїз”ЁзЋ‡",
                    enterSupplyAmount: "гѓ‡гѓќг‚ёгѓѓгѓ€йЎЌг‚’е…ҐеЉ›гЃ—гЃ¦гЃЏгЃ гЃ•гЃ„",
                    enterRedeemAmount: "й‡‘йЎЌпј€е…ѓжњ¬пј‰г‚’е…ҐеЉ›гЃ—гЃ¦гЃЏгЃ гЃ•гЃ„",
                    enterRepayAmount: "иї”жё€йЎЌпј€е…ѓжњ¬пј‰г‚’е…ҐеЉ›гЃ—гЃ¦гЃЏгЃ гЃ•гЃ„",
                    enterBorrowAmount: "гѓ­гѓјгѓій‡‘йЎЌг‚’е…ҐеЉ›гЃ—гЃ¦гЃЏгЃ гЃ•гЃ„пј€жњЂе¤§гЃЇгѓ—гѓјгѓ«й‡‘йЎЌгЃ®80пј…гЃ§гЃ™пј‰",
                    marketDetails: "её‚е ґгЃ®и©ізґ°",
                    poolVolume: "гѓ—гѓјгѓ«гѓњгѓЄгѓҐгѓјгѓ ",
                    depositAmount: "й ђй‡‘йЎЌ",
                    borrowAmount: "еЂџе…ҐйЎЌ",
                    depositLimit: "гѓ‡гѓќг‚ёгѓѓгѓ€е€¶й™ђ",
                    borrowLimit: "еЂџе…Ґе€¶й™ђ",
                    reservedRatio: "дє€зґ„зЋ‡",
                    exchangeRate: "з‚єж›їгѓ¬гѓјгѓ€",
                    liquidationFine: "жё…з®—зЅ°й‡‘",
                    maxPledgeRate: "жњЂе¤§иЄ“зґ„зЋ‡",
                    fundUtilization: "иі‡й‡‘е€©з”Ё",
                    marketLoanable: "её‚е ґгЃ®дЅ™е‰°е€†г‚’иІёгЃ—е‡єгЃ™гЃ“гЃЁгЃЊгЃ§гЃЌгЃѕгЃ™",
                    totalBorrow: "Total Borrow",
                    totalDeposit: "еђ€иЁ€гѓ‡гѓќг‚ёгѓѓгѓ€",
                    operation: "ж“ЌдЅњ",
                    farmContract: "гѓ•г‚Ўгѓјгѓ еҐ‘зґ„",
                    vaultContract: "гѓћг‚·гѓіг‚¬гѓігѓ—гѓјгѓ«еҐ‘зґ„",
                    myAddress: "гѓћг‚¤г‚ўгѓ‰гѓ¬г‚№",
                    totalDepositIn: "еђ€иЁ€гѓ‡гѓќг‚ёгѓѓгѓ€",
                    currentEarning: "зЏѕењЁгЃ®еЏЋз›Љ",
                    staked: "иЄ“зґ„",
                    transaction: "гѓ€гѓ©гѓіг‚¶г‚Їг‚·гѓ§гѓі",
                    pending: "гѓ€гѓ©гѓіг‚¶г‚Їг‚·гѓ§гѓігЃЇг‚­гѓҐгѓјгЃ«е…Ґг‚Њг‚‰г‚Њ,гѓ‘гѓѓг‚±гѓјг‚ёеЊ–гЃ•г‚ЊгЃ¦гЃ„гЃѕгЃ™...",
                    confirm: "зўєиЄЌ",
                    confirming: "гѓЃг‚§гѓјгѓідёЉгЃ®гѓ€гѓ©гѓіг‚¶г‚Їг‚·гѓ§гѓігЃ®зўєиЄЌг‚’еѕ…гЃЈгЃ¦гЃ„гЃѕгЃ™",
                    confirmed: "зўєиЄЌжё€гЃї",
                    cancel: "г‚­гѓЈгѓіг‚»гѓ«",
                    canceled: "г‚­гѓЈгѓіг‚»гѓ«жё€гЃї",
                    success: "гѓ€гѓ©гѓіг‚¶г‚Їг‚·гѓ§гѓігЃЇж€ђеЉџгЃ—гЃѕгЃ—гЃџ",
                    failed: "гѓ€гѓ©гѓіг‚¶г‚Їг‚·гѓ§гѓігЃ®е®џиЎЊгЃ«е¤±ж•—гЃ—гЃѕгЃ—гЃџ",
                    txFailed: "гѓ€гѓ©гѓіг‚¶г‚Їг‚·гѓ§гѓігЃ®е®џиЎЊгЃ«е¤±ж•—гЃ—гЃѕгЃ—гЃџ",
                    copied: "г‚ігѓ”гѓјж€ђеЉџ",
                    computePower: "гѓЄг‚ўгѓ«г‚їг‚¤гѓ гЃ®иЁ€з®—иѓЅеЉ›гЃЁгѓ€гѓјг‚Їгѓігѓ‡гѓјг‚їгѓ‘гѓ©гѓЎгѓјг‚ї",
                    aboutWiki: "YFOжѓ…е ±зґ№д»‹",
                    aboutDex: "$PгЃ®гѓ“г‚ёгѓ§гѓігЃЇгЂЃгЃ„гЃЏгЃ¤гЃ‹гЃ®е€†ж•Јећ‹й‡‘ићЌг‚ўгѓ—гѓЄг‚±гѓјг‚·гѓ§гѓіпј€Defi-Appsпј‰г‚’ж§‹зЇ‰гЃ—гЂЃгЃ“г‚Њг‚‰гЃ®иЈЅе“Ѓг‚’жњ¬ж јзљ„гЃЄгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ«й–‹з™єгЃ—гЃ¦гЂЃ$Pг‚Ёг‚іг‚·г‚№гѓ†гѓ гЃ®дѕЎеЂ¤г‚’й«г‚Ѓг‚‹гЃ“гЃЁгЃ§гЃ™гЂ‚е®џйљ›гЃ®гѓ¦гѓјг‚№г‚±гѓјг‚№гЃЁз°ЎеЌгЃЄдЅїз”Ёж–№жі•г‚’жЊЃгЃџгЃЄгЃ„гЃ„гЃЏгЃ¤гЃ‹гЃ®е€†ж•Јећ‹й‡‘ићЌпј€Defiпј‰иЈЅе“ЃгЃ®йЁ’е‹•гЃ«г‚€г‚ЉгЂЃз‰№гЃ«г‚¤гѓјг‚µгѓЄг‚ўгѓ гѓ–гѓ­гѓѓг‚ЇгѓЃг‚§гѓјгѓігЃ®е№…еєѓгЃ„зђ†и§ЈгЃЊеї…и¦ЃгЃЄгЃџг‚ЃгЂЃиЈЅе“ЃгЃ®дЅїз”ЁгЃЇDefiгѓ¦гѓјг‚¶гѓјгЃ«гЃЁгЃЈгЃ¦е›°й›ЈгЃ§гЃ—гЃџгЂ‚г‚‚гЃ†1гЃ¤гЃ®дёЂи€¬зљ„гЃЄе•ЏйЎЊгЃЇгЂЃе¤љгЃЏгЃ®Defiгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃЊеЌзґ”гЃЄг‚№гѓЇгѓѓгѓ—Webг‚µг‚¤гѓ€г‚’ж§‹зЇ‰гЃ—гЂЃгЃќг‚Њд»ҐдёЉгЃ®й–‹з™єг‚’еЃњж­ўгЃ™г‚‹гЃ“гЃЁгЃ«г‚€гЃЈгЃ¦жЏђжЎ€гЃ™г‚‹иЄ¤гЃЈгЃџеЂ¤гЃ§гЃ™гЂ‚гЃ“г‚ЊгЃ«г‚€г‚ЉгЂЃDefiг‚№гѓЇгѓѓгѓ—гЃЊжЏђдѕ›гЃ•г‚Њг‚‹гЃ™гЃ№гЃ¦гЃ§гЃ‚г‚‹гЃ‹гЃ®г‚€гЃ†гЃ«и¦‹гЃ€гЃѕгЃ™гЃЊгЂЃгЃќгЃ†гЃ§гЃЇгЃ‚г‚ЉгЃѕгЃ›г‚“гЂ‚ $Pгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃЁгЃ•гЃѕгЃ–гЃѕгЃЄе›ЅгЃ®е€†ж•Јећ‹гѓЃгѓјгѓ гЃЇгЂЃгѓ—гѓ©гѓѓгѓ€гѓ•г‚©гѓјгѓ г‚’дё­еїѓгЃ«гЃ„гЃЏгЃ¤гЃ‹гЃ®DefiиЈЅе“Ѓг‚’й–‹з™єгЃЉг‚€гЃіж§‹зЇ‰гЃ™г‚‹гЃ“гЃЁгЃ§жЊЃз¶љеЏЇиѓЅгЃЄг‚Ёг‚іг‚·г‚№гѓ†гѓ г‚’ж§‹зЇ‰гЃ™г‚‹гЃ“гЃЁг‚’зґ„жќџгЃ—гЂЃDefiгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ®з©¶жҐµгЃ®зњџгЃ®дѕЎеЂ¤г‚’дїќиЁјгЃ—гЃѕгЃ™гЂ‚ $PгЃЇгЂЃг‚ігѓџгѓҐгѓ‹гѓ†г‚Јдё»е°ЋгЃ®гѓ–гѓ­гѓѓг‚ЇгѓЃг‚§гѓјгѓігѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ§гЃ‚г‚ЉгЂЃгЃќгЃ®дёЉгЃ«и¤‡ж•°гЃ®Defiг‚ўгѓ—гѓЄг‚±гѓјг‚·гѓ§гѓіг‚’ж§‹зЇ‰гЃ™г‚‹гЃ“гЃЁг‚’з›®зљ„гЃЁгЃ—гЃ¦гЃ„гЃѕгЃ™гЂ‚ е‰µйЂ зљ„гЃ§з ґеЈЉзљ„гЃЄгѓ–гѓ­гѓѓг‚ЇгѓЃг‚§гѓјгѓіDefiгЃ®г‚ўг‚¤гѓ‡г‚ўг‚’е‚™гЃ€гЃџгѓ—гѓ©гѓѓгѓ€гѓ•г‚©гѓјгѓ гЃ§гЃ‚г‚‹гЃџг‚ЃгЂЃг‚ЁгѓџгѓҐгѓ¬гѓјгѓ€гЃ™г‚‹дѕЎеЂ¤гЃ®гЃ‚г‚‹жњЂе€ќгЃ®жњЂе…€з«ЇгЃ®Defiгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ«гЃЄг‚ЉгЃѕгЃ™гЂ‚\n  ",
                    aboutApp: "$PгЃЇгЂЃ$Pгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ®$PгѓЃгѓјгѓ гЃЁ$PиЈЅе“Ѓгѓ¦гѓјг‚¶гѓјгЃ®е€†ж•Јећ‹г‚ігѓџгѓҐгѓ‹гѓ†г‚ЈгЃ®дёЎж–№гЃ§дЅїз”ЁгЃ§гЃЌг‚‹г‚€гЃ†гЃ«EthereumдёЉгЃ«ж§‹зЇ‰гЃ•г‚ЊгЃџгЃ„гЃЏгЃ¤гЃ‹гЃ®Defiг‚ўгѓ—гѓЄг‚±гѓјг‚·гѓ§гѓіпј€Defi DAppsпј‰гЃ®г‚Ёг‚іг‚·г‚№гѓ†гѓ г‚’жѓіе®љгЃ—гЃ¦гЃ„гЃѕгЃ™гЂ‚ гЃќгЃ†гЃЇиЁЂгЃЈгЃ¦г‚‚гЂЃ$P FinanceгЃЇг‚ігѓџгѓҐгѓ‹гѓ†г‚Јдё»е°ЋгЃ®Defiгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ§гЃ‚г‚ЉгЂЃг‚ігѓџгѓҐгѓ‹гѓ†г‚ЈгЃЁгЃќгЃ®гѓ¦гѓјг‚¶гѓјгЃ®$Pг‚Ёг‚іг‚·г‚№гѓ†гѓ г‚’ж”№е–„гЃ™г‚‹гЃџг‚ЃгЃ®зњџгЃ®DefiеЂ¤г‚’з”џгЃїе‡єгЃ™гЃ“гЃЁг‚’з›®зљ„гЃЁгЃ—гЃ¦гЂЃе€†ж•Јећ‹иЈЅе“Ѓг‚’ж§‹зЇ‰гЃ™г‚‹гЃџг‚ЃгЃ«з·Ёж€ђгЃ•г‚ЊгЃ¦гЃ„гЃѕгЃ™гЂ‚",
                    aboutBasis: "$PгЃЇгЂЃж–°гЃ—гЃ„DefiиЈЅе“Ѓг‚’дЅ“зі»зљ„гЃ«дЅњж€ђгЃ™г‚‹гЃ“гЃЁгЃ«е°‚еїµгЃ—гЃ¦гЃЉг‚ЉгЂЃгѓЃгѓјгѓ гЃЇг‚ўгѓ‰гѓ›гѓѓг‚ЇеЇѕеїњгЃ®гѓЃгѓјгѓ гЃЁгЃ—гЃ¦ж©џиѓЅгЃ—гЂЃгЃ“г‚Њг‚‰гЃ®DefiиЈЅе“ЃгЃ®й–‹з™єгЂЃгѓћгѓјг‚±гѓ†г‚Јгѓіг‚°гЂЃз™єеЈІг‚’ж”ЇжЏґгЃ—гЃ¦гЂЃз”џз‰©ењЏгЃ®ж€ђй•·г‚’ж”ЇжЏґгЃ™г‚‹гЃЁеђЊж™‚гЃ«гЂЃг‚ігѓџгѓҐгѓ‹гѓ†г‚ЈгЂЃгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЂЃгѓ¦гѓјг‚¶гѓјгЃ«жњ›гЃѕгЃ—гЃ„е€©з›Љг‚’г‚‚гЃџг‚‰гЃ—гЃѕгЃ™гЂ‚",
                    aboutMechanism: "$PгЃЇгЂЃеЏЋз›Љг‚’е€©з›Ље€†й…Ќпј€е ±й…¬пј‰гЃЁгЃ—гЃ¦е€©е®ій–ўдї‚иЂ…гЃ«е€†й…ЌгЃ™г‚‹гЃ“гЃЁг‚’з›®зљ„гЃЁгЃ—гЃ¦гЂЃг‚ігѓџгѓҐгѓ‹гѓ†г‚ЈгЃЊжЉ•иі‡гЃ™г‚‹DefiиЈЅе“Ѓг‚’ж§‹зЇ‰гЃ™г‚‹гЃ“гЃЁгЃ«г‚€г‚ЉгЂЃе€†ж•Јећ‹гЃ®з„Ўе€©е­ђй‡‘ићЌг‚Ёг‚іг‚·г‚№гѓ†гѓ г‚’еј·еЊ–гЃ™г‚‹е€†ж•Јећ‹гѓ™гѓігѓЃгѓЈгѓјг‚­гѓЈгѓ”г‚їгѓ«пј€DVCпј‰гЃЁгЃ—гЃ¦иЄ¬жЋгЃ™г‚‹гЃ“гЃЁг‚‚гЃ§гЃЌгЃѕгЃ™гЂ‚",
                    aboutCommunity: "$Pг‚Ёг‚іг‚·г‚№гѓ†гѓ гЃЇгЂЃгЃ•гЃѕгЃ–гЃѕгЃЄгѓ¦гѓ‹гѓјг‚ЇгЃЄе€†ж•Јећ‹й‡‘ићЌе•†е“ЃгЃ®жњ¬ж‹ ењ°гЃ«гЃЄг‚ЉгЃѕгЃ™гЂ‚ $PиЈЅе“ЃгЃЇгЂЃе€†ж•Јећ‹гѓ•г‚Ўг‚¤гѓЉгѓіг‚№гЃ®зњџгЃ®ж„Џе‘іг‚’е†ЌзЏѕгЃ™г‚‹гЃџг‚ЃгЃ«гЂЃгЃќгЃ®гѓ€гѓјг‚ЇгѓігЃ§гЃ‚г‚‹YFONEгѓ€гѓјг‚ЇгѓігЃ«гѓЄгѓіг‚ЇгЃ•г‚ЊгЃѕгЃ™гЂ‚",
                    aboutDefi: "$PиЈЅе“ЃгЃЇгЂЃе€†ж•Јећ‹гѓ•г‚Ўг‚¤гѓЉгѓіг‚№гЃ®зњџгЃ®ж„Џе‘іг‚’е†ЌзЏѕгЃ™г‚‹гЃџг‚ЃгЃ«гЂЃгЃќгЃ®гѓ€гѓјг‚ЇгѓігЃ§гЃ‚г‚‹YFONEгѓ€гѓјг‚ЇгѓігЃ«гѓЄгѓіг‚ЇгЃ•г‚ЊгЃѕгЃ™гЂ‚\nYFONEгѓ€гѓјг‚ЇгѓігЃ®дё»гЃЄдЅїз”Ёдѕ‹гЃЇгЂЃеђ„иЈЅе“ЃгЃ®е”ЇдёЂгЃ®г‚¬гѓђгѓЉгѓіг‚№гѓ€гѓјг‚ЇгѓігЃ§гЃ‚г‚ЉгЂЃгЃ“г‚Њг‚‰гЃ®иЈЅе“ЃгЃ«г‚€гЃЈгЃ¦з”џгЃїе‡єгЃ•г‚ЊгЃџеЏЋз›ЉгЃ«еЇѕгЃ™г‚‹и«‹ж±‚жЁ©г‚’дїќжњ‰иЂ…гЃ«дёЋгЃ€гЃѕгЃ™гЂ‚\n$PгѓЃгѓјгѓ гЃЊгѓћгѓјг‚±гѓѓгѓ€гѓ—гѓ¬г‚¤г‚№г‚’ж§‹зЇ‰гЃ—гЃ¦гЃ„г‚‹й–“гЂЃYFONEгѓ€гѓјг‚Їгѓіг‚’иі­гЃ‘г‚‹гЃџг‚ЃгЃ®гѓ—гѓ©гѓѓгѓ€гѓ•г‚©гѓјгѓ гЃ«гЃЄг‚ЉгЂЃгЃќгЃ®еѕЊгЂЃж‰Ђжњ‰иЂ…гЃЇгѓ€гѓјг‚Їгѓіг‚’дїќжЊЃгЃ™г‚‹гЃ гЃ‘гЃ§е¤ље¤§гЃЄе€©з›Љг‚’еѕ—г‚‹гЃ“гЃЁгЃЊгЃ§гЃЌгЃѕгЃ™гЂ‚ гѓ‘гѓјгѓ€гѓЉгѓјгЃЁгѓ•г‚©гѓјг‚ЇгЃ—гЂЃг‚јгѓ­гЃ‹г‚‰ж§‹зЇ‰гЃ™г‚‹гЃ“гЃЁгЃ§1гЃ¤гЃ®г‚Ёг‚іг‚·г‚№гѓ†гѓ гЃ«гѓЄгѓіг‚ЇгЃ•г‚ЊгЃџ1000г‚’и¶…гЃ€г‚‹е€†ж•Јећ‹г‚ўгѓ—гѓЄг‚±гѓјг‚·гѓ§гѓіг‚’жѓіеѓЏгЃ—гЃ¦гЃїгЃ¦гЃЏгЃ гЃ•гЃ„гЂ‚гЃ“г‚Њг‚‰гЃЇгЃ™гЃ№гЃ¦гЂЃYFOгѓ€гѓјг‚ЇгѓігЃЁзµ±еђ€гЃ•г‚ЊгЃ¦гЃ„гЃѕгЃ™гЂ‚ гЃ“гЃ®г‚Ёг‚іг‚·г‚№гѓ†гѓ гЃЇйќћеёёгЃ«е¤§гЃЌгЃЏгЂЃз¶™з¶љзљ„гЃ«ж€ђй•·гЃ—гЃѕгЃ™гЂ‚гЃ“г‚ЊгЃЇе®Ње…ЁгЃ«е€†ж•ЈеЊ–гЃ•г‚ЊгЃџг‚·г‚№гѓ†гѓ гЃ§гЃ‚г‚ЉгЂЃзµ¶гЃ€гЃљж€ђй•·гЃ—гЃ¦гЃ„гЃѕгЃ™гЂ‚гЃ“г‚ЊгЃЊDefiгЃ®зњџгЃ®ж„Џе‘ігЃ§гЃ™гЂ‚\n  ",
                    aboutVaults: "ж©џй–ўйЉѓгѓ—гѓјгѓ«гЃЇгЂЃгѓЏгѓѓг‚·гѓҐгѓ¬гѓјгѓ€гЂЃгѓћг‚¤гѓ‹гѓіг‚°гЃ®й›Јж“еє¦гЂЃгЃЉг‚€гЃіеЏ–еј•гѓ—гѓ©гѓѓгѓ€гѓ•г‚©гѓјгѓ гЃ®зЏѕењЁгЃ®дѕЎж јгЃ«еџєгЃҐгЃ„гЃ¦гЂЃжњЂг‚‚еЏЋз›ЉжЂ§гЃ®й«гЃ„г‚іг‚¤гѓіг‚’ж±єе®љгЃ—гЃѕгЃ™гЂ‚ 1жћљгЃ®г‚іг‚¤гѓігЃ—гЃ‹гѓћг‚¤гѓ‹гѓіг‚°гЃ§гЃЌгЃЄгЃ„йЂљеёёгЃ®гѓћг‚¤гѓ‹гѓіг‚°гѓ—гѓјгѓ«гЃЁгЃЇз•°гЃЄг‚ЉгЃѕгЃ™гЂ‚ гЃ‚г‚‹г‚іг‚¤гѓігЃЊй•·жњџй–“жЋЎжЋгЃ•г‚Њг‚‹гЃЁгЂЃй›Јж“еє¦гЃЊдёЉгЃЊг‚ЉгЂЃгѓћг‚¤гѓ‹гѓіг‚°гѓ—гѓјгѓ«гЃЊе€ҐгЃ®г‚іг‚¤гѓігЃ«е€‡г‚Љж›їг‚Џг‚ЉгЃѕгЃ™гЂ‚ YFOгѓ—гѓ©гѓѓгѓ€гѓ•г‚©гѓјгѓ гЃЇгЂЃеё‚е ґгЃ«е‡єе›ћгЃЈгЃ¦гЃ„г‚‹гѓћг‚¤гѓ‹гѓіг‚°гѓ—гѓјгѓ«гЃ«еїњгЃгЃ¦гѓЄг‚ўгѓ«г‚їг‚¤гѓ гЃ§гѓћг‚¤гѓ‹гѓіг‚°гѓ—гѓјгѓ«г‚’иїЅеЉ гЃ—гЂЃжњЂй«гЃ®е€©з›Љг‚’зЌІеѕ—гЃ—гЃѕгЃ™гЂ‚ гЃќгЃ—гЃ¦гЂЃжњЂй«гЃ®е€©з›Љг‚’еѕ—г‚‹гЃџг‚ЃгЃ«30е€†гЃ”гЃЁгЃ«е†ЌжЉ•иі‡гЃ™г‚‹гЃ®гЃЇдё»гЃ«еҐ‘зґ„гЃ®и‡Єе‹•ж©џиѓЅгЃ«г‚€г‚‹г‚‚гЃ®гЃ§гЃ™гЂ‚",
                    aboutLending: "DeFiгЃ®дё–з•ЊгЃ§гЃЇгЂЃе€†ж•Јећ‹иІёд»г‚·г‚№гѓ†гѓ гЃЇйќћеёёгЃ«й‡Ќи¦ЃгЃЄгѓ€гѓ©гѓѓг‚ЇгЃ§гЃ‚г‚ЉгЂЃDeFiг‚·г‚№гѓ†гѓ е…ЁдЅ“гЃ®еџєз¤ЋгЃЁгЃЄг‚‹г‚·г‚№гѓ†гѓ гЃ§гЃ‚г‚ЉгЂЃзЏѕе®џдё–з•ЊгЃ®й‡‘ићЌг‚·г‚№гѓ†гѓ г‚’г‚·гѓџгѓҐгѓ¬гѓјгѓ€гЃ—гЂЃгЃ•гЃѕгЃ–гЃѕгЃЄгѓ¦гѓјг‚¶гѓјгЃ®й‡‘ићЌгѓ‹гѓјг‚єг‚’зђ†и§ЈгЃ—гЂЃгѓ¦гѓјг‚¶гѓјгЃ«з›ёдє’ићЌиі‡г‚’жЏђдѕ›гЃ§гЃЌгЃѕгЃ™гЂ‚гѓ—гѓ©гѓѓгѓ€гѓ•г‚©гѓјгѓ ;гЃќг‚ЊгЃЇгЂЃй™ђз•Њг‚іг‚№гѓ€гЃЄгЃ—гЃ§еќ‡иіЄеЊ–гѓ€гѓјг‚Їгѓіеџєжє–г‚’жєЂгЃџгЃ™гЃ™гЃ№гЃ¦гЃ®жљ—еЏ·еЊ–гЃ•г‚ЊгЃџиі‡з”ЈгЃ®иІёд»г‚’г‚µгѓќгѓјгѓ€гЃ§гЃЌгЂЃеё‚е ґгЃ®дѕ›зµ¦гЃЁйњЂи¦ЃгЃ«еїњгЃгЃ¦её‚е ґгЃ®иІёд»зЋ‡г‚’и‡Єе‹•зљ„гЃ«иЁ€з®—гЃЉг‚€гЃіиЄїж•ґгЃ§гЃЌгЃѕгЃ™гЂ‚ гЃ—гЃџгЃЊгЃЈгЃ¦гЂЃYFOг‚Ёг‚іг‚·г‚№гѓ†гѓ гЃЇV2гѓђгѓјг‚ёгѓ§гѓігЃ§г‚‚й‡Ќи¦ЃгЃЄж©џиѓЅг‚’жћњгЃџгЃ—гЃ¦гЃ„гЃѕгЃ™гЂ‚иІёгЃ—е‡єгЃ—гЃ®гѓ—гѓ©гѓѓгѓ€гѓ•г‚©гѓјгѓ г‚»гѓ«гѓ•г‚±г‚ўгѓ€гѓјг‚ЇгѓігЃЇгЂЃзЏѕењЁгЃ®YFOгЃЁOBSгЃ§гЃ™гЂ‚",
                    aboutText: "$PгЃ®гѓ“г‚ёгѓ§гѓігЃЇгЂЃи¤‡ж•°гЃ®е€†ж•Јећ‹й‡‘ићЌг‚ўгѓ—гѓЄг‚±гѓјг‚·гѓ§гѓіпј€Defi-Appsпј‰г‚’ж§‹зЇ‰гЃ—гЂЃгЃ“г‚Њг‚‰гЃ®иЈЅе“Ѓг‚’ж€ђз†џгЃ—гЃџгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ«й–‹з™єгЃ—гЃ¦гЂЃ$Pг‚Ёг‚іг‚·г‚№гѓ†гѓ гЃ®дѕЎеЂ¤г‚’й«г‚Ѓг‚‹гЃ“гЃЁгЃ§гЃ™гЂ‚ дёЂйѓЁгЃ®е€†ж•Јећ‹гѓ•г‚Ўг‚¤гѓЉгѓіг‚№пј€Defiпј‰иЈЅе“ЃгЃ«гЃЇе®џз”Ёзљ„гЃЄдЅїз”Ёдѕ‹гЃЊгЃЄгЃЏгЂЃз°ЎеЌгЃЄдЅїз”Ёж–№жі•гЃЊгЃ‚г‚‹гЃџг‚ЃгЂЃз‰№гЃ«г‚¤гѓјг‚µгѓЄг‚ўгѓ гѓ–гѓ­гѓѓг‚ЇгѓЃг‚§гѓјгѓіг‚’еєѓгЃЏзђ†и§ЈгЃ™г‚‹еї…и¦ЃгЃЊгЃ‚г‚‹гЃџг‚ЃгЂЃиЈЅе“ЃгЃ®дЅїз”ЁгЃЇDefiгѓ¦гѓјг‚¶гѓјгЃ«гЃЁгЃЈгЃ¦е›°й›ЈгЃ§гЃ—гЃџгЂ‚ г‚‚гЃ†1гЃ¤гЃ®дёЂи€¬зљ„гЃЄе•ЏйЎЊгЃЇгЂЃеЌзґ”гЃЄдє¤жЏ›г‚µг‚¤гѓ€г‚’ж§‹зЇ‰гЃ—гЂЃгЃќг‚Њд»ҐдёЉгЃ®й–‹з™єг‚’еЃњж­ўгЃ™г‚‹гЃ“гЃЁгЃ«г‚€гЃЈгЃ¦гЂЃе¤љгЃЏгЃ®Defiгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ«г‚€гЃЈгЃ¦еј•гЃЌиµ·гЃ“гЃ•г‚Њг‚‹иЄ¤гЃЈгЃџеЂ¤гЃ§гЃ™гЂ‚ гЃ“г‚ЊгЃ«г‚€г‚ЉгЂЃDefiдє¤жЏ›г‚’жЏђдѕ›гЃ§гЃЌг‚‹г‚€гЃ†гЃ«и¦‹гЃ€гЃѕгЃ™гЃЊгЂЃгЃќгЃ†гЃ§гЃЇгЃ‚г‚ЉгЃѕгЃ›г‚“гЂ‚ $Pгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃЁгЃ•гЃѕгЃ–гЃѕгЃЄе›ЅгЃ®е€†ж•Јећ‹гѓЃгѓјгѓ гЃЇгЂЃгѓ—гѓ©гѓѓгѓ€гѓ•г‚©гѓјгѓ г‚’дё­еїѓгЃ«и¤‡ж•°гЃ®DefiиЈЅе“Ѓг‚’й–‹з™єгЃЉг‚€гЃіж§‹зЇ‰гЃ™г‚‹гЃ“гЃЁгЃ§жЊЃз¶љеЏЇиѓЅгЃЄг‚Ёг‚іг‚·г‚№гѓ†гѓ г‚’ж§‹зЇ‰гЃ—гЂЃDefiгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ®з©¶жҐµгЃ®зњџгЃ®дѕЎеЂ¤г‚’дїќиЁјгЃ™г‚‹гЃ“гЃЁг‚’зґ„жќџгЃ—гЃѕгЃ™гЂ‚ $PгЃЇгЂЃйќ©ж–°зљ„гЃ§з ґеЈЉзљ„гЃЄгѓ–гѓ­гѓѓг‚ЇгѓЃг‚§гѓјгѓіDefiг‚ігѓіг‚»гѓ—гѓ€г‚’дЅїз”ЁгЃ—гЃ¦гЂЃгѓ—гѓ©гѓѓгѓ€гѓ•г‚©гѓјгѓ дёЉгЃ«и¤‡ж•°гЃ®Defiг‚ўгѓ—гѓЄг‚±гѓјг‚·гѓ§гѓіг‚’ж§‹зЇ‰гЃ™г‚‹гЃ“гЃЁг‚’з›®зљ„гЃЁгЃ—гЃџгЂЃг‚ігѓџгѓҐгѓ‹гѓ†г‚Јдё»е°ЋгЃ®гѓ–гѓ­гѓѓг‚ЇгѓЃг‚§гѓјгѓігѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ§гЃ‚г‚ЉгЂЃг‚ЁгѓџгѓҐгѓ¬гѓјгѓ€гЃ™г‚‹дѕЎеЂ¤гЃ®гЃ‚г‚‹жњЂе€ќгЃ®гѓ•гѓ­гѓігѓ†г‚Јг‚ўDefiгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ«гЃЄг‚ЉгЃѕгЃ™гЂ‚",
                    aboutECO: "$PгЃЇгЂЃ$Pгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ®$PгѓЃгѓјгѓ гЃЁ$PиЈЅе“Ѓгѓ¦гѓјг‚¶гѓјгЃ®е€†ж•Јећ‹г‚ігѓџгѓҐгѓ‹гѓ†г‚ЈгЃЊдЅїз”ЁгЃ™г‚‹гЃџг‚ЃгЃ«EthereumдёЉгЃ«ж§‹зЇ‰гЃ•г‚ЊгЃџи¤‡ж•°гЃ®Defiг‚ўгѓ—гѓЄг‚±гѓјг‚·гѓ§гѓіпј€Defi DAppsпј‰гЃ§ж§‹ж€ђгЃ•г‚Њг‚‹г‚Ёг‚іг‚·г‚№гѓ†гѓ г‚’жѓіе®љгЃ—гЃ¦гЃ„гЃѕгЃ™гЂ‚ гЃќгЃ†гЃЇиЁЂгЃЈгЃ¦г‚‚гЂЃ$Pгѓ•г‚Ўг‚¤гѓЉгѓіг‚№гЃЇг‚ігѓџгѓҐгѓ‹гѓ†г‚Јдё»е°ЋгЃ®Defiгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ§гЃ‚г‚ЉгЂЃг‚ігѓџгѓҐгѓ‹гѓ†г‚ЈгЃЁгЃќгЃ®гѓ¦гѓјг‚¶гѓјгЃ®$Pг‚Ёг‚іг‚·г‚№гѓ†гѓ г‚’ж”№е–„гЃ™г‚‹гЃџг‚ЃгЃ®зњџгЃ®DefiдѕЎеЂ¤г‚’з”џгЃїе‡єгЃ™гЃ“гЃЁг‚’з›®зљ„гЃЁгЃ—гЃџе€†ж•Јећ‹иЈЅе“ЃгЃ®ж§‹зЇ‰г‚’з›®жЊ‡гЃ—гЃ¦гЃ„гЃѕгЃ™гЂ‚ $PгЃЇгЂЃж–°гЃ—гЃ„DefiиЈЅе“Ѓг‚’дЅ“зі»зљ„гЃ«з”џз”ЈгЃ™г‚‹гЃ“гЃЁгЃ«еЏ–г‚Љзµ„г‚“гЃ§гЃ„гЃѕгЃ™гЂ‚дёЂж™‚зљ„гЃЄг‚ўг‚Їгѓ†г‚Јгѓ™гѓјг‚·гѓ§гѓігѓЃгѓјгѓ гЃЁгЃ—гЃ¦гЂЃ$PгЃЇгЂЃг‚ігѓџгѓҐгѓ‹гѓ†г‚ЈгЂЃгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЂЃгѓ¦гѓјг‚¶гѓјгЃ«зђ†жѓізљ„гЃЄгѓЎгѓЄгѓѓгѓ€г‚’жЏђдѕ›гЃ—гЃЄгЃЊг‚‰гЂЃз”џз‰©ењЏгЃ®й–‹з™єг‚’ж”ЇжЏґгЃ™г‚‹гЃ“г‚Њг‚‰гЃ®DefiиЈЅе“ЃгЃ®й–‹з™єгЂЃгѓћгѓјг‚±гѓ†г‚Јгѓіг‚°гЂЃз™єеЈІг‚’ж”ЇжЏґгЃ—гЃѕгЃ™гЂ‚ $PгЃЇгЂЃе€†ж•Јећ‹гѓ™гѓігѓЃгѓЈгѓјг‚­гѓЈгѓ”г‚їгѓ«пј€DVCпј‰гЃЁг‚‚иЁЂгЃ€гЃѕгЃ™гЂ‚гЃ“г‚ЊгЃЇгЂЃDefiиЈЅе“Ѓг‚’ж§‹зЇ‰гЃ™г‚‹гЃ“гЃЁгЃ«г‚€г‚ЉгЂЃе€†ж•Јећ‹гЃ®з„Ўе€©е­ђй‡‘ићЌг‚Ёг‚іг‚·г‚№гѓ†гѓ г‚’еј·еЊ–гЃ—гЃѕгЃ™гЂ‚",
                    overview: "ж¦‚и¦Ѓ",
                    w1: "VaultгЃЁгЃЇдЅ•гЃ§гЃ™гЃ‹пјџ",
                    w2: "YFOе€†ж•Јећ‹иІёд»пјџ",
                    w3: "гЃ‚гЃЄгЃџгЃ®гѓЃгѓјгѓ гЃ«еЏ‚еЉ гЃ—гЃ¦гЃ“гЃ®зґ ж™ґг‚‰гЃ—гЃ„гѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ«иІўзЊ®гЃ™г‚‹гЃ«гЃЇгЂЃгЃ©гЃ®г‚€гЃ†гЃЄг‚№г‚­гѓ«гЃЊеї…и¦ЃгЃ§гЃ™гЃ‹пјџ",
                    w4: "$PгЃЇзЏѕењЁгЃ©гЃ®г‚їг‚¤гѓ—гЃ®жљ—еЏ·йЂљиІЁг‚’еЏ—гЃ‘е…Ґг‚ЊгЃ¦гЃ„гЃѕгЃ™гЃ‹пјџ",
                    w5: "гЃ©гЃ†гЃ™г‚ЊгЃ°$PгЃ«жЉ•иі‡гЃ—гЃ¦е€©з›Љг‚’дёЉгЃ’г‚‹гЃ“гЃЁгЃЊгЃ§гЃЌгЃѕгЃ™гЃ‹пјџ",
                    w6: "V2гѓђгѓјг‚ёгѓ§гѓігЃ§Binanceг‚Ёг‚ігѓ­г‚ёг‚«гѓ«гѓЃг‚§гѓјгѓігЃ®гЃїг‚’дЅїз”ЁгЃ§гЃЌг‚‹гЃ®гЃЇгЃЄгЃњгЃ§гЃ™гЃ‹пјџ",
                    w7: "$PгЃЇдЅ•гЃ®з•ҐгЃ§гЃ™гЃ‹пјџ",
                    r1: "гѓћг‚·гѓіг‚¬гѓігѓ—гѓјгѓ«гЃЇгЂЃгѓЄг‚ўгѓ«г‚їг‚¤гѓ гЃ®гѓћг‚¤гѓ‹гѓіг‚°еЏЋе…ҐгЃ®гѓ¬гѓ™гѓ«гЃ«еїњгЃгЃ¦гЂЃеђЊгЃг‚ўгѓ«г‚ґгѓЄг‚єгѓ гЃ®з•°гЃЄг‚‹йЂљиІЁг‚’гѓћг‚¤гѓ‹гѓіг‚°гЃ—гЂЃгѓћг‚¤гѓ‹гѓіг‚°гЃ®гЃџг‚ЃгЃ«иЁ€з®—иѓЅеЉ›г‚’г‚€г‚Љй«е€©е›ћг‚ЉгЃ®йЂљиІЁгЃ«и‡Єе‹•зљ„гЃ«е€‡г‚Љж›їгЃ€г‚‹гѓ—гѓ­г‚»г‚№гЃ§гЃ™гЂ‚гЃќгЃ®дѕЎеЂ¤гЃЇгЂЃеЌдёЂгЃ®йЂљиІЁг‚€г‚Љг‚‚гѓ¦гѓјг‚¶гѓјгЂ‚г‚€г‚Љй«гЃ„е€©з›Љг‚’гѓћг‚¤гѓ‹гѓіг‚°гЃ™г‚‹г‚€гЃ†гЃЄг‚‚гЃ®гЂ‚ гЂЊж©џй–ўйЉѓгѓ—гѓјгѓ«гЂЌгЃЁеђЌд»гЃ‘г‚‰г‚ЊгЃџгЃ®гЃЇгЂЃгЃ“гЃ®г‚€гЃ†гЃЄж“ЌдЅњгЃЊж©џй–ўйЉѓг‚’з™єе°„гЃ—гЂЃзµ¶гЃ€гЃље€‡г‚Љж›їг‚Џг‚‹г‚€гЃ†гЃЄг‚‚гЃ®гЃ гЃ‹г‚‰гЃ§гЃ™гЂ‚",
                    r11: "гѓћг‚·гѓіг‚¬гѓігѓ—гѓјгѓ«гЃ®з‰№жЂ§гЃ«г‚€г‚‹гЃЁгЂЃгѓћг‚·гѓіг‚¬гѓігѓ—гѓјгѓ«гЃ®ж“ЌдЅњгЃЇгЂЃиЁ€з®—иѓЅеЉ›г‚’гѓћг‚¤гѓ‹гѓіг‚°гѓ—гѓјгѓ«гЃ«й›†дё­гЃ•гЃ›г‚‹гЃ“гЃЁгЃ§гЃ™гЂ‚гЃ“г‚ЊгЃЇгЂЃгѓћг‚¤гѓ‹гѓіг‚°гЃ™г‚‹г‚іг‚¤гѓіг‚’жЊ‡е®љгЃ™г‚‹гЃ®гЃ§гЃЇгЃЄгЃЏгЂЃеђЊгЃгѓћг‚¤гѓ‹гѓіг‚°г‚ўгѓ«г‚ґгѓЄг‚єгѓ гЃ§и¤‡ж•°гЃ®гѓ—гѓ­г‚ёг‚§г‚Їгѓ€г‚’з›ґжЋҐж¤њзґўгЃ—гЃѕгЃ™гЂ‚е€©з›ЉгЃ®й«гЃ„гѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ«еїњгЃгЃ¦иЁ€з®—иѓЅеЉ›г‚’е€‡г‚Љж›їгЃ€гЃѕгЃ™гЂ‚жЋг‚Љдё‹гЃ’г‚‹гѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ«иЎЊгЃЏгЃЁгЂЃгЃ“гЃ®гѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ®е€©з›ЉгЃЇдё‹гЃЊг‚ЉгЂЃжњЂзµ‚зљ„гЃ«гЃЇе€ҐгЃ®гѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ«е€‡г‚Љж›їгЃ€гЃ¦жњЂй«гЃ®е€©з›Љг‚’еѕ—г‚‹гЃ“гЃЁгЃ«гЃЄг‚ЉгЃѕгЃ™гЂ‚",
                    r12: "ж©џй–ўйЉѓгѓ—гѓјгѓ«гЃ®е€©з‚№гЃЇгЂЃгѓ¦гѓјг‚¶гѓјгЃ®еЏЋе…Ґг‚’жњЂе¤§еЊ–гЃ—гЃѕгЃ™гЂ‚еЏЋе…ҐгЃЇгЂЃгЃ™гЃ№гЃ¦гЃ®жЉ•иі‡е®¶гЃ®жіЁж„ЏгЃ®з„¦з‚№гЃ§гЃ™гЂ‚ гЃ»гЃЁг‚“гЃ©гЃ®дєєгЃЊDeFiгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ«жЉ•иі‡гЃ™г‚‹гЃ“гЃЁг‚’йЃёжЉћгЃ™г‚‹зђ†з”±гЃЇгЂЃгЃќгЃ®ж­©з•™гЃѕг‚ЉгЃЊжЇ”ијѓзљ„й«гЃЏгЂЃDeFiж©џй–ўйЉѓгѓ—гѓјгѓ«гЃЊгѓћг‚¤гѓ‹гѓіг‚°еЏЋз›Љг‚’жњЂе¤§еЊ–гЃ™г‚‹гЃ®гЃ«еЅ№з«‹гЃ¤гЃџг‚ЃгЃ§гЃ™гЂ‚ гЃ“г‚ЊгЃЇгЂЃDeFiгѓћг‚·гѓіг‚¬гѓігѓ—гѓјгѓ«гЃ®з‰№еѕґгЃЊгЂЃгѓЄг‚ўгѓ«г‚їг‚¤гѓ гЃ®гѓћг‚¤гѓ‹гѓіг‚°еЏЋе…ҐгЃ®гѓ¬гѓ™гѓ«гЃ«еџєгЃҐгЃ„гЃ¦гЂЃиі‡й‡‘г‚’гѓЄг‚­гѓѓгѓ‰гѓћг‚¤гѓ‹гѓіг‚°з”ЁгЃ®й«е€©е›ћг‚ЉгЃ®DeFiгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ«е€‡г‚Љж›їгЃ€гЂЃжЉ•иі‡е®¶гЃ«г‚€г‚Љй«гЃ„гѓћг‚¤гѓ‹гѓіг‚°еЏЋе…Ґг‚’жЏђдѕ›гЃ™г‚‹гЃ“гЃЁгЃ§гЃ‚г‚‹гЃџг‚ЃгЃ§гЃ™гЂ‚",
                    r13: "YFOгѓ—гѓ©гѓѓгѓ€гѓ•г‚©гѓјгѓ гЃ®DeFiж©џй–ўйЉѓгѓ—гѓјгѓ«гЃЇгЂЃгѓЄг‚ўгѓ«г‚їг‚¤гѓ гЃ®е€‡г‚Љж›їгЃ€гЃ«г‚€гЃЈгЃ¦еЏЋе…Ґг‚’еў—г‚„гЃ™гЃ гЃ‘гЃ§гЃЄгЃЏгЂЃиі‡й‡‘г‚’еЉ№жћњзљ„гЃ«дЅїз”ЁгЃ—гЃ¦еЏЋе…Ґг‚’жњЂе¤§еЊ–гЃ™г‚‹гЃџг‚ЃгЃ®30е€†гЃ®и¤‡е€©гѓ«гѓјгѓ«г‚’е°Ће…ҐгЃ™г‚‹гЃ“гЃЁг‚‚гЃ§гЃЌгЃѕгЃ™гЂ‚ пј€1ж™‚й–“гЃ”гЃЁгЃ®и¤‡е€©гЃЇ30е€†гЃ§иЁ€з®—гЃ•г‚ЊгЂЃ30е€†гЃ”гЃЁгЃ®жЉ•иі‡е…ѓжњ¬гЃЁе€©жЃЇгЃЇж¬ЎгЃ®1ж™‚й–“гЃ®жЉ•иі‡е…ѓжњ¬гЃ«еђ«гЃѕг‚ЊгЂЃ30е€†гЃ”гЃЁгЃ«и¤‡е€©г‚’гЃЉжҐЅгЃ—гЃїгЃ„гЃџгЃ гЃ‘гЃѕгЃ™гЂ‚пј‰",
                    r14: "жіЁз›®гЃ®гѓ—гѓ­г‚ёг‚§г‚Їгѓ€пјљеё‚е ґгЃ«гЃЇгЃѕгЃ°г‚†гЃ„гЃ°гЃ‹г‚ЉгЃ®ж¶ІдЅ“жЋЎжЋгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃЊгЃ‚г‚ЉгЂЃгѓ¦гѓјг‚¶гѓјгЃ«гЃЁгЃЈгЃ¦жњЂг‚‚й›ЈгЃ—гЃ„гЃ®гЃЇгѓ—гѓ­г‚ёг‚§г‚Їгѓ€г‚’йЃёжЉћгЃ™г‚‹гЃ“гЃЁгЃ§гЃ™гЂ‚ е®‰е…ЁгЃ§дїЎй јжЂ§гЃЊй«гЃЏгЂЃеЏЋз›ЉжЂ§гЃ®й«гЃ„гѓ—гѓ­г‚ёг‚§г‚Їгѓ€г‚’йЃёжЉћгЃ™г‚‹гЃ«гЃЇгЂЃе¤љгЃЏгЃ®ж™‚й–“гЃЁг‚ЁгѓЌгѓ«г‚®гѓјгЃЊеї…и¦ЃгЃ§гЃ™гЂ‚ гЃѕгЃџгЂЃеё‚е ґгЃ®жЂҐжїЂгЃЄе¤‰еЊ–гЃ«г‚€г‚ЉгЂЃж–°и¦Џгѓ—гѓ­г‚ёг‚§г‚Їгѓ€г‚’ж¤њиЁЋгЃ—гЃ¦й–‹е§‹гЃ™г‚‹жє–е‚™гЃЊж•ґгЃ†гЃЁгЂЃж¬ЎгЃ®ж–°и¦Џгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ«иі‡й‡‘гЃЊжЊЇг‚Љж›їгЃ€г‚‰г‚ЊгЂЃгѓЄг‚їгѓјгѓігЃЊй«гЃЏгЃЄг‚ЉгЂЃдёЂе®љгЃ®еЋџе› гЃЁгЃЄг‚‹еЏЇиѓЅжЂ§гЃЊгЃ‚г‚ЉгЃѕгЃ™гЂ‚йЃ…г‚ЊгЂ‚",
                    r15: "ж©џй–ўйЉѓгѓ—гѓјгѓ«гЃ®е€©з‚№гЃЇгЂЃиі‡з”ЈгЃ®г‚№г‚ЇгѓЄгѓјгѓ‹гѓіг‚°гЃЁж§‹ж€ђгЃ®ж©џиѓЅг‚’жЏђдѕ›гЃ§гЃЌг‚‹гЃ“гЃЁгЃ§гЃ™гЂ‚еђ„гѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃЇгЂЃгЃќгЃ®е®‰е…ЁжЂ§гЃЁе€©з‚№г‚’гЃ‚г‚‹зЁ‹еє¦и©•дѕЎгЃ—гЃѕгЃ™гЂ‚ YFOгѓ—гѓ©гѓѓгѓ€гѓ•г‚©гѓјгѓ гЃ«гЃЇгЂЃгЃ•гЃѕгЃ–гЃѕгЃЄгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ®иЄїжџ»г‚’е®џж–ЅгЃ—гЂЃй«е€©е›ћг‚ЉгЃ®DeFiгѓ—гѓ­г‚ёг‚§г‚Їгѓ€г‚’йЃёжЉћгЃ—гЂЃгѓЄг‚ўгѓ«г‚їг‚¤гѓ гЃ§гѓќг‚ёг‚·гѓ§гѓіг‚’иЄїж•ґгЃ—гЃ¦гЂЃеЏЇиѓЅгЃЄй™ђг‚ЉжњЂе¤§гЃ®е€©з›Љг‚’з›®жЊ‡гЃ—гЃ¦еЉЄеЉ›гЃ™г‚‹е°‚й–Ђе®¶гЃЊгЃ„гЃѕгЃ™гЂ‚",
                    r16: "з¶™з¶љзљ„гЃ«еҐ‘зґ„г‚’е‘јгЃіе‡єгЃ™еї…и¦ЃгЃЊгЃ‚г‚‹гЃџг‚ЃгЂЃгѓ—гѓ©гѓѓгѓ€гѓ•г‚©гѓјгѓ гЃЇеЏЋз›ЉгЃ®0.3пј…гЃ®ж–™й‡‘г‚’и«‹ж±‚гЃ—гЃѕгЃ™гЂ‚з›®зљ„гЃЇгЂЃDeFiгѓћг‚¤гѓ‹гѓіг‚°гЃ®еђ„г‚№гѓ†гѓѓгѓ—гЃ§1гЂњ2е›ћгЃ®еҐ‘зґ„е‘јгЃіе‡єгЃ—гЃЊеї…и¦ЃгЃ«гЃЄг‚‹гЃ“гЃЁгЃ§гЃ™гЂ‚ж™‚й–“гЃ‚гЃџг‚ЉгЃ®г‚іг‚№гѓ€гЃЇгЂЃж•°гѓ‰гѓ«гЃ‹г‚‰ж•°еЌЃгѓ‰гѓ«гЂ‚гЂЃеҐ‘зґ„е…ЁдЅ“гЃЊ30е€†гЃ«1е›ће‘јгЃіе‡єгЃ•г‚ЊгЃѕгЃ™гЂ‚ GASж–™й‡‘гЃ«еЉ гЃ€гЃ¦гЂЃж®‹й«гЃЇYFOгЃЉг‚€гЃіOBSгѓ€гѓјг‚Їгѓіг‚’йљЏж™‚иІ·гЃ„ж€»гЃ™гЃџг‚ЃгЃ«дЅїз”ЁгЃ•г‚ЊгЃѕгЃ™гЂ‚",
                    r2: "и­ІжёЎжЂ§й ђй‡‘гѓ€гѓјг‚Їгѓіг‚’жЏђдѕ›гЃ™г‚‹гЃ“гЃЁгЃ«г‚€г‚ЉгЂЃеђЊгЃиі‡з”ЈгЃЊг‚·гѓЈгѓ€гѓ«гЃ•г‚ЊгЂЃз•°гЃЄг‚‹DeFiгѓ—гѓ­гѓ€г‚ігѓ«гЃ§е†Ќе€©з”ЁгЃ•г‚Њг‚‹гЃџг‚ЃгЂЃй‡‘ићЌеё‚е ґгЃ§гЃ®иі‡й‡‘гЃ®дЅїз”ЁеЉ№зЋ‡гЃЊж•°е›ћеђ‘дёЉгЃ—гЃѕгЃ™гЂ‚гЃѕгЃџгЂЃд»–гЃ®DeFiгѓ—гѓ­гѓ€г‚ігѓ«гЃЁжџ”и»џгЃ«зµ„гЃїеђ€г‚ЏгЃ›г‚‹гЃ“гЃЁгЃЊгЃ§гЃЌг‚‹гЃџг‚ЃгЂЃи‡Єе‹•ж“ЌдЅњгЃЊе®џзЏѕгЃ—гЃѕгЃ™гЂ‚гѓћгѓ«гѓЃгѓ¬гѓ™гѓ«гЂЃгѓћгѓ«гѓЃгѓ¬гѓ™гѓ«гЂЃи¤‡й›‘гЂЃгЃЉг‚€гЃігѓЌг‚№гѓ€гЃ•г‚ЊгЃџй‡‘ићЌеЏ–еј•гЃ®гЂ‚",
                    r21: "зЏѕењЁгЂЃDeFiгЃ®гЃ™гЃ№гЃ¦гЃ®зЁ®йЎћгЃ®иІёд»гѓ—гѓ©гѓѓгѓ€гѓ•г‚©гѓјгѓ гЃЇгЂЃеџєжњ¬зљ„гЃ«дЅЏе®…гѓ­гѓјгѓігЃ®гѓўгѓјгѓ‰гЃ«гЃ‚г‚ЉгЃѕгЃ™гЂ‚е…ЁдЅ“зљ„гЃЄеҐЅгЃїгЃЇгЂЃгЃ•гЃѕгЃ–гЃѕгЃЄгѓ‡г‚ёг‚їгѓ«йЂљиІЁг‚’е›єе®љеЂ¤гЃ®е•†е“ЃгЃ«е¤‰жЏ›гЃ™г‚‹иіЄе±‹гѓўгѓ‡гѓ«гЃ§гЃ‚г‚ЉгЂЃдЅЏе®…гѓ­гѓјгѓігЃ®еЂ¤гЃЊ100гЃ®е•†е“ЃгЃЇгЃ§жµЃе‹•йЂљиІЁг‚’еЏ–еѕ—гЃ—гЃѕгЃ™гЂ‚ 75гЃ®дѕЎж јгЂ‚гЂЃйЂљиІЁж‹…дїќг‚’йЂљгЃгЃ¦йЂљиІЁг‚’еЏ–еѕ—гЃ™г‚‹иЎЊз‚єгЃЇйќћеёёгЃ«ж„љгЃ‹гЃЄг‚€гЃ†гЃ§гЃ™гЃЊгЂЃй«гЃ„дЅЏе®…гѓ­гѓјгѓій‡‘е€©гЃЁDeFiеё‚е ґгЃ®е·Ёе¤§гЃЄе€ќжњџж®µйљЋгЃ®е€©е›ћг‚ЉгЃЇг‚€г‚Љй«гЃ„её‚е ґиі‡й‡‘г‚’еј•гЃЌд»гЃ‘гЃѕгЃ™гЂ‚",
                    r22: "DeFiгЃЇзЏѕењЁгЂЃг‚№гѓЇгѓѓгѓ—гЃЁг‚Ёг‚Їг‚№гѓЃг‚§гѓіг‚ёг‚’йЂљгЃгЃ¦дЅЏе®…гѓ­гѓјгѓіг‚’и§Јж±єгЃ—гЂЃгѓћгѓјг‚ёгѓіг‚·г‚№гѓ†гѓ г‚’йЂљгЃгЃ¦гѓ¬гѓђгѓ¬гѓѓг‚ёг‚’и§Јж±єгЃ—гЂЃжњЂзµ‚зљ„гЃ«г‚Їгѓ¬г‚ёгѓѓгѓ€гЃ®е°Ће‡єгЃЁеђЊж§гЃ®ж“ЌдЅњг‚’е®џзЏѕгЃ—гЃѕгЃ™гЂ‚ BinanceгѓЃг‚§гѓјгѓігЃ®гѓ“гѓѓгѓ€г‚іг‚¤гѓігЃЁг‚¤гѓјг‚µгѓЄг‚ўгѓ г‚’дѕ‹гЃЁгЃ—гЃ¦еЏ–г‚ЉдёЉгЃ’гЃѕгЃ™гЂ‚гЃџгЃЁгЃ€гЃ°гЂЃг‚¤гѓјг‚µгѓЄг‚ўгѓ гЃЁеј•гЃЌжЏ›гЃ€гЃ«гѓ“гѓѓгѓ€г‚іг‚¤гѓіг‚’иЄ“зґ„гЃ—гЃџгЃ„е ґеђ€гЃЇгЂЃж¬ЎгЃ®гЃ“гЃЁгЃЊгЃ§гЃЌгЃѕгЃ™пјљз‰№е®љгЃ®г‚ўгѓ‰гѓ¬г‚№гЃ§гѓ“гѓѓгѓ€г‚іг‚¤гѓіг‚’гѓ­гѓѓг‚ЇгЃ™г‚‹гЃЁгЂЃгЃ“гЃ®гѓ“гѓѓгѓ€г‚іг‚¤гѓіг‚’иЎЁгЃ™BTCгЃЊгѓђг‚¤гѓЉгѓіг‚№гѓЃг‚§гѓјгѓігЃ§з”џж€ђгЃ•г‚ЊгЂЃгѓђг‚¤гѓЉгѓіг‚№гѓЃг‚§гѓјгѓігЃ§дЅїз”ЁгЃ§гЃЌгЃѕгЃ™г‚№гѓћгѓјгѓ€г‚ігѓігѓ€гѓ©г‚Їгѓ€гѓўгѓјг‚Ігѓјг‚ёгЃ“гЃ®BTCгЃЁеЇѕеїњгЃ™г‚‹гѓ€гѓјг‚Їгѓіг‚’з”џж€ђгЃ—гЂЃгѓ€гѓјг‚ЇгѓігЃ§дёЂе®љй‡ЏгЃ®ETHг‚’иіје…ҐгЃ—гЂЃгЃ“г‚Њг‚‰гЃ®ETHгЃ«еЇѕеїњгЃ™г‚‹ж‹…дїќBTCг‚’и§Јж”ѕгЃ™г‚‹гЃЁгЂЃгѓ€гѓ©гѓіг‚¶г‚Їг‚·гѓ§гѓігЃЊзµ‚дє†гЃ—гЃѕгЃ™гЂ‚гѓ—гѓ­г‚»г‚№е…ЁдЅ“гЃЇгЂЃдєєй–“гЃ®еЏ‚еЉ гЃЄгЃ—гЃ«г‚№гѓћгѓјгѓ€г‚ігѓігѓ€гѓ©г‚Їгѓ€гЃ«г‚€гЃЈгЃ¦иЎЊг‚Џг‚ЊгЃѕгЃ™гЂ‚гЃќгЃ—гЃ¦гЂЃжєЂжњџеѕЊгЃ«иї”жё€гЃ—гЃЄгЃ‘г‚ЊгЃ°гЂЃж‹…дїќд»гЃЌгЃ®гѓ“гѓѓгѓ€г‚іг‚¤гѓігЃЇгЃЄгЃЏгЃЄг‚ЉгЃѕгЃ™гЂ‚г‚№гѓћгѓјгѓ€г‚ігѓігѓ€гѓ©г‚Їгѓ€гЃЇжњ‰еЉ№жњџй™ђгЃЊе€‡г‚Њг‚‹гЃЁе®џиЎЊгЃ•г‚ЊгЂЃз§ЃгЃЊзґ„жќџгЃ—гЃџгѓ“гѓѓгѓ€г‚іг‚¤гѓігЃЇгѓ‡гѓ•г‚©гѓ«гѓ€гЃ®е‡¦зђ†гЃ®еЇѕи±ЎгЃ«гЃЄг‚ЉгЃѕгЃ™гЂ‚гЃ“г‚ЊгЃЇеђЊз­‰гЃ®дЅЏе®…гѓ­гѓјгѓіг‚’йЃ”ж€ђгЃ™г‚‹гЃ“гЃЁгЃЊгЃ§гЃЌгЃѕгЃ™гЃЊгЂЃDefiгЃ®й­…еЉ›гЃЇж€ђй•·гЃ«гЃ‚г‚‹гЃџг‚ЃгЂЃйЃЋе‰°дЅЏе®…гѓ­гѓјгѓігЃЊеї…и¦ЃгЃ§гЃ™гЂ‚иЁЂгЃ„жЏ›гЃ€г‚ЊгЃ°гЂЃз§ЃгЃЇ1гѓ“гѓѓгѓ€г‚іг‚¤гѓіг‚’жЉµеЅ“гЃ«е…Ґг‚ЊгЂЃжЉ•ж©џгЃ®гЃџг‚ЃгЃ«2гѓ“гѓѓгѓ€г‚іг‚¤гѓігЃѕгЃџгЃЇ10гѓ“гѓѓгѓ€г‚іг‚¤гѓіг‚’дёЂж™‚зљ„гЃ«еЂџг‚Љг‚‹гЃ“гЃЁгЃЊгЃ§гЃЌг‚‹гЃ“гЃЁг‚’жњ›г‚“гЃ§гЃ„гЃѕгЃ™гЂ‚",
                    r3: "$PгЃЇг‚°гѓ­гѓјгѓђгѓ«гѓЃгѓјгѓ гЃ§гЃ™гЂ‚иЄ°гЃ§г‚‚$Pг‚ігѓџгѓҐгѓ‹гѓ†г‚ЈгЃ«еЏ‚еЉ гЃ§гЃЌгЃѕгЃ™гЂ‚г‚ігѓџгѓҐгѓ‹гѓ†г‚ЈгЃ§гЃЇгЂЃг‚‚гЃЈгЃЁе¤љгЃЏгЃ®гЃ“гЃЁг‚’жњ›г‚“гЃ§гЃ„гЃѕгЃ™гЂ‚\n  дєєгЂ…гЃЇ$Pгѓ•г‚ЎгѓџгѓЄгѓјгЃ«еЏ‚еЉ гЃ—гЃѕгЃ™гЂ‚YFOгѓ€гѓјг‚Їгѓіг‚’жЊЃгЃЈгЃ¦гЃ„г‚‹гЃЁгЂЃг‚‚гЃЎг‚Ќг‚“з§ЃгЃџгЃЎгЃ®гѓЃгѓјгѓ гЃ«еЏ‚еЉ гЃ—гЃ¦г‚‚\n  г‚€г‚Ље¤љгЃЏгЃ®дєєгЃЊеЏ‚еЉ гЃ™г‚‹еї…и¦ЃгЃЊгЃ‚г‚‹гЃџг‚ЃгЂЃг‚ігѓџгѓҐгѓ‹гѓ†г‚Јг‚Єгѓљгѓ¬гѓјг‚їгѓјгЂЃгѓћгѓјг‚±гѓ†г‚Јгѓіг‚°ж‹…еЅ“иЂ…гЂЃжЉЂиЎ“гѓ•г‚Јгѓјгѓ‰гѓђгѓѓг‚Їж‹…еЅ“иЂ…гЃЄгЃ©гЃЁгЃ—гЃ¦ж©џиѓЅгЃ§гЃЌгЃѕгЃ™гЂ‚\n  еЅ№е‰ІгЂЃгЃ‚гЃЄгЃџгЃЊз‰№е®љгЃ®иѓЅеЉ›г‚’жЊЃгЃЈгЃ¦гЃ„г‚‹гЃЄг‚‰гЃ°гЂЃз§ЃгЃџгЃЎгЃ®г‚ігѓџгѓҐгѓ‹гѓ†г‚ЈгѓћгѓЌгѓјг‚ёгѓЈгѓјгЃ«йЂЈзµЎгЃ—гЃ¦гЃЏгЃ гЃ•гЃ„гЂ‚",
                    r4: "зЏѕењЁгЂЃдё»жµЃгЃ®йЂљиІЁгЃ§гЃ‚г‚‹ETHгЂЃBNBгЂЃUSDTгЃЄгЃ©гЃЁYFOгЂЃOBSгѓ€гѓјг‚Їгѓіг‚’еЏ—гЃ‘е…Ґг‚ЊгЃ¦гЃ„гЃѕгЃ™",
                    r5: "гѓ—гѓ©гѓѓгѓ€гѓ•г‚©гѓјгѓ гЃЇгЂЃж©џй–ўйЉѓгѓ—гѓјгѓ«пј€гѓњгѓјгѓ«гѓ€пј‰гЂЃиІёгЃ—е‡єгЃ—гЂЃеЌдёЂйЂљиІЁгѓ—гѓјгѓ«гЂЃгЃЉг‚€гЃігЃќгЃ®д»–гЃ®ж–№жі•г‚’жЏђдѕ›гЃ—гЃѕгЃ™гЂ‚гѓ¦гѓјг‚¶гѓјгЃЇгЂЃWebг‚µг‚¤гѓ€гЃ§еї…и¦ЃгЃЄгѓ€гѓјг‚ЇгѓігЃ«еѕ“гЃ†еї…и¦ЃгЃЊгЃ‚г‚ЉгЃѕгЃ™гЂ‚\n  зЁ®йЎћгЃЇдёЂе®љгЃ®е€©з›Љг‚’еѕ—г‚‹гЃ§гЃ—г‚‡гЃ†гЂ‚",
                    r6: "ж©џй–ўйЉѓгЃ®гѓ—гѓјгѓ«гЃЇ30е€†гЃ”гЃЁгЃ«е†ЌжЉ•иі‡гЃ•г‚ЊгЂЃг‚¬г‚№ж–™й‡‘гЃЊй«гЃ™гЃЋгЃѕгЃ™гЂ‚иіЄжЁ©гЃ®дїќиЁјй‡‘гЃЊеЌЃе€†гЃ§гЃЄгЃ„е ґеђ€гЂЃгѓ¦гѓјг‚¶гѓјгЃ®иі‡й‡‘гЃЇе¤±г‚Џг‚ЊгЃѕгЃ™гЂ‚ гЃ—гЃџгЃЊгЃЈгЃ¦гЂЃз§ЃгЃџгЃЎгЃЇжњЂе€ќгЃ®гѓ•г‚§гѓјг‚єгЃ§гЃ®гЃїBSCг‚Ёг‚ігѓ­г‚ёг‚«гѓ«гѓЃг‚§гѓјгѓіг‚’з«‹гЃЎдёЉгЃ’гЃѕгЃ—гЃџгЂ‚ г‚¤гѓјг‚µгѓЄг‚ўгѓ гѓђгѓјг‚ёгѓ§гѓігЃ§гЃЇгЂЃг‚¤гѓјг‚µгѓЄг‚ўгѓ гѓђгѓјг‚ёгѓ§гѓігЃЊг‚Єгѓјгѓ—гѓігЃ™г‚‹е‰ЌгЃ«гЂЃTVLгѓђгѓјг‚ёгѓ§гѓігЃ®YFO-V2гѓђгѓјг‚ёгѓ§гѓігЃ®BSCгѓђгѓјг‚ёгѓ§гѓігЃЊ500дё‡з±ігѓ‰гѓ«г‚’и¶…гЃ€г‚‹еї…и¦ЃгЃЊгЃ‚г‚ЉгЃѕгЃ™гЂ‚дёЂе®љгЃ®ж™‚й–“гЃ«е†ЌжЉ•иі‡гЃ™г‚‹гЃЁгЂЃй‡‘йЎЌгЃЊдёЂе®љгЃ®й‡‘йЎЌгЃ«йЃ”гЃ™г‚‹гЃЁгЂЃгѓ¦гѓјг‚¶гѓјгЃЇгѓ—гѓ©гѓѓгѓ€гѓ•г‚©гѓјгѓ дёЉгЃ«гЃ„г‚‹гЃ“гЃЁг‚’дїќиЁјгЃ§гЃЌгЃѕгЃ™е†ЌжЉ•иі‡гЃ®й‡ЏгЃЊжњЂе¤§гЃ®е€©з›Љг‚’еѕ—г‚‹гЃ§гЃ—г‚‡гЃ†гЂ‚ гЃ—гЃџгЃЊгЃЈгЃ¦гЂЃжњЂе€ќгЃ®гѓ•г‚§гѓјг‚єгЃ§гЃЇгЂЃBinanceг‚Ёг‚ігѓ­г‚ёг‚«гѓ«гѓЃг‚§гѓјгѓігЃ®иЈЅе“Ѓй еџџгЃ®гЃїг‚’й–‹гЃЌгЃѕгЃ™пј€г‚‚гЃЎг‚Ќг‚“гЂЃй–‹з™єгЃ•г‚ЊгЃ¦гЃЉг‚ЉгЂЃеёёгЃ«ж›ґж–°г‚’еѕ…гЃЈгЃ¦гЃ„гЃѕгЃ™гЂ‚EthereumгЃ®г‚ігѓјгѓ‰гЃЇGithubгЃ§ж›ґж–°гЃ•г‚ЊгЃ¦гЃ„гЃѕгЃ™пј‰гЂ‚",
                    r7: "$PгЃ®гѓ“г‚ёгѓ§гѓігЃЇгЂЃгЃ„гЃЏгЃ¤гЃ‹гЃ®е€†ж•Јећ‹й‡‘ићЌг‚ўгѓ—гѓЄг‚±гѓјг‚·гѓ§гѓіпј€Defi-Appsпј‰г‚’ж§‹зЇ‰гЃ—гЂЃгЃ“г‚Њг‚‰гЃ®иЈЅе“Ѓг‚’й–‹з™єгЃ—гЃ¦ж¬ЎгЃ®г‚€гЃ†гЃ«е¤‰жЏ›гЃ™г‚‹гЃ“гЃЁгЃ§гЃ™гЂ‚\n  ж€ђз†џгЃ—гЃџгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃЇгЂЃ$Pг‚Ёг‚іг‚·г‚№гѓ†гѓ гЃ®дѕЎеЂ¤г‚’й«г‚ЃгЃѕгЃ™гЂ‚ гЂ‚ $Pгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃЁгЃќгЃ®е€†ж•Јећ‹гѓЃгѓјгѓ гЃЇз•°гЃЄг‚‹е‡єиє«гЃ§гЃ™\n  и¤‡ж•°гЃ®е›ЅгЃ®й–‹з™єгЃЁе»єиЁ­г‚’йЂљгЃгЃ¦жЊЃз¶љеЏЇиѓЅгЃЄDefiг‚Ёг‚іг‚·г‚№гѓ†гѓ иЈЅе“ЃгЃ®дЅњж€ђгЃ«еЏ–г‚Љзµ„г‚“гЃ§гЃ„гЃѕгЃ™\n  гЃќгЃ—гЃ¦гЂЃDefiгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃЊгЃ©гЃ†гЃ‚г‚‹гЃ№гЃЌгЃ‹гЃЁгЃ„гЃ†з©¶жҐµгЃ®зњџгЃ®дѕЎеЂ¤г‚’дїќиЁјгЃ—гЃѕгЃ™гЂ‚ $PгЃЇгЂЃг‚ігѓџгѓҐгѓ‹гѓ†г‚Јдё»е°ЋгЃ®гѓ–гѓ­гѓѓг‚ЇгѓЃг‚§гѓјгѓігѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ§гЃ™гЂ‚\n  е‰µйЂ зљ„гЃ§з ґеЈЉзљ„гЃЄгѓ–гѓ­гѓѓг‚ЇгѓЃг‚§гѓјгѓіDefiгѓ—гѓ©гѓѓгѓ€гѓ•г‚©гѓјгѓ гЃ®г‚ўг‚¤гѓ‡г‚ўгЃ«еџєгЃҐгЃ„гЃ¦и¤‡ж•°гЃ®Defiг‚ўгѓ—гѓЄг‚±гѓјг‚·гѓ§гѓіг‚’ж§‹зЇ‰гЃ—гЂЃ\n  гЃ“г‚ЊгЃЇжњЂе€ќгЃ®гѓ•гѓ­гѓігѓ†г‚Јг‚ўDefiгѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃ§гЃ™гЂ‚",
                    countactUs: "гЃЉе•ЏгЃ„еђ€г‚ЏгЃ›",
                    cTitle: "$P GroupгЃЇгЂЃгѓ‡г‚ёг‚їгѓ«зµЊжё€гЃ®гѓЄгѓјгѓ‡г‚Јгѓіг‚°г‚«гѓігѓ‘гѓ‹гѓјгЃ§гЃ™гЂ‚ гѓ–гѓ­гѓѓг‚ЇгѓЃг‚§гѓјгѓіDEFIжҐ­з•ЊгЃ®дёЉжµЃгЃЁдё‹жµЃгЃ«з„¦з‚№г‚’еЅ“гЃ¦гЂЃгѓ–гѓ­гѓѓг‚ЇгѓЃг‚§гѓјгѓіе€†й‡ЋгЃ®г‚іг‚ўгѓ†г‚ЇгѓЋгѓ­г‚ёгѓјгЃ®йЈ›иєЌзљ„йЂІж­©гЃЁгѓ–гѓ­гѓѓг‚ЇгѓЃг‚§гѓјгѓігѓ†г‚ЇгѓЋгѓ­г‚ёгѓјгЃЁжҐ­з•ЊгЃ®зµ±еђ€гЃ«еЏ–г‚Љзµ„г‚“гЃ§гЃ„г‚‹й–‹з™єгЃ«гЃЇгЂЃз”ЈжҐ­з”Ёгѓ–гѓ­гѓѓг‚ЇгѓЃг‚§гѓјгѓігЂЃгѓ‡г‚ёг‚їгѓ«иі‡з”ЈеЏ–еј•гЂЃгѓ‡г‚ёг‚їгѓ«иі‡з”ЈгЃ®е®‰е…ЁгЃЄг‚¦г‚©гѓ¬гѓѓгѓ€гЂЃгѓ‡г‚ёг‚їгѓ«зµЊжё€з ”з©¶гЂЃе€†ж•ЈеЊ–HuahuaгЃЉг‚€гЃігЃќгЃ®д»–гЃ®гѓ“г‚ёгѓЌг‚№гЃЇгЂЃг‚°гѓ­гѓјгѓђгѓ«гЃЄгѓ‡г‚ёг‚їгѓ«зµЊжё€з”ЈжҐ­г‚Ёг‚іг‚·г‚№гѓ†гѓ г‚’еЅўж€ђгЃ—гЃѕгЃ™гЂ‚\n\n$PгЃЇгЂЃе€†ж•Јећ‹г‚ігѓџгѓҐгѓ‹гѓ†г‚Јг‚µгѓјгѓ“г‚№гЃ®е®џи·µгЃ«жє–ж‹ гЃ—гЃ¦гЃЉг‚ЉгЂЃж•°з™ѕгЃ®е›ЅгЃЁењ°еџџгЃ®ж•°еЌѓдё‡дєєгЃ®гѓ¦гѓјг‚¶гѓјгЃ«е®‰е…ЁгЃ§дїЎй јжЂ§гЃ®й«гЃ„гѓђгѓЄгѓҐгѓјгѓЌгѓѓгѓ€гѓЇгѓјг‚Їг‚µгѓјгѓ“г‚№г‚’жЏђдѕ›гЃ—гЃ¦гЃ„гЃѕгЃ™гЂ‚",
                    officialListing: "г‚Єгѓ•г‚Јг‚·гѓЈгѓ«гѓ‘гѓјгѓ€гѓЉгѓјг‚Ёгѓјг‚ёг‚§гѓіг‚·гѓј",
                    myWallet: "з§ЃгЃ®иІЎеёѓ",
                    security: "е®‰е…ЁжЂ§",
                    securityPolicy: "г‚»г‚­гѓҐгѓЄгѓ†г‚Јж€¦з•Ґ",
                    policy1: "гЃ“гЃ®гѓЄгѓќг‚ёгѓ€гѓЄгЃ§г‚»г‚­гѓҐгѓЄгѓ†г‚ЈгЃ®и„†еј±жЂ§г‚’е®‰е…ЁгЃ«е ±е‘ЉгЃ™г‚‹ж–№жі•г‚’гЃ”и¦§гЃЏгЃ гЃ•гЃ„",
                    securityAdvisories: "е®‰е…ЁгЃ«й–ўгЃ™г‚‹г‚ўгѓ‰гѓђг‚¤г‚№",
                    policy2: "гЃ“гЃ®гѓЄгѓќг‚ёгѓ€гѓЄгЃ®г‚»г‚­гѓҐгѓЄгѓ†г‚ЈгЃ«й–ўгЃ™г‚‹жЋЁеҐЁдє‹й …г‚’иЎЁз¤єгЃ™г‚‹",
                    scope: "зЇ„е›І",
                    policy3: "гѓђг‚°гѓђг‚¦гѓігѓ†г‚Јгѓ—гѓ­г‚°гѓ©гѓ гЃ®зЇ„е›ІгЃЇг‚№гѓћгѓјгѓ€г‚ігѓігѓ€гѓ©г‚Їгѓ€г‚’г‚«гѓђгѓјгЃ—гЃ¦гЃ„гЃѕгЃ™\n  YFOг‚Ёг‚іг‚·г‚№гѓ†гѓ гЃ§гЃ®дЅїз”Ё-SolidityгЃѕгЃџгЃЇ\n  еҐ‘зґ„гѓ•г‚©гѓ«гѓЂе†…гЃ®г‚№гѓћгѓјгѓ€г‚ігѓігѓ€гѓ©г‚Їгѓ€\n  гѓћг‚№г‚їгѓјгѓ–гѓ©гѓігѓЃгЃЇгЂЃд»Ґдё‹г‚’еђ«г‚ЂеҐ‘зґ„гЃ®иІ·гЃ„ж€»гЃ—г‚’з†±жњ›гЃ—гЃ¦гЃ„гЃѕгЃ™\n  з©ЌжҐµзљ„гЃЄдЅїз”ЁгЃ®ж­ґеЏІзљ„гЃЄе±•й–‹г‚’гЃѕгЃ и¦‹гЃ¦гЃ„гЃѕгЃ™\n  YFIгЃ«й–ўйЂЈгЃ™г‚‹г‚¤гѓјг‚µгѓЄг‚ўгѓ гѓЎг‚¤гѓігѓЌгѓѓгѓ€пј€\n  гѓ†г‚№гѓ€ж©џиѓЅгЃ®гЃїгЃ®еҐ‘зґ„пј€еђ«г‚Ђ\n  гѓ†г‚№гѓ€е±•й–‹гЃ®гЃїпј‰гЂ‚",
                    policy4: "жіЁпјљдёЉиЁгЃ®еҐ‘зґ„гЃ«еЉ гЃ€гЃ¦гЂЃд»–гЃ®еҐ‘зґ„\n  дёЉиЁгЃЇз‰№е®љгЃ®зЉ¶жіЃгЃ«еїњгЃгЃ¦иЂѓгЃ€г‚‹гЃ“гЃЁгЃЊгЃ§гЃЌгЃѕгЃ™гЂЃ\n  YFOй–‹з™єгѓЃгѓјгѓ гЃ«йЂЈзµЎгЃ—гЃ¦е…Ґж‰‹гЃ—гЃ¦гЃЏгЃ гЃ•гЃ„\n  жЋг‚‰гЃ‹гЃ«гЃ™г‚‹гЂ‚",
                    stepVerification: "2ж®µйљЋиЄЌиЁј",
                    authentication: "Google AuthenticatorгЂЃAuthyгЂЃгЃѕгЃџгЃЇд»»ж„ЏгЃ®2FAг‚ўгѓ—гѓЄг‚’д»‹гЃ—гЃ¦2и¦Ѓзґ иЄЌиЁјг‚’жњ‰еЉ№гЃ«гЃ™г‚‹QRг‚ігѓјгѓ‰г‚’г‚№г‚­гѓЈгѓігЃ™г‚‹гЃ‹гЂЃг‚Єгѓјг‚»гѓігѓ†г‚Јг‚±гѓјг‚їгѓјг‚­гѓјг‚’е…ҐеЉ›гЃ—гЃѕгЃ™",
                    authenticaorKey: "гѓђгѓЄгѓ‡гѓјг‚їгѓјг‚­гѓј",
                    generate: "[з”џж€ђ]г‚’г‚ЇгѓЄгѓѓг‚ЇгЃ—гЃѕгЃ™",
                    buy: "иІ·гЃ†",
                    indicator: "зґўеј•",
                    tvl: "еђ€иЁ€",
                    apy: "е№ґе€©",
                    lock: "й–‰гЃиѕјг‚Ѓг‚‹",
                    days: "з©є",
                    more: "г‚‚гЃЈгЃЁ",
                    daily: "жЇЋж—ҐгЃ®й‡‘е€©",
                    monthly: "жњ€е€©",
                    yearly: "е№ґе€©",
                    validNumber: "з„ЎеЉ№гЃЄз•ЄеЏ·",
                    insufficient: "ж®‹й«дёЌи¶ігЃ§гЃ™",
                    stakeAmount: "иіЄжЁ©йЎЌ",
                    max: "е…ЁгЃ¦",
                    swap: "дёЎж›ї",
                    price: "дѕЎж ј",
                    legalDisclaimer: "жі•зљ„ж”ѕжЈ„еЈ°жЋ",
                    legalText: "гЃ“гЃ®иі‡ж–™гЃ«иЁиј‰гЃ•г‚ЊгЃ¦гЃ„г‚‹жѓ…е ±гЃЇгЂЃжЉ•иі‡г‚ўгѓ‰гѓђг‚¤г‚№гЂЃиІЎе‹™г‚ўгѓ‰гѓђг‚¤г‚№гЂЃеЏ–еј•г‚ўгѓ‰гѓђг‚¤г‚№гЂЃгЃѕгЃџгЃЇгЃќгЃ®д»–гЃ®зЁ®йЎћгЃ®г‚ўгѓ‰гѓђг‚¤г‚№г‚’ж§‹ж€ђгЃ™г‚‹г‚‚гЃ®гЃ§гЃЇгЃ‚г‚ЉгЃѕгЃ›г‚“гЂ‚иі‡ж–™гЃ®е†…е®№г‚’гЃќгЃ®г‚€гЃ†гЃ«ж‰±гЃЈгЃ¦гЃЇгЃЄг‚ЉгЃѕгЃ›г‚“гЂ‚гЃ“гЃ®иі‡ж–™гЃЇжѓ…е ±жЏђдѕ›гЃ®гЃїг‚’з›®зљ„гЃЁгЃ—гЃ¦гЃЉг‚ЉгЂЃпј€iпј‰гЃ„гЃ‹гЃЄг‚‹е€©з›ЉгЃѕгЃџгЃЇж ЄејЏгЃ«жЉ•иі‡гЃ™г‚‹гЂЃгЃѕгЃџгЃЇеЈІиІ·гЃ™г‚‹гЂЃгЃ‚г‚‹гЃ„гЃЇжЉ•иі‡гЃѕгЃџгЃЇеЏ–еј•ж€¦з•ҐгЃ«еЏ‚еЉ гЃ™г‚‹гЃџг‚ЃгЃ®з”ігЃ—е‡єгЃѕгЃџгЃЇз”ігЃ—е‡єгЃ®е‹§иЄгЃ§гЃЇгЃ‚г‚ЉгЃѕгЃ›г‚“гЂ‚дјљиЁ€гЂЃжі•еѕ‹гЂЃзЁЋе‹™гЃ«й–ўгЃ™г‚‹г‚ўгѓ‰гѓђг‚¤г‚№гЂЃжЉ•иі‡гЃ«й–ўгЃ™г‚‹жЋЁеҐЁдє‹й …гЂЃгЃѕгЃџгЃЇпј€iiiпј‰YFOгѓ€гѓјг‚ЇгѓігЃ®е…¬ејЏеЈ°жЋг‚’жЏђдѕ›гЃ™г‚‹гЃ“гЃЁг‚’з›®зљ„гЃЁгЃ—гЃ¦гЃ„гЃѕгЃ™гЂ‚жѓ…е ±гЃ®ж­ЈзўєжЂ§гЃѕгЃџгЃЇе®Ње…ЁжЂ§гЂЃгЃ‚г‚‹гЃ„гЃЇгѓ‡г‚ёг‚їгѓ«иі‡з”ЈгЂЃй‡‘ићЌе•†е“ЃгЂЃгЃѕгЃџгЃЇгЃќгЃ®д»–гЃ®её‚е ґгЃѕгЃџгЃЇзµЊжё€зљ„жЋЄзЅ®гЃ®е°†жќҐгЃ®гѓ‘гѓ•г‚©гѓјгѓћгѓіг‚№гЃ«й–ўгЃ—гЃ¦гЂЃиЎЁжЋгЃѕгЃџгЃЇдїќиЁјгЃЇиЎЊг‚Џг‚ЊгЃљгЂЃжЋз¤єгЃѕгЃџгЃЇй»™з¤єгЃ•г‚ЊгЃ¦гЃ„гЃѕгЃ›г‚“гЂ‚\n  \nYFOгѓ€гѓјг‚ЇгѓігѓЃгѓјгѓ гЃЇгЂЃжљ—еЏ·йЂљиІЁг‚’иіје…ҐгЂЃиІ©еЈІгЂЃгЃѕгЃџгЃЇдїќжЊЃгЃ™г‚‹гЃ“гЃЁг‚’жЋЁеҐЁгЃ—гЃ¦гЃ„гЃѕгЃ›г‚“гЂ‚жЉ•иі‡г‚’ж±єе®љгЃ™г‚‹е‰ЌгЃ«гЂЃгѓ‡гѓҐгѓјгѓ‡гѓЄг‚ёг‚§гѓіг‚№г‚’е®џж–ЅгЃ—гЂЃгѓ•г‚Ўг‚¤гѓЉгѓіг‚·гѓЈгѓ«г‚ўгѓ‰гѓђг‚¤г‚¶гѓјгЃ«з›ёи«‡гЃ—гЃ¦гЃЏгЃ гЃ•гЃ„гЂ‚\n  \nYFOг‚’иіје…ҐгЃ™г‚‹гЃ“гЃЁгЃ«г‚€г‚ЉгЂЃиЁје€ёг‚„жЉ•иі‡г‚’иіје…ҐгЃ—гЃЄгЃ„гЃ“гЃЁгЃ«еђЊж„ЏгЃ—гЂЃгѓЃгѓјгѓ г‚’з„Ўе®ігЃ«дїќгЃЎгЂЃз™єз”џгЃ™г‚‹еЏЇиѓЅжЂ§гЃ®гЃ‚г‚‹жђЌе¤±г‚„зЁЋй‡‘гЃ«гЃ¤гЃ„гЃ¦иІ¬д»»г‚’иІ г‚ЏгЃЄгЃ„гЃ“гЃЁгЃ«еђЊж„ЏгЃ™г‚‹г‚‚гЃ®гЃЁгЃ—гЃѕгЃ™гЂ‚гЃѕгЃџгЂЃгѓЃгѓјгѓ гЃЊгѓ€гѓјг‚Їгѓіг‚’гЂЊзЏѕзЉ¶жњ‰е§їгЂЌгЃ§жЏђз¤єгЃ—гЂЃг‚µгѓќгѓјгѓ€г‚„г‚µгѓјгѓ“г‚№г‚’жЏђдѕ›гЃ™г‚‹еї…и¦ЃгЃЊгЃЄгЃ„гЃ“гЃЁгЃ«еђЊж„ЏгЃ™г‚‹г‚‚гЃ®гЃЁгЃ—гЃѕгЃ™гЂ‚ YFOгѓ€гѓјг‚ЇгѓігЃЁгЃќгЃ®гѓЃгѓјгѓ гЃ‹г‚‰гЃ®гѓ•г‚©гѓјгѓ г‚’жњџеѕ…гЃ™г‚‹еї…и¦ЃгЃЇгЃ‚г‚ЉгЃѕгЃ›г‚“гЂ‚\n  \nYFOгЃЇг‚Ѕгѓјг‚·гѓЈгѓ«гѓЌгѓѓгѓ€гѓЇгѓјг‚­гѓіг‚°з”ЁгЃ®г‚ігѓџгѓҐгѓ‹гѓ†г‚Јдё»е°ЋгЃ®е€†ж•Јећ‹гѓ•г‚Ўг‚¤гѓЉгѓіг‚№пј€DeFiпј‰гѓ€гѓјг‚ЇгѓігЃ§гЃ‚г‚ЉгЂЃз™»йЊІгЃ•г‚ЊгЃџгѓ‡г‚ёг‚їгѓ«йЂљиІЁгЃ§гЃЇгЃ‚г‚ЉгЃѕгЃ›г‚“гЃЊгЂЃгѓЃгѓјгѓ гЃЇжљ—еЏ·йЂљиІЁг‚’ж”їеєњгЃЊз¦Ѓж­ўгЃ—гЃ¦гЃ„г‚‹ењ°еџџгЃ®её‚ж°‘гЃЇгЃќг‚Њг‚’иіје…ҐгЃ—гЃЄгЃ„гЃ“гЃЁг‚’еј·гЃЏгЃЉе‹§г‚ЃгЃ—гЃѕгЃ™гЂ‚з‰№е®љгЃ®ењ°еџџгЂ‚иіје…ҐгЃ™г‚‹е‰ЌгЃ«гЂЃеї…гЃљењ°еџџгЃ®жі•еѕ‹гЃЉг‚€гЃіи¦Џе€¶г‚’йЃµе®€гЃ—гЃ¦гЃ„г‚‹гЃ“гЃЁг‚’зўєиЄЌгЃ—гЃ¦гЃЏгЃ гЃ•гЃ„гЂ‚\n  \n$PгѓЃгѓјгѓ гЃЇгЂЃдё–з•ЊгЃ®гЃ•гЃѕгЃ–гЃѕгЃЄењ°еџџгЃ‹г‚‰гЃ®е€†ж•Јећ‹гЃ®еЂ‹дєєгЃ§гЃ‚г‚ЉгЂЃдё–з•ЊгЃ«е€©з›Љг‚’г‚‚гЃџг‚‰гЃ—гЂЃгЃќгЃ®г‚Ёг‚іг‚·г‚№гѓ†гѓ г‚’ж”№е–„гЃ§гЃЌг‚‹е€†ж•Јећ‹г‚ўгѓ—гѓЄг‚±гѓјг‚·гѓ§гѓіг‚’ж§‹зЇ‰гЃ—гЃ¦гЃ„гЃѕгЃ™гЂ‚\n  \nеЂ‹дєєгЂЃдјЃжҐ­гЂЃжњ‰иѓЅгЃЄе›ЈдЅ“гЃ‹г‚‰$PгѓЃгѓјгѓ гЃ«дЅ•гЃ«жЉ•иі‡гЃ—гЂЃдЅ•гЃ«жЉ•иі‡гЃ™гЃ№гЃЌгЃ§гЃЄгЃ„гЃ‹г‚’е°‹гЃ­г‚‹гѓЂг‚¤гѓ¬г‚Їгѓ€гѓЎгѓѓг‚»гѓјг‚ёгЃЊйќћеёёгЃ«е¤љгЃ„гЃџг‚ЃгЂЃз§ЃгЃџгЃЎгЃЇг‚Єгѓјгѓ—гѓігЃ§йЂЏжЋжЂ§гЃЊй«гЃЏгЂЃDefiиі‡з”ЈгЃ®гѓЄг‚№г‚ЇгЃЊй«гЃ„гЃЊYFOгЃ«гЃ¤гЃ„гЃ¦г‚ігѓџгѓҐгѓ‹гѓ†г‚ЈгЃ«г‚ўгѓ‰гѓђг‚¤г‚№гЃ—гЃ¦гЃ„гЃѕгЃ™гЂ‚гѓ—гѓ­г‚ёг‚§г‚Їгѓ€гЃЇй«е“ЃиіЄгЃ®гѓ—гѓ©гѓѓгѓ€гѓ•г‚©гѓјгѓ г‚’ж§‹зЇ‰гЃ—гЃѕгЃ™гЂ‚\n  \nгѓЃгѓјгѓ гЃ‹г‚‰гЃ®иІЎе‹™г‚ўгѓ‰гѓђг‚¤г‚№гЃ«гЃ¤гЃ„гЃ¦иіЄе•ЏгЃ™г‚‹дєєгЃЊеў—гЃ€гЃ¦гЃ„г‚‹гЃџг‚ЃгЂЃYFOгѓЃгѓјгѓ гЃЇеЂ‹дєєгЃ«иІЎе‹™г‚¬г‚¤гѓЂгѓіг‚№г‚„г‚ўгѓ‰гѓђг‚¤г‚№г‚’жЏђдѕ›гЃ—гЃ¦гЃ„гЃѕгЃ›г‚“гЂ‚гЃѕгЃџгЂЃDeFiиі‡з”ЈгЃ«жЉ•иі‡гЃ™г‚‹гЃ“гЃЁгЃ§гЂЃжЉ•иі‡г‚’е¤±гЃ†гѓЄг‚№г‚ЇгЃЊгЃ‚г‚ЉгЃѕгЃ™гЂ‚\n  \nжЉ•иі‡гЃ™г‚‹гЃЁгЃЌгЃЇеёёгЃ«гЃ‚гЃЄгЃџи‡Єиє«гЃ®з ”з©¶г‚’гЃ—гЃ¦гЃЏгЃ гЃ•гЃ„гЂ‚"
                }, "TГјrkГ§e": {
                    $P: "YFI BД°R",
                    welcomeV2: "YFO Г‡iftliДџi 2.0",
                    welcomeText: "DГјЕџГјk risk, Г§eЕџitlendirilmiЕџ madencilik stratejisi",
                    launchApp: "Claim & Swap",
                    whitePaper: "Beyaz kaДџД±t",
                    audit: "Dpanquan.com denetimi",
                    copyright: "2021 Copyright $P.",
                    reserved: "Telif hakkД± saklД±dД±r!",
                    dashboard: "Panel",
                    vaults: "tonozlar",
                    earn: "Madencilik",
                    lending: "Г–dГјnГ§ verme",
                    statistics: "Д°statistikler",
                    governance: "yГ¶netim",
                    wiki: "Wiki",
                    faqs: "ortak sorun",
                    settings: "Ayarlar",
                    connectWallet: "CГјzdanД± BaДџla",
                    disconnect: "BaДџlantД±yД± kes",
                    search: "Arama...",
                    earnings: "KazanГ§larД±nД±z",
                    pendingHarvest: "Bekleyen kazanГ§lar",
                    harvest: "Hasat",
                    tvlText: "Toplam",
                    yfoPrice: "Mevcut YFO fiyatД±",
                    totalBorrowed: "Toplam Г–dГјnГ§ AlД±nan",
                    circulation: "SirkГјlasyon hacmi",
                    marketCap: "Piyasa DeДџeri",
                    provideLiquidity: "Likidite SaДџlayД±n",
                    browserview: "GГ¶rГјnГјm",
                    availableVaults: "Mevcut tonozlar",
                    sortBy: "sД±ralama",
                    hideBalances: "0 bakiye Г¶Дџesini gizle",
                    pairAssets: "Д°Еџlem Г§ifti",
                    get: "Al",
                    back: "Geri dГ¶n",
                    select: "SeГ§",
                    collateral: "teminat",
                    pledge: "Rehin",
                    exitPledge: "Г‡Д±kД±Еџ TaahhГјdГј",
                    redeem: "Teklif (Ana Para + Faiz)",
                    retrieve: "Ana parayД± al",
                    repay: "geri Г¶deme",
                    repayAll: "TГјmГјnГј geri Г¶de",
                    supply: "Depozito",
                    borrow: "Г¶dГјnГ§ almak",
                    limit: "SД±nД±r",
                    balance: "Denge",
                    totalSupply: "Toplam Arz ToplamД±",
                    rewards: "Г¶dГјl",
                    trading: "Ticaret",
                    approve: "Yetkilendirme",
                    claim: "Г‡ekilme Г¶dГјlГј",
                    unable: "Durduruldu",
                    exit: "Г‡Д±kД±Еџ",
                    withdraw: "Geri Г§ekil",
                    withdrawAll: "TГјmГјnГј geri Г§ek",
                    stake: "Rehin",
                    deposit: "Para yatД±rma",
                    depositAll: "TГјmГјnГј yatД±r",
                    deposited: "YatД±rД±lan",
                    borrowed: "Г–dГјnГ§ alД±nmД±Еџ",
                    available: "MГјsait",
                    ConfirmFirst: "HatД±rlatma: LГјtfen para yatД±rmadan Г¶nce yetkilendirin",
                    loading: "YГјkleniyor...",
                    netTip: "Ethereum ana aДџД±, lГјtfen cГјzdanД±nД±za geГ§in",
                    netDelayTip: "Ethereum ana aДџД± henГјz aГ§Д±k deДџil",
                    feeTip: "Para Г§ekme iЕџleminde kГўrД±n %0,3'Гј oranД±nda bir Гјcret alД±nД±r, anaparaya zarar gelmez",
                    note: "Sor",
                    assets: "VarlД±klar",
                    apyCalculations: "YД±llД±k faiz oranД± hesaplama",
                    farmApr: "TarД±m Verimi",
                    lpContract: "LP sГ¶zleЕџmesi",
                    all: "TГјmГј",
                    stablecoins: "Stabilcoin'ler",
                    others: "DiДџer",
                    market: "Pazar",
                    depositMarket: "Mevduat PiyasasД±",
                    depositApy: "Mevduat oranД±",
                    borrowMarket: "Г¶dГјnГ§ piyasasД±",
                    leftBorrow: "Kalan Г¶dГјnГ§ alД±nabilir miktar",
                    borrowApy: "borГ§lanma oranД±",
                    borrowAvailiable: "Fazla Г¶dГјnГ§ alД±nabilir",
                    priceSource: "Fiyat KaynaДџД±",
                    yourDeposit: "Depozitonuz",
                    yourLoan: "Krediniz",
                    usedRatio: "KullanД±lan oran",
                    enterSupplyAmount: "LГјtfen depozito tutarД±nД± girin",
                    enterRedeemAmount: "LГјtfen tutarД± girin (anapara)",
                    enterRepayAmount: "LГјtfen geri Г¶deme tutarД±nД± girin (anapara)",
                    enterBorrowAmount: "LГјtfen kredi tutarД±nД± giriniz (en fazla havuz tutarД±nД±n %80'i kadardД±r)",
                    marketDetails: "Pazar AyrД±ntД±larД±",
                    poolVolume: "havuz hacmi",
                    depositAmount: "Depozito miktarД±",
                    borrowAmount: "BorГ§ tutarД±",
                    depositLimit: "Para yatД±rma limiti",
                    borrowLimit: "Г¶dГјnГ§ alma limiti",
                    reserveRatio: "rezerv oranД±",
                    exchangeRate: "DГ¶viz Kuru",
                    liquidationFine: "Tasfiye cezasД±",
                    maxPledgeRate: "Maksimum rehin oranД±",
                    fundUtilization: "Fon KullanД±mД±",
                    marketLoanable: "Piyasa fazlasД± Г¶dГјnГ§ verilebilir",
                    totalBorrow: "Toplam BorГ§",
                    totalDeposit: "Toplam Para YatД±rma",
                    operation: "Д°Еџlem",
                    farmContract: "Г‡iftlik SГ¶zleЕџmesi",
                    vaultContract: "tonozlar SГ¶zleЕџmesi",
                    myAddress: "Adresim",
                    totalDepositIn: "Toplam Para YatД±rma",
                    currentEarning: "Cari KazanГ§lar",
                    staked: "Rehin verildi",
                    transaction: "Д°Еџlem",
                    pending: "Д°Еџlem kuyruДџa alД±ndД± вЂ‹вЂ‹ve paketlendi...",
                    confirm: "Onayla",
                    confirming: "Zincir iГ§i iЕџlem onayД± bekleniyor",
                    confirmed: "OnaylandД±",
                    cancel: "Д°ptal",
                    canceled: "Д°ptal edildi",
                    success: "Д°Еџlem baЕџarД±lД± oldu",
                    failed: "Д°Еџlem yГјrГјtme baЕџarД±sД±z",
                    txFailed: "Д°Еџlem yГјrГјtme baЕџarД±sД±z",
                    copied: "Kopyalama baЕџarД±lД±",
                    computePower: "GerГ§ek zamanlД± bilgi iЕџlem gГјcГј ve Token veri parametreleri",
                    aboutWiki: "YFO Bilgi GiriЕџ",
                    aboutDex: "$P vizyonu, birkaГ§ merkezi olmayan finansal uygulama (Defi - Apps) oluЕџturmak ve ardД±ndan bu ГјrГјnleri tam teЕџekkГјllГј projelere dГ¶nГјЕџtГјrmek ve bГ¶ylece $P ekosisteminin deДџerini artД±rmaktД±r. GerГ§ek kullanД±m durumlarД± ve basit kullanД±m yГ¶ntemleri olmayan birkaГ§ merkezi olmayan finansal (Defi) ГјrГјnГјn kargaЕџasД±yla, Г¶zellikle Ethereum blok zincirinin geniЕџ bir Еџekilde anlaЕџД±lmasД±nД± gerektirdiДџinden, Defi kullanД±cД±larД± iГ§in ГјrГјn kullanД±mД± zor olmuЕџtur. DiДџer bir yaygД±n sorun, birГ§ok Defi projesinin basit takas web siteleri oluЕџturarak ve ardД±ndan daha fazla geliЕџtirmeyi durdurarak Г¶nerdiДџi yanlД±Еџ deДџerdir. Bu, Defi takasД±nД±n sunabileceДџi her ЕџeymiЕџ gibi gГ¶rГјnmesini saДџlar, ancak bu Г¶yle deДџildir. $P projesi ve farklД± Гјlkelerden merkezi olmayan ekibi, platformu etrafД±nda birkaГ§ Defi ГјrГјnГј geliЕџtirip inЕџa ederek sГјrdГјrГјlebilir bir ekosistem yaratmayД± vaat ediyor ve bir Defi projesinin olmasД± gereken nihai gerГ§ek deДџerini garanti ediyor. $P, Г§eЕџitli Defi uygulamalarД± oluЕџturmayД± amaГ§layan topluluk odaklД± bir blok zinciri projesidir. yaratД±cД± ve yД±kД±cД± blok zinciri Defi fikirlerine sahip bir platform, dolayД±sД±yla Г¶ykГјnmeye deДџer ilk son teknoloji Defi projesi haline geldi.\n  ",
                    aboutApp: "$P, hem $P projesinin $P ekibi hem de merkezi olmayan $P ГјrГјn kullanД±cД±larД± topluluДџu tarafД±ndan kullanД±lmak Гјzere Ethereum Гјzerine inЕџa edilmiЕџ birkaГ§ Defi uygulamasД±ndan (Defi DApps) oluЕџan bir ekosistem Г¶ngГ¶rГјyor. Bununla birlikte, $P Finance, topluluk ve kullanД±cД±larД± iГ§in $P ekosistemini geliЕџtirmek iГ§in gerГ§ek Defi deДџerleri Гјretmek amacД±yla merkezi olmayan ГјrГјnler oluЕџturmak Гјzere dГјzenlenmiЕџ, topluluk odaklД± bir Defi projesidir.",
                    aboutBasis: "$P, bir yandan topluluДџa, projeye ve kullanД±cД±lara arzu edilen kazanД±mlar saДџlarken diДџer yandan biyosferini bГјyГјtmeye yardД±mcД± olmak iГ§in bu Defi ГјrГјnlerini geliЕџtirmeye, pazarlamaya ve piyasaya sГјrmeye yardД±mcД± olacak geГ§ici etkin bir ekip olarak hareket eden ekiple sistematik olarak yeni Defi ГјrГјnleri Гјretmeye kendini adamД±ЕџtД±r.",
                    aboutMechanism: "$P ayrД±ca, paydaЕџlara kar paylarД± (Г¶dГјller) olarak gelir daДџД±tmak amacД±yla topluluДџu tarafД±ndan yatД±rД±m yapД±lan Defi ГјrГјnlerini oluЕџturarak merkezi olmayan bir faizsiz finansal ekosistemi gГјГ§lendiren merkezi olmayan bir risk sermayesi (DVC) olarak da tanД±mlanabilir.",
                    aboutCommunity: "$P Ekosistemi, Г§eЕџitli benzersiz merkezi olmayan finans ГјrГјnlerine ev sahipliДџi yapacak. $P ГјrГјnleri, merkezi olmayan finansД±n gerГ§ek anlamД±nД± yeniden yaratma arayД±ЕџД±nda, simgesi YFONE Simgesi ile baДџlantД±lД± olacak.",
                    aboutDefi: "$P ГјrГјnleri, merkezi olmayan finansД±n gerГ§ek anlamД±nД± yeniden yaratma arayД±ЕџД±nda, simgesi YFONE Token'a baДџlanacak.\nYFONE jetonunun ana kullanД±m durumu, sahiplerine bu ГјrГјnlerden elde edilen gelir Гјzerinde hak talebinde bulunacak her ГјrГјn iГ§in tek yГ¶netiЕџim jetonu olacaktД±r.\n$P ekibi piyasayД± kurarken YFONE tokenlerini stake etmek iГ§in bir platform olacak ve daha sonra, sahipleri sadece token tutmaktan bГјyГјk fayda saДџlayacak. Ortaklarla Г§atallaЕџarak ve sД±fД±rdan inЕџa ederek tek bir ekosisteme baДџlД± 1000'den fazla merkezi olmayan uygulama hayal edin, hepsi YFO Token ile entegre. Bu ekosistem son derece bГјyГјk olacak ve sГјrekli bГјyГјyecek Tamamen merkezi olmayan bir sistem ve sГјrekli bГјyГјyor, Defi'nin gerГ§ek anlamД± bu.\n  ",
                    aboutVaults: "Makineli tГјfek havuzu, hash oranД±na, madencilik zorluДџuna ve ticaret platformunun mevcut fiyatД±na gГ¶re en karlД± madeni parayД± belirler. Sadece bir madeni para Г§Д±karabilen sД±radan madencilik havuzlarД±ndan farklД±dД±r. Bir madeni para uzun sГјre kazД±ldД±ktan sonra zorluk artacak ve madencilik havuzu baЕџka bir madeni paraya geГ§ecektir. YFO platformu, en yГјksek karД± elde etmek iГ§in piyasada gГ¶rГјnen madencilik havuzlarД±na gГ¶re gerГ§ek zamanlД± olarak madencilik havuzlarД± ekleyecektir. Ve esas olarak, en yГјksek karД± elde etmek iГ§in her yarД±m saatte bir yeniden yatД±rД±m yapmak, sГ¶zleЕџmenin otomatik iЕџlevi aracД±lД±ДџД±yladД±r.",
                    aboutLending: "DeFi dГјnyasД±nda, merkezi olmayan borГ§ verme sistemi son derece Г¶nemli bir yol ve tГјm DeFi sisteminin temel taЕџД± sistemidir.Finansal sistemi gerГ§ek dГјnyada simГјle edebilir, farklД± kullanД±cД±larД±n finansal ihtiyaГ§larД±nД± anlayabilir ve kullanД±cД±lara karЕџД±lД±klД± finansman saДџlayabilir. Platform; homojenizasyon token standardД±nД± karЕџД±layan tГјm Еџifreli varlД±klarД±n marjinal maliyet olmadan Г¶dГјnГ§ verilmesini destekleyebilir ve piyasanД±n kredi verme oranД±nД± piyasa arz ve talebine gГ¶re otomatik olarak hesaplayД±p ayarlayabilir. Bu nedenle, YFO ekosistemi V2 versiyonunda da Г¶nemli iЕџlevler yapД±yor.Г–dГјnГ§ vermede platform Г¶z bakД±m belirteГ§leri mevcut YFO ve OBS'dir.",
                    aboutText: "$P vizyonu bГ¶ylece $P ekosistemin deДџerini artД±rarak, birden fazla finansal uygulamalar (Defi-Uygulamalar) merkezi olmayan oluЕџturmak ve sonra olgun projelerine bu ГјrГјnleri geliЕџtirmektir. BazД± merkezi olmayan finans (Defi) ГјrГјnleri pratik kullanД±m durumlarД± ve basit kullanД±m yГ¶ntemlerine sahip olduДџundan, ГјrГјnlerin kullanД±mД±, Ethereum blockchain geniЕџ bir anlayД±Еџ gerektirir, Г¶zellikle Г§ГјnkГј Defi kullanД±cД±larД± iГ§in zor olmuЕџtur. BaЕџka bir ortak sorun daha da geliЕџmesini durdurma ardД±ndan basit bir deДџiЕџim site oluЕџturma ve birГ§ok Defi projeleri gГјndeme yanlД±Еџ deДџerdir. Defi alД±ЕџveriЕџini saДџlamak mГјmkГјn gГ¶rГјlmemektedir yapar, ama bu durum bГ¶yle deДџil. $P projesi ve farklД± Гјlkelerden merkezi olmayan ekipleri, platformu etrafД±nda birden fazla Defi ГјrГјnГј geliЕџtirip inЕџa ederek sГјrdГјrГјlebilir bir ekosistem yaratmayД± ve bir Defi projesinin nihai gerГ§ek deДџerini garanti etmeyi vaat ediyor. $P, platformunda yenilikГ§i ve yД±kД±cД± blok zinciri Defi konseptleri ile birden fazla Defi uygulamasД± oluЕџturmayД± ve bГ¶ylece Г¶ykГјnmeye deДџer ilk sД±nД±r Defi projesi olmayД± hedefleyen topluluk odaklД± bir blok zinciri projesidir.",
                    aboutECO: "$P, $P projesinin $P ekibi ve merkezi olmayan $P ГјrГјn kullanД±cД±larД± topluluДџu tarafД±ndan kullanД±lmak Гјzere Ethereum Гјzerine inЕџa edilmiЕџ birden fazla Defi uygulamasД±ndan (Defi DApps) oluЕџan bir ekosistem Г¶ngГ¶rГјyor. Bununla birlikte, $P Finance, topluluДџun ve kullanД±cД±larД±nД±n $P ekosistemini geliЕџtirmek iГ§in gerГ§ek Defi deДџeri Гјretmeyi amaГ§layan merkezi olmayan ГјrГјnler oluЕџturmayД± amaГ§layan topluluk odaklД± bir Defi projesidir. $P sistematik olarak yeni Defi ГјrГјnleri Гјretmeye kararlД±dД±r.GeГ§ici bir aktivasyon ekibi olarak $P, topluluklar, projeler ve kullanД±cД±lar iГ§in ideal faydalar saДџlarken biyosferini geliЕџtirmeye yardД±mcД± olmak iГ§in bu Defi ГјrГјnlerinin geliЕџtirilmesine, pazarlanmasД±na ve piyasaya sГјrГјlmesine yardД±mcД± olacaktД±r. $P'nin, Defi ГјrГјnleri oluЕџturarak merkezi olmayan, faizsiz bir finansal ekosistemi gГјГ§lendiren merkezi olmayan bir risk sermayesi (DVC) olduДџu da sГ¶ylenebilir.",
                    overview: "genel bakД±Еџ",
                    w1: "Vault nedir?",
                    w2: "YFO merkezi olmayan kredilendirme?",
                    w3: "Ekibinize katД±lmak ve bu harika projeye katkД±da bulunmak iГ§in hangi becerilere ihtiyacД±m var?",
                    w4: "$P Еџu anda ne tГјr kripto para birimini kabul ediyor?",
                    w5: "$P'a nasД±l yatД±rД±m yapabilir ve kar edebilirim?",
                    w6: "V2 sГјrГјmГј neden yalnД±zca Binance ekolojik zincirini kullanabilir?",
                    w7: "$P ne anlama geliyor?",
                    r1: 'Makineli tГјfek havuzu, gerГ§ek zamanlД± madencilik gelir dГјzeyine gГ¶re aynД± algoritmanД±n farklД± para birimlerinin madenciliДџi ve madencilik iГ§in hesaplama gГјcГјnГјn otomatik olarak daha yГјksek verimli bir para birimine Г§evrilmesi sГјrecidir.DeДџeri iГ§in daha fazla deДџer yaratmaktД±r. kullanД±cД±lar iГ§in tek bir para biriminden daha yГјksek kazanГ§ elde edilir. AdД±nД±n "makineli tГјfek havuzu" olmasД±nД±n nedeni, bu tГјr bir operasyonun makineli tГјfek ateЕџlemeye benzer, sГјrekli geГ§iЕџ yapmasД±dД±r.',
                    r11: "Makineli tГјfek havuzunun Г¶zelliklerine gГ¶re, makineli tГјfek havuzunun Г§alД±ЕџmasД±, hesaplama gГјcГјnГј bir madencilik havuzunda yoДџunlaЕџtД±rmaktД±r.Hangi madeni paranД±n Г§Д±karД±lacaДџД±nД± belirtmez, ancak aynД± madencilik algoritmasД±nda doДџrudan birkaГ§ proje arar. hesaplama gГјcГј hangi projenin kГўrД± daha yГјksekse o projeye kazmak iГ§in giderseniz bu projenin kГўrД± dГјЕџer ve sonunda en iyi kГўrД± elde etmek iГ§in baЕџka bir projeye geГ§ersiniz.",
                    r12: "Makineli tГјfek havuzunun avantajД±, kullanД±cД±nД±n gelirini en Гјst dГјzeye Г§Д±karД±r: gelir, her yatД±rД±mcД±nД±n ilgi odaДџД±dД±r. Г‡oДџu insanД±n DeFi projelerine yatД±rД±m yapmayД± seГ§mesinin nedeni, getirilerinin nispeten yГјksek olmasД± ve DeFi makineli tГјfek havuzunun madencilik gelirini en Гјst dГјzeye Г§Д±karmamД±za yardД±mcД± olabilmesidir. Bunun nedeni, DeFi makineli tГјfek havuzunun Г¶zelliДџinin, gerГ§ek zamanlД± madencilik geliri dГјzeyine dayalД± olarak likit madencilik iГ§in fonlarД± daha yГјksek verimli DeFi projelerine kaydД±rmasД± ve yatД±rД±mcД±larД±mД±za daha yГјksek madencilik geliri saДџlamasД±dД±r.",
                    r13: "YFO platformunun DeFi makineli tГјfek havuzu, yalnД±zca gerГ§ek zamanlД± geГ§iЕџ yoluyla gelirimizi artД±rmakla kalmaz, aynД± zamanda gelirimizi en Гјst dГјzeye Г§Д±karmak iГ§in fonlarД± etkin bir Еџekilde kullanmak iГ§in yarД±m saatlik bir bileЕџik faiz kuralД± da getirir. (Saatlik bileЕџik faiz yarД±m saatte hesaplanД±r ve her yarД±m saatlik yatД±rД±m anaparamД±z ve faizimiz bir sonraki saatin yatД±rД±m anaparasД±na dahil edilir ve her yarД±m saatte bir bileЕџik faizden yararlanД±lД±r.)",
                    r14: "SeГ§ilmiЕџ projeler: Piyasada gГ¶z kamaЕџtД±rД±cД± bir dizi likit madencilik projesi bulunmaktadД±r ve kullanД±cД±larД±mД±z iГ§in en zor kД±sД±m projeyi seГ§mektir. GГјvenli, gГјvenilir ve son derece karlД± bir proje seГ§mek Г§ok zaman ve enerji gerektirir. AyrД±ca, piyasadaki hД±zlД± deДџiЕџimler nedeniyle, yeni bir proje Гјzerinde Г§alД±ЕџtД±ДџД±mД±zda ve baЕџlamaya hazД±r olduДџumuzda, fonlarД±n daha yГјksek getiri ile bir sonraki yeni projeye aktarД±lmasД±, bu da belirli bir sonuca neden olacak Еџekilde kolayca gerГ§ekleЕџmektedir. gecikme.",
                    r15: "Makineli tГјfek havuzunun avantajД±, varlД±k tarama ve konfigГјrasyon iЕџlevi saДџlayabilmesidir.Her proje, gГјvenliДџini ve faydalarД±nД± belirli bir Г¶lГ§Гјde deДџerlendirecektir. YFO platformunda, Г§eЕџitli projeler Гјzerinde araЕџtД±rma yapacak, yГјksek verimli DeFi projeleri seГ§ecek ve bizim iГ§in mГјmkГјn olan maksimum kГўrД± elde etmek iГ§in gerГ§ek zamanlД± olarak pozisyonlarД± ayarlayacak profesyoneller bulunur.",
                    r16: "SГјrekli sГ¶zleЕџme arama ihtiyacД± nedeniyle, platform gelirin %0,3'Гј kadar bir Гјcret talep edecektir.AmaГ§, DeFi madenciliДџinde her adД±mД±n 1-2 sГ¶zleЕџme gГ¶rГјЕџmesi gerektirmesidir.Zaman baЕџД±na maliyet birkaГ§ dolardan birkaГ§ dolara kadar deДџiЕџir. onlarca dolar. , SГ¶zleЕџmenin tamamД± her yarД±m saatte bir Г§aДџrД±lД±r. GAS Гјcretine ek olarak, bakiye zaman zaman YFO ve OBS Token'Д± geri satД±n almak iГ§in kullanД±lacaktД±r.",
                    r2: "Mevduat sertifikasД± belirteГ§leri saДџlayarak, aynД± varlД±k farklД± DeFi protokollerinde taЕџД±nД±r ve yeniden kullanД±lД±r, bГ¶ylece finansal piyasada fon kullanД±mД±nД±n verimliliДџi birkaГ§ kez iyileЕџtirilir; ayrД±ca diДџer DeFi protokolleriyle esnek bir Еџekilde birleЕџtirilebilir, bГ¶ylece otomatik iЕџlemi gerГ§ekleЕџtirin Г§ok seviyeli, Г§ok seviyeli, karmaЕџД±k ve iГ§ iГ§e finansal iЕџlemler.",
                    r21: "Ећu anda, DeFi'deki her tГјrlГј kredi platformu temelde ipotek kredisi modundadД±r.Genel tercih, Г§eЕџitli dijital para birimlerini sabit deДџerli mallara dГ¶nГјЕџtГјren rehinci modelidir ve ipotek deДџeri 100 olan mallar likit para birimi alД±r. 75'lik bir fiyat. Para birimi teminatД± yoluyla para elde etme eylemi Г§ok aptalca gГ¶rГјnГјyor, ancak yГјksek ipotek faiz oranД± ve DeFi piyasasД±ndaki devasa erken aЕџama getirisi daha yГјksek piyasa fonlarД±nД± Г§ekiyor.",
                    r22: "DeFi Еџu anda ipotekleri takas ve takas yoluyla Г§Г¶zГјyor ve marj sistemi aracД±lД±ДџД±yla kaldД±raГ§larД± Г§Г¶zГјyor ve sonunda kredi tГјretme iЕџlemine benzer bir iЕџlem gerГ§ekleЕџtiriyor. Binance Chain'de Г¶rnek olarak Bitcoin ve Ethereum'u alД±n. Г–rneДџin, Ethereum karЕџД±lД±ДџД±nda Bitcoin'i rehin vermek istiyorsanД±z, ЕџunlarД± yapabilirsiniz: Bitcoin'i belirli bir adreste kilitleyin.Ећu anda, bu Bitcoin jetonunu temsil eden bir BTC Binance Chain'de oluЕџturulacak ve ardД±ndan Binance Chain'de kullanabilirsiniz. AkД±llД± sГ¶zleЕџme, bu BTC'yi ipotek eder ve ilgili Token'i oluЕџturur; ardД±ndan Token ile belirli bir miktarda ETH satД±n alД±r ve ardД±ndan bu ETH'ye karЕџД±lД±k gelen teminat BTC'yi serbest bД±rakД±r ve iЕџlem sona erer. TГјm sГјreГ§, insan katД±lД±mД± olmadan akД±llД± sГ¶zleЕџmelerle yapД±lД±r. Ve vadesinden sonra geri Г¶demezseniz, teminatlД± Bitcoin'iniz gitmiЕџ olacak. AkД±llД± sГ¶zleЕџme sГјresi dolduДџunda yГјrГјtГјlecek ve taahhГјt ettiДџim bitcoin varsayД±lan iЕџleme tabi olacaktД±r. Bu, eЕџit ipotek elde edebilir, ancak Defi'nin cazibesi bГјyГјmede yatar, bu nedenle aЕџД±rД± ipotek gereklidir. BaЕџka bir deyiЕџle, spekГјlasyon iГ§in 1 Bitcoin ipotek edebileceДџimi, geГ§ici olarak 2 hatta 10 Bitcoin Г¶dГјnГ§ alabileceДџimi umuyorum.",
                    r3: "$P kГјresel bir ekiptir, herkes $P topluluДџuna katД±labilir, toplulukta daha fazlasД±nД± umuyoruz\n  Д°nsanlar $P ailesine katД±lД±r.Bir YFO Token'a sahip olduДџunuzda, tabii ki ekibimize katД±lsanД±z bile\n  Topluluk operatГ¶rleri, pazarlama personeli, teknik geri bildirim personeli vb. olarak hizmet verebilmemiz iГ§in katД±lmak iГ§in daha fazla kiЕџiye ihtiyacД±mД±z var.\n  Rol, belirli bir yeteneДџiniz varsa, lГјtfen topluluk yГ¶neticimizle iletiЕџime geГ§in.",
                    r4: "Ећu anda ana para birimleri ETH, BNB, USDT, vb. ve YFO, OBS JetonlarД±nД± kabul ediyor",
                    r5: "Platform, makineli tГјfek havuzlarД± (kasalar), borГ§ verme, tek para birimi havuzlarД± ve diДџer yГ¶ntemleri saДџlar.KullanД±cД±larД±n web sitesinde gerekli olan Token'Д± kendileri takip etmesi gerekir.\n  Kind belirli bir kar elde edecek.",
                    r6: "Makineli tГјfek havuzu her 30 dakikada bir yeniden yatД±rД±lД±r ve gaz Гјcreti Г§ok yГјksektir.Rehin depozitosu yeterli deДџilse, kullanД±cД±nД±n fonlarД± kaybolacaktД±r. Bu nedenle sadece ilk aЕџamada BSC ekolojik zincirini baЕџlattД±k. Ethereum versiyonu, TVL versiyonunun YFO-V2 versiyonunun BSC versiyonunun, Ethereum versiyonu aГ§Д±lmadan Г¶nce 5 milyon ABD dolarД±ndan fazla olmasД±nД± gerektirir.Belirli bir zamanda yeniden yatД±rД±m yapД±ldД±ДџД±nda, miktar belirli bir miktara ulaЕџtД±ДџД±nda, kullanД±cД±nД±n platformda olmasД± garanti edilebilir Yeniden yatД±rД±m miktarД± en fazla karД± alacaktД±r. Bu nedenle ilk etapta sadece Binance ekolojik zincirinin ГјrГјn alanД±nД± aГ§Д±yoruz (tabii ki geliЕџtirilmiЕџ ve her zaman gГјncellemeleri beklemektedir. Ethereum'un kodu Github Гјzerinde gГјncellenmiЕџtir).",
                    r7: "$P'nin vizyonu, birkaГ§ merkezi olmayan finansal uygulama (Defi-Apps) oluЕџturmak ve ardД±ndan bu ГјrГјnleri geliЕџtirmek ve dГ¶nГјЕџtГјrmektir.\n  Olgun projeler, $P ekosisteminin deДџerini artД±rД±r. $P projesi ve merkezi olmayan ekibi farklД± Гјlkelerden geliyor.\n  Birden fazla sistemin geliЕџtirilmesi ve inЕџasД± yoluyla sГјrdГјrГјlebilir bir Defi ekosistem ГјrГјnГј yaratmayД± taahhГјt eden Гјlkeler\n  Ve Defi projesinin ne olmasД± gerektiДџine dair nihai gerГ§ek deДџeri garanti edin. $P, topluluk odaklД± bir blok zinciri projesidir.\n  YaratД±cД± ve yД±kД±cД± blok zinciri Defi platform fikri temelinde birden fazla Defi uygulamasД± oluЕџturun, bГ¶ylece\n  Д°lk sД±nД±r Defi projesidir.",
                    countactUs: "Bize UlaЕџД±n",
                    cTitle: "$P Group, dijital ekonomide lider bir Еџirkettir. Blok zinciri alanД±nda temel teknoloji atД±lД±mД±na ve blok zinciri DEFI endГјstrisinin yukarД± ve aЕџaДџД± akД±ЕџД±na odaklanan blok zinciri teknolojisi ve endГјstrisinin entegrasyonuna adanmД±Еџ olan geliЕџtirme, endГјstriyel blok zinciri, dijital varlД±k iЕџlemleri, dijital varlД±k gГјvenli cГјzdanlarД±, dijital ekonomik araЕџtД±rmayД± iГ§erir. ve ademi merkeziyetГ§ilik Huahua ve diДџer iЕџletmeler kГјresel bir dijital ekonomi endГјstriyel ekosistemi oluЕџturur.\n\n$P, yГјzlerce Гјlke ve bГ¶lgede on milyonlarca kullanД±cД± iГ§in gГјvenli ve gГјvenilir deДџer aДџ hizmetleri saДџlayarak merkezi olmayan toplum hizmetleri uygulamasД±na baДџlД± kalmaktadД±r.",
                    officialListing: "Resmi ortak ajans",
                    myWallet: "Г§antam",
                    security: "Emniyet",
                    securityPolicy: "gГјvenlik stratejisi",
                    policy1: "Bu depodaki gГјvenlik aГ§Д±klarД±nД± nasД±l gГјvenli bir Еџekilde bildireceДџinizi gГ¶rГјn",
                    securityAdvisories: "GГјvenlik tavsiyesi",
                    policy2: "Bu depo iГ§in gГјvenlik Г¶nerilerini gГ¶rГјntГјleyin",
                    scope: "dГјrbГјn",
                    policy3: "Hata Г¶dГјl programД±nД±n kapsamД± akД±llД± sГ¶zleЕџmeleri kapsar\n  YFO ekosisteminde kullanД±n-Solidity veya\n  SГ¶zleЕџme klasГ¶rГјnde akД±llД± sГ¶zleЕџme\n  Dahil olmak Гјzere anlaЕџmayД± geri almaya istekli ana Еџube\n  Hala aktif kullanД±mД±n geГ§miЕџ daДџД±tД±mlarД±nД± gГ¶rГјyoruz\n  Herhangi bir hariГ§, YFI ile ilgili Ethereum ana aДџД±\n  YalnД±zca test yetenekleri iГ§in sГ¶zleЕџmeler (dahil\n  YalnД±zca test daДџД±tД±mД±).",
                    policy4: "Not: YukarД±da belirtilen sГ¶zleЕџmelere ek olarak, diДџer sГ¶zleЕџmeler\n  YukarД±dakiler Г¶zel duruma gГ¶re dГјЕџГјnГјlebilir,\n  LГјtfen almak iГ§in YFO geliЕџtirme ekibiyle iletiЕџime geГ§in.\n  aГ§Д±klamak.",
                    stepVerification: "Д°ki adД±mlД± doДџrulama",
                    authentication: "Google Authenticator, Authy veya herhangi bir 2FA uygulamasД± aracД±lД±ДџД±yla 2 faktГ¶rlГј kimlik doДџrulamayД± etkinleЕџtirin QR kodunu tarayД±n veya kimlik doДџrulama anahtarД±nД± girin",
                    authenticaorKey: "DoДџrulayД±cД± anahtarД±",
                    generate: "OluЕџtur'u tД±klayД±n",
                    buy: "SatД±n almak",
                    indicator: "dizin",
                    tvl: "Toplami",
                    apy: "YД±llД±k faiz oranД±",
                    lock: "Kilitlemek",
                    days: "gГ¶kyГјzГј",
                    more: "Daha",
                    daily: "GГјnlГјk faiz oranД±",
                    monthly: "AylД±k faiz oranД±",
                    yearly: "YД±llД±klandД±rД±lmД±Еџ faiz oranД±",
                    validNumber: "GeГ§ersiz numara",
                    insufficient: "Yetersiz bakiye",
                    stakeAmount: "rehin tutarД±",
                    max: "tГјm",
                    swap: "deДџiЕџme",
                    price: "fiyat",
                    legalDisclaimer: "Yasal Sorumluluk Reddi",
                    legalText: "Les informations fournies dans ce document ne constituent pas des conseils en investissement, des conseils financiers, des conseils commerciaux ou tout autre type de conseil. Vous ne devez pas traiter le contenu du matГ©riel comme tel. Ce matГ©riel est uniquement Г  des fins d'information et n'est pas (i) une offre, ou la sollicitation d'une offre, d'investir dans, ou d'acheter ou de vendre, des intГ©rГЄts ou des actions, ou de participer Г  une stratГ©gie d'investissement ou de nГ©gociation, (ii) destinГ© Г  fournir des conseils comptables, juridiques ou fiscaux, ou des recommandations d'investissement, ou (iii) une dГ©claration officielle de YFO Token. Aucune reprГ©sentation ou garantie n'est faite, expresse ou implicite, en ce qui concerne l'exactitude ou l'exhaustivitГ© des informations ou les performances futures de tout actif numГ©rique, instrument financier ou autre mesure de marchГ© ou Г©conomique.\n  \nL'Г©quipe YFO Token ne recommande pas que vous achetiez, vendiez ou dГ©teniez une crypto-monnaie. Faites preuve de diligence raisonnable et consultez votre conseiller financier avant de prendre toute dГ©cision d'investissement.\n  \nEn achetant YFO, vous convenez que vous n'achetez pas un titre ou un investissement, et vous acceptez de dГ©gager l'Г©quipe de toute responsabilitГ© et de ne pas ГЄtre responsable des pertes ou des impГґts que vous pourriez encourir. Vous acceptez Г©galement que l'Г©quipe prГ©sente le jeton \"tel quel\" et n'est pas tenue de fournir une assistance ou des services. Vous ne devriez avoir aucune attente de la part de YFO Token et de son Г©quipe.\n  \nBien que YFO soit un jeton de finance dГ©centralisГ©e (DeFi) communautaire pour les rГ©seaux sociaux et non une monnaie numГ©rique enregistrГ©e, l'Г©quipe recommande fortement aux citoyens des zones interdites par le gouvernement de ne pas l'acheter car l'Г©quipe ne peut pas garantir le respect des rГ©glementations Г©tablies au sein de certains territoires. Assurez-vous toujours que vous vous conformez Г  vos lois et rГ©glementations locales avant d'effectuer tout achat.\n  \nL'Г©quipe $P est composГ©e d'individus dГ©centralisГ©s de diffГ©rentes parties du monde qui crГ©ent des applications dГ©centralisГ©es qui peuvent profiter au monde et Г©galement amГ©liorer son Г©cosystГЁme.\n  \nAvec autant de messages directs d'individus, d'entreprises et d'organismes compГ©tents demandant Г  l'Г©quipe $P sur quoi investir et sur quoi ils ne devraient pas investir, nous sommes ouverts et transparents et conseillons notre communautГ© sur le risque Г©levГ© des actifs Defi mais le YFO les projets construiront une plate-forme de qualitГ©.\n  \nEn raison du plus grand nombre de personnes demandant des conseils financiers Г  l'Г©quipe, l'Г©quipe YFO ne fournit de conseils ou de conseils financiers Г  personne, et en investissant dans l'actif DeFi, vous pouvez risquer de perdre vos investissements.\n  \nFaites toujours vos propres recherches lorsque vous investissez."
                }
            }, silentTranslationWarn: !0
        })
    }, "12d8": function (e, t, n) {
        "use strict";
        n("ae70")
    }, 13: function (e, t) {
    }, "13a4": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABCCAYAAAAvzToDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXuSURBVHgB7VxpTttaGP0IBCGIeEFilJBeWEHpCl5YQWEF0BVAV9CwggcrIG8H6QpwV0C6gvj9YggoqQT5QRh6TnpducGOrx3P6ZGsTNdOfO433/tlSnKEVqtVnp+frxYKhXevr6+VqampMh7L+MjEc/Pl5eUbjubGxoYpIWJKcoDb29tdkHWIo6p5igGi68vLy/9JAHCy5ubmytZkZJrEdrtdBXFneFqRYDBBZk2XTCXpRzjn8Onp6b1FYsHtBMzuvqQUvJnr6+s6CDyX4AQSFah3/ebm5uzy8rLi8X21UqnUgln4jO9t2E2CoyTiogd4OHt+ft7BYENSBN7s9PT0uOQ5wVT3a/IFiVtcXNwHybvDZgLjtnRIbKkf2cUJ78M2xEERIYEWTBwNHFUc204DQGhtbW3t2P7eGxJBIE++sF/YPkNJAr+Nv2tbEgIINEHg1vD7Tjbxn6HXg9kfZTPiAG2SJEwgVHvH6bM3kgiPd+4SKpiPj497m5ubTYkZSo1bkhAsAu3aaHlqPG06SWLZ5VqV2dnZ86urqyOJGSDwsyQHwyKQpu7u7u6QgrawsNCBp/4L6t1wsomvXleFjTzGRWsSA5KUQkogiGrgoBnZVtnPr88s+1iQAKBkgOxY7OTMzMyhJASQV8HDEc3bMIF2+xiIRIUqHU4MQXlVUgQn++hEoin60Ir4g6LT6bCAkJhHHoYTgcQbEiHCQbzvAaTyAkTWJEQgP009gYSTJAYNYcrKVrbCUnGWsiQdMHq9nmvm5kTiVxkPlooPyBxHzXGdNJBYX11d3dna2uq6DXhD4srKioEH1xN8YEAmwxNlM6uSQbCY6zWm4HLiiYQL2sxzSqdFKCN+r5NQtwtjMiOHYxWHXrHf7zPAjVqdDBxNGO2vnHGozW/2OOl0j8DvqkE7j0eNmXF6c2lpqYsb+IQbOJNoUeWBHzpIJSGlfCCRlEBTwjErkWPG7QN4ojoqJ7zBuCvcqQlrCGiJ50SOzFhQcBhUKWSCAbtseo6xv6AtZMBshSVU62KxyBxxYonUkcTfHMuQIedC0Beu02J5sIvsgQs0sZfBkgaEqAJh+n/UGK1SGOxil2mPpMxexQFEDJ7Lylq5syoDTRyBomnGnByLIX8wgNI+TziR+EX+YABopaEzLsrcOfPAwpxWMSau3DmL6OqubDqSiHWNU5lwaYQ9NHTHOpLIIBsrep9kgsFVPt2xrmkfc+dJVuuHhwdtBzsyd4ZaswQ0cSkft86NqmQPYySJVu6s6+rzAqS+dT/jtXfKtttt5s41yTncdn6NgvbiPau7kMgd3Sg+q8D9+fYDvnZAMBDnLMFzf8yrirNyJT6hpc7WopLd2NraHfbxxbuSD3B59KP4hBaJauGqIznH8F5sXWipM7103j00nWbQLdV+bOKx5BRqn02gxiDCj3c28prBcG15nI39vjqqaBtRHrpQmx/zAoN7bWQM+ApxlG3ck/xUeFho8e2Nh+F7p6za6sGZyzyRsINjqbGFQNuNSSQ7rTKevZysr6+fSggIvGebM6g2f9clY+Dko9QVWrQRSqsuF/1RNvs3C5nLqG3DQRFqv7PaQfEBzmdXbVhPy3ZhC5E0fEbaNK7y65MEdpY5gY5wZ3gPZBiIjESl4mc+/lIgSkRGIDFOM5Ar2BEKAi8mgUAiVElUHftsZqxIChCFE3HC2CRabf4w2Nx2V5GUAAQ2QeBeHM3ugUgkcaVSiV2X+8oTp80Ln0B9Y1s39yTR+g8YhC5VvHzn1LaaFlB9UWk/QMVp3IYmXxiQyEZw/teL/DTCPEhQ2fYPR1nACbMQP+vFYeGXJKpAmU7hQLIFQ/WaxCp9drxR5wyRmTh5Flxtoo1M5sNpUunUkGdB17HsInjeTzB4Zutao9frnSZh87zgK8RR/S1VEPpBERqVhJIoZhiNYrHY8GqBSBpjBdv8ixME2dtQ+0HoE7ByY/XxkbQmuxfu7++/pVHi3BBJAQILWn+Lyl5A8iBcUh91QXi33+9/h4R1ut3u9yyR5YYfvs42wOPolJ0AAAAASUVORK5CYII="
    }, 14: function (e, t) {
    }, 15: function (e, t) {
    }, 16: function (e, t) {
    }, 17: function (e, t) {
    }, 1797: function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".l-overlay[data-v-01c8de16]{width:100%;height:100%;top:0;left:0;opacity:0;background:rgba(0,0,0,.5);transition:all .3s}.l-overlay[data-v-01c8de16],.l-overlay .l-modal[data-v-01c8de16]{z-index:10000;position:fixed;visibility:hidden}.l-overlay .l-modal[data-v-01c8de16]{top:50%;left:50%;width:80%;min-width:150px;max-width:350px;height:auto;border-radius:10px;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateX(-50%) translateY(-50%)}.l-overlay .l-modal .d-content[data-v-01c8de16]{position:relative;background-color:var(--grey-white);border-radius:10px;margin:0 auto}.l-overlay .l-modal .d-content .modal-header[data-v-01c8de16]{position:relative;width:100%;height:50px;line-height:50px;border-radius:10px 10px 0 0;color:var(--purple);padding:0 15px}.l-overlay .l-modal .d-content .modal-header .header-close[data-v-01c8de16]{cursor:pointer;padding:0 15px}.l-overlay .l-modal .d-content .place-center[data-v-01c8de16]{text-align:center}.l-overlay .l-modal .d-content .place-left[data-v-01c8de16]{text-align:left}.l-overlay .l-modal .d-content .place-right[data-v-01c8de16]{text-align:right}.l-overlay .l-modal .d-content .bottom-border[data-v-01c8de16]{border-bottom:solid 1px var(--purple)}.l-overlay .l-modal .d-content .modal-body[data-v-01c8de16]{width:100%;height:auto;padding:20px 15px;color:#b6c2c9}.l-overlay .l-modal .d-content .modal-body .loading-cover[data-v-01c8de16]{margin:auto;padding:5px;width:70px;height:70px;background-color:var(--purple);border-radius:50%}.l-overlay .l-modal .d-content .modal-body .loading-cover .loading-css[data-v-01c8de16]{width:60px;height:60px;margin-bottom:20px;display:inline-block;border:3px solid var(--white);border-top:3px solid var(--purple);border-radius:50%}.l-overlay .l-modal .d-content .modal-body .loading-cover .loading-stop[data-v-01c8de16]{border-top:3px solid var(--purple);border:3px solid var(--purple)}@-webkit-keyframes loading-360-data-v-01c8de16{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes loading-360-data-v-01c8de16{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.l-overlay .l-modal .d-content .modal-body .loading-cover .loading[data-v-01c8de16]{-webkit-animation:loading-360-data-v-01c8de16 .8s linear infinite;animation:loading-360-data-v-01c8de16 .8s linear infinite}.l-overlay .l-modal .d-content .modal-body .loading-text[data-v-01c8de16]{padding-top:25px;word-break:break-all;word-wrap:break-word}.l-overlay .l-effect .d-content[data-v-01c8de16]{opacity:0;transform:scale(.7);-webkit-transform:scale(.7);-moz-transform:scale(.7);-ms-transform:scale(.7);transition:all .3s}.l-overlay .d-show[data-v-01c8de16]{visibility:visible}.l-overlay .d-show .d-content[data-v-01c8de16]{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1)}.overlay-effect[data-v-01c8de16]{opacity:1;visibility:visible}", ""]), e.exports = t
    }, 18: function (e, t) {
    }, 19: function (e, t) {
    }, 2: function (e, t) {
    }, 20: function (e, t) {
    }, "20bf": function (e, t, n) {
        var a = n("d251");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("e3172c8e", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, 21: function (e, t) {
    }, 2141: function (e, t, n) {
        var a = n("cf49");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("84c09a44", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, 22: function (e, t) {
    }, 2453: function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".md-overlay[data-v-995ee590]{z-index:3000;position:fixed;width:100%;height:100%;visibility:hidden;top:0;left:0;opacity:0;background:rgba(0,0,0,.5);transition:all .3s}.overlay-effect[data-v-995ee590]{opacity:1;visibility:visible}.md-modal[data-v-995ee590]{z-index:3001;position:fixed;top:50%;left:50%;width:80%;min-width:150px;max-width:350px;height:auto;border-radius:10px;visibility:hidden;background-color:#302c2c;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateX(-50%) translateY(-50%)}.wallet_item[data-v-995ee590]{cursor:pointer;width:auto;display:flex;justify-content:flex-start;align-items:center;border-radius:10px}.wallet_item .select-cover[data-v-995ee590]{padding:10px;margin:auto}.wallet_item[data-v-995ee590]:hover{background-color:var(--light-grey)}", ""]), e.exports = t
    }, 2467: function (e, t, n) {
        "use strict";
        n("2141")
    }, "264b": function (e, t, n) {
        var a = n("24fb"), i = n("1de5"), s = n("a350");
        t = a(!1);
        var r = i(s);
        t.push([e.i, ".home[data-v-795c100b]{width:100%;height:100%;background-image:url(" + r + ");background-repeat:no-repeat;background-position:50%;background-size:auto 100%}@media only screen and (max-width:750px){.home[data-v-795c100b]{background-size:90%}}", ""]), e.exports = t
    }, 2735: function (e, t, n) {
        "use strict";
        n("74ac")
    }, "282e": function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, "", ""]), e.exports = t
    }, "2a68": function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "delay", (function () {
            return s
        })), n.d(t, "convertStringToHex", (function () {
            return r
        })), n.d(t, "sanitizeHex", (function () {
            return o
        })), n.d(t, "getUrlKey", (function () {
            return l
        })), n.d(t, "toNumberStr", (function () {
            return p
        })), n.d(t, "exponentiatedBy", (function () {
            return u
        })), n.d(t, "decimalPlaces", (function () {
            return d
        })), n.d(t, "plus", (function () {
            return y
        })), n.d(t, "minus", (function () {
            return c
        })), n.d(t, "multipliedBy", (function () {
            return m
        })), n.d(t, "dividedBy", (function () {
            return f
        })), n.d(t, "toFormat", (function () {
            return b
        })), n.d(t, "toThreeFilter", (function () {
            return A
        })), n.d(t, "bigNumberFormat", (function () {
            return g
        })), n.d(t, "greaterThan", (function () {
            return T
        })), n.d(t, "smallerThan", (function () {
            return h
        })), n.d(t, "compareAscend", (function () {
            return v
        })), n.d(t, "compareDescend", (function () {
            return w
        })), n.d(t, "countdown", (function () {
            return k
        })), n.d(t, "inputTime", (function () {
            return x
        })), n.d(t, "checkTime", (function () {
            return B
        })), n("d3b7"), n("25f0"), n("ac1f"), n("5319"), n("4d63"), n("b680"), n("a9e3"), n("1276");
        var a = n("901e"), i = n.n(a), s = function (e) {
            return new Promise((function (t) {
                return setTimeout(t, e)
            }))
        };

        function r(e) {
            return new i.a("".concat(e)).toString(16)
        }

        function o(e) {
            return "" === (e = "0x" === e.substring(0, 2) ? e.substring(2) : e) ? "" : "0x" + (e = e.length % 2 != 0 ? "0" + e : e)
        }

        function l(e, t) {
            return decodeURIComponent((new RegExp("[?|&]" + e + "=([^&;]+?)(&|#|;|$)").exec(t) || [, ""])[1].replace(/\+/g, "%20")) || ""
        }

        function p(e) {
            if (/^(\d+(?:\.\d+)?)(e)([\-]?\d+)$/.test(e)) {
                var t = /^(\d{1,}(?:,\d{3})*\.(?:0*[1-9]+)?)(0*)?$/.exec(e.toFixed(18));
                return t ? t[1] : e.toFixed(18)
            }
            return "" + e
        }

        function u(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return !e || isNaN(Number(e)) ? e : (e = new i.a(e)).exponentiatedBy(t).toString()
        }

        function d(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
            return !e || new i.a(e).isNaN() ? e : (e = new i.a(e), (e = f(e = parseInt(m(e, u(10, t))), u(10, t))).toString())
        }

        function y(e, t) {
            return e = new i.a(e), t = new i.a(t), e.isNaN() ? e : t.isNaN() ? t : e.plus(t).toString()
        }

        function c(e, t) {
            return e = new i.a(e), t = new i.a(t), e.isNaN() ? e : t.isNaN() ? t : e.minus(t).toString()
        }

        function m(e, t) {
            return e = new i.a(e), t = new i.a(t), e.isNaN() ? e : t.isNaN() ? t : e.multipliedBy(t).toString()
        }

        function f(e, t) {
            return 0 === t ? t : (e = new i.a(e), t = new i.a(t), e.isNaN() ? e : t.isNaN() ? t : e.dividedBy(t).toString())
        }

        function b(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
            if (!e || isNaN(Number(e))) return e;
            i.a.config({
                FORMAT: {
                    prefix: "",
                    decimalSeparator: ".",
                    groupSeparator: ",",
                    groupSize: 3,
                    secondaryGroupSize: 0,
                    fractionGroupSeparator: " ",
                    fractionGroupSize: 0,
                    suffix: ""
                }
            });
            var n = i()(e).toFormat(t).split("."), a = n[0] || "";
            return n[1], a + (n[1] ? "." + n[1] : "")
        }

        function A(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return e && Number(e) && !isNaN(Number(e)) ? Number(Number(e).toFixed(t)).toString().replace(/^-?\d+/g, (function (e) {
                return e.replace(/(?=(?!\b)(\d{3})+$)/g, ",")
            })) : n ? "0.00" : "--"
        }

        function g(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!e || !Number(e) || isNaN(Number(e))) return n ? "0.000" : "--";
            var a, i = [{value: 1, symbol: ""}, {value: 1e3, symbol: "K"}, {value: 1e6, symbol: "M"}, {
                value: 1e9,
                symbol: "B"
            }];
            for (a = i.length - 1; a > 0 && !(e >= i[a].value); a--) ;
            return (e / i[a].value).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + i[a].symbol
        }

        function T(e, t) {
            return !(!e || !Number(e) || isNaN(Number(e))) && 1 === new i.a("".concat(e)).comparedTo(new i.a("".concat(t)))
        }

        function h(e, t) {
            return -1 === new i.a("".concat(e)).comparedTo(new i.a("".concat(t)))
        }

        function v(e) {
            return function (t, n) {
                var a = t[e], i = n[e];
                return isNaN(Number(a)) || isNaN(Number(i)) || (a = Number(a), i = Number(i)), a < i ? -1 : a > i ? 1 : 0
            }
        }

        function w(e) {
            return function (t, n) {
                var a = t[e], i = n[e];
                return isNaN(Number(a)) || isNaN(Number(i)) || (a = Number(a), i = Number(i)), a < i ? 1 : a > i ? -1 : 0
            }
        }

        function k(e, t) {
            if (isNaN(e) || e < 0) return "00:00:00:00";
            var n = Number(e) - Number(t);
            if (n < 0) return "00:00:00:00";
            var a = x(parseInt(n / 1e3 % 60, 10)), i = x(parseInt(n / 1e3 / 60 % 60, 10)),
                s = x(parseInt(n / 1e3 / 60 / 60 % 24, 10));
            return x(parseInt(n / 1e3 / 60 / 60 / 24, 10)) + ":" + s + ":" + i + ":" + a
        }

        function x(e) {
            return e < 10 ? "0" + e : e
        }

        function B(e, t) {
            return e - t
        }
    }, "2bc7": function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "earnPair", (function () {
            return r
        }));
        var a = n("d028"), i = n("ce62"), s = n("3e3c"), r = [{
            token1: "USDT",
            token2: "YFO",
            address1: a.USDT.address,
            address2: a.YFO.address,
            lpAddress: i["USDT-YFO-Quick"],
            vaultAddress: s["USDT-YFO-Strat"][0],
            stratAddress: s["USDT-YFO-Strat"][0],
            farmAddress: s["USDT-YFO-Strat"][0],
            stratPid: s["USDT-YFO-Strat"][1],
            totalSupply: s["USDT-YFO-Strat"][2],
            dailyOut: s["USDT-YFO-Strat"][3],
            staked: "--",
            earned: "--",
            tvl: "--",
            apy: "--",
            start: new Date("2021/07/31 20:00:00").getTime(),
            end: new Date("2022/07/31 20:00:00").getTime()
        }, {
            token1: "BNB",
            token2: "OBS",
            address1: a.USDT.address,
            address2: a.YFO.address,
            lpAddress: i["USDT-YFO-Quick"],
            vaultAddress: s["USDT-YFO-Strat"][0],
            stratAddress: s["USDT-YFO-Strat"][0],
            farmAddress: s["USDT-YFO-Strat"][0],
            stratPid: s["USDT-YFO-Strat"][1],
            totalSupply: s["USDT-YFO-Strat"][2],
            dailyOut: s["USDT-YFO-Strat"][3],
            staked: "--",
            earned: "--",
            tvl: "--",
            apy: "--",
            start: new Date("2021/07/31 20:00:00").getTime(),
            end: new Date("2022/07/31 20:00:00").getTime()
        }]
    }, "2da4": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAlCAYAAAAwYKuzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgB7ZiBDYMgEEXPpgM4giN1A+0E7QaOUjdwBLtBuwEj1A2uXKKJuQDV3l1iIi8hBr2Dz51AABCx9uWDMmqwwjfuUAcbkaiLvkjUR1ckb32jb4N2OBpswUUVHtgAifSPB9gwiiI4YxnJEyjgg975xxUMEKdYG65HJYKWZIFSzrAz+BzIKZZy3H/w312Jk1MsJa+DM2v3+LwXa5MFSskCpRxa4Lis+OWt+uUQsrEU+Gb1PiVy+taz10+Vc3Gkw9BZmW7R2oDtDcM3bI2ZwKnjAcM4ithUYjavuRFNKiaw9KVL2MfuJQfytRA4QDzdboU/Cb5zZ+ntKqeNiKR0pqI5YGgS4frRiUVG+qMAXWBPLKJJS0+Zsv0CjrzKeCxa4MkAAAAASUVORK5CYII="
    }, "2f00": function (e, t, n) {
        "use strict";
        n("fe12")
    }, "2f7b": function (e) {
        e.exports = JSON.parse('{"OBC":"0xbf6f7d817d029CCd7928e4CEF3a9729e114C991b","OBS":"0x095956B142431Eb9Cf88B99F392540B91aCbF4ad","OBB":"0x4Ce3e25A36Ba370201729Ef775367db756128270","BNB":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c","WBNB":"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c","YFO":"0xAc0C8dA4A4748d8d821A0973d00b157aA78C473D","BUSD":"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","USDT":"0x55d398326f99059fF775485246999027B3197955","BTCB":"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c","ETH":"0x2170Ed0880ac9A755fd29B2688956BD959F933F8"}')
    }, 3: function (e, t) {
    }, "332e": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABtSURBVHgB7dYxDoAgEETRxXhXzsRptTU2+AnGNfzX0U0ykw0lBtVaj+u7tVZioi2SMhi1x2SztmeVlMEog1Hr3LGep3fOKik31nPfnlVSeTf29t99lFVS/7tjX2/PKimDUQajDEYZjDIYlTbYCZ2vFoqPLghNAAAAAElFTkSuQmCC"
    }, "349d": function (e, t, n) {
        e.exports = n.p + "img/yfologo.a0faddff.png"
    }, 3998: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADqSURBVHgB7ZjhEYIwDIUTjgF0AxzFSdRJZBNHYQRGkA1kg5ic/Ki9Sg8DtBz57gqlhPbRlMddgYguXF60Pk8ZGyKgBPK5gjT0iHgcCxCBBAlhgTh2v4DMKf2G2BtpmZqx7GfQBGoxgVrKWIDWJ7WuYCnWsv01uPSfJYalWIv5oPlgaswHtViKtezHB/9dq7H+LcVazAen9u+vSUuxlu0J5CVwgBVxx+N6FQpovK3ZRzBwPkEUGk+EDnWXVnZYa37uDnlyw2GKW0i3T/2Ljh3oVPCh54uzNEA+dPDR9A3P5lXyTulouNTkfDhvi/+Bt0UEZPoAAAAASUVORK5CYII="
    }, "3ca9": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7dfBCsAgDANQHfv/X948ShFCSYWgebftUAoNpfZvaIQ+zN9svaeJcUPIG3/ETETZjGTreWSIfoaqZTPnkSHnZwjtHcQjQ/QzxN4zvod2k2uI2hkrMUO+h6rp7aHqdxnLI0Pue5dleWTI+fcQW88jQ+Qa+gGVZTQ99SBA6AAAAABJRU5ErkJggg=="
    }, "3cc5": function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".s_img[data-v-151019a6]{height:30px}.s_padding[data-v-151019a6]{padding:30px 0}@media only screen and (max-width:750px){.s_img[data-v-151019a6]{height:20px}.s_padding[data-v-151019a6]{padding:10px 0}}", ""]), e.exports = t
    }, "3e3c": function (e) {
        e.exports = JSON.parse('{"USDT-YFO-Strat":["0x0000000000000000000000000000000000000000","0",5959828.8,198660.96,"16"],"YFO-USDT-Strat":["0x0000000000000000000000000000000000000000","0",5959828.8,198660.96,"16"],"WBTC-USDT-Strat":["0x0000000000000000000000000000000000000000","1",2548324.8,84944.16,"8"],"USDT-WBTC-Strat":["0x0000000000000000000000000000000000000000","1",2548324.8,84944.16,"8"],"USDT-WETH-Strat":["0x0000000000000000000000000000000000000000","2",2099563.2,69985.44,"9"],"WETH-USDT-Strat":["0x0000000000000000000000000000000000000000","2",2099563.2,69985.44,"9"],"USDT-USDC-Strat":["0x0000000000000000000000000000000000000000","3",595296,19843.2,"10"],"USDC-USDT-Strat":["0x0000000000000000000000000000000000000000","3",595296,19843.2,"10"],"YFO-USDC-Strat":["0x0000000000000000000000000000000000000000","3",595296,19843.2,"10"],"USDC-YFO-Strat":["0x0000000000000000000000000000000000000000","3",595296,19843.2,"10"],"BNB-YFO-Strat":["0x0000000000000000000000000000000000000000","10",1291334.4,43044.48,"19"],"YFO-BNB-Strat":["0x0000000000000000000000000000000000000000","10",1291334.4,43044.48,"19"],"BUSD-YFO-Strat":["0x0000000000000000000000000000000000000000","10",1291334.4,43044.48,"19"],"YFO-BUSD-Strat":["0x0000000000000000000000000000000000000000","10",1291334.4,43044.48,"19"]}')
    }, 4: function (e, t) {
    }, 4262: function (e, t, n) {
        "use strict";
        n("a38a")
    }, 4360: function (e, t, n) {
        "use strict";
        var a = n("5530"), i = (n("a9e3"), n("bb33")), s = n("12cb"), r = n("2b0e"), o = n("2f62"), l = n("99e5"),
            p = n.n(l);
        r.default.use(o.a);
        var u = n("f121");
        t.a = new o.a.Store({
            state: {
                wallet: {
                    web3: new p.a(i.params.defaultProvider),
                    connector: null,
                    isWeb: !1,
                    connected: !1,
                    chainId: 56,
                    address: "",
                    accounts: []
                },
                lang: sessionStorage.getItem("locale") || "English",
                langList: ["English", "Franch", "ж—Ґжњ¬иЄћ", "TГјrkГ§e", "дё­ж–‡"],
                homeTvl: isNaN(Number(sessionStorage.getItem("homeTvl"))) || "--",
                bankTvl: isNaN(Number(sessionStorage.getItem("bankTvl"))) || "--",
                vaultTvl: isNaN(Number(sessionStorage.getItem("vaultTvl"))) || "--",
                marketTvl: isNaN(Number(sessionStorage.getItem("marketTvl"))) || "--",
                lendingTvl: isNaN(Number(sessionStorage.getItem("lendingTvl"))) || "--",
                totalRewards: isNaN(Number(sessionStorage.getItem("totalRewards"))) || "--",
                totalSupply: 9e7,
                yfoPrice: isNaN(Number(sessionStorage.getItem("yfoPrice"))) || "--",
                countdown: isNaN(Number(sessionStorage.getItem("countdown"))) || "--:--:--",
                useConfig: u[56],
                vaultList: u[56].vaultPair,
                earnList: u[56].earnPair,
                lendingList: u[56].lendingPair,
                isLoading: !1
            }, mutations: {
                Set_Lang: function (e, t) {
                    e.lang = t, s.a.locale = t, sessionStorage.setItem("locale", t)
                }, Set_Wallet_State: function (e, t) {
                    var n = Object(a.a)({}, e.wallet);
                    e.wallet = Object(a.a)(Object(a.a)({}, n), t)
                }, SET_COIN_LIST: function (e, t) {
                    e.lendingList = t, localStorage.setItem("Lending_List", JSON.stringify(t))
                }, Set_Home_Tvl: function (e, t) {
                    e.homeTvl = t, sessionStorage.setItem("homeTvl", t)
                }, Set_Bank_Tvl: function (e, t) {
                    e.bankTvl = t, sessionStorage.setItem("bankTvl", t)
                }, Set_Vault_Tvl: function (e, t) {
                    e.vaultTvl = t, sessionStorage.setItem("vaultTvl", t)
                }, Set_Lending_Tvl: function (e, t) {
                    e.lendingTvl = t, sessionStorage.setItem("lendingTvl", t)
                }, Set_Total_Rewards: function (e, t) {
                    e.totalRewards = t, sessionStorage.setItem("totalRewards", t)
                }, Set_Price: function (e, t) {
                    e.yfoPrice = t, sessionStorage.setItem("yfoPrice", t)
                }, Set_Loading: function (e, t) {
                    e.isLoading = t
                }
            }, getters: {
                lang: function (e) {
                    return
                }, langList: function (e) {
                    return e.langList
                }, vaultList: function (e) {
                    return e.vaultList
                }, earnList: function (e) {
                    return e.earnList
                }, lendingList: function (e) {
                    return e.lendingList
                }, useConfig: function (e) {
                    return e.useConfig
                }, wallet: function (e) {
                    return e.wallet
                }, homeTvl: function (e) {
                    return e.homeTvl
                }, marketTvl: function (e) {
                    return e.marketTvl
                }, vaultTvl: function (e) {
                    return e.vaultTvl
                }, bankTvl: function (e) {
                    return e.bankTvl
                }, lendingTvl: function (e) {
                    return e.lendingTvl
                }, totalRewards: function (e) {
                    return e.totalRewards
                }, yfoPrice: function (e) {
                    return e.yfoPrice
                }, totalSupply: function (e) {
                    return e.totalSupply
                }, isLoading: function (e) {
                    return e.isLoading
                }
            }, modules: {}
        })
    }, "4a47": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKHSURBVHgBvVmLcdswDIU7gUZQJ4g3iEfoBtYG0QZRJ5A3oEfoBnYniDsB3QmcDRDwQp0lGPyAYvLucD6LxOMjwK+0gUIg4o5+tmTP/rfx5vBOdvX2j+y82WzO8NUgUQ3ZK9kN9bBkhqyF2vDCRqwHU00oEb1gWcRSsGQdrAHGo3bzkejItmTNzK/xz1zZEeMdHEEL38Ap0vN+LiiTs/O+Et5UfN5BilgPK0EcQ0DkKZdgDESthUpwXChHc0w5diiHv4XK8CKlTPWg6FUycnhfGy3rlMnwldp0Q6mRKhuhN6kG9hifoclx60VyjlGqxDEkiF8wH/sEVy/4NBCJngV9r2OQ07bktMxniBV2CTIjiHDLR+NNisgAuijepoKdWBAn47tDL9Th610qKw0+ZmUnERnIBH6m+hcK6fMNLpDBd2Qu/Q96/sTq/YVM0BnvSvaH7B3q4Mz+75zAlj28QB3sC3h5nScQ8q46BHDgfeFG7dARhsUNtOMkQr7H8NLjnreZPEs9FQVaDCP7FCQJrJJiDEeuU3A8pNhNEj4DW6iD32Q/aYYfFT4t+391AvnM2UIFkLChYPnhbf93Avm69wxlghaAMvC2L+JWhyuXmlKgtNUFCtR3Dz47QAl8PM3beaFqYw80sFagZRRmXviwsWujuEYgyjtPyysdWIXs1X+NQJRP80aqKJ3HLH7Fy56lOJvdJson4e++dnYpx4PgZPF7Lu6HXIITyniFlcDw27I3DUkTCP8UzQ4UwPtFygY4T1iyOaCc7gm5r98Mxq+oeWmNiIy9NluDKm/LJpFuUB+xHlxm6u/3M6EW9XARG7TCSo9F02cIZ+7a2nqbf4Zw5s6a7jh3Kf0M8QHMfyJ2ndF46AAAAABJRU5ErkJggg=="
    }, "4fa9": function (e, t, n) {
        "use strict";
        n("6547")
    }, "4ffd": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAaySURBVHgB7Z1NbFRVFMfPvdOhUyKk7KRsBhJjYVVQF+ICgcSNRGrElZhI1IXGCBus8SO1URKJm8ZEXEgCCd1JTEvcaABxAQuB2o18mCCzsAMr2kCT6YfvXs+5M2867707b+a+WyBpzy9pmI975533f+eej9dyR0Cb6OKh7oVCoR8f7QCh+0CIImjohuWAgGnQuoTnNAFKXsjPVsZEaXi6vaktqPQOFHMSBvFh/7IRrB0EnAwUDHXdOFpKH9YE43GrO79A0Q7CymY4X5kbauaRVgGN1wn4DR8WgUEfgpLSsNPmjTL+wsyWT/pYvCjoZUWJmsw8dbjP8t4i7Hnp2Dyx7oEU81i8dEJPJK3C1+oCmoTB4rWERFzo6hxseF5fureBaZtAw0ZaysYDa3Ue40CoGfYUg90Lc7NTwDiip/OV+Y1yYXauH5gMiO6gsGqvBIm9LZMJBeJFzMrQB0w2MABKzaWLD0W5ou6wLDmiWwLjBQvoCQvoCQvoCQvoCQvoCQvoCQvoCQvoCQvoCQvoCQvoCQvoCQvoCQvoSQcsAeK5TSB3bQbYsA5gTVf1xRtlUOevg778T+pc2b8NxK4t1Xk05/Jt0OevNT/W0+tB7t8O0LMO9JmroMb+hFa2id71Zh7gv7C2KzloEn+nVr4H6tg50JNt/VXb4ufPbx7QkBEyTA7sQSM3Nh9UnoLgwA9Ww0g8+dU+6xw6GTU6Hj0eipb78QMUu1B/LTg0goJfT9pGF/X93em2xaCLHRw4Di5kXsJy7zbInXi3tYF00r98hOO3Jt4Se59pOoeEJQEi9D4ZEc/YsXNzYjrNy514x0k8Yw95a4/bDfpMAhrPO7IvcTKpBzryOi7V2Mk+qKTPQSEiIq6xLD8UOzLnzReSwjugH8w6jc8kYO7b/ZCFXEx0depiyzkuy1BgDPYRTx07ixfVTUDnJEJxK37VCXPlzv0Fujxt3qeTphOKgB5EHkLxzczBhPHfS99UgzwmEuscqIrYNDaVpyLjbKvC2IbxjRIUeb2gMU9Ux+mZOfOc4h/Z44qzgLa4pSeriQLKDYmCYh/FoZggAmMn1AQ0zzd0Y4bE2Hb5FgQjFyGHsY8EjcxpMzbZPDW0TT67ycRhk40bRUZx9Y07AP/egyzZ1E1APLDNSHX056h4BGXSz06bRNMICUpikKdSIpJfvrb4Hp5I8OEIdPx6OHEMsXsL6PuW5VVbDUZ0y8ow4mHZI9/YDmnnZM4Lf9TnP4ELTjFQ2GooXBK2MoIwS8IWU2peKWIZ1Czl2nJKYBEngiXBkPfR8ZuKF0O+su3RZGEXUrOa7YJQqVJO1ozGwyxZW9+8A0vJQ83C+r6l7MAr3yxLhss1QQsjTUyKfxYKqG/eTRTkOuxELOKa4+M8dSa9WwlRY+MPOQtTwEXviItC5Um82yDjKYnEoWVlE6gOfoa2eCBdqNzAyxC8fRxj2vPVz6JWseaB4XJNFNo4Rx0cgQDDiWk3bbUrzlV0cc6MgyvOWViPXgURr7Vq3YYeu2pEpJaLgr61pGjRG1fH3LaKQaVOB3kUtng0Rl9pKDtwvELbqEyKzOntMYnMlCl/300ejJzClDm3nL2PcBaQil9jpEUcKnHS/u8YGaoaShgrWNbAFTzOd2dBfrwn+X5PQ7Ec67PVqUsJAcM5rWwz86n/bmVfDPckQiJQ2ZIBTZV+ub27HWrkUjUmpUFivtewGqh0+jqbbUSzQjx1DmSAlpBpe1zm4HjykAi2pNQQR0mMtFtbhlgmN8I72taIeBQCEurY+drySf/79LAToPGJ92IliEkwja+ht1NhnSaIOnfNbtunp1vaZrNVt7lCQrzuB9Y/JOxjqVajIpk6Bro5Ojbesr+kLsHcpcE5wfcocrO6rtZfS0pOVFSvxYIb43HCq+O2YbdjWkGKrRtSivE/8F4gxb/HIeBKhn8n4gkL6AkL6AkL6AkL6AkL6AkL6AkL6AkL6AkL6AkL6AkL6AkL6AkL6AkL6Ik0mw8yGdHTtOlECZislKRWMAFMNrSYwBiofgcmI/qCzBdWj3IczEZ+dn5MiomhaVAwCowbGk7SvqqmjAkAhoBxItTMCEj74GE2HgamTfRwuA1ovZDu6CyQoiVgUqF9VPOV+fqKrQtIsTDQsBNYxKaEm9A27ikdaeXILedF7lVgEROQeAuoTXwvad6Iuw2cNuImaGC+s7CVEwuhh1dV5rY221O/vS8jABjEkW/BSoEaC6yNqVTJ/GUEcapfh5HvR6fdgbP68Ke4vL4OA+O+Buxt9YUcdhjtfh3G/5fousH4i8LQAAAAAElFTkSuQmCC"
    }, 5: function (e, t) {
    }, "52bf": function (e, t, n) {
        var a = n("24fb"), i = n("1de5"), s = n("d284"), r = n("c7ac"), o = n("73cf");
        t = a(!1);
        var l = i(s), p = i(r), u = i(o);
        t.push([e.i, ".message-tip[data-v-5ea652fa]{position:fixed;z-index:100;min-width:100px;max-width:200px;width:auto;height:auto;background-color:var(--black);border-radius:10px;padding:10px 15px;left:50%;top:15%;white-space:nowrap;word-break:break-all;word-wrap:break-word;font-size:.8em;transform:translate(-50%,-50%);-webkit-animation:name 2s ease-in;animation:name 2s ease-in;text-indent:30px}.message-tip img[data-v-5ea652fa]{width:25px;height:25px}#tips-success[data-v-5ea652fa]{background-image:url(" + l + ");background-position-x:10px;background-position-y:center;background-size:25px 25px;background-repeat:no-repeat}#tips-success[data-v-5ea652fa],#tips-warn[data-v-5ea652fa]{width:auto;max-width:100%;min-height:18px;color:#fff}#tips-warn[data-v-5ea652fa]{background-image:url(" + p + ");background-position-x:10px;background-position-y:center;background-size:25px 25px;background-repeat:no-repeat}#tips-error[data-v-5ea652fa]{width:auto;max-width:100%;min-height:18px;color:#fff;background-image:url(" + u + ");background-position-x:10px;background-position-y:center;background-size:25px 25px;background-repeat:no-repeat}", ""]), e.exports = t
    }, "553e": function (e) {
        e.exports = JSON.parse('{"BNB":"0xA16269D71A6B1fFaB972433CBe071573312AaB30","YFO":"0x65a37303DB112De1FBBF3C2992eA25E976F1aAB4","OBS":"0xAaf1F6c9080668d05e8d4758ED99c15D48d02f97","USDT":"0xb1333114F1a3A2bc6acDf24BE160B2e1debC345A","BUSD":"0xb05aB37C082C953Faaa1Feb237b3931864E62226","OBC":"0x9dA2cb730565fe2fBcFB8C601F479972224D59c7","BTC":"0x5B0e141fE5Aa29fD6249fa3CE04fB5D9767AF236","ETH":"0x10B8bbeC590Fe9Df336cDe7335CFBb83f8A03Ca8"}')
    }, "56d7": function (e, t, n) {
        "use strict";
        n.r(t), n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("b0c0");
        var a = n("2b0e"), i = n("313e"), s = (n("f9e3"), n("2dd8"), n("5530")), r = n("2f62"), o = {
                name: "Language",
                data: function () {
                    return {isShowSelect: !1}
                },
                computed: Object(s.a)({}, Object(r.b)(["langList", "lang"])),
                methods: {
                    changeLanguage: function (e) {
                        this.$store.commit("Set_Lang", e), this.isShowSelect = !1
                    }
                }
            }, l = (n("73f7"), n("2877")), p = Object(l.a)(o, (function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "p_rel border_radius_20"}, [a("button", {
                    staticClass: "font_700 font_14 border_radius_20 padding_tb10_lr20 bg_white between_h_center",
                    on: {
                        click: function (t) {
                            e.isShowSelect = !e.isShowSelect
                        }
                    }
                }, [a("img", {
                    attrs: {
                        src: n("89b7"),
                        alt: ""
                    }
                })]), a("div", {
                    staticClass: "lang_wraper",
                    class: {lang_wraper_effect: e.isShowSelect},
                    on: {
                        mouseleave: function (t) {
                            e.isShowSelect = !1
                        }
                    }
                }, [a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isShowSelect,
                        expression: "isShowSelect"
                    }]
                }, e._l(e.langList, (function (t) {
                    return a("ul", {key: t}, [a("li", {
                        staticClass: "padding_tb5_lr20", on: {
                            click: function (n) {
                                return e.changeLanguage(t)
                            }
                        }
                    }, [e._v(e._s(t))])])
                })), 0)])])
            }), [], !1, null, "f3bf12ea", null).exports, u = n("1da1"), d = (n("96cf"), n("99e5")), y = n.n(d),
            c = (n("d3b7"), n("a9e3"), n("c156")), m = n.n(c), f = n("745c"), b = n.n(f), A = n("bb33"), g = n("4360"),
            T = {connector: null, isWeb: !1, connected: !1, chainId: 56, address: ""};

        function h() {
            return (h = Object(u.a)(regeneratorRuntime.mark((function e() {
                var t, n;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (t = "https://bridge.walletconnect.org", (n = new m.a({
                                bridge: t,
                                qrcodeModal: b.a
                            })).connected) {
                                e.next = 5;
                                break
                            }
                            return e.next = 5, n.createSession();
                        case 5:
                            return g.a.commit("Set_Wallet_State", {isWeb: !1, connector: n}), e.next = 8, v(n);
                        case 8:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function v(e) {
            return w.apply(this, arguments)
        }

        function w() {
            return (w = Object(u.a)(regeneratorRuntime.mark((function e(t) {
                var n;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (t) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            t.on("session_update", function () {
                                var e = Object(u.a)(regeneratorRuntime.mark((function e(t, n) {
                                    var a, i, s;
                                    return regeneratorRuntime.wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                if (!t) {
                                                    e.next = 3;
                                                    break
                                                }
                                                throw t;
                                            case 3:
                                                a = n.params[0], i = a.chainId, s = a.accounts, g.a.commit("Set_Wallet_State", {
                                                    isWeb: !1,
                                                    chainId: i
                                                }), k(s, i);
                                            case 6:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function (t, n) {
                                    return e.apply(this, arguments)
                                }
                            }()), t.on("connect", (function (e, t) {
                                if (e) throw e;
                                C(t)
                            })), t.on("disconnect", (function (e, t) {
                                if (e) throw e;
                                M()
                            })), t.connected && (n = t.chainId, k(t.accounts, n));
                        case 6:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function k(e, t) {
            return x.apply(this, arguments)
        }

        function x() {
            return (x = Object(u.a)(regeneratorRuntime.mark((function e(t, n) {
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            g.a.commit("Set_Wallet_State", {isWeb: !1, chainId: n, connected: !0});
                        case 1:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function B() {
            return (B = Object(u.a)(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            t && t.killSession(t), g.a.commit("Set_Wallet_State", T);
                        case 2:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function C(e) {
            return D.apply(this, arguments)
        }

        function D() {
            return (D = Object(u.a)(regeneratorRuntime.mark((function e(t) {
                var n, a, i, s, r;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            n = t.params[0], a = n.chainId, i = n.accounts, s = i[0], r = new y.a(A.params.defaultProvider), g.a.commit("Set_Wallet_State", {
                                isWeb: !1,
                                web3: r,
                                connected: !0,
                                address: s,
                                chainId: a
                            });
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function M() {
            return E.apply(this, arguments)
        }

        function E() {
            return (E = Object(u.a)(regeneratorRuntime.mark((function e() {
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            g.a.commit("Set_Wallet_State", T);
                        case 1:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        var F = {
            name: "ConnectWallet", data: function () {
                return {clientWidth: 1440, isConnect: !1, isDisConnect: !1}
            }, computed: Object(s.a)(Object(s.a)({}, Object(r.b)(["wallet"])), {}, {
                currentAddress: function () {
                    if (this.wallet.address) {
                        var e = this.wallet.address;
                        return e.substr(0, 6) + "..." + e.substr(-4)
                    }
                    if (this.wallet.connector && this.wallet.connector.accounts[0]) {
                        var t = this.wallet.connector.accounts[0];
                        return t.substr(0, 6) + "..." + t.substr(-4)
                    }
                    return ""
                }
            }), methods: {
                handleConnectWallet: function () {
                    this.wallet.connected ? this.isDisConnect = !this.isDisConnect : this.isConnect = !0
                }, addChain: function (e) {
                    window.ethereum && window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [{
                            chainId: this.$params.chains[e].chainId,
                            rpcUrls: [this.$params.chains[e].rpcUrls],
                            chainName: this.$params.chains[e].chainName,
                            nativeCurrency: {
                                name: this.$params.chains[e].tokenName,
                                symbol: this.$params.chains[e].tokenName.symbol,
                                decimals: this.$params.chains[e].tokenName.decimals
                            },
                            blockExplorerUrls: [this.$params.chains[e].blockExplorerUrls],
                            iconUrls: this.$params.chains[e].iconUrls
                        }]
                    }).then((function (e) {
                    })).catch(console.error)
                }, closeDisconnent: function () {
                    this.isDisConnect = !this.isDisConnect
                }, handleWebWallet: function () {
                    this.initWallet()
                }, handleAppWallet: function () {
                    !function () {
                        h.apply(this, arguments)
                    }()
                }, confirmDisConnect: function () {
                    !function (e) {
                        B.apply(this, arguments)
                    }(this.wallet.connector), this.isDisConnect = !this.isDisConnect
                }, initWallet: function () {
                    var e = this;
                    return Object(u.a)(regeneratorRuntime.mark((function t() {
                        var n, a, i;
                        return regeneratorRuntime.wrap((function (t) {
                                return t.stop()
                        }), t)
                    })))()
                }
            }, created: function () {
                this.clientWidth = document.body.clientWidth, this.initWallet()
            }
        }, S = (n("4fa9"), Object(l.a)(F, (function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", [a("button", {
                staticClass: "font_700 font_14 border_radius_20 padding_tb10_lr20",
                class: {
                    bg_white: "/" === e.$route.path,
                    bg_black: "/" !== e.$route.path || e.clientWidth <= 750,
                    text_white: "/" !== e.$route.path || e.clientWidth <= 750,
                    text_black: "/" === e.$route.path
                },
                on: {click: e.handleConnectWallet}
            }, [e.currentAddress ? a("span", [e._v(e._s(e.currentAddress))]) : a("span", [e._v(e._s(e.$t("connectWallet")))])]), a("Notify", {
                attrs: {
                    show: e.isConnect,
                    align: "center",
                    titleName: e.$t("connectWallet"),
                    showCancel: !1,
                    showConfirm: !1
                }, on: {
                    closeNotify: function (t) {
                        e.isConnect = !1
                    }
                }
            }, [a("template", {slot: "body"}, [a("div", {staticClass: "padding_10 text_black"}, [a("div", {
                staticClass: "wallet_item",
                on: {click: e.handleWebWallet}
            }, [a("div", {staticClass: "select-cover"}, [a("img", {
                attrs: {
                    src: n("a510"),
                    alt: ""
                }
            }), a("div", {staticClass: "font_16 font_700"}, [e._v("Metamask")])])]), a("div", {
                staticClass: "wallet_item margin_tb20",
                on: {click: e.handleAppWallet}
            }, [a("div", {staticClass: "select-cover"}, [a("img", {
                attrs: {
                    src: n("be42"),
                    alt: ""
                }
            }), a("div", {staticClass: "font_16 font_700"}, [e._v("WalletConnect")])])])])])], 2), a("Notify", {
                attrs: {
                    show: e.isDisConnect,
                    align: "center",
                    titleName: e.$t("disconnect"),
                    cancelText: e.$t("cancel"),
                    confirmText: e.$t("confirm")
                }, on: {closeNotify: e.closeDisconnent, cancel: e.closeDisconnent, confirm: e.confirmDisConnect}
            })], 1)
        }), [], !1, null, "995ee590", null).exports), O = {
            name: "MenuBar", components: {ConnectWallet: S}, props: ["showMenu"], data: function () {
                return {
                    linkList: [{name: "dashboard", path: "/dashboard"}, {
                        name: "vaults",
                        path: "/vaults"
                    }, {name: "earn", path: "/earn"}, {name: "lending", path: "/lending"}, {
                        name: "statistics",
                        path: "/statistics"
                    }, {name: "wiki", path: "/wiki"}, {name: "faqs", path: "/faqs"}, {
                        name: "settings",
                        path: "/settings"
                    }]
                }
            }, created: function () {
            }
        }, Y = (n("2735"), {
            name: "Header", components: {
                Language: p, MenuBar: Object(l.a)(O, (function () {
                    var e = this, t = e.$createElement, a = e._self._c || t;
                    return a("div", {
                        staticClass: "bar_wraper",
                        class: {bar_effect: e.showMenu}
                    }, [a("ul", {staticClass: "margin_20"}, e._l(e.linkList, (function (t, i) {
                        return a("li", {
                            key: i, on: {
                                click: function (t) {
                                    return e.$emit("closeMenu", e.showMenu)
                                }
                            }
                        }, [a("router-link", {
                            class: {route_active: e.$route.path === t.path || "/lending" == t.path && "/lendingD" == e.$route.path},
                            attrs: {to: t.path}
                        }, [a("img", {
                            attrs: {
                                src: n("fb5e")("./" + ("/lending" == t.path && "/lendingD" == e.$route.path ? "lending_1" : e.$route.path === t.path ? t.name + "_1" : t.name) + ".png"),
                                alt: ""
                            }
                        }), a("span", [e._v(e._s(e.$t("" + t.name)))])])], 1)
                    })), 0), a("ConnectWallet", {staticClass: "padding_tb20"})], 1)
                }), [], !1, null, "6574ca2b", null).exports
            }, data: function () {
                return {
                    isShowMenu: !1,
                    isShowSelect: !1,
                    isConnect: !1,
                    isDisConnect: !1,
                    chain: sessionStorage.getItem("Chain_Name") || "BSC"
                }
            }, methods: {
                toIndex: function () {
                    "/" !== this.$route.path && (this.$router.push("/"), this.isShowMenu = !1)
                }, selectNet: function (e) {
                    if ("BSC" === e) switch (this.chain = e, sessionStorage.setItem("Chain_Name", e), e) {
                        case"BSC":
                            this.addChain("BSC");
                            break;
                        case"HECO":
                            this.addChain("HECO");
                            break;
                        case"OKTEST":
                            this.addChain("OKTEST");
                            break;
                        default:
                            this.addChain("BSC")
                    }
                }
            }
        }), N = (n("12d8"), Object(l.a)(Y, (function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "header_cover header_height col-12 bg_black"}, [a("div", {staticClass: "max_width_1400 height_p_100 margin_auto padding_lr20"}, [a("div", {staticClass: "between_h_center height_p_100"}, [a("div", {
                staticClass: "between_h_center cursor_pointer",
                on: {click: e.toIndex}
            }, [a("img", {
                staticClass: "logo_height margin_r_10",
                attrs: {src: n("4ffd"), alt: ""}
            }), a("span", {staticClass: "font_30 font_bold"}, [e._v("$P")])])])]), a("div", {staticClass: "col-12 p_rel"}, [a("MenuBar", {
                attrs: {showMenu: e.isShowMenu},
                on: {
                    closeMenu: function (t) {
                        e.isShowMenu = !e.isShowMenu
                    }
                }
            })], 1)])
        }), [], !1, null, "a76b1fac", null).exports), _ = [function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("div", {staticClass: "between_h_center"}, [t("img", {
                staticClass: "height_24",
                attrs: {src: n("7973"), alt: ""}
            }), t("span", {staticClass: "font_500 font_14 text_black"}, [this._v("BSC")])])
        }], U = {
            name: "InnerHeader", components: {ConnectWallet: S}, data: function () {
                return {
                    isShowMenu: !1,
                    isShowSelect: !1,
                    isConnect: !1,
                    isDisConnect: !1,
                    chainName: "",
                    // lang: sessionStorage.getItem("locale") || "English",
                    langList: ["English", "дё­ж–‡"],
                    chain: sessionStorage.getItem("Chain_Name") || "BSC",
                    chainList: ["BSC", "HECO", "OKTEST"],
                    selectNetwork: "BSC"
                }
            }, computed: Object(s.a)(Object(s.a)({}, Object(r.b)(["wallet"])), {}, {
                currentAddress: function () {
                    if (this.wallet.address) {
                        var e = this.wallet.address;
                        return e.substr(0, 6) + "..." + e.substr(-4)
                    }
                    if (this.wallet.connector && this.wallet.connector.accounts[0]) {
                        var t = this.wallet.connector.accounts[0];
                        return t.substr(0, 6) + "..." + t.substr(-4)
                    }
                    return ""
                }
            }), methods: {
                toIndex: function () {
                    "/" !== this.$route.path && (this.isShowMenu = !this.isShowMenu, this.$router.push("/"))
                }, changeLanguage: function (e) {
                    // this.lang = e, sessionStorage.setItem("locale", e), this.$i18n.locale = e, this.isShowSelect = !1
                }, selectNet: function (e) {
                    if ("BSC" === e) switch (this.chain = e, sessionStorage.setItem("Chain_Name", e), e) {
                        case"BSC":
                            this.addChain("BSC");
                            break;
                        case"HECO":
                            this.addChain("HECO");
                            break;
                        case"OKTEST":
                            this.addChain("OKTEST");
                            break;
                        default:
                            this.addChain("BSC")
                    }
                }
            }, mounted: function () {
                window.addEventListener("click", this.selectLang)
            }, destroyed: function () {
                window.removeEventListener("click", this.selectLang)
            }
        }, R = Object(l.a)(U, (function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "header_height col-12 padding_lr20 between_h_center bg_white border_b_light_grey"}, [a("div", {
                staticClass: "between_h_center cursor_pointer height_p_100",
                on: {click: e.toIndex}
            }, [a("img", {
                staticClass: "logo_height margin_r_10",
                attrs: {src: n("349d"), alt: ""},
                on: {
                    click: function (t) {
                        "/" !== e.$route.path && e.$router.push("/")
                    }
                }
            })]), a("div", {staticClass: "between_h_center height_p_100"}, [e._m(0), a("ConnectWallet", {staticClass: "show_p margin_l_10"})], 1)])
        }), _, !1, null, null, null).exports, I = {
            name: "Footer", data: function () {
                return {originDomain: "https://$D"}
            }, methods: {
                openLink: function (e) {
                    window.open(e)
                }
            }, created: function () {
                this.originDomain = window.origin
            }
        }, z = (n("a1c1"), Object(l.a)(I, (function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "col-12 bg_black"}, [a("div", {staticClass: "max_width_1400 margin_auto footer_height between_h_center padding_lr20"}, [a("div", {staticClass: "between_h_center col-12"}, [a("div", {staticClass: "col-6"}, [a("div", {
                staticClass: "cursor_pointer font_30 font_800 between_h_center content_start content_center_m",
                on: {
                    click: function (t) {
                        "/" === e.$route.path || e.$router.push("/")
                    }
                }
            }, [e._v("$P")]), a("div", {
                staticClass: "cursor_pointer between_h_center content_start content_center_m s_padding",
                on: {
                }
            }, [a("img", {
                staticClass: "height_24",
                attrs: {src: n("75f0"), alt: ""}
            }), a("span", {staticClass: "font_16 margin_l_5"}, [e._v(e._s(e.$t("audit")))])])]), a("div", {staticClass: "col-6"}, [a("div", {staticClass: "font_24 font_bold between_h_center content_end content_center_m"}, [a("img", {
                staticClass: "cursor_pointer s_img margin_l_20",
                attrs: {src: n("a2f9"), alt: ""},
                on: {
                    // click: function (t) {
                    //     return e.openLink(e.$params.telegram)
                    // }
                }
            }), a("img", {
                staticClass: "cursor_pointer s_img margin_l_20",
                attrs: {src: n("d677"), alt: ""},
                on: {
                    // click: function (t) {
                    //     return e.openLink(e.$params.github)
                    // }
                }
            }), a("img", {
                staticClass: "cursor_pointer s_img margin_l_20",
                attrs: {src: n("13a4"), alt: ""},
                on: {
                    // click: function (t) {
                    //     return e.openLink(e.$params.twitter)
                    // }
                }
            }), a("img", {
                staticClass: "cursor_pointer s_img margin_l_20",
                attrs: {src: n("9b61"), alt: ""},
                on: {
                    // click: function (t) {
                    //     return e.openLink(e.$params.medium)
                    // }
                }
            })]), a("div", {staticClass: "between_h_center content_end content_center_m s_padding"}, [a("img", {
                staticClass: "height_18",
                attrs: {src: n("8a25"), alt: ""}
            }), a("span", {staticClass: "font_14 margin_l_5"}, [e._v(e._s(e.$t("copyright")))]), a("span", {staticClass: "font_14 margin_l_5"}, [e._v(e._s(e.$t("reserved")))])])])])])])
        }), [], !1, null, "151019a6", null).exports), P = {
            name: "LanguageUp", data: function () {
                return {isShowSelect: !1}
            }, computed: Object(s.a)({}, Object(r.b)(["langList", "lang"])), methods: {
                changeLanguage: function (e) {
                    this.$store.commit("Set_Lang", e), this.isShowSelect = !1
                }
            }
        }, j = (n("a4af"), {
            name: "NavBar", components: {
                LanguageUp: Object(l.a)(P, (function () {
                    var e = this, t = e.$createElement, a = e._self._c || t;
                    return a("div", {
                        staticClass: "p_rel border_radius_5", on: {
                            mouseenter: function (t) {
                                e.isShowSelect = !0
                            }, mouseleave: function (t) {
                                e.isShowSelect = !1
                            }
                        }
                    }, [a("button", {
                        staticClass: "font_700 font_14 padding_tb10_lr20 between_h_center bg_white",
                        on: {
                            click: function (t) {
                                e.isShowSelect = !e.isShowSelect
                            }
                        }
                    })])
                }), [], !1, null, "23f54180", null).exports
            }, data: function () {
                return {
                    linkList: [{name: "dashboard", path: "/dashboard"}, {
                        name: "vaults",
                        path: "/vaults"
                    }, {name: "earn", path: "/earn"}, {name: "lending", path: "/lending"}, {
                        name: "statistics",
                        path: "/statistics"
                    }, {name: "wiki", path: "/wiki"}, {name: "faqs", path: "/faqs"}, {
                        name: "settings",
                        path: "/settings"
                    }]
                }
            }, props: {showMenu: {type: Boolean, default: !0}}, created: function () {
            }
        }), Q = (n("2467"), Object(l.a)(j, (function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {
                staticClass: "height_p_100 nav_bar_width bg_white border_r_light_grey d-flex flex-column justify-content-between",
                attrs: {showMenu: e.showMenu}
            }, [a("div", {staticClass: "li_cover padding_20 flex-fill p_rel"}, e._l(e.linkList, (function (t, i) {
                return a("li", {key: i}, [a("router-link", {
                    class: {route_active: e.$route.path === t.path || "/lending" == t.path && "/lendingD" == e.$route.path},
                    attrs: {to: t.path}
                }, [a("img", {
                    attrs: {
                        src: n("fb5e")("./" + ("/lending" == t.path && "/lendingD" == e.$route.path ? "lending_1" : e.$route.path === t.path ? t.name + "_1" : t.name) + ".png"),
                        alt: ""
                    }
                }), a("span", [e._v(e._s(e.$t("" + t.name)))])])], 1)
            })), 0), a("div", {staticClass: "height_80 mt-2 d-flex justify-content-center align-items-center"}, [a("LanguageUp")], 1)])
        }), [], !1, null, "536815a6", null).exports), L = {
            name: "Loading", data: function () {
                return {}
            }, methods: {}
        }, q = (n("80fe"), {
            components: {
                NavBar: Q,
                InnerHeader: R,
                Header: N,
                Footer: z,
                Loading: Object(l.a)(L, (function () {
                    return this.$createElement, this._self._c, this._m(0)
                }), [function () {
                    var e = this.$createElement, t = this._self._c || e;
                    return t("div", {staticClass: "loading"}, [t("div", {attrs: {id: "preloader"}}, [t("span"), t("span"), t("span"), t("span"), t("span")])])
                }], !1, null, "2154d2b7", null).exports
            }, computed: Object(s.a)({}, Object(r.b)(["isLoading"])), methods: {
                banTouch: function (e) {
                    e.preventDefault(e)
                }, searchChange: function (e) {
                }
            }, created: function () {
                document.addEventListener("gesturestart", this.banTouch), document.addEventListener("touchstart", this.banTouch)
            }, destroyed: function () {
                document.removeEventListener("gesturestart", this.banTouch), document.removeEventListener("touchstart", this.banTouch)
            }
        }), V = (n("5c0b"), Object(l.a)(q, (function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("div", {attrs: {id: "app"}}, ["Home" === this.$route.name ? t("div", {staticClass: "height_p_100"}, [t("Header"), t("router-view", {staticClass: "app_container"}), t("Footer")], 1) : t("div", {staticClass: "app_cover between_h_center p_rel"}, [t("div", {staticClass: "fixed_header"}, [t("InnerHeader", {staticClass: "show_p"}), t("Header", {staticClass: "display_m"})], 1), t("div", {staticClass: "page_container between_h_center"}, [t("div", {staticClass: "nav_bar_cover height_p_100 show_p"}, [t("NavBar")], 1), t("div", {staticClass: "view_cover padding_20"}, [t("router-view")], 1)])]), t("Loading", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: this.isLoading,
                    expression: "isLoading"
                }]
            })], 1)
        }), [], !1, null, null, null).exports), H = (n("3ca3"), n("ddb0"), n("caad"), n("8c4f")), G = {
            name: "Home", data: function () {
                return {originDomain: "https://www.$D"}
            }, methods: {
                openLink: function (e) {
                    window.open(e)
                }
            }, beforeCreate: function () {
                document.querySelector("body").setAttribute("style", "background-color:#000")
            }, created: function () {
                this.originDomain = window.origin
            }
        }, K = (n("755f"), Object(l.a)(G, (function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "home between_h_center content_center"}, [a("div", [a("div", {staticClass: "font_70 font_700 padding_lr20"}, [e._v(e._s(e.$t("welcomeV2")))]), a("div", {staticClass: "font_30 font_500 padding_lr20 margin_t_20"}, [e._v(e._s(e.$t("welcomeText")))]), a("button", {
                staticClass: "font_30 font_500 bg_white padding_tb5_lr20 margin_t_40 border_radius_30",
                on: {
                    click: function (t) {
                        return OpenWindow()
                    }
                }
            }, [e._v(e._s(e.$t("launchApp")))])])])
        }), [], !1, null, "795c100b", null).exports);
        a.default.use(H.a);
        var W = H.a.prototype.push;
        H.a.prototype.push = function (e) {
            return W.call(this, e).catch((function (e) {
                return e
            }))
        };
        var J = [{path: "/", name: "Home", component: K}, {
            path: "/dashboard",
            name: "Dashboard",
            component: function () {
                return n.e("chunk-836a8c28").then(n.bind(null, "7277"))
            }
        }, {
            path: "/vaults", name: "Vaults", component: function () {
                return n.e("chunk-7af09786").then(n.bind(null, "1d14"))
            }
        }, {
            path: "/earn", name: "Earn", component: function () {
                return n.e("chunk-34aaae98").then(n.bind(null, "3127"))
            }
        }, {
            path: "/lending", name: "Lending", component: function () {
                return Promise.all([n.e("chunk-340cfbe4"), n.e("chunk-6bc5a0bf")]).then(n.bind(null, "3f28"))
            }
        }, {
            path: "/lendingD", name: "LendingD", component: function () {
                return Promise.all([n.e("chunk-340cfbe4"), n.e("chunk-7a36b7f0")]).then(n.bind(null, "ba5a"))
            }
        }, {
            path: "/statistics", name: "Statistics", component: function () {
                return n.e("chunk-7fa270a3").then(n.bind(null, "fcd1"))
            }
        }, {
            path: "/governance", name: "Governance", component: function () {
                return n.e("chunk-2d0c136e").then(n.bind(null, "44a9"))
            }
        }, {
            path: "/wiki", name: "Wiki", component: function () {
                return n.e("chunk-278d941d").then(n.bind(null, "dd3d"))
            }
        }, {
            path: "/faqs", name: "FAQs", component: function () {
                return n.e("chunk-aca1e1c8").then(n.bind(null, "9880"))
            }
        }, {
            path: "/settings", name: "Settings", component: function () {
                return n.e("chunk-635af657").then(n.bind(null, "f073"))
            }
        }], X = new H.a({mode: "hash", base: "", routes: J});
        X.beforeEach((function (e, t, n) {
            ["Home", "Dashboard", "Vaults", "Earn", "Lending", "LendingD", "EarnD", "Statistics", "Wiki", "FAQs", "Settings"].includes(e.name) && (g.a.commit("Set_Loading", !0), n())
        })), X.afterEach((function (e, t) {
            g.a.commit("Set_Loading", !1)
        }));
        var Z = X, $ = n("12cb"), ee = {
            name: "Notify",
            props: {
                align: {type: String, default: "left"},
                titleName: {type: String, default: "Tips"},
                cancelText: {type: String, default: "Cancel"},
                confirmText: {type: String, default: "Confirm"},
                showCancel: {type: Boolean, default: !0},
                showConfirm: {type: Boolean, default: !0},
                showLine: {type: Boolean, default: !1},
                show: {type: Boolean, default: !1}
            }
        }, te = (n("4262"), Object(l.a)(ee, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                staticClass: "d-overlay",
                class: {"overlay-effect": e.show}
            }, [n("div", {
                staticClass: "d-modal d-effect",
                class: {"d-show": e.show}
            }, [n("div", {staticClass: "d-content"}, [n("div", {
                staticClass: "modal-header padding_10 p_rel",
                class: {
                    "bottom-border": e.showLine,
                    "place-center": "enter" == e.align,
                    "place-left": "left" == e.align,
                    "place-right": "right" == e.align
                }
            }, [n("span", {staticClass: "font_20 font_600 text_black"}, [e._v(e._s(e.titleName))]), n("span", {
                staticClass: "r_v_center padding_lr20 font_30 text_black cursor_pointer",
                on: {
                    click: function (t) {
                        return e.$emit("closeNotify")
                    }
                }
            }, [e._v("Г—")])]), n("div", {staticClass: "modal-body"}, [e._t("body"), e.showCancel || e.showConfirm ? n("div", {staticClass: "modal_btn between_h_center content_evenly"}, [e.showCancel ? n("button", {
                staticClass: "font_14 text_white bg_grey",
                on: {
                    click: function (t) {
                        return e.$emit("cancel")
                    }
                }
            }, [e._v(e._s(e.$t("cancel")))]) : e._e(), e.showConfirm ? n("button", {
                staticClass: "font_14 text_white bg_pink",
                on: {
                    click: function (t) {
                        return e.$emit("confirm")
                    }
                }
            }, [e._v(e._s(e.$t("confirm")))]) : e._e()]) : e._e()], 2)])])])
        }), [], !1, null, "0a9b7ee4", null).exports), ne = {
            name: "Loading",
            props: {
                stop: {type: Boolean, default: !0},
                align: {type: String, default: "center"},
                titleName: {type: String, default: "Tips"},
                showLine: {type: Boolean, default: !1},
                show: {type: Boolean, default: !1}
            }
        }, ae = (n("2f00"), Object(l.a)(ne, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                staticClass: "l-overlay",
                class: {"overlay-effect": e.show}
            }, [n("div", {
                staticClass: "l-modal l-effect",
                class: {"d-show": e.show}
            }, [n("div", {staticClass: "d-content"}, [n("div", {
                staticClass: "modal-header",
                class: {
                    "bottom-border": e.showLine,
                    "place-center": "enter" == e.align,
                    "place-left": "left" == e.align,
                    "place-right": "right" == e.align
                }
            }, [n("span", {staticClass: "text_grey font_24"}, [e._v(e._s(e.titleName))]), n("span", {
                staticClass: "r_v_center header-close text_grey font_30",
                on: {
                    click: function (t) {
                        return e.$emit("closeLoading")
                    }
                }
            }, [e._v("Г—")])]), n("div", {staticClass: "modal-body"}, [n("div", {staticClass: "loading-cover"}, [n("div", {
                staticClass: "loading-css",
                class: {loading: e.stop, "loading-stop": !e.stop}
            })]), n("div", {staticClass: "loading-text"}, [e._t("body")], 2)])])])])
        }), [], !1, null, "01c8de16", null).exports), ie = {
            name: "Message", data: function () {
                return {visible: !1, message: "", type: 1}
            }
        }, se = (n("59a4"), Object(l.a)(ie, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", [e.visible && 1 == e.type ? n("div", {
                staticClass: "message-tip",
                attrs: {id: "tips-success"}
            }, [n("div", [e._v(e._s(e.message))])]) : e._e(), e.visible && 2 == e.type ? n("div", {
                staticClass: "message-tip",
                attrs: {id: "tips-warn"}
            }, [n("div", [e._v(e._s(e.message))])]) : e._e(), e.visible && 3 == e.type ? n("div", {
                staticClass: "message-tip",
                attrs: {id: "tips-error"}
            }, [n("div", [e._v(e._s(e.message))])]) : e._e()])
        }), [], !1, null, "5ea652fa", null).exports), re = {
            install: function (e) {
                var t, n = new (e.extend(se));
                n.$mount(document.createElement("div")), document.body.appendChild(n.$el), e.prototype.$message = {
                    messageMode: function (e, a, i) {
                        clearTimeout(t), t = setTimeout((function () {
                            n.visible = !1
                        }), i), n.message = e, n.visible = !0, n.type = a
                    }, success: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
                        this.messageMode(e, 1, t)
                    }, warn: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
                        this.messageMode(e, 2, t)
                    }, error: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
                        this.messageMode(e, 3, t)
                    }
                }
            }
        }, oe = re, le = n("5f5b"), pe = n("b1e0"), ue = n("2a68"), de = n("bb33").params;
        a.default.prototype.$echarts = i, a.default.prototype.$plus = ue.plus, a.default.prototype.$dividedBy = ue.dividedBy, a.default.prototype.$toFormat = ue.toFormat, a.default.prototype.$toThreeFilter = ue.toThreeFilter, a.default.prototype.$greaterThan = ue.greaterThan, a.default.prototype.$smallerThan = ue.smallerThan, a.default.prototype.$compareAscend = ue.compareAscend, a.default.prototype.$compareDescend = ue.compareDescend, a.default.prototype.$bigNumberFormat = ue.bigNumberFormat, a.default.prototype.$getUrlKey = ue.getUrlKey, a.default.prototype.$countdown = ue.countdown, a.default.prototype.$params = de, a.default.component(ae.name, ae), a.default.component(te.name, te), a.default.use(le.a), a.default.use(pe.a), a.default.use(oe), a.default.use(te), a.default.use(ae), a.default.config.productionTip = !1, a.default.prototype.$isTest = !1, new a.default({
            router: Z,
            store: g.a,
            i18n: $.a,
            render: function (e) {
                return e(V)
            }
        }).$mount("#app")
    }, 5765: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAmCAYAAAC76qlaAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI7SURBVHgBzZiPdcIgEMavnSDdgA3aERyhGzSdoCPUTuAIdgPbCeIGthPgBrrB1zshT4pgCKDm99498/hzfsBxJBAVAqBhe2frcGTD1tJUYXGKTSOO1CmaGgOiXfENTQUJBaQzp6lg49jlEybelX126WgqBGZVOXWNX0mVuad67J3nwZjGrbKR94fC0oZJY59dNl7f22UjdjxHOq3XVyf0kTb1s5Gd2SQBXr/bZyNkLDmmlI3sLLqCOphQagJtfZRTd/FslE1AeOPUqSkL7zxtSyRmI9/RC9sOcbS0oUqgIBv5jnSCgx1VApnZKORoDLIyHduCbUaZoMYBhDI0Co5ojMhGg8Jj5QkDUHRF7lyxhwKmF051+LH2za6/qBapM27LntiecXrCXX9lxgj3+oWO6BRkgz9RKbnCnXZj8nIqsmFXGMjjRcITJmaG/NASdHAAlxbu+CtdmXff4VWEW58dylgUC0cddGSAkr1i4dVKm+Q83pe7wqkCvl/vP2b8439M7LnLQ82v/KrApMxVoOqjbxAMiVh5rD6XiOi3SPM5DQkMdFriwu8jMIdaNyh6pHBBw7zRVb02wPFyaJck+ozAITTMCsyoAJjDaXFGsJS3ob4nWSUDuXpbs/2SeQvcktn5W0egrJCYbDjF9sj2TOev6tZsr66ff+D896Y7co3rEJ1lX3g7IGpn28jGmeNyA9BI/frJBcd3co0yZFKWyNgrd1QIzEHRm8RuH8/Ka7olsx9kHxz2A8fvmjL5A5gjtDDfZnJHAAAAAElFTkSuQmCC"
    }, "59a4": function (e, t, n) {
        "use strict";
        n("a195")
    }, "5aeb": function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "lendingPair", (function () {
            return s
        }));
        var a = n("d028"), i = n("2f7b"), s = [{
            token: "YFO",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.YFO.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.YFO.address,
            cTokenAddress: i.YFO
        }, {
            token: "OBS",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.OBS.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.OBS.address,
            cTokenAddress: i.OBS
        }, {
            token: "BNB",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.BNB.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.BNB.address,
            cTokenAddress: i.BNB
        }, {
            token: "USDT",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.USDT.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.USDT.address,
            cTokenAddress: i.USDT
        }, {
            token: "BUSD",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.BUSD.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.BUSD.address,
            cTokenAddress: i.BUSD
        }]
    }, "5c0b": function (e, t, n) {
        "use strict";
        n("0554")
    }, "5c44": function (e) {
        e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"}]')
    }, "5e53": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEWSURBVHgB7ZmxDYMwEEXPVgpElREYIStkExoEXdgANgAqBB2bMEJGYIR0VEDOUiIRFIWQE9go9yrLPtlfvuMjnUUQBG7f94kQ4gjb0kgp4zzPq09BchiGSIM4hdN1XToXJFUgaOKbi5FgOIfpRFEUAlbE9/1hSbzxN8gCqbBAKoe5gKVf3RSqK3CKqey/Btf+s8zBKabCPsg+qBv2QSqcYir/44O/1urc/pxiKuyDS/ef1iSnmMr+BIZhuGkzc3wednud6boSWI8n2rZN3gWuxfM8JRRb0fF4Dbu/V4GLEQ5iMBDU5UrLsjIcN2AeTVmWlUzT9Ia94jOYJbJ5aIIXk/Q8z8WngQsOT6CHGtNa27adqYtTE3eUml/FUgL/7wAAAABJRU5ErkJggg=="
    }, 6: function (e, t) {
    }, "652a": function (e) {
        e.exports = JSON.parse('{"OBC":{"address":"0xbf6f7d817d029CCd7928e4CEF3a9729e114C991b","decimals":18},"OBS":{"address":"0x095956B142431Eb9Cf88B99F392540B91aCbF4ad","decimals":18},"OBB":{"address":"0x4Ce3e25A36Ba370201729Ef775367db756128270","decimals":18},"BNB":{"address":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c","decimals":18},"WBNB":{"address":"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c","decimals":18},"YFO":{"address":"0xAc0C8dA4A4748d8d821A0973d00b157aA78C473D","decimals":18},"CAKE":{"address":"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","decimals":18},"BUSD":{"address":"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","decimals":18},"USDC":{"address":"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d","decimals":18},"USDT":{"address":"0x55d398326f99059fF775485246999027B3197955","decimals":18},"BTC":{"address":"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c","decimals":18},"BTCB":{"address":"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c","decimals":18},"ETH":{"address":"0x2170Ed0880ac9A755fd29B2688956BD959F933F8","decimals":18},"MDX":{"address":"0x9C65AB58d8d978DB963e63f2bfB7121627e3a739","decimals":18}}')
    }, 6547: function (e, t, n) {
        var a = n("2453");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("6fd53229", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, "670d": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqCAYAAADBNhlmAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARdSURBVHgB7Vg7UtxAEG1hB/wCfANxAq8LqHJmkTkDTsC6il+RIE7AErkcsUT8AosTACewyAigWJ9gdQNwwicA/HoYyaMujXakpTbyq4IZ9c60nmb6N0P0H/3Boz6wurq68fLyEnie10A7gXaC5ejfop+gTfDYOTw83KaaeE/9oQ0iqpO2us9EG0wc7Tz+ahMcoppYX19vuI5dWloKqCZqE3x6etpwHTs0NPSFaqIWwbW1NR9N05TB3poHBwce/9HrtmbAVreWl5edVzw3lyqCX4QVOUHXN8QJiE2a4+BAXTkGRGf39/cTqoBCJ4HyazQdbOPx+Ph4h2UPDw/sqYskVo4BeatAtglCJ4bIh6wL3ZFFr4+PnJV6vAJybTTO9sXkbGEEprBVRL5EVxu6Nk3ZO6GwieY7OaKMHOPy8vJ8ZmaGuwE5ACv+eWpq6s/V1dVFJjPI8Rb8orzd2JA8Pz83j46Ozh3Gst02YbdbLro5yI+Ojk622+1bfn5v/JBTYGQDJUOfJ8QgFrkSS4HxEZoI5jNHrx7eMPWaWYjbu7s75qK2Wq2gXr2u0BvCaHdpAFhZWQlBbMeUjYyMfOBVVHFQr56JZFDkGLBjdszElGEVlaOmgToQc2IaPGLxHPI/j3Mq4tK1HA2jbu7t7R1TD4RhOIFYFmIXOJ0FWtzB/LbLfAZHD8z/acrYB6Djk2mDOQ+W3mRR3MvznbJHWdZRW8wdFjCpdAR70/39/WKZYoewpD6AV9k2QMde35SZH5UVC4ottkUQCKootpFMDb4IeMecEEXmistqJhffdMFpUyxfGnFowJxJ/HYs9ARkh28+IM7mokeOIJjHZZMFGoLENtsrfz1sNxRjA1c9COodshHsB8PDw5n9wqsn6I2QIyjLeGxVp2RubD7AoXbYq9khsE2tCnoS80EeD3IEC8r4hCzAlsZCxLGsC6I3+E16f5vsyG+pOB5kBIvKeOCULMCWsjEn1BsJUpk1YGO1z4Qo1Fz+ETQCrrNidgiOVz1IJnqMFWNjY6cy/jKXlKTHHXzFdVrupOBDUBlBE7reY/NIbTjG/BjevFuWiVKgmpkXxwMF8HpNdRhwIwhGqGa+0QCBdMe5uGmI1EFMbbHMIORYor8xAvEc8z9FUBu8CZ+LSBoQ9Lt8U8aBX7WpAEvMFW1GSpf8qhzXExI0HTyfwTZPqQZg74E+YgamXi7/bSaWEeQAi6Telc5iARcWrQr1XqDrPd9heK5Ey46dFxcXDzjyPeLHrw5KOBTMY7yHI2JM5eRampxT+sNYPgtlRUvuXMzn0enpaVb02UGXqlLKSGpyW+QOPrj/yL2jaBTskYM2n30jBNLfLHt8fPzIZ2EqvvpYkHZZVMZrRBa9DazcJzm48uWRpcx3ujwCkQVZTvVC5XKLjZdfJMS+PpQr2Mr4quTUPKqJihdDtTNTPwWr8/WHLOOroN9b/heXcfrWtRb6uuXXW8y3+b6ZDYwsxJknpj7wF91aimjvX41QAAAAAElFTkSuQmCC"
    }, 7: function (e, t) {
    }, 7234: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "lendingPair", (function () {
            return s
        }));
        var a = n("652a"), i = n("553e"), s = [{
            token: "BNB",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            tokenPrice: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.BNB.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.BNB.address,
            cTokenAddress: i.BNB
        }, {
            token: "YFO",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            tokenPrice: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.YFO.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.YFO.address,
            cTokenAddress: i.YFO
        }, {
            token: "OBS",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            tokenPrice: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.OBS.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.OBS.address,
            cTokenAddress: i.OBS
        }, {
            token: "USDT",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            tokenPrice: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.USDT.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.USDT.address,
            cTokenAddress: i.USDT
        }, {
            token: "BUSD",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            tokenPrice: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.BUSD.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.BUSD.address,
            cTokenAddress: i.BUSD
        }, {
            token: "ETH",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            tokenPrice: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.ETH.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.ETH.address,
            cTokenAddress: i.ETH
        }, {
            token: "BTC",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            tokenPrice: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.BTC.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.BTC.address,
            cTokenAddress: i.BTC
        }, {
            token: "OBC",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            tokenPrice: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.OBC.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.OBC.address,
            cTokenAddress: i.OBC
        }]
    }, "739f": function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".lang_wraper[data-v-f3bf12ea]{z-index:10000;position:absolute;text-align:left;width:100%;top:110%;left:0;border-radius:5px;transform-origin:center top;color:var(--black);background-color:var(--white);cursor:pointer;overflow-y:auto;height:0;transition:height .2s linear}.fix_lang[data-v-f3bf12ea]{position:absolute;top:0}.select_lang_up[data-v-f3bf12ea]{position:absolute;bottom:100%;left:0;width:100%;text-align:left;border-radius:.5rem;transform-origin:center top;color:var(--black);background-color:var(--white);cursor:pointer;max-width:130px;overflow-y:auto;height:0;transition:height .2s linear}.lang_wraper_effect[data-v-f3bf12ea]{height:160px;box-shadow:0 0 1px 1px var(--light-grey)}li[data-v-f3bf12ea]{font-weight:600}li[data-v-f3bf12ea]:hover{font-weight:700;color:var(--grey)}.lang_wraper[data-v-f3bf12ea]::-webkit-scrollbar,.select_lang_up[data-v-f3bf12ea]::-webkit-scrollbar{width:0;height:0;margin:0 auto}.lang_wraper[data-v-f3bf12ea]::-webkit-scrollbar-thumb,.lang_wraper[data-v-f3bf12ea]::-webkit-scrollbar-track,.select_lang_up[data-v-f3bf12ea]::-webkit-scrollbar-thumb,.select_lang_up[data-v-f3bf12ea]::-webkit-scrollbar-track{background-color:var(--grey-dark);box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.lang_wraper[data-v-f3bf12ea]::-webkit-scrollbar-button,.select_lang_up[data-v-f3bf12ea]::-webkit-scrollbar-button{height:0;background-color:var(--grey-dark)}.lang_wraper[data-v-f3bf12ea]::-o-scrollbar,.select_lang_up[data-v-f3bf12ea]::-o-scrollbar{width:0;height:0;margin:0 auto}.lang_wraper[data-v-f3bf12ea]::-o-scrollbar-thumb,.select_lang_up[data-v-f3bf12ea]::-o-scrollbar-thumb{background-color:#1b5485;box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.lang_wraper[data-v-f3bf12ea]::-o-scrollbar-track,.select_lang_up[data-v-f3bf12ea]::-o-scrollbar-track{box-shadow:inset 0 0 5px rgba(0,0,0,.2);background-color:var(--grey-dark)}.lang_wraper[data-v-f3bf12ea]::-o-scrollbar-button,.select_lang_up[data-v-f3bf12ea]::-o-scrollbar-button{height:0;background-color:var(--grey-dark)}.lang_wraper[data-v-f3bf12ea]::-moz-scrollbar,.select_lang_up[data-v-f3bf12ea]::-moz-scrollbar{width:0;height:0;margin:0 auto}.lang_wraper[data-v-f3bf12ea]::-moz-scrollbar-thumb,.select_lang_up[data-v-f3bf12ea]::-moz-scrollbar-thumb{background-color:#1b5485;box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.lang_wraper[data-v-f3bf12ea]::-moz-scrollbar-track,.select_lang_up[data-v-f3bf12ea]::-moz-scrollbar-track{box-shadow:inset 0 0 5px rgba(0,0,0,.2);background-color:var(--grey-dark)}.lang_wraper[data-v-f3bf12ea]::-moz-scrollbar-button,.select_lang_up[data-v-f3bf12ea]::-moz-scrollbar-button{height:0;background-color:var(--grey-dark)}.lang_wraper[data-v-f3bf12ea]::-ms-scrollbar,.select_lang_up[data-v-f3bf12ea]::-ms-scrollbar{width:0;height:0;margin:0 auto;border-radius:10px}.lang_wraper[data-v-f3bf12ea]::-ms-scrollbar-thumb,.select_lang_up[data-v-f3bf12ea]::-ms-scrollbar-thumb{background-color:#1b5485;box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.lang_wraper[data-v-f3bf12ea]::-ms-scrollbar-track,.select_lang_up[data-v-f3bf12ea]::-ms-scrollbar-track{box-shadow:inset 0 0 5px rgba(0,0,0,.2);background-color:var(--grey-dark)}.lang_wraper[data-v-f3bf12ea]::-ms-scrollbar-button,.select_lang_up[data-v-f3bf12ea]::-ms-scrollbar-button{height:0;background-color:var(--grey-dark)}", ""]), e.exports = t
    }, "73cf": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAYAAABFqxrgAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5QMcCAsMM2N2PgAABtZJREFUeNrtm29oVXUYxz/P2b27bmubf9JJc70QRJIpmn8DwzISfeeLIAiyoKSCLMnNRVjZHzNTjDAkiCIQoihDemH1IpPwRfi3UtMIAnUTNp3K1nZ3d3fu04vfudvdds48997f2RT3hbHtnHvP73k+53l+f87vOTCucY1rXAOS0WhEGxuHHNAcC2Tgf5GB897fsnPn7QtBN20yjkh/E6VANVCN6gxgMlCOSALVXiCJyHWgBdVriHSg2pMLJyog1iFoQ4P5Ix6HdHoSIvXA/cBCoB6oQbXcg1KCiINqBnARSQPdQDuqZ4GTwElETtHT004iYa6dySC7d996EPpDXjUOzAHWAI8iMh+YCDj5XbA/ZW4AfwI/AT8AfyGSAnuRUTQE3bw5a3AJsATVdcAaROrydnxkIIpIM3AI2Af8imoakaJhFAVBGxqMgY5TCzwPPAXUWXF8ZLWi+jWwF5G/obioKBiCNjSA6wqx2EpgC/AgJhpGR6oK/IHI28D3qLqya9foQfA6vwSwDtiCyL2j5vxwtQIfofoJcJ3ubmTv3rwukHfOegAmAluBXWMMAMxo8ybwIVBLRUXeF8grEjwAdwHvA88BsZx5wFgrg+o3wAZEruTTR4SOBA9AKbARWI9IcQBUIZMZ+MmdRRYmB3gM2AZM7J+vhFAoL7SxEVQd4FlgByITizJXFUpLYcYMqKqCjg5oaYFUCguRlUJ1G6rbcZy+MBERC200PAS8bgVAeTmsWgXz5xsY6TScPg0HD0J3d7EgEsDLiPwDfBXmCzdNB28meI8HYEbRAFRh3jxYtgwqKsz0urwcFi82x3IXVIVKZArwGqr3DVu8FQIB0/k9AywvzjJP8TjMnAklQ6YUjgOzZ0NZmZVmMOuUF4GENjUVDsHrXBaQ7QhtKBYLdjQeHw6ncAkijwMr6eoqHAIQR/VJoLg0yJXrmg7QTz090NdnCYEATAGepqysQjdsyB+CFwX1wFpsLrn7+iCZDIbgutaaMo7oI6guo7IyfwhkMgKsRqTWqlGZjHE2CIKtSMhKZDKwllQqMM+CITjOJGA1tpbDxiDT8yeT/iNAFJFgovjhkUY2Xwe1qQlE6r2nQvaVTJqIGNRoDhzbU3GRmcCioOHSCfgSqC7ALJRsGxQMIShNilcZIg8E+esPwXVLEVmCzVTIlR+ETMYcj2pBprrIe7YZEoJqGaqzo7HGgzA097MQopJIHSJTw0MQmYbI3ZEZ1NPjHwnRpQOoVqHqO9IFhXsNkP/TibBKp6G3d/Ax1402Eow/NX4n/KfCqhVAPJL8FDFzgaF3faSZpJ12Swm4sbGAL0wg7DK7ELnucAhRTJQGywHKgk6MvvxCPztRGoPHdUGjQw+q0d2WoEiwP1vMVQbw7XSC0qELSEdmjl+fkExGmw5m09d3TR2UDq1BX7AivzlB9JHQ5fkVEoJqG6pXIzElm/NDF1FRQxDpQKQlPASRJCLnIjQILl2CGzcGgFy4MBiSfV0ArvidCBoGe4GjwBNEMYKIwMWLsH8/1NVBWxucPx/1yHAUU/sQGgLA75jagMmRQHBd4/i5cwMVLdFBSHoQMn4nfe+y7NwJqmdRPROVVf0wonXeSPVfVE8EbcSM9HjtOvAjAfSKNMo8Yq+shJoaswtVUmJjK863NeAXVJuDPhCcDo6jwI+ovuBVndgDMGECLF8O9fUGRHc3nD0Lhw+bUcJmZKheAw6QSAQOPYGR4BU8nAEOeDTtAFCFuXNh5UqorTVRMH06rFgBS5eaCLEZESI/I/IbnZ2BH7lZz59GZB/QjC3F4zBrlvmdq1gM5swxUWJDBmQ78AXJZJfs2VMYBC8aTgGfWltLiBiHg87ZSwX16poO3axwI8wcoA/Vz4AjVkxLp802vF/INzfbfLp0BvgYSMmOHcVB8IaVy8A7I/WwoZS9y8eOwfHj0NU1sCN16hQcOWJnOa3aDryHyDl79QnmEfxh4F3gA6CqKBAdHXDgAJw4AdXV0NlpZpB2ijR6gT2ofhv2WqFbzKlYewPYXPQudXakyG622OkPMqh+ichGVNvDlvQVUrhVDWwH1nNrFW65qH4HbETkcj6FW3l74IGoAl4BXkJk0lh7j2oK+Bx4C5HWfKtb814heiHWgcg2oBHVi2OMoBWRrcCrQOvNCjJ8fSq05Tu+rHcQiDu5wLsfxJ1e6j/IzpFf+piUd1u300sfw2wf/vrPXFQXIrLIgzMNKAcSqCYw0ZJBpBdIAd3ejO88cBw4cdu8/jMMxvAXwRKYobUaUw1Xg+pUoBL4D5GrQBvZF8Ggk+xmye32IlggEMenexj6auDQ4xbyfVzjGte48tX/hbbfTXZuqv4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDMtMjhUMDg6MTE6MTIrMDA6MDAwt/03AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAzLTI4VDA4OjExOjEyKzAwOjAwQepFiwAAAABJRU5ErkJggg=="
    }, "73d7": function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ComptrollerInterface","name":"comptroller_","type":"address"},{"internalType":"contract InterestRateModel","name":"interestRateModel_","type":"address"},{"internalType":"uint256","name":"initialExchangeRateMantissa_","type":"uint256"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address payable","name":"admin_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"cashPrior","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"interestAccumulated","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"borrowAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"error","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"info","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"detail","type":"uint256"}],"name":"Failure","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"liquidator","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"cTokenCollateral","type":"address"},{"indexed":false,"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"LiquidateBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract ComptrollerInterface","name":"oldComptroller","type":"address"},{"indexed":false,"internalType":"contract ComptrollerInterface","name":"newComptroller","type":"address"}],"name":"NewComptroller","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract InterestRateModel","name":"oldInterestRateModel","type":"address"},{"indexed":false,"internalType":"contract InterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"NewMarketInterestRateModel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldReserveFactorMantissa","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"NewReserveFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"redeemer","type":"address"},{"indexed":false,"internalType":"uint256","name":"redeemAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"RepayBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"benefactor","type":"address"},{"indexed":false,"internalType":"uint256","name":"addAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"uint256","name":"reduceAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesReduced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reduceAmount","type":"uint256"}],"name":"_reduceReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract ComptrollerInterface","name":"newComptroller","type":"address"}],"name":"_setComptroller","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract InterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"_setInterestRateModel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"_setReserveFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"accrualBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"comptroller","outputs":[{"internalType":"contract ComptrollerInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRateStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountSnapshot","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCash","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract ComptrollerInterface","name":"comptroller_","type":"address"},{"internalType":"contract InterestRateModel","name":"interestRateModel_","type":"address"},{"internalType":"uint256","name":"initialExchangeRateMantissa_","type":"uint256"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"interestRateModel","outputs":[{"internalType":"contract InterestRateModel","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"contract CToken","name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"mint","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"repayBorrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"}],"name":"repayBorrowBehalf","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"reserveFactorMantissa","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"seize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"supplyRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"totalBorrowsCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
    }, "73f7": function (e, t, n) {
        "use strict";
        n("10b8")
    }, "74ac": function (e, t, n) {
        var a = n("acdd");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("7c9e3559", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, "755f": function (e, t, n) {
        "use strict";
        n("043a")
    }, "75f0": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJzSURBVHgB7ZiBsZswDIaVXgfIBmWEbNCMkA3CBu9tAJ0g7QSM8EagG6QbmE6QdoK/djEXIQSYYN57987fnQ4ftmTLlmUDUSKRSCQSHx0ABwyprGS0Aqt/dCL6yb3sKRZuoNAxVkp6AKv33cqNT4K31/E1xM6OAnEWJ6obK6WV3zSPm9nCysHK8263++Ht5/ZRsXaZrQuxF4aYnRvWU0/Yd8QLId/BlRnvYtXgMWTolLIBxQbtpu04s/e5d84ImVqlJ6afYTgRN4qNNXrRBhDBbqU4aEL1P1E4DStnFAEfRjlN9zXJEgf+snJGcShoJZ8XtP3Fyoe5xrhv0r2XxqbFRtTnI+oNxQb9w+w20mbPyoXcmOhnnprHPPpZ7kJbIAa0p6GD1+69e2KYiYxvdxLvz8Kh1aE15oBhnRxEXSVnzzvxBe250TlzFXYuvm3N3kXLctIBvsz8LHhGn4OiW2CIwX3FjGY7tgOVnCW0IcFDxYzo7hUHMlbPbQRd5BxL0qjjDytn/unuNHw//BzRlatS8qwkbASz1IGGld3MlzQ8E8YGwsPCpdRvFNZPPNDeezqm7joXRfdFCx1fJ7834t5EWUfHiUFrKfPaDRb3vVIodnsO0FZg+svM1dVKXc30c5qfmPg3UdGZNvOZryugc5qxyR0Ivok+6oBZMrhAmydtxTYB/cNs9ZHvZ9+8pgMvEJsR7cfOkRaA8T1T0ZZgmAL5P6N6zhG0J3IJPQ07/dmrelRsh08jAzkpbWW4dLhVDb4+RMWHQgUdN9gz9HD5H4bY6tBayowj73fgEhcK0MOkxlbX5C3A/cdX/WbxnUgkEonEe+cfOL/3cAd8VJkAAAAASUVORK5CYII="
    }, 7738: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAmCAYAAACyAQkgAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABMSURBVHgB7daxDQAgDANBEzEom7FflgBRZIMUCforXH9pqYnxxt23iovQo+JMTRAKAABKiJu3VBx/NBuh2eYbM1sCAAA/4o9mIzTbBactEjSY0T9vAAAAAElFTkSuQmCC"
    }, 7898: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "vaultPair", (function () {
            return o
        }));
        var a = n("652a"), i = n("84a8"), s = n("7ede"), r = "0xa157EFB42A7995Beb3c2768Fb6a7766B6Fe33ba2", o = [{
            token1: "OBS",
            token2: "YFO",
            address1: a.OBS.address,
            address2: a.YFO.address,
            lpAddress: i["OBS-YFO"],
            vaultAddress: r,
            stratAddress: s["OBS-YFO-Strat"][0],
            stratPid: s["OBS-YFO-Strat"][1],
            farmAddress: s["OBS-YFO-Strat"][2],
            farmPid: s["OBS-YFO-Strat"][3],
            dailyOut: s["OBS-YFO-Strat"][4],
            swap: s["OBS-YFO-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 103.12,
            start: new Date("2021/07/21 20:00:00").getTime(),
            end: new Date("2022/07/21 20:00:00").getTime()
        }, {
            token1: "OBS",
            token2: "BNB",
            address1: a.OBS.address,
            address2: a.BNB.address,
            lpAddress: i["OBS-BNB"],
            vaultAddress: r,
            stratAddress: s["OBS-BNB-Strat"][0],
            stratPid: s["OBS-BNB-Strat"][1],
            farmAddress: s["OBS-BNB-Strat"][2],
            farmPid: s["OBS-BNB-Strat"][3],
            dailyOut: s["OBS-BNB-Strat"][4],
            swap: s["OBS-BNB-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 218.3,
            start: new Date("2021/07/21 20:00:00").getTime(),
            end: new Date("2022/07/21 20:00:00").getTime()
        }, {
            token1: "OBC",
            token2: "YFO",
            address1: a.OBC.address,
            address2: a.YFO.address,
            lpAddress: i["OBC-YFO"],
            vaultAddress: r,
            stratAddress: s["OBC-YFO-Strat"][0],
            stratPid: s["OBC-YFO-Strat"][1],
            farmAddress: s["OBC-YFO-Strat"][2],
            farmPid: s["OBC-YFO-Strat"][3],
            dailyOut: s["OBC-YFO-Strat"][4],
            swap: s["OBC-YFO-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 300.53,
            start: new Date("2021/09/05 14:00:00").getTime(),
            end: new Date("2022/09/05 14:00:00").getTime()
        }, {
            token1: "OBC",
            token2: "BNB",
            address1: a.OBC.address,
            address2: a.BNB.address,
            lpAddress: i["OBC-BNB"],
            vaultAddress: r,
            stratAddress: s["OBC-BNB-Strat"][0],
            stratPid: s["OBC-BNB-Strat"][1],
            farmAddress: s["OBC-BNB-Strat"][2],
            farmPid: s["OBC-BNB-Strat"][3],
            dailyOut: s["OBC-BNB-Strat"][4],
            swap: s["OBC-BNB-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 455.23,
            start: new Date("2021/09/05 14:00:00").getTime(),
            end: new Date("2022/09/05 14:00:00").getTime()
        }, {
            token1: "OBC",
            token2: "BUSD",
            address1: a.OBC.address,
            address2: a.BUSD.address,
            lpAddress: i["OBC-BUSD"],
            vaultAddress: r,
            stratAddress: s["OBC-BUSD-Strat"][0],
            stratPid: s["OBC-BUSD-Strat"][1],
            farmAddress: s["OBC-BUSD-Strat"][2],
            farmPid: s["OBC-BUSD-Strat"][3],
            dailyOut: s["OBC-BUSD-Strat"][4],
            swap: s["OBC-BUSD-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 373.26,
            start: new Date("2021/09/05 14:00:00").getTime(),
            end: new Date("2022/09/05 14:00:00").getTime()
        }, {
            token1: "BUSD",
            token2: "BNB",
            address1: a.BUSD.address,
            address2: a.BNB.address,
            lpAddress: i["BUSD-BNB"],
            vaultAddress: r,
            stratAddress: s["BUSD-BNB-Strat"][0],
            stratPid: s["BUSD-BNB-Strat"][1],
            farmAddress: s["BUSD-BNB-Strat"][2],
            farmPid: s["BUSD-BNB-Strat"][3],
            dailyOut: s["BUSD-BNB-Strat"][4],
            swap: s["BUSD-BNB-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 32.18,
            start: new Date("2021/07/21 20:00:00").getTime(),
            end: new Date("2022/07/21 20:00:00").getTime()
        }, {
            token1: "CAKE",
            token2: "BNB",
            address1: a.CAKE.address,
            address2: a.BNB.address,
            lpAddress: i["CAKE-BNB"],
            vaultAddress: r,
            stratAddress: s["CAKE-BNB-Strat"][0],
            stratPid: s["CAKE-BNB-Strat"][1],
            farmAddress: s["CAKE-BNB-Strat"][2],
            farmPid: s["CAKE-BNB-Strat"][3],
            dailyOut: s["CAKE-BNB-Strat"][4],
            swap: s["CAKE-BNB-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 36.27,
            start: new Date("2021/07/21 20:00:00").getTime(),
            end: new Date("2022/07/21 20:00:00").getTime()
        }, {
            token1: "USDT",
            token2: "BNB",
            address1: a.USDT.address,
            address2: a.BNB.address,
            lpAddress: i["USDT-BNB"],
            vaultAddress: r,
            stratAddress: s["USDT-BNB-Strat"][0],
            stratPid: s["USDT-BNB-Strat"][1],
            farmAddress: s["USDT-BNB-Strat"][2],
            farmPid: s["USDT-BNB-Strat"][3],
            dailyOut: s["USDT-BNB-Strat"][4],
            swap: s["USDT-BNB-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 33.69,
            start: new Date("2021/07/21 20:00:00").getTime(),
            end: new Date("2022/07/21 20:00:00").getTime()
        }, {
            token1: "USDC",
            token2: "BUSD",
            address1: a.USDC.address,
            address2: a.BUSD.address,
            lpAddress: i["USDC-BUSD"],
            vaultAddress: r,
            stratAddress: s["USDC-BUSD-Strat"][0],
            stratPid: s["USDC-BUSD-Strat"][1],
            farmAddress: s["USDC-BUSD-Strat"][2],
            farmPid: s["USDC-BUSD-Strat"][3],
            dailyOut: s["USDC-BUSD-Strat"][4],
            swap: s["USDC-BUSD-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 7.9,
            start: new Date("2021/07/21 20:00:00").getTime(),
            end: new Date("2022/07/21 20:00:00").getTime()
        }, {
            token1: "USDT",
            token2: "BUSD",
            address1: a.USDT.address,
            address2: a.BUSD.address,
            lpAddress: i["USDT-BUSD"],
            vaultAddress: r,
            stratAddress: s["USDT-BUSD-Strat"][0],
            stratPid: s["USDT-BUSD-Strat"][1],
            farmAddress: s["USDT-BUSD-Strat"][2],
            farmPid: s["USDT-BUSD-Strat"][3],
            dailyOut: s["USDT-BUSD-Strat"][4],
            swap: s["USDT-BUSD-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 9.9,
            start: new Date("2021/08/17 14:00:00").getTime(),
            end: new Date("2022/08/17 14:00:00").getTime()
        }, {
            token1: "USDT",
            token2: "CAKE",
            address1: a.USDT.address,
            address2: a.CAKE.address,
            lpAddress: i["USDT-CAKE"],
            vaultAddress: r,
            stratAddress: s["USDT-CAKE-Strat"][0],
            stratPid: s["USDT-CAKE-Strat"][1],
            farmAddress: s["USDT-CAKE-Strat"][2],
            farmPid: s["USDT-CAKE-Strat"][3],
            dailyOut: s["USDT-CAKE-Strat"][4],
            swap: s["USDT-CAKE-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 46.9,
            start: new Date("2021/08/17 14:00:00").getTime(),
            end: new Date("2022/08/17 14:00:00").getTime()
        }, {
            token1: "ETH",
            token2: "BNB",
            address1: a.ETH.address,
            address2: a.BNB.address,
            lpAddress: i["ETH-BNB"],
            vaultAddress: r,
            stratAddress: s["ETH-BNB-Strat"][0],
            stratPid: s["ETH-BNB-Strat"][1],
            farmAddress: s["ETH-BNB-Strat"][2],
            farmPid: s["ETH-BNB-Strat"][3],
            dailyOut: s["ETH-BNB-Strat"][4],
            swap: s["ETH-BNB-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 12.53,
            start: new Date("2021/08/17 14:00:00").getTime(),
            end: new Date("2022/08/17 14:00:00").getTime()
        }]
    }, 7973: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEoSURBVHgB7ZZRDoMgDEDLdImfO4JX4dMT++lVOMI+TYwycIqKINC6ffGSJVs62ydtqgCZTObPyO5Vy66qgcgDCGgJGKcOxmdHlWGAxEhIWS+ZBBQDZ7wXgAAlcpLYsqFlkkW8EkSZpBlxSkhVWDKx+11jZiZaxCsxDhzGB6fKxJ9Irz7T3uwrwZpesOYtTjLTck0kwRmZT0Jl1D2XrfpeqFNRFqtEShwtYtqhEy8DOBfTidciifFkkdCeoMZtSp/I3N8CNlXd8+HGuMV1a4gz4YqjRIwMYSb28as60Zv17pmwKSEWu+dmaQEHqOC07AIzYZP0rDE9Z7uC+s51GsfGDbUDLeKVOfwhXQIlcimDlECLOGUIEiSRg0zEnvg5Wka29JfnTCaTygeM3nMXHPdiNgAAAABJRU5ErkJggg=="
    }, "7ab5": function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"underlying_","type":"address"},{"internalType":"contract ComptrollerInterface","name":"comptroller_","type":"address"},{"internalType":"contract InterestRateModel","name":"interestRateModel_","type":"address"},{"internalType":"uint256","name":"initialExchangeRateMantissa_","type":"uint256"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address payable","name":"admin_","type":"address"},{"internalType":"address","name":"implementation_","type":"address"},{"internalType":"bytes","name":"becomeImplementationData","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"cashPrior","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"interestAccumulated","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"borrowAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"error","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"info","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"detail","type":"uint256"}],"name":"Failure","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"liquidator","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"cTokenCollateral","type":"address"},{"indexed":false,"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"LiquidateBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract ComptrollerInterface","name":"oldComptroller","type":"address"},{"indexed":false,"internalType":"contract ComptrollerInterface","name":"newComptroller","type":"address"}],"name":"NewComptroller","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldImplementation","type":"address"},{"indexed":false,"internalType":"address","name":"newImplementation","type":"address"}],"name":"NewImplementation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract InterestRateModel","name":"oldInterestRateModel","type":"address"},{"indexed":false,"internalType":"contract InterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"NewMarketInterestRateModel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldReserveFactorMantissa","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"NewReserveFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"redeemer","type":"address"},{"indexed":false,"internalType":"uint256","name":"redeemAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"RepayBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"benefactor","type":"address"},{"indexed":false,"internalType":"uint256","name":"addAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"uint256","name":"reduceAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesReduced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"addAmount","type":"uint256"}],"name":"_addReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reduceAmount","type":"uint256"}],"name":"_reduceReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract ComptrollerInterface","name":"newComptroller","type":"address"}],"name":"_setComptroller","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"implementation_","type":"address"},{"internalType":"bool","name":"allowResign","type":"bool"},{"internalType":"bytes","name":"becomeImplementationData","type":"bytes"}],"name":"_setImplementation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract InterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"_setInterestRateModel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"_setReserveFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"accrualBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"comptroller","outputs":[{"internalType":"contract ComptrollerInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"delegateToImplementation","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"delegateToViewImplementation","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRateStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountSnapshot","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCash","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"interestRateModel","outputs":[{"internalType":"contract InterestRateModel","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"repayAmount","type":"uint256"},{"internalType":"contract CTokenInterface","name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"repayAmount","type":"uint256"}],"name":"repayBorrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"repayAmount","type":"uint256"}],"name":"repayBorrowBehalf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"reserveFactorMantissa","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"seize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"supplyRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"totalBorrowsCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"underlying","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]')
    }, "7ede": function (e) {
        e.exports = JSON.parse('{"BUSD-BNB-Strat":["0xdB1E0C404cf755883F5bB06F1bd8d396979dF5EC","0","0x73feaa1eE314F8c655E354234017bE2193C9E24E","2",43044.48,"Pancake"],"BNB-BUSD-Strat":["0xdB1E0C404cf755883F5bB06F1bd8d396979dF5EC","0","0x73feaa1eE314F8c655E354234017bE2193C9E24E","2",43044.48,"Pancake"],"USDT-BNB-Strat":["0xa2216CbDA1B06fD1B527a2C2865AC0E60a0eaB06","1","0x73feaa1eE314F8c655E354234017bE2193C9E24E","17",43044.48,"Pancake"],"BNB-USDT-Strat":["0xa2216CbDA1B06fD1B527a2C2865AC0E60a0eaB06","1","0x73feaa1eE314F8c655E354234017bE2193C9E24E","17",43044.48,"Pancake"],"CAKE-BNB-Strat":["0x3c82162a5E39EEdB25eC8a5CAFDb1F2096B5D921","5","0x73feaa1eE314F8c655E354234017bE2193C9E24E","251",43044.48,"Pancake"],"BNB-CAKE-Strat":["0x3c82162a5E39EEdB25eC8a5CAFDb1F2096B5D921","5","0x73feaa1eE314F8c655E354234017bE2193C9E24E","251",43044.48,"Pancake"],"USDC-BUSD-Strat":["0x32Af47B523fF31ee01167e90BB0254b5753f28F6","6","0x73feaa1eE314F8c655E354234017bE2193C9E24E","283",43044.48,"Pancake"],"BUSD-USDC-Strat":["0x32Af47B523fF31ee01167e90BB0254b5753f28F6","6","0x73feaa1eE314F8c655E354234017bE2193C9E24E","283",43044.48,"Pancake"],"ETH-BNB-Strat":["0x81A0621737789B1606B0abEaF1a2e48F68676b2F","7","0x73feaa1eE314F8c655E354234017bE2193C9E24E","261",43044.48,"Pancake"],"BNB-ETH-Strat":["0x81A0621737789B1606B0abEaF1a2e48F68676b2F","7","0x73feaa1eE314F8c655E354234017bE2193C9E24E","261",43044.48,"Pancake"],"USDT-BUSD-Strat":["0x647c8a3d2Bd69504067468D5878430C089c484b0","8","0x73feaa1eE314F8c655E354234017bE2193C9E24E","258",43044.48,"Pancake"],"BUSD-USDT-Strat":["0x647c8a3d2Bd69504067468D5878430C089c484b0","8","0x73feaa1eE314F8c655E354234017bE2193C9E24E","258",43044.48,"Pancake"],"CAKE-USDT-Strat":["0x2565a286Ada6044F9Ea4a60A7e6D312b19941c59","9","0x73feaa1eE314F8c655E354234017bE2193C9E24E","422",43044.48,"Pancake"],"USDT-CAKE-Strat":["0x2565a286Ada6044F9Ea4a60A7e6D312b19941c59","9","0x73feaa1eE314F8c655E354234017bE2193C9E24E","422",43044.48,"Pancake"],"OBS-BNB-Strat":["0x550980B4101cc4A541779e23822C2278F6ec48A3","2","0x1E481d01b16261BE4a3bbAd034994A060b7c438E","-1",43044.48,"Pancake"],"BNB-OBS-Strat":["0x550980B4101cc4A541779e23822C2278F6ec48A3","2","0x1E481d01b16261BE4a3bbAd034994A060b7c438E","-1",43044.48,"Pancake"],"YFO-OBS-Strat":["0x86783dAF59e5e44f19705a6aBD849f76e1aE5A5B","4","0x898C95ba032629e92D322Bf8B9C9A6bD7801b623","-1",43044.48,"Pancake"],"OBS-YFO-Strat":["0x86783dAF59e5e44f19705a6aBD849f76e1aE5A5B","4","0x898C95ba032629e92D322Bf8B9C9A6bD7801b623","-1",43044.48,"Pancake"],"OBC-BNB-Strat":["0x9F8bfb5825254BD0707fc929bBD18E5326A0A215","10","0xEe43f4B82736Ed0c3E5B3E96dBa2279fbb969783","-1",43044.48,"Pancake"],"BNB-OBC-Strat":["0x9F8bfb5825254BD0707fc929bBD18E5326A0A215","10","0xEe43f4B82736Ed0c3E5B3E96dBa2279fbb969783","-1",43044.48,"Pancake"],"OBC-BUSD-Strat":["0x82671A100CA771c4761B70E4E97B29414c170322","11","0x811E21307985bE5f841B84F4f72da5C832905690","-1",43044.48,"Pancake"],"BUSD-OBC-Strat":["0x82671A100CA771c4761B70E4E97B29414c170322","11","0x811E21307985bE5f841B84F4f72da5C832905690","-1",43044.48,"Pancake"],"YFO-OBC-Strat":["0xc9C32d639Be977c740fCD1B8BF586E95b34d69bf","12","0xddE0644D156D70F5e7EA9B3a2E18FAd63eFd00D2","-1",43044.48,"Pancake"],"OBC-YFO-Strat":["0xc9C32d639Be977c740fCD1B8BF586E95b34d69bf","12","0xddE0644D156D70F5e7EA9B3a2E18FAd63eFd00D2","-1",43044.48,"Pancake"],"BUSD-MDX-Strat":["0x92a2BB802046bAC2716D6da2E35e3e468ffeCA4b","4","0xc48fe252aa631017df253578b1405ea399728a50","40",43044.48,"Mdex"],"MDX-BUSD-Strat":["0x92a2BB802046bAC2716D6da2E35e3e468ffeCA4b","4","0xc48fe252aa631017df253578b1405ea399728a50","40",43044.48,"Mdex"],"USDT-MDX-Strat":["0x241F4702aC91eC08AEcb6ABF2B57ef1F017cC8c8","5","0xc48fe252aa631017df253578b1405ea399728a50","43",43044.48,"Mdex"],"MDX-USDT-Strat":["0x241F4702aC91eC08AEcb6ABF2B57ef1F017cC8c8","5","0xc48fe252aa631017df253578b1405ea399728a50","43",43044.48,"Mdex"],"MDX-BNB-Strat":["0x4AeE28E868c1002A0BDff2c44EAE6508d5dAe1C2","6","0xc48fe252aa631017df253578b1405ea399728a50","42",43044.48,"Mdex"],"BNB-MDX-Strat":["0x4AeE28E868c1002A0BDff2c44EAE6508d5dAe1C2","6","0xc48fe252aa631017df253578b1405ea399728a50","42",43044.48,"Mdex"]}')
    }, 8: function (e, t) {
    }, "80fe": function (e, t, n) {
        "use strict";
        n("20bf")
    }, "84a8": function (e) {
        e.exports = JSON.parse('{"BNB-OBC":"0xEb8942B9eBb98ab14e82551A5154c83AAF9330bd","OBC-BNB":"0xEb8942B9eBb98ab14e82551A5154c83AAF9330bd","BUSD-OBC":"0x3Ff034678AD3AF3Df69D56F015013CD202fE0bf6","OBC-BUSD":"0x3Ff034678AD3AF3Df69D56F015013CD202fE0bf6","YFO-OBC":"0x5c7d4c71Ae3A37AeD89f89EBD01bcc2af447E756","OBC-YFO":"0x5c7d4c71Ae3A37AeD89f89EBD01bcc2af447E756","YFO-BNB":"0x462cCea7c669A304a5bFcD1E35A14Ba3B6f5b3c4","BNB-YFO":"0x462cCea7c669A304a5bFcD1E35A14Ba3B6f5b3c4","ETH-OBC":"0xb31354c9f6eE1CE7BF04406F324cD462474AF43C","OBC-ETH":"0xb31354c9f6eE1CE7BF04406F324cD462474AF43C","BTCB-OBC":"0xcd0CD94BE45d007d9DA0Be801928D6A2f54066dE","OBC-BTCB":"0xcd0CD94BE45d007d9DA0Be801928D6A2f54066dE","BTC-OBC":"0xcd0CD94BE45d007d9DA0Be801928D6A2f54066dE","OBC-BTC":"0xcd0CD94BE45d007d9DA0Be801928D6A2f54066dE","BNB-OBS":"0xb414c6eac7dde63e76630c43a0cfe0d7376f1d88","OBS-BNB":"0xb414c6eac7dde63e76630c43a0cfe0d7376f1d88","BUSD-OBS":"0x02dd3092545253f5b80a7c8c1078248fc0d0d906","OBS-BUSD":"0x02dd3092545253f5b80a7c8c1078248fc0d0d906","BUSD-BNB":"0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16","BNB-BUSD":"0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16","YFO-OBS":"0x4cd2be67c3e62c2a23e8468a2289f0f25b38aba0","OBS-YFO":"0x4cd2be67c3e62c2a23e8468a2289f0f25b38aba0","BTCB-BNB":"0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082","BNB-BTCB":"0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082","BTC-BNB":"0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082","BNB-BTC":"0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082","BTCB-USDT":"0x03fc20BdaFDAC6b2aE8f7F5f885f0819C2b968f0","USDT-BTCB":"0x03fc20BdaFDAC6b2aE8f7F5f885f0819C2b968f0","BTC-USDT":"0x03fc20BdaFDAC6b2aE8f7F5f885f0819C2b968f0","USDT-BTC":"0x03fc20BdaFDAC6b2aE8f7F5f885f0819C2b968f0","ETH-USDT":"0xe7cc44de50b54906a9c1c48240650be2766481fc","USDT-ETH":"0xe7cc44de50b54906a9c1c48240650be2766481fc","ETH-BUSD":"0x7213a321F1855CF1779f42c0CD85d3D95291D34C","BUSD-ETH":"0x7213a321F1855CF1779f42c0CD85d3D95291D34C","ETH-BNB":"0x74E4716E431f45807DCF19f284c7aA99F18a4fbc","BNB-ETH":"0x74E4716E431f45807DCF19f284c7aA99F18a4fbc","BUSD-USDT":"0x7EFaEf62fDdCCa950418312c6C91Aef321375A00","USDT-BUSD":"0x7EFaEf62fDdCCa950418312c6C91Aef321375A00","BUSD-USDC":"0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1","USDC-BUSD":"0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1","BUSD-CAKE":"0x804678fa97d91B974ec2af3c843270886528a9E6","CAKE-BUSD":"0x804678fa97d91B974ec2af3c843270886528a9E6","USDT-CAKE":"0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b","CAKE-USDT":"0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b","CAKE-BNB":"0x0eD7e52944161450477ee417DE9Cd3a859b14fD0","BNB-CAKE":"0x0eD7e52944161450477ee417DE9Cd3a859b14fD0","BNB-USDT":"0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE","USDT-BNB":"0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE","BUSD-MDX":"0x223740a259E461aBeE12D84A9FFF5Da69Ff071dD","MDX-BUSD":"0x223740a259E461aBeE12D84A9FFF5Da69Ff071dD","MDX-BNB":"0xAf9Aa53146C5752BF6068A84B970E9fBB22a87bc","BNB-MDX":"0xAf9Aa53146C5752BF6068A84B970E9fBB22a87bc","MDX-USDT":"0xe1cBe92b5375ee6AfE1B22b555D257B4357F6C68","USDT-MDX":"0xe1cBe92b5375ee6AfE1B22b555D257B4357F6C68"}')
    }, "85c7": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAlCAYAAAAwYKuzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHNSURBVHgB7Zg7csIwEIYlhQYqjkBuEGDo4QgpUwUKXl3aVHADnIpXgXOCTE4Qp4cJNwgp09FRgfPvRM54FPMYSxoK9M14bK1X9m9pJUvLO51OfbfbDTjneZYSIUR9OBw+MwuIMAx7OuIIfKDf7XbvmQUEjgIzgC2RghnEhkjebrfDuGE8HvMT6zKKX4TIjNlhhdjua7XgaDTyEb8NZofCdrv1tLvYpkgavEZi0KbIDDMEicTJZ5qoY8LoKLaBE6iLsRg0hToPuy7W5XJjUJ3P0uK6WBc3D0acus50/2LTOIG6OIG6XK5A7JfX8TL20IVjdZJ8rAnELm8ZL0PwyyGRdI98FHNgTSDSIGq26wa2j1ar1Vd9YXuge+QTt0Owr5X6OAae/YZTNeHWCi1ckyJme3yW0FLMJDw09ToOL73G/ngVlbPZ7O1msxngsq64Und+UpzuSf0FVJcujC4WZGvUorLneTRQGs1m8x2JoB5TUn2qOCm4j5Z7imxCHW2aVJNibDqd+rJL/QN1A3xEMS6OuKpUKt/sNzi1sqwREFItl8t8sVgEcft8Pl/D9loqlb7g8/c+2UB3k8nkkXz+PY+dATml9HDkc7lcQ4ZCIj/1BsRdiLYCiAAAAABJRU5ErkJggg=="
    }, "865a": function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "earnPair", (function () {
            return r
        }));
        var a = n("652a"), i = n("84a8"), s = n("bb89"), r = [{
            tokenName: "$P",
            token: "YFO",
            tokenAddress: a.YFO.address,
            decimals: a.YFO.decimals,
            lpAddress: a.YFO.address,
            singlePoolAddress: s["YFO-Bank-2"][0],
            totalSupply: s["YFO-Bank-2"][1],
            dailyOut: s["YFO-Bank-2"][2],
            tvl: "--",
            apy: "--",
            staked: "--",
            earned: "--",
            balance: "--",
            remainReward: "--",
            start: new Date("2021/10/05 20:00:00").getTime(),
            end: new Date("2022/11/05 20:00:00").getTime(),
            output: new Date("2021/10/05 20:00:00").getTime()
        }, {
            tokenName: "$P",
            token: "YFO",
            tokenAddress: a.YFO.address,
            decimals: a.YFO.decimals,
            lpAddress: a.YFO.address,
            singlePoolAddress: s["YFO-Bank"][0],
            totalSupply: s["YFO-Bank"][1],
            dailyOut: s["YFO-Bank"][2],
            tvl: "--",
            apy: "--",
            staked: "--",
            earned: "--",
            balance: "--",
            remainReward: "--",
            start: new Date("2021/05/19 08:00:00").getTime(),
            end: new Date("2022/05/25 08:00:00").getTime(),
            output: new Date("2021/05/19 08:00:00").getTime()
        }, {
            tokenName: "Tether",
            token: "USDT",
            tokenAddress: a.USDT.address,
            decimals: a.USDT.decimals,
            lpAddress: a.USDT.address,
            singlePoolAddress: s["USDT-Bank"][0],
            totalSupply: s["USDT-Bank"][1],
            dailyOut: s["USDT-Bank"][2],
            tvl: "--",
            apy: "--",
            staked: "--",
            earned: "--",
            balance: "--",
            remainReward: "--",
            start: new Date("2021/05/19 08:00:00").getTime(),
            end: new Date("2022/05/25 08:00:00").getTime(),
            output: new Date("2021/05/19 08:00:00").getTime()
        }, {
            tokenName: "BN-USD",
            token: "BUSD",
            tokenAddress: a.BUSD.address,
            decimals: a.BUSD.decimals,
            lpAddress: i["BUSD-USDT"],
            singlePoolAddress: s["BUSD-Bank"][0],
            totalSupply: s["BUSD-Bank"][1],
            dailyOut: s["BUSD-Bank"][2],
            tvl: "--",
            apy: "--",
            staked: "--",
            earned: "--",
            balance: "--",
            remainReward: "--",
            start: new Date("2021/05/19 08:00:00").getTime(),
            end: new Date("2022/05/25 08:00:00").getTime(),
            output: new Date("2021/05/19 08:00:00").getTime()
        }, {
            tokenName: "Binance",
            token: "BNB",
            tokenAddress: a.BNB.address,
            decimals: a.BNB.decimals,
            lpAddress: i["BNB-USDT"],
            singlePoolAddress: s["BNB-Bank"][0],
            totalSupply: s["BNB-Bank"][1],
            dailyOut: s["BNB-Bank"][2],
            tvl: "--",
            apy: "--",
            staked: "--",
            earned: "--",
            balance: "--",
            remainReward: "--",
            start: new Date("2021/05/19 08:00:00").getTime(),
            end: new Date("2022/05/25 08:00:00").getTime(),
            output: new Date("2021/05/19 08:00:00").getTime()
        }, {
            tokenName: "Ethereum",
            token: "ETH",
            tokenAddress: a.ETH.address,
            decimals: a.ETH.decimals,
            lpAddress: i["ETH-USDT"],
            singlePoolAddress: s["ETH-Bank"][0],
            totalSupply: s["ETH-Bank"][1],
            dailyOut: s["ETH-Bank"][2],
            tvl: "--",
            apy: "--",
            staked: "--",
            earned: "--",
            balance: "--",
            remainReward: "--",
            start: new Date("2021/05/19 08:00:00").getTime(),
            end: new Date("2022/05/25 08:00:00").getTime(),
            output: new Date("2021/05/19 08:00:00").getTime()
        }]
    }, "89b7": function (e, t, n) {
        e.exports = n.p + "img/lang.bbe73f53.svg"
    }, "89d1": function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "commonContracts", (function () {
            return a
        }));
        var a = {
            unitroller: {
                id: "unitroller",
                name: "unitroller",
                address: "0x402Bb3997A07A0B139aFcc275719D378A4def4D0",
                abi: []
            },
            comptroller: {
                id: "comptroller",
                name: "comptroller",
                address: "0x99e39Ce7782171483c03E0D95Db95a9d28616f2e",
                abi: [{inputs: [], payable: !1, stateMutability: "nonpayable", type: "constructor"}, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "string", name: "action", type: "string"}, {
                        indexed: !1,
                        internalType: "bool",
                        name: "pauseState",
                        type: "bool"
                    }],
                    name: "ActionPaused",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "string", name: "action", type: "string"}, {
                        indexed: !1,
                        internalType: "bool",
                        name: "pauseState",
                        type: "bool"
                    }],
                    name: "ActionPaused",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "uint256", name: "newSpeed", type: "uint256"}],
                    name: "CompSpeedUpdated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !0, internalType: "address", name: "borrower", type: "address"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "compDelta",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "compBorrowIndex", type: "uint256"}],
                    name: "DistributedBorrowerComp",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !0, internalType: "address", name: "supplier", type: "address"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "compDelta",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "compSupplyIndex", type: "uint256"}],
                    name: "DistributedSupplierComp",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "uint256", name: "error", type: "uint256"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "info",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "detail", type: "uint256"}],
                    name: "Failure",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "bool", name: "isComped", type: "bool"}],
                    name: "MarketComped",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "address", name: "account", type: "address"}],
                    name: "MarketEntered",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "address", name: "account", type: "address"}],
                    name: "MarketExited",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "contract CToken", name: "cToken", type: "address"}],
                    name: "MarketListed",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldCloseFactorMantissa",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newCloseFactorMantissa", type: "uint256"}],
                    name: "NewCloseFactor",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldCollateralFactorMantissa",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newCollateralFactorMantissa", type: "uint256"}],
                    name: "NewCollateralFactor",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "uint256", name: "oldCompRate", type: "uint256"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "newCompRate",
                        type: "uint256"
                    }],
                    name: "NewCompRate",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldLiquidationIncentiveMantissa",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "newLiquidationIncentiveMantissa",
                        type: "uint256"
                    }],
                    name: "NewLiquidationIncentive",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldMaxAssets",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newMaxAssets", type: "uint256"}],
                    name: "NewMaxAssets",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "address",
                        name: "oldPauseGuardian",
                        type: "address"
                    }, {indexed: !1, internalType: "address", name: "newPauseGuardian", type: "address"}],
                    name: "NewPauseGuardian",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract PriceOracle",
                        name: "oldPriceOracle",
                        type: "address"
                    }, {indexed: !1, internalType: "contract PriceOracle", name: "newPriceOracle", type: "address"}],
                    name: "NewPriceOracle",
                    type: "event"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address[]", name: "cTokens", type: "address[]"}],
                    name: "_addCompMarkets",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract Unitroller", name: "unitroller", type: "address"}],
                    name: "_become",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "_borrowGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}],
                    name: "_dropCompMarket",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "_mintGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract CToken", name: "cToken", type: "address"}, {
                        internalType: "bool",
                        name: "state",
                        type: "bool"
                    }],
                    name: "_setBorrowPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "uint256", name: "newCloseFactorMantissa", type: "uint256"}],
                    name: "_setCloseFactor",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {internalType: "uint256", name: "newCollateralFactorMantissa", type: "uint256"}],
                    name: "_setCollateralFactor",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "uint256", name: "compRate_", type: "uint256"}],
                    name: "_setCompRate",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "uint256", name: "newLiquidationIncentiveMantissa", type: "uint256"}],
                    name: "_setLiquidationIncentive",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "uint256", name: "newMaxAssets", type: "uint256"}],
                    name: "_setMaxAssets",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract CToken", name: "cToken", type: "address"}, {
                        internalType: "bool",
                        name: "state",
                        type: "bool"
                    }],
                    name: "_setMintPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "newPauseGuardian", type: "address"}],
                    name: "_setPauseGuardian",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract PriceOracle", name: "newOracle", type: "address"}],
                    name: "_setPriceOracle",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "bool", name: "state", type: "bool"}],
                    name: "_setSeizePaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "bool", name: "state", type: "bool"}],
                    name: "_setTransferPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract CToken", name: "cToken", type: "address"}],
                    name: "_supportMarket",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "accountAssets",
                    outputs: [{internalType: "contract CToken", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "admin",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    name: "allMarkets",
                    outputs: [{internalType: "contract CToken", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "borrower",
                        type: "address"
                    }, {internalType: "uint256", name: "borrowAmount", type: "uint256"}],
                    name: "borrowAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "borrowGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "borrower",
                        type: "address"
                    }, {internalType: "uint256", name: "borrowAmount", type: "uint256"}],
                    name: "borrowVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }, {internalType: "contract CToken", name: "cToken", type: "address"}],
                    name: "checkMembership",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "holder",
                        type: "address"
                    }, {internalType: "contract CToken[]", name: "cTokens", type: "address[]"}],
                    name: "claimComp",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address[]",
                        name: "holders",
                        type: "address[]"
                    }, {internalType: "contract CToken[]", name: "cTokens", type: "address[]"}, {
                        internalType: "bool",
                        name: "borrowers",
                        type: "bool"
                    }, {internalType: "bool", name: "suppliers", type: "bool"}],
                    name: "claimComp",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "holder", type: "address"}],
                    name: "claimComp",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "closeFactorMantissa",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "compAccrued",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "compBorrowState",
                    outputs: [{internalType: "uint224", name: "index", type: "uint224"}, {
                        internalType: "uint32",
                        name: "block",
                        type: "uint32"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "compBorrowerIndex",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "compClaimThreshold",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "compInitialIndex",
                    outputs: [{internalType: "uint224", name: "", type: "uint224"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "compRate",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "compSpeeds",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "compSupplierIndex",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "compSupplyState",
                    outputs: [{internalType: "uint224", name: "index", type: "uint224"}, {
                        internalType: "uint32",
                        name: "block",
                        type: "uint32"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "comptrollerImplementation",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address[]", name: "cTokens", type: "address[]"}],
                    name: "enterMarkets",
                    outputs: [{internalType: "uint256[]", name: "", type: "uint256[]"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cTokenAddress", type: "address"}],
                    name: "exitMarket",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "account", type: "address"}],
                    name: "getAccountLiquidity",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "getAllMarkets",
                    outputs: [{internalType: "contract CToken[]", name: "", type: "address[]"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "account", type: "address"}],
                    name: "getAssetsIn",
                    outputs: [{internalType: "contract CToken[]", name: "", type: "address[]"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "getBlockNumber",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "getCompAddress",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "account", type: "address"}, {
                        internalType: "address",
                        name: "cTokenModify",
                        type: "address"
                    }, {internalType: "uint256", name: "redeemTokens", type: "uint256"}, {
                        internalType: "uint256",
                        name: "borrowAmount",
                        type: "uint256"
                    }],
                    name: "getHypotheticalAccountLiquidity",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "isComptroller",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenBorrowed",
                        type: "address"
                    }, {internalType: "address", name: "cTokenCollateral", type: "address"}, {
                        internalType: "address",
                        name: "liquidator",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "repayAmount",
                        type: "uint256"
                    }],
                    name: "liquidateBorrowAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenBorrowed",
                        type: "address"
                    }, {internalType: "address", name: "cTokenCollateral", type: "address"}, {
                        internalType: "address",
                        name: "liquidator",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "actualRepayAmount",
                        type: "uint256"
                    }, {internalType: "uint256", name: "seizeTokens", type: "uint256"}],
                    name: "liquidateBorrowVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenBorrowed",
                        type: "address"
                    }, {internalType: "address", name: "cTokenCollateral", type: "address"}, {
                        internalType: "uint256",
                        name: "actualRepayAmount",
                        type: "uint256"
                    }],
                    name: "liquidateCalculateSeizeTokens",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "liquidationIncentiveMantissa",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "markets",
                    outputs: [{internalType: "bool", name: "isListed", type: "bool"}, {
                        internalType: "uint256",
                        name: "collateralFactorMantissa",
                        type: "uint256"
                    }, {internalType: "bool", name: "isComped", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "maxAssets",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "minter",
                        type: "address"
                    }, {internalType: "uint256", name: "mintAmount", type: "uint256"}],
                    name: "mintAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "mintGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "minter",
                        type: "address"
                    }, {internalType: "uint256", name: "actualMintAmount", type: "uint256"}, {
                        internalType: "uint256",
                        name: "mintTokens",
                        type: "uint256"
                    }],
                    name: "mintVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "oracle",
                    outputs: [{internalType: "contract PriceOracle", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "pauseGuardian",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "pendingAdmin",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "pendingComptrollerImplementation",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "redeemer",
                        type: "address"
                    }, {internalType: "uint256", name: "redeemTokens", type: "uint256"}],
                    name: "redeemAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "redeemer",
                        type: "address"
                    }, {internalType: "uint256", name: "redeemAmount", type: "uint256"}, {
                        internalType: "uint256",
                        name: "redeemTokens",
                        type: "uint256"
                    }],
                    name: "redeemVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [],
                    name: "refreshCompSpeeds",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "payer",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "repayAmount",
                        type: "uint256"
                    }],
                    name: "repayBorrowAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "payer",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "actualRepayAmount",
                        type: "uint256"
                    }, {internalType: "uint256", name: "borrowerIndex", type: "uint256"}],
                    name: "repayBorrowVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenCollateral",
                        type: "address"
                    }, {internalType: "address", name: "cTokenBorrowed", type: "address"}, {
                        internalType: "address",
                        name: "liquidator",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "seizeTokens",
                        type: "uint256"
                    }],
                    name: "seizeAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "seizeGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenCollateral",
                        type: "address"
                    }, {internalType: "address", name: "cTokenBorrowed", type: "address"}, {
                        internalType: "address",
                        name: "liquidator",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "seizeTokens",
                        type: "uint256"
                    }],
                    name: "seizeVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "src",
                        type: "address"
                    }, {internalType: "address", name: "dst", type: "address"}, {
                        internalType: "uint256",
                        name: "transferTokens",
                        type: "uint256"
                    }],
                    name: "transferAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "transferGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "src",
                        type: "address"
                    }, {internalType: "address", name: "dst", type: "address"}, {
                        internalType: "uint256",
                        name: "transferTokens",
                        type: "uint256"
                    }],
                    name: "transferVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }]
            },
            COMP: {id: "COMP", name: "COMP", address: "0xda8dECaE3b368225314EA6cBDB4C4EC381Eb6C1e", abiJson: []},
            priceOracle: {
                id: "priceOracle",
                name: "priceOracle",
                address: "0x605DdadA5862f6594Eff274CF0f8E4E0B7E4276e",
                abi: [{
                    inputs: [{
                        internalType: "contract OpenOraclePriceData",
                        name: "priceData_",
                        type: "address"
                    }, {internalType: "address", name: "reporter_", type: "address"}, {
                        internalType: "uint256",
                        name: "anchorToleranceMantissa_",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "anchorPeriod_",
                        type: "uint256"
                    }, {
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig[]",
                        name: "configs",
                        type: "tuple[]"
                    }], stateMutability: "nonpayable", type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "string", name: "symbol", type: "string"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "anchorPrice",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "oldTimestamp", type: "uint256"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "newTimestamp",
                        type: "uint256"
                    }],
                    name: "AnchorPriceUpdated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "string", name: "symbol", type: "string"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "reporter",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "anchor", type: "uint256"}],
                    name: "PriceGuarded",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "string", name: "symbol", type: "string"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "price",
                        type: "uint256"
                    }],
                    name: "PriceUpdated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "address", name: "reporter", type: "address"}],
                    name: "ReporterInvalidated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !0, internalType: "bytes32", name: "symbolHash", type: "bytes32"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldTimestamp",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newTimestamp", type: "uint256"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldPrice",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newPrice", type: "uint256"}],
                    name: "UniswapWindowUpdated",
                    type: "event"
                }, {
                    inputs: [],
                    name: "anchorPeriod",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "ethBaseUnit",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "expScale",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "uint256", name: "i", type: "uint256"}],
                    name: "getTokenConfig",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "address", name: "cToken", type: "address"}],
                    name: "getTokenConfigByCToken",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "string", name: "symbol", type: "string"}],
                    name: "getTokenConfigBySymbol",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes32", name: "symbolHash", type: "bytes32"}],
                    name: "getTokenConfigBySymbolHash",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "address", name: "underlying", type: "address"}],
                    name: "getTokenConfigByUnderlying",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "address", name: "cToken", type: "address"}],
                    name: "getUnderlyingPrice",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes", name: "message", type: "bytes"}, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }], name: "invalidateReporter", outputs: [], stateMutability: "nonpayable", type: "function"
                }, {
                    inputs: [],
                    name: "lowerBoundAnchorRatio",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "maxTokens",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
                    name: "newObservations",
                    outputs: [{internalType: "uint256", name: "timestamp", type: "uint256"}, {
                        internalType: "uint256",
                        name: "acc",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "numTokens",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
                    name: "oldObservations",
                    outputs: [{internalType: "uint256", name: "timestamp", type: "uint256"}, {
                        internalType: "uint256",
                        name: "acc",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes[]", name: "messages", type: "bytes[]"}, {
                        internalType: "bytes[]",
                        name: "signatures",
                        type: "bytes[]"
                    }, {internalType: "string[]", name: "symbols", type: "string[]"}],
                    name: "postPrices",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{internalType: "string", name: "symbol", type: "string"}],
                    name: "price",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "priceData",
                    outputs: [{internalType: "contract OpenOraclePriceData", name: "", type: "address"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
                    name: "prices",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "reporter",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "reporterInvalidated",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes", name: "message", type: "bytes"}, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }],
                    name: "source",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [],
                    name: "upperBoundAnchorRatio",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }]
            }
        }
    }, "8a25": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPkSURBVHgBzVhrTuJQFL5FNEb9URIfMf6w7ABXMGUFAyuwrmCGFYArUFdAZwXgCigrkFkBzC/jI4Efaowv5jvkljm9j7YQJ/Ekpa9zzv3ueRchvgg5YgkaDofuxsaGXywWD9/f3ysJhY4zent76z8/Pw/K5fIkr86FgNzf39em0+kPHH5OkahQKITb29u/shhzAbm5ualhp2e49MRyNAKgVhqgVCDkgq2trTYsULMtQK7Aezq7uHdxTa5yLfwhXHm6v78/yg3k+vraW1lZ6QndCgNSuLq62i2VSn9ssjj5sEITAFX5EcBUVTBOXhBy163d3d1Mfyu6AgMgDYyTBwQoenx8rC+SBapOZNiZ4uIRdB7FOjUgt7e3bZwC9iiEFU7EJxCCPoRljuN7AOvu7e3VNSAAEeDUju8h1N3Z2amnKYcMBWcFSicfHx8TmDtK47+7u+vx9Md1HWC6KpChkC6hmIDiqinCZUH7Cd9TTVEzhPgjW3aMx2P35eXlisXMCBYvOwxEIJg1QIEpMLEjH6eOAYBKlNYN2q36ggIYcThfCxuqOWyBucnIGlBQNoHAu55YgGR2ROpzbPwKp7g9RAX6JXNxv1GaCn0XHnjayuMIvD6ivwTrOagtpCPkDNitKhMT5/OL9IsmVVF20VelYMqmSNaVFqx2ynlQ4EiuD8uRW1oEFHFmzDiscQmd54mHEGzCVFN5jE2CFMiMx7ZLzl/JwTPXWZC789j7gUXpnAfuCEUGwVWDLB7qU/F1QX1J9UB9Bj97/B61RXPdMkRJYQUClBoQ+DmRqlRHxCeQ7NhmIMI8cyTMvL6+nun/nKQB4Qtpi0h/zy0lMyiVZOFLJTm7/AOCGOBzhYu6cqgKwYw81XzUlZawEJpbiwofZZecTTSSz5MWwQ4jzvT6+qpNZGjjF0KxilzIp3uKG7ICVWiAji1Gs0jPFFOQ9/m9scSDBnDHkSq8TInHpuoHBwdav+ENVsQlfoYoafoKJvZjVRhpG1Hb5mmXQhMq/xYQgUgmRZgYA+DbIWvPE/SQsmkqk1NckyxomEkneH7+9PR0kSI7nwDjBltU+Bo4OvLa3dzcpOuqqkzOGbMegsD+hr4xm+BRb35nVVQ5MnrxfdxgtVERcdBRZsv/Nipy3RoQwwQ1my2x24Zp4spD8vuoo4yIiQlQq6xo5TR7VnlAAlSN/GoK4CyiwISLr9JAzNawKaCgohpg+kCiz0ekZd9mIZJdW1v7jsUCXj1tIFKBxAplOQ9M76lBQvFAnilDPHaY+LsPDw8npmzK9RFu+VrLTWQFTIENU01ZCAgHhPQ7XvBviXP8C3CZxfgXuiOCkEu6sycAAAAASUVORK5CYII="
    }, 9: function (e, t) {
    }, "96a4": function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, "*{touch-action:pan-y}*,:after,:before{box-sizing:border-box}body,html,input{padding:0;margin:0}input{outline:none;border:none}input::-moz-placeholder{color:var(--grey)}input:-ms-input-placeholder{color:var(--grey)}input::placeholder{color:var(--grey)}button{outline:none;cursor:pointer;border:none}li,ul{list-style-type:none;margin:0;padding:0}.cursor_pointer{cursor:pointer}.text_underline{text-decoration:underline}.side_bar::-moz-scrollbar-scrollbar,.side_bar::-ms-scrollbar,.side_bar::-o-scrollbar,.side_bar::-webkit-scrollbar{width:0;height:0;margin:0 auto}.side_bar::-moz-scrollbar-thumb,.side_bar::-moz-scrollbar-track,.side_bar::-ms-scrollbar-thumb,.side_bar::-ms-scrollbar-track,.side_bar::-o-scrollbar-thumb,.side_bar::-o-scrollbar-track,.side_bar::-webkit-scrollbar-thumb,.side_bar::-webkit-scrollbar-track{background-color:var(--grey-dark);box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.side_bar::-moz-scrollbar-button,.side_bar::-ms-scrollbar-button,.side_bar::-o-scrollbar-button,.side_bar::-webkit-scrollbar-button{height:0;background-color:var(--grey-dark)}.route_active,.router-link-exact-active .router-link-active{background:linear-gradient(180deg,#6c5dd3,#9f5dd3)}.route_active span,.router-link-exact-active .router-link-active span{color:var(--white)}.circle_apy{height:140px;width:140px;border:solid 4px var(--pink);border-radius:50%}@media only screen and (max-width:750px){.circle_apy{height:120px;width:120px;border:solid 4px var(--pink);border-radius:50%}}.border_radius_5{border-radius:5px}.border_radius_10{border-radius:10px}.border_radius_15{border-radius:15px}.border_radius_20{border-radius:20px}.border_radius_25{border-radius:25px}.border_radius_30{border-radius:30px}.border_light_grey{border:solid 1px var(--light-grey)}.border_grey{border:1px solid #ababab}.border_orange{border:solid 1px var(--orange)}.border_r_light_grey{border-right:solid 1px var(--light-grey)}.border_b_light_grey{border-bottom:solid 1px var(--light-grey)}:root{--black:#000;--white:#fff;--red:red;--orange:#ffbb0d;--pink:#fa2977;--grey:#726e6e;--green:#2abc19;--purple:#6c5dd3;--light-grey:#e5e5e5;--grey-white:#eaeaea;--success:#0eb315}.text-primary,.text_black{color:var(--black)}.text_white{color:var(--white)}.text_red{color:var(--red)}.text_grey{color:var(--grey)}.text_green{color:var(--green)}.text_light_grey{color:var(--light-grey)}.text_orange{color:var(--orange)}.text_pink{color:var(--pink)}.text_purple{color:var(--purple)}.text_success{color:var(--success)}.bg_none{background:none}.bg_white{background-color:var(--white)}.bg_black{background-color:var(--black)}.bg_grey{background-color:var(--grey)}.bg_green{background-color:var(--green)}.bg_light_grey{color:var(--light-grey)}.bg_pink{background-color:var(--pink)}.bg_violet{background:linear-gradient(180deg,#6c5dd3,#9f5dd3)}.bg_orange{background-color:var(--orange)}.bg_purple{background-color:var(--purple)}.bg_success{background-color:var(--success)}.margin_auto{margin:auto}.margin_5{margin:5px}.margin_10{margin:10px}.margin_20{margin:20px}.margin_lr10{margin:0 10px}.margin_tb10{margin:10px 0}.margin_tb20{margin:20px 0}.margin_tb40{margin:40px 0}.margin_t_5{margin-top:5px}.margin_t_10{margin-top:10px}.margin_t_20{margin-top:20px}.margin_t_40{margin-top:40px}.margin_t_60{margin-top:60px}.margin_t_120{margin-top:120px}.margin_r_10{margin-right:10px}.margin_l_5{margin-left:5px}.margin_l_10{margin-left:10px}.margin_l_20{margin-left:20px}.padding_5{padding:5px}.padding_10{padding:10px}.padding_20{padding:20px}.padding_30{padding:30px}.padding_40{padding:40px}.padding_b_40{padding-bottom:40px}.padding_t40{padding-top:40px}.padding_lr5{padding:0 5px}.padding_lr10{padding:0 10px}.padding_lr20{padding:0 20px}.padding_tb10{padding:10px 0}.padding_tb20{padding:20px 0}.padding_tb5_lr10{padding:5px 10px}.padding_tb5_lr20{padding:5px 20px}.padding_tb10_lr20{padding:10px 20px}.padding_tb10_lr15{padding:10px 15px}.padding_tb20_lr40{padding:20px 40px}@media only screen and (max-width:750px){.padding_10{padding:5px}.padding_20{padding:10px}.padding_30{padding:15px}.padding_40{padding:20px}.padding_t40{padding-top:20px}.padding_lr10{padding:0 5px}.padding_lr20{padding:0 10px}.padding_tb10{padding:5px 0}.padding_tb20{padding:10px 0}.padding_tb5_lr10{padding:3.5px 5px}.padding_tb10_lr20{padding:5.5px 12px}.padding_tb20_lr40{padding:10px 15px}.margin_lr10{margin:0 5px}.margin_tb40{margin:20px 0}}.box_shadow{box-shadow:0 0 2px 2px var(--light-grey)}.box_shadow_b{box-shadow:8px 2px 8px 4px var(--light-grey)}.font_12{font-size:12px}.font_14{font-size:14px}.font_16{font-size:16px}.font_18{font-size:18px}.font_20{font-size:20px}.font_22{font-size:22px}.font_24{font-size:24px}.font_26{font-size:26px}.font_28{font-size:28px}.font_30{font-size:30px}.font_32{font-size:32px}.font_34{font-size:34px}.font_36{font-size:36px}.font_38{font-size:38px}.font_40{font-size:40px}.font_42{font-size:42px}.font_44{font-size:44px}.font_46{font-size:46px}.font_48{font-size:48px}.font_50{font-size:50px}.font_58{font-size:58px}.font_60{font-size:60px}.font_70{font-size:70px}@media only screen and (max-width:1440px){.font_20{font-size:16px}.font_22{font-size:17px}.font_24{font-size:18px}.font_26{font-size:20px}.font_28{font-size:22px}.font_30{font-size:24px}.font_32{font-size:26px}.font_34{font-size:28px}.font_36{font-size:30px}.font_38{font-size:32px}.font_40{font-size:34px}.font_42{font-size:36px}.font_44{font-size:38px}.font_46{font-size:40px}.font_48{font-size:42px}.font_50{font-size:44px}.font_58{font-size:52px}.font_60{font-size:54px}.font_70{font-size:60px}}@media only screen and (max-width:1080px){.font_20{font-size:14px}.font_22,.font_24{font-size:15px}.font_26{font-size:16px}.font_28{font-size:18px}.font_30{font-size:20px}.font_32{font-size:22px}.font_34{font-size:24px}.font_36{font-size:26px}.font_38{font-size:28px}.font_40{font-size:30px}.font_42{font-size:32px}.font_44{font-size:34px}.font_46{font-size:36px}.font_48{font-size:38px}.font_50{font-size:40px}.font_58{font-size:44px}.font_60{font-size:48px}.font_70{font-size:50px}}@media only screen and (max-width:750px){.font_18,.font_20,.font_22,.font_24{font-size:14px}.font_26{font-size:15px}.font_28{font-size:16px}.font_30{font-size:18px}.font_32{font-size:20px}.font_34{font-size:22px}.font_36{font-size:24px}.font_38{font-size:26px}.font_40{font-size:18px}.font_42{font-size:30px}.font_44{font-size:32px}.font_46{font-size:34px}.font_48{font-size:36px}.font_50{font-size:40px}.font_58{font-size:42px}.font_60{font-size:46px}.font_70{font-size:48px}}.font_400{font-weight:400}.font_500{font-weight:500}.font_600{font-weight:600}.font_700{font-weight:700}.font_800{font-weight:800}.font_bold{font-weight:700}.break-word{word-wrap:break-word}.white-space-pre-wrap{white-space:pre-wrap}.flex{display:flex}.between_h_center,.between_v_center{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center}.between_v_center{flex-direction:column}.content_center{justify-content:center}.content_start{justify-content:flex-start}.content_end{justify-content:flex-end}.content_between{justify-content:space-between}.content_around{justify-content:space-around}.content_evenly{justify-content:space-evenly}.align_center{align-items:center}.align_start{align-items:flex-start}.align_end{align-items:flex-end}.flex_no_wrap{flex-wrap:nowrap}.text_align_left{text-align:left}.text_align_center{text-align:center}.text_align_pl_mc{text-align:left}.text_align_pr_mc,.text_align_right{text-align:right}.p_rel{position:relative}.t_h_center{position:absolute;top:0;left:0;transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%)}.r_v_center{top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%)}.r_t,.r_v_center{position:absolute;right:0}.r_t{top:0}.r_badge{position:absolute;color:var(--black);top:-10px;right:-15px}.coin_1{margin-right:-15px}.coin_2{margin-top:-15px}.show_m{display:none}@media only screen and (max-width:750px){.show_p{display:none}.show_m{display:block}.content_center_m{justify-content:center}.content_start_m{justify-content:flex-start}.content_end_m{justify-content:flex-end}.text_align_pl_mc,.text_align_pr_mc{text-align:center}}:root{--logo_height:40px;--header_bar:80px;--footer_bar:160px}.height_10{height:10px}.height_18{height:18px}.height_20{height:20px}.height_24{height:24px}.height_30{height:30px}.height_35{height:35px}.height_40{height:40px}.height_50{height:50px}.height_60{height:60px}.height_70{height:70px}.height_80{height:80px}.height_90{height:90px}.height_100{height:100px}.height_120{height:120px}.height_140{height:140px}.height_160{height:160px}.height_180{height:180px}.height_330{height:330px}.height_p_50{height:50%}.height_p_80{height:80%}.height_p_100{height:100%}.min_height_50{min-height:50px}.min_height_80{min-height:80px}.header_height{height:var(--header_bar)}.footer_height{height:var(--footer_bar)}.logo_height{height:var(--logo_height)}@media only screen and (max-width:1080px){:root{--logo_height:36px}.height_180{height:140px}}@media only screen and (max-width:750px){:root{--header_bar:60px;--footer_bar:140px;--logo_height:30px}.height_180{height:120px}.height_330{height:auto}.height_40{height:30px}}:root{--nav_bar:256px}.col-1{width:8.33%}.col-2{width:16.66%}.col-3{width:25%}.col-3_4{width:30%}.col-4{width:33.33%}.col-4_5{width:35%}.col-5{width:41.66%}.col-51{width:45%}.col-6{width:50%}.col-7,.col-7_1{width:56.66%}.col-8{width:66.66%}.col-9{width:75%}.col-10{width:83.33%}.col-11{width:91.66%}.col-12{width:100%}@media only screen and (max-width:750px){[class*=col-]{width:100%}}.width_100{width:100px}.width_120{width:120px}.width_140{width:140px}.width_400{width:400px}.width_p_10{width:10%}.width_p_12{width:12%}.width_p_20{width:20%}.width_p_25{width:25%}.width_p_35{width:35%}.width_p_40{width:40%}.width_p_45{width:45%}.width_p_50{width:50%}.width_p_60{width:60%}.width_p_70{width:70%}.width_p_80{width:80%}.width_p_85{width:85%}.width_p_90{width:90%}.width_p_95{width:95%}.min_width_100{min-width:100px}.min_width_120{min-width:120px}.min_width_320{min-width:320px}.min_width_50{min-width:50px}.max_width_1140{max-width:1140px}.max_width_1200{max-width:1200px}.max_width_1400{max-width:1400px}.nav_bar_width{width:var(--nav_bar)}@media only screen and (max-width:1440px){:root{--nav_bar:200px}}@media only screen and (max-width:1080px){:root{--nav_bar:190px}}@media only screen and (max-width:750px){:root{--nav_bar:106px}.min_width_320{min-width:50%}}#app,body,html{height:100%}#app{font-family:HCo Gotham SSm,-apple-system,BlinkMacSystemFont,Segoe UI,Avenir,Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:var(--grey-white)}#app button:focus,#app input:focus,#app select:focus{box-shadow:none}#app .app_container{height:calc(100% - var(--header_bar) - var(--footer_bar))}#app .app_cover{height:100%;width:100%}#app .nav_bar_cover{z-index:1000;padding-top:var(--header_bar)}#app .fixed_header{z-index:1001;width:100%;position:fixed;top:0}#app .page_container{overflow-y:auto;width:100%;height:100%;background:linear-gradient(227.78deg,#ebebeb 4.7%,#f5eefb 56%)}#app .view_cover{width:calc(100% - var(--nav_bar));height:calc(100% - var(--header_bar));margin-top:var(--header_bar);overflow-y:auto}#app .view_cover::-webkit-scrollbar{width:8px;height:12px;background-color:#fff}#app .view_cover::-webkit-scrollbar-thumb{display:block;min-height:12px;min-width:8px;border-radius:6px;background-color:#d9d9d9}#app .view_cover::-webkit-scrollbar-thumb:hover{display:block;min-height:12px;min-width:8px;border-radius:6px;background-color:#9f9f9f}#app .display_m{display:none}@media only screen and (max-width:750px){#app .view_cover{width:100%}#app .display_m{display:block}}", ""]), e.exports = t
    }, "97df": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABpSURBVHgB7dYxCoAwEETRjXj/K2tKsYk/rLiS/7p0AzMsaTHp6K7v1kWiLYoyGLVHsqztWSVlMMpg1Dp3bOTpnbNKyo2N3LdnlVTdjb39d59lldT/7tjX27NKymCUwSiDUQajDEaVDXYCo2gYUvFZ8QQAAAAASUVORK5CYII="
    }, 9902: function (e, t, n) {
        var a = n("10d9");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("08478f7f", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, "9b17": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB9SURBVHgB7ZdRCoAwDEM38a47U0+rv1KEUFIhzLy/7aMUEkI611rXIIiI+Xyz844hhhdCnPkjeyJT9Uh1niVD6Huom6rnLBlifw+h3EFYMoS+h9g+4z70NXILUZnxRvaQ+1A3ejnUfZexWDLE/+6yKpYMsX8fYudZMoTcQjdjiymNqt36twAAAABJRU5ErkJggg=="
    }, "9b61": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABQCAYAAABh05mTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATtSURBVHgB7ZzdTRtBEMfH5kOID8lIgEHi4aggpINLBUkqiFMBTgUhFQAV5KgAUkFMB+7AvIHBEn4AHvjMjHUrXQKYndm520XZn4TXNpx9/nt2/7Oze9Qg5+zsbLNWq+3g3c3Hx8cGRMbRrdfru0tLS/v0oEY3uYC/o3g87u/vf6ytrW0bEXvYJBBhg0J+qJ+fn6cQBRQzMTHxsY5dOIGIC406RJyJIioQRVQgiqhAFFGBKKICUUQFoogKRBEViCIqMAkCcKp4iKWgLgjB49vYlFkxyrAqdQwC8NxSbFLOMSIR8QQ3Ly8vv25sbAxBAFaNEmxaUAIownGz2fwKAk5OTpLJyck2vgbrOGl3Tubm5r6DEPwS9qEk8LU7IIAExIqMqKbqMia28Y1TELC8vNyRftjXoEIpMOn1eg0SEIQlQSdjwTc+oG8QZLA/rAUdrDQfA5P5+fkDcKipurozfYM/QUBJ0ZgBExyfd3MzEaOR4qSnp6dtEHB3d6c2NpKhrKyssF5vMBh8wmYLHFHJEzHd2aFxBZhg18uwETn8v0iiGoV/BwqoJdsLCwsfQQB++F1QQGIoWqiJKF2rwbxsD9yjUWQoWnif9i0uLg4VojGjm4uLCy/r5kHMnV0MpmgoV1dXCXigFBH7/f4nzt9TV5SmO8Xjpqenv4AHyopEyYcRGYMxFNoKg80meKAUEalAwZ0SCpPvoqE453tSShsTcSYjKVBwozGjm9xQWEOIJmUaSyqJRjIKm78tGsrt7S0J6G1HW6nuTJt9gIltulPs+njfW1cmyk5xWtzp4NTUFEXXq8n3zc0NJekjQ8Go9GIohrJFbMzOzrKixDL57q6vr5vlCa9RSJSebKMgbW40WkwFRyL7NhRDFTOWBi4lsPJGikZsDl/49RBnJr/ojm9DMVQ17WsBkzHrMIdmgcy3oRiqElEt+cbnMmpDMBRDZQUIjeSbckMU9yh/GEQUElVWcVLXaMT729SGYiiGSkthGI3swkSxTIbFhlEUhmIohqrriezke2ZmhlyajCQzxYZQDMVQeVFWmnyHaCiGykWUJt8hGorBx/KAaCpIbb7bogWB4WWNBaOxBQLQmFIIEF8LVYlwM5R4J1qZeFvt4ybfIV/I6XPJlJV8oyN7Wcmzweu6s200hmooBs1tJJKtIKlNuhOqoRjURMRy/VHhYcfyMNvkO0hDMaiISNWVQrmetSf7teT7LfxnAGcRScCHh4cPxefy6ovtJqWxyXfIhmJwFpHKU89ta8OpGtUCu5av0X7u+dANxeAq4u5LW3xpqoalq89gt/ewMRgMnqxRcw2Fa25CM3yCWETqxrhgNHbbB0UoCvkNLMAh4blotDaUfFixei9DvsZt1VvGIRaRxkGbK6poX7bl+PhX8s0xFDMuc3fLUm9BIWk8dxJSJCJFDeeEbcfHYvJtayhSAQ0aQkpEzFZXV/c4BzDGR4rGxNZQXAUsnp+LkCwR6aSlu/Rtx0eMxi0bQ6Fzub6+fq+14d1FyBqW21vYiq6KKolh/pPA2yATXapbMg0IaCXPhnjlvQJRRAWiiApEERWIIioQRVQgiqhAFFGBKKICUUQFoogKRBEVIBGdy+P/OcPRv83v9/s9LOEnEGGDNdKNUXdGAW1X5SIFsDA8Wi4eiYjLnl1U9D2KaTaZR8bTwZ9Ws9kcVfn/ANGcD+CGyPpZAAAAAElFTkSuQmCC"
    }, "9c46": function (e) {
        e.exports = JSON.parse('{"pancakePairAbi":[{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}],"erc20Abi":[{"name":"Approval","type":"event","anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}]},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"}],"vaultAbi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"burnAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"want","type":"address"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"address","name":"strat","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"stakedWantTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}],"stratAbi":[{"inputs":[{"internalType":"address","name":"_autoFarmAddress","type":"address"},{"internalType":"address","name":"_AUTOAddress","type":"address"},{"internalType":"bool","name":"_isCAKEStaking","type":"bool"},{"internalType":"bool","name":"_isAutoComp","type":"bool"},{"internalType":"address","name":"_farmContractAddress","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_wantAddress","type":"address"},{"internalType":"address","name":"_token0Address","type":"address"},{"internalType":"address","name":"_token1Address","type":"address"},{"internalType":"address","name":"_earnedAddress","type":"address"},{"internalType":"address","name":"_uniRouterAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"AUTOAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoFarmAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackRateMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackRateUL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controllerFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controllerFeeMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controllerFeeUL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"convertDustToEarned","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earnedAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"earnedToAUTOPath","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"earnedToToken0Path","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"earnedToToken1Path","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"entranceFeeFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"entranceFeeFactorLL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"entranceFeeFactorMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"farm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"farmContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"govAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"inCaseTokensGetStuck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isAutoComp","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isCAKEStaking","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastEarnBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyGov","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_controllerFee","type":"uint256"}],"name":"setControllerFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_entranceFeeFactor","type":"uint256"}],"name":"setEntranceFeeFactor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_govAddress","type":"address"}],"name":"setGov","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_onlyGov","type":"bool"}],"name":"setOnlyGov","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_buyBackRate","type":"uint256"}],"name":"setbuyBackRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token0Address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"token0ToEarnedPath","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1Address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"token1ToEarnedPath","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniRouterAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wantAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wantLockedTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wbnbAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}],"poolAbi":[{"inputs":[{"internalType":"address","name":"OBS_","type":"address"},{"internalType":"address","name":"lptoken_","type":"address"},{"internalType":"uint256","name":"starttime_","type":"uint256"},{"internalType":"address","name":"dev_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"OBS","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initreward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpt","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"starttime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bnbAbi":[{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stake","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')
    }, a195: function (e, t, n) {
        var a = n("52bf");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("a78af46a", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, a1c1: function (e, t, n) {
        "use strict";
        n("0265")
    }, a2ee: function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"underlying_","type":"address"},{"internalType":"contract ComptrollerInterface","name":"comptroller_","type":"address"},{"internalType":"contract InterestRateModel","name":"interestRateModel_","type":"address"},{"internalType":"uint256","name":"initialExchangeRateMantissa_","type":"uint256"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address payable","name":"admin_","type":"address"},{"internalType":"address","name":"implementation_","type":"address"},{"internalType":"bytes","name":"becomeImplementationData","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"cashPrior","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"interestAccumulated","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"borrowAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"error","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"info","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"detail","type":"uint256"}],"name":"Failure","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"liquidator","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"cTokenCollateral","type":"address"},{"indexed":false,"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"LiquidateBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract ComptrollerInterface","name":"oldComptroller","type":"address"},{"indexed":false,"internalType":"contract ComptrollerInterface","name":"newComptroller","type":"address"}],"name":"NewComptroller","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldImplementation","type":"address"},{"indexed":false,"internalType":"address","name":"newImplementation","type":"address"}],"name":"NewImplementation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract InterestRateModel","name":"oldInterestRateModel","type":"address"},{"indexed":false,"internalType":"contract InterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"NewMarketInterestRateModel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldReserveFactorMantissa","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"NewReserveFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"redeemer","type":"address"},{"indexed":false,"internalType":"uint256","name":"redeemAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"RepayBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"benefactor","type":"address"},{"indexed":false,"internalType":"uint256","name":"addAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"uint256","name":"reduceAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesReduced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"addAmount","type":"uint256"}],"name":"_addReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reduceAmount","type":"uint256"}],"name":"_reduceReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract ComptrollerInterface","name":"newComptroller","type":"address"}],"name":"_setComptroller","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"implementation_","type":"address"},{"internalType":"bool","name":"allowResign","type":"bool"},{"internalType":"bytes","name":"becomeImplementationData","type":"bytes"}],"name":"_setImplementation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract InterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"_setInterestRateModel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"_setReserveFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"accrualBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"comptroller","outputs":[{"internalType":"contract ComptrollerInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"delegateToImplementation","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"delegateToViewImplementation","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRateStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountSnapshot","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCash","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"interestRateModel","outputs":[{"internalType":"contract InterestRateModel","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"repayAmount","type":"uint256"},{"internalType":"contract CTokenInterface","name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"repayAmount","type":"uint256"}],"name":"repayBorrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"repayAmount","type":"uint256"}],"name":"repayBorrowBehalf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"reserveFactorMantissa","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"seize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"supplyRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"totalBorrowsCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"underlying","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]')
    }, a2f9: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAa4SURBVHgB7Z17TiJLFMYPiMb4SDBR0b9uu4LBFUzPCkZXcJkV6KxAZgUyKxBXMLgC2xXArMC+iYkvjCQqIYp6v9NWG2hp6EdV0YC/pKdRGJj+OKdO1VdVPSkaIqenp9m5uTkzk8n88/z8nMevDHFQx9khlUo1Xl9fbTxs4LDxs91ut09arVZtY2OjQUMiRRpxBcPFf8WPW+QRKQY2DgsCHzWbTUunoFoEvL6+NnHawWHiIrOknjKLmcvlKqQYZQKKaNtNp9M7mkTrhY3PLz49PZ2sr6/bpADpAiZEOC822thDiFgkyUgV8OrqqoDTHslr22TjROTy8vIhSUKKgOfn5wYq6QEizqQRAP/OysvLy08ZaZ2mmFxcXOxCvOqoiMegF7A1NTVVrdfr/1JMIkcgt3Xz8/NFequuo0xpdXX1J0UkkoCcsvgG/+BhnsaDGorMdpSUDi2gEO+YklsoosKV+ltYEUMJOMbiuYQWMbCAEyCeSygRAwk4QeK5BBYxUDdGFAyDJgenSHJPY9ALBwqI0UWJxqfahiGPbtreoBf1TWExNDugCYZHLGtrayW/530FFMOzaoIMgWHRQHu46dce+qYwxNv/FM8hi/bQNwt7CsipC/G26BMX02/c3DOFIeApTVbVDYL98PCw6Z0u+BCBl5eXRfoUrxcGjOIPxklXBE5ghzksDUThRmcUdkUgxDNpvMTjqdDi9PS0AcsKNmCqSPHIeqOwKwLHpO1j0SxY96WVlZWTzidub2+zmGC6pXg08GUsuT+8C4gqs4VO4x8aXSwcFaTYYb95YQTJK8VEjJMtfpxxfwnxvtPowUKVkZoVb7T1guenEZ0UF55xpLcv7E1AEdoFGh04Rct3d3dHYVYhQLwvJAF8YSYbDfzZjoAISZOSD7dtpZmZmfLS0tJ/FAG+cBkRCLKLi4u8POXIETDh6Wtx9QySogEwSBLQzMTpyCkiCay+NZ67bTabv2UtFJJUgTuxUY03MuKNDRo+oQpCWNrttmxP0+B2MKPgjcNiUYDuhwS+kmS4HcyoeOMAOAUB50oul/tLepAeKGgHjQwuxCB9yCwIoVC09CSfwQUZkkq7HzbevyyzIISFTRKcVJjDRkbRGystCGGBmZBHupECpKewRXoKQihwjcraeVkRyNFWTkK0+aCqp2FkKCZIjV1M+/2mBIMIVNZVi73AklfDU4LBKIvFUza7GFtAngK4ubnZEZUuiSgdKLCANsXDgJtTgpCn+LarOPYhpknJQeVAoZFSaCTYOCyxvcCiIQETtaqwDayl8AHHqheIi31uFd1iKnBgvFhpsYFPKWKJSKHfEgkVaDBKbG4Da6QP4+zsTJv7I8vC94N3jGJqIR3JHo8KhlXa3G+28EktVhppZZFGNFzUOyo70Mz9/f3fNCZonA3MpA8zyNLZuHABIYXTFFw7eLzvdKTZNSGNzM/Px95iNQjVM43QzOKzK6BuE0D52kPVBQS1wwk6R0DRDuq0n/KD0hijmQJ38mMMEU1SCCb1naBzBOR20A1JTWRnZ2d9G3gWT/QZebkdi1ikkCguIGXX7+w0E7RaUhCmZ3emQ7zO1+4hGg+CRqNyB0akr/PYfQAz1CK9aVzw/oJXx/YZrbCwx0E64rhAgxTB1Xd5efndwuuys5DGJdJHttO1YfHw+YM2thgzMzPVQSmt0sL3LtLsWmApBt/szuja3sA30CnT2+1QTAoHOz0/eu3fUGWQcPTBge/aQ9cVgaKY6IxCnlItRrxYk1Pa6z1yO6nQXSp7v7AP2xw4Ch8fH6s8X0wjAiLxF07lVqvVWFhYOFCxx4WjL5fLbXh/33OfSK9K+AkVVldXP9wuxXevnA6jdVRgMxjRt93rOd9JJZiRP0hvtyapNHjHpt+TvgJyY4m/+Is+2e23c73vtCbvk9VclZNGqVe718nAeyaIviFv/xr2QkytoN2rod3bHPS6gRPr3Dfkm9LomHxKCqLDvB3ktaFue4Ix5vEo9Q+j0Gu00Y/AAjLjLmJY8ZhQAjLjKmIU8ZjQi4tE9+Yb6Z1PVgoXjCjiMZFWZ/EHobxvjkkXp9RsNiOJx4ROYS9i3LxP+iwwWfAIoxh3cWhsARlxj5n9EbrTh6+XGBYpArpwNKLA7CW1wHChYEd50OgiDFIFdIGTs4f0KCRISGdnlIq9KkoEZMQMmjnkiFQmnIsyATup1+vfEZHcPhZIPb43nVCBFgFdeDUC73BkMdmslRiZNo4KRLN4xcDY/WcEfrCg4AvMW56VM8S+PXdVlbdbZPMfvKhRGBs1CGbrFszL/yntr4NvLaZOAAAAAElFTkSuQmCC"
    }, a350: function (e, t, n) {
        e.exports = n.p + "https://static.hwweb.online/584f/img/complex.2b83c227.gif"
    }, a38a: function (e, t, n) {
        var a = n("bffc");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("69e4cc71", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, a4af: function (e, t, n) {
        "use strict";
        n("9902")
    }, a510: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAHg0lEQVRYR61Xa2hcxxU+Z+beu3v3LWml9cq2XrZsJ/RFSyi4yHbspsZxcNo4gpBSaocSKMW0tLGcNimYNi6pWkppQkrTH0oIISVOWpzEcQK1YzelIbS0hNLGtvyQZVuypNXuah+6r5k55d6VFq28fhQyPy67M3O+OfOd75xzLwIAPL45+6vPZvTWjd2h17rGRo/hYZD+/Cc9aBD4eE//jr+NO7s/uuYVnj41+X0cHATeO5WdBMD29Wk+s7Uv7GoIL0uEF3qGRz/+JJwYG+q/AxH2CAUPnzjvGKM50QFAMxczk1l8bFNmKwN+fPGgFhOrO9eFMWWyCBB8SAxG4iD/0PrzC3P/jzP5A33JMvCHCGAvAn6xaKvyWx/bNGerxCKOArkN9w90PocI314KzhDsL68x1Lq0HqnNk4WEf+KcXoyFxfjNHCnaWhcQfpMAvgaApr/3zIyXP3HOCSuABbwFVILf4tCm7DUAzDQDvaNdK27pNZKcIfrriOS0xj3/Z6ipEwTubNUAIjT8daFAvHfenj2bE03xAWgK9w9kxxCx+0a3ajWZfe/6EKbCLDg0boqKoatYs/2Ox+yyrYf9tWaUL7choks4NJA9DIgP3oxWzsDZ1hfCdWnNMDRVikdEPY5L7UqWZruCh29E+fIzEOh1HNrUeQAAnr4dgd3Zziube0Ox9qRnIUIQ37qgFIiZcghO3JTyxlMQ4If4+KbMVrUkC27lSJvJvMHPcZmJQ0D14pgqY+mVfwlYqvJbYYGEr+CBL7QkVcQsIEIgtFsNnaO7+1Oatz4D0aV7z06hc/jfHhOK9Fth+OsEQFxV23wR7kbE127HKBZC9/4NYeiIg0hERENKlapcTldQvnHahrJDQRbcajCkB3DoS+lOYMbfAaHzZgbtUTa/a0NYN3XUOVdOKioaUnGuqoGQDCyPvDdP22K6qho0ch02wQQo9y48uKUnbCn3KAFsvZEDPS18dkd/qIUzZP4ejkqm4oIv3V+o6KBULYpSkTo26hTGCrLtRpgIcMJkxs7AYmggexIQNy9uRgDqaYOpdWkW70/zaRJGb60U1QYiwUJBqs/ly7pfgOr/iQBQcy+O5mTH2Zwqj81Cxp9asuHU8PuTW4KJ7w2ks6mQcXJDO2tZ34F8TRsanKFfbKxiRRdSYbzxJgRtiaAi1sdsyddeo445o3Iq5mkAYEpFlfOz5J6ZJnl6RhWKjrvl1+/nJusWlZ92H0dsDEPV5jnb5elmNKYTjiBAH9zXtJwthRpCsmgTNmQuGpYNGD79kScvbQvY9B+ln61s44r7PWEBsGY+k9f/m5vjHYjgIYBiCIQIDBlpfSudMCIEFZEISheuhmxSKIhAKQIkAEYEejopp9tbvTuXMSgkkysSP7o6GzhQObR6DxIbWX5TKSF/Zcbw5ud5vZkQgKdxqKxdbSFjkPJtFEHh3LgJQkIMAep1IBKRU6vaXZ1zaF2OzUg9Yv748kjgQPVQ1xEg3NWM6tI8z+eLmvhPIcQPX2sBk0sYWptzu7JOC+cUVEOpwBqfCBeHz6UNS3J6MFPEz7TaMpUSWiIirzt8IWxvRp8c34X0i0x03gnP+EJp5oDPQqmqcwgr59jlRPQvU7Hyvu4c27DCTtQdkGCdvmaWn7mUVgOZSnzHqlIVHWYkop5qdvuF2NvVUrUDy091DTLAV5sdvjhXndcmohFRL1TzDnMMTQmN18qxkFBxBdMjIVUvTlWLX42acuXNcBHUQ1j+SdfvEPEBIGALWcSCfCUQgTGiISVUdY18HQQhExInAcjUeE0DPksE6GicsgsHkidwivsOErk1HND8+uJLJngiKAVwBC/t7/8NIuxb7mmlinPzFksu0FVZlXVFzJT+DU0CmJMSXY1Te80BnGacQgjg77cqFncuTxq+GAOGIqYqxqIUOLssG57DsR+s2cE4e/u6JSLKF/i8VBhlCBPpNtmpMSrHowIYUlwpmGCs1j+I4CoirFSE5bLfExTGc3k+qRRkOaNqa4uKNOu2Ssn78OLBnjCf12YBsKG7+cCeh5X8HJohDaZTKRXQi0h2QdDc8/+0pMEoqBuuQvHo503eomGSCIPMyBfZpCegozVJlq5Tk1c4stCz24KYXh7qf4sAdjYTTKWCOQKIxmNkqkRnwVl3L730wRh//uXXg/Asjkcf3l36xsYeETpzlLHyZKpUYVUGZMVi1LSSIsDbq4dHa81ofP/a7wDis00VSyCq4VUT+OkdcdWxIUkE7JmRV9w/vnO8oed/dfvdzncf+XoIERSfOVNUHx0tR5wrqxCxaYlWoPb1DJ9/NnBg7LHuXsaMC3UHiCwAOEUE7+rE3hnb8kSZof5CJGzexTlP/vmvH1wsFIsNr2SpZNK6Z2BjnxSyZLvWh6Lq7e38x1MJBNqOANsBYPPid4J/jqHcvhW/vHSx3ozGh/qPKKLzTMG7Mi5O9R4cs5cy8t7ISBjj6pBhhPZIKYSUsmPpOmd8WtM07rjOi1RmT9y9d2+DfaC1srZZMdjOENd0DY/ev5BhTYm/4eTJV39/D7CgbywvMlcY0Z5Ng9+qf+bdDvL/AIcUSz47cNKDAAAAAElFTkSuQmCC"
    }, a6d9: function (e, t, n) {
        e.exports = n.p + "img/draw-down.5579be17.svg"
    }, a9cf: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "commonContracts", (function () {
            return a
        }));
        var a = {
            unitroller: {
                id: "unitroller",
                name: "unitroller",
                address: "0xBcA21874EEB5829fF79e97680542459aD5290afF",
                abi: []
            },
            comptroller: {
                id: "comptroller",
                name: "comptroller",
                address: "0xBcA21874EEB5829fF79e97680542459aD5290afF",
                abi: [{inputs: [], payable: !1, stateMutability: "nonpayable", type: "constructor"}, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "string", name: "action", type: "string"}, {
                        indexed: !1,
                        internalType: "bool",
                        name: "pauseState",
                        type: "bool"
                    }],
                    name: "ActionPaused",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "string", name: "action", type: "string"}, {
                        indexed: !1,
                        internalType: "bool",
                        name: "pauseState",
                        type: "bool"
                    }],
                    name: "ActionPaused",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "uint256", name: "newSpeed", type: "uint256"}],
                    name: "CompSpeedUpdated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !0, internalType: "address", name: "borrower", type: "address"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "compDelta",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "compBorrowIndex", type: "uint256"}],
                    name: "DistributedBorrowerComp",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !0, internalType: "address", name: "supplier", type: "address"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "compDelta",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "compSupplyIndex", type: "uint256"}],
                    name: "DistributedSupplierComp",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "uint256", name: "error", type: "uint256"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "info",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "detail", type: "uint256"}],
                    name: "Failure",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "bool", name: "isComped", type: "bool"}],
                    name: "MarketComped",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "address", name: "account", type: "address"}],
                    name: "MarketEntered",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "address", name: "account", type: "address"}],
                    name: "MarketExited",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "contract CToken", name: "cToken", type: "address"}],
                    name: "MarketListed",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldCloseFactorMantissa",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newCloseFactorMantissa", type: "uint256"}],
                    name: "NewCloseFactor",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldCollateralFactorMantissa",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newCollateralFactorMantissa", type: "uint256"}],
                    name: "NewCollateralFactor",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "uint256", name: "oldCompRate", type: "uint256"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "newCompRate",
                        type: "uint256"
                    }],
                    name: "NewCompRate",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldLiquidationIncentiveMantissa",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "newLiquidationIncentiveMantissa",
                        type: "uint256"
                    }],
                    name: "NewLiquidationIncentive",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldMaxAssets",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newMaxAssets", type: "uint256"}],
                    name: "NewMaxAssets",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "address",
                        name: "oldPauseGuardian",
                        type: "address"
                    }, {indexed: !1, internalType: "address", name: "newPauseGuardian", type: "address"}],
                    name: "NewPauseGuardian",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract PriceOracle",
                        name: "oldPriceOracle",
                        type: "address"
                    }, {indexed: !1, internalType: "contract PriceOracle", name: "newPriceOracle", type: "address"}],
                    name: "NewPriceOracle",
                    type: "event"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address[]", name: "cTokens", type: "address[]"}],
                    name: "_addCompMarkets",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract Unitroller", name: "unitroller", type: "address"}],
                    name: "_become",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "_borrowGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}],
                    name: "_dropCompMarket",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "_mintGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract CToken", name: "cToken", type: "address"}, {
                        internalType: "bool",
                        name: "state",
                        type: "bool"
                    }],
                    name: "_setBorrowPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "uint256", name: "newCloseFactorMantissa", type: "uint256"}],
                    name: "_setCloseFactor",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {internalType: "uint256", name: "newCollateralFactorMantissa", type: "uint256"}],
                    name: "_setCollateralFactor",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "uint256", name: "compRate_", type: "uint256"}],
                    name: "_setCompRate",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "uint256", name: "newLiquidationIncentiveMantissa", type: "uint256"}],
                    name: "_setLiquidationIncentive",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "uint256", name: "newMaxAssets", type: "uint256"}],
                    name: "_setMaxAssets",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract CToken", name: "cToken", type: "address"}, {
                        internalType: "bool",
                        name: "state",
                        type: "bool"
                    }],
                    name: "_setMintPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "newPauseGuardian", type: "address"}],
                    name: "_setPauseGuardian",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract PriceOracle", name: "newOracle", type: "address"}],
                    name: "_setPriceOracle",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "bool", name: "state", type: "bool"}],
                    name: "_setSeizePaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "bool", name: "state", type: "bool"}],
                    name: "_setTransferPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract CToken", name: "cToken", type: "address"}],
                    name: "_supportMarket",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "accountAssets",
                    outputs: [{internalType: "contract CToken", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "admin",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    name: "allMarkets",
                    outputs: [{internalType: "contract CToken", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "borrower",
                        type: "address"
                    }, {internalType: "uint256", name: "borrowAmount", type: "uint256"}],
                    name: "borrowAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "borrowGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "borrower",
                        type: "address"
                    }, {internalType: "uint256", name: "borrowAmount", type: "uint256"}],
                    name: "borrowVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }, {internalType: "contract CToken", name: "cToken", type: "address"}],
                    name: "checkMembership",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "holder",
                        type: "address"
                    }, {internalType: "contract CToken[]", name: "cTokens", type: "address[]"}],
                    name: "claimComp",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address[]",
                        name: "holders",
                        type: "address[]"
                    }, {internalType: "contract CToken[]", name: "cTokens", type: "address[]"}, {
                        internalType: "bool",
                        name: "borrowers",
                        type: "bool"
                    }, {internalType: "bool", name: "suppliers", type: "bool"}],
                    name: "claimComp",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "holder", type: "address"}],
                    name: "claimComp",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "closeFactorMantissa",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "compAccrued",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "compBorrowState",
                    outputs: [{internalType: "uint224", name: "index", type: "uint224"}, {
                        internalType: "uint32",
                        name: "block",
                        type: "uint32"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "compBorrowerIndex",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "compClaimThreshold",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "compInitialIndex",
                    outputs: [{internalType: "uint224", name: "", type: "uint224"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "compRate",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "compSpeeds",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "compSupplierIndex",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "compSupplyState",
                    outputs: [{internalType: "uint224", name: "index", type: "uint224"}, {
                        internalType: "uint32",
                        name: "block",
                        type: "uint32"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "comptrollerImplementation",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address[]", name: "cTokens", type: "address[]"}],
                    name: "enterMarkets",
                    outputs: [{internalType: "uint256[]", name: "", type: "uint256[]"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cTokenAddress", type: "address"}],
                    name: "exitMarket",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "account", type: "address"}],
                    name: "getAccountLiquidity",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "getAllMarkets",
                    outputs: [{internalType: "contract CToken[]", name: "", type: "address[]"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "account", type: "address"}],
                    name: "getAssetsIn",
                    outputs: [{internalType: "contract CToken[]", name: "", type: "address[]"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "getBlockNumber",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "getCompAddress",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "account", type: "address"}, {
                        internalType: "address",
                        name: "cTokenModify",
                        type: "address"
                    }, {internalType: "uint256", name: "redeemTokens", type: "uint256"}, {
                        internalType: "uint256",
                        name: "borrowAmount",
                        type: "uint256"
                    }],
                    name: "getHypotheticalAccountLiquidity",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "isComptroller",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenBorrowed",
                        type: "address"
                    }, {internalType: "address", name: "cTokenCollateral", type: "address"}, {
                        internalType: "address",
                        name: "liquidator",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "repayAmount",
                        type: "uint256"
                    }],
                    name: "liquidateBorrowAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenBorrowed",
                        type: "address"
                    }, {internalType: "address", name: "cTokenCollateral", type: "address"}, {
                        internalType: "address",
                        name: "liquidator",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "actualRepayAmount",
                        type: "uint256"
                    }, {internalType: "uint256", name: "seizeTokens", type: "uint256"}],
                    name: "liquidateBorrowVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenBorrowed",
                        type: "address"
                    }, {internalType: "address", name: "cTokenCollateral", type: "address"}, {
                        internalType: "uint256",
                        name: "actualRepayAmount",
                        type: "uint256"
                    }],
                    name: "liquidateCalculateSeizeTokens",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "liquidationIncentiveMantissa",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "markets",
                    outputs: [{internalType: "bool", name: "isListed", type: "bool"}, {
                        internalType: "uint256",
                        name: "collateralFactorMantissa",
                        type: "uint256"
                    }, {internalType: "bool", name: "isComped", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "maxAssets",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "minter",
                        type: "address"
                    }, {internalType: "uint256", name: "mintAmount", type: "uint256"}],
                    name: "mintAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "mintGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "minter",
                        type: "address"
                    }, {internalType: "uint256", name: "actualMintAmount", type: "uint256"}, {
                        internalType: "uint256",
                        name: "mintTokens",
                        type: "uint256"
                    }],
                    name: "mintVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "oracle",
                    outputs: [{internalType: "contract PriceOracle", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "pauseGuardian",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "pendingAdmin",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "pendingComptrollerImplementation",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "redeemer",
                        type: "address"
                    }, {internalType: "uint256", name: "redeemTokens", type: "uint256"}],
                    name: "redeemAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "redeemer",
                        type: "address"
                    }, {internalType: "uint256", name: "redeemAmount", type: "uint256"}, {
                        internalType: "uint256",
                        name: "redeemTokens",
                        type: "uint256"
                    }],
                    name: "redeemVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [],
                    name: "refreshCompSpeeds",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "payer",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "repayAmount",
                        type: "uint256"
                    }],
                    name: "repayBorrowAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "payer",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "actualRepayAmount",
                        type: "uint256"
                    }, {internalType: "uint256", name: "borrowerIndex", type: "uint256"}],
                    name: "repayBorrowVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenCollateral",
                        type: "address"
                    }, {internalType: "address", name: "cTokenBorrowed", type: "address"}, {
                        internalType: "address",
                        name: "liquidator",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "seizeTokens",
                        type: "uint256"
                    }],
                    name: "seizeAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "seizeGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenCollateral",
                        type: "address"
                    }, {internalType: "address", name: "cTokenBorrowed", type: "address"}, {
                        internalType: "address",
                        name: "liquidator",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "seizeTokens",
                        type: "uint256"
                    }],
                    name: "seizeVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "src",
                        type: "address"
                    }, {internalType: "address", name: "dst", type: "address"}, {
                        internalType: "uint256",
                        name: "transferTokens",
                        type: "uint256"
                    }],
                    name: "transferAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "transferGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "src",
                        type: "address"
                    }, {internalType: "address", name: "dst", type: "address"}, {
                        internalType: "uint256",
                        name: "transferTokens",
                        type: "uint256"
                    }],
                    name: "transferVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }]
            },
            COMP: {id: "COMP", name: "COMP", address: "0xaEC09668944ac3312060bf4b2be7de371E16dA01", abiJson: []},
            priceOracle: {
                id: "priceOracle",
                name: "priceOracle",
                address: "0x279d2d88160a8b4684D57F15d39c5CC95e32D74D",
                abi: [{
                    inputs: [{
                        internalType: "contract OpenOraclePriceData",
                        name: "priceData_",
                        type: "address"
                    }, {internalType: "address", name: "reporter_", type: "address"}, {
                        internalType: "uint256",
                        name: "anchorToleranceMantissa_",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "anchorPeriod_",
                        type: "uint256"
                    }, {
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig[]",
                        name: "configs",
                        type: "tuple[]"
                    }], stateMutability: "nonpayable", type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "string", name: "symbol", type: "string"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "anchorPrice",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "oldTimestamp", type: "uint256"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "newTimestamp",
                        type: "uint256"
                    }],
                    name: "AnchorPriceUpdated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "string", name: "symbol", type: "string"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "reporter",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "anchor", type: "uint256"}],
                    name: "PriceGuarded",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "string", name: "symbol", type: "string"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "price",
                        type: "uint256"
                    }],
                    name: "PriceUpdated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "address", name: "reporter", type: "address"}],
                    name: "ReporterInvalidated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !0, internalType: "bytes32", name: "symbolHash", type: "bytes32"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldTimestamp",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newTimestamp", type: "uint256"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldPrice",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newPrice", type: "uint256"}],
                    name: "UniswapWindowUpdated",
                    type: "event"
                }, {
                    inputs: [],
                    name: "anchorPeriod",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "ethBaseUnit",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "expScale",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "uint256", name: "i", type: "uint256"}],
                    name: "getTokenConfig",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "address", name: "cToken", type: "address"}],
                    name: "getTokenConfigByCToken",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "string", name: "symbol", type: "string"}],
                    name: "getTokenConfigBySymbol",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes32", name: "symbolHash", type: "bytes32"}],
                    name: "getTokenConfigBySymbolHash",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "address", name: "underlying", type: "address"}],
                    name: "getTokenConfigByUnderlying",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "address", name: "cToken", type: "address"}],
                    name: "getUnderlyingPrice",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes", name: "message", type: "bytes"}, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }], name: "invalidateReporter", outputs: [], stateMutability: "nonpayable", type: "function"
                }, {
                    inputs: [],
                    name: "lowerBoundAnchorRatio",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "maxTokens",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
                    name: "newObservations",
                    outputs: [{internalType: "uint256", name: "timestamp", type: "uint256"}, {
                        internalType: "uint256",
                        name: "acc",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "numTokens",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
                    name: "oldObservations",
                    outputs: [{internalType: "uint256", name: "timestamp", type: "uint256"}, {
                        internalType: "uint256",
                        name: "acc",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes[]", name: "messages", type: "bytes[]"}, {
                        internalType: "bytes[]",
                        name: "signatures",
                        type: "bytes[]"
                    }, {internalType: "string[]", name: "symbols", type: "string[]"}],
                    name: "postPrices",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{internalType: "string", name: "symbol", type: "string"}],
                    name: "price",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "priceData",
                    outputs: [{internalType: "contract OpenOraclePriceData", name: "", type: "address"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
                    name: "prices",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "reporter",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "reporterInvalidated",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes", name: "message", type: "bytes"}, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }],
                    name: "source",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [],
                    name: "upperBoundAnchorRatio",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }]
            }
        }
    }, acdd: function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".bar_wraper[data-v-6574ca2b]{position:fixed;left:0;width:100%;height:0;overflow-x:hidden;overflow-y:auto;background-color:var(--white);transition:height .3s linear}.bar_wraper li[data-v-6574ca2b]{text-align:left;margin-top:5px}.bar_wraper li a[data-v-6574ca2b]{display:flex;justify-content:flex-start;align-items:center;width:200px;padding:10px 20px;border-radius:25px;text-decoration:none;color:var(--grey);font-size:16px;font-weight:600}.bar_wraper li a img[data-v-6574ca2b]{height:20px;margin-right:20px}.bar_wraper li a[data-v-6574ca2b]:focus,.bar_wraper li a[data-v-6574ca2b]:hover{color:var(--white);background:linear-gradient(180deg,#6c5dd3,#9f5dd3)}.bar_effect[data-v-6574ca2b]{height:100%;border-bottom:solid 1px var(--light-grey)}", ""]), e.exports = t
    }, ae70: function (e, t, n) {
        var a = n("282e");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("350b6cf4", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, b26b: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "vaultPair", (function () {
            return r
        }));
        var a = n("d028"), i = n("ce62"), s = n("3e3c"), r = [{
            token1: "USDT",
            token2: "YFO",
            address1: a.USDT.address,
            address2: a.YFO.address,
            lpAddress: i["USDT-YFO-Quick"],
            vaultAddress: s["USDT-YFO-Strat"][0],
            stratAddress: s["USDT-YFO-Strat"][0],
            farmAddress: s["USDT-YFO-Strat"][0],
            stratPid: s["USDT-YFO-Strat"][1],
            totalSupply: s["USDT-YFO-Strat"][2],
            dailyOut: s["USDT-YFO-Strat"][3],
            staked: "--",
            earned: "--",
            tvl: "--",
            apy: "--",
            start: new Date("2021/07/31 20:00:00").getTime(),
            end: new Date("2022/07/31 20:00:00").getTime()
        }, {
            token1: "BNB",
            token2: "OBS",
            address1: a.USDT.address,
            address2: a.YFO.address,
            lpAddress: i["USDT-YFO-Quick"],
            vaultAddress: s["USDT-YFO-Strat"][0],
            stratAddress: s["USDT-YFO-Strat"][0],
            farmAddress: s["USDT-YFO-Strat"][0],
            stratPid: s["USDT-YFO-Strat"][1],
            totalSupply: s["USDT-YFO-Strat"][2],
            dailyOut: s["USDT-YFO-Strat"][3],
            staked: "--",
            earned: "--",
            tvl: "--",
            apy: "--",
            start: new Date("2021/07/31 20:00:00").getTime(),
            end: new Date("2022/07/31 20:00:00").getTime()
        }]
    }, bb33: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "params", (function () {
            return a
        }));
        var a = {
            community: "#",
            telegram: "#",
            discard: "#",
            github: "#",
            twitter: "#",
            medium: "#",
            $PLink: "#",
            infoUrl: "https://pancakeswap.info/",
            chainId: 56,
            cakeSwapUrl: "https://pancakeswap.finance",
            mdexSwapUrl: "https://bsc.mdex.com/#/",
            uniSwapUrl: "https://app.uniswap.org",
            etherscanUrl: "https://bscscan.com",
            defaultProvider: "https://bsc-dataseed.binance.org",
            swap: {
                1: "https://app.uniswap.org",
                56: {Pancake: "https://pancakeswap.finance", Mdex: "https://bsc.mdex.com/#"}
            },
            etherscan: {1: "https://etherscan.io", 56: "https://bscscan.com"},
            chains: {
                ETH: {
                    chainId: "0x1",
                    chainName: "Ethereum Mainet",
                    tokenName: "ETH",
                    symbol: "ETH",
                    decimals: "18",
                    rpcUrls: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
                    blockExplorerUrls: "https://etherscan.io",
                    iconUrls: "https://cn.etherscan.com/images/ethereum-icon.png"
                },
                BSC: {
                    chainId: "0x38",
                    chainName: "BSC Mainet",
                    tokenName: "Biannce",
                    symbol: "BNB",
                    decimals: "18",
                    rpcUrls: "https://bsc-dataseed.binance.org",
                    blockExplorerUrls: "https://bscscan.com",
                    iconUrls: "https://bscscan.com/images/svg/brands/bnb.svg?v=1.3"
                }
            }
        }
    }, bb5d: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAsCAYAAAANUxr1AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN+SURBVHgB3VhNTtwwFH7JzAY2pTdId911EGKNOUHpCQoSv6vODRhOwGwQv1LDqsvSExAOAJ2eoDkCC4RYANPvG3mox3Fw4pmiik+KktjP9ufPznvPiSQA7XZ75u7urtXv9z/gtYVLsRzvvSiKsoeHh18nJyeZBCCqYrS5uZlgEBXH8YAABm5h4JkKTTNcPdhfoG3v4OAg9zUoECqZfSKTQe5TcUBofX19CUYLUm/2k0ImWsWjo6OzaGNjo4uCL1IfOTt7fHzs4X7RbDbf3N/fczIKF5VNpD5SEur7rMD+GoNwYF7Z1NTURbfbvX6uDfedXnYlxsb3oYxQLsbsj4+PezIBbG1tLfhULBDC7N/6Zj8paBV/m2WxbfRSZAiXG4jlP0NTxgAkV5B823AVGRxgur+/fyqBCFYIZDogco5HZfgthQ8hhV/rSCCCCIHMMpUpqwfB7dXVVSUvRQhkPvtsGo3GtgQgdMmUz4D7SgIQqpDXNYTGwyBCOoz4kEkAQgnt+GygYioBCCIED5uBVEfKyXSQSgT5omA/BFI78DkropdG7ysGZAUyXgXLMJanRhaQ4pbKBPF6YpmOY3SQSv7mNUxFc9xPmY5KAGoT0jnMV1zKUd3SidcS8qwcz4tVThomai3Z2tpaC5v2p1RLRxPaso3UQGVCVAYzPq/jgWnLNmxbtU1shwGey1yGTDVCwgHbcIldda6xYjQYIXRzc1OQmOc2Ge+wqFzpCA+k5jsPkVyyzCxExrdgNwTpjzImkI4UUhY7jWGMJCH782w7pAxKJSwo80XvK2URzJo89N3e3l4P9wfveOeafxoaHh4ezsqEgS9wF2MlRlHO+BfrY89I7IHhEvbNrvwj8PjOMcwyBuTB2IbRIGG32gY5tzJop/pdilsgxyq848OTH8LAjNy5ZTg4WY5zihgCfbS1Uy2Q4aSfeJg1egZUKnH0GaTWMNSI27sX+hzx1KzQbFNH49pqGaoouw59neGDmrUnWPpLDzFoGT6JR5nEUf2sWs+poiPDSlk20JASXF1d9ebn53/gke7AXneWtefm5qLLy8vMrKAqGPQbCL93kDmbnp5e3NvbKz0kVPrpWUUtPWCQKrUJEXoZSGrZVa//ss04yqnKStXfPJUJDeFRa4SgVFTFRENqwrO3hmS8e6UMtRUyYasVqoqJ2gqZMNVich+qiok/Kf7xGB1fb0QAAAAASUVORK5CYII="
    }, bb89: function (e) {
        e.exports = JSON.parse('{"YFO-Bank-2":["0xe8277EFaEB7cCa866B56172d5B9Ce2A93070C5AB",2000,66.67],"YFO-Bank":["0x1ABBD25a953D0870417c0931309742D67DDb19DB",1000,3],"BNB-Bank":["0x146E6A907b7C5DB1B3EF1d159e9A0Ea2B6301DDD",1000,1.5],"WBNB-Bank":["0x146E6A907b7C5DB1B3EF1d159e9A0Ea2B6301DDD",1000,1.5],"BUSD-Bank":["0xE1450FE2bC5eb731dC807BD6Cfa2694811d54F88",1000,1.5],"USDT-Bank":["0x978939B87Ed7B9232fFc2E0fE50B684FEE659608",1000,1.5],"ETH-Bank":["0x3af9fA4d96647dC8f89a30Ed390Dd08A94f03878",1000,1.5]}')
    }, be42: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAHYElEQVRYhZWXeYxXVxXHP+e9N79ZmRU6dEA7RZBapqC2SJNKi1FbidAGm6qxFrVF0tjSxCXUIGm0+geQWCKkLU2xCdG0hUSxU9PFJaGhG1JjsVVqBZlacFiGYWaY6czw+717zL33bUNHEm9y83vv/s4753v2c2XxT8cpLqMQqxAbqCgYI+7MKK2xcqNRFsYqC1S5RJWm5L9Bo/KOUQ4YZb9Rug30GwMGQRXU8jb+t7giLrQ89XxgDcKXA6UBwbIkRjDYZwhgCuhMkGuMZzeM4UlgK/DXC4kILghA2CiiB4KAVYHQEAQQWADJDmTiu4imZw0irBLhALDx/wegfAjYHwprQ8dQHWFQFIxOAJEBSbFn57pWhD+B4/l+AM4/yU7WFSLsC4SrwlQgBRCJ2SUFkb4XdpEu+V0oyj7Lm/Npq0KwOwod0xmBsDcUbTtfM/cb6ARNU7NLwk1SayXPqTksDUKbCHtRZsY2IJMdRKHitvfv74KAJuvrMNDJ/UxiiaAIIqFJ3JQJJgeb8GlCeN5nmt+Bi3Rv/g2RcHmYMAsL2mTbMnTgEkE+XhyTlMYL1omWyzHZ98sD2JC54XNbxuxTpypHfK5meZ9vxxJXGwZGoW9YORcLgQhlhXNla0WhtU6oKXm6yiR83Jnxpo8NlwI9kdVG4b7MEIGiKo7KmU9tsVD6R4QTZ5XONuHTc0PmdwiNtbYWKCeH4NUeeOlfypGTcFET1JaUcxWhuLK48Ba/T5HbZfmDY83AKaNEJqlYsRHnn7SC9ZxWWuuFb1wdccuVAe1TJs/pt04oj7ykPLhXnaYdzcK52FfAOKmw+TMVVZkWBaLLFYnSlLEgXEFRwRqid0hZMDPggZsjZk2VySUn67J2YfMXhBXzldt+YZzF2uoFk1jSKZ8/Rwa90brgOuOlZqXVEtjgsQy6OgJ23lE1QdCTrxn++Lbh6IAPuUtahc93Ccu7PMBrZwtv/iBk7v3GxcyUahIQXrFKxkmuiwJhnoemiZN8kAyNG0qRMDgKh04ps6cJbx1X7t4V82qPoaYK52OLfY8aHnlRWNol/HJlSGsdPP2GUq7YQiUMjsGUGoiZmBEC8yyAD6jkVcsyPPOe0lwvnBmBo2cMdz5R5quLQh57OebgcfjoDKH3LNREwnjFfiPUluDZ15WvxDGfnB3wk+eM5xlCfTWcGoLWRt9hU3eA2sJHk2Q5rZw6qyz5cMiOlSVu+XjI2XHoH4H7fxszNApXdAiH+3yd2HVHyPZbQ/pGlL5hWNAJ+/4NP3zGUB3B2Ahsukl45dsBXR0wOFhQ36/GrBlZEJbR7IuEDSuqaG8UvvfZiG9eE9I7qLQ3Qms9vH1CaayF3asj5l0sLJkjPP71yAF9px86mqClFoYGYOMXA+5aLMyZBi9/J6CmGoZHJ4IIFAbTZlRfEk4MwR8Omoxg/dKINZ8K6elX/t6rtDUIz95V5YSna1mXsHt1yHgMh/6j9A3Az24NWPuZnGbLHqVcxsVOYSoZst3waGJ96kpCxcCanefY9ec4o1p3Q8TXrg5pqRO674yY1ebP+0ZgtOyfb7hM2L0qpEZg85cC7lmSC//ur5X1jyulaiglI1CC4ZjcvG3050a53Va/OEmE/vfg2IDyo2VV3LYozBjZWLBucMKHYfHmCjNbhN/fndMcOwszCoXqnl8pW7uVKe2+68axL9+uIRl5LDDKCzaK48QK1gKNNTC9SVj3VMVFfrpS4ceHYNm2Mu+eUfb8U1nxaOy+s6so/Fu7DFufVpqne9NbJc3EEHghqKh0W7maNAnXNGJbPIQZLcK67gqPvpiDODYAyx6u8LdeZe504SPt8Ju/KMu3xZk77Fr9hPLwM0rbdFxGZANpLr0iot3hnKXrx1S51Cgf0wSAzWCrkfVXTZWw+4BhelNAbZWwckeZf5xU5kwLXJ2330xrgFcOKW+eEK78oPDj55SHnjdMvVgohT73fbPzE3Ki6A5gpyzdMmb/7FR8O7ZmssJTQhsTw2MwUhZnRlsZ2+px7dj70atjG03vEDTXiaslzXW4dm155QNI0oz82SwrM6j4P3uMstHOAina1B3lWKiuEuqqcFXPxoHt68U5Mk6+mdoAI+NKS50dWiQ7d3Sa3w8UNolwJB1ykiXfN8rB4pBqEktYRnZmrC/5M1Ng7A3grWGXbTx2xnCWKbT0LPWVgwL3pq82CKkkZo+V6+0tJ53XNGHsAjQVrH46SkGg6XkOyA00BaGab1uMr58wztuId9szPGqUxcbI6TRljOYTrLMGHlAWTMm4lu2Ca7J3H3ynVVkMHC2O7oEUx2z/3RsGFsXKa2nqpBrGmkdxUdjEnQPX3Er7VVlkeXOeVf7X1eywwsLYsMlHrPhNccj0Z+8DUBCepPQmhU8IHJ5M0IXvhnCvUVlgDNtjZTi2eV9knsRK5iYHyqk2bJTtKAvQPOAmW3LtA/n13LrAMrRp5gLR5azXMvbX85tUuSq5nncapdEomlzP31Xldec65Sl7PffVNYkRy6sYmXYB/wUB0g73oo/QgAAAAABJRU5ErkJggg=="
    }, bef1: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ+SURBVHgBvVmLkZswEF2nAkogFRwdHJ2EDkIHpgPcAVdCUgFOBXYqUFKBr4N30pw8o1tWnwXsN7PjsT5vn1YgacWBVgJAa38aa6/+t/Lm8G7tn7e/1s6Hw+FMj4YVVVk7WrtBD2NtslbT3vDCRuyHaTehlugn1kUsB2Otoy1AOmo3H4nOWmOtCvpVvszVvSE9wJG08A7mxMj7UFAhZ+f7Srio+HwHKWI9bYTlGCIi51KCMRK1mnaC44IczTHXsYMc/rrA6RcUtK8hz1RPilEVR04rMOHTPUqV1HgSRlNTIdYIDETyt3yUGnEMpMBagb5vL/ivwgYTqzQZwhafy5BqAc9wGsQCJFR2CaIjVoJ0UbyF0VhWyCQdNiAj0G0OfEbab7auZW1/JXh+0INgj2PuiPabFTdO4Asr/JPgadn/7wcFKI8z9+cE1qzwSnG802PBfb+QMO/RTRvxA0QOMwqOVv45DHFTrV9YvlBaHAtEftWzKMgTDNiGNsO/EFg8xQGJW25mrMOc4BWn2LDChnYElttoap1tWNuLe4v5m7OrQAGpGeK+/zuBfN17pQyggG3O9/Vzgpr7vopbHTLPIbahS/AutrpYRTL3wHoMCU6+z5uwcohWbhfoBj8jv7wY1m8KKyuBWJXB8c7KvkfBf80bnYSR1wonqwRCPs1PUkPpPGbw/KQp7hNybvDstLPLdTwJnQzwlMT9VEowQ0b2NFLAHbstu2hIqkj479HsSAHP1yN+eTRDeRl1Jz4hjtLrtwnp9LRsWhMiU9dmW7DLbdldpHuo37Af3Mzop1Qh1EAPF7FBK6wkFYyJbekzDXVpa+0t/AzhzJ013XHuuvYzxAfE1G3i8GWaxAAAAABJRU5ErkJggg=="
    }, bffc: function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".d-overlay[data-v-0a9b7ee4]{z-index:300000;width:100%;height:100%;top:0;left:0;opacity:0;background:rgba(0,0,0,.5);transition:all .3s}.d-overlay[data-v-0a9b7ee4],.d-overlay .d-modal[data-v-0a9b7ee4]{position:fixed;visibility:hidden}.d-overlay .d-modal[data-v-0a9b7ee4]{z-index:3000;top:50%;left:50%;width:80%;min-width:150px;max-width:320px;height:auto;border-radius:10px;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateX(-50%) translateY(-50%)}.d-overlay .d-modal .d-content[data-v-0a9b7ee4]{position:relative;background-color:var(--white);border-radius:10px;margin:0 auto}.d-overlay .d-modal .d-content .modal-header[data-v-0a9b7ee4]{position:relative;width:100%;border-radius:10px 10px 0 0}.d-overlay .d-modal .d-content .place-center[data-v-0a9b7ee4]{text-align:center}.d-overlay .d-modal .d-content .place-left[data-v-0a9b7ee4]{text-align:left}.d-overlay .d-modal .d-content .place-right[data-v-0a9b7ee4]{text-align:right}.d-overlay .d-modal .d-content .bottom-border[data-v-0a9b7ee4]{border-bottom:1px solid #b4b4b4}.d-overlay .d-modal .d-content .modal-body[data-v-0a9b7ee4]{width:100%;height:auto}.d-overlay .d-modal .d-content .modal-body .modal_btn[data-v-0a9b7ee4]{width:100%;padding:20px 10px}.d-overlay .d-modal .d-content .modal-body .modal_btn button[data-v-0a9b7ee4]{width:45%;min-width:80px;padding:10px;border-radius:10px;overflow:hidden}.d-overlay .d-effect .d-content[data-v-0a9b7ee4]{opacity:0;transform:scale(.7);-webkit-transform:scale(.7);-moz-transform:scale(.7);-ms-transform:scale(.7);transition:all .3s}.d-overlay .d-show[data-v-0a9b7ee4]{visibility:visible}.d-overlay .d-show .d-content[data-v-0a9b7ee4]{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1)}.overlay-effect[data-v-0a9b7ee4]{opacity:1;visibility:visible}", ""]), e.exports = t
    }, c7ac: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAACwUlEQVRYhbVXQWsTQRh9s12wVbBbwZtNK+YiCiY/QKjXguDFm6g59lR79KQ9ebJSKXioYAQRb7Z/wPYfuEXi1aiQ9CAYrEKl7HwyM8nu7OxusjOJgWGZj828973vzew3DCV/1NmoARQAkZhBPkk8OZIYB0jMeY9deBKWWbmQAHW3FgG+CtASiNcUkDbImOfH2iC+D/BNNr+ZSyhDgLpbAYBHAD1Qi2oZp7O0JbQD8Aabf9ErJNAH3wP6GbsB5cdkuaIewG+wysswQ0CB0x5A5cHdyAgSdVZptgWup+X/TGUeaX+IEJdhMuBiBCD+PqUAdZ8vyewnKXkie+Kd1M7hDbbwttlXgN+bPLimoHxGWkyO1USBzsbP9B7X3T8JAxa9Qxd96jytybrYLjoVAOdXlIA/toGTb8Y7Iw8rMWreSHAqiE1fAabOqTFzNYe0KfkgFumxmg/wRcmMDLPI2BAlvGn9BHH0CkERcKotGQTMb0Sh+/W1Zv2xzJangNV5QbIEWkYW7jcVcNwhvu0fNPYavun0HMkL1vdtXi72ANecbndS+v0Dobz7C01oC66eXgKsfXhgjLzY8WdNgD/GvtdARpwrvnOjcdwCDh+q+d8vTgYEqOfHcrqc6acuA94McHII8CMXDxx4smczJaYc2c35mevA3F1g9jZwdtnRA5FRApsF5Bh44EjzgE0pZAkodGL/+4MC9U4Dv3YdP8sUqn7g+8pH+9Z7rA4Z8u5wKZxTHRHx16XYp2IF27N0TLTpcVPKm/ISMWzvumU5rBtajwmwynYPiNZGs58YoTVW/dTOXky+3rkP8Ff/JfPEO01WbTUGmJ5OgC28EaVoyMvDOEDF4Os6eIaAIvGuCeJ15YvB98EWKBPbAajOqq3HGTwzkCpJ+2YAoluqb+TX4gY2uTmJuLjShTnXrwMQCWPvD+qd+QH4BwZCekpgXFWFAAAAAElFTkSuQmCC"
    }, c7b6: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAsCAYAAAANUxr1AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJJSURBVHgBzVeLccIwDFU6Ad0gG8AGzQbtBmWDsgF0AkYonYBukDABdAKzAWygSrVzTYzjj+JwfXe+QKLP07PsOAUIgIgzuizMmNOozKMTjQNfi6JoQIAixogIlCbpvENkFuHaQJ/kOeRQOJK7qi8hD84QULEwJF7o8gRp1edCA4YkEfwqiMyW/qwgHWcT7NtcW2XbwkpIx44JYYThFXQVbfKGqrn6HEzfMbEK+o3vxRChM3Sqp+QnyABKVUFIRbzF3fqHVbST3yhEakRtBRlJ9fI/wD/DKELcEzRqGhejOP9ewhjYc5jgt8ZhrBPi9POjgBCrgGFUkbGyEKoxjDoyVg+iVRZJ/EqhHlNjSZv6GmEj2s+khGJ27gYEkBJ6j7D5BAkkTW38Np6G3iTEGb/KOsGWnRV3Mb+rxBjjV1lO5Fplk0FMCPV77IOG6ih+pLFHfSQWB07qIdRnmBrDUKhPjWn5MYEQPV7g35s9Bmy7CMSUEUKtTAqZLqkyhZCdZDbgqFCOeiDmzDbkprbfSwuHIzdpCXLwAqgc9+1cJyZ0sJ0djs8wHq8R906/1ePtnPemDfVyHgtlxeSeVJbNsp1Hu4/2MDFQ71duwvRn5ahoCxOBYzvyLW2j2mGkMGJzSyDC03QMTWfXWKEb0V8RHjJv6N7H1GDRAVLDjn4ivldNOKYJsMNhpHxzDanC4KaOP3ejPnwpSWUBVZig7DQgUSurKh5iQbUmU8VDKqTWtKp4iPnUmlYVD6mQWtOq4iFmq3U/VTykWrWyqPIDKb60C4BIcr8AAAAASUVORK5CYII="
    }, ce62: function (e) {
        e.exports = JSON.parse('{"BNB-OBC":"0xEb8942B9eBb98ab14e82551A5154c83AAF9330bd","OBC-BNB":"0xEb8942B9eBb98ab14e82551A5154c83AAF9330bd","BUSD-OBC":"0x3Ff034678AD3AF3Df69D56F015013CD202fE0bf6","OBC-BUSD":"0x3Ff034678AD3AF3Df69D56F015013CD202fE0bf6","YFO-OBC":"0x5c7d4c71Ae3A37AeD89f89EBD01bcc2af447E756","OBC-YFO":"0x5c7d4c71Ae3A37AeD89f89EBD01bcc2af447E756","YFO-BNB":"0x462cCea7c669A304a5bFcD1E35A14Ba3B6f5b3c4","BNB-YFO":"0x462cCea7c669A304a5bFcD1E35A14Ba3B6f5b3c4","ETH-OBC":"0xb31354c9f6eE1CE7BF04406F324cD462474AF43C","OBC-ETH":"0xb31354c9f6eE1CE7BF04406F324cD462474AF43C","BTCB-OBC":"0xcd0CD94BE45d007d9DA0Be801928D6A2f54066dE","OBC-BTCB":"0xcd0CD94BE45d007d9DA0Be801928D6A2f54066dE","BTC-OBC":"0xcd0CD94BE45d007d9DA0Be801928D6A2f54066dE","OBC-BTC":"0xcd0CD94BE45d007d9DA0Be801928D6A2f54066dE","BNB-OBS":"0xb414c6eac7dde63e76630c43a0cfe0d7376f1d88","OBS-BNB":"0xb414c6eac7dde63e76630c43a0cfe0d7376f1d88","BUSD-OBS":"0x02dd3092545253f5b80a7c8c1078248fc0d0d906","OBS-BUSD":"0x02dd3092545253f5b80a7c8c1078248fc0d0d906","YFO-OBS":"0x4cd2be67c3e62c2a23e8468a2289f0f25b38aba0","OBS-YFO":"0x4cd2be67c3e62c2a23e8468a2289f0f25b38aba0","BTCB-USDT":"0x03fc20BdaFDAC6b2aE8f7F5f885f0819C2b968f0","USDT-BTCB":"0x03fc20BdaFDAC6b2aE8f7F5f885f0819C2b968f0","BTC-USDT":"0x03fc20BdaFDAC6b2aE8f7F5f885f0819C2b968f0","USDT-BTC":"0x03fc20BdaFDAC6b2aE8f7F5f885f0819C2b968f0","ETH-USDT":"0xe7cc44de50b54906a9c1c48240650be2766481fc","USDT-ETH":"0xe7cc44de50b54906a9c1c48240650be2766481fc","BUSD-USDT":"0xe9e7cea3dedca5984780bafc599bd69add087d56","USDT-BUSD":"0xe9e7cea3dedca5984780bafc599bd69add087d56","BNB-USDT":"0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE","USDT-BNB":"0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE"}')
    }, cf49: function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".li_cover[data-v-536815a6]{overflow-y:auto}.li_cover li[data-v-536815a6]{text-align:left;margin:10px 0}.li_cover li a[data-v-536815a6]{display:flex;justify-content:flex-start;align-items:center;padding:12px 20px;border-radius:25px;text-decoration:none;color:var(--grey);font-size:16px;font-weight:600}.li_cover li a img[data-v-536815a6]{height:20px;margin-right:20px}.li_cover li a[data-v-536815a6]:focus,.li_cover li a[data-v-536815a6]:hover{transition:all .3s;transform:translateY(-1px)}.li_cover[data-v-536815a6]::-webkit-scrollbar{width:8px;height:12px;background-color:#fff}.li_cover[data-v-536815a6]::-webkit-scrollbar-thumb{display:block;min-height:12px;min-width:8px;border-radius:6px;background-color:#d9d9d9}.li_cover[data-v-536815a6]::-webkit-scrollbar-thumb:hover{display:block;min-height:12px;min-width:8px;border-radius:6px;background-color:#9f9f9f}", ""]), e.exports = t
    }, d028: function (e) {
        e.exports = JSON.parse('{"OBC":{"address":"0xbf6f7d817d029CCd7928e4CEF3a9729e114C991b","decimals":18},"OBS":{"address":"0x095956B142431Eb9Cf88B99F392540B91aCbF4ad","decimals":18},"OBB":{"address":"0x4Ce3e25A36Ba370201729Ef775367db756128270","decimals":18},"BNB":{"address":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c","decimals":18},"WBNB":{"address":"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c","decimals":18},"YFO":{"address":"0xAc0C8dA4A4748d8d821A0973d00b157aA78C473D","decimals":18},"BUSD":{"address":"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","decimals":18},"USDC":{"address":"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d","decimals":18},"USDT":{"address":"0x55d398326f99059fF775485246999027B3197955","decimals":18},"BTCB":{"address":"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c","decimals":18},"ETH":{"address":"0x2170Ed0880ac9A755fd29B2688956BD959F933F8","decimals":18}}')
    }, d251: function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".loading[data-v-2154d2b7]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center;z-index:9999}#preloader[data-v-2154d2b7]{width:100px;position:relative}#preloader span[data-v-2154d2b7]{position:absolute;width:20px;height:20px;background:#3498db;opacity:.5;border-radius:20px;-webkit-animation:preloader-data-v-2154d2b7 1s ease-in-out infinite;animation:preloader-data-v-2154d2b7 1s ease-in-out infinite}#preloader span[data-v-2154d2b7]:nth-child(2){left:20px;-webkit-animation-delay:.2s;animation-delay:.2s}#preloader span[data-v-2154d2b7]:nth-child(3){left:40px;-webkit-animation-delay:.4s;animation-delay:.4s}#preloader span[data-v-2154d2b7]:nth-child(4){left:60px;-webkit-animation-delay:.6s;animation-delay:.6s}#preloader span[data-v-2154d2b7]:nth-child(5){left:80px;-webkit-animation-delay:.8s;animation-delay:.8s}@-webkit-keyframes preloader-data-v-2154d2b7{0%{opacity:.3;transform:translateY(0);box-shadow:0 0 3px rgba(0,0,0,.1)}50%{opacity:1;transform:translateY(-10px);background:#f1c40f;box-shadow:0 20px 3px rgba(0,0,0,.05)}to{opacity:.3;transform:translateY(0);box-shadow:0 0 3px rgba(0,0,0,.1)}}@keyframes preloader-data-v-2154d2b7{0%{opacity:.3;transform:translateY(0);box-shadow:0 0 3px rgba(0,0,0,.1)}50%{opacity:1;transform:translateY(-10px);background:#f1c40f;box-shadow:0 20px 3px rgba(0,0,0,.05)}to{opacity:.3;transform:translateY(0);box-shadow:0 0 3px rgba(0,0,0,.1)}}", ""]), e.exports = t
    }, d284: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAYAAABFqxrgAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5QMcCAoviB82DQAACEFJREFUeNrtm22QlWUdxn/XfXYXkXdhWfaEovaCDsVokzMKFNnoaGHG8jKaTVuDTgokfmiYacxKstQiPpQ54qR8oJk+RLI7piXpqMhZoSLBNcLoRQsFdtAQESF2z3P14XmWzrZ7znnOvnTW5NqZnfPhOef+X7/n/9zP/b9f4JRO6ZQSqRqNLn58El2nBxRqkY0lHHVS83bEhstf+/+DsLCtERt8skFhQFGg7vwx5F9+M2TOHhud2H0EhwgBTq4WIMFDs/e/8yAsbJuCLUDkuyBT49MN9cC5QlOx32MxVmgkUAecMD4m8ybSq8avAH8THMx36e1MDYCRzEOzDwxvCE1tDSgKRA6EEI0HfQj8ceDDwAcNkxLjIwCwcXdu6GQo/zI+JngN+APwHOhp8AtRFN4IinCIaJndMbwgLN7WQL4zEI08Qjg2ZhowD9EEuhAz0QUNWaUbNSAXfI6jfB28A9MCPBqNPPL3cGwMmdqIDRcPHMaAITTlskR5kQlRg0WzzHXADEu1g5lmMRx3ArssfiqzPh+FjpAxLXP2VQfCglwWY6yQCY4uw3zF6FKJmkH03jcQ0yX8FGJNpPCEHOWF2NhPGP2CsCCXjYPBDaClwI2CKUNtvhcMOADcD75PqAPoF4iKIXQDAD4AXm34lNCQ3/3iINwl+CVoJbCnPyAqgrAolyWKP14I3AtcUi3zfWgrsBzYEYCfVwAiNYS4DwCZmYifADOr7boPtWM+b9Eu0mdESPvr8Rud6Yh78LAEAPENukcw3SfHqOWVKhOSN0ED8IDQVdX2Wp6FHwFuEOpIkw1lM2HBM1mAWtBy4MpqG0ypK5N4a5P4BwbBtQZ8hfBNuHpvgYpk1QjfBL4ijn8AEJq2TIE8UzErsepVlcK7ckmAVY9ZSZ6pTVtKD2FKQjAOQDPSrOrMPAyEBCDNApoTH5VDWNg2hUCYJnMtDP1QuBL55L+yqpG5NhCmLWwrng1FIUgW4mrgvGqb7hUbHEf8xfgfmHyZy89DXC25aC4XhRBFmXHAfEu11TbdQ+ZlYAX4E5jLje+wfbjo5XH88xM/6SHMz00BuAA03AZFLyFWHO7kx8BexJ6I6DvAz8AlHhDNBC5IfKWDEA8OPReYMIz6w78CNwO/GFcLG+fsp2XOfoJCF+L5YgSS+CeA58a+UkIICqcZLqJKs9F96M8JgEfhPzXBglwWSTWCGSodqgwXBYXTUkNIhsjTKxh+D6X2JAB+1RNAI4Aw14AWFbvLiSGI64mG1BAEZwomVNs98CLwZWBTbwCRwNdgfw9TXy5nFT/aZ6aGgJUFjXZ1H4Y/Es8PPF4IoCnXCHaA8FlgDVK2HIDYh0bHvtJCwPVAXRUZ7EoAPNkDQFsWi2DpOuD7oPLVESc7trrEV3kIm53FYhTV6xRfAJYBT/cAkMsSiSDzOWA1VmOFvyuLUZvdm1uRPkEj+xO9STuaLarnEwDPFAJYsKWRKJAJEc2g1bKm9OcWFfOVemYpXSN0CU708+s7EgC5HgByWRRFmUzezcB3ZRoGO0f7LIziZbD0LdnkJTYDG4BOYBFwGekLr98TvwW29QIgMs6EL2DuEkweCADjY3095b0yYa72IXOUCjJb4tdAs+212A8avgisS4CU0++IM6AXAESNzRLQ3ZYm999+zEDm6Fz1nm4r8jjoIHAiHQUDfhL71UwQzmQQdAC3Ag+UAfGbBMBv+wKAWQLcaVM/kCcg8XEi8ZUSgrwP/JbS93IZMhkiQ8usV7rNvA7cZrjfffcTWxMA23sBgBrMDcCdmEkDndGKffit2FdKCIa9hkNpKRvmOZ8/u8BEt6l/Al8X3AMcL/haWwLguT4A1AJfwnwbM3GwOkHDIcPe1BCEOgS70gSg+G+2pDXAWX2AeANYZbza+Chx778M2FkEwI3AHWjwABBvB9jVvV6ZDkLIHydO07QPRADmAz8AphWCSJbNjxjfBdxivBxo7wmgEZs6YCnwLeCMQbLfLQPbE1/pIGAZlCNOobQKwGeAHwLnFILYOGcfQscOjD7wYHDoBUByneSlNqsY5MItif8QKBf7Sgkh2Re0E9xeYZsCPp2AOLcQRMuc/TQcbSAf8j2KIcl1tpYBtwPjBxNAAYp2YGex/U5FR4wh5A8DrcnukEpBzCPuDN9XCKJ19gFak0Caco0Yj7B1M3C7rfFDsa6RxN+a+KkMgi1jHiau6StuG/gk8CPg/YUgCj6PEFph8w3QuCFc2HkR87Bd/IVfsun5WxqCFL4qtIr+rT0YeIJ4ZuhPyco2RiPAtwBfExo7ZPahy/ibdnR360c7omIXlSyghCJgPfaz/SwPRVxDrAXmApMx0wS3gm4bUgAG7GeB9YmPkkGWVNPWRpTnKmCdB7YeedB4PzBK6CziMcHQ+DdIPggscYZHWi4pvSO2bCmtTgHaZLQWuWsAsdULzRR671ACiIN2l9Fa0KY4/tIqC2Hjx/YBdILvBR4b0uAHT48l8XYm8ZdU6uRuyjUidD6wznDxcFmQKFSyA3YbsMR4d8ucdBvDU88sJZMsuw3LBO3DY0miF4B2x3XJ7komhVJD6B7lKZ4GaxZsrrbxQiXxNCfxVbSXsaI5xu4fdjwhej241R5QZzlgxe27Fbg+iWtoN3N2a3EuSz4OoAENg2299n2SOjLAhv/Ftt5uves3eBfqXb3Vv1AlD33AxEInqQ999LxoeB/6KFSR4z+XGj4CzADOSHv8h3h+cpdgO+ipYX/8579VeBAsyoMyHkV8EOycCg6CvQQcdF5HQwbeMQfB+tKCXGOPArSSI4HdAW5MOfIbthD60nA7HHpKp3RKJ/VvJf60y8IAIaQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDMtMjhUMDg6MTA6NDcrMDA6MDDFrbfKAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAzLTI4VDA4OjEwOjQ3KzAwOjAwtPAPdgAAAABJRU5ErkJggg=="
    }, d2ff: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAHCAYAAAA4R3wZAAAAdUlEQVQoU5WQsQ2CYBBG39dZULMGcQxxDRoqN7GxIDqAJm5kIAzgEh85wp/YcV793r3cicTYPgGzpE/BlfCw/QJaoJf0DEe2B+Cws+AINBtzBy4hOlH9AvUPdw3xBlR/FB9rMVErN56BTtJ7vTEpxlcnSWPhF5GZI5uNMiJKAAAAAElFTkSuQmCC"
    }, d677: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABPCAYAAAB8kULjAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAeQSURBVHgB7ZyJbdtIFIaflAOBnWBlwLmAAKErWLkC0xXEqSBKBXEqiFxBvBXEqSBOBZIrsLYCa4EAuQyYiySG4XP/nxkKFCWKnEMUKe8HCLol8ufMm/fevJmazJCDg4PGwsKCf/PmzacXFxdNvOSpm8TuQ2q1WnB1ddXHwwC3Pp73z8/P9/j48ePHfZkRNSmQSDCc/BqebkhCJAv6uHUh8Mfj4+PuyspKIAVRiIDfv3/3cfcGtyZOsiHTZ4diPnz4cFemzNQEVK1ts16vvypItHH08f/ts7OzvWl1c+cClkS4JH3Y2PcQsS2OcSrgt2/fWrBvb0skXJKwRS4vL78XRzgR8PPnzx5G0ncQzpdq0EWLfOmiW9fFki9fvmxCvP0KiUf8Gzdu7PPYxRLjFkhbt7i42MbDV1Jtth88ePBaDDESkF0WV/ADHjZlPuAgs27SpbUFVOJ1xJ0TXBaMRNQScI7Fi9AWMbeA10C8CC0Rcwl4jcSLyC1iLjfmmolHwkGSnkbWBzMFRHSxLddLvIgm3LQ3WR+a2IXpaCL0eSs5QRjXjv788vKyieeelAOmt3aZQ+QTOP10oHOFmziP148ePdpOez9VQBWe7WvEtV04pOvxF9B66ScyqeDPQEyKtoP/3b1///5e/A2k194qEXP9Duzhapo9TO3CKrbVSQqM5N4gaA+3l7iK62ydKqNcBNu/fv1aYYSRFE/xUfLTgD18l/bm2BbIrAruUr809odqNT/lYAeo0Zx2pZV4iyn6HgVm6j7qaiDA59kCPD7BheAF9dia8Vm+loyEciUJjo6OGsgRHokGMGWtcVmcNAEPRHPgwBVfyptKZ4YaAjzDQXV//PixZ5qC5ygJ/oQYtLkCW/VX3u8anGPAVp081hEBv3792sYVzhx9kj+O7rIkFQIXsaObQcLn25gm2Iq/NmQD2cUg3gvRp7BJnFkCbTaTvuGQgLA3vlxPny8vnK4YSt8lR2Hdrhvh5fHaS4bR8bIVxp8PBDw8PLSap71165YnFQL2zDSX2YCp86MnAwExij0TCyCg1feLRM1TG6NcsZBQQPpFMuqbaRHz3UoPWh8HPZuBrxmZrFBAOJ++2MF5BWdThdOGERJ63JaY07h37x7LU34LaNN9GT3AwbQ5mJnABAF6TVcMgWY+7yMb6IshjHGLLOZxyfn5+Usxh4Ou1FR8eiAGsPXBM1+RCmMSkUQwfK0j6+KJIWh921J9jM0P7SC78JoYcnp6uicVBxmkrhiOyLCDXl2lhUwInjx50pM5gKk0MaNZt8gUz4V4CtNz8diFjWJC5YzOBRaZcvMuzMyxzA//iiHGLfB/Qjzr+sA54Q8xxFjAEpfxagNzZHwuxgKWaNLcBVYC9sUMT+YH0+RqYGMDGxVM44/FIpjo120SoVFOrMowmSLmvSmo25RbRDmxKqNmIk3pswvbhGQtqTjogTZzOb06+EfMGZqhqhrsvuiBG2IIkxB1NOGuWBCfoaoatsf+8+fPv8PaGJNiojiqnrgrFcImE69g6d5q6MawCFEsYP1c1Vwa1j+KHeHYEfmBOgWH4/AWFhZsD6gwWIFmu7YPY0fY6EIBcTWoplV6Cq14A6ag9CIalu8lCZaXl8NGFwq4tLQU2MyRxmhBxI5yTksFTQxXHDgQjwxMXjyUy13dmQGXknYODw9N6gynAmthFhcX98XRylJchJ3B4/gbuEKsG25M+OIuU/lM/ygbkjVwOF8hrkO02YXLtczJufBa4g/5Z+2U7w4tY1DLIF5M+HycvhSwLQm76d27d7kzyDNc5NaUcpateB3QkICqep2+0dg/hr+3ldy4QRWMfxC9nFpPJTF63DzH1IdULWwtVrFvmpbKxbhKjKF0lhpMUqsN6LljFPsQHyQ4MY3vPBc92Eo2kIxoiXk+MvQeVCjWkmIWf+8kXxip0mcrPD093c/IOLMiazXeFTVX/0S0bMviVA/oyJRJqwMaSaiyFeaonRtxnNEatnRSY/ysi5pC1QO6MmVi6wCHGJuRhk3ayTooOs7ozoNMhhJ+Pa+ItuFjHPyns99K+/20i52a0le1cxNHS26yE4+BucQqr4hcpSSOwOBmG4pOgg0jdVePVAGVGHm68qvk92gruGZNteL4RejL7xWUfhQKuWCa299Bg/ak35+4XpjkGBxGlrnOAgQBV+KezD1lMmflODjI5LS/72IHoLKhBrnMDXkyBeTggO74fJJdgz178+nTpyL8sELgudKW5/lsrnnhHIND4/bt2/vz0BIj8ZxuexLBCAStrZPlZOO2y5Hx5OSkF3e2OWLfuXOngd9out5d0oUN1BWPaAlIcoqYCeyL9n9PwlZAE/GIdmmHjq9XFXAuPRPxiFFtTOTrzckyhx2k2NZNfUmrAkvEoa+Vl66d30PS4qnMFkYYm9xVxCY/aV2hyjVn3FfFZWxbANzdY1Vnk4o0nJT4svmjNT5n+FZy28iWxhTauqvwz2mNNLM4yja2SyYkt5Fvq814nM7PTKXIHK1xC4Z5dVKLDILAeGlBCuPs2EA4bldS1VWlHDDWOOlOX40zf4hYnG9cyyiIv61uHSRBKl/8eS34D7jlB7DPBVbxAAAAAElFTkSuQmCC"
    }, d8f1: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqCAYAAADBNhlmAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKKSURBVHgB7ZnxdZswEMbPfR2AEdig3iCM4A3KBvEG0AnsTkA2aDdwMoHbCUgnIBt8lYJI5ONOSOCQ/JHfe/cM1vHpENLpjIk+WcaGFgBgbz5ujG2NZc4sT8Yenf3dbDY1zWRpgIjxMwHO7ucLzcTEVryFL2d2gIbvCb4FrYkZkRxjSq99J7RvaQ1sR8Za1nkr+I187I3RNTBCZ2ONnTvGMmeF+w6h0fM0dopvo+ieYoM7II06oFUjjcNUcCXSqGn6hlOD3GtCduK3kSLWr6BI0N94rHZnLJNEGsHx7D4710GDBTkN/by8E3Q71vdBGj3OnlbC9iX0n/kODWtsaWUwngJ1qLGhlREGqRsatpDZRQrbXFYZO3nX2jlWUiSQs4edl/ngIK1geTVdCk+t/BYRuwdidh3XGV9NZaKwFmRGaaOXa848qf5OFNaoAzq/mK8+/9Hvixd3H/A9M1+b3+x8zN2xzymg0zLfcNXDnBHrB++xuEBn6fD2JQUr58k7zuhKXAQoDO8f/VK6Z+cH93htcFWCziOLoSAtQMMtO/9HOg/svDRm52znjn1+kg4PvhC9MFHGC/4ZItMMBcB4H35N0Cy4NkU4cN2FBiYStbvRTr0OcoK2lBQJ+pzop50T+pwatVig59Tt4MADfI9igefO5yc4LBI+iQtanxt2fv9yBCGxYt2C9VboP+dOR+bgl+ND+d8gsgxTAimcBtednmKQV5NGi7RFVCDtB1muCe2RRhURXIU0yinBY6JgdcXgjhQD+jzWYPyK4k4R3gkaWm5rFN0zXQNE7jqQy/hV33Cpo4iUMv4Ng6wRz+o7k/TzIMTsR/vhX6J/pWX8MPbNWO7M/xvCmi1GH2gB/wEZqr1zstg9GwAAAABJRU5ErkJggg=="
    }, e3f6: function (e) {
        e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"}]')
    }, ecd3: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ/SURBVHgBvVlLTuNAEK2YgARsspylOQGR+Gzj3CA5ARmJ74pwgiQnGLNAfCWS1SyZWc5qzB4YcwJ8g8mGj/hlXiXtqFP4TzJPCm27q8vP1VVd1U2OMmJ7e9vq9XqL+Fm5XK6ItoC2wH247uLaQ+vh1n1/f788OztzKANyaYTr9Xrh6empjhfu+mRSwMPPwbjW0dGRl3RQIoJM7PHxsYnLXRoP2kmJTsUJbG5u1l9eXi6g0KLxoYhfZXV1tXt1dXUbJRhpwa2tLZtCrKb87AdaB7/b+fl5z7btLvexxe/v700mYhhGCf2VMJdAn31ycrJHaQiqKb3ApRXQ7cEHbRDq+ISSYGNjowayDVyaAd3u7OxsOUhfIEFY7g8NpmEIZbHm8fHxPn0CiP4GdDUDuhzoLlMcwZBp9UCunCb6YkiaIPmbhDWDpjsnBtYgdC70uSBXjSOHD+vp97BGLgFJdiM5U3sgafv3hhjQEHq8JOSygHWybhqsjzoaHAMkCSpypi45zmmNIFlm/9beWXh4eGiMEGTroanpg9mRJ0lOJ4mmpT8Dybpvxb6fwH/OBUEPPrQQplTlYY7GYpqUF+WX4HBH2gyygeCLLX+KLV04ZBnwyTVVBFoZ8nEUbHFf5z8GW4NGmXfBvEPB5GoBgTQWYKHuSF9cX1+3DGSFki7I6StMCRSs0YTAWUS+e2pqajHPtZwg4UTosfQbjF0YZyBx3Yh0WNO4WOyDJo0SDK0u9CmYBKanp139no2Xx0tNXAwfclUSpgByrMDy7zH2DtFHCeDAMu3Dw8NOlNDMzIyHIoU0/QVDRmJUhcJFJmWDhelro7ZsRgnJdzM3g1IA/sYle5MyAmMbHJlpxhjSr/Q8GASQbMEaX3HpUAYgMkOXKflu5sZRzASHHaoSdikCp6enbTRtSgBVhNxpLy2GyT4/P5vikWdIMiC8SBNEVPbBzEjyXp4GU1XRFFhoIqNN1n5RgMXkIydCtiQeuRzFt0KoEueHnwH0tyP6KuLeMTgyZQ7EWjSRlKYqlNA8L6bfg69f9pcZLKKBlcSYSPHHO/Avi8unCDkZ3Q7/6acQtc38KwaM7A3ikHZPokOVcCME/Tzft6BawSWZhqq0J4qQvVDbL0KGmQT1WEv6IhemkySpbT91eHpKHRJUVpQ+0t8aToKktu009edyLxS0cf9GH4Pkv2zcARu+O7Jx/3C6dX19/Wt5edkSgzn860tLSzn0O/QJ8GkZyH3HB38RXS7IVaV8PkgJ/LGKqOYvHEk9XI3AwmtYlppxtZ0OtUrw2sozYwaIOPzOoLFxx29B092Hf/wGss7r62vm4zcKmNbEBBkxx2aZkfS0LPaE9ebmxl1ZWflJAz8s0nhgz83NVQ8ODi7jBFMdomuLqkUpLarWWCa2n+bgMxVBHTs7O6W3tzcLl3z8YarNl/5viC5aV21jXU78lAH/AJh3gy/ryVaCAAAAAElFTkSuQmCC"
    }, ef4d: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAStSURBVHgBvVk5U9tAFF4fMBxFSEcpOjo8wzE0DKJLOvMLcGY4K5xfIFNlUiEKhnMmUKUklFQRHQWH+AXRP4hTcIQz35N3nfV65ZVsJd+MLO397du3b99bZ1ibWF5etl9fX0fw2JlMpoD3AN4DVIbvKr4DvAMk/ZeXl9P9/X2PtYFMksrlcnng/v6+jAFXBZkECPB4aLe2vb0dxG0UiyARu7u7q+BzlaWDg7hEc6YKi4uL5cfHxyN0aLP0UMBTnJiYqJ6fn1+3qthSgktLSy6LkBrXs294e3iu+/v7A9d1q1RGEr+5ubGISDabnUZ5MUolUObu7u5+ZEkI8iU9wqetKQ6ggy4IHQpCcbCwsFACWQeflqbY7+3tndH1pyUIyV2x2jLUwSVW2dnZ2WAdALvfQV8VTZGHvmeYiWDEsgYgN5Nk9xlIWiD5nSnS1C13TmlYwuuT0p8Pcu/TIkfAxqiOj48fs5oKDYp8jDM5Ojr66+Li4qyeJ5HTzcooOWEb0XZOauuz2sRamhLdmKRKfX19Q0Ifs1JBkwKbyJHEb29vf2jakv6WsJmuyExFtae+aQwiJY05gD4dkc6JmeB1IDcmRYbSHkd1zgfeQoc9UXWoDM872Lsgyt7RcmNZf1M9qd3k1NTUxtnZ2X2Wk3GUdgGUdS1qYD4hh8XE8/OzS6oQVY6xaGMGch6kGG5UscS2XBhhBuRyRzW81Aa27C09+G7YiXzZTMekq6RD1chzr8SSBqpiRofMAG4XBcky2sj20UW/b+SJom4Jr8hVwcQOMYmK6JPe8/PzdhaKPC1XpOOLGQDd/ABCb1F3CMkida7W6enpUQ261apP2rXq2LlcbiRPvpycSWcriwm+wwOWEshvxHFYYn+52KSDllyJDn6WArBcJaVf39Smq6uroQ4JL0/6h496JnklrANIhttRBjMS7O7uDuCk1NPkpefV3ZjEQ5FBRhtLtI4BmswJbSgs3ZqpDxobvkA9TdyyLCXoTI80UKXdszwrHzOEVgbVAEvN4JIrxXXR1LHD9phdA0HuCXcMsoF06G9tbRltqsDDw4OlZAV5VvM86gUgPMLzOkKrozIK0OGCkhUS9PAURQ4PjmLPWgDLmCiE1QFSn1ayfFria6VSsQM97Ag0tpL2wlnDdfqp7MBy0tgD5uFVTieVKJkpEPoiZQXoYyg0M9hpWk/if0Lj8nn0ExLUHeytPOG0AelVWLM3H26ykCA/PVQpOtwx/dfkLI30DoRhr+sJbQyKLxRdTDXcjCDXMlCrh53k/6uxAUBkbYSIJxQ7sBTBydHtxbCcjzzaoKci3RAXUzw6NjZGpCalbIpbixTHpkVSktywUkSB+2c5o+l2CyRPQNJmjWIn0mVIOINyj3UA2nwg9xUrNagU+ZDcrFo/r+sELvws3CaaYcPRg04d2Ls5mKVKkjOWX0ZRYE+WwdJU8WhMXVvT9ds6i7CJ4voNZL2np6e2r98AF5JLdv0mw3Bt1jbi3pYZb1gvLy99ftFDEiiwdODCFZvd3Nw8NVVMel4Ko2qzhBLljjER20gSVrTtIq2srEzjSsPGZwFLZfHgS/4bokqRHA9j/b29PaO0dPgDYCKkXN/0IREAAAAASUVORK5CYII="
    }, f0fb: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAmCAYAAAC76qlaAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOgSURBVHgBzVjLUeNAEG0Zqvic2AhWRLAmArQRQAYrH/id0EaAiABxAmxXYSLAjgARgbURWBngk+2L7X0tz7iEVrKlmfHuviqVpdGH1z1vXvdgkSY8zzuYTCbefD4/xqUjhqNarRY8PDy80IZgkQYuLy9tEH7DqV3wSGxZ1vfHx8eYDKNGGlhDmpEExrNChqFMHNl2aTVpCXs0Gl2TYSgTRyazZDp7e3tfII1D3PukbYw5ZBg6UqmnL0DuNgiCIet5f3/fyzzrkGFskyHs7u4O5TlcZq2mdd1I2VUuLi7e6HMmO5x1DgCaDnD+Q94AuajZbB7JaxNupCwVfDjMDLkgMxiPxx9p0gJB+sKEGykTR2bv8ROXeDRGtpdTb8qNlInzQuTppNXkY/HMEqbcSKsAsQafnp4OZ7NZA5dR6lYIEj4IHeXo1IgbGXGVVqvVwU+HFFDVjSSM2WEFhJTKJBbzHXQv3cjHDCwfZDcq+sg2LxZM9R1eKIo2hrf6pjo9diMQclJD7EYuAqA0aYGg6Ds1vHSzgjTDnk6nARmCqhtlYaGQzKkkECQ7CU9fhGB67XY7JAWYKECViOf9AR0ZnZ2duXif7VE6DcsohLvcs9OsevcP4rC3RGgVA9rYhqEIplyFp36AYPPuJdLC/R402yVDKF2AeCbgPtwonVI1z2YZuJiRVwQ2YH2TAVSqnCg0EQLo4WhwiabqRcdG8H1ou06aUJaK0HMDGYy5vJd9j60XR79AVhIsrXhra6tbtPC1NY4AbvFzW3T/6urqGFl2cepSedQRXB3vnSJAP8+5tJqsMsAffBfS8kkNLK/O+fm5nx7cOHEJMTMhKQKB34D8nbxWlopm4ZJI2uLsIC9eUZjc9DjIe5BexLL5axkvgJ03KNyrkd2EMGTf9K+JF4KzDm2/ZsflWvkviUPLHqTSz3atbLuYCe4uy2scmn7mbZbsR2RPYxKia3ymnC0bk0bLsLTdKouTG34Hi8Pf2dnpreveqkD+cwjSuM7bG2RJM1Tb2hhHiIXyotqTM5BhB6ROeAdUQHiI6unlVU/dfjz5OC38mbvAX6JUD9MtrsjoATLKFfErhup47nTNzivE/UZRq2xhIXys+YDc+TBBmzYMkQhv1baNgcVb+0kr9oByuthThRXFtBkkzRp2P4frSDOUnAHyOqFFX+6QxiyImexyL4Ki817lXW1LE701l+hvtNg0HIjDzjwa42AZRCCa7Iqqkk3jN3BNEY9SU6t2AAAAAElFTkSuQmCC"
    }, f121: function (e, t, n) {
        e.exports = {
            1: {
                abi: n("fe29"),
                cTokenAbi: n("a2ee"),
                cEtherAbi: n("73d7"),
                tokens: n("d028"),
                lpTokens: n("ce62"),
                pancakePair: n("e3f6"),
                vaultPair: n("b26b").vaultPair,
                lendingPair: n("5aeb").lendingPair,
                earnPair: n("2bc7").earnPair,
                commonContract: n("89d1")
            },
            56: {
                abi: n("9c46"),
                cTokenAbi: n("7ab5"),
                cEtherAbi: n("0aaa"),
                tokens: n("652a"),
                lpTokens: n("84a8"),
                pancakePair: n("5c44"),
                vaultPair: n("7898").vaultPair,
                lendingPair: n("7234").lendingPair,
                earnPair: n("865a").earnPair,
                commonContract: n("a9cf")
            }
        }
    }, fb5e: function (e, t, n) {
        var a = {
            "./dashboard.png": "9b17",
            "./dashboard_1.png": "3ca9",
            "./earn.png": "f0fb",
            "./earn_1.png": "5765",
            "./faqs.png": "ef4d",
            "./faqs_1.png": "4a47",
            "./governance.png": "bb5d",
            "./governance_1.png": "c7b6",
            "./lending.png": "ecd3",
            "./lending_1.png": "bef1",
            "./settings.png": "670d",
            "./settings_1.png": "d8f1",
            "./statistics.png": "332e",
            "./statistics_1.png": "97df",
            "./vaults.png": "85c7",
            "./vaults_1.png": "2da4",
            "./wiki.png": "5e53",
            "./wiki_1.png": "3998"
        };

        function i(e) {
            var t = s(e);
            return n(t)
        }

        function s(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return a[e]
        }

        i.keys = function () {
            return Object.keys(a)
        }, i.resolve = s, e.exports = i, i.id = "fb5e"
    }, fe12: function (e, t, n) {
        var a = n("1797");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("72a2a454", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, fe29: function (e) {
        e.exports = JSON.parse('{"pancakePairAbi":[{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}],"erc20Abi":[{"name":"Approval","type":"event","anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}]},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"}],"poolAbi":[{"inputs":[{"internalType":"address","name":"CP_","type":"address"},{"internalType":"address","name":"stakeToken_","type":"address"},{"internalType":"uint256","name":"starttime_","type":"uint256"},{"internalType":"uint256","name":"initreward_","type":"uint256"},{"internalType":"uint256","name":"duration_","type":"uint256"},{"internalType":"uint256","name":"lockTime_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"CP","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"duration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initreward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"invite","outputs":[{"internalType":"contract Invite","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inviteAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastStakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"starttime_","type":"uint256"}],"name":"resetStarttime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_superior","type":"address"}],"name":"stakeByInvite","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"starttime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"takeOut","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"takeOutEth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"takeOutToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"duration_","type":"uint256"}],"name":"updateDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"initreward_","type":"uint256"}],"name":"updateInitreward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"invite_","type":"address"}],"name":"updateInvite","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"lockTime_","type":"uint256"}],"name":"updateLockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"initreward_","type":"uint256"},{"internalType":"uint256","name":"duration_","type":"uint256"}],"name":"updateRewardRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],"vaultAbi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"burnAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"want","type":"address"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"address","name":"strat","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"stakedWantTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}],"stratAbi":[{"inputs":[{"internalType":"address","name":"_autoFarmAddress","type":"address"},{"internalType":"address","name":"_AUTOAddress","type":"address"},{"internalType":"bool","name":"_isCAKEStaking","type":"bool"},{"internalType":"bool","name":"_isAutoComp","type":"bool"},{"internalType":"address","name":"_farmContractAddress","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_wantAddress","type":"address"},{"internalType":"address","name":"_token0Address","type":"address"},{"internalType":"address","name":"_token1Address","type":"address"},{"internalType":"address","name":"_earnedAddress","type":"address"},{"internalType":"address","name":"_uniRouterAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"AUTOAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoFarmAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackRateMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackRateUL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controllerFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controllerFeeMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controllerFeeUL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"convertDustToEarned","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earnedAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"earnedToAUTOPath","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"earnedToToken0Path","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"earnedToToken1Path","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"entranceFeeFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"entranceFeeFactorLL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"entranceFeeFactorMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"farm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"farmContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"govAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"inCaseTokensGetStuck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isAutoComp","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isCAKEStaking","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastEarnBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyGov","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_controllerFee","type":"uint256"}],"name":"setControllerFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_entranceFeeFactor","type":"uint256"}],"name":"setEntranceFeeFactor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_govAddress","type":"address"}],"name":"setGov","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_onlyGov","type":"bool"}],"name":"setOnlyGov","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_buyBackRate","type":"uint256"}],"name":"setbuyBackRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token0Address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"token0ToEarnedPath","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1Address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"token1ToEarnedPath","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniRouterAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wantAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wantLockedTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wbnbAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]}')
    }
});
