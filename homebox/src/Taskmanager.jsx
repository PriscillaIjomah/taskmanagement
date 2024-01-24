import { useContext } from "react";
import "./taskmanager.css";
import Menu from "./components/menu/Menu";
import ContentPage from "./components/content/ContentPage";
import { AppContext } from "./context";
import Createnewboard from "./components/createnewboard/Createnewboard";
import Createnewtask from "./components/createnewtask/Createnewtask";

const Taskmanager = () => {
  const { toggleOverlay, hide, toggletaskOverlay } = useContext(AppContext);

  // useEffect(()=> {}, [])
  return (
    <main className="taskmanager-main">
      <section className={!hide ? "left-app-section" : "left-app-section-hide"}>
        <Menu />
      </section>
      <section className="right-app-section">
        <ContentPage />
      </section>
      <section
        className={toggleOverlay ? "app-main-overlay" : "app-main-no-overlay"}
      >
        <Createnewboard />
      </section>
      <section
        className={
          toggletaskOverlay ? "app-main-overlay" : "app-main-no-overlay"
        }
      >
        <Createnewtask />
      </section>
    </main>
  );
};

export default Taskmanager;
