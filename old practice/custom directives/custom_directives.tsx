export default function Home() {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <h2>Tailwind is pretty dope</h2>
      <p>Here : a lot of reasons why tailwind is dope</p>

      <h2>React is pretty dope</h2>
      <p>Here : a lot of reasons why React is dope</p>

      <h2>NodeJS is pretty dope</h2>
      <p>Here : a lot of reasons why NodeJS is dope</p>

      <button className="btn">Info</button>
      <button className="btn">Danger</button>

      <div className="flex-center h-20 bg-indigo-300">
        <p>Center Text</p>
      </div>
    </div>
  );
}
