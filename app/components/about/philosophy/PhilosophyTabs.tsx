"use client";

import { useState } from "react";
import TabButton from "../../ui/TabButton";
import Image from "next/image";
import PhilosophyContent from "./PhilosophyContent";

type TabType = "mission" | "vision" | "values";

function PhilosophyTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("mission");

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <div className="sticky top-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                Nuestra Filosofía
              </h2>
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mb-8">
                <TabButton
                  active={activeTab === "mission"}
                  onClick={() => setActiveTab("mission")}
                >
                  Misión
                </TabButton>
                <TabButton
                  active={activeTab === "vision"}
                  onClick={() => setActiveTab("vision")}
                >
                  Visión
                </TabButton>
                <TabButton
                  active={activeTab === "values"}
                  onClick={() => setActiveTab("values")}
                >
                  Valores
                </TabButton>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-soft">
                <PhilosophyContent activeTab={activeTab}></PhilosophyContent>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-xl overflow-hidden shadow-card">
              <Image
                src="/images/filosofia.jpg"
                alt="Nuestra filosofía en acción"
                width={600}
                height={400}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  Nuestra Filosofía en Acción
                </h3>
                <p className="text-gray-700 mb-4">
                  Implementamos nuestra filosofía a través de cada proyecto,
                  cada interacción con clientes y cada decisión empresarial.
                  Nuestra forma de trabajar refleja quiénes somos y hacia dónde
                  queremos ir.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg hover-lift">
                    <span className="text-4xl block mb-2">🚀</span>
                    <span className="font-medium text-gray-800">
                      Proyectos Realizados
                    </span>
                    <p className="text-2xl font-bold text-primary mt-1">120+</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg hover-lift">
                    <span className="text-4xl block mb-2">😊</span>
                    <span className="font-medium text-gray-800">
                      Clientes Satisfechos
                    </span>
                    <p className="text-2xl font-bold text-primary mt-1">98%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhilosophyTabs;
