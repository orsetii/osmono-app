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
  os_type: "windows" | "linux" | "macos";
  version: string
}

export function DefaultServer(): Server {
  return {
    id: "0000-0000-0000-0000",
    status: 1,
    org_name: "EXAMPLE_ORG",
    server_name: "EXAMPLE_SERVER",
    org_id: "0000-0000-0000-0000",
    last_activity: "05:17",
    system_info: {
      os_type: "windows",
      version: "23H2"
    }
  }
}