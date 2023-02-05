import React, { Component } from 'react'

export default class Reviews extends Component {
  constructor(props){
    super(props);
    this.state={mostrarComentarios:this.props.mostrarComentarios};
  }

  manejoOnClick = (e) => {
    if (e.target.id==='btnComentarios')
      this.setState((prevState) => {
        return {mostrarComentarios: !prevState.mostrarComentarios}
      })
  }

  render() {
    var reviews
    if (this.props.placeReviews && this.props.placeReviews.length > 0){
      console.log('1');
      reviews = this.props.placeReviews.map((review,index) => {
      return <div key={index} className='row mt-2 mb-1' >
                <div className='col-2'><strong>{review.author_name}</strong></div>
                <div className='col-10'>{review.text}</div>
              </div>;
      })
    }else{
      console.log('2');
      reviews = <div key={1} className='row mt-2 mb-1' >
                <strong>No hay comentarios</strong>
              </div>;
    }

    const btnName = this.state.mostrarComentarios ? 'Ocultar Comentarios' : 'Mostrar Comentarios';
    const mostrar = this.state.mostrarComentarios ? 'd-block' : 'd-none'
    
    return (
      <div className="container">
        <div className='mb-3'><a className='btn btn-dark' href='#' id='btnComentarios' onClick={this.manejoOnClick}>{btnName}</a></div>
        <div className={'container ' + mostrar}>
          {reviews}
        </div>
      </div>
    )
  }
}
