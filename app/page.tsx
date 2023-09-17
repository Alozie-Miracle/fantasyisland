
import { PageLayout } from '@/components'
import Image from 'next/image'
import styles from "@/styles/home.module.css"
import { services } from '@/utils/service'

import chat from '@/assets/cryptocurrency_chat.png'
import Hero from '@/components/Hero'

export default function Home() {
  return (

    <PageLayout>
      <>
      
        <main>
            {/* <div className='h-[60vh] lg:h-[100vh] relative '>
                <img src='/img/land_1.png' alt='Home Page Image' className='h-[60%] w-[100%] lg:h-[90%] '  />
                <div className='text-center absolute top-[12%] '>
                    <div className='text-[12px] lg:text-[16px] text-[#CCCCCC] font-500 flex w-[15%] lg:w-[20%] justify-between gap-[6px] lg:gap-[18px] ml-[15%] lg:m-auto mb-[15px]  '>
                        <p>Luxury</p>
                        <Image src='/img/star.svg' height={50} width={50} alt='STAR' />
                        <p>Discreet</p>
                        <Image src='/img/star.svg' height={50} width={50} alt='STAR' />
                        <p>Sensual</p>
                        <Image src='/img/star.svg' height={50} width={50} alt='STAR' />
                        <p>Realistic</p>
                    </div>
                    <p className='text-[30px] lg:text-[80px] font-700 mb-[15px] w-[60%] m-auto mb-[31px] '>
                        Welcome to a world of boundless <span className='text-[#4A36EC] '>desires.</span>
                    </p>
                    <button type='button' className='bg-[#4A36EC] text-[#CCCCCC] m-auto mb-[50px] py-[10px] px-[20px] lg:py-[15px] lg:px-[25px] rounded-[10px] '>CONTACT US</button>
                    <p className=' m-auto mb-[18px] text-[16px]  '>Scroll Down</p>
                    <Image src='/img/arrow.svg' height={30} width={30} alt='arrow' className={styles.bounce} style={{margin:'auto'}} />

                    <div className='absolute bottom-5 right-10'>
                      <Image src={chat} alt='chat' className='text-white cursor-pointer' />
                    </div>
                </div>
            </div> */}
            <Hero />

              <div className='bg-[#1B1B1B] text-center py-[50px] lg:py-[100px] lg:text-[48px] font-700 relative '>
                  <p className='w-[50%] m-auto'>Exploring Boundaries, Embracing Desires: <span className='text-[#4A36EC] '>Welcome to Fantasy Island</span></p>
              </div>
            
            <section className=' lg:flex justify-around lg:py-[60px] py-[30px] '>
                <div className='w-[95%] m-auto lg:m-[0] lg:w-[40%] '>
                    <img src='/img/land_2.png' height={100} width={100} alt='Image 2' className='w-[100%] height-[100%] ' />
                </div>

                <div className=' w-[95%] m-auto lg:m-[0px] lg:w-[40%] text-left '>
                      <p className='text-[#4A36EC] text-[15px] font-700 mb-[15px] '>About</p>
                      <p className=' font-700  text-[20px] lg:text-[45px] text-[#CCCCCC] '>Embark on an enchanting Journey to island where <span className=' text-[#4A36EC]'>curiosity knows no bounds</span></p>
                      <p className='text-[12px] lg:text-[18px] font-500 text-#CCCCCC '> At Fantasy Island, we believe that human desires are as diverse as the colors of the rainbow, and we're here to celebrate the beauty of each unique shade. Our journey began with the shared passion of individuals who believe in the power of consensual exploration, trust, and the enchantment of desire. Our BDSM information website is a testament to our commitment to educate, empower, and ignite the flames of your deepest fantasies

Safety is paramount in the BDSM world, and we prioritize your well-being above all else. We provide comprehensive resources on consent, risk-awareness, and communication to ensure your journey is one of self-discovery and enlightenment.</p>
                </div>

            </section>

            <div className='w-[80%] m-auto '>
                <img src="/img/rope-back.png" alt="Rope Back"  className='w-[100%] '/>
            </div>

            <section className='w-[95%] mb-[130px] m-auto'>
                <div className='mb-[58px] text-center pt-[120px] '>
                    <p className='text-[#4A36EC] text-[16px] font-700  '>OUR SERVICES</p>
                    <p className='text-[32px] text-[#CCCCCC]'>Explore, Discover, Learn</p>
                    <p>Availability of toys, supplement and lubricant within in-house authorization.</p>
                </div>

                <div className=' flex gap-[20px] items-center flex-wrap relative '>

                  {services.map((service) => {
                    return(
                          <div className='rounded-[10px] border-[2px] border-[#1B1B1B] h-[24px] w-[60px] lg:h-[45px] lg:w-[120px] text-[#CCCCCC] text-center p-auto  text-[8px] lg:text-[16px] font-600 flex items-center justify-center ' key={service.id}>Bondage</div>
                    )
                  })}
                  <div className=' absolute w-[80%] lg:w-[50%]  rounded-[15px] left-[9%] lg:left-[25%]  bg-[#1B1B1B]/[.95] text-center py-[15px] '>
                        <p className='mb-[42px] text-[16px] lg:text-[32px] font-600 '>Embark on a voyage of self-discovery, Sensuality, and consensual exploration</p>
                        <button className='text-[#CCCCCC] bg-[#4A36EC] rounded-[5px] py-[8px] px-[14px] lg:py-[15px] lg:px-[25px] text-[12px] lg:text-[16px] m-auto '>View Services</button>
                  </div>
                </div>
            </section>

            
                    <div className='mb-[130px] w-[90%] m-auto  '>
                      <img src="/img/land_3.png" alt="Image 3" />
                    </div>
                    <p className='text-[#CCCCCC] text-center text-[32px] font-600 py-[130px] bg-[#1B1B1B] '>At Fantasy Island, we celebrate the rich tapestry of human desire, where fantasies become reality, one click at a time.</p>
            
        </main>

        </>
    </PageLayout>
    

  )
}
