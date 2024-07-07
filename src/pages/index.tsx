import LoginForm from "@/app/components/login-form";

export default function LandingPage() {
  return (
    <main>
      <title>User App</title>
      <div className="hero bg-base-200 min-h-screen flex flex-col justify-center items-center">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="card-subtitle">Login to your account</p>
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
