import { Typewriter } from 'react-simple-typewriter'

const abt = () => {
  return (
   
    <div className='flex flex-col justify-center items-center gap-8 p-12 my-20  texxt' id='whyus'>
         <h1 className='text-3xl '>Why Chose US ?</h1>
         <p className='max-w-4xl leading-8'>
  At Notapark, we're more than just a clothing brand;
  we're a representation of individuality and self-expression.
  Our journey began with a simple idea:
  to create hoodies that are as unique and diverse as the people who wear them.
  We believe that a hoodie is not just a piece of clothing;
  it's a canvas for your personality, your passions, and your lifestyle.
</p>

         <div className='text-3xl text-amber-800'>
        <Typewriter
    words={['Unique Designe', 'Limited Edition', 'Superior Quality', 'Made In Morocco']}
    loop={false}
    cursor
    cursorStyle='|'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000} 
    cursorColor='red'
    
  />
  </div></div>
  )
}

export default abt