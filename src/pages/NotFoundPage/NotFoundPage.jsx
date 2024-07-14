import css from "./NotFoundPage.module.css"
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
      <div className={css.container}>
        <p className={css.description}>Page not found!</p>
        <Link className={css.link}>Back Home</Link>
      </div>
    )
  };

export default NotFoundPage;
  