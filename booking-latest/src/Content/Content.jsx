export const MAIN_DETAILS = {
  name: "www.booking-system.com",
  domain: "https://booking-system.com/",
  sub_domain: "https://portal.booking-system.com/",
  server: "https://secure.booking-system.com/api/",
  full_name: "Booking Services",
  description: "",
  caption: {
    top: "Fresher & Experience",
    bottom: "",
  },
};

export const CONTACT_INFORMATION = {
  address: "Madhapur, Hyderabad 500081 Telangana.",
  support_email: "support@booking-system.com",
  info_email: "infoo@booking-system.com",
  mobile: "",
  phone: "",
  links: {
    whatsapp: "https://whatsapp.com/channel/",
    instagram: "",
    linkedin: "",
    htd: MAIN_DETAILS.domain + "hire_train_deploy",
    htp: MAIN_DETAILS.domain + "hire_train_place",
    pricing: MAIN_DETAILS.domain + "pricing",
    support: MAIN_DETAILS.domain + "support",
    tac: MAIN_DETAILS.domain + "terms_and_conditions",
    registration: MAIN_DETAILS.sub_domain + "registration",
    walkin: MAIN_DETAILS.domain + "",
  },
};

export const HEADER_DETAILS = {
  title: MAIN_DETAILS.full_name,
  description: MAIN_DETAILS.decription,
  logo: "/assets/apple-icon.png",
  image: "/assets/logo-latest-1.svg",
  links: [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Join our community",
      link: "",
    },
    {
      label: "Email to us",
      link: `mailto:${CONTACT_INFORMATION.email}`,
    },
    {
      label: "Call now",
      link: "tel:" + CONTACT_INFORMATION.mobile,
    },
  ],
};

export const FOOTER_DETAILS = {
  links: [
    {
      title: "External",
      links: [
        { label: "Terms and conditions", link: CONTACT_INFORMATION.links.tac },
        { label: "Hire Train Place", link: CONTACT_INFORMATION.links.htp },
        { label: "Hire Train Deploy", link: CONTACT_INFORMATION.links.htd },
        { label: "Find walkins", link: CONTACT_INFORMATION.links.walkin },
        { label: "Pricing", link: CONTACT_INFORMATION.links.pricing },
      ],
    },
    {
      title: "Community",
      links: [
        {
          label: "Join our community",
          link: CONTACT_INFORMATION.links.registration,
        },
        { label: "Join whatsApp", link: CONTACT_INFORMATION.links.whatsapp },
        {
          label: "Follow on Instagram",
          link: CONTACT_INFORMATION.links.instagram,
        },
        {
          label: "Email to us",
          link: `mailto:${CONTACT_INFORMATION.email}`,
        },
      ],
    },
  ],
};

export const SUCCESS_PAGE = {
  title: "Your Slot is Reserved!",
  image: "/assets/successpage.svg",
  description: `Congratulations! Your payment for the booked slot has been successfully processed. 
  Get ready to enjoy the experience without any worries. Thank you for choosing us, and we look forward to serving you soon!`,
};
