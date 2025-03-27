import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

//Global props
export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    child: "Lorem Ipsum",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: { child: <h1>Customized component as tag h2</h1>, asChild: true },
  // para desabilitar o atributo do component no sb
  argTypes: {
    child: { table: { disable: true } },
    asChild: { table: { disable: true } },
  },
};
export const SmallHeading: StoryObj<HeadingProps> = {
  args: { child: "Small", size: "sm" },
  argTypes: {
    asChild: { table: { disable: true } },
  },
};
export const MediumHeading: StoryObj<HeadingProps> = {
  args: { child: "Medium", size: "md" },
  argTypes: {
    asChild: { table: { disable: true } },
  },
};
export const LargeHeading: StoryObj<HeadingProps> = {
  args: { child: "Large", size: "lg" },
  argTypes: {
    asChild: { table: { disable: true } },
  },
};
