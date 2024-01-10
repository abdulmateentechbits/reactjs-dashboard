import { CSSProperties, FC, ReactNode } from "react";

// Card.tsx
type CardProps = {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
};

const Card: FC<CardProps> = ({ children, style, className }) => {
    return (
        <div className={`card ${className}`} style={style}>
            {children}
        </div>
    );
};

export default Card;