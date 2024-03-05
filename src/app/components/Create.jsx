import React from "react";

const Create = () => {
  return (
    <div>
      <div className=" w-5/6 mx-auto rounded px-5 py-5 text-center bg-slate-800 text-black">
        <div className="flex flex-col justify-center align-center">
          <form className="w-1/2 m-auto bg-slate-200 rounded p-20">
            <div className="font-extrabold text-3xl">
              <h3>Create New Blog Post</h3>
            </div>
            <div className="mb-8 flex flex-col justify-center ">
              <label className="pr-5 font-bold mb-5">Upload Blog Image</label>
              <input type="file" name="filename" className="mb-5 text-md" />
              <input
                type="submit"
                className="w-1/4 bg-orange-600 text-white rounded-full px-6 py-3 text-xl cursor-pointer mb-5"
              />
            </div>
            <div className="text-left flex justify-between">
              <label className="pr-5 font-bold mb-5">Title</label>
              <input type="text" placeholder="Blog Title" className="mb-5" />
            </div>
            <div className="text-left flex justify-between">
              <label className="pr-5 font-bold mb-5">Date</label>
              <input type="date" className="mb-5" />
            </div>
            <div className="text-left flex flex-col justify-between">
              <label className="pr-5 font-bold mb-5">Blog</label>
              <textarea className="mb-8" rows="10" cols="50">
                {" "}
              </textarea>
            </div>
            <div>
              <input
                type="submit"
                className="w-1/4 bg-orange-600 text-white rounded-full px-6 py-3 text-xl cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
