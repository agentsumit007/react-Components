import React from "react";

import jobs from "../../data/jobs.json"
import search from "../../data/search.json"
import courses from "../../data/courses.json"
import reddit from "../../data/reddit.json"
import movies from "../../data/movies.json"

import MyJobsCard from "../../components/Card/my-jobs-card";
import MySearchCard from "../../components/Card/my-search-card"
import MyCourseCard from "../../components/Card/my-course-card";
import MyRedditCard from "../../components/Card/my-reddit-card"
import MyMovieCard from "../../components/Card/my-movie-card"

const Home = () => {

    const jobsData = jobs.data;
    const searchData = search.data;
    const coursesData = courses.data;
    const redditData = reddit.data;
    const moviesData = movies.data;

    return (
        <div className="container-fluid">
            <div className="row mx-2 my-2">
                <div className="col-lg-4 rounded-2">
                    <h5 className="text-bg-primary rounded-4 rounded-bottom-0 px-3 py-3">Jobs based on your Profile</h5>
                    {
                        jobsData.map((item) => {
                            return (
                                <MyJobsCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="row mx-2 my-2">
                <div className="col-lg-4">
                    {
                        searchData.map((item) => {
                            return (
                                <MySearchCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="grid-courses">
                {
                    coursesData.map((item) => {
                        return (
                            <MyCourseCard item={item} />
                        )
                    })
                }
            </div>  
            <div className="container">
                <div>
                    {
                        redditData.map((item) => {
                            return (
                                <MyRedditCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="container">
                {
                    moviesData.map((item) => {
                        return (
                            <MyMovieCard item={item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home

