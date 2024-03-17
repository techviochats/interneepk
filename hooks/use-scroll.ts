import React from "react";

export const useScroll = (id: string) =>
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

export const useShadow = () => {
  const [shadow, setShadow] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    if (window.scrollY > 100) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  }, [shadow]);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return shadow;
};
