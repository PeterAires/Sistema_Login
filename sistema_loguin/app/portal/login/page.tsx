import LoginForm from "@/modules/auth/components/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className=" flex min-h-screen flex-col items-center p-24 mt-6">
       <LoginForm/>
    </main>
  );
}
