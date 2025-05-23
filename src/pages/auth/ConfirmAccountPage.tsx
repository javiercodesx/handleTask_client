import { Link } from "react-router-dom";
import { PinInput, PinInputField } from "@chakra-ui/pin-input"
import { useState } from "react";
import { ConfirmToken } from "@/types/index";
import { useMutation } from "@tanstack/react-query";
import { confirmAccount } from "@/api/AuthAPI";
import { toast } from "react-toastify";

export default function ConfirmAccountPage() {

  const [token, setToken] = useState<ConfirmToken['token']>('')

  const { mutate } = useMutation({
    mutationFn: confirmAccount,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data)
    },
  })

  const handleTokenChange = (token: ConfirmToken['token']) => {
    setToken(token)
  }

  const handleComplete = (token: ConfirmToken['token']) => {
    mutate({ token })
  }

  return (
    <>
      <h1 className="text-5xl font-black text-white">Confirm account</h1>
      <p className="text-2xl font-light text-white mt-5">
        Enter the code you received {''}
        <span className=" text-fuchsia-500 font-bold"> by e-mail</span>
      </p>
      <form
        className="space-y-8 p-10 bg-white mt-10"
      >
        <label
          className="font-normal text-2xl text-center block"
        >6-digit code</label>
        <div className="flex justify-center gap-5">
          <PinInput value={token} onChange={handleTokenChange} onComplete={handleComplete}>
            <PinInputField className='w-10 h-10 p-3 text-center rounded-lg border-gray-300 border placeholder-white' />
            <PinInputField className='w-10 h-10 p-3 text-center rounded-lg border-gray-300 border placeholder-white' />
            <PinInputField className='w-10 h-10 p-3 text-center rounded-lg border-gray-300 border placeholder-white' />
            <PinInputField className='w-10 h-10 p-3 text-center rounded-lg border-gray-300 border placeholder-white' />
            <PinInputField className='w-10 h-10 p-3 text-center rounded-lg border-gray-300 border placeholder-white' />
            <PinInputField className='w-10 h-10 p-3 text-center rounded-lg border-gray-300 border placeholder-white' />
          </PinInput>
        </div>
      </form>

      <nav className="mt-10 flex flex-col space-y-4">
        <Link
          to={'/auth/login'}
          className="text-center text-gray-300 font-normal"
        >Account already confirmed? Log in</Link>

        <Link
          to='/auth/request-code'
          className="text-center text-gray-300 font-light"
        >
          Request a new code
        </Link>
      </nav>

    </>
  )
}