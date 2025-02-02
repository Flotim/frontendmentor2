import React from "react";
import ReactDOM from "react-dom";

const TicketPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[var(--neutral-900)] text-[var(--neutral-0)]">
            <h1 className="text-3xl font-bold">🎟️ Votre Ticket</h1>
            <p className="text-lg mt-4">Merci d'avoir généré votre ticket !</p>
            <a href="/" className="mt-6 px-4 py-2 bg-[var(--orange-700)] rounded text-[var(--neutral-900)] hover:bg-[var(--orange-500)] transition">
                Retour à l'accueil
            </a>
        </div>
    );
};


