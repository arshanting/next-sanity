'use client';

import { NextStudio } from "next-sanity/studio";
import config from "../../../../../../sanity.config";

function AdminDetails() {
  return (
    <NextStudio config={config}/>
  )
}

export default AdminDetails;