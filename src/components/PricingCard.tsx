
import {motion} from 'framer-motion'
import { Button } from './ui/button'
import { Check } from 'lucide-react'
import { PriceCounter } from './PricingCounter'

interface PricingCardProps{
    title:string,
    price:number,
    features:string[],
    isPopular?:boolean,
    delay:number

}

export  default function  PricingCard({title,price, features,isPopular,delay}:PricingCardProps){
    return(
    <motion.div
    initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative p-6 rounded-xl backdrop-blur-sm border-3 ${
        isPopular ? ' border-sky-300' : 'border-border/50 '
      }`}>
        {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 rounded-full text-md font-medium  bg-gray-100 text-black ">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold">$</span>
        <span className="text-3xl font-bold">
          <PriceCounter value={price} />
        </span>
        <span className="text-muted-foreground">/mo</span>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`w-full ${
          isPopular
            ? ' bg-sky-600 text-white text-xl font-bold hover:bg-sky-700'
            : 'bg-gray-200 text-xl'
        }`}
      >
        Join Now
      </Button>
    

      </motion.div>
    )
}