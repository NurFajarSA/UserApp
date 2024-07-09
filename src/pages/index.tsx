import { Routes } from "@/app/routes/routes";
import { getToken } from "@/app/utils/cookies";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MainPage() {
  const token = getToken();
  const router = useRouter();
  
  useEffect(() => {
    if (token !== null && token !== "") {
      router.replace(Routes.DASHBOARD);
    }
    else {
      router.replace(Routes.LOGIN);
    }
  })
}
