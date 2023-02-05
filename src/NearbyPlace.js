import React, { Component } from 'react'
import Rating from './Rating'

export default class NearbyPlace extends Component {
  render() {
    let photo = this.props.placeData.photos?.length &&
    (<img src={this.props.placeData.photos[0].getUrl()} className="card-img-top" alt="..." />)

    let rating = this.props.placeData.rating &&
      (<Rating placeRating={this.props.placeData.rating}/>)

    return (
      <div className="col mb-4">
        <div className="card">
          {photo}
          <div className="card-body">
            <h5 className="card-title">
              { this.props.placeData.name }
            </h5>
            {rating}
            <a href="#" onClick={(e) => this.props.chooseDestination(this.props.placeData.name)} 
              className="btn btn-dark">Escoger como destino</a>
          </div>
        </div>
      </div>
    )
  }
}
