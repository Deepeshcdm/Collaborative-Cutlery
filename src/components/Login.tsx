import './Login.css';
function Test() {
    return (
        <div className="login-form">
            <h2>━━━━━━OR━━━━━━</h2>
            
            <form>
                <hr></hr>
                <input type="text" placeholder="Username" /><br></br>
                <input type="password" placeholder="Password" /><br></br>
                <hr></hr>
                <br></br>
                <button className='Login' type="submit" onClick={() => alert("Logged In")}>Login</button>
            </form>
        </div>
    )
}

export default Test;
