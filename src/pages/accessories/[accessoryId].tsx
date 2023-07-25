import { useRouter } from 'next/router';
import { DetailsPage } from '@/components';

const AccessoryDetails = () => {
  const router = useRouter();
  const accessoryId = router.query.accessoryId as string;

  return (
    <>
      {accessoryId && (
        <DetailsPage type='accessories' productId={accessoryId} />
      )}
    </>
  );
};

export default AccessoryDetails;
