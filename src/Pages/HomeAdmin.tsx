import React from 'react';
import HeaderAdmin from '../components/HeaderAdmin';
import TeaAndCoffeeSection from '../components/TeaAndCoffeeSection';
import InfoSection from '../components/InfoSection';
import SelectionSection from '../components/SelectionSection';
import Producteurs from '../components/Producteurs';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const HomeAdmin: React.FC = () => {
  return (
    <>
      <HeaderAdmin />
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

export default HomeAdmin;
