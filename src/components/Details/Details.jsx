import css from "./Details.module.css";
import icons from "../../images/icons.svg";

export const Details = ({ data }) => {
  const { adults, children, transmission, engine, details, form, length, width, height, tank, consumption } = data;

  const filteredDetails = {
    adults,
    children,
    transmission,
    engine,
  };

  const vehicleDetails = {
    form, length, width, height, tank, consumption,
  }

  const itemList = Object.entries(filteredDetails);
  const detailsList = Object.entries(details);
  const vehicleDetailsList = Object.entries(vehicleDetails);

  return (
    <div>
      <ul className={css.list}>
        {itemList.map(([key, values], index) => (
          <li key={`${key}-${index}`}>
            <p className={css.item}>
              <svg width={18} height={18}>
                <use href={`${icons}#icon-${key}`}></use>
              </svg>
              {key === "adults" || key === "children"
                ? `${values} ${key}`
                : `${key}`}
            </p>
          </li>
        ))}

        {detailsList.map(([key, values], index) => (
          <li key={`${key}-${index}`}>
            <p className={css.item}>
              <svg width={18} height={18}>
                <use href={`${icons}#icon-${key}`}></use>
              </svg>
              {key === "gas" || key === "water"
                ? `${values} of ${key}`
                : `${values} ${key}`}
            </p>
          </li>
        ))}
      </ul>

      <h3 className={css.title}>Vehicle details</h3>
      <ul>
        {vehicleDetailsList.map(([key, values], index) => (
          <li key={`${key}-${index}`}>
            <div className={css.vehicleDetailsContainer}>
              <p>{key.charAt(0).toUpperCase().concat(key.slice(1))}</p>
              <p>{values}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// key === "kitchen" || key === "AC" ? key.charAt(0).toUpperCase().concat(key.slice(1)) : String(values).charAt(0).toUpperCase().concat(String(values).slice(1))
