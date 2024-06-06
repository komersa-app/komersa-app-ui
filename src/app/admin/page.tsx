// admin
import { NextPage } from "next";
import dynamic  from "next/dynamic";
const AdminApp = dynamic (() => import ("./AdminDashboard"), {ssr: false})
const Admin: NextPage = () => <AdminApp />;

export default Admin;