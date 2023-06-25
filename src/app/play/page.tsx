import { ArrowRight } from "@/icons";

export default function Play() {
  const correctTranslation = true;
  return (
    <main className="flex-col pt-20 flex h-full w-full text-center justify-center">
      <section
        id="translate"
        className="border-b container mx-auto border-zinc-900 flex items-center justify-center py-36"
      >
        <div className="text-berryBlue items-start flex-col flex gap-4">
          .class &#123;
          <span className="text-white border-2 border-berryBlue bg-zinc-950 p-5">
            flex-direction: column;
          </span>
          &#125;
        </div>
        {/* <ArrowRight className="mx-8 fill-white" /> */}
        <p className="mx-8 fill-white">?</p>
        <div className="text-greenGo items-start flex-col flex gap-4">
          className = &#34;
          <input
            autoFocus
            className={`${
              correctTranslation && "border-greenGo"
            } text-white border-2 border-zinc-700 focus:outline-none bg-zinc-950 p-5`}
          ></input>
          &#34;
        </div>
      </section>
    </main>
  );
}
