import React, { useEffect, useState } from "react";
import NavCard from "./NavCard";
import "../styles/Navoption.css"


const NavOption = ({
  miPhones,
  reddMiPhone,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
}) => {


    const[miPhonesToggle,setMiPhonesToggle]=useState(false);
    const[laptopToggle,setLaptopToggle]=useState(false);
    const[tvToggle,setTvToggle]=useState(false);
    const[accessoriesToggle ,setAccessoriesToggle]=useState(false);
    const[homeToggle,setHomeToggle]=useState(false);
    const[audioToggle,setAudioToggle]=useState(false);
    const[fitnessAndLifestyleToggle,setFitnessAndLifestyleToggle]=useState(false);
    const[redmiPhonesToggle,setRedmiPhonesToggle]=useState(false);





    useEffect(()=>{
        if(window.location.pathname==="/miphones"){
            return setMiPhonesToggle(true);
        }
        if(window.location.pathname==="/redmiphones"){
            return setRedmiPhonesToggle(true);
        }
        if(window.location.pathname==="/tv"){
            return setTvToggle(true);
        }
        if(window.location.pathname==="/laptop"){
            return setLaptopToggle(true);
        }
        if(window.location.pathname==="/lifestyle"){
            return setFitnessAndLifestyleToggle(true);
        }
        if(window.location.pathname==="/home"){
            return setHomeToggle(true);
        }
        if(window.location.pathname==="/audio"){
            return setAudioToggle(true);
        }
        if(window.location.pathname==="/accessories"){
            return setAccessoriesToggle(true);
        }
        

    },[])







  return (
    <div className="navOption">
      {miPhonesToggle
        ? miPhones.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {redmiPhonesToggle
        ?reddMiPhone.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {tvToggle
        ?tv.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {laptopToggle
        ?laptop.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {fitnessAndLifestyleToggle
        ?fitnessAndLifeStyle.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {homeToggle
        ?home.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {audioToggle
        ?audio.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {accessoriesToggle
        ? accessories.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
    </div>
  );
};

export default NavOption;
