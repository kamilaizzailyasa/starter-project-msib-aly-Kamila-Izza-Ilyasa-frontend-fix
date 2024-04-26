import React from "react";

const LoginCom = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-500">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden w-5/6 md:w-[800px]">
        <img
          src="./src/assets/Nyanyi1.png"
          alt="Singing Competition"
          className="w-full md:w-1/2 h-auto object-cover"
        />
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Singing Competition
          </h2>
          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-center text-2xl font-bold mb-6">Login</h3>
            <form className="space-y-6" action="#" method="POST">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="rounded-full w-full px-4 py-2 placeholder-gray-500 bg-white mb-4 focus:outline-none focus:ring-2 focus:ring-[#3589C1] focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="rounded-full w-full px-4 py-2 placeholder-gray-500 bg-white mb-8 focus:outline-none focus:ring-2 focus:ring-[#3589C1] focus:border-transparent"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent text-lg font-semibold rounded-full shadow-sm text-white bg-[#3589C1] hover:bg-indigo-700 transition duration-300"
                >
                  Login
                </button>
                <p className="text-gray-600 text-center mt-4">
                  Don't have an account?{" "}
                  <a href="#" className="text-[#3589C1] hover:underline">
                    Register here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCom;
