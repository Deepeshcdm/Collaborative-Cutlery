import Message from './components/Message';
import Login from './components/Login';
import Google from './components/Google';
import './App.css';
import FaceBook from './components/FaceBook';
function App() {
  return (
    <div className='container'>
      <Message />
      <div className="social-login-container">
        <Google />
        <FaceBook />
      </div>
      <Login />
    </div>
  );
}
export default App
