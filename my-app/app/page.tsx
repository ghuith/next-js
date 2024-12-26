export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur mon Portfolio</h1>
        <p className="text-xl text-gray-600">
          Développeur Full Stack 
        </p>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-black p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Mes Compétences</h2>
          <ul className="space-y-2">
            <li>• React & Next.js</li>
            <li>• TypeScript</li>
            <li>• Tailwind CSS</li>
            <li>• Node.js</li>
          </ul>
        </div>
        
        <div className="bg-red-700 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Projets Récents</h2>
          <ul className="space-y-2">
            <li>• E-commerce - Next.js </li>
            <li>•  React </li>
            <li>• API REST - Node.js & Express</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
