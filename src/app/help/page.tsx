import { Arrow, Check, Zap, Close } from "@/icons";

export default function Help() {
  return (
    <main className="flex-col text-md pt-20 flex text-center justify-center">
      <section
        id="translate-ongoing"
        className="border-b container mx-auto gap-10 border-zinc-900 flex-col flex items-center justify-center py-36"
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
            <div className="text-xl p-5 text-berryBlue border border-berryBlue bg-transparent">
              flex-direction: column;
            </div>
            &#125;
          </div>
          <Arrow className="fill-zinc-50 mx-8" />
          <div className="text-zinc-500 cursor-default items-start flex-col flex gap-2">
            className=&#34;
            <input
              className={`text-xl p-5 text-zinc-50 border border-zinc-50 focus:outline-none bg-transparent`}
            ></input>
            &#34;
          </div>
        </div>
      </section>
      <section
        id="translate-correct"
        className="border-b container mx-auto gap-10 border-zinc-900 flex-col flex items-center justify-center py-36"
      >
        <div className="flex items-center gap-4">
          <Zap className="fill-yellowYes" size={24} />
          <h2>
            <span className="font-bold">Tip: </span>When users gets the
            translation right
          </h2>
        </div>
        <div className="flex items-center">
          <div className="text-zinc-500 cursor-default items-start flex-col flex gap-2">
            .class &#123;
            <div className="text-xl p-5 text-black border-2 bg-greenGo border-greenGo">
              flex-direction: column;
            </div>
            &#125;
          </div>
          <Check className="fill-greenGo mx-8" />
          <div className="text-zinc-500 cursor-default items-start flex-col flex gap-2">
            className=&#34;
            <input
              className={`text-xl p-5 text-greenGo border-2 border-greenGo focus:outline-none bg-transparent`}
            ></input>
            &#34;
          </div>
        </div>
      </section>
      <section
        id="translate-incorrect"
        className="border-b container mx-auto gap-10 border-zinc-900 flex-col flex items-center justify-center py-36"
      >
        <div className="flex items-center gap-4">
          <Zap className="fill-yellowYes" size={24} />
          <h2>
            <span className="font-bold">Tip: </span>When users gets the
            translation wrong
          </h2>
        </div>
        <div className="flex items-center">
          <div className="text-zinc-500 cursor-default items-start flex-col flex gap-2">
            .class &#123;
            <div className="text-xl p-5 text-zinc-50 border-2 border-alertRed bg-alertRed">
              flex-direction: column;
            </div>
            &#125;
          </div>
          <Close className="fill-alertRed mx-8" />
          <div className="text-zinc-500 cursor-default items-start flex-col flex gap-2">
            className=&#34;
            <input
              className={`text-xl p-5 text-alertRed border-2 border-alertRed focus:outline-none bg-transparent`}
            ></input>
            &#34;
          </div>
        </div>
      </section>
    </main>
  );
}
