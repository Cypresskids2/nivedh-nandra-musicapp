import styles from './styles.css'
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';

export default function Home() {  //home component
  return (
    <div>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  );
}
