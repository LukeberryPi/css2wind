import { Arrow, Zap } from "@/icons";

export default function Play() {
  return (
    <main className="flex-col text-md flex text-center justify-center">
      {/* TODO: Remove hardcoded value for py */}
      <section
        id="translate-ongoing"
        className="border-b container mx-auto gap-12 border-zinc-700 items-center flex"
      >
        <div className="flex items-center gap-4">
          <Zap className="fill-yellowYes" size={24} />
          <h2>
            <span className="font-bold">Tip: </span>While the user is
            translating
          </h2>
        </div>
        <div className="flex items-center">
          <div className="text-zinc-500 cursor-default items-start flex-col flex gap-2">
            .class &#123;
            <span className="text-xl text-berryBlue border border-berryBlue bg-transparent p-5">
              flex-direction: column;
            </span>
            &#125;
          </div>
          <Arrow className="fill-zinc-50 mx-8" />
          <div className="text-zinc-500 cursor-default items-start flex-col flex gap-2">
            className=&#34;
            <input
              className={`text-xl text-zinc-50 border border-zinc-50 focus:outline-none bg-transparent p-5`}
            ></input>
            &#34;
          </div>
        </div>
      </section>
    </main>
  );
}
