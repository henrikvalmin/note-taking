import { Component } from "react";

export default class Note extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="border p-3 col-3 position-relative mx-2 my-4 note">
                <h3 className="italic fs-5 pb-2 border-bottom">
                    {this.props.header}
                </h3>
                <p className="align-left w-100 mb-0 fs-6">
                    {this.props.content}
                </p>
                <input
                    onClick={(event) => this.props.removeNote(this.props.id)}
                    type="button"
                    className="top-left-button remove"
                />
            </div>
        );
    }
}
