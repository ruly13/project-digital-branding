export interface CertificationItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: 1,
    title: "Juri English Speech Contest",
    issuer: "Lanud Iswahyudi",
    date: "2024",
    image:
      "/sertifikat-penghargaan/Juri EnglishSpeech Lanud Iswahyudi/7c69034b-1.jpg",
    description:
      "Certificate of Appreciation as a Judge for the English Speech Contest.",
  },
  {
    id: 2,
    title: "UMKM Speak English Better",
    issuer: "UMKM Community",
    date: "2024",
    image: "/sertifikat-penghargaan/UMKM speak english better/2348639c-1.jpg",
    description: "Participation in the UMKM Speak English Better program.",
  },
  {
    id: 3,
    title: "English Certification",
    issuer: "MTSN 3 Magetan",
    date: "2024",
    image:
      "/sertifikat-penghargaan/certificate MTSN 3 Magetan_English/ee84fe23-1.jpg",
    description: "English proficiency certification from MTSN 3 Magetan.",
  },
  {
    id: 4,
    title: "English Certification",
    issuer: "MTSN 5 Magetan",
    date: "2024",
    image:
      "/sertifikat-penghargaan/certificate MTSN 5 MAGETAN_English/a9c43f4b-1.jpg",
    description: "English proficiency certification from MTSN 5 Magetan.",
  },
  {
    id: 5,
    title: "English Certification",
    issuer: "MTsN Kuncen",
    date: "2024",
    image:
      "/sertifikat-penghargaan/certificate MTsN Kuncen_English/c42fdf1f-1.jpg",
    description: "English proficiency certification from MTsN Kuncen.",
  },
  {
    id: 6,
    title: "English Certification",
    issuer: "MI Islamiyah 01",
    date: "2024",
    image:
      "/sertifikat-penghargaan/certificate Mi Islamiyah 01_English/fc77c5c3-1.jpg",
    description: "English proficiency certification from MI Islamiyah 01.",
  },
  {
    id: 7,
    title: "English Certification",
    issuer: "MI Islamiyah 02 Madiun",
    date: "2024",
    image:
      "/sertifikat-penghargaan/certificate Mi Islamiyah 02 Madiun_English/0066408b-1.jpg",
    description:
      "English proficiency certification from MI Islamiyah 02 Madiun.",
  },
  {
    id: 8,
    title: "English Certification",
    issuer: "SMAN 3",
    date: "2024",
    image: "/sertifikat-penghargaan/certificate SMAN3_English/e384a0c3-1.jpg",
    description: "English proficiency certification from SMAN 3.",
  },
  {
    id: 9,
    title: "English Certification",
    issuer: "SMPN 1 Maospati",
    date: "2024",
    image:
      "/sertifikat-penghargaan/certificate SMPN 1 Maospati_English/b29b1569-1.jpg",
    description: "English proficiency certification from SMPN 1 Maospati.",
  },
  {
    id: 10,
    title: "UMKM Can Speak English",
    issuer: "UMKM Community",
    date: "2024",
    image: "/sertifikat-penghargaan/umkm can speak english/c85751ed-1.jpg",
    description: "Certificate for the UMKM Can Speak English program.",
  },
];

export const getCertifications = (): CertificationItem[] => {
  return certificationsData;
};
