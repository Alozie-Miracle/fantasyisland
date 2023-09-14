// /* use client */

// import React, {createContext, useState } from 'react'
  
// type NavContextProviderProps = {
//   children: React.ReactNode;
// };

// export type NavContextType = {
//   trail: number;
//   setTrail: React.Dispatch<React.SetStateAction<number>>
// };

// export const NavContext = createContext<NavContextType>({
//     trail: 0, setTrail: () => { },
// });


// export const NavContextProvider = ({
//   children,
// }: NavContextProviderProps) => {
//     const [trail, setTrail] = useState(0);

//   return (
//     <NavContext.Provider value={{  trail, setTrail }}>
//       {children}
//     </NavContext.Provider>
//   );
// };