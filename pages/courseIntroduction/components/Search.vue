<template>
  <div class="mb-12 bg-secondary xl:mb-14">
    <div class="container flex flex-col-reverse py-5 sm:flex-row">
      <div class="flex sm:mr-2">
        <div class="flex-auto">
          <input
            type="text"
            placeholder="請輸入要搜尋的課程"
            class="w-full rounded-l py-2 pl-4 placeholder:text-primary"
          />
        </div>
        <button
          class="whitespace-nowrap rounded-r bg-primary px-4 py-2 text-white duration-500 hover:bg-primary/80"
        >
          搜尋
        </button>
      </div>
      <div>
        <select class="mb-2 rounded px-3 py-2 text-primary sm:mb-0">
          <option>全部課程</option>
        </select>
      </div>
    </div>
  </div>
</template>
