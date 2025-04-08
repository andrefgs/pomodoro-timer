export default function ModeSelector({ mode, setMode, setIsActive }) {
    const modes = [
      { key: 'pomodoro', label: 'Pomodoro' },
      { key: 'shortBreak', label: 'Pausa Curta' },
      { key: 'longBreak', label: 'Pausa Longa' }
    ];
  
    return (
      <div className="flex space-x-1 md:space-x-2 mb-4 md:mb-6 bg-gray-100 p-1 rounded-lg w-full">
        {modes.map(m => (
          <button
            key={m.key}
            className={`flex-1 py-1 md:py-2 rounded-md text-xs md:text-sm font-medium transition-colors
            ${mode === m.key ? 'bg-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}
            onClick={() => { setMode(m.key); setIsActive(false); }}
          >
            {m.label}
          </button>
        ))}
      </div>
    );
  }