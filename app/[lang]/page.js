import { getDictionary } from "@/lib/dictionary";

export default async function Home({ params: { lang } }) {
  const { page } = await getDictionary(lang);

  return (
    <section>
      <div>
        <h1>{page.home.title}</h1>
        <p>{page.home.description}</p>
      </div>
    </section>
  );
}
