import { useContext, useEffect } from "react";
import { AppContext } from "../../context";
import "./Categories.css";

const Categories = () => {
  const {
    currentBoard,
    deleteTask,
    setDeleteTask,
    setCurrentBoard,
    // togglelight,
  } = useContext(AppContext);

  useEffect(() => {
    setCurrentBoard((prev) => {
      return { ...prev, body: [] };
    });
    setDeleteTask(false);
  }, [deleteTask, setCurrentBoard, setDeleteTask]);

  return (
    <main className="categories-main">
      <section className="categories-wrap">
        <main className="Todo">
          {currentBoard.body
            ? currentBoard.body.map((item) => {
                if (item.type === "todo") {
                  return (
                    <section key={item.id} className="each">
                      <article className="each-article">
                        <h3>{item.title}</h3>
                        <h4>{item.desc}</h4>
                      </article>
                    </section>
                  );
                }
              })
            : undefined}
        </main>
        <main className="Doing">
          {currentBoard.body
            ? currentBoard.body.map((item) => {
                if (item.type === "doing") {
                  return (
                    <section key={item.id} className="each">
                      <article className="each-article">
                        <h3>{item.title}</h3>
                        <h4>{item.desc}</h4>
                      </article>
                    </section>
                  );
                }
              })
            : undefined}
        </main>
        <main className="Done">
          {currentBoard.body
            ? currentBoard.body.map((item) => {
                if (item.type === "done") {
                  return (
                    <section key={item.id} className="each">
                      <article className="each-article">
                        <h3>{item.title}</h3>
                        <h4>{item.desc}</h4>
                      </article>
                    </section>
                  );
                }
              })
            : undefined}
        </main>
      </section>
    </main>
  );
};

export default Categories;
