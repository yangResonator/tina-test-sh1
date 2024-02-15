import { Page } from "../../components/page";
import { client } from "../../tina/__generated__/databaseClient";

export default async function Home() {
  const res = await client.queries.contentQuery({ relativePath: "contact.md" });

  return (
    <Page
      // https://github.com/vercel/next.js/issues/47447
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
