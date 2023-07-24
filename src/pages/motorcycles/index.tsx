import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { ListProducts, Loader, NotFoundMessage, Landing } from '@/components';
import { RootState, modifyMotorcycles, fetchingMotorcycles } from '@/store';

const Motorcycles: React.FC = () => {
  const { isLoading, motorcycles } = useSelector(
    (state: RootState) => state.motorcycles
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (motorcycles.length === 0) {
      dispatch(fetchingMotorcycles());

      fetch(`/api/motorcycles`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(modifyMotorcycles({ isLoading: false, motorcycles: data }));
        });
    }
  }, [motorcycles, dispatch]);

  return (
    <>
      <Landing />
      <Container>
        {isLoading && <Loader />}
        {!isLoading && !motorcycles.length && <NotFoundMessage />}
        {!isLoading && motorcycles.length > 0 && (
          <ListProducts type='motorcycles' products={motorcycles} />
        )}
      </Container>
    </>
  );
};

export default Motorcycles;

const Container = styled.div`
  padding: 40px 20px;
`;
