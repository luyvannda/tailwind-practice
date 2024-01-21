export default function Home() {
  return (
    <main className="w-full">
      <div className="mx-4 grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4">
        <div className="rounded-lg bg-slate-400 p-3">01</div>
        <div className="rounded-lg bg-sky-400 p-3">02</div>
        <div className="rounded-lg bg-orange-400 p-3">03</div>
        <div className="col-span-2 rounded-lg bg-green-400 p-3">04</div>
        <div className="rounded-lg bg-violet-400 p-3">05</div>
        <div className="rounded-lg bg-amber-400 p-3">06</div>
        <div className="col-span-2 rounded-lg bg-red-400 p-3">07</div>
      </div>

      <div className="mx-4 grid grid-cols-6 gap-4 pt-10">
        <div className="col-span-4 col-start-2 rounded-lg bg-slate-400 p-3">
          01
        </div>
        <div className="col-start-1 col-end-3 rounded-lg bg-sky-400 p-3">
          02
        </div>
        <div className="col-span-2 col-end-7 rounded-lg bg-orange-400 p-3">
          03
        </div>
        <div className="col-start-1 col-end-7 rounded-lg bg-green-400 p-3">
          04
        </div>
      </div>

      <div className="grid grid-flow-col grid-rows-3 pt-6">
        <div className="rounded-lg bg-slate-400 p-3">01</div>
        <div className="rounded-lg bg-sky-400 p-3">02</div>
        <div className="rounded-lg bg-orange-400 p-3">03</div>
        <div className="rounded-lg bg-green-400 p-3">04</div>
        <div className="rounded-lg bg-violet-400 p-3">05</div>
        <div className="rounded-lg bg-amber-400 p-3">06</div>
      </div>
    </main>
  );
}
