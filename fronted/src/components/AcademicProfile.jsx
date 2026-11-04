import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import facebook from '../assets/socialmedia/facebook.webp'
import LinkedIn from '../assets/socialmedia/Linkedin.png'
import Youtube from '../assets/socialmedia/youtubre.png'
import googleScholar from '../assets/academic/google-scholar.ico'
import orcid from '../assets/academic/orcid.ico'
import vidwan from '../assets/academic/vidwan.png'
import webOfScience from '../assets/academic/web-of-science.ico'
import SectionHeading from "./ui/SectionHeading";

const academicProfiles = [
  {
    name: "Google Scholar",
    url: "https://scholar.google.co.in/citations?hl=en&user=tUOehagAAAAJ",
    icon: googleScholar,
  },
  {
    name: "ORCID",
    url: "https://orcid.org/0000-0002-9683-539X",
    icon: orcid,
  },
  {
    name: "Scopus",
    url: "https://www.scopus.com/authid/detail.uri?authorId=55320299500",
    iconText: "SC",
  },
  {
    name: "VIDWAN",
    url: "https://vidwan.inflibnet.ac.in/profile/130883",
    icon: vidwan,
  },
  {
    name: "Clarivate",
    url: "https://www.webofscience.com/wos/author/rid/T-4171-2017",
    icon: webOfScience,
  },
];

const socialProfiles = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mahmadasraf-mulla-861b5a18b/",
    icon: LinkedIn,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com",
    icon: Youtube,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: facebook,
  },
];

function AcademicProfiles() {
  return (
    <>
      {/* Academic & Social Profiles */}
      <section className="lab-section lab-section--dark">
        <div className="lab-container">

          {/* Heading */}
          <SectionHeading
            eyebrow="Connect & explore"
            title="Academic & social profiles"
            description="Explore Dr. Mulla's academic work, research profiles and professional presence across various platforms."
          />


          {/* Academic Profiles */}
          <div className="mt-12">

            <div className="mb-5 flex items-center gap-3">
              <GraduationCap aria-hidden="true" className="h-5 w-5 text-teal-700" />

              <h3 className="text-lg font-semibold text-slate-900">
                Academic Profiles
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {academicProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url || "#"}
                  target={profile.url ? "_blank" : undefined}
                  rel={profile.url ? "noopener noreferrer" : undefined}
                  className="profile-card group lab-surface-dark flex items-center justify-between p-5"
                >
                  <span className="flex items-center gap-3 font-medium text-slate-800">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-white/95">
                      {profile.iconText ? (
                        <span aria-hidden="true" className="grid h-5 w-5 place-items-center rounded-sm bg-[#f36b21] text-[8px] font-bold leading-none text-white">
                          {profile.iconText}
                        </span>
                      ) : (
                        <img alt="" aria-hidden="true" className={`${profile.iconClassName ?? "h-5 w-5"} object-contain`} src={profile.icon} />
                      )}
                    </span>
                    {profile.name}
                  </span>

                  <ExternalLink
                    className="h-4 w-4 text-slate-400 transition group-hover:text-teal-700"
                  />
                </a>
              ))}

            </div>
          </div>


          {/* Social Profiles */}
          <div className="mt-14">

            <div className="mb-5">
              <h3 className="text-lg font-semibold text-slate-900">
                Social & Professional
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">

              {socialProfiles.map((profile) => {
                return (
                  <a
                    key={profile.name}
                    href={profile.url || "#"}
                    target={profile.url ? "_blank" : undefined}
                    rel={profile.url ? "noopener noreferrer" : undefined}
                    className="social-profile-card flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    <img src={profile.icon}
                    alt={`${profile.name} logo`}
                    className="h-5 w-5 object-contain"
                    />
                    {profile.name}
                  </a>
                );
              })}

            </div>
          </div>

        </div>
      </section>


      {/* Contact */}
      <section className="lab-section lab-section--mist scroll-mt-24" id="contact">
        <div className="lab-container">

          <div className="grid gap-12 md:grid-cols-2">

            {/* Contact Introduction */}
            <SectionHeading
              eyebrow="Contact"
              title="Get in touch."
              description="For academic collaborations, research enquiries, student guidance and other professional communication, please use the contact information below."
            />


            {/* Contact Details */}
            <div className="lab-surface space-y-6 p-7 md:p-8">

              <div className="flex gap-4">
                <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-teal-700" />

                <div>
                  <p className="font-medium text-slate-900">
                    Department of Electrical Engineering
                  </p>

                  <p className="mt-1 leading-7 text-slate-600">
                    S. V. National Institute of Technology
                    <br />
                    Surat - 395007, Gujarat, India
                  </p>
                </div>
              </div>


              <div className="flex gap-4">
                <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-teal-700" />

                <div>
                  <p className="font-medium text-slate-900">
                    Email
                  </p>

                  <div className="mt-1 space-y-1">
                    <a
                      href="mailto:mamulla@ieee.org"
                      className="block text-slate-600 transition hover:text-teal-800"
                    >
                      mamulla@ieee.org
                    </a>

                    <a
                      href="mailto:mam@eed.svnit.ac.in"
                      className="block text-slate-600 transition hover:text-teal-800"
                    >
                      mam@eed.svnit.ac.in
                    </a>

                    <a
                      href="mailto:asraf.mulla@gmail.com"
                      className="block text-slate-600 transition hover:text-teal-800"
                    >
                      asraf.mulla@gmail.com
                    </a>
                  </div>
                </div>
              </div>


              <div className="flex gap-4">
                <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-teal-700" />

                <div>
                  <p className="font-medium text-slate-900">
                    Phone
                  </p>

                  <a className="mt-1 block text-slate-600 transition hover:text-teal-800" href="tel:+912612201581">
                    0091-261-2201581
                  </a>

                  <a className="block text-slate-600 transition hover:text-teal-800" href="tel:+919825113488">
                    0091-98251-13488
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default AcademicProfiles;
