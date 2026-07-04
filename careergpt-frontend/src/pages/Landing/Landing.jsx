import PageContainer from "../../components/common/PageContainer";
import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/Hero";
import BentoGrid from "../../components/landing/BentoGrid";
import StatsBar from "../../components/landing/StatsBar";
import HowItWorks from "../../components/landing/HowItWorks";
import BlueprintPreview from "../../components/landing/BlueprintPreview";

export default function Landing() {
  return (
    <PageContainer>
    <Navbar />
    <Hero />
    <StatsBar />
    <HowItWorks />
    <BentoGrid />
    <BlueprintPreview />
    </PageContainer>
  );
}