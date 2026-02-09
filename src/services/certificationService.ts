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
    title: "Certified TEFL - Level 5 Diploma",
    issuer: "The TEFL Academy",
    date: "2023",
    image: "/img/certifications/cert1.jpg", // Placeholder path
    description: "Qualifies to teach English as a foreign language worldwide.",
  },
  {
    id: 2,
    title: "Business English Specialist",
    issuer: "Cambridge Assessment English",
    date: "2021",
    image: "/img/certifications/cert2.jpg", // Placeholder path
    description: "Specialized certification for corporate training.",
  },
  // Add more certificates here as needed
];

export const getCertifications = (): CertificationItem[] => {
  return certificationsData;
};
