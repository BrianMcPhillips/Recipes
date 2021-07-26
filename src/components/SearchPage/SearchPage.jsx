import React, { Component } from 'react';
import request from 'superagent';
import RecipeList from './RecipeList/RecipeList';

export default class SearchPage extends Component {
  state = {
    recipeData: []
  }

  componentDidMount = async() => {
    const data = await request.get(`https://api.spoonacular.com/recipes/random?number=5&tags=dessert&apiKey=${process.env.REACT_APP_API_KEY}`);

    this.setState({ recipeData: data.body.recipes });
    console.log('-------->>>>>>>', this.state.recipeData);
    
  }
  render() {
    const { recipeData } = this.state;
    return (
      <div>
        <RecipeList data={recipeData}/>
      </div>
    )
  }
}
