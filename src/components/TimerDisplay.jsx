import { formatTime } from "../utils/formatTime";
import { getColor, getTextColor } from "../utils/getColors";

export default function TimerDisplay({ timeLeft, mode, calculateProgress }) {
  return (
    <div className="relative w-56 h-56 flex items-center justify-center mb-4 md:mb-6">
      <div className="absolute w-full h-full rounded-full bg-gray-200"></div>
      <div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden">
        <div className={`w-full h-full ${getColor(mode)} opacity-20`} style={{ height: `${calculateProgress()}%` }}></div>
      </div>
      <div className="absolute inset-2.5 rounded-full bg-white flex items-center justify-center flex-col">
        <h2 className={`text-4xl font-bold ${getTextColor(mode)}`}>{formatTime(timeLeft)}</h2>
        <p className="text-gray-500 text-sm mt-1">{mode === 'pomodoro' ? 'Foco' : mode === 'shortBreak' ? 'Pausa Curta' : 'Pausa Longa'}</p>
      </div>
    </div>
  );
}