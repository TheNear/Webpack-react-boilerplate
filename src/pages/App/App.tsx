import React, { useCallback, useState } from "react";
import { Button } from "@components/Button/Button";
import s from "./App.module.scss";

const App: React.FC = () => {
  const [counter, setCounter] = useState(1);

  const increaseCounter = useCallback(() => {
    setCounter((state) => state + 1);
  }, [setCounter]);

  return (
    <div className={s.Wrapper}>
      <div className={s.Counter}>{counter}</div>
      <Button onClick={increaseCounter}>Increase 👆</Button>
    </div>
  );
};

export { App };
