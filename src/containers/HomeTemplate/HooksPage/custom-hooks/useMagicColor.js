import { useState, useEffect } from "react";

function useMagicColor() {
  const [state, setState] = useState("lightcoral");

  useEffect(() => {
    const interval = setInterval(() => {
      //   random mã màu từ 0 -> 999999
      const newColor = Math.floor(Math.random() * 999999);
      setState(`#${newColor}`);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return state;
}

export { useMagicColor };
