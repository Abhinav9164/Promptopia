"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState,useEffect } from 'react';
import {signIn,signOut,useSession,getProviders} from 'next-auth/react';

const Nav = () => {
 
    const isUserLoggedIn = true;
    const [providers,setProviders] = useState(null);
    const [toggleDropdown,setToggleDropdown] = useState(true);

    useEffect(() => {
        const setProviders = async () => {
            const response = response.json();
            setProviders(response);
        }
        setProviders();
    },[])

  return (
    <nav className='flex-between mb-16 pt-3 w-full'>
        <Link href="/" className='flex gap-2 flex-center'>
        <Image
           width={30}
           height={30}
           alt="logo"
           className='object-contain'
           src = "/assets/images/logo.svg" />
           </Link>
           {/* Mobile*/}

           <div className='sm:flex hidden'>
                {
                   isUserLoggedIn ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href="/create-prompt"
                          className='black_btn'>
                            Create Post
                          </Link>

                          <button 
                          className='outline_btn'
                          onClick={signOut}>
                               Sign Out
                          </button>
                          <Link href="/profile">
                            <Image
                              src="/assets/images/logo.svg"
                              className='rounded-fill'
                              width={30}
                              height={37}
                              />
                          </Link>
                             

                        </div>
                   ) : (
                    <>
                    { providers &&
                       Object.values(providers).map((provider)  => (
                           <button
                                type='button'
                                onClick={() => signIn(provider.id)}
                                key = {provider.name}
                                className='blcak_btn'
                           >
                             SignIn
                           </button>
                        ))}
   

                    </>
                   )
                }
           </div>


           {/* Mobile Nav */}

             <div className='sm:hidden flex relative'>
                 {
                    isUserLoggedIn ? (
                        <div className='flex'>
                             <Image
                                width={30}
                                height={30}
                                alt="profile"
                                className='object-contain'
                                src = "/assets/images/logo.svg" 
                                onClick={() =>setToggleDropdown((prev)=>(!prev))}
                                />

                                {toggleDropdown && (
                                    <div className='dropdown'>
                                            <Link 
                                            href="/profile"
                                            className='dropdown_link'
                                            onClick={() => setToggleDropdown(false)}
                                            >
                                                My Profile
                                            </Link>

                                            <Link 
                                            href="/create-prompt"
                                            className='dropdown_link'
                                            onClick={() => setToggleDropdown(false)}
                                            >
                                                Create-prompt
                                            </Link>

                                            <button
                                            type='button'
                                            onClick={()=> {
                                                setToggleDropdown(false)
                                                signOut()

                                            }}
                                            className='mt-5 w-full black_btn'
                                            >
                                             SignOut
                                            </button>
                                     </div>
                                )}
                            </div>
                    ):(
                        <>
                        { providers &&
                           Object.values(providers).map((provider)  => (
                               <button
                                    type='button'
                                    onClick={() => signIn(provider.id)}
                                    key = {provider.name}
                                    className='blcak_btn'
                               >
                                 SignIn
                               </button>
                            ))}
       
    
                        </>
                    )
                 }
                 
             </div>



    </nav>
  )
}

export default Nav