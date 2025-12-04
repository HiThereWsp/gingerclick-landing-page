"use client"

import { useEffect } from "react";

export default function CalendarEmbed() {
  useEffect(() => {
    // Cal inline embed code
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize Cal
    (window as any).Cal("init", "intro-call-45-min", { origin: "https://app.cal.com" });

    // Setup inline calendar
    (window as any).Cal.ns["intro-call-45-min"]("inline", {
      elementOrSelector: "#my-cal-inline-intro-call-45-min",
      config: { "layout": "month_view", "theme": "dark" },
      calLink: "andy-gtd/intro-call-45-min",
    });

    (window as any).Cal.ns["intro-call-45-min"]("ui", { "theme": "dark", "hideEventTypeDetails": false, "layout": "month_view" });
  }, []);

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden">
      <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id="my-cal-inline-intro-call-45-min"></div>
    </div>
  );
}










