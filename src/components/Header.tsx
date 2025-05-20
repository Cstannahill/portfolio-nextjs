"use client";
import { useEffect, useState, useTransition } from "react";
import { Flex, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";
import { normalizedRoutes, display } from "@/app/resources";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { i18n } from "@/app/resources/config";
import { home, work, blog, gallery, person } from "@/app/resources";
const routes = normalizedRoutes;
type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = "en-GB",
}) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale(); // 'en', 'es', etc.

  const [isPending, startTransition] = useTransition();

  function handleLanguageChange(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <>
      <Flex
        className={styles.mask}
        position="fixed"
        zIndex={9}
        fillWidth
        minHeight="80"
        justifyContent="center"
      ></Flex>
      <Flex
        style={{ height: "fit-content" }}
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        justifyContent="center"
      >
        <Flex
          paddingLeft="12"
          fillWidth
          alignItems="center"
          textVariant="body-default-s"
        >
          {display.location && <Flex hide="s">{person.location}</Flex>}
        </Flex>
        <Flex fillWidth justifyContent="center">
          <Flex
            background="surface"
            border="neutral-medium"
            borderStyle="solid-1"
            radius="m-4"
            shadow="l"
            padding="4"
            justifyContent="center"
          >
            <Flex gap="4" textVariant="body-default-s">
              {routes["/"] && (
                <Link href="/">
                  <ToggleButton prefixIcon="home" selected={pathname === "/"}>
                    <Flex paddingX="2" hide="s">
                      {home.label}
                    </Flex>
                  </ToggleButton>
                </Link>
              )}
              <Link href="/readme">
                <ToggleButton
                  prefixIcon="book"
                  selected={
                    pathname === "/readme" || pathname.startsWith("/readme")
                  }
                >
                  <Flex paddingX="2" hide="s">
                    README
                  </Flex>
                </ToggleButton>
              </Link>
              {routes["/work"] && (
                <Link href="/work">
                  <ToggleButton
                    prefixIcon="grid"
                    selected={pathname.startsWith("/work")}
                  >
                    <Flex paddingX="2" hide="s">
                      {work.label}
                    </Flex>
                  </ToggleButton>
                </Link>
              )}
              {routes["/blog"] && (
                <Link href="/blog">
                  <ToggleButton
                    prefixIcon="book"
                    selected={pathname.startsWith("/blog")}
                  >
                    <Flex paddingX="2" hide="s">
                      {blog.label}
                    </Flex>
                  </ToggleButton>
                </Link>
              )}
              {routes["/gallery"] && (
                <Link href="/gallery">
                  <ToggleButton
                    prefixIcon="gallery"
                    selected={pathname.startsWith("/gallery")}
                  >
                    <Flex paddingX="2" hide="s">
                      {"Gallery"}
                    </Flex>
                  </ToggleButton>
                </Link>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth justifyContent="flex-end" alignItems="center">
          <Flex
            paddingRight="12"
            justifyContent="flex-end"
            alignItems="center"
            textVariant="body-default-s"
            gap="20"
          >
            {routing.locales.length > 1 && (
              <Flex
                background="surface"
                border="neutral-medium"
                borderStyle="solid-1"
                radius="m-4"
                shadow="l"
                padding="4"
                gap="2"
                justifyContent="center"
              >
                <Flex hide="s">
                  {display.time && <TimeDisplay timeZone={person.location} />}
                </Flex>{" "}
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
