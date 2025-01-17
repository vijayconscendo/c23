import Head from "next/head";
import Layout from "../components/Layout";
import Page from "../components/storyblokComponents/page";

import { useStoryblokState, getStoryblokApi } from "@storyblok/react";

export default function Slug({ story, config }) {
  story = useStoryblokState(story);

  return (
    <div>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page blok={story.content} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  let slug = params.slug ? params.slug.join("/") : "home";
  
  let sbParams = {
    version: process.env.STORYBLOK_VERSION, // or 'published'
    token: process.env.STORYBLOK_ACCESS_TOKEN,
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let { data: config } = await storyblokApi.get("cdn/stories/config", sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      config: config ? config.story : false,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: process.env.STORYBLOK_VERSION,
    token: process.env.STORYBLOK_ACCESS_TOKEN,
  });

  let paths = [];

  Object.keys(data.links).forEach((linkKey) => {
    if (
      data.links[linkKey].is_folder ||
      data.links[linkKey].slug === "config"
    ) {
      return;
    }

    const slug = data.links[linkKey].slug;

    let splittedSlug =
      data.links[linkKey].slug === "home" ? [] : slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });
  
  return {
    paths: paths,
    fallback: true,
  };
}
