//  Psst! Wanna peek at some code magic? ✨
//
import { useEffect, useState } from 'react';


// 🪄 Abracadabra! This hook reveals the window's size 
export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    //  Watch out for window resizing! 
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};

//  Now that I've got you hooked, mind following my Instagram?  @mateentechibits 
