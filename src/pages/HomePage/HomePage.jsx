import css from "./HomePage.module.css";
import icons from "../../images/icons.svg";
import firstCamper from "../../images/breaking-bad-rv-1.jpg";
import secondCamper from "../../images/breaking-bad-rv-2.jpg";
import thirdCamper from "../../images/breaking-bad-rv-3.jpg";
import { CatalogLink } from "../../components/CatalogLink/CatalogLink";

export const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>
        Welcome to CamperWay
        <svg width={32} height={21}>
          <use href={`${icons}#icon-flag`}></use>
        </svg>
      </h1>

      <div className={css.listAndButtonContainer}>
        <ul className={css.imagesList}>
          <li>
            <img className={css.image} src={secondCamper} />
          </li>
          <li>
            <img className={css.image} src={thirdCamper} />
          </li>
          <li>
            <img className={css.image} src={firstCamper} alt="" />
          </li>
        </ul>

        <CatalogLink className={css.homeLinkCatalog}>
          See our catalog
        </CatalogLink>
      </div>

      <ul className={css.benefitsList}>
        <li className={css.item}>
          <div>
            <svg className={css.icon} width={16} height={16}>
              <use href={`${icons}#icon-rating`}></use>
            </svg>
            <h3>Convenience and Accessibility</h3>
          </div>
          <p>
            Our camper rental application provides easy access to a wide range
            of campers available for rent throughout Ukraine. With our platform,
            you can book a camper anytime and anywhere!
          </p>
        </li>
        <li className={css.item}>
          <div>
            <svg className={css.icon} width={16} height={16}>
              <use href={`${icons}#icon-rating`}></use>
            </svg>
            <h3>Unique Travel Experiences</h3>
          </div>
          <p>
            Traveling with a camper gives you the unique opportunity to explore
            the most beautiful corners of Ukraine at your own pace. You can
            create your own routes, stop in picturesque locations, and enjoy
            nature without limitations.
          </p>
        </li>
        <li className={css.item}>
          <div>
            <svg className={css.icon} width={16} height={16}>
              <use href={`${icons}#icon-rating`}></use>
            </svg>
            <h3>Comfort and Coziness</h3>
          </div>
          <p>
            Our campers are equipped with everything needed for comfortable
            living: from sleeping areas to kitchens and bathrooms. You will feel
            at home, even far from the city.
          </p>
        </li>
      </ul>
    </div>
  );
};
