export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  type: "education" | "corporate"; // education uses 🏛️, corporate/hotel uses 💼
  icon?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: 0,
    role: "OWNER",
    company: "ENGLISH CLASS BY ETHA GLOBAL EDUKASI FOUNDATION",
    period: "2025 - Now",
    description:
      "Managing a foundation and overseeing its operations. Initiating and organizing community-based projects, such as English classes for children in the neighborhood, TPA students, and English classes for PKK women in the village. Collaborating with local communities and partners to support educational and social development programs.",
    type: "education",
    icon: "diversity_3",
  },
  {
    id: 1,
    role: "BRANCH MANAGER & ENGLISH EDUCATOR",
    company: "ENGLISHONE MADIUN",
    period: "2011 - 2024",
    description:
      "Managed school operations, supervised staff, and handled public relations. Taught students utilizing meaningful learning approaches and maintained parent communication.",
    type: "education",
    icon: "school",
  },
  {
    id: 2,
    role: "ENGLISH EDUCATOR",
    company: "ION MADIUN",
    period: "2011",
    description:
      "Taught diverse student groups utilizing meaningful learning methods and ensured consistent progress reporting to parents.",
    type: "education",
    icon: "school",
  },
  {
    id: 3,
    role: "ENGLISH EDUCATOR",
    company: "KUMON MALANG",
    period: "2009",
    description:
      "Delivered English instruction to students of all ages, focusing on skill development and learning values.",
    type: "education",
    icon: "school",
  },
  {
    id: 4,
    role: "ENGLISH EDUCATOR",
    company: "ENGLISHLAND MALANG",
    period: "2008",
    description:
      "Provided English education with a focus on meaningful interactions and student growth tracking.",
    type: "education",
    icon: "school",
  },
  {
    id: 5,
    role: "SECRETARY",
    company: "PT. HARMA PRESIS MEKA INDONESIA",
    period: "2005 - 2008",
    description:
      "Managed executive schedules, office administration, and customer communications. Prepared meeting minutes and reports.",
    type: "corporate",
    icon: "factory",
  },
  {
    id: 6,
    role: "RECEPTIONIST",
    company: "HOTEL KARTIKA MADIUN",
    period: "2005",
    description:
      "Handled guest services including check-in/out and reservations. Managed room data and resolved guest complaints.",
    type: "corporate",
    icon: "hotel",
  },
  {
    id: 7,
    role: "SECRETARY IN HOUSE KEEPING",
    company: "TUGU HOTEL, MALANG",
    period: "2004",
    description:
      "Coordinated housekeeping staff, managed linen inventory, and handled departmental administration and purchasing.",
    type: "corporate",
    icon: "cleaning_services",
  },
  {
    id: 8,
    role: "CUSTOMER CARE & ENGLISH EDUCATOR",
    company: "CENTER OF ENGLISH LEARNING (CEL) MALANG",
    period: "2003",
    description:
      "Managed front desk administration and customer inquiries while conducting English classes.",
    type: "education",
    icon: "support_agent",
  },
];

export const getExperiences = (): ExperienceItem[] => {
  return experienceData;
};
