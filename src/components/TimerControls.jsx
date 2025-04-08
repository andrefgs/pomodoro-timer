import { Play, Pause, RotateCcw, Settings } from 'lucide-react';

export default function TimerControls({ isActive, toggleTimer, resetTimer, openSettings, mode, getButtonColor }) {
  return (
    <div className="flex space-x-4 mb-4 md:mb-6">
      <button 
        className={`p-3 rounded-full text-white ${getButtonColor(mode)} transition-colors`}
        onClick={toggleTimer}
      >
        {isActive ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <button 
        className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        onClick={resetTimer}
      >
        <RotateCcw size={24} className="text-gray-700" />
      </button>
      <button 
        className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        onClick={openSettings}
      >
        <Settings size={24} className="text-gray-700" />
      </button>
    </div>
  );
}
