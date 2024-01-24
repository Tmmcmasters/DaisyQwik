import { component$ } from "@builder.io/qwik";

export const Menu = component$(() => {
  return (
    <ul class="menu min-h-full w-80 bg-base-200 bg-transparent p-4 text-base-content  backdrop-blur-lg">
      <li>
        <details open>
          <summary>
            <span>
          <svg width="18" height="18" viewBox="0 0 48 48" class="text-orange-400 h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7H16C20.4183 7 24 10.5817 24 15V42C24 38.6863 21.3137 36 18 36H5V7Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"></path><path d="M43 7H32C27.5817 7 24 10.5817 24 15V42C24 38.6863 26.6863 36 30 36H43V7Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"></path></svg>
            </span>
            <a href="/docs">Docs</a>
          </summary>
          <ul>
            <li>
              <a href="/docs" class="flex justify-between">
                Install
                <div class="badge badge-neutral gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block h-4 w-4 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  Planned
                </div>
              </a>
            </li>
            <li>
              <a href="/docs" class="flex justify-between">
                Use
                <div class="badge badge-neutral gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block h-4 w-4 stroke-current"
                  >
                    <path 
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  Planned
                </div>
              </a>
            </li>
            <li>
              <a href="/docs" class="flex justify-between">
                Themes
                <div class="badge badge-neutral gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block h-4 w-4 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  Planned
                </div>
              </a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details open>
          <summary class="group">
            <span>
              <svg
                class="h-5 w-5 text-green-600"
                width="18"
                height="18"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 29H6V43H20V29Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="butt"
                  stroke-linejoin="bevel"
                ></path>
                <path
                  d="M24 4L34 21H14L24 4Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="butt"
                  stroke-linejoin="bevel"
                ></path>
                <path
                  d="M36 44C40.4183 44 44 40.4183 44 36C44 31.5817 40.4183 28 36 28C31.5817 28 28 31.5817 28 36C28 40.4183 31.5817 44 36 44Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="butt"
                  stroke-linejoin="bevel"
                ></path>
              </svg>
            </span>
            <a href="/docs">Components</a>
          </summary>
          <ul>
            <li>
              <details open>
                <summary>
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="currentColor"
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 4V12"
                        stroke-width="4"
                        stroke-linecap="butt"
                        stroke-linejoin="bevel"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 22L42 26L36 30L42 36L36 42L30 36L26 42L22 22Z"
                        fill="none"
                        stroke-width="4"
                        stroke-linecap="butt"
                        stroke-linejoin="bevel"
                      ></path>
                      <path
                        d="M38.1421 9.85789L32.4853 15.5147"
                        stroke-width="4"
                        stroke-linecap="butt"
                        stroke-linejoin="bevel"
                      ></path>
                      <path
                        d="M9.85787 38.1421L15.5147 32.4853"
                        stroke-width="4"
                        stroke-linecap="butt"
                        stroke-linejoin="bevel"
                      ></path>
                      <path
                        d="M4 24H12"
                        stroke-width="4"
                        stroke-linecap="butt"
                        stroke-linejoin="bevel"
                      ></path>
                      <path
                        d="M9.85795 9.85787L15.5148 15.5147"
                        stroke-width="4"
                        stroke-linecap="butt"
                        stroke-linejoin="bevel"
                      ></path>
                    </svg>
                  </span>
                  <a href="/docs">Actions</a>
                </summary>
                <ul>
                  <li>
                  <a href="/docs/button" class="flex justify-between">
                Button
                <div class="badge badge-warning gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block h-4 w-4 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  In Progress
                </div>
              </a>
                  </li>
                  <li>
                    <a href="/docs">Dropdown</a>
                  </li>
                  <li>
                    <a href="/docs">Modal</a>
                  </li>
                  <li>
                    <a href="/docs">Swap</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary>
                  <span>
                  <svg width="18" height="18" viewBox="0 0 48 48" class="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="8" width="40" height="32" rx="3" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"></rect><path d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z" fill="none" stroke="currentColor" stroke-width="4"></path><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)" fill="currentColor"></circle><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)" fill="currentColor"></circle></svg>
                  </span>
                  <a href="/docs">Data Display</a>
                </summary>
                <ul>
                <li>
                    <a href="/docs/card">
                      Card
                      <div class="badge badge-warning gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          class="inline-block h-4 w-4 stroke-current"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                        In Progress
                      </div>
                      </a>
                  </li>
                  <li>
                    <a href="/docs/table">
                      Table
                      <div class="badge badge-warning gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          class="inline-block h-4 w-4 stroke-current"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                        In Progress
                      </div>
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary>
                  <span>
                  <svg width="18" height="18" viewBox="0 0 48 48" class="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 19H20C15.5817 19 12 22.5817 12 27C12 31.4183 15.5817 35 20 35H36C40.4183 35 44 31.4183 44 27C44 24.9711 43.2447 23.1186 42 21.7084" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M6 24.2916C4.75527 22.8814 4 21.0289 4 19C4 14.5817 7.58172 11 12 11H28C32.4183 11 36 14.5817 36 19C36 23.4183 32.4183 27 28 27H18" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path></svg>
                  </span>
                  <a href="/docs">Navigation</a>
                </summary>
                <ul>
                  <li>
                    <a href="/docs/tab">
                      Tab
                      <div class="badge badge-warning gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          class="inline-block h-4 w-4 stroke-current"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                        In Progress
                      </div>
                      </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary>
                  <span>
                  <svg width="18" height="18" class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H44V36H29L24 41L19 36H4V6Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M23 21H25.0025" stroke="currentColor" stroke-width="4" stroke-linecap="butt"></path><path d="M33.001 21H34.9999" stroke="currentColor" stroke-width="4" stroke-linecap="butt"></path><path d="M13.001 21H14.9999" stroke="currentColor" stroke-width="4" stroke-linecap="butt"></path></svg>
                  </span>
                  <a href="/docs">Feedback</a>
                </summary>
              </details>
            </li>
            <li>
              <details open>
                <summary>
                  <span>
                  <svg width="18" height="18" viewBox="0 0 48 48" class="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 42H43" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"></path></svg>
                  </span>
                  <a href="/docs">Data Input</a>
                </summary>
                <ul>
                  <li>
                    <a href="/docs/select">
                      Select
                      <div class="badge badge-warning gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          class="inline-block h-4 w-4 stroke-current"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                        In Progress
                      </div>
                      </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary>
                  <span>
                  <svg width="18" height="18" class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="36" height="36" rx="3" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"></rect><path d="M6 22L42 22" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M29 22V6" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M26 6H32" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M6 19V25" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M42 19V25" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path></svg>
                  </span>
                  <a href="/docs">Layout</a>
                </summary>
              </details>
            </li>
            <li>
              <details open>
                <summary>
                  <span>
                  <svg width="18" height="18" viewBox="0 0 48 48" class="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 30H40V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V30Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"></path><path d="M40 30V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V30" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"></path><path d="M22 37H26" stroke="currentColor" stroke-width="4" stroke-linecap="butt"></path></svg>
                  </span>
                  <a href="/docs">Mockup</a>
                </summary>
              </details>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
});
