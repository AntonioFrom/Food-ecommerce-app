import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MenuItem from './menu-item.component';



export default {
  title: 'Menu/Menu Item',
  component: MenuItem,
 
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const View = Template.bind({});

View.args = {
  imagePath: '/assets/food/pngegg (6).png',
  weight: 555,
  title: 'Mister Burger',
  ingredients: 'Соковита яловича котлета, перець чилі, болгарський перець, маринований огірок, сир Чеддер преміум класу, цибуля ріпчаста, листя салату Айсберг, соус "1000 островів" та BBQ.',
  price: 279
}