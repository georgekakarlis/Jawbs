import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-auto w-full bg-black"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto w-full  bg-gray-100 px-4 py-12 sm:px-6 lg:px-16">
        <div className="flex  lg:justify-center">
          <span className="mx-auto text-sm font-light text-gray hover:text-white">
            Copyright © 2023
            <Link
              href=""
              className="text-wickedblue mx-2 hover:text-white"
              rel="noopener noreferrer"
            >
              @Jawbs
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
