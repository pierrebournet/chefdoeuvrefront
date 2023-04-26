import React from 'react';
import HeaderConnect from '../components/HeaderConnect';
import Hero from '../components/Hero';
import TeaAndCoffeeSection from '../components/TeaAndCoffeeSection';
import InfoSection from '../components/InfoSection';
import SelectionSection from '../components/SelectionSection';
import Producteurs from '../components/Producteurs';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const HomeConnect: React.FC = () => {
  return (
    <>
      <HeaderConnect />
      <Hero/>
      <TeaAndCoffeeSection />
      <InfoSection />
      <SelectionSection />
      <Producteurs />
      <CallToAction />
      <Footer />
    </>
  );
};

export default HomeConnect;
