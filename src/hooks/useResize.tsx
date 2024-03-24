import { useState, useEffect } from 'react';

const getWidth = () => window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

function useResize() {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const handleResize = () => {
      clearTimeout(timeoutId!);

      timeoutId = setTimeout(() => {
        setWidth(getWidth());
        timeoutId = null;
      }, 150);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}

export default useResize;
