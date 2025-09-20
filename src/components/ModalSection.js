import React from "react";

const ModalSection = ({ closeModal, modalProject }) => {
    return <section id="projectModal" className="model" style={{ display: 'block' }}>
        <div className="uytgs">
            <div className="modal-content">
                <div className="top">
                    <span className="modal-close" onClick={closeModal} style={{ cursor: 'pointer' }}>&times;</span>
                    <div className="modal-header">
                        <h3 id="modalTitle">{modalProject.title}</h3>
                    </div>
                </div>
                <div className="modal-body">
                    <p id="modalDescription">{modalProject.description}</p>
                    <div id="modalImage">
                        {modalProject.images && modalProject.images.map((img, i) => (
                            <img key={i} src={img} alt="Project" style={{ maxWidth: '100%', marginBottom: 8 }} />
                        ))}
                    </div>
                    <div className="tags" style={{ marginTop: 12 }}>
                        {modalProject.tags && modalProject.tags.map((tag, i) => (
                            <span key={i} style={{ marginRight: 8 }}>{tag}</span>
                        ))}
                        {modalProject.link && (
                            <a href={modalProject.link.url} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8 }}>
                                {modalProject.link.text}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
};

export default ModalSection;
