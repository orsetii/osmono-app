import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "app/components/ui/resizable";
import { ServerList } from "app/components/servers/list";
import { Dispatch, SetStateAction, useState } from "react";
import { DefaultServer, Server } from "app/types/server";
import { ServerDetails } from "app/components/servers/details";




export default function Servers() {
    const [currentServerInfo, setServerInfo] = useState(DefaultServer())
    const [test, setTest] = useState(false)


  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border min-h-[calc(95vh-3.5rem)] max-h-[calc(95vh-3.5rem)]"
    >

      <ResizablePanel defaultSize={55}>
        <div className="flex h-full max-h-full items-center justify-center p-3">
          <ServerList server={currentServerInfo} setServer={setServerInfo} />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={45}>
        <ServerDetails server={currentServerInfo} setServer={setServerInfo} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export type ServerComponentProps = {
    server: Server
    setServer: Dispatch<SetStateAction<Server>>
}
