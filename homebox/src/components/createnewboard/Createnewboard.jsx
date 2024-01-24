import { useContext, useEffect } from "react";
import "./Createnewboard.css";
import { AppContext } from "../../context";

const Createnewboard = () => {
  const {
    newBoardInput,
    setNewBoardInput,
    boards,
    setBoards,
    setToggleOverlay,
    setCurrentBoardId,
    setCurrentBoardName,
    setCurrentBoard,
  } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem("myboards", JSON.stringify(boards));
  }, [boards]);

  const handleBoardCreate = () => {
    const newBoard = {
      id: new Date().getTime().toString(),
      board: newBoardInput,
      active: false,
      // box: { todo: "", doing: "", done: "" },
      body: [],
    };
    setBoards([newBoard, ...boards]);
    setToggleOverlay(false);
    setCurrentBoardId(newBoard.id);
    setCurrentBoardName(newBoard.board);
    setCurrentBoard(newBoard);
    // if (boards.length > 0) {
    //   localStorage.setItem("myboards", JSON.stringify(boards));
    // }
  };

  // // console.log(boards.length);
  // localStorage.setItem("myboards", JSON.stringify(boards));
  return (
    <main className="createnewboard-main">
      <section className="createnewboard-section">
        <input
          type="text"
          className="createnewboard-input"
          placeholder="Create new Board"
          value={newBoardInput}
          onChange={(e) => setNewBoardInput(e.target.value)}
        />
        <button className="createnewboard-button" onClick={handleBoardCreate}>
          create
        </button>
      </section>
      <div className="createboard-exit" onClick={() => setToggleOverlay(false)}>
        X
      </div>
    </main>
  );
};

export default Createnewboard;

// board is suppose to to have a name , id and array to accomade objects
