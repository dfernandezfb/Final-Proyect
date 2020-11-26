import { useState, useEffect } from 'react';
import React from 'react'
import SocialLogin from 'react-social-login'

const useFacebookLogin = () => {

    const [isShowing, setIsShowing] = useState(false)

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
};

export default useFacebookLogin;