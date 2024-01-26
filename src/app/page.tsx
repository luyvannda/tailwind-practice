import Image from 'next/image';

export default function Home() {
  return (
    <main className="m-4 sm:flex sm:flex-row sm:items-center">
      <Image
        src="https://cdn.wallpapersafari.com/21/76/v26KTO.jpg"
        alt="RDJ"
        priority={true}
        width={400}
        height={500}
        className="rounded-2xl transition-all duration-200 hover:scale-110 sm:h-1/2 sm:w-1/2"
      />
      <section className="sm:mx-5">
        <p className="my-3 font-bold md:text-lg lg:text-2xl dark:text-white">
          Robert Downey Jr. is an American actor and producer. His career has
          been characterized by critical and popular success in his youth,
          followed by a period of substance abuse and legal troubles, before a
          resurgence of commercial success later in his career.
        </p>
        <button className="rounded-md bg-black px-4 py-2 font-bold text-yellow-300 transition-all duration-300 sm:text-lg sm:hover:bg-yellow-300 sm:hover:text-black lg:text-2xl dark:bg-yellow-300 dark:text-black">
          Visit Instagram
        </button>
      </section>
    </main>
  );
}
