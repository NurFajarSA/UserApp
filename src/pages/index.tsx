import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MainPage() {
  const isLogin = true;
  const router = useRouter();
  
  useEffect(() => {
    if (isLogin) {
      router.push("/dashboard");
    }
    else {
      router.push("/login");
    }
  })
}
