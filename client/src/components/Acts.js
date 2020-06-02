import React, { Component } from 'react';
import SingleAct from './SingleAct';
import AddActs from './AddActs';

export default class Acts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            acts: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8070/api/acts')
        .then(response => response.json())
        .then(data => this.setState({acts: data}))
    }

    render() {
        return (
            <div>
                <div className="row">
                    <AddActs />
                </div>
                <div className="row">
                    {
                        this.state.acts.map((item) => (
                            <SingleAct key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        )
    }
}