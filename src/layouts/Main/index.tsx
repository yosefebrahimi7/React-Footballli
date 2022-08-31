import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-full bg-slate-200">
      <div className="mx-auto max-w-sm h-full bg-tertiary relative">
        {children}
      </div>
    </div>
  );
}
