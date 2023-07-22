import { useRouter } from 'next/router';

export default function MotorcycleDetails() {
  const router = useRouter();
  const motorcycleId = router.query.motorcycleId;

  return <>{`Details Page of: ${motorcycleId}`}</>;
}
