import { useContext, useState } from "react";
import "./createnewtask.css";
import { AppContext } from "../../context";
import Swal from "sweetalert2";
//import axios from "axios";

const Createnewtask = () => {
  const {
    setToggletaskOverlay,
    currentBoard,
    //currentBoardId,
    // setTodoEntry,
    // setDoingEntry,
    // setDoneEntry,
    // todoEntry,
    // doingEntry,
    // doneEntry,
    // setTodoEntryb,
    // setDoingEntryb,
    // setDoneEntryb,
    currentBoardName,
    toggleName,
    handleCount,
    // user
  } = useContext(AppContext);
  const [inputsValue, setInputsValue] = useState({
    title: "",
    desc: "",
    subtaska: "",
    subtaskb: "",
    status: "",
  });

  const handleCreate = async () => {
    if (currentBoard.board === currentBoardName || toggleName === true) {
      if (inputsValue.status === "todo") {
        const newTask = {
          id: new Date().getTime().toString(),
          title: inputsValue.title,
          desc: inputsValue.desc,
          type: "todo",
        };

        currentBoard.body.push(newTask);
      } else if (inputsValue.status === "doing") {
        const newTask = {
          id: new Date().getTime().toString(),
          title: inputsValue.title,
          desc: inputsValue.desc,
          type: "doing",
        };
        currentBoard.body.push(newTask);
      } else if (inputsValue.status === "done") {
        const newTask = {
          id: new Date().getTime().toString(),
          title: inputsValue.title,
          desc: inputsValue.desc,
          type: "done",
        };
        currentBoard.body.push(newTask);
      }
      setToggletaskOverlay(false);
      handleCount(currentBoard);
    } else {
      setToggletaskOverlay(false);
      Swal.fire({
        title: "Not Yet",
        text: "Please create board first",
        icon: "error",
      });
    }
  };

  //for create task , status and rest.
  // const handleCreate = async () => {
  //   const url_status =
  //     "https://taskto-do.onrender.com/api/v1/user/createstatus";
  //   const todo_status = inputsValue.status === "todo";
  //   const doing_status = inputsValue.status === "doing";
  //   const done_status = inputsValue.status === "done";
  //   const url_allstatus =
  //     "https://taskto-do.onrender.com/api/v1/user/getallstatus";
  //   const todourl = `https://taskto-do.onrender.com/api/v1/user/getonestatus/${todo_status}`;
  //   const doingurl = `https://taskto-do.onrender.com/api/v1/user/getonestatus/${doing_status}`;
  //   const doneurl = `https://taskto-do.onrender.com/api/v1/user/getonestatus/${done_status}`;
  //   const create_doneurl = `https://taskto-do.onrender.com/api/v1/user/createtask/${done_status}`;
  //   const create_todourl = `https://taskto-do.onrender.com/api/v1/user/createtask/${todo_status}`;
  //   const create_doingurl = `https://taskto-do.onrender.com/api/v1/user/createtask/${doing_status}`;

  //   if(inputsValue.status === "todo"){

  //      try {
  //        const response = await axios.post(url_status, { title: todo_status });
  //        console.log(response.data);
  //      } catch (error) {
  //        console.log(error.message);
  //      }

  //        try {
  //          const response = await axios.get(todourl);
  //          const statusId = response.data
  //        } catch (error) {
  //          console.log(error.message);
  //        }
  //           try {
  //             const response = await axios.post(create_todourl, {
  //               title: inputsValue.title,
  //               desc: inputsValue.desc,
  //               userId: user._id,
  //             });
  //             console.log(response.data);
  //           } catch (error) {
  //             console.log(error.message);
  //           }
  //   }

  //   try {
  //     const response = await axios.post(url_status, { title: todo_status });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   try {
  //     const response = await axios.post(url_status, { title: doing_status });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   try {
  //     const response = await axios.post(url_status, { title: done_status });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   try {
  //     const response = await axios.get(url_allstatus);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }

  //   try {
  //     const response = await axios.get(doingurl);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   try {
  //     const response = await axios.get(doneurl);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //    try {
  //      const response = await axios.post(create_doingurl, {title: inputsValue.title, desc:inputsValue.desc, userId:user._id});
  //      console.log(response.data);
  //    } catch (error) {
  //      console.log(error.message);
  //    }
  //     try {
  //       const response = await axios.post(create_doneurl, {
  //         title: inputsValue.title,
  //         desc: inputsValue.desc,
  //         userId: user._id,
  //       });
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputsValue((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <main className="createnewtask-main">
      <section className="createnewtask-section">
        <div className="new-task-head">Add New Task</div>
        <section className="new-task-title">
          <label>Title</label>
          <input
            type="text"
            className="title-input"
            placeholder="eg. take coffe break"
            value={inputsValue.title}
            onChange={handleChange}
            name="title"
          />
        </section>
        <section className="new-task-desc">
          <label>Desc</label>
          <input
            type="textarea"
            className="desc-input"
            placeholder="eg. take coffe break"
            value={inputsValue.desc}
            onChange={handleChange}
            name="desc"
          />
        </section>
        <section className="new-task-subtask">
          <label>Subtask</label>
          <div className="subtask-input-div">
            <input
              type="text"
              className="subtask-input"
              placeholder="eg. take coffe break"
              value={inputsValue.subtaska}
              onChange={handleChange}
              name="subtaska"
            />
            <h3>X</h3>
          </div>
          <div className="subtask-input-div">
            <input
              type="text"
              className="subtask-input"
              placeholder="eg. take coffe break"
              value={inputsValue.subtaskb}
              onChange={handleChange}
              name="subtaskb"
            />
            <h3>X</h3>
          </div>
        </section>
        <button className="new-subtask-btn">Add New Subtask</button>
        <section className="new-task-status">
          <label>Status</label>
          <select
            type="text"
            className="status-input"
            placeholder="eg. take coffe break"
            name="status"
            value={inputsValue.status}
            onChange={handleChange}
          >
            <option>status</option>
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </section>
        <button className="new-create-btn" onClick={handleCreate}>
          Create Task
        </button>
      </section>
      <div
        className="createtask-exit"
        onClick={() => setToggletaskOverlay(false)}
      >
        X
      </div>
    </main>
  );
};

export default Createnewtask;

//when i create a new task, it is an object, then push it into the the current. body
