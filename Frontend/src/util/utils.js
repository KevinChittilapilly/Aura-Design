export const menuItems = [
    { title: "Home", category: null },
    {
      title: "Projects",
      category: [
        "Interiors",
        "Architecture",
        "Furniture",
        "Product",
        "Details",
      ],
    },
    { title: "Profile", category: ["Team"] },
    { title: "Recognition", category: null },
    { title: "Contact", category: null },
  ];

export const contactDetails = [
    {title: 'For Project Enquiries',value:'abc@gmail.com'},
    {title: 'For Job Applications',value:'abc@gmail.com'},
    {title: 'Website',value:'abc@gmail.com'},
    {title: 'Mobile (WhatsApp)',value:'xxxxxxxxxxxx'},
    {title: 'Location',value:'Ahemdabad'},
    
]

export const adminDetails = [
  {username:'admin',password:'admin',token:'AhkY02QEZNrlhTYJpoC8Nw8XTFN5lARx'}
]

export const adminHomeDetails = [
  { title: "Projects",redirectURL:'/admin/project' },
    { title: "Recognition",redirectURL:'recognition' },
    { title: "Main Application",redirectURL:'/home' },
]