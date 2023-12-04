import SponsorContainer from "@/containers/sponsor-container";
import StatsContainer from "@/containers/stats-container";
import { getDictionary } from "@/lib/dictionary";

export default async function Sponsor({ params: { lang } }) {
  const { page } = await getDictionary(lang);

  return <SponsorContainer page={page} />;
}
