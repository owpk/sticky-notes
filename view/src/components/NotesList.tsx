import React, { FunctionComponent, useState } from 'react';
import { Button, Form, Nav, NavDropdown, Stack } from 'react-bootstrap';
import { Note, NoteProps } from './Note';
import './NotesList.css';
import { ToggleECButton } from './ToggleECButton';

export interface NotesListProps {
    notes: NoteProps[];
    addNoteCallback?: (notes: NoteProps) => void;
    removeNoteCallback?: (note_id: number) => void;
}

export const NotesList: FunctionComponent<NotesListProps> = (props: NotesListProps) => {
    const [parentExpandState, setExpandState] = useState(false);

    const handleButtonClick = () => {
        setExpandState(!parentExpandState);
    };

    const addNote = () => {
        props.addNoteCallback?.({
            id: props.notes.length,
            text: ` aaa ${props.notes.length}`,
            title: '',
            open: true,
        });
    };

    return (
        <Stack gap={3} className="col-md-5 mx-auto NotesList">
            <Stack direction="horizontal" gap={1}>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavDropdown title="Sort" id={`offcanvasNavbarDropdown-expand-true`}>
                        <NavDropdown.Item href="#action3">By groups</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">By date</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Button onClick={addNote}>Create</Button>
                <ToggleECButton state={!parentExpandState} callbackFn={handleButtonClick} />
            </Stack>
            {props.notes.map((note, idx) => {
                return (
                    <Note
                        key={props.notes.length - idx}
                        id={note.id}
                        text={note.text}
                        title={note.title}
                        open={note.open}
                        group={note.group}
                        openToGlobal={parentExpandState}
                        removeCardCallback={(id: number) => {
                            props.removeNoteCallback?.(id);
                        }}
                    />
                );
            })}
        </Stack>
    );
};
