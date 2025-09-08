import { useState, useEffect } from 'react';

/**
 * Custom hook to detect the network status (online/offline)
 * @returns {boolean} - `true` if online, `false` if offline
 */
const useNetworkStatus = (): boolean => {
 
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
 
    const updateStatus = (): void => {
      setIsOnline(navigator.onLine);
    };

 
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);

   
    return () => {
      window.removeEventListener('online', updateStatus);
      window.removeEventListener('offline', updateStatus);
    };
  }, []);

  return isOnline;
};

export default useNetworkStatus;
