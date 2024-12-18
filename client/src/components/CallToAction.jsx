import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Interested in working with me?</h2>
        <p className="text-gray-500 my-2">
          Visit my portfolio to explore more of my projects and skills!
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://portfolio.phaedrusstudios.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://t3.ftcdn.net/jpg/04/71/42/88/360_F_471428832_RxdAFS5Cde9nm3BjydNkb41EP7zzRZ3Q.jpg" />
      </div>
    </div>
  );
}
