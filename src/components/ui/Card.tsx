// src/components/ui/Card.tsx

import React from 'react';

type CardProps = {
  title: string;
  icon?: React.ReactNode; // Bisa menerima komponen ikon
  onClick: () => void;
  isSelected: boolean;
};

export function Card({ title, icon, onClick, isSelected }: CardProps) {
  // Styling dinamis berdasarkan apakah kartu ini dipilih atau tidak
  const baseClasses = "rounded-xl border p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 h-full";
  const selectedClasses = "bg-brand-secondary text-white ring-2 ring-brand-accent shadow-lg scale-105";
  const unselectedClasses = "bg-white hover:bg-neutral-light hover:shadow-md text-neutral-dark";

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}
    >
      {icon && <div className="mb-3 h-10 w-10 flex items-center justify-center">{icon}</div>}
      <span className="font-semibold text-sm">{title}</span>
    </div>
  );
}