import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import CardUserList from './CardUserList'

class CardUser extends Component {
    render() {
        return(
            <div>
                <section className="section">
                    <div className="container">
                        <h1 className="title">Section</h1>
                        <h2 className="subtitle">
                            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                        </h2>
                        <CardUserList/>
                    </div>
                </section>
            </div>
        )
    }
}

export default CardUser