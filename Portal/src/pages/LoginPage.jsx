import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

function LoginPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === '1234') {
            login({username});
            navigate('/home');
        } else {
            alert('Invalid credentials!');
        }
    };

    return (
        <div className="text-center p-10 w-full">
            <h2>Login</h2> <br />
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                /><br /><br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginPage;