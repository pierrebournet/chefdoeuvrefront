import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TeaAndCoffeeSection from '../components/TeaAndCoffeeSection';
import InfoSection from '../components/InfoSection';
import SelectionSection from '../components/SelectionSection';
import Producteurs from '../components/Producteurs';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
    <Header />
      <Hero />
      <TeaAndCoffeeSection />
      <InfoSection />
      <SelectionSection/>
      <Producteurs />
      <CallToAction/>
      <Footer/>
    </>
  );
};

export default Home;