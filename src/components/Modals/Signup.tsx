import { useSetRecoilState } from 'recoil';
import { authModalState } from '~/atoms/authModalAtom';

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState)
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: "login" }));
  }
  return (
    <form className="space-y-6 px-6 py-4">
      <h3 className="text-xl font-medium text-white">Register to LeetClone</h3>

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
          placeholder="johndoe@example.com"
        />
      </div>

      {/* Username */}
      <div>
        <label
          htmlFor="displayName"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Username
        </label>
        <input
          type="text"
          name="displayName"
          id="displayName"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="John Doe"
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
        Register
      </button>

      <div className="text-sm font-medium text-gray-300">
        Already have an account?{' '}
        <a href="/auth/login" className="text-blue-700 hover:underline" onClick={handleClick}>
          Log In
        </a>
      </div>
    </form>
  );
};

export default Signup;
