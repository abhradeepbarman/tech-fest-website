import React, { useState } from 'react';

const AboutSection = () => {
  const [timer, setTimer] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  setInterval(() => {
    const eventDate = new Date('Mar 27, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = eventDate - now;

    if (gap > 0) {
      // Timing constant
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      // Remaining time
      const remDay = Math.floor(gap / day);
      const remHour = Math.floor((gap % day) / hour);
      const remMinute = Math.floor((gap % hour) / minute);
      const remSecond = Math.floor((gap % minute) / second);

      setTimer({
        days: remDay,
        hours: remHour,
        minutes: remMinute,
        seconds: remSecond,
      });
    }
  }, 1000);

  return (
    <section className="about bg-primary pt-24 sm:pt-28" id="about">
      <div className="container max-w-6xl mx-auto px-5 md:px-2">
        {/* <div className="grid grid-cols-1 md:grid-cols-2"> */}
          <div className="about-content-text flex items-center flex-col mb-12">
            <h2
              data-aos="fade-up" data-aos-offset="10"
              data-aos-once="true"  data-aos-delay="0"
              className="font-medium text-xl tracking-wider mb-6 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
            >
              About <span className='text-2xl'>&nbsp;HORIZON’25</span>
            </h2>
            <p
              data-aos="fade-up" data-aos-offset="10"
              data-aos-once="true"  data-aos-delay="0"
              className="text-base font-normal pt-8 px-6 text-white text-center tracking-wider leading-10"
            >
               &nbsp;&nbsp;&nbsp;&nbsp;   Horizon, our annual tech fest, is a dynamic convergence of innovation and learning. Featuring diverse tech events, workshops, and competitions, it serves as a platform for continuous skill development. From hackathons and robotics challenges to insightful seminars by industry leaders, Horizon explores the cutting edge of technology. Attendees engage in hands-on experiences, collaborative projects, and networking opportunities. This vibrant celebration fosters a culture of curiosity, pushing the boundaries of what's possible in the tech world. Horizon is not just an event; it's a beacon for tech enthusiasts to ignite their passion and explore new frontiers in the ever-evolving tech landscape.
            </p>
            <a
              data-aos="fade-up" data-aos-offset="10"
              data-aos-once="true"  data-aos-delay="0"
              href="/#glimpse"
              className="mt-10"
            >
            <div role="alert" class="max-w-[300px] p-2 bg-dimBlue rounded-full items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex">
              <span class="flex rounded-full  bg-[#00f7ff76] uppercase px-2 py-1 text-sm font-semibold mr-3">Glimpse</span>
              <span class="font-semibold mr-2 text-left flex-auto">HORIZON’24</span>
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="fill-current opacity-75 h-4 w-4"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"></path></svg>
            </div>

            </a>
          </div>

        <div className="countdown-container py-20 px-5 ">
          <div className="container block md:flex max-w-6xl mx-auto">
            <div
              data-aos="fade-up" data-aos-offset="10"
              data-aos-once="true"  data-aos-delay="0"
              className="md:basis-1/4 md:pr-4 flex justify-center flex-col"
            >
              <p className="text-xl font-semibold text-white tracking-normal mb-4 leading-6 text-center md:text-left">
                Event Date
              </p>
              <h6 className="font-semibold text-xl tracking-wider text-accent inline-block uppercase text-center md:text-left">
                March 26th & 27th
              </h6>
            </div>
            <div
              data-aos="fade-up" data-aos-offset="10"
              data-aos-once="true"  data-aos-delay="0"
              className="md:basis-3/4 p-10 items-center grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7"
            >
              <div className="days px-10 py-6 border-gray-600 border-b-2 flex items-center justify-center flex-col text-white rounded mb-4 md:mb-0">
                <h2 className="text-5xl mb-2">{timer.days}</h2>
                <h4>DAYS</h4>
              </div>
              <div className="hours px-10 py-6 border-gray-600 border-b-2 flex items-center justify-center flex-col text-white rounded  mb-4 md:mb-0">
                <h2 className="text-5xl mb-2">{timer.hours}</h2>
                <h4>HOURS</h4>
              </div>
              <div className="minutes px-10 py-6 border-gray-600 border-b-2 flex items-center justify-center flex-col text-white rounded  mb-4 md:mb-0">
                <h2 className="text-5xl mb-2">{timer.minutes}</h2>
                <h4>MINUTES</h4>
              </div>
              <div className="seconds px-10 py-6 border-gray-600 border-b-2 flex items-center justify-center flex-col text-white rounded  mb-4 md:mb-0">
                <h2 className="text-5xl mb-2">{timer.seconds}</h2>
                <h4>SECONDS</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
