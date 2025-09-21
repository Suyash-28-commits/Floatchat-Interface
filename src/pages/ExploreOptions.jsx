import Header from "../Components/Header";
import { Link } from "react-router-dom";

export default function ExploreOptions() {
  // Hardcode your deployed URLs here:
  const CHATBOT_URL = "https://frolicking-cobbler-92c2c3.netlify.app/";
  const REPORTS_URL = "https://your-reports-deploy.netlify.app";

  return (
    <div className="bg-[#f6f7f8] min-h-screen text-gray-800">
            

      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Choose an experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chatbot */}
          <div className="bg-white border rounded-2xl shadow-sm hover:shadow-lg hover:scale-[1.01] transition p-8 text-center flex flex-col">
            <div className="flex-grow">
              <span className="material-symbols-outlined text-[#21a9ed] text-6xl mb-6">smart_toy</span>
              <h3 className="text-2xl font-bold mb-2">Chatbot</h3>
              <p className="text-gray-600 mb-8">Ask in plain English. Get predictions.</p>
            </div>
            <a href={CHATBOT_URL} target="_blank" rel="noopener noreferrer"
               className="w-full bg-[#21a9ed] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90">
              Open Chatbot
            </a>
          </div>

          {/* Reports */}
          <div className="bg-white border rounded-2xl shadow-sm hover:shadow-lg hover:scale-[1.01] transition p-8 text-center flex flex-col">
            <div className="flex-grow">
              <span className="material-symbols-outlined text-[#21a9ed] text-6xl mb-6">monitoring</span>
              <h3 className="text-2xl font-bold mb-2">Reports</h3>
              <p className="text-gray-600 mb-8">Explore profiling dashboards by region.</p>
            </div>
<Link to="/oceanReports" 

               className="w-full border-2 border-[#21a9ed] text-[#21a9ed] font-bold py-3 px-6 rounded-lg hover:bg-[#21a9ed]/10">
              Open Reports
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
