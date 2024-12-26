export default function Contact() {
    return (
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Nom
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Envoyer
          </button>
        </form>
      </div>
    )
  }