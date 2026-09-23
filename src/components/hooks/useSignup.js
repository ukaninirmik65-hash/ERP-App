import { useContext, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";

export function useSignup() {

    const [error, setError] = useState("")
    const [isSingup, setSingup] = useState(false);
    const { login, setLogin } = useContext(SidebarContext);

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

    function handleUpdatePassword(e) {
        e.preventDefault();

        const savedUser = localStorage.getItem("Uses");

        if (!savedUser) {
            setError("User not found");
            return;
        }

        if (!password.password) {
            setError("Please enter new password");
            return;
        }

        if (password.password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        const UserData = JSON.parse(savedUser);

        UserData.password = password.password;

        localStorage.setItem("Uses", JSON.stringify(UserData));
        localStorage.setItem("isLoggedIn", "true");

        setError("");
        setLogin(true);
    }

    function handleSignup(e) {
        e.preventDefault();

        if (isSingup) {
            if (!password.username || !password.email || !password.password) {
                setError("Please fill all fields");
                return;
            }

            if (password.password.length < 6) {
                setError("Password must be at least 6 characters");
                return;
            }

            const savedUser = localStorage.getItem("Uses");

            if (savedUser) {
                setError("User already registered. Please login.");
                return;
            }

            localStorage.setItem("Uses", JSON.stringify(password));
            localStorage.setItem("isLoggedIn", "true");

            setError("");
            setLogin(true);

            return;
        }


        if (!password.email || !password.password || !password.username) {
            setError("Please enter email and password and name");
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

        const UserData = JSON.parse(savedUser);

        if (
            UserData.email !== password.email ||
            UserData.password !== password.password
        ) {
            setError("Invalid email or password");
            return;
        }

        setError("");
        localStorage.setItem("isLoggedIn", "true");
        setLogin(true);

        setPassword({
            username: "",
            email: "",
            password: "",
        });
    }
    return {
        login,
        password,
        HandelInputs,
        handleSignup,
        error,
        isSingup,
        setSingup,
        setPassword,
        handleUpdatePassword
    };
}
export function useForgetPassword() {
    const savedUser = localStorage.getItem("Uses")
    if (!savedUser) {
        return null;
    }
    return JSON.parse(savedUser)
}