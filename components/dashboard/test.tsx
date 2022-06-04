import {useState} from 'react';

interface Props {
    children(closeModal, openModal): React.ReactNode;
}

const Modal: React.FC<Props> = ({children}) => {
    const [open, setOpen] = useState();

    const closeModal = setOpen(false);
    const openModal = setOpen(true);

    return (
        <div>
            {children(closeModal, openModal)}
        </div>
    )
}


const Home = ({name}) => {
    return (
        <Modal>
            {(closeModal, openModal) => (
                <button onClick={closeModal}></button>
            )}
        </Modal>
    )
}
