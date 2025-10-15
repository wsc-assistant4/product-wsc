// src/components/solution-finder/Step2_Focus.tsx

import React from 'react';
import { Card } from 'components/ui/Card';
import { FormData } from '@/types';

type StepProps = {
  data: Partial<FormData>;
  updateData: (fields: Partial<FormData>) => void;
};

// Objek ini berisi semua kemungkinan opsi berdasarkan jawaban dari Q1
const focusOptions = {
  "Pemerintah & Lembaga Publik": [
    { title: "Pengembangan Destinasi", description: "Merencanakan & mengembangkan kawasan wisata secara terpadu." },
    { title: "Kebijakan & Regulasi", description: "Menyusun aturan yang mendukung pariwisata berkelanjutan." },
    { title: "Peningkatan Kapasitas SDM", description: "Melatih aparatur dan komunitas lokal." },
  ],
  "Bisnis & Sektor Swasta": [
    { title: "Perencanaan & Investasi", description: "Menganalisis kelayakan & potensi proyek baru." },
    { title: "Keberlanjutan & ESG", description: "Meningkatkan kinerja keberlanjutan & pelaporan." },
    { title: "Pemasaran & Pasar", description: "Memahami pasar & memperkuat strategi pemasaran." },
  ],
  "Nirlaba & Komunitas": [
    { title: "Pengembangan Program", description: "Merancang inisiatif berbasis komunitas yang berdampak." },
    { title: "Pendanaan & Kemitraan", description: "Mencari dukungan finansial dan kolaborasi strategis." },
    { title: "Pengukuran Dampak", description: "Menilai & melaporkan dampak sosial/lingkungan." },
  ],
  "Akademisi & Lainnya": [
    { title: "Penelitian Terapan", description: "Melakukan studi yang relevan dengan kebutuhan industri." },
    { title: "Pengembangan Kurikulum", description: "Merancang materi ajar di bidang pariwisata." },
    { title: "Publikasi & Diseminasi", description: "Menyebarkan hasil riset ke khalayak luas." },
  ],
};

export function Step2_Focus({ data, updateData }: StepProps) {
  const handleSelect = (value: string) => {
    updateData({ q2_focus: value });
  };

  // Tentukan pilihan yang akan ditampilkan berdasarkan jawaban q1_profile
  // Jika tidak ada, gunakan array kosong sebagai default
  const currentOptions = focusOptions[data.q1_profile as keyof typeof focusOptions] || [];

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-neutral-dark mb-1">
        Fokus utama Anda saat ini?
      </h2>
      <p className="text-neutral-medium mb-6">
        Pilih salah satu area yang paling relevan dengan tujuan Anda.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentOptions.length > 0 ? (
          currentOptions.map((option) => (
            <Card
              key={option.title}
              title={option.title}
              // Kita bisa menambahkan deskripsi di dalam kartu jika mau
              // icon={<div className="text-sm text-left">{option.description}</div>}
              onClick={() => handleSelect(option.title)}
              isSelected={data.q2_focus === option.title}
            />
          ))
        ) : (
          <p className="text-neutral-medium col-span-full">
            Silakan kembali ke langkah sebelumnya dan pilih profil organisasi Anda terlebih dahulu.
          </p>
        )}
      </div>
    </div>
  );
}