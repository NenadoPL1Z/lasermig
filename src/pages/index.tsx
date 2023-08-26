import React from "react";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import {
  OutlinedButton,
  OutlinedButtonRadius,
} from "@/UI/Buttons/OutlinedButton";
import { TagButton } from "@/UI/Buttons/TagButton";

export default function Home() {
  return (
    <div style={{ height: 2000 }}>
      <DefaultButton>DefaultButton</DefaultButton>
      <OutlinedButton>OutlinedButton</OutlinedButton>
      <OutlinedButtonRadius>1</OutlinedButtonRadius>
      <TagButton>TagButton</TagButton>
      <TagButton>TagButton</TagButton>
    </div>
  );
}
