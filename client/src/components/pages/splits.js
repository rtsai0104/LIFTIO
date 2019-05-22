import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Button, Form, Image } from 'react-bootstrap';
import SplitButtons from '../elements/splitButtons';
import '../../assets/open-iconic-master/font/css/open-iconic-bootstrap.css'

class Splits extends Component {

  state = {
    splits: [
      {name: 'Chest & Tris'},
      {name: 'Back & Bis'},
      {name: 'Arms'},
      {name: 'Legs'},
      {name: 'Cardio'}
    ]
  }



  render() {

    const { splits } = this.state;
    return (
      <div>

        <div className="custom-banner">
          <NavLink to="/profile">
            <span className="oi oi-caret-left white" title="caret left" aria-hidden="true"></span>
          </NavLink>
        </div>
        <h1>Splits</h1>

        <div className="button-container">
        <SplitButtons splits={splits} />
        </div>
        <div className="text-center">
        <span className="oi oi-plus add white" title="add" aria-hidden="true" ></span>
        </div>

      </div>
    );
  }
}

export default Splits;
