import React from 'react';
import Miembros from './Miembros';
import './api.css'
export default class MiembrosAPI extends React.Component {
 
  
    constructor(props) {
      super(props);
      this.state = {
        Miembros:[],
      };
    }
    componentDidMount() {
      this.obtenerMiembrosAPI();
    }
    async obtenerMiembrosAPI()
    {
      fetch("http://165.22.191.161/api/aguilera/miembrosloona")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              Miembros: result.data,
            });
          },
          (error) => {
            alert("Error al obtener datos");
          }
        );
    }
    render() {
        return (
          <div>
            <div className="container bootstrap snippets bootdey" id="api">
    
              {this.state.Miembros.map((MiembrosInfo) => {
                  return <Miembros item={MiembrosInfo}/>;
              })}
            </div>
            </div>
        );
}
}