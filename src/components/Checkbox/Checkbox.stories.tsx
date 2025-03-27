import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text/Text";
import { Checkbox, CheckboxProps } from "./Checkbox";

//Global props
export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
  // decorators adds a bonus content for the story like description
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm" child="Lorem impusus?"/>
        </div>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
