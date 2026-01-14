function Signup() {

  return (
  <>
        <section className="max-w-5xl mx-auto px-6 text-center m-20">

          {/* Header */}
          <div className="mb-12 rounded-lg">
            <h1 className="text-6xl font-bold text-white mb-4">
              Créer un compte
            </h1>
          </div>

          {/* Form */}
          <div className="mx-auto max-w-2xl rounded-xl p-10 bg-linear-to-br from-[#1a1f3c] to-[#151a33] shadow-xl border border-purple-400 ">
            <form className="grid grid-cols-2 gap-6 text-left">

             <div className="col-span-2">
                <label className="block text-purple-300 text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-purple-400 text-white focus:outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-purple-300 text-sm mb-2">Password</label>
                <input
                  type="password"
                  className="w-full bg-transparent border-b border-purple-400 text-white focus:outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-purple-300 text-sm mb-2">Confirm password</label>
                <input
                  type="password"
                  className="w-full bg-transparent border-b border-purple-400 text-white focus:outline-none focus:border-purple-600"
                />
              </div>

              <div className="col-span-2 flex justify-center mt-6">
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-md transition"
                >
                  Sign up
                </button>
              </div>

            </form>
          </div>
                      <p className="text-gray-400 p-10 ">Vous avez déjà un compte? Vous pouvez vous connecter.</p>

        </section>
      </>
    
  )
}

export default Signup