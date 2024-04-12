import CardsWithDottedLinesBackground from "@components/CardsWithDottedLinesBackground";

// TODO: Should the card declaration be in the settings?
const BuildUseCases = () => (
  <CardsWithDottedLinesBackground
    headline="Get building with these examples."
    cta={{
      url: "https://app.fleek.xyz/templates/",
      text: "see all templates",
    }}
    cardSections={[
      {
        title: "Use-Cases",
        cards: [
          {
            title: "Web3 App",
            description: "Start with a pre-set WAGMI EVM app boilerplate.",
            icon: { src: "/svg/web3-app-icon.svg", alt: "Web3 App" },
            cta: {
              url: "https://github.com/fleekxyz/evm-starter-kit",
              text: "try it",
            },
          },
          {
            title: "Nextra Blog",
            description:
              "Deploy a Nextra static blog ready to start publishing.",
            icon: { src: "/svg/nfas-icon.svg", alt: "Nextra blog" },
            cta: {
              url: "https://github.com/fleekxyz/fleek-demos-blog",
              text: "try it",
            },
          },
          {
            title: "Lens App",
            description: "Start a new Lens-integrated social frontend.",
            icon: { src: "/svg/lens-icon.svg", alt: "Lens App" },
            cta: {
              url: "https://app.fleek.xyz/templates/clo7b9d0a0001ei0owl3w09bd/",
              text: "try it",
            },
          },
        ],
      },
      {
        title: "Frameworks",
        cards: [
          {
            title: "Next.js",
            description: "Work on an IPFS-ready Next.js starter-kit.",
            icon: { src: "/svg/next-icon.svg", alt: "NextJs App" },
            cta: {
              url: "https://github.com/fleekxyz/nextjs-template",
              text: "try it",
            },
          },
          {
            title: "React App",
            description: "Deploy a quick Create React App on Fleek.",
            icon: { src: "/svg/react-icon.svg", alt: "React App" },
            cta: {
              url: "https://github.com/fleekxyz/react-template",
              text: "try it",
            },
          },
          {
            title: "Astro",
            description:
              "Build on a speed-optimized Astro boilerplate.",
            icon: { src: "/svg/astro-icon.svg", alt: "Astro App" },
            cta: {
              url: "https://github.com/fleekxyz/astro-template",
              text: "try it",
            },
          },
        ],
      },
    ]}
  />
);

export default BuildUseCases;
