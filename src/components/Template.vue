<template>

<section
      class="container mx-auto flex flex-col items-center px-8 py-36 sm:flex-row-reverse sm:px-12"
  >
  <details class="dropdown">
  <summary class="m-1 btn">open or close</summary>
  <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
    <div class="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pl-4 md:pl-16">
      <img
          alt="Hanging out with friends"
          class="rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      />
    </div>
    <div class="mr-4 w-full text-center sm:w-1/2 sm:text-left">
      <h1
          class="mb-6 text-3xl font-bold leading-tight dark:text-slate-50 md:text-4xl"
      >
        Hangout, work or just relax? Got it!
      </h1>
      <p class="mb-2 leading-relaxed text-slate-700 dark:text-slate-400">
        We provide indoor &amp; outdoor space with delighted yet affordable foods
        &amp; beverages.
      </p>
      <ul
          class="mb-8 flex flex-col items-center space-y-1 dark:text-slate-400 sm:items-start"
      >
        <li class="flex items-end">
          <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              class="mr-2 text-orange-300"
          >
            <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m5 12l5 5L20 7"
            ></path>
          </svg>
          <span>Various types of coffee beans</span>
        </li>
        <li class="flex items-end">
          <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              class="mr-2 text-orange-300"
          >
            <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m5 12l5 5L20 7"
            ></path>
          </svg>
          <span>Coworking area</span>
        </li>
        <li class="flex items-end">
          <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              class="mr-2 text-orange-300"
          >
            <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m5 12l5 5L20 7"
            ></path>
          </svg>
          <span>Meeting room</span>
        </li>
      </ul>
      <div class="flex flex-col space-y-3 md:flex-row md:space-x-2 md:space-y-0">
        <button
            class="rounded-lg border-0 bg-slate-900 px-6 py-3 text-base text-white shadow-lg shadow-slate-300 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 dark:bg-orange-300 dark:text-black dark:shadow-sm dark:shadow-orange-300 dark:hover:bg-orange-400 sm:py-2"
        >
          Open menu
        </button>
        <button
            class="rounded-lg border-0 bg-white px-6 py-3 text-base text-slate-900 shadow-lg shadow-slate-100 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 dark:bg-slate-700 dark:text-slate-300 dark:shadow-sm dark:shadow-slate-800 dark:hover:bg-slate-600 sm:py-2"
        >
          Explore services
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>