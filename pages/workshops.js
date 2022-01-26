import Footer from '../components/Footer';
import HtmlHead from '../components/Head';
import Header from '../components/Header';
import content from '../content/no.json';
import styles from '../styles/Workshop.module.css';
import { useState } from 'react';
import cn from 'classnames';
import FaqItem from '../components/FaqItem';
import WorkshopForm from '../components/WorkshopForm';

export default function Workshop() {
  const [contactForm, setContactForm] = useState();

  return (
    <div className={styles.Workshop}>
      <HtmlHead />
      <Header />
      <main className={styles.Wrapper}>
        <section className={styles.HeadingSection}>
          <h1>{content.workshop.title}</h1>
          <p className={styles.Subtitle}>{content.workshop.subtitle}</p>
          <ul className={styles.IntroList}>
            {content.workshop.bodyList.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
          <video src={content.workshop.youtubeUrl}></video>
        </section>
        <section className={styles.WorkshopGrid}>
          <div className={cn(styles.WorkshopGridTitle)}>
            <h1> {content.workshop.types.title}</h1>
          </div>
          <div className={cn(styles.WorkshopGridFirst, styles.WorkshopGridBox)}>
            <div className={cn(styles.WorkshopGridHeader)}>
              <h2> {content.workshop.types.general.title}</h2>
            </div>
            <div className={cn(styles.WorkshopGridContent)}>
              {content.workshop.types.general.sections.map((section) => (
                <>
                  <h3>{section.title}</h3>
                  <p>{section.body}</p>
                </>
              ))}
            </div>
            <div
              className={cn(styles.CtaBox, styles.WorkshopCTAContainerFirst)}
            >
              <p>{content.workshop.types.general.duration}</p>
              <p>{content.workshop.types.general.price}</p>
              <a href='#contact-form' className={styles.CtaButton}>
                {content.workshop.types.general.contact}
              </a>
            </div>
          </div>

          <div
            className={cn(styles.WorkshopGridSecond, styles.WorkshopGridBox)}
          >
            <div className={cn(styles.WorkshopGridHeader)}>
              <h2>{content.workshop.types.battle.title}</h2>
            </div>
            <div className={cn(styles.WorkshopGridContent)}>
              <h3>{content.workshop.types.battle.subtitle}</h3>
              <ul>
                {content.workshop.types.battle.content.map((str) => (
                  <p key={str}>{str}</p>
                ))}
              </ul>
            </div>
            <div
              className={cn(styles.CtaBox, styles.WorkshopCTAContainerSecond)}
            >
              <p>{content.workshop.types.battle.duration}</p>
              <p>{content.workshop.types.battle.price}</p>
              <a href='#contact-form' className={styles.CtaButton}>
                {content.workshop.types.battle.contact}
              </a>
            </div>
          </div>
        </section>
        <section className={styles.FaqContainer}>
          <h2>{content.workshop.faq.title}</h2>
          <ul className={styles.FaqQuestion}>
            {content.workshop.faq.qa.map(({ q, a }) => (
              <FaqItem title={q} content={a} key={q} />
            ))}
          </ul>
        </section>

        <section id='contact-form' className={styles.ContactUsForm}>
          <h2>{content.workshop.workshopForm.title}</h2>
          <WorkshopForm
            submitText={content.workshop.workshopForm.submitText}
            inputs={content.workshop.workshopForm.inputs}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
