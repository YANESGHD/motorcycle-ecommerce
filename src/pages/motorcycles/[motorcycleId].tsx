import { useRouter } from 'next/router';
import { DetailsPage } from '@/components';

const MotorcycleDetails = () => {
  const router = useRouter();
  const motorcycleId = router.query.motorcycleId as string;

  return (
    <>
      {motorcycleId && (
        <DetailsPage type='motorcycles' productId={motorcycleId} />
      )}
    </>
  );
};

export default MotorcycleDetails;
