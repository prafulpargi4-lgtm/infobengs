export default function Stats() {
  const stats = [
    { number: "150+", text: "Happy Clients" },
    { number: "300+", text: "Projects Delivered" },
    { number: "50+", text: "Expert Professionals" },
    { number: "5+", text: "Years of Excellence" },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <h2 className="text-4xl font-bold text-blue-600">
              {item.number}
            </h2>

            <p className="mt-2 text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}