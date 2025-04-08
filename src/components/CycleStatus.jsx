export default function CycleStatus({ cycles, targetCycles }) {
    return (
      <div className="text-sm text-gray-600">
        Ciclos: {cycles}/{targetCycles}
      </div>
    );
  }
  