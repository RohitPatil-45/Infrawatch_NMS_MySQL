/*
 Highcharts JS v10.0.0 (2022-03-07)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (Y, M) {
  "object" === typeof module && module.exports
    ? ((M["default"] = M), (module.exports = Y.document ? M(Y) : M))
    : "function" === typeof define && define.amd
    ? define("highcharts/highcharts", function () {
        return M(Y);
      })
    : (Y.Highcharts && Y.Highcharts.error(16, !0), (Y.Highcharts = M(Y)));
})("undefined" !== typeof window ? window : this, function (Y) {
  function M(a, F, f, G) {
    a.hasOwnProperty(F) ||
      ((a[F] = G.apply(null, f)),
      "function" === typeof CustomEvent &&
        Y.dispatchEvent(
          new CustomEvent("HighchartsModuleLoaded", {
            detail: { path: F, module: a[F] },
          })
        ));
  }
  var f = {};
  M(f, "Core/Globals.js", [], function () {
    var a;
    (function (a) {
      a.SVG_NS = "http://www.w3.org/2000/svg";
      a.product = "Highcharts";
      a.version = "10.0.0";
      a.win = "undefined" !== typeof Y ? Y : {};
      a.doc = a.win.document;
      a.svg =
        a.doc &&
        a.doc.createElementNS &&
        !!a.doc.createElementNS(a.SVG_NS, "svg").createSVGRect;
      a.userAgent = (a.win.navigator && a.win.navigator.userAgent) || "";
      a.isChrome = -1 !== a.userAgent.indexOf("Chrome");
      a.isFirefox = -1 !== a.userAgent.indexOf("Firefox");
      a.isMS = /(edge|msie|trident)/i.test(a.userAgent) && !a.win.opera;
      a.isSafari = !a.isChrome && -1 !== a.userAgent.indexOf("Safari");
      a.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(a.userAgent);
      a.isWebKit = -1 !== a.userAgent.indexOf("AppleWebKit");
      a.deg2rad = (2 * Math.PI) / 360;
      a.hasBidiBug =
        a.isFirefox && 4 > parseInt(a.userAgent.split("Firefox/")[1], 10);
      a.hasTouch = !!a.win.TouchEvent;
      a.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"];
      a.noop = function () {};
      a.supportsPassiveEvents = (function () {
        var f = !1;
        if (!a.isMS) {
          var F = Object.defineProperty({}, "passive", {
            get: function () {
              f = !0;
            },
          });
          a.win.addEventListener &&
            a.win.removeEventListener &&
            (a.win.addEventListener("testPassive", a.noop, F),
            a.win.removeEventListener("testPassive", a.noop, F));
        }
        return f;
      })();
      a.charts = [];
      a.dateFormats = {};
      a.seriesTypes = {};
      a.symbolSizes = {};
      a.chartCount = 0;
    })(a || (a = {}));
    ("");
    return a;
  });
  M(f, "Core/Utilities.js", [f["Core/Globals.js"]], function (a) {
    function f(r, b, c, g) {
      var x = b ? "Highcharts error" : "Highcharts warning";
      32 === r && (r = x + ": Deprecated member");
      var D = p(r),
        q = D
          ? x + " #" + r + ": www.highcharts.com/errors/" + r + "/"
          : r.toString();
      if ("undefined" !== typeof g) {
        var d = "";
        D && (q += "?");
        v(g, function (b, r) {
          d += "\n - " + r + ": " + b;
          D && (q += encodeURI(r) + "=" + encodeURI(b));
        });
        q += d;
      }
      y(
        a,
        "displayError",
        { chart: c, code: r, message: q, params: g },
        function () {
          if (b) throw Error(q);
          k.console && -1 === f.messages.indexOf(q) && console.warn(q);
        }
      );
      f.messages.push(q);
    }
    function C(b, c) {
      var r = {};
      v(b, function (x, g) {
        if (I(b[g], !0) && !b.nodeType && c[g])
          (x = C(b[g], c[g])), Object.keys(x).length && (r[g] = x);
        else if (I(b[g]) || b[g] !== c[g] || (g in b && !(g in c))) r[g] = b[g];
      });
      return r;
    }
    function G(b, c) {
      return parseInt(b, c || 10);
    }
    function u(b) {
      return "string" === typeof b;
    }
    function H(b) {
      b = Object.prototype.toString.call(b);
      return "[object Array]" === b || "[object Array Iterator]" === b;
    }
    function I(b, c) {
      return !!b && "object" === typeof b && (!c || !H(b));
    }
    function B(b) {
      return I(b) && "number" === typeof b.nodeType;
    }
    function z(b) {
      var c = b && b.constructor;
      return !(!I(b, !0) || B(b) || !c || !c.name || "Object" === c.name);
    }
    function p(b) {
      return (
        "number" === typeof b && !isNaN(b) && Infinity > b && -Infinity < b
      );
    }
    function m(b) {
      return "undefined" !== typeof b && null !== b;
    }
    function e(b, c, g) {
      var r = u(c) && !m(g),
        x,
        D = function (c, g) {
          m(c)
            ? b.setAttribute(g, c)
            : r
            ? (x = b.getAttribute(g)) ||
              "class" !== g ||
              (x = b.getAttribute(g + "Name"))
            : b.removeAttribute(g);
        };
      u(c) ? D(g, c) : v(c, D);
      return x;
    }
    function d(b, c) {
      var r;
      b || (b = {});
      for (r in c) b[r] = c[r];
      return b;
    }
    function l() {
      for (var b = arguments, c = b.length, g = 0; g < c; g++) {
        var k = b[g];
        if ("undefined" !== typeof k && null !== k) return k;
      }
    }
    function h(b, c) {
      a.isMS &&
        !a.svg &&
        c &&
        m(c.opacity) &&
        (c.filter = "alpha(opacity=" + 100 * c.opacity + ")");
      d(b.style, c);
    }
    function t(b, c) {
      return 1e14 < b ? b : parseFloat(b.toPrecision(c || 14));
    }
    function n(b, c, g) {
      var r = a.getStyle || n;
      if ("width" === c)
        return (
          (c = Math.min(b.offsetWidth, b.scrollWidth)),
          (g = b.getBoundingClientRect && b.getBoundingClientRect().width),
          g < c && g >= c - 1 && (c = Math.floor(g)),
          Math.max(
            0,
            c -
              (r(b, "padding-left", !0) || 0) -
              (r(b, "padding-right", !0) || 0)
          )
        );
      if ("height" === c)
        return Math.max(
          0,
          Math.min(b.offsetHeight, b.scrollHeight) -
            (r(b, "padding-top", !0) || 0) -
            (r(b, "padding-bottom", !0) || 0)
        );
      k.getComputedStyle || f(27, !0);
      if ((b = k.getComputedStyle(b, void 0))) {
        var x = b.getPropertyValue(c);
        l(g, "opacity" !== c) && (x = G(x));
      }
      return x;
    }
    function v(b, c, g) {
      for (var r in b)
        Object.hasOwnProperty.call(b, r) && c.call(g || b[r], b[r], r, b);
    }
    function w(b, c, g) {
      function r(c, r) {
        var L = b.removeEventListener || a.removeEventListenerPolyfill;
        L && L.call(b, c, r, !1);
      }
      function x(g) {
        var x;
        if (b.nodeName) {
          if (c) {
            var L = {};
            L[c] = !0;
          } else L = g;
          v(L, function (b, c) {
            if (g[c]) for (x = g[c].length; x--; ) r(c, g[c][x].fn);
          });
        }
      }
      var k = ("function" === typeof b && b.prototype) || b;
      if (Object.hasOwnProperty.call(k, "hcEvents")) {
        var D = k.hcEvents;
        c
          ? ((k = D[c] || []),
            g
              ? ((D[c] = k.filter(function (b) {
                  return g !== b.fn;
                })),
                r(c, g))
              : (x(D), (D[c] = [])))
          : (x(D), delete k.hcEvents);
      }
    }
    function y(b, c, g, k) {
      g = g || {};
      if (q.createEvent && (b.dispatchEvent || (b.fireEvent && b !== a))) {
        var r = q.createEvent("Events");
        r.initEvent(c, !0, !0);
        g = d(r, g);
        b.dispatchEvent ? b.dispatchEvent(g) : b.fireEvent(c, g);
      } else if (b.hcEvents) {
        g.target ||
          d(g, {
            preventDefault: function () {
              g.defaultPrevented = !0;
            },
            target: b,
            type: c,
          });
        r = [];
        for (var x = b, D = !1; x.hcEvents; )
          Object.hasOwnProperty.call(x, "hcEvents") &&
            x.hcEvents[c] &&
            (r.length && (D = !0), r.unshift.apply(r, x.hcEvents[c])),
            (x = Object.getPrototypeOf(x));
        D &&
          r.sort(function (b, c) {
            return b.order - c.order;
          });
        r.forEach(function (c) {
          !1 === c.fn.call(b, g) && g.preventDefault();
        });
      }
      k && !g.defaultPrevented && k.call(b, g);
    }
    var A = a.charts,
      q = a.doc,
      k = a.win;
    (f || (f = {})).messages = [];
    Math.easeInOutSine = function (b) {
      return -0.5 * (Math.cos(Math.PI * b) - 1);
    };
    var c = Array.prototype.find
      ? function (b, c) {
          return b.find(c);
        }
      : function (b, c) {
          var r,
            g = b.length;
          for (r = 0; r < g; r++) if (c(b[r], r)) return b[r];
        };
    v(
      {
        map: "map",
        each: "forEach",
        grep: "filter",
        reduce: "reduce",
        some: "some",
      },
      function (b, c) {
        a[c] = function (r) {
          var g;
          f(
            32,
            !1,
            void 0,
            ((g = {}), (g["Highcharts." + c] = "use Array." + b), g)
          );
          return Array.prototype[b].apply(r, [].slice.call(arguments, 1));
        };
      }
    );
    var g,
      b = (function () {
        var b = Math.random().toString(36).substring(2, 9) + "-",
          c = 0;
        return function () {
          return "highcharts-" + (g ? "" : b) + c++;
        };
      })();
    k.jQuery &&
      (k.jQuery.fn.highcharts = function () {
        var b = [].slice.call(arguments);
        if (this[0])
          return b[0]
            ? (new a[u(b[0]) ? b.shift() : "Chart"](this[0], b[0], b[1]), this)
            : A[e(this[0], "data-highcharts-chart")];
      });
    c = {
      addEvent: function (b, c, g, k) {
        void 0 === k && (k = {});
        var r = ("function" === typeof b && b.prototype) || b;
        Object.hasOwnProperty.call(r, "hcEvents") || (r.hcEvents = {});
        r = r.hcEvents;
        a.Point &&
          b instanceof a.Point &&
          b.series &&
          b.series.chart &&
          (b.series.chart.runTrackerClick = !0);
        var x = b.addEventListener || a.addEventListenerPolyfill;
        x &&
          x.call(
            b,
            c,
            g,
            a.supportsPassiveEvents
              ? {
                  passive:
                    void 0 === k.passive
                      ? -1 !== c.indexOf("touch")
                      : k.passive,
                  capture: !1,
                }
              : !1
          );
        r[c] || (r[c] = []);
        r[c].push({
          fn: g,
          order: "number" === typeof k.order ? k.order : Infinity,
        });
        r[c].sort(function (b, c) {
          return b.order - c.order;
        });
        return function () {
          w(b, c, g);
        };
      },
      arrayMax: function (b) {
        for (var c = b.length, g = b[0]; c--; ) b[c] > g && (g = b[c]);
        return g;
      },
      arrayMin: function (b) {
        for (var c = b.length, g = b[0]; c--; ) b[c] < g && (g = b[c]);
        return g;
      },
      attr: e,
      clamp: function (b, c, g) {
        return b > c ? (b < g ? b : g) : c;
      },
      cleanRecursively: C,
      clearTimeout: function (b) {
        m(b) && clearTimeout(b);
      },
      correctFloat: t,
      createElement: function (b, c, g, k, n) {
        b = q.createElement(b);
        c && d(b, c);
        n && h(b, { padding: "0", border: "none", margin: "0" });
        g && h(b, g);
        k && k.appendChild(b);
        return b;
      },
      css: h,
      defined: m,
      destroyObjectProperties: function (b, c) {
        v(b, function (g, r) {
          g && g !== c && g.destroy && g.destroy();
          delete b[r];
        });
      },
      discardElement: function (b) {
        b && b.parentElement && b.parentElement.removeChild(b);
      },
      erase: function (b, c) {
        for (var g = b.length; g--; )
          if (b[g] === c) {
            b.splice(g, 1);
            break;
          }
      },
      error: f,
      extend: d,
      extendClass: function (b, c) {
        var g = function () {};
        g.prototype = new b();
        d(g.prototype, c);
        return g;
      },
      find: c,
      fireEvent: y,
      getMagnitude: function (b) {
        return Math.pow(10, Math.floor(Math.log(b) / Math.LN10));
      },
      getNestedProperty: function (b, c) {
        for (b = b.split("."); b.length && m(c); ) {
          var g = b.shift();
          if ("undefined" === typeof g || "__proto__" === g) return;
          c = c[g];
          if (
            !m(c) ||
            "function" === typeof c ||
            "number" === typeof c.nodeType ||
            c === k
          )
            return;
        }
        return c;
      },
      getStyle: n,
      inArray: function (b, c, g) {
        f(32, !1, void 0, { "Highcharts.inArray": "use Array.indexOf" });
        return c.indexOf(b, g);
      },
      isArray: H,
      isClass: z,
      isDOMElement: B,
      isFunction: function (b) {
        return "function" === typeof b;
      },
      isNumber: p,
      isObject: I,
      isString: u,
      keys: function (b) {
        f(32, !1, void 0, { "Highcharts.keys": "use Object.keys" });
        return Object.keys(b);
      },
      merge: function () {
        var b,
          c = arguments,
          g = {},
          k = function (b, c) {
            "object" !== typeof b && (b = {});
            v(c, function (g, r) {
              "__proto__" !== r &&
                "constructor" !== r &&
                (!I(g, !0) || z(g) || B(g)
                  ? (b[r] = c[r])
                  : (b[r] = k(b[r] || {}, g)));
            });
            return b;
          };
        !0 === c[0] && ((g = c[1]), (c = Array.prototype.slice.call(c, 2)));
        var q = c.length;
        for (b = 0; b < q; b++) g = k(g, c[b]);
        return g;
      },
      normalizeTickInterval: function (b, c, g, k, q) {
        var r = b;
        g = l(g, 1);
        var d = b / g;
        c ||
          ((c = q
            ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]
            : [1, 2, 2.5, 5, 10]),
          !1 === k &&
            (1 === g
              ? (c = c.filter(function (b) {
                  return 0 === b % 1;
                }))
              : 0.1 >= g && (c = [1 / g])));
        for (
          k = 0;
          k < c.length &&
          !((r = c[k]),
          (q && r * g >= b) || (!q && d <= (c[k] + (c[k + 1] || c[k])) / 2));
          k++
        );
        return (r = t(r * g, -Math.round(Math.log(0.001) / Math.LN10)));
      },
      objectEach: v,
      offset: function (b) {
        var c = q.documentElement;
        b =
          b.parentElement || b.parentNode
            ? b.getBoundingClientRect()
            : { top: 0, left: 0, width: 0, height: 0 };
        return {
          top: b.top + (k.pageYOffset || c.scrollTop) - (c.clientTop || 0),
          left: b.left + (k.pageXOffset || c.scrollLeft) - (c.clientLeft || 0),
          width: b.width,
          height: b.height,
        };
      },
      pad: function (b, c, g) {
        return (
          Array((c || 2) + 1 - String(b).replace("-", "").length).join(
            g || "0"
          ) + b
        );
      },
      pick: l,
      pInt: G,
      relativeLength: function (b, c, g) {
        return /%$/.test(b)
          ? (c * parseFloat(b)) / 100 + (g || 0)
          : parseFloat(b);
      },
      removeEvent: w,
      splat: function (b) {
        return H(b) ? b : [b];
      },
      stableSort: function (b, c) {
        var g = b.length,
          k,
          r;
        for (r = 0; r < g; r++) b[r].safeI = r;
        b.sort(function (b, g) {
          k = c(b, g);
          return 0 === k ? b.safeI - g.safeI : k;
        });
        for (r = 0; r < g; r++) delete b[r].safeI;
      },
      syncTimeout: function (b, c, g) {
        if (0 < c) return setTimeout(b, c, g);
        b.call(0, g);
        return -1;
      },
      timeUnits: {
        millisecond: 1,
        second: 1e3,
        minute: 6e4,
        hour: 36e5,
        day: 864e5,
        week: 6048e5,
        month: 24192e5,
        year: 314496e5,
      },
      uniqueKey: b,
      useSerialIds: function (b) {
        return (g = l(b, g));
      },
      wrap: function (b, c, g) {
        var k = b[c];
        b[c] = function () {
          var b = Array.prototype.slice.call(arguments),
            c = arguments,
            r = this;
          r.proceed = function () {
            k.apply(r, arguments.length ? arguments : c);
          };
          b.unshift(k);
          b = g.apply(this, b);
          r.proceed = null;
          return b;
        };
      },
    };
    ("");
    return c;
  });
  M(f, "Core/Chart/ChartDefaults.js", [], function () {
    return {
      alignThresholds: !1,
      panning: { enabled: !1, type: "x" },
      styledMode: !1,
      borderRadius: 0,
      colorCount: 10,
      defaultSeriesType: "line",
      ignoreHiddenSeries: !0,
      spacing: [10, 10, 15, 10],
      resetZoomButton: {
        theme: { zIndex: 6 },
        position: { align: "right", x: -10, y: 10 },
      },
      zoomBySingleTouch: !1,
      width: null,
      height: null,
      borderColor: "#335cad",
      backgroundColor: "#ffffff",
      plotBorderColor: "#cccccc",
    };
  });
  M(
    f,
    "Core/Color/Color.js",
    [f["Core/Globals.js"], f["Core/Utilities.js"]],
    function (a, f) {
      var F = f.isNumber,
        G = f.merge,
        u = f.pInt;
      f = (function () {
        function f(F) {
          this.rgba = [NaN, NaN, NaN, NaN];
          this.input = F;
          var B = a.Color;
          if (B && B !== f) return new B(F);
          if (!(this instanceof f)) return new f(F);
          this.init(F);
        }
        f.parse = function (a) {
          return a ? new f(a) : f.None;
        };
        f.prototype.init = function (a) {
          var B;
          if ("object" === typeof a && "undefined" !== typeof a.stops)
            this.stops = a.stops.map(function (e) {
              return new f(e[1]);
            });
          else if ("string" === typeof a) {
            this.input = a = f.names[a.toLowerCase()] || a;
            if ("#" === a.charAt(0)) {
              var z = a.length;
              var p = parseInt(a.substr(1), 16);
              7 === z
                ? (B = [(p & 16711680) >> 16, (p & 65280) >> 8, p & 255, 1])
                : 4 === z &&
                  (B = [
                    ((p & 3840) >> 4) | ((p & 3840) >> 8),
                    ((p & 240) >> 4) | (p & 240),
                    ((p & 15) << 4) | (p & 15),
                    1,
                  ]);
            }
            if (!B)
              for (p = f.parsers.length; p-- && !B; ) {
                var m = f.parsers[p];
                (z = m.regex.exec(a)) && (B = m.parse(z));
              }
          }
          B && (this.rgba = B);
        };
        f.prototype.get = function (a) {
          var B = this.input,
            z = this.rgba;
          if ("object" === typeof B && "undefined" !== typeof this.stops) {
            var p = G(B);
            p.stops = [].slice.call(p.stops);
            this.stops.forEach(function (m, e) {
              p.stops[e] = [p.stops[e][0], m.get(a)];
            });
            return p;
          }
          return z && F(z[0])
            ? "rgb" === a || (!a && 1 === z[3])
              ? "rgb(" + z[0] + "," + z[1] + "," + z[2] + ")"
              : "a" === a
              ? "" + z[3]
              : "rgba(" + z.join(",") + ")"
            : B;
        };
        f.prototype.brighten = function (a) {
          var B = this.rgba;
          if (this.stops)
            this.stops.forEach(function (p) {
              p.brighten(a);
            });
          else if (F(a) && 0 !== a)
            for (var z = 0; 3 > z; z++)
              (B[z] += u(255 * a)),
                0 > B[z] && (B[z] = 0),
                255 < B[z] && (B[z] = 255);
          return this;
        };
        f.prototype.setOpacity = function (a) {
          this.rgba[3] = a;
          return this;
        };
        f.prototype.tweenTo = function (a, B) {
          var z = this.rgba,
            p = a.rgba;
          if (!F(z[0]) || !F(p[0])) return a.input || "none";
          a = 1 !== p[3] || 1 !== z[3];
          return (
            (a ? "rgba(" : "rgb(") +
            Math.round(p[0] + (z[0] - p[0]) * (1 - B)) +
            "," +
            Math.round(p[1] + (z[1] - p[1]) * (1 - B)) +
            "," +
            Math.round(p[2] + (z[2] - p[2]) * (1 - B)) +
            (a ? "," + (p[3] + (z[3] - p[3]) * (1 - B)) : "") +
            ")"
          );
        };
        f.names = { white: "#ffffff", black: "#000000" };
        f.parsers = [
          {
            regex:
              /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
            parse: function (a) {
              return [u(a[1]), u(a[2]), u(a[3]), parseFloat(a[4], 10)];
            },
          },
          {
            regex:
              /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
            parse: function (a) {
              return [u(a[1]), u(a[2]), u(a[3]), 1];
            },
          },
        ];
        f.None = new f("");
        return f;
      })();
      ("");
      return f;
    }
  );
  M(f, "Core/Color/Palettes.js", [], function () {
    return {
      colors:
        "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(
          " "
        ),
    };
  });
  M(
    f,
    "Core/Time.js",
    [f["Core/Globals.js"], f["Core/Utilities.js"]],
    function (a, f) {
      var F = a.win,
        G = f.defined,
        u = f.error,
        H = f.extend,
        I = f.isObject,
        B = f.merge,
        z = f.objectEach,
        p = f.pad,
        m = f.pick,
        e = f.splat,
        d = f.timeUnits,
        l = a.isSafari && F.Intl && F.Intl.DateTimeFormat.prototype.formatRange,
        h =
          a.isSafari && F.Intl && !F.Intl.DateTimeFormat.prototype.formatRange;
      f = (function () {
        function t(d) {
          this.options = {};
          this.variableTimezone = this.useUTC = !1;
          this.Date = F.Date;
          this.getTimezoneOffset = this.timezoneOffsetFunction();
          this.update(d);
        }
        t.prototype.get = function (d, e) {
          if (this.variableTimezone || this.timezoneOffset) {
            var n = e.getTime(),
              l = n - this.getTimezoneOffset(e);
            e.setTime(l);
            d = e["getUTC" + d]();
            e.setTime(n);
            return d;
          }
          return this.useUTC ? e["getUTC" + d]() : e["get" + d]();
        };
        t.prototype.set = function (d, e, h) {
          if (this.variableTimezone || this.timezoneOffset) {
            if (
              "Milliseconds" === d ||
              "Seconds" === d ||
              ("Minutes" === d && 0 === this.getTimezoneOffset(e) % 36e5)
            )
              return e["setUTC" + d](h);
            var n = this.getTimezoneOffset(e);
            n = e.getTime() - n;
            e.setTime(n);
            e["setUTC" + d](h);
            d = this.getTimezoneOffset(e);
            n = e.getTime() + d;
            return e.setTime(n);
          }
          return this.useUTC || (l && "FullYear" === d)
            ? e["setUTC" + d](h)
            : e["set" + d](h);
        };
        t.prototype.update = function (d) {
          var e = m(d && d.useUTC, !0);
          this.options = d = B(!0, this.options || {}, d);
          this.Date = d.Date || F.Date || Date;
          this.timezoneOffset = (this.useUTC = e) && d.timezoneOffset;
          this.getTimezoneOffset = this.timezoneOffsetFunction();
          this.variableTimezone = e && !(!d.getTimezoneOffset && !d.timezone);
        };
        t.prototype.makeTime = function (d, e, l, t, A, q) {
          if (this.useUTC) {
            var k = this.Date.UTC.apply(0, arguments);
            var c = this.getTimezoneOffset(k);
            k += c;
            var g = this.getTimezoneOffset(k);
            c !== g
              ? (k += g - c)
              : c - 36e5 !== this.getTimezoneOffset(k - 36e5) ||
                h ||
                (k -= 36e5);
          } else
            k = new this.Date(
              d,
              e,
              m(l, 1),
              m(t, 0),
              m(A, 0),
              m(q, 0)
            ).getTime();
          return k;
        };
        t.prototype.timezoneOffsetFunction = function () {
          var d = this,
            e = this.options,
            l = e.getTimezoneOffset,
            h = e.moment || F.moment;
          if (!this.useUTC)
            return function (d) {
              return 6e4 * new Date(d.toString()).getTimezoneOffset();
            };
          if (e.timezone) {
            if (h)
              return function (d) {
                return 6e4 * -h.tz(d, e.timezone).utcOffset();
              };
            u(25);
          }
          return this.useUTC && l
            ? function (d) {
                return 6e4 * l(d.valueOf());
              }
            : function () {
                return 6e4 * (d.timezoneOffset || 0);
              };
        };
        t.prototype.dateFormat = function (d, e, l) {
          if (!G(e) || isNaN(e))
            return (
              (a.defaultOptions.lang && a.defaultOptions.lang.invalidDate) || ""
            );
          d = m(d, "%Y-%m-%d %H:%M:%S");
          var h = this,
            n = new this.Date(e),
            q = this.get("Hours", n),
            k = this.get("Day", n),
            c = this.get("Date", n),
            g = this.get("Month", n),
            b = this.get("FullYear", n),
            r = a.defaultOptions.lang,
            x = r && r.weekdays,
            D = r && r.shortWeekdays;
          n = H(
            {
              a: D ? D[k] : x[k].substr(0, 3),
              A: x[k],
              d: p(c),
              e: p(c, 2, " "),
              w: k,
              b: r.shortMonths[g],
              B: r.months[g],
              m: p(g + 1),
              o: g + 1,
              y: b.toString().substr(2, 2),
              Y: b,
              H: p(q),
              k: q,
              I: p(q % 12 || 12),
              l: q % 12 || 12,
              M: p(this.get("Minutes", n)),
              p: 12 > q ? "AM" : "PM",
              P: 12 > q ? "am" : "pm",
              S: p(n.getSeconds()),
              L: p(Math.floor(e % 1e3), 3),
            },
            a.dateFormats
          );
          z(n, function (b, c) {
            for (; -1 !== d.indexOf("%" + c); )
              d = d.replace(
                "%" + c,
                "function" === typeof b ? b.call(h, e) : b
              );
          });
          return l ? d.substr(0, 1).toUpperCase() + d.substr(1) : d;
        };
        t.prototype.resolveDTLFormat = function (d) {
          return I(d, !0)
            ? d
            : ((d = e(d)), { main: d[0], from: d[1], to: d[2] });
        };
        t.prototype.getTimeTicks = function (e, l, h, t) {
          var n = this,
            q = [],
            k = {},
            c = new n.Date(l),
            g = e.unitRange,
            b = e.count || 1,
            r;
          t = m(t, 1);
          if (G(l)) {
            n.set(
              "Milliseconds",
              c,
              g >= d.second ? 0 : b * Math.floor(n.get("Milliseconds", c) / b)
            );
            g >= d.second &&
              n.set(
                "Seconds",
                c,
                g >= d.minute ? 0 : b * Math.floor(n.get("Seconds", c) / b)
              );
            g >= d.minute &&
              n.set(
                "Minutes",
                c,
                g >= d.hour ? 0 : b * Math.floor(n.get("Minutes", c) / b)
              );
            g >= d.hour &&
              n.set(
                "Hours",
                c,
                g >= d.day ? 0 : b * Math.floor(n.get("Hours", c) / b)
              );
            g >= d.day &&
              n.set(
                "Date",
                c,
                g >= d.month
                  ? 1
                  : Math.max(1, b * Math.floor(n.get("Date", c) / b))
              );
            if (g >= d.month) {
              n.set(
                "Month",
                c,
                g >= d.year ? 0 : b * Math.floor(n.get("Month", c) / b)
              );
              var x = n.get("FullYear", c);
            }
            g >= d.year && n.set("FullYear", c, x - (x % b));
            g === d.week &&
              ((x = n.get("Day", c)),
              n.set("Date", c, n.get("Date", c) - x + t + (x < t ? -7 : 0)));
            x = n.get("FullYear", c);
            t = n.get("Month", c);
            var D = n.get("Date", c),
              y = n.get("Hours", c);
            l = c.getTime();
            (!n.variableTimezone && n.useUTC) ||
              !G(h) ||
              (r =
                h - l > 4 * d.month ||
                n.getTimezoneOffset(l) !== n.getTimezoneOffset(h));
            l = c.getTime();
            for (c = 1; l < h; )
              q.push(l),
                (l =
                  g === d.year
                    ? n.makeTime(x + c * b, 0)
                    : g === d.month
                    ? n.makeTime(x, t + c * b)
                    : !r || (g !== d.day && g !== d.week)
                    ? r && g === d.hour && 1 < b
                      ? n.makeTime(x, t, D, y + c * b)
                      : l + g * b
                    : n.makeTime(x, t, D + c * b * (g === d.day ? 1 : 7))),
                c++;
            q.push(l);
            g <= d.hour &&
              1e4 > q.length &&
              q.forEach(function (b) {
                0 === b % 18e5 &&
                  "000000000" === n.dateFormat("%H%M%S%L", b) &&
                  (k[b] = "day");
              });
          }
          q.info = H(e, { higherRanks: k, totalRange: g * b });
          return q;
        };
        t.prototype.getDateFormat = function (e, l, h, t) {
          var n = this.dateFormat("%m-%d %H:%M:%S.%L", l),
            q = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 },
            k = "millisecond";
          for (c in d) {
            if (
              e === d.week &&
              +this.dateFormat("%w", l) === h &&
              "00:00:00.000" === n.substr(6)
            ) {
              var c = "week";
              break;
            }
            if (d[c] > e) {
              c = k;
              break;
            }
            if (q[c] && n.substr(q[c]) !== "01-01 00:00:00.000".substr(q[c]))
              break;
            "week" !== c && (k = c);
          }
          if (c) var g = this.resolveDTLFormat(t[c]).main;
          return g;
        };
        return t;
      })();
      ("");
      return f;
    }
  );
  M(
    f,
    "Core/DefaultOptions.js",
    [
      f["Core/Chart/ChartDefaults.js"],
      f["Core/Color/Color.js"],
      f["Core/Globals.js"],
      f["Core/Color/Palettes.js"],
      f["Core/Time.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G, u, H) {
      f = f.parse;
      var F = H.merge,
        B = {
          colors: G.colors,
          symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
          lang: {
            loading: "Loading...",
            months:
              "January February March April May June July August September October November December".split(
                " "
              ),
            shortMonths:
              "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            weekdays:
              "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                " "
              ),
            decimalPoint: ".",
            numericSymbols: "kMGTPE".split(""),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " ",
          },
          global: {},
          time: {
            Date: void 0,
            getTimezoneOffset: void 0,
            timezone: void 0,
            timezoneOffset: 0,
            useUTC: !0,
          },
          chart: a,
          title: { text: "", align: "center", margin: 15, widthAdjust: -44 },
          subtitle: { text: "", align: "center", widthAdjust: -44 },
          caption: {
            margin: 15,
            text: "",
            align: "left",
            verticalAlign: "bottom",
          },
          plotOptions: {},
          labels: { style: { position: "absolute", color: "#333333" } },
          legend: {
            enabled: !0,
            align: "center",
            alignColumns: !0,
            className: "highcharts-no-tooltip",
            layout: "horizontal",
            labelFormatter: function () {
              return this.name;
            },
            borderColor: "#999999",
            borderRadius: 0,
            navigation: { activeColor: "#003399", inactiveColor: "#cccccc" },
            itemStyle: {
              color: "#333333",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
              textOverflow: "ellipsis",
            },
            itemHoverStyle: { color: "#000000" },
            itemHiddenStyle: { color: "#cccccc" },
            shadow: !1,
            itemCheckboxStyle: {
              position: "absolute",
              width: "13px",
              height: "13px",
            },
            squareSymbol: !0,
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: { style: { fontWeight: "bold" } },
          },
          loading: {
            labelStyle: {
              fontWeight: "bold",
              position: "relative",
              top: "45%",
            },
            style: {
              position: "absolute",
              backgroundColor: "#ffffff",
              opacity: 0.5,
              textAlign: "center",
            },
          },
          tooltip: {
            enabled: !0,
            animation: C.svg,
            borderRadius: 3,
            dateTimeLabelFormats: {
              millisecond: "%A, %b %e, %H:%M:%S.%L",
              second: "%A, %b %e, %H:%M:%S",
              minute: "%A, %b %e, %H:%M",
              hour: "%A, %b %e, %H:%M",
              day: "%A, %b %e, %Y",
              week: "Week from %A, %b %e, %Y",
              month: "%B %Y",
              year: "%Y",
            },
            footerFormat: "",
            headerShape: "callout",
            hideDelay: 500,
            padding: 8,
            shape: "callout",
            shared: !1,
            snap: C.isTouchDevice ? 25 : 10,
            headerFormat:
              '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat:
              '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
            backgroundColor: f("#f7f7f7").setOpacity(0.85).get(),
            borderWidth: 1,
            shadow: !0,
            stickOnContact: !1,
            style: {
              color: "#333333",
              cursor: "default",
              fontSize: "12px",
              whiteSpace: "nowrap",
            },
            useHTML: !1,
          },
          credits: {
            enabled: !0,
            href: "",
            position: {
              align: "right",
              x: -10,
              verticalAlign: "bottom",
              y: -5,
            },
            style: { cursor: "pointer", color: "#999999", fontSize: "9px" },
            text: "",
          },
        };
      B.chart.styledMode = !1;
      ("");
      var z = new u(F(B.global, B.time));
      a = {
        defaultOptions: B,
        defaultTime: z,
        getOptions: function () {
          return B;
        },
        setOptions: function (p) {
          F(!0, B, p);
          if (p.time || p.global)
            C.time
              ? C.time.update(F(B.global, B.time, p.global, p.time))
              : (C.time = z);
          return B;
        },
      };
      ("");
      return a;
    }
  );
  M(
    f,
    "Core/Animation/Fx.js",
    [f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Utilities.js"]],
    function (a, f, C) {
      var F = a.parse,
        u = f.win,
        H = C.isNumber,
        I = C.objectEach;
      return (function () {
        function a(a, p, m) {
          this.pos = NaN;
          this.options = p;
          this.elem = a;
          this.prop = m;
        }
        a.prototype.dSetter = function () {
          var a = this.paths,
            p = a && a[0];
          a = a && a[1];
          var m = this.now || 0,
            e = [];
          if (1 !== m && p && a)
            if (p.length === a.length && 1 > m)
              for (var d = 0; d < a.length; d++) {
                for (var l = p[d], h = a[d], t = [], n = 0; n < h.length; n++) {
                  var v = l[n],
                    w = h[n];
                  H(v) && H(w) && ("A" !== h[0] || (4 !== n && 5 !== n))
                    ? (t[n] = v + m * (w - v))
                    : (t[n] = w);
                }
                e.push(t);
              }
            else e = a;
          else e = this.toD || [];
          this.elem.attr("d", e, void 0, !0);
        };
        a.prototype.update = function () {
          var a = this.elem,
            p = this.prop,
            m = this.now,
            e = this.options.step;
          if (this[p + "Setter"]) this[p + "Setter"]();
          else
            a.attr
              ? a.element && a.attr(p, m, null, !0)
              : (a.style[p] = m + this.unit);
          e && e.call(a, m, this);
        };
        a.prototype.run = function (z, p, m) {
          var e = this,
            d = e.options,
            l = function (d) {
              return l.stopped ? !1 : e.step(d);
            },
            h =
              u.requestAnimationFrame ||
              function (d) {
                setTimeout(d, 13);
              },
            t = function () {
              for (var d = 0; d < a.timers.length; d++)
                a.timers[d]() || a.timers.splice(d--, 1);
              a.timers.length && h(t);
            };
          z !== p || this.elem["forceAnimate:" + this.prop]
            ? ((this.startTime = +new Date()),
              (this.start = z),
              (this.end = p),
              (this.unit = m),
              (this.now = this.start),
              (this.pos = 0),
              (l.elem = this.elem),
              (l.prop = this.prop),
              l() && 1 === a.timers.push(l) && h(t))
            : (delete d.curAnim[this.prop],
              d.complete &&
                0 === Object.keys(d.curAnim).length &&
                d.complete.call(this.elem));
        };
        a.prototype.step = function (a) {
          var p = +new Date(),
            m = this.options,
            e = this.elem,
            d = m.complete,
            l = m.duration,
            h = m.curAnim;
          if (e.attr && !e.element) a = !1;
          else if (a || p >= l + this.startTime) {
            this.now = this.end;
            this.pos = 1;
            this.update();
            var t = (h[this.prop] = !0);
            I(h, function (d) {
              !0 !== d && (t = !1);
            });
            t && d && d.call(e);
            a = !1;
          } else
            (this.pos = m.easing((p - this.startTime) / l)),
              (this.now = this.start + (this.end - this.start) * this.pos),
              this.update(),
              (a = !0);
          return a;
        };
        a.prototype.initPath = function (a, p, m) {
          function e(d, q) {
            for (; d.length < y; ) {
              var k = d[0],
                c = q[y - d.length];
              c &&
                "M" === k[0] &&
                (d[0] =
                  "C" === c[0]
                    ? ["C", k[1], k[2], k[1], k[2], k[1], k[2]]
                    : ["L", k[1], k[2]]);
              d.unshift(k);
              t && ((k = d.pop()), d.push(d[d.length - 1], k));
            }
          }
          function d(d, q) {
            for (; d.length < y; )
              if (
                ((q = d[Math.floor(d.length / n) - 1].slice()),
                "C" === q[0] && ((q[1] = q[5]), (q[2] = q[6])),
                t)
              ) {
                var k = d[Math.floor(d.length / n)].slice();
                d.splice(d.length / 2, 0, q, k);
              } else d.push(q);
          }
          var l = a.startX,
            h = a.endX;
          m = m.slice();
          var t = a.isArea,
            n = t ? 2 : 1;
          p = p && p.slice();
          if (!p) return [m, m];
          if (l && h && h.length) {
            for (a = 0; a < l.length; a++)
              if (l[a] === h[0]) {
                var v = a;
                break;
              } else if (l[0] === h[h.length - l.length + a]) {
                v = a;
                var w = !0;
                break;
              } else if (l[l.length - 1] === h[h.length - l.length + a]) {
                v = l.length - a;
                break;
              }
            "undefined" === typeof v && (p = []);
          }
          if (p.length && H(v)) {
            var y = m.length + v * n;
            w ? (e(p, m), d(m, p)) : (e(m, p), d(p, m));
          }
          return [p, m];
        };
        a.prototype.fillSetter = function () {
          a.prototype.strokeSetter.apply(this, arguments);
        };
        a.prototype.strokeSetter = function () {
          this.elem.attr(
            this.prop,
            F(this.start).tweenTo(F(this.end), this.pos),
            void 0,
            !0
          );
        };
        a.timers = [];
        return a;
      })();
    }
  );
  M(
    f,
    "Core/Animation/AnimationUtilities.js",
    [f["Core/Animation/Fx.js"], f["Core/Utilities.js"]],
    function (a, f) {
      function F(d) {
        return z(d)
          ? p({ duration: 500, defer: 0 }, d)
          : { duration: d ? 500 : 0, defer: 0 };
      }
      function G(d, e) {
        for (var l = a.timers.length; l--; )
          a.timers[l].elem !== d ||
            (e && e !== a.timers[l].prop) ||
            (a.timers[l].stopped = !0);
      }
      var u = f.defined,
        H = f.getStyle,
        I = f.isArray,
        B = f.isNumber,
        z = f.isObject,
        p = f.merge,
        m = f.objectEach,
        e = f.pick;
      return {
        animate: function (d, e, h) {
          var l,
            n = "",
            v,
            w;
          if (!z(h)) {
            var y = arguments;
            h = { duration: y[2], easing: y[3], complete: y[4] };
          }
          B(h.duration) || (h.duration = 400);
          h.easing =
            "function" === typeof h.easing
              ? h.easing
              : Math[h.easing] || Math.easeInOutSine;
          h.curAnim = p(e);
          m(e, function (t, q) {
            G(d, q);
            w = new a(d, h, q);
            v = void 0;
            "d" === q && I(e.d)
              ? ((w.paths = w.initPath(d, d.pathArray, e.d)),
                (w.toD = e.d),
                (l = 0),
                (v = 1))
              : d.attr
              ? (l = d.attr(q))
              : ((l = parseFloat(H(d, q)) || 0), "opacity" !== q && (n = "px"));
            v || (v = t);
            "string" === typeof v &&
              v.match("px") &&
              (v = v.replace(/px/g, ""));
            w.run(l, v, n);
          });
        },
        animObject: F,
        getDeferredAnimation: function (d, e, h) {
          var l = F(e),
            n = 0,
            a = 0;
          (h ? [h] : d.series).forEach(function (d) {
            d = F(d.options.animation);
            n = e && u(e.defer) ? l.defer : Math.max(n, d.duration + d.defer);
            a = Math.min(l.duration, d.duration);
          });
          d.renderer.forExport && (n = 0);
          return { defer: Math.max(0, n - a), duration: Math.min(n, a) };
        },
        setAnimation: function (d, l) {
          l.renderer.globalAnimation = e(d, l.options.chart.animation, !0);
        },
        stop: G,
      };
    }
  );
  M(
    f,
    "Core/Renderer/HTML/AST.js",
    [f["Core/Globals.js"], f["Core/Utilities.js"]],
    function (a, f) {
      var F = a.SVG_NS,
        G = f.attr,
        u = f.createElement,
        H = f.css,
        I = f.error,
        B = f.isFunction,
        z = f.isString,
        p = f.objectEach,
        m = f.splat,
        e =
          (f = a.win.trustedTypes) &&
          B(f.createPolicy) &&
          f.createPolicy("highcharts", {
            createHTML: function (d) {
              return d;
            },
          }),
        d = e ? e.createHTML("") : "";
      try {
        var l = !!new DOMParser().parseFromString(d, "text/html");
      } catch (h) {
        l = !1;
      }
      B = (function () {
        function h(d) {
          this.nodes = "string" === typeof d ? this.parseMarkup(d) : d;
        }
        h.filterUserAttributes = function (d) {
          p(d, function (e, l) {
            var n = !0;
            -1 === h.allowedAttributes.indexOf(l) && (n = !1);
            -1 !==
              ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(l) &&
              (n =
                z(e) &&
                h.allowedReferences.some(function (d) {
                  return 0 === e.indexOf(d);
                }));
            n ||
              (I("Highcharts warning: Invalid attribute '" + l + "' in config"),
              delete d[l]);
          });
          return d;
        };
        h.parseStyle = function (d) {
          return d.split(";").reduce(function (d, e) {
            e = e.split(":").map(function (d) {
              return d.trim();
            });
            var l = e[0].replace(/-([a-z])/g, function (d) {
              return d[1].toUpperCase();
            });
            e[1] && (d[l] = e[1]);
            return d;
          }, {});
        };
        h.setElementHTML = function (d, e) {
          d.innerHTML = h.emptyHTML;
          e && new h(e).addToDOM(d);
        };
        h.prototype.addToDOM = function (d) {
          function e(d, l) {
            var n;
            m(d).forEach(function (d) {
              var q = d.tagName,
                k = d.textContent
                  ? a.doc.createTextNode(d.textContent)
                  : void 0,
                c = h.bypassHTMLFiltering;
              if (q)
                if ("#text" === q) var g = k;
                else if (-1 !== h.allowedTags.indexOf(q) || c) {
                  q = a.doc.createElementNS(
                    "svg" === q ? F : l.namespaceURI || F,
                    q
                  );
                  var b = d.attributes || {};
                  p(d, function (c, g) {
                    "tagName" !== g &&
                      "attributes" !== g &&
                      "children" !== g &&
                      "style" !== g &&
                      "textContent" !== g &&
                      (b[g] = c);
                  });
                  G(q, c ? b : h.filterUserAttributes(b));
                  d.style && H(q, d.style);
                  k && q.appendChild(k);
                  e(d.children || [], q);
                  g = q;
                } else
                  I("Highcharts warning: Invalid tagName " + q + " in config");
              g && l.appendChild(g);
              n = g;
            });
            return n;
          }
          return e(this.nodes, d);
        };
        h.prototype.parseMarkup = function (d) {
          var n = [];
          d = d.trim().replace(/ style="/g, ' data-style="');
          if (l)
            d = new DOMParser().parseFromString(
              e ? e.createHTML(d) : d,
              "text/html"
            );
          else {
            var a = u("div");
            a.innerHTML = d;
            d = { body: a };
          }
          var t = function (d, e) {
            var q = d.nodeName.toLowerCase(),
              k = { tagName: q };
            "#text" === q && (k.textContent = d.textContent || "");
            if ((q = d.attributes)) {
              var c = {};
              [].forEach.call(q, function (b) {
                "data-style" === b.name
                  ? (k.style = h.parseStyle(b.value))
                  : (c[b.name] = b.value);
              });
              k.attributes = c;
            }
            if (d.childNodes.length) {
              var g = [];
              [].forEach.call(d.childNodes, function (b) {
                t(b, g);
              });
              g.length && (k.children = g);
            }
            e.push(k);
          };
          [].forEach.call(d.body.childNodes, function (d) {
            return t(d, n);
          });
          return n;
        };
        h.allowedAttributes =
          "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align textAnchor textLength title type valign width x x1 x2 y y1 y2 zIndex".split(
            " "
          );
        h.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" ");
        h.allowedTags =
          "a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text thead tbody tspan td th tr u ul #text".split(
            " "
          );
        h.emptyHTML = d;
        h.bypassHTMLFiltering = !1;
        return h;
      })();
      ("");
      return B;
    }
  );
  M(
    f,
    "Core/FormatUtilities.js",
    [f["Core/DefaultOptions.js"], f["Core/Utilities.js"]],
    function (a, f) {
      function F(a, m, e, d) {
        a = +a || 0;
        m = +m;
        var l = G.lang,
          h = (a.toString().split(".")[1] || "").split("e")[0].length,
          t = a.toString().split("e"),
          n = m;
        if (-1 === m) m = Math.min(h, 20);
        else if (!I(m)) m = 2;
        else if (m && t[1] && 0 > t[1]) {
          var v = m + +t[1];
          0 <= v
            ? ((t[0] = (+t[0]).toExponential(v).split("e")[0]), (m = v))
            : ((t[0] = t[0].split(".")[0] || 0),
              (a = 20 > m ? (t[0] * Math.pow(10, t[1])).toFixed(m) : 0),
              (t[1] = 0));
        }
        v = (
          Math.abs(t[1] ? t[0] : a) + Math.pow(10, -Math.max(m, h) - 1)
        ).toFixed(m);
        h = String(z(v));
        var w = 3 < h.length ? h.length % 3 : 0;
        e = B(e, l.decimalPoint);
        d = B(d, l.thousandsSep);
        a = (0 > a ? "-" : "") + (w ? h.substr(0, w) + d : "");
        a =
          0 > +t[1] && !n
            ? "0"
            : a + h.substr(w).replace(/(\d{3})(?=\d)/g, "$1" + d);
        m && (a += e + v.slice(-m));
        t[1] && 0 !== +a && (a += "e" + t[1]);
        return a;
      }
      var G = a.defaultOptions,
        u = a.defaultTime,
        H = f.getNestedProperty,
        I = f.isNumber,
        B = f.pick,
        z = f.pInt;
      return {
        dateFormat: function (a, m, e) {
          return u.dateFormat(a, m, e);
        },
        format: function (a, m, e) {
          var d = "{",
            l = !1,
            h = /f$/,
            t = /\.([0-9])/,
            n = G.lang,
            v = (e && e.time) || u;
          e = (e && e.numberFormatter) || F;
          for (var w = []; a; ) {
            var y = a.indexOf(d);
            if (-1 === y) break;
            var A = a.slice(0, y);
            if (l) {
              A = A.split(":");
              d = H(A.shift() || "", m);
              if (A.length && "number" === typeof d)
                if (((A = A.join(":")), h.test(A))) {
                  var q = parseInt((A.match(t) || ["", "-1"])[1], 10);
                  null !== d &&
                    (d = e(
                      d,
                      q,
                      n.decimalPoint,
                      -1 < A.indexOf(",") ? n.thousandsSep : ""
                    ));
                } else d = v.dateFormat(A, d);
              w.push(d);
            } else w.push(A);
            a = a.slice(y + 1);
            d = (l = !l) ? "}" : "{";
          }
          w.push(a);
          return w.join("");
        },
        numberFormat: F,
      };
    }
  );
  M(
    f,
    "Core/Renderer/RendererUtilities.js",
    [f["Core/Utilities.js"]],
    function (a) {
      var f = a.clamp,
        C = a.pick,
        G = a.stableSort,
        u;
      (function (a) {
        function F(a, z, p) {
          var m = a,
            e = m.reducedLen || z,
            d = function (d, e) {
              return (e.rank || 0) - (d.rank || 0);
            },
            l = function (d, e) {
              return d.target - e.target;
            },
            h,
            t = !0,
            n = [],
            v = 0;
          for (h = a.length; h--; ) v += a[h].size;
          if (v > e) {
            G(a, d);
            for (v = h = 0; v <= e; ) (v += a[h].size), h++;
            n = a.splice(h - 1, a.length);
          }
          G(a, l);
          for (
            a = a.map(function (d) {
              return {
                size: d.size,
                targets: [d.target],
                align: C(d.align, 0.5),
              };
            });
            t;

          ) {
            for (h = a.length; h--; )
              (e = a[h]),
                (d =
                  (Math.min.apply(0, e.targets) +
                    Math.max.apply(0, e.targets)) /
                  2),
                (e.pos = f(d - e.size * e.align, 0, z - e.size));
            h = a.length;
            for (t = !1; h--; )
              0 < h &&
                a[h - 1].pos + a[h - 1].size > a[h].pos &&
                ((a[h - 1].size += a[h].size),
                (a[h - 1].targets = a[h - 1].targets.concat(a[h].targets)),
                (a[h - 1].align = 0.5),
                a[h - 1].pos + a[h - 1].size > z &&
                  (a[h - 1].pos = z - a[h - 1].size),
                a.splice(h, 1),
                (t = !0));
          }
          m.push.apply(m, n);
          h = 0;
          a.some(function (d) {
            var e = 0;
            return (d.targets || []).some(function () {
              m[h].pos = d.pos + e;
              if (
                "undefined" !== typeof p &&
                Math.abs(m[h].pos - m[h].target) > p
              )
                return (
                  m.slice(0, h + 1).forEach(function (d) {
                    return delete d.pos;
                  }),
                  (m.reducedLen = (m.reducedLen || z) - 0.1 * z),
                  m.reducedLen > 0.1 * z && F(m, z, p),
                  !0
                );
              e += m[h].size;
              h++;
              return !1;
            });
          });
          G(m, l);
          return m;
        }
        a.distribute = F;
      })(u || (u = {}));
      return u;
    }
  );
  M(
    f,
    "Core/Renderer/SVG/SVGElement.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/Renderer/HTML/AST.js"],
      f["Core/Color/Color.js"],
      f["Core/Globals.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G, u) {
      var F = a.animate,
        I = a.animObject,
        B = a.stop,
        z = G.deg2rad,
        p = G.doc,
        m = G.noop,
        e = G.svg,
        d = G.SVG_NS,
        l = G.win,
        h = u.addEvent,
        t = u.attr,
        n = u.createElement,
        v = u.css,
        w = u.defined,
        y = u.erase,
        A = u.extend,
        q = u.fireEvent,
        k = u.isArray,
        c = u.isFunction,
        g = u.isNumber,
        b = u.isString,
        r = u.merge,
        x = u.objectEach,
        D = u.pick,
        K = u.pInt,
        P = u.syncTimeout,
        Q = u.uniqueKey;
      a = (function () {
        function a() {
          this.element = void 0;
          this.onEvents = {};
          this.opacity = 1;
          this.renderer = void 0;
          this.SVG_NS = d;
          this.symbolCustomAttribs =
            "x y width height r start end innerR anchorX anchorY rounded".split(
              " "
            );
        }
        a.prototype._defaultGetter = function (b) {
          b = D(
            this[b + "Value"],
            this[b],
            this.element ? this.element.getAttribute(b) : null,
            0
          );
          /^[\-0-9\.]+$/.test(b) && (b = parseFloat(b));
          return b;
        };
        a.prototype._defaultSetter = function (b, c, g) {
          g.setAttribute(c, b);
        };
        a.prototype.add = function (b) {
          var c = this.renderer,
            g = this.element;
          b && (this.parentGroup = b);
          this.parentInverted = b && b.inverted;
          "undefined" !== typeof this.textStr &&
            "text" === this.element.nodeName &&
            c.buildText(this);
          this.added = !0;
          if (!b || b.handleZ || this.zIndex) var d = this.zIndexSetter();
          d || (b ? b.element : c.box).appendChild(g);
          if (this.onAdd) this.onAdd();
          return this;
        };
        a.prototype.addClass = function (b, c) {
          var g = c ? "" : this.attr("class") || "";
          b = (b || "")
            .split(/ /g)
            .reduce(
              function (b, c) {
                -1 === g.indexOf(c) && b.push(c);
                return b;
              },
              g ? [g] : []
            )
            .join(" ");
          b !== g && this.attr("class", b);
          return this;
        };
        a.prototype.afterSetters = function () {
          this.doTransform && (this.updateTransform(), (this.doTransform = !1));
        };
        a.prototype.align = function (c, g, d) {
          var L = {},
            k = this.renderer,
            r = k.alignedObjects,
            e,
            q,
            E;
          if (c) {
            if (
              ((this.alignOptions = c), (this.alignByTranslate = g), !d || b(d))
            )
              (this.alignTo = e = d || "renderer"),
                y(r, this),
                r.push(this),
                (d = void 0);
          } else
            (c = this.alignOptions),
              (g = this.alignByTranslate),
              (e = this.alignTo);
          d = D(d, k[e], "scrollablePlotBox" === e ? k.plotBox : void 0, k);
          e = c.align;
          var a = c.verticalAlign;
          k = (d.x || 0) + (c.x || 0);
          r = (d.y || 0) + (c.y || 0);
          "right" === e ? (q = 1) : "center" === e && (q = 2);
          q && (k += (d.width - (c.width || 0)) / q);
          L[g ? "translateX" : "x"] = Math.round(k);
          "bottom" === a ? (E = 1) : "middle" === a && (E = 2);
          E && (r += (d.height - (c.height || 0)) / E);
          L[g ? "translateY" : "y"] = Math.round(r);
          this[this.placed ? "animate" : "attr"](L);
          this.placed = !0;
          this.alignAttr = L;
          return this;
        };
        a.prototype.alignSetter = function (b) {
          var c = { left: "start", center: "middle", right: "end" };
          c[b] &&
            ((this.alignValue = b),
            this.element.setAttribute("text-anchor", c[b]));
        };
        a.prototype.animate = function (b, c, g) {
          var d = this,
            L = I(D(c, this.renderer.globalAnimation, !0));
          c = L.defer;
          D(p.hidden, p.msHidden, p.webkitHidden, !1) && (L.duration = 0);
          0 !== L.duration
            ? (g && (L.complete = g),
              P(function () {
                d.element && F(d, b, L);
              }, c))
            : (this.attr(b, void 0, g || L.complete),
              x(
                b,
                function (b, c) {
                  L.step &&
                    L.step.call(this, b, { prop: c, pos: 1, elem: this });
                },
                this
              ));
          return this;
        };
        a.prototype.applyTextOutline = function (b) {
          var c = this.element;
          -1 !== b.indexOf("contrast") &&
            (b = b.replace(
              /contrast/g,
              this.renderer.getContrast(c.style.fill)
            ));
          var g = b.split(" ");
          b = g[g.length - 1];
          if ((g = g[0]) && "none" !== g && G.svg) {
            this.fakeTS = !0;
            this.ySetter = this.xSetter;
            g = g.replace(/(^[\d\.]+)(.*?)$/g, function (b, c, g) {
              return 2 * Number(c) + g;
            });
            this.removeTextOutline();
            var k = p.createElementNS(d, "tspan");
            t(k, {
              class: "highcharts-text-outline",
              fill: b,
              stroke: b,
              "stroke-width": g,
              "stroke-linejoin": "round",
            });
            [].forEach.call(c.childNodes, function (b) {
              var c = b.cloneNode(!0);
              c.removeAttribute &&
                ["fill", "stroke", "stroke-width", "stroke"].forEach(function (
                  b
                ) {
                  return c.removeAttribute(b);
                });
              k.appendChild(c);
            });
            var r = p.createElementNS(d, "tspan");
            r.textContent = "\u200b";
            ["x", "y"].forEach(function (b) {
              var g = c.getAttribute(b);
              g && r.setAttribute(b, g);
            });
            k.appendChild(r);
            c.insertBefore(k, c.firstChild);
          }
        };
        a.prototype.attr = function (b, c, g, d) {
          var L = this.element,
            k = this.symbolCustomAttribs,
            r,
            J = this,
            E,
            e;
          if ("string" === typeof b && "undefined" !== typeof c) {
            var q = b;
            b = {};
            b[q] = c;
          }
          "string" === typeof b
            ? (J = (this[b + "Getter"] || this._defaultGetter).call(this, b, L))
            : (x(
                b,
                function (c, g) {
                  E = !1;
                  d || B(this, g);
                  this.symbolName &&
                    -1 !== k.indexOf(g) &&
                    (r || (this.symbolAttr(b), (r = !0)), (E = !0));
                  !this.rotation ||
                    ("x" !== g && "y" !== g) ||
                    (this.doTransform = !0);
                  E ||
                    ((e = this[g + "Setter"] || this._defaultSetter),
                    e.call(this, c, g, L),
                    !this.styledMode &&
                      this.shadows &&
                      /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(
                        g
                      ) &&
                      this.updateShadows(g, c, e));
                },
                this
              ),
              this.afterSetters());
          g && g.call(this);
          return J;
        };
        a.prototype.clip = function (b) {
          return this.attr(
            "clip-path",
            b ? "url(" + this.renderer.url + "#" + b.id + ")" : "none"
          );
        };
        a.prototype.crisp = function (b, c) {
          c = c || b.strokeWidth || 0;
          var g = (Math.round(c) % 2) / 2;
          b.x = Math.floor(b.x || this.x || 0) + g;
          b.y = Math.floor(b.y || this.y || 0) + g;
          b.width = Math.floor((b.width || this.width || 0) - 2 * g);
          b.height = Math.floor((b.height || this.height || 0) - 2 * g);
          w(b.strokeWidth) && (b.strokeWidth = c);
          return b;
        };
        a.prototype.complexColor = function (b, c, g) {
          var d = this.renderer,
            L,
            e,
            a,
            l,
            E,
            n,
            h,
            D,
            t,
            m,
            y = [],
            A;
          q(this.renderer, "complexColor", { args: arguments }, function () {
            b.radialGradient
              ? (e = "radialGradient")
              : b.linearGradient && (e = "linearGradient");
            if (e) {
              a = b[e];
              E = d.gradients;
              n = b.stops;
              t = g.radialReference;
              k(a) &&
                (b[e] = a =
                  {
                    x1: a[0],
                    y1: a[1],
                    x2: a[2],
                    y2: a[3],
                    gradientUnits: "userSpaceOnUse",
                  });
              "radialGradient" === e &&
                t &&
                !w(a.gradientUnits) &&
                ((l = a),
                (a = r(a, d.getRadialAttr(t, l), {
                  gradientUnits: "userSpaceOnUse",
                })));
              x(a, function (b, c) {
                "id" !== c && y.push(c, b);
              });
              x(n, function (b) {
                y.push(b);
              });
              y = y.join(",");
              if (E[y]) m = E[y].attr("id");
              else {
                a.id = m = Q();
                var J = (E[y] = d.createElement(e).attr(a).add(d.defs));
                J.radAttr = l;
                J.stops = [];
                n.forEach(function (b) {
                  0 === b[1].indexOf("rgba")
                    ? ((L = C.parse(b[1])),
                      (h = L.get("rgb")),
                      (D = L.get("a")))
                    : ((h = b[1]), (D = 1));
                  b = d
                    .createElement("stop")
                    .attr({ offset: b[0], "stop-color": h, "stop-opacity": D })
                    .add(J);
                  J.stops.push(b);
                });
              }
              A = "url(" + d.url + "#" + m + ")";
              g.setAttribute(c, A);
              g.gradient = y;
              b.toString = function () {
                return A;
              };
            }
          });
        };
        a.prototype.css = function (b) {
          var c = this.styles,
            g = {},
            d = this.element,
            k = !c;
          b.color && (b.fill = b.color);
          c &&
            x(b, function (b, d) {
              c && c[d] !== b && ((g[d] = b), (k = !0));
            });
          if (k) {
            c && (b = A(c, g));
            if (null === b.width || "auto" === b.width) delete this.textWidth;
            else if ("text" === d.nodeName.toLowerCase() && b.width)
              var a = (this.textWidth = K(b.width));
            this.styles = b;
            a && !e && this.renderer.forExport && delete b.width;
            var q = r(b);
            d.namespaceURI === this.SVG_NS &&
              ["textOutline", "textOverflow", "width"].forEach(function (b) {
                return q && delete q[b];
              });
            v(d, q);
            this.added &&
              ("text" === this.element.nodeName &&
                this.renderer.buildText(this),
              b.textOutline && this.applyTextOutline(b.textOutline));
          }
          return this;
        };
        a.prototype.dashstyleSetter = function (b) {
          var c = this["stroke-width"];
          "inherit" === c && (c = 1);
          if ((b = b && b.toLowerCase())) {
            var g = b
              .replace("shortdashdotdot", "3,1,1,1,1,1,")
              .replace("shortdashdot", "3,1,1,1")
              .replace("shortdot", "1,1,")
              .replace("shortdash", "3,1,")
              .replace("longdash", "8,3,")
              .replace(/dot/g, "1,3,")
              .replace("dash", "4,3,")
              .replace(/,$/, "")
              .split(",");
            for (b = g.length; b--; ) g[b] = "" + K(g[b]) * D(c, NaN);
            b = g.join(",").replace(/NaN/g, "none");
            this.element.setAttribute("stroke-dasharray", b);
          }
        };
        a.prototype.destroy = function () {
          var b = this,
            c = b.element || {},
            g = b.renderer,
            d = c.ownerSVGElement,
            k = (g.isSVG && "SPAN" === c.nodeName && b.parentGroup) || void 0;
          c.onclick =
            c.onmouseout =
            c.onmouseover =
            c.onmousemove =
            c.point =
              null;
          B(b);
          if (b.clipPath && d) {
            var r = b.clipPath;
            [].forEach.call(
              d.querySelectorAll("[clip-path],[CLIP-PATH]"),
              function (b) {
                -1 < b.getAttribute("clip-path").indexOf(r.element.id) &&
                  b.removeAttribute("clip-path");
              }
            );
            b.clipPath = r.destroy();
          }
          if (b.stops) {
            for (d = 0; d < b.stops.length; d++) b.stops[d].destroy();
            b.stops.length = 0;
            b.stops = void 0;
          }
          b.safeRemoveChild(c);
          for (
            g.styledMode || b.destroyShadows();
            k && k.div && 0 === k.div.childNodes.length;

          )
            (c = k.parentGroup),
              b.safeRemoveChild(k.div),
              delete k.div,
              (k = c);
          b.alignTo && y(g.alignedObjects, b);
          x(b, function (c, g) {
            b[g] && b[g].parentGroup === b && b[g].destroy && b[g].destroy();
            delete b[g];
          });
        };
        a.prototype.destroyShadows = function () {
          (this.shadows || []).forEach(function (b) {
            this.safeRemoveChild(b);
          }, this);
          this.shadows = void 0;
        };
        a.prototype.destroyTextPath = function (b, c) {
          var g = b.getElementsByTagName("text")[0];
          if (g) {
            if (
              (g.removeAttribute("dx"),
              g.removeAttribute("dy"),
              c.element.setAttribute("id", ""),
              this.textPathWrapper && g.getElementsByTagName("textPath").length)
            ) {
              for (b = this.textPathWrapper.element.childNodes; b.length; )
                g.appendChild(b[0]);
              g.removeChild(this.textPathWrapper.element);
            }
          } else if (b.getAttribute("dx") || b.getAttribute("dy"))
            b.removeAttribute("dx"), b.removeAttribute("dy");
          this.textPathWrapper &&
            (this.textPathWrapper = this.textPathWrapper.destroy());
        };
        a.prototype.dSetter = function (b, c, g) {
          k(b) &&
            ("string" === typeof b[0] && (b = this.renderer.pathToSegments(b)),
            (this.pathArray = b),
            (b = b.reduce(function (b, c, g) {
              return c && c.join
                ? (g ? b + " " : "") + c.join(" ")
                : (c || "").toString();
            }, "")));
          /(NaN| {2}|^$)/.test(b) && (b = "M 0 0");
          this[c] !== b && (g.setAttribute(c, b), (this[c] = b));
        };
        a.prototype.fadeOut = function (b) {
          var c = this;
          c.animate(
            { opacity: 0 },
            {
              duration: D(b, 150),
              complete: function () {
                c.attr({ y: -9999 }).hide();
              },
            }
          );
        };
        a.prototype.fillSetter = function (b, c, g) {
          "string" === typeof b
            ? g.setAttribute(c, b)
            : b && this.complexColor(b, c, g);
        };
        a.prototype.getBBox = function (b, g) {
          var d = this.renderer,
            k = this.element,
            r = this.styles,
            e = this.textStr,
            q = d.cache,
            l = d.cacheKeys,
            E = k.namespaceURI === this.SVG_NS;
          g = D(g, this.rotation, 0);
          var n = d.styledMode
              ? k && a.prototype.getStyle.call(k, "font-size")
              : r && r.fontSize,
            x;
          if (w(e)) {
            var h = e.toString();
            -1 === h.indexOf("<") && (h = h.replace(/[0-9]/g, "0"));
            h += [
              "",
              g,
              n,
              this.textWidth,
              r && r.textOverflow,
              r && r.fontWeight,
            ].join();
          }
          h && !b && (x = q[h]);
          if (!x) {
            if (E || d.forExport) {
              try {
                var t =
                  this.fakeTS &&
                  function (b) {
                    var c = k.querySelector(".highcharts-text-outline");
                    c && v(c, { display: b });
                  };
                c(t) && t("none");
                x = k.getBBox
                  ? A({}, k.getBBox())
                  : { width: k.offsetWidth, height: k.offsetHeight };
                c(t) && t("");
              } catch (X) {
                ("");
              }
              if (!x || 0 > x.width) x = { width: 0, height: 0 };
            } else x = this.htmlGetBBox();
            d.isSVG &&
              ((b = x.width),
              (d = x.height),
              E &&
                (x.height = d =
                  { "11px,17": 14, "13px,20": 16 }[
                    (n || "") + "," + Math.round(d)
                  ] || d),
              g &&
                ((E = g * z),
                (x.width =
                  Math.abs(d * Math.sin(E)) + Math.abs(b * Math.cos(E))),
                (x.height =
                  Math.abs(d * Math.cos(E)) + Math.abs(b * Math.sin(E)))));
            if (h && ("" === e || 0 < x.height)) {
              for (; 250 < l.length; ) delete q[l.shift()];
              q[h] || l.push(h);
              q[h] = x;
            }
          }
          return x;
        };
        a.prototype.getStyle = function (b) {
          return l
            .getComputedStyle(this.element || this, "")
            .getPropertyValue(b);
        };
        a.prototype.hasClass = function (b) {
          return -1 !== ("" + this.attr("class")).split(" ").indexOf(b);
        };
        a.prototype.hide = function (b) {
          b ? this.attr({ y: -9999 }) : this.attr({ visibility: "hidden" });
          return this;
        };
        a.prototype.htmlGetBBox = function () {
          return { height: 0, width: 0, x: 0, y: 0 };
        };
        a.prototype.init = function (b, c) {
          this.element =
            "span" === c ? n(c) : p.createElementNS(this.SVG_NS, c);
          this.renderer = b;
          q(this, "afterInit");
        };
        a.prototype.invert = function (b) {
          this.inverted = b;
          this.updateTransform();
          return this;
        };
        a.prototype.on = function (b, c) {
          var g = this.onEvents;
          if (g[b]) g[b]();
          g[b] = h(this.element, b, c);
          return this;
        };
        a.prototype.opacitySetter = function (b, c, g) {
          this.opacity = b = Number(Number(b).toFixed(3));
          g.setAttribute(c, b);
        };
        a.prototype.removeClass = function (c) {
          return this.attr(
            "class",
            ("" + this.attr("class"))
              .replace(b(c) ? new RegExp("(^| )" + c + "( |$)") : c, " ")
              .replace(/ +/g, " ")
              .trim()
          );
        };
        a.prototype.removeTextOutline = function () {
          var b = this.element.querySelector("tspan.highcharts-text-outline");
          b && this.safeRemoveChild(b);
        };
        a.prototype.safeRemoveChild = function (b) {
          var c = b.parentNode;
          c && c.removeChild(b);
        };
        a.prototype.setRadialReference = function (b) {
          var c =
            this.element.gradient &&
            this.renderer.gradients[this.element.gradient];
          this.element.radialReference = b;
          c &&
            c.radAttr &&
            c.animate(this.renderer.getRadialAttr(b, c.radAttr));
          return this;
        };
        a.prototype.setTextPath = function (b, c) {
          var d = this.element,
            k = this.text ? this.text.element : d,
            e = { textAnchor: "text-anchor" },
            q = !1,
            a = this.textPathWrapper,
            n = !a;
          c = r(
            !0,
            {
              enabled: !0,
              attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" },
            },
            c
          );
          var E = f.filterUserAttributes(c.attributes);
          if (b && c && c.enabled) {
            a && null === a.element.parentNode
              ? ((n = !0), (a = a.destroy()))
              : a && this.removeTextOutline.call(a.parentGroup);
            this.options &&
              this.options.padding &&
              (E.dx = -this.options.padding);
            a ||
              ((this.textPathWrapper = a =
                this.renderer.createElement("textPath")),
              (q = !0));
            var h = a.element;
            (c = b.element.getAttribute("id")) ||
              b.element.setAttribute("id", (c = Q()));
            if (n)
              for (
                k.setAttribute("y", 0),
                  g(E.dx) && k.setAttribute("x", -E.dx),
                  b = [].slice.call(k.childNodes),
                  n = 0;
                n < b.length;
                n++
              ) {
                var D = b[n];
                (D.nodeType !== l.Node.TEXT_NODE && "tspan" !== D.nodeName) ||
                  h.appendChild(D);
              }
            q && a && a.add({ element: k });
            h.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "href",
              this.renderer.url + "#" + c
            );
            w(E.dy) && (h.parentNode.setAttribute("dy", E.dy), delete E.dy);
            w(E.dx) && (h.parentNode.setAttribute("dx", E.dx), delete E.dx);
            x(E, function (b, c) {
              h.setAttribute(e[c] || c, b);
            });
            d.removeAttribute("transform");
            this.removeTextOutline.call(a);
            this.text &&
              !this.renderer.styledMode &&
              this.attr({ fill: "none", "stroke-width": 0 });
            this.applyTextOutline = this.updateTransform = m;
          } else
            a &&
              (delete this.updateTransform,
              delete this.applyTextOutline,
              this.destroyTextPath(d, b),
              this.updateTransform(),
              this.options &&
                this.options.rotation &&
                this.applyTextOutline(this.options.style.textOutline));
          return this;
        };
        a.prototype.shadow = function (b, c, g) {
          var d = [],
            k = this.element,
            L = this.oldShadowOptions,
            r = {
              color: "#000000",
              offsetX: this.parentInverted ? -1 : 1,
              offsetY: this.parentInverted ? -1 : 1,
              opacity: 0.15,
              width: 3,
            },
            e = !1,
            E;
          !0 === b ? (E = r) : "object" === typeof b && (E = A(r, b));
          E &&
            (E &&
              L &&
              x(E, function (b, c) {
                b !== L[c] && (e = !0);
              }),
            e && this.destroyShadows(),
            (this.oldShadowOptions = E));
          if (!E) this.destroyShadows();
          else if (!this.shadows) {
            var a = E.opacity / E.width;
            var q = this.parentInverted
              ? "translate(" + E.offsetY + ", " + E.offsetX + ")"
              : "translate(" + E.offsetX + ", " + E.offsetY + ")";
            for (r = 1; r <= E.width; r++) {
              var l = k.cloneNode(!1);
              var n = 2 * E.width + 1 - 2 * r;
              t(l, {
                stroke: b.color || "#000000",
                "stroke-opacity": a * r,
                "stroke-width": n,
                transform: q,
                fill: "none",
              });
              l.setAttribute(
                "class",
                (l.getAttribute("class") || "") + " highcharts-shadow"
              );
              g &&
                (t(l, "height", Math.max(t(l, "height") - n, 0)),
                (l.cutHeight = n));
              c
                ? c.element.appendChild(l)
                : k.parentNode && k.parentNode.insertBefore(l, k);
              d.push(l);
            }
            this.shadows = d;
          }
          return this;
        };
        a.prototype.show = function (b) {
          return this.attr({ visibility: b ? "inherit" : "visible" });
        };
        a.prototype.strokeSetter = function (b, c, g) {
          this[c] = b;
          this.stroke && this["stroke-width"]
            ? (a.prototype.fillSetter.call(this, this.stroke, "stroke", g),
              g.setAttribute("stroke-width", this["stroke-width"]),
              (this.hasStroke = !0))
            : "stroke-width" === c && 0 === b && this.hasStroke
            ? (g.removeAttribute("stroke"), (this.hasStroke = !1))
            : this.renderer.styledMode &&
              this["stroke-width"] &&
              (g.setAttribute("stroke-width", this["stroke-width"]),
              (this.hasStroke = !0));
        };
        a.prototype.strokeWidth = function () {
          if (!this.renderer.styledMode) return this["stroke-width"] || 0;
          var b = this.getStyle("stroke-width"),
            c = 0;
          if (b.indexOf("px") === b.length - 2) c = K(b);
          else if ("" !== b) {
            var g = p.createElementNS(d, "rect");
            t(g, { width: b, "stroke-width": 0 });
            this.element.parentNode.appendChild(g);
            c = g.getBBox().width;
            g.parentNode.removeChild(g);
          }
          return c;
        };
        a.prototype.symbolAttr = function (b) {
          var c = this;
          "x y r start end width height innerR anchorX anchorY clockwise"
            .split(" ")
            .forEach(function (g) {
              c[g] = D(b[g], c[g]);
            });
          c.attr({
            d: c.renderer.symbols[c.symbolName](c.x, c.y, c.width, c.height, c),
          });
        };
        a.prototype.textSetter = function (b) {
          b !== this.textStr &&
            (delete this.textPxLength,
            (this.textStr = b),
            this.added && this.renderer.buildText(this));
        };
        a.prototype.titleSetter = function (b) {
          var c = this.element,
            g =
              c.getElementsByTagName("title")[0] ||
              p.createElementNS(this.SVG_NS, "title");
          c.insertBefore ? c.insertBefore(g, c.firstChild) : c.appendChild(g);
          g.textContent = String(D(b, ""))
            .replace(/<[^>]*>/g, "")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">");
        };
        a.prototype.toFront = function () {
          var b = this.element;
          b.parentNode.appendChild(b);
          return this;
        };
        a.prototype.translate = function (b, c) {
          return this.attr({ translateX: b, translateY: c });
        };
        a.prototype.updateShadows = function (b, c, g) {
          var d = this.shadows;
          if (d)
            for (var k = d.length; k--; )
              g.call(
                d[k],
                "height" === b
                  ? Math.max(c - (d[k].cutHeight || 0), 0)
                  : "d" === b
                  ? this.d
                  : c,
                b,
                d[k]
              );
        };
        a.prototype.updateTransform = function () {
          var b = this.scaleX,
            c = this.scaleY,
            g = this.inverted,
            d = this.rotation,
            k = this.matrix,
            r = this.element,
            e = this.translateX || 0,
            a = this.translateY || 0;
          g && ((e += this.width), (a += this.height));
          e = ["translate(" + e + "," + a + ")"];
          w(k) && e.push("matrix(" + k.join(",") + ")");
          g
            ? e.push("rotate(90) scale(-1,1)")
            : d &&
              e.push(
                "rotate(" +
                  d +
                  " " +
                  D(this.rotationOriginX, r.getAttribute("x"), 0) +
                  " " +
                  D(this.rotationOriginY, r.getAttribute("y") || 0) +
                  ")"
              );
          (w(b) || w(c)) && e.push("scale(" + D(b, 1) + " " + D(c, 1) + ")");
          e.length && r.setAttribute("transform", e.join(" "));
        };
        a.prototype.visibilitySetter = function (b, c, g) {
          "inherit" === b
            ? g.removeAttribute(c)
            : this[c] !== b && g.setAttribute(c, b);
          this[c] = b;
        };
        a.prototype.xGetter = function (b) {
          "circle" === this.element.nodeName &&
            ("x" === b ? (b = "cx") : "y" === b && (b = "cy"));
          return this._defaultGetter(b);
        };
        a.prototype.zIndexSetter = function (b, c) {
          var g = this.renderer,
            d = this.parentGroup,
            k = (d || g).element || g.box,
            r = this.element;
          g = k === g.box;
          var e = !1;
          var a = this.added;
          var E;
          w(b)
            ? (r.setAttribute("data-z-index", b),
              (b = +b),
              this[c] === b && (a = !1))
            : w(this[c]) && r.removeAttribute("data-z-index");
          this[c] = b;
          if (a) {
            (b = this.zIndex) && d && (d.handleZ = !0);
            c = k.childNodes;
            for (E = c.length - 1; 0 <= E && !e; E--) {
              d = c[E];
              a = d.getAttribute("data-z-index");
              var q = !w(a);
              if (d !== r)
                if (0 > b && q && !g && !E) k.insertBefore(r, c[E]), (e = !0);
                else if (K(a) <= b || (q && (!w(b) || 0 <= b)))
                  k.insertBefore(r, c[E + 1] || null), (e = !0);
            }
            e || (k.insertBefore(r, c[g ? 3 : 0] || null), (e = !0));
          }
          return e;
        };
        return a;
      })();
      a.prototype["stroke-widthSetter"] = a.prototype.strokeSetter;
      a.prototype.yGetter = a.prototype.xGetter;
      a.prototype.matrixSetter =
        a.prototype.rotationOriginXSetter =
        a.prototype.rotationOriginYSetter =
        a.prototype.rotationSetter =
        a.prototype.scaleXSetter =
        a.prototype.scaleYSetter =
        a.prototype.translateXSetter =
        a.prototype.translateYSetter =
        a.prototype.verticalAlignSetter =
          function (b, c) {
            this[c] = b;
            this.doTransform = !0;
          };
      ("");
      return a;
    }
  );
  M(
    f,
    "Core/Renderer/RendererRegistry.js",
    [f["Core/Globals.js"]],
    function (a) {
      var f;
      (function (f) {
        f.rendererTypes = {};
        var F;
        f.getRendererType = function (a) {
          void 0 === a && (a = F);
          return f.rendererTypes[a] || f.rendererTypes[F];
        };
        f.registerRendererType = function (u, C, I) {
          f.rendererTypes[u] = C;
          if (!F || I) (F = u), (a.Renderer = C);
        };
      })(f || (f = {}));
      return f;
    }
  );
  M(
    f,
    "Core/Renderer/SVG/SVGLabel.js",
    [f["Core/Renderer/SVG/SVGElement.js"], f["Core/Utilities.js"]],
    function (a, f) {
      var F =
          (this && this.__extends) ||
          (function () {
            var a = function (m, e) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (d, e) {
                    d.__proto__ = e;
                  }) ||
                function (d, e) {
                  for (var a in e) e.hasOwnProperty(a) && (d[a] = e[a]);
                };
              return a(m, e);
            };
            return function (m, e) {
              function d() {
                this.constructor = m;
              }
              a(m, e);
              m.prototype =
                null === e
                  ? Object.create(e)
                  : ((d.prototype = e.prototype), new d());
            };
          })(),
        G = f.defined,
        u = f.extend,
        H = f.isNumber,
        I = f.merge,
        B = f.pick,
        z = f.removeEvent;
      return (function (p) {
        function m(e, d, a, h, t, n, v, w, y, A) {
          var q = p.call(this) || this;
          q.paddingLeftSetter = q.paddingSetter;
          q.paddingRightSetter = q.paddingSetter;
          q.init(e, "g");
          q.textStr = d;
          q.x = a;
          q.y = h;
          q.anchorX = n;
          q.anchorY = v;
          q.baseline = y;
          q.className = A;
          q.addClass(
            "button" === A ? "highcharts-no-tooltip" : "highcharts-label"
          );
          A && q.addClass("highcharts-" + A);
          q.text = e.text(void 0, 0, 0, w).attr({ zIndex: 1 });
          var k;
          "string" === typeof t &&
            ((k = /^url\((.*?)\)$/.test(t)) || q.renderer.symbols[t]) &&
            (q.symbolKey = t);
          q.bBox = m.emptyBBox;
          q.padding = 3;
          q.baselineOffset = 0;
          q.needsBox = e.styledMode || k;
          q.deferredAttr = {};
          q.alignFactor = 0;
          return q;
        }
        F(m, p);
        m.prototype.alignSetter = function (e) {
          e = { left: 0, center: 0.5, right: 1 }[e];
          e !== this.alignFactor &&
            ((this.alignFactor = e),
            this.bBox && H(this.xSetting) && this.attr({ x: this.xSetting }));
        };
        m.prototype.anchorXSetter = function (e, d) {
          this.anchorX = e;
          this.boxAttr(
            d,
            Math.round(e) - this.getCrispAdjust() - this.xSetting
          );
        };
        m.prototype.anchorYSetter = function (e, d) {
          this.anchorY = e;
          this.boxAttr(d, e - this.ySetting);
        };
        m.prototype.boxAttr = function (e, d) {
          this.box ? this.box.attr(e, d) : (this.deferredAttr[e] = d);
        };
        m.prototype.css = function (e) {
          if (e) {
            var d = {};
            e = I(e);
            m.textProps.forEach(function (a) {
              "undefined" !== typeof e[a] && ((d[a] = e[a]), delete e[a]);
            });
            this.text.css(d);
            var l = "width" in d;
            "fontSize" in d || "fontWeight" in d
              ? this.updateTextPadding()
              : l && this.updateBoxSize();
          }
          return a.prototype.css.call(this, e);
        };
        m.prototype.destroy = function () {
          z(this.element, "mouseenter");
          z(this.element, "mouseleave");
          this.text && this.text.destroy();
          this.box && (this.box = this.box.destroy());
          a.prototype.destroy.call(this);
        };
        m.prototype.fillSetter = function (e, d) {
          e && (this.needsBox = !0);
          this.fill = e;
          this.boxAttr(d, e);
        };
        m.prototype.getBBox = function () {
          this.textStr &&
            0 === this.bBox.width &&
            0 === this.bBox.height &&
            this.updateBoxSize();
          var e = this.padding,
            d = B(this.paddingLeft, e);
          return {
            width: this.width,
            height: this.height,
            x: this.bBox.x - d,
            y: this.bBox.y - e,
          };
        };
        m.prototype.getCrispAdjust = function () {
          return this.renderer.styledMode && this.box
            ? (this.box.strokeWidth() % 2) / 2
            : ((this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) %
                2) /
                2;
        };
        m.prototype.heightSetter = function (e) {
          this.heightSetting = e;
        };
        m.prototype.onAdd = function () {
          var e = this.textStr;
          this.text.add(this);
          this.attr({ text: G(e) ? e : "", x: this.x, y: this.y });
          this.box &&
            G(this.anchorX) &&
            this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
        };
        m.prototype.paddingSetter = function (e, d) {
          H(e)
            ? e !== this[d] && ((this[d] = e), this.updateTextPadding())
            : (this[d] = void 0);
        };
        m.prototype.rSetter = function (e, d) {
          this.boxAttr(d, e);
        };
        m.prototype.shadow = function (e) {
          e &&
            !this.renderer.styledMode &&
            (this.updateBoxSize(), this.box && this.box.shadow(e));
          return this;
        };
        m.prototype.strokeSetter = function (e, d) {
          this.stroke = e;
          this.boxAttr(d, e);
        };
        m.prototype["stroke-widthSetter"] = function (e, d) {
          e && (this.needsBox = !0);
          this["stroke-width"] = e;
          this.boxAttr(d, e);
        };
        m.prototype["text-alignSetter"] = function (e) {
          this.textAlign = e;
        };
        m.prototype.textSetter = function (e) {
          "undefined" !== typeof e && this.text.attr({ text: e });
          this.updateTextPadding();
        };
        m.prototype.updateBoxSize = function () {
          var e = this.text.element.style,
            d = {},
            a = this.padding,
            h = (this.bBox =
              (H(this.widthSetting) &&
                H(this.heightSetting) &&
                !this.textAlign) ||
              !G(this.text.textStr)
                ? m.emptyBBox
                : this.text.getBBox());
          this.width = this.getPaddedWidth();
          this.height = (this.heightSetting || h.height || 0) + 2 * a;
          e = this.renderer.fontMetrics(e && e.fontSize, this.text);
          this.baselineOffset =
            a +
            Math.min((this.text.firstLineMetrics || e).b, h.height || Infinity);
          this.heightSetting &&
            (this.baselineOffset += (this.heightSetting - e.h) / 2);
          this.needsBox &&
            (this.box ||
              ((a = this.box =
                this.symbolKey
                  ? this.renderer.symbol(this.symbolKey)
                  : this.renderer.rect()),
              a.addClass(
                ("button" === this.className ? "" : "highcharts-label-box") +
                  (this.className
                    ? " highcharts-" + this.className + "-box"
                    : "")
              ),
              a.add(this)),
            (a = this.getCrispAdjust()),
            (d.x = a),
            (d.y = (this.baseline ? -this.baselineOffset : 0) + a),
            (d.width = Math.round(this.width)),
            (d.height = Math.round(this.height)),
            this.box.attr(u(d, this.deferredAttr)),
            (this.deferredAttr = {}));
        };
        m.prototype.updateTextPadding = function () {
          var a = this.text;
          this.updateBoxSize();
          var d = this.baseline ? 0 : this.baselineOffset,
            l = B(this.paddingLeft, this.padding);
          G(this.widthSetting) &&
            this.bBox &&
            ("center" === this.textAlign || "right" === this.textAlign) &&
            (l +=
              { center: 0.5, right: 1 }[this.textAlign] *
              (this.widthSetting - this.bBox.width));
          if (l !== a.x || d !== a.y)
            a.attr("x", l),
              a.hasBoxWidthChanged && (this.bBox = a.getBBox(!0)),
              "undefined" !== typeof d && a.attr("y", d);
          a.x = l;
          a.y = d;
        };
        m.prototype.widthSetter = function (a) {
          this.widthSetting = H(a) ? a : void 0;
        };
        m.prototype.getPaddedWidth = function () {
          var a = this.padding,
            d = B(this.paddingLeft, a);
          a = B(this.paddingRight, a);
          return (this.widthSetting || this.bBox.width || 0) + d + a;
        };
        m.prototype.xSetter = function (a) {
          this.x = a;
          this.alignFactor &&
            ((a -= this.alignFactor * this.getPaddedWidth()),
            (this["forceAnimate:x"] = !0));
          this.xSetting = Math.round(a);
          this.attr("translateX", this.xSetting);
        };
        m.prototype.ySetter = function (a) {
          this.ySetting = this.y = Math.round(a);
          this.attr("translateY", this.ySetting);
        };
        m.emptyBBox = { width: 0, height: 0, x: 0, y: 0 };
        m.textProps =
          "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(
            " "
          );
        return m;
      })(a);
    }
  );
  M(f, "Core/Renderer/SVG/Symbols.js", [f["Core/Utilities.js"]], function (a) {
    function f(a, f, p, m, e) {
      var d = [];
      if (e) {
        var l = e.start || 0,
          h = I(e.r, p);
        p = I(e.r, m || p);
        var t = (e.end || 0) - 0.001;
        m = e.innerR;
        var n = I(e.open, 0.001 > Math.abs((e.end || 0) - l - 2 * Math.PI)),
          v = Math.cos(l),
          w = Math.sin(l),
          y = Math.cos(t),
          A = Math.sin(t);
        l = I(e.longArc, 0.001 > t - l - Math.PI ? 0 : 1);
        d.push(
          ["M", a + h * v, f + p * w],
          ["A", h, p, 0, l, I(e.clockwise, 1), a + h * y, f + p * A]
        );
        u(m) &&
          d.push(
            n ? ["M", a + m * y, f + m * A] : ["L", a + m * y, f + m * A],
            [
              "A",
              m,
              m,
              0,
              l,
              u(e.clockwise) ? 1 - e.clockwise : 0,
              a + m * v,
              f + m * w,
            ]
          );
        n || d.push(["Z"]);
      }
      return d;
    }
    function C(a, f, p, m, e) {
      return e && e.r
        ? G(a, f, p, m, e)
        : [
            ["M", a, f],
            ["L", a + p, f],
            ["L", a + p, f + m],
            ["L", a, f + m],
            ["Z"],
          ];
    }
    function G(a, f, p, m, e) {
      e = (e && e.r) || 0;
      return [
        ["M", a + e, f],
        ["L", a + p - e, f],
        ["C", a + p, f, a + p, f, a + p, f + e],
        ["L", a + p, f + m - e],
        ["C", a + p, f + m, a + p, f + m, a + p - e, f + m],
        ["L", a + e, f + m],
        ["C", a, f + m, a, f + m, a, f + m - e],
        ["L", a, f + e],
        ["C", a, f, a, f, a + e, f],
      ];
    }
    var u = a.defined,
      H = a.isNumber,
      I = a.pick;
    return {
      arc: f,
      callout: function (a, f, p, m, e) {
        var d = Math.min((e && e.r) || 0, p, m),
          l = d + 6,
          h = e && e.anchorX;
        e = (e && e.anchorY) || 0;
        var t = G(a, f, p, m, { r: d });
        if (!H(h)) return t;
        a + h >= p
          ? e > f + l && e < f + m - l
            ? t.splice(
                3,
                1,
                ["L", a + p, e - 6],
                ["L", a + p + 6, e],
                ["L", a + p, e + 6],
                ["L", a + p, f + m - d]
              )
            : t.splice(
                3,
                1,
                ["L", a + p, m / 2],
                ["L", h, e],
                ["L", a + p, m / 2],
                ["L", a + p, f + m - d]
              )
          : 0 >= a + h
          ? e > f + l && e < f + m - l
            ? t.splice(
                7,
                1,
                ["L", a, e + 6],
                ["L", a - 6, e],
                ["L", a, e - 6],
                ["L", a, f + d]
              )
            : t.splice(
                7,
                1,
                ["L", a, m / 2],
                ["L", h, e],
                ["L", a, m / 2],
                ["L", a, f + d]
              )
          : e && e > m && h > a + l && h < a + p - l
          ? t.splice(
              5,
              1,
              ["L", h + 6, f + m],
              ["L", h, f + m + 6],
              ["L", h - 6, f + m],
              ["L", a + d, f + m]
            )
          : e &&
            0 > e &&
            h > a + l &&
            h < a + p - l &&
            t.splice(
              1,
              1,
              ["L", h - 6, f],
              ["L", h, f - 6],
              ["L", h + 6, f],
              ["L", p - d, f]
            );
        return t;
      },
      circle: function (a, z, p, m) {
        return f(a + p / 2, z + m / 2, p / 2, m / 2, {
          start: 0.5 * Math.PI,
          end: 2.5 * Math.PI,
          open: !1,
        });
      },
      diamond: function (a, f, p, m) {
        return [
          ["M", a + p / 2, f],
          ["L", a + p, f + m / 2],
          ["L", a + p / 2, f + m],
          ["L", a, f + m / 2],
          ["Z"],
        ];
      },
      rect: C,
      roundedRect: G,
      square: C,
      triangle: function (a, f, p, m) {
        return [
          ["M", a + p / 2, f],
          ["L", a + p, f + m],
          ["L", a, f + m],
          ["Z"],
        ];
      },
      "triangle-down": function (a, f, p, m) {
        return [["M", a, f], ["L", a + p, f], ["L", a + p / 2, f + m], ["Z"]];
      },
    };
  });
  M(
    f,
    "Core/Renderer/SVG/TextBuilder.js",
    [
      f["Core/Renderer/HTML/AST.js"],
      f["Core/Globals.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C) {
      var F = f.doc,
        u = f.SVG_NS,
        H = f.win,
        I = C.attr,
        B = C.extend,
        z = C.isString,
        p = C.objectEach,
        m = C.pick;
      return (function () {
        function e(d) {
          var a = d.styles;
          this.renderer = d.renderer;
          this.svgElement = d;
          this.width = d.textWidth;
          this.textLineHeight = a && a.lineHeight;
          this.textOutline = a && a.textOutline;
          this.ellipsis = !(!a || "ellipsis" !== a.textOverflow);
          this.noWrap = !(!a || "nowrap" !== a.whiteSpace);
          this.fontSize = a && a.fontSize;
        }
        e.prototype.buildSVG = function () {
          var d = this.svgElement,
            e = d.element,
            h = d.renderer,
            t = m(d.textStr, "").toString(),
            n = -1 !== t.indexOf("<"),
            f = e.childNodes;
          h = this.width && !d.added && h.box;
          var w = /<br.*?>/g,
            y = [
              t,
              this.ellipsis,
              this.noWrap,
              this.textLineHeight,
              this.textOutline,
              this.fontSize,
              this.width,
            ].join();
          if (y !== d.textCache) {
            d.textCache = y;
            delete d.actualWidth;
            for (y = f.length; y--; ) e.removeChild(f[y]);
            n ||
            this.ellipsis ||
            this.width ||
            (-1 !== t.indexOf(" ") && (!this.noWrap || w.test(t)))
              ? "" !== t &&
                (h && h.appendChild(e),
                (t = new a(t)),
                this.modifyTree(t.nodes),
                t.addToDOM(d.element),
                this.modifyDOM(),
                this.ellipsis &&
                  -1 !== (e.textContent || "").indexOf("\u2026") &&
                  d.attr(
                    "title",
                    this.unescapeEntities(d.textStr || "", ["&lt;", "&gt;"])
                  ),
                h && h.removeChild(e))
              : e.appendChild(F.createTextNode(this.unescapeEntities(t)));
            z(this.textOutline) &&
              d.applyTextOutline &&
              d.applyTextOutline(this.textOutline);
          }
        };
        e.prototype.modifyDOM = function () {
          var d = this,
            a = this.svgElement,
            e = I(a.element, "x");
          a.firstLineMetrics = void 0;
          for (var t; (t = a.element.firstChild); )
            if (/^[\s\u200B]*$/.test(t.textContent || " "))
              a.element.removeChild(t);
            else break;
          [].forEach.call(
            a.element.querySelectorAll("tspan.highcharts-br"),
            function (n, h) {
              n.nextSibling &&
                n.previousSibling &&
                (0 === h &&
                  1 === n.previousSibling.nodeType &&
                  (a.firstLineMetrics = a.renderer.fontMetrics(
                    void 0,
                    n.previousSibling
                  )),
                I(n, { dy: d.getLineHeight(n.nextSibling), x: e }));
            }
          );
          var n = this.width || 0;
          if (n) {
            var f = function (h, l) {
                var q = h.textContent || "",
                  k = q.replace(/([^\^])-/g, "$1- ").split(" "),
                  c =
                    !d.noWrap &&
                    (1 < k.length || 1 < a.element.childNodes.length),
                  g = d.getLineHeight(l),
                  b = 0,
                  r = a.actualWidth;
                if (d.ellipsis)
                  q &&
                    d.truncate(
                      h,
                      q,
                      void 0,
                      0,
                      Math.max(0, n - parseInt(d.fontSize || 12, 10)),
                      function (b, c) {
                        return b.substring(0, c) + "\u2026";
                      }
                    );
                else if (c) {
                  q = [];
                  for (c = []; l.firstChild && l.firstChild !== h; )
                    c.push(l.firstChild), l.removeChild(l.firstChild);
                  for (; k.length; )
                    k.length &&
                      !d.noWrap &&
                      0 < b &&
                      (q.push(h.textContent || ""),
                      (h.textContent = k.join(" ").replace(/- /g, "-"))),
                      d.truncate(
                        h,
                        void 0,
                        k,
                        0 === b ? r || 0 : 0,
                        n,
                        function (b, c) {
                          return k.slice(0, c).join(" ").replace(/- /g, "-");
                        }
                      ),
                      (r = a.actualWidth),
                      b++;
                  c.forEach(function (b) {
                    l.insertBefore(b, h);
                  });
                  q.forEach(function (b) {
                    l.insertBefore(F.createTextNode(b), h);
                    b = F.createElementNS(u, "tspan");
                    b.textContent = "\u200b";
                    I(b, { dy: g, x: e });
                    l.insertBefore(b, h);
                  });
                }
              },
              m = function (d) {
                [].slice.call(d.childNodes).forEach(function (e) {
                  e.nodeType === H.Node.TEXT_NODE
                    ? f(e, d)
                    : (-1 !== e.className.baseVal.indexOf("highcharts-br") &&
                        (a.actualWidth = 0),
                      m(e));
                });
              };
            m(a.element);
          }
        };
        e.prototype.getLineHeight = function (d) {
          var a;
          d = d.nodeType === H.Node.TEXT_NODE ? d.parentElement : d;
          this.renderer.styledMode ||
            (a =
              d && /(px|em)$/.test(d.style.fontSize)
                ? d.style.fontSize
                : this.fontSize || this.renderer.style.fontSize || 12);
          return this.textLineHeight
            ? parseInt(this.textLineHeight.toString(), 10)
            : this.renderer.fontMetrics(a, d || this.svgElement.element).h;
        };
        e.prototype.modifyTree = function (d) {
          var a = this,
            e = function (h, n) {
              var l = h.attributes;
              l = void 0 === l ? {} : l;
              var f = h.children,
                t = h.style;
              t = void 0 === t ? {} : t;
              var m = h.tagName,
                q = a.renderer.styledMode;
              if ("b" === m || "strong" === m)
                q
                  ? (l["class"] = "highcharts-strong")
                  : (t.fontWeight = "bold");
              else if ("i" === m || "em" === m)
                q
                  ? (l["class"] = "highcharts-emphasized")
                  : (t.fontStyle = "italic");
              t && t.color && (t.fill = t.color);
              "br" === m
                ? ((l["class"] = "highcharts-br"),
                  (h.textContent = "\u200b"),
                  (n = d[n + 1]) &&
                    n.textContent &&
                    (n.textContent = n.textContent.replace(/^ +/gm, "")))
                : "a" === m &&
                  f &&
                  f.some(function (d) {
                    return "#text" === d.tagName;
                  }) &&
                  (h.children = [{ children: f, tagName: "tspan" }]);
              "#text" !== m && "a" !== m && (h.tagName = "tspan");
              B(h, { attributes: l, style: t });
              f &&
                f
                  .filter(function (d) {
                    return "#text" !== d.tagName;
                  })
                  .forEach(e);
            };
          d.forEach(e);
        };
        e.prototype.truncate = function (d, a, e, t, n, f) {
          var h = this.svgElement,
            l = h.renderer,
            m = h.rotation,
            q = [],
            k = e ? 1 : 0,
            c = (a || e || "").length,
            g = c,
            b,
            r = function (b, c) {
              c = c || b;
              var g = d.parentNode;
              if (g && "undefined" === typeof q[c])
                if (g.getSubStringLength)
                  try {
                    q[c] = t + g.getSubStringLength(0, e ? c + 1 : c);
                  } catch (Q) {
                    ("");
                  }
                else
                  l.getSpanWidth &&
                    ((d.textContent = f(a || e, b)),
                    (q[c] = t + l.getSpanWidth(h, d)));
              return q[c];
            };
          h.rotation = 0;
          var x = r(d.textContent.length);
          if (t + x > n) {
            for (; k <= c; )
              (g = Math.ceil((k + c) / 2)),
                e && (b = f(e, g)),
                (x = r(g, b && b.length - 1)),
                k === c ? (k = c + 1) : x > n ? (c = g - 1) : (k = g);
            0 === c
              ? (d.textContent = "")
              : (a && c === a.length - 1) ||
                (d.textContent = b || f(a || e, g));
          }
          e && e.splice(0, g);
          h.actualWidth = x;
          h.rotation = m;
        };
        e.prototype.unescapeEntities = function (d, a) {
          p(this.renderer.escapes, function (e, l) {
            (a && -1 !== a.indexOf(e)) ||
              (d = d.toString().replace(new RegExp(e, "g"), l));
          });
          return d;
        };
        return e;
      })();
    }
  );
  M(
    f,
    "Core/Renderer/SVG/SVGRenderer.js",
    [
      f["Core/Renderer/HTML/AST.js"],
      f["Core/Color/Color.js"],
      f["Core/Globals.js"],
      f["Core/Renderer/RendererRegistry.js"],
      f["Core/Renderer/SVG/SVGElement.js"],
      f["Core/Renderer/SVG/SVGLabel.js"],
      f["Core/Renderer/SVG/Symbols.js"],
      f["Core/Renderer/SVG/TextBuilder.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G, u, H, I, B, z) {
      var p = C.charts,
        m = C.deg2rad,
        e = C.doc,
        d = C.isFirefox,
        l = C.isMS,
        h = C.isWebKit,
        t = C.noop,
        n = C.SVG_NS,
        v = C.symbolSizes,
        w = C.win,
        y = z.addEvent,
        A = z.attr,
        q = z.createElement,
        k = z.css,
        c = z.defined,
        g = z.destroyObjectProperties,
        b = z.extend,
        r = z.isArray,
        x = z.isNumber,
        D = z.isObject,
        K = z.isString,
        P = z.merge,
        Q = z.pick,
        O = z.pInt,
        F = z.uniqueKey,
        Z;
      C = (function () {
        function L(b, c, g, d, a, k, e) {
          this.width =
            this.url =
            this.style =
            this.isSVG =
            this.imgCount =
            this.height =
            this.gradients =
            this.globalAnimation =
            this.defs =
            this.chartIndex =
            this.cacheKeys =
            this.cache =
            this.boxWrapper =
            this.box =
            this.alignedObjects =
              void 0;
          this.init(b, c, g, d, a, k, e);
        }
        L.prototype.init = function (b, c, g, a, r, E, L) {
          var q = this.createElement("svg").attr({
              version: "1.1",
              class: "highcharts-root",
            }),
            J = q.element;
          L || q.css(this.getStyle(a));
          b.appendChild(J);
          A(b, "dir", "ltr");
          -1 === b.innerHTML.indexOf("xmlns") && A(J, "xmlns", this.SVG_NS);
          this.isSVG = !0;
          this.box = J;
          this.boxWrapper = q;
          this.alignedObjects = [];
          this.url = this.getReferenceURL();
          this.createElement("desc")
            .add()
            .element.appendChild(
              e.createTextNode("Created with Highcharts 10.0.0")
            );
          this.defs = this.createElement("defs").add();
          this.allowHTML = E;
          this.forExport = r;
          this.styledMode = L;
          this.gradients = {};
          this.cache = {};
          this.cacheKeys = [];
          this.imgCount = 0;
          this.setSize(c, g, !1);
          var n;
          d &&
            b.getBoundingClientRect &&
            ((c = function () {
              k(b, { left: 0, top: 0 });
              n = b.getBoundingClientRect();
              k(b, {
                left: Math.ceil(n.left) - n.left + "px",
                top: Math.ceil(n.top) - n.top + "px",
              });
            }),
            c(),
            (this.unSubPixelFix = y(w, "resize", c)));
        };
        L.prototype.definition = function (b) {
          return new a([b]).addToDOM(this.defs.element);
        };
        L.prototype.getReferenceURL = function () {
          if ((d || h) && e.getElementsByTagName("base").length) {
            if (!c(Z)) {
              var b = F();
              b = new a([
                {
                  tagName: "svg",
                  attributes: { width: 8, height: 8 },
                  children: [
                    {
                      tagName: "defs",
                      children: [
                        {
                          tagName: "clipPath",
                          attributes: { id: b },
                          children: [
                            {
                              tagName: "rect",
                              attributes: { width: 4, height: 4 },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tagName: "rect",
                      attributes: {
                        id: "hitme",
                        width: 8,
                        height: 8,
                        "clip-path": "url(#" + b + ")",
                        fill: "rgba(0,0,0,0.001)",
                      },
                    },
                  ],
                },
              ]).addToDOM(e.body);
              k(b, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
              var g = e.elementFromPoint(6, 6);
              Z = "hitme" === (g && g.id);
              e.body.removeChild(b);
            }
            if (Z)
              return w.location.href
                .split("#")[0]
                .replace(/<[^>]*>/g, "")
                .replace(/([\('\)])/g, "\\$1")
                .replace(/ /g, "%20");
          }
          return "";
        };
        L.prototype.getStyle = function (c) {
          return (this.style = b(
            {
              fontFamily:
                '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
              fontSize: "12px",
            },
            c
          ));
        };
        L.prototype.setStyle = function (b) {
          this.boxWrapper.css(this.getStyle(b));
        };
        L.prototype.isHidden = function () {
          return !this.boxWrapper.getBBox().width;
        };
        L.prototype.destroy = function () {
          var b = this.defs;
          this.box = null;
          this.boxWrapper = this.boxWrapper.destroy();
          g(this.gradients || {});
          this.gradients = null;
          b && (this.defs = b.destroy());
          this.unSubPixelFix && this.unSubPixelFix();
          return (this.alignedObjects = null);
        };
        L.prototype.createElement = function (b) {
          var c = new this.Element();
          c.init(this, b);
          return c;
        };
        L.prototype.getRadialAttr = function (b, c) {
          return {
            cx: b[0] - b[2] / 2 + (c.cx || 0) * b[2],
            cy: b[1] - b[2] / 2 + (c.cy || 0) * b[2],
            r: (c.r || 0) * b[2],
          };
        };
        L.prototype.buildText = function (b) {
          new B(b).buildSVG();
        };
        L.prototype.getContrast = function (b) {
          b = f.parse(b).rgba;
          b[0] *= 1;
          b[1] *= 1.2;
          b[2] *= 0.5;
          return 459 < b[0] + b[1] + b[2] ? "#000000" : "#FFFFFF";
        };
        L.prototype.button = function (c, g, d, k, e, r, L, q, n, h) {
          var E = this.label(c, g, d, n, void 0, void 0, h, void 0, "button"),
            x = this.styledMode,
            J = 0,
            f = e ? P(e) : {},
            t = P(
              { color: "#333333", cursor: "pointer", fontWeight: "normal" },
              f.style
            );
          delete f.style;
          f = a.filterUserAttributes(f);
          E.attr(P({ padding: 8, r: 2 }, f));
          if (!x) {
            f = P({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1 }, f);
            r = P(f, { fill: "#e6e6e6" }, a.filterUserAttributes(r || {}));
            var N = r.style;
            delete r.style;
            L = P(
              f,
              {
                fill: "#e6ebf5",
                style: { color: "#000000", fontWeight: "bold" },
              },
              a.filterUserAttributes(L || {})
            );
            var m = L.style;
            delete L.style;
            q = P(
              f,
              { style: { color: "#cccccc" } },
              a.filterUserAttributes(q || {})
            );
            var w = q.style;
            delete q.style;
          }
          y(E.element, l ? "mouseover" : "mouseenter", function () {
            3 !== J && E.setState(1);
          });
          y(E.element, l ? "mouseout" : "mouseleave", function () {
            3 !== J && E.setState(J);
          });
          E.setState = function (b) {
            1 !== b && (E.state = J = b);
            E.removeClass(
              /highcharts-button-(normal|hover|pressed|disabled)/
            ).addClass(
              "highcharts-button-" +
                ["normal", "hover", "pressed", "disabled"][b || 0]
            );
            x ||
              (E.attr([f, r, L, q][b || 0]),
              (b = [t, N, m, w][b || 0]),
              D(b) && E.css(b));
          };
          x || E.attr(f).css(b({ cursor: "default" }, t));
          return E.on("touchstart", function (b) {
            return b.stopPropagation();
          }).on("click", function (b) {
            3 !== J && k.call(E, b);
          });
        };
        L.prototype.crispLine = function (b, g, d) {
          void 0 === d && (d = "round");
          var a = b[0],
            k = b[1];
          c(a[1]) &&
            a[1] === k[1] &&
            (a[1] = k[1] = Math[d](a[1]) - (g % 2) / 2);
          c(a[2]) &&
            a[2] === k[2] &&
            (a[2] = k[2] = Math[d](a[2]) + (g % 2) / 2);
          return b;
        };
        L.prototype.path = function (c) {
          var g = this.styledMode ? {} : { fill: "none" };
          r(c) ? (g.d = c) : D(c) && b(g, c);
          return this.createElement("path").attr(g);
        };
        L.prototype.circle = function (b, c, g) {
          b = D(b) ? b : "undefined" === typeof b ? {} : { x: b, y: c, r: g };
          c = this.createElement("circle");
          c.xSetter = c.ySetter = function (b, c, g) {
            g.setAttribute("c" + c, b);
          };
          return c.attr(b);
        };
        L.prototype.arc = function (b, c, g, d, a, k) {
          D(b)
            ? ((d = b), (c = d.y), (g = d.r), (b = d.x))
            : (d = { innerR: d, start: a, end: k });
          b = this.symbol("arc", b, c, g, g, d);
          b.r = g;
          return b;
        };
        L.prototype.rect = function (b, c, g, d, a, k) {
          a = D(b) ? b.r : a;
          var e = this.createElement("rect");
          b = D(b)
            ? b
            : "undefined" === typeof b
            ? {}
            : { x: b, y: c, width: Math.max(g, 0), height: Math.max(d, 0) };
          this.styledMode ||
            ("undefined" !== typeof k &&
              ((b["stroke-width"] = k), (b = e.crisp(b))),
            (b.fill = "none"));
          a && (b.r = a);
          e.rSetter = function (b, c, g) {
            e.r = b;
            A(g, { rx: b, ry: b });
          };
          e.rGetter = function () {
            return e.r || 0;
          };
          return e.attr(b);
        };
        L.prototype.setSize = function (b, c, g) {
          this.width = b;
          this.height = c;
          this.boxWrapper.animate(
            { width: b, height: c },
            {
              step: function () {
                this.attr({
                  viewBox:
                    "0 0 " + this.attr("width") + " " + this.attr("height"),
                });
              },
              duration: Q(g, !0) ? void 0 : 0,
            }
          );
          this.alignElements();
        };
        L.prototype.g = function (b) {
          var c = this.createElement("g");
          return b ? c.attr({ class: "highcharts-" + b }) : c;
        };
        L.prototype.image = function (b, c, g, d, a, k) {
          var e = { preserveAspectRatio: "none" },
            r = function (b, c) {
              b.setAttributeNS
                ? b.setAttributeNS("http://www.w3.org/1999/xlink", "href", c)
                : b.setAttribute("hc-svg-href", c);
            };
          x(c) && (e.x = c);
          x(g) && (e.y = g);
          x(d) && (e.width = d);
          x(a) && (e.height = a);
          var E = this.createElement("image").attr(e);
          c = function (c) {
            r(E.element, b);
            k.call(E, c);
          };
          k
            ? (r(
                E.element,
                "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              ),
              (g = new w.Image()),
              y(g, "load", c),
              (g.src = b),
              g.complete && c({}))
            : r(E.element, b);
          return E;
        };
        L.prototype.symbol = function (g, d, a, r, L, E) {
          var n = this,
            h = /^url\((.*?)\)$/,
            x = h.test(g),
            l = !x && (this.symbols[g] ? g : "circle"),
            D = l && this.symbols[l],
            f;
          if (D) {
            "number" === typeof d &&
              (f = D.call(
                this.symbols,
                Math.round(d || 0),
                Math.round(a || 0),
                r || 0,
                L || 0,
                E
              ));
            var t = this.path(f);
            n.styledMode || t.attr("fill", "none");
            b(t, { symbolName: l || void 0, x: d, y: a, width: r, height: L });
            E && b(t, E);
          } else if (x) {
            var m = g.match(h)[1];
            var J = (t = this.image(m));
            J.imgwidth = Q(v[m] && v[m].width, E && E.width);
            J.imgheight = Q(v[m] && v[m].height, E && E.height);
            var y = function (b) {
              return b.attr({ width: b.width, height: b.height });
            };
            ["width", "height"].forEach(function (b) {
              J[b + "Setter"] = function (b, g) {
                var d = this["img" + g];
                this[g] = b;
                c(d) &&
                  (E &&
                    "within" === E.backgroundSize &&
                    this.width &&
                    this.height &&
                    (d = Math.round(
                      d *
                        Math.min(
                          this.width / this.imgwidth,
                          this.height / this.imgheight
                        )
                    )),
                  this.element && this.element.setAttribute(g, d),
                  this.alignByTranslate ||
                    ((b = ((this[g] || 0) - d) / 2),
                    this.attr(
                      "width" === g ? { translateX: b } : { translateY: b }
                    )));
              };
            });
            c(d) && J.attr({ x: d, y: a });
            J.isImg = !0;
            c(J.imgwidth) && c(J.imgheight)
              ? y(J)
              : (J.attr({ width: 0, height: 0 }),
                q("img", {
                  onload: function () {
                    var b = p[n.chartIndex];
                    0 === this.width &&
                      (k(this, { position: "absolute", top: "-999em" }),
                      e.body.appendChild(this));
                    v[m] = { width: this.width, height: this.height };
                    J.imgwidth = this.width;
                    J.imgheight = this.height;
                    J.element && y(J);
                    this.parentNode && this.parentNode.removeChild(this);
                    n.imgCount--;
                    if (!n.imgCount && b && !b.hasLoaded) b.onload();
                  },
                  src: m,
                }),
                this.imgCount++);
          }
          return t;
        };
        L.prototype.clipRect = function (b, c, g, d) {
          var a = F() + "-",
            k = this.createElement("clipPath").attr({ id: a }).add(this.defs);
          b = this.rect(b, c, g, d, 0).add(k);
          b.id = a;
          b.clipPath = k;
          b.count = 0;
          return b;
        };
        L.prototype.text = function (b, g, d, a) {
          var k = {};
          if (a && (this.allowHTML || !this.forExport))
            return this.html(b, g, d);
          k.x = Math.round(g || 0);
          d && (k.y = Math.round(d));
          c(b) && (k.text = b);
          b = this.createElement("text").attr(k);
          if (!a || (this.forExport && !this.allowHTML))
            b.xSetter = function (b, c, g) {
              for (
                var d = g.getElementsByTagName("tspan"),
                  a = g.getAttribute(c),
                  k = 0,
                  e;
                k < d.length;
                k++
              )
                (e = d[k]), e.getAttribute(c) === a && e.setAttribute(c, b);
              g.setAttribute(c, b);
            };
          return b;
        };
        L.prototype.fontMetrics = function (b, c) {
          b =
            (!this.styledMode && /px/.test(b)) || !w.getComputedStyle
              ? b ||
                (c && c.style && c.style.fontSize) ||
                (this.style && this.style.fontSize)
              : c && u.prototype.getStyle.call(c, "font-size");
          b = /px/.test(b) ? O(b) : 12;
          c = 24 > b ? b + 3 : Math.round(1.2 * b);
          return { h: c, b: Math.round(0.8 * c), f: b };
        };
        L.prototype.rotCorr = function (b, c, g) {
          var d = b;
          c && g && (d = Math.max(d * Math.cos(c * m), 4));
          return { x: (-b / 3) * Math.sin(c * m), y: d };
        };
        L.prototype.pathToSegments = function (b) {
          for (
            var c = [],
              g = [],
              d = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 },
              a = 0;
            a < b.length;
            a++
          )
            K(g[0]) &&
              x(b[a]) &&
              g.length === d[g[0].toUpperCase()] &&
              b.splice(a, 0, g[0].replace("M", "L").replace("m", "l")),
              "string" === typeof b[a] &&
                (g.length && c.push(g.slice(0)), (g.length = 0)),
              g.push(b[a]);
          c.push(g.slice(0));
          return c;
        };
        L.prototype.label = function (b, c, g, d, a, k, e, r, L) {
          return new H(this, b, c, g, d, a, k, e, r, L);
        };
        L.prototype.alignElements = function () {
          this.alignedObjects.forEach(function (b) {
            return b.align();
          });
        };
        return L;
      })();
      b(C.prototype, {
        Element: u,
        SVG_NS: n,
        escapes: {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        },
        symbols: I,
        draw: t,
      });
      G.registerRendererType("svg", C, !0);
      ("");
      return C;
    }
  );
  M(
    f,
    "Core/Renderer/HTML/HTMLElement.js",
    [
      f["Core/Globals.js"],
      f["Core/Renderer/SVG/SVGElement.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C) {
      var F =
          (this && this.__extends) ||
          (function () {
            var d = function (a, e) {
              d =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (d, a) {
                    d.__proto__ = a;
                  }) ||
                function (d, a) {
                  for (var e in a) a.hasOwnProperty(e) && (d[e] = a[e]);
                };
              return d(a, e);
            };
            return function (a, e) {
              function n() {
                this.constructor = a;
              }
              d(a, e);
              a.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            };
          })(),
        u = a.isFirefox,
        H = a.isMS,
        I = a.isWebKit,
        B = a.win,
        z = C.css,
        p = C.defined,
        m = C.extend,
        e = C.pick,
        d = C.pInt;
      return (function (a) {
        function h() {
          return (null !== a && a.apply(this, arguments)) || this;
        }
        F(h, a);
        h.compose = function (d) {
          if (-1 === h.composedClasses.indexOf(d)) {
            h.composedClasses.push(d);
            var a = h.prototype,
              e = d.prototype;
            e.getSpanCorrection = a.getSpanCorrection;
            e.htmlCss = a.htmlCss;
            e.htmlGetBBox = a.htmlGetBBox;
            e.htmlUpdateTransform = a.htmlUpdateTransform;
            e.setSpanRotation = a.setSpanRotation;
          }
          return d;
        };
        h.prototype.getSpanCorrection = function (d, a, e) {
          this.xCorr = -d * e;
          this.yCorr = -a;
        };
        h.prototype.htmlCss = function (d) {
          var a = "SPAN" === this.element.tagName && d && "width" in d,
            h = e(a && d.width, void 0);
          if (a) {
            delete d.width;
            this.textWidth = h;
            var l = !0;
          }
          d &&
            "ellipsis" === d.textOverflow &&
            ((d.whiteSpace = "nowrap"), (d.overflow = "hidden"));
          this.styles = m(this.styles, d);
          z(this.element, d);
          l && this.htmlUpdateTransform();
          return this;
        };
        h.prototype.htmlGetBBox = function () {
          var d = this.element;
          return {
            x: d.offsetLeft,
            y: d.offsetTop,
            width: d.offsetWidth,
            height: d.offsetHeight,
          };
        };
        h.prototype.htmlUpdateTransform = function () {
          if (this.added) {
            var a = this.renderer,
              e = this.element,
              h = this.translateX || 0,
              l = this.translateY || 0,
              f = this.x || 0,
              m = this.y || 0,
              q = this.textAlign || "left",
              k = { left: 0, center: 0.5, right: 1 }[q],
              c = this.styles;
            c = c && c.whiteSpace;
            z(e, { marginLeft: h, marginTop: l });
            !a.styledMode &&
              this.shadows &&
              this.shadows.forEach(function (b) {
                z(b, { marginLeft: h + 1, marginTop: l + 1 });
              });
            this.inverted &&
              [].forEach.call(e.childNodes, function (b) {
                a.invertChild(b, e);
              });
            if ("SPAN" === e.tagName) {
              var g = this.rotation,
                b = this.textWidth && d(this.textWidth),
                r = [g, q, e.innerHTML, this.textWidth, this.textAlign].join(),
                x = void 0;
              x = !1;
              if (b !== this.oldTextWidth) {
                if (this.textPxLength) var D = this.textPxLength;
                else
                  z(e, { width: "", whiteSpace: c || "nowrap" }),
                    (D = e.offsetWidth);
                (b > this.oldTextWidth || D > b) &&
                  (/[ \-]/.test(e.textContent || e.innerText) ||
                    "ellipsis" === e.style.textOverflow) &&
                  (z(e, {
                    width: D > b || g ? b + "px" : "auto",
                    display: "block",
                    whiteSpace: c || "normal",
                  }),
                  (this.oldTextWidth = b),
                  (x = !0));
              }
              this.hasBoxWidthChanged = x;
              r !== this.cTT &&
                ((x = a.fontMetrics(e.style.fontSize, e).b),
                !p(g) ||
                  (g === (this.oldRotation || 0) && q === this.oldAlign) ||
                  this.setSpanRotation(g, k, x),
                this.getSpanCorrection(
                  (!p(g) && this.textPxLength) || e.offsetWidth,
                  x,
                  k,
                  g,
                  q
                ));
              z(e, {
                left: f + (this.xCorr || 0) + "px",
                top: m + (this.yCorr || 0) + "px",
              });
              this.cTT = r;
              this.oldRotation = g;
              this.oldAlign = q;
            }
          } else this.alignOnAdd = !0;
        };
        h.prototype.setSpanRotation = function (d, a, e) {
          var h = {},
            n =
              H && !/Edge/.test(B.navigator.userAgent)
                ? "-ms-transform"
                : I
                ? "-webkit-transform"
                : u
                ? "MozTransform"
                : B.opera
                ? "-o-transform"
                : void 0;
          n &&
            ((h[n] = h.transform = "rotate(" + d + "deg)"),
            (h[n + (u ? "Origin" : "-origin")] = h.transformOrigin =
              100 * a + "% " + e + "px"),
            z(this.element, h));
        };
        h.composedClasses = [];
        return h;
      })(f);
    }
  );
  M(
    f,
    "Core/Renderer/HTML/HTMLRenderer.js",
    [
      f["Core/Renderer/HTML/AST.js"],
      f["Core/Renderer/SVG/SVGElement.js"],
      f["Core/Renderer/SVG/SVGRenderer.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G) {
      var F =
          (this && this.__extends) ||
          (function () {
            var a = function (f, e) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (d, a) {
                    d.__proto__ = a;
                  }) ||
                function (d, a) {
                  for (var e in a) a.hasOwnProperty(e) && (d[e] = a[e]);
                };
              return a(f, e);
            };
            return function (f, e) {
              function d() {
                this.constructor = f;
              }
              a(f, e);
              f.prototype =
                null === e
                  ? Object.create(e)
                  : ((d.prototype = e.prototype), new d());
            };
          })(),
        H = G.attr,
        I = G.createElement,
        B = G.extend,
        z = G.pick;
      return (function (p) {
        function m() {
          return (null !== p && p.apply(this, arguments)) || this;
        }
        F(m, p);
        m.compose = function (a) {
          -1 === m.composedClasses.indexOf(a) &&
            (m.composedClasses.push(a), (a.prototype.html = m.prototype.html));
          return a;
        };
        m.prototype.html = function (e, d, l) {
          var h = this.createElement("span"),
            m = h.element,
            n = h.renderer,
            p = n.isSVG,
            w = function (d, a) {
              ["opacity", "visibility"].forEach(function (e) {
                d[e + "Setter"] = function (k, c, g) {
                  var b = d.div ? d.div.style : a;
                  f.prototype[e + "Setter"].call(this, k, c, g);
                  b && (b[c] = k);
                };
              });
              d.addedSetters = !0;
            };
          h.textSetter = function (d) {
            d !== this.textStr &&
              (delete this.bBox,
              delete this.oldTextWidth,
              a.setElementHTML(this.element, z(d, "")),
              (this.textStr = d),
              (h.doTransform = !0));
          };
          p && w(h, h.element.style);
          h.xSetter =
            h.ySetter =
            h.alignSetter =
            h.rotationSetter =
              function (d, a) {
                "align" === a ? (h.alignValue = h.textAlign = d) : (h[a] = d);
                h.doTransform = !0;
              };
          h.afterSetters = function () {
            this.doTransform &&
              (this.htmlUpdateTransform(), (this.doTransform = !1));
          };
          h.attr({ text: e, x: Math.round(d), y: Math.round(l) }).css({
            position: "absolute",
          });
          n.styledMode ||
            h.css({
              fontFamily: this.style.fontFamily,
              fontSize: this.style.fontSize,
            });
          m.style.whiteSpace = "nowrap";
          h.css = h.htmlCss;
          p &&
            (h.add = function (d) {
              var a = n.box.parentNode,
                e = [];
              if ((this.parentGroup = d)) {
                var k = d.div;
                if (!k) {
                  for (; d; ) e.push(d), (d = d.parentGroup);
                  e.reverse().forEach(function (c) {
                    function g(b, g) {
                      c[g] = b;
                      "translateX" === g
                        ? (q.left = b + "px")
                        : (q.top = b + "px");
                      c.doTransform = !0;
                    }
                    var b = H(c.element, "class"),
                      d = c.styles || {};
                    k = c.div =
                      c.div ||
                      I(
                        "div",
                        b ? { className: b } : void 0,
                        {
                          position: "absolute",
                          left: (c.translateX || 0) + "px",
                          top: (c.translateY || 0) + "px",
                          display: c.display,
                          opacity: c.opacity,
                          cursor: d.cursor,
                          pointerEvents: d.pointerEvents,
                          visibility: c.visibility,
                        },
                        k || a
                      );
                    var q = k.style;
                    B(c, {
                      classSetter: (function (b) {
                        return function (c) {
                          this.element.setAttribute("class", c);
                          b.className = c;
                        };
                      })(k),
                      on: function () {
                        e[0].div &&
                          h.on.apply(
                            { element: e[0].div, onEvents: c.onEvents },
                            arguments
                          );
                        return c;
                      },
                      translateXSetter: g,
                      translateYSetter: g,
                    });
                    c.addedSetters || w(c);
                  });
                }
              } else k = a;
              k.appendChild(m);
              h.added = !0;
              h.alignOnAdd && h.htmlUpdateTransform();
              return h;
            });
          return h;
        };
        m.composedClasses = [];
        return m;
      })(C);
    }
  );
  M(f, "Core/Axis/AxisDefaults.js", [], function () {
    var a;
    (function (a) {
      a.defaultXAxisOptions = {
        alignTicks: !0,
        allowDecimals: void 0,
        panningEnabled: !0,
        zIndex: 2,
        zoomEnabled: !0,
        dateTimeLabelFormats: {
          millisecond: { main: "%H:%M:%S.%L", range: !1 },
          second: { main: "%H:%M:%S", range: !1 },
          minute: { main: "%H:%M", range: !1 },
          hour: { main: "%H:%M", range: !1 },
          day: { main: "%e. %b" },
          week: { main: "%e. %b" },
          month: { main: "%b '%y" },
          year: { main: "%Y" },
        },
        endOnTick: !1,
        gridLineDashStyle: "Solid",
        gridZIndex: 1,
        labels: {
          autoRotation: void 0,
          autoRotationLimit: 80,
          distance: void 0,
          enabled: !0,
          indentation: 10,
          overflow: "justify",
          padding: 5,
          reserveSpace: void 0,
          rotation: void 0,
          staggerLines: 0,
          step: 0,
          useHTML: !1,
          x: 0,
          zIndex: 7,
          style: { color: "#666666", cursor: "default", fontSize: "11px" },
        },
        maxPadding: 0.01,
        minorGridLineDashStyle: "Solid",
        minorTickLength: 2,
        minorTickPosition: "outside",
        minPadding: 0.01,
        offset: void 0,
        opposite: !1,
        reversed: void 0,
        reversedStacks: !1,
        showEmpty: !0,
        showFirstLabel: !0,
        showLastLabel: !0,
        startOfWeek: 1,
        startOnTick: !1,
        tickLength: 10,
        tickPixelInterval: 100,
        tickmarkPlacement: "between",
        tickPosition: "outside",
        title: {
          align: "middle",
          rotation: 0,
          useHTML: !1,
          x: 0,
          y: 0,
          style: { color: "#666666" },
        },
        type: "linear",
        uniqueNames: !0,
        visible: !0,
        minorGridLineColor: "#f2f2f2",
        minorGridLineWidth: 1,
        minorTickColor: "#999999",
        lineColor: "#ccd6eb",
        lineWidth: 1,
        gridLineColor: "#e6e6e6",
        gridLineWidth: void 0,
        tickColor: "#ccd6eb",
      };
      a.defaultYAxisOptions = {
        reversedStacks: !0,
        endOnTick: !0,
        maxPadding: 0.05,
        minPadding: 0.05,
        tickPixelInterval: 72,
        showLastLabel: !0,
        labels: { x: -8 },
        startOnTick: !0,
        title: { rotation: 270, text: "Values" },
        stackLabels: {
          animation: {},
          allowOverlap: !1,
          enabled: !1,
          crop: !0,
          overflow: "justify",
          formatter: function () {
            var a = this.axis.chart.numberFormatter;
            return a(this.total, -1);
          },
          style: {
            color: "#000000",
            fontSize: "11px",
            fontWeight: "bold",
            textOutline: "1px contrast",
          },
        },
        gridLineWidth: 1,
        lineWidth: 0,
      };
      a.defaultLeftAxisOptions = {
        labels: { x: -15 },
        title: { rotation: 270 },
      };
      a.defaultRightAxisOptions = {
        labels: { x: 15 },
        title: { rotation: 90 },
      };
      a.defaultBottomAxisOptions = {
        labels: { autoRotation: [-45], x: 0 },
        margin: 15,
        title: { rotation: 0 },
      };
      a.defaultTopAxisOptions = {
        labels: { autoRotation: [-45], x: 0 },
        margin: 15,
        title: { rotation: 0 },
      };
    })(a || (a = {}));
    return a;
  });
  M(f, "Core/Foundation.js", [f["Core/Utilities.js"]], function (a) {
    var f = a.addEvent,
      C = a.isFunction,
      G = a.objectEach,
      u = a.removeEvent,
      H;
    (function (a) {
      a.registerEventOptions = function (a, z) {
        a.eventOptions = a.eventOptions || {};
        G(z.events, function (p, m) {
          a.eventOptions[m] !== p &&
            (a.eventOptions[m] &&
              (u(a, m, a.eventOptions[m]), delete a.eventOptions[m]),
            C(p) && ((a.eventOptions[m] = p), f(a, m, p)));
        });
      };
    })(H || (H = {}));
    return H;
  });
  M(
    f,
    "Core/Axis/Tick.js",
    [
      f["Core/FormatUtilities.js"],
      f["Core/Globals.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C) {
      var F = f.deg2rad,
        u = C.clamp,
        H = C.correctFloat,
        I = C.defined,
        B = C.destroyObjectProperties,
        z = C.extend,
        p = C.fireEvent,
        m = C.isNumber,
        e = C.merge,
        d = C.objectEach,
        l = C.pick;
      f = (function () {
        function h(d, a, e, h, f) {
          this.isNewLabel = this.isNew = !0;
          this.axis = d;
          this.pos = a;
          this.type = e || "";
          this.parameters = f || {};
          this.tickmarkOffset = this.parameters.tickmarkOffset;
          this.options = this.parameters.options;
          p(this, "init");
          e || h || this.addLabel();
        }
        h.prototype.addLabel = function () {
          var d = this,
            e = d.axis,
            h = e.options,
            f = e.chart,
            y = e.categories,
            A = e.logarithmic,
            q = e.names,
            k = d.pos,
            c = l(d.options && d.options.labels, h.labels),
            g = e.tickPositions,
            b = k === g[0],
            r = k === g[g.length - 1],
            x = (!c.step || 1 === c.step) && 1 === e.tickInterval;
          g = g.info;
          var D = d.label,
            K;
          y = this.parameters.category || (y ? l(y[k], q[k], k) : k);
          A && m(y) && (y = H(A.lin2log(y)));
          if (e.dateTime)
            if (g) {
              var P = f.time.resolveDTLFormat(
                h.dateTimeLabelFormats[
                  (!h.grid && g.higherRanks[k]) || g.unitName
                ]
              );
              var Q = P.main;
            } else
              m(y) &&
                (Q = e.dateTime.getXDateFormat(
                  y,
                  h.dateTimeLabelFormats || {}
                ));
          d.isFirst = b;
          d.isLast = r;
          var O = {
            axis: e,
            chart: f,
            dateTimeLabelFormat: Q,
            isFirst: b,
            isLast: r,
            pos: k,
            tick: d,
            tickPositionInfo: g,
            value: y,
          };
          p(this, "labelFormat", O);
          var B = function (b) {
            return c.formatter
              ? c.formatter.call(b, b)
              : c.format
              ? ((b.text = e.defaultLabelFormatter.call(b)),
                a.format(c.format, b, f))
              : e.defaultLabelFormatter.call(b, b);
          };
          h = B.call(O, O);
          var F = P && P.list;
          d.shortenLabel = F
            ? function () {
                for (K = 0; K < F.length; K++)
                  if (
                    (z(O, { dateTimeLabelFormat: F[K] }),
                    D.attr({ text: B.call(O, O) }),
                    D.getBBox().width < e.getSlotWidth(d) - 2 * c.padding)
                  )
                    return;
                D.attr({ text: "" });
              }
            : void 0;
          x && e._addedPlotLB && d.moveLabel(h, c);
          I(D) || d.movedLabel
            ? D &&
              D.textStr !== h &&
              !x &&
              (!D.textWidth ||
                c.style.width ||
                D.styles.width ||
                D.css({ width: null }),
              D.attr({ text: h }),
              (D.textPxLength = D.getBBox().width))
            : ((d.label = D = d.createLabel({ x: 0, y: 0 }, h, c)),
              (d.rotation = 0));
        };
        h.prototype.createLabel = function (d, a, h) {
          var f = this.axis,
            n = f.chart;
          if (
            (d =
              I(a) && h.enabled
                ? n.renderer.text(a, d.x, d.y, h.useHTML).add(f.labelGroup)
                : null)
          )
            n.styledMode || d.css(e(h.style)),
              (d.textPxLength = d.getBBox().width);
          return d;
        };
        h.prototype.destroy = function () {
          B(this, this.axis);
        };
        h.prototype.getPosition = function (d, a, e, h) {
          var f = this.axis,
            n = f.chart,
            q = (h && n.oldChartHeight) || n.chartHeight;
          d = {
            x: d
              ? H(f.translate(a + e, null, null, h) + f.transB)
              : f.left +
                f.offset +
                (f.opposite
                  ? ((h && n.oldChartWidth) || n.chartWidth) - f.right - f.left
                  : 0),
            y: d
              ? q - f.bottom + f.offset - (f.opposite ? f.height : 0)
              : H(q - f.translate(a + e, null, null, h) - f.transB),
          };
          d.y = u(d.y, -1e5, 1e5);
          p(this, "afterGetPosition", { pos: d });
          return d;
        };
        h.prototype.getLabelPosition = function (d, a, e, h, f, l, q, k) {
          var c = this.axis,
            g = c.transA,
            b =
              c.isLinked && c.linkedParent
                ? c.linkedParent.reversed
                : c.reversed,
            r = c.staggerLines,
            x = c.tickRotCorr || { x: 0, y: 0 },
            n =
              h || c.reserveSpaceDefault
                ? 0
                : -c.labelOffset * ("center" === c.labelAlign ? 0.5 : 1),
            m = {},
            t = f.y;
          I(t) ||
            (t =
              0 === c.side
                ? e.rotation
                  ? -8
                  : -e.getBBox().height
                : 2 === c.side
                ? x.y + 8
                : Math.cos(e.rotation * F) *
                  (x.y - e.getBBox(!1, 0).height / 2));
          d = d + f.x + n + x.x - (l && h ? l * g * (b ? -1 : 1) : 0);
          a = a + t - (l && !h ? l * g * (b ? 1 : -1) : 0);
          r &&
            ((e = (q / (k || 1)) % r),
            c.opposite && (e = r - e - 1),
            (a += (c.labelOffset / r) * e));
          m.x = d;
          m.y = Math.round(a);
          p(this, "afterGetLabelPosition", {
            pos: m,
            tickmarkOffset: l,
            index: q,
          });
          return m;
        };
        h.prototype.getLabelSize = function () {
          return this.label
            ? this.label.getBBox()[this.axis.horiz ? "height" : "width"]
            : 0;
        };
        h.prototype.getMarkPath = function (d, a, e, h, f, l) {
          return l.crispLine(
            [
              ["M", d, a],
              ["L", d + (f ? 0 : -e), a + (f ? e : 0)],
            ],
            h
          );
        };
        h.prototype.handleOverflow = function (d) {
          var a = this.axis,
            e = a.options.labels,
            h = d.x,
            f = a.chart.chartWidth,
            m = a.chart.spacing,
            q = l(a.labelLeft, Math.min(a.pos, m[3]));
          m = l(
            a.labelRight,
            Math.max(a.isRadial ? 0 : a.pos + a.len, f - m[1])
          );
          var k = this.label,
            c = this.rotation,
            g = { left: 0, center: 0.5, right: 1 }[
              a.labelAlign || k.attr("align")
            ],
            b = k.getBBox().width,
            r = a.getSlotWidth(this),
            x = {},
            D = r,
            p = 1,
            t;
          if (c || "justify" !== e.overflow)
            0 > c && h - g * b < q
              ? (t = Math.round(h / Math.cos(c * F) - q))
              : 0 < c &&
                h + g * b > m &&
                (t = Math.round((f - h) / Math.cos(c * F)));
          else if (
            ((f = h + (1 - g) * b),
            h - g * b < q
              ? (D = d.x + D * (1 - g) - q)
              : f > m && ((D = m - d.x + D * g), (p = -1)),
            (D = Math.min(r, D)),
            D < r &&
              "center" === a.labelAlign &&
              (d.x += p * (r - D - g * (r - Math.min(b, D)))),
            b > D || (a.autoRotation && (k.styles || {}).width))
          )
            t = D;
          t &&
            (this.shortenLabel
              ? this.shortenLabel()
              : ((x.width = Math.floor(t) + "px"),
                (e.style || {}).textOverflow || (x.textOverflow = "ellipsis"),
                k.css(x)));
        };
        h.prototype.moveLabel = function (a, e) {
          var h = this,
            f = h.label,
            l = h.axis,
            n = l.reversed,
            q = !1;
          f && f.textStr === a
            ? ((h.movedLabel = f), (q = !0), delete h.label)
            : d(l.ticks, function (c) {
                q ||
                  c.isNew ||
                  c === h ||
                  !c.label ||
                  c.label.textStr !== a ||
                  ((h.movedLabel = c.label),
                  (q = !0),
                  (c.labelPos = h.movedLabel.xy),
                  delete c.label);
              });
          if (!q && (h.labelPos || f)) {
            var k = h.labelPos || f.xy;
            f = l.horiz ? (n ? 0 : l.width + l.left) : k.x;
            l = l.horiz ? k.y : n ? l.width + l.left : 0;
            h.movedLabel = h.createLabel({ x: f, y: l }, a, e);
            h.movedLabel && h.movedLabel.attr({ opacity: 0 });
          }
        };
        h.prototype.render = function (d, a, e) {
          var h = this.axis,
            f = h.horiz,
            n = this.pos,
            q = l(this.tickmarkOffset, h.tickmarkOffset);
          n = this.getPosition(f, n, q, a);
          q = n.x;
          var k = n.y;
          h = (f && q === h.pos + h.len) || (!f && k === h.pos) ? -1 : 1;
          f = l(e, this.label && this.label.newOpacity, 1);
          e = l(e, 1);
          this.isActive = !0;
          this.renderGridLine(a, e, h);
          this.renderMark(n, e, h);
          this.renderLabel(n, a, f, d);
          this.isNew = !1;
          p(this, "afterRender");
        };
        h.prototype.renderGridLine = function (d, a, e) {
          var h = this.axis,
            f = h.options,
            n = {},
            q = this.pos,
            k = this.type,
            c = l(this.tickmarkOffset, h.tickmarkOffset),
            g = h.chart.renderer,
            b = this.gridLine,
            r = f.gridLineWidth,
            x = f.gridLineColor,
            D = f.gridLineDashStyle;
          "minor" === this.type &&
            ((r = f.minorGridLineWidth),
            (x = f.minorGridLineColor),
            (D = f.minorGridLineDashStyle));
          b ||
            (h.chart.styledMode ||
              ((n.stroke = x), (n["stroke-width"] = r || 0), (n.dashstyle = D)),
            k || (n.zIndex = 1),
            d && (a = 0),
            (this.gridLine = b =
              g
                .path()
                .attr(n)
                .addClass("highcharts-" + (k ? k + "-" : "") + "grid-line")
                .add(h.gridGroup)));
          if (
            b &&
            (e = h.getPlotLinePath({
              value: q + c,
              lineWidth: b.strokeWidth() * e,
              force: "pass",
              old: d,
            }))
          )
            b[d || this.isNew ? "attr" : "animate"]({ d: e, opacity: a });
        };
        h.prototype.renderMark = function (d, a, e) {
          var h = this.axis,
            f = h.options,
            n = h.chart.renderer,
            q = this.type,
            k = h.tickSize(q ? q + "Tick" : "tick"),
            c = d.x;
          d = d.y;
          var g = l(
            f["minor" !== q ? "tickWidth" : "minorTickWidth"],
            !q && h.isXAxis ? 1 : 0
          );
          f = f["minor" !== q ? "tickColor" : "minorTickColor"];
          var b = this.mark,
            r = !b;
          k &&
            (h.opposite && (k[0] = -k[0]),
            b ||
              ((this.mark = b =
                n
                  .path()
                  .addClass("highcharts-" + (q ? q + "-" : "") + "tick")
                  .add(h.axisGroup)),
              h.chart.styledMode || b.attr({ stroke: f, "stroke-width": g })),
            b[r ? "attr" : "animate"]({
              d: this.getMarkPath(c, d, k[0], b.strokeWidth() * e, h.horiz, n),
              opacity: a,
            }));
        };
        h.prototype.renderLabel = function (d, a, e, h) {
          var f = this.axis,
            n = f.horiz,
            q = f.options,
            k = this.label,
            c = q.labels,
            g = c.step;
          f = l(this.tickmarkOffset, f.tickmarkOffset);
          var b = d.x;
          d = d.y;
          var r = !0;
          k &&
            m(b) &&
            ((k.xy = d = this.getLabelPosition(b, d, k, n, c, f, h, g)),
            (this.isFirst && !this.isLast && !q.showFirstLabel) ||
            (this.isLast && !this.isFirst && !q.showLastLabel)
              ? (r = !1)
              : !n ||
                c.step ||
                c.rotation ||
                a ||
                0 === e ||
                this.handleOverflow(d),
            g && h % g && (r = !1),
            r && m(d.y)
              ? ((d.opacity = e),
                k[this.isNewLabel ? "attr" : "animate"](d),
                (this.isNewLabel = !1))
              : (k.attr("y", -9999), (this.isNewLabel = !0)));
        };
        h.prototype.replaceMovedLabel = function () {
          var d = this.label,
            a = this.axis,
            e = a.reversed;
          if (d && !this.isNew) {
            var h = a.horiz ? (e ? a.left : a.width + a.left) : d.xy.x;
            e = a.horiz ? d.xy.y : e ? a.width + a.top : a.top;
            d.animate({ x: h, y: e, opacity: 0 }, void 0, d.destroy);
            delete this.label;
          }
          a.isDirty = !0;
          this.label = this.movedLabel;
          delete this.movedLabel;
        };
        return h;
      })();
      ("");
      return f;
    }
  );
  M(
    f,
    "Core/Axis/Axis.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/Axis/AxisDefaults.js"],
      f["Core/Color/Color.js"],
      f["Core/DefaultOptions.js"],
      f["Core/Foundation.js"],
      f["Core/Globals.js"],
      f["Core/Axis/Tick.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G, u, H, I, B) {
      var z = a.animObject,
        p = G.defaultOptions,
        m = u.registerEventOptions,
        e = H.deg2rad,
        d = B.arrayMax,
        l = B.arrayMin,
        h = B.clamp,
        t = B.correctFloat,
        n = B.defined,
        v = B.destroyObjectProperties,
        w = B.erase,
        y = B.error,
        A = B.extend,
        q = B.fireEvent,
        k = B.getMagnitude,
        c = B.isArray,
        g = B.isNumber,
        b = B.isString,
        r = B.merge,
        x = B.normalizeTickInterval,
        D = B.objectEach,
        K = B.pick,
        P = B.relativeLength,
        Q = B.removeEvent,
        O = B.splat,
        W = B.syncTimeout;
      a = (function () {
        function a(b, c) {
          this.zoomEnabled =
            this.width =
            this.visible =
            this.userOptions =
            this.translationSlope =
            this.transB =
            this.transA =
            this.top =
            this.ticks =
            this.tickRotCorr =
            this.tickPositions =
            this.tickmarkOffset =
            this.tickInterval =
            this.tickAmount =
            this.side =
            this.series =
            this.right =
            this.positiveValuesOnly =
            this.pos =
            this.pointRangePadding =
            this.pointRange =
            this.plotLinesAndBandsGroups =
            this.plotLinesAndBands =
            this.paddedTicks =
            this.overlap =
            this.options =
            this.offset =
            this.names =
            this.minPixelPadding =
            this.minorTicks =
            this.minorTickInterval =
            this.min =
            this.maxLabelLength =
            this.max =
            this.len =
            this.left =
            this.labelFormatter =
            this.labelEdge =
            this.isLinked =
            this.height =
            this.hasVisibleSeries =
            this.hasNames =
            this.eventOptions =
            this.coll =
            this.closestPointRange =
            this.chart =
            this.bottom =
            this.alternateBands =
              void 0;
          this.init(b, c);
        }
        a.prototype.init = function (b, c) {
          var a = c.isX;
          this.chart = b;
          this.horiz = b.inverted && !this.isZAxis ? !a : a;
          this.isXAxis = a;
          this.coll = this.coll || (a ? "xAxis" : "yAxis");
          q(this, "init", { userOptions: c });
          this.opposite = K(c.opposite, this.opposite);
          this.side = K(
            c.side,
            this.side,
            this.horiz ? (this.opposite ? 0 : 2) : this.opposite ? 1 : 3
          );
          this.setOptions(c);
          var d = this.options,
            e = d.labels,
            k = d.type;
          this.userOptions = c;
          this.minPixelPadding = 0;
          this.reversed = K(d.reversed, this.reversed);
          this.visible = d.visible;
          this.zoomEnabled = d.zoomEnabled;
          this.hasNames = "category" === k || !0 === d.categories;
          this.categories = d.categories || (this.hasNames ? [] : void 0);
          this.names || ((this.names = []), (this.names.keys = {}));
          this.plotLinesAndBandsGroups = {};
          this.positiveValuesOnly = !!this.logarithmic;
          this.isLinked = n(d.linkedTo);
          this.ticks = {};
          this.labelEdge = [];
          this.minorTicks = {};
          this.plotLinesAndBands = [];
          this.alternateBands = {};
          this.len = 0;
          this.minRange = this.userMinRange = d.minRange || d.maxZoom;
          this.range = d.range;
          this.offset = d.offset || 0;
          this.min = this.max = null;
          c = K(d.crosshair, O(b.options.tooltip.crosshairs)[a ? 0 : 1]);
          this.crosshair = !0 === c ? {} : c;
          -1 === b.axes.indexOf(this) &&
            (a ? b.axes.splice(b.xAxis.length, 0, this) : b.axes.push(this),
            b[this.coll].push(this));
          this.series = this.series || [];
          b.inverted &&
            !this.isZAxis &&
            a &&
            "undefined" === typeof this.reversed &&
            (this.reversed = !0);
          this.labelRotation = g(e.rotation) ? e.rotation : void 0;
          m(this, d);
          q(this, "afterInit");
        };
        a.prototype.setOptions = function (b) {
          this.options = r(
            f.defaultXAxisOptions,
            "yAxis" === this.coll && f.defaultYAxisOptions,
            [
              f.defaultTopAxisOptions,
              f.defaultRightAxisOptions,
              f.defaultBottomAxisOptions,
              f.defaultLeftAxisOptions,
            ][this.side],
            r(p[this.coll], b)
          );
          q(this, "afterSetOptions", { userOptions: b });
        };
        a.prototype.defaultLabelFormatter = function (b) {
          var c = this.axis;
          b = this.chart.numberFormatter;
          var a = g(this.value) ? this.value : NaN,
            d = c.chart.time,
            e = this.dateTimeLabelFormat,
            k = p.lang,
            r = k.numericSymbols;
          k = k.numericSymbolMagnitude || 1e3;
          var h = c.logarithmic ? Math.abs(a) : c.tickInterval,
            q = r && r.length;
          if (c.categories) var L = "" + this.value;
          else if (e) L = d.dateFormat(e, a);
          else if (q && 1e3 <= h)
            for (; q-- && "undefined" === typeof L; )
              (c = Math.pow(k, q + 1)),
                h >= c &&
                  0 === (10 * a) % c &&
                  null !== r[q] &&
                  0 !== a &&
                  (L = b(a / c, -1) + r[q]);
          "undefined" === typeof L &&
            (L = 1e4 <= Math.abs(a) ? b(a, -1) : b(a, -1, void 0, ""));
          return L;
        };
        a.prototype.getSeriesExtremes = function () {
          var b = this,
            c = b.chart,
            a;
          q(this, "getSeriesExtremes", null, function () {
            b.hasVisibleSeries = !1;
            b.dataMin = b.dataMax = b.threshold = null;
            b.softThreshold = !b.isXAxis;
            b.stacking && b.stacking.buildStacks();
            b.series.forEach(function (d) {
              if (d.visible || !c.options.chart.ignoreHiddenSeries) {
                var e = d.options,
                  k = e.threshold;
                b.hasVisibleSeries = !0;
                b.positiveValuesOnly && 0 >= k && (k = null);
                if (b.isXAxis) {
                  if (((e = d.xData), e.length)) {
                    e = b.logarithmic ? e.filter(b.validatePositiveValue) : e;
                    a = d.getXExtremes(e);
                    var r = a.min;
                    var h = a.max;
                    g(r) ||
                      r instanceof Date ||
                      ((e = e.filter(g)),
                      (a = d.getXExtremes(e)),
                      (r = a.min),
                      (h = a.max));
                    e.length &&
                      ((b.dataMin = Math.min(K(b.dataMin, r), r)),
                      (b.dataMax = Math.max(K(b.dataMax, h), h)));
                  }
                } else if (
                  ((d = d.applyExtremes()),
                  g(d.dataMin) &&
                    ((r = d.dataMin),
                    (b.dataMin = Math.min(K(b.dataMin, r), r))),
                  g(d.dataMax) &&
                    ((h = d.dataMax),
                    (b.dataMax = Math.max(K(b.dataMax, h), h))),
                  n(k) && (b.threshold = k),
                  !e.softThreshold || b.positiveValuesOnly)
                )
                  b.softThreshold = !1;
              }
            });
          });
          q(this, "afterGetSeriesExtremes");
        };
        a.prototype.translate = function (b, c, a, d, e, k) {
          var r = this.linkedParent || this,
            h = d && r.old ? r.old.min : r.min,
            q = r.minPixelPadding;
          e =
            (r.isOrdinal ||
              (r.brokenAxis && r.brokenAxis.hasBreaks) ||
              (r.logarithmic && e)) &&
            r.lin2val;
          var f = 1,
            L = 0;
          d = d && r.old ? r.old.transA : r.transA;
          d || (d = r.transA);
          a && ((f *= -1), (L = r.len));
          r.reversed && ((f *= -1), (L -= f * (r.sector || r.len)));
          c
            ? ((k = (b * f + L - q) / d + h), e && (k = r.lin2val(k)))
            : (e && (b = r.val2lin(b)),
              (b = f * (b - h) * d),
              (k = g(h)
                ? (r.isRadial ? b : t(b)) + L + f * q + (g(k) ? d * k : 0)
                : void 0));
          return k;
        };
        a.prototype.toPixels = function (b, c) {
          return (
            this.translate(b, !1, !this.horiz, null, !0) + (c ? 0 : this.pos)
          );
        };
        a.prototype.toValue = function (b, c) {
          return this.translate(
            b - (c ? 0 : this.pos),
            !0,
            !this.horiz,
            null,
            !0
          );
        };
        a.prototype.getPlotLinePath = function (b) {
          function c(b, c, a) {
            if (("pass" !== m && b < c) || b > a)
              m ? (b = h(b, c, a)) : (w = !0);
            return b;
          }
          var a = this,
            d = a.chart,
            e = a.left,
            k = a.top,
            r = b.old,
            f = b.value,
            L = b.lineWidth,
            l = (r && d.oldChartHeight) || d.chartHeight,
            x = (r && d.oldChartWidth) || d.chartWidth,
            D = a.transB,
            n = b.translatedValue,
            m = b.force,
            p,
            t,
            A,
            P,
            w;
          b = {
            value: f,
            lineWidth: L,
            old: r,
            force: m,
            acrossPanes: b.acrossPanes,
            translatedValue: n,
          };
          q(this, "getPlotLinePath", b, function (b) {
            n = K(n, a.translate(f, null, null, r));
            n = h(n, -1e5, 1e5);
            p = A = Math.round(n + D);
            t = P = Math.round(l - n - D);
            g(n)
              ? a.horiz
                ? ((t = k), (P = l - a.bottom), (p = A = c(p, e, e + a.width)))
                : ((p = e), (A = x - a.right), (t = P = c(t, k, k + a.height)))
              : ((w = !0), (m = !1));
            b.path =
              w && !m
                ? null
                : d.renderer.crispLine(
                    [
                      ["M", p, t],
                      ["L", A, P],
                    ],
                    L || 1
                  );
          });
          return b.path;
        };
        a.prototype.getLinearTickPositions = function (b, c, a) {
          var d = t(Math.floor(c / b) * b);
          a = t(Math.ceil(a / b) * b);
          var g = [],
            e;
          t(d + b) === d && (e = 20);
          if (this.single) return [c];
          for (c = d; c <= a; ) {
            g.push(c);
            c = t(c + b, e);
            if (c === k) break;
            var k = c;
          }
          return g;
        };
        a.prototype.getMinorTickInterval = function () {
          var b = this.options;
          return !0 === b.minorTicks
            ? K(b.minorTickInterval, "auto")
            : !1 === b.minorTicks
            ? null
            : b.minorTickInterval;
        };
        a.prototype.getMinorTickPositions = function () {
          var b = this.options,
            c = this.tickPositions,
            a = this.minorTickInterval,
            d = this.pointRangePadding || 0,
            g = this.min - d;
          d = this.max + d;
          var e = d - g,
            k = [];
          if (e && e / a < this.len / 3) {
            var r = this.logarithmic;
            if (r)
              this.paddedTicks.forEach(function (b, c, d) {
                c &&
                  k.push.apply(k, r.getLogTickPositions(a, d[c - 1], d[c], !0));
              });
            else if (this.dateTime && "auto" === this.getMinorTickInterval())
              k = k.concat(
                this.getTimeTicks(
                  this.dateTime.normalizeTimeTickInterval(a),
                  g,
                  d,
                  b.startOfWeek
                )
              );
            else
              for (b = g + ((c[0] - g) % a); b <= d && b !== k[0]; b += a)
                k.push(b);
          }
          0 !== k.length && this.trimTicks(k);
          return k;
        };
        a.prototype.adjustForMinRange = function () {
          var b = this.options,
            c = this.logarithmic,
            a = this.min,
            g = this.max,
            e = 0,
            k,
            r,
            h,
            q;
          this.isXAxis &&
            "undefined" === typeof this.minRange &&
            !c &&
            (n(b.min) || n(b.max) || n(b.floor) || n(b.ceiling)
              ? (this.minRange = null)
              : (this.series.forEach(function (b) {
                  h = b.xData;
                  q = b.xIncrement ? 1 : h.length - 1;
                  if (1 < h.length)
                    for (k = q; 0 < k; k--)
                      if (((r = h[k] - h[k - 1]), !e || r < e)) e = r;
                }),
                (this.minRange = Math.min(
                  5 * e,
                  this.dataMax - this.dataMin
                ))));
          if (g - a < this.minRange) {
            var f = this.dataMax - this.dataMin >= this.minRange;
            var x = this.minRange;
            var D = (x - g + a) / 2;
            D = [a - D, K(b.min, a - D)];
            f &&
              (D[2] = this.logarithmic
                ? this.logarithmic.log2lin(this.dataMin)
                : this.dataMin);
            a = d(D);
            g = [a + x, K(b.max, a + x)];
            f && (g[2] = c ? c.log2lin(this.dataMax) : this.dataMax);
            g = l(g);
            g - a < x && ((D[0] = g - x), (D[1] = K(b.min, g - x)), (a = d(D)));
          }
          this.min = a;
          this.max = g;
        };
        a.prototype.getClosest = function () {
          var b;
          this.categories
            ? (b = 1)
            : this.series.forEach(function (c) {
                var a = c.closestPointRange,
                  d = c.visible || !c.chart.options.chart.ignoreHiddenSeries;
                !c.noSharedTooltip &&
                  n(a) &&
                  d &&
                  (b = n(b) ? Math.min(b, a) : a);
              });
          return b;
        };
        a.prototype.nameToX = function (b) {
          var a = c(this.options.categories),
            d = a ? this.categories : this.names,
            g = b.options.x;
          b.series.requireSorting = !1;
          n(g) ||
            (g =
              this.options.uniqueNames && d
                ? a
                  ? d.indexOf(b.name)
                  : K(d.keys[b.name], -1)
                : b.series.autoIncrement());
          if (-1 === g) {
            if (!a && d) var e = d.length;
          } else e = g;
          "undefined" !== typeof e &&
            ((this.names[e] = b.name), (this.names.keys[b.name] = e));
          return e;
        };
        a.prototype.updateNames = function () {
          var b = this,
            c = this.names;
          0 < c.length &&
            (Object.keys(c.keys).forEach(function (b) {
              delete c.keys[b];
            }),
            (c.length = 0),
            (this.minRange = this.userMinRange),
            (this.series || []).forEach(function (c) {
              c.xIncrement = null;
              if (!c.points || c.isDirtyData)
                (b.max = Math.max(b.max, c.xData.length - 1)),
                  c.processData(),
                  c.generatePoints();
              c.data.forEach(function (a, d) {
                if (a && a.options && "undefined" !== typeof a.name) {
                  var g = b.nameToX(a);
                  "undefined" !== typeof g &&
                    g !== a.x &&
                    ((a.x = g), (c.xData[d] = g));
                }
              });
            }));
        };
        a.prototype.setAxisTranslation = function () {
          var c = this,
            a = c.max - c.min,
            d = c.linkedParent,
            g = !!c.categories,
            e = c.isXAxis,
            k = c.axisPointRange || 0,
            r = 0,
            h = 0,
            f = c.transA;
          if (e || g || k) {
            var x = c.getClosest();
            d
              ? ((r = d.minPointOffset), (h = d.pointRangePadding))
              : c.series.forEach(function (a) {
                  var d = g
                      ? 1
                      : e
                      ? K(a.options.pointRange, x, 0)
                      : c.axisPointRange || 0,
                    q = a.options.pointPlacement;
                  k = Math.max(k, d);
                  if (!c.single || g)
                    (a = a.is("xrange") ? !e : e),
                      (r = Math.max(r, a && b(q) ? 0 : d / 2)),
                      (h = Math.max(h, a && "on" === q ? 0 : d));
                });
            d = c.ordinal && c.ordinal.slope && x ? c.ordinal.slope / x : 1;
            c.minPointOffset = r *= d;
            c.pointRangePadding = h *= d;
            c.pointRange = Math.min(k, c.single && g ? 1 : a);
            e && (c.closestPointRange = x);
          }
          c.translationSlope =
            c.transA =
            f =
              c.staticScale || c.len / (a + h || 1);
          c.transB = c.horiz ? c.left : c.bottom;
          c.minPixelPadding = f * r;
          q(this, "afterSetAxisTranslation");
        };
        a.prototype.minFromRange = function () {
          return this.max - this.range;
        };
        a.prototype.setTickInterval = function (b) {
          var c = this.chart,
            a = this.logarithmic,
            d = this.options,
            e = this.isXAxis,
            r = this.isLinked,
            h = d.tickPixelInterval,
            f = this.categories,
            l = this.softThreshold,
            D = d.maxPadding,
            m = d.minPadding,
            L =
              g(d.tickInterval) && 0 <= d.tickInterval
                ? d.tickInterval
                : void 0,
            p = g(this.threshold) ? this.threshold : null;
          this.dateTime || f || r || this.getTickAmount();
          var A = K(this.userMin, d.min);
          var P = K(this.userMax, d.max);
          if (r) {
            this.linkedParent = c[this.coll][d.linkedTo];
            var w = this.linkedParent.getExtremes();
            this.min = K(w.min, w.dataMin);
            this.max = K(w.max, w.dataMax);
            d.type !== this.linkedParent.options.type && y(11, 1, c);
          } else {
            if (l && n(p))
              if (this.dataMin >= p) (w = p), (m = 0);
              else if (this.dataMax <= p) {
                var v = p;
                D = 0;
              }
            this.min = K(A, w, this.dataMin);
            this.max = K(P, v, this.dataMax);
          }
          a &&
            (this.positiveValuesOnly &&
              !b &&
              0 >= Math.min(this.min, K(this.dataMin, this.min)) &&
              y(10, 1, c),
            (this.min = t(a.log2lin(this.min), 16)),
            (this.max = t(a.log2lin(this.max), 16)));
          this.range &&
            n(this.max) &&
            ((this.userMin =
              this.min =
              A =
                Math.max(this.dataMin, this.minFromRange())),
            (this.userMax = P = this.max),
            (this.range = null));
          q(this, "foundExtremes");
          this.beforePadding && this.beforePadding();
          this.adjustForMinRange();
          !(
            f ||
            this.axisPointRange ||
            (this.stacking && this.stacking.usePercentage) ||
            r
          ) &&
            n(this.min) &&
            n(this.max) &&
            (c = this.max - this.min) &&
            (!n(A) && m && (this.min -= c * m),
            !n(P) && D && (this.max += c * D));
          g(this.userMin) ||
            (g(d.softMin) && d.softMin < this.min && (this.min = A = d.softMin),
            g(d.floor) && (this.min = Math.max(this.min, d.floor)));
          g(this.userMax) ||
            (g(d.softMax) && d.softMax > this.max && (this.max = P = d.softMax),
            g(d.ceiling) && (this.max = Math.min(this.max, d.ceiling)));
          l &&
            n(this.dataMin) &&
            ((p = p || 0),
            !n(A) && this.min < p && this.dataMin >= p
              ? (this.min = this.options.minRange
                  ? Math.min(p, this.max - this.minRange)
                  : p)
              : !n(P) &&
                this.max > p &&
                this.dataMax <= p &&
                (this.max = this.options.minRange
                  ? Math.max(p, this.min + this.minRange)
                  : p));
          g(this.min) &&
            g(this.max) &&
            !this.chart.polar &&
            this.min > this.max &&
            (n(this.options.min)
              ? (this.max = this.min)
              : n(this.options.max) && (this.min = this.max));
          this.tickInterval =
            this.min === this.max ||
            "undefined" === typeof this.min ||
            "undefined" === typeof this.max
              ? 1
              : r &&
                this.linkedParent &&
                !L &&
                h === this.linkedParent.options.tickPixelInterval
              ? (L = this.linkedParent.tickInterval)
              : K(
                  L,
                  this.tickAmount
                    ? (this.max - this.min) / Math.max(this.tickAmount - 1, 1)
                    : void 0,
                  f ? 1 : ((this.max - this.min) * h) / Math.max(this.len, h)
                );
          if (e && !b) {
            var Q =
              this.min !== (this.old && this.old.min) ||
              this.max !== (this.old && this.old.max);
            this.series.forEach(function (b) {
              b.forceCrop = b.forceCropping && b.forceCropping();
              b.processData(Q);
            });
            q(this, "postProcessData", { hasExtemesChanged: Q });
          }
          this.setAxisTranslation();
          q(this, "initialAxisTranslation");
          this.pointRange &&
            !L &&
            (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
          b = K(
            d.minTickInterval,
            this.dateTime &&
              !this.series.some(function (b) {
                return b.noSharedTooltip;
              })
              ? this.closestPointRange
              : 0
          );
          !L && this.tickInterval < b && (this.tickInterval = b);
          this.dateTime ||
            this.logarithmic ||
            L ||
            (this.tickInterval = x(
              this.tickInterval,
              void 0,
              k(this.tickInterval),
              K(
                d.allowDecimals,
                0.5 > this.tickInterval || void 0 !== this.tickAmount
              ),
              !!this.tickAmount
            ));
          this.tickAmount || (this.tickInterval = this.unsquish());
          this.setTickPositions();
        };
        a.prototype.setTickPositions = function () {
          var b = this.options,
            c = b.tickPositions,
            a = this.getMinorTickInterval(),
            d = this.hasVerticalPanning(),
            g = "colorAxis" === this.coll,
            e = (g || !d) && b.startOnTick;
          d = (g || !d) && b.endOnTick;
          g = b.tickPositioner;
          this.tickmarkOffset =
            this.categories &&
            "between" === b.tickmarkPlacement &&
            1 === this.tickInterval
              ? 0.5
              : 0;
          this.minorTickInterval =
            "auto" === a && this.tickInterval ? this.tickInterval / 5 : a;
          this.single =
            this.min === this.max &&
            n(this.min) &&
            !this.tickAmount &&
            (parseInt(this.min, 10) === this.min || !1 !== b.allowDecimals);
          this.tickPositions = a = c && c.slice();
          !a &&
            ((this.ordinal && this.ordinal.positions) ||
            !(
              (this.max - this.min) / this.tickInterval >
              Math.max(2 * this.len, 200)
            )
              ? (a = this.dateTime
                  ? this.getTimeTicks(
                      this.dateTime.normalizeTimeTickInterval(
                        this.tickInterval,
                        b.units
                      ),
                      this.min,
                      this.max,
                      b.startOfWeek,
                      this.ordinal && this.ordinal.positions,
                      this.closestPointRange,
                      !0
                    )
                  : this.logarithmic
                  ? this.logarithmic.getLogTickPositions(
                      this.tickInterval,
                      this.min,
                      this.max
                    )
                  : this.getLinearTickPositions(
                      this.tickInterval,
                      this.min,
                      this.max
                    ))
              : ((a = [this.min, this.max]), y(19, !1, this.chart)),
            a.length > this.len &&
              ((a = [a[0], a.pop()]), a[0] === a[1] && (a.length = 1)),
            (this.tickPositions = a),
            g && (g = g.apply(this, [this.min, this.max]))) &&
            (this.tickPositions = a = g);
          this.paddedTicks = a.slice(0);
          this.trimTicks(a, e, d);
          this.isLinked ||
            (this.single &&
              2 > a.length &&
              !this.categories &&
              !this.series.some(function (b) {
                return (
                  b.is("heatmap") && "between" === b.options.pointPlacement
                );
              }) &&
              ((this.min -= 0.5), (this.max += 0.5)),
            c || g || this.adjustTickAmount());
          q(this, "afterSetTickPositions");
        };
        a.prototype.trimTicks = function (b, c, a) {
          var d = b[0],
            g = b[b.length - 1],
            e = (!this.isOrdinal && this.minPointOffset) || 0;
          q(this, "trimTicks");
          if (!this.isLinked) {
            if (c && -Infinity !== d) this.min = d;
            else for (; this.min - e > b[0]; ) b.shift();
            if (a) this.max = g;
            else for (; this.max + e < b[b.length - 1]; ) b.pop();
            0 === b.length &&
              n(d) &&
              !this.options.tickPositions &&
              b.push((g + d) / 2);
          }
        };
        a.prototype.alignToOthers = function () {
          var b = this,
            c = [this],
            a = b.options,
            d =
              "yAxis" === this.coll && this.chart.options.chart.alignThresholds,
            e = [],
            k;
          b.thresholdAlignment = void 0;
          if (
            ((!1 !== this.chart.options.chart.alignTicks && a.alignTicks) ||
              d) &&
            !1 !== a.startOnTick &&
            !1 !== a.endOnTick &&
            !b.logarithmic
          ) {
            var r = function (b) {
                var c = b.options;
                return [
                  b.horiz ? c.left : c.top,
                  c.width,
                  c.height,
                  c.pane,
                ].join();
              },
              h = r(this);
            this.chart[this.coll].forEach(function (a) {
              var d = a.series;
              d.length &&
                d.some(function (b) {
                  return b.visible;
                }) &&
                a !== b &&
                r(a) === h &&
                ((k = !0), c.push(a));
            });
          }
          if (k && d) {
            c.forEach(function (c) {
              c = c.getThresholdAlignment(b);
              g(c) && e.push(c);
            });
            var q =
              1 < e.length
                ? e.reduce(function (b, c) {
                    return b + c;
                  }, 0) / e.length
                : void 0;
            c.forEach(function (b) {
              b.thresholdAlignment = q;
            });
          }
          return k;
        };
        a.prototype.getThresholdAlignment = function (b) {
          (!g(this.dataMin) ||
            (this !== b &&
              this.series.some(function (b) {
                return b.isDirty || b.isDirtyData;
              }))) &&
            this.getSeriesExtremes();
          if (g(this.threshold))
            return (
              (b = h(
                (this.threshold - (this.dataMin || 0)) /
                  ((this.dataMax || 0) - (this.dataMin || 0)),
                0,
                1
              )),
              this.options.reversed && (b = 1 - b),
              b
            );
        };
        a.prototype.getTickAmount = function () {
          var b = this.options,
            c = b.tickPixelInterval,
            a = b.tickAmount;
          !n(b.tickInterval) &&
            !a &&
            this.len < c &&
            !this.isRadial &&
            !this.logarithmic &&
            b.startOnTick &&
            b.endOnTick &&
            (a = 2);
          !a && this.alignToOthers() && (a = Math.ceil(this.len / c) + 1);
          4 > a && ((this.finalTickAmt = a), (a = 5));
          this.tickAmount = a;
        };
        a.prototype.adjustTickAmount = function () {
          var b = this,
            c = b.finalTickAmt,
            a = b.max,
            d = b.min,
            e = b.options,
            k = b.tickPositions,
            r = b.tickAmount,
            h = b.thresholdAlignment,
            q = k && k.length,
            f = K(b.threshold, b.softThreshold ? 0 : null);
          var x = b.tickInterval;
          if (g(h)) {
            var l = 0.5 > h ? Math.ceil(h * (r - 1)) : Math.floor(h * (r - 1));
            e.reversed && (l = r - 1 - l);
          }
          if (b.hasData() && g(d) && g(a)) {
            h = function () {
              b.transA *= (q - 1) / (r - 1);
              b.min = e.startOnTick ? k[0] : Math.min(d, k[0]);
              b.max = e.endOnTick
                ? k[k.length - 1]
                : Math.max(a, k[k.length - 1]);
            };
            if (g(l) && g(b.threshold)) {
              for (
                ;
                k[l] !== f || k.length !== r || k[0] > d || k[k.length - 1] < a;

              ) {
                k.length = 0;
                for (k.push(b.threshold); k.length < r; )
                  void 0 === k[l] || k[l] > b.threshold
                    ? k.unshift(t(k[0] - x))
                    : k.push(t(k[k.length - 1] + x));
                if (x > 8 * b.tickInterval) break;
                x *= 2;
              }
              h();
            } else if (q < r) {
              for (; k.length < r; )
                k.length % 2 || d === f
                  ? k.push(t(k[k.length - 1] + x))
                  : k.unshift(t(k[0] - x));
              h();
            } else q > r && ((b.tickInterval *= 2), b.setTickPositions());
            if (n(c)) {
              for (x = f = k.length; x--; )
                ((3 === c && 1 === x % 2) || (2 >= c && 0 < x && x < f - 1)) &&
                  k.splice(x, 1);
              b.finalTickAmt = void 0;
            }
          }
        };
        a.prototype.setScale = function () {
          var b = !1,
            c = !1;
          this.series.forEach(function (a) {
            b = b || a.isDirtyData || a.isDirty;
            c = c || (a.xAxis && a.xAxis.isDirty) || !1;
          });
          this.setAxisSize();
          var a = this.len !== (this.old && this.old.len);
          a ||
          b ||
          c ||
          this.isLinked ||
          this.forceRedraw ||
          this.userMin !== (this.old && this.old.userMin) ||
          this.userMax !== (this.old && this.old.userMax) ||
          this.alignToOthers()
            ? (this.stacking && this.stacking.resetStacks(),
              (this.forceRedraw = !1),
              this.getSeriesExtremes(),
              this.setTickInterval(),
              this.isDirty ||
                (this.isDirty =
                  a ||
                  this.min !== (this.old && this.old.min) ||
                  this.max !== (this.old && this.old.max)))
            : this.stacking && this.stacking.cleanStacks();
          b && this.panningState && (this.panningState.isDirty = !0);
          q(this, "afterSetScale");
        };
        a.prototype.setExtremes = function (b, c, a, d, g) {
          var e = this,
            k = e.chart;
          a = K(a, !0);
          e.series.forEach(function (b) {
            delete b.kdTree;
          });
          g = A(g, { min: b, max: c });
          q(e, "setExtremes", g, function () {
            e.userMin = b;
            e.userMax = c;
            e.eventArgs = g;
            a && k.redraw(d);
          });
        };
        a.prototype.zoom = function (b, c) {
          var a = this,
            d = this.dataMin,
            g = this.dataMax,
            e = this.options,
            k = Math.min(d, K(e.min, d)),
            r = Math.max(g, K(e.max, g));
          b = { newMin: b, newMax: c };
          q(this, "zoom", b, function (b) {
            var c = b.newMin,
              e = b.newMax;
            if (c !== a.min || e !== a.max)
              a.allowZoomOutside ||
                (n(d) && (c < k && (c = k), c > r && (c = r)),
                n(g) && (e < k && (e = k), e > r && (e = r))),
                (a.displayBtn =
                  "undefined" !== typeof c || "undefined" !== typeof e),
                a.setExtremes(c, e, !1, void 0, { trigger: "zoom" });
            b.zoomed = !0;
          });
          return b.zoomed;
        };
        a.prototype.setAxisSize = function () {
          var b = this.chart,
            c = this.options,
            a = c.offsets || [0, 0, 0, 0],
            d = this.horiz,
            g = (this.width = Math.round(
              P(K(c.width, b.plotWidth - a[3] + a[1]), b.plotWidth)
            )),
            e = (this.height = Math.round(
              P(K(c.height, b.plotHeight - a[0] + a[2]), b.plotHeight)
            )),
            k = (this.top = Math.round(
              P(K(c.top, b.plotTop + a[0]), b.plotHeight, b.plotTop)
            ));
          c = this.left = Math.round(
            P(K(c.left, b.plotLeft + a[3]), b.plotWidth, b.plotLeft)
          );
          this.bottom = b.chartHeight - e - k;
          this.right = b.chartWidth - g - c;
          this.len = Math.max(d ? g : e, 0);
          this.pos = d ? c : k;
        };
        a.prototype.getExtremes = function () {
          var b = this.logarithmic;
          return {
            min: b ? t(b.lin2log(this.min)) : this.min,
            max: b ? t(b.lin2log(this.max)) : this.max,
            dataMin: this.dataMin,
            dataMax: this.dataMax,
            userMin: this.userMin,
            userMax: this.userMax,
          };
        };
        a.prototype.getThreshold = function (b) {
          var c = this.logarithmic,
            a = c ? c.lin2log(this.min) : this.min;
          c = c ? c.lin2log(this.max) : this.max;
          null === b || -Infinity === b
            ? (b = a)
            : Infinity === b
            ? (b = c)
            : a > b
            ? (b = a)
            : c < b && (b = c);
          return this.translate(b, 0, 1, 0, 1);
        };
        a.prototype.autoLabelAlign = function (b) {
          var c = (K(b, 0) - 90 * this.side + 720) % 360;
          b = { align: "center" };
          q(this, "autoLabelAlign", b, function (b) {
            15 < c && 165 > c
              ? (b.align = "right")
              : 195 < c && 345 > c && (b.align = "left");
          });
          return b.align;
        };
        a.prototype.tickSize = function (b) {
          var c = this.options,
            a = K(
              c["tick" === b ? "tickWidth" : "minorTickWidth"],
              "tick" === b && this.isXAxis && !this.categories ? 1 : 0
            ),
            d = c["tick" === b ? "tickLength" : "minorTickLength"];
          if (a && d) {
            "inside" === c[b + "Position"] && (d = -d);
            var g = [d, a];
          }
          b = { tickSize: g };
          q(this, "afterTickSize", b);
          return b.tickSize;
        };
        a.prototype.labelMetrics = function () {
          var b = (this.tickPositions && this.tickPositions[0]) || 0;
          return this.chart.renderer.fontMetrics(
            this.options.labels.style.fontSize,
            this.ticks[b] && this.ticks[b].label
          );
        };
        a.prototype.unsquish = function () {
          var b = this.options.labels,
            c = this.horiz,
            a = this.tickInterval,
            d =
              this.len /
              (((this.categories ? 1 : 0) + this.max - this.min) / a),
            k = b.rotation,
            r = this.labelMetrics(),
            h = Math.max(this.max - this.min, 0),
            q = function (b) {
              var c = b / (d || 1);
              c = 1 < c ? Math.ceil(c) : 1;
              c * a > h &&
                Infinity !== b &&
                Infinity !== d &&
                h &&
                (c = Math.ceil(h / a));
              return t(c * a);
            },
            f = a,
            x,
            l,
            D = Number.MAX_VALUE;
          if (c) {
            if (!b.staggerLines && !b.step)
              if (g(k)) var n = [k];
              else d < b.autoRotationLimit && (n = b.autoRotation);
            n &&
              n.forEach(function (b) {
                if (b === k || (b && -90 <= b && 90 >= b)) {
                  l = q(Math.abs(r.h / Math.sin(e * b)));
                  var c = l + Math.abs(b / 360);
                  c < D && ((D = c), (x = b), (f = l));
                }
              });
          } else b.step || (f = q(r.h));
          this.autoRotation = n;
          this.labelRotation = K(x, g(k) ? k : 0);
          return f;
        };
        a.prototype.getSlotWidth = function (b) {
          var c = this.chart,
            a = this.horiz,
            d = this.options.labels,
            e = Math.max(
              this.tickPositions.length - (this.categories ? 0 : 1),
              1
            ),
            k = c.margin[3];
          if (b && g(b.slotWidth)) return b.slotWidth;
          if (a && 2 > d.step)
            return d.rotation ? 0 : ((this.staggerLines || 1) * this.len) / e;
          if (!a) {
            b = d.style.width;
            if (void 0 !== b) return parseInt(String(b), 10);
            if (k) return k - c.spacing[3];
          }
          return 0.33 * c.chartWidth;
        };
        a.prototype.renderUnsquish = function () {
          var c = this.chart,
            a = c.renderer,
            d = this.tickPositions,
            g = this.ticks,
            e = this.options.labels,
            k = e.style,
            r = this.horiz,
            h = this.getSlotWidth(),
            q = Math.max(1, Math.round(h - 2 * e.padding)),
            f = {},
            x = this.labelMetrics(),
            l = k.textOverflow,
            D = 0;
          b(e.rotation) || (f.rotation = e.rotation || 0);
          d.forEach(function (b) {
            b = g[b];
            b.movedLabel && b.replaceMovedLabel();
            b &&
              b.label &&
              b.label.textPxLength > D &&
              (D = b.label.textPxLength);
          });
          this.maxLabelLength = D;
          if (this.autoRotation)
            D > q && D > x.h
              ? (f.rotation = this.labelRotation)
              : (this.labelRotation = 0);
          else if (h) {
            var n = q;
            if (!l) {
              var m = "clip";
              for (q = d.length; !r && q--; ) {
                var p = d[q];
                if ((p = g[p].label))
                  p.styles && "ellipsis" === p.styles.textOverflow
                    ? p.css({ textOverflow: "clip" })
                    : p.textPxLength > h && p.css({ width: h + "px" }),
                    p.getBBox().height > this.len / d.length - (x.h - x.f) &&
                      (p.specificTextOverflow = "ellipsis");
              }
            }
          }
          f.rotation &&
            ((n = D > 0.5 * c.chartHeight ? 0.33 * c.chartHeight : D),
            l || (m = "ellipsis"));
          if (
            (this.labelAlign =
              e.align || this.autoLabelAlign(this.labelRotation))
          )
            f.align = this.labelAlign;
          d.forEach(function (b) {
            var c = (b = g[b]) && b.label,
              a = k.width,
              d = {};
            c &&
              (c.attr(f),
              b.shortenLabel
                ? b.shortenLabel()
                : n &&
                  !a &&
                  "nowrap" !== k.whiteSpace &&
                  (n < c.textPxLength || "SPAN" === c.element.tagName)
                ? ((d.width = n + "px"),
                  l || (d.textOverflow = c.specificTextOverflow || m),
                  c.css(d))
                : c.styles &&
                  c.styles.width &&
                  !d.width &&
                  !a &&
                  c.css({ width: null }),
              delete c.specificTextOverflow,
              (b.rotation = f.rotation));
          }, this);
          this.tickRotCorr = a.rotCorr(
            x.b,
            this.labelRotation || 0,
            0 !== this.side
          );
        };
        a.prototype.hasData = function () {
          return (
            this.series.some(function (b) {
              return b.hasData();
            }) ||
            (this.options.showEmpty && n(this.min) && n(this.max))
          );
        };
        a.prototype.addTitle = function (b) {
          var c = this.chart.renderer,
            a = this.horiz,
            d = this.opposite,
            g = this.options.title,
            e = this.chart.styledMode,
            k;
          this.axisTitle ||
            ((k = g.textAlign) ||
              (k = (
                a
                  ? { low: "left", middle: "center", high: "right" }
                  : {
                      low: d ? "right" : "left",
                      middle: "center",
                      high: d ? "left" : "right",
                    }
              )[g.align]),
            (this.axisTitle = c
              .text(g.text || "", 0, 0, g.useHTML)
              .attr({ zIndex: 7, rotation: g.rotation, align: k })
              .addClass("highcharts-axis-title")),
            e || this.axisTitle.css(r(g.style)),
            this.axisTitle.add(this.axisGroup),
            (this.axisTitle.isNew = !0));
          e ||
            g.style.width ||
            this.isRadial ||
            this.axisTitle.css({ width: this.len + "px" });
          this.axisTitle[b ? "show" : "hide"](b);
        };
        a.prototype.generateTick = function (b) {
          var c = this.ticks;
          c[b] ? c[b].addLabel() : (c[b] = new I(this, b));
        };
        a.prototype.getOffset = function () {
          var b = this,
            c = this,
            a = c.chart,
            d = c.horiz,
            g = c.options,
            e = c.side,
            k = c.ticks,
            r = c.tickPositions,
            h = c.coll,
            f = c.axisParent,
            x = a.renderer,
            l = a.inverted && !c.isZAxis ? [1, 0, 3, 2][e] : e,
            m = c.hasData(),
            p = g.title,
            t = g.labels,
            A = a.axisOffset;
          a = a.clipOffset;
          var P = [-1, 1, 1, -1][e],
            w = g.className,
            y,
            v = 0,
            ja = 0,
            ca = 0;
          c.showAxis = y = m || g.showEmpty;
          c.staggerLines = (c.horiz && t.staggerLines) || void 0;
          if (!c.axisGroup) {
            var Q = function (c, a, d) {
              return x
                .g(c)
                .attr({ zIndex: d })
                .addClass(
                  "highcharts-" +
                    h.toLowerCase() +
                    a +
                    " " +
                    (b.isRadial ? "highcharts-radial-axis" + a + " " : "") +
                    (w || "")
                )
                .add(f);
            };
            c.gridGroup = Q("grid", "-grid", g.gridZIndex);
            c.axisGroup = Q("axis", "", g.zIndex);
            c.labelGroup = Q("axis-labels", "-labels", t.zIndex);
          }
          m || c.isLinked
            ? (r.forEach(function (b) {
                c.generateTick(b);
              }),
              c.renderUnsquish(),
              (c.reserveSpaceDefault =
                0 === e ||
                2 === e ||
                { 1: "left", 3: "right" }[e] === c.labelAlign),
              K(
                t.reserveSpace,
                "center" === c.labelAlign ? !0 : null,
                c.reserveSpaceDefault
              ) &&
                r.forEach(function (b) {
                  ca = Math.max(k[b].getLabelSize(), ca);
                }),
              c.staggerLines && (ca *= c.staggerLines),
              (c.labelOffset = ca * (c.opposite ? -1 : 1)))
            : D(k, function (b, c) {
                b.destroy();
                delete k[c];
              });
          if (
            p &&
            p.text &&
            !1 !== p.enabled &&
            (c.addTitle(y), y && !1 !== p.reserveSpace)
          ) {
            c.titleOffset = v = c.axisTitle.getBBox()[d ? "height" : "width"];
            var O = p.offset;
            ja = n(O) ? 0 : K(p.margin, d ? 5 : 10);
          }
          c.renderLine();
          c.offset = P * K(g.offset, A[e] ? A[e] + (g.margin || 0) : 0);
          c.tickRotCorr = c.tickRotCorr || { x: 0, y: 0 };
          p = 0 === e ? -c.labelMetrics().h : 2 === e ? c.tickRotCorr.y : 0;
          m = Math.abs(ca) + ja;
          ca && (m = m - p + P * (d ? K(t.y, c.tickRotCorr.y + 8 * P) : t.x));
          c.axisTitleMargin = K(O, m);
          c.getMaxLabelDimensions &&
            (c.maxLabelDimensions = c.getMaxLabelDimensions(k, r));
          "colorAxis" !== h &&
            ((d = this.tickSize("tick")),
            (A[e] = Math.max(
              A[e],
              (c.axisTitleMargin || 0) + v + P * c.offset,
              m,
              r && r.length && d ? d[0] + P * c.offset : 0
            )),
            (g =
              !c.axisLine || g.offset
                ? 0
                : 2 * Math.floor(c.axisLine.strokeWidth() / 2)),
            (a[l] = Math.max(a[l], g)));
          q(this, "afterGetOffset");
        };
        a.prototype.getLinePath = function (b) {
          var c = this.chart,
            a = this.opposite,
            d = this.offset,
            g = this.horiz,
            e = this.left + (a ? this.width : 0) + d;
          d = c.chartHeight - this.bottom - (a ? this.height : 0) + d;
          a && (b *= -1);
          return c.renderer.crispLine(
            [
              ["M", g ? this.left : e, g ? d : this.top],
              [
                "L",
                g ? c.chartWidth - this.right : e,
                g ? d : c.chartHeight - this.bottom,
              ],
            ],
            b
          );
        };
        a.prototype.renderLine = function () {
          this.axisLine ||
            ((this.axisLine = this.chart.renderer
              .path()
              .addClass("highcharts-axis-line")
              .add(this.axisGroup)),
            this.chart.styledMode ||
              this.axisLine.attr({
                stroke: this.options.lineColor,
                "stroke-width": this.options.lineWidth,
                zIndex: 7,
              }));
        };
        a.prototype.getTitlePosition = function () {
          var b = this.horiz,
            c = this.left,
            a = this.top,
            d = this.len,
            g = this.options.title,
            e = b ? c : a,
            k = this.opposite,
            r = this.offset,
            h = g.x,
            f = g.y,
            x = this.axisTitle,
            l = this.chart.renderer.fontMetrics(g.style.fontSize, x);
          x = Math.max(x.getBBox(null, 0).height - l.h - 1, 0);
          d = {
            low: e + (b ? 0 : d),
            middle: e + d / 2,
            high: e + (b ? d : 0),
          }[g.align];
          c =
            (b ? a + this.height : c) +
            (b ? 1 : -1) * (k ? -1 : 1) * this.axisTitleMargin +
            [-x, x, l.f, -x][this.side];
          b = {
            x: b ? d + h : c + (k ? this.width : 0) + r + h,
            y: b ? c + f - (k ? this.height : 0) + r : d + f,
          };
          q(this, "afterGetTitlePosition", { titlePosition: b });
          return b;
        };
        a.prototype.renderMinorTick = function (b, c) {
          var a = this.minorTicks;
          a[b] || (a[b] = new I(this, b, "minor"));
          c && a[b].isNew && a[b].render(null, !0);
          a[b].render(null, !1, 1);
        };
        a.prototype.renderTick = function (b, c, a) {
          var d = this.ticks;
          if (
            !this.isLinked ||
            (b >= this.min && b <= this.max) ||
            (this.grid && this.grid.isColumn)
          )
            d[b] || (d[b] = new I(this, b)),
              a && d[b].isNew && d[b].render(c, !0, -1),
              d[b].render(c);
        };
        a.prototype.render = function () {
          var b = this,
            c = b.chart,
            a = b.logarithmic,
            d = b.options,
            e = b.isLinked,
            k = b.tickPositions,
            r = b.axisTitle,
            h = b.ticks,
            f = b.minorTicks,
            x = b.alternateBands,
            l = d.stackLabels,
            n = d.alternateGridColor,
            m = b.tickmarkOffset,
            p = b.axisLine,
            t = b.showAxis,
            K = z(c.renderer.globalAnimation),
            A,
            P;
          b.labelEdge.length = 0;
          b.overlap = !1;
          [h, f, x].forEach(function (b) {
            D(b, function (b) {
              b.isActive = !1;
            });
          });
          if (b.hasData() || e) {
            var w = b.chart.hasRendered && b.old && g(b.old.min);
            b.minorTickInterval &&
              !b.categories &&
              b.getMinorTickPositions().forEach(function (c) {
                b.renderMinorTick(c, w);
              });
            k.length &&
              (k.forEach(function (c, a) {
                b.renderTick(c, a, w);
              }),
              m &&
                (0 === b.min || b.single) &&
                (h[-1] || (h[-1] = new I(b, -1, null, !0)), h[-1].render(-1)));
            n &&
              k.forEach(function (d, g) {
                P = "undefined" !== typeof k[g + 1] ? k[g + 1] + m : b.max - m;
                0 === g % 2 &&
                  d < b.max &&
                  P <= b.max + (c.polar ? -m : m) &&
                  (x[d] || (x[d] = new H.PlotLineOrBand(b)),
                  (A = d + m),
                  (x[d].options = {
                    from: a ? a.lin2log(A) : A,
                    to: a ? a.lin2log(P) : P,
                    color: n,
                    className: "highcharts-alternate-grid",
                  }),
                  x[d].render(),
                  (x[d].isActive = !0));
              });
            b._addedPlotLB ||
              ((b._addedPlotLB = !0),
              (d.plotLines || [])
                .concat(d.plotBands || [])
                .forEach(function (c) {
                  b.addPlotBandOrLine(c);
                }));
          }
          [h, f, x].forEach(function (b) {
            var a = [],
              d = K.duration;
            D(b, function (b, c) {
              b.isActive || (b.render(c, !1, 0), (b.isActive = !1), a.push(c));
            });
            W(
              function () {
                for (var c = a.length; c--; )
                  b[a[c]] &&
                    !b[a[c]].isActive &&
                    (b[a[c]].destroy(), delete b[a[c]]);
              },
              b !== x && c.hasRendered && d ? d : 0
            );
          });
          p &&
            (p[p.isPlaced ? "animate" : "attr"]({
              d: this.getLinePath(p.strokeWidth()),
            }),
            (p.isPlaced = !0),
            p[t ? "show" : "hide"](t));
          r &&
            t &&
            ((d = b.getTitlePosition()),
            g(d.y)
              ? (r[r.isNew ? "attr" : "animate"](d), (r.isNew = !1))
              : (r.attr("y", -9999), (r.isNew = !0)));
          l && l.enabled && b.stacking && b.stacking.renderStackTotals();
          b.old = {
            len: b.len,
            max: b.max,
            min: b.min,
            transA: b.transA,
            userMax: b.userMax,
            userMin: b.userMin,
          };
          b.isDirty = !1;
          q(this, "afterRender");
        };
        a.prototype.redraw = function () {
          this.visible &&
            (this.render(),
            this.plotLinesAndBands.forEach(function (b) {
              b.render();
            }));
          this.series.forEach(function (b) {
            b.isDirty = !0;
          });
        };
        a.prototype.getKeepProps = function () {
          return this.keepProps || a.keepProps;
        };
        a.prototype.destroy = function (b) {
          var c = this,
            a = c.plotLinesAndBands,
            d = this.eventOptions;
          q(this, "destroy", { keepEvents: b });
          b || Q(c);
          [c.ticks, c.minorTicks, c.alternateBands].forEach(function (b) {
            v(b);
          });
          if (a) for (b = a.length; b--; ) a[b].destroy();
          "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar"
            .split(" ")
            .forEach(function (b) {
              c[b] && (c[b] = c[b].destroy());
            });
          for (var g in c.plotLinesAndBandsGroups)
            c.plotLinesAndBandsGroups[g] =
              c.plotLinesAndBandsGroups[g].destroy();
          D(c, function (b, a) {
            -1 === c.getKeepProps().indexOf(a) && delete c[a];
          });
          this.eventOptions = d;
        };
        a.prototype.drawCrosshair = function (b, c) {
          var a = this.crosshair,
            d = K(a && a.snap, !0),
            g = this.chart,
            e,
            k = this.cross;
          q(this, "drawCrosshair", { e: b, point: c });
          b || (b = this.cross && this.cross.e);
          if (a && !1 !== (n(c) || !d)) {
            d
              ? n(c) &&
                (e = K(
                  "colorAxis" !== this.coll ? c.crosshairPos : null,
                  this.isXAxis ? c.plotX : this.len - c.plotY
                ))
              : (e =
                  b &&
                  (this.horiz
                    ? b.chartX - this.pos
                    : this.len - b.chartY + this.pos));
            if (n(e)) {
              var r = {
                value: c && (this.isXAxis ? c.x : K(c.stackY, c.y)),
                translatedValue: e,
              };
              g.polar &&
                A(r, {
                  isCrosshair: !0,
                  chartX: b && b.chartX,
                  chartY: b && b.chartY,
                  point: c,
                });
              r = this.getPlotLinePath(r) || null;
            }
            if (!n(r)) {
              this.hideCrosshair();
              return;
            }
            d = this.categories && !this.isRadial;
            k ||
              ((this.cross = k =
                g.renderer
                  .path()
                  .addClass(
                    "highcharts-crosshair highcharts-crosshair-" +
                      (d ? "category " : "thin ") +
                      (a.className || "")
                  )
                  .attr({ zIndex: K(a.zIndex, 2) })
                  .add()),
              g.styledMode ||
                (k
                  .attr({
                    stroke:
                      a.color ||
                      (d
                        ? C.parse("#ccd6eb").setOpacity(0.25).get()
                        : "#cccccc"),
                    "stroke-width": K(a.width, 1),
                  })
                  .css({ "pointer-events": "none" }),
                a.dashStyle && k.attr({ dashstyle: a.dashStyle })));
            k.show().attr({ d: r });
            d && !a.width && k.attr({ "stroke-width": this.transA });
            this.cross.e = b;
          } else this.hideCrosshair();
          q(this, "afterDrawCrosshair", { e: b, point: c });
        };
        a.prototype.hideCrosshair = function () {
          this.cross && this.cross.hide();
          q(this, "afterHideCrosshair");
        };
        a.prototype.hasVerticalPanning = function () {
          var b = this.chart.options.chart.panning;
          return !!(b && b.enabled && /y/.test(b.type));
        };
        a.prototype.validatePositiveValue = function (b) {
          return g(b) && 0 < b;
        };
        a.prototype.update = function (b, c) {
          var a = this.chart;
          b = r(this.userOptions, b);
          this.destroy(!0);
          this.init(a, b);
          a.isDirtyBox = !0;
          K(c, !0) && a.redraw();
        };
        a.prototype.remove = function (b) {
          for (
            var c = this.chart, a = this.coll, d = this.series, g = d.length;
            g--;

          )
            d[g] && d[g].remove(!1);
          w(c.axes, this);
          w(c[a], this);
          c[a].forEach(function (b, c) {
            b.options.index = b.userOptions.index = c;
          });
          this.destroy();
          c.isDirtyBox = !0;
          K(b, !0) && c.redraw();
        };
        a.prototype.setTitle = function (b, c) {
          this.update({ title: b }, c);
        };
        a.prototype.setCategories = function (b, c) {
          this.update({ categories: b }, c);
        };
        a.defaultOptions = f.defaultXAxisOptions;
        a.keepProps = "extKey hcEvents names series userMax userMin".split(" ");
        return a;
      })();
      ("");
      return a;
    }
  );
  M(f, "Core/Axis/DateTimeAxis.js", [f["Core/Utilities.js"]], function (a) {
    var f = a.addEvent,
      C = a.getMagnitude,
      G = a.normalizeTickInterval,
      u = a.timeUnits,
      H;
    (function (a) {
      function B() {
        return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
      }
      function z(a) {
        "datetime" !== a.userOptions.type
          ? (this.dateTime = void 0)
          : this.dateTime || (this.dateTime = new m(this));
      }
      var p = [];
      a.compose = function (a) {
        -1 === p.indexOf(a) &&
          (p.push(a),
          a.keepProps.push("dateTime"),
          (a.prototype.getTimeTicks = B),
          f(a, "init", z));
        return a;
      };
      var m = (function () {
        function a(a) {
          this.axis = a;
        }
        a.prototype.normalizeTimeTickInterval = function (a, e) {
          var d = e || [
            ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
            ["second", [1, 2, 5, 10, 15, 30]],
            ["minute", [1, 2, 5, 10, 15, 30]],
            ["hour", [1, 2, 3, 4, 6, 8, 12]],
            ["day", [1, 2]],
            ["week", [1, 2]],
            ["month", [1, 2, 3, 4, 6]],
            ["year", null],
          ];
          e = d[d.length - 1];
          var f = u[e[0]],
            l = e[1],
            m;
          for (
            m = 0;
            m < d.length &&
            !((e = d[m]),
            (f = u[e[0]]),
            (l = e[1]),
            d[m + 1] && a <= (f * l[l.length - 1] + u[d[m + 1][0]]) / 2);
            m++
          );
          f === u.year && a < 5 * f && (l = [1, 2, 5]);
          a = G(a / f, l, "year" === e[0] ? Math.max(C(a / f), 1) : 1);
          return { unitRange: f, count: a, unitName: e[0] };
        };
        a.prototype.getXDateFormat = function (a, e) {
          var d = this.axis;
          return d.closestPointRange
            ? d.chart.time.getDateFormat(
                d.closestPointRange,
                a,
                d.options.startOfWeek,
                e
              ) || e.year
            : e.day;
        };
        return a;
      })();
      a.Additions = m;
    })(H || (H = {}));
    return H;
  });
  M(f, "Core/Axis/LogarithmicAxis.js", [f["Core/Utilities.js"]], function (a) {
    var f = a.addEvent,
      C = a.getMagnitude,
      G = a.normalizeTickInterval,
      u = a.pick,
      H;
    (function (a) {
      function B(a) {
        var d = this.logarithmic;
        "logarithmic" !== a.userOptions.type
          ? (this.logarithmic = void 0)
          : d || (this.logarithmic = new m(this));
      }
      function z() {
        var a = this.logarithmic;
        a &&
          ((this.lin2val = function (d) {
            return a.lin2log(d);
          }),
          (this.val2lin = function (d) {
            return a.log2lin(d);
          }));
      }
      var p = [];
      a.compose = function (a) {
        -1 === p.indexOf(a) &&
          (p.push(a),
          a.keepProps.push("logarithmic"),
          f(a, "init", B),
          f(a, "afterInit", z));
        return a;
      };
      var m = (function () {
        function a(a) {
          this.axis = a;
        }
        a.prototype.getLogTickPositions = function (a, e, h, f) {
          var d = this.axis,
            l = d.len,
            m = d.options,
            p = [];
          f || (this.minorAutoInterval = void 0);
          if (0.5 <= a)
            (a = Math.round(a)), (p = d.getLinearTickPositions(a, e, h));
          else if (0.08 <= a) {
            var t = Math.floor(e),
              q,
              k = (m = void 0);
            for (
              l =
                0.3 < a
                  ? [1, 2, 4]
                  : 0.15 < a
                  ? [1, 2, 4, 6, 8]
                  : [1, 2, 3, 4, 5, 6, 7, 8, 9];
              t < h + 1 && !k;
              t++
            ) {
              var c = l.length;
              for (q = 0; q < c && !k; q++) {
                var g = this.log2lin(this.lin2log(t) * l[q]);
                g > e &&
                  (!f || m <= h) &&
                  "undefined" !== typeof m &&
                  p.push(m);
                m > h && (k = !0);
                m = g;
              }
            }
          } else
            (e = this.lin2log(e)),
              (h = this.lin2log(h)),
              (a = f ? d.getMinorTickInterval() : m.tickInterval),
              (a = u(
                "auto" === a ? null : a,
                this.minorAutoInterval,
                ((m.tickPixelInterval / (f ? 5 : 1)) * (h - e)) /
                  ((f ? l / d.tickPositions.length : l) || 1)
              )),
              (a = G(a, void 0, C(a))),
              (p = d.getLinearTickPositions(a, e, h).map(this.log2lin)),
              f || (this.minorAutoInterval = a / 5);
          f || (d.tickInterval = a);
          return p;
        };
        a.prototype.lin2log = function (a) {
          return Math.pow(10, a);
        };
        a.prototype.log2lin = function (a) {
          return Math.log(a) / Math.LN10;
        };
        return a;
      })();
      a.Additions = m;
    })(H || (H = {}));
    return H;
  });
  M(
    f,
    "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js",
    [f["Core/Utilities.js"]],
    function (a) {
      var f = a.erase,
        C = a.extend,
        G = a.isNumber,
        u;
      (function (a) {
        var u = [],
          B;
        a.compose = function (a, f) {
          B || (B = a);
          -1 === u.indexOf(f) && (u.push(f), C(f.prototype, z.prototype));
          return f;
        };
        var z = (function () {
          function a() {}
          a.prototype.getPlotBandPath = function (a, e, d) {
            void 0 === d && (d = this.options);
            var f = this.getPlotLinePath({
                value: e,
                force: !0,
                acrossPanes: d.acrossPanes,
              }),
              h = [],
              m = this.horiz;
            e =
              !G(this.min) ||
              !G(this.max) ||
              (a < this.min && e < this.min) ||
              (a > this.max && e > this.max);
            a = this.getPlotLinePath({
              value: a,
              force: !0,
              acrossPanes: d.acrossPanes,
            });
            d = 1;
            if (a && f) {
              if (e) {
                var n = a.toString() === f.toString();
                d = 0;
              }
              for (e = 0; e < a.length; e += 2) {
                var p = a[e],
                  w = a[e + 1],
                  y = f[e],
                  A = f[e + 1];
                ("M" !== p[0] && "L" !== p[0]) ||
                  ("M" !== w[0] && "L" !== w[0]) ||
                  ("M" !== y[0] && "L" !== y[0]) ||
                  ("M" !== A[0] && "L" !== A[0]) ||
                  (m && y[1] === p[1]
                    ? ((y[1] += d), (A[1] += d))
                    : m || y[2] !== p[2] || ((y[2] += d), (A[2] += d)),
                  h.push(
                    ["M", p[1], p[2]],
                    ["L", w[1], w[2]],
                    ["L", A[1], A[2]],
                    ["L", y[1], y[2]],
                    ["Z"]
                  ));
                h.isFlat = n;
              }
            }
            return h;
          };
          a.prototype.addPlotBand = function (a) {
            return this.addPlotBandOrLine(a, "plotBands");
          };
          a.prototype.addPlotLine = function (a) {
            return this.addPlotBandOrLine(a, "plotLines");
          };
          a.prototype.addPlotBandOrLine = function (a, e) {
            var d = this,
              f = this.userOptions,
              h = new B(this, a);
            this.visible && (h = h.render());
            if (h) {
              this._addedPlotLB ||
                ((this._addedPlotLB = !0),
                (f.plotLines || [])
                  .concat(f.plotBands || [])
                  .forEach(function (a) {
                    d.addPlotBandOrLine(a);
                  }));
              if (e) {
                var m = f[e] || [];
                m.push(a);
                f[e] = m;
              }
              this.plotLinesAndBands.push(h);
            }
            return h;
          };
          a.prototype.removePlotBandOrLine = function (a) {
            var e = this.plotLinesAndBands,
              d = this.options,
              l = this.userOptions;
            if (e) {
              for (var h = e.length; h--; ) e[h].id === a && e[h].destroy();
              [
                d.plotLines || [],
                l.plotLines || [],
                d.plotBands || [],
                l.plotBands || [],
              ].forEach(function (d) {
                for (h = d.length; h--; ) (d[h] || {}).id === a && f(d, d[h]);
              });
            }
          };
          a.prototype.removePlotBand = function (a) {
            this.removePlotBandOrLine(a);
          };
          a.prototype.removePlotLine = function (a) {
            this.removePlotBandOrLine(a);
          };
          return a;
        })();
      })(u || (u = {}));
      return u;
    }
  );
  M(
    f,
    "Core/Axis/PlotLineOrBand/PlotLineOrBand.js",
    [
      f["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f) {
      var F = f.arrayMax,
        G = f.arrayMin,
        u = f.defined,
        H = f.destroyObjectProperties,
        I = f.erase,
        B = f.fireEvent,
        z = f.merge,
        p = f.objectEach,
        m = f.pick;
      f = (function () {
        function e(a, e) {
          this.axis = a;
          e && ((this.options = e), (this.id = e.id));
        }
        e.compose = function (d) {
          return a.compose(e, d);
        };
        e.prototype.render = function () {
          B(this, "render");
          var a = this,
            e = a.axis,
            f = e.horiz,
            t = e.logarithmic,
            n = a.options,
            v = n.color,
            w = m(n.zIndex, 0),
            y = n.events,
            A = {},
            q = e.chart.renderer,
            k = n.label,
            c = a.label,
            g = n.to,
            b = n.from,
            r = n.value,
            x = a.svgElem,
            D = [],
            K = u(b) && u(g);
          D = u(r);
          var P = !x,
            Q = {
              class:
                "highcharts-plot-" +
                (K ? "band " : "line ") +
                (n.className || ""),
            },
            O = K ? "bands" : "lines";
          t && ((b = t.log2lin(b)), (g = t.log2lin(g)), (r = t.log2lin(r)));
          e.chart.styledMode ||
            (D
              ? ((Q.stroke = v || "#999999"),
                (Q["stroke-width"] = m(n.width, 1)),
                n.dashStyle && (Q.dashstyle = n.dashStyle))
              : K &&
                ((Q.fill = v || "#e6ebf5"),
                n.borderWidth &&
                  ((Q.stroke = n.borderColor),
                  (Q["stroke-width"] = n.borderWidth))));
          A.zIndex = w;
          O += "-" + w;
          (t = e.plotLinesAndBandsGroups[O]) ||
            (e.plotLinesAndBandsGroups[O] = t =
              q
                .g("plot-" + O)
                .attr(A)
                .add());
          P && (a.svgElem = x = q.path().attr(Q).add(t));
          if (D)
            D = e.getPlotLinePath({
              value: r,
              lineWidth: x.strokeWidth(),
              acrossPanes: n.acrossPanes,
            });
          else if (K) D = e.getPlotBandPath(b, g, n);
          else return;
          !a.eventsAdded &&
            y &&
            (p(y, function (b, c) {
              x.on(c, function (b) {
                y[c].apply(a, [b]);
              });
            }),
            (a.eventsAdded = !0));
          (P || !x.d) && D && D.length
            ? x.attr({ d: D })
            : x &&
              (D
                ? (x.show(!0), x.animate({ d: D }))
                : x.d && (x.hide(), c && (a.label = c = c.destroy())));
          k &&
          (u(k.text) || u(k.formatter)) &&
          D &&
          D.length &&
          0 < e.width &&
          0 < e.height &&
          !D.isFlat
            ? ((k = z(
                {
                  align: f && K && "center",
                  x: f ? !K && 4 : 10,
                  verticalAlign: !f && K && "middle",
                  y: f ? (K ? 16 : 10) : K ? 6 : -4,
                  rotation: f && !K && 90,
                },
                k
              )),
              this.renderLabel(k, D, K, w))
            : c && c.hide();
          return a;
        };
        e.prototype.renderLabel = function (a, e, f, m) {
          var d = this.axis,
            h = d.chart.renderer,
            l = this.label;
          l ||
            ((this.label = l =
              h
                .text(this.getLabelText(a), 0, 0, a.useHTML)
                .attr({
                  align: a.textAlign || a.align,
                  rotation: a.rotation,
                  class:
                    "highcharts-plot-" +
                    (f ? "band" : "line") +
                    "-label " +
                    (a.className || ""),
                  zIndex: m,
                })
                .add()),
            d.chart.styledMode ||
              l.css(z({ textOverflow: "ellipsis" }, a.style)));
          m = e.xBounds || [e[0][1], e[1][1], f ? e[2][1] : e[0][1]];
          e = e.yBounds || [e[0][2], e[1][2], f ? e[2][2] : e[0][2]];
          f = G(m);
          h = G(e);
          l.align(a, !1, { x: f, y: h, width: F(m) - f, height: F(e) - h });
          (l.alignValue && "left" !== l.alignValue) ||
            l.css({
              width:
                (90 === l.rotation
                  ? d.height - (l.alignAttr.y - d.top)
                  : d.width - (l.alignAttr.x - d.left)) + "px",
            });
          l.show(!0);
        };
        e.prototype.getLabelText = function (a) {
          return u(a.formatter) ? a.formatter.call(this) : a.text;
        };
        e.prototype.destroy = function () {
          I(this.axis.plotLinesAndBands, this);
          delete this.axis;
          H(this);
        };
        return e;
      })();
      ("");
      ("");
      return f;
    }
  );
  M(
    f,
    "Core/Tooltip.js",
    [
      f["Core/FormatUtilities.js"],
      f["Core/Globals.js"],
      f["Core/Renderer/RendererUtilities.js"],
      f["Core/Renderer/RendererRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G, u) {
      var F = a.format,
        I = f.doc,
        B = C.distribute,
        z = u.addEvent,
        p = u.clamp,
        m = u.css,
        e = u.defined,
        d = u.discardElement,
        l = u.extend,
        h = u.fireEvent,
        t = u.isArray,
        n = u.isNumber,
        v = u.isString,
        w = u.merge,
        y = u.pick,
        A = u.splat,
        q = u.syncTimeout;
      a = (function () {
        function a(c, a) {
          this.allowShared = !0;
          this.container = void 0;
          this.crosshairs = [];
          this.distance = 0;
          this.isHidden = !0;
          this.isSticky = !1;
          this.now = {};
          this.options = {};
          this.outside = !1;
          this.chart = c;
          this.init(c, a);
        }
        a.prototype.applyFilter = function () {
          var c = this.chart;
          c.renderer.definition({
            tagName: "filter",
            attributes: { id: "drop-shadow-" + c.index, opacity: 0.5 },
            children: [
              {
                tagName: "feGaussianBlur",
                attributes: { in: "SourceAlpha", stdDeviation: 1 },
              },
              { tagName: "feOffset", attributes: { dx: 1, dy: 1 } },
              {
                tagName: "feComponentTransfer",
                children: [
                  {
                    tagName: "feFuncA",
                    attributes: { type: "linear", slope: 0.3 },
                  },
                ],
              },
              {
                tagName: "feMerge",
                children: [
                  { tagName: "feMergeNode" },
                  {
                    tagName: "feMergeNode",
                    attributes: { in: "SourceGraphic" },
                  },
                ],
              },
            ],
          });
        };
        a.prototype.bodyFormatter = function (c) {
          return c.map(function (c) {
            var b = c.series.tooltipOptions;
            return (
              b[(c.point.formatPrefix || "point") + "Formatter"] ||
              c.point.tooltipFormatter
            ).call(
              c.point,
              b[(c.point.formatPrefix || "point") + "Format"] || ""
            );
          });
        };
        a.prototype.cleanSplit = function (c) {
          this.chart.series.forEach(function (a) {
            var b = a && a.tt;
            b && (!b.isActive || c ? (a.tt = b.destroy()) : (b.isActive = !1));
          });
        };
        a.prototype.defaultFormatter = function (c) {
          var a = this.points || A(this);
          var b = [c.tooltipFooterHeaderFormatter(a[0])];
          b = b.concat(c.bodyFormatter(a));
          b.push(c.tooltipFooterHeaderFormatter(a[0], !0));
          return b;
        };
        a.prototype.destroy = function () {
          this.label && (this.label = this.label.destroy());
          this.split &&
            this.tt &&
            (this.cleanSplit(!0), (this.tt = this.tt.destroy()));
          this.renderer &&
            ((this.renderer = this.renderer.destroy()), d(this.container));
          u.clearTimeout(this.hideTimer);
          u.clearTimeout(this.tooltipTimeout);
        };
        a.prototype.getAnchor = function (c, a) {
          var b = this.chart,
            d = b.pointer,
            g = b.inverted,
            e = b.plotTop,
            k = b.plotLeft,
            f,
            h,
            q = 0,
            l = 0;
          c = A(c);
          this.followPointer && a
            ? ("undefined" === typeof a.chartX && (a = d.normalize(a)),
              (d = [a.chartX - k, a.chartY - e]))
            : c[0].tooltipPos
            ? (d = c[0].tooltipPos)
            : (c.forEach(function (c) {
                f = c.series.yAxis;
                h = c.series.xAxis;
                q += c.plotX || 0;
                l += c.plotLow
                  ? (c.plotLow + (c.plotHigh || 0)) / 2
                  : c.plotY || 0;
                h &&
                  f &&
                  (g
                    ? ((q += e + b.plotHeight - h.len - h.pos),
                      (l += k + b.plotWidth - f.len - f.pos))
                    : ((q += h.pos - k), (l += f.pos - e)));
              }),
              (q /= c.length),
              (l /= c.length),
              (d = [g ? b.plotWidth - l : q, g ? b.plotHeight - q : l]),
              this.shared &&
                1 < c.length &&
                a &&
                (g ? (d[0] = a.chartX - k) : (d[1] = a.chartY - e)));
          return d.map(Math.round);
        };
        a.prototype.getLabel = function () {
          var c = this,
            a = this.chart.styledMode,
            b = this.options,
            d = this.split && this.allowShared,
            k = "tooltip" + (e(b.className) ? " " + b.className : ""),
            h =
              b.style.pointerEvents ||
              (!this.followPointer && b.stickOnContact ? "auto" : "none"),
            q = function () {
              c.inContact = !0;
            },
            l = function (b) {
              var a = c.chart.hoverSeries;
              c.inContact =
                c.shouldStickOnContact() &&
                c.chart.pointer.inClass(b.relatedTarget, "highcharts-tooltip");
              if (!c.inContact && a && a.onMouseOut) a.onMouseOut();
            },
            n,
            p = this.chart.renderer;
          if (c.label) {
            var t = !c.label.hasClass("highcharts-label");
            ((d && !t) || (!d && t)) && c.destroy();
          }
          if (!this.label) {
            if (this.outside) {
              t = this.chart.options.chart.style;
              var A = G.getRendererType();
              this.container = n = f.doc.createElement("div");
              n.className = "highcharts-tooltip-container";
              m(n, {
                position: "absolute",
                top: "1px",
                pointerEvents: h,
                zIndex: Math.max(
                  this.options.style.zIndex || 0,
                  ((t && t.zIndex) || 0) + 3
                ),
              });
              z(n, "mouseenter", q);
              z(n, "mouseleave", l);
              f.doc.body.appendChild(n);
              this.renderer = p = new A(
                n,
                0,
                0,
                t,
                void 0,
                void 0,
                p.styledMode
              );
            }
            d
              ? (this.label = p.g(k))
              : ((this.label = p
                  .label(
                    "",
                    0,
                    0,
                    b.shape,
                    void 0,
                    void 0,
                    b.useHTML,
                    void 0,
                    k
                  )
                  .attr({ padding: b.padding, r: b.borderRadius })),
                a ||
                  this.label
                    .attr({
                      fill: b.backgroundColor,
                      "stroke-width": b.borderWidth,
                    })
                    .css(b.style)
                    .css({ pointerEvents: h })
                    .shadow(b.shadow));
            a &&
              b.shadow &&
              (this.applyFilter(),
              this.label.attr({
                filter: "url(#drop-shadow-" + this.chart.index + ")",
              }));
            if (c.outside && !c.split) {
              var w = this.label,
                y = w.xSetter,
                v = w.ySetter;
              w.xSetter = function (b) {
                y.call(w, c.distance);
                n.style.left = b + "px";
              };
              w.ySetter = function (b) {
                v.call(w, c.distance);
                n.style.top = b + "px";
              };
            }
            this.label
              .on("mouseenter", q)
              .on("mouseleave", l)
              .attr({ zIndex: 8 })
              .add();
          }
          return this.label;
        };
        a.prototype.getPosition = function (c, a, b) {
          var d = this.chart,
            g = this.distance,
            e = {},
            k = (d.inverted && b.h) || 0,
            f = this.outside,
            h = f ? I.documentElement.clientWidth - 2 * g : d.chartWidth,
            q = f
              ? Math.max(
                  I.body.scrollHeight,
                  I.documentElement.scrollHeight,
                  I.body.offsetHeight,
                  I.documentElement.offsetHeight,
                  I.documentElement.clientHeight
                )
              : d.chartHeight,
            l = d.pointer.getChartPosition(),
            m = function (e) {
              var k = "x" === e;
              return [e, k ? h : q, k ? c : a].concat(
                f
                  ? [
                      k ? c * l.scaleX : a * l.scaleY,
                      k
                        ? l.left - g + (b.plotX + d.plotLeft) * l.scaleX
                        : l.top - g + (b.plotY + d.plotTop) * l.scaleY,
                      0,
                      k ? h : q,
                    ]
                  : [
                      k ? c : a,
                      k ? b.plotX + d.plotLeft : b.plotY + d.plotTop,
                      k ? d.plotLeft : d.plotTop,
                      k ? d.plotLeft + d.plotWidth : d.plotTop + d.plotHeight,
                    ]
              );
            },
            n = m("y"),
            p = m("x"),
            t;
          m = !!b.negative;
          !d.polar &&
            d.hoverSeries &&
            d.hoverSeries.yAxis &&
            d.hoverSeries.yAxis.reversed &&
            (m = !m);
          var A = !this.followPointer && y(b.ttBelow, !d.inverted === m),
            w = function (b, c, a, d, r, h, q) {
              var x = f ? ("y" === b ? g * l.scaleY : g * l.scaleX) : g,
                m = (a - d) / 2,
                E = d < r - g,
                n = r + g + d < c,
                D = r - x - a + m;
              r = r + x - m;
              if (A && n) e[b] = r;
              else if (!A && E) e[b] = D;
              else if (E) e[b] = Math.min(q - d, 0 > D - k ? D : D - k);
              else if (n) e[b] = Math.max(h, r + k + a > c ? r : r + k);
              else return !1;
            },
            v = function (b, c, a, d, k) {
              var r;
              k < g || k > c - g
                ? (r = !1)
                : (e[b] =
                    k < a / 2 ? 1 : k > c - d / 2 ? c - d - 2 : k - a / 2);
              return r;
            },
            E = function (b) {
              var c = n;
              n = p;
              p = c;
              t = b;
            },
            T = function () {
              !1 !== w.apply(0, n)
                ? !1 !== v.apply(0, p) || t || (E(!0), T())
                : t
                ? (e.x = e.y = 0)
                : (E(!0), T());
            };
          (d.inverted || 1 < this.len) && E();
          T();
          return e;
        };
        a.prototype.hide = function (c) {
          var a = this;
          u.clearTimeout(this.hideTimer);
          c = y(c, this.options.hideDelay);
          this.isHidden ||
            (this.hideTimer = q(function () {
              a.getLabel().fadeOut(c ? void 0 : c);
              a.isHidden = !0;
            }, c));
        };
        a.prototype.init = function (c, a) {
          this.chart = c;
          this.options = a;
          this.crosshairs = [];
          this.now = { x: 0, y: 0 };
          this.isHidden = !0;
          this.split = a.split && !c.inverted && !c.polar;
          this.shared = a.shared || this.split;
          this.outside = y(
            a.outside,
            !(!c.scrollablePixelsX && !c.scrollablePixelsY)
          );
        };
        a.prototype.shouldStickOnContact = function () {
          return !(this.followPointer || !this.options.stickOnContact);
        };
        a.prototype.isStickyOnContact = function () {
          return !(!this.shouldStickOnContact() || !this.inContact);
        };
        a.prototype.move = function (c, a, b, d) {
          var g = this,
            e = g.now,
            k =
              !1 !== g.options.animation &&
              !g.isHidden &&
              (1 < Math.abs(c - e.x) || 1 < Math.abs(a - e.y)),
            r = g.followPointer || 1 < g.len;
          l(e, {
            x: k ? (2 * e.x + c) / 3 : c,
            y: k ? (e.y + a) / 2 : a,
            anchorX: r ? void 0 : k ? (2 * e.anchorX + b) / 3 : b,
            anchorY: r ? void 0 : k ? (e.anchorY + d) / 2 : d,
          });
          g.getLabel().attr(e);
          g.drawTracker();
          k &&
            (u.clearTimeout(this.tooltipTimeout),
            (this.tooltipTimeout = setTimeout(function () {
              g && g.move(c, a, b, d);
            }, 32)));
        };
        a.prototype.refresh = function (c, a) {
          var b = this.chart,
            d = this.options,
            g = A(c),
            e = g[0],
            k = [],
            f = d.formatter || this.defaultFormatter,
            q = this.shared,
            l = b.styledMode,
            m = {};
          if (d.enabled && e.series) {
            u.clearTimeout(this.hideTimer);
            this.allowShared = !(!t(c) && c.series && c.series.noSharedTooltip);
            this.followPointer =
              !this.split && e.series.tooltipOptions.followPointer;
            c = this.getAnchor(c, a);
            var n = c[0],
              p = c[1];
            q && this.allowShared
              ? (b.pointer.applyInactiveState(g),
                g.forEach(function (b) {
                  b.setState("hover");
                  k.push(b.getLabelConfig());
                }),
                (m = { x: e.category, y: e.y }),
                (m.points = k))
              : (m = e.getLabelConfig());
            this.len = k.length;
            f = f.call(m, this);
            q = e.series;
            this.distance = y(q.tooltipOptions.distance, 16);
            if (!1 === f) this.hide();
            else {
              if (this.split && this.allowShared) this.renderSplit(f, g);
              else {
                var w = n,
                  v = p;
                a &&
                  b.pointer.isDirectTouch &&
                  ((w = a.chartX - b.plotLeft), (v = a.chartY - b.plotTop));
                if (
                  b.polar ||
                  !1 === q.options.clip ||
                  g.some(function (b) {
                    return b.series.shouldShowTooltip(w, v);
                  })
                )
                  (a = this.getLabel()),
                    (d.style.width && !l) ||
                      a.css({ width: this.chart.spacingBox.width + "px" }),
                    a.attr({ text: f && f.join ? f.join("") : f }),
                    a
                      .removeClass(/highcharts-color-[\d]+/g)
                      .addClass(
                        "highcharts-color-" + y(e.colorIndex, q.colorIndex)
                      ),
                    l ||
                      a.attr({
                        stroke:
                          d.borderColor || e.color || q.color || "#666666",
                      }),
                    this.updatePosition({
                      plotX: n,
                      plotY: p,
                      negative: e.negative,
                      ttBelow: e.ttBelow,
                      h: c[2] || 0,
                    });
                else {
                  this.hide();
                  return;
                }
              }
              this.isHidden &&
                this.label &&
                this.label.attr({ opacity: 1 }).show();
              this.isHidden = !1;
            }
            h(this, "refresh");
          }
        };
        a.prototype.renderSplit = function (c, a) {
          function b(b, c, a, g, e) {
            void 0 === e && (e = !0);
            a
              ? ((c = X ? 0 : H),
                (b = p(b - g / 2, N.left, N.right - g - (d.outside ? S : 0))))
              : ((c -= C),
                (b = e ? b - g - F : b + F),
                (b = p(b, e ? b : N.left, N.right)));
            return { x: b, y: c };
          }
          var d = this,
            g = d.chart,
            e = d.chart,
            k = e.chartWidth,
            f = e.chartHeight,
            h = e.plotHeight,
            q = e.plotLeft,
            m = e.plotTop,
            n = e.pointer,
            t = e.scrollablePixelsY;
          t = void 0 === t ? 0 : t;
          var A = e.scrollablePixelsX,
            w = e.scrollingContainer;
          w = void 0 === w ? { scrollLeft: 0, scrollTop: 0 } : w;
          var z = w.scrollLeft;
          w = w.scrollTop;
          var u = e.styledMode,
            F = d.distance,
            E = d.options,
            T = d.options.positioner,
            N =
              d.outside && "number" !== typeof A
                ? I.documentElement.getBoundingClientRect()
                : { left: z, right: z + k, top: w, bottom: w + f },
            U = d.getLabel(),
            V = this.renderer || g.renderer,
            X = !(!g.xAxis[0] || !g.xAxis[0].opposite);
          g = n.getChartPosition();
          var S = g.left;
          g = g.top;
          var C = m + w,
            aa = 0,
            H = h - t;
          v(c) && (c = [!1, c]);
          c = c.slice(0, a.length + 1).reduce(function (c, g, e) {
            if (!1 !== g && "" !== g) {
              e = a[e - 1] || {
                isHeader: !0,
                plotX: a[0].plotX,
                plotY: h,
                series: {},
              };
              var k = e.isHeader,
                f = k ? d : e.series;
              g = g.toString();
              var r = f.tt,
                l = e.isHeader;
              var x = e.series;
              var n =
                "highcharts-color-" + y(e.colorIndex, x.colorIndex, "none");
              r ||
                ((r = { padding: E.padding, r: E.borderRadius }),
                u ||
                  ((r.fill = E.backgroundColor),
                  (r["stroke-width"] = E.borderWidth)),
                (r = V.label(
                  "",
                  0,
                  0,
                  E[l ? "headerShape" : "shape"],
                  void 0,
                  void 0,
                  E.useHTML
                )
                  .addClass(
                    (l ? "highcharts-tooltip-header " : "") +
                      "highcharts-tooltip-box " +
                      n
                  )
                  .attr(r)
                  .add(U)));
              r.isActive = !0;
              r.attr({ text: g });
              u ||
                r
                  .css(E.style)
                  .shadow(E.shadow)
                  .attr({
                    stroke: E.borderColor || e.color || x.color || "#333333",
                  });
              f = f.tt = r;
              l = f.getBBox();
              g = l.width + f.strokeWidth();
              k && ((aa = l.height), (H += aa), X && (C -= aa));
              x = e.plotX;
              x = void 0 === x ? 0 : x;
              n = e.plotY;
              n = void 0 === n ? 0 : n;
              r = e.series;
              if (e.isHeader) {
                x = q + x;
                var D = m + h / 2;
              } else {
                var t = r.xAxis,
                  A = r.yAxis;
                x = t.pos + p(x, -F, t.len + F);
                r.shouldShowTooltip(0, A.pos - m + n, { ignoreX: !0 }) &&
                  (D = A.pos + n);
              }
              x = p(x, N.left - F, N.right + F);
              "number" === typeof D
                ? ((l = l.height + 1),
                  (n = T ? T.call(d, g, l, e) : b(x, D, k, g)),
                  c.push({
                    align: T ? 0 : void 0,
                    anchorX: x,
                    anchorY: D,
                    boxWidth: g,
                    point: e,
                    rank: y(n.rank, k ? 1 : 0),
                    size: l,
                    target: n.y,
                    tt: f,
                    x: n.x,
                  }))
                : (f.isActive = !1);
            }
            return c;
          }, []);
          !T &&
            c.some(function (b) {
              var c = (d.outside ? S : 0) + b.anchorX;
              return c < N.left && c + b.boxWidth < N.right
                ? !0
                : c < S - N.left + b.boxWidth && N.right - c > c;
            }) &&
            (c = c.map(function (c) {
              var a = b(c.anchorX, c.anchorY, c.point.isHeader, c.boxWidth, !1);
              return l(c, { target: a.y, x: a.x });
            }));
          d.cleanSplit();
          B(c, H);
          var G = S,
            ba = S;
          c.forEach(function (b) {
            var c = b.x,
              a = b.boxWidth;
            b = b.isHeader;
            b ||
              (d.outside && S + c < G && (G = S + c),
              !b && d.outside && G + a > ba && (ba = S + c));
          });
          c.forEach(function (b) {
            var c = b.x,
              a = b.anchorX,
              g = b.pos,
              e = b.point.isHeader;
            g = {
              visibility: "undefined" === typeof g ? "hidden" : "inherit",
              x: c,
              y: g + C,
              anchorX: a,
              anchorY: b.anchorY,
            };
            if (d.outside && c < a) {
              var k = S - G;
              0 < k &&
                (e || ((g.x = c + k), (g.anchorX = a + k)),
                e && ((g.x = (ba - G) / 2), (g.anchorX = a + k)));
            }
            b.tt.attr(g);
          });
          c = d.container;
          t = d.renderer;
          d.outside &&
            c &&
            t &&
            ((e = U.getBBox()),
            t.setSize(e.width + e.x, e.height + e.y, !1),
            (c.style.left = G + "px"),
            (c.style.top = g + "px"));
        };
        a.prototype.drawTracker = function () {
          if (this.followPointer || !this.options.stickOnContact)
            this.tracker && this.tracker.destroy();
          else {
            var c = this.chart,
              a = this.label,
              b = this.shared ? c.hoverPoints : c.hoverPoint;
            if (a && b) {
              var d = { x: 0, y: 0, width: 0, height: 0 };
              b = this.getAnchor(b);
              var e = a.getBBox();
              b[0] += c.plotLeft - a.translateX;
              b[1] += c.plotTop - a.translateY;
              d.x = Math.min(0, b[0]);
              d.y = Math.min(0, b[1]);
              d.width =
                0 > b[0]
                  ? Math.max(Math.abs(b[0]), e.width - b[0])
                  : Math.max(Math.abs(b[0]), e.width);
              d.height =
                0 > b[1]
                  ? Math.max(Math.abs(b[1]), e.height - Math.abs(b[1]))
                  : Math.max(Math.abs(b[1]), e.height);
              this.tracker
                ? this.tracker.attr(d)
                : ((this.tracker = a.renderer
                    .rect(d)
                    .addClass("highcharts-tracker")
                    .add(a)),
                  c.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
            }
          }
        };
        a.prototype.styledModeFormat = function (c) {
          return c
            .replace('style="font-size: 10px"', 'class="highcharts-header"')
            .replace(
              /style="color:{(point|series)\.color}"/g,
              'class="highcharts-color-{$1.colorIndex}"'
            );
        };
        a.prototype.tooltipFooterHeaderFormatter = function (c, a) {
          var b = c.series,
            d = b.tooltipOptions,
            g = b.xAxis,
            e = g && g.dateTime;
          g = { isFooter: a, labelConfig: c };
          var k = d.xDateFormat,
            f = d[a ? "footerFormat" : "headerFormat"];
          h(this, "headerFormatter", g, function (a) {
            e &&
              !k &&
              n(c.key) &&
              (k = e.getXDateFormat(c.key, d.dateTimeLabelFormats));
            e &&
              k &&
              ((c.point && c.point.tooltipDateKeys) || ["key"]).forEach(
                function (b) {
                  f = f.replace(
                    "{point." + b + "}",
                    "{point." + b + ":" + k + "}"
                  );
                }
              );
            b.chart.styledMode && (f = this.styledModeFormat(f));
            a.text = F(f, { point: c, series: b }, this.chart);
          });
          return g.text;
        };
        a.prototype.update = function (c) {
          this.destroy();
          w(!0, this.chart.options.tooltip.userOptions, c);
          this.init(this.chart, w(!0, this.options, c));
        };
        a.prototype.updatePosition = function (c) {
          var a = this.chart,
            b = this.options,
            d = a.pointer,
            e = this.getLabel();
          d = d.getChartPosition();
          var k = (b.positioner || this.getPosition).call(
              this,
              e.width,
              e.height,
              c
            ),
            f = c.plotX + a.plotLeft;
          c = c.plotY + a.plotTop;
          if (this.outside) {
            b = b.borderWidth + 2 * this.distance;
            this.renderer.setSize(e.width + b, e.height + b, !1);
            if (1 !== d.scaleX || 1 !== d.scaleY)
              m(this.container, {
                transform: "scale(" + d.scaleX + ", " + d.scaleY + ")",
              }),
                (f *= d.scaleX),
                (c *= d.scaleY);
            f += d.left - k.x;
            c += d.top - k.y;
          }
          this.move(Math.round(k.x), Math.round(k.y || 0), f, c);
        };
        return a;
      })();
      ("");
      return a;
    }
  );
  M(
    f,
    "Core/Series/Point.js",
    [
      f["Core/Renderer/HTML/AST.js"],
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/DefaultOptions.js"],
      f["Core/FormatUtilities.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G, u) {
      var F = f.animObject,
        I = C.defaultOptions,
        B = G.format,
        z = u.addEvent,
        p = u.defined,
        m = u.erase,
        e = u.extend,
        d = u.fireEvent,
        l = u.getNestedProperty,
        h = u.isArray,
        t = u.isFunction,
        n = u.isNumber,
        v = u.isObject,
        w = u.merge,
        y = u.objectEach,
        A = u.pick,
        q = u.syncTimeout,
        k = u.removeEvent,
        c = u.uniqueKey;
      f = (function () {
        function g() {
          this.colorIndex = this.category = void 0;
          this.formatPrefix = "point";
          this.id = void 0;
          this.isNull = !1;
          this.percentage = this.options = this.name = void 0;
          this.selected = !1;
          this.total = this.series = void 0;
          this.visible = !0;
          this.x = void 0;
        }
        g.prototype.animateBeforeDestroy = function () {
          var b = this,
            c = { x: b.startXPos, opacity: 0 },
            a = b.getGraphicalProps();
          a.singular.forEach(function (a) {
            b[a] = b[a].animate(
              "dataLabel" === a
                ? { x: b[a].startXPos, y: b[a].startYPos, opacity: 0 }
                : c
            );
          });
          a.plural.forEach(function (c) {
            b[c].forEach(function (c) {
              c.element &&
                c.animate(
                  e(
                    { x: b.startXPos },
                    c.startYPos ? { x: c.startXPos, y: c.startYPos } : {}
                  )
                );
            });
          });
        };
        g.prototype.applyOptions = function (b, c) {
          var a = this.series,
            d = a.options.pointValKey || a.pointValKey;
          b = g.prototype.optionsToObject.call(this, b);
          e(this, b);
          this.options = this.options ? e(this.options, b) : b;
          b.group && delete this.group;
          b.dataLabels && delete this.dataLabels;
          d && (this.y = g.prototype.getNestedProperty.call(this, d));
          this.formatPrefix = (this.isNull = A(
            this.isValid && !this.isValid(),
            null === this.x || !n(this.y)
          ))
            ? "null"
            : "point";
          this.selected && (this.state = "select");
          "name" in this &&
            "undefined" === typeof c &&
            a.xAxis &&
            a.xAxis.hasNames &&
            (this.x = a.xAxis.nameToX(this));
          "undefined" === typeof this.x && a
            ? (this.x = "undefined" === typeof c ? a.autoIncrement() : c)
            : n(b.x) &&
              a.options.relativeXValue &&
              (this.x = a.autoIncrement(b.x));
          return this;
        };
        g.prototype.destroy = function () {
          function b() {
            if (c.graphic || c.dataLabel || c.dataLabels)
              k(c), c.destroyElements();
            for (f in c) c[f] = null;
          }
          var c = this,
            a = c.series,
            d = a.chart;
          a = a.options.dataSorting;
          var g = d.hoverPoints,
            e = F(c.series.chart.renderer.globalAnimation),
            f;
          c.legendItem && d.legend.destroyItem(c);
          g && (c.setState(), m(g, c), g.length || (d.hoverPoints = null));
          if (c === d.hoverPoint) c.onMouseOut();
          a && a.enabled
            ? (this.animateBeforeDestroy(), q(b, e.duration))
            : b();
          d.pointCount--;
        };
        g.prototype.destroyElements = function (b) {
          var c = this;
          b = c.getGraphicalProps(b);
          b.singular.forEach(function (b) {
            c[b] = c[b].destroy();
          });
          b.plural.forEach(function (b) {
            c[b].forEach(function (b) {
              b.element && b.destroy();
            });
            delete c[b];
          });
        };
        g.prototype.firePointEvent = function (b, c, a) {
          var g = this,
            e = this.series.options;
          (e.point.events[b] ||
            (g.options && g.options.events && g.options.events[b])) &&
            g.importEvents();
          "click" === b &&
            e.allowPointSelect &&
            (a = function (b) {
              g.select && g.select(null, b.ctrlKey || b.metaKey || b.shiftKey);
            });
          d(g, b, c, a);
        };
        g.prototype.getClassName = function () {
          return (
            "highcharts-point" +
            (this.selected ? " highcharts-point-select" : "") +
            (this.negative ? " highcharts-negative" : "") +
            (this.isNull ? " highcharts-null-point" : "") +
            ("undefined" !== typeof this.colorIndex
              ? " highcharts-color-" + this.colorIndex
              : "") +
            (this.options.className ? " " + this.options.className : "") +
            (this.zone && this.zone.className
              ? " " + this.zone.className.replace("highcharts-negative", "")
              : "")
          );
        };
        g.prototype.getGraphicalProps = function (b) {
          var c = this,
            a = [],
            d = { singular: [], plural: [] },
            g;
          b = b || { graphic: 1, dataLabel: 1 };
          b.graphic && a.push("graphic", "upperGraphic", "shadowGroup");
          b.dataLabel && a.push("dataLabel", "dataLabelUpper", "connector");
          for (g = a.length; g--; ) {
            var e = a[g];
            c[e] && d.singular.push(e);
          }
          ["dataLabel", "connector"].forEach(function (a) {
            var g = a + "s";
            b[a] && c[g] && d.plural.push(g);
          });
          return d;
        };
        g.prototype.getLabelConfig = function () {
          return {
            x: this.category,
            y: this.y,
            color: this.color,
            colorIndex: this.colorIndex,
            key: this.name || this.category,
            series: this.series,
            point: this,
            percentage: this.percentage,
            total: this.total || this.stackTotal,
          };
        };
        g.prototype.getNestedProperty = function (b) {
          if (b)
            return 0 === b.indexOf("custom.") ? l(b, this.options) : this[b];
        };
        g.prototype.getZone = function () {
          var b = this.series,
            c = b.zones;
          b = b.zoneAxis || "y";
          var a,
            d = 0;
          for (a = c[d]; this[b] >= a.value; ) a = c[++d];
          this.nonZonedColor || (this.nonZonedColor = this.color);
          this.color =
            a && a.color && !this.options.color ? a.color : this.nonZonedColor;
          return a;
        };
        g.prototype.hasNewShapeType = function () {
          return (
            (this.graphic &&
              (this.graphic.symbolName || this.graphic.element.nodeName)) !==
            this.shapeType
          );
        };
        g.prototype.init = function (b, a, g) {
          this.series = b;
          this.applyOptions(a, g);
          this.id = p(this.id) ? this.id : c();
          this.resolveColor();
          b.chart.pointCount++;
          d(this, "afterInit");
          return this;
        };
        g.prototype.optionsToObject = function (b) {
          var c = this.series,
            a = c.options.keys,
            d = a || c.pointArrayMap || ["y"],
            e = d.length,
            k = {},
            f = 0,
            q = 0;
          if (n(b) || null === b) k[d[0]] = b;
          else if (h(b))
            for (
              !a &&
              b.length > e &&
              ((c = typeof b[0]),
              "string" === c ? (k.name = b[0]) : "number" === c && (k.x = b[0]),
              f++);
              q < e;

            )
              (a && "undefined" === typeof b[f]) ||
                (0 < d[q].indexOf(".")
                  ? g.prototype.setNestedProperty(k, b[f], d[q])
                  : (k[d[q]] = b[f])),
                f++,
                q++;
          else
            "object" === typeof b &&
              ((k = b),
              b.dataLabels && (c._hasPointLabels = !0),
              b.marker && (c._hasPointMarkers = !0));
          return k;
        };
        g.prototype.resolveColor = function () {
          var b = this.series,
            c = b.chart.styledMode;
          var a = b.chart.options.chart.colorCount;
          delete this.nonZonedColor;
          if (b.options.colorByPoint) {
            if (!c) {
              a = b.options.colors || b.chart.options.colors;
              var d = a[b.colorCounter];
              a = a.length;
            }
            c = b.colorCounter;
            b.colorCounter++;
            b.colorCounter === a && (b.colorCounter = 0);
          } else c || (d = b.color), (c = b.colorIndex);
          this.colorIndex = A(this.options.colorIndex, c);
          this.color = A(this.options.color, d);
        };
        g.prototype.setNestedProperty = function (b, c, a) {
          a.split(".").reduce(function (b, a, d, g) {
            b[a] = g.length - 1 === d ? c : v(b[a], !0) ? b[a] : {};
            return b[a];
          }, b);
          return b;
        };
        g.prototype.tooltipFormatter = function (b) {
          var c = this.series,
            a = c.tooltipOptions,
            d = A(a.valueDecimals, ""),
            g = a.valuePrefix || "",
            e = a.valueSuffix || "";
          c.chart.styledMode && (b = c.chart.tooltip.styledModeFormat(b));
          (c.pointArrayMap || ["y"]).forEach(function (c) {
            c = "{point." + c;
            if (g || e) b = b.replace(RegExp(c + "}", "g"), g + c + "}" + e);
            b = b.replace(RegExp(c + "}", "g"), c + ":,." + d + "f}");
          });
          return B(b, { point: this, series: this.series }, c.chart);
        };
        g.prototype.update = function (b, c, a, d) {
          function g() {
            e.applyOptions(b);
            var d = f && e.hasDummyGraphic;
            d = null === e.y ? !d : d;
            f && d && ((e.graphic = f.destroy()), delete e.hasDummyGraphic);
            v(b, !0) &&
              (f &&
                f.element &&
                b &&
                b.marker &&
                "undefined" !== typeof b.marker.symbol &&
                (e.graphic = f.destroy()),
              b &&
                b.dataLabels &&
                e.dataLabel &&
                (e.dataLabel = e.dataLabel.destroy()),
              e.connector && (e.connector = e.connector.destroy()));
            r = e.index;
            k.updateParallelArrays(e, r);
            q.data[r] =
              v(q.data[r], !0) || v(b, !0) ? e.options : A(b, q.data[r]);
            k.isDirty = k.isDirtyData = !0;
            !k.fixedBox && k.hasCartesianSeries && (h.isDirtyBox = !0);
            "point" === q.legendType && (h.isDirtyLegend = !0);
            c && h.redraw(a);
          }
          var e = this,
            k = e.series,
            f = e.graphic,
            h = k.chart,
            q = k.options,
            r;
          c = A(c, !0);
          !1 === d ? g() : e.firePointEvent("update", { options: b }, g);
        };
        g.prototype.remove = function (b, c) {
          this.series.removePoint(this.series.data.indexOf(this), b, c);
        };
        g.prototype.select = function (b, c) {
          var a = this,
            d = a.series,
            g = d.chart;
          this.selectedStaging = b = A(b, !a.selected);
          a.firePointEvent(
            b ? "select" : "unselect",
            { accumulate: c },
            function () {
              a.selected = a.options.selected = b;
              d.options.data[d.data.indexOf(a)] = a.options;
              a.setState(b && "select");
              c ||
                g.getSelectedPoints().forEach(function (b) {
                  var c = b.series;
                  b.selected &&
                    b !== a &&
                    ((b.selected = b.options.selected = !1),
                    (c.options.data[c.data.indexOf(b)] = b.options),
                    b.setState(
                      g.hoverPoints && c.options.inactiveOtherPoints
                        ? "inactive"
                        : ""
                    ),
                    b.firePointEvent("unselect"));
                });
            }
          );
          delete this.selectedStaging;
        };
        g.prototype.onMouseOver = function (b) {
          var c = this.series.chart,
            a = c.pointer;
          b = b
            ? a.normalize(b)
            : a.getChartCoordinatesFromPoint(this, c.inverted);
          a.runPointActions(b, this);
        };
        g.prototype.onMouseOut = function () {
          var b = this.series.chart;
          this.firePointEvent("mouseOut");
          this.series.options.inactiveOtherPoints ||
            (b.hoverPoints || []).forEach(function (b) {
              b.setState();
            });
          b.hoverPoints = b.hoverPoint = null;
        };
        g.prototype.importEvents = function () {
          if (!this.hasImportedEvents) {
            var b = this,
              c = w(b.series.options.point, b.options).events;
            b.events = c;
            y(c, function (c, a) {
              t(c) && z(b, a, c);
            });
            this.hasImportedEvents = !0;
          }
        };
        g.prototype.setState = function (b, c) {
          var g = this.series,
            k = this.state,
            f = g.options.states[b || "normal"] || {},
            h = I.plotOptions[g.type].marker && g.options.marker,
            q = h && !1 === h.enabled,
            r = (h && h.states && h.states[b || "normal"]) || {},
            l = !1 === r.enabled,
            m = this.marker || {},
            p = g.chart,
            t = h && g.markerAttribs,
            w = g.halo,
            y,
            v = g.stateMarkerGraphic;
          b = b || "";
          if (
            !(
              (b === this.state && !c) ||
              (this.selected && "select" !== b) ||
              !1 === f.enabled ||
              (b && (l || (q && !1 === r.enabled))) ||
              (b && m.states && m.states[b] && !1 === m.states[b].enabled)
            )
          ) {
            this.state = b;
            t && (y = g.markerAttribs(this, b));
            if (this.graphic && !this.hasDummyGraphic) {
              k && this.graphic.removeClass("highcharts-point-" + k);
              b && this.graphic.addClass("highcharts-point-" + b);
              if (!p.styledMode) {
                var z = g.pointAttribs(this, b);
                var E = A(p.options.chart.animation, f.animation);
                g.options.inactiveOtherPoints &&
                  n(z.opacity) &&
                  ((this.dataLabels || []).forEach(function (b) {
                    b && b.animate({ opacity: z.opacity }, E);
                  }),
                  this.connector &&
                    this.connector.animate({ opacity: z.opacity }, E));
                this.graphic.animate(z, E);
              }
              y &&
                this.graphic.animate(
                  y,
                  A(p.options.chart.animation, r.animation, h.animation)
                );
              v && v.hide();
            } else {
              if (b && r) {
                k = m.symbol || g.symbol;
                v && v.currentSymbol !== k && (v = v.destroy());
                if (y)
                  if (v) v[c ? "animate" : "attr"]({ x: y.x, y: y.y });
                  else
                    k &&
                      ((g.stateMarkerGraphic = v =
                        p.renderer
                          .symbol(k, y.x, y.y, y.width, y.height)
                          .add(g.markerGroup)),
                      (v.currentSymbol = k));
                !p.styledMode &&
                  v &&
                  "inactive" !== this.state &&
                  v.attr(g.pointAttribs(this, b));
              }
              v &&
                (v[b && this.isInside ? "show" : "hide"](),
                (v.element.point = this),
                v.addClass(this.getClassName(), !0));
            }
            f = f.halo;
            y = ((v = this.graphic || v) && v.visibility) || "inherit";
            f && f.size && v && "hidden" !== y && !this.isCluster
              ? (w || (g.halo = w = p.renderer.path().add(v.parentGroup)),
                w.show()[c ? "animate" : "attr"]({ d: this.haloPath(f.size) }),
                w.attr({
                  class:
                    "highcharts-halo highcharts-color-" +
                    A(this.colorIndex, g.colorIndex) +
                    (this.className ? " " + this.className : ""),
                  visibility: y,
                  zIndex: -1,
                }),
                (w.point = this),
                p.styledMode ||
                  w.attr(
                    e(
                      {
                        fill: this.color || g.color,
                        "fill-opacity": f.opacity,
                      },
                      a.filterUserAttributes(f.attributes || {})
                    )
                  ))
              : w &&
                w.point &&
                w.point.haloPath &&
                w.animate({ d: w.point.haloPath(0) }, null, w.hide);
            d(this, "afterSetState", { state: b });
          }
        };
        g.prototype.haloPath = function (b) {
          return this.series.chart.renderer.symbols.circle(
            Math.floor(this.plotX) - b,
            this.plotY - b,
            2 * b,
            2 * b
          );
        };
        return g;
      })();
      ("");
      return f;
    }
  );
  M(
    f,
    "Core/Pointer.js",
    [
      f["Core/Color/Color.js"],
      f["Core/Globals.js"],
      f["Core/Tooltip.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G) {
      var u = a.parse,
        F = f.charts,
        I = f.noop,
        B = G.addEvent,
        z = G.attr,
        p = G.css,
        m = G.defined,
        e = G.extend,
        d = G.find,
        l = G.fireEvent,
        h = G.isNumber,
        t = G.isObject,
        n = G.objectEach,
        v = G.offset,
        w = G.pick,
        y = G.splat;
      a = (function () {
        function a(a, d) {
          this.lastValidTouch = {};
          this.pinchDown = [];
          this.runChartClick = !1;
          this.eventsToUnbind = [];
          this.chart = a;
          this.hasDragged = !1;
          this.options = d;
          this.init(a, d);
        }
        a.prototype.applyInactiveState = function (a) {
          var d = [],
            c;
          (a || []).forEach(function (a) {
            c = a.series;
            d.push(c);
            c.linkedParent && d.push(c.linkedParent);
            c.linkedSeries && (d = d.concat(c.linkedSeries));
            c.navigatorSeries && d.push(c.navigatorSeries);
          });
          this.chart.series.forEach(function (c) {
            -1 === d.indexOf(c)
              ? c.setState("inactive", !0)
              : c.options.inactiveOtherPoints &&
                c.setAllPointsToState("inactive");
          });
        };
        a.prototype.destroy = function () {
          var d = this;
          this.eventsToUnbind.forEach(function (a) {
            return a();
          });
          this.eventsToUnbind = [];
          f.chartCount ||
            (a.unbindDocumentMouseUp &&
              (a.unbindDocumentMouseUp = a.unbindDocumentMouseUp()),
            a.unbindDocumentTouchEnd &&
              (a.unbindDocumentTouchEnd = a.unbindDocumentTouchEnd()));
          clearInterval(d.tooltipTimeout);
          n(d, function (a, c) {
            d[c] = void 0;
          });
        };
        a.prototype.drag = function (a) {
          var d = this.chart,
            c = d.options.chart,
            g = this.zoomHor,
            b = this.zoomVert,
            e = d.plotLeft,
            f = d.plotTop,
            h = d.plotWidth,
            q = d.plotHeight,
            l = this.mouseDownX || 0,
            m = this.mouseDownY || 0,
            n = t(c.panning) ? c.panning && c.panning.enabled : c.panning,
            p = c.panKey && a[c.panKey + "Key"],
            w = a.chartX,
            y = a.chartY,
            v = this.selectionMarker;
          if (!v || !v.touch)
            if (
              (w < e ? (w = e) : w > e + h && (w = e + h),
              y < f ? (y = f) : y > f + q && (y = f + q),
              (this.hasDragged = Math.sqrt(
                Math.pow(l - w, 2) + Math.pow(m - y, 2)
              )),
              10 < this.hasDragged)
            ) {
              var A = d.isInsidePlot(l - e, m - f, { visiblePlotOnly: !0 });
              (!d.hasCartesianSeries && !d.mapView) ||
                (!this.zoomX && !this.zoomY) ||
                !A ||
                p ||
                v ||
                ((this.selectionMarker = v =
                  d.renderer
                    .rect(e, f, g ? 1 : h, b ? 1 : q, 0)
                    .attr({ class: "highcharts-selection-marker", zIndex: 7 })
                    .add()),
                d.styledMode ||
                  v.attr({
                    fill:
                      c.selectionMarkerFill ||
                      u("#335cad").setOpacity(0.25).get(),
                  }));
              v &&
                g &&
                ((g = w - l),
                v.attr({ width: Math.abs(g), x: (0 < g ? 0 : g) + l }));
              v &&
                b &&
                ((g = y - m),
                v.attr({ height: Math.abs(g), y: (0 < g ? 0 : g) + m }));
              A && !v && n && d.pan(a, c.panning);
            }
        };
        a.prototype.dragStart = function (a) {
          var d = this.chart;
          d.mouseIsDown = a.type;
          d.cancelClick = !1;
          d.mouseDownX = this.mouseDownX = a.chartX;
          d.mouseDownY = this.mouseDownY = a.chartY;
        };
        a.prototype.drop = function (a) {
          var d = this,
            c = this.chart,
            g = this.hasPinched;
          if (this.selectionMarker) {
            var b = this.selectionMarker,
              f = b.attr ? b.attr("x") : b.x,
              q = b.attr ? b.attr("y") : b.y,
              n = b.attr ? b.attr("width") : b.width,
              t = b.attr ? b.attr("height") : b.height,
              w = {
                originalEvent: a,
                xAxis: [],
                yAxis: [],
                x: f,
                y: q,
                width: n,
                height: t,
              },
              y = !!c.mapView;
            if (this.hasDragged || g)
              c.axes.forEach(function (b) {
                if (
                  b.zoomEnabled &&
                  m(b.min) &&
                  (g || d[{ xAxis: "zoomX", yAxis: "zoomY" }[b.coll]]) &&
                  h(f) &&
                  h(q)
                ) {
                  var c = b.horiz,
                    e = "touchend" === a.type ? b.minPixelPadding : 0,
                    k = b.toValue((c ? f : q) + e);
                  c = b.toValue((c ? f + n : q + t) - e);
                  w[b.coll].push({
                    axis: b,
                    min: Math.min(k, c),
                    max: Math.max(k, c),
                  });
                  y = !0;
                }
              }),
                y &&
                  l(c, "selection", w, function (b) {
                    c.zoom(e(b, g ? { animation: !1 } : null));
                  });
            h(c.index) &&
              (this.selectionMarker = this.selectionMarker.destroy());
            g && this.scaleGroups();
          }
          c &&
            h(c.index) &&
            (p(c.container, { cursor: c._cursor }),
            (c.cancelClick = 10 < this.hasDragged),
            (c.mouseIsDown = this.hasDragged = this.hasPinched = !1),
            (this.pinchDown = []));
        };
        a.prototype.findNearestKDPoint = function (a, d, c) {
          var g = this.chart,
            b = g.hoverPoint;
          g = g.tooltip;
          if (b && g && g.isStickyOnContact()) return b;
          var e;
          a.forEach(function (b) {
            var a =
              !(b.noSharedTooltip && d) &&
              0 > b.options.findNearestPointBy.indexOf("y");
            b = b.searchPoint(c, a);
            if ((a = t(b, !0) && b.series) && !(a = !t(e, !0))) {
              a = e.distX - b.distX;
              var g = e.dist - b.dist,
                k =
                  (b.series.group && b.series.group.zIndex) -
                  (e.series.group && e.series.group.zIndex);
              a =
                0 <
                (0 !== a && d
                  ? a
                  : 0 !== g
                  ? g
                  : 0 !== k
                  ? k
                  : e.series.index > b.series.index
                  ? -1
                  : 1);
            }
            a && (e = b);
          });
          return e;
        };
        a.prototype.getChartCoordinatesFromPoint = function (a, d) {
          var c = a.series,
            g = c.xAxis;
          c = c.yAxis;
          var b = a.shapeArgs;
          if (g && c) {
            var e = w(a.clientX, a.plotX),
              k = a.plotY || 0;
            a.isNode && b && h(b.x) && h(b.y) && ((e = b.x), (k = b.y));
            return d
              ? { chartX: c.len + c.pos - k, chartY: g.len + g.pos - e }
              : { chartX: e + g.pos, chartY: k + c.pos };
          }
          if (b && b.x && b.y) return { chartX: b.x, chartY: b.y };
        };
        a.prototype.getChartPosition = function () {
          if (this.chartPosition) return this.chartPosition;
          var a = this.chart.container,
            d = v(a);
          this.chartPosition = {
            left: d.left,
            top: d.top,
            scaleX: 1,
            scaleY: 1,
          };
          var c = a.offsetWidth;
          a = a.offsetHeight;
          2 < c &&
            2 < a &&
            ((this.chartPosition.scaleX = d.width / c),
            (this.chartPosition.scaleY = d.height / a));
          return this.chartPosition;
        };
        a.prototype.getCoordinates = function (a) {
          var d = { xAxis: [], yAxis: [] };
          this.chart.axes.forEach(function (c) {
            d[c.isXAxis ? "xAxis" : "yAxis"].push({
              axis: c,
              value: c.toValue(a[c.horiz ? "chartX" : "chartY"]),
            });
          });
          return d;
        };
        a.prototype.getHoverData = function (a, e, c, g, b, f) {
          var k = [];
          g = !(!g || !a);
          var h = {
            chartX: f ? f.chartX : void 0,
            chartY: f ? f.chartY : void 0,
            shared: b,
          };
          l(this, "beforeGetHoverData", h);
          var q =
            e && !e.stickyTracking
              ? [e]
              : c.filter(function (a) {
                  return h.filter
                    ? h.filter(a)
                    : a.visible &&
                        !(!b && a.directTouch) &&
                        w(a.options.enableMouseTracking, !0) &&
                        a.stickyTracking;
                });
          var r = g || !f ? a : this.findNearestKDPoint(q, b, f);
          e = r && r.series;
          r &&
            (b && !e.noSharedTooltip
              ? ((q = c.filter(function (a) {
                  return h.filter
                    ? h.filter(a)
                    : a.visible &&
                        !(!b && a.directTouch) &&
                        w(a.options.enableMouseTracking, !0) &&
                        !a.noSharedTooltip;
                })),
                q.forEach(function (b) {
                  var a = d(b.points, function (b) {
                    return b.x === r.x && !b.isNull;
                  });
                  t(a) &&
                    (b.chart.isBoosting && (a = b.getPoint(a)), k.push(a));
                }))
              : k.push(r));
          h = { hoverPoint: r };
          l(this, "afterGetHoverData", h);
          return { hoverPoint: h.hoverPoint, hoverSeries: e, hoverPoints: k };
        };
        a.prototype.getPointFromEvent = function (a) {
          a = a.target;
          for (var d; a && !d; ) (d = a.point), (a = a.parentNode);
          return d;
        };
        a.prototype.onTrackerMouseOut = function (a) {
          a = a.relatedTarget || a.toElement;
          var d = this.chart.hoverSeries;
          this.isDirectTouch = !1;
          if (
            !(
              !d ||
              !a ||
              d.stickyTracking ||
              this.inClass(a, "highcharts-tooltip") ||
              (this.inClass(a, "highcharts-series-" + d.index) &&
                this.inClass(a, "highcharts-tracker"))
            )
          )
            d.onMouseOut();
        };
        a.prototype.inClass = function (a, d) {
          for (var c; a; ) {
            if ((c = z(a, "class"))) {
              if (-1 !== c.indexOf(d)) return !0;
              if (-1 !== c.indexOf("highcharts-container")) return !1;
            }
            a = a.parentElement;
          }
        };
        a.prototype.init = function (a, d) {
          this.options = d;
          this.chart = a;
          this.runChartClick = !(!d.chart.events || !d.chart.events.click);
          this.pinchDown = [];
          this.lastValidTouch = {};
          C &&
            ((a.tooltip = new C(a, d.tooltip)),
            (this.followTouchMove = w(d.tooltip.followTouchMove, !0)));
          this.setDOMEvents();
        };
        a.prototype.normalize = function (a, d) {
          var c = a.touches,
            g = c
              ? c.length
                ? c.item(0)
                : w(c.changedTouches, a.changedTouches)[0]
              : a;
          d || (d = this.getChartPosition());
          c = g.pageX - d.left;
          g = g.pageY - d.top;
          c /= d.scaleX;
          g /= d.scaleY;
          return e(a, { chartX: Math.round(c), chartY: Math.round(g) });
        };
        a.prototype.onContainerClick = function (a) {
          var d = this.chart,
            c = d.hoverPoint;
          a = this.normalize(a);
          var g = d.plotLeft,
            b = d.plotTop;
          d.cancelClick ||
            (c && this.inClass(a.target, "highcharts-tracker")
              ? (l(c.series, "click", e(a, { point: c })),
                d.hoverPoint && c.firePointEvent("click", a))
              : (e(a, this.getCoordinates(a)),
                d.isInsidePlot(a.chartX - g, a.chartY - b, {
                  visiblePlotOnly: !0,
                }) && l(d, "click", a)));
        };
        a.prototype.onContainerMouseDown = function (a) {
          var d = 1 === ((a.buttons || a.button) & 1);
          a = this.normalize(a);
          if (f.isFirefox && 0 !== a.button) this.onContainerMouseMove(a);
          if ("undefined" === typeof a.button || d)
            this.zoomOption(a),
              d && a.preventDefault && a.preventDefault(),
              this.dragStart(a);
        };
        a.prototype.onContainerMouseLeave = function (d) {
          var e = F[w(a.hoverChartIndex, -1)],
            c = this.chart.tooltip;
          (c &&
            c.shouldStickOnContact() &&
            this.inClass(d.relatedTarget, "highcharts-tooltip-container")) ||
            ((d = this.normalize(d)),
            e &&
              (d.relatedTarget || d.toElement) &&
              (e.pointer.reset(), (e.pointer.chartPosition = void 0)),
            c && !c.isHidden && this.reset());
        };
        a.prototype.onContainerMouseEnter = function (a) {
          delete this.chartPosition;
        };
        a.prototype.onContainerMouseMove = function (a) {
          var d = this.chart;
          a = this.normalize(a);
          this.setHoverChartIndex();
          a.preventDefault || (a.returnValue = !1);
          ("mousedown" === d.mouseIsDown || this.touchSelect(a)) &&
            this.drag(a);
          d.openMenu ||
            (!this.inClass(a.target, "highcharts-tracker") &&
              !d.isInsidePlot(a.chartX - d.plotLeft, a.chartY - d.plotTop, {
                visiblePlotOnly: !0,
              })) ||
            (this.inClass(a.target, "highcharts-no-tooltip")
              ? this.reset(!1, 0)
              : this.runPointActions(a));
        };
        a.prototype.onDocumentTouchEnd = function (d) {
          var e = F[w(a.hoverChartIndex, -1)];
          e && e.pointer.drop(d);
        };
        a.prototype.onContainerTouchMove = function (a) {
          if (this.touchSelect(a)) this.onContainerMouseMove(a);
          else this.touch(a);
        };
        a.prototype.onContainerTouchStart = function (a) {
          if (this.touchSelect(a)) this.onContainerMouseDown(a);
          else this.zoomOption(a), this.touch(a, !0);
        };
        a.prototype.onDocumentMouseMove = function (a) {
          var d = this.chart,
            c = this.chartPosition;
          a = this.normalize(a, c);
          var g = d.tooltip;
          !c ||
            (g && g.isStickyOnContact()) ||
            d.isInsidePlot(a.chartX - d.plotLeft, a.chartY - d.plotTop, {
              visiblePlotOnly: !0,
            }) ||
            this.inClass(a.target, "highcharts-tracker") ||
            this.reset();
        };
        a.prototype.onDocumentMouseUp = function (d) {
          var e = F[w(a.hoverChartIndex, -1)];
          e && e.pointer.drop(d);
        };
        a.prototype.pinch = function (a) {
          var d = this,
            c = d.chart,
            g = d.pinchDown,
            b = a.touches || [],
            f = b.length,
            h = d.lastValidTouch,
            q = d.hasZoom,
            m = {},
            n =
              1 === f &&
              ((d.inClass(a.target, "highcharts-tracker") &&
                c.runTrackerClick) ||
                d.runChartClick),
            p = {},
            t = d.selectionMarker;
          1 < f
            ? (d.initiated = !0)
            : 1 === f && this.followTouchMove && (d.initiated = !1);
          q && d.initiated && !n && !1 !== a.cancelable && a.preventDefault();
          [].map.call(b, function (b) {
            return d.normalize(b);
          });
          "touchstart" === a.type
            ? ([].forEach.call(b, function (b, a) {
                g[a] = { chartX: b.chartX, chartY: b.chartY };
              }),
              (h.x = [g[0].chartX, g[1] && g[1].chartX]),
              (h.y = [g[0].chartY, g[1] && g[1].chartY]),
              c.axes.forEach(function (b) {
                if (b.zoomEnabled) {
                  var a = c.bounds[b.horiz ? "h" : "v"],
                    d = b.minPixelPadding,
                    g = b.toPixels(
                      Math.min(w(b.options.min, b.dataMin), b.dataMin)
                    ),
                    e = b.toPixels(
                      Math.max(w(b.options.max, b.dataMax), b.dataMax)
                    ),
                    f = Math.max(g, e);
                  a.min = Math.min(b.pos, Math.min(g, e) - d);
                  a.max = Math.max(b.pos + b.len, f + d);
                }
              }),
              (d.res = !0))
            : d.followTouchMove && 1 === f
            ? this.runPointActions(d.normalize(a))
            : g.length &&
              (l(c, "touchpan", { originalEvent: a }, function () {
                t ||
                  (d.selectionMarker = t =
                    e({ destroy: I, touch: !0 }, c.plotBox));
                d.pinchTranslate(g, b, m, t, p, h);
                d.hasPinched = q;
                d.scaleGroups(m, p);
              }),
              d.res && ((d.res = !1), this.reset(!1, 0)));
        };
        a.prototype.pinchTranslate = function (a, d, c, g, b, e) {
          this.zoomHor && this.pinchTranslateDirection(!0, a, d, c, g, b, e);
          this.zoomVert && this.pinchTranslateDirection(!1, a, d, c, g, b, e);
        };
        a.prototype.pinchTranslateDirection = function (
          a,
          d,
          c,
          g,
          b,
          e,
          f,
          h
        ) {
          var k = this.chart,
            r = a ? "x" : "y",
            l = a ? "X" : "Y",
            m = "chart" + l,
            q = a ? "width" : "height",
            n = k["plot" + (a ? "Left" : "Top")],
            p = k.inverted,
            x = k.bounds[a ? "h" : "v"],
            t = 1 === d.length,
            D = d[0][m],
            w = !t && d[1][m];
          d = function () {
            "number" === typeof A &&
              20 < Math.abs(D - w) &&
              (v = h || Math.abs(N - A) / Math.abs(D - w));
            E = (n - N) / v + D;
            y = k["plot" + (a ? "Width" : "Height")] / v;
          };
          var y,
            E,
            v = h || 1,
            N = c[0][m],
            A = !t && c[1][m];
          d();
          c = E;
          if (c < x.min) {
            c = x.min;
            var z = !0;
          } else c + y > x.max && ((c = x.max - y), (z = !0));
          z
            ? ((N -= 0.8 * (N - f[r][0])),
              "number" === typeof A && (A -= 0.8 * (A - f[r][1])),
              d())
            : (f[r] = [N, A]);
          p || ((e[r] = E - n), (e[q] = y));
          e = p ? 1 / v : v;
          b[q] = y;
          b[r] = c;
          g[p ? (a ? "scaleY" : "scaleX") : "scale" + l] = v;
          g["translate" + l] = e * n + (N - e * D);
        };
        a.prototype.reset = function (a, d) {
          var c = this.chart,
            g = c.hoverSeries,
            b = c.hoverPoint,
            e = c.hoverPoints,
            f = c.tooltip,
            k = f && f.shared ? e : b;
          a &&
            k &&
            y(k).forEach(function (b) {
              b.series.isCartesian &&
                "undefined" === typeof b.plotX &&
                (a = !1);
            });
          if (a)
            f &&
              k &&
              y(k).length &&
              (f.refresh(k),
              f.shared && e
                ? e.forEach(function (b) {
                    b.setState(b.state, !0);
                    b.series.isCartesian &&
                      (b.series.xAxis.crosshair &&
                        b.series.xAxis.drawCrosshair(null, b),
                      b.series.yAxis.crosshair &&
                        b.series.yAxis.drawCrosshair(null, b));
                  })
                : b &&
                  (b.setState(b.state, !0),
                  c.axes.forEach(function (a) {
                    a.crosshair &&
                      b.series[a.coll] === a &&
                      a.drawCrosshair(null, b);
                  })));
          else {
            if (b) b.onMouseOut();
            e &&
              e.forEach(function (b) {
                b.setState();
              });
            if (g) g.onMouseOut();
            f && f.hide(d);
            this.unDocMouseMove &&
              (this.unDocMouseMove = this.unDocMouseMove());
            c.axes.forEach(function (b) {
              b.hideCrosshair();
            });
            this.hoverX = c.hoverPoints = c.hoverPoint = null;
          }
        };
        a.prototype.runPointActions = function (e, f) {
          var c = this.chart,
            g = c.tooltip && c.tooltip.options.enabled ? c.tooltip : void 0,
            b = g ? g.shared : !1,
            k = f || c.hoverPoint,
            h = (k && k.series) || c.hoverSeries;
          f = this.getHoverData(
            k,
            h,
            c.series,
            (!e || "touchmove" !== e.type) &&
              (!!f || (h && h.directTouch && this.isDirectTouch)),
            b,
            e
          );
          k = f.hoverPoint;
          h = f.hoverSeries;
          var l = f.hoverPoints;
          f = h && h.tooltipOptions.followPointer && !h.tooltipOptions.split;
          var m = b && h && !h.noSharedTooltip;
          if (k && (k !== c.hoverPoint || (g && g.isHidden))) {
            (c.hoverPoints || []).forEach(function (b) {
              -1 === l.indexOf(b) && b.setState();
            });
            if (c.hoverSeries !== h) h.onMouseOver();
            this.applyInactiveState(l);
            (l || []).forEach(function (b) {
              b.setState("hover");
            });
            c.hoverPoint && c.hoverPoint.firePointEvent("mouseOut");
            if (!k.series) return;
            c.hoverPoints = l;
            c.hoverPoint = k;
            k.firePointEvent("mouseOver", void 0, function () {
              g && k && g.refresh(m ? l : k, e);
            });
          } else
            f &&
              g &&
              !g.isHidden &&
              ((b = g.getAnchor([{}], e)),
              c.isInsidePlot(b[0], b[1], { visiblePlotOnly: !0 }) &&
                g.updatePosition({ plotX: b[0], plotY: b[1] }));
          this.unDocMouseMove ||
            ((this.unDocMouseMove = B(
              c.container.ownerDocument,
              "mousemove",
              function (b) {
                var c = F[a.hoverChartIndex];
                if (c) c.pointer.onDocumentMouseMove(b);
              }
            )),
            this.eventsToUnbind.push(this.unDocMouseMove));
          c.axes.forEach(function (b) {
            var a = w((b.crosshair || {}).snap, !0),
              g;
            a &&
              (((g = c.hoverPoint) && g.series[b.coll] === b) ||
                (g = d(l, function (a) {
                  return a.series && a.series[b.coll] === b;
                })));
            g || !a ? b.drawCrosshair(e, g) : b.hideCrosshair();
          });
        };
        a.prototype.scaleGroups = function (a, d) {
          var c = this.chart;
          c.series.forEach(function (g) {
            var b = a || g.getPlotBox();
            g.group &&
              ((g.xAxis && g.xAxis.zoomEnabled) || c.mapView) &&
              (g.group.attr(b),
              g.markerGroup &&
                (g.markerGroup.attr(b),
                g.markerGroup.clip(d ? c.clipRect : null)),
              g.dataLabelsGroup && g.dataLabelsGroup.attr(b));
          });
          c.clipRect.attr(d || c.clipBox);
        };
        a.prototype.setDOMEvents = function () {
          var d = this,
            e = this.chart.container,
            c = e.ownerDocument;
          e.onmousedown = this.onContainerMouseDown.bind(this);
          e.onmousemove = this.onContainerMouseMove.bind(this);
          e.onclick = this.onContainerClick.bind(this);
          this.eventsToUnbind.push(
            B(e, "mouseenter", this.onContainerMouseEnter.bind(this))
          );
          this.eventsToUnbind.push(
            B(e, "mouseleave", this.onContainerMouseLeave.bind(this))
          );
          a.unbindDocumentMouseUp ||
            (a.unbindDocumentMouseUp = B(
              c,
              "mouseup",
              this.onDocumentMouseUp.bind(this)
            ));
          for (
            var g = this.chart.renderTo.parentElement;
            g && "BODY" !== g.tagName;

          )
            this.eventsToUnbind.push(
              B(g, "scroll", function () {
                delete d.chartPosition;
              })
            ),
              (g = g.parentElement);
          f.hasTouch &&
            (this.eventsToUnbind.push(
              B(e, "touchstart", this.onContainerTouchStart.bind(this), {
                passive: !1,
              })
            ),
            this.eventsToUnbind.push(
              B(e, "touchmove", this.onContainerTouchMove.bind(this), {
                passive: !1,
              })
            ),
            a.unbindDocumentTouchEnd ||
              (a.unbindDocumentTouchEnd = B(
                c,
                "touchend",
                this.onDocumentTouchEnd.bind(this),
                { passive: !1 }
              )));
        };
        a.prototype.setHoverChartIndex = function () {
          var d = this.chart,
            e = f.charts[w(a.hoverChartIndex, -1)];
          if (e && e !== d)
            e.pointer.onContainerMouseLeave({ relatedTarget: d.container });
          (e && e.mouseIsDown) || (a.hoverChartIndex = d.index);
        };
        a.prototype.touch = function (a, d) {
          var c = this.chart,
            e;
          this.setHoverChartIndex();
          if (1 === a.touches.length)
            if (
              ((a = this.normalize(a)),
              (e = c.isInsidePlot(a.chartX - c.plotLeft, a.chartY - c.plotTop, {
                visiblePlotOnly: !0,
              })) && !c.openMenu)
            ) {
              d && this.runPointActions(a);
              if ("touchmove" === a.type) {
                d = this.pinchDown;
                var b = d[0]
                  ? 4 <=
                    Math.sqrt(
                      Math.pow(d[0].chartX - a.chartX, 2) +
                        Math.pow(d[0].chartY - a.chartY, 2)
                    )
                  : !1;
              }
              w(b, !0) && this.pinch(a);
            } else d && this.reset();
          else 2 === a.touches.length && this.pinch(a);
        };
        a.prototype.touchSelect = function (a) {
          return !(
            !this.chart.options.chart.zoomBySingleTouch ||
            !a.touches ||
            1 !== a.touches.length
          );
        };
        a.prototype.zoomOption = function (a) {
          var d = this.chart,
            c = d.options.chart;
          d = d.inverted;
          var e = c.zoomType || "";
          /touch/.test(a.type) && (e = w(c.pinchType, e));
          this.zoomX = a = /x/.test(e);
          this.zoomY = c = /y/.test(e);
          this.zoomHor = (a && !d) || (c && d);
          this.zoomVert = (c && !d) || (a && d);
          this.hasZoom = a || c;
        };
        return a;
      })();
      ("");
      return a;
    }
  );
  M(
    f,
    "Core/MSPointer.js",
    [f["Core/Globals.js"], f["Core/Pointer.js"], f["Core/Utilities.js"]],
    function (a, f, C) {
      function F() {
        var a = [];
        a.item = function (a) {
          return this[a];
        };
        d(h, function (d) {
          a.push({ pageX: d.pageX, pageY: d.pageY, target: d.target });
        });
        return a;
      }
      function u(a, d, e, h) {
        var l = I[f.hoverChartIndex || NaN];
        ("touch" !== a.pointerType &&
          a.pointerType !== a.MSPOINTER_TYPE_TOUCH) ||
          !l ||
          ((l = l.pointer),
          h(a),
          l[d]({
            type: e,
            target: a.currentTarget,
            preventDefault: z,
            touches: F(),
          }));
      }
      var H =
          (this && this.__extends) ||
          (function () {
            var a = function (d, e) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, d) {
                    a.__proto__ = d;
                  }) ||
                function (a, d) {
                  for (var e in d) d.hasOwnProperty(e) && (a[e] = d[e]);
                };
              return a(d, e);
            };
            return function (d, e) {
              function f() {
                this.constructor = d;
              }
              a(d, e);
              d.prototype =
                null === e
                  ? Object.create(e)
                  : ((f.prototype = e.prototype), new f());
            };
          })(),
        I = a.charts,
        B = a.doc,
        z = a.noop,
        p = a.win,
        m = C.addEvent,
        e = C.css,
        d = C.objectEach,
        l = C.removeEvent,
        h = {},
        t = !!p.PointerEvent;
      return (function (d) {
        function f() {
          return (null !== d && d.apply(this, arguments)) || this;
        }
        H(f, d);
        f.isRequired = function () {
          return !(a.hasTouch || (!p.PointerEvent && !p.MSPointerEvent));
        };
        f.prototype.batchMSEvents = function (a) {
          a(
            this.chart.container,
            t ? "pointerdown" : "MSPointerDown",
            this.onContainerPointerDown
          );
          a(
            this.chart.container,
            t ? "pointermove" : "MSPointerMove",
            this.onContainerPointerMove
          );
          a(B, t ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
        };
        f.prototype.destroy = function () {
          this.batchMSEvents(l);
          d.prototype.destroy.call(this);
        };
        f.prototype.init = function (a, f) {
          d.prototype.init.call(this, a, f);
          this.hasZoom &&
            e(a.container, {
              "-ms-touch-action": "none",
              "touch-action": "none",
            });
        };
        f.prototype.onContainerPointerDown = function (a) {
          u(a, "onContainerTouchStart", "touchstart", function (a) {
            h[a.pointerId] = {
              pageX: a.pageX,
              pageY: a.pageY,
              target: a.currentTarget,
            };
          });
        };
        f.prototype.onContainerPointerMove = function (a) {
          u(a, "onContainerTouchMove", "touchmove", function (a) {
            h[a.pointerId] = { pageX: a.pageX, pageY: a.pageY };
            h[a.pointerId].target || (h[a.pointerId].target = a.currentTarget);
          });
        };
        f.prototype.onDocumentPointerUp = function (a) {
          u(a, "onDocumentTouchEnd", "touchend", function (a) {
            delete h[a.pointerId];
          });
        };
        f.prototype.setDOMEvents = function () {
          d.prototype.setDOMEvents.call(this);
          (this.hasZoom || this.followTouchMove) && this.batchMSEvents(m);
        };
        return f;
      })(f);
    }
  );
  M(
    f,
    "Core/Legend/Legend.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/FormatUtilities.js"],
      f["Core/Globals.js"],
      f["Core/Series/Point.js"],
      f["Core/Renderer/RendererUtilities.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G, u, H) {
      var F = a.animObject,
        B = a.setAnimation,
        z = f.format;
      a = C.isFirefox;
      var p = C.marginNames;
      C = C.win;
      var m = u.distribute,
        e = H.addEvent,
        d = H.createElement,
        l = H.css,
        h = H.defined,
        t = H.discardElement,
        n = H.find,
        v = H.fireEvent,
        w = H.isNumber,
        y = H.merge,
        A = H.pick,
        q = H.relativeLength,
        k = H.stableSort,
        c = H.syncTimeout;
      u = H.wrap;
      H = (function () {
        function a(b, a) {
          this.allItems = [];
          this.contentGroup = this.box = void 0;
          this.display = !1;
          this.group = void 0;
          this.offsetWidth =
            this.maxLegendWidth =
            this.maxItemWidth =
            this.legendWidth =
            this.legendHeight =
            this.lastLineHeight =
            this.lastItemY =
            this.itemY =
            this.itemX =
            this.itemMarginTop =
            this.itemMarginBottom =
            this.itemHeight =
            this.initialItemY =
              0;
          this.options = void 0;
          this.padding = 0;
          this.pages = [];
          this.proximate = !1;
          this.scrollGroup = void 0;
          this.widthOption =
            this.totalItemWidth =
            this.titleHeight =
            this.symbolWidth =
            this.symbolHeight =
              0;
          this.chart = b;
          this.init(b, a);
        }
        a.prototype.init = function (b, a) {
          this.chart = b;
          this.setOptions(a);
          a.enabled &&
            (this.render(),
            e(this.chart, "endResize", function () {
              this.legend.positionCheckboxes();
            }),
            this.proximate
              ? (this.unchartrender = e(this.chart, "render", function () {
                  this.legend.proximatePositions();
                  this.legend.positionItems();
                }))
              : this.unchartrender && this.unchartrender());
        };
        a.prototype.setOptions = function (b) {
          var a = A(b.padding, 8);
          this.options = b;
          this.chart.styledMode ||
            ((this.itemStyle = b.itemStyle),
            (this.itemHiddenStyle = y(this.itemStyle, b.itemHiddenStyle)));
          this.itemMarginTop = b.itemMarginTop || 0;
          this.itemMarginBottom = b.itemMarginBottom || 0;
          this.padding = a;
          this.initialItemY = a - 5;
          this.symbolWidth = A(b.symbolWidth, 16);
          this.pages = [];
          this.proximate = "proximate" === b.layout && !this.chart.inverted;
          this.baseline = void 0;
        };
        a.prototype.update = function (b, a) {
          var c = this.chart;
          this.setOptions(y(!0, this.options, b));
          this.destroy();
          c.isDirtyLegend = c.isDirtyBox = !0;
          A(a, !0) && c.redraw();
          v(this, "afterUpdate");
        };
        a.prototype.colorizeItem = function (b, a) {
          b.legendGroup[a ? "removeClass" : "addClass"](
            "highcharts-legend-item-hidden"
          );
          if (!this.chart.styledMode) {
            var c = this.options,
              d = b.legendItem,
              e = b.legendLine,
              g = b.legendSymbol,
              f = this.itemHiddenStyle.color;
            c = a ? c.itemStyle.color : f;
            var k = a ? b.color || f : f,
              h = b.options && b.options.marker,
              l = { fill: k };
            d && d.css({ fill: c, color: c });
            e && e.attr({ stroke: k });
            g &&
              (h &&
                g.isMarker &&
                ((l = b.pointAttribs()), a || (l.stroke = l.fill = f)),
              g.attr(l));
          }
          v(this, "afterColorizeItem", { item: b, visible: a });
        };
        a.prototype.positionItems = function () {
          this.allItems.forEach(this.positionItem, this);
          this.chart.isResizing || this.positionCheckboxes();
        };
        a.prototype.positionItem = function (b) {
          var a = this,
            c = this.options,
            d = c.symbolPadding,
            e = !c.rtl,
            g = b._legendItemPos;
          c = g[0];
          g = g[1];
          var f = b.checkbox,
            k = b.legendGroup;
          k &&
            k.element &&
            ((d = {
              translateX: e ? c : this.legendWidth - c - 2 * d - 4,
              translateY: g,
            }),
            (e = function () {
              v(a, "afterPositionItem", { item: b });
            }),
            h(k.translateY) ? k.animate(d, void 0, e) : (k.attr(d), e()));
          f && ((f.x = c), (f.y = g));
        };
        a.prototype.destroyItem = function (b) {
          var a = b.checkbox;
          ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(
            function (a) {
              b[a] && (b[a] = b[a].destroy());
            }
          );
          a && t(b.checkbox);
        };
        a.prototype.destroy = function () {
          function b(b) {
            this[b] && (this[b] = this[b].destroy());
          }
          this.getAllItems().forEach(function (a) {
            ["legendItem", "legendGroup"].forEach(b, a);
          });
          "clipRect up down pager nav box title group"
            .split(" ")
            .forEach(b, this);
          this.display = null;
        };
        a.prototype.positionCheckboxes = function () {
          var b = this.group && this.group.alignAttr,
            a = this.clipHeight || this.legendHeight,
            c = this.titleHeight;
          if (b) {
            var d = b.translateY;
            this.allItems.forEach(function (e) {
              var g = e.checkbox;
              if (g) {
                var f = d + c + g.y + (this.scrollOffset || 0) + 3;
                l(g, {
                  left: b.translateX + e.checkboxOffset + g.x - 20 + "px",
                  top: f + "px",
                  display:
                    this.proximate || (f > d - 6 && f < d + a - 6)
                      ? ""
                      : "none",
                });
              }
            }, this);
          }
        };
        a.prototype.renderTitle = function () {
          var b = this.options,
            a = this.padding,
            c = b.title,
            d = 0;
          c.text &&
            (this.title ||
              ((this.title = this.chart.renderer
                .label(
                  c.text,
                  a - 3,
                  a - 4,
                  void 0,
                  void 0,
                  void 0,
                  b.useHTML,
                  void 0,
                  "legend-title"
                )
                .attr({ zIndex: 1 })),
              this.chart.styledMode || this.title.css(c.style),
              this.title.add(this.group)),
            c.width || this.title.css({ width: this.maxLegendWidth + "px" }),
            (b = this.title.getBBox()),
            (d = b.height),
            (this.offsetWidth = b.width),
            this.contentGroup.attr({ translateY: d }));
          this.titleHeight = d;
        };
        a.prototype.setText = function (b) {
          var a = this.options;
          b.legendItem.attr({
            text: a.labelFormat
              ? z(a.labelFormat, b, this.chart)
              : a.labelFormatter.call(b),
          });
        };
        a.prototype.renderItem = function (b) {
          var a = this.chart,
            c = a.renderer,
            d = this.options,
            e = this.symbolWidth,
            g = d.symbolPadding || 0,
            f = this.itemStyle,
            k = this.itemHiddenStyle,
            h = "horizontal" === d.layout ? A(d.itemDistance, 20) : 0,
            l = !d.rtl,
            m = !b.series,
            n = !m && b.series.drawLegendSymbol ? b.series : b,
            q = n.options,
            p = this.createCheckboxForItem && q && q.showCheckbox,
            t = d.useHTML,
            w = b.options.className,
            E = b.legendItem;
          q = e + g + h + (p ? 20 : 0);
          E ||
            ((b.legendGroup = c
              .g("legend-item")
              .addClass(
                "highcharts-" +
                  n.type +
                  "-series highcharts-color-" +
                  b.colorIndex +
                  (w ? " " + w : "") +
                  (m ? " highcharts-series-" + b.index : "")
              )
              .attr({ zIndex: 1 })
              .add(this.scrollGroup)),
            (b.legendItem = E =
              c.text("", l ? e + g : -g, this.baseline || 0, t)),
            a.styledMode || E.css(y(b.visible ? f : k)),
            E.attr({ align: l ? "left" : "right", zIndex: 2 }).add(
              b.legendGroup
            ),
            this.baseline ||
              ((this.fontMetrics = c.fontMetrics(
                a.styledMode ? 12 : f.fontSize,
                E
              )),
              (this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop),
              E.attr("y", this.baseline),
              (this.symbolHeight = d.symbolHeight || this.fontMetrics.f),
              d.squareSymbol &&
                ((this.symbolWidth = A(
                  d.symbolWidth,
                  Math.max(this.symbolHeight, 16)
                )),
                (q = this.symbolWidth + g + h + (p ? 20 : 0)),
                l && E.attr("x", this.symbolWidth + g))),
            n.drawLegendSymbol(this, b),
            this.setItemEvents && this.setItemEvents(b, E, t));
          p &&
            !b.checkbox &&
            this.createCheckboxForItem &&
            this.createCheckboxForItem(b);
          this.colorizeItem(b, b.visible);
          (!a.styledMode && f.width) ||
            E.css({
              width:
                (d.itemWidth || this.widthOption || a.spacingBox.width) -
                q +
                "px",
            });
          this.setText(b);
          a = E.getBBox();
          c = (this.fontMetrics && this.fontMetrics.h) || 0;
          b.itemWidth = b.checkboxOffset =
            d.itemWidth || b.legendItemWidth || a.width + q;
          this.maxItemWidth = Math.max(this.maxItemWidth, b.itemWidth);
          this.totalItemWidth += b.itemWidth;
          this.itemHeight = b.itemHeight = Math.round(
            b.legendItemHeight || (a.height > 1.5 * c ? a.height : c)
          );
        };
        a.prototype.layoutItem = function (b) {
          var a = this.options,
            c = this.padding,
            d = "horizontal" === a.layout,
            e = b.itemHeight,
            g = this.itemMarginBottom,
            f = this.itemMarginTop,
            k = d ? A(a.itemDistance, 20) : 0,
            h = this.maxLegendWidth;
          a =
            a.alignColumns && this.totalItemWidth > h
              ? this.maxItemWidth
              : b.itemWidth;
          d &&
            this.itemX - c + a > h &&
            ((this.itemX = c),
            this.lastLineHeight && (this.itemY += f + this.lastLineHeight + g),
            (this.lastLineHeight = 0));
          this.lastItemY = f + this.itemY + g;
          this.lastLineHeight = Math.max(e, this.lastLineHeight);
          b._legendItemPos = [this.itemX, this.itemY];
          d
            ? (this.itemX += a)
            : ((this.itemY += f + e + g), (this.lastLineHeight = e));
          this.offsetWidth =
            this.widthOption ||
            Math.max(
              (d ? this.itemX - c - (b.checkbox ? 0 : k) : a) + c,
              this.offsetWidth
            );
        };
        a.prototype.getAllItems = function () {
          var b = [];
          this.chart.series.forEach(function (a) {
            var c = a && a.options;
            a &&
              A(c.showInLegend, h(c.linkedTo) ? !1 : void 0, !0) &&
              (b = b.concat(
                a.legendItems || ("point" === c.legendType ? a.data : a)
              ));
          });
          v(this, "afterGetAllItems", { allItems: b });
          return b;
        };
        a.prototype.getAlignment = function () {
          var b = this.options;
          return this.proximate
            ? b.align.charAt(0) + "tv"
            : b.floating
            ? ""
            : b.align.charAt(0) +
              b.verticalAlign.charAt(0) +
              b.layout.charAt(0);
        };
        a.prototype.adjustMargins = function (b, a) {
          var c = this.chart,
            d = this.options,
            e = this.getAlignment();
          e &&
            [
              /(lth|ct|rth)/,
              /(rtv|rm|rbv)/,
              /(rbh|cb|lbh)/,
              /(lbv|lm|ltv)/,
            ].forEach(function (g, f) {
              g.test(e) &&
                !h(b[f]) &&
                (c[p[f]] = Math.max(
                  c[p[f]],
                  c.legend[(f + 1) % 2 ? "legendHeight" : "legendWidth"] +
                    [1, -1, -1, 1][f] * d[f % 2 ? "x" : "y"] +
                    A(d.margin, 12) +
                    a[f] +
                    (c.titleOffset[f] || 0)
                ));
            });
        };
        a.prototype.proximatePositions = function () {
          var b = this.chart,
            a = [],
            c = "left" === this.options.align;
          this.allItems.forEach(function (d) {
            var e;
            var g = c;
            if (d.yAxis) {
              d.xAxis.options.reversed && (g = !g);
              d.points &&
                (e = n(
                  g ? d.points : d.points.slice(0).reverse(),
                  function (b) {
                    return w(b.plotY);
                  }
                ));
              g =
                this.itemMarginTop +
                d.legendItem.getBBox().height +
                this.itemMarginBottom;
              var f = d.yAxis.top - b.plotTop;
              d.visible
                ? ((e = e ? e.plotY : d.yAxis.height), (e += f - 0.3 * g))
                : (e = f + d.yAxis.height);
              a.push({ target: e, size: g, item: d });
            }
          }, this);
          m(a, b.plotHeight).forEach(function (a) {
            a.item._legendItemPos &&
              (a.item._legendItemPos[1] = b.plotTop - b.spacing[0] + a.pos);
          });
        };
        a.prototype.render = function () {
          var b = this.chart,
            a = b.renderer,
            c = this.options,
            d = this.padding,
            e = this.getAllItems(),
            g = this.group,
            f = this.box;
          this.itemX = d;
          this.itemY = this.initialItemY;
          this.lastItemY = this.offsetWidth = 0;
          this.widthOption = q(c.width, b.spacingBox.width - d);
          var h = b.spacingBox.width - 2 * d - c.x;
          -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) &&
            (h /= 2);
          this.maxLegendWidth = this.widthOption || h;
          g ||
            ((this.group = g =
              a
                .g("legend")
                .addClass(c.className || "")
                .attr({ zIndex: 7 })
                .add()),
            (this.contentGroup = a.g().attr({ zIndex: 1 }).add(g)),
            (this.scrollGroup = a.g().add(this.contentGroup)));
          this.renderTitle();
          k(e, function (b, a) {
            return (
              ((b.options && b.options.legendIndex) || 0) -
              ((a.options && a.options.legendIndex) || 0)
            );
          });
          c.reversed && e.reverse();
          this.allItems = e;
          this.display = h = !!e.length;
          this.itemHeight =
            this.totalItemWidth =
            this.maxItemWidth =
            this.lastLineHeight =
              0;
          e.forEach(this.renderItem, this);
          e.forEach(this.layoutItem, this);
          e = (this.widthOption || this.offsetWidth) + d;
          var l = this.lastItemY + this.lastLineHeight + this.titleHeight;
          l = this.handleOverflow(l);
          l += d;
          f ||
            (this.box = f =
              a
                .rect()
                .addClass("highcharts-legend-box")
                .attr({ r: c.borderRadius })
                .add(g));
          b.styledMode ||
            f
              .attr({
                stroke: c.borderColor,
                "stroke-width": c.borderWidth || 0,
                fill: c.backgroundColor || "none",
              })
              .shadow(c.shadow);
          if (0 < e && 0 < l)
            f[f.placed ? "animate" : "attr"](
              f.crisp.call(
                {},
                { x: 0, y: 0, width: e, height: l },
                f.strokeWidth()
              )
            );
          f[h ? "show" : "hide"]();
          b.styledMode && "none" === g.getStyle("display") && (e = l = 0);
          this.legendWidth = e;
          this.legendHeight = l;
          h && this.align();
          this.proximate || this.positionItems();
          v(this, "afterRender");
        };
        a.prototype.align = function (b) {
          void 0 === b && (b = this.chart.spacingBox);
          var a = this.chart,
            c = this.options,
            d = b.y;
          /(lth|ct|rth)/.test(this.getAlignment()) && 0 < a.titleOffset[0]
            ? (d += a.titleOffset[0])
            : /(lbh|cb|rbh)/.test(this.getAlignment()) &&
              0 < a.titleOffset[2] &&
              (d -= a.titleOffset[2]);
          d !== b.y && (b = y(b, { y: d }));
          a.hasRendered || (this.group.placed = !1);
          this.group.align(
            y(c, {
              width: this.legendWidth,
              height: this.legendHeight,
              verticalAlign: this.proximate ? "top" : c.verticalAlign,
            }),
            !0,
            b
          );
        };
        a.prototype.handleOverflow = function (b) {
          var a = this,
            c = this.chart,
            d = c.renderer,
            e = this.options,
            g = e.y,
            f = "top" === e.verticalAlign,
            k = this.padding,
            h = e.maxHeight,
            l = e.navigation,
            m = A(l.animation, !0),
            n = l.arrowSize || 12,
            q = this.pages,
            p = this.allItems,
            t = function (b) {
              "number" === typeof b
                ? v.attr({ height: b })
                : v && ((a.clipRect = v.destroy()), a.contentGroup.clip());
              a.contentGroup.div &&
                (a.contentGroup.div.style.clip = b
                  ? "rect(" + k + "px,9999px," + (k + b) + "px,0)"
                  : "auto");
            },
            w = function (b) {
              a[b] = d
                .circle(0, 0, 1.3 * n)
                .translate(n / 2, n / 2)
                .add(N);
              c.styledMode || a[b].attr("fill", "rgba(0,0,0,0.0001)");
              return a[b];
            },
            E,
            y;
          g = c.spacingBox.height + (f ? -g : g) - k;
          var N = this.nav,
            v = this.clipRect;
          "horizontal" !== e.layout ||
            "middle" === e.verticalAlign ||
            e.floating ||
            (g /= 2);
          h && (g = Math.min(g, h));
          q.length = 0;
          b && 0 < g && b > g && !1 !== l.enabled
            ? ((this.clipHeight = E =
                Math.max(g - 20 - this.titleHeight - k, 0)),
              (this.currentPage = A(this.currentPage, 1)),
              (this.fullHeight = b),
              p.forEach(function (b, a) {
                var c = b._legendItemPos[1],
                  d = Math.round(b.legendItem.getBBox().height),
                  e = q.length;
                if (!e || (c - q[e - 1] > E && (y || c) !== q[e - 1]))
                  q.push(y || c), e++;
                b.pageIx = e - 1;
                y && (p[a - 1].pageIx = e - 1);
                a === p.length - 1 &&
                  c + d - q[e - 1] > E &&
                  d <= E &&
                  (q.push(c), (b.pageIx = e));
                c !== y && (y = c);
              }),
              v ||
                ((v = a.clipRect = d.clipRect(0, k, 9999, 0)),
                a.contentGroup.clip(v)),
              t(E),
              N ||
                ((this.nav = N = d.g().attr({ zIndex: 1 }).add(this.group)),
                (this.up = d.symbol("triangle", 0, 0, n, n).add(N)),
                w("upTracker").on("click", function () {
                  a.scroll(-1, m);
                }),
                (this.pager = d
                  .text("", 15, 10)
                  .addClass("highcharts-legend-navigation")),
                !c.styledMode && l.style && this.pager.css(l.style),
                this.pager.add(N),
                (this.down = d.symbol("triangle-down", 0, 0, n, n).add(N)),
                w("downTracker").on("click", function () {
                  a.scroll(1, m);
                })),
              a.scroll(0),
              (b = g))
            : N &&
              (t(),
              (this.nav = N.destroy()),
              this.scrollGroup.attr({ translateY: 1 }),
              (this.clipHeight = 0));
          return b;
        };
        a.prototype.scroll = function (b, a) {
          var d = this,
            e = this.chart,
            g = this.pages,
            f = g.length,
            k = this.clipHeight,
            h = this.options.navigation,
            l = this.pager,
            m = this.padding,
            n = this.currentPage + b;
          n > f && (n = f);
          0 < n &&
            ("undefined" !== typeof a && B(a, e),
            this.nav.attr({
              translateX: m,
              translateY: k + this.padding + 7 + this.titleHeight,
              visibility: "visible",
            }),
            [this.up, this.upTracker].forEach(function (b) {
              b.attr({
                class:
                  1 === n
                    ? "highcharts-legend-nav-inactive"
                    : "highcharts-legend-nav-active",
              });
            }),
            l.attr({ text: n + "/" + f }),
            [this.down, this.downTracker].forEach(function (b) {
              b.attr({
                x: 18 + this.pager.getBBox().width,
                class:
                  n === f
                    ? "highcharts-legend-nav-inactive"
                    : "highcharts-legend-nav-active",
              });
            }, this),
            e.styledMode ||
              (this.up.attr({
                fill: 1 === n ? h.inactiveColor : h.activeColor,
              }),
              this.upTracker.css({ cursor: 1 === n ? "default" : "pointer" }),
              this.down.attr({
                fill: n === f ? h.inactiveColor : h.activeColor,
              }),
              this.downTracker.css({
                cursor: n === f ? "default" : "pointer",
              })),
            (this.scrollOffset = -g[n - 1] + this.initialItemY),
            this.scrollGroup.animate({ translateY: this.scrollOffset }),
            (this.currentPage = n),
            this.positionCheckboxes(),
            (b = F(A(a, e.renderer.globalAnimation, !0))),
            c(function () {
              v(d, "afterScroll", { currentPage: n });
            }, b.duration));
        };
        a.prototype.setItemEvents = function (b, a, c) {
          var d = this,
            e = d.chart.renderer.boxWrapper,
            g = b instanceof G,
            f = "highcharts-legend-" + (g ? "point" : "series") + "-active",
            k = d.chart.styledMode,
            h = function (a) {
              d.allItems.forEach(function (c) {
                b !== c &&
                  [c].concat(c.linkedSeries || []).forEach(function (b) {
                    b.setState(a, !g);
                  });
              });
            };
          (c ? [a, b.legendSymbol] : [b.legendGroup]).forEach(function (c) {
            if (c)
              c.on("mouseover", function () {
                b.visible && h("inactive");
                b.setState("hover");
                b.visible && e.addClass(f);
                k || a.css(d.options.itemHoverStyle);
              })
                .on("mouseout", function () {
                  d.chart.styledMode ||
                    a.css(y(b.visible ? d.itemStyle : d.itemHiddenStyle));
                  h("");
                  e.removeClass(f);
                  b.setState();
                })
                .on("click", function (a) {
                  var c = function () {
                    b.setVisible && b.setVisible();
                    h(b.visible ? "inactive" : "");
                  };
                  e.removeClass(f);
                  a = { browserEvent: a };
                  b.firePointEvent
                    ? b.firePointEvent("legendItemClick", a, c)
                    : v(b, "legendItemClick", a, c);
                });
          });
        };
        a.prototype.createCheckboxForItem = function (b) {
          b.checkbox = d(
            "input",
            {
              type: "checkbox",
              className: "highcharts-legend-checkbox",
              checked: b.selected,
              defaultChecked: b.selected,
            },
            this.options.itemCheckboxStyle,
            this.chart.container
          );
          e(b.checkbox, "click", function (a) {
            v(
              b.series || b,
              "checkboxClick",
              { checked: a.target.checked, item: b },
              function () {
                b.select();
              }
            );
          });
        };
        return a;
      })();
      (/Trident\/7\.0/.test(C.navigator && C.navigator.userAgent) || a) &&
        u(H.prototype, "positionItem", function (a, b) {
          var c = this,
            d = function () {
              b._legendItemPos && a.call(c, b);
            };
          d();
          c.bubbleLegend || setTimeout(d);
        });
      ("");
      return H;
    }
  );
  M(
    f,
    "Core/Series/SeriesRegistry.js",
    [
      f["Core/Globals.js"],
      f["Core/DefaultOptions.js"],
      f["Core/Series/Point.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G) {
      var u = f.defaultOptions,
        F = G.error,
        I = G.extendClass,
        B = G.merge,
        z;
      (function (f) {
        function m(a, d) {
          var e = u.plotOptions || {},
            h = d.defaultOptions;
          d.prototype.pointClass || (d.prototype.pointClass = C);
          d.prototype.type = a;
          h && (e[a] = h);
          f.seriesTypes[a] = d;
        }
        f.seriesTypes = a.seriesTypes;
        f.getSeries = function (a, d) {
          void 0 === d && (d = {});
          var e = a.options.chart;
          e = d.type || e.type || e.defaultSeriesType || "";
          var h = f.seriesTypes[e];
          f || F(17, !0, a, { missingModuleFor: e });
          e = new h();
          "function" === typeof e.init && e.init(a, d);
          return e;
        };
        f.registerSeriesType = m;
        f.seriesType = function (a, d, l, h, p) {
          var e = u.plotOptions || {};
          d = d || "";
          e[a] = B(e[d], l);
          m(a, I(f.seriesTypes[d] || function () {}, h));
          f.seriesTypes[a].prototype.type = a;
          p && (f.seriesTypes[a].prototype.pointClass = I(C, p));
          return f.seriesTypes[a];
        };
      })(z || (z = {}));
      return z;
    }
  );
  M(
    f,
    "Core/Chart/Chart.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/Axis/Axis.js"],
      f["Core/FormatUtilities.js"],
      f["Core/Foundation.js"],
      f["Core/Globals.js"],
      f["Core/Legend/Legend.js"],
      f["Core/MSPointer.js"],
      f["Core/DefaultOptions.js"],
      f["Core/Pointer.js"],
      f["Core/Renderer/RendererRegistry.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Renderer/SVG/SVGRenderer.js"],
      f["Core/Time.js"],
      f["Core/Utilities.js"],
      f["Core/Renderer/HTML/AST.js"],
    ],
    function (a, f, C, G, u, H, I, B, z, p, m, e, d, l, h) {
      var t = a.animate,
        n = a.animObject,
        v = a.setAnimation,
        w = C.numberFormat,
        y = G.registerEventOptions,
        A = u.charts,
        q = u.doc,
        k = u.marginNames,
        c = u.svg,
        g = u.win,
        b = B.defaultOptions,
        r = B.defaultTime,
        x = m.seriesTypes,
        D = l.addEvent,
        K = l.attr,
        F = l.cleanRecursively,
        Q = l.createElement,
        O = l.css,
        W = l.defined,
        Z = l.discardElement,
        L = l.erase,
        J = l.error,
        M = l.extend,
        da = l.find,
        R = l.fireEvent,
        ea = l.getStyle,
        E = l.isArray,
        T = l.isNumber,
        N = l.isObject,
        U = l.isString,
        V = l.merge,
        X = l.objectEach,
        S = l.pick,
        fa = l.pInt,
        aa = l.relativeLength,
        ia = l.removeEvent,
        ha = l.splat,
        ba = l.syncTimeout,
        ka = l.uniqueKey;
      a = (function () {
        function a(b, a, c) {
          this.series =
            this.renderTo =
            this.renderer =
            this.pointer =
            this.pointCount =
            this.plotWidth =
            this.plotTop =
            this.plotLeft =
            this.plotHeight =
            this.plotBox =
            this.options =
            this.numberFormatter =
            this.margin =
            this.legend =
            this.labelCollectors =
            this.isResizing =
            this.index =
            this.eventOptions =
            this.container =
            this.colorCounter =
            this.clipBox =
            this.chartWidth =
            this.chartHeight =
            this.bounds =
            this.axisOffset =
            this.axes =
              void 0;
          this.sharedClips = {};
          this.yAxis =
            this.xAxis =
            this.userOptions =
            this.titleOffset =
            this.time =
            this.symbolCounter =
            this.spacingBox =
            this.spacing =
              void 0;
          this.getArgs(b, a, c);
        }
        a.chart = function (b, c, d) {
          return new a(b, c, d);
        };
        a.prototype.getArgs = function (b, a, c) {
          U(b) || b.nodeName
            ? ((this.renderTo = b), this.init(a, c))
            : this.init(b, a);
        };
        a.prototype.init = function (a, c) {
          var e = a.plotOptions || {};
          R(this, "init", { args: arguments }, function () {
            var g = V(b, a),
              f = g.chart;
            X(g.plotOptions, function (b, a) {
              N(b) && (b.tooltip = (e[a] && V(e[a].tooltip)) || void 0);
            });
            g.tooltip.userOptions =
              (a.chart && a.chart.forExport && a.tooltip.userOptions) ||
              a.tooltip;
            this.userOptions = a;
            this.margin = [];
            this.spacing = [];
            this.bounds = { h: {}, v: {} };
            this.labelCollectors = [];
            this.callback = c;
            this.isResizing = 0;
            this.options = g;
            this.axes = [];
            this.series = [];
            this.time =
              a.time && Object.keys(a.time).length ? new d(a.time) : u.time;
            this.numberFormatter = f.numberFormatter || w;
            this.styledMode = f.styledMode;
            this.hasCartesianSeries = f.showAxes;
            this.index = A.length;
            A.push(this);
            u.chartCount++;
            y(this, f);
            this.xAxis = [];
            this.yAxis = [];
            this.pointCount = this.colorCounter = this.symbolCounter = 0;
            R(this, "afterInit");
            this.firstRender();
          });
        };
        a.prototype.initSeries = function (b) {
          var a = this.options.chart;
          a = b.type || a.type || a.defaultSeriesType;
          var c = x[a];
          c || J(17, !0, this, { missingModuleFor: a });
          a = new c();
          "function" === typeof a.init && a.init(this, b);
          return a;
        };
        a.prototype.setSeriesData = function () {
          this.getSeriesOrderByLinks().forEach(function (b) {
            b.points ||
              b.data ||
              !b.enabledDataSorting ||
              b.setData(b.options.data, !1);
          });
        };
        a.prototype.getSeriesOrderByLinks = function () {
          return this.series.concat().sort(function (b, a) {
            return b.linkedSeries.length || a.linkedSeries.length
              ? a.linkedSeries.length - b.linkedSeries.length
              : 0;
          });
        };
        a.prototype.orderSeries = function (b) {
          var a = this.series;
          b = b || 0;
          for (var c = a.length; b < c; ++b)
            a[b] && ((a[b].index = b), (a[b].name = a[b].getName()));
        };
        a.prototype.isInsidePlot = function (b, a, c) {
          void 0 === c && (c = {});
          var d = this.inverted,
            e = this.plotBox,
            g = this.plotLeft,
            f = this.plotTop,
            k = this.scrollablePlotBox,
            h = 0;
          var l = 0;
          c.visiblePlotOnly &&
            this.scrollingContainer &&
            ((l = this.scrollingContainer),
            (h = l.scrollLeft),
            (l = l.scrollTop));
          var m = c.series;
          e = (c.visiblePlotOnly && k) || e;
          k = c.inverted ? a : b;
          a = c.inverted ? b : a;
          b = { x: k, y: a, isInsidePlot: !0 };
          if (!c.ignoreX) {
            var n = (m && (d ? m.yAxis : m.xAxis)) || { pos: g, len: Infinity };
            k = c.paneCoordinates ? n.pos + k : g + k;
            (k >= Math.max(h + g, n.pos) &&
              k <= Math.min(h + g + e.width, n.pos + n.len)) ||
              (b.isInsidePlot = !1);
          }
          !c.ignoreY &&
            b.isInsidePlot &&
            ((d = (m && (d ? m.xAxis : m.yAxis)) || { pos: f, len: Infinity }),
            (c = c.paneCoordinates ? d.pos + a : f + a),
            (c >= Math.max(l + f, d.pos) &&
              c <= Math.min(l + f + e.height, d.pos + d.len)) ||
              (b.isInsidePlot = !1));
          R(this, "afterIsInsidePlot", b);
          return b.isInsidePlot;
        };
        a.prototype.redraw = function (b) {
          R(this, "beforeRedraw");
          var a = this.hasCartesianSeries ? this.axes : this.colorAxis || [],
            c = this.series,
            d = this.pointer,
            e = this.legend,
            g = this.userOptions.legend,
            f = this.renderer,
            k = f.isHidden(),
            h = [],
            l = this.isDirtyBox,
            m = this.isDirtyLegend;
          this.setResponsive && this.setResponsive(!1);
          v(this.hasRendered ? b : !1, this);
          k && this.temporaryDisplay();
          this.layOutTitles();
          for (b = c.length; b--; ) {
            var n = c[b];
            if (n.options.stacking || n.options.centerInCategory) {
              var q = !0;
              if (n.isDirty) {
                var E = !0;
                break;
              }
            }
          }
          if (E)
            for (b = c.length; b--; )
              (n = c[b]), n.options.stacking && (n.isDirty = !0);
          c.forEach(function (b) {
            b.isDirty &&
              ("point" === b.options.legendType
                ? ("function" === typeof b.updateTotals && b.updateTotals(),
                  (m = !0))
                : g && (g.labelFormatter || g.labelFormat) && (m = !0));
            b.isDirtyData && R(b, "updatedData");
          });
          m &&
            e &&
            e.options.enabled &&
            (e.render(), (this.isDirtyLegend = !1));
          q && this.getStacks();
          a.forEach(function (b) {
            b.updateNames();
            b.setScale();
          });
          this.getMargins();
          a.forEach(function (b) {
            b.isDirty && (l = !0);
          });
          a.forEach(function (b) {
            var a = b.min + "," + b.max;
            b.extKey !== a &&
              ((b.extKey = a),
              h.push(function () {
                R(b, "afterSetExtremes", M(b.eventArgs, b.getExtremes()));
                delete b.eventArgs;
              }));
            (l || q) && b.redraw();
          });
          l && this.drawChartBox();
          R(this, "predraw");
          c.forEach(function (b) {
            (l || b.isDirty) && b.visible && b.redraw();
            b.isDirtyData = !1;
          });
          d && d.reset(!0);
          f.draw();
          R(this, "redraw");
          R(this, "render");
          k && this.temporaryDisplay(!0);
          h.forEach(function (b) {
            b.call();
          });
        };
        a.prototype.get = function (b) {
          function a(a) {
            return a.id === b || (a.options && a.options.id === b);
          }
          for (
            var c = this.series,
              d = da(this.axes, a) || da(this.series, a),
              e = 0;
            !d && e < c.length;
            e++
          )
            d = da(c[e].points || [], a);
          return d;
        };
        a.prototype.getAxes = function () {
          var b = this,
            a = this.options,
            c = (a.xAxis = ha(a.xAxis || {}));
          a = a.yAxis = ha(a.yAxis || {});
          R(this, "getAxes");
          c.forEach(function (b, a) {
            b.index = a;
            b.isX = !0;
          });
          a.forEach(function (b, a) {
            b.index = a;
          });
          c.concat(a).forEach(function (a) {
            new f(b, a);
          });
          R(this, "afterGetAxes");
        };
        a.prototype.getSelectedPoints = function () {
          return this.series.reduce(function (b, a) {
            a.getPointsCollection().forEach(function (a) {
              S(a.selectedStaging, a.selected) && b.push(a);
            });
            return b;
          }, []);
        };
        a.prototype.getSelectedSeries = function () {
          return this.series.filter(function (b) {
            return b.selected;
          });
        };
        a.prototype.setTitle = function (b, a, c) {
          this.applyDescription("title", b);
          this.applyDescription("subtitle", a);
          this.applyDescription("caption", void 0);
          this.layOutTitles(c);
        };
        a.prototype.applyDescription = function (b, a) {
          var c = this,
            d =
              "title" === b
                ? {
                    color: "#333333",
                    fontSize: this.options.isStock ? "16px" : "18px",
                  }
                : { color: "#666666" };
          d = this.options[b] = V(
            !this.styledMode && { style: d },
            this.options[b],
            a
          );
          var e = this[b];
          e && a && (this[b] = e = e.destroy());
          d &&
            !e &&
            ((e = this.renderer
              .text(d.text, 0, 0, d.useHTML)
              .attr({
                align: d.align,
                class: "highcharts-" + b,
                zIndex: d.zIndex || 4,
              })
              .add()),
            (e.update = function (a) {
              c[
                {
                  title: "setTitle",
                  subtitle: "setSubtitle",
                  caption: "setCaption",
                }[b]
              ](a);
            }),
            this.styledMode || e.css(d.style),
            (this[b] = e));
        };
        a.prototype.layOutTitles = function (b) {
          var a = [0, 0, 0],
            c = this.renderer,
            d = this.spacingBox;
          ["title", "subtitle", "caption"].forEach(function (b) {
            var e = this[b],
              g = this.options[b],
              f = g.verticalAlign || "top";
            b =
              "title" === b
                ? "top" === f
                  ? -3
                  : 0
                : "top" === f
                ? a[0] + 2
                : 0;
            var k;
            if (e) {
              this.styledMode || (k = g.style && g.style.fontSize);
              k = c.fontMetrics(k, e).b;
              e.css({
                width: (g.width || d.width + (g.widthAdjust || 0)) + "px",
              });
              var h = Math.round(e.getBBox(g.useHTML).height);
              e.align(
                M({ y: "bottom" === f ? k : b + k, height: h }, g),
                !1,
                "spacingBox"
              );
              g.floating ||
                ("top" === f
                  ? (a[0] = Math.ceil(a[0] + h))
                  : "bottom" === f && (a[2] = Math.ceil(a[2] + h)));
            }
          }, this);
          a[0] &&
            "top" === (this.options.title.verticalAlign || "top") &&
            (a[0] += this.options.title.margin);
          a[2] &&
            "bottom" === this.options.caption.verticalAlign &&
            (a[2] += this.options.caption.margin);
          var e =
            !this.titleOffset || this.titleOffset.join(",") !== a.join(",");
          this.titleOffset = a;
          R(this, "afterLayOutTitles");
          !this.isDirtyBox &&
            e &&
            ((this.isDirtyBox = this.isDirtyLegend = e),
            this.hasRendered && S(b, !0) && this.isDirtyBox && this.redraw());
        };
        a.prototype.getChartSize = function () {
          var b = this.options.chart,
            a = b.width;
          b = b.height;
          var c = this.renderTo;
          W(a) || (this.containerWidth = ea(c, "width"));
          W(b) || (this.containerHeight = ea(c, "height"));
          this.chartWidth = Math.max(0, a || this.containerWidth || 600);
          this.chartHeight = Math.max(
            0,
            aa(b, this.chartWidth) ||
              (1 < this.containerHeight ? this.containerHeight : 400)
          );
        };
        a.prototype.temporaryDisplay = function (b) {
          var a = this.renderTo;
          if (b)
            for (; a && a.style; )
              a.hcOrigStyle && (O(a, a.hcOrigStyle), delete a.hcOrigStyle),
                a.hcOrigDetached &&
                  (q.body.removeChild(a), (a.hcOrigDetached = !1)),
                (a = a.parentNode);
          else
            for (; a && a.style; ) {
              q.body.contains(a) ||
                a.parentNode ||
                ((a.hcOrigDetached = !0), q.body.appendChild(a));
              if ("none" === ea(a, "display", !1) || a.hcOricDetached)
                (a.hcOrigStyle = {
                  display: a.style.display,
                  height: a.style.height,
                  overflow: a.style.overflow,
                }),
                  (b = { display: "block", overflow: "hidden" }),
                  a !== this.renderTo && (b.height = 0),
                  O(a, b),
                  a.offsetWidth ||
                    a.style.setProperty("display", "block", "important");
              a = a.parentNode;
              if (a === q.body) break;
            }
        };
        a.prototype.setClassName = function (b) {
          this.container.className = "highcharts-container " + (b || "");
        };
        a.prototype.getContainer = function () {
          var b = this.options,
            a = b.chart,
            d = ka(),
            g,
            f = this.renderTo;
          f || (this.renderTo = f = a.renderTo);
          U(f) && (this.renderTo = f = q.getElementById(f));
          f || J(13, !0, this);
          var k = fa(K(f, "data-highcharts-chart"));
          T(k) && A[k] && A[k].hasRendered && A[k].destroy();
          K(f, "data-highcharts-chart", this.index);
          f.innerHTML = h.emptyHTML;
          a.skipClone || f.offsetWidth || this.temporaryDisplay();
          this.getChartSize();
          k = this.chartWidth;
          var l = this.chartHeight;
          O(f, { overflow: "hidden" });
          this.styledMode ||
            (g = M(
              {
                position: "relative",
                overflow: "hidden",
                width: k + "px",
                height: l + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                userSelect: "none",
                "touch-action": "manipulation",
                outline: "none",
              },
              a.style || {}
            ));
          this.container = d = Q("div", { id: d }, g, f);
          this._cursor = d.style.cursor;
          this.renderer = new (
            a.renderer || !c ? p.getRendererType(a.renderer) : e
          )(
            d,
            k,
            l,
            void 0,
            a.forExport,
            b.exporting && b.exporting.allowHTML,
            this.styledMode
          );
          v(void 0, this);
          this.setClassName(a.className);
          if (this.styledMode)
            for (var m in b.defs) this.renderer.definition(b.defs[m]);
          else this.renderer.setStyle(a.style);
          this.renderer.chartIndex = this.index;
          R(this, "afterGetContainer");
        };
        a.prototype.getMargins = function (b) {
          var a = this.spacing,
            c = this.margin,
            d = this.titleOffset;
          this.resetMargins();
          d[0] &&
            !W(c[0]) &&
            (this.plotTop = Math.max(this.plotTop, d[0] + a[0]));
          d[2] &&
            !W(c[2]) &&
            (this.marginBottom = Math.max(this.marginBottom, d[2] + a[2]));
          this.legend && this.legend.display && this.legend.adjustMargins(c, a);
          R(this, "getMargins");
          b || this.getAxisMargins();
        };
        a.prototype.getAxisMargins = function () {
          var b = this,
            a = (b.axisOffset = [0, 0, 0, 0]),
            c = b.colorAxis,
            d = b.margin,
            e = function (b) {
              b.forEach(function (b) {
                b.visible && b.getOffset();
              });
            };
          b.hasCartesianSeries ? e(b.axes) : c && c.length && e(c);
          k.forEach(function (c, e) {
            W(d[e]) || (b[c] += a[e]);
          });
          b.setChartSize();
        };
        a.prototype.reflow = function (b) {
          var a = this,
            c = a.options.chart,
            d = a.renderTo,
            e = W(c.width) && W(c.height),
            f = c.width || ea(d, "width");
          c = c.height || ea(d, "height");
          d = b ? b.target : g;
          delete a.pointer.chartPosition;
          if (!e && !a.isPrinting && f && c && (d === g || d === q)) {
            if (f !== a.containerWidth || c !== a.containerHeight)
              l.clearTimeout(a.reflowTimeout),
                (a.reflowTimeout = ba(
                  function () {
                    a.container && a.setSize(void 0, void 0, !1);
                  },
                  b ? 100 : 0
                ));
            a.containerWidth = f;
            a.containerHeight = c;
          }
        };
        a.prototype.setReflow = function (b) {
          var a = this;
          !1 === b || this.unbindReflow
            ? !1 === b &&
              this.unbindReflow &&
              (this.unbindReflow = this.unbindReflow())
            : ((this.unbindReflow = D(g, "resize", function (b) {
                a.options && a.reflow(b);
              })),
              D(this, "destroy", this.unbindReflow));
        };
        a.prototype.setSize = function (b, a, c) {
          var d = this,
            e = d.renderer;
          d.isResizing += 1;
          v(c, d);
          c = e.globalAnimation;
          d.oldChartHeight = d.chartHeight;
          d.oldChartWidth = d.chartWidth;
          "undefined" !== typeof b && (d.options.chart.width = b);
          "undefined" !== typeof a && (d.options.chart.height = a);
          d.getChartSize();
          d.styledMode ||
            (c ? t : O)(
              d.container,
              { width: d.chartWidth + "px", height: d.chartHeight + "px" },
              c
            );
          d.setChartSize(!0);
          e.setSize(d.chartWidth, d.chartHeight, c);
          d.axes.forEach(function (b) {
            b.isDirty = !0;
            b.setScale();
          });
          d.isDirtyLegend = !0;
          d.isDirtyBox = !0;
          d.layOutTitles();
          d.getMargins();
          d.redraw(c);
          d.oldChartHeight = null;
          R(d, "resize");
          ba(function () {
            d &&
              R(d, "endResize", null, function () {
                --d.isResizing;
              });
          }, n(c).duration);
        };
        a.prototype.setChartSize = function (b) {
          var a = this.inverted,
            c = this.renderer,
            d = this.chartWidth,
            e = this.chartHeight,
            g = this.options.chart,
            f = this.spacing,
            k = this.clipOffset,
            h,
            l,
            m,
            n;
          this.plotLeft = h = Math.round(this.plotLeft);
          this.plotTop = l = Math.round(this.plotTop);
          this.plotWidth = m = Math.max(
            0,
            Math.round(d - h - this.marginRight)
          );
          this.plotHeight = n = Math.max(
            0,
            Math.round(e - l - this.marginBottom)
          );
          this.plotSizeX = a ? n : m;
          this.plotSizeY = a ? m : n;
          this.plotBorderWidth = g.plotBorderWidth || 0;
          this.spacingBox = c.spacingBox = {
            x: f[3],
            y: f[0],
            width: d - f[3] - f[1],
            height: e - f[0] - f[2],
          };
          this.plotBox = c.plotBox = { x: h, y: l, width: m, height: n };
          a = 2 * Math.floor(this.plotBorderWidth / 2);
          d = Math.ceil(Math.max(a, k[3]) / 2);
          e = Math.ceil(Math.max(a, k[0]) / 2);
          this.clipBox = {
            x: d,
            y: e,
            width: Math.floor(this.plotSizeX - Math.max(a, k[1]) / 2 - d),
            height: Math.max(
              0,
              Math.floor(this.plotSizeY - Math.max(a, k[2]) / 2 - e)
            ),
          };
          b ||
            (this.axes.forEach(function (b) {
              b.setAxisSize();
              b.setAxisTranslation();
            }),
            c.alignElements());
          R(this, "afterSetChartSize", { skipAxes: b });
        };
        a.prototype.resetMargins = function () {
          R(this, "resetMargins");
          var b = this,
            a = b.options.chart;
          ["margin", "spacing"].forEach(function (c) {
            var d = a[c],
              e = N(d) ? d : [d, d, d, d];
            ["Top", "Right", "Bottom", "Left"].forEach(function (d, g) {
              b[c][g] = S(a[c + d], e[g]);
            });
          });
          k.forEach(function (a, c) {
            b[a] = S(b.margin[c], b.spacing[c]);
          });
          b.axisOffset = [0, 0, 0, 0];
          b.clipOffset = [0, 0, 0, 0];
        };
        a.prototype.drawChartBox = function () {
          var b = this.options.chart,
            a = this.renderer,
            c = this.chartWidth,
            d = this.chartHeight,
            e = this.styledMode,
            g = this.plotBGImage,
            f = b.backgroundColor,
            k = b.plotBackgroundColor,
            h = b.plotBackgroundImage,
            l = this.plotLeft,
            m = this.plotTop,
            n = this.plotWidth,
            q = this.plotHeight,
            E = this.plotBox,
            r = this.clipRect,
            p = this.clipBox,
            t = this.chartBackground,
            N = this.plotBackground,
            w = this.plotBorder,
            y,
            v = "animate";
          t ||
            ((this.chartBackground = t =
              a.rect().addClass("highcharts-background").add()),
            (v = "attr"));
          if (e) var A = (y = t.strokeWidth());
          else {
            A = b.borderWidth || 0;
            y = A + (b.shadow ? 8 : 0);
            f = { fill: f || "none" };
            if (A || t["stroke-width"])
              (f.stroke = b.borderColor), (f["stroke-width"] = A);
            t.attr(f).shadow(b.shadow);
          }
          t[v]({
            x: y / 2,
            y: y / 2,
            width: c - y - (A % 2),
            height: d - y - (A % 2),
            r: b.borderRadius,
          });
          v = "animate";
          N ||
            ((v = "attr"),
            (this.plotBackground = N =
              a.rect().addClass("highcharts-plot-background").add()));
          N[v](E);
          e ||
            (N.attr({ fill: k || "none" }).shadow(b.plotShadow),
            h &&
              (g
                ? (h !== g.attr("href") && g.attr("href", h), g.animate(E))
                : (this.plotBGImage = a.image(h, l, m, n, q).add())));
          r
            ? r.animate({ width: p.width, height: p.height })
            : (this.clipRect = a.clipRect(p));
          v = "animate";
          w ||
            ((v = "attr"),
            (this.plotBorder = w =
              a
                .rect()
                .addClass("highcharts-plot-border")
                .attr({ zIndex: 1 })
                .add()));
          e ||
            w.attr({
              stroke: b.plotBorderColor,
              "stroke-width": b.plotBorderWidth || 0,
              fill: "none",
            });
          w[v](w.crisp({ x: l, y: m, width: n, height: q }, -w.strokeWidth()));
          this.isDirtyBox = !1;
          R(this, "afterDrawChartBox");
        };
        a.prototype.propFromSeries = function () {
          var b = this,
            a = b.options.chart,
            c = b.options.series,
            d,
            e,
            g;
          ["inverted", "angular", "polar"].forEach(function (f) {
            e = x[a.type || a.defaultSeriesType];
            g = a[f] || (e && e.prototype[f]);
            for (d = c && c.length; !g && d--; )
              (e = x[c[d].type]) && e.prototype[f] && (g = !0);
            b[f] = g;
          });
        };
        a.prototype.linkSeries = function () {
          var b = this,
            a = b.series;
          a.forEach(function (b) {
            b.linkedSeries.length = 0;
          });
          a.forEach(function (a) {
            var c = a.options.linkedTo;
            U(c) &&
              (c = ":previous" === c ? b.series[a.index - 1] : b.get(c)) &&
              c.linkedParent !== a &&
              (c.linkedSeries.push(a),
              (a.linkedParent = c),
              c.enabledDataSorting && a.setDataSortingOptions(),
              (a.visible = S(a.options.visible, c.options.visible, a.visible)));
          });
          R(this, "afterLinkSeries");
        };
        a.prototype.renderSeries = function () {
          this.series.forEach(function (b) {
            b.translate();
            b.render();
          });
        };
        a.prototype.renderLabels = function () {
          var b = this,
            a = b.options.labels;
          a.items &&
            a.items.forEach(function (c) {
              var d = M(a.style, c.style),
                e = fa(d.left) + b.plotLeft,
                g = fa(d.top) + b.plotTop + 12;
              delete d.left;
              delete d.top;
              b.renderer.text(c.html, e, g).attr({ zIndex: 2 }).css(d).add();
            });
        };
        a.prototype.render = function () {
          var b = this.axes,
            a = this.colorAxis,
            c = this.renderer,
            d = this.options,
            e = function (b) {
              b.forEach(function (b) {
                b.visible && b.render();
              });
            },
            g = 0;
          this.setTitle();
          this.legend = new H(this, d.legend);
          this.getStacks && this.getStacks();
          this.getMargins(!0);
          this.setChartSize();
          d = this.plotWidth;
          b.some(function (b) {
            if (
              b.horiz &&
              b.visible &&
              b.options.labels.enabled &&
              b.series.length
            )
              return (g = 21), !0;
          });
          var f = (this.plotHeight = Math.max(this.plotHeight - g, 0));
          b.forEach(function (b) {
            b.setScale();
          });
          this.getAxisMargins();
          var k = 1.1 < d / this.plotWidth,
            h = 1.05 < f / this.plotHeight;
          if (k || h)
            b.forEach(function (b) {
              ((b.horiz && k) || (!b.horiz && h)) && b.setTickInterval(!0);
            }),
              this.getMargins();
          this.drawChartBox();
          this.hasCartesianSeries ? e(b) : a && a.length && e(a);
          this.seriesGroup ||
            (this.seriesGroup = c.g("series-group").attr({ zIndex: 3 }).add());
          this.renderSeries();
          this.renderLabels();
          this.addCredits();
          this.setResponsive && this.setResponsive();
          this.hasRendered = !0;
        };
        a.prototype.addCredits = function (b) {
          var a = this,
            c = V(!0, this.options.credits, b);
          c.enabled &&
            !this.credits &&
            ((this.credits = this.renderer
              .text(c.text + (this.mapCredits || ""), 0, 0)
              .addClass("highcharts-credits")
              .on("click", function () {
                c.href && (g.location.href = c.href);
              })
              .attr({ align: c.position.align, zIndex: 8 })),
            a.styledMode || this.credits.css(c.style),
            this.credits.add().align(c.position),
            (this.credits.update = function (b) {
              a.credits = a.credits.destroy();
              a.addCredits(b);
            }));
        };
        a.prototype.destroy = function () {
          var b = this,
            a = b.axes,
            c = b.series,
            d = b.container,
            e = d && d.parentNode,
            g;
          R(b, "destroy");
          b.renderer.forExport ? L(A, b) : (A[b.index] = void 0);
          u.chartCount--;
          b.renderTo.removeAttribute("data-highcharts-chart");
          ia(b);
          for (g = a.length; g--; ) a[g] = a[g].destroy();
          this.scroller && this.scroller.destroy && this.scroller.destroy();
          for (g = c.length; g--; ) c[g] = c[g].destroy();
          "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer"
            .split(" ")
            .forEach(function (a) {
              var c = b[a];
              c && c.destroy && (b[a] = c.destroy());
            });
          d && ((d.innerHTML = h.emptyHTML), ia(d), e && Z(d));
          X(b, function (a, c) {
            delete b[c];
          });
        };
        a.prototype.firstRender = function () {
          var b = this,
            a = b.options;
          if (!b.isReadyToRender || b.isReadyToRender()) {
            b.getContainer();
            b.resetMargins();
            b.setChartSize();
            b.propFromSeries();
            b.getAxes();
            (E(a.series) ? a.series : []).forEach(function (a) {
              b.initSeries(a);
            });
            b.linkSeries();
            b.setSeriesData();
            R(b, "beforeRender");
            z &&
              (I.isRequired()
                ? (b.pointer = new I(b, a))
                : (b.pointer = new z(b, a)));
            b.render();
            b.pointer.getChartPosition();
            if (!b.renderer.imgCount && !b.hasLoaded) b.onload();
            b.temporaryDisplay(!0);
          }
        };
        a.prototype.onload = function () {
          this.callbacks.concat([this.callback]).forEach(function (b) {
            b && "undefined" !== typeof this.index && b.apply(this, [this]);
          }, this);
          R(this, "load");
          R(this, "render");
          W(this.index) && this.setReflow(this.options.chart.reflow);
          this.hasLoaded = !0;
        };
        a.prototype.addSeries = function (b, a, c) {
          var d = this,
            e;
          b &&
            ((a = S(a, !0)),
            R(d, "addSeries", { options: b }, function () {
              e = d.initSeries(b);
              d.isDirtyLegend = !0;
              d.linkSeries();
              e.enabledDataSorting && e.setData(b.data, !1);
              R(d, "afterAddSeries", { series: e });
              a && d.redraw(c);
            }));
          return e;
        };
        a.prototype.addAxis = function (b, a, c, d) {
          return this.createAxis(a ? "xAxis" : "yAxis", {
            axis: b,
            redraw: c,
            animation: d,
          });
        };
        a.prototype.addColorAxis = function (b, a, c) {
          return this.createAxis("colorAxis", {
            axis: b,
            redraw: a,
            animation: c,
          });
        };
        a.prototype.createAxis = function (b, a) {
          b = new f(
            this,
            V(a.axis, { index: this[b].length, isX: "xAxis" === b })
          );
          S(a.redraw, !0) && this.redraw(a.animation);
          return b;
        };
        a.prototype.showLoading = function (b) {
          var a = this,
            c = a.options,
            d = c.loading,
            e = function () {
              g &&
                O(g, {
                  left: a.plotLeft + "px",
                  top: a.plotTop + "px",
                  width: a.plotWidth + "px",
                  height: a.plotHeight + "px",
                });
            },
            g = a.loadingDiv,
            f = a.loadingSpan;
          g ||
            (a.loadingDiv = g =
              Q(
                "div",
                { className: "highcharts-loading highcharts-loading-hidden" },
                null,
                a.container
              ));
          f ||
            ((a.loadingSpan = f =
              Q("span", { className: "highcharts-loading-inner" }, null, g)),
            D(a, "redraw", e));
          g.className = "highcharts-loading";
          h.setElementHTML(f, S(b, c.lang.loading, ""));
          a.styledMode ||
            (O(g, M(d.style, { zIndex: 10 })),
            O(f, d.labelStyle),
            a.loadingShown ||
              (O(g, { opacity: 0, display: "" }),
              t(
                g,
                { opacity: d.style.opacity || 0.5 },
                { duration: d.showDuration || 0 }
              )));
          a.loadingShown = !0;
          e();
        };
        a.prototype.hideLoading = function () {
          var b = this.options,
            a = this.loadingDiv;
          a &&
            ((a.className = "highcharts-loading highcharts-loading-hidden"),
            this.styledMode ||
              t(
                a,
                { opacity: 0 },
                {
                  duration: b.loading.hideDuration || 100,
                  complete: function () {
                    O(a, { display: "none" });
                  },
                }
              ));
          this.loadingShown = !1;
        };
        a.prototype.update = function (b, a, c, e) {
          var g = this,
            f = {
              credits: "addCredits",
              title: "setTitle",
              subtitle: "setSubtitle",
              caption: "setCaption",
            },
            k = b.isResponsiveOptions,
            h = [],
            l,
            m;
          R(g, "update", { options: b });
          k || g.setResponsive(!1, !0);
          b = F(b, g.options);
          g.userOptions = V(g.userOptions, b);
          var n = b.chart;
          if (n) {
            V(!0, g.options.chart, n);
            "className" in n && g.setClassName(n.className);
            "reflow" in n && g.setReflow(n.reflow);
            if ("inverted" in n || "polar" in n || "type" in n) {
              g.propFromSeries();
              var q = !0;
            }
            "alignTicks" in n && (q = !0);
            "events" in n && y(this, n);
            X(n, function (b, a) {
              -1 !== g.propsRequireUpdateSeries.indexOf("chart." + a) &&
                (l = !0);
              -1 !== g.propsRequireDirtyBox.indexOf(a) && (g.isDirtyBox = !0);
              -1 !== g.propsRequireReflow.indexOf(a) &&
                (k ? (g.isDirtyBox = !0) : (m = !0));
            });
            !g.styledMode &&
              n.style &&
              g.renderer.setStyle(g.options.chart.style || {});
          }
          !g.styledMode && b.colors && (this.options.colors = b.colors);
          b.time &&
            (this.time === r && (this.time = new d(b.time)),
            V(!0, g.options.time, b.time));
          X(b, function (a, c) {
            if (g[c] && "function" === typeof g[c].update) g[c].update(a, !1);
            else if ("function" === typeof g[f[c]]) g[f[c]](a);
            else
              "colors" !== c &&
                -1 === g.collectionsWithUpdate.indexOf(c) &&
                V(!0, g.options[c], b[c]);
            "chart" !== c &&
              -1 !== g.propsRequireUpdateSeries.indexOf(c) &&
              (l = !0);
          });
          this.collectionsWithUpdate.forEach(function (a) {
            if (b[a]) {
              var d = [];
              g[a].forEach(function (b, a) {
                b.options.isInternal || d.push(S(b.options.index, a));
              });
              ha(b[a]).forEach(function (b, e) {
                var f = W(b.id),
                  k;
                f && (k = g.get(b.id));
                !k &&
                  g[a] &&
                  (k = g[a][d ? d[e] : e]) &&
                  f &&
                  W(k.options.id) &&
                  (k = void 0);
                k && k.coll === a && (k.update(b, !1), c && (k.touched = !0));
                !k &&
                  c &&
                  g.collectionsWithInit[a] &&
                  (g.collectionsWithInit[a][0].apply(
                    g,
                    [b].concat(g.collectionsWithInit[a][1] || []).concat([!1])
                  ).touched = !0);
              });
              c &&
                g[a].forEach(function (b) {
                  b.touched || b.options.isInternal
                    ? delete b.touched
                    : h.push(b);
                });
            }
          });
          h.forEach(function (b) {
            b.chart && b.remove && b.remove(!1);
          });
          q &&
            g.axes.forEach(function (b) {
              b.update({}, !1);
            });
          l &&
            g.getSeriesOrderByLinks().forEach(function (b) {
              b.chart && b.update({}, !1);
            }, this);
          q = n && n.width;
          n = n && (U(n.height) ? aa(n.height, q || g.chartWidth) : n.height);
          m || (T(q) && q !== g.chartWidth) || (T(n) && n !== g.chartHeight)
            ? g.setSize(q, n, e)
            : S(a, !0) && g.redraw(e);
          R(g, "afterUpdate", { options: b, redraw: a, animation: e });
        };
        a.prototype.setSubtitle = function (b, a) {
          this.applyDescription("subtitle", b);
          this.layOutTitles(a);
        };
        a.prototype.setCaption = function (b, a) {
          this.applyDescription("caption", b);
          this.layOutTitles(a);
        };
        a.prototype.showResetZoom = function () {
          function a() {
            c.zoomOut();
          }
          var c = this,
            d = b.lang,
            e = c.options.chart.resetZoomButton,
            g = e.theme,
            f = g.states,
            k =
              "chart" === e.relativeTo || "spacingBox" === e.relativeTo
                ? null
                : "scrollablePlotBox";
          R(this, "beforeShowResetZoom", null, function () {
            c.resetZoomButton = c.renderer
              .button(d.resetZoom, null, null, a, g, f && f.hover)
              .attr({ align: e.position.align, title: d.resetZoomTitle })
              .addClass("highcharts-reset-zoom")
              .add()
              .align(e.position, !1, k);
          });
          R(this, "afterShowResetZoom");
        };
        a.prototype.zoomOut = function () {
          R(this, "selection", { resetSelection: !0 }, this.zoom);
        };
        a.prototype.zoom = function (b) {
          var a = this,
            c = a.pointer,
            d = a.inverted ? c.mouseDownX : c.mouseDownY,
            e = !1,
            g;
          !b || b.resetSelection
            ? (a.axes.forEach(function (b) {
                g = b.zoom();
              }),
              (c.initiated = !1))
            : b.xAxis.concat(b.yAxis).forEach(function (b) {
                var f = b.axis,
                  k = a.inverted ? f.left : f.top,
                  h = a.inverted ? k + f.width : k + f.height,
                  l = f.isXAxis,
                  n = !1;
                if ((!l && d >= k && d <= h) || l || !W(d)) n = !0;
                c[l ? "zoomX" : "zoomY"] &&
                  n &&
                  ((g = f.zoom(b.min, b.max)), f.displayBtn && (e = !0));
              });
          var f = a.resetZoomButton;
          e && !f
            ? a.showResetZoom()
            : !e && N(f) && (a.resetZoomButton = f.destroy());
          g &&
            a.redraw(
              S(a.options.chart.animation, b && b.animation, 100 > a.pointCount)
            );
        };
        a.prototype.pan = function (b, a) {
          var c = this,
            d = c.hoverPoints;
          a = "object" === typeof a ? a : { enabled: a, type: "x" };
          var e = c.options.chart,
            g = c.options.mapNavigation && c.options.mapNavigation.enabled;
          e && e.panning && (e.panning = a);
          var f = a.type,
            k;
          R(this, "pan", { originalEvent: b }, function () {
            d &&
              d.forEach(function (b) {
                b.setState();
              });
            var a = c.xAxis;
            "xy" === f ? (a = a.concat(c.yAxis)) : "y" === f && (a = c.yAxis);
            var e = {};
            a.forEach(function (a) {
              if (a.options.panningEnabled && !a.options.isInternal) {
                var d = a.horiz,
                  h = b[d ? "chartX" : "chartY"];
                d = d ? "mouseDownX" : "mouseDownY";
                var l = c[d],
                  n = a.minPointOffset || 0,
                  m =
                    (a.reversed && !c.inverted) || (!a.reversed && c.inverted)
                      ? -1
                      : 1,
                  q = a.getExtremes(),
                  E = a.toValue(l - h, !0) + n * m,
                  r =
                    a.toValue(l + a.len - h, !0) -
                    (n * m || (a.isXAxis && a.pointRangePadding) || 0),
                  p = r < E;
                m = a.hasVerticalPanning();
                l = p ? r : E;
                E = p ? E : r;
                var t = a.panningState;
                !m ||
                  a.isXAxis ||
                  (t && !t.isDirty) ||
                  a.series.forEach(function (b) {
                    var a = b.getProcessedData(!0);
                    a = b.getExtremes(a.yData, !0);
                    t ||
                      (t = {
                        startMin: Number.MAX_VALUE,
                        startMax: -Number.MAX_VALUE,
                      });
                    T(a.dataMin) &&
                      T(a.dataMax) &&
                      ((t.startMin = Math.min(
                        S(b.options.threshold, Infinity),
                        a.dataMin,
                        t.startMin
                      )),
                      (t.startMax = Math.max(
                        S(b.options.threshold, -Infinity),
                        a.dataMax,
                        t.startMax
                      )));
                  });
                m = Math.min(
                  S(t && t.startMin, q.dataMin),
                  n ? q.min : a.toValue(a.toPixels(q.min) - a.minPixelPadding)
                );
                r = Math.max(
                  S(t && t.startMax, q.dataMax),
                  n ? q.max : a.toValue(a.toPixels(q.max) + a.minPixelPadding)
                );
                a.panningState = t;
                a.isOrdinal ||
                  ((n = m - l),
                  0 < n && ((E += n), (l = m)),
                  (n = E - r),
                  0 < n && ((E = r), (l -= n)),
                  a.series.length &&
                    l !== q.min &&
                    E !== q.max &&
                    l >= m &&
                    E <= r &&
                    (a.setExtremes(l, E, !1, !1, { trigger: "pan" }),
                    c.resetZoomButton ||
                      g ||
                      l === m ||
                      E === r ||
                      !f.match("y") ||
                      (c.showResetZoom(), (a.displayBtn = !1)),
                    (k = !0)),
                  (e[d] = h));
              }
            });
            X(e, function (b, a) {
              c[a] = b;
            });
            k && c.redraw(!1);
            O(c.container, { cursor: "move" });
          });
        };
        return a;
      })();
      M(a.prototype, {
        callbacks: [],
        collectionsWithInit: {
          xAxis: [a.prototype.addAxis, [!0]],
          yAxis: [a.prototype.addAxis, [!1]],
          series: [a.prototype.addSeries],
        },
        collectionsWithUpdate: ["xAxis", "yAxis", "series"],
        propsRequireDirtyBox:
          "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(
            " "
          ),
        propsRequireReflow:
          "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(
            " "
          ),
        propsRequireUpdateSeries:
          "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(
            " "
          ),
      });
      ("");
      return a;
    }
  );
  M(f, "Core/Legend/LegendSymbol.js", [f["Core/Utilities.js"]], function (a) {
    var f = a.merge,
      C = a.pick,
      G;
    (function (a) {
      a.drawLineMarker = function (a) {
        var u = this.options,
          B = a.symbolWidth,
          z = a.symbolHeight,
          p = z / 2,
          m = this.chart.renderer,
          e = this.legendGroup;
        a = a.baseline - Math.round(0.3 * a.fontMetrics.b);
        var d = {},
          l = u.marker;
        this.chart.styledMode ||
          ((d = { "stroke-width": u.lineWidth || 0 }),
          u.dashStyle && (d.dashstyle = u.dashStyle));
        this.legendLine = m
          .path([
            ["M", 0, a],
            ["L", B, a],
          ])
          .addClass("highcharts-graph")
          .attr(d)
          .add(e);
        l &&
          !1 !== l.enabled &&
          B &&
          ((u = Math.min(C(l.radius, p), p)),
          0 === this.symbol.indexOf("url") &&
            ((l = f(l, { width: z, height: z })), (u = 0)),
          (this.legendSymbol = B =
            m
              .symbol(this.symbol, B / 2 - u, a - u, 2 * u, 2 * u, l)
              .addClass("highcharts-point")
              .add(e)),
          (B.isMarker = !0));
      };
      a.drawRectangle = function (a, f) {
        var u = a.symbolHeight,
          z = a.options.squareSymbol;
        f.legendSymbol = this.chart.renderer
          .rect(
            z ? (a.symbolWidth - u) / 2 : 0,
            a.baseline - u + 1,
            z ? u : a.symbolWidth,
            u,
            C(a.options.symbolRadius, u / 2)
          )
          .addClass("highcharts-point")
          .attr({ zIndex: 3 })
          .add(f.legendGroup);
      };
    })(G || (G = {}));
    return G;
  });
  M(f, "Core/Series/SeriesDefaults.js", [], function () {
    return {
      lineWidth: 2,
      allowPointSelect: !1,
      crisp: !0,
      showCheckbox: !1,
      animation: { duration: 1e3 },
      events: {},
      marker: {
        enabledThreshold: 2,
        lineColor: "#ffffff",
        lineWidth: 0,
        radius: 4,
        states: {
          normal: { animation: !0 },
          hover: {
            animation: { duration: 50 },
            enabled: !0,
            radiusPlus: 2,
            lineWidthPlus: 1,
          },
          select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 },
        },
      },
      point: { events: {} },
      dataLabels: {
        animation: {},
        align: "center",
        defer: !0,
        formatter: function () {
          var a = this.series.chart.numberFormatter;
          return "number" !== typeof this.y ? "" : a(this.y, -1);
        },
        padding: 5,
        style: {
          fontSize: "11px",
          fontWeight: "bold",
          color: "contrast",
          textOutline: "1px contrast",
        },
        verticalAlign: "bottom",
        x: 0,
        y: 0,
      },
      cropThreshold: 300,
      opacity: 1,
      pointRange: 0,
      softThreshold: !0,
      states: {
        normal: { animation: !0 },
        hover: {
          animation: { duration: 50 },
          lineWidthPlus: 1,
          marker: {},
          halo: { size: 10, opacity: 0.25 },
        },
        select: { animation: { duration: 0 } },
        inactive: { animation: { duration: 50 }, opacity: 0.2 },
      },
      stickyTracking: !0,
      turboThreshold: 1e3,
      findNearestPointBy: "x",
    };
  });
  M(
    f,
    "Core/Series/Series.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/DefaultOptions.js"],
      f["Core/Foundation.js"],
      f["Core/Globals.js"],
      f["Core/Legend/LegendSymbol.js"],
      f["Core/Series/Point.js"],
      f["Core/Series/SeriesDefaults.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Renderer/SVG/SVGElement.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G, u, H, I, B, z, p) {
      var m = a.animObject,
        e = a.setAnimation,
        d = f.defaultOptions,
        l = C.registerEventOptions,
        h = G.hasTouch,
        t = G.svg,
        n = G.win,
        v = B.seriesTypes,
        w = p.addEvent,
        y = p.arrayMax,
        A = p.arrayMin,
        q = p.clamp,
        k = p.cleanRecursively,
        c = p.correctFloat,
        g = p.defined,
        b = p.erase,
        r = p.error,
        x = p.extend,
        D = p.find,
        K = p.fireEvent,
        F = p.getNestedProperty,
        Q = p.isArray,
        O = p.isNumber,
        W = p.isString,
        Z = p.merge,
        L = p.objectEach,
        J = p.pick,
        M = p.removeEvent,
        da = p.splat,
        R = p.syncTimeout;
      a = (function () {
        function a() {
          this.zones =
            this.yAxis =
            this.xAxis =
            this.userOptions =
            this.tooltipOptions =
            this.processedYData =
            this.processedXData =
            this.points =
            this.options =
            this.linkedSeries =
            this.index =
            this.eventsToUnbind =
            this.eventOptions =
            this.data =
            this.chart =
            this._i =
              void 0;
        }
        a.prototype.init = function (a, b) {
          K(this, "init", { options: b });
          var c = this,
            d = a.series;
          this.eventsToUnbind = [];
          c.chart = a;
          c.options = c.setOptions(b);
          b = c.options;
          c.linkedSeries = [];
          c.bindAxes();
          x(c, {
            name: b.name,
            state: "",
            visible: !1 !== b.visible,
            selected: !0 === b.selected,
          });
          l(this, b);
          var e = b.events;
          if (
            (e && e.click) ||
            (b.point && b.point.events && b.point.events.click) ||
            b.allowPointSelect
          )
            a.runTrackerClick = !0;
          c.getColor();
          c.getSymbol();
          c.parallelArrays.forEach(function (a) {
            c[a + "Data"] || (c[a + "Data"] = []);
          });
          c.isCartesian && (a.hasCartesianSeries = !0);
          var g;
          d.length && (g = d[d.length - 1]);
          c._i = J(g && g._i, -1) + 1;
          c.opacity = c.options.opacity;
          a.orderSeries(this.insert(d));
          b.dataSorting && b.dataSorting.enabled
            ? c.setDataSortingOptions()
            : c.points || c.data || c.setData(b.data, !1);
          K(this, "afterInit");
        };
        a.prototype.is = function (a) {
          return v[a] && this instanceof v[a];
        };
        a.prototype.insert = function (a) {
          var b = this.options.index,
            c;
          if (O(b)) {
            for (c = a.length; c--; )
              if (b >= J(a[c].options.index, a[c]._i)) {
                a.splice(c + 1, 0, this);
                break;
              }
            -1 === c && a.unshift(this);
            c += 1;
          } else a.push(this);
          return J(c, a.length - 1);
        };
        a.prototype.bindAxes = function () {
          var a = this,
            b = a.options,
            c = a.chart,
            d;
          K(this, "bindAxes", null, function () {
            (a.axisTypes || []).forEach(function (e) {
              var g = 0;
              c[e].forEach(function (c) {
                d = c.options;
                if (
                  (b[e] === g && !d.isInternal) ||
                  ("undefined" !== typeof b[e] && b[e] === d.id) ||
                  ("undefined" === typeof b[e] && 0 === d.index)
                )
                  a.insert(c.series), (a[e] = c), (c.isDirty = !0);
                d.isInternal || g++;
              });
              a[e] || a.optionalAxis === e || r(18, !0, c);
            });
          });
          K(this, "afterBindAxes");
        };
        a.prototype.updateParallelArrays = function (a, b) {
          var c = a.series,
            d = arguments,
            e = O(b)
              ? function (d) {
                  var e = "y" === d && c.toYData ? c.toYData(a) : a[d];
                  c[d + "Data"][b] = e;
                }
              : function (a) {
                  Array.prototype[b].apply(
                    c[a + "Data"],
                    Array.prototype.slice.call(d, 2)
                  );
                };
          c.parallelArrays.forEach(e);
        };
        a.prototype.hasData = function () {
          return (
            (this.visible &&
              "undefined" !== typeof this.dataMax &&
              "undefined" !== typeof this.dataMin) ||
            (this.visible && this.yData && 0 < this.yData.length)
          );
        };
        a.prototype.autoIncrement = function (a) {
          var b = this.options,
            c = b.pointIntervalUnit,
            d = b.relativeXValue,
            e = this.chart.time,
            g = this.xIncrement,
            f;
          g = J(g, b.pointStart, 0);
          this.pointInterval = f = J(this.pointInterval, b.pointInterval, 1);
          d && O(a) && (f *= a);
          c &&
            ((b = new e.Date(g)),
            "day" === c
              ? e.set("Date", b, e.get("Date", b) + f)
              : "month" === c
              ? e.set("Month", b, e.get("Month", b) + f)
              : "year" === c && e.set("FullYear", b, e.get("FullYear", b) + f),
            (f = b.getTime() - g));
          if (d && O(a)) return g + f;
          this.xIncrement = g + f;
          return g;
        };
        a.prototype.setDataSortingOptions = function () {
          var a = this.options;
          x(this, {
            requireSorting: !1,
            sorted: !1,
            enabledDataSorting: !0,
            allowDG: !1,
          });
          g(a.pointRange) || (a.pointRange = 1);
        };
        a.prototype.setOptions = function (a) {
          var b = this.chart,
            c = b.options,
            e = c.plotOptions,
            f = b.userOptions || {};
          a = Z(a);
          b = b.styledMode;
          var k = { plotOptions: e, userOptions: a };
          K(this, "setOptions", k);
          var h = k.plotOptions[this.type],
            l = f.plotOptions || {};
          this.userOptions = k.userOptions;
          f = Z(h, e.series, f.plotOptions && f.plotOptions[this.type], a);
          this.tooltipOptions = Z(
            d.tooltip,
            d.plotOptions.series && d.plotOptions.series.tooltip,
            d.plotOptions[this.type].tooltip,
            c.tooltip.userOptions,
            e.series && e.series.tooltip,
            e[this.type].tooltip,
            a.tooltip
          );
          this.stickyTracking = J(
            a.stickyTracking,
            l[this.type] && l[this.type].stickyTracking,
            l.series && l.series.stickyTracking,
            this.tooltipOptions.shared && !this.noSharedTooltip
              ? !0
              : f.stickyTracking
          );
          null === h.marker && delete f.marker;
          this.zoneAxis = f.zoneAxis;
          e = this.zones = (f.zones || []).slice();
          (!f.negativeColor && !f.negativeFillColor) ||
            f.zones ||
            ((c = {
              value: f[this.zoneAxis + "Threshold"] || f.threshold || 0,
              className: "highcharts-negative",
            }),
            b ||
              ((c.color = f.negativeColor),
              (c.fillColor = f.negativeFillColor)),
            e.push(c));
          e.length &&
            g(e[e.length - 1].value) &&
            e.push(b ? {} : { color: this.color, fillColor: this.fillColor });
          K(this, "afterSetOptions", { options: f });
          return f;
        };
        a.prototype.getName = function () {
          return J(this.options.name, "In " + 0);
        };
        a.prototype.getCyclic = function (a, b, c) {
          var d = this.chart,
            e = this.userOptions,
            f = a + "Index",
            k = a + "Counter",
            h = c ? c.length : J(d.options.chart[a + "Count"], d[a + "Count"]);
          if (!b) {
            var l = J(e[f], e["_" + f]);
            g(l) ||
              (d.series.length || (d[k] = 0),
              (e["_" + f] = l = d[k] % h),
              (d[k] += 1));
            c && (b = c[l]);
          }
          "undefined" !== typeof l && (this[f] = l);
          this[a] = b;
        };
        a.prototype.getColor = function () {
          this.chart.styledMode
            ? this.getCyclic("color")
            : this.options.colorByPoint
            ? (this.color = "#cccccc")
            : this.getCyclic(
                "color",
                this.options.color || d.plotOptions[this.type].color,
                this.chart.options.colors
              );
        };
        a.prototype.getPointsCollection = function () {
          return (this.hasGroupedData ? this.points : this.data) || [];
        };
        a.prototype.getSymbol = function () {
          this.getCyclic(
            "symbol",
            this.options.marker.symbol,
            this.chart.options.symbols
          );
        };
        a.prototype.findPointIndex = function (a, b) {
          var c = a.id,
            d = a.x,
            e = this.points,
            g = this.options.dataSorting,
            f,
            k;
          if (c) (g = this.chart.get(c)), g instanceof H && (f = g);
          else if (
            this.linkedParent ||
            this.enabledDataSorting ||
            this.options.relativeXValue
          )
            if (
              ((f = function (b) {
                return !b.touched && b.index === a.index;
              }),
              g && g.matchByName
                ? (f = function (b) {
                    return !b.touched && b.name === a.name;
                  })
                : this.options.relativeXValue &&
                  (f = function (b) {
                    return !b.touched && b.options.x === a.x;
                  }),
              (f = D(e, f)),
              !f)
            )
              return;
          if (f) {
            var h = f && f.index;
            "undefined" !== typeof h && (k = !0);
          }
          "undefined" === typeof h && O(d) && (h = this.xData.indexOf(d, b));
          -1 !== h &&
            "undefined" !== typeof h &&
            this.cropped &&
            (h = h >= this.cropStart ? h - this.cropStart : h);
          !k && O(h) && e[h] && e[h].touched && (h = void 0);
          return h;
        };
        a.prototype.updateData = function (a, b) {
          var c = this.options,
            d = c.dataSorting,
            e = this.points,
            f = [],
            k = this.requireSorting,
            h = a.length === e.length,
            l,
            n,
            m,
            q = !0;
          this.xIncrement = null;
          a.forEach(function (a, b) {
            var n =
                (g(a) &&
                  this.pointClass.prototype.optionsToObject.call(
                    { series: this },
                    a
                  )) ||
                {},
              q = n.x;
            if (n.id || O(q)) {
              if (
                ((n = this.findPointIndex(n, m)),
                -1 === n || "undefined" === typeof n
                  ? f.push(a)
                  : e[n] && a !== c.data[n]
                  ? (e[n].update(a, !1, null, !1),
                    (e[n].touched = !0),
                    k && (m = n + 1))
                  : e[n] && (e[n].touched = !0),
                !h || b !== n || (d && d.enabled) || this.hasDerivedData)
              )
                l = !0;
            } else f.push(a);
          }, this);
          if (l)
            for (a = e.length; a--; )
              (n = e[a]) && !n.touched && n.remove && n.remove(!1, b);
          else
            !h || (d && d.enabled)
              ? (q = !1)
              : (a.forEach(function (a, b) {
                  a !== e[b].y && e[b].update && e[b].update(a, !1, null, !1);
                }),
                (f.length = 0));
          e.forEach(function (a) {
            a && (a.touched = !1);
          });
          if (!q) return !1;
          f.forEach(function (a) {
            this.addPoint(a, !1, null, null, !1);
          }, this);
          null === this.xIncrement &&
            this.xData &&
            this.xData.length &&
            ((this.xIncrement = y(this.xData)), this.autoIncrement());
          return !0;
        };
        a.prototype.setData = function (a, b, c, d) {
          var e = this,
            g = e.points,
            f = (g && g.length) || 0,
            k = e.options,
            h = e.chart,
            l = k.dataSorting,
            n = e.xAxis,
            m = k.turboThreshold,
            q = this.xData,
            p = this.yData,
            E = e.pointArrayMap;
          E = E && E.length;
          var t = k.keys,
            w,
            y = 0,
            v = 1,
            A = null;
          a = a || [];
          var x = a.length;
          b = J(b, !0);
          l && l.enabled && (a = this.sortData(a));
          !1 !== d &&
            x &&
            f &&
            !e.cropped &&
            !e.hasGroupedData &&
            e.visible &&
            !e.isSeriesBoosting &&
            (w = this.updateData(a, c));
          if (!w) {
            e.xIncrement = null;
            e.colorCounter = 0;
            this.parallelArrays.forEach(function (a) {
              e[a + "Data"].length = 0;
            });
            if (m && x > m)
              if (((A = e.getFirstValidPoint(a)), O(A)))
                for (c = 0; c < x; c++)
                  (q[c] = this.autoIncrement()), (p[c] = a[c]);
              else if (Q(A))
                if (E)
                  if (A.length === E)
                    for (c = 0; c < x; c++)
                      (q[c] = this.autoIncrement()), (p[c] = a[c]);
                  else
                    for (c = 0; c < x; c++)
                      (d = a[c]), (q[c] = d[0]), (p[c] = d.slice(1, E + 1));
                else if (
                  (t &&
                    ((y = t.indexOf("x")),
                    (v = t.indexOf("y")),
                    (y = 0 <= y ? y : 0),
                    (v = 0 <= v ? v : 1)),
                  1 === A.length && (v = 0),
                  y === v)
                )
                  for (c = 0; c < x; c++)
                    (q[c] = this.autoIncrement()), (p[c] = a[c][v]);
                else
                  for (c = 0; c < x; c++)
                    (d = a[c]), (q[c] = d[y]), (p[c] = d[v]);
              else r(12, !1, h);
            else
              for (c = 0; c < x; c++)
                "undefined" !== typeof a[c] &&
                  ((d = { series: e }),
                  e.pointClass.prototype.applyOptions.apply(d, [a[c]]),
                  e.updateParallelArrays(d, c));
            p && W(p[0]) && r(14, !0, h);
            e.data = [];
            e.options.data = e.userOptions.data = a;
            for (c = f; c--; ) g[c] && g[c].destroy && g[c].destroy();
            n && (n.minRange = n.userMinRange);
            e.isDirty = h.isDirtyBox = !0;
            e.isDirtyData = !!g;
            c = !1;
          }
          "point" === k.legendType &&
            (this.processData(), this.generatePoints());
          b && h.redraw(c);
        };
        a.prototype.sortData = function (a) {
          var b = this,
            c = b.options.dataSorting.sortKey || "y",
            d = function (a, b) {
              return (
                (g(b) &&
                  a.pointClass.prototype.optionsToObject.call(
                    { series: a },
                    b
                  )) ||
                {}
              );
            };
          a.forEach(function (c, e) {
            a[e] = d(b, c);
            a[e].index = e;
          }, this);
          a.concat()
            .sort(function (a, b) {
              a = F(c, a);
              b = F(c, b);
              return b < a ? -1 : b > a ? 1 : 0;
            })
            .forEach(function (a, b) {
              a.x = b;
            }, this);
          b.linkedSeries &&
            b.linkedSeries.forEach(function (b) {
              var c = b.options,
                e = c.data;
              (c.dataSorting && c.dataSorting.enabled) ||
                !e ||
                (e.forEach(function (c, g) {
                  e[g] = d(b, c);
                  a[g] && ((e[g].x = a[g].x), (e[g].index = g));
                }),
                b.setData(e, !1));
            });
          return a;
        };
        a.prototype.getProcessedData = function (a) {
          var b = this.xAxis,
            c = this.options,
            d = c.cropThreshold,
            e = a || this.getExtremesFromAll || c.getExtremesFromAll,
            g = this.isCartesian;
          a = b && b.val2lin;
          c = !(!b || !b.logarithmic);
          var f = 0,
            k = this.xData,
            h = this.yData,
            l = this.requireSorting;
          var n = !1;
          var m = k.length;
          if (b) {
            n = b.getExtremes();
            var q = n.min;
            var p = n.max;
            n = !(!b.categories || b.names.length);
          }
          if (g && this.sorted && !e && (!d || m > d || this.forceCrop))
            if (k[m - 1] < q || k[0] > p) (k = []), (h = []);
            else if (this.yData && (k[0] < q || k[m - 1] > p)) {
              var E = this.cropData(this.xData, this.yData, q, p);
              k = E.xData;
              h = E.yData;
              f = E.start;
              E = !0;
            }
          for (d = k.length || 1; --d; )
            if (
              ((b = c ? a(k[d]) - a(k[d - 1]) : k[d] - k[d - 1]),
              0 < b && ("undefined" === typeof t || b < t))
            )
              var t = b;
            else 0 > b && l && !n && (r(15, !1, this.chart), (l = !1));
          return {
            xData: k,
            yData: h,
            cropped: E,
            cropStart: f,
            closestPointRange: t,
          };
        };
        a.prototype.processData = function (a) {
          var b = this.xAxis;
          if (
            this.isCartesian &&
            !this.isDirty &&
            !b.isDirty &&
            !this.yAxis.isDirty &&
            !a
          )
            return !1;
          a = this.getProcessedData();
          this.cropped = a.cropped;
          this.cropStart = a.cropStart;
          this.processedXData = a.xData;
          this.processedYData = a.yData;
          this.closestPointRange = this.basePointRange = a.closestPointRange;
          K(this, "afterProcessData");
        };
        a.prototype.cropData = function (a, b, c, d, e) {
          var g = a.length,
            f,
            k = 0,
            h = g;
          e = J(e, this.cropShoulder);
          for (f = 0; f < g; f++)
            if (a[f] >= c) {
              k = Math.max(0, f - e);
              break;
            }
          for (c = f; c < g; c++)
            if (a[c] > d) {
              h = c + e;
              break;
            }
          return {
            xData: a.slice(k, h),
            yData: b.slice(k, h),
            start: k,
            end: h,
          };
        };
        a.prototype.generatePoints = function () {
          var a = this.options,
            b = this.processedData || a.data,
            c = this.processedXData,
            d = this.processedYData,
            e = this.pointClass,
            g = c.length,
            f = this.cropStart || 0,
            k = this.hasGroupedData,
            h = a.keys,
            l = [];
          a = a.dataGrouping && a.dataGrouping.groupAll ? f : 0;
          var n,
            m,
            q = this.data;
          if (!q && !k) {
            var p = [];
            p.length = b.length;
            q = this.data = p;
          }
          h && k && (this.options.keys = !1);
          for (m = 0; m < g; m++) {
            p = f + m;
            if (k) {
              var r = new e().init(this, [c[m]].concat(da(d[m])));
              r.dataGroup = this.groupMap[a + m];
              r.dataGroup.options &&
                ((r.options = r.dataGroup.options),
                x(r, r.dataGroup.options),
                delete r.dataLabels);
            } else
              (r = q[p]) ||
                "undefined" === typeof b[p] ||
                (q[p] = r = new e().init(this, b[p], c[m]));
            r && ((r.index = k ? a + m : p), (l[m] = r));
          }
          this.options.keys = h;
          if (q && (g !== (n = q.length) || k))
            for (m = 0; m < n; m++)
              m !== f || k || (m += g),
                q[m] && (q[m].destroyElements(), (q[m].plotX = void 0));
          this.data = q;
          this.points = l;
          K(this, "afterGeneratePoints");
        };
        a.prototype.getXExtremes = function (a) {
          return { min: A(a), max: y(a) };
        };
        a.prototype.getExtremes = function (a, b) {
          var c = this.xAxis,
            d = this.yAxis,
            e = this.processedXData || this.xData,
            g = [],
            f = this.requireSorting ? this.cropShoulder : 0;
          d = d ? d.positiveValuesOnly : !1;
          var k,
            h = 0,
            l = 0,
            n = 0;
          a = a || this.stackedYData || this.processedYData || [];
          var m = a.length;
          if (c) {
            var q = c.getExtremes();
            h = q.min;
            l = q.max;
          }
          for (k = 0; k < m; k++) {
            var r = e[k];
            q = a[k];
            var p = (O(q) || Q(q)) && (q.length || 0 < q || !d);
            r =
              b ||
              this.getExtremesFromAll ||
              this.options.getExtremesFromAll ||
              this.cropped ||
              !c ||
              ((e[k + f] || r) >= h && (e[k - f] || r) <= l);
            if (p && r)
              if ((p = q.length)) for (; p--; ) O(q[p]) && (g[n++] = q[p]);
              else g[n++] = q;
          }
          a = { activeYData: g, dataMin: A(g), dataMax: y(g) };
          K(this, "afterGetExtremes", { dataExtremes: a });
          return a;
        };
        a.prototype.applyExtremes = function () {
          var a = this.getExtremes();
          this.dataMin = a.dataMin;
          this.dataMax = a.dataMax;
          return a;
        };
        a.prototype.getFirstValidPoint = function (a) {
          for (var b = a.length, c = 0, d = null; null === d && c < b; )
            (d = a[c]), c++;
          return d;
        };
        a.prototype.translate = function () {
          this.processedXData || this.processData();
          this.generatePoints();
          var a = this.options,
            b = a.stacking,
            d = this.xAxis,
            e = d.categories,
            f = this.enabledDataSorting,
            k = this.yAxis,
            h = this.points,
            l = h.length,
            n = this.pointPlacementToXValue(),
            m = !!n,
            r = a.threshold,
            p = a.startFromThreshold ? r : 0,
            t = this.zoneAxis || "y",
            w,
            y,
            v = Number.MAX_VALUE;
          for (w = 0; w < l; w++) {
            var A = h[w],
              x = A.x,
              D = void 0,
              z = void 0,
              u = A.y,
              B = A.low,
              F =
                b &&
                k.stacking &&
                k.stacking.stacks[
                  (this.negStacks && u < (p ? 0 : r) ? "-" : "") + this.stackKey
                ];
            if (
              (k.positiveValuesOnly && !k.validatePositiveValue(u)) ||
              (d.positiveValuesOnly && !d.validatePositiveValue(x))
            )
              A.isNull = !0;
            A.plotX = y = c(
              q(d.translate(x, 0, 0, 0, 1, n, "flags" === this.type), -1e5, 1e5)
            );
            if (b && this.visible && F && F[x]) {
              var C = this.getStackIndicator(C, x, this.index);
              A.isNull || ((D = F[x]), (z = D.points[C.key]));
            }
            Q(z) &&
              ((B = z[0]),
              (u = z[1]),
              B === p && C.key === F[x].base && (B = J(O(r) && r, k.min)),
              k.positiveValuesOnly && 0 >= B && (B = null),
              (A.total = A.stackTotal = D.total),
              (A.percentage = D.total && (A.y / D.total) * 100),
              (A.stackY = u),
              this.irregularWidths ||
                D.setOffset(this.pointXOffset || 0, this.barW || 0));
            A.yBottom = g(B) ? q(k.translate(B, 0, 1, 0, 1), -1e5, 1e5) : null;
            this.dataModify && (u = this.dataModify.modifyValue(u, w));
            A.plotY = void 0;
            O(u) &&
              ((D = k.translate(u, !1, !0, !1, !0)),
              "undefined" !== typeof D && (A.plotY = q(D, -1e5, 1e5)));
            A.isInside = this.isPointInside(A);
            A.clientX = m ? c(d.translate(x, 0, 0, 0, 1, n)) : y;
            A.negative = A[t] < (a[t + "Threshold"] || r || 0);
            A.category = J(e && e[A.x], A.x);
            if (!A.isNull && !1 !== A.visible) {
              "undefined" !== typeof G && (v = Math.min(v, Math.abs(y - G)));
              var G = y;
            }
            A.zone = this.zones.length ? A.getZone() : void 0;
            !A.graphic && this.group && f && (A.isNew = !0);
          }
          this.closestPointRangePx = v;
          K(this, "afterTranslate");
        };
        a.prototype.getValidPoints = function (a, b, c) {
          var d = this.chart;
          return (a || this.points || []).filter(function (a) {
            return b &&
              !d.isInsidePlot(a.plotX, a.plotY, { inverted: d.inverted })
              ? !1
              : !1 !== a.visible && (c || !a.isNull);
          });
        };
        a.prototype.getClipBox = function () {
          var a = this.chart,
            b = this.xAxis,
            c = this.yAxis,
            d = Z(a.clipBox);
          b && b.len !== a.plotSizeX && (d.width = b.len);
          c && c.len !== a.plotSizeY && (d.height = c.len);
          return d;
        };
        a.prototype.getSharedClipKey = function () {
          return (this.sharedClipKey =
            (this.options.xAxis || 0) + "," + (this.options.yAxis || 0));
        };
        a.prototype.setClip = function () {
          var a = this.chart,
            b = this.group,
            c = this.markerGroup,
            d = a.sharedClips;
          a = a.renderer;
          var e = this.getClipBox(),
            g = this.getSharedClipKey(),
            f = d[g];
          f ? f.animate(e) : (d[g] = f = a.clipRect(e));
          b && b.clip(!1 === this.options.clip ? void 0 : f);
          c && c.clip();
        };
        a.prototype.animate = function (a) {
          var b = this.chart,
            c = this.group,
            d = this.markerGroup,
            e = b.inverted,
            g = m(this.options.animation),
            f = [this.getSharedClipKey(), g.duration, g.easing, g.defer].join(),
            k = b.sharedClips[f],
            h = b.sharedClips[f + "m"];
          if (a && c)
            (g = this.getClipBox()),
              k
                ? k.attr("height", g.height)
                : ((g.width = 0),
                  e && (g.x = b.plotHeight),
                  (k = b.renderer.clipRect(g)),
                  (b.sharedClips[f] = k),
                  (h = b.renderer.clipRect({
                    x: e ? (b.plotSizeX || 0) + 99 : -99,
                    y: e ? -b.plotLeft : -b.plotTop,
                    width: 99,
                    height: e ? b.chartWidth : b.chartHeight,
                  })),
                  (b.sharedClips[f + "m"] = h)),
              c.clip(k),
              d && d.clip(h);
          else if (k && !k.hasClass("highcharts-animating")) {
            b = this.getClipBox();
            var l = g.step;
            d &&
              d.element.childNodes.length &&
              (g.step = function (a, b) {
                l && l.apply(b, arguments);
                h &&
                  h.element &&
                  h.attr(b.prop, "width" === b.prop ? a + 99 : a);
              });
            k.addClass("highcharts-animating").animate(b, g);
          }
        };
        a.prototype.afterAnimate = function () {
          var a = this;
          this.setClip();
          L(this.chart.sharedClips, function (b, c, d) {
            b &&
              !a.chart.container.querySelector(
                '[clip-path="url(#' + b.id + ')"]'
              ) &&
              (b.destroy(), delete d[c]);
          });
          this.finishedAnimating = !0;
          K(this, "afterAnimate");
        };
        a.prototype.drawPoints = function () {
          var a = this.points,
            b = this.chart,
            c = this.options.marker,
            d = this[this.specialGroup] || this.markerGroup,
            e = this.xAxis,
            g = J(
              c.enabled,
              !e || e.isRadial ? !0 : null,
              this.closestPointRangePx >= c.enabledThreshold * c.radius
            ),
            f,
            k;
          if (!1 !== c.enabled || this._hasPointMarkers)
            for (f = 0; f < a.length; f++) {
              var h = a[f];
              var l = (k = h.graphic) ? "animate" : "attr";
              var n = h.marker || {};
              var m = !!h.marker;
              if (
                ((g && "undefined" === typeof n.enabled) || n.enabled) &&
                !h.isNull &&
                !1 !== h.visible
              ) {
                var q = J(n.symbol, this.symbol, "rect");
                var r = this.markerAttribs(h, h.selected && "select");
                this.enabledDataSorting &&
                  (h.startXPos = e.reversed ? -(r.width || 0) : e.width);
                var p = !1 !== h.isInside;
                k
                  ? k[p ? "show" : "hide"](p).animate(r)
                  : p &&
                    (0 < (r.width || 0) || h.hasImage) &&
                    ((h.graphic = k =
                      b.renderer
                        .symbol(q, r.x, r.y, r.width, r.height, m ? n : c)
                        .add(d)),
                    this.enabledDataSorting &&
                      b.hasRendered &&
                      (k.attr({ x: h.startXPos }), (l = "animate")));
                k && "animate" === l && k[p ? "show" : "hide"](p).animate(r);
                if (k && !b.styledMode)
                  k[l](this.pointAttribs(h, h.selected && "select"));
                k && k.addClass(h.getClassName(), !0);
              } else k && (h.graphic = k.destroy());
            }
        };
        a.prototype.markerAttribs = function (a, b) {
          var c = this.options,
            d = c.marker,
            e = a.marker || {},
            g = e.symbol || d.symbol,
            f = J(e.radius, d && d.radius);
          b &&
            ((d = d.states[b]),
            (b = e.states && e.states[b]),
            (f = J(
              b && b.radius,
              d && d.radius,
              f && f + ((d && d.radiusPlus) || 0)
            )));
          a.hasImage = g && 0 === g.indexOf("url");
          a.hasImage && (f = 0);
          a = O(f)
            ? {
                x: c.crisp ? Math.floor(a.plotX - f) : a.plotX - f,
                y: a.plotY - f,
              }
            : {};
          f && (a.width = a.height = 2 * f);
          return a;
        };
        a.prototype.pointAttribs = function (a, b) {
          var c = this.options.marker,
            d = a && a.options,
            e = (d && d.marker) || {},
            g = d && d.color,
            f = a && a.color,
            k = a && a.zone && a.zone.color,
            h = this.color;
          a = J(e.lineWidth, c.lineWidth);
          d = 1;
          h = g || k || f || h;
          g = e.fillColor || c.fillColor || h;
          f = e.lineColor || c.lineColor || h;
          b = b || "normal";
          c = c.states[b] || {};
          b = (e.states && e.states[b]) || {};
          a = J(
            b.lineWidth,
            c.lineWidth,
            a + J(b.lineWidthPlus, c.lineWidthPlus, 0)
          );
          g = b.fillColor || c.fillColor || g;
          f = b.lineColor || c.lineColor || f;
          d = J(b.opacity, c.opacity, d);
          return { stroke: f, "stroke-width": a, fill: g, opacity: d };
        };
        a.prototype.destroy = function (a) {
          var c = this,
            d = c.chart,
            e = /AppleWebKit\/533/.test(n.navigator.userAgent),
            g = c.data || [],
            f,
            k,
            h,
            l;
          K(c, "destroy", { keepEventsForUpdate: a });
          this.removeEvents(a);
          (c.axisTypes || []).forEach(function (a) {
            (l = c[a]) &&
              l.series &&
              (b(l.series, c), (l.isDirty = l.forceRedraw = !0));
          });
          c.legendItem && c.chart.legend.destroyItem(c);
          for (k = g.length; k--; ) (h = g[k]) && h.destroy && h.destroy();
          c.clips &&
            c.clips.forEach(function (a) {
              return a.destroy();
            });
          p.clearTimeout(c.animationTimeout);
          L(c, function (a, b) {
            a instanceof z &&
              !a.survive &&
              ((f = e && "group" === b ? "hide" : "destroy"), a[f]());
          });
          d.hoverSeries === c && (d.hoverSeries = void 0);
          b(d.series, c);
          d.orderSeries();
          L(c, function (b, d) {
            (a && "hcEvents" === d) || delete c[d];
          });
        };
        a.prototype.applyZones = function () {
          var a = this,
            b = this.chart,
            c = b.renderer,
            d = this.zones,
            e = this.clips || [],
            g = this.graph,
            f = this.area,
            k = Math.max(b.chartWidth, b.chartHeight),
            h = this[(this.zoneAxis || "y") + "Axis"],
            l = b.inverted,
            n,
            m,
            r,
            p,
            t,
            w,
            A,
            y,
            v = !1;
          if (d.length && (g || f) && h && "undefined" !== typeof h.min) {
            var x = h.reversed;
            var D = h.horiz;
            g && !this.showLine && g.hide();
            f && f.hide();
            var z = h.getExtremes();
            d.forEach(function (d, E) {
              n = x ? (D ? b.plotWidth : 0) : D ? 0 : h.toPixels(z.min) || 0;
              n = q(J(m, n), 0, k);
              m = q(Math.round(h.toPixels(J(d.value, z.max), !0) || 0), 0, k);
              v && (n = m = h.toPixels(z.max));
              p = Math.abs(n - m);
              t = Math.min(n, m);
              w = Math.max(n, m);
              h.isXAxis
                ? ((r = { x: l ? w : t, y: 0, width: p, height: k }),
                  D || (r.x = b.plotHeight - r.x))
                : ((r = { x: 0, y: l ? w : t, width: k, height: p }),
                  D && (r.y = b.plotWidth - r.y));
              l &&
                c.isVML &&
                (r = h.isXAxis
                  ? { x: 0, y: x ? t : w, height: r.width, width: b.chartWidth }
                  : {
                      x: r.y - b.plotLeft - b.spacingBox.x,
                      y: 0,
                      width: r.height,
                      height: b.chartHeight,
                    });
              e[E] ? e[E].animate(r) : (e[E] = c.clipRect(r));
              A = a["zone-area-" + E];
              y = a["zone-graph-" + E];
              g && y && y.clip(e[E]);
              f && A && A.clip(e[E]);
              v = d.value > z.max;
              a.resetZones && 0 === m && (m = void 0);
            });
            this.clips = e;
          } else a.visible && (g && g.show(!0), f && f.show(!0));
        };
        a.prototype.invertGroups = function (a) {
          function b() {
            ["group", "markerGroup"].forEach(function (b) {
              c[b] &&
                (d.renderer.isVML &&
                  c[b].attr({ width: c.yAxis.len, height: c.xAxis.len }),
                (c[b].width = c.yAxis.len),
                (c[b].height = c.xAxis.len),
                c[b].invert(c.isRadialSeries ? !1 : a));
            });
          }
          var c = this,
            d = c.chart;
          c.xAxis &&
            (c.eventsToUnbind.push(w(d, "resize", b)),
            b(),
            (c.invertGroups = b));
        };
        a.prototype.plotGroup = function (a, b, c, d, e) {
          var f = this[a],
            k = !f;
          c = { visibility: c, zIndex: d || 0.1 };
          "undefined" === typeof this.opacity ||
            this.chart.styledMode ||
            "inactive" === this.state ||
            (c.opacity = this.opacity);
          k && (this[a] = f = this.chart.renderer.g().add(e));
          f.addClass(
            "highcharts-" +
              b +
              " highcharts-series-" +
              this.index +
              " highcharts-" +
              this.type +
              "-series " +
              (g(this.colorIndex)
                ? "highcharts-color-" + this.colorIndex + " "
                : "") +
              (this.options.className || "") +
              (f.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""),
            !0
          );
          f.attr(c)[k ? "attr" : "animate"](this.getPlotBox());
          return f;
        };
        a.prototype.getPlotBox = function () {
          var a = this.chart,
            b = this.xAxis,
            c = this.yAxis;
          a.inverted && ((b = c), (c = this.xAxis));
          return {
            translateX: b ? b.left : a.plotLeft,
            translateY: c ? c.top : a.plotTop,
            scaleX: 1,
            scaleY: 1,
          };
        };
        a.prototype.removeEvents = function (a) {
          a || M(this);
          this.eventsToUnbind.length &&
            (this.eventsToUnbind.forEach(function (a) {
              a();
            }),
            (this.eventsToUnbind.length = 0));
        };
        a.prototype.render = function () {
          var a = this,
            b = a.chart,
            c = a.options,
            d = m(c.animation),
            e = a.visible ? "inherit" : "hidden",
            g = c.zIndex,
            f = a.hasRendered,
            k = b.seriesGroup,
            h = b.inverted;
          b = !a.finishedAnimating && b.renderer.isSVG ? d.duration : 0;
          K(this, "render");
          var l = a.plotGroup("group", "series", e, g, k);
          a.markerGroup = a.plotGroup("markerGroup", "markers", e, g, k);
          !1 !== c.clip && a.setClip();
          a.animate && b && a.animate(!0);
          l.inverted = J(a.invertible, a.isCartesian) ? h : !1;
          a.drawGraph && (a.drawGraph(), a.applyZones());
          a.visible && a.drawPoints();
          a.drawDataLabels && a.drawDataLabels();
          a.redrawPoints && a.redrawPoints();
          a.drawTracker &&
            !1 !== a.options.enableMouseTracking &&
            a.drawTracker();
          a.invertGroups(h);
          a.animate && b && a.animate();
          f ||
            (b && d.defer && (b += d.defer),
            (a.animationTimeout = R(function () {
              a.afterAnimate();
            }, b || 0)));
          a.isDirty = !1;
          a.hasRendered = !0;
          K(a, "afterRender");
        };
        a.prototype.redraw = function () {
          var a = this.chart,
            b = this.isDirty || this.isDirtyData,
            c = this.group,
            d = this.xAxis,
            e = this.yAxis;
          c &&
            (a.inverted && c.attr({ width: a.plotWidth, height: a.plotHeight }),
            c.animate({
              translateX: J(d && d.left, a.plotLeft),
              translateY: J(e && e.top, a.plotTop),
            }));
          this.translate();
          this.render();
          b && delete this.kdTree;
        };
        a.prototype.searchPoint = function (a, b) {
          var c = this.xAxis,
            d = this.yAxis,
            e = this.chart.inverted;
          return this.searchKDTree(
            {
              clientX: e ? c.len - a.chartY + c.pos : a.chartX - c.pos,
              plotY: e ? d.len - a.chartX + d.pos : a.chartY - d.pos,
            },
            b,
            a
          );
        };
        a.prototype.buildKDTree = function (a) {
          function b(a, d, e) {
            var g = a && a.length;
            if (g) {
              var f = c.kdAxisArray[d % e];
              a.sort(function (a, b) {
                return a[f] - b[f];
              });
              g = Math.floor(g / 2);
              return {
                point: a[g],
                left: b(a.slice(0, g), d + 1, e),
                right: b(a.slice(g + 1), d + 1, e),
              };
            }
          }
          this.buildingKdTree = !0;
          var c = this,
            d = -1 < c.options.findNearestPointBy.indexOf("y") ? 2 : 1;
          delete c.kdTree;
          R(
            function () {
              c.kdTree = b(c.getValidPoints(null, !c.directTouch), d, d);
              c.buildingKdTree = !1;
            },
            c.options.kdNow || (a && "touchstart" === a.type) ? 0 : 1
          );
        };
        a.prototype.searchKDTree = function (a, b, c) {
          function d(a, b, c, l) {
            var n = b.point,
              m = e.kdAxisArray[c % l],
              q = n,
              r = g(a[f]) && g(n[f]) ? Math.pow(a[f] - n[f], 2) : null;
            var p = g(a[k]) && g(n[k]) ? Math.pow(a[k] - n[k], 2) : null;
            p = (r || 0) + (p || 0);
            n.dist = g(p) ? Math.sqrt(p) : Number.MAX_VALUE;
            n.distX = g(r) ? Math.sqrt(r) : Number.MAX_VALUE;
            m = a[m] - n[m];
            p = 0 > m ? "left" : "right";
            r = 0 > m ? "right" : "left";
            b[p] && ((p = d(a, b[p], c + 1, l)), (q = p[h] < q[h] ? p : n));
            b[r] &&
              Math.sqrt(m * m) < q[h] &&
              ((a = d(a, b[r], c + 1, l)), (q = a[h] < q[h] ? a : q));
            return q;
          }
          var e = this,
            f = this.kdAxisArray[0],
            k = this.kdAxisArray[1],
            h = b ? "distX" : "dist";
          b = -1 < e.options.findNearestPointBy.indexOf("y") ? 2 : 1;
          this.kdTree || this.buildingKdTree || this.buildKDTree(c);
          if (this.kdTree) return d(a, this.kdTree, b, b);
        };
        a.prototype.pointPlacementToXValue = function () {
          var a = this.options,
            b = a.pointRange,
            c = this.xAxis;
          a = a.pointPlacement;
          "between" === a && (a = c.reversed ? -0.5 : 0.5);
          return O(a) ? a * (b || c.pointRange) : 0;
        };
        a.prototype.isPointInside = function (a) {
          var b = this.chart,
            c = this.xAxis,
            d = this.yAxis;
          return (
            "undefined" !== typeof a.plotY &&
            "undefined" !== typeof a.plotX &&
            0 <= a.plotY &&
            a.plotY <= (d ? d.len : b.plotHeight) &&
            0 <= a.plotX &&
            a.plotX <= (c ? c.len : b.plotWidth)
          );
        };
        a.prototype.drawTracker = function () {
          var a = this,
            b = a.options,
            c = b.trackByArea,
            d = [].concat(c ? a.areaPath : a.graphPath),
            e = a.chart,
            g = e.pointer,
            f = e.renderer,
            k = e.options.tooltip.snap,
            l = a.tracker,
            n = function (b) {
              if (e.hoverSeries !== a) a.onMouseOver();
            },
            m = "rgba(192,192,192," + (t ? 0.0001 : 0.002) + ")";
          l
            ? l.attr({ d: d })
            : a.graph &&
              ((a.tracker = f
                .path(d)
                .attr({
                  visibility: a.visible ? "visible" : "hidden",
                  zIndex: 2,
                })
                .addClass(
                  c ? "highcharts-tracker-area" : "highcharts-tracker-line"
                )
                .add(a.group)),
              e.styledMode ||
                a.tracker.attr({
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  stroke: m,
                  fill: c ? m : "none",
                  "stroke-width": a.graph.strokeWidth() + (c ? 0 : 2 * k),
                }),
              [a.tracker, a.markerGroup, a.dataLabelsGroup].forEach(function (
                a
              ) {
                if (
                  a &&
                  (a
                    .addClass("highcharts-tracker")
                    .on("mouseover", n)
                    .on("mouseout", function (a) {
                      g.onTrackerMouseOut(a);
                    }),
                  b.cursor && !e.styledMode && a.css({ cursor: b.cursor }),
                  h)
                )
                  a.on("touchstart", n);
              }));
          K(this, "afterDrawTracker");
        };
        a.prototype.addPoint = function (a, b, c, d, e) {
          var g = this.options,
            f = this.data,
            k = this.chart,
            h = this.xAxis;
          h = h && h.hasNames && h.names;
          var l = g.data,
            n = this.xData,
            m;
          b = J(b, !0);
          var q = { series: this };
          this.pointClass.prototype.applyOptions.apply(q, [a]);
          var r = q.x;
          var p = n.length;
          if (this.requireSorting && r < n[p - 1])
            for (m = !0; p && n[p - 1] > r; ) p--;
          this.updateParallelArrays(q, "splice", p, 0, 0);
          this.updateParallelArrays(q, p);
          h && q.name && (h[r] = q.name);
          l.splice(p, 0, a);
          if (m || this.processedData)
            this.data.splice(p, 0, null), this.processData();
          "point" === g.legendType && this.generatePoints();
          c &&
            (f[0] && f[0].remove
              ? f[0].remove(!1)
              : (f.shift(), this.updateParallelArrays(q, "shift"), l.shift()));
          !1 !== e && K(this, "addPoint", { point: q });
          this.isDirtyData = this.isDirty = !0;
          b && k.redraw(d);
        };
        a.prototype.removePoint = function (a, b, c) {
          var d = this,
            g = d.data,
            f = g[a],
            k = d.points,
            h = d.chart,
            l = function () {
              k && k.length === g.length && k.splice(a, 1);
              g.splice(a, 1);
              d.options.data.splice(a, 1);
              d.updateParallelArrays(f || { series: d }, "splice", a, 1);
              f && f.destroy();
              d.isDirty = !0;
              d.isDirtyData = !0;
              b && h.redraw();
            };
          e(c, h);
          b = J(b, !0);
          f ? f.firePointEvent("remove", null, l) : l();
        };
        a.prototype.remove = function (a, b, c, d) {
          function e() {
            g.destroy(d);
            f.isDirtyLegend = f.isDirtyBox = !0;
            f.linkSeries();
            J(a, !0) && f.redraw(b);
          }
          var g = this,
            f = g.chart;
          !1 !== c ? K(g, "remove", null, e) : e();
        };
        a.prototype.update = function (a, b) {
          a = k(a, this.userOptions);
          K(this, "update", { options: a });
          var c = this,
            d = c.chart,
            e = c.userOptions,
            g = c.initialType || c.type,
            f = d.options.plotOptions,
            h = v[g].prototype,
            l = c.finishedAnimating && { animation: !1 },
            n = {},
            m,
            q = ["eventOptions", "navigatorSeries", "baseSeries"],
            p = a.type || e.type || d.options.chart.type,
            t = !(
              this.hasDerivedData ||
              (p && p !== this.type) ||
              "undefined" !== typeof a.pointStart ||
              "undefined" !== typeof a.pointInterval ||
              "undefined" !== typeof a.relativeXValue ||
              a.joinBy ||
              a.mapData ||
              c.hasOptionChanged("dataGrouping") ||
              c.hasOptionChanged("pointStart") ||
              c.hasOptionChanged("pointInterval") ||
              c.hasOptionChanged("pointIntervalUnit") ||
              c.hasOptionChanged("keys")
            );
          p = p || g;
          t &&
            (q.push(
              "data",
              "isDirtyData",
              "points",
              "processedXData",
              "processedYData",
              "xIncrement",
              "cropped",
              "_hasPointMarkers",
              "_hasPointLabels",
              "clips",
              "nodes",
              "layout",
              "level",
              "mapMap",
              "mapData",
              "minY",
              "maxY",
              "minX",
              "maxX"
            ),
            !1 !== a.visible && q.push("area", "graph"),
            c.parallelArrays.forEach(function (a) {
              q.push(a + "Data");
            }),
            a.data &&
              (a.dataSorting && x(c.options.dataSorting, a.dataSorting),
              this.setData(a.data, !1)));
          a = Z(
            e,
            l,
            {
              index: "undefined" === typeof e.index ? c.index : e.index,
              pointStart: J(
                f && f.series && f.series.pointStart,
                e.pointStart,
                c.xData[0]
              ),
            },
            !t && { data: c.options.data },
            a
          );
          t && a.data && (a.data = c.options.data);
          q = [
            "group",
            "markerGroup",
            "dataLabelsGroup",
            "transformGroup",
          ].concat(q);
          q.forEach(function (a) {
            q[a] = c[a];
            delete c[a];
          });
          f = !1;
          if (v[p]) {
            if (((f = p !== c.type), c.remove(!1, !1, !1, !0), f))
              if (Object.setPrototypeOf)
                Object.setPrototypeOf(c, v[p].prototype);
              else {
                l = Object.hasOwnProperty.call(c, "hcEvents") && c.hcEvents;
                for (m in h) c[m] = void 0;
                x(c, v[p].prototype);
                l ? (c.hcEvents = l) : delete c.hcEvents;
              }
          } else r(17, !0, d, { missingModuleFor: p });
          q.forEach(function (a) {
            c[a] = q[a];
          });
          c.init(d, a);
          if (t && this.points) {
            var w = c.options;
            !1 === w.visible
              ? ((n.graphic = 1), (n.dataLabel = 1))
              : c._hasPointLabels ||
                ((a = w.marker),
                (h = w.dataLabels),
                !a ||
                  (!1 !== a.enabled &&
                    (e.marker && e.marker.symbol) === a.symbol) ||
                  (n.graphic = 1),
                h && !1 === h.enabled && (n.dataLabel = 1));
            this.points.forEach(function (a) {
              a &&
                a.series &&
                (a.resolveColor(),
                Object.keys(n).length && a.destroyElements(n),
                !1 === w.showInLegend &&
                  a.legendItem &&
                  d.legend.destroyItem(a));
            }, this);
          }
          c.initialType = g;
          d.linkSeries();
          f && c.linkedSeries.length && (c.isDirtyData = !0);
          K(this, "afterUpdate");
          J(b, !0) && d.redraw(t ? void 0 : !1);
        };
        a.prototype.setName = function (a) {
          this.name = this.options.name = this.userOptions.name = a;
          this.chart.isDirtyLegend = !0;
        };
        a.prototype.hasOptionChanged = function (a) {
          var b = this.options[a],
            c = this.chart.options.plotOptions,
            d = this.userOptions[a];
          return d
            ? b !== d
            : b !==
                J(
                  c && c[this.type] && c[this.type][a],
                  c && c.series && c.series[a],
                  b
                );
        };
        a.prototype.onMouseOver = function () {
          var a = this.chart,
            b = a.hoverSeries;
          a.pointer.setHoverChartIndex();
          if (b && b !== this) b.onMouseOut();
          this.options.events.mouseOver && K(this, "mouseOver");
          this.setState("hover");
          a.hoverSeries = this;
        };
        a.prototype.onMouseOut = function () {
          var a = this.options,
            b = this.chart,
            c = b.tooltip,
            d = b.hoverPoint;
          b.hoverSeries = null;
          if (d) d.onMouseOut();
          this && a.events.mouseOut && K(this, "mouseOut");
          !c ||
            this.stickyTracking ||
            (c.shared && !this.noSharedTooltip) ||
            c.hide();
          b.series.forEach(function (a) {
            a.setState("", !0);
          });
        };
        a.prototype.setState = function (a, b) {
          var c = this,
            d = c.options,
            e = c.graph,
            g = d.inactiveOtherPoints,
            f = d.states,
            k = J(
              f[a || "normal"] && f[a || "normal"].animation,
              c.chart.options.chart.animation
            ),
            h = d.lineWidth,
            l = 0,
            n = d.opacity;
          a = a || "";
          if (
            c.state !== a &&
            ([c.group, c.markerGroup, c.dataLabelsGroup].forEach(function (b) {
              b &&
                (c.state && b.removeClass("highcharts-series-" + c.state),
                a && b.addClass("highcharts-series-" + a));
            }),
            (c.state = a),
            !c.chart.styledMode)
          ) {
            if (f[a] && !1 === f[a].enabled) return;
            a &&
              ((h = f[a].lineWidth || h + (f[a].lineWidthPlus || 0)),
              (n = J(f[a].opacity, n)));
            if (e && !e.dashstyle)
              for (
                d = { "stroke-width": h }, e.animate(d, k);
                c["zone-graph-" + l];

              )
                c["zone-graph-" + l].animate(d, k), (l += 1);
            g ||
              [
                c.group,
                c.markerGroup,
                c.dataLabelsGroup,
                c.labelBySeries,
              ].forEach(function (a) {
                a && a.animate({ opacity: n }, k);
              });
          }
          b && g && c.points && c.setAllPointsToState(a || void 0);
        };
        a.prototype.setAllPointsToState = function (a) {
          this.points.forEach(function (b) {
            b.setState && b.setState(a);
          });
        };
        a.prototype.setVisible = function (a, b) {
          var c = this,
            d = c.chart,
            e = c.legendItem,
            g = d.options.chart.ignoreHiddenSeries,
            f = c.visible,
            k = (c.visible =
              a =
              c.options.visible =
              c.userOptions.visible =
                "undefined" === typeof a ? !f : a)
              ? "show"
              : "hide";
          ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(
            function (a) {
              if (c[a]) c[a][k]();
            }
          );
          if (
            d.hoverSeries === c ||
            (d.hoverPoint && d.hoverPoint.series) === c
          )
            c.onMouseOut();
          e && d.legend.colorizeItem(c, a);
          c.isDirty = !0;
          c.options.stacking &&
            d.series.forEach(function (a) {
              a.options.stacking && a.visible && (a.isDirty = !0);
            });
          c.linkedSeries.forEach(function (b) {
            b.setVisible(a, !1);
          });
          g && (d.isDirtyBox = !0);
          K(c, k);
          !1 !== b && d.redraw();
        };
        a.prototype.show = function () {
          this.setVisible(!0);
        };
        a.prototype.hide = function () {
          this.setVisible(!1);
        };
        a.prototype.select = function (a) {
          this.selected =
            a =
            this.options.selected =
              "undefined" === typeof a ? !this.selected : a;
          this.checkbox && (this.checkbox.checked = a);
          K(this, a ? "select" : "unselect");
        };
        a.prototype.shouldShowTooltip = function (a, b, c) {
          void 0 === c && (c = {});
          c.series = this;
          c.visiblePlotOnly = !0;
          return this.chart.isInsidePlot(a, b, c);
        };
        a.defaultOptions = I;
        return a;
      })();
      x(a.prototype, {
        axisTypes: ["xAxis", "yAxis"],
        coll: "series",
        colorCounter: 0,
        cropShoulder: 1,
        directTouch: !1,
        drawLegendSymbol: u.drawLineMarker,
        isCartesian: !0,
        kdAxisArray: ["clientX", "plotY"],
        parallelArrays: ["x", "y"],
        pointClass: H,
        requireSorting: !0,
        sorted: !0,
      });
      B.series = a;
      ("");
      ("");
      return a;
    }
  );
  M(
    f,
    "Extensions/ScrollablePlotArea.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/Axis/Axis.js"],
      f["Core/Chart/Chart.js"],
      f["Core/Series/Series.js"],
      f["Core/Renderer/RendererRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G, u, H) {
      var F = a.stop,
        B = H.addEvent,
        z = H.createElement,
        p = H.merge,
        m = H.pick;
      B(C, "afterSetChartSize", function (a) {
        var d = this.options.chart.scrollablePlotArea,
          e = d && d.minWidth;
        d = d && d.minHeight;
        if (!this.renderer.forExport) {
          if (e) {
            if (
              (this.scrollablePixelsX = e = Math.max(0, e - this.chartWidth))
            ) {
              this.scrollablePlotBox = this.renderer.scrollablePlotBox = p(
                this.plotBox
              );
              this.plotBox.width = this.plotWidth += e;
              this.inverted
                ? (this.clipBox.height += e)
                : (this.clipBox.width += e);
              var h = { 1: { name: "right", value: e } };
            }
          } else
            d &&
              (this.scrollablePixelsY = e =
                Math.max(0, d - this.chartHeight)) &&
              ((this.scrollablePlotBox = this.renderer.scrollablePlotBox =
                p(this.plotBox)),
              (this.plotBox.height = this.plotHeight += e),
              this.inverted
                ? (this.clipBox.width += e)
                : (this.clipBox.height += e),
              (h = { 2: { name: "bottom", value: e } }));
          h &&
            !a.skipAxes &&
            this.axes.forEach(function (a) {
              h[a.side]
                ? (a.getPlotLinePath = function () {
                    var d = h[a.side].name,
                      e = this[d];
                    this[d] = e - h[a.side].value;
                    var l = f.prototype.getPlotLinePath.apply(this, arguments);
                    this[d] = e;
                    return l;
                  })
                : (a.setAxisSize(), a.setAxisTranslation());
            });
        }
      });
      B(C, "render", function () {
        this.scrollablePixelsX || this.scrollablePixelsY
          ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed())
          : this.fixedDiv && this.applyFixed();
      });
      C.prototype.setUpScrolling = function () {
        var a = this,
          d = {
            WebkitOverflowScrolling: "touch",
            overflowX: "hidden",
            overflowY: "hidden",
          };
        this.scrollablePixelsX && (d.overflowX = "auto");
        this.scrollablePixelsY && (d.overflowY = "auto");
        this.scrollingParent = z(
          "div",
          { className: "highcharts-scrolling-parent" },
          { position: "relative" },
          this.renderTo
        );
        this.scrollingContainer = z(
          "div",
          { className: "highcharts-scrolling" },
          d,
          this.scrollingParent
        );
        B(this.scrollingContainer, "scroll", function () {
          a.pointer && delete a.pointer.chartPosition;
        });
        this.innerContainer = z(
          "div",
          { className: "highcharts-inner-container" },
          null,
          this.scrollingContainer
        );
        this.innerContainer.appendChild(this.container);
        this.setUpScrolling = null;
      };
      C.prototype.moveFixedElements = function () {
        var a = this.container,
          d = this.fixedRenderer,
          f =
            ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(
              " "
            ),
          h;
        this.scrollablePixelsX && !this.inverted
          ? (h = ".highcharts-yaxis")
          : this.scrollablePixelsX && this.inverted
          ? (h = ".highcharts-xaxis")
          : this.scrollablePixelsY && !this.inverted
          ? (h = ".highcharts-xaxis")
          : this.scrollablePixelsY &&
            this.inverted &&
            (h = ".highcharts-yaxis");
        h &&
          f.push(
            h + ":not(.highcharts-radial-axis)",
            h + "-labels:not(.highcharts-radial-axis-labels)"
          );
        f.forEach(function (e) {
          [].forEach.call(a.querySelectorAll(e), function (a) {
            (a.namespaceURI === d.SVG_NS
              ? d.box
              : d.box.parentNode
            ).appendChild(a);
            a.style.pointerEvents = "auto";
          });
        });
      };
      C.prototype.applyFixed = function () {
        var a = !this.fixedDiv,
          d = this.options.chart,
          f = d.scrollablePlotArea,
          h = u.getRendererType();
        a
          ? ((this.fixedDiv = z(
              "div",
              { className: "highcharts-fixed" },
              {
                position: "absolute",
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: ((d.style && d.style.zIndex) || 0) + 2,
                top: 0,
              },
              null,
              !0
            )),
            this.scrollingContainer &&
              this.scrollingContainer.parentNode.insertBefore(
                this.fixedDiv,
                this.scrollingContainer
              ),
            (this.renderTo.style.overflow = "visible"),
            (this.fixedRenderer = d =
              new h(
                this.fixedDiv,
                this.chartWidth,
                this.chartHeight,
                this.options.chart.style
              )),
            (this.scrollableMask = d
              .path()
              .attr({
                fill: this.options.chart.backgroundColor || "#fff",
                "fill-opacity": m(f.opacity, 0.85),
                zIndex: -1,
              })
              .addClass("highcharts-scrollable-mask")
              .add()),
            B(this, "afterShowResetZoom", this.moveFixedElements),
            B(this, "afterApplyDrilldown", this.moveFixedElements),
            B(this, "afterLayOutTitles", this.moveFixedElements))
          : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
        if (this.scrollableDirty || a)
          (this.scrollableDirty = !1), this.moveFixedElements();
        d = this.chartWidth + (this.scrollablePixelsX || 0);
        h = this.chartHeight + (this.scrollablePixelsY || 0);
        F(this.container);
        this.container.style.width = d + "px";
        this.container.style.height = h + "px";
        this.renderer.boxWrapper.attr({
          width: d,
          height: h,
          viewBox: [0, 0, d, h].join(" "),
        });
        this.chartBackground.attr({ width: d, height: h });
        this.scrollingContainer.style.height = this.chartHeight + "px";
        a &&
          (f.scrollPositionX &&
            (this.scrollingContainer.scrollLeft =
              this.scrollablePixelsX * f.scrollPositionX),
          f.scrollPositionY &&
            (this.scrollingContainer.scrollTop =
              this.scrollablePixelsY * f.scrollPositionY));
        h = this.axisOffset;
        a = this.plotTop - h[0] - 1;
        f = this.plotLeft - h[3] - 1;
        d = this.plotTop + this.plotHeight + h[2] + 1;
        h = this.plotLeft + this.plotWidth + h[1] + 1;
        var p = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0),
          n = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
        a = this.scrollablePixelsX
          ? [
              ["M", 0, a],
              ["L", this.plotLeft - 1, a],
              ["L", this.plotLeft - 1, d],
              ["L", 0, d],
              ["Z"],
              ["M", p, a],
              ["L", this.chartWidth, a],
              ["L", this.chartWidth, d],
              ["L", p, d],
              ["Z"],
            ]
          : this.scrollablePixelsY
          ? [
              ["M", f, 0],
              ["L", f, this.plotTop - 1],
              ["L", h, this.plotTop - 1],
              ["L", h, 0],
              ["Z"],
              ["M", f, n],
              ["L", f, this.chartHeight],
              ["L", h, this.chartHeight],
              ["L", h, n],
              ["Z"],
            ]
          : [["M", 0, 0]];
        "adjustHeight" !== this.redrawTrigger &&
          this.scrollableMask.attr({ d: a });
      };
      B(f, "afterInit", function () {
        this.chart.scrollableDirty = !0;
      });
      B(G, "show", function () {
        this.chart.scrollableDirty = !0;
      });
      ("");
    }
  );
  M(
    f,
    "Core/Axis/StackingAxis.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/Axis/Axis.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C) {
      var F = a.getDeferredAnimation,
        u = C.addEvent,
        H = C.destroyObjectProperties,
        I = C.fireEvent,
        B = C.isNumber,
        z = C.objectEach,
        p;
      (function (a) {
        function e() {
          var a = this.stacking;
          if (a) {
            var d = a.stacks;
            z(d, function (a, e) {
              H(a);
              d[e] = null;
            });
            a && a.stackTotalGroup && a.stackTotalGroup.destroy();
          }
        }
        function d() {
          this.stacking || (this.stacking = new h(this));
        }
        var f = [];
        a.compose = function (a) {
          -1 === f.indexOf(a) &&
            (f.push(a), u(a, "init", d), u(a, "destroy", e));
          return a;
        };
        var h = (function () {
          function a(a) {
            this.oldStacks = {};
            this.stacks = {};
            this.stacksTouched = 0;
            this.axis = a;
          }
          a.prototype.buildStacks = function () {
            var a = this.axis,
              d = a.series,
              e = a.options.reversedStacks,
              f = d.length,
              h;
            if (!a.isXAxis) {
              this.usePercentage = !1;
              for (h = f; h--; ) {
                var l = d[e ? h : f - h - 1];
                l.setStackedPoints();
                l.setGroupedPoints();
              }
              for (h = 0; h < f; h++) d[h].modifyStacks();
              I(a, "afterBuildStacks");
            }
          };
          a.prototype.cleanStacks = function () {
            if (!this.axis.isXAxis) {
              if (this.oldStacks) var a = (this.stacks = this.oldStacks);
              z(a, function (a) {
                z(a, function (a) {
                  a.cumulative = a.total;
                });
              });
            }
          };
          a.prototype.resetStacks = function () {
            var a = this,
              d = a.stacks;
            a.axis.isXAxis ||
              z(d, function (d) {
                z(d, function (e, f) {
                  B(e.touched) && e.touched < a.stacksTouched
                    ? (e.destroy(), delete d[f])
                    : ((e.total = null), (e.cumulative = null));
                });
              });
          };
          a.prototype.renderStackTotals = function () {
            var a = this.axis,
              d = a.chart,
              e = d.renderer,
              f = this.stacks;
            a = F(
              d,
              (a.options.stackLabels && a.options.stackLabels.animation) || !1
            );
            var h = (this.stackTotalGroup =
              this.stackTotalGroup ||
              e
                .g("stack-labels")
                .attr({ visibility: "visible", zIndex: 6, opacity: 0 })
                .add());
            h.translate(d.plotLeft, d.plotTop);
            z(f, function (a) {
              z(a, function (a) {
                a.render(h);
              });
            });
            h.animate({ opacity: 1 }, a);
          };
          return a;
        })();
        a.Additions = h;
      })(p || (p = {}));
      return p;
    }
  );
  M(
    f,
    "Extensions/Stacking.js",
    [
      f["Core/Axis/Axis.js"],
      f["Core/Chart/Chart.js"],
      f["Core/FormatUtilities.js"],
      f["Core/Globals.js"],
      f["Core/Series/Series.js"],
      f["Core/Axis/StackingAxis.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G, u, H, I) {
      var B = C.format,
        z = I.correctFloat,
        p = I.defined,
        m = I.destroyObjectProperties,
        e = I.isArray,
        d = I.isNumber,
        l = I.objectEach,
        h = I.pick,
        t = (function () {
          function a(a, d, e, f, h) {
            var k = a.chart.inverted;
            this.axis = a;
            this.isNegative = e;
            this.options = d = d || {};
            this.x = f;
            this.total = null;
            this.points = {};
            this.hasValidPoints = !1;
            this.stack = h;
            this.rightCliff = this.leftCliff = 0;
            this.alignOptions = {
              align: d.align || (k ? (e ? "left" : "right") : "center"),
              verticalAlign:
                d.verticalAlign || (k ? "middle" : e ? "bottom" : "top"),
              y: d.y,
              x: d.x,
            };
            this.textAlign =
              d.textAlign || (k ? (e ? "right" : "left") : "center");
          }
          a.prototype.destroy = function () {
            m(this, this.axis);
          };
          a.prototype.render = function (a) {
            var d = this.axis.chart,
              e = this.options,
              f = e.format;
            f = f ? B(f, this, d) : e.formatter.call(this);
            this.label
              ? this.label.attr({ text: f, visibility: "hidden" })
              : ((this.label = d.renderer.label(
                  f,
                  null,
                  null,
                  e.shape,
                  null,
                  null,
                  e.useHTML,
                  !1,
                  "stack-labels"
                )),
                (f = {
                  r: e.borderRadius || 0,
                  text: f,
                  rotation: e.rotation,
                  padding: h(e.padding, 5),
                  visibility: "hidden",
                }),
                d.styledMode ||
                  ((f.fill = e.backgroundColor),
                  (f.stroke = e.borderColor),
                  (f["stroke-width"] = e.borderWidth),
                  this.label.css(e.style)),
                this.label.attr(f),
                this.label.added || this.label.add(a));
            this.label.labelrank = d.plotSizeY;
          };
          a.prototype.setOffset = function (a, e, f, l, m) {
            var k = this.axis,
              c = k.chart;
            l = k.translate(
              k.stacking.usePercentage ? 100 : l ? l : this.total,
              0,
              0,
              0,
              1
            );
            f = k.translate(f ? f : 0);
            f = p(l) && Math.abs(l - f);
            a = h(m, c.xAxis[0].translate(this.x)) + a;
            k = p(l) && this.getStackBox(c, this, a, l, e, f, k);
            e = this.label;
            f = this.isNegative;
            a = "justify" === h(this.options.overflow, "justify");
            var g = this.textAlign;
            e &&
              k &&
              ((m = e.getBBox()),
              (l = e.padding),
              (g =
                "left" === g
                  ? c.inverted
                    ? -l
                    : l
                  : "right" === g
                  ? m.width
                  : c.inverted && "center" === g
                  ? m.width / 2
                  : c.inverted
                  ? f
                    ? m.width + l
                    : -l
                  : m.width / 2),
              (f = c.inverted ? m.height / 2 : f ? -l : m.height),
              (this.alignOptions.x = h(this.options.x, 0)),
              (this.alignOptions.y = h(this.options.y, 0)),
              (k.x -= g),
              (k.y -= f),
              e.align(this.alignOptions, null, k),
              c.isInsidePlot(
                e.alignAttr.x + g - this.alignOptions.x,
                e.alignAttr.y + f - this.alignOptions.y
              )
                ? e.show()
                : ((e.alignAttr.y = -9999), (a = !1)),
              a &&
                u.prototype.justifyDataLabel.call(
                  this.axis,
                  e,
                  this.alignOptions,
                  e.alignAttr,
                  m,
                  k
                ),
              e.attr({ x: e.alignAttr.x, y: e.alignAttr.y }),
              h(!a && this.options.crop, !0) &&
                ((c =
                  d(e.x) &&
                  d(e.y) &&
                  c.isInsidePlot(e.x - l + e.width, e.y) &&
                  c.isInsidePlot(e.x + l, e.y)) ||
                  e.hide()));
          };
          a.prototype.getStackBox = function (a, d, e, f, h, k, c) {
            var g = d.axis.reversed,
              b = a.inverted,
              l = c.height + c.pos - (b ? a.plotLeft : a.plotTop);
            d = (d.isNegative && !g) || (!d.isNegative && g);
            return {
              x: b
                ? d
                  ? f - c.right
                  : f - k + c.pos - a.plotLeft
                : e + a.xAxis[0].transB - a.plotLeft,
              y: b ? c.height - e - h : d ? l - f - k : l - f,
              width: b ? k : h,
              height: b ? h : k,
            };
          };
          return a;
        })();
      f.prototype.getStacks = function () {
        var a = this,
          d = a.inverted;
        a.yAxis.forEach(function (a) {
          a.stacking &&
            a.stacking.stacks &&
            a.hasVisibleSeries &&
            (a.stacking.oldStacks = a.stacking.stacks);
        });
        a.series.forEach(function (e) {
          var f = (e.xAxis && e.xAxis.options) || {};
          !e.options.stacking ||
            (!0 !== e.visible && !1 !== a.options.chart.ignoreHiddenSeries) ||
            (e.stackKey = [
              e.type,
              h(e.options.stack, ""),
              d ? f.top : f.left,
              d ? f.height : f.width,
            ].join());
        });
      };
      H.compose(a);
      u.prototype.setGroupedPoints = function () {
        var a = this.yAxis.stacking;
        this.options.centerInCategory &&
        (this.is("column") || this.is("columnrange")) &&
        !this.options.stacking &&
        1 < this.chart.series.length
          ? u.prototype.setStackedPoints.call(this, "group")
          : a &&
            l(a.stacks, function (d, e) {
              "group" === e.slice(-5) &&
                (l(d, function (a) {
                  return a.destroy();
                }),
                delete a.stacks[e]);
            });
      };
      u.prototype.setStackedPoints = function (a) {
        var d = a || this.options.stacking;
        if (
          d &&
          (!0 === this.visible ||
            !1 === this.chart.options.chart.ignoreHiddenSeries)
        ) {
          var f = this.processedXData,
            l = this.processedYData,
            m = [],
            n = l.length,
            k = this.options,
            c = k.threshold,
            g = h(k.startFromThreshold && c, 0);
          k = k.stack;
          a = a ? this.type + "," + d : this.stackKey;
          var b = "-" + a,
            r = this.negStacks,
            x = this.yAxis,
            D = x.stacking.stacks,
            u = x.stacking.oldStacks,
            B,
            F;
          x.stacking.stacksTouched += 1;
          for (F = 0; F < n; F++) {
            var C = f[F];
            var G = l[F];
            var I = this.getStackIndicator(I, C, this.index);
            var H = I.key;
            var J = (B = r && G < (g ? 0 : c)) ? b : a;
            D[J] || (D[J] = {});
            D[J][C] ||
              (u[J] && u[J][C]
                ? ((D[J][C] = u[J][C]), (D[J][C].total = null))
                : (D[J][C] = new t(x, x.options.stackLabels, B, C, k)));
            J = D[J][C];
            null !== G
              ? ((J.points[H] = J.points[this.index] = [h(J.cumulative, g)]),
                p(J.cumulative) || (J.base = H),
                (J.touched = x.stacking.stacksTouched),
                0 < I.index &&
                  !1 === this.singleStacks &&
                  (J.points[H][0] = J.points[this.index + "," + C + ",0"][0]))
              : (J.points[H] = J.points[this.index] = null);
            "percent" === d
              ? ((B = B ? a : b),
                r && D[B] && D[B][C]
                  ? ((B = D[B][C]),
                    (J.total = B.total =
                      Math.max(B.total, J.total) + Math.abs(G) || 0))
                  : (J.total = z(J.total + (Math.abs(G) || 0))))
              : "group" === d
              ? (e(G) && (G = G[0]),
                null !== G && (J.total = (J.total || 0) + 1))
              : (J.total = z(J.total + (G || 0)));
            J.cumulative =
              "group" === d
                ? (J.total || 1) - 1
                : h(J.cumulative, g) + (G || 0);
            null !== G &&
              (J.points[H].push(J.cumulative),
              (m[F] = J.cumulative),
              (J.hasValidPoints = !0));
          }
          "percent" === d && (x.stacking.usePercentage = !0);
          "group" !== d && (this.stackedYData = m);
          x.stacking.oldStacks = {};
        }
      };
      u.prototype.modifyStacks = function () {
        var a = this,
          d = a.stackKey,
          e = a.yAxis.stacking.stacks,
          f = a.processedXData,
          h,
          l = a.options.stacking;
        a[l + "Stacker"] &&
          [d, "-" + d].forEach(function (d) {
            for (var c = f.length, g, b; c--; )
              if (
                ((g = f[c]),
                (h = a.getStackIndicator(h, g, a.index, d)),
                (b = (g = e[d] && e[d][g]) && g.points[h.key]))
              )
                a[l + "Stacker"](b, g, c);
          });
      };
      u.prototype.percentStacker = function (a, d, e) {
        d = d.total ? 100 / d.total : 0;
        a[0] = z(a[0] * d);
        a[1] = z(a[1] * d);
        this.stackedYData[e] = a[1];
      };
      u.prototype.getStackIndicator = function (a, d, e, f) {
        !p(a) || a.x !== d || (f && a.stackKey !== f)
          ? (a = { x: d, index: 0, key: f, stackKey: f })
          : a.index++;
        a.key = [e, d, a.index].join();
        return a;
      };
      G.StackItem = t;
      ("");
      return G.StackItem;
    }
  );
  M(
    f,
    "Series/Line/LineSeries.js",
    [
      f["Core/Series/Series.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C) {
      var F =
          (this && this.__extends) ||
          (function () {
            var a = function (f, z) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, f) {
                    a.__proto__ = f;
                  }) ||
                function (a, f) {
                  for (var e in f) f.hasOwnProperty(e) && (a[e] = f[e]);
                };
              return a(f, z);
            };
            return function (f, z) {
              function p() {
                this.constructor = f;
              }
              a(f, z);
              f.prototype =
                null === z
                  ? Object.create(z)
                  : ((p.prototype = z.prototype), new p());
            };
          })(),
        u = C.defined,
        H = C.merge;
      C = (function (f) {
        function B() {
          var a = (null !== f && f.apply(this, arguments)) || this;
          a.data = void 0;
          a.options = void 0;
          a.points = void 0;
          return a;
        }
        F(B, f);
        B.prototype.drawGraph = function () {
          var a = this,
            f = this.options,
            m = (this.gappedPath || this.getGraphPath).call(this),
            e = this.chart.styledMode,
            d = [["graph", "highcharts-graph"]];
          e || d[0].push(f.lineColor || this.color || "#cccccc", f.dashStyle);
          d = a.getZonesGraphs(d);
          d.forEach(function (d, h) {
            var l = d[0],
              n = a[l],
              p = n ? "animate" : "attr";
            n
              ? ((n.endX = a.preventGraphAnimation ? null : m.xMap),
                n.animate({ d: m }))
              : m.length &&
                (a[l] = n =
                  a.chart.renderer
                    .path(m)
                    .addClass(d[1])
                    .attr({ zIndex: 1 })
                    .add(a.group));
            n &&
              !e &&
              ((l = {
                stroke: d[2],
                "stroke-width": f.lineWidth,
                fill: (a.fillGraph && a.color) || "none",
              }),
              d[3]
                ? (l.dashstyle = d[3])
                : "square" !== f.linecap &&
                  (l["stroke-linecap"] = l["stroke-linejoin"] = "round"),
              n[p](l).shadow(2 > h && f.shadow));
            n && ((n.startX = m.xMap), (n.isArea = m.isArea));
          });
        };
        B.prototype.getGraphPath = function (a, f, m) {
          var e = this,
            d = e.options,
            l = [],
            h = [],
            p,
            n = d.step;
          a = a || e.points;
          var v = a.reversed;
          v && a.reverse();
          (n = { right: 1, center: 2 }[n] || (n && 3)) && v && (n = 4 - n);
          a = this.getValidPoints(a, !1, !(d.connectNulls && !f && !m));
          a.forEach(function (t, y) {
            var A = t.plotX,
              q = t.plotY,
              k = a[y - 1];
            (t.leftCliff || (k && k.rightCliff)) && !m && (p = !0);
            t.isNull && !u(f) && 0 < y
              ? (p = !d.connectNulls)
              : t.isNull && !f
              ? (p = !0)
              : (0 === y || p
                  ? (y = [["M", t.plotX, t.plotY]])
                  : e.getPointSpline
                  ? (y = [e.getPointSpline(a, t, y)])
                  : n
                  ? ((y =
                      1 === n
                        ? [["L", k.plotX, q]]
                        : 2 === n
                        ? [
                            ["L", (k.plotX + A) / 2, k.plotY],
                            ["L", (k.plotX + A) / 2, q],
                          ]
                        : [["L", A, k.plotY]]),
                    y.push(["L", A, q]))
                  : (y = [["L", A, q]]),
                h.push(t.x),
                n && (h.push(t.x), 2 === n && h.push(t.x)),
                l.push.apply(l, y),
                (p = !1));
          });
          l.xMap = h;
          return (e.graphPath = l);
        };
        B.prototype.getZonesGraphs = function (a) {
          this.zones.forEach(function (f, m) {
            m = [
              "zone-graph-" + m,
              "highcharts-graph highcharts-zone-graph-" +
                m +
                " " +
                (f.className || ""),
            ];
            this.chart.styledMode ||
              m.push(
                f.color || this.color,
                f.dashStyle || this.options.dashStyle
              );
            a.push(m);
          }, this);
          return a;
        };
        B.defaultOptions = H(a.defaultOptions, {});
        return B;
      })(a);
      f.registerSeriesType("line", C);
      ("");
      return C;
    }
  );
  M(
    f,
    "Series/Area/AreaSeries.js",
    [
      f["Core/Color/Color.js"],
      f["Core/Legend/LegendSymbol.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G) {
      var u =
          (this && this.__extends) ||
          (function () {
            var a = function (e, d) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, d) {
                    a.__proto__ = d;
                  }) ||
                function (a, d) {
                  for (var e in d) d.hasOwnProperty(e) && (a[e] = d[e]);
                };
              return a(e, d);
            };
            return function (e, d) {
              function f() {
                this.constructor = e;
              }
              a(e, d);
              e.prototype =
                null === d
                  ? Object.create(d)
                  : ((f.prototype = d.prototype), new f());
            };
          })(),
        F = a.parse,
        I = C.seriesTypes.line;
      a = G.extend;
      var B = G.merge,
        z = G.objectEach,
        p = G.pick;
      G = (function (a) {
        function e() {
          var d = (null !== a && a.apply(this, arguments)) || this;
          d.data = void 0;
          d.options = void 0;
          d.points = void 0;
          return d;
        }
        u(e, a);
        e.prototype.drawGraph = function () {
          this.areaPath = [];
          a.prototype.drawGraph.apply(this);
          var d = this,
            e = this.areaPath,
            f = this.options,
            m = [["area", "highcharts-area", this.color, f.fillColor]];
          this.zones.forEach(function (a, e) {
            m.push([
              "zone-area-" + e,
              "highcharts-area highcharts-zone-area-" + e + " " + a.className,
              a.color || d.color,
              a.fillColor || f.fillColor,
            ]);
          });
          m.forEach(function (a) {
            var h = a[0],
              l = d[h],
              m = l ? "animate" : "attr",
              n = {};
            l
              ? ((l.endX = d.preventGraphAnimation ? null : e.xMap),
                l.animate({ d: e }))
              : ((n.zIndex = 0),
                (l = d[h] =
                  d.chart.renderer.path(e).addClass(a[1]).add(d.group)),
                (l.isArea = !0));
            d.chart.styledMode ||
              (n.fill = p(
                a[3],
                F(a[2]).setOpacity(p(f.fillOpacity, 0.75)).get()
              ));
            l[m](n);
            l.startX = e.xMap;
            l.shiftUnit = f.step ? 2 : 1;
          });
        };
        e.prototype.getGraphPath = function (a) {
          var d = I.prototype.getGraphPath,
            e = this.options,
            f = e.stacking,
            m = this.yAxis,
            v,
            w = [],
            y = [],
            A = this.index,
            q = m.stacking.stacks[this.stackKey],
            k = e.threshold,
            c = Math.round(m.getThreshold(e.threshold));
          e = p(e.connectNulls, "percent" === f);
          var g = function (b, d, e) {
            var g = a[b];
            b = f && q[g.x].points[A];
            var h = g[e + "Null"] || 0;
            e = g[e + "Cliff"] || 0;
            g = !0;
            if (e || h) {
              var l = (h ? b[0] : b[1]) + e;
              var n = b[0] + e;
              g = !!h;
            } else !f && a[d] && a[d].isNull && (l = n = k);
            "undefined" !== typeof l &&
              (y.push({
                plotX: r,
                plotY: null === l ? c : m.getThreshold(l),
                isNull: g,
                isCliff: !0,
              }),
              w.push({
                plotX: r,
                plotY: null === n ? c : m.getThreshold(n),
                doCurve: !1,
              }));
          };
          a = a || this.points;
          f && (a = this.getStackPoints(a));
          for (v = 0; v < a.length; v++) {
            f ||
              (a[v].leftCliff =
                a[v].rightCliff =
                a[v].leftNull =
                a[v].rightNull =
                  void 0);
            var b = a[v].isNull;
            var r = p(a[v].rectPlotX, a[v].plotX);
            var x = f ? p(a[v].yBottom, c) : c;
            if (!b || e)
              e || g(v, v - 1, "left"),
                (b && !f && e) ||
                  (y.push(a[v]), w.push({ x: v, plotX: r, plotY: x })),
                e || g(v, v + 1, "right");
          }
          v = d.call(this, y, !0, !0);
          w.reversed = !0;
          b = d.call(this, w, !0, !0);
          (x = b[0]) && "M" === x[0] && (b[0] = ["L", x[1], x[2]]);
          b = v.concat(b);
          b.length && b.push(["Z"]);
          d = d.call(this, y, !1, e);
          b.xMap = v.xMap;
          this.areaPath = b;
          return d;
        };
        e.prototype.getStackPoints = function (a) {
          var d = this,
            e = [],
            f = [],
            m = this.xAxis,
            v = this.yAxis,
            w = v.stacking.stacks[this.stackKey],
            y = {},
            A = v.series,
            q = A.length,
            k = v.options.reversedStacks ? 1 : -1,
            c = A.indexOf(d);
          a = a || this.points;
          if (this.options.stacking) {
            for (var g = 0; g < a.length; g++)
              (a[g].leftNull = a[g].rightNull = void 0), (y[a[g].x] = a[g]);
            z(w, function (a, b) {
              null !== a.total && f.push(b);
            });
            f.sort(function (a, b) {
              return a - b;
            });
            var b = A.map(function (a) {
              return a.visible;
            });
            f.forEach(function (a, g) {
              var h = 0,
                l,
                n;
              if (y[a] && !y[a].isNull)
                e.push(y[a]),
                  [-1, 1].forEach(function (e) {
                    var h = 1 === e ? "rightNull" : "leftNull",
                      m = 0,
                      p = w[f[g + e]];
                    if (p)
                      for (var r = c; 0 <= r && r < q; ) {
                        var t = A[r].index;
                        l = p.points[t];
                        l ||
                          (t === d.index
                            ? (y[a][h] = !0)
                            : b[r] &&
                              (n = w[a].points[t]) &&
                              (m -= n[1] - n[0]));
                        r += k;
                      }
                    y[a][1 === e ? "rightCliff" : "leftCliff"] = m;
                  });
              else {
                for (var r = c; 0 <= r && r < q; ) {
                  if ((l = w[a].points[A[r].index])) {
                    h = l[1];
                    break;
                  }
                  r += k;
                }
                h = p(h, 0);
                h = v.translate(h, 0, 1, 0, 1);
                e.push({
                  isNull: !0,
                  plotX: m.translate(a, 0, 0, 0, 1),
                  x: a,
                  plotY: h,
                  yBottom: h,
                });
              }
            });
          }
          return e;
        };
        e.defaultOptions = B(I.defaultOptions, { threshold: 0 });
        return e;
      })(I);
      a(G.prototype, { singleStacks: !1, drawLegendSymbol: f.drawRectangle });
      C.registerSeriesType("area", G);
      ("");
      return G;
    }
  );
  M(
    f,
    "Series/Spline/SplineSeries.js",
    [f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]],
    function (a, f) {
      var F =
          (this && this.__extends) ||
          (function () {
            var a = function (f, z) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, f) {
                    a.__proto__ = f;
                  }) ||
                function (a, f) {
                  for (var e in f) f.hasOwnProperty(e) && (a[e] = f[e]);
                };
              return a(f, z);
            };
            return function (f, z) {
              function p() {
                this.constructor = f;
              }
              a(f, z);
              f.prototype =
                null === z
                  ? Object.create(z)
                  : ((p.prototype = z.prototype), new p());
            };
          })(),
        G = a.seriesTypes.line,
        u = f.merge,
        H = f.pick;
      f = (function (a) {
        function f() {
          var f = (null !== a && a.apply(this, arguments)) || this;
          f.data = void 0;
          f.options = void 0;
          f.points = void 0;
          return f;
        }
        F(f, a);
        f.prototype.getPointSpline = function (a, f, m) {
          var e = f.plotX || 0,
            d = f.plotY || 0,
            l = a[m - 1];
          m = a[m + 1];
          if (
            l &&
            !l.isNull &&
            !1 !== l.doCurve &&
            !f.isCliff &&
            m &&
            !m.isNull &&
            !1 !== m.doCurve &&
            !f.isCliff
          ) {
            a = l.plotY || 0;
            var h = m.plotX || 0;
            m = m.plotY || 0;
            var p = 0;
            var n = (1.5 * e + (l.plotX || 0)) / 2.5;
            var v = (1.5 * d + a) / 2.5;
            h = (1.5 * e + h) / 2.5;
            var w = (1.5 * d + m) / 2.5;
            h !== n && (p = ((w - v) * (h - e)) / (h - n) + d - w);
            v += p;
            w += p;
            v > a && v > d
              ? ((v = Math.max(a, d)), (w = 2 * d - v))
              : v < a && v < d && ((v = Math.min(a, d)), (w = 2 * d - v));
            w > m && w > d
              ? ((w = Math.max(m, d)), (v = 2 * d - w))
              : w < m && w < d && ((w = Math.min(m, d)), (v = 2 * d - w));
            f.rightContX = h;
            f.rightContY = w;
          }
          f = [
            "C",
            H(l.rightContX, l.plotX, 0),
            H(l.rightContY, l.plotY, 0),
            H(n, e, 0),
            H(v, d, 0),
            e,
            d,
          ];
          l.rightContX = l.rightContY = void 0;
          return f;
        };
        f.defaultOptions = u(G.defaultOptions);
        return f;
      })(G);
      a.registerSeriesType("spline", f);
      ("");
      return f;
    }
  );
  M(
    f,
    "Series/AreaSpline/AreaSplineSeries.js",
    [
      f["Series/Area/AreaSeries.js"],
      f["Series/Spline/SplineSeries.js"],
      f["Core/Legend/LegendSymbol.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G, u) {
      var F =
          (this && this.__extends) ||
          (function () {
            var a = function (f, e) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, e) {
                    a.__proto__ = e;
                  }) ||
                function (a, e) {
                  for (var d in e) e.hasOwnProperty(d) && (a[d] = e[d]);
                };
              return a(f, e);
            };
            return function (f, e) {
              function d() {
                this.constructor = f;
              }
              a(f, e);
              f.prototype =
                null === e
                  ? Object.create(e)
                  : ((d.prototype = e.prototype), new d());
            };
          })(),
        I = a.prototype,
        B = u.extend,
        z = u.merge;
      u = (function (p) {
        function m() {
          var a = (null !== p && p.apply(this, arguments)) || this;
          a.data = void 0;
          a.points = void 0;
          a.options = void 0;
          return a;
        }
        F(m, p);
        m.defaultOptions = z(f.defaultOptions, a.defaultOptions);
        return m;
      })(f);
      B(u.prototype, {
        getGraphPath: I.getGraphPath,
        getStackPoints: I.getStackPoints,
        drawGraph: I.drawGraph,
        drawLegendSymbol: C.drawRectangle,
      });
      G.registerSeriesType("areaspline", u);
      ("");
      return u;
    }
  );
  M(
    f,
    "Series/Column/ColumnSeries.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/Color/Color.js"],
      f["Core/Globals.js"],
      f["Core/Legend/LegendSymbol.js"],
      f["Core/Series/Series.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G, u, H, I) {
      var B =
          (this && this.__extends) ||
          (function () {
            var a = function (d, c) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, b) {
                    a.__proto__ = b;
                  }) ||
                function (a, b) {
                  for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                };
              return a(d, c);
            };
            return function (d, c) {
              function e() {
                this.constructor = d;
              }
              a(d, c);
              d.prototype =
                null === c
                  ? Object.create(c)
                  : ((e.prototype = c.prototype), new e());
            };
          })(),
        z = a.animObject,
        p = f.parse,
        m = C.hasTouch;
      a = C.noop;
      var e = I.clamp,
        d = I.css,
        l = I.defined,
        h = I.extend,
        t = I.fireEvent,
        n = I.isArray,
        v = I.isNumber,
        w = I.merge,
        y = I.pick,
        A = I.objectEach;
      I = (function (a) {
        function f() {
          var c = (null !== a && a.apply(this, arguments)) || this;
          c.borderWidth = void 0;
          c.data = void 0;
          c.group = void 0;
          c.options = void 0;
          c.points = void 0;
          return c;
        }
        B(f, a);
        f.prototype.animate = function (a) {
          var c = this,
            b = this.yAxis,
            d = c.options,
            f = this.chart.inverted,
            k = {},
            l = f ? "translateX" : "translateY";
          if (a)
            (k.scaleY = 0.001),
              (a = e(b.toPixels(d.threshold), b.pos, b.pos + b.len)),
              f ? (k.translateX = a - b.len) : (k.translateY = a),
              c.clipBox && c.setClip(),
              c.group.attr(k);
          else {
            var m = Number(c.group.attr(l));
            c.group.animate(
              { scaleY: 1 },
              h(z(c.options.animation), {
                step: function (a, d) {
                  c.group &&
                    ((k[l] = m + d.pos * (b.pos - m)), c.group.attr(k));
                },
              })
            );
          }
        };
        f.prototype.init = function (c, d) {
          a.prototype.init.apply(this, arguments);
          var b = this;
          c = b.chart;
          c.hasRendered &&
            c.series.forEach(function (a) {
              a.type === b.type && (a.isDirty = !0);
            });
        };
        f.prototype.getColumnMetrics = function () {
          var a = this,
            d = a.options,
            b = a.xAxis,
            e = a.yAxis,
            f = b.options.reversedStacks;
          f = (b.reversed && !f) || (!b.reversed && f);
          var k = {},
            h,
            l = 0;
          !1 === d.grouping
            ? (l = 1)
            : a.chart.series.forEach(function (b) {
                var c = b.yAxis,
                  d = b.options;
                if (
                  b.type === a.type &&
                  (b.visible || !a.chart.options.chart.ignoreHiddenSeries) &&
                  e.len === c.len &&
                  e.pos === c.pos
                ) {
                  if (d.stacking && "group" !== d.stacking) {
                    h = b.stackKey;
                    "undefined" === typeof k[h] && (k[h] = l++);
                    var f = k[h];
                  } else !1 !== d.grouping && (f = l++);
                  b.columnIndex = f;
                }
              });
          var m = Math.min(
              Math.abs(b.transA) *
                ((b.ordinal && b.ordinal.slope) ||
                  d.pointRange ||
                  b.closestPointRange ||
                  b.tickInterval ||
                  1),
              b.len
            ),
            n = m * d.groupPadding,
            q = (m - 2 * n) / (l || 1);
          d = Math.min(
            d.maxPointWidth || b.len,
            y(d.pointWidth, q * (1 - 2 * d.pointPadding))
          );
          a.columnMetrics = {
            width: d,
            offset:
              (q - d) / 2 +
              (n + ((a.columnIndex || 0) + (f ? 1 : 0)) * q - m / 2) *
                (f ? -1 : 1),
            paddedWidth: q,
            columnCount: l,
          };
          return a.columnMetrics;
        };
        f.prototype.crispCol = function (a, d, b, e) {
          var c = this.chart,
            f = this.borderWidth,
            g = -(f % 2 ? 0.5 : 0);
          f = f % 2 ? 0.5 : 1;
          c.inverted && c.renderer.isVML && (f += 1);
          this.options.crisp &&
            ((b = Math.round(a + b) + g), (a = Math.round(a) + g), (b -= a));
          e = Math.round(d + e) + f;
          g = 0.5 >= Math.abs(d) && 0.5 < e;
          d = Math.round(d) + f;
          e -= d;
          g && e && (--d, (e += 1));
          return { x: a, y: d, width: b, height: e };
        };
        f.prototype.adjustForMissingColumns = function (a, d, b, e) {
          var c = this,
            f = this.options.stacking;
          if (!b.isNull && 1 < e.columnCount) {
            var g = this.yAxis.options.reversedStacks,
              k = 0,
              h = g ? 0 : -e.columnCount;
            A(this.yAxis.stacking && this.yAxis.stacking.stacks, function (a) {
              if ("number" === typeof b.x && (a = a[b.x.toString()])) {
                var d = a.points[c.index],
                  e = a.total;
                f
                  ? (d && (k = h), a.hasValidPoints && (g ? h++ : h--))
                  : n(d) && ((k = d[1]), (h = e || 0));
              }
            });
            a =
              (b.plotX || 0) +
              ((h - 1) * e.paddedWidth + d) / 2 -
              d -
              k * e.paddedWidth;
          }
          return a;
        };
        f.prototype.translate = function () {
          var a = this,
            d = a.chart,
            b = a.options,
            f = (a.dense = 2 > a.closestPointRange * a.xAxis.transA);
          f = a.borderWidth = y(b.borderWidth, f ? 0 : 1);
          var k = a.xAxis,
            h = a.yAxis,
            m = b.threshold,
            n = (a.translatedThreshold = h.getThreshold(m)),
            q = y(b.minPointLength, 5),
            p = a.getColumnMetrics(),
            t = p.width,
            A = (a.pointXOffset = p.offset),
            w = a.dataMin,
            z = a.dataMax,
            B = (a.barW = Math.max(t, 1 + 2 * f));
          d.inverted && (n -= 0.5);
          b.pointPadding && (B = Math.ceil(B));
          u.prototype.translate.apply(a);
          a.points.forEach(function (c) {
            var f = y(c.yBottom, n),
              g = 999 + Math.abs(f),
              r = c.plotX || 0;
            g = e(c.plotY, -g, h.len + g);
            var x = Math.min(g, f),
              D = Math.max(g, f) - x,
              u = t,
              F = r + A,
              C = B;
            q &&
              Math.abs(D) < q &&
              ((D = q),
              (r = (!h.reversed && !c.negative) || (h.reversed && c.negative)),
              v(m) &&
                v(z) &&
                c.y === m &&
                z <= m &&
                (h.min || 0) < m &&
                (w !== z || (h.max || 0) <= m) &&
                (r = !r),
              (x = Math.abs(x - n) > q ? f - q : n - (r ? q : 0)));
            l(c.options.pointWidth) &&
              ((u = C = Math.ceil(c.options.pointWidth)),
              (F -= Math.round((u - t) / 2)));
            b.centerInCategory && (F = a.adjustForMissingColumns(F, u, c, p));
            c.barX = F;
            c.pointWidth = u;
            c.tooltipPos = d.inverted
              ? [
                  e(
                    h.len + h.pos - d.plotLeft - g,
                    h.pos - d.plotLeft,
                    h.len + h.pos - d.plotLeft
                  ),
                  k.len + k.pos - d.plotTop - F - C / 2,
                  D,
                ]
              : [
                  k.left - d.plotLeft + F + C / 2,
                  e(
                    g + h.pos - d.plotTop,
                    h.pos - d.plotTop,
                    h.len + h.pos - d.plotTop
                  ),
                  D,
                ];
            c.shapeType = a.pointClass.prototype.shapeType || "rect";
            c.shapeArgs = a.crispCol.apply(
              a,
              c.isNull ? [F, n, C, 0] : [F, x, C, D]
            );
          });
        };
        f.prototype.drawGraph = function () {
          this.group[this.dense ? "addClass" : "removeClass"](
            "highcharts-dense-data"
          );
        };
        f.prototype.pointAttribs = function (a, d) {
          var b = this.options,
            c = this.pointAttrToOptions || {},
            e = c.stroke || "borderColor",
            f = c["stroke-width"] || "borderWidth",
            g = (a && a.color) || this.color,
            k = (a && a[e]) || b[e] || g;
          c = (a && a.options.dashStyle) || b.dashStyle;
          var h = (a && a[f]) || b[f] || this[f] || 0,
            l = y(a && a.opacity, b.opacity, 1);
          if (a && this.zones.length) {
            var m = a.getZone();
            g =
              a.options.color ||
              (m && (m.color || a.nonZonedColor)) ||
              this.color;
            m &&
              ((k = m.borderColor || k),
              (c = m.dashStyle || c),
              (h = m.borderWidth || h));
          }
          d &&
            a &&
            ((a = w(
              b.states[d],
              (a.options.states && a.options.states[d]) || {}
            )),
            (d = a.brightness),
            (g =
              a.color ||
              ("undefined" !== typeof d && p(g).brighten(a.brightness).get()) ||
              g),
            (k = a[e] || k),
            (h = a[f] || h),
            (c = a.dashStyle || c),
            (l = y(a.opacity, l)));
          e = { fill: g, stroke: k, "stroke-width": h, opacity: l };
          c && (e.dashstyle = c);
          return e;
        };
        f.prototype.drawPoints = function () {
          var a = this,
            d = this.chart,
            b = a.options,
            e = d.renderer,
            f = b.animationLimit || 250,
            k;
          a.points.forEach(function (c) {
            var g = c.graphic,
              h = !!g,
              l = g && d.pointCount < f ? "animate" : "attr";
            if (v(c.plotY) && null !== c.y) {
              k = c.shapeArgs;
              g && c.hasNewShapeType() && (g = g.destroy());
              a.enabledDataSorting &&
                (c.startXPos = a.xAxis.reversed
                  ? -(k ? k.width || 0 : 0)
                  : a.xAxis.width);
              g ||
                ((c.graphic = g = e[c.shapeType](k).add(c.group || a.group)) &&
                  a.enabledDataSorting &&
                  d.hasRendered &&
                  d.pointCount < f &&
                  (g.attr({ x: c.startXPos }), (h = !0), (l = "animate")));
              if (g && h) g[l](w(k));
              if (b.borderRadius) g[l]({ r: b.borderRadius });
              d.styledMode ||
                g[l](a.pointAttribs(c, c.selected && "select")).shadow(
                  !1 !== c.allowShadow && b.shadow,
                  null,
                  b.stacking && !b.borderRadius
                );
              g &&
                (g.addClass(c.getClassName(), !0),
                g.attr({ visibility: c.visible ? "inherit" : "hidden" }));
            } else g && (c.graphic = g.destroy());
          });
        };
        f.prototype.drawTracker = function () {
          var a = this,
            e = a.chart,
            b = e.pointer,
            f = function (a) {
              var c = b.getPointFromEvent(a);
              "undefined" !== typeof c &&
                ((b.isDirectTouch = !0), c.onMouseOver(a));
            },
            k;
          a.points.forEach(function (a) {
            k = n(a.dataLabels)
              ? a.dataLabels
              : a.dataLabel
              ? [a.dataLabel]
              : [];
            a.graphic && (a.graphic.element.point = a);
            k.forEach(function (b) {
              b.div ? (b.div.point = a) : (b.element.point = a);
            });
          });
          a._hasTracking ||
            (a.trackerGroups.forEach(function (c) {
              if (a[c]) {
                a[c]
                  .addClass("highcharts-tracker")
                  .on("mouseover", f)
                  .on("mouseout", function (a) {
                    b.onTrackerMouseOut(a);
                  });
                if (m) a[c].on("touchstart", f);
                !e.styledMode &&
                  a.options.cursor &&
                  a[c].css(d).css({ cursor: a.options.cursor });
              }
            }),
            (a._hasTracking = !0));
          t(this, "afterDrawTracker");
        };
        f.prototype.remove = function () {
          var a = this,
            d = a.chart;
          d.hasRendered &&
            d.series.forEach(function (b) {
              b.type === a.type && (b.isDirty = !0);
            });
          u.prototype.remove.apply(a, arguments);
        };
        f.defaultOptions = w(u.defaultOptions, {
          borderRadius: 0,
          centerInCategory: !1,
          groupPadding: 0.2,
          marker: null,
          pointPadding: 0.1,
          minPointLength: 0,
          cropThreshold: 50,
          pointRange: null,
          states: {
            hover: { halo: !1, brightness: 0.1 },
            select: { color: "#cccccc", borderColor: "#000000" },
          },
          dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 },
          startFromThreshold: !0,
          stickyTracking: !1,
          tooltip: { distance: 6 },
          threshold: 0,
          borderColor: "#ffffff",
        });
        return f;
      })(u);
      h(I.prototype, {
        cropShoulder: 0,
        directTouch: !0,
        drawLegendSymbol: G.drawRectangle,
        getSymbol: a,
        negStacks: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
      });
      H.registerSeriesType("column", I);
      ("");
      ("");
      return I;
    }
  );
  M(
    f,
    "Core/Series/DataLabel.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/FormatUtilities.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C) {
      var F = a.getDeferredAnimation,
        u = f.format,
        H = C.defined,
        I = C.extend,
        B = C.fireEvent,
        z = C.isArray,
        p = C.merge,
        m = C.objectEach,
        e = C.pick,
        d = C.splat,
        l;
      (function (a) {
        function f(a, c, d, b, f) {
          var g = this,
            k = this.chart,
            h = this.isCartesian && k.inverted,
            l = this.enabledDataSorting,
            m = e(a.dlBox && a.dlBox.centerX, a.plotX, -9999),
            n = e(a.plotY, -9999),
            q = c.getBBox(),
            p = d.rotation,
            r = d.align,
            t = k.isInsidePlot(m, Math.round(n), {
              inverted: h,
              paneCoordinates: !0,
              series: g,
            }),
            A = function (b) {
              l && g.xAxis && !y && g.setDataLabelStartPos(a, c, f, t, b);
            },
            y = "justify" === e(d.overflow, l ? "none" : "justify"),
            w =
              this.visible &&
              !1 !== a.visible &&
              (a.series.forceDL ||
                (l && !y) ||
                t ||
                (e(d.inside, !!this.options.stacking) &&
                  b &&
                  k.isInsidePlot(m, h ? b.x + 1 : b.y + b.height - 1, {
                    inverted: h,
                    paneCoordinates: !0,
                    series: g,
                  })));
          if (w) {
            var v = k.renderer.fontMetrics(
              k.styledMode ? void 0 : d.style.fontSize,
              c
            ).b;
            b = I(
              {
                x: h ? this.yAxis.len - n : m,
                y: Math.round(h ? this.xAxis.len - m : n),
                width: 0,
                height: 0,
              },
              b
            );
            I(d, { width: q.width, height: q.height });
            p
              ? ((y = !1),
                (m = k.renderer.rotCorr(v, p)),
                (m = {
                  x: b.x + (d.x || 0) + b.width / 2 + m.x,
                  y:
                    b.y +
                    (d.y || 0) +
                    { top: 0, middle: 0.5, bottom: 1 }[d.verticalAlign] *
                      b.height,
                }),
                A(m),
                c[f ? "attr" : "animate"](m).attr({ align: r }),
                (A = (p + 720) % 360),
                (A = 180 < A && 360 > A),
                "left" === r
                  ? (m.y -= A ? q.height : 0)
                  : "center" === r
                  ? ((m.x -= q.width / 2), (m.y -= q.height / 2))
                  : "right" === r &&
                    ((m.x -= q.width), (m.y -= A ? 0 : q.height)),
                (c.placed = !0),
                (c.alignAttr = m))
              : (A(b), c.align(d, void 0, b), (m = c.alignAttr));
            y && 0 <= b.height
              ? this.justifyDataLabel(c, d, m, q, b, f)
              : e(d.crop, !0) &&
                (w =
                  k.isInsidePlot(m.x, m.y, {
                    paneCoordinates: !0,
                    series: g,
                  }) &&
                  k.isInsidePlot(m.x + q.width, m.y + q.height, {
                    paneCoordinates: !0,
                    series: g,
                  }));
            if (d.shape && !p)
              c[f ? "attr" : "animate"]({
                anchorX: h ? k.plotWidth - a.plotY : a.plotX,
                anchorY: h ? k.plotHeight - a.plotX : a.plotY,
              });
          }
          f && l && (c.placed = !1);
          w || (l && !y) || (c.hide(!0), (c.placed = !1));
        }
        function h(a, c) {
          var d = c.filter;
          return d
            ? ((c = d.operator),
              (a = a[d.property]),
              (d = d.value),
              (">" === c && a > d) ||
              ("<" === c && a < d) ||
              (">=" === c && a >= d) ||
              ("<=" === c && a <= d) ||
              ("==" === c && a == d) ||
              ("===" === c && a === d)
                ? !0
                : !1)
            : !0;
        }
        function l() {
          var a = this,
            c = a.chart,
            f = a.options,
            b = a.points,
            l = a.hasRendered || 0,
            n = c.renderer,
            q = f.dataLabels,
            p,
            t = q.animation;
          t = q.defer ? F(c, t, a) : { defer: 0, duration: 0 };
          q = y(
            y(
              c.options.plotOptions &&
                c.options.plotOptions.series &&
                c.options.plotOptions.series.dataLabels,
              c.options.plotOptions &&
                c.options.plotOptions[a.type] &&
                c.options.plotOptions[a.type].dataLabels
            ),
            q
          );
          B(this, "drawDataLabels");
          if (z(q) || q.enabled || a._hasPointLabels) {
            var A = a.plotGroup(
              "dataLabelsGroup",
              "data-labels",
              l ? "inherit" : "hidden",
              q.zIndex || 6
            );
            A.attr({ opacity: +l });
            !l &&
              (l = a.dataLabelsGroup) &&
              (a.visible && A.show(!0),
              l[f.animation ? "animate" : "attr"]({ opacity: 1 }, t));
            b.forEach(function (b) {
              p = d(y(q, b.dlOptions || (b.options && b.options.dataLabels)));
              p.forEach(function (d, g) {
                var k =
                    d.enabled && (!b.isNull || b.dataLabelOnNull) && h(b, d),
                  l = b.connectors ? b.connectors[g] : b.connector,
                  q = b.dataLabels ? b.dataLabels[g] : b.dataLabel,
                  p = !q,
                  r = e(d.distance, b.labelDistance);
                if (k) {
                  var t = b.getLabelConfig();
                  var y = e(d[b.formatPrefix + "Format"], d.format);
                  t = H(y)
                    ? u(y, t, c)
                    : (d[b.formatPrefix + "Formatter"] || d.formatter).call(
                        t,
                        d
                      );
                  y = d.style;
                  var x = d.rotation;
                  c.styledMode ||
                    ((y.color = e(d.color, y.color, a.color, "#000000")),
                    "contrast" === y.color
                      ? ((b.contrastColor = n.getContrast(b.color || a.color)),
                        (y.color =
                          (!H(r) && d.inside) || 0 > r || f.stacking
                            ? b.contrastColor
                            : "#000000"))
                      : delete b.contrastColor,
                    f.cursor && (y.cursor = f.cursor));
                  var w = {
                    r: d.borderRadius || 0,
                    rotation: x,
                    padding: d.padding,
                    zIndex: 1,
                  };
                  c.styledMode ||
                    ((w.fill = d.backgroundColor),
                    (w.stroke = d.borderColor),
                    (w["stroke-width"] = d.borderWidth));
                  m(w, function (a, b) {
                    "undefined" === typeof a && delete w[b];
                  });
                }
                !q ||
                  (k &&
                    H(t) &&
                    !!q.div === !!d.useHTML &&
                    ((q.rotation && d.rotation) ||
                      q.rotation === d.rotation)) ||
                  ((p = !0),
                  (b.dataLabel = q = b.dataLabel && b.dataLabel.destroy()),
                  b.dataLabels &&
                    (1 === b.dataLabels.length
                      ? delete b.dataLabels
                      : delete b.dataLabels[g]),
                  g || delete b.dataLabel,
                  l &&
                    ((b.connector = b.connector.destroy()),
                    b.connectors &&
                      (1 === b.connectors.length
                        ? delete b.connectors
                        : delete b.connectors[g])));
                k &&
                  H(t) &&
                  (q
                    ? (w.text = t)
                    : ((b.dataLabels = b.dataLabels || []),
                      (q = b.dataLabels[g] =
                        x
                          ? n
                              .text(t, 0, -9999, d.useHTML)
                              .addClass("highcharts-data-label")
                          : n.label(
                              t,
                              0,
                              -9999,
                              d.shape,
                              null,
                              null,
                              d.useHTML,
                              null,
                              "data-label"
                            )),
                      g || (b.dataLabel = q),
                      q.addClass(
                        " highcharts-data-label-color-" +
                          b.colorIndex +
                          " " +
                          (d.className || "") +
                          (d.useHTML ? " highcharts-tracker" : "")
                      )),
                  (q.options = d),
                  q.attr(w),
                  c.styledMode || q.css(y).shadow(d.shadow),
                  q.added || q.add(A),
                  d.textPath &&
                    !d.useHTML &&
                    (q.setTextPath(
                      (b.getDataLabelPath && b.getDataLabelPath(q)) ||
                        b.graphic,
                      d.textPath
                    ),
                    b.dataLabelPath &&
                      !d.textPath.enabled &&
                      (b.dataLabelPath = b.dataLabelPath.destroy())),
                  a.alignDataLabel(b, q, d, null, p));
              });
            });
          }
          B(this, "afterDrawDataLabels");
        }
        function w(a, c, d, b, e, f) {
          var g = this.chart,
            h = c.align,
            k = c.verticalAlign,
            l = a.box ? 0 : a.padding || 0,
            m = c.x;
          m = void 0 === m ? 0 : m;
          var q = c.y;
          q = void 0 === q ? 0 : q;
          var n = (d.x || 0) + l;
          if (0 > n) {
            "right" === h && 0 <= m
              ? ((c.align = "left"), (c.inside = !0))
              : (m -= n);
            var p = !0;
          }
          n = (d.x || 0) + b.width - l;
          n > g.plotWidth &&
            ("left" === h && 0 >= m
              ? ((c.align = "right"), (c.inside = !0))
              : (m += g.plotWidth - n),
            (p = !0));
          n = d.y + l;
          0 > n &&
            ("bottom" === k && 0 <= q
              ? ((c.verticalAlign = "top"), (c.inside = !0))
              : (q -= n),
            (p = !0));
          n = (d.y || 0) + b.height - l;
          n > g.plotHeight &&
            ("top" === k && 0 >= q
              ? ((c.verticalAlign = "bottom"), (c.inside = !0))
              : (q += g.plotHeight - n),
            (p = !0));
          p && ((c.x = m), (c.y = q), (a.placed = !f), a.align(c, void 0, e));
          return p;
        }
        function y(a, c) {
          var d = [],
            b;
          if (z(a) && !z(c))
            d = a.map(function (a) {
              return p(a, c);
            });
          else if (z(c) && !z(a))
            d = c.map(function (b) {
              return p(a, b);
            });
          else if (z(a) || z(c))
            for (b = Math.max(a.length, c.length); b--; ) d[b] = p(a[b], c[b]);
          else d = p(a, c);
          return d;
        }
        function A(a, c, d, b, e) {
          var f = this.chart,
            g = f.inverted,
            h = this.xAxis,
            k = h.reversed,
            l = g ? c.height / 2 : c.width / 2;
          a = (a = a.pointWidth) ? a / 2 : 0;
          c.startXPos = g ? e.x : k ? -l - a : h.width - l + a;
          c.startYPos = g ? (k ? this.yAxis.height - l + a : -l - a) : e.y;
          b
            ? "hidden" === c.visibility &&
              (c.show(), c.attr({ opacity: 0 }).animate({ opacity: 1 }))
            : c.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, c.hide);
          f.hasRendered &&
            (d && c.attr({ x: c.startXPos, y: c.startYPos }), (c.placed = !0));
        }
        var q = [];
        a.compose = function (a) {
          if (-1 === q.indexOf(a)) {
            var c = a.prototype;
            q.push(a);
            c.alignDataLabel = f;
            c.drawDataLabels = l;
            c.justifyDataLabel = w;
            c.setDataLabelStartPos = A;
          }
        };
      })(l || (l = {}));
      ("");
      return l;
    }
  );
  M(
    f,
    "Series/Column/ColumnDataLabel.js",
    [
      f["Core/Series/DataLabel.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C) {
      var F = f.series,
        u = C.merge,
        H = C.pick,
        I;
      (function (f) {
        function z(a, e, d, f, h) {
          var l = this.chart.inverted,
            m = a.series,
            p = (m.xAxis ? m.xAxis.len : this.chart.plotSizeX) || 0;
          m = (m.yAxis ? m.yAxis.len : this.chart.plotSizeY) || 0;
          var w = a.dlBox || a.shapeArgs,
            y = H(a.below, a.plotY > H(this.translatedThreshold, m)),
            A = H(d.inside, !!this.options.stacking);
          w &&
            ((f = u(w)),
            0 > f.y && ((f.height += f.y), (f.y = 0)),
            (w = f.y + f.height - m),
            0 < w && w < f.height && (f.height -= w),
            l &&
              (f = {
                x: m - f.y - f.height,
                y: p - f.x - f.width,
                width: f.height,
                height: f.width,
              }),
            A ||
              (l
                ? ((f.x += y ? 0 : f.width), (f.width = 0))
                : ((f.y += y ? f.height : 0), (f.height = 0))));
          d.align = H(d.align, !l || A ? "center" : y ? "right" : "left");
          d.verticalAlign = H(
            d.verticalAlign,
            l || A ? "middle" : y ? "top" : "bottom"
          );
          F.prototype.alignDataLabel.call(this, a, e, d, f, h);
          d.inside && a.contrastColor && e.css({ color: a.contrastColor });
        }
        var p = [];
        f.compose = function (f) {
          a.compose(F);
          -1 === p.indexOf(f) && (p.push(f), (f.prototype.alignDataLabel = z));
        };
      })(I || (I = {}));
      return I;
    }
  );
  M(
    f,
    "Series/Bar/BarSeries.js",
    [
      f["Series/Column/ColumnSeries.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C) {
      var F =
          (this && this.__extends) ||
          (function () {
            var a = function (f, u) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, f) {
                    a.__proto__ = f;
                  }) ||
                function (a, f) {
                  for (var e in f) f.hasOwnProperty(e) && (a[e] = f[e]);
                };
              return a(f, u);
            };
            return function (f, u) {
              function p() {
                this.constructor = f;
              }
              a(f, u);
              f.prototype =
                null === u
                  ? Object.create(u)
                  : ((p.prototype = u.prototype), new p());
            };
          })(),
        u = C.extend,
        H = C.merge;
      C = (function (f) {
        function u() {
          var a = (null !== f && f.apply(this, arguments)) || this;
          a.data = void 0;
          a.options = void 0;
          a.points = void 0;
          return a;
        }
        F(u, f);
        u.defaultOptions = H(a.defaultOptions, {});
        return u;
      })(a);
      u(C.prototype, { inverted: !0 });
      f.registerSeriesType("bar", C);
      ("");
      return C;
    }
  );
  M(
    f,
    "Series/Scatter/ScatterSeries.js",
    [
      f["Series/Column/ColumnSeries.js"],
      f["Series/Line/LineSeries.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G) {
      var u =
          (this && this.__extends) ||
          (function () {
            var a = function (f, m) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, d) {
                    a.__proto__ = d;
                  }) ||
                function (a, d) {
                  for (var e in d) d.hasOwnProperty(e) && (a[e] = d[e]);
                };
              return a(f, m);
            };
            return function (f, m) {
              function e() {
                this.constructor = f;
              }
              a(f, m);
              f.prototype =
                null === m
                  ? Object.create(m)
                  : ((e.prototype = m.prototype), new e());
            };
          })(),
        F = G.addEvent,
        I = G.extend,
        B = G.merge;
      G = (function (a) {
        function p() {
          var f = (null !== a && a.apply(this, arguments)) || this;
          f.data = void 0;
          f.options = void 0;
          f.points = void 0;
          return f;
        }
        u(p, a);
        p.prototype.applyJitter = function () {
          var a = this,
            e = this.options.jitter,
            d = this.points.length;
          e &&
            this.points.forEach(function (f, h) {
              ["x", "y"].forEach(function (l, m) {
                var n = "plot" + l.toUpperCase();
                if (e[l] && !f.isNull) {
                  var p = a[l + "Axis"];
                  var t = e[l] * p.transA;
                  if (p && !p.isLog) {
                    var A = Math.max(0, f[n] - t);
                    p = Math.min(p.len, f[n] + t);
                    m = 1e4 * Math.sin(h + m * d);
                    f[n] = A + (p - A) * (m - Math.floor(m));
                    "x" === l && (f.clientX = f.plotX);
                  }
                }
              });
            });
        };
        p.prototype.drawGraph = function () {
          this.options.lineWidth
            ? a.prototype.drawGraph.call(this)
            : this.graph && (this.graph = this.graph.destroy());
        };
        p.defaultOptions = B(f.defaultOptions, {
          lineWidth: 0,
          findNearestPointBy: "xy",
          jitter: { x: 0, y: 0 },
          marker: { enabled: !0 },
          tooltip: {
            headerFormat:
              '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>",
          },
        });
        return p;
      })(f);
      I(G.prototype, {
        drawTracker: a.prototype.drawTracker,
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
        takeOrdinalPosition: !1,
      });
      F(G, "afterTranslate", function () {
        this.applyJitter();
      });
      C.registerSeriesType("scatter", G);
      ("");
      return G;
    }
  );
  M(
    f,
    "Series/CenteredUtilities.js",
    [f["Core/Globals.js"], f["Core/Series/Series.js"], f["Core/Utilities.js"]],
    function (a, f, C) {
      var F = a.deg2rad,
        u = C.isNumber,
        H = C.pick,
        I = C.relativeLength,
        B;
      (function (a) {
        a.getCenter = function () {
          var a = this.options,
            m = this.chart,
            e = 2 * (a.slicedOffset || 0),
            d = m.plotWidth - 2 * e,
            l = m.plotHeight - 2 * e,
            h = a.center,
            t = Math.min(d, l),
            n = a.size,
            v = a.innerSize || 0;
          "string" === typeof n && (n = parseFloat(n));
          "string" === typeof v && (v = parseFloat(v));
          a = [
            H(h[0], "50%"),
            H(h[1], "50%"),
            H(n && 0 > n ? void 0 : a.size, "100%"),
            H(v && 0 > v ? void 0 : a.innerSize || 0, "0%"),
          ];
          !m.angular || this instanceof f || (a[3] = 0);
          for (h = 0; 4 > h; ++h)
            (n = a[h]),
              (m = 2 > h || (2 === h && /%$/.test(n))),
              (a[h] = I(n, [d, l, t, a[2]][h]) + (m ? e : 0));
          a[3] > a[2] && (a[3] = a[2]);
          return a;
        };
        a.getStartAndEndRadians = function (a, f) {
          a = u(a) ? a : 0;
          f = u(f) && f > a && 360 > f - a ? f : a + 360;
          return { start: F * (a + -90), end: F * (f + -90) };
        };
      })(B || (B = {}));
      ("");
      return B;
    }
  );
  M(
    f,
    "Series/Pie/PiePoint.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/Series/Point.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C) {
      var F =
          (this && this.__extends) ||
          (function () {
            var a = function (e, d) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, d) {
                    a.__proto__ = d;
                  }) ||
                function (a, d) {
                  for (var e in d) d.hasOwnProperty(e) && (a[e] = d[e]);
                };
              return a(e, d);
            };
            return function (e, d) {
              function f() {
                this.constructor = e;
              }
              a(e, d);
              e.prototype =
                null === d
                  ? Object.create(d)
                  : ((f.prototype = d.prototype), new f());
            };
          })(),
        u = a.setAnimation,
        H = C.addEvent,
        I = C.defined;
      a = C.extend;
      var B = C.isNumber,
        z = C.pick,
        p = C.relativeLength;
      f = (function (a) {
        function e() {
          var d = (null !== a && a.apply(this, arguments)) || this;
          d.labelDistance = void 0;
          d.options = void 0;
          d.series = void 0;
          return d;
        }
        F(e, a);
        e.prototype.getConnectorPath = function () {
          var a = this.labelPosition,
            e = this.series.options.dataLabels,
            f = this.connectorShapes,
            m = e.connectorShape;
          f[m] && (m = f[m]);
          return m.call(
            this,
            { x: a.final.x, y: a.final.y, alignment: a.alignment },
            a.connectorPosition,
            e
          );
        };
        e.prototype.getTranslate = function () {
          return this.sliced
            ? this.slicedTranslation
            : { translateX: 0, translateY: 0 };
        };
        e.prototype.haloPath = function (a) {
          var d = this.shapeArgs;
          return this.sliced || !this.visible
            ? []
            : this.series.chart.renderer.symbols.arc(
                d.x,
                d.y,
                d.r + a,
                d.r + a,
                { innerR: d.r - 1, start: d.start, end: d.end }
              );
        };
        e.prototype.init = function () {
          var d = this;
          a.prototype.init.apply(this, arguments);
          this.name = z(this.name, "Slice");
          var e = function (a) {
            d.slice("select" === a.type);
          };
          H(this, "select", e);
          H(this, "unselect", e);
          return this;
        };
        e.prototype.isValid = function () {
          return B(this.y) && 0 <= this.y;
        };
        e.prototype.setVisible = function (a, e) {
          var d = this,
            f = this.series,
            m = f.chart,
            l = f.options.ignoreHiddenPoint;
          e = z(e, l);
          a !== this.visible &&
            ((this.visible =
              this.options.visible =
              a =
                "undefined" === typeof a ? !this.visible : a),
            (f.options.data[f.data.indexOf(this)] = this.options),
            ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(
              function (e) {
                if (d[e]) d[e][a ? "show" : "hide"](a);
              }
            ),
            this.legendItem && m.legend.colorizeItem(this, a),
            a || "hover" !== this.state || this.setState(""),
            l && (f.isDirty = !0),
            e && m.redraw());
        };
        e.prototype.slice = function (a, e, f) {
          var d = this.series;
          u(f, d.chart);
          z(e, !0);
          this.sliced = this.options.sliced = I(a) ? a : !this.sliced;
          d.options.data[d.data.indexOf(this)] = this.options;
          this.graphic && this.graphic.animate(this.getTranslate());
          this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
        };
        return e;
      })(f);
      a(f.prototype, {
        connectorShapes: {
          fixedOffset: function (a, e, d) {
            var f = e.breakAt;
            e = e.touchingSliceAt;
            return [
              ["M", a.x, a.y],
              d.softConnector
                ? [
                    "C",
                    a.x + ("left" === a.alignment ? -5 : 5),
                    a.y,
                    2 * f.x - e.x,
                    2 * f.y - e.y,
                    f.x,
                    f.y,
                  ]
                : ["L", f.x, f.y],
              ["L", e.x, e.y],
            ];
          },
          straight: function (a, e) {
            e = e.touchingSliceAt;
            return [
              ["M", a.x, a.y],
              ["L", e.x, e.y],
            ];
          },
          crookedLine: function (a, e, d) {
            e = e.touchingSliceAt;
            var f = this.series,
              h = f.center[0],
              m = f.chart.plotWidth,
              n = f.chart.plotLeft;
            f = a.alignment;
            var u = this.shapeArgs.r;
            d = p(d.crookDistance, 1);
            m =
              "left" === f
                ? h + u + (m + n - h - u) * (1 - d)
                : n + (h - u) * d;
            d = ["L", m, a.y];
            h = !0;
            if ("left" === f ? m > a.x || m < e.x : m < a.x || m > e.x) h = !1;
            a = [["M", a.x, a.y]];
            h && a.push(d);
            a.push(["L", e.x, e.y]);
            return a;
          },
        },
      });
      return f;
    }
  );
  M(
    f,
    "Series/Pie/PieSeries.js",
    [
      f["Series/CenteredUtilities.js"],
      f["Series/Column/ColumnSeries.js"],
      f["Core/Globals.js"],
      f["Core/Legend/LegendSymbol.js"],
      f["Series/Pie/PiePoint.js"],
      f["Core/Series/Series.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Renderer/SVG/Symbols.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G, u, H, I, B, z) {
      var p =
          (this && this.__extends) ||
          (function () {
            var a = function (d, e) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, d) {
                    a.__proto__ = d;
                  }) ||
                function (a, d) {
                  for (var e in d) d.hasOwnProperty(e) && (a[e] = d[e]);
                };
              return a(d, e);
            };
            return function (d, e) {
              function f() {
                this.constructor = d;
              }
              a(d, e);
              d.prototype =
                null === e
                  ? Object.create(e)
                  : ((f.prototype = e.prototype), new f());
            };
          })(),
        m = a.getStartAndEndRadians;
      C = C.noop;
      var e = z.clamp,
        d = z.extend,
        l = z.fireEvent,
        h = z.merge,
        t = z.pick,
        n = z.relativeLength;
      z = (function (a) {
        function d() {
          var d = (null !== a && a.apply(this, arguments)) || this;
          d.center = void 0;
          d.data = void 0;
          d.maxLabelDistance = void 0;
          d.options = void 0;
          d.points = void 0;
          return d;
        }
        p(d, a);
        d.prototype.animate = function (a) {
          var d = this,
            e = d.points,
            f = d.startAngleRad;
          a ||
            e.forEach(function (a) {
              var c = a.graphic,
                b = a.shapeArgs;
              c &&
                b &&
                (c.attr({
                  r: t(a.startR, d.center && d.center[3] / 2),
                  start: f,
                  end: f,
                }),
                c.animate(
                  { r: b.r, start: b.start, end: b.end },
                  d.options.animation
                ));
            });
        };
        d.prototype.drawEmpty = function () {
          var a = this.startAngleRad,
            d = this.endAngleRad,
            e = this.options;
          if (0 === this.total && this.center) {
            var f = this.center[0];
            var c = this.center[1];
            this.graph ||
              (this.graph = this.chart.renderer
                .arc(f, c, this.center[1] / 2, 0, a, d)
                .addClass("highcharts-empty-series")
                .add(this.group));
            this.graph.attr({
              d: B.arc(f, c, this.center[2] / 2, 0, {
                start: a,
                end: d,
                innerR: this.center[3] / 2,
              }),
            });
            this.chart.styledMode ||
              this.graph.attr({
                "stroke-width": e.borderWidth,
                fill: e.fillColor || "none",
                stroke: e.color || "#cccccc",
              });
          } else this.graph && (this.graph = this.graph.destroy());
        };
        d.prototype.drawPoints = function () {
          var a = this.chart.renderer;
          this.points.forEach(function (d) {
            d.graphic &&
              d.hasNewShapeType() &&
              (d.graphic = d.graphic.destroy());
            d.graphic ||
              ((d.graphic = a[d.shapeType](d.shapeArgs).add(d.series.group)),
              (d.delayedRendering = !0));
          });
        };
        d.prototype.generatePoints = function () {
          a.prototype.generatePoints.call(this);
          this.updateTotals();
        };
        d.prototype.getX = function (a, d, f) {
          var h = this.center,
            c = this.radii ? this.radii[f.index] || 0 : h[2] / 2;
          a = Math.asin(e((a - h[1]) / (c + f.labelDistance), -1, 1));
          return (
            h[0] +
            (d ? -1 : 1) * Math.cos(a) * (c + f.labelDistance) +
            (0 < f.labelDistance
              ? (d ? -1 : 1) * this.options.dataLabels.padding
              : 0)
          );
        };
        d.prototype.hasData = function () {
          return !!this.processedXData.length;
        };
        d.prototype.redrawPoints = function () {
          var a = this,
            d = a.chart,
            e = d.renderer,
            f = a.options.shadow,
            c,
            g,
            b,
            m;
          this.drawEmpty();
          !f ||
            a.shadowGroup ||
            d.styledMode ||
            (a.shadowGroup = e.g("shadow").attr({ zIndex: -1 }).add(a.group));
          a.points.forEach(function (k) {
            var l = {};
            g = k.graphic;
            if (!k.isNull && g) {
              var n = void 0;
              m = k.shapeArgs;
              c = k.getTranslate();
              d.styledMode ||
                ((n = k.shadowGroup),
                f &&
                  !n &&
                  (n = k.shadowGroup = e.g("shadow").add(a.shadowGroup)),
                n && n.attr(c),
                (b = a.pointAttribs(k, k.selected && "select")));
              k.delayedRendering
                ? (g.setRadialReference(a.center).attr(m).attr(c),
                  d.styledMode ||
                    g.attr(b).attr({ "stroke-linejoin": "round" }).shadow(f, n),
                  (k.delayedRendering = !1))
                : (g.setRadialReference(a.center),
                  d.styledMode || h(!0, l, b),
                  h(!0, l, m, c),
                  g.animate(l));
              g.attr({ visibility: k.visible ? "inherit" : "hidden" });
              g.addClass(k.getClassName(), !0);
            } else g && (k.graphic = g.destroy());
          });
        };
        d.prototype.sortByAngle = function (a, d) {
          a.sort(function (a, e) {
            return "undefined" !== typeof a.angle && (e.angle - a.angle) * d;
          });
        };
        d.prototype.translate = function (a) {
          this.generatePoints();
          var d = this.options,
            e = d.slicedOffset,
            f = e + (d.borderWidth || 0),
            c = m(d.startAngle, d.endAngle),
            g = (this.startAngleRad = c.start);
          c = (this.endAngleRad = c.end) - g;
          var b = this.points,
            h = d.dataLabels.distance;
          d = d.ignoreHiddenPoint;
          var p = b.length,
            u,
            w = 0;
          a || (this.center = a = this.getCenter());
          for (u = 0; u < p; u++) {
            var v = b[u];
            var y = g + w * c;
            !v.isValid() || (d && !v.visible) || (w += v.percentage / 100);
            var z = g + w * c;
            var B = {
              x: a[0],
              y: a[1],
              r: a[2] / 2,
              innerR: a[3] / 2,
              start: Math.round(1e3 * y) / 1e3,
              end: Math.round(1e3 * z) / 1e3,
            };
            v.shapeType = "arc";
            v.shapeArgs = B;
            v.labelDistance = t(
              v.options.dataLabels && v.options.dataLabels.distance,
              h
            );
            v.labelDistance = n(v.labelDistance, B.r);
            this.maxLabelDistance = Math.max(
              this.maxLabelDistance || 0,
              v.labelDistance
            );
            z = (z + y) / 2;
            z > 1.5 * Math.PI
              ? (z -= 2 * Math.PI)
              : z < -Math.PI / 2 && (z += 2 * Math.PI);
            v.slicedTranslation = {
              translateX: Math.round(Math.cos(z) * e),
              translateY: Math.round(Math.sin(z) * e),
            };
            B = (Math.cos(z) * a[2]) / 2;
            var F = (Math.sin(z) * a[2]) / 2;
            v.tooltipPos = [a[0] + 0.7 * B, a[1] + 0.7 * F];
            v.half = z < -Math.PI / 2 || z > Math.PI / 2 ? 1 : 0;
            v.angle = z;
            y = Math.min(f, v.labelDistance / 5);
            v.labelPosition = {
              natural: {
                x: a[0] + B + Math.cos(z) * v.labelDistance,
                y: a[1] + F + Math.sin(z) * v.labelDistance,
              },
              final: {},
              alignment:
                0 > v.labelDistance ? "center" : v.half ? "right" : "left",
              connectorPosition: {
                breakAt: {
                  x: a[0] + B + Math.cos(z) * y,
                  y: a[1] + F + Math.sin(z) * y,
                },
                touchingSliceAt: { x: a[0] + B, y: a[1] + F },
              },
            };
          }
          l(this, "afterTranslate");
        };
        d.prototype.updateTotals = function () {
          var a = this.points,
            d = a.length,
            e = this.options.ignoreHiddenPoint,
            f,
            c = 0;
          for (f = 0; f < d; f++) {
            var g = a[f];
            !g.isValid() || (e && !g.visible) || (c += g.y);
          }
          this.total = c;
          for (f = 0; f < d; f++)
            (g = a[f]),
              (g.percentage = 0 < c && (g.visible || !e) ? (g.y / c) * 100 : 0),
              (g.total = c);
        };
        d.defaultOptions = h(H.defaultOptions, {
          center: [null, null],
          clip: !1,
          colorByPoint: !0,
          dataLabels: {
            allowOverlap: !0,
            connectorPadding: 5,
            connectorShape: "fixedOffset",
            crookDistance: "70%",
            distance: 30,
            enabled: !0,
            formatter: function () {
              return this.point.isNull ? void 0 : this.point.name;
            },
            softConnector: !0,
            x: 0,
          },
          fillColor: void 0,
          ignoreHiddenPoint: !0,
          inactiveOtherPoints: !0,
          legendType: "point",
          marker: null,
          size: null,
          showInLegend: !1,
          slicedOffset: 10,
          stickyTracking: !1,
          tooltip: { followPointer: !0 },
          borderColor: "#ffffff",
          borderWidth: 1,
          lineWidth: void 0,
          states: { hover: { brightness: 0.1 } },
        });
        return d;
      })(H);
      d(z.prototype, {
        axisTypes: [],
        directTouch: !0,
        drawGraph: void 0,
        drawLegendSymbol: G.drawRectangle,
        drawTracker: f.prototype.drawTracker,
        getCenter: a.getCenter,
        getSymbol: C,
        isCartesian: !1,
        noSharedTooltip: !0,
        pointAttribs: f.prototype.pointAttribs,
        pointClass: u,
        requireSorting: !1,
        searchPoint: C,
        trackerGroups: ["group", "dataLabelsGroup"],
      });
      I.registerSeriesType("pie", z);
      ("");
      return z;
    }
  );
  M(
    f,
    "Series/Pie/PieDataLabel.js",
    [
      f["Core/Series/DataLabel.js"],
      f["Core/Globals.js"],
      f["Core/Renderer/RendererUtilities.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, C, G, u) {
      var F = f.noop,
        I = C.distribute,
        B = G.series,
        z = u.arrayMax,
        p = u.clamp,
        m = u.defined,
        e = u.merge,
        d = u.pick,
        l = u.relativeLength,
        h;
      (function (f) {
        function h() {
          var a = this,
            f = a.data,
            c = a.chart,
            g = a.options.dataLabels || {},
            b = g.connectorPadding,
            h = c.plotWidth,
            l = c.plotHeight,
            n = c.plotLeft,
            p = Math.round(c.chartWidth / 3),
            t = a.center,
            u = t[2] / 2,
            v = t[1],
            A = [[], []],
            w = [0, 0, 0, 0],
            y = a.dataLabelPositioners,
            F,
            C,
            G,
            H,
            M,
            E,
            T,
            N,
            U,
            V,
            X,
            S;
          a.visible &&
            (g.enabled || a._hasPointLabels) &&
            (f.forEach(function (a) {
              a.dataLabel &&
                a.visible &&
                a.dataLabel.shortened &&
                (a.dataLabel
                  .attr({ width: "auto" })
                  .css({ width: "auto", textOverflow: "clip" }),
                (a.dataLabel.shortened = !1));
            }),
            B.prototype.drawDataLabels.apply(a),
            f.forEach(function (a) {
              a.dataLabel &&
                (a.visible
                  ? (A[a.half].push(a),
                    (a.dataLabel._pos = null),
                    !m(g.style.width) &&
                      !m(
                        a.options.dataLabels &&
                          a.options.dataLabels.style &&
                          a.options.dataLabels.style.width
                      ) &&
                      a.dataLabel.getBBox().width > p &&
                      (a.dataLabel.css({ width: Math.round(0.7 * p) + "px" }),
                      (a.dataLabel.shortened = !0)))
                  : ((a.dataLabel = a.dataLabel.destroy()),
                    a.dataLabels &&
                      1 === a.dataLabels.length &&
                      delete a.dataLabels));
            }),
            A.forEach(function (e, f) {
              var k = e.length,
                q = [],
                p;
              if (k) {
                a.sortByAngle(e, f - 0.5);
                if (0 < a.maxLabelDistance) {
                  var r = Math.max(0, v - u - a.maxLabelDistance);
                  var A = Math.min(v + u + a.maxLabelDistance, c.plotHeight);
                  e.forEach(function (a) {
                    0 < a.labelDistance &&
                      a.dataLabel &&
                      ((a.top = Math.max(0, v - u - a.labelDistance)),
                      (a.bottom = Math.min(
                        v + u + a.labelDistance,
                        c.plotHeight
                      )),
                      (p = a.dataLabel.getBBox().height || 21),
                      (a.distributeBox = {
                        target: a.labelPosition.natural.y - a.top + p / 2,
                        size: p,
                        rank: a.y,
                      }),
                      q.push(a.distributeBox));
                  });
                  r = A + p - r;
                  I(q, r, r / 5);
                }
                for (X = 0; X < k; X++) {
                  F = e[X];
                  E = F.labelPosition;
                  H = F.dataLabel;
                  V = !1 === F.visible ? "hidden" : "inherit";
                  U = r = E.natural.y;
                  q &&
                    m(F.distributeBox) &&
                    ("undefined" === typeof F.distributeBox.pos
                      ? (V = "hidden")
                      : ((T = F.distributeBox.size),
                        (U = y.radialDistributionY(F))));
                  delete F.positionIndex;
                  if (g.justify) N = y.justify(F, u, t);
                  else
                    switch (g.alignTo) {
                      case "connectors":
                        N = y.alignToConnectors(e, f, h, n);
                        break;
                      case "plotEdges":
                        N = y.alignToPlotEdges(H, f, h, n);
                        break;
                      default:
                        N = y.radialDistributionX(a, F, U, r);
                    }
                  H._attr = { visibility: V, align: E.alignment };
                  S = F.options.dataLabels || {};
                  H._pos = {
                    x:
                      N +
                      d(S.x, g.x) +
                      ({ left: b, right: -b }[E.alignment] || 0),
                    y: U + d(S.y, g.y) - 10,
                  };
                  E.final.x = N;
                  E.final.y = U;
                  d(g.crop, !0) &&
                    ((M = H.getBBox().width),
                    (r = null),
                    N - M < b && 1 === f
                      ? ((r = Math.round(M - N + b)),
                        (w[3] = Math.max(r, w[3])))
                      : N + M > h - b &&
                        0 === f &&
                        ((r = Math.round(N + M - h + b)),
                        (w[1] = Math.max(r, w[1]))),
                    0 > U - T / 2
                      ? (w[0] = Math.max(Math.round(-U + T / 2), w[0]))
                      : U + T / 2 > l &&
                        (w[2] = Math.max(Math.round(U + T / 2 - l), w[2])),
                    (H.sideOverflow = r));
                }
              }
            }),
            0 === z(w) || this.verifyDataLabelOverflow(w)) &&
            (this.placeDataLabels(),
            this.points.forEach(function (b) {
              S = e(g, b.options.dataLabels);
              if ((C = d(S.connectorWidth, 1))) {
                var f;
                G = b.connector;
                if (
                  (H = b.dataLabel) &&
                  H._pos &&
                  b.visible &&
                  0 < b.labelDistance
                ) {
                  V = H._attr.visibility;
                  if ((f = !G))
                    (b.connector = G =
                      c.renderer
                        .path()
                        .addClass(
                          "highcharts-data-label-connector  highcharts-color-" +
                            b.colorIndex +
                            (b.className ? " " + b.className : "")
                        )
                        .add(a.dataLabelsGroup)),
                      c.styledMode ||
                        G.attr({
                          "stroke-width": C,
                          stroke: S.connectorColor || b.color || "#666666",
                        });
                  G[f ? "attr" : "animate"]({ d: b.getConnectorPath() });
                  G.attr("visibility", V);
                } else G && (b.connector = G.destroy());
              }
            }));
        }
        function t() {
          this.points.forEach(function (a) {
            var d = a.dataLabel,
              c;
            d &&
              a.visible &&
              ((c = d._pos)
                ? (d.sideOverflow &&
                    ((d._attr.width = Math.max(
                      d.getBBox().width - d.sideOverflow,
                      0
                    )),
                    d.css({
                      width: d._attr.width + "px",
                      textOverflow:
                        (this.options.dataLabels.style || {}).textOverflow ||
                        "ellipsis",
                    }),
                    (d.shortened = !0)),
                  d.attr(d._attr),
                  d[d.moved ? "animate" : "attr"](c),
                  (d.moved = !0))
                : d && d.attr({ y: -9999 }));
            delete a.distributeBox;
          }, this);
        }
        function u(a) {
          var d = this.center,
            c = this.options,
            e = c.center,
            b = c.minSize || 80,
            f = null !== c.size;
          if (!f) {
            if (null !== e[0]) var h = Math.max(d[2] - Math.max(a[1], a[3]), b);
            else
              (h = Math.max(d[2] - a[1] - a[3], b)),
                (d[0] += (a[3] - a[1]) / 2);
            null !== e[1]
              ? (h = p(h, b, d[2] - Math.max(a[0], a[2])))
              : ((h = p(h, b, d[2] - a[0] - a[2])),
                (d[1] += (a[0] - a[2]) / 2));
            h < d[2]
              ? ((d[2] = h),
                (d[3] = Math.min(l(c.innerSize || 0, h), h)),
                this.translate(d),
                this.drawDataLabels && this.drawDataLabels())
              : (f = !0);
          }
          return f;
        }
        var y = [],
          A = {
            radialDistributionY: function (a) {
              return a.top + a.distributeBox.pos;
            },
            radialDistributionX: function (a, d, c, e) {
              return a.getX(
                c < d.top + 2 || c > d.bottom - 2 ? e : c,
                d.half,
                d
              );
            },
            justify: function (a, d, c) {
              return c[0] + (a.half ? -1 : 1) * (d + a.labelDistance);
            },
            alignToPlotEdges: function (a, d, c, e) {
              a = a.getBBox().width;
              return d ? a + e : c - a - e;
            },
            alignToConnectors: function (a, d, c, e) {
              var b = 0,
                f;
              a.forEach(function (a) {
                f = a.dataLabel.getBBox().width;
                f > b && (b = f);
              });
              return d ? b + e : c - b - e;
            },
          };
        f.compose = function (d) {
          a.compose(B);
          -1 === y.indexOf(d) &&
            (y.push(d),
            (d = d.prototype),
            (d.dataLabelPositioners = A),
            (d.alignDataLabel = F),
            (d.drawDataLabels = h),
            (d.placeDataLabels = t),
            (d.verifyDataLabelOverflow = u));
        };
      })(h || (h = {}));
      return h;
    }
  );
  M(
    f,
    "Extensions/OverlappingDataLabels.js",
    [f["Core/Chart/Chart.js"], f["Core/Utilities.js"]],
    function (a, f) {
      function F(a, f) {
        var e = !1;
        if (a) {
          var d = a.newOpacity;
          a.oldOpacity !== d &&
            (a.alignAttr && a.placed
              ? (a[d ? "removeClass" : "addClass"](
                  "highcharts-data-label-hidden"
                ),
                (e = !0),
                (a.alignAttr.opacity = d),
                a[a.isOld ? "animate" : "attr"](a.alignAttr, null, function () {
                  f.styledMode || a.css({ pointerEvents: d ? "auto" : "none" });
                }),
                u(f, "afterHideOverlappingLabel"))
              : a.attr({ opacity: d }));
          a.isOld = !0;
        }
        return e;
      }
      var G = f.addEvent,
        u = f.fireEvent,
        H = f.isArray,
        I = f.isNumber,
        B = f.objectEach,
        z = f.pick;
      G(a, "render", function () {
        var a = this,
          f = [];
        (this.labelCollectors || []).forEach(function (a) {
          f = f.concat(a());
        });
        (this.yAxis || []).forEach(function (a) {
          a.stacking &&
            a.options.stackLabels &&
            !a.options.stackLabels.allowOverlap &&
            B(a.stacking.stacks, function (a) {
              B(a, function (a) {
                a.label && "hidden" !== a.label.visibility && f.push(a.label);
              });
            });
        });
        (this.series || []).forEach(function (e) {
          var d = e.options.dataLabels;
          e.visible &&
            (!1 !== d.enabled || e._hasPointLabels) &&
            ((d = function (d) {
              return d.forEach(function (d) {
                d.visible &&
                  (H(d.dataLabels)
                    ? d.dataLabels
                    : d.dataLabel
                    ? [d.dataLabel]
                    : []
                  ).forEach(function (e) {
                    var h = e.options;
                    e.labelrank = z(
                      h.labelrank,
                      d.labelrank,
                      d.shapeArgs && d.shapeArgs.height
                    );
                    h.allowOverlap
                      ? ((e.oldOpacity = e.opacity),
                        (e.newOpacity = 1),
                        F(e, a))
                      : f.push(e);
                  });
              });
            }),
            d(e.nodes || []),
            d(e.points));
        });
        this.hideOverlappingLabels(f);
      });
      a.prototype.hideOverlappingLabels = function (a) {
        var f = this,
          e = a.length,
          d = f.renderer,
          l,
          h,
          p,
          n = !1;
        var v = function (a) {
          var e,
            f = a.box ? 0 : a.padding || 0,
            c = (e = 0),
            g;
          if (a && (!a.alignAttr || a.placed)) {
            var b = a.alignAttr || { x: a.attr("x"), y: a.attr("y") };
            var h = a.parentGroup;
            a.width ||
              ((e = a.getBBox()),
              (a.width = e.width),
              (a.height = e.height),
              (e = d.fontMetrics(null, a.element).h));
            var l = a.width - 2 * f;
            (g = { left: "0", center: "0.5", right: "1" }[a.alignValue])
              ? (c = +g * l)
              : I(a.x) &&
                Math.round(a.x) !== a.translateX &&
                (c = a.x - a.translateX);
            return {
              x: b.x + (h.translateX || 0) + f - (c || 0),
              y: b.y + (h.translateY || 0) + f - e,
              width: a.width - 2 * f,
              height: a.height - 2 * f,
            };
          }
        };
        for (h = 0; h < e; h++)
          if ((l = a[h]))
            (l.oldOpacity = l.opacity),
              (l.newOpacity = 1),
              (l.absoluteBox = v(l));
        a.sort(function (a, d) {
          return (d.labelrank || 0) - (a.labelrank || 0);
        });
        for (h = 0; h < e; h++) {
          var w = (v = a[h]) && v.absoluteBox;
          for (l = h + 1; l < e; ++l) {
            var y = (p = a[l]) && p.absoluteBox;
            !w ||
              !y ||
              v === p ||
              0 === v.newOpacity ||
              0 === p.newOpacity ||
              y.x >= w.x + w.width ||
              y.x + y.width <= w.x ||
              y.y >= w.y + w.height ||
              y.y + y.height <= w.y ||
              ((v.labelrank < p.labelrank ? v : p).newOpacity = 0);
          }
        }
        a.forEach(function (a) {
          F(a, f) && (n = !0);
        });
        n && u(f, "afterHideAllOverlappingLabels");
      };
    }
  );
  M(f, "Core/Responsive.js", [f["Core/Utilities.js"]], function (a) {
    var f = a.extend,
      C = a.find,
      G = a.isArray,
      u = a.isObject,
      H = a.merge,
      I = a.objectEach,
      B = a.pick,
      z = a.splat,
      p = a.uniqueKey,
      m;
    (function (a) {
      var d = [];
      a.compose = function (a) {
        -1 === d.indexOf(a) && (d.push(a), f(a.prototype, e.prototype));
        return a;
      };
      var e = (function () {
        function a() {}
        a.prototype.currentOptions = function (a) {
          function d(a, f, h, k) {
            var c;
            I(a, function (a, b) {
              if (!k && -1 < e.collectionsWithUpdate.indexOf(b) && f[b])
                for (
                  a = z(a), h[b] = [], c = 0;
                  c < Math.max(a.length, f[b].length);
                  c++
                )
                  f[b][c] &&
                    (void 0 === a[c]
                      ? (h[b][c] = f[b][c])
                      : ((h[b][c] = {}), d(a[c], f[b][c], h[b][c], k + 1)));
              else
                u(a)
                  ? ((h[b] = G(a) ? [] : {}), d(a, f[b] || {}, h[b], k + 1))
                  : (h[b] = "undefined" === typeof f[b] ? null : f[b]);
            });
          }
          var e = this,
            f = {};
          d(a, this.options, f, 0);
          return f;
        };
        a.prototype.matchResponsiveRule = function (a, d) {
          var e = a.condition;
          (
            e.callback ||
            function () {
              return (
                this.chartWidth <= B(e.maxWidth, Number.MAX_VALUE) &&
                this.chartHeight <= B(e.maxHeight, Number.MAX_VALUE) &&
                this.chartWidth >= B(e.minWidth, 0) &&
                this.chartHeight >= B(e.minHeight, 0)
              );
            }
          ).call(this) && d.push(a._id);
        };
        a.prototype.setResponsive = function (a, d) {
          var e = this,
            f = this.options.responsive,
            h = this.currentResponsive,
            l = [];
          !d &&
            f &&
            f.rules &&
            f.rules.forEach(function (a) {
              "undefined" === typeof a._id && (a._id = p());
              e.matchResponsiveRule(a, l);
            }, this);
          d = H.apply(
            void 0,
            l
              .map(function (a) {
                return C((f || {}).rules || [], function (d) {
                  return d._id === a;
                });
              })
              .map(function (a) {
                return a && a.chartOptions;
              })
          );
          d.isResponsiveOptions = !0;
          l = l.toString() || void 0;
          l !== (h && h.ruleIds) &&
            (h && this.update(h.undoOptions, a, !0),
            l
              ? ((h = this.currentOptions(d)),
                (h.isResponsiveOptions = !0),
                (this.currentResponsive = {
                  ruleIds: l,
                  mergedOptions: d,
                  undoOptions: h,
                }),
                this.update(d, a, !0))
              : (this.currentResponsive = void 0));
        };
        return a;
      })();
    })(m || (m = {}));
    ("");
    ("");
    return m;
  });
  M(
    f,
    "masters/highcharts.src.js",
    [
      f["Core/Globals.js"],
      f["Core/Utilities.js"],
      f["Core/DefaultOptions.js"],
      f["Core/Animation/Fx.js"],
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/Renderer/HTML/AST.js"],
      f["Core/FormatUtilities.js"],
      f["Core/Renderer/RendererUtilities.js"],
      f["Core/Renderer/SVG/SVGElement.js"],
      f["Core/Renderer/SVG/SVGRenderer.js"],
      f["Core/Renderer/HTML/HTMLElement.js"],
      f["Core/Renderer/HTML/HTMLRenderer.js"],
      f["Core/Axis/Axis.js"],
      f["Core/Axis/DateTimeAxis.js"],
      f["Core/Axis/LogarithmicAxis.js"],
      f["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],
      f["Core/Axis/Tick.js"],
      f["Core/Tooltip.js"],
      f["Core/Series/Point.js"],
      f["Core/Pointer.js"],
      f["Core/MSPointer.js"],
      f["Core/Legend/Legend.js"],
      f["Core/Chart/Chart.js"],
      f["Core/Series/Series.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Series/Column/ColumnSeries.js"],
      f["Series/Column/ColumnDataLabel.js"],
      f["Series/Pie/PieSeries.js"],
      f["Series/Pie/PieDataLabel.js"],
      f["Core/Series/DataLabel.js"],
      f["Core/Responsive.js"],
      f["Core/Color/Color.js"],
      f["Core/Time.js"],
    ],
    function (
      a,
      f,
      C,
      G,
      u,
      H,
      I,
      B,
      z,
      p,
      m,
      e,
      d,
      l,
      h,
      t,
      n,
      v,
      w,
      y,
      A,
      q,
      k,
      c,
      g,
      b,
      r,
      x,
      D,
      K,
      M,
      Q,
      O
    ) {
      a.animate = u.animate;
      a.animObject = u.animObject;
      a.getDeferredAnimation = u.getDeferredAnimation;
      a.setAnimation = u.setAnimation;
      a.stop = u.stop;
      a.timers = G.timers;
      a.AST = H;
      a.Axis = d;
      a.Chart = k;
      a.chart = k.chart;
      a.Fx = G;
      a.Legend = q;
      a.PlotLineOrBand = t;
      a.Point = w;
      a.Pointer = A.isRequired() ? A : y;
      a.Series = c;
      a.SVGElement = z;
      a.SVGRenderer = p;
      a.Tick = n;
      a.Time = O;
      a.Tooltip = v;
      a.Color = Q;
      a.color = Q.parse;
      e.compose(p);
      m.compose(z);
      a.defaultOptions = C.defaultOptions;
      a.getOptions = C.getOptions;
      a.time = C.defaultTime;
      a.setOptions = C.setOptions;
      a.dateFormat = I.dateFormat;
      a.format = I.format;
      a.numberFormat = I.numberFormat;
      a.addEvent = f.addEvent;
      a.arrayMax = f.arrayMax;
      a.arrayMin = f.arrayMin;
      a.attr = f.attr;
      a.clearTimeout = f.clearTimeout;
      a.correctFloat = f.correctFloat;
      a.createElement = f.createElement;
      a.css = f.css;
      a.defined = f.defined;
      a.destroyObjectProperties = f.destroyObjectProperties;
      a.discardElement = f.discardElement;
      a.distribute = B.distribute;
      a.erase = f.erase;
      a.error = f.error;
      a.extend = f.extend;
      a.extendClass = f.extendClass;
      a.find = f.find;
      a.fireEvent = f.fireEvent;
      a.getMagnitude = f.getMagnitude;
      a.getStyle = f.getStyle;
      a.inArray = f.inArray;
      a.isArray = f.isArray;
      a.isClass = f.isClass;
      a.isDOMElement = f.isDOMElement;
      a.isFunction = f.isFunction;
      a.isNumber = f.isNumber;
      a.isObject = f.isObject;
      a.isString = f.isString;
      a.keys = f.keys;
      a.merge = f.merge;
      a.normalizeTickInterval = f.normalizeTickInterval;
      a.objectEach = f.objectEach;
      a.offset = f.offset;
      a.pad = f.pad;
      a.pick = f.pick;
      a.pInt = f.pInt;
      a.relativeLength = f.relativeLength;
      a.removeEvent = f.removeEvent;
      a.seriesType = g.seriesType;
      a.splat = f.splat;
      a.stableSort = f.stableSort;
      a.syncTimeout = f.syncTimeout;
      a.timeUnits = f.timeUnits;
      a.uniqueKey = f.uniqueKey;
      a.useSerialIds = f.useSerialIds;
      a.wrap = f.wrap;
      r.compose(b);
      K.compose(c);
      l.compose(d);
      h.compose(d);
      D.compose(x);
      t.compose(d);
      M.compose(k);
      return a;
    }
  );
  f["masters/highcharts.src.js"]._modules = f;
  return f["masters/highcharts.src.js"];
});
// # sourceMappingURL=highcharts.js.map
