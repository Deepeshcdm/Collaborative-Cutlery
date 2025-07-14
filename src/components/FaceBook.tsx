import { useEffect } from 'react';
import '../components/shared-button.css';
import { signInWithPopup } from 'firebase/auth';
import { auth, facebookProvider } from '../firebase.js';

function FaceBook() {
    useEffect(() => {
        console.log('Facebook component mounted');
    }, []);

    const handleFacebookLogin = async () => {
        try {
            const result = await signInWithPopup(auth, facebookProvider);
            const user = result.user;
            
            console.log('Facebook Sign-In Success:', user);
            alert(`Welcome ${user.displayName}!\nEmail: ${user.email}`);
            
            // You can now access user information:
            // user.displayName, user.email, user.photoURL, user.uid
            
        } catch (error) {
            console.error('Facebook Sign-In Error:', error);
            alert('Facebook Sign-In failed. Please try again.');
        }
    };

    return (
        <div>
            <button className="social-login-button facebook" onClick={handleFacebookLogin}>
                <div className="button-state"></div>
                <div className="button-content-wrapper">
                    <div className="button-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#ffffff" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </div>
                    <span className="button-contents">Continue with Facebook</span>
                </div>
            </button>
        </div>
    );
}

export default FaceBook;