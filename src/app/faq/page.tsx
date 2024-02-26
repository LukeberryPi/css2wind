import { Check, Close, Zap } from "@/icons";

export default function Faq() {
  return (
    <>
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 border-zinc-700 py-24">
        <div className="flex items-center gap-3">
          <Zap className="fill-yellowYes" />
          <h2>
            <span className="font-bold">Tip: </span>When users gets the
            translation right
          </h2>
        </div>
        <div className="flex items-center">
          <div className="flex cursor-default flex-col items-start gap-2 text-white">
            .class &#123;
            <div className="border-2 border-greenGo p-5 text-xl text-greenGo">
              flex-direction: column;
            </div>
            &#125;
          </div>
          <Check className="mx-8 fill-greenGo" />
          <div className="flex cursor-default flex-col items-start gap-2 text-white">
            className=&#34;
            <input className="border-2 border-greenGo bg-transparent p-5 text-xl text-greenGo focus:outline-none" />
            &#34;
          </div>
        </div>
      </section>
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 border-zinc-700 py-24">
        <div className="flex items-center gap-3">
          <Zap className="fill-yellowYes" />
          <h2>
            <span className="font-bold">Tip: </span>When users gets the
            translation wrong
          </h2>
        </div>
        <div className="flex items-center">
          <div className="flex cursor-default flex-col items-start gap-2 text-white">
            .class &#123;
            <div className="border-2 border-alertRed p-5 text-xl text-alertRed">
              flex-direction: column;
            </div>
            &#125;
          </div>
          <Close className="mx-8 fill-alertRed" />
          <div className="flex cursor-default flex-col items-start gap-2 text-white">
            className=&#34;
            <input className="border-2 border-alertRed bg-transparent p-5 text-xl text-alertRed focus:outline-none" />
            &#34;
          </div>
        </div>
      </section>
    </>
  );
}
