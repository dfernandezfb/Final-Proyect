import { useState, useEffect } from 'react';

const useModalLogin = () => {

    const [isShowing, setIsShowing] = useState(false)

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
};

export default useModalLogin;