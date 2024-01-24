import { useContext, useEffect } from "react";
import "./count.css";
import { AppContext } from "../../context";

const Count = () => {
  const { doingEntry, todoEntry, doneEntry, currentBoard, handleCount } =
    useContext(AppContext);

  useEffect(() => {
    handleCount(currentBoard);
  }, [currentBoard, handleCount]);

  return (
    <main className="count-main">
      <section className="name">
        <article className="name-article">
          <div className="circleyellow"></div>
          <div className="cartegory-name">Todo{todoEntry}</div>
        </article>
        <article className="name-article">
          <div className="circleorange"></div>
          <div className="cartegory-name">Doing{doingEntry}</div>
        </article>
        <article className="name-article">
          <div className="circlegreen"></div>
          <div className="cartegory-name">Done{doneEntry}</div>
        </article>
      </section>
    </main>
  );
};

export default Count;
