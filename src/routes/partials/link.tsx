import React from "react"
import { AppRouterContext } from "./context";

type LinkProps = {
    to: string;
    children: React.ReactNode;
}

export const Link = ({to,children}:LinkProps) => {
    const {changePath,activePath} = AppRouterContext();

    return (
        <button className={`link ${to==activePath && "active-link"}`}  onClick={()=>changePath(to)}>
            {children}
        </button>
    )
}
