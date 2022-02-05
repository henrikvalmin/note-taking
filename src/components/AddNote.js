import { Component } from "react";
import NoteRep from "../NoteRep.js";

export default class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = { header: "", content: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = document.querySelector("#form");
        let header = document.querySelector("#form input:first-child");
        let h = header.value;
        let c = document.querySelector("#form textarea").value;
        this.props.addNote(new NoteRep(h, c));
        this.setState({ header: "", content: "" });
        header.focus();
    }

    render() {
        return (
            <div className="border col-3 position-relative mx-2 my-4 note">
                <form
                    id="form"
                    autoComplete="off"
                    className="p-3 w-100 h-100"
                    onSubmit={this.handleSubmit}
                    onKeyDown={(event) => {
                        if (event.key === "Enter" && !event.shiftKey) {
                            event.preventDefault();
                            this.handleSubmit(event);
                        }
                    }}
                >
                    <input
                        value={this.state.header}
                        onInput={(event) => {
                            this.setState({ header: event.target.value });
                        }}
                        type="text"
                        className="italic fs-5 pb-2 border-0 text-center border-bottom bg-transparent text-white"
                        name="header"
                    />
                    <textarea
                        value={this.state.content}
                        onInput={(event) => {
                            event.target.style.height = "auto";
                            event.target.style.height =
                                event.target.scrollHeight + "px";
                            this.setState({ content: event.target.value });
                        }}
                        className="mt-2 mb-0 w-100 px-2 fs-6 bg-transparent text-white"
                        name="content"
                    />
                    <input
                        type="submit"
                        className="top-left-button add"
                        value=""
                    />
                </form>
            </div>
        );
    }
}
