export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-10">
      <h1>Welcome to the Starter Project Template.</h1>
      <p>Head to `src/app/page.tsx` to edit this page.</p>
      <p>
        <span className="font-mono">useFetch</span> and{" "}
        <span className="font-mono">useForm</span> from the Demo has been
        provided if you need to use them.
      </p>
      <p>You may remove these messages when getting started</p>
      <p>
        You can run the json server with this command:{" "}
        <span className="font-mono">
          npx json-server --watch db.json --port 4000
        </span>
      </p>
    </div>
  );
}
