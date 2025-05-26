import React, { useRef } from 'react';

const MAX_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED = ['application/pdf', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'];

const FileUpload = ({ value, onChange, error }) => {
  const inputRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    validateAndSet(file);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    validateAndSet(file);
  };

  const validateAndSet = (file) => {
    if (!file) return;
    if (!ACCEPTED.includes(file.type) && !file.name.endsWith('.pdf') && !file.name.endsWith('.ppt') && !file.name.endsWith('.pptx')) {
      onChange(null);
      return alert('Solo se permiten archivos PDF o PPT.');
    }
    if (file.size > MAX_SIZE) {
      onChange(null);
      return alert('El archivo supera el tamaño máximo de 10MB.');
    }
    onChange(file);
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer bg-white/80 ${error ? 'border-red-500' : 'border-gray-400'} transition`}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={() => inputRef.current.click()}
    >
      <input
        type="file"
        accept=".pdf,.ppt,.pptx,application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation"
        ref={inputRef}
        onChange={handleChange}
        className="hidden"
      />
      <div className="text-gray-700 font-semibold mb-2">Arrastra y suelta tu archivo aquí o haz clic para seleccionar</div>
      <div className="text-xs text-gray-500 mb-2">PDF o PPT, máx. 10MB</div>
      {value && <div className="text-green-600 font-medium mt-2">{value.name}</div>}
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </div>
  );
};

export default FileUpload; 