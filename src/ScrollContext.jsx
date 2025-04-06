import { createContext, useRef, useContext } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    rooms: useRef(null),
    amenities: useRef(null),
    testimonials: useRef(null),
    footer: useRef(null),
  };

  return (
    <ScrollContext.Provider value={sectionRefs}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
