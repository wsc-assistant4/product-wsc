import React from 'react';
import { Card } from 'components/ui/Card';
import { FormData } from '@/types';
import Image from 'next/image';

type StepProps = {
  data: Partial<FormData>;
  updateData: (fields: Partial<FormData>) => void;
};

const profileOptions = [
  { value: "Pemerintah & Lembaga Publik", icon: "/icons/government.svg" },
  { value: "Bisnis & Sektor Swasta", icon: "/icons/business.svg" },
  { value: "Nirlaba & Komunitas", icon: "/icons/nonprofit.svg" },
  { value: "Akademisi & Lainnya", icon: "/icons/academic.svg" },
];

export function Step1_Profile({ data, updateData }: StepProps) {
  const handleSelect = (value: string) => {
    updateData({ q1_profile: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-dark mb-1">
        Mari kita mulai dengan mengenal Anda.
      </h2>
      <p className="text-neutral-medium mb-6">
        Apa yang paling tepat menggambarkan organisasi Anda?
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {profileOptions.map((option) => (
          <Card
            key={option.value}
            title={option.value}
            icon={
              <Image 
                src={option.icon} 
                alt={option.value} 
                width={40} 
                height={40}
                className={data.q1_profile === option.value ? 'filter-white' : ''}
              />
            }
            onClick={() => handleSelect(option.value)}
            isSelected={data.q1_profile === option.value}
          />
        ))}
      </div>
    </div>
  );
}