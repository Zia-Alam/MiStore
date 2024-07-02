import React from 'react'
import '../style/NavCard.css'

const NavCard = ({ data }) => {
    return (

        <div className='nav_card'>
            {data.map((item) => {
                return (
                    <div >
                        <img src={item.image} alt="" />
                        <p className='nav_card_name'>{item.name}</p>
                        <p>{item.price}</p>
                        </div>
                )
            })}
        </div>
    )
}

export default NavCard
