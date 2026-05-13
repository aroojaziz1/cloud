"use client";

import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923330601258"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform z-[9999] flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Tooltip that appears on hover */}
      <span className="absolute right-16 bg-white text-black text-[10px] font-bold px-3 py-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-widest border border-gray-100">
        Chat with us
      </span>
      
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="28" 
        height="28" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.449-1.271.608-1.445.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.101-.177.211-.077.383.1.173.444.735.951 1.185.654.581 1.203.761 1.373.847.171.086.271.071.371-.043l.433-.506c.112-.131.227-.11.335-.07l1.327.625c.11.054.184.086.228.163.044.077.044.444-.1.849z"/>
        <path fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.891.524 3.66 1.435 5.174l-1.203 4.389 4.494-1.181A9.969 9.969 0 0 0 12 22zm0-2a7.962 7.962 0 0 1-4.175-1.179l-.299-.174-2.53.665.676-2.463-.191-.314A7.962 7.962 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;