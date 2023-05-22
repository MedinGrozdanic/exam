import React, { Component } from 'react';
import './custom.css'
import { Outlet, Link, } from "react-router-dom";






export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
    <div className="container">
      <div className="header"> <h1 Id="headertext">
            BlåaToppens dagblad - Admin
      </h1>
      </div> 
      
      <nav>
      
      <Link to="/Articles">
      <button className="Articlebut" type="button">Artiklar</button>
      </Link> 
      
      <Link to="/journalists">
      <button className="Journalistbut" type="button">Journalister</button>
      </Link>
      
      <Link to="/Images">
      <button className="Imagebut" type="button">Images</button>
      </Link>
      
      </nav>
      <div className="content">
      
          
      <Outlet />
      </div>
      <div className="footer"></div> 
    </div>
  );
}

}
