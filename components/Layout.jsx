import { montserrat } from "@/utils/fonts";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useState } from "react";
import { StoryblokComponent } from "@storyblok/react";
import { useRouter } from "next/router";

export default function Layout({ children, config }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const router = useRouter();

  const scroll = () => {
    if (router.asPath.includes("#")) {
      const id = router.asPath.split("#")[1];
      const section = document.getElementById(id);
      if (section) {
        return section.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  };

  useEffect(() => {
    const timeOutId = setTimeout(scroll, 300);

    () => clearTimeout(timeOutId);
  }, [router.asPath]);

  return (
    <div className="relative">
      {/* Backdrop overlay */}
      {isSubmenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          style={{
            backdropFilter: "blur(1px)",
            WebkitBackdropFilter: "blur(1px)",
          }}
        />
      )}
      <div
        className={`flex flex-col min-h-screen ${montserrat.variable} font-montserrat`}
      >
        <NextNProgress height={4} color="#DB2D38" />
        {config?.header?.length > 0 && (
          <StoryblokComponent
            blok={config.header?.[0]}
            onSubmenuOpen={() => setIsSubmenuOpen(true)}
            onSubmenuClose={() => setIsSubmenuOpen(false)}
          />
        )}
        <main className="flex-grow overflow-y-auto">{children}</main>
        {config?.footer?.length > 0 && (
          <StoryblokComponent blok={config.footer?.[0]} />
        )}
      </div>
    </div>
  );
}
