import React, { useState } from "react";
import nodeflair from "./images/nodeflair.png";
import agoda from "./images/agoda.png";
import apple from "./images/apple.png";
import chase from "./images/chase.png";
import google from "./images/google.png";
import microsoft from "./images/microsoft.png";
import shopee from "./images/shopee.png";
import sia from "./images/sia.png";

function App() {
  const [cards] = useState([
    {
      logo: nodeflair,
      company: "NodeFlair",
      position: "Software Engineering Intern",
      salary: "",
      datePost: "1 day ago",
      type: "fullstack",
      techStack: ["React", "JavaScript"],
    },
    {
      logo: google,
      company: "Google",
      position: "Software Engineer",
      salary: "12,000 / Monthly",
      datePost: "2 days ago",
      type: "fullstack",
      techStack: ["Node.js", "React.js", "DBMongo"],
    },
    {
      logo: microsoft,
      company: "Microsoft",
      position: "Full-Stack Developer",
      salary: "10,000 - 12,000 / Monthly",
      datePost: "6 days ago",
      type: "fullstack",
      techStack: [".NET", "C#"],
    },
    {
      logo: apple,
      company: "Apple",
      position: "Front-End Developer",
      salary: "9,500 / Monthly",
      datePost: "1 day ago",
      type: "Frontend",
      techStack: ["React", "JavaScript"],
    },
    {
      logo: shopee,
      company: "Shopee",
      position: "Lead Data Engineer",
      salary: "",
      datePost: "8 days ago",
      type: "Reliability",
      techStack: ["Data", "MVP"],
    },
    {
      logo: nodeflair,
      company: "NodeFlair",
      position: "Back-End Developer",
      salary: "",
      datePost: "1 day ago",
      type: "Backend",
      techStack: ["Node.js", "Next.js", "API"],
    },
    {
      logo: sia,
      company: "SIA",
      position: "Solution Architect",
      salary: "8,000 - 10,000 / Monthly",
      datePost: "12 days ago",
      type: "Solution",
      techStack: ["SysOps"],
    },
    {
      logo: agoda,
      company: "Agoda",
      position: "Data Engineer",
      salary: "7,500 / Monthly",
      datePost: "6 days ago",
      type: "CyberSec",
      techStack: ["Docker", "API", "OAuth"],
    },
    {
      logo: chase,
      company: "JP Morgan",
      position: "Cloud and Platform Engineer",
      salary: "",
      datePost: "10 days ago",
      type: "SysOps",
      techStack: ["Google Cloud", "Oracle", "MQ"],
    },
  ]);

  return (
    <div>
      <section>
        <div className="container ">
          <h1 className="text-[#1EC769]">
            NodeFlair.<span className="text-[#FFE03B]">Jobs</span>
          </h1>
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <img src={card.logo} alt="" />
                <h3 className="mt-5 text-sm">{card.company}</h3>
                <p className="font-black mt-1.5 text-lg">{card.position}</p>
                <div className="text-sm font-light mt-1.5">{card.salary === "" ? <div className="text-sm mt-6"></div> : card.salary}</div>
                <div className="text-sm flex flex-row justify-between">
                  <div className="mt-2 italic font-light">{card.datePost === "1 day ago" ? <div className="font-bold text-[#1ec769]">{card.datePost}</div> : card.datePost}</div>
                  <div className="type">{card.type}</div>
                </div>
                <hr className="m-2"></hr>
                <div className="text-sm flex flex-row justify-start">
                  {Object.values(card.techStack).map((stack, i) => (
                    <div key={i} className={`mr-3 ${i === 0 ? "green" : "gray"}`}>
                      {stack}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

// className={`card ${i === 1 ? "green" : "grey"}`}
