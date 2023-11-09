import { Footer } from 'flowbite-react';
import Logo from "/icon.png"
const Footers = () => {
    return (
        <Footer container>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand

                        name="SnapArt Studio"
                        src={Logo}
                        alt="Snapart Studio Logo"
                    />
                    <Footer.LinkGroup>
                        <Footer.Link href="/services">Services</Footer.Link>
                        <Footer.Link href="/manage-service">Manage Service</Footer.Link>
                        <Footer.Link href="/my-schedule">Schedule</Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright href="#" by="Snap Art" year={2023} />
            </div>
        </Footer>
    );
};

export default Footers;