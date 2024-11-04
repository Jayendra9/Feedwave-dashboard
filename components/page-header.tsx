import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import HeaderMenu from "@/components/header-menu"

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all bg-white/20 backdrop-blur-md">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto border-b">
        <div className="flex h-14 items-center justify-between">
        <div className='flex items-center justify-center'>
                        <Image
                            src="/logo.png"
                            width={55}
                            height={58}
                            alt="Picture of the author"
                            className="rounded-[65px] mr-2"
                        />
                        <h1 className="font-extrabold leading-tight text-3xl">FEEDWAVE</h1>
                    </div>
          <div>
            <SignedOut>
              <SignInButton>
                <Button className="bg-black">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className="bg-black ml-2">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <HeaderMenu />
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PageHeader;