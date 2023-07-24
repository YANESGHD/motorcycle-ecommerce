import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { ListProducts, Loader, NotFoundMessage, Landing } from '@/components';
import { RootState, modifyAccessories, fetchingAccessories } from '@/store';

const Accessories: React.FC = () => {
  const { isLoading, accessories } = useSelector(
    (state: RootState) => state.accessories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (accessories.length === 0) {
      dispatch(fetchingAccessories());

      fetch(`/api/accessories`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(modifyAccessories({ isLoading: false, accessories: data }));
        });
    }
  }, [accessories, dispatch]);

  return (
    <>
      <Landing />
      <Container>
        {isLoading && <Loader />}
        {!isLoading && !accessories.length && <NotFoundMessage />}
        {!isLoading && accessories.length > 0 && (
          <ListProducts type='accessories' products={accessories} />
        )}
      </Container>
    </>
  );
};

export default Accessories;

const Container = styled.div`
  padding: 20px;

  @media (min-width: 668px) {
    padding: 40px 70px;
  }
`;
