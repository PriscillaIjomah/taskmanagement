import { useContext } from "react";
import "./Menu.css";
import task from "../../image/task.png";
import eye from "../../image/eyeslash.png";
import { AppContext } from "../../context";
import moonlight from "../../image/moon.png";
import sunlight from "../../image/light.png";

const Menu = () => {
  const {
    setToggleOverlay,
    boards,
    setHide,
    setCurrentBoardId,
    setCurrentBoard,
    setCurrentBoardName,
    togglelight,
    setTogglelight,
    setToggleName,
    handleCount,
    currentBoard,
    setDeleteTask,
    // toggleName,
    // setActive,
    // active,
    // currentBoardName,
    setBoards,
  } = useContext(AppContext);

  const handleCurrent = (num) => {
    setCurrentBoardId(num);
    const theCurrent = boards.find((item) => item.id === num);
    setCurrentBoardName(theCurrent.board);
    setCurrentBoard(theCurrent);
    setToggleName(true);
    handleCount(currentBoard);
    // setActive(!theCurrent.active);

    const newBoard = boards.filter((item) => item.id === num);
    const newBoardb = boards.filter((item) => item.id !== num);
    setBoards([...newBoard, ...newBoardb]);
  };

  const handleDeleteBoard = (num) => {
    const newBoard = boards.filter((item) => item.id !== num);
    setBoards(newBoard);
    setDeleteTask(true);
  };

  return (
    <main className="menu-main">
      <section className="top-menu-section">
        KINGS-<span className="span-logo">TASK</span>
      </section>
      <section className="middle-menu-section">
        <article className="first-menu-article">
          All Boards {boards.length}
        </article>
        <article className="second-menu-article">
          <button
            className="createboard"
            onClick={() => setToggleOverlay(true)}
          >
            <img src={task} alt="logo" />
            <span className="plus-icon">+</span>Create NewBoard
          </button>
          <div className="boards-list">
            {boards.map((item) => {
              return (
                <div
                  key={item.id}
                  className={
                    item.active === false
                      ? "boardcreated"
                      : "boardcreated-active"
                  }
                  //className="boardcreated"
                  // className="active"
                >
                  <section className="boardcreated-left">
                    <img src={task} alt="logo" />
                    <h3 onClick={() => handleCurrent(item.id)}>{item.board}</h3>
                  </section>
                  <section
                    className="boardcreated-right"
                    onClick={() => handleDeleteBoard(item.id)}
                  >
                    X
                  </section>
                </div>
              );
            })}
          </div>
        </article>
      </section>
      <section className="bottom-menu-section">
        <article className="light-dark-section">
          <div className="sun-div">
            <img src={sunlight} alt="sun" />
          </div>
          <section
            className="light-dark"
            onClick={() => setTogglelight(!togglelight)}
          >
            <div className={!togglelight ? "top-div" : "top-div-dark"}></div>
            <div className={!togglelight ? "down-div" : "down-div-dark"}></div>
          </section>
          <div className="moon-div">
            <img src={moonlight} alt="moon" />
          </div>
        </article>
        <div className="hide-div" onClick={() => setHide(true)}>
          <img src={eye} alt="eye" />
          <h3>Hide Side</h3>
        </div>
      </section>
    </main>
  );
};

export default Menu;

//when i click i create and save to an array, the selected should come to the top.
//still find the selected from the array.
//for every selected, return your choice of content.
