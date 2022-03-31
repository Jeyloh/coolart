import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Sommerskolen.module.css';
import content from '../content/no.json';
import HtmlHead from '../components/Head';
import { style } from 'd3';
import Image from 'next/image';
import image1Src from '../public/images/sommerskolen/1.jpg';
import image2Src from '../public/images/sommerskolen/2.jpg';
import image3Src from '../public/images/sommerskolen/KristiansandVagsbygd.jpg';

export default function Contact() {
  return (
    <div className={styles.Contact}>
      <HtmlHead title={'CoolArt - Sommerskolen'} />
      <Header currentHref={'/sommerskolen'} />
      <main className={styles.Wrapper}>
        <h1>Sommerskolen</h1>
        <div className={styles.ImageRow}>
          <div style={{ width: '70%' }}>
            <h2>Om du fikk farge byen...</h2>
            <div>
              <p>
                <b>Kurstittel:</b> Om du fikk farge byen
              </p>
              <p>
                <b>Ansvarlig </b>organisasjon: Coolart
              </p>
              <p>
                <b>Ansvarlig </b>person: Sedin Zunic
              </p>
              <p>
                <b>e-</b>post: contact@coolart.no
              </p>
              <p>
                <b>Telefon:</b> 45835829/40009093
              </p>
            </div>
            <p>
              Gatekunst er i vinden som aldri før og sommerskolen i Kristiansand
              har fått selveste Coolart til å holde kurs. På dette kurset lærer
              vi bort våre beste triks sånn at du selv mestrer gatekunst og at
              gatekunstmiljøet blomstrer. Vi vil bruke gatekunsten til å
              etablere gode holdninger og videreføre verdien av gatekunst. Alle
              deltagerne får kursbevis. Så meld deg på, dette kurset vil du ikke
              gå glipp av! Og viktigst av alt- vi skal ha det gøy!
            </p>
            <p>
              I løpet av uka vil du lære mange teknikker for å bli en
              gatekunstner. Fargelære, frihåndstegning, stensil, ide myldring,
              ulike hemmelige gatekunst triks og mye mer. Her får du være
              kreativ og skapende. På dette kurset skal CoolArt sammen med
              elevene utforske skaperglede, engasjement og utforskningstrang. Vi
              ønsker å videreutvikle hver enkelt deltager slik at alle opplever
              mestring. Vi veileder elevene gjennom hele gatekunst produksjonen,
              fra ide til ferdigstilt verk. Vi gleder oss til å bli kjent med
              deg!
            </p>
          </div>
          <div
            style={{
              height: '100%',
              width: '30%',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}
          >
            <Image objectFit={'contain'} src={image2Src} alt='TODO HER' />
          </div>
        </div>
        <div style={{ height: 200 }} />
        <div className={styles.ImageRow}>
          <Image
            objectFit={'cover'}
            src={image1Src}
            height={'500px'}
            alt='TODO HER'
          />
          <Image
            objectFit={'cover'}
            src={image3Src}
            height={'500px'}
            alt='TODO HER'
          />
        </div>

        <h2>Læringsutbytte</h2>
        <ul className={styles.InfoList}>
          <li>
            Kurset gjør noe med vår forståelse for de estetiske fagenes plass og
            muligheter både i og utenfor skoleverket.
          </li>

          <li>
            Kurset styrker de estetiske fags betydning både for individet og
            fellesskapet gjennom erfaringene som dukker opp i dette kurset og
            innenfor kunst- og kulturfeltet
          </li>

          <li>
            CoolArt motiverer elevene til eget kunstfaglig arbeid og det har
            sammenheng med at elev og lærestoff er i god dialog.{' '}
          </li>
          <li>
            Kurset lyktes i å knytte det faglige innholdet til elevenes
            personlige erfaringer.{' '}
          </li>
          <li>
            Dette kunstfaglige kurset skaper en kunstfaglig interesse hos
            elevene, og leder dem inn i deres egen skapende aktivitet.{' '}
          </li>

          <li>
            Læringsprosessen fremstår med en egen integritet der verdien av
            faget i seg selv er rådende.
          </li>
          <li>
            Elevenes møte og deltakelse gjennom dette kurset gir kunnskap og
            erfaring som kan bidra til større forståelse for temaet de har
            utforsket.{' '}
          </li>
          <li>
            Kurset tydeliggjør kunnskaps betydning av kunst i undervisning, og
            motivasjonsfaktorer for kunstfaglig arbeid hos elevene.{' '}
          </li>
          <li>
            Gjennom deltakelse i en kunstfaglig læringsprosess ledes elevene mot
            en kunstfaglig erfaring.
            <ul className={style.InfoList}>
              <li>
                Det er elevenes perspektiver, opplevelse, forståelse og
                tilbakemeldinger av denne prosessen som gir grunnlag for
                læringsutbytte.
              </li>
            </ul>
          </li>
          <li>
            Det er samarbeidet mellom profesjonelle kunstnere i møte med barn og
            unge som gir dette kurset faglige tyngde som skaper trygghet og
            motivasjon for alle involverte underveis. Elevene føler seg
            privilegert i kunstners ledsagelse.{' '}
          </li>
          <li>
            Kurset setter sine spor, og veiledere er takknemlige for alle
            deltagernes innspill og utfordringer.
          </li>

          <ul className={style.InfoList}>
            <li>
              Dette gir alle involverte en stor personlig læringsmulighet.
            </li>
          </ul>
        </ul>

        <p>
          Skolen skal la elevene utfolde skaperglede, engasjement og
          utforskertrang, og la dem få erfaring med å se muligheter og omsette
          ideer til handling.
        </p>
        <p>
          Barn og unge er nysgjerrige og ønsker å oppdage og skape. I
          opplæringen skal elevene få rike muligheter til å utvikle engasjement
          og utforskertrang. Evnen til å stille spørsmål, utforske og
          eksperimentere er viktig for dybdelæring. Skolen skal respektere og
          dyrke fram forskjellige måter å utforske og skape på. Elevene skal
          lære og utvikle seg gjennom sansning og tenkning, estetiske
          uttrykksformer og praktiske aktiviteter.
        </p>
        <p>
          Kreative og skapende evner bidrar til å berike samfunnet. Samarbeid
          inspirerer til nytenkning og entreprenørskap, slik at nye ideer kan
          omsettes til handling. Elever som lærer om og gjennom skapende
          virksomhet, utvikler evnen til å uttrykke seg på ulike måter, og til å
          løse problemer og stille nye spørsmål.
        </p>
        <p>
          Kunst og kultur omfatter mange skapende og kreative fagområder, som
          påvirker både våre fysiske omgivelser og samfunnsutviklingen. Vår
          estetiske sans utvikles i møte med ulike kulturelle uttrykk, og de
          bidrar til å løfte fram nye perspektiver. Kunst- og kulturuttrykk har
          også betydning for den enkeltes personlige utvikling. Kulturelle
          opplevelser har en egenverdi, og elevene skal få oppleve et variert
          spekter av kulturuttrykk gjennom sin tid i skolen.
        </p>

        <p>
          I et større perspektiv er skapende læringsprosesser også en
          forutsetning for elevenes danning og identitetsutvikling. Skolen skal
          verdsette og stimulere elevenes vitebegjær og skaperkraft, og elevene
          skal få bruke sine skapende krefter gjennom hele grunnopplæringen.
        </p>

        <p>
          Kompetanse er å kunne tilegne seg og anvende kunnskaper og ferdigheter
          til å mestre utfordringer og løse oppgaver i kjente og ukjente
          sammenhenger og situasjoner. Kompetanse innebærer forståelse og evne
          til refleksjon og kritisk tenkning.
        </p>

        <p>
          Ved å reflektere over egen og andres læring kan elever litt etter litt
          utvikle bevissthet om egne læringsprosesser. Elever som lærer å
          formulere spørsmål, søke svar og uttrykke sin forståelse på ulike
          måter, vil gradvis kunne ta en aktiv rolle i egen læring og utvikling.
        </p>

        <p>
          Elevene skal få tid til å utforske dybden i ulike fagområder. Å gi rom
          for dybdelæring forutsetter at skolen tar hensyn til at elevene er
          forskjellige og lærer i ulikt tempo og med ulik progresjon. Det krever
          kunnskap om hvordan elever lærer, hva de kan fra før, og forutsetter
          tett oppfølging av den enkelte. Elever som opplever mestring,
          motiveres til å bli mer utholdende og selvstendige. Prøving og feiling
          kan være en kilde til læring og erkjennelse, og elevene skal
          oppfordres til å prøve seg også når det er usikkert om de vil lykkes.
          Det er skolens oppgave å gi elevene trygghet til å krysse grenser og
          prøve noe vanskelig.
        </p>

        <p>“Om du fikk farge byen” kursene kan gjennomføres i uke 26 og 32.</p>

        <p>Kursene varer fra 09:00-15:00 mandag til fredag.</p>

        <p>Vi tar ideelt imot 25 personer i hver kurs</p>

        <p>Vi er livssynsnøytrale og ikke-politisk.</p>

        <p>
          Fast base/ oppmøtested etter nærmere avtale med Kristiansand kommune.
        </p>

        <p>
          Vi tilbyr praktiske øvelser, fysisk aktivitet og aktiviteter utendørs
          hver dag.
        </p>

        <p>
          Vi bruker god tid på at alle skal finne seg til rette. Det å møte nye
          mennesker med samme interesse er svært positivt med Sommerskolen.
        </p>

        <p>
          Våre kurs legges opp til aktiviteter som alle kan delta på. På dette
          kurset er det mulig at barn med tilrettelagt behov kan delta.
        </p>

        <h3>Helse/Sikkerhet</h3>
        <p>
          Vi bruker verneutstyr, masker og vi bruker de nye miljøvennlige
          sprayene som er kommet på markedet. Vi følger smittevernsregler som er
          gjeldene på aktuelt tidspunkt. Vi spriter hender, bruker handsker og
          maske. Vi oppholder oss mye ute og holder avstand.
        </p>
      </main>

      <Footer />
    </div>
  );
}
