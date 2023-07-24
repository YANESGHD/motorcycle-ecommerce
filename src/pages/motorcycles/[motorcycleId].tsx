import { useRouter } from 'next/router';
import { ProductDetails } from '@/components';

export default function MotorcycleDetails() {
  const router = useRouter();
  const motorcycleId = router.query.motorcycleId as string;

  return (
    <>
      {motorcycleId && <ProductDetails type='motorcycles' productId={motorcycleId} />}
    </>
  );
};
