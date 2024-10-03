import React from "react";

interface ActionButtonProps {
  label: string;
  onClick?: () => void;
}

export const ActionButton = ({ label, onClick }: ActionButtonProps) => (
  <button
    className="bg-teal-400 text-white py-3 px-8 rounded-full font-extrabold"
    onClick={onClick}
  >
    {label}
  </button>
);
