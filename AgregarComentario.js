import React from 'react';
import './AgregarComentario.css'
export default class AgregarComentario extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            descripcion: "",
            lista:[],
        }
    }
    cambioDescripcion = (event) =>{
        this.setState({descripcion: [event.target.value]});
    }
    agregarComentario = (event) =>{
        event.preventDefault();
        let nuevoComentario ={
            descripcion: this.state.descripcion
        }
        let nuevaListaComentarios = [...this.state.lista, nuevoComentario];
        this.setState({
            lista: nuevaListaComentarios,
            descripcion:"",
        })
    }
    render (){
        return(
    <main className="main">
        <h3> Dejanos un comentario o sugerencia sobre la página</h3>    
        <form onSubmit={this.agregarComentario}>
            <input id="comentario" type="text" name="comentario" placeholder="Comentario" 
            onChange={this.cambioDescripcion} 
            value={this.state.descripcion}/>
            <button id="comentar">Comentar</button>
        </form>
        
        <h3>Comentarios</h3>
        
        <ul id="lista-comentario">
            {this.state.lista.map(item=>{
                return(
                    <li>{item.descripcion}</li>
                )
            })}
        </ul>
    </main>
        )
    }
}