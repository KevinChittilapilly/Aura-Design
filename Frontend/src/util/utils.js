import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";

export const menuItems = [
  { title: "Home", category: null },
  {
    title: "Projects",
    category: ["Interiors", "Architecture", "Furniture", "Product", "Art"],
  },
  { title: "Profile", category: ["Team"] },
  { title: "Recognition", category: null },
  { title: "Contact", category: null },
];

export const contactDetails = [
  { title: "For Project Enquiries", value: "abc@gmail.com" },
  { title: "For Job Applications", value: "abc@gmail.com" },
  { title: "Website", value: "abc@gmail.com" },
  { title: "Mobile (WhatsApp)", value: "xxxxxxxxxxxx" },
  { title: "Location", value: "Ahemdabad" },
];

export const adminDetails = [
  {
    username: "admin",
    password: "admin",
    token: "AhkY02QEZNrlhTYJpoC8Nw8XTFN5lARx",
  },
];

export const adminHomeDetails = [
  { title: "Projects", redirectURL: "/admin/project" },
  { title: "Recognition", redirectURL: "recognition" },
  { title: "Main Application", redirectURL: "/home" },
];

export const awardDetails = [
  {
    year: "2022",
    details: [
      {
        imgSrc: img1,
        desp: "Winner: Top 50 Residential Influential Designer at ID Honours",
      },
      {
        imgSrc: img2,
        desp: "Runner Up: Best Young Practice at IIID Design Awards National Round",
      },
      {
        imgSrc: img3,
        desp: "Shortlist: Best Residential Interiors at at the Home and Design TRENDS Awards",
      },
    ],
  },
];
