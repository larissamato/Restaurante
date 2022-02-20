import React, {useState} from 'react';
import Slider from "react-slick";
import TextField, {Input} from '@material/react-text-field';
import logo from '../../assets/logo.svg';
import { Container, Search, Logo, Wrapper, Map, Carroussel, CarrousselTitle} from './styles';
import MaterialIcon from '@material/react-material-icon';
import restaurante from '../../assets/restaurante-fake.png'
import {Card , RestaurantCard} from '../../components'

const Home =()=>{
const [inputValue, setInputValue]= useState('');

const  settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };


return(
<Wrapper>
    <Container>
        <Search>
            <Logo src={logo} alt="logo"/>
            <TextField label='Pesquisar' outlined trailingIcon={<MaterialIcon role="button" icon="search"/>}>
            <Input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}>

            </Input>
            </TextField>
            <CarrousselTitle>Na sua Área</CarrousselTitle>
            <Carroussel {...settings}>
                <Card photo={restaurante} title="Abrobinhas"/>
                <Card photo={restaurante} title="Abrobinhas"/>
                <Card photo={restaurante} title="Abrobinhas"/>
                <Card photo={restaurante} title="Abrobinhas"/>
                <Card photo={restaurante} title="Abrobinhas"/>
                <Card photo={restaurante} title="Abrobinhas"/>   
            </Carroussel>
        </Search> 
        <RestaurantCard />
    </Container>
    <Map/>
</Wrapper>
    
    );
};

export default Home;
