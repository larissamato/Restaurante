import React, {useState} from 'react';
import Slider from "react-slick";
import TextField, {Input} from '@material/react-text-field';
import logo from '../../assets/logo.svg';
import { Container, Search, Logo, Wrapper, Map, CarrousselTitle} from './styles';
import MaterialIcon from '@material/react-material-icon';
import restaurante from '../../assets/restaurante-fake.png'

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
            <Slider {...settings}>
                <div>
                    <img src={restaurante}/>
                </div>
                <div>
                    <img src={restaurante}/>
                </div>
                <div>
                    <img src={restaurante}/>
                </div>
                <div>
                    <img src={restaurante}/>
                </div>
                <div>
                    <img src={restaurante}/>
                </div>
            </Slider>
        </Search> 
    </Container>
    <Map/>
</Wrapper>
    
    );
};

export default Home;
