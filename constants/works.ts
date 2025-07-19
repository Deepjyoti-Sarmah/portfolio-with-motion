export type WorkExperience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export const workExperiences: WorkExperience[] = [
  {
    company: "Hyperledger - Fabric Private Chaincode",
    role: "SDK Developer ",
    period: "Aug 2023 – Jan 2024",
    description:
      "Designed and implemented Fabric Private Chaincode Client SDK integration with the new Fabric Gateway API using Golang, ensuring interoperability with existing Fabric networks and preserving data confidentiality.",
  },
  {
    company: "Smart India Hackathon – Grand Finalist",
    role: "AR Developer",
    period: "Jun 2022 – Aug 2022",
    description:
      "Built a real-time augmented reality app using ARCore for turban overlays and facial detection, enhancing cultural identity through interactive tech.",
  },
];
