import RegisterForm from "@/app/components/register-form";

export default function LandingPage() {
  return (
    <main>
      <title>User App</title>
      <div className="hero bg-base-200 min-h-screen flex flex-col justify-center items-center p-8">
        <div className="text-center hero-content">
          <div className="max-w">
            <h1 className="text-3xl font-bold mb-2">Buat Akun Baru</h1>
            <p className="card-subtitle">Silakan buat akun baru untuk mulai menggunakan layanan kami</p>
            <br />
          </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}
