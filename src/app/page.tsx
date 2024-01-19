export default function Home() {
  return (
    <main className="w-full">
      <div className="bg-blue-500">Header</div>

      <div className="flex items-center">
        <div className=" bg-slate-400">Left Sidebar</div>
        <div className=" bg-sky-400">
          <h1>Main Content</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel cum
            saepe recusandae esse perspiciatis, laborum voluptatibus itaque
            quisquam ipsa corrupti. Iusto, repellendus! Illo, quis a dicta amet
            sapiente et voluptate.
          </p>
        </div>
        <div className=" bg-orange-400">Right Sidebar</div>
      </div>
    </main>
  );
}
