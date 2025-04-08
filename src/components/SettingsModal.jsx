import { X } from 'lucide-react';

export default function SettingsModal({ tempSettings, setTempSettings, targetCycles, setTargetCycles, closeSettings, saveSettings }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Configurações</h2>
          <button onClick={closeSettings} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          {['pomodoro', 'shortBreak', 'longBreak'].map(key => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {key === 'pomodoro' ? 'Tempo de Foco' : key === 'shortBreak' ? 'Pausa Curta' : 'Pausa Longa'} (minutos)
              </label>
              <input
                type="number"
                min="1"
                max="60"
                value={tempSettings[key]}
                onChange={(e) => setTempSettings({ ...tempSettings, [key]: parseInt(e.target.value) || 1 })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ciclos até Pausa Longa</label>
            <input
              type="number"
              min="1"
              max="10"
              value={targetCycles}
              onChange={(e) => setTargetCycles(parseInt(e.target.value) || 1)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex justify-end mt-2">
            <button 
              onClick={closeSettings} 
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md mr-2 hover:bg-gray-300"
            >
              Cancelar
            </button>
            <button 
              onClick={saveSettings} 
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
