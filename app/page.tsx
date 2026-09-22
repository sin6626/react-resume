import { SinEducation } from "./components/SinEducation";
import { SinEvaluation } from "./components/SinEvaluation";
import { SinHeader } from "./components/SinHeader";
import { SinOpen } from "./components/SinOpen";
import { SinPraise } from "./components/SinPraise";
import { SinProject } from "./components/SinProject";
import { SinTechnicalStack } from "./components/SinTechnicalStack";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-200 pb-10 mt-10 flex flex-col gap-10">
        <SinHeader></SinHeader>
        <SinEducation></SinEducation>
        <SinPraise></SinPraise>
        <SinTechnicalStack></SinTechnicalStack>
        <SinProject></SinProject>
        <SinOpen></SinOpen>
        <SinEvaluation></SinEvaluation>
      </div>

    </div>
  );
}
