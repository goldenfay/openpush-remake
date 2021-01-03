import React from 'react'
import PropTypes from 'prop-types'
import {Outlet } from "react-router-dom";

function index({match,...props}) {
    return (
        <div>
            <Outlet />
            
        </div>
    )
}

index.propTypes = {


}

export default index

