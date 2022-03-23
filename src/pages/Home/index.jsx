import React, {useState} from 'react';
import Slider from "react-slick";
import TextField, {Input} from '@material/react-text-field';
import logo from '../../assets/logo.svg';
import { Container, Search, Logo, Wrapper, Carroussel, CarrousselTitle} from './styles';
import MaterialIcon from '@material/react-material-icon';
import restaurante from '../../assets/restaurante-fake.png'
import {Card , RestaurantCard, Modal, Map} from '../../components'

const Home =()=>{

const [inputValue, setInputValue]= useState('');
const [query, setQuery] = useState(null);
const [modalOpened, setModalOpened]= useState(false);

const  settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e){
      if(e.key==='Enter'){
          setQuery(inputValue);
      }
    };

return(
<Wrapper>
    <Container>
        <Search>
            <Logo src={logo} alt="logo"/>
            <TextField label='Pesquisar' outlined trailingIcon={<MaterialIcon role="button" icon="search"/>}>
            <Input value={inputValue} onKeyPress={handleKeyPress} onChange={(e)=>setInputValue(e.target.value)}>

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
    <Map query={query}/>
    <Modal open={modalOpened} onClose={()=> setModalOpened(!modalOpened)}/>
</Wrapper>
    
    );
};

export default Home;
