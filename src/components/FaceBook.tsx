import { useEffect } from 'react';
import '../components/shared-button.css';

// Declare global Facebook types
declare global {
    interface Window {
        fbAsyncInit: () => void;
        FB: any;
        checkLoginState: () => void;
    }
    var FB: any;
}

function FaceBook() {
    useEffect(() => {
        // Initialize Facebook SDK
        window.fbAsyncInit = function() {
            window.FB.init({
                appId: '687470240959979',
                cookie: true,
                xfbml: true,
                version: 'v23.0'
            });
        };

        // Load the SDK asynchronously
        const loadFacebookSDK = () => {
            if (document.getElementById('facebook-jssdk')) {
                return;
            }
            const js = document.createElement('script');
            js.id = 'facebook-jssdk';
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            document.getElementsByTagName('head')[0].appendChild(js);
        };

        loadFacebookSDK();
    }, []);

    const handleFacebookLogin = () => {
        // Alternative: Redirect to Facebook OAuth URL
        const facebookAuthUrl = `https://www.facebook.com/v23.0/dialog/oauth?client_id=687470240959979&redirect_uri=${encodeURIComponent(window.location.origin)}&scope=email,public_profile&response_type=code`;
        
        // Open Facebook login in a popup window
        const popup = window.open(
            facebookAuthUrl,
            'facebookLogin',
            'width=600,height=700,scrollbars=yes,resizable=yes'
        );

        // Monitor the popup for completion
        const checkClosed = setInterval(() => {
            if (popup?.closed) {
                clearInterval(checkClosed);
                console.log('Facebook login popup closed');
                // You would handle the authorization code here
                alert('Facebook login completed. Check console for details.');
            }
        }, 1000);
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