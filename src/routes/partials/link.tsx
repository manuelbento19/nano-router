import React from "react"
import { AppRouterContext } from "./context";

type LinkProps = {
    to: string;
    children: React.ReactNode;
}

export const Link = ({to,children}:LinkProps) => {
    const {changePath,activePath} = AppRouterContext();

    const naviate = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        changePath(to)
    }

    return (
        <a href={to} className={`link ${to==activePath && "active-link"}`}  onClick={naviate}>
            {children}
        </a>
    )
}
