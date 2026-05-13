import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sizeCharts } from './SizeData';

const SizeGuidePopup = ({ isOpen, onClose, productName, type = "shirt" }) => {
  const chart = sizeCharts[type] || sizeCharts.shirt;

  return (
    <AnimatePresence>
      {isOpen && (
        // z-[9999] ensures this sits on top of the Sticky Navbar
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          
          {/* Backdrop Blur/Overlay */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose} 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Main Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative w-full max-w-3xl bg-white shadow-2xl overflow-hidden rounded-sm"
          >
            {/* Elegant Close Button */}
            <button 
              onClick={onClose} 
              className="absolute right-7 top-7 text-gray-400 hover:text-black transition-all p-2 z-10 text-2xl font-light"
            >
              ✕
            </button>

            <div className="p-8 md:p-14">
              {/* Header Section */}
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] mb-3">{productName}</h2>
                <p className="text-[12px] tracking-[0.1em] text-gray-500 font-light">
                  The dress size measurements are in inches.
                </p>
              </div>

              {/* Table Section */}
              <div className="overflow-x-auto border border-gray-100 bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="p-4 text-[11px] font-bold tracking-widest text-gray-900 bg-white">Details</th>
                      {chart.columns.map(col => (
                        <th key={col} className="p-4 text-center text-[11px] font-bold tracking-widest text-gray-900 bg-white">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {chart.rows.map((row, idx) => {
                      if (row.type === 'section') {
                        // Section Separator (Centered & Bold)
                        return (
                          <tr key={idx} className="border-b border-gray-100 bg-white">
                            <td 
                              colSpan={chart.columns.length + 1} 
                              className="p-4 text-center text-[12px] font-bold text-gray-800 tracking-widest"
                            >
                              {row.label}
                            </td>
                          </tr>
                        );
                      } else {
                        // Regular Data Row
                        return (
                          <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/30 transition-colors bg-white">
                            <td className="p-4 text-[12px] font-bold text-gray-800 tracking-wider whitespace-nowrap">
                              {row.label}
                            </td>
                            {row.values.map((val, vIdx) => (
                              <td key={vIdx} className="p-4 text-center text-[14px] text-gray-600 font-light">
                                {val}
                              </td>
                            ))}
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SizeGuidePopup;