import Footer from '../components/Footer';
import Header from '../components/Header';
import ImageGallery from 'react-image-gallery';
import styles from '../styles/Gallery.module.css';
import content from '../content/no.json';
import Head from 'next/head';
import HtmlHead from '../components/Head';
import Script from 'next/script';

const canvasGallery = [
  {
    original: 'images/canvasgallery/canvas.jpg',
    thumbnail: 'images/canvasgallery/canvas.jpg',
  },
  {
    original: 'images/canvasgallery/canvas1.jpg',
    thumbnail: 'images/canvasgallery/canvas1.jpg',
  },
  {
    original: 'images/canvasgallery/canvas2.jpg',
    thumbnail: 'images/canvasgallery/canvas2.jpg',
  },
  {
    original: 'images/canvasgallery/sarajevo.jpg',
    thumbnail: 'images/canvasgallery/sarajevo.jpg',
  },
  {
    original: 'images/canvasgallery/trollvegg.jpg',
    thumbnail: 'images/canvasgallery/trollvegg.jpg',
  },
  {
    original: 'images/canvasgallery/trollvegg1.jpg',
    thumbnail: 'images/canvasgallery/trollvegg1.jpg',
  },
];

const portfolioGallery = [
  {
    original: 'images/portfoliogallery/arendalkanalen.jpg',
    thumbnail: 'images/portfoliogallery/arendalkanalen.jpg',
  },
  {
    original: 'images/portfoliogallery/arendalkanalen1.jpg',
    thumbnail: 'images/portfoliogallery/arendalkanalen1.jpg',
  },
  {
    original: 'images/portfoliogallery/fergefjellet1.jpg',
    thumbnail: 'images/portfoliogallery/fergefjellet1.jpg',
  },
  {
    original: 'images/portfoliogallery/fusbarnehage.jpg',
    thumbnail: 'images/portfoliogallery/fusbarnehage.jpg',
  },
  {
    original: 'images/portfoliogallery/fusbarnehage1.jpg',
    thumbnail: 'images/portfoliogallery/fusbarnehage1.jpg',
  },
  {
    original: 'images/portfoliogallery/fusbarnehage2.jpg',
    thumbnail: 'images/portfoliogallery/fusbarnehage2.jpg',
  },
  {
    original: 'images/portfoliogallery/henningolsen.jpg',
    thumbnail: 'images/portfoliogallery/henningolsen.jpg',
  },
  {
    original: 'images/portfoliogallery/henningolsen1.jpg',
    thumbnail: 'images/portfoliogallery/henningolsen1.jpg',
  },
  {
    original: 'images/portfoliogallery/henningolsen2.jpg',
    thumbnail: 'images/portfoliogallery/henningolsen2.jpg',
  },
  {
    original: 'images/portfoliogallery/henningolsen3.jpg',
    thumbnail: 'images/portfoliogallery/henningolsen3.jpg',
  },
  {
    original: 'images/portfoliogallery/henningolsen4.jpg',
    thumbnail: 'images/portfoliogallery/henningolsen4.jpg',
  },
  {
    original: 'images/portfoliogallery/henningolsen5.jpg',
    thumbnail: 'images/portfoliogallery/henningolsen5.jpg',
  },
  {
    original: 'images/portfoliogallery/henningolsen6.jpg',
    thumbnail: 'images/portfoliogallery/henningolsen6.jpg',
  },
  {
    original: 'images/portfoliogallery/henningolsen7.jpg',
    thumbnail: 'images/portfoliogallery/henningolsen7.jpg',
  },
  {
    original: 'images/portfoliogallery/knuden.jpg',
    thumbnail: 'images/portfoliogallery/knuden.jpg',
  },
  {
    original: 'images/portfoliogallery/larampa.jpg',
    thumbnail: 'images/portfoliogallery/larampa.jpg',
  },
  {
    original: 'images/portfoliogallery/larampa1.jpg',
    thumbnail: 'images/portfoliogallery/larampa1.jpg',
  },
  {
    original: 'images/portfoliogallery/losagderenergi.jpg',
    thumbnail: 'images/portfoliogallery/losagderenergi.jpg',
  },
  {
    original: 'images/portfoliogallery/losagderenergi1.jpg',
    thumbnail: 'images/portfoliogallery/losagderenergi1.jpg',
  },
  {
    original: 'images/portfoliogallery/nordbanen.jpg',
    thumbnail: 'images/portfoliogallery/nordbanen.jpg',
  },
  {
    original: 'images/portfoliogallery/nordbanen1.jpg',
    thumbnail: 'images/portfoliogallery/nordbanen1.jpg',
  },
  {
    original: 'images/portfoliogallery/nordbanen2.jpg',
    thumbnail: 'images/portfoliogallery/nordbanen2.jpg',
  },
  {
    original: 'images/portfoliogallery/nordbanen3.jpg',
    thumbnail: 'images/portfoliogallery/nordbanen3.jpg',
  },
  {
    original: 'images/portfoliogallery/nybyen.jpg',
    thumbnail: 'images/portfoliogallery/nybyen.jpg',
  },
  {
    original: 'images/portfoliogallery/nybyen1.jpg',
    thumbnail: 'images/portfoliogallery/nybyen1.jpg',
  },
  {
    original: 'images/portfoliogallery/nybyen2.jpg',
    thumbnail: 'images/portfoliogallery/nybyen2.jpg',
  },
  {
    original: 'images/portfoliogallery/nybyen3.jpg',
    thumbnail: 'images/portfoliogallery/nybyen3.jpg',
  },
  {
    original: 'images/portfoliogallery/nybyen4.jpg',
    thumbnail: 'images/portfoliogallery/nybyen4.jpg',
  },
  {
    original: 'images/portfoliogallery/nybyen5.jpg',
    thumbnail: 'images/portfoliogallery/nybyen5.jpg',
  },
  {
    original: 'images/portfoliogallery/privathus.jpg',
    thumbnail: 'images/portfoliogallery/privathus.jpg',
  },
  {
    original: 'images/portfoliogallery/privathus1.jpg',
    thumbnail: 'images/portfoliogallery/privathus1.jpg',
  },
  {
    original: 'images/portfoliogallery/privathus2.jpg',
    thumbnail: 'images/portfoliogallery/privathus2.jpg',
  },
  {
    original: 'images/portfoliogallery/shameless.jpg',
    thumbnail: 'images/portfoliogallery/shameless.jpg',
  },
  {
    original: 'images/portfoliogallery/shameless1.jpg',
    thumbnail: 'images/portfoliogallery/shameless1.jpg',
  },
  {
    original: 'images/portfoliogallery/streetart.jpg',
    thumbnail: 'images/portfoliogallery/streetart.jpg',
  },
];

export default function Gallery() {
  return (
    <div className={styles.Gallery}>
      <HtmlHead juicer />
      <Header />
      <main className={styles.Wrapper}>
        <section className={styles.spacing}>
          <h1 className={styles.center}>{content.gallery.title}</h1>
          <p className={styles.center}>{content.gallery.body}</p>
        </section>
        <section className={styles.spacing}>
          <h2 className={styles.center}>{content.gallery.canvas.title}</h2>
          <ImageGallery items={canvasGallery} />
        </section>
        <section className={styles.spacing}>
          <h2 className={styles.center}>
            {content.gallery.workPortfolio.title}
          </h2>
          <p className={styles.center}>{content.gallery.workPortfolio.body}</p>
          <ImageGallery items={portfolioGallery} />
        </section>
        <section className={styles.spacing}>
          <h2 className={styles.center}>{content.gallery.instagram.title}</h2>
          <p className={styles.center}>{content.gallery.instagram.subtitle}</p>

          <Script
            src='https://assets.juicer.io/embed.js'
            type='text/javascript'
          />
          <span className={styles.Juicer}>
            <div className='juicer-feed' data-feed-id='sedinzunic' />
          </span>
        </section>
      </main>
      <Footer />
    </div>
  );
}
