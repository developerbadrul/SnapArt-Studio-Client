// import Lottie from "lottie-react";
// import AboutUsAnimation from "../../assets/AboutUs.json"
const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-100 my-5 shadow-lg">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="max-w-sm w-full rounded-lg shadow-2xl" />
                {/* <Lottie animationData={AboutUsAnimation}></Lottie> */}
                <div>
                    <h1 className=" md:text-5xl font-bold">About Snap Art Studio</h1>
                    <p className="py-6 text-justify">At Snap Art Studio, we are all about creativity without limits! Our passionate team of artists and designers is dedicated to turning your ideas into stunning visual creations.

                        We specialize in high-quality design and art services that help you stand out. From brochures to digital art, logos to business cards, photography to posters, we offer a diverse range of services tailored to your unique needs.

                        Each member of our team brings their unique style and expertise, ensuring exceptional results every time. With Snap Art Studio, your creative dreams become reality.

                        Choose Snap Art Studio and let your creativity shine.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;