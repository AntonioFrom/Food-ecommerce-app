import React, { FC } from 'react'

interface MenuItemProps {
    imagePath: string,
    weight: number,
    title: string,
    ingredients: string,
    price: number
}

const MenuItem: FC<MenuItemProps> = ({ imagePath, weight, title, price,ingredients
}) => {
    return (
        <div className='w-96 shadow-xl rounded-2xl relative bg-white'>
            <div className=' relative'>
                <img src={imagePath} className=' w-full h-[15rem] object-center rounded-t-2xl' />
                <div className=' absolute bottom-1.5 right-3 bg-black/50 px-2 rounded-2xl'>
                    <span className='text-white text-sm '>{weight} г</span>
                </div>
            </div>
            <div className='p-6'>
                <h2 className='text-xl font-semibold mb-2'>{title}</h2>
                <p className='mb-8'>{ingredients}</p>
                <span className=' text-xl font-semibold text-right'> {price} грн</span>
            </div>
        </div>
    )
}

export default MenuItem