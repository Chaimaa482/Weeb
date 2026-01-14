export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 text-center mt-20">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Explorez le <span className="text-purple-400 font-normal">Web</span>{' '}
          sous toutes <br />
          ses{' '}
          <span className="relative inline-block">
            facettes
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-purple-500 rounded-full"></span>
          </span>
        </h1>

        <p className="mt-8 text-gray-400 max-w-3xl mx-auto">
          Le monde du web évolue constamment, et nous sommes là pour vous guider
          à travers ses tendances, technologies et meilleures pratiques. Que
          vous soyez développeur, designer ou passionné du digital, notre blog
          vous offre du contenu de qualité pour rester à la pointe.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-purple-600 cursor-pointer hover:bg-purple-700 transition px-6 py-3 rounded-lg font-medium">
            Découvrir les articles
          </button>
          <button className="border border-white cursor-pointer transition px-6 py-3 rounded-lg font-medium">
            S'abonner à la newsletter
          </button>
        </div>
      </section>
      <div className="relative shadow-2xl overflow-hidden max-w-6xl mx-auto px-6 mt-20">
        <img
          src="FirstPreview.png"
          alt="App preview"
          className="w-full object-cover"
        />
      </div>

      {/* TRUSTED BY */}
      <section className="max-w-6xl mx-auto px-6 mt-20 text-center">
        <h2 className="font-semibold mb-15 text-5xl">
          Ils nous font confiance
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center text-gray-400">
          <img
            src="SmartFinder.png"
            alt="SmartFinder"
            className="mx-auto h-6"
          />
          <img src="Zoomerr.png" alt="Zoomerr" className="mx-auto h-6" />
          <img src="Shells.png" alt="Shells" className="mx-auto h-6" />
          <img src="Waves.png" alt="Waves" className="mx-auto h-6" />
          <img src="ArtVenue.png" alt="ArtVenue" className="mx-auto h-6" />
        </div>
      </section>

      {/* LEARN & PROGRESS */}
      <section className="max-w-7xl mx-auto px-6 mt-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-ms uppercase tracking-widest text-white mb-3">
            Des ressources pour tous les niveaux
          </p>

          <h2 className="text-5xl font-extrabold mb-6 max-w-lg">
            <span className="text-purple-400">Apprenez</span> et{' '}
            <span className="text-purple-400">progressez</span>
          </h2>

          <p className="text-gray-400 max-w-lg mb-6">
            Que vous débutiez en développement web ou que vous soyez un expert
            cherchant à approfondir vos connaissances, nous vous proposons des
            tutoriels, guides et bonnes pratiques adaptés à votre niveau.
          </p>

          <button className="text-white font-medium hover:underline cursor-pointer">
            Explorer les ressources →
          </button>
        </div>

        <div className="rounded-xl overflow-hidden shadow-xl">
          <img
            src="SecondPreview.png"
            alt="Learning preview"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* STAY INFORMED */}
      <section className="max-w-7xl mx-auto px-6 mt-32 mb-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center">
          <img
            src="Shapes.png"
            alt="Abstract graphic"
            className="w-72 md:w-96"
          />
        </div>

        <div>
          <p className="text-ms uppercase tracking-widest text-white mb-3">
            Le web, un écosystème en constante évolution
          </p>

          <h2 className="text-5xl font-extrabold mb-6">
            Restez informé des dernières{' '}
            <span className="text-purple-400">tendances</span>
          </h2>

          <p className="text-gray-400 max-w-lg mb-6">
            Chaque semaine, nous analysons les nouveautés du web, frameworks
            émergents, bonnes pratiques SEO et accessibilité.
          </p>

          <button className="text-white font-medium hover:underline cursor-pointer">
            Lire les articles récents →
          </button>
        </div>
      </section>
    </>
  );
}
