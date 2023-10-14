import Image from 'next/image';
import React from 'react';
import NextImage from '@/assets/images/nextjs3.webp'

const Album = () => {
    return (
        <div>
            <div>
                <h1>This image using img tag</h1>       
                <img src="https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp" alt="" width='100%'/>
            </div>

            <div>
                <h1>This image using next js Image tag</h1>
                <Image src="https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp" 
                width={500} 
                height={500}
                layout='responsive'
                />
            </div>

            <div>
                <h1>Local image</h1>
                <Image src={NextImage}/>
            </div>
        </div>
    );
};

export default Album;