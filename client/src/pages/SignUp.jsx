import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Yegna
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Welcome to Yegna Blog! By signing up, you'll be able to create
            posts, comment on articles, and engage with the community. This blog
            is a personal project where you can explore different features and
            interact with content. Your privacy is important, and this platform
            is for personal use, not a commercial application. Thanks for
            joining, and enjoy exploring!
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Enter your username"
                id="username"
              />
            </div>
            <div>
              <Label value="Email Address" />
              <TextInput
                type="email"
                placeholder="example@example.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Enter your password"
                id="password"
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
