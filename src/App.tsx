import Routes from "./routes"
import { Link } from "./routes/partials/link";

function App() {
  
  return (
    <main>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      Screen:
      <Routes/>
    </main>
  )
}

export default App
