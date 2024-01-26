export default function Home() {
  return (
    <main className="m-4">
      <img
        src="https://cdn.wallpapersafari.com/21/76/v26KTO.jpg"
        alt="RDJ"
        className="rounded-2xl transition-all duration-200"
      />
      <section>
        <p className="my-3 font-bold">
          Robert Downey Jr. is an American actor and producer. His career has
          been characterized by critical and popular success in his youth,
          followed by a period of substance abuse and legal troubles, before a
          resurgence of commercial success later in his career.
        </p>
        <button className="rounded-md bg-black px-4 py-2 font-bold text-yellow-300 transition-all duration-300">
          Visit Instagram
        </button>
      </section>
    </main>
  );
}
