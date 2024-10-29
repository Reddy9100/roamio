// components/ProtectedRoute.js
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookie from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  const roamioToken = Cookie.get("Roamio");

  useEffect(() => {
    if (!roamioToken) {
      router.push("/Login");
    }
  }, [roamioToken, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
