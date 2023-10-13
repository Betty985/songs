export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === "1") {
    console.log("Hi,VIP");
  } else {
    console.log("Hi,user");
  }
});
