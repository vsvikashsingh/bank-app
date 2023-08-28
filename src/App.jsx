import styles from './style';
import { Billing, Business, Button, CardDeal, Clients, CTA, FeedbackCard } from './components';
import {Footer, GetStarted, Hero, Navbar, Stats, Testimonials} from './components';

const App = () => {
  return (
    <div className='bg-primary overflow-hidden w-full'>
      {/* Navbar start */}
      <div className={`${styles.paddingX}${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* Navbar end */}
      {/* Main section start */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      {/* Main section end */}
      {/* Others start */}
      <div className={`bg-primary ${styles.paddingX}${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />  
        </div>
      </div>
      {/* Others end */}
    </div>
  )
}

export default App