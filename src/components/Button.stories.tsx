import React from "react";
import Button from "./Button";
import "../index.css";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Library/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
  textColor: "white",
  loading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: "Secondary Button",
};
