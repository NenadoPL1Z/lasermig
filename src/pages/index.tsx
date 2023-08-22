import React from "react";
import TitleLayout from "@/layout/TitleLayout";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import {
  OutlinedButton,
  OutlinedButtonRadius,
} from "@/UI/Buttons/OutlinedButton";
import { TagButton } from "@/UI/Buttons/TagButton";

export default function Home() {
  return (
    <TitleLayout>
      <div style={{ marginTop: "50px" }}>
        <DefaultButton>DefaultButton</DefaultButton>
        <OutlinedButton>OutlinedButton</OutlinedButton>
        <OutlinedButtonRadius>1</OutlinedButtonRadius>
        <TagButton>TagButton</TagButton>
        <TagButton>TagButton</TagButton>
      </div>
    </TitleLayout>
  );
}
