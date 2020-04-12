

import Dashboard from "views/Dashboard.jsx";
import TestDetails from "views/TestDetails.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/details",
    name: "Detalhes de Teste",
    icon: "pe-7s-note2",
    component: TestDetails,
    layout: "/admin"
  }
];

export default dashboardRoutes;
