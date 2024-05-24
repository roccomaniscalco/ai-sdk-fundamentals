/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/AL1fs84WRpz
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function ConfirmingOrder() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-400 rounded-full animate-bounce" />
          <div className="w-4 h-4 bg-gray-400 rounded-full animate-bounce animation-delay-200" />
          <div className="w-4 h-4 bg-gray-400 rounded-full animate-bounce animation-delay-400" />
        </div>
        <p className="text-gray-500">Confirming order...</p>
      </div>
      <div className="hidden animate-confetti">
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-white dark:bg-gray-900" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-full flex flex-wrap justify-around">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-confetti-item" />
              <div className="w-4 h-4 bg-green-500 rounded-full animate-confetti-item animation-delay-200" />
              <div className="w-4 h-4 bg-yellow-500 rounded-full animate-confetti-item animation-delay-400" />
              <div className="w-4 h-4 bg-red-500 rounded-full animate-confetti-item animation-delay-600" />
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-confetti-item animation-delay-800" />
              <div className="w-4 h-4 bg-pink-500 rounded-full animate-confetti-item animation-delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
