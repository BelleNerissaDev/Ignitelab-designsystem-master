import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

//Global props
export default {
  title: "Components/Text",
  component: Text,
  args: {
    child: "Lorem Ipsum",
  },
  // argTypes: {
  //   size: {
  //     options: ["sm", "md", "lg"],
  //     control: {
  //       type: "inline-radio",
  //     },
  //   },
  // },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const CustomComponent: StoryObj<TextProps> = {
  args: { child: <p>Customized component as tag</p>, asChild: true },
  // para desabilitar o atributo do component no sb
  // argTypes: {
  //   child: { table: { disable: true } },
  //   asChild: { table: { disable: true } },
  // },
};
export const SmallText: StoryObj<TextProps> = {
  args: { child: "Small", size: "sm" },
  argTypes: {
    asChild: { table: { disable: true } },
  },
};
export const MediumText: StoryObj<TextProps> = {
  args: { child: "Medium", size: "md" },
  argTypes: {
    asChild: { table: { disable: true } },
  },
};
export const LargeText: StoryObj<TextProps> = {
  args: { child: "Large", size: "lg" },
  argTypes: {
    asChild: { table: { disable: true } },
  },
};
