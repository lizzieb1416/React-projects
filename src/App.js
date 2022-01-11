import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => this.setState({ recipes: data }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { recipes, searchField } = this.state;
    const filteredRecipes = recipes.filter(recipe => 
      recipe.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    return (
      <div className="App">
        <h1>Hungry?</h1>
        <SearchBox
          placeholder='search dish'
          handleChange={this.handleChange}
        />
        <CardList recipes={filteredRecipes}/>
      </div>
    )
  }

}

export default App;
