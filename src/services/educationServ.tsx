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
      role: "University",
      company: "Gajayana University Malang: English Faculty",
      period: "Graduated 2005",
      description:
        "",
      type: "education",
    },
    {
      id: 2,
      role: "Schooling",
      company: "High School, Middle School, and Elementary School in Maospati",
      period: "",
      description:
        "",
      type: "corporate",
    },
  ];
  
  export const getEducation = (): EducationItem[] => {
    return educationData;
  };