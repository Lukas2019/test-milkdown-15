import React, {StrictMode} from "react";
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/kit/core';
import { history } from '@milkdown/kit/plugin/history';
import { listener, listenerCtx } from "@milkdown/kit/plugin/listener";
import { commonmark } from '@milkdown/kit/preset/commonmark';
import { Milkdown, useEditor, MilkdownProvider } from '@milkdown/react';
import {ProsemirrorAdapterProvider} from "@prosemirror-adapter/react";
import { nord } from '@milkdown/theme-nord';
import { usePluginViewFactory } from '@prosemirror-adapter/react';
import { tooltip, TooltipView } from './Tooltip';
import '@milkdown/theme-nord/style.css';
import type { FC } from 'react';

export interface EditorLogicProps {
    modified_content: string;
    postId?: number;
    platform?: string;
    // eslint-disable-next-line no-unused-vars
    onAutoSave?: (markdown: string, postId?: number, platform?: string) => void;
}

export const EditorLogic: FC<EditorLogicProps> = ({ modified_content, postId, platform, onAutoSave }) => {
    const pluginViewFactory = usePluginViewFactory();

    useEditor((root) => {
        return Editor
            .make()
            .use(history)
            .use(commonmark)
            .use(listener)
            .use(tooltip)
            .config(ctx => {
                ctx.set(rootCtx, root)
                ctx.set(defaultValueCtx, modified_content)
                ctx.set(tooltip.key, {
                    view: pluginViewFactory({
                        component: TooltipView,
                    }),
                })
            })
            .config(nord)
    }, [postId, platform, modified_content, onAutoSave])

    return <Milkdown />
}