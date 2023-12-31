import { Dispatch, SetStateAction } from "react";


export type ServerComponentProps = {
  server?: Server,
  setServer: Dispatch<SetStateAction<Server | undefined>>
}

export type Server = {
  id: string;
  status: number;
  name: string;
  org_name: string;
  org_id: string;
  last_activity: string;
  system_info: SystemInfo
};

export type SystemInfo = {
  os_type: "windows" | "macos" | "ubuntu" 
            | "centos" | "redhat" | "debian";
  version: string
}

export function statusToText(status: number): string {
  switch (status) {
    case 0:
      return "offline";
    case 1:
      return "online";
    case 2:
      return "issues";
    default:
      return "unknown"

  }
}


export function statusToEmoji(status: number): string {
  switch (status) {
    case 0:
          return "🔴"
    case 1:
          return "🟢"
    case 2:
          return "🟡"
    default:
          return "🟣"
  }
}



export function DefaultServer(): Server {
  return {
    id: crypto.randomUUID(),
    status: 1,
    org_name: "EXAMPLE_ORG",
    name: "EXAMPLE_SERVER",
    org_id: crypto.randomUUID(),
    last_activity: "05:17",
    system_info: {
      os_type: "windows",
      version: "23H2"
    }
  }
}