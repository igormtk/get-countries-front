"use client";

import React, { Suspense } from "react";
import CountryInfo from "./CountryInfo";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading country info...</div>}>
      <CountryInfo />
    </Suspense>
  );
}