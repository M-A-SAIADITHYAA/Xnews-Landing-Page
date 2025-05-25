
import {motion} from 'framer-motion'
import PricingCard from './PricingCard';
const plans = [
  {
    title: 'Basic',
    price: 29,
    features: [
      'Access to editorial dashboard',
      'Basic article publishing tools',
      'Email support',
      'Monthly performance reports'
    ]
  },
  {
    title: 'Pro',
    price: 79,
    features: [
      'Everything in Basic',
      'Advanced publishing tools',
      'Real-time analytics',
      'Content scheduling',
      'Social media auto-posting',
      'Priority email support'
    ],
    isPopular: true
  },
  {
    title: 'Business',
    price: 149,
    features: [
      'Everything in Pro',
      'Multi-user access',
      'Custom branding',
      'Content syndication to partner sites',
      'Dedicated account manager',
      'API access and integrations',
      'Weekly editorial insights'
    ]
  }
];


const Pricing = () => {
  return (
    <div id ="Pricing" className=''>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className='text-center '>

    {/* <div className=" flex justify-center items-center"> */}
  <h1 className="font-extrabold md:text-6xl mb-4">Pricing</h1>
{/* </div> */}
  <p className='text-muted-foreground text-2xl mb-20'>Support Xnews to fight legacy media</p>


  </motion.div>
  <div className='grid  grid-cols-1 md:grid-cols-3 gap-5 mx-4 mb-4'>{
    plans.map((plan,index)=>(
        <PricingCard
        key={index}
        {...plan}
        delay={index*0.2}
        />

    ))}

  </div>


        
        
    
    
    </div>
  )
}

export default Pricing