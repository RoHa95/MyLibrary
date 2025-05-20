
// باز کردن یا ساختن دیتابیس
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("MyImageDB", 2);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("images")) {
        db.createObjectStore("images", { keyPath: "id" });
      }
       if (!db.objectStoreNames.contains("notes")) {
        db.createObjectStore("notes", { keyPath: "id" }); // ✅ store برای متن
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

// ✅ ذخیره‌ی عکس در IndexedDB
export async function addImage(id, file) {
  const db = await openDB();
  const tx = db.transaction("images", "readwrite");
  const store = tx.objectStore("images");
  store.put({ id, file });
  return tx.complete;
}
// ✅ ذخیره‌ی یادداشت در IndexedDB
export async function addNote(id, note) {
  const db = await openDB();
  const tx = db.transaction("notes", "readwrite");
  const store = tx.objectStore("notes");
  store.put({ id, note });
  return tx.complete;
}

// ✅ گرفتن عکس از IndexedDB و ساختن URL
export async function getImageUrl(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("images", "readonly");
    const store = tx.objectStore("images");
    const request = store.get(id);

    request.onsuccess = () => {
      const result = request.result;
      if (result && result.file) {
        const url = URL.createObjectURL(result.file);
        resolve(url);
      } else {
        resolve(null); // چیزی پیدا نشد
      }
    };

    request.onerror = () => {
      reject("خطا در گرفتن عکس از IndexedDB");
    };
  });
}
// ✅ گرفتن یادداشت از IndexedDB و ساختن URL
export async function getNote(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("notes", "readonly");
    const store = tx.objectStore("notes");
    const request = store.get(id);

    request.onsuccess = () => {
      resolve(request.result); // مثلاً {id: "book-123", title: "...", author: "..."}
    };

    request.onerror = () => {
      reject("خطا در دریافت یادداشت");
    };
  });
}
