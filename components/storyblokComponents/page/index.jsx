import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

function Page({ blok }) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok?.body?.length > 0 &&
        blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </main>
  );
}

export default Page;
