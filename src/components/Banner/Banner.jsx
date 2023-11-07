import { Carousel } from "flowbite-react";
import Slide1 from "../../../src/assets/images/Slide1.png"
// import Slide2 from "../../../src/assets/images/Slide2.png"
import Slide3 from "../../../src/assets/images/Slide3.png"
const Banner = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={3000}>
                <img src={Slide1} alt="..." />
                <img src={Slide3} alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
            </Carousel>
        </div>
    );
};

export default Banner;