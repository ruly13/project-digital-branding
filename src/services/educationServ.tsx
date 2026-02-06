export interface EducationItem {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
    type: "education" | "corporate"; // education uses 🏛️, corporate/hotel uses 💼
  }
  
  export const educationData: EducationItem[] = [
    {
      id: 1,
      role: "Bachelor of English Language and Literature",
      company: "Universitas Muhammadiyah Malang",
      period: "2004 - 2008",
      description:
        "",
      type: "education",
    },
  ];
  
  export const getEducation = (): EducationItem[] => {
    return educationData;
  };