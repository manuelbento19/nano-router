import React, { createContext, useContext, useState } from "react"

type RouteContext = {
    activePath: string;
    changePath: (path: string) => void
}

const Context = createContext<RouteContext>({
    activePath: "",
    changePath: () => null
})

export const RouterProvider = ({children}:React.PropsWithChildren) => {
    const [activePath,setActivePath] = useState(window.location.pathname);
    const changePath = (path:string) => {
        setActivePath(path)
        window.history.pushState({},"Path",path)
    }

    return (
        <Context.Provider value={{
            activePath,
            changePath,
        }}>
            {children}
        </Context.Provider>
    )
}

export const AppRouterContext = () => useContext(Context)