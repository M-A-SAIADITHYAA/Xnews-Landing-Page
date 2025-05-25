import {motion} from "framer-motion"
import { CardBody, CardContainer, CardItem } from './ui/3d-card'

const Features = () => {
    const fadeInUp = {
        hidden:{opacity:0 , y:20},
        visible:{opacity:1, y:0}
    }
  return (
    <div id = "Campaign" className='w-full bg-black min-h-screen sm:py-20 py-12 px-4 md:px-6'>
        <motion.div 
        className="text-center mb-12"
        initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-6xl font-extrabold text-white max-w-4xl leading-tight mx-auto">
                Combat the misinformation with truth that speaks louder than lies 
            </h1>
          </motion.div>
          
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
            <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}>
              <CardContainer className='w-full max-w-sm'>
                <CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border'>
                  <CardItem className="w-full mt-4">
                    <blockquote className="twitter-tweet" data-theme="dark">
                      <p lang="en" dir="ltr">Legacy media companies are desperately trying to kill this platform by any means possible <a href="https://t.co/WzihRGtVth">https://t.co/WzihRGtVth</a></p>
                      &mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1727564703440797745?ref_src=twsrc%5Etfw">November 23, 2023</a>
                    </blockquote> 
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}>
              <CardContainer className='w-full max-w-sm'>
                <CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border'>
                  <CardItem className="w-full mt-4">
                    <blockquote className="twitter-tweet" data-theme="dark">
                      <p lang="en" dir="ltr">Legacy media companies are desperately trying to kill this platform by any means possible <a href="https://t.co/WzihRGtVth">https://t.co/WzihRGtVth</a></p>
                      &mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1727564703440797745?ref_src=twsrc%5Etfw">November 23, 2023</a>
                    </blockquote> 
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}>
              <CardContainer className='w-full max-w-sm'>
                <CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border'>
                  <CardItem className="w-full mt-4">
                    <blockquote className="twitter-tweet" data-theme="dark">
                      <p lang="en" dir="ltr">Legacy media companies are desperately trying to kill this platform by any means possible <a href="https://t.co/WzihRGtVth">https://t.co/WzihRGtVth</a></p>
                      &mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1727564703440797745?ref_src=twsrc%5Etfw">November 23, 2023</a>
                    </blockquote> 
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          </div>
    </div>
  )
}

export default Features