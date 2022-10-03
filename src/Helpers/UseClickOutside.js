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
    document.addEventListener("mousedown", checkHandler);
    return () => {
      document.removeEventListener("mousedown", checkHandler);
    };
  }, []);

  return menuRef;
};

export default UseClickOutside;
