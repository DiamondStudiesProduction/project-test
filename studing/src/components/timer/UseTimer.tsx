import { useEffect, useReducer, useRef } from "react";
import { Timer } from "./Timer";

export function useTimer() {
    /* Используем useReducer, который при каждом действии увеличивает счётчик */
    const [_, forceUpdate] = useReducer(v => v + 1, 0);

    const ref = useRef(new Timer());
  
    useEffect(() => {
      const timer = ref.current;
  
      timer.start();
  
          /* Регистируем функцию forceUpdate в классе таймера */
      timer.onChange(forceUpdate);
  
      return () => {
        timer.stop();
      };
    }, []);
  
    return ref.current.time;
  }
  
  export function TimerUI() {
      /* Используем хук в компоненте */
    const time = useTimer();
  
    return <div>{time}</div>;
  } 