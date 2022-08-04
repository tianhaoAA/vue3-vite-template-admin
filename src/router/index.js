import { createRouter, createWebHistory } from "vue-router";
const Layout = () => import('@/layout/index.vue')
const Login = () => import('@/login/index.vue')
const Dashboard = () => import('@/dashboard/index.vue')


const AdminUser = () => import('@/admin/admin-user.vue')
const Menu = () => import('@/admin/menu.vue')
const Permission = () => import('@/admin/permission.vue')
const Role = () => import('@/admin/role.vue')
const routes = [
  { name: 'Login', path: '/login', component: Login },
  {
    name: 'Layout', path: '/', component: Layout,
    redirect: { name: 'Dashboard', },
    children: [
      {
        name: 'Dashboard', path: '/dashboard', component: Dashboard,
        meta: {
          title: 'Dashboard',
        },
      },
      { name: 'AdminUser', path: '/admin-user', component: AdminUser, },
      { name: 'Permission', path: '/permission', component: Permission, },
      { name: 'Menu', path: '/menu', component: Menu, },
      { name: 'Role', path: '/role', component: Role, },

    ],
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router