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


export function ServerDetails({server}: ServerComponentProps) {
  return (
    <>
      <div className="flex h-full items-start justify-center p-2 mt-8">
        <div className="space-y-4 w-full h-full container p-4">
          <div className="flex-1 space-y-4">
            <div className="flex items-end content-stretch">
              <Avatar>
                <AvatarImage src={`/${server.system_info.os_type}.svg`} />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <div className="flex flex-col ml-16 items-end content-end">
                <h2 className="block w-full text-xl font-bold">
                {server.server_name}
                </h2>
                <h4 className="block w-full text-md font-bold">
                {server.org_name}
                </h4>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">m@example.com</p>
                </div>
              </div>
              <Select defaultValue="edit">
                <SelectTrigger className="ml-auto w-[110px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="edit">Can edit</SelectItem>
                  <SelectItem value="view">Can view</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/05.png" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">b@example.com</p>
                </div>
              </div>
              <Select defaultValue="view">
                <SelectTrigger className="ml-auto w-[110px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="edit">Can edit</SelectItem>
                  <SelectItem value="view">Can view</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/01.png" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="text-sm text-muted-foreground">p@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
