import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue = []) => {
  const [localStorageItems, setLocalStorageItems] = useState(() => {
    const storedItems = localStorage.getItem(key);
    return storedItems ? JSON.parse(storedItems) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localStorageItems));
  }, [key, localStorageItems]);

  return [localStorageItems, setLocalStorageItems];
};

export default useLocalStorage;
