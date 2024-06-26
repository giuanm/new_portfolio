//Import Hooks
import { useEffect, useMemo, useState } from "react"

//Import ADS images
import ads1 from "../assets/ads/ads1.jpg"
import ads2 from "../assets/ads/ads2.jpg"
import ads3 from "../assets/ads/ads3.png"
import ads4 from "../assets/ads/ads4.png"
import ads5 from "../assets/ads/ads5.png"
import ads6 from "../assets/ads/ads6.png"
import ads7 from "../assets/ads/ads7.png"
import ads8 from "../assets/ads/ads8.png"
import ads9 from "../assets/ads/ads9.png"
import ads10 from "../assets/ads/ads10.png"
import ads11 from "../assets/ads/ads11.png"
import message from '../assets/icons/message.svg';

//Import CSS
import './Adsv.css'


const Adsv = () => {
    
    // Function to select a random image
    const randomAds = (arr) => {
        
        const indexRandom = Math.floor(Math.random() * arr.length);
        
        return arr[indexRandom];
    };
    
    // ADS array
    const ads = useMemo(() => [ads1, ads2, ads3, ads4, ads5, ads6, ads7, ads8, ads9, ads10, ads11], []);
    

    const [img1, setImg1] = useState(ads3);
    
    // Adding time for ADS update
    useEffect(() => {
            
        const timer = setInterval(() => {
    
            setImg1(randomAds(ads));
    
        }, 10000);
        
        return () =>clearInterval(timer);
      
    }, [ads]);

    // Creating the second image different from the first
    const ads_2 = ads.filter((img) => img !== img1);
    const img2 = randomAds(ads_2);

  return (
    <div>
        <img src={img1} alt="Random Img" className="ads"/>
        <img src={img2} alt="Random Img" className="ads"/>
        <a href="https://respond.forms.app/giuanferreira/contact" target="_blank" rel="noreferrer">
          <img src={message} alt="foto" style={{width: '5rem'}}/>
        </a>
    </div>
  )
}

export default Adsv
