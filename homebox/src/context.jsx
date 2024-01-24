import { useState, createContext } from "react";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [toggleOverlay, setToggleOverlay] = useState(false);
  const [toggletaskOverlay, setToggletaskOverlay] = useState(false);
  const [newBoardInput, setNewBoardInput] = useState("");
  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("myboards")) || []
  );
  const [hide, setHide] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState("");
  const [todo, setTodo] = useState([]);
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);
  const [currentBoardId, setCurrentBoardId] = useState("");
  const [currentBoard, setCurrentBoard] = useState({});
  //const [currentBoardBody, setCurrentBoardBody] = useState("");
  const [currentBoardName, setCurrentBoardName] = useState("");
  const [todoEntry, setTodoEntry] = useState(0);
  const [doingEntry, setDoingEntry] = useState(0);
  const [doneEntry, setDoneEntry] = useState(0);
  const [todoEntryb, setTodoEntryb] = useState(0);
  const [doingEntryb, setDoingEntryb] = useState(0);
  const [doneEntryb, setDoneEntryb] = useState(0);
  const [togglelight, setTogglelight] = useState(false);
  const [logout, setLogout] = useState(false);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("auser")) || ""
  );

  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toggleName, setToggleName] = useState(false);
  const [active, setActive] = useState("");
  const [deleteTask, setDeleteTask] = useState(false);
  // const [mode, setMode] = useState(false);

  const updateUser = (data) => {
    setUser(data);
  };

  const handleCount = (data) => {
    if (toggleName) {
      const todoTasks = data.body.filter((item) => item.type === "todo");
      const doneTasks = data.body.filter((item) => item.type === "done");
      const doingTasks = data.body.filter((item) => item.type === "doing");

      setTodoEntry(todoTasks.length);
      setDoneEntry(doneTasks.length);
      setDoingEntry(doingTasks.length);
    }
  };

  return (
    <AppContext.Provider
      value={{
        toggleOverlay,
        setToggleOverlay,
        newBoardInput,
        setNewBoardInput,
        boards,
        setBoards,
        hide,
        setHide,
        selectedIndex,
        setSelectedIndex,
        toggletaskOverlay,
        setToggletaskOverlay,
        todo,
        setTodo,
        doing,
        setDoing,
        done,
        setDone,
        currentBoardId,
        setCurrentBoardId,
        // handleSelect,
        currentBoard,
        setCurrentBoard,
        currentBoardName,
        setCurrentBoardName,
        todoEntry,
        setTodoEntry,
        doingEntry,
        setDoingEntry,
        doneEntry,
        setDoneEntry,
        todoEntryb,
        setTodoEntryb,
        doingEntryb,
        setDoingEntryb,
        doneEntryb,
        setDoneEntryb,
        togglelight,
        setTogglelight,
        logout,
        setLogout,
        login,
        setLogin,
        user,
        setUser,
        updateUser,
        showAlert,
        setShowAlert,
        loading,
        setLoading,
        toggleName,
        setToggleName,
        handleCount,
        active,
        setActive,
        deleteTask,
        setDeleteTask,
        // mode,
        // setMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
