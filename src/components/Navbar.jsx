import React, { useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { href: "#about", label: "About", current: true },
  { href: "#experience", label: "Experience", current: false },
  { href: "#education", label: "Education", current: false },
  { href: "#projects", label: "Projects", current: false },
  { href: "#skills", label: "Skills", current: false },
  { href: "#contact", label: "Contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [dark]);

  return (
    <Disclosure
      as="nav"
      className="bg-fixed bg-cover bg-center  bg-[linear-gradient(135deg,_rgba(2,6,23,.85),_rgba(30,58,138,.75))]
    dark:bg-[linear-gradient(180 deg,_rgba(2,6,23,.85),_rgba(15,23,42,.85))]"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="lg:ml-auto flex h-16 items-center">
            <DisclosureButton
              className="inline-flex rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500 sm:hidden"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? (
                <XMarkIcon aria-hidden="true" className="size-6" />
              ) : (
                <Bars3Icon aria-hidden="true" className="size-6" />
              )}
            </DisclosureButton>
            <div className="flex flex-1 justify-center sm:justify-start rounded-[25px] shadow-lg">
              <div className="hidden sm:flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-950/50 text-white"
                        : "text-gray-300 hover:bg-white/5 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="ml-auto rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            onClick={() => setDark((d) => !d)}
          >
            {dark ? (
              <MoonIcon aria-hidden="true" className="size-6" />
            ) : (
              <SunIcon aria-hidden="true" className="size-6" />
            )}
          </button>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.href}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={classNames(
                item.current
                  ? "bg-gray-950/50 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.label}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
