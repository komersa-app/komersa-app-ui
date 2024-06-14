'use client'

import { NextPage } from "next";
import dynamic from "next/dynamic";

const AdminApp = dynamic(() => import("@/components/AdminApp"), { ssr: false });

const PageComponent: NextPage = () => {
  return <AdminApp />;
};

export default PageComponent;
