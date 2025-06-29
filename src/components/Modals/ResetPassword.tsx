import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from '~/firebase/firebase';

type ResetPasswordProps = {
  
};

const ResetPassword:React.FC<ResetPasswordProps> = () => {
  const [email, setEmail] = useState('')
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth)
  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const success = await sendPasswordResetEmail(email)
    if (success) {
      toast.success('Password reset email sent', { position: 'top-center', autoClose: 3000, theme: 'dark'})
    }
  }

  useEffect(() => {
    if (error) {
      alert(error.message)
    }
  }, [error])
  return (
    <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" onSubmit={handleReset}>
      <h3 className="text-xl font-medium text-white">Sign in to LeetClone</h3>
      <p className='text-sm text-white '>
				Forgotten your password? Enter your e-mail address below, and we&apos;ll send you an e-mail allowing you
				to reset it.
			</p>
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
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="name@example.com"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s"
      >
        Reset Password
      </button>
    </form>
  );

}
export default ResetPassword;