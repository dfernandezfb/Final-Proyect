import React from 'react'
import SocialLogin from 'react-social-login'
import { useState, useEffect } from 'react';

const useGoogleLogin = () => {

    const [isShowing, setIsShowing] = useState(false)

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
};

export default useGoogleLogin;