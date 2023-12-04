import StatsContainer from "@/containers/stats-container";
import { getDictionary } from "@/lib/dictionary";

export default async function Stats({ params: { lang } }) {
  const { page } = await getDictionary(lang);

  return <StatsContainer page={page} />;
}
