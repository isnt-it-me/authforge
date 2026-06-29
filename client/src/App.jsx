import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {

    const token =
        localStorage.getItem("token");

    const [isLogin, setIsLogin] =
        useState(true);

    if (token) {
        return <Dashboard />;
    }

    return (
        <div>

            {isLogin
                ? <Login />
                : <Signup />
            }

            <button
                className="switch-btn"
                onClick={() =>
                    setIsLogin(!isLogin)
                }
            >
                {isLogin
                    ? "Go to Signup"
                    : "Go to Login"}
            </button>

        </div>
    );
}

export default App;