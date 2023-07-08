import React from 'react'
import './../../styles/components/my-reddit-card.scss';
import { Icon } from '@iconify/react';

export default function myRedditCard(props) {
    let styles = {
        backgroundImage: `url(${props.item.image})`,
        backgroundPosition: "right",
        backgroundRepeat: "no repeat",
        backgroundSize: "cover",
        height: "150px",
    }

    return (
        <div className='container my-4 p-20 border rounded-5'>
            <div className='row'>
                <div className='col-lg-9'>
                    <div className='grid-item-1'>
                        <img className='icon rounded-5' src={props.item.profileIcon} alt="" />
                        <span className='ml-10'>r/{props.item.profileName}</span>
                        <Icon icon="mdi:dot" />
                        <span>{props.item.postAge} ago</span> <br />
                        <span className='fs-5 fw-normal'>{props.item.postText}</span>
                    </div>

                </div>
                <div className="col-lg-3">
                    <button className="btn btn-primary rounded-4">join</button><Icon className='ml-10' icon="bi:three-dots" /><br />
                    <div className='rounded-4 my-3' style={styles}></div>
                </div>
            </div>
            <div className="mt-auto d-flex justify-content-start">
                <div className='border rounded-5 p-10 mr-10'><a href=""><Icon width="20" icon="bx:upvote" /></a> {props.item.likes} <a href=''><Icon width="20" icon="bx:downvote" /></a></div>
                <a href=""><div className='border rounded-5 p-10 mr-10'><Icon width="20" icon="fa6-regular:message" /> {props.item.comments}</div></a>
                <a href=""><div className='border rounded-5 p-10 mr-10'><Icon width="20" icon="lucide:share" /> Share</div></a>
            </div>
        </div>
    )
}