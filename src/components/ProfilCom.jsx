import React from "react";

const ProfilCom = () => {
  return (
    <div>
      <div className="flex justify-between bg-white absolute top-0 left-0 w-full ">
        <div className="p-5 ml-3">
          <img
            src="./src/assets/Nyanyi1.png"
            alt="Profile"
            className="rounded-3xl w-10 h-10"
          />
        </div>
        <div className="p-3 absolute left-24 mt-4 text-black">
          <span className="mr-10">Home</span>
          <span className="mr-10">Pilihan Lagu</span>
          <span className="mr-10">Pengaturan</span>
          <span>Profile</span>
        </div>
        <div className="p-5 mr-5"></div>
      </div>

      <div className="bg-white absolute top-44 left-0 w-full h-[470px] rounded-2xl flex flex-col items-center">
        <table className="text-black text-3xl tracking-widest mt-32">
          <tr>
            <td className="text-start">Nama</td>
            <td className="text-start">&nbsp;:</td>
            <td className="text-start">Kamila Izza Ilyasa</td>
          </tr>
          <tr>
            <td className="text-start">Username</td>
            <td className="text-start">&nbsp;:</td>
            <td className="text-start">kamm</td>
          </tr>
          <tr>
            <td className="text-start">Email</td>
            <td className="text-start">&nbsp;:</td>
            <td className="text-start">kamilailyasa03@gmail.com</td>
          </tr>
          <tr>
            <td className="text-start">Umur</td>
            <td className="text-start">&nbsp;:</td>
            <td className="text-start">20</td>
          </tr>
          <tr>
            <td className="text-start">Alamat</td>
            <td className="text-start">&nbsp;:</td>
            <td className="text-start">Pasuruan Jawa Timur</td>
          </tr>
          <tr>
            <td className="text-start">Pilihan Lagu</td>
            <td className="text-start">&nbsp;:</td>
            <td className="text-start">Sisa Rasa - Mahalini</td>
          </tr>
  
        </table>
      </div>
    </div>
  );
};

export default ProfilCom;
