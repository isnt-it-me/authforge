import { useState } from "react";
import api from "../services/api";

function Login() {
  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin =
    async () => {
      try {
        const response =
          await api.post(
            "/auth/signin",
            {
              username,
              password,
            }
          );

        localStorage.setItem(
          "token",
          response.data.token
        );

        alert(
          "Login Successful"
        );

        console.log(
          response.data
        );
      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
            "Login Failed"
        );
      }
    };

  return (
    <div className="container">
      <h2>Login</h2>

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
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;