import React, { Component } from 'react';
import $ from 'jquery';
import PetProjects from './Components/PetProjects';
import AddPet from './Components/AddPet';
import uuid from 'uuid';
import Todos from './Components/Todos'

class App extends Component {
    /*constructor(){
      super();
      this.state = {
        game: []
      }
    }*/

    /*getGame(){
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        datatype: 'json',
        cache: false,
        success: function(data){
          this.setState({game: data}, function(){
            console.log(this.state);
          });
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
        }
      });
    }

    getGames(){
      this.setState({petsArray: [
        {
          id:uuid.v4(),
          gameName: 'Super Mario Sunshine',
          gameType: 'GameCube'
        },
        {
          id:uuid.v4(),
          gameName: "Luigi's Mansion",
          gameType: 'GameCube'
        }
      ]});
    }*/

    /*componentWillMount(){
      this.getProjects();
      this.getTodos();
    }*/

    /*componentDidMount(){
      this.getTodos();
    }*/

    /*handleAddPet(pet){
      //console.log(pet);
      let petsArray = this.state.petsArray;
      petsArray.push(pet);
      this.setState({petsArray:petsArray});
    }*/

    /*handleDeletePet(id){
      console.log('test app');
      let petsArray = this.state.petsArray;
      let index = petsArray.findIndex(x => x.id === id);
      petsArray.splice(index, 1);
      this.setState({petsArray:petsArray});
    }*/

    render() {
        return (
            <div className="container">
                Game Collection List

            </div>
        );
    }
}

export default App;
