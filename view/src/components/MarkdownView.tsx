import React, { FunctionComponent, useState } from 'react';
import Markdown from 'react-markdown';
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export interface MarkdownViewProps {
    text: string;
    parentClickCallback?: () => void;
}

export const MarkdownView: FunctionComponent<MarkdownViewProps> = (props: MarkdownViewProps) => {
    const handleClick = () => {
        props.parentClickCallback?.();
    };

    return (
        <div onClick={handleClick}>
            <Markdown
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');

                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={materialLight}
                                PreTag="div"
                                language={match[1]}
                                children={String(children).replace(/\n$/, '')}
                                {...props}
                            />
                        ) : (
                            <code className={className ? className : ''} {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            >
                {props.text}
            </Markdown>
        </div>
    );
};
