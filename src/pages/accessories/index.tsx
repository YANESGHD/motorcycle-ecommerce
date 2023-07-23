import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListProducts, Loader, NotFoundMessage, Landing } from '@/components';
import { RootState, modifyProducts } from '@/store';

const Accessories: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { selectedSection } = useSelector((state: RootState) => state.section);
  const { products } = useSelector((state: RootState) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true)
    fetch(`/api/accessories`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(modifyProducts(res.data.data))
        setIsLoading(false)
      })
  }, [selectedSection]);

  return (
    <>
      <Landing />
      {isLoading && <Loader />}
      {(!isLoading && !products.length) && <NotFoundMessage />}
      {(!isLoading && products.length) && <ListProducts products={products}/>}
    </>
  );
};

export default Accessories;
