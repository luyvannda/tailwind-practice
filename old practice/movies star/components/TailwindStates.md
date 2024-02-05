export default function TailwindStates() {
  return (
    <div>
      <ul>
        <li className="first:bg-blue-400 last:bg-red-400 odd:bg-green-400 even:bg-indigo-400">
          Hello
        </li>
        <li className="first:bg-blue-400 last:bg-red-400 odd:bg-green-400 even:bg-indigo-400">
          Hello
        </li>
        <li className="first:bg-blue-400 last:bg-red-400 odd:bg-green-400 even:bg-indigo-400">
          Hello
        </li>
      </ul>
    </div>
  );
}
