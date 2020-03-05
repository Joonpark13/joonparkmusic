import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname.split('/')[1]]); // Change only on top level path change, since subpath means tab navigation

  return null;
}
