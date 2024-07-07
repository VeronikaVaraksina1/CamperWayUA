import { useDispatch } from "react-redux";
import { CardList } from "../../components/CardList/CardList";
import { useEffect, useState } from "react";
import { fetchAdverts } from "../../redux/adverts/operations";
import { Button } from "../../components/Button/Button";

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(fetchAdverts({ page, limit: 4 })).unwrap().catch((error) => console.log(error.message));
  }, [dispatch, page]);

  // const handleLoadMore = () => {
  //   dispatch(fetchAdverts({ page + 1, limit: 4 }));
  // };

  return(
    <div>
      <CardList />
      <Button type={"button"} >Load More</Button>
    </div>
  )
};
