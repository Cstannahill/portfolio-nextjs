// app/layout.tsx  (root ― wraps the whole site, no locale info here)
import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import "@/styles/project-enhancements.css";
import "@/app/globals.css";
import "@/app/globals-readme.css";

import { Background, Flex } from "@/once-ui/components";
import { effects, style, font } from "@/app/resources";
import classNames from "classnames";

export const metadata = {
  title: "Christian Tannahill · Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      /* this USED to live in the locale‑layout */
      as="html"
      lang="" /* will be overridden at runtime – fine */
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(
        font.primary.variable,
        font.secondary.variable,
        font.tertiary.variable,
        font.code.variable
      )}
    >
      <Flex
        as="body"
        style={{ minHeight: "100vh" }}
        fillWidth
        margin="0"
        padding="0"
        direction="column"
      >
        {/* global background ― only once */}
        <Background
          mask={effects.mask as any}
          gradient={effects.gradient as any}
          dots={effects.dots as any}
          lines={effects.lines as any}
        />

        {/* every other segment is rendered inside */}
        {children}
      </Flex>
    </Flex>
  );
}
