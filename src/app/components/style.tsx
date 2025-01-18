import Link from "next/link";
import Image from "next/image";


export default function Style() {
    return ( 
        <section>
            <div className="w[1920] h[full]">

                    <div className="flex gap-5 px-10 sm:px-20 lg:px-48 pt-20 pb-5">
                    <div className="pt-10">
                    <Image src="/img-9.png" alt="img" width={14} height={300}/>
                    </div>
                    <div>
                    <Image src="/img-4.png" alt="img" width={420} height={300}/>
                    </div>

                    <div>
                    <Image src="/img-5.png" alt="img" width={200} height={140}/>
                    <Image src="/img-10.png" alt="img" width={200} height={140} className="pt-5 rounded-md"/>
                    </div>

                    <div>
                    <Image src="/img-2.png" alt="img" width={200} height={140}/>
                    <Image src="/img-2.png" alt="img" width={200} height={140} className="pt-5"/>
                    </div>
                    </div>


            </div>
        </section>
    )
}