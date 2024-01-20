export default function Home() {
  return (
    <main className="w-full">
      <div className="mx-4 grid grid-cols-3 gap-4">
        <div className=" bg-slate-400">01</div>
        <div className=" bg-sky-400">02</div>
        <div className=" bg-orange-400">03</div>
        <div className=" col-span-2 bg-green-400">04</div>
        <div className=" bg-violet-400">05</div>
        <div className=" bg-amber-400">06</div>
        <div className=" col-span-2 bg-red-400">07</div>
      </div>

      <div className="grid grid-cols-6 gap-4 pt-10">
        <div className=" col-span-4 col-start-2 bg-slate-400">01</div>
        <div className=" col-start-1 col-end-3 bg-sky-400">02</div>
        <div className=" col-span-2 col-end-7 bg-orange-400">03</div>
        <div className=" col-start-1 col-end-7 bg-green-400">04</div>
      </div>
    </main>
  );
}
