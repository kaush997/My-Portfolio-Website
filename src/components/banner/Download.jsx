import React from 'react';


function DownloadButton() {
  const downloadFile = () => {
    const url = `${process.env.PUBLIC_URL}/kaushalyacv.pdf`;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'kaushalyacv.pdf');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <button
      className="bg-[#082545] mt-10 text-white border border-blue-500 hover:bg-black hover:text-white rounded px-4 py-2 transition-colors duration-300"
      onClick={downloadFile}
    >
      Download CV
    </button>
  );
}

export default DownloadButton;