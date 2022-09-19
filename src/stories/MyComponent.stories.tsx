import React from "react";
import MyComponent from "../MyComponent";
import {ComponentMeta} from "@storybook/react";

export default {
  title: "Serban/MyComponent",
  component: MyComponent,
  argTypes: {
    width: {control: "select", options: ["size-2400", "size-1200"]},
    height: {control: "select", options: ["size-2400", "size-1200"]},
  }
} as ComponentMeta<typeof MyComponent>;

// User stories.

export const Default = (args) => <MyComponent {...args} />;
Default.args = {
  name: "My first title",
  image: "https://picsum.photos/200",
  loadingText: "Loading stuff ...",
  width: "size-2400",
  height: "size-2400",
};

export const NoImage = () => <MyComponent name={"Second title"} />;
