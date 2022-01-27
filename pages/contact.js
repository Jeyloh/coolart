import Footer from '../components/Footer';
import Header from '../components/Header';
import ImageGallery from 'react-image-gallery';
import styles from '../styles/Contact.module.css';
import content from '../content/no.json';
import Head from 'next/head';
import HtmlHead from '../components/Head';
import Script from 'next/script';
import CustomGoogleMap from '../components/GoogleMap';

export default function Contact() {
  return (
    <div className={styles.Contact}>
      <HtmlHead />
      <Header currentHref={'/contact'} />
      <div
        data-poster-url='https://daks2k3a4ib2z.cloudfront.net/590348c20493323d42c78ab6/590b9233f274e91bc1039b1c_IMG_0581-poster-00001.jpg'
        data-video-urls='https://daks2k3a4ib2z.cloudfront.net/590348c20493323d42c78ab6/590b9233f274e91bc1039b1c_IMG_0581-transcode.mp4,https://daks2k3a4ib2z.cloudfront.net/590348c20493323d42c78ab6/590b9233f274e91bc1039b1c_IMG_0581-transcode.webm'
        data-autoplay='true'
        data-loop='true'
        data-wf-ignore='true'
      >
        <video
          loop
          style={{
            // height: 400,
            // width: '100%',
            backgroundImage:
              'url(https://daks2k3a4ib2z.cloudfront.net/590348c20493323d42c78ab6/590b9233f274e91bc1039b1c_IMG_0581-poster-00001.jpg)',
          }}
          muted
          playsinline
          data-wf-ignore='true'
          data-object-fit='cover'
        >
          <source
            src='https://daks2k3a4ib2z.cloudfront.net/590348c20493323d42c78ab6/590b9233f274e91bc1039b1c_IMG_0581-transcode.mp4'
            data-wf-ignore='true'
          />
          <source
            src='https://daks2k3a4ib2z.cloudfront.net/590348c20493323d42c78ab6/590b9233f274e91bc1039b1c_IMG_0581-transcode.webm'
            data-wf-ignore='true'
          />
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
