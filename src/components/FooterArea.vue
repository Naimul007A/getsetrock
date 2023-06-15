<script setup></script>
<template>
  <footer class="bg-slate-800 py-4 text-white">
    <div class="w-mainwidth mx-auto">
      <div class="flex justify-evenly space-x-7 pt-9">
        <div class="space-y-3 w-80">
          <img src="@/assets/image/logo.png" alt="" />
          <p class="text-md font-normal text-white">
            ©2023 Get Set Rock. Trademarks and brands are the property of their respective owners.
          </p>
        </div>
        <!-- navbar  -->
        <div>
          <p class="font-semibold py-1">Company</p>
          <div class="">
            <nav class="grid space-y-2">
              <router-link to="/about-us">About Us</router-link>
              <router-link to="/contact-us">Contact Us</router-link>
            </nav>
          </div>
        </div>
        <!-- roules -->
        <div>
          <p class="font-semibold py-1">Legal</p>
          <div class="grid space-y-2">
            <a href="#">Privacy & Policy</a>
            <a href="#">Refund & return policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
        <!-- social media link  -->
        <div>
          <p class="font-semibold py-1">Follow</p>
          <div class="grid space-y-2">
            <a href="#">Privacy & Policy</a>
            <a href="#">Refund & return policy</a>
          </div>
        </div>
      </div>
      <p class="text-center py-3">Trade License: 3884</p>
      <p class="text-center font-medium py-3">
        Design & Developed by
        <a class="text-yellow-400" href="https://m.facebook.com/naimul.boy/">Naimul Islam</a>
      </p>
    </div>
  </footer>
</template>
