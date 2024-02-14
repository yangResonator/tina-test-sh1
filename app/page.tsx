import { Page } from "../components/page";
import { client } from "../tina/__generated__/databaseClient";

export default async function Home( { params }: { params: { slug: string } } ) {
  const res = await client.queries.page({ relativePath: "home.md" });
  // const tinaProps = await client.queries.page({
  //   relativePath: `${params.filename}.md`,
  // });

  console.log("home page !!!");

  console.log(params);
  
  
  return (
    <Page
      // https://github.com/vercel/next.js/issues/47447
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
