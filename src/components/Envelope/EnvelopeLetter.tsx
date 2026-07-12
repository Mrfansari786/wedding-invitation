import { motion } from "framer-motion";

type Props={
    opened:boolean
}

export default function EnvelopeLetter({opened}:Props){

return(

<motion.div

animate={{

    y:opened?-120:0,

    scale:opened?1.05:1

}}

transition={{

duration:1

}}

className="absolute left-1/2 top-8 w-64 h-40 -translate-x-1/2 rounded-md bg-white shadow-2xl"

>

<div className="h-full flex flex-col items-center justify-center">

<p className="tracking-[5px] text-gray-400">

Wedding Invitation

</p>

<h2 className="mt-5 text-4xl text-[#D4AF37]">

M ❤ M

</h2>

</div>

</motion.div>

)

}