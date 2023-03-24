import React, { FunctionComponent, useState } from 'react';
import './Note.css';
import { Badge, Button, Card, CloseButton, Col, Collapse, Row } from 'react-bootstrap';
import { MarkdownView } from './MarkdownView';
import { NoteEditor } from './NoteEditor';
import { ToggleECButton } from './ToggleECButton';

export interface GroupProps {
    color: string
    name: string
}

export interface NoteProps {
    id?: number 
    title?: string
    group?: GroupProps
    openToGlobal?: boolean
    removeCardCallback?: (id: number) => void
    text: string
    open: boolean
}

export const Note: FunctionComponent<NoteProps> = (noteProps: NoteProps) => {

    const [isOpen, setOpen] = useState(noteProps.open);
    const [editorState, setEditorState] = useState(true);
    const [noteContent, setNoteContent] = useState(noteProps.text);

    const handleExpandClick = () => {
        setOpen(!isOpen);
    }

    React.useEffect(() => {
        setOpen(!Boolean(noteProps.openToGlobal))
    }, [!Boolean(noteProps.openToGlobal)])

    const handleCardClick = () => {
        setEditorState(!editorState)
    }

    const card = editorState ?
        <MarkdownView text={noteContent}
            parentClickCallback={handleCardClick}/> :
        <NoteEditor text={noteContent} 
            parentClickCallback={handleCardClick}
            changeTextCallback={setNoteContent}
        />

    const closeNote = () => {
        noteProps.removeCardCallback?.(Number(noteProps.id));
    }

    return(
        <Card className="Note">
            <Card.Header style={{background: noteProps.group?.color}}>
                <Row>
                    <Col md="auto">
                        <Badge bg="secondary">{noteProps.group?.name}</Badge> {' '}
                    </Col>
                    <Col>
                        {noteProps.title}
                    </Col>
                    <Col md="auto">
                        History
                    </Col>
                    <Col md="auto">
                        <ToggleECButton state={isOpen}
                            callbackFn={handleExpandClick}/>
                    </Col>
                    <Col md="auto">
                        <CloseButton onClick={closeNote}/>
                    </Col>
                </Row>
            </Card.Header>
            <Collapse in={isOpen}>
                <Card.Body>
                    {card}
                </Card.Body>
            </Collapse>
        </Card>
    )
}
