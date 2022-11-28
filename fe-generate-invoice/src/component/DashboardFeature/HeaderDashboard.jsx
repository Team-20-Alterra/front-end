import React from 'react'

const HeaderDashboard = ({ name }) => {
    return (
        <div className="containerHeader">
            <p className='textHeader'>{name}</p>
        </div>
    )
}

export default HeaderDashboard