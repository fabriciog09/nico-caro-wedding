import { motion, AnimatePresence } from 'framer-motion'
import { HiXMark } from 'react-icons/hi2'
import type { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode
  onClose: () => void
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <HiXMark />
          </button>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

