import { Arrow, Check, Zap, Close } from "@/icons";

export default function Help() {
  return (
    <main className="flex flex-col justify-center divide-y-2 divide-zinc-800 text-center">
      <section
        id="translate-ongoing"
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 border-zinc-700 py-24"
      >
        <div className="flex items-center gap-3">
          <Zap className="fill-yellowYes" size={24} />
          <h2>
            <span className="font-bold">Tip: </span>While the user is
            translating
          </h2>
        </div>
        <div className="flex items-center">
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-500">
            .class &#123;
            <div className="border border-berryBlue bg-transparent p-5 text-xl text-berryBlue">
              flex-direction: column;
            </div>
            &#125;
          </div>
          <Arrow className="mx-8 fill-zinc-50" />
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-500">
            className=&#34;
            <input
              className={`border border-zinc-50 bg-transparent p-5 text-xl text-zinc-50 focus:outline-none`}
            ></input>
            &#34;
          </div>
        </div>
      </section>
      <section
        id="translate-correct"
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 border-zinc-700 py-24"
      >
        <div className="flex items-center gap-3">
          <Zap className="fill-yellowYes" size={24} />
          <h2>
            <span className="font-bold">Tip: </span>When users gets the
            translation right
          </h2>
        </div>
        <div className="flex items-center">
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-500">
            .class &#123;
            <div className="border-2 border-greenGo bg-inherit p-5 text-xl font-medium text-greenGo">
              flex-direction: column;
            </div>
            &#125;
          </div>
          <Check className="mx-8 fill-greenGo" />
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-500">
            className=&#34;
            <input
              className={`border-2 border-greenGo bg-transparent p-5 text-xl text-greenGo focus:outline-none`}
            ></input>
            &#34;
          </div>
        </div>
      </section>
      <section
        id="translate-incorrect"
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 border-zinc-700 py-24"
      >
        <div className="flex items-center gap-3">
          <Zap className="fill-yellowYes" size={24} />
          <h2>
            <span className="font-bold">Tip: </span>When users gets the
            translation wrong
          </h2>
        </div>
        <div className="flex items-center">
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-500">
            .class &#123;
            <div className="border-alertyellow text-alertyellow border-2 bg-inherit p-5 text-xl font-medium">
              flex-direction: column;
            </div>
            &#125;
          </div>
          <Close className="fill-alertyellow mx-8" />
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-500">
            className=&#34;
            <input
              className={`border-alertyellow text-alertyellow border-2 bg-transparent p-5 text-xl focus:outline-none`}
            ></input>
            &#34;
          </div>
        </div>
      </section>
    </main>
  );
}
