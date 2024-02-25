import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

export const Heading1 = ({ children }: { children: ReactNode }) => {
  return <Heading as="h1">{children}</Heading>;
};

export const Heading2 = ({ children }: { children: ReactNode }) => {
  return <Heading as="h2">{children}</Heading>;
};

export const Heading3 = ({ children }: { children: ReactNode }) => {
  return <Heading as="h3">{children}</Heading>;
};

export const Heading4 = ({ children }: { children: ReactNode }) => {
  return <Heading as="h4">{children}</Heading>;
};
