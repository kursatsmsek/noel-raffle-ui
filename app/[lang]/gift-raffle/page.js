import HomeContainer from "@/containers/home-container";
import { getDictionary } from "@/lib/dictionary";

export default async function GiftRaffle({ params: { lang } }) {
  const { page } = await getDictionary(lang);

  return <HomeContainer page={page} />;
}
