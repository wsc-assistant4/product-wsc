// src/components/solution-finder/Step3_Maturity.tsx

import React from 'react';
import { Slider } from 'components/ui/Slider';
import { FormData } from '@/types';

type StepProps = {
  data: Partial<FormData>;
  updateData: (fields: Partial<FormData>) => void;
};

const maturityLabels = ["Baru Wacana", "Inisiatif Awal", "Terstruktur", "Terintegrasi", "Optimal"];

export function Step3_Maturity({ data, updateData }: StepProps) {
  const handleChange = (value: number) => {
    updateData({ q3_maturity: value });
  };
  
  // Ambil nilai saat ini, default ke 3 (tengah) jika belum ada
  const currentValue = data.q3_maturity ?? 3;

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-neutral-dark mb-1">
        Perjalanan Keberlanjutan Anda.
      </h2>
      <p className="text-neutral-medium mb-6">
        Sejauh mana organisasi Anda saat ini dalam mengintegrasikan prinsip keberlanjutan?
      </p>
      
      <div className="flex flex-col items-center pt-4">
        <div className="w-full max-w-lg">
          <Slider 
            value={currentValue}
            onChange={handleChange}
            min={1}
            max={5}
            labels={["1", "2", "3", "4", "5"]}
          />
          <div className="text-center mt-4">
            <p className="text-lg font-semibold text-brand-primary">
              {maturityLabels[currentValue - 1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}