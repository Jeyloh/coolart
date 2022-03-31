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
      <main className={styles.Wrapper}>
        <h1>Sommerskolen</h1>
        <p>Kommer mer innhold snart</p>
        <div style={{ height: '50vh' }} />
      </main>

      <Footer />
    </div>
  );
}
