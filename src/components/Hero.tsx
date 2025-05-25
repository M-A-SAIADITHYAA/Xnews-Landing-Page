
import { TypewriterEffectSmooth } from './ui/typewriter-effect'
import { Button } from './ui/button'
import { ShootingStars } from './ui/shooting-stars'
import { StarsBackground } from './ui/stars-background'

const Hero = () => {
  const words = [{

    text:"Only"
        
      },{
        text:"Source"
      },{
        text:"Of"

      },{text:"News"},{
        text:"You"
      },{
        text:"Need"
      }]
  return (
    <div id ="Hero" >
      <div className="flex flex-col items-center justify-center h-[40rem]">
        <p className='text-xs sm:text-5xl text-neutral-600 '>
          Legacy media is corrupted
        </p>
        <TypewriterEffectSmooth words={words}/>
        <div className='flex flex-col md:flex-row  space-x-2 md:space-x-5'>
           <Button className='w-40 h-10 rounded-xl bg-black border border-accent dark:border-white text-white text-md '>
        Visit now
      </Button>
      <Button className='w-40 h-10 rounded-xl bg-black border border-accent dark:border-white text-white text-md '>
        Learn More
      </Button>
      <ShootingStars />
      <StarsBackground />
        </div>
      </div>
     
      
    </div>
   


  )
}

export default Hero