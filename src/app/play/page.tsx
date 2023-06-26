import { Arrow, Zap } from "@/icons";

export default function Play() {
  return (
    <main className="flex flex-col justify-center divide-y-2 divide-zinc-800 text-center">
      <section
        id="translate-ongoing"
        className="mx-auto flex max-w-7xl flex-col items-center gap-10 py-[268px]"
      >
        <div className="flex items-center gap-4">
          <Zap className="fill-yellowYes" size={24} />
          <h2>
            <span className="font-bold">Tip: </span>While the user is
            translating
          </h2>
        </div>
        <div className="flex items-center">
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-500">
            .class &#123;
            <span className="border border-berryBlue bg-transparent p-5 text-xl text-berryBlue">
              flex-direction: column;
            </span>
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
    </main>
  );
}
