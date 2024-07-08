import LoginForm from "@/app/components/auth/login-form";

export default function LoginPage() {
  return (
    <main>
      <title>User App</title>
      <div className="hero bg-base-200 min-h-screen flex flex-col justify-center items-center p-8">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold mb-2">Masuk</h1>
            <p className="card-subtitle">Silakan masuk ke akun Anda untuk melanjutkan</p>
            <br />
          </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
