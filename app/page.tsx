"use client";
import * as React from "react";
import HeroNotificationArea from "./components/HeroNotificationArea";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full max-w-[30%] min-h-[100vh] flex flex-col gap-4 items-center justify-center m-auto">
      <div className="w-full text-black text-xs tracking-tight leading-[120%] flex items-center gap-1">
        <Link href="https://www.121.design/" target="_blank" className="hover:underline">121</Link>
        <span>/</span>
        <Link href="https://www.121.design/lab" target="_blank" className="hover:underline">Lab</Link>
        <span>/</span>
        <Link href="https://www.121.design/lab/notification-center" target="_blank" className="hover:underline">Notification Center</Link>
      </div>
      <HeroNotificationArea />
      <p className="text-grey text-xs tracking-tight leading-[120%] opacity-40">Try adding some notifications!</p>
    </div>
  );
}
