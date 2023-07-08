import React from 'react'
import './../../styles/components/my-search-card.scss';
import { Icon } from '@iconify/react';
const MyJobsCard = (props) => {

    return (
        <div className='container-fluid my-4'>
            <div>
                <img className='mr-10' src={props.item.icon} alt="" />
                <span>{props.item.site}</span> <br />
                <span>{props.item.url}</span><Icon icon="bi:three-dots-vertical" />
            </div>
            <div className="row">
                <div className="col">
                    <h5 className='fw-normal pointer-hover text-primary'>{props.item.title}</h5>
                </div>
            </div>
            <div className="row pl-10">
                {props.item.description}
            </div>
        </div>
    )
}

export default MyJobsCard