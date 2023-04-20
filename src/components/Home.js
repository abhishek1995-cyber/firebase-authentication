import { Link } from 'react-router-dom'

export default function Home(){
    return (
        <>
        <div className="header-home">
            <div>
                <h1>Home</h1>
            </div>
            <div>
            <Link to="/login">
            <button>
                Login
            </button>
            </Link>
            <Link to="/register" >
            <button>
                Register
            </button>
            </Link>
            </div>
        </div>
        <div className="main-home">
        <h2>
            Welcome to Authenticator
        </h2>
        </div>
        </>
    )
}
