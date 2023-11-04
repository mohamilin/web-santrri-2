import {
  AppBlocking,
  CreditCard,
  FavoriteBorder,
  Person,
  Place,
  ShoppingBagOutlined,
} from "@mui/icons-material";

import AppsIcon from '@mui/icons-material/Apps';
export const navigationDashboardUser = [
  {
    title: "DASHBOARD",
    list: [
      {
        href: "/profile",
        title: "Profil",
        icon: Person,
        count: 3,
      },
      {
        href: "/program",
        title: "Program",
        icon: AppsIcon,
        count: 19,
      },
      //   {
      //     href: "/support-tickets",
      //     title: "Support Tickets",
      //     icon: FavoriteBorder,
      //     count: 1,
      //   },
    ],
  },
  //   {
  //     title: "ACCOUNT SETTINGS",
  //     list: [
  //       {
  //         href: "/address",
  //         title: "Addresses",
  //         icon: Place,
  //         count: 16,
  //       },
  //       {
  //         href: "/payment-methods",
  //         title: "Payment Methods",
  //         icon: CreditCard,
  //         count: 4,
  //       },
  //     ],
  //   },
];
