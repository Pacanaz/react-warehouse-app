import { Link } from "react-router-dom"

function WelcomePage() {
  return (
    <div>Welcome! Navigate to <Link to={'products'}>Products</Link></div>
  )
}

export default WelcomePage