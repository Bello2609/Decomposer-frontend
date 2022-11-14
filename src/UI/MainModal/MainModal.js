import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from "@chakra-ui/react";
const MainModal = ({children, open, close})=>{
   
    
    return (
        <>
            <Modal isOpen={open} onClose={close}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody>
                            {children}
                        </ModalBody>
                    </ModalContent>
                </Modal>
        </>
    );
}
export default MainModal;