export function getColor(mode) {
    switch (mode) {
      case 'pomodoro': return 'bg-red-500';
      case 'shortBreak': return 'bg-green-500';
      case 'longBreak': return 'bg-blue-500';
      default: return 'bg-red-500';
    }
  }
  
  export function getTextColor(mode) {
    switch (mode) {
      case 'pomodoro': return 'text-red-500';
      case 'shortBreak': return 'text-green-500';
      case 'longBreak': return 'text-blue-500';
      default: return 'text-red-500';
    }
  }
  
  export function getButtonColor(mode) {
    switch (mode) {
      case 'pomodoro': return 'bg-red-500 hover:bg-red-600';
      case 'shortBreak': return 'bg-green-500 hover:bg-green-600';
      case 'longBreak': return 'bg-blue-500 hover:bg-blue-600';
      default: return 'bg-red-500 hover:bg-red-600';
    }
  }