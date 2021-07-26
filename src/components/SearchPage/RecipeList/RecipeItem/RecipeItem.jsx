import React, { Component } from 'react'

export default class RecipeItem extends Component {
  render() {
    const { info } = this.props;
    return (
      <div>
        <h3>{info.title}</h3>
        <img src={info.image} alt={info.id} />
        <h4>{}</h4>
        <p>{info.instructions}</p>
        
      </div>
    )
  }
}
