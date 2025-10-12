"use client";

import { MilkdownProvider } from "@milkdown/react";
import { ProsemirrorAdapterProvider } from "@prosemirror-adapter/react";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <MilkdownProvider>
      <ProsemirrorAdapterProvider>{children}</ProsemirrorAdapterProvider>
    </MilkdownProvider>
  );
}
