import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Popular",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Shop",
    newTab: false,
    path: "/shop-with-sidebar",
  },
  {
    id: 3,
    title: "Cart",
    newTab: false,
    path: "/cart",
  },

  // {
  //   id: 62,
  //   title: "Shop Without Sidebar",
  //   newTab: false,
  //   path: "/shop-without-sidebar",
  // },
  // {
  //   id: 64,
  //   title: "Checkout",
  //   newTab: false,
  //   path: "/checkout",
  // },
  // {
  //   id: 65,
  //   title: "Cart",
  //   newTab: false,
  //   path: "/cart",
  // },
  // {
  //   id: 66,
  //   title: "Wishlist",
  //   newTab: false,
  //   path: "/wishlist",
  // },
  // {
  //   id: 67,
  //   title: "Sign in",
  //   newTab: false,
  //   path: "/signin",
  // },
  // {
  //   id: 68,
  //   title: "Sign up",
  //   newTab: false,
  //   path: "/signup",
  // },
  // {
  //   id: 69,
  //   title: "My Account",
  //   newTab: false,
  //   path: "/my-account",
  // },
  // {
  //   id: 70,
  //   title: "Contact",
  //   newTab: false,
  //   path: "/contact",
  // },
  // {
  //   id: 62,
  //   title: "Error",
  //   newTab: false,
  //   path: "/error",
  // },
  // {
  //   id: 63,
  //   title: "Mail Success",
  //   newTab: false,
  //   path: "/mail-success",
  // },
  //   ],
  // },
  {
    id: 4,
    title: "blogs",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 41,
        title: "Blog Grid with sidebar",
        newTab: false,
        path: "/blogs/blog-grid-with-sidebar",
      },
      {
        id: 42,
        title: "Blog Grid",
        newTab: false,
        path: "/blogs/blog-grid",
      },
      {
        id: 43,
        title: "Blog details with sidebar",
        newTab: false,
        path: "/blogs/blog-details-with-sidebar",
      },
      {
        id: 44,
        title: "Blog details",
        newTab: false,
        path: "/blogs/blog-details",
      },
    ],
  },
  {
    id: 5,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },

  {
    id: 6,
    title: "Admin panel",
    newTab: false,
    isAdmin: true,
    path: "/",
    submenu: [
      {
        id: 61,
        title: "Manage Users",
        newTab: false,
        path: "/admin/users",
      },
      {
        id: 62,
        title: "Manage Products",
        newTab: false,
        path: "/admin/products",
      },
      {
        id: 63,
        title: "Manage Orders",
        newTab: false,
        path: "/admin/orders",
      },
    ],
  },
];
