import { ServerComponentProps } from "@/app/servers/page";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { statusToText } from "@/types/server";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";

export function ServerDetails({ server }: ServerComponentProps) {
  return (
    <>
      <div className="flex h-full items-start justify-center p-2 mt-8">
        <div className="space-y-4 w-full h-full container p-4">
          <div className="flex-1 space-y-4">
            <div className="flex content-stretch">
              <Avatar className="ml-2">
                <AvatarImage src={`/${server.system_info.os_type}.svg`} />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <div className="flex flex-col ml-16 text-right w-full">
                <h2 className="block w-full text-xl font-bold">
                  {server.server_name}
                </h2>
                <Button variant="link" className="text-right pl-4 pr-0">
                  <h4 className="block w-full text-md font-bold">
                    <Link href={`/customers/${server.org_id}`} target="_blank">
                      {server.org_name}
                    </Link>
                  </h4>
                </Button>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="flex h-full flex-col">
              <div className="flex items-center p-2">
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="capitalize">
                    {statusToText(server.status)}
                  </Badge>
                  <Badge variant="outline" className="capitalize">
                    {server.system_info.os_type}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex-1 whitespace-pre-wrap p-1 text-sm">
              <ScrollArea className="h-screen">
                <div className="grid grid-cols-2 ">
                  <div className="flex flex-col gap-2 p-1 pt-0 mb-2">
                    <div
                      className={cn(
                        "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent bg-muted"
                      )}
                    >
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Last Session</div>
                          </div>

                        </div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        <span className="font-bold">Date: </span>
                        07/01/2024
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        <span className="font-bold">Time: </span>
                        17:55 
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        <span className="font-bold">Duration: </span>{" "}
                        1h 32m
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 p-1 pt-0 mb-2">
                    <button className="w-full h-full bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-md px-8 font-bold text-xl">
                      Connect
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex flex-col gap-2 p-1 pt-0 mb-2">
                    <div
                      className={cn(
                        "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent bg-muted"
                      )}
                    >
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">
                              Customer Overview
                            </div>
                          </div>
                          <div
                            className={cn("ml-auto text-xs text-foreground")}
                          ></div>
                        </div>
                        <div className="text-xs font-medium"></div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        <span className="font-bold">Name TODO</span>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        <span className="font-bold capitalize">
                          How many servers TODO
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 p-1 pt-0 mb-2">
                    <div
                      className={cn(
                        "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent bg-muted"
                      )}
                    >
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Details</div>
                          </div>
                          <div
                            className={cn("ml-auto text-xs text-foreground")}
                          ></div>
                        </div>
                        <div className="text-xs font-medium"></div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        <span className="font-bold">Version:</span>{" "}
                        {server.system_info.version}
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        <span className="font-bold capitalize">
                          {server.system_info.os_type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 h-full min-h-36">
                  <div className="flex flex-col gap-2 p-1 pt-0 mb-2">
                    <div
                      className={cn(
                        "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent bg-muted"
                      )}
                    >
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Links</div>
                          </div>
                          <div
                            className={cn("ml-auto text-xs text-foreground")}
                          ></div>
                        </div>
                        <div className="text-xs font-medium"></div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        <span className="font-bold capitalize">
                        TODO
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </div>
            <Separator className="mt-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
