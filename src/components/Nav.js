import { h } from "preact";

export const Nav = (props) => {
  const { menu } = props;

  return (
    <nav class="bg-white border-fire-200 px-2 sm:px-4 py-2.5 rounded dark:bg-fire-800">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://github.com/talves/toast-template" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-fire-100">
            Toast Template
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-fire-500 rounded-lg md:hidden hover:bg-fire-100 focus:outline-none focus:ring-2 focus:ring-fire-200 dark:text-fire-400 dark:hover:bg-fire-700 dark:focus:ring-fire-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 bg-fire-50 rounded-lg border border-fire-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-fire-800 md:dark:bg-fire-900 dark:border-fire-700">
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-fire-100"
                aria-current="page"
              >
                Home
              </a>
            </li>
            {menu?.items?.map((item)=>{
              return !item.hidden && (
                <li>
              <a
                href={item.path}
                class="block py-2 pr-4 pl-3 text-fire-700 rounded hover:bg-fire-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-fire-400 md:dark:hover:text-white dark:hover:bg-fire-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
               {item.label}
              </a>
            </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};