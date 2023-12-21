import React from "react"

interface TitleProps {
    title: string
    style?: React.CSSProperties
}

export const Title: React.FC<TitleProps> = ({ title, style }) => {
    return (
        <p
            style={{
                fontFamily: "KG",
                fontSize: "7vw",
                color: "#fff",
                fontWeight: "600",
                letterSpacing: "0.6vw",
                margin: 0,
                ...style,
            }}
        >
            {title}:
        </p>
    )
}
