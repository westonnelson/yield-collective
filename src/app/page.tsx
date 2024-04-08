import Image from "next/image";
import { ConnectButton } from "@/app/thirdweb";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";
import yieldCollectiveIcon from "@public/yieldcollective.svg";

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Header />

        <div className="flex justify-center mb-20">
          <ConnectButton
            client={client}
            appMetadata={{
              name: "Yield Collective",
              url: "https://yieldcollective.xyz",
            }}
          />
        </div>

        <ThirdwebResources />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={yieldCollectiveIcon}
        alt=""
        className="size-[120px] md:size-[120px]"
        style={{
          filter: "(0px 0px 24px #FF66C4)",
        }}
      />

      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        <span className="text-zinc-300 inline-block mx-1"> Welcome to the </span>
        <span className="inline-block -skew-x-6 text-pink-500"> Yield Collective </span>
      </h1>

      <p className="text-zinc-300 text-base">
        The world of DeFi has been forever changed and{" "}
        <code className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1">
          Decentralized Liquidity Provisioning and Market Making
        </code>{" "}
        post-Dencun upgrade require new strategies for long-term performance. Connect your wallet to get started.
      </p>
    </header>
  );
}

function ThirdwebResources() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 justify-center">
      <ArticleCard
        title="Yield Collective Docs"
        href="https://docs.yieldcollective.xyz"
        description="Learn about the Yield Collective and the project vision and the goals of the decentralized community."
      />

      <ArticleCard
        title="Concentrated Liquidity and Automation"
        href="https://docs.yieldcollective.xyz"
        description="Learn about the tools that enable decentralized liquidity provisioning and how to boost your performance."
      />

      <ArticleCard
        title="Automated Market Making and Uniswap V3"
        href="https://docs.uniswap.org"
        description="Learn more about the benefits of decentralized liquidity provisioning on the world's leading DEX, Uniswap."
      />
    </div>
  );
}

function ArticleCard(props: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={props.href}
      target="_blank"
      className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </a>
  );
}
