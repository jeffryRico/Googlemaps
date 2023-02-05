import React, { Component } from 'react'

export default class Place extends Component {
  render() {
    var cantPhotos = this.props.placeData.photos.length;
    if (cantPhotos > 6)
      cantPhotos = 6;
    else
      cantPhotos = 3;
    const colSize = 4
    var htmlPhotos=[];
    this.props.placeData.photos.map((photo, index) => {
      htmlPhotos.push(
        <div key={index} className={'col-'+colSize+' text-center'} >
          <img src={photo} alt={this.props.placeData.name}/>
        </div>);
        if (index === (cantPhotos-1)) return
    })
    return (
      <div>
        <div className='row py-2'>
          <div className='col-12 text-center' >{this.props.placeData.name}</div>
        </div>
        <div className='row py-2'>
          {htmlPhotos.slice(0,3)} 
        </div>
        <div className='row py-2'>
          {htmlPhotos.slice(3,6)} 
        </div>
        <div className='row' >
          <div className='col-2'></div>
          <div className='col-8'> {this.props.placeData.address}</div>
          <div className='col-2'></div>
        </div>
      </div>
    )
  }
}
