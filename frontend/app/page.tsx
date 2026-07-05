export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <p className="text-blue-400 font-semibold mb-4">
          🚀 AI Employees for Modern Businesses
        </p>

        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          Hire AI Employees
          <br />
          That Never Sleep
        </h1>

        <p className="mt-8 max-w-3xl text-gray-400 text-xl">
          FLINKKK AI helps businesses automate recruitment,
          sales, customer support, and business operations
          using intelligent AI employees.
        </p>

        <div className="flex gap-5 mt-10">
          <button className="bg-blue-600 px-7 py-4 rounded-xl hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="border border-gray-600 px-7 py-4 rounded-xl hover:bg-white hover:text-black transition">
            Book Demo
          </button>
        </div>
      </section>
    </main>
  );
}