import Navbar from './components/Navbar/Navbar';
import ChatbotButton from './components/ChatbotButton/ChatbotButton';
import HomeSection from './components/HomeSection/HomeSection';
import LogisticsSection from './components/LogisticsSection/LogisticsSection';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import StatsSection from './components/StatsSection/StatsSection';
import TestimonialCard from './components/TestimonialCard/TestimonialCard';
import PartnerGrid from './components/PartnerGrid/PartnerGrid';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <ChatbotButton />
      <LogisticsSection />
      <WhyChooseUs />
      <BenefitsSection />
      <StatsSection />
      <TestimonialCard />
      <PartnerGrid />
      <Footer />
    </>
  );
}
