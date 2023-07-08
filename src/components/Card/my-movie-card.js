import React from 'react'
import { Icon } from '@iconify/react';
import "../../styles/components/my-movie-card.scss"

export default function myMovieCard(props) {
  return (
    <div className='row movie-card bg-grey'>
      <div className="row">
        <div className="col-lg-11"></div>
        <div className="col-lg-1 d-flex justify-content-around text-center">
            <div className='serial-num rounded-3 pt-1'>
              <span className='fs-1 fw-bold'>#{props.item.id}</span>
            </div>
        </div>
      </div>
      <div className="row">
        <div className='col-lg-2 flex'>
          <img className='image-movie' src={props.item.image} alt="" />
        </div>
        <div className='col-lg-10 keep-font-in'>
          <span>{props.item.name}</span> <br />
          <span><Icon icon="fxemoji:tomato" /> {props.item.rating}%</span> <br /> <br />
          <span className='fw-semibold'>Critics Consensus: </span> <span>{props.item.review}</span> <br /> <br />
          <span className='fw-semibold'>Synopsis: </span><span>{props.item.synopsis}</span><br /> <br />
          <span className='fw-semibold'>Starring: </span><span>{props.item.starring}</span><br /> <br />
          <span className='fw-semibold'>Directed By: </span><span>{props.item.director}</span>
        </div>
      </div>
    </div>
  )
}
