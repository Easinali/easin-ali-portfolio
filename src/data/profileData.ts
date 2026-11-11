export interface ProfileData {
  name: string;
  nameBn: string;
  headline: string;
  headlineBn: string;
  currentCompany: string;
  currentCompanyBn: string;
  currentDesignation: string;
  currentDesignationBn: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  location: string;
  locationBn: string;
  linkedinUrl: string;
  githubUrl?: string;
  resumePdfPath: string;
  portraitPath: string;
  portraitFallback: string;
}

export const profileData: ProfileData = {
  name: "Easin Ali",
  nameBn: "ইয়াসিন আলী",
  headline: "Data Management | MIS Reporting | Supply Chain Operations",
  headlineBn: "ডাটা ম্যানেজমেন্ট | এমআইএস রিপোর্টিং | সাপ্লাই চেইন অপারেশনস",
  currentCompany: "Paragon Group",
  currentCompanyBn: "প্যারাগন গ্রুপ",
  currentDesignation: "Assistant Officer",
  currentDesignationBn: "অ্যাসিস্ট্যান্ট অফিসার",
  email: "mdeasinalituhin@gmail.com", // Editable placeholder
  phone: "+880 1943-214464", // Editable placeholder
  phoneDisplay: "+880 1943-214464",
  location: "Dhaka, Bangladesh",
  locationBn: "ঢাকা, বাংলাদেশ",
  linkedinUrl: "https://www.linkedin.com/in/mdeasinalituhin", // Editable placeholder
  githubUrl: "https://github.com/Easinali",
  resumePdfPath: "/documents/Easin_Ali_CV.pdf",
  portraitPath: "/images/profile.jpg",
  portraitFallback: "/images/profile-placeholder.svg",
};

