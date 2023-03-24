import { NotesList } from '../components/NotesList';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Container } from 'react-bootstrap';
import { useCallback, useState } from 'react';
import { NoteProps } from '../components/Note';

const green = "#e6f2ed";
const red = "#f2e6e6";
const blue = "#e6f0f2";

const noteList: NoteProps[] = [
    {id: 1, text: "```java\npublic class MyClass {\n\tpublic static void main(String...args) {\n\t}\n}\n```", group: {name: "java", color: green}, title: "Hello world example", open: true},
    {id: 2, text: "_default mark_", title: "something incredible", open: true},
    {id: 3, text: "### default markdown text\n  - first step\n - second step\n\t  ```code block```\n```python\n def fun() {\n\tprint('Hello world')\n}", title: "sad", open: false, group: {color: red, name: "aboba"}}
]

function App() {

    const [notesState, setNotesState] = useState(noteList)

    const addNoteCallback = (note: NoteProps) => {
        setNotesState([note, ...notesState])
    }

    const removeNoteCallback = (noteId: number) => {
        console.log('removing')
        setNotesState(prevState => prevState.filter(note => note.id !== noteId))
    }

    return (
        <Container>
            <NotesList 
                notes={notesState} 
                addNoteCallback={addNoteCallback}
                removeNoteCallback={removeNoteCallback}
            />
        </Container>
    );
}

export default App;
