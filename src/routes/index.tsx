import { About } from "../pages/About"
import { Contact } from "../pages/Contact"
import { Home } from "../pages/Home"
import { AppRouterContext } from "./partials/context"

const routes:Record<string,JSX.Element> = {
    "/": <Home/>,
    "/contact": <Contact/>,
    "/about": <About/>
}

export default function Routes() {
    const {activePath} = AppRouterContext();
    return routes[activePath] ?? <h1>Not found</h1>
}
