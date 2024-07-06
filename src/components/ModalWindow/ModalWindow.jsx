import icons from "../../images/icons.svg";
import { Details } from "../Details/Details";
import { OrderForm } from "../OrderForm/OrderForm";
import css from "./ModalWindow.module.css";
import Modal from "react-modal";

export const ModalWindow = ({
  value: data, isOpen, onClose }) => {
  const  {_id, name, price, rating, location, description, details, gallery, reviews } = data;

  const customStyles = {
    overlay: {
      backgroundColor: "var(--overlay)",
    },
  };

  return (
    <div className={css.modalWrapper}>
      <Modal
        className={css.modal}
        isOpen={isOpen}
        onRequestClose={onClose}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
        closeTimeoutMS={250}
      >
        <div className={css.titleContainer}>
          <div className={css.title}>
            <h2>{name}</h2>
            <button className={css.buttonClose} type="button" onClick={() => onClose()}>
              <svg width={24} height={24}>
                <use href={`${icons}#icon-close`}></use>
              </svg>
            </button>
          </div>

          <div className={css.ratingContainer}>
            <p className={css.rating}>
              <svg className={css.icon} width={16} height={16}>
                <use href={`${icons}#icon-rating`}></use>
              </svg>
              {`${rating}(${reviews.length} Reviews)`}
            </p>
            <p className={css.location}>
              <svg className={css.icon} width={16} height={16}>
                <use href={`${icons}#icon-map-pin`}></use>
              </svg>
              {location}
            </p>
          </div>

          <h3 className={css.price}>{`€${price}.00`}</h3>
        </div>

        <ul className={css.list}>
          {gallery.map((image, index) => (
            <li className={css.item} key={`${image} ${index}`}>
              <img className={css.image} src={image} />
            </li>
          ))}
        </ul>

        <p className={css.description}>{description}</p>
        
        <div className={css.detailsContainer}>
          <Details data={data} />
          <OrderForm />
        </div>

      </Modal>
    </div>
  );
};
