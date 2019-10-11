import React, { Component } from 'react'
import './Card.css'

class Card extends Component{
    render(props){
        return(
            <div className="cards">
                <img className="header-img" src={this.props.image} alt="city"/>
                <h2 className="header-title">{this.props.header}</h2>
                <p className="cards-content">{this.props.text}</p>
                <a href={this.props.link}><button className="btn-more">{this.props.btn}</button></a>
            </div>
        )
    }
}

export default Card