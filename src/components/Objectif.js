export default function Objectif({ objectif, onEdit, onDelete }) {
  return <div className="p-4 border border-gray-200 rounded-lg flex flex-row items-center gap-6 justify-between hover:border-blue-400 transition-colors">
    <div className="flex flex-row items-center gap-6 flex-1">
        <div>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        </div>
        <div>
            <h2 className="text-xl font-semibold">{objectif.title}</h2>
            <p className="text-gray-600">{objectif.description}</p>
        </div>
    </div>
    <div className="flex flex-row items-center gap-2">
        <button onClick={onEdit} title="Modifier l'objectif" className="hover:bg-blue-100 p-2 rounded transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 hover:text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" clipRule="evenodd" />
            </svg>
        </button>
        <button onClick={onDelete} title="Supprimer l'objectif" className="hover:bg-red-100 p-2 rounded transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 hover:text-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2h12a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM5 8a1 1 0 011 1v6a1 1 0 11-2 0V9a1 1 0 011-1zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V9a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
        </button>
    </div>
  </div>;
}