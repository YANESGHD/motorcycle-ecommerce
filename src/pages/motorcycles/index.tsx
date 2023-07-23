import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { ListProducts, Loader, NotFoundMessage, Landing } from '@/components';
import { RootState, modifyProducts } from '@/store';

const Motorcycles: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { selectedSection } = useSelector((state: RootState) => state.section);
  const { products } = useSelector((state: RootState) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true)
    fetch(`/api/motorcycles`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(modifyProducts(res.data.data))
        setIsLoading(false)
      })
  }, [selectedSection]);

  return (
    <>
      <Landing />
      <Container>
        {isLoading && <Loader />}
        {!isLoading && !products.length && <NotFoundMessage />}
        {!isLoading && products.length && <ListProducts products={products}/>}
      </Container>
    </>
  );
};

export default Motorcycles;

const Container = styled.div`
  padding: 40px 20px;
`;
