export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About Yegna Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Yegna Blog, your go-to resource for everything software
              engineering and web development. Whether you’re delving into
              programming languages or exploring industry best practices, this
              blog is crafted to help you enhance your skills and stay ahead in
              the ever-evolving tech landscape.
            </p>{" "}
            <p>
              Here, you’ll find tutorials and articles designed to simplify
              complex concepts, highlight emerging trends, and provide
              actionable insights. From mastering the fundamentals to uncovering
              the latest tools and techniques, Yegna Blog aims to empower
              developers at every stage of their journey.
            </p>{" "}
            <p>
              Interested in a behind-the-scenes look? Reach out to me to become
              an admin and explore our exclusive dashboard features. Let’s
              connect, learn, and grow together in this vibrant tech community!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
