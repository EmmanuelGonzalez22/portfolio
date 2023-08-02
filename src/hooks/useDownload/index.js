import { useState } from "react";

const useDownload = () => {
  const [msg, setMsg] = useState("Descargar CV");
  const [isDownload, setIsDownload] = useState(false);

  const downloadFileAtURL = (url) => {
    setIsDownload(true);
    setMsg("Descargando...");
    setTimeout(() => {
      setMsg("Descargar CV");
      setIsDownload(false);
    }, 2000);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "EmmanuelGonzalezCV.pdf");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };
  return { downloadFileAtURL, msg, isDownload };
};

export { useDownload };
