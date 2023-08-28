/* eslint-disable react/prop-types */
import Button from './Button';
import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard =({icon, title, content, index})=>(
  <div className={`flex flex-row p-6 rounded-[20px] 
  ${index !== features.length-1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} 
    bg-dimBlue`}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain '/>
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px]
      leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px]
      leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="#features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block 
          hidden"/> we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Sed voluptate quas consequuntur dolor saepe libero, 
          perferendis animi nulla dolorum eum minima, dolorem optio 
          quia quos at, dignissimos excepturi similique facilis.</p>

          <Button styles="mt-10"/>
      </div>
      {/* feature section */}
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index)=>(
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>

      
    </section>
  )
}

export default Business