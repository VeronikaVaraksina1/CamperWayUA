import css from "./CatalogPage.module.css"
import { useDispatch } from "react-redux";
import { CardList } from "../../components/CardList/CardList";
import { useEffect, useState } from "react";
import { fetchAdverts } from "../../redux/adverts/operations";
import { Button } from "../../components/Button/Button";
import clsx from "clsx";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    dispatch(fetchAdverts({ page, limit: 4 }))
      .unwrap()
      .then((result) => {
        if (result.length < 4) {
          setLoadMore(false);
        }
      })
      .catch((error) => console.log(error.message));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return(
    <div className={css.wrapper}>
      <CardList />
      <Button className={clsx(loadMore ? css.isShow : css.isHide)} type={"button"} onClick={handleLoadMore}>Load More</Button>
    </div>
  )
};

export default CatalogPage;