import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { NotesList } from '../components/NotesList';

import './App.css';
import { useStore } from '../state/NoteListState';


function App() {
    const {notes, addNote, removeNote} = useStore()
    return (
        <>
            <Container>
                <NotesList
                    notes={notes}
                    addNoteCallback={addNote}
                    removeNoteCallback={removeNote}
                />
            </Container>
        </>
    );
}

export default App;
