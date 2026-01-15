function Contact() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-15 md:px-6  text-center m-20">
        {/* Header */}
        <div className="mb-12 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Votre avis compte !
          </h1>
          <p className="mt-8 text-gray-400 max-w-3xl mx-auto">
            Votre retour est essentiel pour nous améliorer ! Partagez votre
            expérience, dites-nous ce que vous aimez et ce que nous pourrions
            améliorer. Vos suggestions nous aident à faire de ce blog une
            ressource toujours plus utile et enrichissante.
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto max-w-2xl rounded-xl p-10 bg-linear-to-br from-[#1a1f3c] to-[#151a33] shadow-xl border border-purple-400 ">
          <form className="grid grid-cols-2 gap-6 text-left">
            <div>
              <label className="block text-purple-300 text-sm mb-2">Nom</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-purple-400 text-white focus:outline-none focus:border-purple-600"
              />
            </div>

            <div>
              <label className="block text-purple-300 text-sm mb-2">
                Prénom
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-purple-400 text-white focus:outline-none focus:border-purple-600"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-purple-300 text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-purple-400 text-white focus:outline-none focus:border-purple-600"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-purple-300 text-sm mb-2">
                Message
              </label>
              <textarea
                rows={3}
                className="w-full bg-transparent border-b border-purple-400 text-white focus:outline-none focus:border-purple-600"
              />
            </div>

            <div className="col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-md transition"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
