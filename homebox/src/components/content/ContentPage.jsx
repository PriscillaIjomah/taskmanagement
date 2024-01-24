import { useContext, useEffect } from "react";
import "./ContentPage.css";
import { AppContext } from "../../context";
import Categories from "../categories/Categories";
import "animate.css";
import axios from "axios";
import Count from "../count/Count";

const ContentPage = () => {
  const {
    hide,
    setHide,
    // boards,
    setToggletaskOverlay,
    // currentBoardId,
    // currentBoard,
    currentBoardName,
    setCurrentBoardName,
    logout,
    setLogout,
    user,
    updateUser,
    toggleName,
    boards,
    deleteTask,
  } = useContext(AppContext);

  // console.log(currentBoard.body);

  const handleDelete = async () => {
    const url = `https://taskto-do.onrender.com/api/v1/user/logout/${user._id}`;
    const response = await axios.post(url);
    updateUser("");
    console.log(response.message);
    localStorage.removeItem("auser");
    setLogout(false);
  };

  useEffect(() => {
    setCurrentBoardName("Selected Board");
  }, [deleteTask, setCurrentBoardName]);

  return (
    <main className="contentpage-main">
      <nav className="contentpage-nav">
        <header className={!hide ? "nav-header-hide" : "nav-header"}>
          <section
            onClick={() => setHide(false)}
            className={
              !hide
                ? "left-contentpage-header-section-hide"
                : "left-contentpage-header-section"
            }
          >
            KINGS-<span className="span-logo">TASK</span>
          </section>
          <section
            className={
              !toggleName
                ? "center-contentPage-header-section"
                : "color-center-contentPage-header-section"
            }
          >
            {!toggleName || boards.length === 0
              ? "Selected Board"
              : currentBoardName}
          </section>
          <section className="right-contentpage-header-section ">
            <button
              className="right-contentpage-header-section-btn"
              onClick={() => setToggletaskOverlay(true)}
            >
              +Add New Task
            </button>
            <article className="user-access">
              <div className="profile-key" onClick={() => setLogout(!logout)}>
                {user.firstName.slice(0, 1).toUpperCase()}
              </div>
              <div
                className={!logout ? "hide-log-out" : "log-out"}
                onClick={handleDelete}
              >
                Log Out
              </div>
            </article>
          </section>
        </header>
      </nav>
      <section className="contentpage-body">
        <article className="contenpage-count">{<Count />}</article>
        <article className="contentpage-categories">{<Categories />}</article>
      </section>
    </main>
  );
};

export default ContentPage;
