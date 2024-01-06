"use client";
import { MainContainer } from "@/components/misc/main-container";
import { ViewServer } from "@/components/servers/view";

export default function View() {
  return (
    <MainContainer>
      <ViewServer host="192.168.1.42" port={5900} />
    </MainContainer>
  );
}
