import Image from "next/image";

export const Landing: React.FC = () => {
  return (
    <Image
      src="/motorcycle.jpg"
      alt="Landing"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }} // optional
    />
  );
}; 
