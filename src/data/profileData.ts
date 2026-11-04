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
  headline: "Data Management & Operations Professional | Aspiring Supply Chain Professional",
  headlineBn: "ডাটা ম্যানেজমেন্ট ও অপারেশনস প্রফেশনাল | সাপ্লাই চেইন প্রফেশনাল",
  currentCompany: "Paragon Group",
  currentCompanyBn: "প্যারাগন গ্রুপ",
  currentDesignation: "Assistant Officer",
  currentDesignationBn: "অ্যাসিস্ট্যান্ট অফিসার",
  email: "mdeasinalituhin@gmail.com", // Editable placeholder
  phone: "+880 1943-214464", // Editable placeholder
  phoneDisplay: "+880 1943-214464 [Editable]",
  location: "Dhaka, Bangladesh",
  locationBn: "ঢাকা, বাংলাদেশ",
  linkedinUrl: "https://www.linkedin.com/in/easin-ali-placeholder", // Editable placeholder
  githubUrl: "https://github.com",
  resumePdfPath: "/documents/Easin_Ali_CV.pdf",
  portraitPath: "/images/profile.jpg",
  portraitFallback: "/images/profile-placeholder.svg",
};

