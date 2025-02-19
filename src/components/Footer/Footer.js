import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative">
      <div className="container p-8 mx-auto xl:px-0">
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
                href="/"
              >
                <span>Nextly</span>
              </Link>
            </div>
            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Nextly is a free landing page & marketing website template for
              startups and indie projects. It's built with Next.js &
              TailwindCSS. And it's completely open-source.
            </div>
            <div className="mt-5">
              <Link
                href="/"
                target="_blank"
                rel="noopener"
                className="relative block w-44"
              >
                <Image
                  alt="Powered by Vercel"
                  loading="lazy"
                  width="212"
                  height="44"
                  src="/img/vercel.svg"
                />
              </Link>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {["Product", "Features", "Pricing", "Company", "Blog"].map(
                (item) => (
                  <Link
                    key={item}
                    className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-trueGray-700"
                    href="/"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {["Terms", "Privacy", "Legal"].map((item) => (
                <Link
                  key={item}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-trueGray-700"
                  href="/"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              {[
                { href: "https://twitter.com/web3templates", icon: "Twitter" },
                {
                  href: "https://facebook.com/web3templates",
                  icon: "Facebook",
                },
                {
                  href: "https://instagram.com/web3templates",
                  icon: "Instagram",
                },
                { href: "https://linkedin.com/", icon: "LinkedIn" },
              ].map(({ href, icon }) => (
                <Link key={icon} href={href} target="_blank" rel="noopener">
                  <span className="sr-only">{icon}</span>
                  <Image
                    src={`/icons/${icon.toLowerCase()}.svg?`}
                    alt={icon}
                    width="24"
                    height="24"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © 2024. Made with ♥ by
          <a href="https://web3templates.com/" target="_blank" rel="noopener">
            {" "}
            Web3Templates.
          </a>
          Illustrations from
          <a href="https://www.glazestock.com/" target="_blank" rel="noopener">
            {" "}
            Glazestock
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
