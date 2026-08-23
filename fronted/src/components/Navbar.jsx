import '../App.css' 
import { useState } from "react";
import { ChevronDown,X,Menu } from "lucide-react";


const navItems = [
  {
    label: "About",
    dropdown: [
      { label: "Biography", href: "/about/biography" },
      { label: "Academic Journey", href: "/about/academic-journey" },
      { label: "Teaching Philosophy", href: "/about/teaching-philosophy" },
      { label: "Honours & Awards", href: "/about/honours-awards" },
    ],
  },

  {
    label: "Research",
    dropdown: [
      { label: "Research Areas", href: "/research#research-areas" },
      { label: "Projects", href: "/research#projects" },
      { label: "Grants & Consultancy", href: "/research#grants" },
      { label: "Publications", href: "/research#publications" },
      { label: "Thesis Supervision", href: "/research#thesis" },
    ],
  },

  {
    label: "Laboratories",
    dropdown: [
      {
        label: "Laboratory 1",
        href: "/laboratories/lab-1",
      },
      {
        label: "Laboratory 2",
        href: "/laboratories/lab-2",
      },
    ],
  },

  {
    label: "Academic Activities",
    dropdown: [
      {
        label: "Conferences & Workshops Organized",
        href: "/activities#organized",
      },
      {
        label: "Events Attended",
        href: "/activities#attended",
      },
      {
        label: "Expert Talks",
        href: "/activities#expert-talks",
      },
    ],
  },

  {
    label: "Outreach",
    href: "/outreach",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <a
          href="/"
          className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl"
        >
          Dr. Mahmadasraf A. Mulla
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <div key={item.label} className="relative">
              {item.dropdown ? (
                <div
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 py-2 text-sm font-medium text-gray-700 transition hover:text-gray-900"
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" /> 
                  </button>
                  
                  {openDropdown === index && (
                    <div className="absolute left-0 top-full w-64 pt-2">
                      <div className="rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block rounded-lg px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  className="py-2 text-sm font-medium text-gray-700 transition hover:text-gray-900"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
        {/* //mobile home page */}
        <button
          className="rounded-lg p-2 text-gray-700 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
          <X />
          ) : (
          <Menu />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-gray-800"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === index ? null : index
                        )
                      }
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${
                          openDropdown === index ? "rotate-180" : ""
                        }`} /> 
                    </button>

                    {openDropdown === index && (
                      <div className="mb-2 ml-4 border-l border-gray-200 pl-4">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                            onClick={() => setMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block py-3 text-sm font-medium text-gray-800"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
