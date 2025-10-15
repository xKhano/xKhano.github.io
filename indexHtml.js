(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [818],
    {
        8312: function (e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return a(7211);
                },
            ]);
        },
        7604: function (e, t, a) {
            "use strict";
            a.d(t, {
                Z: function () {
                    return n;
                },
            });
            var s = a(5893),
                r = a(1365);
            function n(e) {
                let { title: t, url: a, label: n = "", className: l = "", fill: i, small: o } = e,
                    c = t.trim().split(" "),
                    d = c.pop(),
                    m = c.join(" ");
                return (0, s.jsxs)("a", {
                    className: "inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 ".concat(l, " group/link ").concat(o ? "text-sm" : "text-base"),
                    href: a,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    "aria-label": "".concat(n || t, " (opens in a new tab)"),
                    children: [
                        i && (0, s.jsx)("span", { className: "absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" }),
                        (0, s.jsxs)("span", {
                            children: [
                                m,
                                " ",
                                (0, s.jsxs)("span", {
                                    className: "inline-block",
                                    children: [
                                        d,
                                        (0, s.jsx)(r.Z, {
                                            use: "arrow-external",
                                            className: "inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ".concat(
                                                o ? "ml-0.5" : "ml-1 translate-y-px"
                                            ),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            }
        },
        1365: function (e, t, a) {
            "use strict";
            a.d(t, {
                Z: function () {
                    return r;
                },
            });
            var s = a(5893);
            function r(e) {
                let { use: t, className: a = "h-4 w-4" } = e;
                switch (t) {
                    case "github":
                        return (0, s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 16 16",
                            fill: "currentColor",
                            className: a,
                            "aria-hidden": "true",
                            children: (0, s.jsx)("path", {
                                d:
                                    "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
                            }),
                        });
                    case "email":
                        return (0, s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            className: a,
                            strokeWidth:1.5,
                            stroke:"currentColor",
                            "aria-hidden": "true",
                            children: [(0, s.jsx)("path", {
                                d:
                                    "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z",
                            }),
                            (0, s.jsx)("path", {
                                d:
                                    "M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z",
                            })

                    ],
                    });
                    case "instagram":
                        return (0, s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1000 1000",
                            fill: "currentColor",
                            className: a,
                            "aria-hidden": "true",
                            children: (0, s.jsx)("path", {
                                d:
                                    "M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34",
                            }),
                        });
                    case "twitter":
                        return (0, s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 248 204",
                            fill: "currentColor",
                            className: a,
                            "aria-hidden": "true",
                            children: (0, s.jsx)("path", {
                                id: "white_background",
                                d:
                                    "M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z",
                            }),
                        });
                    case "twitter-x":
                        return (0, s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1200 1227",
                            fill: "none",
                            className: a,
                            "aria-hidden": "true",
                            children: (0, s.jsx)("path", {
                                d:
                                    "M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z",
                                fill: "currentColor",
                            }),
                        });
                    case "linkedin":
                        return (0, s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: a,
                            "aria-hidden": "true",
                            children: (0, s.jsx)("path", {
                                d:
                                    "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",
                            }),
                        });
                    case "goodreads":
                        return (0, s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1024 1024",
                            fill: "currentColor",
                            className: a,
                            "aria-hidden": "true",
                            children: (0, s.jsx)("path", {
                                d:
                                    "M663.8 382.4c10.2 74.6-9.4 158-71.8 201.4-44.6 31-105.6 28.2-141.6 11.4-74.2-34.6-99-117.2-93.6-194.4 8.6-121.8 81.8-175.8 150.6-175 93.8-0.4 143.6 63.6 156.4 156.6zM960 176v672c0 61.8-50.2 112-112 112H176c-61.8 0-112-50.2-112-112V176c0-61.8 50.2-112 112-112h672c61.8 0 112 50.2 112 112zM724 626.4s-0.2-68-0.2-434.6h-58v80.6c-1.6 0.6-2.4-1-3.2-2.4-19.2-41.4-71.8-92.6-152-92-103.8 0.8-174.4 62.4-201.2 155.6-8.6 29.8-11.6 60.2-11 91.2 3.4 155.8 90.2 235.6 224.8 230.4 57.8-2.2 109-34 138-90.4 1-2 2.2-3.8 3.4-5.8 0.4 0.2 0.8 0.2 1.2 0.4 0.6 7.6 0.4 61.4 0.2 69-0.4 29.6-4 59-14.4 87-15.6 42-44.6 69.4-89 79-35.6 7.8-71.2 7.6-106.4-2.4-43-12.2-73-38-82.2-83.6-0.6-3.2-2.6-2.6-4.6-2.6h-53.6c1.6 21.2 6.4 40.6 17 58.4 48.4 81 165.4 97 256.4 74.8 99.8-24.6 134.6-109.8 134.8-212.6z",
                                fill: "",
                            }),
                        });
                    case "codepen":
                        return (0, s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 64 64",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: a,
                            "aria-hidden": "true",
                            children: (0, s.jsx)("path", { d: "M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2", strokeWidth: "5" }),
                        });
                    case "arrow-external":
                        return (0, s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            className: a,
                            "aria-hidden": "true",
                            children: (0, s.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z",
                                clipRule: "evenodd",
                            }),
                        });
                    case "arrow-internal":
                        return (0, s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            className: a,
                            "aria-hidden": "true",
                            children: (0, s.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z",
                                clipRule: "evenodd",
                            }),
                        });
                    case "star":
                        return (0, s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            className: a,
                            "aria-hidden": "true",
                            children: (0, s.jsx)("path", {
                                fillRule: "evenodd",
                                d:
                                    "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z",
                                clipRule: "evenodd",
                            }),
                        });
                    case "download":
                        return (0, s.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            className: a,
                            "aria-hidden": "true",
                            children: [
                                (0, s.jsx)("path", { d: "M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" }),
                                (0, s.jsx)("path", { d: "M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" }),
                            ],
                        });
                    case "close":
                        return (0, s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: a,
                            "aria-hidden": "true",
                            children: (0, s.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
                                clipRule: "evenodd",
                            }),
                        });
                    case "link":
                        return (0, s.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            className: a,
                            "aria-hidden": "true",
                            children: [
                                (0, s.jsx)("path", {
                                    d: "M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z",
                                }),
                                (0, s.jsx)("path", {
                                    d: "M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z",
                                }),
                            ],
                        });
                    default:
                        return (0, s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            className: a,
                            fill: "none",
                            stroke: "currentColor",
                            "aria-hidden": "true",
                            children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16M4 18h7" }),
                        });
                }
            }
        },
        4533: function (e, t, a) {
            "use strict";
            a.d(t, {
                Z: function () {
                    return r;
                },
            });
            var s = a(5893);
            function r(e) {
                let { text: t, className: a = "" } = e;
                return (0, s.jsx)("div", { className: "flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ".concat(a), children: t });
            }
        },
        8425: function (e, t, a) {
            "use strict";
            a.d(t, {
                Z: function () {
                    return i;
                },
            });
            var s = a(5893),
                r = a(7294),
                n = a(9008),
                l = a.n(n);
            function i(e) {
                let { title: t, pathname: a } = e,
                    n = "Kaan Dalkıran",
                    i = "Kaan Dalkıran is a software engineer who builds, maintains and updates mindkeeping ideas into useful applications.",
                    o = "",
                    c = "".concat(o, "/og.png"),
                    d = "",
                    m = n;
                return (
                    t !== n && (m = "".concat(t, " | ").concat(n)),
                    (0, s.jsxs)(l(), {
                        children: [
                            (0, s.jsx)("title", { children: m }),
                            (0, s.jsx)("meta", { name: "description", content: i }, "description"),
                            (0, s.jsx)("meta", { name: "image", content: c }),
                            (0, s.jsx)("meta", { property: "og:locale", content: "en_US" }, "og:locale"),
                            (0, s.jsx)("meta", { property: "og:site_name", content: n }, "og:site_name"),
                            (0, s.jsx)("meta", { property: "og:type", content: "website" }, "og:type"),
                            (0, s.jsx)("meta", { property: "twitter:card", content: "summary_large_image" }, "twitter:card"),
                            (0, s.jsx)("meta", { property: "twitter:creator", content: d }, "twitter:creator"),
                            (0, s.jsx)("meta", { property: "twitter:site", content: d }, "twitter:site"),
                            ["og", "twitter"].map((e) =>
                                (0, s.jsxs)(
                                    r.Fragment,
                                    {
                                        children: [
                                            (0, s.jsx)("meta", { property: "".concat(e, ":title"), content: m }, "".concat(e, ":title")),
                                            (0, s.jsx)("meta", { property: "".concat(e, ":description"), content: i }, "".concat(e, ":description")),
                                            (0, s.jsx)("meta", { property: "".concat(e, ":url"), content: o + a }, "".concat(e, ":url")),
                                            (0, s.jsx)("meta", { property: "".concat(e, ":image"), content: c }, "".concat(e, ":image")),
                                        ],
                                    },
                                    e
                                )
                            ),
                            (0, s.jsx)("link", { rel: "icon", type: "image/png", sizes: "512x192", href: "/favicon/android-chrome-512x512.png" }),
                            (0, s.jsx)("link", { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon/android-chrome-192x192.png" }),
                            (0, s.jsx)("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" }),
                            (0, s.jsx)("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" }),
                            (0, s.jsx)("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" }),
                            (0, s.jsx)("link", { rel: "manifest", href: "/favicon/site.webmanifest" }),
                            (0, s.jsx)("meta", { name: "msapplication-TileColor", content: "#0f172a" }),
                            (0, s.jsx)("meta", { name: "theme-color", content: "#0f172a" }),
                            (0, s.jsx)("meta", { name: "google-site-verification", content: "DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" }),
                        ],
                    })
                );
            }
        },
        7211: function (e, t, a) {
            "use strict";
            a.r(t),
                a.d(t, {
                    default: function () {
                        return k;
                    },
                });
            var s = a(5893),
                r = a(7294);
            function n() {
                let e = "font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300";
                return (0, s.jsxs)("div", {
                    children: [
                        (0, s.jsxs)("p", {
                            className: "mb-4",
                            children: [
                                "Back when I was in highschool I've always wanted to learn how videogames are made and had the academical ability to learn things about linear algebra, classical physics and object oriented programming. Those passionate hobbies has led me to my Software Engineering journey.",
                            ],
                        }),
                        (0, s.jsxs)("p", {
                            className: "mb-4",
                            children: [
                                "Until my graduation from college; I've done web apps, embedded software, so many game prototypes and even reverse engineered and altered old softwares for my use."
                            ],
                        }),
                        (0, s.jsxs)("p", {
                            children: [
                                "I value cleaniness and specification, had little experience with agile methodology and I keep an eye on SOLID codewriting.",
                            ],
                        }),
                    ],
                });
            }
            var l = a(7604);
            function i() {
                return (0, s.jsx)("div", {
                    className:
                        "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg",
                });
            }
            var o = a(1365),
                c = a(4533);
            function d() {
                return (0, s.jsxs)("div", {
                    children: [
                        (0, s.jsx)("ol", {
                            className: "group/list",
                            children: [
                                {
                                    date: "SEP — NOV 2022",
                                    company: { name: "Creative Urge", link: "https://creativeurge.co.uk" },
                                    positions: ["Unity Developer Freelancer"],
                                    desc:
                                        "Contributed to a video editing app called Anim8 with experienced developers, did bughunting, implemented features, used Trello to mimick a task-based workflow.",
                                    tech: ["Unity", "C#", "Mobile App"],
                                    links:[
                                        {title: "Anim8",
                                        url: "https://www.youtube.com/watch?v=bhapnF5Vjqk" }]

                                }
                            ].map((e, t) =>
                                (0, s.jsx)(
                                    "li",
                                    {
                                        className: "mb-12",
                                        children: (0, s.jsxs)("div", {
                                            className: "group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50",
                                            children: [
                                                (0, s.jsx)(i, {}),
                                                (0, s.jsx)("header", {
                                                    className: "z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2",
                                                    "aria-label": e.date.replace("—", "to").replace("Dec", "December"),
                                                    children: e.date || "",
                                                }),
                                                (0, s.jsxs)("div", {
                                                    className: "z-10 sm:col-span-6",
                                                    children: [
                                                        (0, s.jsx)("h3", {
                                                            className: "font-medium leading-snug text-slate-200",
                                                            children: e.positions.map((t, a) =>
                                                                (0, s.jsx)(
                                                                    "div",
                                                                    {
                                                                        children:
                                                                            0 === a
                                                                                ? (0, s.jsx)(l.Z, { title: "".concat(t, " \xb7 ").concat(e.company.name), label: "".concat(t, " at ").concat(e.company.name), url: e.company.link, fill: !0 })
                                                                                : (0, s.jsx)("div", { className: "text-slate-500", "aria-hidden": "true", children: t }),
                                                                    },
                                                                    a
                                                                )
                                                            ),
                                                        }),
                                                        (0, s.jsx)("p", { className: "mt-2 text-sm leading-normal", children: e.desc }),
                                                        e.links &&
                                                            (0, s.jsx)("ul", {
                                                                className: "mt-2 flex flex-wrap",
                                                                "aria-label": "Related links",
                                                                children: e.links.map((e, t) =>
                                                                    (0, s.jsx)(
                                                                        "li",
                                                                        {
                                                                            className: "mr-4",
                                                                            children: (0, s.jsxs)("a", {
                                                                                className: "relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300",
                                                                                href: e.url,
                                                                                target: "_blank",
                                                                                rel: "noreferrer noopener",
                                                                                "aria-label": "".concat(e.title, " (opens in a new tab)"),
                                                                                children: [(0, s.jsx)(o.Z, { use: "link", className: "mr-1 h-3 w-3" }), (0, s.jsx)("span", { children: e.title })],
                                                                            }),
                                                                        },
                                                                        t
                                                                    )
                                                                ),
                                                            }),
                                                        e.tech &&
                                                            (0, s.jsx)("ul", {
                                                                className: "mt-2 flex flex-wrap",
                                                                "aria-label": "Technologies used",
                                                                children: e.tech.map((e, t) => (0, s.jsx)("li", { className: "mr-1.5 mt-2", children: (0, s.jsx)(c.Z, { text: e }) }, t)),
                                                            }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    },
                                    t
                                )
                            ),
                        }),
                        (0, s.jsx)("div", { className: "mt-12", children: (0, s.jsx)(l.Z, { title: "View Full R\xe9sum\xe9", url: "/resume.pdf", className: "font-semibold text-slate-200" }) }),
                    ],
                });
            }
            function education() {
                return (0, s.jsxs)("div", {
                    children: [
                        (0, s.jsx)("ol", {
                            className: "group/list",
                            children: [
                                {
                                    date: "2020 — 2024",
                                    company: { name: "Trakya Üniversitesi", link: "https://www.trakya.edu.tr" },
                                    positions: ["Bachelor of Science in Computer Engineering | GPA 3.0 "],
                                    desc:
                                        "Topics include Data Structures and Algorithms, Calculus, Classical Physics, Numerical Analysis and Statistics, Digital Circuit Design, Operating Systems, Databases, Computer Networks, Object-Oriented Programming, Mobile App Programming and Crpytography."
                                }
                            ].map((e, t) =>
                                (0, s.jsx)(
                                    "li",
                                    {
                                        className: "mb-12",
                                        children: (0, s.jsxs)("div", {
                                            className: "group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50",
                                            children: [
                                                (0, s.jsx)(i, {}),
                                                (0, s.jsx)("header", {
                                                    className: "z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2",
                                                    "aria-label": e.date.replace("—", "to").replace("Dec", "December"),
                                                    children: e.date || "",
                                                }),
                                                (0, s.jsxs)("div", {
                                                    className: "z-10 sm:col-span-6",
                                                    children: [
                                                        (0, s.jsx)("h3", {
                                                            className: "font-medium leading-snug text-slate-200",
                                                            children: e.positions.map((t, a) =>
                                                                (0, s.jsx)(
                                                                    "div",
                                                                    {
                                                                        children:
                                                                            0 === a
                                                                                ? (0, s.jsx)(l.Z, { title: "".concat(t, " \xb7 ").concat(e.company.name), label: "".concat(t, " at ").concat(e.company.name), url: e.company.link, fill: !0 })
                                                                                : (0, s.jsx)("div", { className: "text-slate-500", "aria-hidden": "true", children: t }),
                                                                    },
                                                                    a
                                                                )
                                                            ),
                                                        }),
                                                        (0, s.jsx)("p", { className: "mt-2 text-sm leading-normal", children: e.desc }),
                                                        e.links &&
                                                            (0, s.jsx)("ul", {
                                                                className: "mt-2 flex flex-wrap",
                                                                "aria-label": "Related links",
                                                                children: e.links.map((e, t) =>
                                                                    (0, s.jsx)(
                                                                        "li",
                                                                        {
                                                                            className: "mr-4",
                                                                            children: (0, s.jsxs)("a", {
                                                                                className: "relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300",
                                                                                href: e.url,
                                                                                target: "_blank",
                                                                                rel: "noreferrer noopener",
                                                                                "aria-label": "".concat(e.title, " (opens in a new tab)"),
                                                                                children: [(0, s.jsx)(o.Z, { use: "link", className: "mr-1 h-3 w-3" }), (0, s.jsx)("span", { children: e.title })],
                                                                            }),
                                                                        },
                                                                        t
                                                                    )
                                                                ),
                                                            }),
                                                        e.tech &&
                                                            (0, s.jsx)("ul", {
                                                                className: "mt-2 flex flex-wrap",
                                                                "aria-label": "Technologies used",
                                                                children: e.tech.map((e, t) => (0, s.jsx)("li", { className: "mr-1.5 mt-2", children: (0, s.jsx)(c.Z, { text: e }) }, t)),
                                                            }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    },
                                    t
                                )
                            ),
                        }),
                    ],
                });
            }
            function m() {
                let e = "font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300";
                return (0, s.jsx)("footer", {
                    className: "max-w-md pb-16 text-sm text-slate-500 sm:pb-0",
                    children: (0, s.jsxs)("p", {
                        children: [
                            "This website is a copy of ",
                            " ",
                            (0, s.jsx)("a", { href: "https://brittanychiang.com", className: e, target: "_blank", rel: "noreferrer noopener", "aria-label": "Brittany Chiang", children: "Britany Chiang's" }),
                            " ",
                            "work and is made with",
                            " ",
                            (0, s.jsx)("a", { href: "https://nextjs.org/", className: e, target: "_blank", rel: "noreferrer noopener", "aria-label": "Next.js (opens in a new tab)", children: "Next.js" }),
                            ". ",
                            "I do not own any of the credible work. The template is used for introduction only.",
                        ],
                    }),
                });
            }
            var p = a(1664),
                h = a.n(p);
            function u(e) {
                let { sections: t } = e;
                return (0, s.jsxs)("header", {
                    className: "lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24",
                    children: [
                        (0, s.jsxs)("div", {
                            children: [
                                (0, s.jsx)("h1", { className: "text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl", children: (0, s.jsx)(h(), { href: "/", children: "Kaan Dalkıran" }) }),
                                (0, s.jsx)("h2", { className: "mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl", children: "Software Engineer / Game Developer" }),
                                (0, s.jsx)("p", { className: "mt-4 max-w-xs leading-normal", children: "I build, maintain and update mindkeeping ideas into useful applications." }),
                                (0, s.jsx)("nav", {
                                    className: "nav hidden lg:block",
                                    "aria-label": "In-page jump links",
                                    children: (0, s.jsx)("ul", {
                                        className: "mt-16 w-max",
                                        children: t.map((e, t) =>
                                            e.hideFromNav
                                                ? null
                                                : (0, s.jsx)(
                                                      "li",
                                                      {
                                                          children: (0, s.jsxs)("a", {
                                                              className: "group flex items-center py-3 ".concat(0 === t ? "active" : ""),
                                                              href: "#".concat(e.heading.toLowerCase()),
                                                              children: [
                                                                  (0, s.jsx)("span", {
                                                                      className:
                                                                          "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                                                                  }),
                                                                  (0, s.jsx)("span", {
                                                                      className: "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                                                                      children: e.heading,
                                                                  }),
                                                              ],
                                                          }),
                                                      },
                                                      t
                                                  )
                                        ),
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsx)("ul", {
                            className: "ml-1 mt-8 flex items-center",
                            "aria-label": "Social media",
                            children: [
                                { title: "GitHub", url: "https://github.com/xKhano", icon: "github" },
                                { title: "LinkedIn", url: "https://www.linkedin.com/in/there-are-no-little-details/", icon: "linkedin" },
                                { title: "Email", url: "mailto:kaan51dlkrn@gmail.com", icon: "email" },
                                { title: "WhatsApp", url: "mailto:kaan51dlkrn@gmail.com", icon: "whatsapp" }
                            ].map((e, t) =>
                                (0, s.jsx)(
                                    "li",
                                    {
                                        className: "mr-5 text-xs shrink-0",
                                        children: (0, s.jsxs)("a", {
                                            className: "block hover:text-slate-200",
                                            href: e.url,
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            "aria-label": "".concat(e.title, " (opens in a new tab)"),
                                            title: e.title,
                                            children: [(0, s.jsx)("span", { className: "sr-only", children: e.title }), (0, s.jsx)(o.Z, { use: e.icon, className: "twitter-x" === e.icon ? "h-5 w-5" : "h-6 w-6" })],
                                        }),
                                    },
                                    t
                                )
                            ),
                        }),
                    ],
                });
            }
            var g = a(5675),
                x = a.n(g);
            function f(e) {
                let { title: t, url: a, className: r, border: n = !0 } = e,
                    l = t.trim().split(" "),
                    i = l.pop(),
                    c = l.join(" "),
                    d = n ? "border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none" : "";
                return (0, s.jsx)(h(), {
                    className: "inline-flex items-center font-medium leading-tight text-slate-200 ".concat(r, " group"),
                    href: a,
                    "aria-label": t,
                    children: (0, s.jsxs)("span", {
                        children: [
                            (0, s.jsxs)("span", { className: d, children: [c, " "] }),
                            (0, s.jsxs)("span", {
                                className: "whitespace-nowrap",
                                children: [
                                    (0, s.jsx)("span", { className: d, children: i }),
                                    (0, s.jsx)(o.Z, {
                                        use: "arrow-internal",
                                        className: "ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none",
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            }
            function b() {
                let e = (e) => {
                    let { repoUrl: t } = e,
                        [a, n] = (0, r.useState)(null);
                    return ((0, r.useEffect)(() => {
                        let e = t.split("/")[4];
                        fetch("https://api.github.com/repos/xKhano/".concat(e))
                            .then((e) => e.json())
                            .then((e) => {
                                let { stargazers_count: t } = e;
                                n(t);
                            })
                            .catch((e) => console.error(e));
                    }, [t]),
                    a)
                        ? (0, s.jsxs)("a", {
                              className: "relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300",
                              href: t,
                              target: "_blank",
                              rel: "noreferrer noopener",
                              "aria-label": "".concat(a, " stars on GitHub (opens in a new tab)"),
                              children: [(0, s.jsx)(o.Z, { use: "star", className: "mr-1 h-3 w-3" }), (0, s.jsx)("span", { children: Number(a).toLocaleString("en", { useGrouping: !0 }) })],
                          })
                        : null;
                };
                return (0, s.jsxs)("div", {
                    children: [
                        (0, s.jsx)("ul", {
                            className: "group/list",
                            children: [
                                {
                                    title: "Sinister Remains",
                                    link: "https://store.steampowered.com/app/3930360/Sinister_Remains/",
                                    image: "sinisterRemains.jpg",
                                    alt: "Puzzle, Horror",
                                    tech: ["Unity", "C#"],
                                    desc: "Done software consultancy on the development of the horror game. Handled bugs and added features.",
                                },
                                {
                                    title: "Skullknight",
                                    link: "https://www.youtube.com/watch?v=7oE0xDpzYWo",
                                    image: "skullknight.png",
                                    alt: "2D Soulslike Platformer Game",
                                    tech: ["Unity", "C#"],
                                    desc: "A 2D Platformer game made in a few weeks using Unity game engine. Implemented a state machine on that project and it's mechanics were made to be similar with Soulslike games.",
                                },
                                {
                                    title: "Infinity Corridor",
                                    link: "https://sarpvisuals.itch.io/infinity-corridor",
                                    image: "infinity_corridor.png",
                                    alt: "Bullet Hell Typing Spellcaster Minigame",
                                    tech: ["Unity", "C#"],
                                    desc: "GOATJAM 2025 Entry, game made with a group of three people.",
                                }
                                //{
                                //    title: "Embedded Server",
                                //    link: "https://github.com/xKhano/LocalWebServer-ESP32-IDF",
                                //    image: "embeddedServer.png",
                                //    alt: "Embedded Server",
                                //    desc:
                                //        "A ESP32 embedded device that runs a local web server, providing data access and changability, communicating with an external SPI flash chip.",
                                //    tech: ["Rust", "ESP-IDF", "ESP32"],
                                //    github: "https://github.com/xKhano/LocalWebServer-ESP32-IDF",
                                //}
                            ].map((t, a) =>
                                (0, s.jsx)(
                                    "li",
                                    {
                                        className: "mb-12",
                                        children: (0, s.jsxs)("div", {
                                            className: "group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50",
                                            children: [
                                                (0, s.jsx)(i, {}),
                                                (0, s.jsxs)("div", {
                                                    className: "z-10 sm:order-2 sm:col-span-6",
                                                    children: [
                                                        (0, s.jsx)("h3", { children: (0, s.jsx)(l.Z, { title: t.title, url: t.link, fill: !0 }) }),
                                                        (0, s.jsx)("p", { className: "mt-2 text-sm leading-normal", children: t.desc }),
                                                        t.github && (0, s.jsx)(e, { repoUrl: t.github }),
                                                        t.download &&
                                                            (0, s.jsxs)("a", {
                                                                className: "relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300",
                                                                href: t.download,
                                                                target: "_blank",
                                                                rel: "noreferrer noopener",
                                                                "aria-label": "Over 100,000 installs on Visual Studio Code Marketplace (opens in a new tab)",
                                                                children: [(0, s.jsx)(o.Z, { use: "download", className: "mr-1 h-4 w-4" }), (0, s.jsx)("span", { children: "100k+ Installs" })],
                                                            }),
                                                        t.tech &&
                                                            (0, s.jsx)("ul", {
                                                                className: "mt-2 flex flex-wrap",
                                                                "aria-label": "Technologies used:",
                                                                children: t.tech.map((e, t) => (0, s.jsx)("li", { className: "mr-1.5 mt-2", children: (0, s.jsx)(c.Z, { text: e }) }, t)),
                                                            }),
                                                    ],
                                                }),
                                                (0, s.jsx)(x(), {
                                                    className: "rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1",
                                                    src: t.image,
                                                    alt: t.alt,
                                                    width: 200,
                                                    height: 48,
                                                }),
                                            ],
                                        }),
                                    },
                                    a
                                )
                            ),
                        }),
                    ],
                });
            }
            var v = a(8425),
                w = a(4910);
           
            function k() {
                let e = (0, r.useRef)([]);
                (0, r.useEffect)(() => {
                    let t = document.querySelector(".nav");
                    if (!t || window.innerWidth < 1024) return;
                    let a = "active",
                        s = new IntersectionObserver(
                            (e) => {
                                e.forEach((e) => {
                                    if (e.isIntersecting) {
                                        let s = t.querySelector("a[href].".concat(a));
                                        null == s || s.classList.remove(a);
                                        let r = t.querySelector('a[href="#'.concat(e.target.id, '"]'));
                                        null == r || r.classList.add(a);
                                    }
                                });
                            },
                            { rootMargin: "0% 0% -".concat(70, "% 0%"), threshold: 0 }
                        );
                    e.current.forEach((e) => {
                        e && s.observe(e);
                    });
                }, []);
                let t = [
                    { heading: "About", label: "About me", component: (0, s.jsx)(n, {}) },
                    { heading: "Experience", label: "Work experience", component: (0, s.jsx)(d, {}) },
                    { heading: "Education", label: "Credible Educations I've taken", component: (0, s.jsx)(education, {}) },
                    { heading: "Projects", label: "Selected projects", component: (0, s.jsx)(b, {}) }
                ];
                return (0, s.jsxs)("div", {
                    className: "lg:flex lg:justify-between lg:gap-4",
                    children: [
                        (0, s.jsx)(v.Z, { pathname: "/", title: "Kaan Dalkıran" }),
                        (0, s.jsx)(u, { sections: t }),
                        (0, s.jsxs)("main", {
                            id: "content",
                            className: "pt-24 lg:w-1/2 lg:py-24",
                            children: [
                                t.map((t, a) =>
                                    (0, s.jsxs)(
                                        "section",
                                        {
                                            id: t.heading.toLowerCase(),
                                            className: "mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24",
                                            "aria-label": t.label,
                                            ref: (t) => (e.current[a] = t),
                                            children: [
                                                (0, s.jsx)("div", {
                                                    className:
                                                        "sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0",
                                                    children: (0, s.jsx)("h2", { className: "text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only", children: t.heading }),
                                                }),
                                                t.component,
                                            ],
                                        },
                                        a
                                    )
                                ),
                                (0, s.jsx)(m, {}),
                            ],
                        }),
                        
                    ],
                });
            }
        },
    },
    function (e) {
        e.O(0, [664, 506, 774, 888, 179], function () {
            return e((e.s = 8312));
        }),
            (_N_E = e.O());
    },
]);
