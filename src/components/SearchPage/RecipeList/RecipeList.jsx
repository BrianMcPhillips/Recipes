import React, { Component } from 'react';
import RecipeItem from './RecipeItem/RecipeItem';

export default class RecipeList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {
          data.map(recipe => <RecipeItem key={recipe.id} info={recipe}/>)
        }
      </div>
    )
  }
}
