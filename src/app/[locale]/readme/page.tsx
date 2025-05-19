"use client";

import React, { useEffect, useState } from "react";
import { Flex, Heading, SmartImage } from "@/once-ui/components";

export default function ReadmePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <Flex
      fillWidth
      maxWidth="m"
      direction="column"
      gap="xl"
      className="text-center"
    >
      <Heading variant="display-strong-l" marginBottom="m">
        GitHub README
      </Heading>

      {isClient && (
        <div className="prose dark:prose-invert max-w-none">
          <div className="markdown-body">
            {/* 👋 Hi, I'm Christian — Full‑Stack Developer & Relentless Problem‑Solver */}
            <h1>
              👋 Hi, I'm Christian — Full‑Stack Developer & Relentless
              Problem‑Solver
            </h1>
            <p>
              Illinois-based software engineer with a passion for building
              practical, well‑designed solutions that push me to learn something
              new every day.
              <br />I thrive on <strong>TypeScript</strong>,{" "}
              <strong>React/Next.js</strong>, and <strong>.NET</strong>, but I'm
              equally at home experimenting with <strong>AI</strong>,{" "}
              <strong>DevOps</strong>, and <strong>blockchain</strong>.
              <br />
              My goal: turn ideas into polished products while continuously
              expanding my skill set.
            </p>
            <hr />

            {/* 🚀 Core Strengths */}
            <h2 className="text-center">🚀 Core Strengths</h2>
            <table>
              <thead>
                <tr>
                  <th align="left">Area</th>
                  <th align="left">Technologies & Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Front End</strong>
                  </td>
                  <td>
                    React, Next.js (App Router), ShadCN UI, Tailwind CSS,
                    HTML5/CSS3, Redux, Zustand, Context
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Back End / APIs</strong>
                  </td>
                  <td>
                    ASP.NET Core, Node.js/Express, REST & WebSockets, ADO.NET,
                    Entity Framework, Prisma
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Languages</strong>
                  </td>
                  <td>
                    <strong>TypeScript</strong> (preferred), JavaScript, C#,
                    Python
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Data & DevOps</strong>
                  </td>
                  <td>
                    MSSQL, PostgreSQL, Docker, Azure (App Service, Container
                    Instances), GitHub Actions
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Interests</strong>
                  </td>
                  <td>
                    AI/ML (OpenAI, Ollama, Hugging Face), Blockchain
                    (Synapse‑Chain), Dev Tools, Game Dev (Unity C#), Crypto &
                    DeFi
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              I build fast, document thoroughly, and prioritize MVP-first
              releases so projects deliver value early and evolve iteratively.
            </p>
            <hr />

            {/* 💻 Technologies I Love Working With */}
            <h2 className="text-center">💻 Technologies I Love Working With</h2>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <img
                src="https://img.shields.io/badge/TypeScript-3178C6?style=plastic&logo=typescript&logoColor=white"
                height="25"
                alt="TypeScript"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=javascript&logoColor=black"
                height="25"
                alt="JavaScript"
              />
              <img
                src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=FFD43B&style=plastic"
                height="25"
                alt="Python"
              />
              <img
                src="https://img.shields.io/badge/React-222222?style=plastic&logo=react&logoColor=62d9fb"
                alt="React"
                height="25"
              />
              <img
                src="https://img.shields.io/badge/Next.js-000000?style=plastic&logo=nextdotjs&logoColor=white"
                height="25"
                alt="Next.js"
              />
              <img
                src="https://img.shields.io/badge/Dotnet-512BD4?style=plastic&logo=dotnet&logoColor=white"
                height="25"
                alt=".NET"
              />
              <img
                src="https://img.shields.io/badge/SQL-336791?style=plastic&logo=postgresql&logoColor=white"
                height="25"
                alt="SQL"
              />
              <img
                src="https://img.shields.io/badge/Prisma-2D3748?style=plastic&logo=prisma&logoColor=white"
                height="25"
                alt="Prisma"
              />
              <img
                src="https://img.shields.io/badge/OpenAI-412991?style=plastic&logo=openai&logoColor=white"
                height="25"
                alt="OpenAI"
              />
              <img
                src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=plastic&logo=tailwindcss&logoColor=white"
                height="25"
                alt="Tailwind CSS"
              />
              <img
                src="https://img.shields.io/badge/Redux-ffffff?style=plastic&logo=redux&logoColor=764ABC"
                height="25"
                alt="Redux"
              />
            </div>

            {/* 🧠 Currently Learning / Exploring */}
            <h2 className="text-center">🧠 Currently Learning / Exploring</h2>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <img
                src="https://img.shields.io/badge/Docker-2496ED?style=plastic&logo=docker&logoColor=white"
                height="25"
                alt="Docker"
              />
              <img
                src="https://img.shields.io/badge/Blazor-512BD4?style=plastic&logo=blazor&logoColor=white"
                height="25"
                alt="Blazor"
              />
              <img
                src="https://img.shields.io/badge/C++-00599C?style=plastic&logo=c%2B%2B&logoColor=white"
                height="25"
                alt="C++"
              />
              <img
                src="https://img.shields.io/badge/Blockchain-121212?style=plastic&logo=bitcoin&logoColor=orange"
                height="25"
                alt="Blockchain"
              />
              <img
                src="https://img.shields.io/badge/Ollama-ffffff?style=plastic&logo=ollama&logoColor=000000"
                height="25"
                alt="Ollama"
              />
              <img
                src="https://img.shields.io/badge/Anthropic-1A1A1A?style=plastic&logo=anthropic&logoColor=white"
                height="25"
                alt="Anthropic"
              />
              <img
                src="https://img.shields.io/badge/LangChain-D4FF00?style=plastic&logo=langchain&logoColor=black"
                height="25"
                alt="LangChain"
              />
              <img
                src="https://img.shields.io/badge/LangGraph-000000?style=plastic&logo=langgraph&logoColor=white"
                height="25"
                alt="LangGraph"
              />
            </div>
            {/* Tech Explored*/}
            <h2 className="text-center">⚙️ Tech Explored</h2>
            <div className="flex justify-center justify-items-center mb-6">
              <div className="align-text-center">
                <table>
                  <tr>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-3178C6?logo=typescript&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-F7DF1E?logo=javascript&logoColor=black&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/C%23-239120?logo=csharp&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-3776AB?logo=python&logoColor=FFD43B&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-00599C?logo=c%2B%2B&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-2C2D72?logo=lua&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-20232A?logo=react&logoColor=61DAFB&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-000000?logo=nextdotjs&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-06B6D4?logo=tailwindcss&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-000000?logo=stripe&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-ffffff?logo=redux&logoColor=764ABC&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-333333?logo=npm&logoColor=white&style=plastic&label=Inquirer"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-512BD4?logo=blazor&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-339933?logo=nodedotjs&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-000000?logo=express&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-512BD4?logo=dotnet&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-2D3748?logo=prisma&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-336791?logo=postgresql&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-fdfdfd?logo=axios&logoColor=5A29E4&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-6C3483?logo=dotnet&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-412991?logo=openai&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/Ollama-000000?style=plastic&logo=ollama&logoColor=white"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/Anthropic-1A1A1A?style=plastic&logo=anthropic&logoColor=white"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/LangChain-D4FF00?style=plastic&logo=langchain&logoColor=black"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://img.shields.io/badge/LangGraph-000000?style=plastic&logoColor=white"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-2496ED?logo=docker&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/Azure-0089D6?logo=azuredevops&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-2088FF?logo=githubactions&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-fefefe?logo=mermaid&logoColor=FF3670&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-000000?logo=mdx&logoColor=yellow&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-F05032?logo=git&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-6E4C13?logo=jsonwebtokens&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-7B4EA3?logo=nestjs&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-FFCB2B?logo=vite&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-333333?logo=electron&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                    <td>
                      <img
                        src="https://img.shields.io/badge/-005F69?logo=swagger&logoColor=white&style=plastic"
                        width="60rem"
                        height="45rem"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            {/* Recent / Current Projects */}
            <h2>Recent / Current Projects</h2>
            <table>
              <thead>
                <tr>
                  <th align="left">Project</th>
                  <th align="left">Tech Highlights</th>
                  <th align="left">What It Does</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="https://github.com/Cstannahill/portfolio-nextjs">
                      <strong>portfolio-nextjs</strong>
                    </a>
                  </td>
                  <td>Next.js 15, TypeScript, Tailwind, ShadCN</td>
                  <td>
                    Personal site & blog, built for speed and easy content
                    updates.
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/Cstannahill/image-transformation-api">
                      <strong>image-transformation-api</strong>
                    </a>
                  </td>
                  <td>Docker, .NET Minimal API</td>
                  <td>
                    REST API that performs on‑the‑fly image edits (resize, crop,
                    filters, convert).
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/Cstannahill/ai-campfire-chat">
                      <strong>ai-campfire-chat</strong>
                    </a>
                  </td>
                  <td>Next.js, OpenAI, Prisma</td>
                  <td>
                    Cozy GPT-powered chat app for storytelling with friends.
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/Cstannahill/ctgen">
                      <strong>ctgen</strong>
                    </a>
                  </td>
                  <td>Node CLI, TypeScript, Inquirer</td>
                  <td>
                    CLI that generates and visualizes project folder structures.
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/Cstannahill/project-flow">
                      <strong>project-flow</strong>
                    </a>
                  </td>
                  <td>React, .NET API, Drag‑and‑Drop</td>
                  <td>
                    Visual project planner with real-time task and feature
                    mapping.
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/Cstannahill/synapse-blockchain">
                      <strong>synapse-blockchain</strong>
                    </a>
                  </td>
                  <td>Python, PoS prototype</td>
                  <td>
                    Early-stage blockchain for decentralized AI model
                    marketplaces.
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Metrics */}
            <SmartImage
              src="/images/metrics/github-metrics.svg"
              alt="GitHub Metrics"
              height={230}
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
            {/* 🤝 Let's Collaborate */}
            <h2>🤝 Let's Collaborate</h2>
            <p>I'm always keen to:</p>
            <ul>
              <li>
                <strong>Pair on open‑source</strong> (especially TS/React
                utilities, AI, DevOps pipelines, or .NET APIs)
              </li>
              <li>
                <strong>Tinker with AI workflows</strong> (prompt engineering,
                agents, local model hosting)
              </li>
              <li>
                <strong>Explore Web3 ideas</strong> (smart contracts, dApps,
                Layer‑2 experiments)
              </li>
            </ul>
            <hr />
            <div className="text-center">
              <em>"Code boldly, refactor often, and never stop learning."</em>
            </div>
          </div>
        </div>
      )}
    </Flex>
  );
}
