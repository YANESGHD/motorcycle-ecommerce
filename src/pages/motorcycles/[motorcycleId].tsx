import { useRouter } from 'next/router';
import { ProductDetails } from '@/components';

export default function MotorcycleDetails() {
  const router = useRouter();
  const motorcycleId = router.query.motorcycleId;

  return (
    <>
      {motorcycleId && <ProductDetails productPath={`motorcycles/${motorcycleId}`}/>}
    </>
  );
};
