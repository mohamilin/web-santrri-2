import Icons from '@/components/icons'
export const navigationsDahboard = [
    {
        type: "label",
        label: "Siswa",
      },
      {
        name: "Dashboard",
        icon: Icons.Dashboard,
        path: "/dashboard",
      },
      {
        name: "Kelengkapan Data",
        icon: Icons.Pages,
        children: [
          {
            name: "Product List",
            path: "/admin/products",
          },
          {
            name: "Create Product",
            path: "/admin/products/create",
          },
          {
            name: "Review",
            path: "/admin/products/reviews",
          },
        ],}
]