import { getStoryblokApi } from "@storyblok/react";
import React from "react";

function ContactUs() {
  return <div>ContactUs</div>;
}

export default ContactUs;
export async function getStaticProps({ preview }) {
  let sbParams = {
    version: preview ? "draft" : "published", // or 'published'
    token: process.env.STORYBLOK_ACCESS_TOKEN,
  };

  const storyblokApi = getStoryblokApi();
  let { data: config } = await storyblokApi.get("cdn/stories/config", sbParams);

  return {
    props: {
      config: config ? config.story : false,
    },
    revalidate: 3600,
  };
}
