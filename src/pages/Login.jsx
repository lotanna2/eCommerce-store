import { useState } from "react";
import { authenticateUser } from "../utils";

const Login = ({setUser, setIsLogged}) => { 
    const [email, setEmail] = useState(""); //login handling the authentication login which tracks an event 
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false); // for the loading icon on submit

    const handleLogin = (e) => {
        setLoading(true); // at initial value loading icon
        e.preventDefault();
        const getUser = async () => { // getting user data
            const response = await authenticateUser(email, password);  // passing in the variables to check for authentication
              // eslint-disable-next-line no-unused-expressions
         response
          ? (setUser(response), setIsLogged(true))
          : setErrorMsg("INVALID EMAIL OR PASSWORD");
             
          console.log("RESPONSE", response);
          setLoading(false); // set loading false
        };

        getUser();
    };
    return (
        <div>
           <form className="login-form">
            <span className="error-span">{errorMsg}</span>
            <label htmlFor="email" className="login-label"> 
                Email
            </label>
             <input
             type="text" 
             name="email" 
             className="login-inp"
             value={email} 
             placeholder="Email"
             onChange={(e) => { // checking the value onchabge of input
                setEmail(e.target.value);
             }}
             />
            <label htmlFor="password" className="login-label"> 
                Password
           </label>
             <input
             type="Password" 
             name="Password" 
             className="login-inp" 
             placeholder="Password"
             value={password}
             onChange={(e) => {
                setPassword(e.target.value);
             }}
             />
             <button 
             type="submit"
              disabled={loading ? true : false} //if loading, disabled will be true else it would be false
              onClick={handleLogin} // handles the login for login from the parameters above
             > 
                {!loading? "Submit" : "Loading..."}
             </button>
           </form> 
        </div>  
    );
 };

 export default Login;