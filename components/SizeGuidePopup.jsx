'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SizeGuidePopup = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[2000] backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[550px] bg-white z-[2001] shadow-2xl p-6 md:p-12 overflow-y-auto max-h-[90vh]"
          >
            <button onClick={onClose} className="absolute right-5 top-5 text-xl">✕</button>
            <h2 className="text-xl md:text-2xl font-serif uppercase tracking-[0.2em] text-center mb-8 md:mb-10">Standard Size Chart</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[400px]">
                <thead>
                  <tr className="border-b border-gray-200 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-gray-900">
                    <th className="py-4">Size</th>
                    <th className="py-4">Chest</th>
                    <th className="py-4">Waist</th>
                    <th className="py-4">Length</th>
                  </tr>
                </thead>
                <tbody className="text-[12px] md:text-[13px] font-light text-gray-600">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size, idx) => (
                    <tr key={idx} className="border-b border-gray-50">
                      <td className="py-4 font-medium text-black">{size}</td>
                      <td className="py-4">{32 + (idx * 2)}"</td>
                      <td className="py-4">{26 + (idx * 2)}"</td>
                      <td className="py-4">42"</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-8 text-[10px] text-gray-400 text-center uppercase tracking-widest leading-relaxed">
              *Measurement in inches. Contact our consultant for custom bridal sizing.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SizeGuidePopup;