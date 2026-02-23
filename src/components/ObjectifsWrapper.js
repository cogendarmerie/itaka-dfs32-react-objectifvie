import { useState } from "react";
import Objectif from "./Objectif";
import ModalEdition from "./ModalEdition";

export default function ObjectifsWrapper() {
    const [objectifs, setOjectifs] = useState([
        {
            id: 1,
            title: "Apprendre React",
            description: "Je veux apprendre React pour pouvoir créer des applications web modernes."
        }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleEdit = (index) => {
        setEditingIndex(index);
        setShowModal(true);
    };

    const handleDelete = (index) => {
        setOjectifs(objectifs.filter((_, i) => i !== index));
    };

    const handleSaveEdit = (updatedObjectif) => {
        const newObjectifs = [...objectifs];
        newObjectifs[editingIndex] = updatedObjectif;
        setOjectifs(newObjectifs);
        setShowModal(false);
        setEditingIndex(null);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingIndex(null);
    };

    const handleAddObjective = () => {
        if (!newTitle.trim()) return;
        const newObj = {
            id: Date.now(),
            title: newTitle.trim(),
            description: newDescription.trim()
        };
        setOjectifs([...objectifs, newObj]);
        setNewTitle('');
        setNewDescription('');
    };

    return <div>
        <header className="py-4 px-8">
            <div>
                <h1 className="text-2xl font-bold">Mes objectifs</h1>
            </div>
        </header>
        <section className="py-4 px-8">
            <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-2 items-start">
                <input
                    type="text"
                    placeholder="Titre de l'objectif"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="col-span-1 md:col-span-1 px-3 py-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Description (optionnel)"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    className="col-span-1 md:col-span-1 px-3 py-2 border rounded"
                />
                <div className="col-span-1 md:col-span-1 flex gap-2">
                    <button
                        onClick={handleAddObjective}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Ajouter
                    </button>
                </div>
            </div>
            <div className="space-y-4">
                { objectifs.map((objectif, index) => <Objectif key={objectif.id} objectif={objectif} onEdit={() => handleEdit(index)} onDelete={() => handleDelete(index)} /> ) }
            </div>
        </section>
        {showModal && editingIndex !== null && <ModalEdition objectif={objectifs[editingIndex]} onSave={handleSaveEdit} onClose={handleCloseModal} />}
    </div>
}