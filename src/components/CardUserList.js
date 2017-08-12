import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { getUsers } from '../api'
import UserInfo from './UserInfo'

class CardUserList extends Component {

    state = {
        users:[],
        fetching: true,
        currentPage: 1
    }

    componentDidMount(){
        window.addEventListener('scroll', this._onScroll)
        this.getListUsers()
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this._onScroll)
    }

    _onScroll = () =>{
        if(this.state.fetching){
            return
        }

        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100){
            this.getListUsers()
        }
    }

    getListUsers(){
        // Set Loading state
        this.setState({fetching:true})

        getUsers(this.state.currentPage)
        .then(response =>
            this.setState({ 
                users: this.state.users.concat(response.data.results),
                fetching: false,
                currentPage: this.setState.currentPage + 1
            })
        )

    }

    render() {
        const {users} = this.state

        return(
            <div>
                {
                    users.map((user,index) => {
                        return (
                            <div key={index} className="column is-3" style={{display: 'inline-block'}}>
                                <Link to={`/carduser/${user.name.first}`}>
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                            <img src={user.picture.large} alt="Image" />
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">
                                            <div className="media-left">
                                                <figure className="image is-48x48">
                                                <img src={user.picture.thumbnail} alt="Image" />
                                                </figure>
                                            </div>
                                            <div className="media-content">
                                                <p className="title is-4">{user.name.first}</p>
                                                <p className="subtitle is-6">{user.email}</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
                { this.state.fetching ? <p className="column is-12-mobile has-text-centered">Loading...</p> : null}
                <Route path="/carduser/:name" component={UserInfo}/>
            </div>
        )
    }
}

export default CardUserList