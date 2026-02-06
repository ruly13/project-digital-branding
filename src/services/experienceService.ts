export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  type: "education" | "corporate"; // education uses 🏛️, corporate/hotel uses 💼
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: "Branch Manager & English Teacher",
    company: "EnglishOne Madiun",
    period: "2011 - 2024",
    description:
      "Managed school operations, supervised staff, and handled public relations. Taught students utilizing meaningful learning approaches and maintained parent communication.",
    type: "education",
  },
  {
    id: 2,
    role: "English Teacher",
    company: "ION Madiun",
    period: "2011",
    description:
      "Taught diverse student groups utilizing meaningful learning methods and ensured consistent progress reporting to parents.",
    type: "education",
  },
  {
    id: 3,
    role: "English Teacher",
    company: "Kumon Malang",
    period: "2009",
    description:
      "Delivered English instruction to students of all ages, focusing on skill development and learning values.",
    type: "education",
  },
  {
    id: 4,
    role: "English Teacher",
    company: "EnglishLand Malang",
    period: "2008",
    description:
      "Provided English education with a focus on meaningful interactions and student growth tracking.",
    type: "education",
  },
  {
    id: 5,
    role: "Secretary",
    company: "PT. Harma Presis Meka Indonesia",
    period: "2005 - 2008",
    description:
      "Managed executive schedules, office administration, and customer communications. Prepared meeting minutes and reports.",
    type: "corporate",
  },
  {
    id: 6,
    role: "Receptionist",
    company: "Hotel Kartika Madiun",
    period: "2005",
    description:
      "Handled guest services including check-in/out and reservations. Managed room data and resolved guest complaints.",
    type: "corporate",
  },
  {
    id: 7,
    role: "Secretary in House Keeping",
    company: "Tugu Hotel, Malang",
    period: "2004",
    description:
      "Coordinated housekeeping staff, managed linen inventory, and handled departmental administration and purchasing.",
    type: "corporate",
  },
  {
    id: 8,
    role: "Customer Care & English Teacher",
    company: "Center of English Learning (CEL) Malang",
    period: "2003",
    description:
      "Managed front desk administration and customer inquiries while conducting English classes.",
    type: "education",
  },
];

export const getExperiences = (): ExperienceItem[] => {
  return experienceData;
};
