import React, { useEffect, useState } from "react";

const ImageStoraged = () => {
  const [db, setDb] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  // 1. اتصال به IndexedDB
  useEffect(() => {
    const request = indexedDB.open("MyImageDB", 1);

    request.onupgradeneeded = (event) => {
      const database = event.target.result;
      database.createObjectStore("images", { keyPath: "id" });
    };

    request.onsuccess = (event) => {
      setDb(event.target.result);
      console.log("✅ IndexedDB آماده است");
    };

    request.onerror = () => {
      console.error("❌ خطا در باز کردن IndexedDB");
    };
  }, []);

  // 2. گرفتن فایل از کاربر
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };

  // 3. ذخیره کردن در IndexedDB
  const handleSave = () => {
    if (!db || !selectedFile) return;

    const tx = db.transaction("images", "readwrite");
    const store = tx.objectStore("images");

    store.put({
      id: "user-image",
      file: selectedFile,
    });

    tx.oncomplete = () => {
      alert("✅ تصویر ذخیره شد");
    };
  };

  // 4. لود کردن از IndexedDB
  const handleLoad = () => {
    if (!db) return;

    const tx = db.transaction("images", "readonly");
    const store = tx.objectStore("images");

    const request = store.get("user-image");

    request.onsuccess = () => {
      const result = request.result;
      if (result) {
        const url = URL.createObjectURL(result.file);
        setImageUrl(url);
      } else {
        alert("❌ تصویری پیدا نشد");
      }
    };
  };

  return (
    <div style={{ padding: 20 }}>
      <input type="file" onChange={handleFileChange} />
      <br />
      <button className="bg-red-400" onClick={handleSave}>ذخیره در IndexedDB</button>
      <button className="bg-yellow-300" onClick={handleLoad}>بارگذاری تصویر</button>
      <br />
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Stored"
          style={{ marginTop: 20, width: 300, height: "auto" }}
        />
      )}
    </div>
  );
};

export default ImageStoraged;
