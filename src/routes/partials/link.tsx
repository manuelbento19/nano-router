import React from "react"
import { AppRouterContext } from "./context";

type LinkProps = {
    to: string;
    children: React.ReactNode;
}

export const Link = ({to,children}:LinkProps) => {
    const {changePath} = AppRouterContext();

    return (
        <button onClick={()=>changePath(to)}>
            {children}
        </button>
    )
}
