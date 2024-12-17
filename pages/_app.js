import "@/styles/globals.scss";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import StoryCard from "@/components/genericComponents/storyCard";
import Page from "@/components/storyblokComponents/page";
import PageBanner from "@/components/pageBanner";
import SectionTitle from "@/components/genericComponents/title";
import ImageTextBlock from "@/components/genericComponents/imageTextBlock";
import Features from "@/components/storyblokComponents/features";
import StoryCardSection from "@/components/storyblokComponents/storyCardSection";
import EmpResponsibilitiesCarousel from "@/components/empRespCarousel";
import CommonCarousel from "@/components/storyblokComponents/commonCarousel";
import LevelupCarousel from "@/components/levelupCarousel";
import ApplicationProcessTabs from "@/components/applicationProcessTabs";
import JobListCards from "@/components/jobListCards";
import EventsInfo from "@/components/evenstInfo";
import CoreOfferings from "@/components/coreOfferings";
import SuccessStory from "@/components/successStory";
import RequestDemo from "@/components/requestDemo";
import KeyPillarsApproach from "@/components/keyPillarsApproach";
import KeyMetrics from "@/components/genericComponents/keyMetrics";
import ImageGridTextBlock from "@/components/genericComponents/imageGridTextBlock";
import TeamExpertise from "@/components/teamExpertise";
import ClientTestimonials from "@/components/clientTestimonials";
import SmartSolutions from "@/components/smartSolutions";
import PitCrew from "@/components/pitCrew";
import CompanyHistory from "@/components/companyHistory";
import CoreValues from "@/components/coreValues";
import AvatarCarousel from "@/components/avatarCarousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HighlightsComponent from "@/components/highlights";
import Layout from "@/components/Layout";
import Locations from "@/components/locations";

const components = {
  storyCard: StoryCard,
  page: Page,
  pageBanner: PageBanner,
  sectionTitle: SectionTitle,
  features: Features,
  feature: ImageTextBlock,
  storyCardSection: StoryCardSection,
  empCarousel: EmpResponsibilitiesCarousel,
  commonCarousel: CommonCarousel,
  levelUpCarousel: LevelupCarousel,
  verticalTabSlider: ApplicationProcessTabs,
  jobListCards: JobListCards,
  eventsSection: EventsInfo,
  coreOfferings: CoreOfferings,
  successStory: SuccessStory,
  requestDemo: RequestDemo,
  keyPillars: KeyPillarsApproach,
  keyMetics: KeyMetrics,
  awardsAndRecognition: ImageGridTextBlock,
  clientCarousel: TeamExpertise,
  clientTestimonial: ClientTestimonials,
  smartSolutions: SmartSolutions,
  pitCrew: PitCrew,
  companyHistory: CompanyHistory,
  coreValues: CoreValues,
  lifeC23: AvatarCarousel,
  header: Header,
  highlights: HighlightsComponent,
  footer: Footer,
  locationsBlock: Locations,
};
import SplashScreen from "@/components/splashScreen";
import { useEffect, useState } from "react";

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed (1 seconds)

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return <SplashScreen />;
  }
  return (
    pageProps?.config?.content && (
      <Layout config={pageProps.config?.content}>
        <Component {...pageProps} />
      </Layout>
    )
  );
}

export default MyApp;
