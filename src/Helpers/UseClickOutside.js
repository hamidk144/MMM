import { useEffect } from "react";
import { useRef } from "react";

let UseClickOutside = (handler) => {
  let menuRef = useRef();

  useEffect(() => {
    
    let checkHandler = (e) => {
      if (!menuRef?.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("click", checkHandler);
    return () => {
      document.removeEventListener("click", checkHandler);
    };
  }, []);

  return menuRef;
};

export default UseClickOutside;
