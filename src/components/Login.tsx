import './Login.css';
function Test(){
 return (
    <div>
        <br></br>
        
        <h2>-------------OR-------------</h2>
        <hr></hr>
        <form>
            <input type="text" placeholder="Username" /><br></br>
            <input type="password" placeholder="Password" /><br></br>
        <   hr></hr>
            <br></br>
            <button className='Login'type="submit" onClick={() => alert("Logged In")}>Login</button>
        </form>
    </div>
 )
}

export default Test;
