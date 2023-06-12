import React from 'react'
import mount_hotels from "./Assets/bg_less_images/mount_hotels.png"
import mayfair from "./Assets/bg_less_images/mayfair.png"
import waxpol from "./Assets/bg_less_images/waxpol.png"
import young_indians from "./Assets/bg_less_images/young_indians.png"
import army from "./Assets/bg_less_images/army.png"
import blockchain_productivity from "./Assets/bg_less_images/blockchain_productivity.png"
import entrepreneurs from "./Assets/bg_less_images/entrepreneurs.png"
import metamorphosis from "./Assets/bg_less_images/metamorphosis.png"
import round_table_india from "./Assets/bg_less_images/round_table_india.png"
import champagnat from "./Assets/bg_less_images/champagnat.png"
import aualcpi from "./Assets/bg_less_images/aualcpi.png"
import iiit from "./Assets/bg_less_images/iiit.png"
import indian_railway from "./Assets/indian_railway.png"
import summit from "./Assets/bg_less_images/summit.png"
import purvanchal from "./Assets/bg_less_images/purvanchal.png"
import QuillAudits from "./Assets/bg_less_images/QuillAudits.png"
import { motion } from 'framer-motion';
import './Partner.css'

export const Partners = () => {
    const imageAnimation = {
        offscreen: { x: 100 },
        offscreen2: { x: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2
            }
        },
        onscreen2: {
            x: 100,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2
            }
        }
    };

    return (
        <div className='roadmappage'>
            <div className='heading'>Partners</div>

            <div className='qbox'>
                <motion.div
                    variants={imageAnimation}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <div class="card2">
                        <img src={mount_hotels} alt="Avatar" style={{ width: "175px", height: "175px", filter: 'invert(100%)' }} />
                    </div>
                </motion.div>

                <motion.div
                    variants={imageAnimation}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <div class="card2">
                        <img src={mayfair} alt="Avatar" style={{ width: "200px", height: "200px" }} />
                    </div>
                </motion.div>

                <motion.div
                    variants={imageAnimation}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <div class="card2">
                        <img src={waxpol} alt="Avatar" style={{ width: "200px", height: "200px" }} />
                    </div>
                </motion.div>

                <motion.div
                    variants={imageAnimation}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <div class="card2">
                        <img src={young_indians} alt="Avatar" style={{ width: "200px", height: "200px" }} />
                    </div>
                </motion.div>

                <motion.div
                    variants={imageAnimation}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <div class="card2">
                        <img src={army} alt="Avatar" style={{ width: "180px", height: "180px" }} />
                    </div>
                </motion.div>

                <motion.div
                    variants={imageAnimation}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <div class="card2" style={{ padding: '5px' }}>
                        <img src={blockchain_productivity} alt="Avatar" style={{ width: "195px", height: "180px" }} />
                    </div>
                </motion.div>

                <motion.div
                    variants={imageAnimation}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <div class="card2">
                        <img src={entrepreneurs} alt="Avatar" style={{ width: "200px", height: "200px" }} />
                    </div>
                </motion.div>

                <motion.div
                    variants={imageAnimation}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <div class="card2">
                        <img src={metamorphosis} alt="Avatar" style={{ width: "200px", height: "200px", filter: 'invert(100%)' }} />
                    </div>
                </motion.div>

                <motion.div
                    variants={imageAnimation}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <div class="card2">
                        <img src={round_table_india} alt="Avatar" style={{ width: "185px", height: "185px" }} />
                    </div>
                </motion.div>

                <motion.div
                    variants={imageAnimation}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.5 }}
                >

                    <div class="card2">
                        <img src={champagnat} alt="Avatar" style={{ width: "200px", height: "200px" }} />
                    </div>
                </motion.div>

                <motion.div
                    variants={imageAnimation}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <div class="card2">
                        <img src={aualcpi} alt="Avatar" style={{ width: "200px", height: "200px", aspectRatio: '3/2', objectFit: 'contain' }} />
                    </div>
                </motion.div>

                <motion.div
                    variants={imageAnimation}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <div class="card2">
                        <img src={iiit} alt="Avatar" style={{ width: "180px", height: "180px" }} />
                    </div>
                </motion.div>

                <motion.div
                    variants={imageAnimation}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <div class="card2">
                        <img src={indian_railway} alt="Avatar" style={{ width: "170px", height: "170px" }} />
                    </div>
                </motion.div>

                <motion.div
                    variants={imageAnimation}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <div class="card2">
                        <img src={summit} alt="Avatar" style={{ width: "200px", height: "200px", filter: 'invert(100%)' }} />
                    </div>
                </motion.div>

                <motion.div
                    variants={imageAnimation}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <div class="card2">
                        <img src={purvanchal} alt="Avatar" style={{ width: "190px", height: "190px" }} />
                    </div>
                </motion.div>

                <motion.div
                    variants={imageAnimation}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <div class="card2">
                        <img src={QuillAudits} alt="Avatar" style={{ width: "200px", height: "200px", filter: 'invert(100%)' }} />
                    </div>
                </motion.div>
            </div >
        </div >
    )
}
