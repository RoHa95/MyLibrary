// db.js
export const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("MyImageDB", 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("images")) {
        db.createObjectStore("images", { keyPath: "id" });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result); // دسترسی به db
    };

    request.onerror = (event) => {
      reject("❌ Error opening DB", event.target.error);
    };
  });
};
