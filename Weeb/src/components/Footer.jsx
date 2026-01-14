export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Logo */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">weeb</h2>
          </div>

          {/* Product */}
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

          {/* Solutions */}
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

          {/* Resources */}
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

          {/* Company */}
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

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2025 Weeb, Inc. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-5 text-gray-500">
            <img className="hover:text-gray-900 cursor-pointer" src="youtube.png" alt="youtube"></img>
            <img className="hover:text-gray-900 cursor-pointer" src="facebook.png" alt="facebook"></img>
            <img className="hover:text-gray-900 cursor-pointer" src="twitter.png" alt="twitter"></img>
            <img className="hover:text-gray-900 cursor-pointer" src="instagram.png" alt="instagram"></img>
            <img className="hover:text-gray-900 cursor-pointer" src="linkedin.png" alt="linkedin"></img>
          </div>
        </div>
      </div>
    </footer>
  );
}
