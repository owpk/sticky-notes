import { ContentState, Editor, EditorState, Modifier } from 'draft-js';
import React, { FunctionComponent, useState } from 'react';
import { Button } from 'react-bootstrap';

export interface NoteEditorProps {
    text: string;
    parentClickCallback?: () => void;
    changeTextCallback?: (content: string) => void;
}

export const NoteEditor: FunctionComponent<NoteEditorProps> = (
    noteEditorProps: NoteEditorProps,
) => {
    const initialEdiorState: EditorState = EditorState.createWithContent(
        ContentState.createFromText(noteEditorProps.text),
    );
    const _initialEdiorState = EditorState.moveFocusToEnd(initialEdiorState);

    const [editorState, changeEditorState] = useState(_initialEdiorState);

    const handleChange = (e: EditorState) => {
        changeEditorState(e);
        noteEditorProps.changeTextCallback?.(editorState.getCurrentContent().getPlainText());
    };

    const onTabHandling = (e: React.KeyboardEvent<{}>) => {
        e.preventDefault();
        let currentState = editorState;
        let newContentState = Modifier.replaceText(
            currentState.getCurrentContent(),
            currentState.getSelection(),
            '\t',
        );
        changeEditorState(EditorState.push(currentState, newContentState, 'insert-characters'));
    };

    const handleExitEditor = () => {
        noteEditorProps.parentClickCallback?.();
    };

    return (
        <div onBlur={handleExitEditor}>
            <Editor
                editorState={editorState}
                onChange={(e) => handleChange(e)}
                onTab={(e) => onTabHandling(e)}
            />
            <hr />
            <Button onClick={handleExitEditor} size="sm">
                Save
            </Button>
        </div>
    );
};
