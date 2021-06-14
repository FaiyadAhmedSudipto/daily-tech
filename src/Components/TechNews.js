import React from 'react';
// import security from '../../../images/security.jpg';
// import clean from '../../../images/clean.jpg';
// import speed from '../../../images/speed.jpg';
// import './BlogInfo.css'
import { useHistory } from 'react-router';
import TechNewsDesign from './TechNewsDesign';
import infinix from './Images/Infinix.PNG'
import Bezos from './Images/bezos.PNG'
import walton from './Images/walton.PNG'


const TechNewsData = [
  {
    title: 'Infinix with 160W',
    description: 'First Charging! Yes first charging which is a grate invention of the science and it is one of the main critaria when purchasing a phone. And now Infinix may come in the super first charging team. From the news of XDA Developers, Infinix will come with a new smartphone which is support upto 160W Ultra Flash Charging system. Hopefully, the charger will come out of the box.',
    author: 'Marie Jerry',
    img: infinix,
    date: '6 June 2021',
    search: 'computer-security-tips',
    link: "https://www.facebook.com/atctoto/photos/a.577000485764198/2447670275363867/"
  },
  {
    title: 'Space Travel with Jeff Bezos',
    description: 'Space Travelling, a matter of love and expectation to all. Nothing another to the founder of Amazon, Jeff Bezos. He will go to make a visit in the space in upcoming July. His company Blue Origin has made a their first ever Cru Rocket called, New Shepard. Bezos will pay his visit to the space with this Cru Rocket. It will be a super experience for him.',
    author: 'Samuel Tyler',
    img: Bezos,
    date: '10-10-2021',
    search: 'computer-security-tips',
    link: 'https://www.facebook.com/atctoto/photos/a.577000485764198/2445135475617347/'
  },
  {
    title: 'How to Speed Up Your Old MacOS Laptop',
    description: 'In the Covid-19 pandemic, the shortage and price of computer and electric parts are going higher and higher. We need to import parts from other countries, so the price is also very high in Bangladesh. At this moment, if we can make parts own, the price may come down. Bangladeshi company Walton has taken such a plane. They will create PCB(Printed Mother Board) in Bangladesh.',
    author: 'Albert Philip',
    img: walton,
    date: '14 April 2021',
    search: 'computer-security-tips',
    link: 'https://www.facebook.com/atctoto/photos/a.577000485764198/2445097285621166/'
  }
]

const TechNews = () => {
  // const history = useHistory()
  // const allBlogs = () => {
  //     history.push(`/blogPage`);
  // }
  return (

    // <section className="grid grid-cols-3 gap-4">
      /* <div className="section-header text-center mt-3">
        <h2 className="fw-bold">LATEST BLOGS</h2>
        <h5 className='text-secondary'>Check out the latest Tips and Tricks</h5>
      </div> */
      <div className="grid grid-cols-2 gap-4">
        {
          TechNewsData.map(tech => <TechNewsDesign tech={tech} key={tech.title} />)
        }
      </div>
    // </section>
  );
};

export default TechNews;