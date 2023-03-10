import { createContainer } from "unstated-next";
import {useState} from 'react';

function useUserStore () {
    const [user, setUser] = useState(null); 
    return {user, setUser}; 
}
export const UserStore = createContainer(useUserStore);

function userOrderProduct () {
    const [product, setProduct] = useState([]); 
    return {product, setProduct}; 
}
export const OrderFoodStore = createContainer(userOrderProduct);


function userFoodSearch () {
    const [foodName, setFoodName] = useState(''); 
    return {foodName, setFoodName}; 
}
export const UserFoodSearch = createContainer(userFoodSearch);

// function userCart () {
//     const [cart, setCart] = useState(null); 
//     return {cart, setCart}; 
// }
// export const UserCart = createContainer(userCart); 