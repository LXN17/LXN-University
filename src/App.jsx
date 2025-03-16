import Header from "./components/Header/Header";
import TeachSection from "./components/WayToTeach/TeachSection";
import Differences from "./components/Differences";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedBackSection from "./components/FeedBackSection";
import { useState } from "react";
import EffectSection from "./components/EffectSection";

function App() {
  const [tab, setTab] = useState("main");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={setTab} />

        {tab === "main" && (
          <>
            <TeachSection />
            <Differences />
          </>
        )}
        {tab === "feedback" && <FeedBackSection />}
        {tab === "effect" && <EffectSection />}
      </main>
    </>
  );
}

export default App;
