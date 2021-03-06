import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as heroAction from './actions/heroAction';

import Menu from './components/Menu';
class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        hero: {
          name: "",
          description: ""
        }
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, data) {
      const { hero } = this.state;
      hero[e.target.name] = e.target.value
      this.setState({
        hero
      })
    }

    handleSubmit(e) {
      e.preventDefault();
      let currentstate = this.state;
      if (currentstate.hero.id === undefined) {
          let hero = {
            id: Date.now(),
            name: this.state.hero.name,
            description: this.state.hero.description
          }

          this.setState({
            hero: {
              name: '',
              description: ''
             }
          });
          this.props.createHero(hero);
      } else {

        let hero = {
          id:  this.state.hero.id,
          name: this.state.hero.name,
          description: this.state.hero.description
        }

        this.setState({
          hero: {
            name: '',
            description: ''
           }
        });
          this.props.editHero(hero);
      }
    }

    listView(data, index) {
      return (
        <li key={index}>
          <span>{data.name} : </span>
          <span>{data.description}</span>
          <button onClick={(e) => this.removeHero(e, data)}>Remove</button>
          <button onClick={(e) => this.editHero(e, data)}>Edit</button>
        </li>
      )
    }

    removeHero(e, index) {
      e.preventDefault();
      this.props.removeHero(index);
    }

    editHero(e, data) {
      e.preventDefault();
      this.setState({
        hero: {
          id: data.id,
          name: data.name,
          description: data.description
         }
      });
    }

  render() {
  const { hero } = this.state
    return (
      <div>
        <h1>React Hero Tour</h1>
        <Menu />
        <hr/>
        <div>
          <h3>Add hero</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" value= {hero.name} onChange={this.handleChange}/>
            <br/>
            <input type="text" name="description" value= {hero.description} onChange={this.handleChange}/>
            <br/>
            <input type="submit"/>
          </form>
          <hr/>
          {
            <ul className="list-group">
              { this.props.heroes && this.props.heroes.length ?
                this.props.heroes.map((hero, i) => this.listView(hero, i)) : null}
            </ul>
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
    return {
      heroes: state.heroes
    }
  };

const mapDispatchToProps = (dispatch) => {
    return {
       createHero: hero =>dispatch(heroAction.createHero(hero)),
       removeHero: index => dispatch(heroAction.removeHero(index)),
       editHero: hero => dispatch(heroAction.editHero(hero))
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
