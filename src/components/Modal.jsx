/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
     
      <div 
        className="absolute inset-0 bg-black opacity-50" 
        onClick={onClose}
      />
      
      <div className="relative bg-white w-[90%] max-w-[500px] p-6 rounded-lg shadow-lg z-10">
        {children}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-950 text-white w-8 h-8 rounded-[7px] text-sm flex justify-center items-center"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;