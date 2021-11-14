import Footer from '../components/Footer';
import HtmlHead from '../components/Head';
import Header from '../components/Header';
import content from '../content/no.json';
import styles from '../styles/Workshop.module.css';

export default function Workshop() {
  return (
    <div className={styles.Workshop}>
      <HtmlHead />
      <Header />
      <main className={styles.Wrapper}>
        <section>
          <h1>{content.workshop.title}</h1>
          <p>{content.workshop.subtitle}</p>
          <ul>
            {content.workshop.bodyList.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
          <video src={content.workshop.youtubeUrl}></video>

          <div className={styles.GroupTypeBox}>
            <h1> {content.workshop.types.title}</h1>
          </div>
          <div className={styles.GroupRow}>
            <div className={styles.GroupTypeBox}>
              <h2>{content.workshop.types.general.title}</h2>
            </div>

            <div className={styles.GroupTypeBox}>
              <h2> {content.workshop.types.battle.title}</h2>
              <p>{content.workshop.types.battle.body}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
