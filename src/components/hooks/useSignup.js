import { useState } from "react";

export function useSignup(setLogin, login) {
    const [error, setError] = useState("")
    const [isSingup, setSingup] = useState(false);
    const [password, setPassword] = useState({
        username: "",
        email: "",
        password: "",
    });

    function HandelInputs(e) {
        const { name, value } = e.target;

        setPassword({
            ...password,
            [name]: value,
        });
    }


    function handleSignup(e) {
        e.preventDefault();
        if (isSingup) {
            localStorage.setItem("Uses", JSON.stringify(password));
            setError("");
            setLogin(true);
            return;
        }

        if (!password.username || !password.email || !password.password) {
            setError("Please fill all fields");
            return;
        }

        if (password.password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        const savedUser = localStorage.getItem("Uses");
        if (!savedUser) {
            setError("Please signup first");
            return;
        }

        const UserData = JSON.parse(savedUser)
        if (UserData.email !== password.email ||
            UserData.password !== password.password) {
            setError("Invalid email or password");
            return;
        }
        setError("");
        setLogin(true);
    }
    return {
        login,
        password,
        HandelInputs,
        handleSignup,
        error,
        isSingup,
        setSingup
    };
}

;