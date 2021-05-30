import React from 'react'
import {useState} from 'react';
import { motion } from "framer-motion"
function Sidebar() {

    const [isOpen, setIsOpen] = useState(false)
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }
    return (
        <div>
            <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <Toggle onClick={() => setIsOpen(isOpen => !isOpen)} />
      <Items />
    </motion.nav>
        </div>
    )
}
export default Sidebar;
