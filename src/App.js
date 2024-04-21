import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';



export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {/* <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label class="form-check-label" for="inlineRadio1">1</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="form-check-label" for="inlineRadio2">2</label>
        </div> */}
        <News category="business"/>
      </div>
    )
  }
}


