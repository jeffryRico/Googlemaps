import React, { Component } from 'react'

export default class Horario extends Component {
  constructor(props){
    super(props);
    this.state={mostrar:props.mostrarHorario}
  }

  manejoOnClick = (e) => {
    if (e.target.id='horario'){
      this.setState((prevState) => {
        return {mostrarHorario:!prevState.mostrarHorario}
      })
    }
  }

  render() {
    var horarios='';
    if (this.props.horarios){
      const abierto = this.props.horarios.weekday_text.map((horario,index) => {
          return <div key={index} className='row'>
                   {horario}
                 </div>;
      })
      horarios=<div className='row'>
                <div className='col-3'><a className='btn btn-dark' id='horario' href='#' onClick={this.manejoOnClick} >Horario</a></div>
                <div className={'col-6 '+(this.state.mostrarHorario ? 'd-block' : 'd-none')}>{abierto}</div>
               </div>
    }else
      horarios=<div className='row'>
                  <strong>Horario no disponible</strong>
                </div>;
    return (
      <div className='container my-2' >
          {horarios}
      </div>
    )
  }
}
