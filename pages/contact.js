import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Contact.module.css';
import content from '../content/no.json';
import HtmlHead from '../components/Head';
import CustomGoogleMap from '../components/GoogleMap';

export default function Contact() {
  return (
    <div className={styles.Contact}>
      <HtmlHead title={'CoolArt - Contact'} />
      <Header currentHref={'/contact'} />
      <div className={styles.VideoWrapper}>
        <video className={styles.Video} loop muted autoPlay playsInline>
          <source src='images/nybyen-vid.mp4' type='video/mp4' />
        </video>
      </div>

      <div className={styles.Wrapper}>
        <h2>{content.contact.title}</h2>
        <ul>
          <li>
            <p>{content.contact.line1}</p>
          </li>
          <li>
            <p>{content.contact.line2}</p>
          </li>
          <li>
            <p>{content.contact.line3}</p>
          </li>
          <li>
            <p>{content.contact.line4}</p>
          </li>
        </ul>
      </div>

      <CustomGoogleMap />
      <Footer />
    </div>
  );
}
