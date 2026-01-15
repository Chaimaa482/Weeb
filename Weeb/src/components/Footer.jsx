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
              Produit
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Tarifs</li>
              <li>Présentation</li>
              <li>Parcourir</li>
              <li>Accessibilité</li>
              <li>Cinq</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              Solutions
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Brainstorming</li>
              <li>Idéation</li>
              <li>Maquettage</li>
              <li>Recherche</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              Ressources
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Centre d’aide</li>
              <li>Blog</li>
              <li>Tutoriels</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              Entreprise
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>À propos</li>
              <li>Press</li>
              <li>Événements</li>
              <li>Carrières</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2025 Weeb, Inc. Tous droits réservés.
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
