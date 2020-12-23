import './App.css';
import Principal from './Principal'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
 } from "react-router-dom";

 import MiembrosAPI from './MiembrosAPI';



function App() {
  return (
    <BrowserRouter>
       
       <Principal />


       <Switch>
         <Route path="/MiembrosAPI">
           <MiembrosAPI />
         </Route>

       </Switch>

    </BrowserRouter>

  );
}

export default App;

