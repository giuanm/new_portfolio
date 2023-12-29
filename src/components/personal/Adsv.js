//Import Hooks
import { useEffect, useMemo, useState } from "react"

//Import ADS images
import ads1 from "../../assets/ads/ads1.png"
import ads2 from "../../assets/ads/ads2.png"
import ads3 from "../../assets/ads/ads3.png"
import ads4 from "../../assets/ads/ads4.png"

//Import CSS
import './Adsv.css'


const Adsv = () => {
    
    // Function to select a random image
    const randomAds = (arr) => {
        
        const indexRandom = Math.floor(Math.random() * arr.length);
        
        return arr[indexRandom];
    };
    
    // ADS array
    const ads = useMemo(() => [ads1, ads2, ads3, ads4], []);
    

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
    </div>
  )
}

export default Adsv