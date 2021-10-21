import React from "react";

export interface IButton {
    label: string;
    onPress?: () => void;
}

const Button: React.FC<IButton> = ({ label, onPress, children }) => {
    console.log('test')
    return <button onClick={onPress}>{label} {children}</button>
}

export default Button;