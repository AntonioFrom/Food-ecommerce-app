import React, { FC } from 'react'
import pizzaMenu from "../../../../src/mocks/burger.json"
import { Foods } from '../../../types/foods';
import MenuItem from '../menu/menu-item.component'

interface MenuListprops {
    items: Foods[];
}

const MenuList: FC<MenuListprops> = ({items}) => {
  return (
    <div className=' flex flex-wrap justify-center gap-10'>
        {items && items.map(({image, ...burger }) => (
            <MenuItem {...burger} imagePath={"/assets/food/" + image} key={burger.id}/>
        )) }
    </div>
  )
}

export default MenuList 