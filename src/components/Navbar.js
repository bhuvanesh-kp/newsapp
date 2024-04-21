import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">


          <div className="container-fluid" >
            <div className="container-fluid" style={{paddingInline:"2.5rem"}}>
            <img src="NewsApps.jpg" style={{width:"100px" ,height:"100px"}}></img>     {/* Logo of my website */}

            <a className="navbar-brand" href="/" style={{fontSize:"30px"}}>News Website</a>
            </div>

            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}



            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{fontSize:"18px" , paddingRight:"2.5rem"}}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"></li>
              </ul>
              <span class="navbar-text">
              <a className="nav-link active" aria-current="page" href="https://bhuvanesh-kp.github.io/Portfolio/">about_ME</a>
              </span>
            </div>



          </div>
        </nav>

      </div>
    )
  }
}

export default Navbar