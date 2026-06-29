import { useState } from "react";
import api from "../services/api";

function Signup() {

    const [username, setUsername] =
        useState("");

    const [password, setPassword] =
        useState("");

    const handleSignup =
        async () => {

            try {

                await api.post(
                    "/auth/signup",
                    {
                        username,
                        password
                    }
                );

                alert(
                    "Signup Successful"
                );

            } catch (error) {

                alert(
                    error.response?.data?.message ||
                    "Signup Failed"
                );

            }

        };

    return (

       <div className="container">

            <h2>Signup</h2>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) =>
                    setUsername(
                        e.target.value
                    )
                }
            />

            <br />
            <br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(
                        e.target.value
                    )
                }
            />

            <br />
            <br />

            <button
                onClick={handleSignup}
            >
                Signup
            </button>

        </div>

    );

}

export default Signup;