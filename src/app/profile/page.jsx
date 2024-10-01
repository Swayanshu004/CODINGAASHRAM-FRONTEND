import { Card } from "@/components/ui/card";
export default function ProfileCard() {
  return (
    <div className="min-h-screen bg-neutral-900 text-3xl font-semibold px-9 py-9  ">
      <div className="p-4 bg-neutral-900">
        <span className="text-white">Coding</span>
        <span
          className="text-[#ff4d00] ml-1"
          style={{ fontFamily: "'Noto Sans', sans-serif" }}
        >
          आश्रम
        </span>
      </div>
      <Card className="w-full max-w-9xl mx-auto overflow-hidden">
        <div className="relative bg-[#ff4d00] border h-48 sm:h-64">
          <div className="absolute bottom-0 left-4 -mb-16 sm:-mb-24">
            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-white border-4 transition-transform transform hover:scale-110"></div>
          </div>
        </div>

        <div className="pt-20 bg-neutral-900 sm:pt-28 px-4 pb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(7)].map((_, index) => (
              <Card
                key={index}
                className="p-4 bg-gray-800 transition-transform transform hover:scale-105 hover:bg-gray-700 shadow-lg hover:shadow-xl"
              >
                <h2 className="font-bold text-lg text-white">{`Roadmap ${
                  index + 1
                }`}</h2>
                <p className="text-gray-600">
                  Information roadmap the user goes here.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
