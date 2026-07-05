export default function Hero() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-blue-400 font-semibold mb-4">
            Next-Gen IT Solutions for a Smarter Tomorrow
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            We Build Digital Solutions <br />
            That Drive <span className="text-blue-500">Real Impact</span>
          </h1>

          <p className="text-gray-300 mt-6">
            We help businesses innovate, transform and grow with
            cutting-edge technology and expert-driven solutions.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 px-6 py-3 rounded-lg">
              Our Services
            </button>

            <button className="border border-white px-6 py-3 rounded-lg">
              Explore Solutions
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/hero.png"
            alt="Hero"
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}