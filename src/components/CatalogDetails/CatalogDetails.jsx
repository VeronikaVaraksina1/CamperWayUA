import css from "./CatalogDetails.module.css";
import icons from "../../images/icons.svg";

export const CatalogDetails = ({ data }) => {
  const { adults, transmission, engine, details } = data;
  const { kitchen, beds, airConditioner } = details;

  // const filteredDetails = {
  //   adults,
  //   transmission,
  //   engine,
  //   kitchen,
  //   beds,
  //   AC: airConditioner,
  // };

  const filteredDetails = {};

  if (adults !== 0) {
    filteredDetails.adults = adults;
  }
  if (transmission !== 0) {
    filteredDetails.transmission = transmission;
  }
  if (engine !== 0) {
    filteredDetails.engine = engine;
  }
  if (kitchen !== 0) {
    filteredDetails.kitchen = kitchen;
  }
  if (beds !== 0) {
    filteredDetails.beds = beds;
  }
  if (airConditioner !== 0) {
    filteredDetails.AC = airConditioner;
  }

  const itemList = Object.entries(filteredDetails);

  return (
    <ul className={css.list}>
      {itemList.map(([key, values], index) => (
        <li className={css.item} key={`${key}-${index}`}>
          <svg width={18} height={18}>
            <use href={`${icons}#icon-${key}`}></use>
          </svg>
          <p>{key === "adults" || key === "beds" ? `${values} ${key}` : key === "kitchen" || key === "AC" ? key.charAt(0).toUpperCase().concat(key.slice(1)) : values.charAt(0).toUpperCase().concat(values.slice(1))}</p>
        </li>
      ))}
    </ul>
  );
};
