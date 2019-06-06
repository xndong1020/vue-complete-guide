import User from "@/components/user/User.vue";
import UserStart from "@/components/user/UserStart.vue";
import UserEdit from "@/components/user/UserEdit.vue";
import UserDetail from "@/components/user/UserDetail.vue";
import Home from "@/components/Home.vue";
import Header from "@/components/Header.vue";

export const routes = [
  {
    path: "/user",
    components: { default: User, "header-bottom": Header },
    children: [
      { path: "", component: UserStart, name: "UserStart" },
      { path: ":id", component: UserDetail, name: "UserDetail", props: true },
      { path: ":id/edit", component: UserEdit, name: "UserEdit", props: true }
    ]
  },
  {
    path: "/",
    name: "Home",
    components: { default: Home, "header-top": Header }
  },
  { path: "*", redirect: { name: "Home" } }
];
