import React from 'react';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './style';
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restaurante-fake.png'

const RestaurantCard = () =>(
<Restaurant>
    <RestaurantInfo> 
        <Title>Nome</Title>
        <ReactStars count={5} value={4} edit={false} isHalf activeColor="#e7711c"/>
        <Address>Endereço blá bláaaaa, 120 4000 haaaaaacumeida</Address> 
     </RestaurantInfo>   
     <RestaurantPhoto src={restaurante} alt="restaurante"/>
</Restaurant>
);

export default RestaurantCard;