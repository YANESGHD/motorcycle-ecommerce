import { Navbar } from '../';
import { Landing } from '../';
 
interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Landing />
      {children}
    </>
  );
};
