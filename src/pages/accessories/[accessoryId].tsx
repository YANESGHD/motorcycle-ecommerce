import { useRouter } from 'next/router';
import { ProductDetails } from '@/components';

export default function AccessoryDetails() {
  const router = useRouter();
  const accessoryId = router.query.accessoryId;

  return (
    <>
      {accessoryId && <ProductDetails productPath={`accessories/${accessoryId}`}/>}
    </>
  );
};
