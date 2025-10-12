"use client";

import { defaultValueCtx, Editor, rootCtx } from "@milkdown/kit/core";
import type { FC } from "react";

import { commonmark } from "@milkdown/kit/preset/commonmark";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { nord } from "@milkdown/theme-nord";
import { ProsemirrorAdapterProvider, usePluginViewFactory } from "@prosemirror-adapter/react";

import { tooltip, TooltipView } from "./Tooltip";

import "@milkdown/theme-nord/style.css";
import { EditorLogic } from "./editor-logic";

const markdown = `# Milkdown React Tooltip

> You're scared of a world where you're needed.

This is a demo for using Milkdown with **React**.
Select some texts to see the tooltip.`;

export const Home: FC = () => {


  return <MilkdownProvider>
            <ProsemirrorAdapterProvider>
                <EditorLogic modified_content={markdown}/>
            </ProsemirrorAdapterProvider>
        </MilkdownProvider>;
};

export default Home;
