import { Accordion } from "flowbite-react";

const Faq = () => {
    return (
        <Accordion className="my-5">
            <Accordion.Panel>
                <Accordion.Title>Q: What types of services does Snap Art Studio offer?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                    A: Snap Art Studio offers a wide range of creative services, including brochure design, digital art, logo design, business card design, photo capture and editing, poster design, flyer design, social media graphics, banner design, paper cutting, and more. Our team is here to help bring your creative visions to life.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>Q: Who are the creative minds behind Snap Art Studio?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                    A: Our studio is home to a team of dedicated artists, designers, and professionals. Each member of our team is passionate about their craft, and they bring their unique skills and expertise to every project. You can trust our creative talents to deliver top-notch results.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>Q: How can I get started with Snap Art Studio?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                    A: Getting started with Snap Art Studio is easy! Simply explore our services, browse through our portfolio, and reach out to us to discuss your project. We all work closely with you to understand your needs and provide you with creative solutions that exceed your expectations. Your journey with Snap Art Studio begins with a simple message or call.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
};

export default Faq;