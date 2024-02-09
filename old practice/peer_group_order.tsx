import Image from 'next/image';
export default function Home() {
  return (
    <div className="group border-2 bg-white p-6 hover:bg-sky-500">
      <p className="text-slate-500 group-hover:text-pink-800">
        Create a new project from a variety of starting templates
      </p>
      <p className="text-slate-500">
        Create a new project from a variety of starting templates
      </p>
      <p className="text-slate-500 group-hover:text-3xl">
        Create a new project from a variety of starting templates
      </p>

      <div className="flex flex-col bg-purple-400">
        <div className="peer/yellowSquare order-4 h-12 w-12 bg-yellow-500"></div>

        <div className="peer/blackSquare order-3 h-12 w-12 bg-black"></div>

        <div className="order-1 hidden peer-hover/yellowSquare:block">
          You are hovering the yellow square
        </div>
        <div className="order-2 hidden peer-hover/blackSquare:block">
          You are hovering the black square
        </div>
      </div>
    </div>
  );
}
