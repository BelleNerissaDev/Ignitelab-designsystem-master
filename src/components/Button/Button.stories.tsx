import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

//Global props
export default {
  title: "Components/Button",
  component: Button,
  args: {
    child: "Click",
  },
  argTypes: {},
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
