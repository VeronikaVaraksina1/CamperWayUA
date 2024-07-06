import css from "./Details.module.css";
import icons from "../../images/icons.svg";

export const Details = ({ data }) => {
  const { adults, children, transmission, engine, details, form, length, width, height, tank, consumption } = data;

  const filteredDetails = {
    adults,
    children,
    transmission,
    engine,
    AC: details.airConditioner,
  };

  const vehicleDetails = {
    form,
    length,
    width,
    height,
    tank,
    consumption,
  };

  const itemList = Object.entries(filteredDetails);
  const detailsList = Object.entries(details);
  const vehicleDetailsList = Object.entries(vehicleDetails);

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {itemList.map(([key, values], index) => (
          <li key={`${key}-${index}`}>
            <p className={css.item}>
              <svg width={18} height={18}>
                <use href={`${icons}#icon-${key}`}></use>
              </svg>
              {key === "adults" || key === "children"
                ? `${values} ${key}`
                : key === "engine"
                ? String(values)
                    .charAt(0)
                    .toUpperCase()
                    .concat(String(values).slice(1))
                : `${key.charAt(0).toUpperCase().concat(key.slice(1))}`}
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
                : key === "airConditioner"
                ? `${values} air conditioner`
                : key === "kitchen" || key === "AC" ? key.charAt(0).toUpperCase().concat(key.slice(1)) :`${values} ${key}`}
            </p>
          </li>
        ))}
      </ul>

      <div className={css.titleContainer}>
      <h3 className={css.title}>Vehicle details</h3>
        <ul className={css.vehicleDetailsList}>
          {vehicleDetailsList.map(([key, values], index) => (
            <li key={`${key}-${index}`}>
              <div className={css.vehicleDetailsContainer}>
                <p className={css.vehicleDetails}>{key.charAt(0).toUpperCase().concat(key.slice(1))}</p>
                <p className={css.vehicleDetails}>{values}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// key === "kitchen" || key === "AC" ? key.charAt(0).toUpperCase().concat(key.slice(1)) : String(values).charAt(0).toUpperCase().concat(String(values).slice(1))
