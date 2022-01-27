import Footer from '../components/Footer';
import HtmlHead from '../components/Head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import logo from '../public/images/logo/coolart-logo-border.png';
import nybyen1 from '../public/images/portfoliogallery/nybyen1.jpg';
import nybyen2 from '../public/images/portfoliogallery/henningolsen.jpg';
import nybyen3 from '../public/images/portfoliogallery/nybyen3.jpg';
import ImageCarousel from '../components/ImageCarousel';
import content from '../content/no.json';
import Image from 'next/image';
import SplitBox from '../components/SplitBox';

// https://www.npmjs.com/package/react-responsive-carousel
export default function Home() {
  return (
    <div className={styles.container}>
      <HtmlHead title={'Coolart'} />

      <Header currentHref={'/'} />

      <main className={styles.main}>
        <ImageCarousel
          images={[
            {
              src: nybyen1,
              alt: 'test',
            },

            {
              src: nybyen2,
              alt: 'test',
            },
            {
              src: nybyen3,
              alt: 'test',
            },
          ]}
        >
          <Image
            objectFit={'contain'}
            height={400}
            src={logo}
            alt='coolart logo'
          />
        </ImageCarousel>
        <SplitBox />
        <div className={styles.Wrapper}>
          <div className={styles.Content}>
            <h2>{content.home.body.title}</h2>
            {content.home.body.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.Reasons}>
            <h2>{content.home.reasons.title}</h2>

            <div className={styles.RowContainer}>
              <div>
                {content.home.reasons.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div>
                {content.home.moreText.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    <b>{paragraph}</b>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ImageScrollWrapper}>
          <div className={styles.ImageBackground}>
            <div className={styles.TextContent}>
              {content.home.yos.map((yo) => (
                <div className={styles.ImageScrollItem} key={yo}>
                  <h4 className={styles.yoHeader}>YO!</h4>

                  {yo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
