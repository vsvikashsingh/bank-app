import { instrumentation } from '../assets';
import { kfaIA } from '../constants';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Instrumentation & <br className='sm:block 
          hidden'/> Automation</h2>
          {
            kfaIA.map((works)=>(
              <p className={`${styles.paragraph} max-w-[470px] mt-5`} key={works.id}>{works.desc}</p>
            ))
          }
          
            <Button styles='mt-10 '/>
      </div>

      <div className={layout.sectionImg}>
        <img src={instrumentation} alt="card" className='w-[512px] h-[512px]'/>
      </div>

    </section>
  )

export default CardDeal