import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as heroAction from './actions/heroAction';

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

      //const { hero } = this.state;
      console.log(this.state.hero.name);
      let hero = {
        id: Date.now(),
        name: this.state.hero.name,
        description: this.state.hero.description
      }
      //hero['id'] = Date.now();
      console.log(hero.name);
      console.log(hero);

      this.props.createHero(hero);

    }

    listView(data, index) {
      return (
        <li key={index}>
          <span>{data.name} : </span>
          <span>{data.description}</span>
          <button onClick={(e) => this.removeHero(e, data)}>Remove</button>
        </li>
      )
    }

    removeHero(e, index) {
      e.preventDefault();
      this.props.removeHero(index);
    }

  render() {
  const { hero } = this.state
    return (
      <div>
        <h1>React Hero Tour</h1>
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
       removeHero: index => dispatch(heroAction.removeHero(index))
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
