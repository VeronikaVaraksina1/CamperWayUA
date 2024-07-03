import css from "./Card.module.css"
import icons from "../../images/icons.svg";
import { Button } from "../Button/Button";

export const Card = () => {
  return (
    <div className={css.wrapper}>
      <img />
      <div>
        <div>
          <h2>Mavericks</h2>
          <div>
            <p>€8000.00</p>
            <button>
              <svg width={18} height={18}>
                <use href={`${icons}#icon-heart`}></use>
              </svg>
            </button>
          </div>
          <div>
            <p>
              <span>
                <svg width={18} height={18}>
                  <use href={`${icons}#icon-rating`}></use>
                </svg>
              </span>
              4.4(2 Reviews)
            </p>
            <p>
              <span>
                <svg width={18} height={18}>
                  <use href={`${icons}#icon-map-pin`}></use>
                </svg>
              </span>
              Kyiv, Ukraine
            </p>
          </div>
          <p>
            Embrace simplicity and freedom with the Mavericks panel truck, an id
          </p>
          <h3>Categories</h3>
          <Button type="button">Show more</Button>
        </div>
      </div>
    </div>
  );
};
