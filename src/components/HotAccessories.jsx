import React from "react";
import HotItemCard from "./HotItemCard";
import "../styles/hotAcceroires.css";

const HotAccessories = ({
  music,
  musicCover,
  SmartDevice,
  SmartDevicesCover,
  home,
  homeCover,
  lifestyle,
  lifestyleCover,
  mobileAccess,
  mobileAccessCover
}) => {
  return (
    <div className="HotAccessories">
      <div>
        <img src={musicCover || SmartDevicesCover || homeCover || lifestyleCover || mobileAccessCover} alt="Cover" />
      </div>

      <div>
        {music &&
          music.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}

        {SmartDevice &&
          SmartDevice.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}

        {home &&
          home.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}

        {lifestyle
         &&
          lifestyle.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
          {mobileAccess
         &&
          mobileAccess.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
          <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/> 
               </div>
    </div>
  );
};

export default HotAccessories;
