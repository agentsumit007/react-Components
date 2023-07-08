import React, { useTransition } from "react";
import './../../styles/components/my-jobs-card.scss';
import { Icon } from '@iconify/react';

const MyJobsCard = (props) => {

    return (
        <div>
            <div className="border-bottom d-flex flex-row">
                <img className="image" src={props.item.image} alt="" />
                <div className="ml-15">
                    <div className="row">
                        <div className="col"><h5 className="pointer-hover text-primary">{props.item.profile}</h5></div>
                    </div>
                    <div className="row">
                        <span className="fw-semibold">{props.item.company}</span>
                        <span className="text-secondary">{props.item.location}</span>
                        {props.item.alumni !== 0 && <span className="fs-6"><Icon icon="fluent:people-team-32-filled" color="grey" width="22" height="22" /> {props.item.alumni === 1 ? props.item.alumni + " alum works here" : props.item.alumni + " alumni work here"}</span>}
                        {props.item.active && <span><Icon icon="icon-park-outline:target" color="green" width="22" height="22" /> Actively Recruiting</span>}
                    </div>
                    <div className=" d-flex flex-row mt-10">
                            <span className="text-success fs-6 fw-semibold ">{props.item.postAge}</span>
                            {props.item.easy && <span><Icon icon="lucide:dot" /><Icon icon="devicon:linkedin" /> Easy Apply</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyJobsCard

// { profile, company, location, work-type, post-age, alumni, active, image}

// iconify
// moment