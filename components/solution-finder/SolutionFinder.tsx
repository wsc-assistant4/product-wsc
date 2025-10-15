// src/components/solution-finder/SolutionFinder.tsx

"use client";

import React, { useState } from 'react';
import { FormData } from '@/types';
import { Step1_Profile } from './Step1_Profile';
import { Step2_Focus } from './Step2_Focus';
import { Step3_Maturity } from './Step3_Maturity'; // <-- 1. Import komponen baru

const initialData: Partial<FormData> = {
  q1_profile: "",
  q2_focus: "",
  q3_maturity: 3, // <-- 2. Tambahkan & set default value
};

export function SolutionFinder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>(initialData);

  const updateFormData = (fields: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };
  
  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const isNextDisabled = () => {
    if (currentStep === 1 && !formData.q1_profile) return true;
    if (currentStep === 2 && !formData.q2_focus) return true;
    if (currentStep === 3 && !formData.q3_maturity) return true; // <-- 3. Tambahkan validasi
    return false;
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10 border border-gray-200">
      <div className="min-h-[200px]">
        {currentStep === 1 && (
            <Step1_Profile data={formData} updateData={updateFormData} />
        )}
        {currentStep === 2 && (
            <Step2_Focus data={formData} updateData={updateFormData} />
        )}
        {/* --- 4. Tampilkan Step 3 secara kondisional --- */}
        {currentStep === 3 && (
            <Step3_Maturity data={formData} updateData={updateFormData} />
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-neutral-light/80 flex justify-between items-center">
        <button 
            className="px-6 py-2 bg-neutral-medium text-white rounded-lg hover:bg-opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={prevStep}
            disabled={currentStep === 1}
        >
            Kembali
        </button>
        <div className="text-sm text-neutral-medium">
            Langkah {currentStep} dari 8
        </div>
        <button 
            className="px-6 py-2 bg-brand-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={nextStep}
            disabled={isNextDisabled()}
        >
            Lanjut
        </button>
      </div>
    </div>
  );
}