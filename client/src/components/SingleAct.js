import React, { Component } from 'react';

const SingleAct = ({item}) => (
    
<div className="row">
    <div className="col s12 m6">
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{item.title}</span>
                <p>{item.text}</p>
            </div>
            <div className="card-action">
                <p>{item.quota} {item.type}</p>
                <p>{item.current}</p>
            </div>
        </div>
    </div>
</div>
)

export default SingleAct;