import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { AboutPage } from "./components/AboutPage";
import { Navbar } from "./components/navbar";
import { TodoPage } from "./components/TodoPages";



const AppNew: React.FC = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
            <Route component={TodoPage} path='/' exact/>
            <Route component={AboutPage} path='/about'/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppNew;
