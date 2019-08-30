import React from 'react'
import { InputLabel, MenuItem, FormControl, Select, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  search: {
  height: 40,
  marginTop: 12,
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '25%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
  },
},
searchIcon: {
  width: theme.spacing(7),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
inputRoot: {
   color: 'inherit',
 },
 inputInput: {
   padding: theme.spacing(1, 1, 1, 7),
   transition: theme.transitions.create('width'),
   width: '100%',
   [theme.breakpoints.up('sm')]: {
     width: 150,
     '&:focus': {
       width: 200,
     },
   },
 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Search = ({cars, filterText, filterUpdate, filterUpdateMake}) => {
  const classes = useStyles();


  const [values, setValues] = React.useState({
    car_type: '',
    make: '',
    model: '',
    location: '',
  });

  function handleTypeChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,

    }));

  }
  function handleMakeChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,

    }));
    filterUpdateMake(event.target.value)

  }
  function handleInputChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    filterUpdate(event.target.value)

  }

  return (

    <div className="Search">
      <header>

        <form className="searchForm">
          <h3>Filter: </h3>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="make-simple">Make</InputLabel>
            <Select
              value={values.make}
              onChange={handleMakeChange}
              inputProps={{
                name: 'make',
                id: 'make-simple',
              }}
              >
              <MenuItem value="Acura">Acura</MenuItem>
              <MenuItem value="Alfa Romeo">Alfa Romeo</MenuItem>
              <MenuItem value="Audi">Audi</MenuItem>
              <MenuItem value="BMW">BMW</MenuItem>
              <MenuItem value="Bentley">Bentley</MenuItem>
              <MenuItem value="Buick">Buick</MenuItem>
              <MenuItem value="Cadillac">Cadillac</MenuItem>
              <MenuItem value="Chevrolet">Chevrolet</MenuItem>
              <MenuItem value="Chrysler">Chrysler</MenuItem>
              <MenuItem value="Dodge">Dodge</MenuItem>
              <MenuItem value="Fiat">Fiat</MenuItem>
              <MenuItem value="GMC">GMC</MenuItem>
              <MenuItem value="Genesis">Genesis</MenuItem>
              <MenuItem value="Honda">Honda</MenuItem>
              <MenuItem value="Hyundai">Hyundai</MenuItem>
              <MenuItem value="Infiniti">Infiniti</MenuItem>
              <MenuItem value="Jaguar">Jaguar</MenuItem>
              <MenuItem value="Jeep">Jeep</MenuItem>
              <MenuItem value="Kia">Kia</MenuItem>
              <MenuItem value="Land Rover">Land Rover</MenuItem>
              <MenuItem value="Lexus">Lexus</MenuItem>
              <MenuItem value="Lincoln">Lincoln</MenuItem>
              <MenuItem value="Maserati">Maserati</MenuItem>
              <MenuItem value="Mazda">Mazda</MenuItem>
              <MenuItem value="Mercedes-Benz">Mercedes-Benz</MenuItem>
              <MenuItem value="Mercury">Mercury</MenuItem>
              <MenuItem value="Mini">Mini</MenuItem>
              <MenuItem value="Mitsubishi">Mitsubishi</MenuItem>
              <MenuItem value="Nissan">Nissan</MenuItem>
              <MenuItem value="Polestar">Polestar</MenuItem>
              <MenuItem value="Pontiac">Pontiac</MenuItem>
              <MenuItem value="Porsche">Porsche</MenuItem>
              <MenuItem value="Ram">Ram</MenuItem>
              <MenuItem value="Rolls-Royce">Rolls-Royce</MenuItem>
              <MenuItem value="Saab">Saab</MenuItem>
              <MenuItem value="Saturn">Saturn</MenuItem>
              <MenuItem value="Scion">Scion</MenuItem>
              <MenuItem value="Smart">Smart</MenuItem>
              <MenuItem value="Subaru">Subaru</MenuItem>
              <MenuItem value="Suzuki">Suzuki</MenuItem>
              <MenuItem value="Tesla">Tesla</MenuItem>
              <MenuItem value="Toyota">Toyota</MenuItem>
              <MenuItem value="Volkswagon">Volkswagon</MenuItem>
              <MenuItem value="Volvo">Volvo</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="model-simple">Model</InputLabel>
            <Select
              value={values.model}
              onChange={handleTypeChange}
              inputProps={{
                name: 'model',
                id: 'model-simple',

              }}
              >
              {values.make === "" ? <MenuItem value=""><em>Please Choose A Make</em></MenuItem> :  null }

              {values.make === "Land Rover" ? <MenuItem value="Range Rover">Range Rover</MenuItem> :  null }
              {values.make === "Land Rover" ? <MenuItem value="Range Rover Sport">Range Rover Sport</MenuItem> :  null }
              {values.make === "Land Rover" ? <MenuItem value="Evoque">Evoque</MenuItem> :  null }
              {values.make === "Land Rover" ? <MenuItem value="Defender">Defender</MenuItem> :  null }
              {values.make === "Land Rover" ? <MenuItem value="Discovery">Discovery</MenuItem> :  null }
              {values.make === "Land Rover" ?< MenuItem value="Freelander">Freelander</MenuItem> :  null }
              {values.make === "Land Rover" ? <MenuItem value="Classic">Classic</MenuItem> :  null }

              {values.make === "Acura" ? <MenuItem value="ILX">ILX</MenuItem> :  null }
              {values.make === "Acura" ? <MenuItem value="RDX">RDX</MenuItem> :  null }
              {values.make === "Acura" ? <MenuItem value="RLX">RLX</MenuItem> :  null }
              {values.make === "Acura" ? <MenuItem value="MDX">MDX</MenuItem> :  null }
              {values.make === "Acura" ? <MenuItem value="NSX">NSX</MenuItem> :  null }
              {values.make === "Acura" ? <MenuItem value="TLX">TLX</MenuItem> :  null }
              {values.make === "Acura" ? <MenuItem value="TSX">TSX</MenuItem> :  null }
              {values.make === "Acura" ? <MenuItem value="RSX">RSX</MenuItem> :  null }
              {values.make === "Acura" ? <MenuItem value="RSX">RSX Type-S</MenuItem> :  null }
              {values.make === "Acura" ? <MenuItem value="TL">TL</MenuItem> :  null }
              {values.make === "Acura" ? <MenuItem value="ZDX">ZDX</MenuItem> :  null }
              {values.make === "Acura" ? <MenuItem value="RL">RL</MenuItem> :  null }

              {values.make === "Alfa Romeo" ? <MenuItem value="Giulietta">Giulietta</MenuItem> :  null }
              {values.make === "Alfa Romeo" ? <MenuItem value="Mito">Mito</MenuItem> :  null }
              {values.make === "Alfa Romeo" ? <MenuItem value="Mito Quadrifolglio Verde">Mito Quadrifolglio Verde</MenuItem> :  null }
              {values.make === "Alfa Romeo" ? <MenuItem value="Giulia">Giulia</MenuItem> :  null }
              {values.make === "Alfa Romeo" ? <MenuItem value="Stelvio">Stelvio</MenuItem> :  null }
              {values.make === "Alfa Romeo" ? <MenuItem value="Giulia Quadrifolglio">Giulia Quadrifolglio</MenuItem> :  null }
              {values.make === "Alfa Romeo" ? <MenuItem value="4C Spider">4C Spider</MenuItem> :  null }
              {values.make === "Alfa Romeo" ? <MenuItem value="Giulia Veloce">Giulia Veloce</MenuItem> :  null }
              {values.make === "Alfa Romeo" ? <MenuItem value="4 C">4C</MenuItem> :  null }
              {values.make === "Alfa Romeo" ? <MenuItem value="Mito Veloce">Mito Veloce</MenuItem> :  null }
              {values.make === "Alfa Romeo" ? <MenuItem value="ZDX">Giulietta Quadrifolglio Verde</MenuItem> :  null }
              {values.make === "Alfa Romeo" ? <MenuItem value="RL">Stelvio Quadrifolglio</MenuItem> :  null }

              {values.make === "Audi" ? <MenuItem value="R8">R8</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="TT">TT</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="A1">A1 Type-S</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="A2">A2</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="A3">A3</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="A4">A4</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="A5">A5</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="A6">A6</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="A7">A7</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="A8">A8</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="S3">S3</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="S4">S4</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="S5">S5</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="S8">S8</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="RS4">RS4</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="RS6">RS6 Type-S</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="Q5">Q5</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="Q7">Q7</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="Nuvolari Quattro">Audi Nuvolari Quattro</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="Allroad">Allroad</MenuItem> :  null }
              {values.make === "Audi" ? <MenuItem value="Avant">Avant</MenuItem> :  null }

              {values.make === "BMW" ? <MenuItem value="230">230</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="320">320</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="328d">328d</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="330">330</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="330 Gran Turismo">330 Gran Turismo</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="330e">330e</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="340">340</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="340 Gran Turismo">340 Gran Turismo</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="430">430</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="430 Gran Coupe">430 Gran Coupe</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="440">440</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="440 Gran Coupe<">440 Gran Coupe</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="530">530</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="530e">530e</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="535 Gran Turismo">535 Gran Turismo</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="540">540</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="540d">540d</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="550 Gran Turismo">550 Gran Turismo</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="640">640</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="640 Gran Coupe">640 Gran Coupe</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="640 Gran Turismo">640 Gran Turismo</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="650">650</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="650 Gran Coupe">650 Gran Coupe d</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="740">740</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="740e">740e</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="745e">745e</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="750">750</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="840">840</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="Alpina B6 Gran Coupe">Alpina B6 Gran Coupe</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="Alpina B7">Alpina B7</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="M2">M2</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="M240">M240</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="M3<">M3</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="M340">M340</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="M4">M4e</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="M5">M5</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="M550">M550</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="M6">M6</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="M6 Gran Coupe">M6 Gran Coupe</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="M760<">M760</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="M850">M850</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="Z4">Z4e</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="I3">I3</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="I8">I8</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="X1">X1</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="X2">X2</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="X3">X3</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="X3 M">X3 M</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="X4<">X4</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="X4 M">X4 M</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="X5">X5e</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="X5 M">X5 M</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="X5 eDrive">X5 eDrive</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="X6">X6</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="X6 M">X6 M</MenuItem> :  null }
              {values.make === "BMW" ? <MenuItem value="X7">X7</MenuItem> :  null }

              {values.make === "Bentley" ? <MenuItem value="Continental GT">Continental GT</MenuItem> :  null }
              {values.make === "Bentley" ? <MenuItem value="Flying Spur">Flying Spur</MenuItem> :  null }
              {values.make === "Bentley" ? <MenuItem value="Mulsanne">Mulsanne</MenuItem> :  null }
              {values.make === "Bentley" ? <MenuItem value="Bentayga">Bentayga</MenuItem> :  null }
              {values.make === "Bentley" ? <MenuItem value="Arnage Range">Arnage Range</MenuItem> :  null }
              {values.make === "Bentley" ? <MenuItem value="Brooklands">Brooklands</MenuItem> :  null }
              {values.make === "Bentley" ? <MenuItem value="Azure">Azure</MenuItem> :  null }
              {values.make === "Bentley" ? <MenuItem value="Continental Supersport">Continental Supersport</MenuItem> :  null }
              {values.make === "Bentley" ? <MenuItem value="Continental">Continental</MenuItem> :  null }
              {values.make === "Bentley" ? <MenuItem value="Continental GT3-R">Continental GT3-R</MenuItem> :  null }

              {values.make === "Buick" ? <MenuItem value="Cascada">Cascada</MenuItem> :  null }
              {values.make === "Buick" ? <MenuItem value="LaCrosse">LaCrosse</MenuItem> :  null }
              {values.make === "Buick" ? <MenuItem value="Regal">Regal</MenuItem> :  null }
              {values.make === "Buick" ? <MenuItem value="Regal Sportback">Regal Sportback</MenuItem> :  null }
              {values.make === "Buick" ? <MenuItem value="Regal TourX">Regal TourX</MenuItem> :  null }
              {values.make === "Buick" ? <MenuItem value="Verano">Verano</MenuItem> :  null }
              {values.make === "Buick" ? <MenuItem value="Enclave">Enclave</MenuItem> :  null }
              {values.make === "Buick" ? <MenuItem value="Encore">Encore</MenuItem> :  null }
              {values.make === "Buick" ? <MenuItem value="Envision">Envision</MenuItem> :  null }

              {values.make === "Cadillac" ? <MenuItem value="ATS">ATS</MenuItem> :  null }
              {values.make === "Cadillac" ? <MenuItem value="ATS-V">ATS-V</MenuItem> :  null }
              {values.make === "Cadillac" ? <MenuItem value="CT6">CT6</MenuItem> :  null }
              {values.make === "Cadillac" ? <MenuItem value="CT6 Plug-In">CT6 Plug-In</MenuItem> :  null }
              {values.make === "Cadillac" ? <MenuItem value="CT6-V">CT6-V</MenuItem> :  null }
              {values.make === "Cadillac" ? <MenuItem value="CTS">CTS</MenuItem> :  null }
              {values.make === "Cadillac" ? <MenuItem value="CTS-V">CTS-V</MenuItem> :  null }
              {values.make === "Cadillac" ? <MenuItem value="XTS">XRS</MenuItem> :  null }
              {values.make === "Cadillac" ? <MenuItem value="Escalade">Escalade</MenuItem> :  null }
              {values.make === "Cadillac" ? <MenuItem value="Escalade ESV">Escalade ESV</MenuItem> :  null }
              {values.make === "Cadillac" ? <MenuItem value="XT4">XT4</MenuItem> :  null }
              {values.make === "Cadillac" ? <MenuItem value="XT5">XT5</MenuItem> :  null }
              {values.make === "Cadillac" ? <MenuItem value="XT6">XT6</MenuItem> :  null }
              {values.make === "Cadillac" ? <MenuItem value="CT6-V">CT6-V</MenuItem> :  null }
              {values.make === "Cadillac" ? <MenuItem value="CTS">CTS</MenuItem> :  null }
              {values.make === "Cadillac" ? <MenuItem value="CTS-V">CTS-V</MenuItem> :  null }
              {values.make === "Cadillac" ? <MenuItem value="XTS">XRS</MenuItem> :  null }
              {values.make === "Cadillac" ? <MenuItem value="Escalade">Escalade</MenuItem> :  null }

              {values.make === "Chevrolet" ? <MenuItem value="Bolt EV">Bolt EV</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Camaro">Camaro</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Corvette">Corvette</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Cruze">Cruze</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Impala">Impala</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="CTS">CTS</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Malibu">Malibu</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Malibu Hybrid">Malibu Hybrid</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="SS">SS</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Sonic">Sonic</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Spark">Spark</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Volt">Volt</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Blazer">Blazer</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Equinox">Equinox</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Suburban">Suburban</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Tahoe">Tahoe</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Traverse">Traverse</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Trax">Trax</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Colorado">Colorado</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Silverado">Silverado</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Silverado 1500LD">Silverado 1500LD</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Silverado 2500HD">Silverado 2500HD</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Silverado 3500HD">Silverado 3500HD</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="City Express">City Express</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Express 2500">Express 2500</MenuItem> :  null }
              {values.make === "Chevrolet" ? <MenuItem value="Express 3500">Express 3500</MenuItem> :  null }

              {values.make === "Chrysler" ? <MenuItem value="200">200</MenuItem> :  null }
              {values.make === "Chrysler" ? <MenuItem value="300">300</MenuItem> :  null }
              {values.make === "Chrysler" ? <MenuItem value="300C">300 C</MenuItem> :  null }
              {values.make === "Chrysler" ? <MenuItem value="Pacifica">Pacifica</MenuItem> :  null }
              {values.make === "Chrysler" ? <MenuItem value="Pacifica Hybrid">Pacifica Hybrid</MenuItem> :  null }

              {values.make === "Dodge" ? <MenuItem value="Challenger">Challenger</MenuItem> :  null }
              {values.make === "Dodge" ? <MenuItem value="Charger">Charger</MenuItem> :  null }
              {values.make === "Dodge" ? <MenuItem value="Viper">Viper</MenuItem> :  null }
              {values.make === "Dodge" ? <MenuItem value="Durango">Durango</MenuItem> :  null }
              {values.make === "Dodge" ? <MenuItem value="Journey">Journey</MenuItem> :  null }
              {values.make === "Dodge" ? <MenuItem value="Grand Caravan">Grand Caravan</MenuItem> :  null }

              {values.make === "Fiat" ? <MenuItem value="124 Spider">124 Spider</MenuItem> :  null }
              {values.make === "Fiat" ? <MenuItem value="500">500</MenuItem> :  null }
              {values.make === "Fiat" ? <MenuItem value="500L">500L</MenuItem> :  null }
              {values.make === "Fiat" ? <MenuItem value="500c">500c</MenuItem> :  null }
              {values.make === "Fiat" ? <MenuItem value="500e">500e</MenuItem> :  null }
              {values.make === "Fiat" ? <MenuItem value="500X">500X</MenuItem> :  null }

              {values.make === "GMC" ? <MenuItem value="Acadia">Acadia</MenuItem> :  null }
              {values.make === "GMC" ? <MenuItem value="Acadia Limited">Acadia Limited</MenuItem> :  null }
              {values.make === "GMC" ? <MenuItem value="Terrain">Terrain</MenuItem> :  null }
              {values.make === "GMC" ? <MenuItem value="Yukon">Yukon</MenuItem> :  null }
              {values.make === "GMC" ? <MenuItem value="Yukon XL">Yukon XL</MenuItem> :  null }
              {values.make === "GMC" ? <MenuItem value="Canyon">Canyon</MenuItem> :  null }
              {values.make === "GMC" ? <MenuItem value="Sierra 1500">Sierra 1500</MenuItem> :  null }
              {values.make === "GMC" ? <MenuItem value="Sierra 1500 Limited">Sierra 1500 Limited</MenuItem> :  null }
              {values.make === "GMC" ? <MenuItem value="Sierra 2500HD">Sierra 2500HD</MenuItem> :  null }
              {values.make === "GMC" ? <MenuItem value="Sierra 3500HD">Sierra 3500HD</MenuItem> :  null }
              {values.make === "GMC" ? <MenuItem value="Savana 2500">Savana 2500</MenuItem> :  null }
              {values.make === "GMC" ? <MenuItem value="Savana 3500">Savana 3500</MenuItem> :  null }

              {values.make === "Genesis" ? <MenuItem value="G70">G70</MenuItem> :  null }
              {values.make === "Genesis" ? <MenuItem value="G80">G80</MenuItem> :  null }
              {values.make === "Genesis" ? <MenuItem value="G90">G90</MenuItem> :  null }

              {values.make === "Honda" ? <MenuItem value="Accord">Accord</MenuItem> :  null }
              {values.make === "Honda" ? <MenuItem value="Accord Hybrid">Accord Hybrid</MenuItem> :  null }
              {values.make === "Honda" ? <MenuItem value="Civic">Civic</MenuItem> :  null }
              {values.make === "Honda" ? <MenuItem value="Civic SI">Civic SI</MenuItem> :  null }
              {values.make === "Honda" ? <MenuItem value="Civic Type-R">Civic Type-R</MenuItem> :  null }
              {values.make === "Honda" ? <MenuItem value="Clarity Electric">Clarity Electric</MenuItem> :  null }
              {values.make === "Honda" ? <MenuItem value="Clarity Plug-In Hybrid">Clarity Plug-In Hybrid</MenuItem> :  null }
              {values.make === "Honda" ? <MenuItem value="Fit">Fit</MenuItem> :  null }
              {values.make === "Honda" ? <MenuItem value="Insight">Insight</MenuItem> :  null }
              {values.make === "Honda" ? <MenuItem value="CR-V">CR-V</MenuItem> :  null }
              {values.make === "Honda" ? <MenuItem value="HR-V">HR-V</MenuItem> :  null }
              {values.make === "Honda" ? <MenuItem value="Passport">Passport</MenuItem> :  null }
              {values.make === "Honda" ? <MenuItem value="Pilot">Pilot</MenuItem> :  null }
              {values.make === "Honda" ? <MenuItem value="Ridgeline">Ridgeline</MenuItem> :  null }
              {values.make === "Honda" ? <MenuItem value="Odyssey">Odyssey</MenuItem> :  null }

              {values.make === "Hyundai" ? <MenuItem value="Accent">Accent</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="Azera">Azera</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="Elantra">Elantra</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="Elantra GT">Elantra GT</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="Ioniq">Ioniq</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="Ioniq Hybrid">Ioniq Hybrid</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="Ioniq Plug-In Hybrid">Ioniq Plug-In Hybrid</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="Sonata">Sonata</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="Sonata Hybrid">Sonata Hybrid</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="Sonata Plug-In Hybrid">Sonata Plug-In Hybrid</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="Veloster">Veloster</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="Kona">Kona</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="Kona EV">Kona EV</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="NEXO">NEXO</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="Palisade">Palisade</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="Santa Fe">Santa Fe</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="Santa Fe Sport">Santa Fe Sport</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="Santa Fe XL">Santa Fe XL</MenuItem> :  null }
              {values.make === "Hyundai" ? <MenuItem value="Tuscon">Tuscon</MenuItem> :  null }

              {values.make === "Infiniti" ? <MenuItem value="Q50">Q50</MenuItem> :  null }
              {values.make === "Infiniti" ? <MenuItem value="Q50 Hybrid">Q50 Hybrid</MenuItem> :  null }
              {values.make === "Infiniti" ? <MenuItem value="Q60">Q60</MenuItem> :  null }
              {values.make === "Infiniti" ? <MenuItem value="Q70">Q70</MenuItem> :  null }
              {values.make === "Infiniti" ? <MenuItem value="Q70L">Q70L</MenuItem> :  null }
              {values.make === "Infiniti" ? <MenuItem value="Q70h">Q70h</MenuItem> :  null }
              {values.make === "Infiniti" ? <MenuItem value="QX30">QX30</MenuItem> :  null }
              {values.make === "Infiniti" ? <MenuItem value="QX50">QX50</MenuItem> :  null }
              {values.make === "Infiniti" ? <MenuItem value="QX60">QX60</MenuItem> :  null }
              {values.make === "Infiniti" ? <MenuItem value="QX60 Hybrid">QX60 Hybrid</MenuItem> :  null }
              {values.make === "Infiniti" ? <MenuItem value="QX70">QX70</MenuItem> :  null }
              {values.make === "Infiniti" ? <MenuItem value="QX80">QX80</MenuItem> :  null }

              {values.make === "Jaguar" ? <MenuItem value="F-Type">F-Type</MenuItem> :  null }
              {values.make === "Jaguar" ? <MenuItem value="XE">XE</MenuItem> :  null }
              {values.make === "Jaguar" ? <MenuItem value="XE SV">XE SV</MenuItem> :  null }
              {values.make === "Jaguar" ? <MenuItem value="XF">XF</MenuItem> :  null }
              {values.make === "Jaguar" ? <MenuItem value="XJ">XJ</MenuItem> :  null }
              {values.make === "Jaguar" ? <MenuItem value="E-Pace">E-Pace</MenuItem> :  null }
              {values.make === "Jaguar" ? <MenuItem value="F-Pace">F-Pace</MenuItem> :  null }
              {values.make === "Jaguar" ? <MenuItem value="I-Pace">I-Pace</MenuItem> :  null }

              {values.make === "Jeep" ? <MenuItem value="Cherokee">Cherokee</MenuItem> :  null }
              {values.make === "Jeep" ? <MenuItem value="Compass">Compass</MenuItem> :  null }
              {values.make === "Jeep" ? <MenuItem value="Grand Cherokee">Grand Cherokee</MenuItem> :  null }
              {values.make === "Jeep" ? <MenuItem value="Patriot">Patriot</MenuItem> :  null }
              {values.make === "Jeep" ? <MenuItem value="Renegade">Renegade</MenuItem> :  null }
              {values.make === "Jeep" ? <MenuItem value="Wrangler">Wrangler</MenuItem> :  null }
              {values.make === "Jeep" ? <MenuItem value="Wrangler JK">Wrangler JK</MenuItem> :  null }
              {values.make === "Jeep" ? <MenuItem value="Wrangler JK Unlimited">Wrangler JK Unlimited</MenuItem> :  null }
              {values.make === "Jeep" ? <MenuItem value="Wrangler Unlimited">Wrangler Unlimited</MenuItem> :  null }
              {values.make === "Jeep" ? <MenuItem value="Wrangler Gladiator">QX60 Wrangler Gladiator</MenuItem> :  null }

              {values.make === "Kia" ? <MenuItem value="Cadenza">Cadenza</MenuItem> :  null }
              {values.make === "Kia" ? <MenuItem value="Forte">Forte</MenuItem> :  null }
              {values.make === "Kia" ? <MenuItem value="K900">K900</MenuItem> :  null }
              {values.make === "Kia" ? <MenuItem value="Optima">Optima</MenuItem> :  null }
              {values.make === "Kia" ? <MenuItem value="Optima Hybrid">Optima Hybrid</MenuItem> :  null }
              {values.make === "Kia" ? <MenuItem value="Optima Plug-In Hybrid">Optima Plug-In Hybrid</MenuItem> :  null }
              {values.make === "Kia" ? <MenuItem value="Rio">Rio</MenuItem> :  null }
              {values.make === "Kia" ? <MenuItem value="Soul">Soul</MenuItem> :  null }
              {values.make === "Kia" ? <MenuItem value="Soul EV">Soul EV</MenuItem> :  null }
              {values.make === "Kia" ? <MenuItem value="Stinger">Stinger</MenuItem> :  null }
              {values.make === "Kia" ? <MenuItem value="Niro">Niro</MenuItem> :  null }
              {values.make === "Kia" ? <MenuItem value="Niro EV">Niro EV</MenuItem> :  null }
              {values.make === "Kia" ? <MenuItem value="Niro Plug-In Hybrid">Niro Plug-In Hybrid</MenuItem> :  null }
              {values.make === "Kia" ? <MenuItem value="Sorento">Sorento</MenuItem> :  null }
              {values.make === "Kia" ? <MenuItem value="Sportage">Sportage</MenuItem> :  null }
              {values.make === "Kia" ? <MenuItem value="Telluride">Telluride</MenuItem> :  null }
              {values.make === "Kia" ? <MenuItem value="Sedona">Sedona</MenuItem> :  null }

              {values.make === "Lexus" ? <MenuItem value="CT 200h">CT 200h</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="ES 300h">ES 300h</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="ES 350">ES 350</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="GS 200t">GS 200t</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="GS 300">GS 300</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="GS 350">GS 350</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="GS 450h">GS 450h</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="GS F">GS F</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="IS 200t">IS 200t</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="IS 300">IS 300</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="IS 350">IS 350</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="LC 500">LC 500</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="LC 500h">LC 500h</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="LS 460">LS 460</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="LS 500">LS 500</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="LS 500h">LS 500h</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="RC 200t">RC 200t</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="RC 300">RC 300</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="RC 350">RC 350</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="RC F">RC F</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="GX 460">GX 460</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="LX 570">LX 570</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="NX 200t">NX 200t</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="NX 300">NX 300</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="NX 300h">NX 300h</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="RX 350">RX 350</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="RX 350L">RX 350L</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="RX 450h">RX 450h</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="RX 450L">RX 450L</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="UX 200">UX 200</MenuItem> :  null }
              {values.make === "Lexus" ? <MenuItem value="UX 250">UX 250</MenuItem> :  null }

              {values.make === "Lincoln" ? <MenuItem value="Continental">Continental</MenuItem> :  null }
              {values.make === "Lincoln" ? <MenuItem value="MKZ">MKZ</MenuItem> :  null }
              {values.make === "Lincoln" ? <MenuItem value="MKZ Hybrid">MKZ Hybrid</MenuItem> :  null }
              {values.make === "Lincoln" ? <MenuItem value="Aviator">Aviator</MenuItem> :  null }
              {values.make === "Lincoln" ? <MenuItem value="Corsair">Corsair</MenuItem> :  null }
              {values.make === "Lincoln" ? <MenuItem value="MKC">MKC</MenuItem> :  null }
              {values.make === "Lincoln" ? <MenuItem value="MKT">MKT</MenuItem> :  null }
              {values.make === "Lincoln" ? <MenuItem value="MKX">MKX</MenuItem> :  null }
              {values.make === "Lincoln" ? <MenuItem value="Nautilus">Nautilus</MenuItem> :  null }
              {values.make === "Lincoln" ? <MenuItem value="Navigator">Navigator</MenuItem> :  null }
              {values.make === "Lincoln" ? <MenuItem value="Navigator L">Navigator L</MenuItem> :  null }

              {values.make === "Maserati" ? <MenuItem value="Ghibli">Ghibli</MenuItem> :  null }
              {values.make === "Maserati" ? <MenuItem value="GranTurismo">GranTurismo</MenuItem> :  null }
              {values.make === "Maserati" ? <MenuItem value="Quattroporte">Quattroporte</MenuItem> :  null }
              {values.make === "Maserati" ? <MenuItem value="Levante">Levante</MenuItem> :  null }

              {values.make === "Mazda" ? <MenuItem value="MX-5 Miata">MX-5 Miata</MenuItem> :  null }
              {values.make === "Mazda" ? <MenuItem value="MX-5 Miata Rf">MX-5 Miata Rf</MenuItem> :  null }
              {values.make === "Mazda" ? <MenuItem value="Mazda3">Mazda3</MenuItem> :  null }
              {values.make === "Mazda" ? <MenuItem value="Mazda6">Mazda6</MenuItem> :  null }
              {values.make === "Mazda" ? <MenuItem value="CX-3">CX-3</MenuItem> :  null }
              {values.make === "Mazda" ? <MenuItem value="CX-5">CX-5</MenuItem> :  null }
              {values.make === "Mazda" ? <MenuItem value="CX-9">CX-9</MenuItem> :  null }

              {values.make === "Mercedes-Benz" ? <MenuItem value="A-Class">A-Class</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG C 43">AMG C 43</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG C 63">AMG C 63</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="330">330</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG CLA 45">AMG CLA 45</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG CLS 53">AMG CLS 53</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG CLS 63">AMG CLS 63</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG E 43">AMG E 43</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG E 53">AMG E 53</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG E 63">AMG E 63</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG GT">AMG GT</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG GT 53">AMG GT 53</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG GT 63">AMG GT 63</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG S 63">AMG S 63</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG S 65">AMG S 65</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG SL 63">AMG SL 63</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG SL 65">AMG SL 65</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG SLC 43">AMG SLC 43</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="B-Class">B-Class</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="C-Class">C-Class</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="CLA 250">CLA 250</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="CLS 450">CLS 450</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="CLS 550">CLS 550</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="E-Class">E-Class</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="Maybach S 550">Maybach S 550</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="Maybach S 560">Maybach S 560</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="Maybach S 600">Maybach S 600</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="Maybach S 650">Maybach S 650</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="S-Class">S-Class</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="SL 450">SL 450</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="SL 550">SL 550</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="SLC 300">SLC 300</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG G 63<">AMG G 63</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG G 65">AMG G 65</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG GLA 45">AMG GLA 45</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG GLA 43">AMG GLA 43</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG GLC 63">AMG GLA 63</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG GLE 43">AMG GLE 43</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG GLE 63">AMG GLE 63</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="AMG GLS 63<">AMG GLS 63</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="G-Class">G-Class</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="GLA 250">GLA 250</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="GLC 300">GLC 300</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="GLC 350e">GLC 350e</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="GLE 300d">GLE 300d</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="GLE 350">GLE 350</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="GLE 400">GLE 400</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="GLE 450">GLE 450</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="GLE 550e">GLE 550e</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="GLE 550e Plug-In Hybrid">GLE 550e Plug-In Hybrid</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="GLE 580">GLE 580</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="GLS 350d">GLS 350d</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="GLS 450">GLS 450</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="GLS 550">GLS 550</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="Metris">Metris</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="Sprinter 1500">Sprinter 1500</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="Sprinter 2500">Sprinter 2500</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="Sprinter 3500">Sprinter 3500</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="Sprinter 3500XD">Sprinter 3500XD</MenuItem> :  null }
              {values.make === "Mercedes-Benz" ? <MenuItem value="Sprinter 4500">Sprinter 4500</MenuItem> :  null }

              {values.make === "Mini" ? <MenuItem value="Clubman">Clubman</MenuItem> :  null }
              {values.make === "Mini" ? <MenuItem value="Convertible">Convertible</MenuItem> :  null }
              {values.make === "Mini" ? <MenuItem value="Hardtop">Hardtop</MenuItem> :  null }
              {values.make === "Mini" ? <MenuItem value="Countryman">Countryman</MenuItem> :  null }
              {values.make === "Mini" ? <MenuItem value="E Countryman">E Countryman</MenuItem> :  null }


              {values.make === "Mitsubishi" ? <MenuItem value="Lancer">Lancer</MenuItem> :  null }
              {values.make === "Mitsubishi" ? <MenuItem value="Mirage">Mirage</MenuItem> :  null }
              {values.make === "Mitsubishi" ? <MenuItem value="Mirage G4">Mirage G4</MenuItem> :  null }
              {values.make === "Mitsubishi" ? <MenuItem value="I-MiEV">I-MiEV</MenuItem> :  null }
              {values.make === "Mitsubishi" ? <MenuItem value="Eclipse Cross">Eclipse Cross</MenuItem> :  null }
              {values.make === "Mitsubishi" ? <MenuItem value="Outlander">Outlander</MenuItem> :  null }
              {values.make === "Mitsubishi" ? <MenuItem value="Outlander PHEV">Outlander PHEV</MenuItem> :  null }
              {values.make === "Mitsubishi" ? <MenuItem value="Outlander Sport">Outlander Sport</MenuItem> :  null }

              {values.make === "Nissan" ? <MenuItem value="370Z">370Z</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Altima">Altima</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="GT-R">GT-R</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Leaf">Leaf</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Maxima">Maxima</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Sentra">Sentra</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Versa">Versa</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Versa Note">Versa Note</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Armada">Armada</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Juke">Juke</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Kicks">Kicks</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Murano">Murano</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Pathfinder">Pathfinder</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Rogue">Rogue</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Rogue Hybrid">Rogue Hybrid</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Rogue Sport">Rogue Sport</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Frontier">Frontier</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Titan">Titan</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Titan XD">Titan XD</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Cargo NV1500">Cargo NV1500</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Cargo NV2500 HD">Cargo NV2500 HD</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Cargo NV3500 HD">Cargo NV3500 HD</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Cargo Passenger NV3500 HD">Cargo Passenger NV3500 HD</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="NV200">NV200</MenuItem> :  null }
              {values.make === "Nissan" ? <MenuItem value="Quest">Quest</MenuItem> :  null }

              {values.make === "Polestar" ? <MenuItem value="1">1</MenuItem> :  null }
              {values.make === "Polestar" ? <MenuItem value="2">2</MenuItem> :  null }

              {values.make === "Pontiac" ? <MenuItem value="GTO">GTO</MenuItem> :  null }
              {values.make === "Pontiac" ? <MenuItem value="Aztek">Aztek</MenuItem> :  null }
              {values.make === "Pontiac" ? <MenuItem value="Torrent">Torrent</MenuItem> :  null }
              {values.make === "Pontiac" ? <MenuItem value="Cobalt">Cobalt</MenuItem> :  null }
              {values.make === "Pontiac" ? <MenuItem value="Solstice">Solstice</MenuItem> :  null }
              {values.make === "Pontiac" ? <MenuItem value="Vibe">Vibe</MenuItem> :  null }
              {values.make === "Pontiac" ? <MenuItem value="Sunbird">Sunbird</MenuItem> :  null }

              {values.make === "Porsche" ? <MenuItem value="718 Boxster">718 Boxster</MenuItem> :  null }
              {values.make === "Porsche" ? <MenuItem value="718 Cayman">718 Cayman</MenuItem> :  null }
              {values.make === "Porsche" ? <MenuItem value="911">911</MenuItem> :  null }
              {values.make === "Porsche" ? <MenuItem value="Panamera">Panamera</MenuItem> :  null }
              {values.make === "Porsche" ? <MenuItem value="Panamera E-Hybrid">Panamera E-Hybrid</MenuItem> :  null }
              {values.make === "Porsche" ? <MenuItem value="Panamera E-Hybrid Sport Turismo">Panamera E-Hybrid Sport Turismo</MenuItem> :  null }
              {values.make === "Porsche" ? <MenuItem value="Panamera Sport Turismo">Panamera Sport Turismo</MenuItem> :  null }
              {values.make === "Porsche" ? <MenuItem value="Cayenne">Cayenne</MenuItem> :  null }
              {values.make === "Porsche" ? <MenuItem value="Cayenne E-Hybrid">Cayenne E-Hybrid</MenuItem> :  null }
              {values.make === "Porsche" ? <MenuItem value="Macan">Macan</MenuItem> :  null }

              {values.make === "Ram" ? <MenuItem value="1500">1500</MenuItem> :  null }
              {values.make === "Ram" ? <MenuItem value="1500 Classic">1500 Classic</MenuItem> :  null }
              {values.make === "Ram" ? <MenuItem value="2500">2500</MenuItem> :  null }
              {values.make === "Ram" ? <MenuItem value="3500">3500</MenuItem> :  null }
              {values.make === "Ram" ? <MenuItem value="Promaster 1500">Promaster 1500</MenuItem> :  null }
              {values.make === "Ram" ? <MenuItem value="Promaster 2500">Promaster 2500</MenuItem> :  null }
              {values.make === "Ram" ? <MenuItem value="Promaster 2500 Window Van">Promaster 2500 Window Van</MenuItem> :  null }
              {values.make === "Ram" ? <MenuItem value="Promaster 3500 Window Van">Promaster 3500 Window Van</MenuItem> :  null }
              {values.make === "Ram" ? <MenuItem value="Promaster City">Promaster City</MenuItem> :  null }

              {values.make === "Rolls-Royce" ? <MenuItem value="Dawn">Dawn</MenuItem> :  null }
              {values.make === "Rolls-Royce" ? <MenuItem value="Ghost">Ghost</MenuItem> :  null }
              {values.make === "Rolls-Royce" ? <MenuItem value="Phantom">Phantom</MenuItem> :  null }
              {values.make === "Rolls-Royce" ? <MenuItem value="Wraith">Wraith</MenuItem> :  null }
              {values.make === "Rolls-Royce" ? <MenuItem value="Cullinan">Cullinan</MenuItem> :  null }

              {values.make === "Saab" ? <MenuItem value="9-3">9-3</MenuItem> :  null }
              {values.make === "Saab" ? <MenuItem value="9-5">9-5</MenuItem> :  null }
              {values.make === "Saab" ? <MenuItem value="Convertible">Convertible</MenuItem> :  null }
              {values.make === "Saab" ? <MenuItem value="9-7X">9-7X</MenuItem> :  null }
              {values.make === "Saab" ? <MenuItem value="9-4X">9-4X</MenuItem> :  null }
              {values.make === "Saab" ? <MenuItem value="9-2X">9-2X</MenuItem> :  null }

              {values.make === "Saturn" ? <MenuItem value="S-Series">S-Series</MenuItem> :  null }
              {values.make === "Saturn" ? <MenuItem value="Vue">Vue</MenuItem> :  null }
              {values.make === "Saturn" ? <MenuItem value="Aura">Aura</MenuItem> :  null }
              {values.make === "Saturn" ? <MenuItem value="Ion">Ion</MenuItem> :  null }
              {values.make === "Saturn" ? <MenuItem value="Outlook">Outlook</MenuItem> :  null }
              {values.make === "Saturn" ? <MenuItem value="Sky">Sky</MenuItem> :  null }
              {values.make === "Saturn" ? <MenuItem value="Astra">Astra</MenuItem> :  null }

              {values.make === "Scion" ? <MenuItem value="XB">XB</MenuItem> :  null }
              {values.make === "Scion" ? <MenuItem value="XD">XD</MenuItem> :  null }
              {values.make === "Scion" ? <MenuItem value="TC">TC</MenuItem> :  null }
              {values.make === "Scion" ? <MenuItem value="XA">XA</MenuItem> :  null }
              {values.make === "Scion" ? <MenuItem value="bbX">bbX</MenuItem> :  null }
              {values.make === "Scion" ? <MenuItem value="IQ">IQ</MenuItem> :  null }
              {values.make === "Scion" ? <MenuItem value="t2B">t2B</MenuItem> :  null }

              {values.make === "Smart" ? <MenuItem value="EQ fortwo">EQ fortwo</MenuItem> :  null }
              {values.make === "Smart" ? <MenuItem value="fortwo">fortwo</MenuItem> :  null }
              {values.make === "Smart" ? <MenuItem value="fortwo electric drive">fortwo electric drive</MenuItem> :  null }

              {values.make === "Subaru" ? <MenuItem value="BRZ">BRZ</MenuItem> :  null }
              {values.make === "Subaru" ? <MenuItem value="Impreza">Impreza</MenuItem> :  null }
              {values.make === "Subaru" ? <MenuItem value="Legacy">Legacy</MenuItem> :  null }
              {values.make === "Subaru" ? <MenuItem value="WRX">WRX</MenuItem> :  null }
              {values.make === "Subaru" ? <MenuItem value="WRX STI">WRX STI</MenuItem> :  null }
              {values.make === "Subaru" ? <MenuItem value="Ascent">Ascent</MenuItem> :  null }
              {values.make === "Subaru" ? <MenuItem value="Crosstrek">Crosstrek</MenuItem> :  null }
              {values.make === "Subaru" ? <MenuItem value="Crosstrek Hybrid">Crosstrek Hybrid</MenuItem> :  null }
              {values.make === "Subaru" ? <MenuItem value="Forester">Forester</MenuItem> :  null }
              {values.make === "Subaru" ? <MenuItem value="Outback">Outback</MenuItem> :  null }

              {values.make === "Suzuki" ? <MenuItem value="Equator">Equator</MenuItem> :  null }
              {values.make === "Suzuki" ? <MenuItem value="Aerio">Aerio</MenuItem> :  null }
              {values.make === "Suzuki" ? <MenuItem value="Swift">Swift</MenuItem> :  null }
              {values.make === "Suzuki" ? <MenuItem value="Versa">Versa</MenuItem> :  null }
              {values.make === "Suzuki" ? <MenuItem value="Reno">Reno</MenuItem> :  null }

              {values.make === "Tesla" ? <MenuItem value="Model 3">Model 3</MenuItem> :  null }
              {values.make === "Tesla" ? <MenuItem value="Model S">Model S</MenuItem> :  null }
              {values.make === "Tesla" ? <MenuItem value="Model X">Model X</MenuItem> :  null }

              {values.make === "Toyota" ? <MenuItem value="86">86</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Avalon">Avalon</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Avalon Hybrid">Avalon Hybrid</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Camry">Camry</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Camry Hybrid">Camry Hybrid</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Corolla">Corolla</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Corolla Hatchback">Corolla Hatchback</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Corolla Hybrid">Corolla Hybrid</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Corolla iM">Corolla iM</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Mirai">Mirai</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Prius">Prius</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Prius Prime">Prius Prime</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Prius c">Prius c</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Prius v">Prius v</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Supra">Supra</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Yaris">Yaris</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Yaris Sedan">Yaris Sedan</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Yaris iA">Yaris iA</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="4Runner">4Runner</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="C-HR">C-HR</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Highlander">Highlander</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Highlander Hybrid">Highlander Hybrid</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Land Cruiser">Land Cruiser</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Rav4">Rav4</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Rav4 Hybrid">Rav4 Hybrid</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Sequoia">Sequoia</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Tacoma">Tacoma</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Tundra">Tundra</MenuItem> :  null }
              {values.make === "Toyota" ? <MenuItem value="Sienna">Sienna</MenuItem> :  null }

              {values.make === "Volkswagen" ? <MenuItem value="Arteon">Arteon</MenuItem> :  null }
              {values.make === "Volkswagen" ? <MenuItem value="Beetle">Beetle</MenuItem> :  null }
              {values.make === "Volkswagen" ? <MenuItem value="CC">CC</MenuItem> :  null }
              {values.make === "Volkswagen" ? <MenuItem value="Golf">Golf</MenuItem> :  null }
              {values.make === "Volkswagen" ? <MenuItem value="Golf Alltrack">Golf Alltrack</MenuItem> :  null }
              {values.make === "Volkswagen" ? <MenuItem value="Golf GTI">Golf GTI</MenuItem> :  null }
              {values.make === "Volkswagen" ? <MenuItem value="Golf R">Golf R</MenuItem> :  null }
              {values.make === "Volkswagen" ? <MenuItem value="Golf SportWagon">Golf SportWagon</MenuItem> :  null }
              {values.make === "Volkswagen" ? <MenuItem value="Jetta">Jetta</MenuItem> :  null }
              {values.make === "Volkswagen" ? <MenuItem value="Jetta GLI">Jetta GLI</MenuItem> :  null }
              {values.make === "Volkswagen" ? <MenuItem value="Passat">Passat</MenuItem> :  null }
              {values.make === "Volkswagen" ? <MenuItem value="e-Golf">e-Golf</MenuItem> :  null }
              {values.make === "Volkswagen" ? <MenuItem value="Atlas">Atlas</MenuItem> :  null }
              {values.make === "Volkswagen" ? <MenuItem value="Tiguan">Tiguan</MenuItem> :  null }
              {values.make === "Volkswagen" ? <MenuItem value="Tiguan Limited">Tiguan Limited</MenuItem> :  null }
              {values.make === "Volkswagen" ? <MenuItem value="Touareg">Touareg</MenuItem> :  null }

              {values.make === "Volvo" ? <MenuItem value="S60">S60</MenuItem> :  null }
              {values.make === "Volvo" ? <MenuItem value="S60 Cross Country">S60 Cross Country</MenuItem> :  null }
              {values.make === "Volvo" ? <MenuItem value="S60 Hybrid">S60 Hybrid</MenuItem> :  null }
              {values.make === "Volvo" ? <MenuItem value="S60 Inscription">S60 Inscription</MenuItem> :  null }
              {values.make === "Volvo" ? <MenuItem value="S90">S90</MenuItem> :  null }
              {values.make === "Volvo" ? <MenuItem value="S90 Hybrid">S90 Hybrid</MenuItem> :  null }
              {values.make === "Volvo" ? <MenuItem value="V60">V60</MenuItem> :  null }
              {values.make === "Volvo" ? <MenuItem value="V60 Cross Country">V60 Cross Country</MenuItem> :  null }
              {values.make === "Volvo" ? <MenuItem value="V90">V90</MenuItem> :  null }
              {values.make === "Volvo" ? <MenuItem value="V90 Cross Country">V90 Cross Country</MenuItem> :  null }
              {values.make === "Volvo" ? <MenuItem value="XC40">XC40</MenuItem> :  null }
              {values.make === "Volvo" ? <MenuItem value="XC60">XC60</MenuItem> :  null }
              {values.make === "Volvo" ? <MenuItem value="XC60 Hybrid">XC60 Hybrid</MenuItem> :  null }
              {values.make === "Volvo" ? <MenuItem value="XC90">XC90</MenuItem> :  null }
              {values.make === "Volvo" ? <MenuItem value="XC90 Hybrid">XC90 Hybrid</MenuItem> :  null }

            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="type-simple">Type</InputLabel>
            <Select
              value={values.car_type}
              onChange={handleTypeChange}
              inputProps={{
                name: 'car_type',
                id: 'type-simple',
              }}
              >
              <MenuItem value="Coupe">Coupe</MenuItem>
              <MenuItem value="Sedan">Sedan</MenuItem>
              <MenuItem value="Wagon">Wagon</MenuItem>
              <MenuItem value="SUV">SUV</MenuItem>
              <MenuItem value="Van">Van</MenuItem>
              <MenuItem value="Truck">Truck</MenuItem>

            </Select>
          </FormControl>


          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              value={values.model}
              name="location"
              placeholder="Search by Location…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
              onChange={handleInputChange}

              />
          </div>


        </form>
      </header>
    </div>
  )
}

export default Search
