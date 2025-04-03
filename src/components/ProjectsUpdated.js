import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


// Import images
import playlist from "../assets/PlaylistMania.png";
import cityBike from "../assets/CityBike1.png";
import employeeRoster from "../assets/EmployeeRoster.png";
import portfolio from "../assets/portfolioScreenshot.png";
import ecommerce from "../assets/backendScreenshot.png";
import brewtique from "../assets/brewtique.png";
import brochure1 from "../assets/COHBrochure1.png";
import brochure2 from "../assets/COHBrochure2.png";
import cohinsert from "../assets/COHInsert1.png";
import newsletter from "../assets/JulyNewsletter.png";
import paymentus from "../assets/PaymentusInsert.png";


export default function App() {
  // Array of your local images using imported images
  const localImages = [
    playlist,
    brochure1,
    brochure2,
    cityBike,
    cohinsert,
    brewtique,
    portfolio,
    paymentus,
    newsletter,
    ecommerce,
    employeeRoster,
  ];


   // State to hold images
   const [images] = useState(localImages);

   return (
     <div className="App">
       <InfiniteScroll
         dataLength={images.length}
         hasMore={false} // No more images to load, stop infinite scroll
         loader={<h4>Loading...</h4>}
       >
         <ResponsiveMasonry
           columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 3, 900: 3 }}
         >
           <Masonry gutter="20px">
             {images.map((src, index) => (
               <img
                 key={index}
                 src={src}
                 alt={`Portfolio item ${index + 1}`}
                 style={{ width: "95%", borderRadius: "8px", margin: "8px" }}
               />
             ))}
           </Masonry>
         </ResponsiveMasonry>
       </InfiniteScroll>
     </div>
   );
 }