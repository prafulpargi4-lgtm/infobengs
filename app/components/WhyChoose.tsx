import { Rocket, ShieldCheck, Users, Headset } from "lucide-react"; // Icons ke liye lucide-react install kar sakte hain

export default function WhyChoose() {
  const features = [
    {
      icon: <Rocket className="w-6 h-6 text-blue-600" />,
      title: "Innovation First",
      desc: "We leverage the latest technologies to build future-ready solutions.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Quality Assured",
      desc: "Our solutions are built with best practices and highest standards.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Client Centric",
      desc: "We focus on understanding your business and delivering real value.",
    },
    {
      icon: <Headset className="w-6 h-6 text-blue-600" />,
      title: "24/7 Support",
      desc: "Our support team is always available to help you succeed.",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Why Choose Infobengs</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Your Trusted <span className="text-blue-600">Technology Partner</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          We combine innovation, expertise, and dedication to deliver solutions that help your business stay ahead in a competitive world.
        </p>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((item, index) => (
            <div key={index} className="p-6 bg-slate-50 rounded-xl border border-gray-100 text-left hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-50 w-fit rounded-lg mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
