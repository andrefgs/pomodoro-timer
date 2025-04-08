import usePomodoroTimer from "../hooks/usePomodoroTimer";
import { calculateProgress } from "../utils/calculateProgress";
import { getButtonColor } from "../utils/getColors";

import TimerDisplay from "../components/TimerDisplay";
import ModeSelector from "../components/ModeSelector";
import TimerControls from "../components/TimerControls";
import CycleStatus from "../components/CycleStatus";
import SettingsModal from "../components/SettingsModal";

import { useState } from "react";

export default function PomodoroTimer() {
  const {
    mode, setMode, isActive, toggleTimer, resetTimer,
    time, setTime, timeLeft, cycles, targetCycles, setTargetCycles
  } = usePomodoroTimer();

  const [showSettings, setShowSettings] = useState(false);
  const [tempSettings, setTempSettings] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });

  const openSettings = () => setShowSettings(true);
  const closeSettings = () => setShowSettings(false);

  const saveSettings = () => {
    setTime({
      pomodoro: tempSettings.pomodoro * 60,
      shortBreak: tempSettings.shortBreak * 60,
      longBreak: tempSettings.longBreak * 60
    });
    closeSettings();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-4">
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4 md:p-6 rounded-lg shadow-lg bg-white">
        <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Pomodoro Timer</h1>

        <ModeSelector mode={mode} setMode={setMode} setIsActive={toggleTimer} />
        <TimerDisplay timeLeft={timeLeft} mode={mode} calculateProgress={() => calculateProgress(time[mode], timeLeft)} />
        <TimerControls 
          isActive={isActive} 
          toggleTimer={toggleTimer} 
          resetTimer={resetTimer} 
          openSettings={openSettings} 
          mode={mode} 
          getButtonColor={getButtonColor}
        />
        <CycleStatus cycles={cycles} targetCycles={targetCycles} />
      </div>

      {showSettings && (
        <SettingsModal 
          tempSettings={tempSettings}
          setTempSettings={setTempSettings}
          targetCycles={targetCycles}
          setTargetCycles={setTargetCycles}
          closeSettings={closeSettings}
          saveSettings={saveSettings}
        />
      )}
    </div>
  );
}
