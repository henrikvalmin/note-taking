import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import NoteGroup from "./components/NoteGroup";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        };
        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }

    addNote(note) {
        this.setState({ notes: [note, ...this.state.notes] });
    }

    removeNote(id) {
        this.setState({
            notes: this.state.notes.filter((note) => note.id !== id),
        });
    }

    render() {
        return (
            <div className="App w-100">
                <header className="App-header w-100 pt-5 d-flex align-items-start">
                    <NoteGroup
                        addNote={this.addNote}
                        removeNote={this.removeNote}
                        notes={this.state.notes}
                    />
                </header>
            </div>
        );
    }
}
