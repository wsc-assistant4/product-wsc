// src/components/ui/Slider.tsx

import React from 'react';

type SliderProps = {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  labels: string[];
};

export function Slider({ value, min = 1, max = 5, step = 1, onChange, labels }: SliderProps) {
  return (
    <div className="w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="w-full h-2 bg-neutral-light rounded-lg appearance-none cursor-pointer range-lg accent-brand-primary"
      />
      <div className="flex justify-between w-full mt-2 text-xs text-neutral-medium px-1">
        {labels.map((label, index) => (
          <span key={index}>{label}</span>
        ))}
      </div>
    </div>
  );
}