import GiftRaffleContainer from "@/containers/gift-raffle-container";
import { getDictionary } from "@/lib/dictionary";

export default async function GiftRaffle({ params: { lang } }) {
  const { page } = await getDictionary(lang);

  return <GiftRaffleContainer page={page} />;
}
