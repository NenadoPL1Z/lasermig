import TitleLayout from "@/layout/TitleLayout";
import { Typography } from "@mui/material";
import { headData } from "@/lib/mock/headData";

export default function Home() {
  return (
    <TitleLayout title={headData.titleFull}>
      <div style={{ height: 10000 }}>
        <Typography variant="h1">223</Typography>
      </div>
    </TitleLayout>
  );
}
