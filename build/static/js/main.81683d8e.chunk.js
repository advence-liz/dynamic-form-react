(this["webpackJsonpdynamic-form-react"] =
  this["webpackJsonpdynamic-form-react"] || []).push([
  [0],
  {
    123: function (e, a, t) {
      e.exports = t(208);
    },
    128: function (e, a, t) {},
    129: function (e, a, t) {},
    130: function (e, a, t) {},
    132: function (e, a, t) {},
    133: function (e, a, t) {},
    208: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        l = t.n(n),
        r = t(8),
        c = t.n(r),
        i = (t(128), t(129), t(9)),
        u = t(217),
        o = t(212),
        s = t(89),
        m = t(211),
        d = t(118),
        f = t(16),
        p = (t(130), t(216));
      function E(e) {
        var a = e.widget,
          t = Object(p.a)({
            item: { type: a.type },
            collect: function (e) {
              return { isDragging: !!e.isDragging() };
            },
          }),
          n = Object(i.a)(t, 2),
          r = (n[0].isDragging, n[1]);
        return l.a.createElement(
          "li",
          { key: a.name, className: "widget", ref: r },
          a.icon,
          l.a.createElement("span", null, a.name)
        );
      }
      var v = t(15);
      function y(e, a, t) {
        var n = null;
        return (function e(l) {
          if (l.id === a) return l.lanes[t].cellDataList;
          if (l.lanes) {
            var r,
              c = Object(v.a)(l.lanes);
            try {
              for (c.s(); !(r = c.n()).done; ) {
                var i,
                  u = r.value,
                  o = Object(v.a)(u.cellDataList);
                try {
                  for (o.s(); !(i = o.n()).done; ) {
                    var s = i.value;
                    "grid" === s.type &&
                      (s.id === a ? (n = s.lanes[t].cellDataList) : e(s));
                  }
                } catch (m) {
                  o.e(m);
                } finally {
                  o.f();
                }
              }
            } catch (m) {
              c.e(m);
            } finally {
              c.f();
            }
          }
          return n;
        })(e);
      }
      function b(e, a) {
        var t = (function (e, a) {
            var t = null;
            return (function e(n) {
              if (n.lanes) {
                var l,
                  r = Object(v.a)(n.lanes);
                try {
                  for (r.s(); !(l = r.n()).done; ) {
                    var c,
                      i = l.value,
                      u = Object(v.a)(i.cellDataList);
                    try {
                      for (u.s(); !(c = u.n()).done; ) {
                        var o = c.value;
                        if (o.id === a) {
                          var s;
                          t = {
                            cellId: n.id,
                            laneIndex:
                              null === (s = n.lanes) || void 0 === s
                                ? void 0
                                : s.indexOf(i),
                          };
                          break;
                        }
                        "grid" === o.type && e(o);
                      }
                    } catch (m) {
                      u.e(m);
                    } finally {
                      u.f();
                    }
                  }
                } catch (m) {
                  r.e(m);
                } finally {
                  r.f();
                }
              }
              return t;
            })(e);
          })(e, a),
          n = JSON.parse(JSON.stringify(e)),
          l = y(n, t.cellId, t.laneIndex),
          r = l.find(function (e) {
            return e.id === a;
          });
        return l.splice(l.indexOf(r), 1), [n, l, r];
      }
      function g(e, a) {
        if ("MOVE" === a.type) {
          var t = b(e, a.id),
            n = Object(i.a)(t, 3),
            l = n[0],
            r = n[1],
            c = n[2];
          return r.splice(a.hoverIndex, 0, c), l;
        }
        if ("ADD" === a.type) {
          var u = (function (e, a) {
              var t = null;
              return (function e(n) {
                if (n.lanes) {
                  var l,
                    r = Object(v.a)(n.lanes);
                  try {
                    for (r.s(); !(l = r.n()).done; ) {
                      var c = l.value;
                      if (c.cellDataList === a) {
                        t = { cellId: n.id, laneIndex: n.lanes.indexOf(c) };
                        break;
                      }
                      var i,
                        u = Object(v.a)(c.cellDataList);
                      try {
                        for (u.s(); !(i = u.n()).done; ) {
                          var o = i.value;
                          "grid" === o.type && e(o);
                        }
                      } catch (s) {
                        u.e(s);
                      } finally {
                        u.f();
                      }
                    }
                  } catch (s) {
                    r.e(s);
                  } finally {
                    r.f();
                  }
                }
                return t;
              })(e);
            })(e, a.cellDataList),
            o = JSON.parse(JSON.stringify(e));
          return y(o, u.cellId, u.laneIndex).push(a.cellData), o;
        }
        if ("JUMP" === a.type) {
          var s = b(e, a.id),
            m = Object(i.a)(s, 3),
            d = m[0],
            f = m[2];
          return (
            y(d, a.dropLocation.cellId, a.dropLocation.laneIndex).push(f), d
          );
        }
        if ("ACTIVE" === a.type) {
          var p = JSON.parse(JSON.stringify(e));
          return (
            (g = p),
            (w = a.id),
            (function e(a) {
              (a.active = a.id === w),
                a.lanes &&
                  a.lanes.forEach(function (a) {
                    a.cellDataList.forEach(function (a) {
                      switch (a.type) {
                        case "grid":
                          e(a);
                          break;
                        case "list":
                          a.lanes.forEach(function (e) {
                            e.cellDataList.forEach(function (e) {
                              e.active = e.id === w;
                            });
                          });
                          break;
                        default:
                          a.active = a.id === w;
                      }
                    });
                  });
            })(g),
            p
          );
        }
        if ("DELETE_ACTIVE" === a.type) {
          var E = JSON.parse(JSON.stringify(e));
          return (
            (function (e) {
              var a = null,
                t = null;
              !(function e(n) {
                if (n.lanes) {
                  var l,
                    r = Object(v.a)(n.lanes);
                  try {
                    for (r.s(); !(l = r.n()).done; )
                      for (
                        var c = l.value, i = 0;
                        i < c.cellDataList.length;
                        i++
                      ) {
                        var u = c.cellDataList[i];
                        u.active && ((a = c.cellDataList), (t = i)),
                          "grid" === u.type && e(u);
                      }
                  } catch (o) {
                    r.e(o);
                  } finally {
                    r.f();
                  }
                }
              })(e),
                a && a.splice(t, 1);
            })(E),
            E
          );
        }
        return e;
        var g, w;
      }
      var w = t(34),
        h = t(215);
      t(132);
      function O(e) {
        var a = { type: e, id: e + new Date().getTime(), active: !1 };
        return (
          "grid" === a.type
            ? (a.lanes = [
                { span: 50, cellDataList: [] },
                { span: 50, cellDataList: [] },
              ])
            : "input" === a.type
            ? ((a.label = "\u5355\u884c\u6587\u672c"),
              (a.placeholder = "\u8bf7\u586b\u5199"),
              (a.required = !1))
            : "textarea" === a.type
            ? ((a.label = "\u591a\u884c\u6587\u672c"),
              (a.placeholder = "\u8bf7\u586b\u5199"),
              (a.required = !1))
            : "dropdown" === a.type
            ? ((a.label = "\u4e0b\u62c9\u9009\u62e9"),
              (a.placeholder = "\u8bf7\u9009\u62e9"),
              (a.options = []),
              (a.required = !1))
            : "list" === a.type
            ? ((a.label = "\u5217\u8868"),
              (a.lanes = [{ cellDataList: [], span: 100 }]))
            : "datetime" === a.type
            ? ((a.label = "\u65e5\u671f\u65f6\u95f4"),
              (a.placeholder = "\u8bf7\u9009\u62e9"),
              (a.required = !1))
            : "checkbox" === a.type
            ? ((a.label = "\u591a\u9009"), (a.options = []), (a.required = !1))
            : "radio" === a.type &&
              ((a.label = "\u5355\u9009"), (a.options = []), (a.required = !1)),
          a
        );
      }
      var D = function (e) {
          var a = e.elements,
            t = e.direction,
            r = e.location,
            c = Object(n.useContext)(U),
            u = Object(h.a)({
              accept: ["input", "grid", "dropdown", "instance"],
              drop: function (e, t) {
                if (s) {
                  if (!t.getClientOffset()) return;
                  "instance" === e.type
                    ? c({ type: "JUMP", dropLocation: r, id: e.id })
                    : c({ type: "ADD", cellData: O(e.type), cellDataList: a });
                }
              },
              collect: function (e) {
                return { isOver: e.isOver({ shallow: !0 }) };
              },
            }),
            o = Object(i.a)(u, 2),
            s = o[0].isOver,
            m = o[1],
            d = "column" === t ? "default" : "inline",
            f = a.map(function (e, a) {
              return l.a.createElement(S, {
                key: e.id,
                layout: d,
                cellData: e,
                index: a,
              });
            });
          return l.a.createElement(
            "td",
            { className: "swimlane " + t + (s ? " hovered" : ""), ref: m },
            f
          );
        },
        j = l.a.createContext(null),
        L = Object(n.forwardRef)(function (e, a) {
          var t,
            r,
            c = e.direction,
            u = void 0 === c ? "column" : c,
            o = e.cellData,
            s = e.style,
            m = Object(n.useReducer)(
              function (e, a) {
                switch (a.type) {
                  case "SET_CURRENT":
                    return Object(w.a)(
                      Object(w.a)({}, e),
                      {},
                      { current: a.element }
                    );
                  case "SET_VALUE":
                    return (
                      (t = e.data),
                      (n = a.target),
                      (l = a.value),
                      (function e(a) {
                        if (a.lanes) {
                          var t,
                            r = Object(v.a)(a.lanes);
                          try {
                            for (r.s(); !(t = r.n()).done; ) {
                              var c,
                                i = t.value,
                                u = Object(v.a)(i.cellDataList);
                              try {
                                for (u.s(); !(c = u.n()).done; ) {
                                  var o = c.value;
                                  switch (o.type) {
                                    case "grid":
                                      e(o);
                                      break;
                                    case "list":
                                      var s,
                                        m = Object(v.a)(o.lanes);
                                      try {
                                        for (m.s(); !(s = m.n()).done; )
                                          for (
                                            var d = s.value, f = 0;
                                            f < d.cellDataList.length;
                                            f++
                                          ) {
                                            var p = d.cellDataList[f];
                                            if (p === n)
                                              return (p.value = l), !0;
                                          }
                                      } catch (E) {
                                        m.e(E);
                                      } finally {
                                        m.f();
                                      }
                                      break;
                                    default:
                                      if (o === n) return (o.value = l), !0;
                                  }
                                }
                              } catch (E) {
                                u.e(E);
                              } finally {
                                u.f();
                              }
                            }
                          } catch (E) {
                            r.e(E);
                          } finally {
                            r.f();
                          }
                        }
                        return !1;
                      })(t),
                      Object(w.a)({}, e)
                    );
                  default:
                    return e;
                }
                var t, n, l;
              },
              { current: null, data: o }
            ),
            d = Object(i.a)(m, 2)[1];
          return l.a.createElement(
            j.Provider,
            { value: d },
            l.a.createElement(
              "table",
              { ref: a, className: "lanes", style: s },
              l.a.createElement(
                "tbody",
                null,
                "column" === u
                  ? l.a.createElement(
                      "tr",
                      null,
                      null === (t = o.lanes) || void 0 === t
                        ? void 0
                        : t.map(function (e, a) {
                            return l.a.createElement(D, {
                              key: o.id + "-" + a,
                              direction: u,
                              elements: e.cellDataList,
                              location: { cellId: o.id, laneIndex: a },
                            });
                          })
                    )
                  : l.a.createElement(
                      l.a.Fragment,
                      null,
                      null === (r = o.lanes) || void 0 === r
                        ? void 0
                        : r.map(function (e, a) {
                            return l.a.createElement(
                              "tr",
                              { key: o.id + "-" + a },
                              l.a.createElement(D, {
                                elements: e.cellDataList,
                                direction: u,
                                location: { cellId: o.id, laneIndex: a },
                              })
                            );
                          })
                    )
              )
            )
          );
        }),
        x = t(213),
        N =
          (t(133),
          Object(n.forwardRef)(function (e, a) {
            var t = e.layout,
              n = void 0 === t ? "default" : t,
              r = e.required,
              c = void 0 !== r && r,
              i = e.warning,
              u = void 0 === i ? null : i,
              o = e.warningable,
              s = void 0 === o || o,
              m = e.label,
              d = e.element;
            return l.a.createElement(
              "table",
              { ref: a, className: ["form-group", n].join(" ") },
              l.a.createElement(
                "tbody",
                null,
                "default" === n
                  ? l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        "tr",
                        null,
                        l.a.createElement(
                          "td",
                          { className: "label" },
                          c
                            ? l.a.createElement(
                                "span",
                                { className: "required" },
                                "*"
                              )
                            : l.a.createElement(l.a.Fragment, null),
                          m
                        ),
                        l.a.createElement("td", null, d)
                      ),
                      s
                        ? l.a.createElement(
                            "tr",
                            null,
                            l.a.createElement("td", null),
                            l.a.createElement(
                              "td",
                              { className: "warning" },
                              u
                                ? l.a.createElement("span", null, u)
                                : l.a.createElement("span", null, "\xa0")
                            )
                          )
                        : l.a.createElement(l.a.Fragment, null)
                    )
                  : l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        "tr",
                        null,
                        l.a.createElement(
                          "td",
                          { className: "label" },
                          c
                            ? l.a.createElement(
                                "span",
                                { className: "required" },
                                "*"
                              )
                            : l.a.createElement(l.a.Fragment, null),
                          m
                        )
                      ),
                      l.a.createElement(
                        "tr",
                        null,
                        l.a.createElement("td", null, d)
                      ),
                      s
                        ? l.a.createElement(
                            "tr",
                            null,
                            l.a.createElement(
                              "td",
                              { className: "warning" },
                              u
                                ? l.a.createElement("span", null, u)
                                : l.a.createElement("span", null, "\xa0")
                            )
                          )
                        : l.a.createElement(l.a.Fragment, null)
                    )
              )
            );
          })),
        k = Object(n.forwardRef)(function (e, a) {
          var t = e.element,
            n = e.layout,
            r = e.dispatch;
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(N, {
              ref: a,
              required: t.required,
              warning: t.warning,
              layout: n,
              warningable: t.warningable,
              label: t.labeled
                ? l.a.createElement("label", { title: t.label }, t.label)
                : l.a.createElement(l.a.Fragment, null),
              element: l.a.createElement(x.a, {
                value: t.value,
                placeholder: t.placeholder,
                onChange: function (e) {
                  r({ type: "SET_VALUE", target: t, value: e.target.value });
                },
              }),
            })
          );
        }),
        I = Object(n.forwardRef)(function (e, a) {
          var t = e.element;
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(L, { ref: a, cellData: t })
          );
        }),
        C = t(214),
        F = C.a.Option,
        q = Object(n.forwardRef)(function (e, a) {
          var t,
            n = e.cellData,
            r = e.layout,
            c = e.dispatch;
          return (
            (n.options && 0 !== n.options.length) ||
              (n.options = [
                { label: "Joyce", value: "1" },
                { label: "Teresa", value: "2" },
              ]),
            l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(N, {
                ref: a,
                required: n.required,
                warning: n.warning,
                layout: r,
                warningable: n.warningable,
                label: n.labeled
                  ? l.a.createElement("label", { title: n.label }, n.label)
                  : l.a.createElement(l.a.Fragment, null),
                element: l.a.createElement(
                  C.a,
                  {
                    style: { width: "100%" },
                    onChange: function (e) {
                      c({ type: "SET_VALUE", target: n, value: e });
                    },
                  },
                  null === (t = n.options) || void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return l.a.createElement(
                          F,
                          { value: e.value },
                          e.label
                        );
                      })
                ),
              })
            )
          );
        }),
        S = function (e) {
          var a = e.cellData,
            t = e.index,
            r = e.layout,
            c = Object(w.a)(
              Object(w.a)({}, a),
              {},
              { required: !1, warningable: !1, layout: "default", labeled: !0 }
            ),
            u = Object(n.useRef)(null),
            o = Object(n.useContext)(U),
            s = Object(h.a)({
              accept: ["instance"],
              hover: function (e, a) {
                if (u.current) {
                  var n = e.index,
                    l = t;
                  if (n !== l) {
                    var r = u.current.getBoundingClientRect(),
                      c = (r.bottom - r.top) / 2,
                      i = a.getClientOffset();
                    if (i) {
                      var s = i.y - r.top;
                      (n < l && s < c) ||
                        (n > l && s > c) ||
                        (o({ type: "MOVE", hoverIndex: l, id: e.id }),
                        (e.index = l));
                    }
                  }
                }
              },
            }),
            m = Object(i.a)(s, 2)[1],
            d = Object(p.a)({
              item: { type: "instance", id: a.id, index: t },
              collect: function (e) {
                return { isDragging: e.isDragging() };
              },
            });
          (0, Object(i.a)(d, 2)[1])(m(u));
          var f = Object(n.useContext)(j);
          return l.a.createElement(
            "div",
            {
              ref: u,
              className: "instance" + (a.active ? " active" : ""),
              onClick: function (e) {
                e.stopPropagation(), o({ type: "ACTIVE", id: a.id });
              },
            },
            "input" === a.type
              ? l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement("span", { className: "id" }, c.id),
                  l.a.createElement(k, { element: c, dispatch: f, layout: r })
                )
              : "grid" === a.type
              ? l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement("span", { className: "id" }, c.id),
                  l.a.createElement(I, { element: c })
                )
              : "dropdown" === a.type
              ? l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(q, { cellData: c, dispatch: f })
                )
              : l.a.createElement(l.a.Fragment, null)
          );
        },
        J = u.a.Sider,
        T = u.a.Content,
        R = u.a.Header,
        A = {
          type: "grid",
          id: "11270307",
          lanes: [{ span: 100, cellDataList: [] }],
          active: !1,
        },
        V = [
          {
            name: "\u57fa\u7840\u5b57\u6bb5",
            widgets: [
              {
                type: "input",
                icon: l.a.createElement(f.e, null),
                name: "\u5355\u884c\u6587\u672c",
                enable: !0,
              },
              {
                type: "textarea",
                icon: l.a.createElement(f.e, null),
                name: "\u591a\u884c\u6587\u672c",
                enable: !0,
              },
              {
                type: "dropdown",
                icon: l.a.createElement(f.d, null),
                name: "\u4e0b\u62c9\u9009\u62e9",
                enable: !0,
              },
              {
                type: "datetime",
                icon: l.a.createElement(f.a, null),
                name: "\u65e5\u671f\u65f6\u95f4",
                enable: !0,
              },
              {
                type: "tree",
                icon: l.a.createElement(f.d, null),
                name: "\u7ea7\u8054\u9009\u62e9",
                enable: !1,
              },
              {
                type: "checkbox",
                icon: l.a.createElement(f.b, null),
                name: "\u591a\u9009",
                enable: !0,
              },
              {
                type: "checkbox",
                icon: l.a.createElement(f.b, null),
                name: "\u5355\u9009",
                enable: !0,
              },
            ],
          },
          {
            name: "\u9ad8\u7ea7\u5b57\u6bb5",
            widgets: [
              {
                type: "grid",
                icon: l.a.createElement(f.h, null),
                name: "\u5e03\u5c40",
                enable: !0,
              },
              {
                type: "list",
                icon: l.a.createElement(f.g, null),
                name: "\u5217\u8868",
                enable: !0,
              },
              {
                type: "separator",
                icon: l.a.createElement(f.f, null),
                name: "\u5206\u5272\u7ebf",
                enable: !1,
              },
              {
                type: "tab",
                icon: l.a.createElement(f.c, null),
                name: "\u6807\u7b7e\u9875",
                enable: !1,
              },
            ],
          },
        ],
        U = l.a.createContext(null),
        _ = function () {
          var e = Object(n.useReducer)(g, A),
            a = Object(i.a)(e, 2),
            t = a[0],
            r = a[1],
            c = Object(n.useCallback)(function (e) {
              46 === e.keyCode && r({ type: "DELETE_ACTIVE" });
            }, []);
          return (
            Object(n.useEffect)(function () {
              return (
                document.addEventListener("keyup", c, !1),
                function () {
                  document.removeEventListener("keyup", c, !1);
                }
              );
            }, []),
            l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                U.Provider,
                { value: r },
                l.a.createElement(
                  m.a,
                  { backend: d.a },
                  l.a.createElement(
                    u.a,
                    { className: "layout" },
                    l.a.createElement(
                      J,
                      { width: 280, className: "left" },
                      V.map(function (e) {
                        return l.a.createElement(
                          n.Fragment,
                          { key: e.name },
                          l.a.createElement(
                            "div",
                            { style: { color: "white" } },
                            e.name
                          ),
                          l.a.createElement(
                            "ul",
                            { className: "panel" },
                            e.widgets.map(function (e) {
                              return l.a.createElement(E, {
                                key: e.name,
                                widget: e,
                              });
                            })
                          )
                        );
                      })
                    ),
                    l.a.createElement(
                      T,
                      null,
                      l.a.createElement(
                        u.a,
                        { style: { height: "100%" } },
                        l.a.createElement(
                          R,
                          null,
                          l.a.createElement(
                            o.a,
                            null,
                            l.a.createElement(s.a, null, "\u6e05\u7a7a"),
                            l.a.createElement(s.a, null, "\u9884\u89c8"),
                            l.a.createElement(s.a, null, "\u4fdd\u5b58")
                          )
                        ),
                        l.a.createElement(
                          T,
                          { className: "form", style: { height: "100%" } },
                          l.a.createElement(S, { cellData: t, index: 0 })
                        )
                      )
                    ),
                    l.a.createElement(J, { width: 280, className: "right" })
                  )
                )
              )
            )
          );
        };
      var M = function () {
        return l.a.createElement(_, null);
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      c.a.render(
        l.a.createElement(l.a.StrictMode, null, l.a.createElement(M, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[123, 1, 2]],
]);
//# sourceMappingURL=main.81683d8e.chunk.js.map
