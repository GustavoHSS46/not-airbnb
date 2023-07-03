<template>
    <div class="w-full h-2/3 sm:h-1/3 flex  flex-col sm:flex-row items-center justify-around sm:justify-center">
        <div class="w-full py-1 h-1/3 sm:h-full overflow-hidden">
            <img src="/logo.png" class="object-contain h-full w-full"/>
        </div>
        <div class="w-full  py-1 h-1/3 sm:h-full overflow-hidden flex items-center justify-center relative">
            <input type="text" placeholder="Search..." class="text-gray-700 px-2.5 py-1.5 w-3/4 hover:cursor-pointer rounded-full shadow-sm bg-white placeholder-gray-600 outline-1 ring-1 ring-slate-400 outline-slate-400">
            <button class=" bg-rose-500 h-9 w-9 rounded-full hidden sm:block absolute sm:right-7 md:right-7  lg:right-10 xl:right-12">
                <Icon name="ic:sharp-search" class="text-xl"/>
            </button>
        </div>
        <div class="w-full py-1 h-1/3 hidden  sm:h-full sm:flex items-center justify-center">
            <Profile />
        </div>
    </div>
</template>
