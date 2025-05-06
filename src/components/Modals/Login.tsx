import React from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '~/atoms/authModalAtom';
type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState)
  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  }
  return (
    <form className="space-y-6 px-6 py-4">
      <h3 className="text-xl font-medium text-white">Sign in to LeetClone</h3>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="name@example.com"
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="********"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s"
      >
        Sign In
      </button>

      <button className="flex w-full justify-end" onClick={() => handleClick("forgotPassword")}>
        <a
          href="/auth/forgot-password"
          className="text-sm block text-brand-orange hover:underline w-full text-right"
        >
          Forgot Password?
        </a>
      </button>

      <div className="text-sm font-medium text-gray-300">
        Not Registered?{' '}
        <a href="/auth/register" className="text-blue-700 hover:underline" onClick={() => handleClick("register")}>
          Create an account
        </a>
      </div>
    </form>
  );
};

export default Login;
