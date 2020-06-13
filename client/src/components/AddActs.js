import React, { Component } from 'react';

export default class AddActs extends Component {
    submitAct(event) {
        event.preventDefault();
        let act = {
            title: this.refs.title.value,
            text: this.refs.text.value,
            quota: this.refs.quota.value,
            type: this.refs.type.value
        }

        fetch("http://localhost:8070/api/acts", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(act)
        })
        .then(response => response.json());

        window.location.reload();
    }
    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.submitAct.bind(this)}>
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Title" ref="title" type="text" className="validate" />
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="input-field col s6">
                        <input ref="text" type="text" className="validate" />
                        <label htmlFor="text">Description</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input ref="quota" type="text" className="validate" />
                        <label htmlFor="quota">Quota</label>
                    </div>
                    <div className="input-field col s6">
                        <select ref="type" className="browser-default">
                            <option value="people">People</option>
                            <option value="cash">Cash</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
                </div>
                </form>
            </div>
        )
    }
}