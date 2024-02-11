import styles from "../style";
import Button from "./Button";

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY}
    ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px]
    box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Our Expert Team is ready to assist you.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>POY, FDY- (Oerlikon Barmag , Beijing Chonglee, TMT), CP –Continuous Poly- Polytex
 PSF & RPSF- CTMTC, Boretech, Neumag , Shanghai pacific, Bottle to Bottle grade chips & 
 Wash line- Boretech , Master batch- Bustroff / Coperion, Process House/Knitting/Dyeing.
 Captive Power Plant, Chemical , Solar, Pharmaceutical, Cement Plant. </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  )


export default CTA