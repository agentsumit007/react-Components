import React, { useEffect } from 'react'
import './../../styles/pages/404.scss'

const PageNotFound = () => {
    useEffect(() => {
        document.title = "404 Not Found"
    }, [])

  return (
    <div className='main-layout'>
        <div className='error'>
            <h1 className='fw-bolder'>404</h1>
            <h3>Page Not Found!!</h3>
        </div>
    </div>
  )
}
export default PageNotFound