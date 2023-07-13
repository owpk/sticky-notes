import { create } from 'zustand'
import { NoteProps } from '../components/Note'

export interface NoteListStateProps {
    notes: NoteProps[]
    addNote: (note: NoteProps) => void
    removeNote: (id: number) => void
}

const green = '#e6f2ed'
const red = '#f2e6e6'
const blue = '#e6f0f2'

const noteList: NoteProps[] = [
    {
        id: 1,
        text: '```java\npublic class MyClass {\n\tpublic static void main(String...args) {\n\t}\n}\n```',
        group: { name: 'java', color: green },
        title: 'Hello world example',
        open: true,
    },
    {
        id: 2,
        text: '_default mark_',
        title: 'something incredible',
        open: true,
    },
    {
        id: 3,
        text: "### default markdown text\n  - first step\n - second step\n\t  ```code block```\n```python\n def fun() {\n\tprint('Hello world')\n}",
        title: 'sad',
        open: false,
        group: { color: red, name: 'aboba' },
    },
]

export const useStore = create<NoteListStateProps>((set) => ({
    notes: noteList,

    addNote: (note: NoteProps) => {
        set((state) => ({
            notes: [note, ...state.notes],
        }))
    },

    removeNote: (id: number) => {
        set((state) => ({
            notes: state.notes.filter((n) => n.id !== id),
        }))
    },
}))
