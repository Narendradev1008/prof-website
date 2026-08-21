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

const academicProfiles = [
  {
    name: "Google Scholar",
    url: "https://scholar.google.co.in/citations?hl=en&user=tUOehagAAAAJ",
  },
  {
    name: "ORCID",
    url: "https://orcid.org/0000-0002-9683-539X",
  },
  {
    name: "Scopus",
    url: "https://www.scopus.com/authid/detail.uri?authorId=55320299500",
  },
  {
    name: "VIDWAN",
    url: "https://vidwan.inflibnet.ac.in/profile/130883",
  },
  {
    name: "clarivate",
    url: "https://www.webofscience.com/wos/author/rid/T-4171-2017",
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
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">

          {/* Heading */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Connect & Explore
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Academic & Social Profiles
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Explore Dr. Mulla's academic work, research profiles and
              professional presence across various platforms.
            </p>
          </div>


          {/* Academic Profiles */}
          <div className="mt-12">

            <div className="mb-5 flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-slate-600" />

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
                  className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
                >
                  <span className="font-medium text-slate-800">
                    {profile.name}
                  </span>

                  <ExternalLink
                    className="h-4 w-4 text-slate-400 transition group-hover:text-slate-700"
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
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
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
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">

          <div className="grid gap-12 md:grid-cols-2">

            {/* Contact Introduction */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Contact
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Get in touch
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-600">
                For academic collaborations, research enquiries,
                student guidance and other professional communication,
                please use the contact information below.
              </p>
            </div>


            {/* Contact Details */}
            <div className="space-y-6">

              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-slate-500" />

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
                <Mail className="mt-1 h-5 w-5 shrink-0 text-slate-500" />

                <div>
                  <p className="font-medium text-slate-900">
                    Email
                  </p>

                  <div className="mt-1 space-y-1">
                    <a
                      href="mailto:"
                      className="block text-slate-600 hover:text-slate-900"
                    >
                      mamulla@ieee.org
                    </a>

                    <a
                      href="mailto:"
                      className="block text-slate-600 hover:text-slate-900"
                    >
                      mam@eed.svnit.ac.in
                    </a>

                    <a
                      href="mailto:"
                      className="block text-slate-600 hover:text-slate-900"
                    >
                      asraf.mulla@gmail.com
                    </a>
                  </div>
                </div>
              </div>


              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-slate-500" />

                <div>
                  <p className="font-medium text-slate-900">
                    Phone
                  </p>

                  <p className="mt-1 text-slate-600">
                    0091-261-2201581
                  </p>

                  <p className="text-slate-600">
                    0091-98251-13488
                  </p>
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