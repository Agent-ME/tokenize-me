'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type TransitionContextType = {
  isComingFromHome: boolean;
  setComingFromHome: (value: boolean) => void;
};

const TransitionContext = createContext<TransitionContextType>({
  isComingFromHome: false,
  setComingFromHome: () => {},
});

export const usePageTransition = () => useContext(TransitionContext);

export const PageTransitionProvider = ({ 
  children 
}: { 
  children: React.ReactNode 
}) => {
  const [isComingFromHome, setComingFromHome] = useState(false);
  
  useEffect(() => {
    // Check if we're coming from home on component mount
    const transitionFlag = localStorage.getItem('comingFromHome');
    if (transitionFlag === 'true') {
      setComingFromHome(true);
      // Clear the flag
      localStorage.removeItem('comingFromHome');
    }
    
    // Reset the state when the component unmounts
    return () => {
      setComingFromHome(false);
    };
  }, []);
  
  return (
    <TransitionContext.Provider value={{ isComingFromHome, setComingFromHome }}>
      {children}
    </TransitionContext.Provider>
  );
};

export default PageTransitionProvider; 