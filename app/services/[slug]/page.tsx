import Hero from "@/components/Hero";
import AboutStrip from "@/components/AboutStrip";
import ServicesGrid from "@/components/ServicesGrid";
import BookMeetingButton from "@/components/BookMeetingButton";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutStrip />
      <ServicesGrid />
      <BookMeetingButton />
    </>
  );
}
