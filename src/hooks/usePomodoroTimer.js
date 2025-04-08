import { useState, useEffect } from 'react';

export default function usePomodoroTimer() {
  const [mode, setMode] = useState('pomodoro');
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState({
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  });
  const [timeLeft, setTimeLeft] = useState(time.pomodoro);
  const [cycles, setCycles] = useState(0);
  const [targetCycles, setTargetCycles] = useState(4);

  useEffect(() => {
    let interval = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      clearInterval(interval);
      const notification = new Audio('data:audio/wav;base64,UklG...'); // Cortei aqui o áudio enorme
      notification.play();
      
      if (mode === 'pomodoro') {
        const newCycles = cycles + 1;
        setCycles(newCycles);

        if (newCycles % targetCycles === 0) {
          setMode('longBreak');
          setTimeLeft(time.longBreak);
        } else {
          setMode('shortBreak');
          setTimeLeft(time.shortBreak);
        }
      } else {
        setMode('pomodoro');
        setTimeLeft(time.pomodoro);
      }

      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, mode, time, cycles, targetCycles]);

  useEffect(() => {
    setTimeLeft(time[mode]);
  }, [mode, time]);

  const toggleTimer = () => setIsActive(prev => !prev);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(time[mode]);
    setCycles(0);
  };

  return {
    mode, setMode, isActive, toggleTimer, resetTimer,
    time, setTime, timeLeft, cycles, targetCycles, setTargetCycles
  };
}