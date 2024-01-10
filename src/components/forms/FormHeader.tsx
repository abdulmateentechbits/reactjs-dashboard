import { FC } from "react";

type FormHeaderProps = {
    title: string;
    children?: React.ReactNode;
};

const FormHeader: FC<FormHeaderProps> = ({ title, children }) => {
    return (
        <div className="card-header text-center text-danger">
            <h2 style={{ fontWeight: 'bold', fontSize: 42 }}>{title}</h2>
            {children}
        </div>
    );
};

export default FormHeader;