import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {

    const [user, setUser] = useState(null);

        const [description, setDescription] = useState("");

    useEffect(() => {

        fetchUser();

    }, []);

    const fetchUser =
        async () => {

            try {

                const token =
                    localStorage.getItem(
                        "token"
                    );

                const response =
                    await api.get(
                        "/user/me",
                        {
                            headers: {
                                Authorization:
                                    `Bearer ${token}`
                            }
                        }
                    );

                setUser(
                    response.data.user
                );
                setDescription(
    response.data.user.description
);

            } catch (error) {

                console.log(error);

            }

        };
        const updateProfile =
    async () => {

        try {

            const token =
                localStorage.getItem(
                    "token"
                );

            await api.put(
                "/user/me",
                {
                    description
                },
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

            alert(
                "Profile Updated"
            );

            fetchUser();

        } catch (error) {

            alert(
                "Update Failed"
            );

        }

    };

    const logout = () => {

        localStorage.removeItem(
            "token"
        );

        window.location.reload();

    };

    if (!user)
        return <h2>Loading...</h2>;

    return (

        <div className="container">

            <h1>Dashboard</h1>

            <h3>
                Username :
                {user.username}
            </h3>

            <h3>
                Role :
                {user.role}
            </h3>

            <h3>Description</h3>

<textarea
    rows="5"
    cols="40"
    value={description}
    onChange={(e) =>
        setDescription(
            e.target.value
        )
    }
/>

<br />
<br />

<button
    onClick={updateProfile}
>
    Update Profile
</button>

<br />
<br />

            <button
    className="logout-btn"
    onClick={logout}
>
    Logout
</button>

        </div>

    );

}

export default Dashboard;