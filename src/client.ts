import { createApp, APP_SECTIONS, type AppSection } from './app.js';

const MOUNT_TARGETS: Record<AppSection, string> = {
  menu: '#app-menu',
  notes: '#app-notes',
  auth: '#app-auth',
  expenses: '#app-expenses',
};

APP_SECTIONS.forEach((section) => {
  createApp(section).mount(MOUNT_TARGETS[section]);
});


if("serviceWorker" in navigator){
    navigator.serviceWorker
        .register("/service_worker.js")
        .then(serviceWorker=>{
            console.log("service worker registered: ", serviceWorker);
        })
        .catch(error=>{console.error("error registering the service worker: ", error)
    });

    navigator.serviceWorker.addEventListener('message',evt=>{
        console.log("SW to Client: " + evt.data);
    });

    if(navigator.serviceWorker.controller!=null)
        navigator.serviceWorker.controller.postMessage("Hi");
}
else{
    alert("The browser does not support the ServiceWorker");
    console.log("The browser does not support the SW");
}

if (!("Notification" in window)) {
  console.warn("Il browser non supporta le notifiche");
} else if (Notification.permission === "granted") {
  new Notification("Hello", {
    lang: "en",
    body: "Welcome back",
    icon: "/src/icons/icon-192x192.png",
  });
} else if (Notification.permission !== "denied") {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    new Notification("Le notifiche sono attivate");
  }
}

window.addEventListener("online", () => {
  if (Notification.permission === "granted") {
    new Notification("Mode online");
  }
});

window.addEventListener("offline", () => {
  if (Notification.permission === "granted") {
    new Notification("Mode offline");
  }
});


