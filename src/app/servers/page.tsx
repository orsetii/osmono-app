"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ServerList } from "@/components/servers/list";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRef, useState } from "react";
import { DefaultServer, Server } from "@/types/server";
import { ServerDetails } from "@/components/servers/details";



export default function Servers() {
    const [currentServerInfo, setServerInfo] = useState(DefaultServer())


  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border min-h-[calc(95vh-3.5rem)] max-h-[calc(95vh-3.5rem)]"
    >
      <ResizablePanel defaultSize={55}>
        <div className="flex h-full max-h-full items-center justify-center p-3">
          <ServerList server={currentServerInfo} />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={45}>
        <ServerDetails server={currentServerInfo} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export type ServerComponentProps = {
    server: Server
}


