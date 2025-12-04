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
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");

  // Dark mode toggle
  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [dark]);

  // Scroll spy: update activeSection based on what is in view
  useEffect(() => {
    const sectionIds = navigation.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const currentLabel =
    navigation.find((item) => item.href === activeSection)?.label ||
    "Portfolio";

  return (
    <Disclosure
      as="nav"
      className="
        fixed
        top-6
        left-1/2
        z-50
        -translate-x-1/2
        w-full
        px-4
        sm:px-6
        lg:px-8
        pointer-events-none
      "
    >
      {({ open }) => (
        <>
          {/* Glassy nav pill */}
          <div className="pointer-events-auto w-full max-w-4xl mx-auto">
            <div
              className="
                flex
                items-center
                justify-between
                gap-3
                rounded-full
                border
                border-white/70
                bg-white/65
                bg-clip-padding
                shadow-lg
                shadow-sky-200/70
                backdrop-blur-2xl
                px-4
                py-2
                dark:border-slate-700/80
                dark:bg-slate-900/90
                dark:shadow-lg
                dark:shadow-sky-500/35
              "
            >
              {/* Left: mobile menu button */}
              <div className="flex items-center sm:hidden">
                <DisclosureButton
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    p-2
                    text-slate-600
                    hover:bg-white/80
                    hover:text-slate-900
                    focus:outline-none
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-sky-500
                    dark:text-slate-300
                    dark:hover:bg-slate-800
                    dark:hover:text-slate-50
                  "
                >
                  {open ? (
                    <XMarkIcon aria-hidden="true" className="size-5" />
                  ) : (
                    <Bars3Icon aria-hidden="true" className="size-5" />
                  )}
                </DisclosureButton>
              </div>

              {/* Center: nav items (desktop) or active label (mobile) */}
              <div className="flex flex-1 items-center justify-center">
                {/* Desktop nav */}
                <div className="hidden sm:flex space-x-2">
                  {navigation.map((item) => {
                    const isActive = activeSection === item.href;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={classNames(
                          isActive
                            ? "bg-slate-900/85 text-slate-50 dark:bg-slate-100 dark:text-slate-900"
                            : "text-slate-700 hover:bg-white/80 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50",
                          "rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors"
                        )}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>

                {/* Mobile: show current section label in the pill center */}
                <div className="sm:hidden text-sm font-medium text-slate-800 dark:text-slate-100">
                  {currentLabel}
                </div>
              </div>

              {/* Right: dark mode toggle */}
              <button
                type="button"
                className="
                  ml-auto
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  p-2
                  text-slate-600
                  hover:text-slate-900
                  hover:bg-white/80
                  focus:outline-none
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-sky-500
                  dark:text-slate-300
                  dark:hover:bg-slate-800
                  dark:hover:text-slate-50
                "
                onClick={() => setDark((d) => !d)}
              >
                {dark ? (
                  <MoonIcon aria-hidden="true" className="size-5" />
                ) : (
                  <SunIcon aria-hidden="true" className="size-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile panel - now clearly BELOW the navbar pill */}
          <DisclosurePanel
            className="
              pointer-events-auto
              w-full
              max-w-4xl
              mx-auto
              mt-2
              rounded-2xl
              border
              border-white/70
              bg-white/90
              shadow-lg
              shadow-sky-200/70
              backdrop-blur-2xl
              px-4
              py-3
              text-center
              sm:hidden
              dark:border-slate-700/80
              dark:bg-slate-900/95
              dark:shadow-lg
              dark:shadow-sky-500/30
            "
          >
            <div className="space-y-1">
              {navigation.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <DisclosureButton
                    key={item.href}
                    as="a"
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={classNames(
                      isActive
                        ? "bg-slate-900/85 text-slate-50 dark:bg-slate-100 dark:text-slate-900"
                        : "text-slate-700 hover:bg-white/80 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50",
                      "block rounded-full px-3 py-2 text-sm font-medium transition-colors"
                    )}
                  >
                    {item.label}
                  </DisclosureButton>
                );
              })}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
