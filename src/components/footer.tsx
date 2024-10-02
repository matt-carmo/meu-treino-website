'use client'
import Link from "next/link";
import React, { Context } from "react";

interface iFooter extends React.HTMLAttributes<HTMLElement> {
    className?: string;
}

export function Footer({...props}: iFooter): JSX.Element {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer {...props} className={`text-center w-full justify-center flex gap-4 ${props.className}`}>
            <p>&copy; {currentYear} Meu Treino</p>
            |
            <Link className="hover:underline font-medium" href={"/politica-e-privacidade"}>Política de Privacidade</Link>
        </footer>
    );
}