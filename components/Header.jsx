import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, User } from "lucide-react";
import { useRouter } from "next/router";
import Image from "next/image";
import downArrow from "@/public/Images/icons/downArrow.png";
import searchIcon from "@/public/Images/icons/search.png";

// Styles
import styles from "./components.module.scss";
import ImageWrapper from "./storyblokComponents/imageWrapper";
import { storyblokEditable } from "@storyblok/react";

export default function Header({ onSubmenuOpen, onSubmenuClose, blok }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState({});

  const router = useRouter();

  const toggleMobileSubmenu = (title) => {
    setExpandedMobileItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const closeOverlayMnenu = () => {
    setHoveredItem(null);
    onSubmenuClose();
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    !isMobileMenuOpen && setExpandedMobileItems({});
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`bg-white sticky top-0 z-50 ${styles.header}`}
      {...storyblokEditable(blok)}
    >
      <div className={`mx-auto ${styles.headerContainer}`}>
        <div className={`${styles.headerSection}`}>
          {/* Logo */}
          {blok?.logo?.length > 0 && (
            <Link href="/" className={styles.logo}>
              <ImageWrapper
                blok={blok.logo?.[0]}
                altText="c23 logo"
                {...storyblokEditable(blok.logo?.[0])}
              />
            </Link>
          )}

          {/* Mobile menu button */}
          <div className="lg:hidden ml-auto inline-flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex ${styles.desktopNav}`}>
            {blok?.menu?.length > 0 && (
              <ul className="flex items-center h-full">
                {blok.menu.map((item) => {
                  const storyblokUrl =
                    item?.link?.cached_url || item?.link?.url || "/";
                  const currentPath = window.location.pathname?.split("/")?.[1];
                  const url = storyblokUrl?.split("/")?.[0] || "";
                  const isActive = url === currentPath;
                  return (
                    <li
                      key={item?._uid}
                      className="relative h-full"
                      onMouseEnter={() => {
                        setHoveredItem(item?.title);
                        item?.subMenu?.length > 0 && onSubmenuOpen();
                      }}
                      onMouseLeave={() => {
                        setHoveredItem(null);
                        onSubmenuClose();
                      }}
                    >
                      <Link
                        href={item?.link?.cached_url || item?.link?.url}
                        className={`flex items-center h-full text-textsecondary hover:text-primary font-medium ${
                          styles.navItem
                        } ${isActive ? `${styles.activeNavItem}` : ""}`}
                        onClick={closeOverlayMnenu}
                      >
                        {item?.title}
                        {item?.subMenu?.length > 0 && (
                          <Image
                            src={downArrow}
                            width={10}
                            className="ml-1"
                            height={8}
                            alt="downArrow"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Contact Button & Search (hidden on mobile) */}
          <div
            className={`hidden lg:flex items-center ${styles.desktopNavRight}`}
          >
            {/* <button type="button" className={styles.search}>
              <Image src={searchIcon} alt="search Icon" />
            </button> */}
            <Link
              href="/contact"
              className={`text-textsecondary hover:text-white hover:bg-primary px-4 py-2 rounded-md transition duration-300 ${styles.contactLink}`}
            >
              Contact us
            </Link>
            <button className="rounded-full bg-gray-500 h-9 w-9 text-white flex items-center justify-center">
              <User />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden bg-white ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {blok?.menu?.length > 0 && (
          <div className="space-y-1 px-2 pb-3 pt-2 h-[100vh] overflow-y-auto">
            {blok.menu.map((item) => {
              const storyblokUrl =
                item?.link?.cached_url || item?.link?.url || "/";
              const currentPath = window.location.pathname?.split("/")?.[1];
              const url = storyblokUrl?.split("/")?.[0] || "";
              const isActive = url === currentPath;
              return (
                <div key={item?._uid}>
                  <button
                    className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 ${
                      isActive ? `text-red-600` : ""
                    }`}
                    onClick={closeOverlayMnenu}
                  >
                    <Link href={item?.link?.cached_url || item?.link?.url}>
                      {item?.title}
                    </Link>
                    {item?.subMenu?.length > 0 && (
                      <ChevronRight
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMobileSubmenu(item?.title);
                        }}
                        className={`h-5 w-5 transition-transform ${
                          expandedMobileItems[item?.title] ? "rotate-90" : ""
                        }`}
                      />
                    )}
                  </button>
                  {item?.subMenu?.length > 0 &&
                    expandedMobileItems[item?.title] && (
                      <div className="ml-4 mt-2">
                        {item?.subMenu?.map((section) => (
                          <div key={section?._uid} className="mb-4">
                            <h3 className="mb-2 text-sm font-semibold text-red-600">
                              <Link
                                href={
                                  section?.link?.cached_url ||
                                  section?.link?.url
                                }
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {section?.title}
                              </Link>
                            </h3>
                            <ul className="space-y-2">
                              {section?.subMenuItems?.map((subItem) => (
                                <li
                                  key={subItem?._uid}
                                  onClick={closeOverlayMnenu}
                                  className="block text-sm text-gray-500 hover:text-red-600 cursor-pointer"
                                >
                                  <Link
                                    href={
                                      subItem?.link?.url ||
                                      subItem?.link?.cached_url ||
                                      ""
                                    }
                                  >
                                    {subItem?.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              );
            })}
            <Link
              href="/contact"
              className="block w-full rounded-md bg-red-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-red-700"
            >
              Contact us
            </Link>
          </div>
        )}
      </div>

      {/* Desktop Submenu */}
      {blok?.menu?.length > 0 &&
        blok?.menu.map(
          (item) =>
            item?.subMenu?.length > 0 &&
            hoveredItem === item?.title && (
              <div
                key={item?._uid}
                className={`absolute left-0 right-0 z-50 hidden bg-white shadow-lg md:block ${styles.desktopSubMenu}`}
                onMouseEnter={() => {
                  setHoveredItem(item?.title);
                  onSubmenuOpen();
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  onSubmenuClose();
                }}
              >
                <div className="mx-auto h-full">
                  <div className="flex h-full">
                    {/* Left side heading section */}
                    <div className={`bg-primary ${styles.pageTitleBox}`}>
                      <h2 className="text-white">{item?.SubMenuHeading}</h2>
                    </div>

                    {/* Right side submenu items */}
                    <div className={`grid grid-cols-4 ${styles.submenuBlock}`}>
                      {item?.subMenu?.map((section) => (
                        <div key={section?._uid} className={styles.submenuList}>
                          <h3 className="text-primary">
                            <Link
                              href={
                                section?.link?.cached_url || section?.link?.url
                              }
                              onClick={closeOverlayMnenu}
                            >
                              {section?.title}
                            </Link>
                          </h3>
                          <ul className={styles.ul}>
                            {section?.subMenuItems?.map((subItem) => (
                              <li
                                key={subItem?._uid}
                                className="block font-normal text-black hover:text-primary hover:font-semibold cursor-pointer"
                                onClick={closeOverlayMnenu}
                              >
                                <Link
                                  href={
                                    subItem?.link?.url ||
                                    subItem?.link?.cached_url ||
                                    ""
                                  }
                                >
                                  {subItem?.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
    </nav>
  );
}
