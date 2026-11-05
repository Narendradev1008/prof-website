import { ChevronDown, Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useHomepageContent } from "../hooks/useHomepageContent";

const navItems = [
  {
    label: "About",
    dropdown: [{ label: "Academic Journey", to: "/about/academic-journey" }],
  },
  {
    label: "Research",
    dropdown: [
      { label: "Project-based Learning", to: "/research/project-based-learning" },
      { label: "Project Grants/Consultancy Work", to: "/research/projects" },
      { label: "Publications", to: "/research/publications" },
      { label: "Thesis Supervision", to: "/research/thesis" },
    ],
  },
  {
    label: "Laboratories",
    dropdown: [
      { label: "Industrial Power Electronics Lab (IPEC)", to: "/laboratories/ipec" },
      { label: "Advanced Power Electronics Laboratory (APEL)", to: "/laboratories/apel" },
    ],
  },
  {
    label: "Academic Activities",
    dropdown: [
      { label: "Conferences & Workshops Organized", to: "/activities/organized" },
      { label: "Events Attended", to: "/activities/attended" },
      { label: "Expert Talks", to: "/activities/expert-talks" },
    ],
  },
  { label: "Outreach", to: "/outreach" },
  { label: "Contact", to: "/#contact" },
];

function Navbar() {
  const homepageContent = useHomepageContent();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const mobileMenuButtonRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenus = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const isCurrentRoute = (to) => to !== "/#contact" && location.pathname === to;
  const isDropdownCurrent = (item) => item.dropdown?.some((dropdownItem) => isCurrentRoute(dropdownItem.to));

  const handleContactClick = (event) => {
    event.preventDefault();
    closeMenus();

    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    navigate("/#contact");
  };

  const handleDropdownBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpenDropdown(null);
    }
  };

  const handleDropdownKeyDown = (event) => {
    if (event.key !== "Escape") {
      return;
    }

    setOpenDropdown(null);
    event.currentTarget.querySelector("button")?.focus();
  };

  const closeMobileMenuWithFocus = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
    window.requestAnimationFrame(() => mobileMenuButtonRef.current?.focus());
  };

  const handleMobileMenuKeyDown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMobileMenuWithFocus();
    }
  };

  return (
    <>
      <a
        className="sr-only fixed left-4 top-4 z-[60] rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-950 shadow-lg focus:not-sr-only"
        href="#main-content"
      >
        Skip to main content
      </a>
      <nav
        aria-label="Primary navigation"
        className="sticky top-0 z-50 border-b border-cyan-200/15 bg-[#041527]/95 text-white shadow-[0_10px_30px_rgba(4,21,39,0.16)] backdrop-blur"
      >
        <div className="mx-auto flex max-w-[80rem] items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
        <Link
          to="/"
          className="min-w-0 font-['Space_Grotesk'] text-base font-bold tracking-tight text-white transition hover:text-cyan-200 sm:text-lg"
        >
          {homepageContent.name}
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          {navItems.map((item, index) => (
            <div key={item.label} className="relative">
              {item.dropdown ? (
                <div
                  onBlur={handleDropdownBlur}
                  onKeyDown={handleDropdownKeyDown}
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    aria-controls={`desktop-menu-${index}`}
                    aria-expanded={openDropdown === index}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 border-b-2 py-2 text-sm font-semibold transition ${
                      isDropdownCurrent(item)
                        ? "border-amber-300 text-white"
                        : "border-transparent text-slate-300 hover:border-teal-300 hover:text-white"
                    }`}
                    onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                    type="button"
                  >
                    {item.label}
                    <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" />
                  </button>

                  {openDropdown === index && (
                    <div className="absolute left-0 top-full z-50 w-72 pt-3" id={`desktop-menu-${index}`}>
                      <div className="overflow-hidden rounded-2xl border border-cyan-200/15 bg-[#082640] p-2 shadow-2xl shadow-slate-950/40">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            to={dropdownItem.to}
                            className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                              isCurrentRoute(dropdownItem.to)
                                ? "bg-teal-300/15 text-teal-200"
                                : "text-slate-200 hover:bg-white/10 hover:text-white"
                            }`}
                            onClick={closeMenus}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.to}
                  className={`border-b-2 py-2 text-sm font-semibold transition ${
                    isCurrentRoute(item.to)
                      ? "border-amber-300 text-white"
                      : "border-transparent text-slate-300 hover:border-teal-300 hover:text-white"
                  }`}
                  onClick={item.label === "Contact" ? handleContactClick : closeMenus}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/admin"
            className="rounded-lg border border-teal-300/45 bg-teal-300/10 px-3.5 py-2 text-sm font-bold text-teal-100 transition hover:border-teal-200 hover:bg-teal-300/20"
            onClick={closeMenus}
          >
            Admin login
          </Link>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          className="rounded-lg border border-white/15 bg-white/5 p-2 text-cyan-100 transition hover:bg-white/10 xl:hidden"
          onKeyDown={handleMobileMenuKeyDown}
          onClick={() => {
            setMenuOpen((currentMenuOpen) => !currentMenuOpen);
            setOpenDropdown(null);
          }}
          ref={mobileMenuButtonRef}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        </div>

        {menuOpen && (
          <div
            className="border-t border-white/10 bg-[#061b31] px-5 py-4 xl:hidden"
            id="mobile-navigation"
            onKeyDown={handleMobileMenuKeyDown}
          >
          <div className="mx-auto flex max-w-[80rem] flex-col">
            {navItems.map((item, index) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      aria-controls={`mobile-menu-${index}`}
                      aria-expanded={openDropdown === index}
                      className={`flex w-full items-center justify-between py-3 text-left text-sm font-semibold transition ${
                        isDropdownCurrent(item) ? "text-teal-200" : "text-slate-100"
                      }`}
                      onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                      type="button"
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openDropdown === index && (
                      <div className="mb-2 ml-3 border-l border-teal-300/30 pl-4" id={`mobile-menu-${index}`}>
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            to={dropdownItem.to}
                            className={`block py-2.5 text-sm ${
                              isCurrentRoute(dropdownItem.to) ? "text-teal-200" : "text-slate-300 hover:text-white"
                            }`}
                            onClick={closeMenus}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.to}
                    className={`block py-3 text-sm font-semibold ${
                      isCurrentRoute(item.to) ? "text-teal-200" : "text-slate-100"
                    }`}
                    onClick={item.label === "Contact" ? handleContactClick : closeMenus}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/admin"
              className="mt-3 rounded-lg border border-teal-300/45 bg-teal-300/10 px-4 py-3 text-center text-sm font-bold text-teal-100"
              onClick={closeMenus}
            >
              Admin login
            </Link>
          </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
