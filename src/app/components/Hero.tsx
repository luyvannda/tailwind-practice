'use client';

export default function Hero() {
  const handleToggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex-center h-screen">
      <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-indigo-950 dark:shadow-sm">
        <h2 className="text-gray-800 dark:text-white">Card Title</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-200">
          This is the main content of the card.
        </p>
        <p className="mt-2 text-gray-400">
          Subtext or additional information goes here.
        </p>

        <button onClick={handleToggleDarkMode} className="btn">
          Button
        </button>
      </div>
    </div>
  );
}
