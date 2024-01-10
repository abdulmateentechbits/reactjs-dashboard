import React from "react";

type FooterProps = {
    children?: React.ReactNode;
};

const FormFooter: React.FC<FooterProps> = ({ children }) => {
    return <div className="card-footer">{children}</div>;
};

export default FormFooter;