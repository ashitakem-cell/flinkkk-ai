export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold mb-6">
        FLINKKK AI
      </h1>

      <h2 className="text-3xl font-semibold text-center">
        Your First AI Employee Platform
      </h2>

      <p className="text-gray-400 text-center mt-6 max-w-2xl text-lg">
        Hire AI Employees that can answer emails, schedule meetings,
        analyze data, automate workflows, and work 24×7 without taking
        a break.
      </p>

      <div className="flex gap-4 mt-10">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold">
          Start Free
        </button>

        <button className="border border-gray-500 px-6 py-3 rounded-xl font-semibold">
          Book Demo
        </button>
      </div>
    </main>
  );
}