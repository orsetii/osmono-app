import { Dispatch, SetStateAction } from "react";
import { uuid } from "uuidv4";



export type Server = {
  id: string;
  status: number;
  server_name: string;
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
    id: uuid(),
    status: 1,
    org_name: "EXAMPLE_ORG",
    server_name: "EXAMPLE_SERVER",
    org_id: uuid(),
    last_activity: "05:17",
    system_info: {
      os_type: "windows",
      version: "23H2"
    }
  }
}