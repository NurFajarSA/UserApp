import { Routes } from "@/app/routes/routes";
import { isAuthenticated } from "@/app/utils/cookies";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MainPage() {
  const router = useRouter();
  
  useEffect(() => {
    if (isAuthenticated()){
      router.replace(Routes.DASHBOARD);
    }
    else {
      router.replace(Routes.LOGIN);
    }
  })
}
