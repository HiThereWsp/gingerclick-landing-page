"use client"

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalendarEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"column_view"});
    })();
  }, [])

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden">
      <Cal 
        namespace="30min"
        calLink="andy-gtd/30min"
        style={{width:"100%",height:"100%",overflow:"scroll"}}
        config={{"layout":"column_view","theme":"dark"}}
      />
    </div>
  );
}
