import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    disabled: boolean;
}

export function Button({ children, onClick, disabled }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            style={{
                padding: 8,
                color: "#FFF",
                backgroundColor: disabled ? "#FAFAFA" : "#121212",
            }}
        >
            {children}
        </button>
    )
}