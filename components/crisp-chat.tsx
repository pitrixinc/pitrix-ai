"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("3581ddfd-6e11-4850-9e2e-4fa9180fc157");
  }, []);

  return null;
};
