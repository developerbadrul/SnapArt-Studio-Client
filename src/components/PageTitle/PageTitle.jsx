/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";

const PageTitle = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

export default PageTitle;