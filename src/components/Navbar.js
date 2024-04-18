import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <img src="NewsApps.jpg"></img>
            <a className="navbar-brand" href="/" style={{fontSize:"36px"}}>News Website</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{fontSize:"36px"}}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="https://bhuvanesh-kp.github.io/Portfolio/">About ME</a></li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}

export default Navbar