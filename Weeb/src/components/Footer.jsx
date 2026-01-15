export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-15 md:px-6 py-14">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 pb-10">weeb</h2>
        </div>
        <div className="flex flex-col gap-10 sm:grid grid-cols-2 md:grid-cols-5">
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Pricing</li>
              <li>Overview</li>
              <li>Browse</li>
              <li>Accessibility</li>
              <li>Five</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              Solutions
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Brainstorming</li>
              <li>Ideation</li>
              <li>Wireframing</li>
              <li>Research</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Help Center</li>
              <li>Blog</li>
              <li>Tutorials</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>About</li>
              <li>Press</li>
              <li>Events</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2025 Weeb, Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <img src="youtube.png" alt="youtube" />
            <img src="facebook.png" alt="facebook" />
            <img src="twitter.png" alt="twitter" />
            <img src="instagram.png" alt="instagram" />
            <img src="linkedin.png" alt="linkedin" />
          </div>
        </div>
      </div>
    </footer>
  );
}
