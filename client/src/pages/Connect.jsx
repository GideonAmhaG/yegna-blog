import CallToAction from "../components/CallToAction";

export default function Connect() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex flex-col justify-center items-center gap-6 p-3">
      <h1 className="text-3xl font-semibold">Connect</h1>
      <p className="text-md text-gray-500">
        I'm always open to collaborating on exciting projects and exploring new
        ideas. If you have a project in mind or simply want to connect and share
        thoughts, feel free to reach out. Let's work together to create
        something impactful!
      </p>
      <CallToAction />
    </div>
  );
}
