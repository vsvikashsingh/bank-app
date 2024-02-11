import styles from "../style";
import { robot, power, shield } from "../assets";
import GetStarted from './GetStarted';

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* the discount section */}
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={shield} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">A</
          span> Government approved { " "}
          <span className="text-white">Electrical Contractor and </
          span> Consultant...
          </p>
      </div>
{/* get started section */}
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] 
        text-white ss:leading-[100px] laeding-[75px]"> 
        <br className="sm:block hidden"/> {" "}
         <span className="text-gradient">Turning Ideas into Reality</span>
         </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
      </div>
{/* text section */}
{/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] 
        text-white ss:leading-[100px] laeding-[75px]">Payment Method.</h1> */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>ARS ENGINEERING is a dynamic and progressive company dedicated to excellence in 
Project & maintenance services of Electrical, Instrumentation and Automation. With a 
commitment to meeting customer requirements, we specialize in providing top-notch 
services in Project, Operation & Maintenance. Our expertise extends to the areas Textiles, 
Cement, Chemical, and Pharmaceutical & Metal Industries.
</p>
    </div>

    {/* robot section */}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={power} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
      {/* gradient divs */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient"/>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient " />

    </div>
  </section>
)

export default Hero