import React from "react";

export const UseClickOutside = () => {
  // useClickOutside hook
  const useClickOutside = (ref, handler) => {
    React.useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("click", listener);
      return () => {
        document.removeEventListener("click", listener);
      };
    }, [ref, handler]);
  };

  return useClickOutside;
};
