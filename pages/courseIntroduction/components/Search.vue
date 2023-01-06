<template>
  <div class="mb-12 bg-secondary xl:mb-14">
    <div class="container flex py-5">
      <div class="mr-2 flex">
        <input
          type="text"
          placeholder="請輸入要搜尋的課程"
          class="rounded-l py-2 pl-4 placeholder:text-primary"
        />
        <button
          class="rounded-r bg-primary px-4 py-2 text-white duration-500 hover:bg-secondary/80"
        >
          搜尋
        </button>
      </div>
      <select class="rounded px-3 text-primary">
        <option>全部課程</option>
      </select>
    </div>
  </div>
</template>
