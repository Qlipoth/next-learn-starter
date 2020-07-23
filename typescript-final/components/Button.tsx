import * as React from "react";

enum ButtonTypes {
    Primary = "primary",
    Secondary = "secondary",
    Success = "success",
    Danger = "danger",
    Warning = "warning",
    Info = "info",
    Light = "light",
    Dark = "dark"
}

interface CommonProps {
    className?: string
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, CommonProps {
    text: string
    view: ButtonTypes
    action?: () => void
}

const ExtendedButton : React.FC<ButtonProps> = ({text, view, action, className, ...props}) => {
    return (
        <button type="button" onClick={action} className={[`btn btn-${view}`, className].join(' ')}>{text}</button>
    );
};

export { ExtendedButton, ButtonTypes };