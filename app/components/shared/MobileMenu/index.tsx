"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";

export default function MobileDrawerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button onClick={openMenu} className="md:hidden p-2">
        <Icon icon="lucide:menu" className="h-6 w-6 text-white cursor-pointer" />
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50" onClose={closeMenu}>
          {/* Overlay escurecido */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            {/* Painel lateral animado */}
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-200 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-200 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative w-64 p-4 shadow-xl"
                style={{ backgroundColor: "var(--background)" }} // ou: backgroundColor: "#1F1434"
              >
                <button onClick={closeMenu} className="absolute top-4 right-4">
                  <Icon icon="lucide:x" className="h-6 w-6 text-white cursor-pointer" />
                </button>

                <nav className="mt-8 space-y-4">
                  <Link href="/" onClick={closeMenu} className="block text-white">
                    Início
                  </Link>
                  <Link href="/games" onClick={closeMenu} className="block text-white">
                    Lista de Jogos
                  </Link>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
