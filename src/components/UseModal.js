import { useState } from "react";

const UseModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  function toggleSignIn() {
    setShowSignIn(!showSignIn);
  }

  return {
    isShowing,
    showSignIn,
    toggle,
    toggleSignIn,
  };
};

export default UseModal;
