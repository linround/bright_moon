import React from "react";
import {GlobalNav} from "@/ui/GlobalNav";
import './globals.css'
import style from './layout.module.css'
export const metadata = {
  title: 'linround',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = 'dark'
  return (
    <html data-theme={theme}>
      <body>
      <div className={style.container}>
        <GlobalNav />
        <div className={style.content}>
          {children}
        </div>
      </div>
      </body>
    </html>
  )
}
