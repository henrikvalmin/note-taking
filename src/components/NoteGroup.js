import Note from "./Note";
import AddNote from "./AddNote";

export default function NoteGroup(props) {
    return (
        <div className="resp row justify-content-evenly align-items-start">
            <h2 className="mb-5">Notes</h2>
            <AddNote addNote={props.addNote} />
            {props.notes.map((note) => (
                <Note
                    key={note.id}
                    removeNote={props.removeNote}
                    id={note.id}
                    header={note.header}
                    content={note.content}
                />
            ))}
        </div>
    );
}
