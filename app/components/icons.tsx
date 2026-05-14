'use client';

import React from 'react';
import { Phone, MessageCircleMore } from 'lucide-react';

function Icons() {
  return (
    <div
      className="
        fixed
        bottom-5
        right-4
        z-[9999]
        flex
        flex-col
        gap-3
      "
    >
      {/* WHATSAPP */}
      <a
       href="https://wa.me/919535872776?text=Hi%20I%20want%20to%20connect"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          shadow-lg
          transition-all
          duration-300
          hover:scale-110
        "
      >
        <MessageCircleMore
          size={20}
          strokeWidth={2.2}
          className="text-white"
        />
      </a>

      {/* CALL */}
      <a
       href="tel:+919535872776"
        className="
          group
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-black
          shadow-lg
          transition-all
          duration-300
          hover:scale-110
        "
      >
        <Phone
          size={18}
          strokeWidth={2.2}
          className="text-white"
        />
      </a>
    </div>
  );
}

export default Icons;