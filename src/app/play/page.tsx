import { ArrowRight, Check, CircleCheck, Close } from "@/icons";

export default function Play() {
  return (
    <main className="flex-col pt-20 flex h-full w-full text-center justify-center">
      <section
        id="translate-correct"
        className="border-b container mx-auto gap-12 border-zinc-900 flex-col flex items-center justify-center py-36"
      >
        <div className="flex items-center gap-2">
          <CircleCheck className="fill-berryBlue" />
          <h2>While users are typing the translation</h2>
        </div>
        <div className="flex items-center">
          <div className="text-zinc-600 cursor-default items-start flex-col flex gap-2">
            .class &#123;
            <span className="text-berryBlue border border-berryBlue bg-transparent p-5">
              flex-direction: column;
            </span>
            &#125;
          </div>
          <ArrowRight className="fill-zinc-50 mx-8" />
          <div className="text-zinc-600 cursor-default items-start flex-col flex gap-2">
            className = &#34;
            <input
              className={`text-zinc-50 border border-zinc-50 focus:outline-none bg-transparent p-5`}
            ></input>
            &#34;
          </div>
        </div>
      </section>
      <section
        id="translate-correct"
        className="border-b container mx-auto gap-12 border-zinc-900 flex-col flex items-center justify-center py-36"
      >
        <div className="flex items-center gap-2">
          <CircleCheck className="fill-berryBlue" />
          <h2>When users gets the translation right</h2>
        </div>
        <div className="flex items-center">
          <div className="text-zinc-600 cursor-default items-start flex-col flex gap-2">
            .class &#123;
            <span className="text-black border bg-berryBlue border-berryBlue p-5">
              flex-direction: column;
            </span>
            &#125;
          </div>
          <Check className="fill-greenGo mx-8" />
          <div className="text-zinc-600 cursor-default items-start flex-col flex gap-2">
            className = &#34;
            <input
              className={`text-greenGo border border-greenGo focus:outline-none bg-transparent p-5`}
            ></input>
            &#34;
          </div>
        </div>
      </section>
      <section
        id="translate-correct"
        className="border-b container mx-auto gap-12 border-zinc-900 flex-col flex items-center justify-center py-36"
      >
        <div className="flex items-center gap-2">
          <CircleCheck className="fill-berryBlue" />
          <h2>When users gets the translation wrong</h2>
        </div>
        <div className="flex items-center">
          <div className="text-zinc-600 cursor-default items-start flex-col flex gap-2">
            .class &#123;
            <span className="text-berryBlue border border-berryBlue bg-transparent p-5">
              flex-direction: column;
            </span>
            &#125;
          </div>
          <Close className="fill-alertRed mx-8" />
          <div className="text-zinc-600 cursor-default items-start flex-col flex gap-2">
            className = &#34;
            <input
              className={`text-alertRed border border-alertRed focus:outline-none bg-transparent p-5`}
            ></input>
            &#34;
          </div>
        </div>
      </section>
    </main>
  );
}
