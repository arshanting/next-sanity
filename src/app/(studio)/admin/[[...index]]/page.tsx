"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../../sanity.config";

export function AdminPage() {
  return (
    <NextStudio config={config}/>
  )
}

export default AdminPage;