export default function WhyChooseCloud23() {
  const reasons = [
    {
      title: "Top 10",
      description: "FSC Managed Services Partner in the World",
    },
    { title: "No 1", description: "FSC Certified South African Partner" },
    { title: "Most", description: "FSC Certified South African Partner" },
    { title: "300+", description: "Certifications" },
    { title: "110+", description: "Crew Members" },
    { title: "4.79", description: "CSAT" },
  ];

  return (
    <div className="container bg-white p-8">
      <h2 className="text-3xl font-semibold mb-6">
        Why <span className="text-red-600">choose cloud23</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-red-600 p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center h-32"
          >
            <div className="text-2xl font-bold mb-2 text-white ">
              {reason.title}
            </div>
            <div className="text-sm font-semibold">{reason.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
