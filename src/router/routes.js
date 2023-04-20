const routes = [
  {
    path: "/",

    component: () => import("layouts/LoginForm.vue"),
    children: [{ path: "/", component: () => import("pages/LoginPage.vue") }],
  },
  {
    path: "/home",
    component: () => import("layouts/MainLayout.vue"),
    meta: { requireAuth: true },
    children: [
      { path: "/home/", component: () => import("pages/IndexPage.vue") },
      { path: "/post", component: () => import("pages/PostPage.vue") },
      { path: "/conduct", component: () => import("pages/ConductPage.vue") },
      { path: "/teacher", component: () => import("pages/TeacherPage.vue") },
      { path: "/locale", component: () => import("src/pages/LocalePage.vue") },
    ],
  },
  // {
  //   path: "/login",
  //   component: () => import("layouts/LoginForm.vue"),
  //   children: [{ path: "login", component: () => import("pages/LoginPage") }],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
