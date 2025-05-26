import React from 'react';
import StepForm from './components/StepForm';
import ProgressBar from './components/ProgressBar';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-future-tech-primary via-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white/10 rounded-2xl shadow-xl p-6 md:p-10">
        <StepForm />
      </div>
    </div>
  );
};

export default App; 