import React from "react";

type HeaderProps = {
    text: string
} & React.HTMLAttributes<HTMLHeadingElement>


const HeaderText: React.FC<HeaderProps> = (prop) => {
    return (
       <h1>{prop.text}</h1>
    )
}

const TitleText: React.FC<HeaderProps> = (prop) => {
    return (
        <h2 className={prop.className}>{prop.text}</h2>
    )
}

export { HeaderText, TitleText }