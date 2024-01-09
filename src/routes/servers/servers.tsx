import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ServerList } from "@/components/servers/list";
import { ServerDetails } from "@/components/servers/details";
import { useState } from "react";
import { Server } from "@/types/server";

export default function Servers() {
  const [currentServerInfo, setServerInfo] = useState<Server | undefined>(
    undefined
  );




  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border min-h-[calc(95vh-3.5rem)] max-h-[calc(95vh-3.5rem)]"
      >
        <ResizablePanel defaultSize={65} >
          <div className="flex h-full max-h-full items-center justify-center p-3">
            <ServerList server={currentServerInfo} setServer={setServerInfo} />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={35}> 
          <ServerDetails server={currentServerInfo} setServer={setServerInfo} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
