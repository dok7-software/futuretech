import React from 'react';

const ProgressBar = ({ step, total }) => {
  const percent = Math.round((step / total) * 100);
  return (
    <div className="w-full mb-8">
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-2 bg-future-tech-accent transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-white/70 mt-2">
        <span>Paso {step} de {total}</span>
        <span>{percent}%</span>
      </div>
    </div>
  );
};

export default ProgressBar; 