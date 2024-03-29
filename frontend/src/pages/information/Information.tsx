import Button from "@/components/button/Button";
import News from "../home/News";
import Navbar from "@/components/navbar/Navbar";

export default function Information() {
  function handleSignIn(): void {
    throw new Error("Function not implemented.");
  }


  function handleSignUp(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className='h-auto w-[100vw] flex flex-col  bg-gradient-to-b from-[#47A6C2] to-[#004567]'>
      <header className="fixed top-0 right-0 left-0 z-[9999]">
        <Navbar />
      </header>

      <main className={`mt-28 h-auto w-full`}>
        <section className='w-full h-auto'>
          <div className='flex flex-col w-full h-auto gap-y-16'>
            <div className='flex flex-col justify-center items-center mx-auto w-5/6 gap-y-4 md:gap-y-6'>
              <h1 className='flex justify-center w-[70%] lg:w-full mx-auto text-primary-3 font-montserrat text-m-27 lg:text-m-64 font-bold md:pt-16 text-center'>
                Informations
              </h1>
              <div className='flex flex-col justify-center items-center mx-auto gap-y-6 md:gap-y-16'>
                <div className='w-full md:w-[70%] h-auto'>
                  <p className='text-primary-3 text-k-16 md:text-k-20 w-5/6 md:w-full font-karla font-normal text-center mx-auto pb-4'>
                    Join Us to Clean Our Oceans
                  </p>
                  <p className='text-primary-3 text-k-16 md:text-k-20 w-5/6 md:w-full font-karla font-normal text-center mx-auto pb-4'>
                    Eager to make a positive impact on our oceans? Sign up as a member and be part
                    of initiatives that contribute to a cleaner, healthier marine environment! Scroll
                    down to register and become an essential part of our dedicated community.
                  </p>
                  <p className='text-primary-3 text-k-16 md:text-k-20 w-5/6 md:w-full font-karla font-normal text-center mx-auto pb-4'>
                    Already registered? Access the Map to stay involved and actively contribute to
                    the cause
                  </p>
                </div>
                <div className='flex flex-col lg:flex-row gap-3'>
                  <div>
                    <Button bgColor='bg-primary-4' fontColor='text-primary-1' children='SIGN IN' handleClick={handleSignIn} />
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col w-5/6 justify-start mx-auto mt-32'>
              <div className='flex flex-col lg:flex-row lg:justify-between items-center'>
                <div className='lg:w-2/6 lg:order-1'>
                  <h2 className='font-montserrat text-m-16 lg:text-m-30 font-medium text-primary-3 w-full justify-start mb-6'>
                    Being a Member Means:
                  </h2>
                  <div className='text-primary-3 text-k-16 md:text-k-20 md:w-full font-karla font-normal mb-4 pl-8'>
                    <ul className='list-disc'>
                      <li>Collaborating with a local team within an international association</li>
                      <li>Participating in impactful events and hands-on initiatives</li>
                      <li>Utilizing your skills and gaining new ones</li>
                      <li>Accessing training and tools for awareness, organization, communication, and
                        understanding
                      </li>
                      <li>Staying informed about regional and international news</li>
                      <li>Contributing innovative ideas and initiating projects</li>
                    </ul>
                  </div>
                </div>
                <div className='lg:w-3/6 lg:order-2'>
                  <img src="/images/advantages.webp" alt="advantages-user" className='rounded-lg' />
                </div>
              </div>
            </div>

            <div className='flex flex-col w-5/6 justify-start mx-auto '>
              <div className='flex flex-col lg:flex-row lg:justify-between items-center'>
                <div className='lg:w-2/6 lg:order-2'>
                  <h2 className='font-montserrat text-m-16 lg:text-m-30 font-medium text-primary-3 w-full justify-start mb-6'>
                    This opportunity is perfect for you if:
                  </h2>
                  <div className='text-primary-3 text-k-16 md:text-k-20 md:w-full font-karla font-normal mb-4 pl-8'>
                    <ul className='list-disc'>
                      <li>You're ready to take action and reject defeatism</li>
                      <li>You believe in collective action, innovation, and the power of awareness</li>
                      <li>You have some time, energy, and ideas to share</li>
                      <li>You seek to join a committed, positive, and vibrant team</li>
                      <li>You aspire to be part of the solution at local, national, or international levels</li>
                    </ul>
                  </div>
                </div>
                <div className='lg:w-4/6 lg:order-1'>
                  <img src="/images/beaches.webp" alt="beaches" className='rounded-lg' />
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center mx-auto w-5/6 gap-y-4 md:gap-y-6 pl-8 md:pl-0 mb-10'>
              <div className='flex flex-col md:justify-center md:items-center md:mx-auto gap-y-6 md:gap-y-8'>
                <div className='w-full md:w-[70%] h-auto'>
                  <p className='text-primary-3 text-k-16 md:text-k-20 w-5/6 md:w-full font-karla font-normal text-center mb-4'>
                    Register today and become an essential part of our efforts to clean our oceans!
                  </p>
                </div>
                <div className='flex flex-col lg:flex-row gap-3'>
                  <div>
                    <Button bgColor='bg-primary-4' fontColor='text-primary-1' children='SIGN UP' handleClick={handleSignUp} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


