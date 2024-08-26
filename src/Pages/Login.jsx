import { useContext, useState } from "react";
import ParticlesComponent from "../Component/ParticlesComponent";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [signUp, setSignUp] = useState(false);
    const { SignUpUser, SignIN, googleSignIn } = useContext(AuthContext)
    const [SignUpBtnText, setSignUpBtnText] = useState("Submit")
    const [SignInBtnText, setSignInBtnText] = useState("Submit")
    const [SignInErrorText, setSignInErrorText] = useState("")
    const [SignUpErrorText, setSignUpErrorText] = useState("")
    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault()
        setSignUpBtnText("Signing Up ...")
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value


        const user = { name, email, password }

        SignUpUser(email, password)
            .then(data => {
                if (data?.user) {

                    setSignUpBtnText("Submit")
                    navigate("/")
                    setSignUpErrorText("")
                }
                else {
                    setSignUpBtnText("Submit")



                }
            })
            .catch(err => {
                setSignUpErrorText(err?.message)
                setSignUpBtnText("Submit")
            })



    }


    const handleSignIn = (e) => {
        e.preventDefault()
        setSignInBtnText("Signing In ...")

        const email = e.target.email.value
        const password = e.target.password.value


        const object = { email, password }

        SignIN(email, password)
            .then(data => {
                if (data?.user) {

                    setSignInBtnText("Submit")
                    navigate("/")
                    setSignInErrorText("")
                }
                else {
                    setSignInBtnText("Submit")



                }
            })
            .catch(err => {
                setSignInErrorText(err?.message)
                setSignInBtnText("Submit")
            })
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(data => {
            if (data?.user) {

                
                navigate("/")
              
            }
            
        })
        .catch(err => {
            setSignUpErrorText(err?.message)
            setSignInErrorText(err?.message)
        })
    }

    return (<>
        <div className="flex  justify-center items-center h-screen bg-gray-900">
            <div className="mx-auto   z-[888] w-full max-w-sm overflow-hidden glass rounded-lg   ">
                <div className={`flex select-none gap-2 border-b p-2.5 *:flex-1 *:rounded-md *:border *:p-2 *:text-center *:uppercase *:shadow-inner *:outline-none dark:border-zinc-700 *:dark:border-zinc-600 ${signUp ? 'last-of-type:*:bg-zinc-600 last-of-type:*:text-white' : 'first-of-type:*:bg-zinc-600 first-of-type:*:text-white'}`}>
                    <button onClick={() => setSignUp(false)}>Sign In</button>
                    <button onClick={() => setSignUp(true)}>Sign Up</button>
                </div>

                <div className="w-full flex-col items-center   overflow-hidden p-4 sm:p-8">
                    {/* Sign Up Form */}
                    <form onSubmit={handleSignUp} className={`${signUp ? 'h-full duration-300' : 'invisible h-0 opacity-0'}   space-y-3 sm:space-y-5`}>
                        <h1 className="mb-6 uppercase sm:text-2xl">Sign Up</h1>
                        <div className="space-y-4">
                            <input type="text" required placeholder="Name" name="name" className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 bg-gray-700  " />
                            <input type="email" required placeholder="Email" name="email" className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 bg-gray-700  " />
                            <input type="password" required placeholder="Password" name="password" className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 bg-gray-700  " />
                        </div>
                        <p className="text-red-500">{SignUpErrorText}</p>
                        {/* Button type will be submit for handling form submission */}
                        <button type="submit" className="mx-auto block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white">
                            {SignUpBtnText}
                        </button>
                        <p className="text-center">Already have an account?
                            <button type="button" onClick={() => setSignUp(!signUp)} className="font-semibold underline">
                                Sign In
                            </button>
                        </p>
                    </form>

                    {/* Sign In Form */}
                    <form onSubmit={handleSignIn} className={`${signUp ? 'h-0 opacity-0' : 'h-full duration-300'} space-y-3 sm:space-y-5`}>
                        <h1 className="mb-3 uppercase sm:mb-5 sm:text-2xl">Sign In</h1>
                        <input type="email" required name="email" placeholder="Email" className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 bg-gray-700  " />
                        <input type="password" required name="password" placeholder="Password" className="block bg- w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 bg-gray-700  " />
                        <p className="text-end text-sm text-zinc-600 dark:text-zinc-300">
                        </p>
                        {/* Button type will be submit for handling form submission */}
                        <p className="text-red-500">{SignInErrorText}</p>

                        <button type="submit" className="mx-auto block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white">
                            {SignInBtnText}
                        </button>
                        <p className="text-center">Don&apos;t have an account?
                            <button onClick={() => setSignUp(!signUp)} type="button" className="font-semibold underline">
                                Sign Up
                            </button>
                        </p>
                    </form>

                    <div className="mt-3 space-y-3 sm:space-y-5">
                        <hr className="border-zinc-700" />
                        <button onClick={handleGoogleSignIn} className="mx-auto  block rounded-md border px-5 py-2 shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="mr-2 inline-block h-5 w-5 fill-current"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <ParticlesComponent></ParticlesComponent>
    </>

    );
}
