import React from "react";

type BodyProps = {
    children: React.ReactNode;
};

const FormBody: React.FC<BodyProps> = ({ children }) => {
    return <div className="card-body">{children}</div>;
};

export default FormBody;