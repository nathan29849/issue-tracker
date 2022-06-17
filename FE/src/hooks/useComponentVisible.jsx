import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible, callback) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = e => {
    if (ref.current) {
      if (!ref.current.contains(e.target)) {
        setIsComponentVisible(false);
      }
      if (e.target.closest('.filter__item-wrapper')) {
        callback();
        setIsComponentVisible(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
}
