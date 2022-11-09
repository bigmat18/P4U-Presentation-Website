import React, {useEffect, useState} from 'react'
import WindowSizeContext from '../Context/WindowSizeContext'

const PageSizeProvider = props =>
{
    const [size, setSize] = useState({width: window.innerWidth, height: window.innerHeight});
    const updateSize = () => setSize({width: window.innerWidth, height: window.innerHeight});

    useEffect(() => {
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <WindowSizeContext.Provider value={size}>
            {props.children}
        </WindowSizeContext.Provider>
    );
}

export default PageSizeProvider;