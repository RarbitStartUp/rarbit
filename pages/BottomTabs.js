export default function BottomTabs() {
  return (
    <div>
      <div class="min-h-screen bg-blue-500 p-20 text-blue-800">
        <p class="mt-64 text-9xl">Fixed Bottom Nav!</p>
      </div>

      <nav class="fixed inset-x-0 bottom-0 flex justify-between bg-blue-100 font-mono text-sm uppercase text-blue-900">
        <a
          href="#"
          class="block w-full py-5 px-3 text-center transition duration-300 hover:bg-blue-200 hover:text-blue-800"
        >
          <svg
            class="mx-auto mb-2 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              fill="#fff"
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
          Home
        </a>

        <a
          href="#"
          class="block w-full py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800"
        >
          <svg
            class="mx-auto mb-2 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
          Features
        </a>

        <a
          href="#"
          class="block w-full py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800"
        >
          <svg
            class="mx-auto mb-2 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          Profile
        </a>

        <a
          href="#"
          class="block w-full py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800"
        >
          <svg
            class="mx-auto mb-2 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
          Settings
        </a>
      </nav>
    </div>
  )
}
