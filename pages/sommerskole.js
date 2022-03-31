import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Contact.module.css';
import content from '../content/no.json';
import HtmlHead from '../components/Head';
import CustomGoogleMap from '../components/GoogleMap';

export default function Contact() {
  return (
    <div className={styles.Contact}>
      <HtmlHead title={'CoolArt - Sommerskolen'} />
      <Header currentHref={'/sommerskolen'} />

      <h1>Kommer mer snart</h1>

      <Footer />
    </div>
  );
}
