import {apple, electrical, google} from '../assets';
import { kfaEle } from '../constants';
import styles, { layout } from '../style';

const Billing = () => (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={electrical} alt="billing" className='w-[100%] h-[100%] relative z-[5] ' />
      </div>

{/* gradient for image */}

      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />

<div className={layout.sectionInfo}>
  <h2 className={styles.heading2}>Electrical 
 <br className='sm:block 
  hidden'/> Power Systems</h2>{
    kfaEle.map((works)=>(
    <p className={`${styles.paragraph} max-w-[470px] mt-5`} key={works.id}>{works.desc}</p>
    ))
  }
  <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
    <img src={apple} alt="apple_store" className='w-[128px] h-[42px] 
    object-contain mr-5 cursor-pointer rounded ' />
    <img src={google} alt="google_play" className='w-[128px] h-[42px] 
    object-contain mr-5 cursor-pointer' />
  </div>
</div>
      
    </section>
  )


export default Billing