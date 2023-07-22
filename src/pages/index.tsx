import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListProducts, Loader, NotFoundMessage, Landing } from '@/components';
import { RootState, modifyProducts } from '@/store';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const { selectedSection } = useSelector((state: RootState) => state.section);
  const { products } = useSelector((state: RootState) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true)
    fetch(`/api/${selectedSection.key}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(modifyProducts(res.data.data))
        setIsLoading(false)
      })
  }, [selectedSection]);

  if (isLoading) {
    return <Loader />;
  }

  if (!products.length) {
    return <NotFoundMessage />;
  }

  return (
    <>
      <Landing />
      <ListProducts products={products}/>
    </>
  );
};
