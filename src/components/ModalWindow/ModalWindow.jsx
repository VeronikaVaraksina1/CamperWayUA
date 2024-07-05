import icons from "../../images/icons.svg";
import css from "./ModalWindow.module.css"
import Modal from "react-modal";

export const ModalWindow = ({ value: { _id, name, price, rating, location, description, details, gallery, reviews }, isOpen, onClose }) => {

  const customStyles = {
    content: {
      maxWidth: "982px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: "40px",
      borderRadius: "20px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "var(--white)",
    },
    overlay: {
      backgroundColor: "var(--overlay)",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} shouldCloseOnOverlayClick={true} style={customStyles} closeTimeoutMS={250}>
      <div>
      <h2>{name}</h2>
      <button type="button" onClick={() => onClose()}>
        <svg className={css.icon} width={32} height={32}>
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

        <h3>{`€${price}.00`}</h3>

        <ul className={css.list}>
        {gallery.map((image) => (
          <li className={css.item} key={image}>
            <img className={css.image} src={image} />
          </li>
        ))}
        </ul>
    </Modal>
  );
};
