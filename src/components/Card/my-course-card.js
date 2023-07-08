import React, { useState } from 'react'
import './../../styles/components/my-course-card.scss';
import { Icon } from '@iconify/react';
export default function myCourseCard(props) {
    let imageStyle = {
        backgroundImage:
            `url(${props.item.bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        height: "250px",
        color: "white",
        textShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)",
    };

    const [btnColor, setBtnColor] = useState("black");

    return (
        <div className="grid-item overlay">

            <div className="rounded-top-4 mx-1 p-10" style={imageStyle}>
                {props.item.collection !== "" && <div className='fs-5 mb-20'>{props.item.collection}</div>}
                <div><span className='fw-medium contain-font'>{props.item.courseName.length <= 40 ? props.item.courseName : props.item.courseName.substring(0, 40) + "..."}</span></div>
            </div>
            <div className="row overlay-button" >
                <div className="row">
                    <button className="btn btn-light rounded-5 shadow " onPointerEnter={() => { setBtnColor("green") }} onPointerOut={() => { setBtnColor("black") }}><Icon icon="mdi:play" onPointerEnter={() => { setBtnColor("green") }} color={btnColor} width="30" /></button>
                </div>
                <div className="row">
                    <span className='text-secondary text-center fs-5 mb-15 mt-15'>{props.item.completion}%</span>
                </div>
            </div>
            <div className="mx-1 border inner-grid rounded-bottom-4 shadow">
                <div className="text-center">
                    <span className='fs-3 fw-medium'>{props.item.chapters}</span>
                    <p className='text-secondary'>Chapters</p>
                </div>
                <div className="text-center">
                    <span className='fs-3 fw-medium'>{props.item.items}</span>
                    <p className='text-secondary'>Items</p>
                </div>
            </div>

        </div>
    )
}